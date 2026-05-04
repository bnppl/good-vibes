---
last_updated: 2026-04-27
last_read: null
status: unread
---

# Sources

An annotated bibliography of key sources on cross-session verification, organized by how essential they are to understanding the field. Cross-session verification is the cluster of practices — fitness functions, contract tests, property-based tests, characterization tests, BDD specs, mutation testing, DDD boundaries — that lets agents make changes today without quietly breaking what other agents shipped yesterday. Sources range from twenty-year-old textbooks to last-month posts.

## Foundational Books

These are the canonical pre-AI references this module rests on. They don't need 2026-specific framing — they're the textbooks. The 2026 reframing happens in the essential reading section; what these books give you is the original vocabulary.

**[Building Evolutionary Architectures](https://www.thoughtworks.com/insights/books/building-evolutionary-architectures-2nd-edition)** (2nd edition)
Neal Ford, Rebecca Parsons, Patrick Kua, Pramod Sadalage

The primary citation for [fitness-functions](fitness-functions.md). Defines fitness functions as automated checks on architectural characteristics — coupling, layer dependencies, performance budgets — that fail the build when a change drifts outside the agreed envelope. The mechanism by which architectural decisions survive contact with subsequent agent sessions. The 2nd edition adds a chapter on automating ADRs that lines up with the 2026 dev.to "Stop Architecture Drift" piece below.

Most useful for: anyone trying to encode architecture as something an agent can fail against, not something a human has to remember.

---

**[Specification by Example](https://gojko.net/books/specification-by-example/)**
Gojko Adzic

The book that took BDD from a testing technique to a collaboration model. Reads in 2026 as a manual for "how to write the artifacts an agent should be programmed against." Adzic's key examples and living documentation map cleanly onto the spec-driven development practices Birgitta Böckeler catalogues a decade later.

Most useful for: BDD as a context-engineering tool, not just a test-writing one.

---

**[Domain-Driven Design](https://www.domainlanguage.com/ddd/)**
Eric Evans

The original. Bounded contexts, ubiquitous language, aggregates, context maps — every primitive used in [ddd-boundaries](ddd-boundaries.md) traces here. The bounded-context idea is the conceptual underpinning for why an `AGENTS.md` per directory works better than a single root file: each context has its own ubiquitous language, and agents need to know which one they're in.

Most useful for: understanding the conceptual foundation before reading anything more recent.

---

**[Implementing Domain-Driven Design](https://kalele.io/books/)**
Vaughn Vernon

The pragmatic companion. Where Evans is conceptual, Vernon is operational. The aggregate-design rules and the chapter on integrating bounded contexts via anti-corruption layers are the most directly useful for agentic codebases — the ACL pattern is the reason agents can work on a modernized service without leaking legacy semantics across the boundary.

Most useful for: shipping DDD in code, not arguing about it on Twitter.

---

**[Working Effectively with Legacy Code](https://www.oreilly.com/library/view/working-effectively-with/0131177052/)**
Michael Feathers

The canonical reference for characterization tests. Pre-dates AI by twenty years; reads in 2026 as if written for the agent-touches-legacy problem. Feathers' definition of legacy code as "code without tests" is exactly the surface area where coding agents fail silently — the failure modes in the Columbia DAPLab paper below are mostly variations on Feathers' seams and sprouts.

Most useful for: anyone whose agent is about to touch a codebase without tests.

---

**[Pact documentation](https://docs.pact.io)**
Pact Foundation

Not a book, but the canonical reference for consumer-driven contracts. The five-minute "What is Pact?" page is the highest-signal short read in the contract-testing space. The model — consumer writes its expectations, broker stores them, provider verifies — is exactly the pattern PactFlow's MCP server (below) exposes to agents in 2026. Worth understanding the human workflow before reading the agent-augmented one.

Most useful for: the underlying mental model before the MCP-flavored 2026 wrappers.

---

## Essential Reading (2025–2026)

The fresh sources that directly shape practice in agentic verification. Each is genuinely worth a careful read.

**[AGENTS.md outperforms skills in our agent evals](https://vercel.com/blog/agents-md-outperforms-skills-in-our-agent-evals)**
Vercel, 2026-01-29

Vercel ran head-to-head evals comparing skill-based context injection against a single repository-rooted AGENTS.md and found the flat file won on both quality and cost. The methodology section is the thing — they describe how they actually measured "agent performance" with a reproducible eval harness, which is the exact gap most teams have. Frame alongside the Tessl "your AGENTS.md isn't the problem" piece for the full picture.

Most useful for: anyone deciding how to structure project-level agent context, and anyone who needs a template for measuring it.

---

**[From Prompt Spaghetti to Bounded Contexts: DDD for Agentic Codebases](https://gitnation.com/contents/from-prompt-spaghetti-to-bounded-contexts-ddd-for-agentic-codebases)**
Nikita Golovko (GitNation), 2026

The clearest articulation of the 2026 thesis that DDD is the right organizing principle for agentic codebases. Golovko argues that without bounded contexts, agent context windows fill with conflicting vocabulary and the agent loses the ability to reason about any single subdomain. Treat each bounded context as a unit of agent attention — one AGENTS.md per context, one ubiquitous language, one set of fitness functions.

Most useful for: anyone organizing a monorepo for multi-agent work.

---

**[Property-Based Testing with Claude](https://red.anthropic.com/2026/property-based-testing/)**
Anthropic Red Team, 2026

Anthropic's red team writeup of using Claude to generate property-based tests, find counterexamples, and minimize them. The key finding is that LLMs are much better at proposing properties than example-based tests — the abstract framing of "for all inputs, this invariant holds" lines up well with patterns LLMs are already strong at. Pairs with the arXiv DL4C paper below.

Most useful for: understanding why PBT is the highest-leverage testing style for agent-generated code.

---

**[Agentic Property-Based Testing: Finding Bugs Across the Python Ecosystem](https://arxiv.org/html/2510.09907v1)**
arXiv (NeurIPS 2025 DL4C), 2025-10

The paper that operationalized "point an agent at PyPI packages and have it generate Hypothesis tests." Found real bugs latent for years. The methodological contribution is the loop: agent reads docstring, proposes properties, runs Hypothesis, triages failures, files issues. The closest thing to a reference implementation of agentic PBT in published research.

Most useful for: anyone building an agent loop that generates and runs PBT.

---

**[Introducing the PactFlow MCP Server](https://pactflow.io/blog/pactflow-mcp-server/)**
PactFlow, 2026

PactFlow exposing the contract broker over MCP so agents can read, write, and verify pacts directly. The significance: contract testing was the verification primitive that most resisted agent automation — humans had to coordinate the consumer/provider handoff. MCP collapses that handoff into a tool call. Contracts become a runtime constraint an agent can query, not a process artifact a team has to maintain.

Most useful for: anyone running cross-service work where multiple agents touch both sides of an API.

---

**[Stop Architecture Drift: Operationalizing ADRs with Automated Fitness Functions](https://dev.to/alexandreamadocastro/stop-architecture-drift-operationalizing-adrs-with-automated-fitness-functions-22oi)**
Alexandre Amado Castro (dev.to), 2026

The most concrete worked example of turning ADRs into executable fitness functions in 2026. Castro walks through taking an ADR, encoding it as a custom ArchUnit/dependency-cruiser rule, wiring it into CI, and — critically — referencing it from AGENTS.md so the agent knows the rule exists before it tries to violate it.

Most useful for: turning your ADR backlog into something an agent will actually respect.

---

**[9 Critical Failure Patterns of Coding Agents](https://daplab.cs.columbia.edu/general/2026/01/08/9-critical-failure-patterns-of-coding-agents.html)**
Columbia DAPLab, 2026-01-08

A taxonomy of how coding agents fail in real production use, derived from log analysis: silent regressions, characterization-test gaps, contract drift, "successful completion of the wrong task." Gives you a concrete list of failure modes to design verification for — most techniques in this module map directly onto entries in the taxonomy.

Most useful for: a checklist of what your verification layer needs to catch.

---

**[Advanced Context Engineering for Coding Agents](https://github.com/humanlayer/advanced-context-engineering-for-coding-agents/blob/main/ace-fca.md)**
HumanLayer / Dexter Horthy, 2025-09-23

The "ACE-FCA" essay. Horthy's central argument is that the verification layer is part of context, not separate from it: tests, contracts, fitness functions, and AGENTS.md files are all context the agent uses to constrain its own output. The most-discussed essay in the space (517 HN points). Read after Vercel and Tessl to triangulate.

Most useful for: the unifying argument that ties this whole module together.

---

## Strong References

High-quality material worth knowing about, but secondary to Essential.

**[Beyond Prompt-Only Testing: A Hybrid AI + BDD Approach](https://levi9-serbia.medium.com/beyond-prompt-only-testing-a-hybrid-ai-bdd-approach-with-cucumber-and-playwright-82a98a89946d)**
Levi9 Serbia, 2026

A practitioner writeup of using Cucumber + Playwright as the spec layer an agent is programmed against. Useful because it's specific about which parts of BDD stay human (Gherkin authoring) and which become agent-driven (step impls, page objects, exploratory variants).

Most useful for: a concrete BDD-with-agents pipeline you can copy.

---

**[Introducing touring_test: A Cucumber Extension For Agentic Usability Testing](https://worksonmymachine.ai/p/introducing-touring_test-a-cucumber)**
worksonmymachine.ai, 2026

A Cucumber extension letting an agent execute Gherkin scenarios through a browser and report on usability friction, not just pass/fail. Extends BDD past correctness into qualitative judgment — the agent acts as a synthetic user.

Most useful for: anyone interested in pushing BDD beyond binary assertions.

---

**[Backend Coding Rules for AI Coding Agents: DDD and Hexagonal Architecture](https://medium.com/@bardia.khosravi/backend-coding-rules-for-ai-coding-agents-ddd-and-hexagonal-architecture-ecafe91c753f)**
Bardia Khosravi, 2026

A concrete AGENTS.md-style document encoding hexagonal-architecture invariants. Entries are tight ("domain layer must not import from infrastructure", "use cases return result types") and the format is directly liftable.

Most useful for: a starting template for your own architecture-rules file.

---

**[Bridging Development Gaps with AI-Augmented Contract Testing (Part 3)](https://pactflow.io/blog/ai-automation-part-3/)**
PactFlow

The third in PactFlow's series on AI + contracts, focused on how agents can author contracts from OpenAPI specs and verify them across teams. Lighter than the MCP server post, but useful for the workflow framing.

Most useful for: the team-process side of agent-authored contracts.

---

**[PactFlow Drift: Spec-driven API testing](https://pactflow.io/blog/schemas-can-be-contracts/)**
PactFlow, 2026-03-24

PactFlow's "Drift" feature, which treats schemas as enforceable contracts and detects drift between spec and implementation. Agents that change handler code without updating schemas trigger an immediate failure rather than a silent regression caught weeks later.

Most useful for: catching agent-induced schema/handler drift at PR time.

---

**[Making REST APIs Agent-Ready: From OpenAPI to Model Context Protocol Servers](https://arxiv.org/html/2507.16044v1)**
arXiv, 2025-07

Tooling for auto-generating MCP servers from OpenAPI specs. The generated MCP surface is itself a contract — agents interacting via MCP can't drift from the spec without the MCP layer rejecting the call.

Most useful for: anyone building the MCP layer between agents and existing services.

---

**[Use Property-Based Testing to Bridge LLM Code Generation and Validation](https://arxiv.org/abs/2506.18315)**
arXiv, 2025-06

Argues PBT is uniquely well-suited as a validation layer for LLM-generated code, because the semantic gap between "natural-language spec" and "property" is smaller than between "spec" and "example test." Conceptual lead-up to the NeurIPS DL4C paper above.

Most useful for: the theoretical case for PBT-first validation of agent output.

---

**[Mutation Testing with AI Agents When Stryker Doesn't Work](https://alexop.dev/posts/mutation-testing-ai-agents-vitest-browser-mode/)**
Alex Op, 2026

Using an agent for mutation-style perturbations when Stryker can't be wired in (browser-mode Vitest). Offloads mutation generation to the agent itself rather than a dedicated mutator.

Most useful for: anyone whose stack doesn't have a working mutation-testing tool.

---

**[The Pitfalls of Test Coverage: Introducing Mutation Testing with Stryker and Cosmic Ray](https://prodsens.live/2026/02/01/the-pitfalls-of-test-coverage-introducing-mutation-testing-with-stryker-and-cosmic-ray/)**
prodsens.live, 2026-02

A clean introduction with two specific tools (Stryker for JS/TS, Cosmic Ray for Python). The central argument — coverage measures which lines ran, mutation testing measures whether the tests would notice if those lines were wrong — is the foundation for [test-the-tests](test-the-tests.md).

Most useful for: anyone new to mutation testing as a concept.

---

**[Fitness Functions: Automating Your Architecture Decisions](https://lukasniessen.medium.com/fitness-functions-automating-your-architecture-decisions-08b2fe4e5f34)**
Lukas Niessen, 2026-02

A more accessible companion to the Ford/Parsons book. Catalogues categories of fitness functions (coupling, security, performance, resiliency) with concrete tooling for each. A "what could I actually measure" prompt list.

Most useful for: brainstorming which fitness functions your project actually needs.

---

**[AI Architecture Drift: How AI Agents Erode Your Codebase](https://techdebt.best/ai-architecture-drift/)**
techdebt.best, 2026

A practitioner essay on the failure mode this module is designed to prevent: agents making locally-correct changes that aggregate into architecture-level drift. Mitigation list is conventional (fitness functions, ADRs, code review) but the framing is sharp.

Most useful for: convincing a skeptical team that architecture drift is the actual risk.

---

**[Your AGENTS.md file isn't the problem. Your lack of evals is](https://tessl.io/blog/your-agentsmd-file-isnt-the-problem-your-lack-of-evals-is/)**
Tessl, 2026-02-25

The counter-argument to AGENTS.md tuning: stop fiddling with the prompt and start measuring outcomes. Walks through a minimal eval harness for project-specific agent behavior. Read alongside Vercel for both sides.

Most useful for: the methodological frame for evaluating any verification practice.

---

**[agents-md-evals (GitHub repo)](https://github.com/vltansky/agents-md-evals)**
vltansky, 2026

An open-source eval harness specifically for AGENTS.md variations. Useful as a starting point if you want to actually measure whether your project context file helps or hurts.

Most useful for: a working code starting point for AGENTS.md evals.

---

**[Legacy Code Modernization Using AI: Safe Steps, Tools, and Pitfalls](https://www.codegeeks.solutions/blog/legacy-code-modernization-using-ai)**
CodeGeeks, 2025–2026

Safe-steps approach to agent-led legacy modernization: characterization tests, ACLs, incremental strangler. Conventional but well-organized.

Most useful for: a checklist for kicking off a legacy-modernization project with agents.

---

**[You May Need an Anti-Corruption Layer](https://jessewarden.com/2025/09/you-may-need-an-anti-corruption-layer.html)**
Jesse Warden, 2025-09

A blog-length explainer of the ACL pattern from DDD with examples. The ACL is the structural pattern that makes incremental agent-led modernization safe — without it, legacy semantics leak into new code and the agent's locally-correct changes accumulate into systemic mess.

Most useful for: understanding why ACLs are the load-bearing pattern for legacy work.

---

**[Spec-driven development: Unpacking one of 2025's key new AI-assisted engineering practices](https://www.thoughtworks.com/en-us/insights/blog/agile-engineering-practices/spec-driven-development-unpacking-2025-new-engineering-practices)**
Birgitta Böckeler (Thoughtworks), 2025

Böckeler's catalogue of what "spec-driven development" actually means in 2025 practice: living specs, BDD as context, machine-checkable acceptance criteria. The most balanced overview in the space.

Most useful for: situating this entire module within the broader 2025 SDD conversation.

---

**[How to Build the Anti-Corruption Layer Pattern](https://oneuptime.com/blog/post/2026-01-30-anti-corruption-layer-pattern/view)**
OneUptime, 2026-01-30

A working refresher on ACLs with concrete code examples in TypeScript. Pairs well with the Warden post: where Warden argues *when* you need an ACL, OneUptime shows *what one looks like* once you've decided.

Most useful for: a fast practical reference when you're standing up a new ACL and want a structural template.

---

**[Architecture Fitness Function — Encyclopedia of Agentic Coding Patterns](https://aipatternbook.com/architecture-fitness-function)**
aipatternbook.com, 2026

A short catalog entry that frames fitness functions specifically as the mechanism for "agents bouncing off rules" — the cleanest one-page articulation of the agent angle on the technique. Useful as the link to send a colleague who hasn't read Ford yet.

Most useful for: a quick pointer when introducing the concept to teammates new to fitness functions.

---

## April 2026 Updates

The last ~30 days have been dense — the AGENTS.md eval debate flared, two new property-based testing tools (Bombadil, Hegel) hit the front page within a week of each other, and a postmortem of a month-long Claude Code regression made the rounds. Highlights:

**[Lessons from the Claude Code Postmortem: Why AI Agents Fail Silently](https://earezki.com/ai-news/2026-04-23-claude-code-felt-off-for-a-month-here-is-what-broke/)**
earezki.com, 2026-04-23

A reflective post on the Claude Code "felt off for a month" incident, focused on the silent-failure pattern: agents continued producing plausible-looking output while a regression eroded quality across the user base. The takeaway: you need outcome-level evals running continuously, not just unit-level tests.

Most useful for: the case study for "why prod evals aren't optional."

---

**[Hegel: a universal property-based testing protocol](https://hegel.dev)**
Hegel, 2026-04-09 (133 HN points)

A protocol-level PBT proposal portable across languages and runners. Today's PBT tools are language-siloed (Hypothesis, fast-check, QuickCheck) and an agent working across a polyglot codebase has to context-switch between idioms. Hegel's protocol is meant to collapse that.

Most useful for: anyone running agents across a polyglot codebase.

---

**[PactFlow Drift](https://pactflow.io/blog/schemas-can-be-contracts/)**
PactFlow, 2026-03-24

Cross-referenced from Strong References above — included here because the late-March release sits inside the recent-sweep window and was discussed alongside the April PBT releases.

Most useful for: spec-vs-implementation drift detection.

---

**[Bombadil: Property-based testing for web UIs](https://github.com/antithesishq/bombadil)**
Antithesis, 2026-03-19 (257 HN points)

Antithesis's PBT tool aimed specifically at web UIs — the surface area where PBT has historically been weakest. The HN thread is worth reading for the skepticism (browsers are nondeterministic, properties on UIs are hard to write) and Antithesis's responses.

Most useful for: closing the PBT gap on the frontend.

---

**[Cq — Stack Overflow for AI coding agents](https://blog.mozilla.ai/cq-stack-overflow-for-agents/)**
Mozilla.ai, 2026-03-23 (225 HN points)

A queryable knowledge base aimed at agents, with verified answer snippets and provenance. Indirect verification angle: if agents can pull from a curated, versioned source instead of regurgitating training-set patterns, the surface area for confidently-wrong answers shrinks.

Most useful for: thinking about external knowledge sources as a verification surface.

---

## HN Threads

High-signal community discussions. Where the HN item URL wasn't captured during the research sweep, the article URL is used with a note.

**[AGENTS.md outperforms skills in our agent evals](https://vercel.com/blog/agents-md-outperforms-skills-in-our-agent-evals)** — 524 points (via HN discussion). The thread surfaces every major skeptical position on AGENTS.md and Vercel's responses; the most useful single thread for understanding how practitioners think about project-context files.

**[Advanced Context Engineering for Coding Agents](https://github.com/humanlayer/advanced-context-engineering-for-coding-agents/blob/main/ace-fca.md)** — 517 points (via HN discussion). The largest thread in the context-engineering conversation. The disagreements in the comments are often more valuable than the post itself.

**[Bombadil: Property-based testing for web UIs](https://github.com/antithesishq/bombadil)** — 257 points (via HN discussion). Skepticism about PBT on nondeterministic surfaces, plus Antithesis engineers replying in-thread.

**[Cq — Stack Overflow for AI coding agents](https://blog.mozilla.ai/cq-stack-overflow-for-agents/)** — 225 points (via HN discussion). Strong debate on whether agent-targeted knowledge bases are a real category or repackaged search.

**[Hegel: a universal property-based testing protocol](https://hegel.dev)** — 133 points (via HN discussion). Smaller thread but high signal on the polyglot-PBT question.
