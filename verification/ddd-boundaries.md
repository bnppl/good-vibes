---
title: "DDD Boundaries"
parent: "Verification"
nav_order: 5
last_updated: 2026-05-06
last_read: null
status: unread
---

One bounded context, one agent session, one blast radius. That is the whole thesis of this session, and everything below is in service of it. If you align the seams of your codebase with the seams of your agent workflow, the verification problems Module 4 has been circling get dramatically cheaper to solve. If you don't, no amount of contract testing or fitness-function tooling will save you from sessions that quietly chew through each other's invariants.

This is **Domain-Driven Design** repurposed as agent-topology design. The same primitives Eric Evans introduced in 2003 to manage human team boundaries — bounded contexts, context maps, aggregates, ubiquitous language — turn out to be exactly the primitives needed to manage agent session boundaries. The boundary problem hasn't changed; the entities crossing it have. In 2026, the most useful framing of DDD is not "a methodology for modeling complex domains" but "a methodology for deciding where one mind ends and another begins."

## Bounded Contexts as Session Boundaries

A **bounded context** in classical DDD is a region of the system inside which a model is internally consistent: terms have a single meaning, invariants hold, and the domain language is unambiguous. Outside the boundary, the same word may mean something different — `Customer` in Billing is not `Customer` in Shipping — and that's fine, as long as the boundary is explicit.

An agent session has remarkably similar properties. It has a limited context window, a limited working memory, and — most importantly — a limited **ubiquitous-language vocabulary** that it carries from the prompts, files, and conversation it has loaded. When you ask one session to span two domains, you're asking the model to keep two ubiquitous languages coherent in the same window. It can do this for short stretches; it cannot do it reliably across a long task.

Map one session to one bounded context and the model's cognitive surface aligns with the architecture's natural seam. Cross-context calls then become **explicit** — forced through declared integrations the agent has to look up — rather than **accidental**, the kind that happen when an agent thinks "while I'm here, I'll just touch this other module." Nikita Golovko's GitNation talk *From Prompt Spaghetti to Bounded Contexts* (2026) makes this mapping the central recommendation: bounded contexts become the agent's responsibility scope, and the context map becomes the explicit cross-agent integration surface.

The analogy worth holding in your head: a bounded context is to an agent session what a microservice is to a team. Both are units of independent reasoning with a published contract at the edge. Both fail the same way when the boundary leaks — through coupling that wasn't supposed to exist, discovered only when somebody changes one side and breaks the other.

## Context Maps as Cross-Session Artifacts

Sessions end. The model forgets. What survives is the **context map** — the document that tells the next session which contexts exist, where their boundaries run, and how they relate. This is the artifact that turns DDD from an in-session modeling exercise into a cross-session verification primitive.

The relationship vocabulary from Evans is still the right vocabulary, even with agents on the other side of the keyboard: **Customer/Supplier** (one context's output is another's input, with an upstream/downstream power dynamic), **Conformist** (downstream just accepts whatever upstream gives it), **Anti-Corruption Layer** (downstream wraps upstream's model to translate it into its own language), **Shared Kernel** (two contexts deliberately share a small subset of their model), **Published Language** (a stable schema both sides agree on), **Open Host Service** (an upstream context offers a generic protocol for many downstreams).

Store the map somewhere the next session will actually find it. `docs/context-map.md` or a context-map section inside `ARCHITECTURE.md` works. Then reference it from `AGENTS.md` / `CLAUDE.md` so it loads at session start. Bardia Khosravi's 2026 piece on backend coding rules for AI agents is concrete about this: the rules file should pin the agent to specific contexts, name the layers it's allowed to touch, and call out the integrations that require an ACL. Without that pin, the agent treats the whole repo as one context — which is exactly the failure mode the map exists to prevent.

This is the structural fix for the handoff problem [characterization-and-handoff](characterization-and-handoff.md) will pick up later: the next session inherits a map, not a memory. And it sets up [contract-testing](contract-testing.md) directly — every relationship on the map (especially ACLs and Published Languages) needs a test that fails when the contract drifts. The map declares the seam; the contract test enforces it.

## Aggregates and Invariants as Testable Constraints

An **aggregate** is the unit of consistency: a cluster of objects treated as a single whole for the purposes of data changes, with one entity (the aggregate root) acting as the gateway. The classical reason to use aggregates is transactional — you load and save them atomically. The agent-era reason is verification: aggregates are where you encode invariants that **the agent cannot violate even if it tries**.

If `LineItem` raises in its constructor when `quantity <= 0`, then "negative quantity slipped into the order" is no longer a bug an agent could introduce. It's an unrepresentable state across every session that touches the order domain. The same goes for `Order.addLineItem` rejecting items from a different currency, or `Shipment.markDelivered` refusing to fire if the shipment has no carrier assigned. The invariants live in the code that constructs and mutates the aggregate; they do not live in PR-review discipline, in a checklist somewhere, or in the hope that the next session will read the same scenarios you read.

Contrast this with the alternative: invariants enforced socially. Reviewer notices the violation, asks for a change, agent fixes it, ships. This works exactly as long as the reviewer is paying attention. Across many sessions and many reviewers, the failure rate compounds. An aggregate-level invariant has a failure rate of zero — it is a deterministic gate, the same kind of gate [cross-session-regression](cross-session-regression.md) argued the entire verification stack needs more of.

A useful rule: if you find yourself writing a comment like "// must be positive" or a docstring saying "callers must ensure X before calling Y," promote the constraint into the aggregate. Comments don't survive sessions. Constructors do. The aggregate is the most durable place in the codebase to put a rule, because the type system and the runtime both enforce it without anyone — human or agent — having to remember.

## Ubiquitous Language as a Context-Engineering Primitive

The single highest-ROI artifact a team can produce in 2026 is a **glossary**. Not a wiki page nobody reads — a glossary that lives next to the code, gets loaded by the instruction layer ([instruction-layer](../context-engineering/instruction-layer.md)) at session start, and is the source of truth for the domain vocabulary the agent and the humans both use.

Ubiquitous language was always Evans's deepest idea: the words the domain expert uses, the words the code uses, and the words the conversation uses should be the same words. With agents in the loop, this stops being a quality-of-life nicety and becomes a hard constraint on session coherence. When the domain model, code identifiers, Gherkin scenarios ([bdd-for-agents](bdd-for-agents.md)), and human conversation all use the same terms, the agent has no room to invent synonyms. When they diverge, the agent will paper over the divergence by guessing — and its guesses are plausible, locally consistent, and wrong.

The dev.to "DDD in the AI-Driven Era" post (2025, AWS Heroes) puts the case bluntly: DDD vocabulary is *more* valuable in the AI era because agents need explicit ubiquitous-language anchors to stay on the rails. The DDD Academy's 2025 piece on strategic design with LLMs goes a step further and uses the agent itself to *discover* the language during event-storming workshops, then locks the result into the glossary. Either direction works; what doesn't work is leaving the language implicit.

The [Bardia Khosravi piece on backend coding rules for AI agents](https://medium.com/@bardia.khosravi/backend-coding-rules-for-ai-coding-agents-ddd-and-hexagonal-architecture-ecafe91c753f) (2026) gives a concrete example of what a DDD-flavored AGENTS.md-style document looks like: each entry ties a domain term to its code location and the layer constraints that apply to it. Entries like "Order (aggregate): `domain/orders/Order.ts`, no infrastructure imports" and "PaymentGateway (port): `domain/payments/PaymentGateway.ts`, implemented only in `infrastructure/`" give the agent the vocabulary and the layer rules in a single line. Worth lifting the format directly for your own codebase.

This ties directly to the knowledge layer ([knowledge-layer](../context-engineering/knowledge-layer.md)). The glossary is not just documentation — it is the index. When the agent is looking for "the thing that handles refunds," the term it searches for had better be the term in the code. Otherwise it finds nothing and confidently writes a parallel implementation.

## Conway's Law for Agent Topology

Conway's Law: systems mirror the communication structures of the organizations that build them. The agent corollary is a single sentence worth tattooing on the inside of your monitor: **codebases mirror the session boundaries used to build them.**

Every session is a communication structure of one. Each session has its own loaded context, its own working set of files, its own implicit theory of what the system is about. The code that comes out of a session is shaped by that boundary whether you chose it or not. Bounded contexts are the deliberate version of choosing your session boundaries; ad-hoc session splits ("let's just have it do this real quick") are the accidental version.

The **inverse Conway maneuver** — deliberately choosing an organizational structure to produce a target architecture — has a direct agent analog: choose your session boundaries to produce your target bounded-context decomposition. If you want `billing` and `identity` to be separate bounded contexts with a clean anti-corruption layer between them, never run a session that spans both. The session boundary enforces the architectural boundary. A session that "just grabs the user's email from the identity service while we're here" is how the ACL collapses and the vocabulary pollutes.

If you don't choose, the codebase will reveal your sessions anyway. It will show up as inconsistency between modules that should look the same, duplication where one session didn't know the other had already solved a problem, and uncoordinated rewrites where two sessions independently decided the existing approach was wrong. The DZone piece on *Designing Scalable Multi-Agent AI Systems with DDD + Event Storming* (2026) makes the multi-agent version of this argument: bounded-context decomposition is the only thing that lets agents be parallelized without their work colliding. The single-developer-many-sessions case is the same problem at a smaller scale.

## Traps

- **Over-fragmentation.** Every module declared a bounded context; ACLs everywhere; coordination cost explodes. The agent now spends its context window translating between five micro-vocabularies that should have been one. Bounded contexts are expensive — use them where the language genuinely diverges, not as a default.
- **Stale context map.** The map gets written once during the architecture sprint, then nobody updates it as contexts split, merge, or shift relationships. Six months in, the map is fiction, the agent loads it as gospel, and the next session works against a model that no longer matches the code. Treat the map like a test: if it's wrong, that's a bug, fix it.
- **Implicit shared kernel.** Two contexts share types not because anyone declared a shared kernel, but because someone imported across the boundary "just this once." The shared kernel is now real but undocumented. A refactor in one context silently breaks the other, and no test catches it because no contract exists. Either declare the kernel and own the coordination cost, or duplicate the type and own the duplication.
- **Ubiquitous language collapses to code names.** The team's vocabulary drifts to whatever the most recent agent session called things. The domain expert's words ("settlement," "chargeback," "reconciliation") get replaced by whatever the code happens to say ("txn2," "reverseFlow," "matchUp"). Once this happens, the bridge between domain expert and code is gone, and the agent — which only sees the code — becomes the de facto authority on what the domain means. This is the failure mode that quietly ends the project.

## Action Step

Pick a real codebase you've been working in with agents. Sketch a context map, even informally — sticky notes, a whiteboard photo, a half-page in `docs/context-map.md`. Don't aim for completeness; aim for the three or four contexts that actually matter and the relationships between them.

Now identify two places where you've previously had different agent sessions touch the same area of code. Were those areas inside the same context? If so, the failure was probably scoping — you needed a clearer definition of what each session owned. Were they crossing contexts? If so, that crossing is exactly where you now want either an Anti-Corruption Layer in the code or a contract test at the boundary — see [contract-testing](contract-testing.md) next session for how to make that contract executable.

The point of the exercise isn't to produce a polished diagram. It's to make the seams visible to you, so you can make them visible to the next session before it starts work.

---

**Next Session:** [contract-testing](contract-testing.md)
