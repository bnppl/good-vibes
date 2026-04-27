---
last_updated: 2026-04-27
last_read: null
status: unread
---

**Contract testing** is the most direct mechanical answer to the cross-session regression problem from [[cross-session-regression]]. When two sessions touch opposite sides of a module or service boundary — Session A on the provider, Session B on the consumer — the only artifact that can catch a silent break before merge is a contract that *both sides verify against*. Type checks pass. Unit tests pass. Each session's CI pipeline lights up green. And then production breaks because the consumer expected a `userId` and the provider started returning `user_id`.

Without contracts, that failure is invisible to both sessions and to CI. The provider's tests don't know about the consumer. The consumer's tests mock the provider. Code review assumes a human read both sides — and in agentic dev, no one has. Contracts are the trip-wire that fires when a change on one side violates an expectation on the other, and they fire *in CI*, not in production. If you do nothing else from this module, add contract tests at the boundaries your sessions actually cross.

## Anti-Corruption Layers as Verification Gates

You just read [[ddd-boundaries]], so the **anti-corruption layer** is fresh: a translation layer at the seam between two bounded contexts whose job is to keep one side's vocabulary from corrupting the other. Reframed for agents, the ACL is *the* place where you assert "this is what we expect from the other side." Tests written against the ACL — even plain unit tests with no Pact, no OpenAPI, no contract framework — are tests on the cross-context contract. Every assertion in an ACL test is a contract clause: *we expect a 200 with this shape; we expect this error code to map to this domain exception; we expect dates as ISO-8601.*

Jesse Warden's [*You May Need an Anti-Corruption Layer*](https://jessewarden.com/2025/09/you-may-need-an-anti-corruption-layer.html) (Sep 2025) walks through the recurring pattern: teams adopt hexagonal architecture, draw the ports and adapters diagram, and then skip the ACL because "the upstream team's API is already clean enough." Six months later, the upstream API quietly changes a field's nullability and three downstream services start throwing nulls into business logic that was never written to handle them. The ACL would have failed loudly, in a single place, with a useful message. Without it, the failure scatters across every callsite.

For agentic teams the ACL pays back even faster, because Session A and Session B don't share a head. The ACL is the only place where the *cross-session* assumption is written down in code that runs.

## Consumer-Driven Contracts (Pact Pattern)

The Pact-style **consumer-driven contract** workflow is four steps:

1. **Consumer writes a test that mocks the provider's responses.** The mock isn't ad-hoc — it's described declaratively: "given this request, expect this response shape." Running the test generates a *contract file* that says, in machine-readable form, "I, the consumer, expect these responses."
2. **The contract file gets published** — to a Pact broker, a git repo, or an S3 bucket. It's now a published artifact, not a private test fixture.
3. **The provider's CI pulls the contract** and replays each consumer's expected requests against the real provider implementation. Not a mock — the actual provider, wired to test doubles for its own dependencies.
4. **The provider's CI fails** if it can't satisfy what consumers expect. The break surfaces on the *provider's* PR, before merge, with a clear pointer to which consumer is going to break.

Now map that to sessions. **Session A built the provider on Monday. Session B builds a new consumer on Friday.** Session B writes its consumer-driven contract as part of normal development. The contract gets published. The next time *anyone* — Session C, Session A's older sibling, a human — opens a PR against the provider, that PR's CI replays Session B's expectations against the new provider code. If Session A made an undocumented assumption ("the field will always be present"), and that assumption gets violated by a later edit, Session B's contract is the trip-wire that catches whatever Session A assumed but never enforced.

This is the most direct mechanical answer to the silent contract break described in [[cross-session-regression]]. No human has to remember Session A's assumptions. The contract remembers.

## Schema-First as the Lighter-Weight Version

Pact is heavy. For a lot of boundaries — especially internal HTTP between two services your team owns — you want the schema-first version: **OpenAPI** for REST, **GraphQL schemas**, **Protobuf** for gRPC, or just **shared TypeScript types** at the package boundary. Less ceremony than Pact, weaker guarantees (you cover *shape*, not *behavior*; you confirm `userId` is a string, not that it's the *right* string), but the right starting point for most teams and most boundaries.

The 2026 tool worth knowing here is [**PactFlow Drift**](https://pactflow.io/blog/schemas-can-be-contracts/) (Mar 2026), which validates live API behavior against an OpenAPI spec in CI. It treats the spec as the contract and the running API as the implementation under test, and fails the build when they drift. It's the operational answer to the perennial "the OpenAPI doc is out of date" problem — by gating on it, you make the doc *true*.

The complementary research direction is the arXiv paper [*Making REST APIs Agent-Ready: From OpenAPI to Model Context Protocol Servers*](https://arxiv.org/html/2507.16044v1) (Jul 2025), which bridges OpenAPI specs to MCP tool surfaces. The implication for agentic dev is sharper than it looks: when an agent generates a client by reading your OpenAPI spec — directly, or via an MCP server derived from it — that spec is *immediately* the contract that future agent sessions will rely on. If it drifts, every downstream agent session inherits the drift. Schema-first contracts stop being "documentation hygiene" and start being load-bearing infrastructure.

## What This Catches That Other Techniques Miss

- **BDD scenarios** ([[bdd-for-agents]]) cover behavior *within* a context — they describe what the system does in domain language, not what it promises across a boundary.
- **Fitness functions** ([[fitness-functions]]) cover architecture and global properties — coupling, layering, performance budgets — not the specific shape of a message between two specific services.
- **Type systems** cover compile-time shape inside one process. They evaporate at the network edge, at the serialization boundary, and across async/queue-based handoffs. Two services that share TypeScript types via a monorepo still drift the moment one of them deploys before the other.
- **Code review** assumes a reviewer has read both sides of the boundary and held them in their head simultaneously. In agentic dev, no one has.

Contracts are the only technique that **fails the consumer's CI when the provider drifts** — and *vice versa*. That's the unique property. Everything else either runs only on one side, or covers the wrong layer.

## Pact Broker Workflow at Team Scale

The Pact broker is the piece that makes consumer-driven contracts work at scale. It stores published contracts, tracks which consumer versions expect which provider versions, and exposes a `can-i-deploy` check that PRs and deploy pipelines query before shipping. If deploying provider v3 would break consumer v7's expectations, `can-i-deploy` returns false and the deploy is blocked. The broker is the gate; without it, contracts are decorative.

The 2026 piece worth flagging is the [**PactFlow MCP Server**](https://pactflow.io/blog/pactflow-mcp-server/) — the most concrete agent-aware contract tooling shipped to date. It exposes Pact operations as MCP tools so agents in Claude Code, Cursor, or VS Code can generate Pact tests, review them, and maintain the broker state inside the dev loop. The point isn't that agents now write Pact tests for free; it's that the *contract artifact* — the consumer's published expectation — becomes a first-class thing the agent can read, write, and reason about. Session B's agent can ask the broker, "what does the current consumer expect from this provider?" before touching the provider, instead of inferring it from the code.

The cleanest articulation of *why this is now non-optional* is the PactFlow [**Bridging Development Gaps with AI-Augmented Contract Testing**](https://pactflow.io/blog/ai-automation-part-3/) series. The argument: agents generate APIs and clients independently and at machine speed; the human-mediated coordination that used to keep both sides in sync (standups, design docs, "did you tell the iOS team?") doesn't scale to that velocity. Contracts are now mandatory because contracts are the only coordination mechanism that runs at machine speed too.

## Traps

- **Contracts as implementation mirrors.** The consumer test team copies a real production response into the mock, ships it as a contract, and now the contract pins *current behavior* rather than *consumer needs*. The provider can't refactor without breaking a consumer that didn't actually need any of the fields it inadvertently locked down. Write contracts as the *minimum the consumer requires*, not the *maximum the provider currently emits*.
- **Skipped on internal modules.** Teams adopt Pact for the obvious cross-team REST APIs and skip it for in-process module boundaries — Domain ↔ Infrastructure, application service ↔ port. Cross-session breaks happen *inside* a service too; the same logic applies. ACL-style unit tests are the cheap version, but they need to exist.
- **Provider verification skipped in CI.** The broker collects contracts, no pipeline replays them, and `can-i-deploy` is never called. The broker is decorative. A contract that nobody verifies is a comment.
- **Schema as truth.** An OpenAPI doc that drifts from the implementation is *worse than no doc* — the next session, human or agent, will trust it and code against it. The drift only surfaces at runtime, far from the change that caused it. Tools like Drift exist specifically to close this gap; if you publish a schema, gate on it.

A meta-trap, mentioned often enough in [[../context-engineering/instruction-layer]] and [[../context-engineering/orchestration-layer]] to repeat here: contracts must live where the agent will *find* them. A Pact broker URL buried in a wiki is invisible to Session C. Contract files committed next to the code they govern, referenced from CLAUDE.md, surface in retrieval and get used.

## Action Step

Pick two modules in your project that one agent session built and another touched later — a place where you've already eaten a silent break, ideally. Write **one** consumer-driven contract test using Pact for the consumer side, and wire the provider's CI to verify it. If Pact is overkill for the boundary (in-process, single team, low blast radius), generate an OpenAPI schema from the provider — most frameworks emit one for free — and add a CI check (PactFlow Drift, Spectral, or a homegrown script) that the consumer's actual calls match it.

Wire it into CI on both sides. Pre-merge. Not "we'll watch it for a week." This is an upfront investment that pays back the *next* time a session touches the provider — and given the cadence agentic teams ship at, the next time is usually within days. The first contract feels like overhead. The third one prevents the regression that would have cost a day to debug, and the math flips for good.

If your team is allergic to Pact-the-tool but not to the *idea*, start with [[ddd-boundaries]]-style ACL unit tests. They're contract tests in everything but name, and they're the cheapest possible on-ramp to the discipline. The OneUptime [*How to Build the Anti-Corruption Layer Pattern*](https://oneuptime.com/blog/post/2026-01-30-anti-corruption-layer-pattern/view) post (Jan 2026) is a clean walkthrough of the structure if you need a reference.

Reading list and full citations: [[sources]]. Related: [[agentic-tdd]], [[comprehension-debt]].

---

**Next Session:** [[fitness-functions]]
