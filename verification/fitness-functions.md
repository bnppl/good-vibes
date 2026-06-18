---
title: "Fitness Functions"
parent: "Verification"
nav_order: 7
last_updated: 2026-06-16
last_read: null
status: unread
---

# Fitness Functions: Architecture Rules That Survive Every Session

{: .hook }
> **Agents do not remember the Tuesday 2024 incident that taught your team why `domain/` can't import `infrastructure/`. Fitness functions do.**
>
> Architectural invariants that lived in senior engineers' heads are silently violated by every new session. The agent doesn't know the rule, so it doesn't follow it.

**In short:**
- **The problem:** Rules enforced by reviewer discipline and oral tradition don't survive session boundaries — agents don't have access to human memory.
- **The idea:** Automated checks on architectural characteristics that move human memory into CI, where the agent bounces off them the same way it bounces off a failing test.
- **How it works:** ArchUnit (Java), ts-arch (TypeScript), import-linter (Python) — plus ESLint rules and CI scripts. Author/enforce split: humans write the rules, agents implement them. ADR → fitness function → CI pipeline.
- **The result:** The agent attempts the disallowed import, the build fails, the agent reads the failure message and routes around the constraint. The rule becomes part of the environment, not the reviewer's discipline.

{: .aha }
> **Fitness functions are the only artifact automatically loaded every single run** — because CI runs every single run, regardless of who or what is writing the code.

{: .try-it }
> Pick one rule you're tired of catching in PR review. Write it as a fitness function (ArchUnit, import-linter, ESLint custom rule). Add a `WHY` comment linking to the ADR or postmortem. Wire it into a pre-commit hook so the agent gets feedback inside its own loop, not 10 minutes later in CI.

---

## Deep dive

**Neal Ford, Rebecca Parsons, Patrick Kua, and Pramod Sadalage's *Building Evolutionary Architectures* (2nd ed.)** gave us the term "fitness function," and the second edition's expanded catalog of examples is still the cleanest single source on the technique. In a wiki about agentic verification, fitness functions are the most underrated entry. Of the four failure shapes catalogued in [cross-session-regression](cross-session-regression.md) — silent invariant violations, layered architectural drift, regenerated dead code, and forgotten rationale — fitness functions are the only mechanism that catches the **invariant violation** shape *directly*. Tests catch behavior. Contracts catch interface drift. Fitness functions catch architecture.

Make the case sharply: agents do not have access to your memory. They do not remember the Tuesday 2024 incident that taught the team why `domain/` cannot import `infrastructure/`. They do not know that the senior engineer who would have caught it in PR review left the company eight months ago. **Fitness functions move human memory into CI.** They are the cheapest verification mechanism per regression caught for any rule that you can state precisely but currently enforce with vibes.

## What Fitness Functions Are

A **fitness function** is an automated check on an **architectural characteristic** — something about the *shape* of the code rather than its behavior. The canonical taxonomy from Ford et al.: **atomic vs. holistic** (one characteristic vs. several interacting), **triggered vs. continual** (run on commit/CI vs. always-on monitoring), **static vs. dynamic** (fixed threshold vs. context-dependent). Most of what you'll write is atomic, triggered, and static — a check that runs in CI and fails the build when a rule is broken.

The reader is here for the agent angle, not the textbook recap, so the short version:

- **Atomic** rules read like assertions ("no class in `domain` imports anything from `infrastructure`").
- **Holistic** rules read like budgets across subsystems ("end-to-end checkout latency stays under 800ms with the new caching tier").
- **Triggered** rules live in pre-commit hooks, CI pipelines, or — increasingly — pre-tool-use agent hooks.
- **Continual** rules are dashboards, SLOs, and synthetic monitors that fire alerts rather than failing builds.

## Why They Matter More for Agentic Code

Three reasons, each sharper than the last:

1. **Agents silently violate rules you hold in your head.** A senior engineer carrying the architecture in their skull will rewrite an agent PR that crosses a layer boundary; a junior reviewer at 11pm will not. Either way, the rule is in a human, not the system. Fitness functions move the rule into CI where the agent **bounces off it** the same way it bounces off a failing test. The rule becomes part of the environment, not part of the reviewer's discipline.

2. **Agents have no continuity across sessions.** Every new session starts cold. The architectural decisions made six months ago do not survive context compaction; they do not survive a new conversation; they certainly do not survive a different model. Fitness functions are the **codified institutional memory** of those decisions — the only artifact that is automatically loaded every single run, because CI runs every single run.

3. **Agents will write fitness functions on request, but humans must author the rules.** This is the load-bearing point. The techdebt.best "AI Architecture Drift" piece argues that fitness functions must run in the *agent's* feedback loop (not just the post-merge CI pipeline) or the agent never learns the rule — it has already built five layers on top of the violation by the time CI catches it ten minutes later. The rule encodes taste; the rule's enforcement is mechanical. Humans bring the first; agents are excellent at the second.

## Categories with Concrete Examples

Five categories. Each one of these is something a senior engineer would catch in PR review at 11pm with a shrug, until they don't, and the agent introduces it the next day. The fitness function is what makes the rule survive both fatigue and turnover — human or session.

- **Dependency rules.** `domain/` cannot import from `infrastructure/`. The classic hexagonal-architecture invariant, the one that decays first under deadline pressure and silently under agent edits. ArchUnit's `noClasses().that().resideInAPackage("..domain..").should().dependOnClassesThat().resideInAPackage("..infrastructure..")` is a five-line PR that prevents a five-month rewrite.
- **Layering.** Controllers cannot call repositories directly; they must go through application services. Without this rule, the agent will helpfully "simplify" the code by inlining the service layer the next time it touches a controller.
- **Naming.** All public methods on aggregates start with a verb. Trivial-looking, but a naming rule encodes a domain modeling stance — the aggregate exposes behavior, not state — and is the kind of convention that erodes one PR at a time.
- **Performance budgets.** p95 < 200ms on `/api/checkout`. A holistic, dynamic fitness function. Fails the build (or the deploy gate) when load tests breach the budget. The agent that "optimizes" by adding a synchronous third-party call discovers this on the way in, not in production.
- **Security.** No hardcoded credentials anywhere in the tree; no `eval` (or its language equivalents) in production code. Trivial grep-based fitness functions, embarrassingly cheap, and they catch a class of agent failure that nothing else does — the agent that pastes a sample API key from documentation into a config file because the example told it to.

## Tooling in 2026

The 2026 tooling story is finally good, mostly because Java had it right for a decade and other ecosystems caught up. Lukas Niessen's **"Fitness Functions: Automating Your Architecture Decisions"** is the cleanest tooling-by-stack survey from this year:

- **Java: ArchUnit.** Still the reference implementation. The big 2026-era addition is **`FreezingArchRule`**, which lets you adopt a rule against a codebase that already has hundreds of violations — the rule freezes the existing violation set as the baseline (stored in a `.archunit_store` file) and only fails when *new* violations appear. This makes incremental adoption tractable; previously the choice was "fix 800 violations in one PR or skip the rule." With `FreezingArchRule`, you install the rule today, stop the bleeding, and pay down the frozen violations over time. The frozen store is a visible, reviewable artifact — if it shrinks, good; if it grows, the build fails.
- **TypeScript: ts-arch and dependency-cruiser.** ts-arch borrows the ArchUnit DSL almost verbatim. dependency-cruiser is more about graph-level rules and integrates into the build with sensible defaults.
- **Python: import-linter and Pyarchitecture.** import-linter is the workhorse — contracts in TOML, runs in CI in seconds. Pyarchitecture is newer and adds richer module-graph queries.
- **.NET: NetArchTest.** The DevelopersVoice walkthrough on automating architecture governance in .NET is the best end-to-end example — assembly-level, layer-level, and naming-level rules in a single fluent API.
- **Everywhere: ESLint custom rules and the underrated trick of CI scripts that grep for forbidden patterns.** A ten-line shell script that fails the build on `grep -r 'TODO(remove-by:' --check-dates` is a fitness function. So is an ESLint rule that bans `import` from a sibling package. Don't overthink the tooling; the rule is the artifact, the enforcer is interchangeable.

The "Modular Monolith 2026 Complete Guide" piece on dev.to pairs **Spring Modulith's** declared module boundaries with ArchUnit assertions — Spring Modulith verifies the boundary at runtime; ArchUnit verifies the boundary at build time. Both belt and suspenders, and both essentially free once configured.

## The Author/Enforce Split

The right collaboration shape with an agent is the **author/enforce split**: humans author the rules, agents enforce them. Authoring a rule means deciding *what* should be invariant — that decision encodes taste, judgment about future change, and tradeoffs the agent has no basis to weigh. Enforcing a rule means writing the ArchUnit assertion, wiring it into CI, configuring the pre-commit hook, and adding the failure message — entirely mechanical work that an agent does faster and more consistently than a human.

There is a third capability worth naming: **rule generation from ADRs**. Given a clearly written ADR — one that states the decision, the rationale, and the consequences — an agent can draft the fitness function implementation. The human reviews the rule (not the 50 files of code the rule protects), approves it, and wires it in. The agent is good at translating "never import infrastructure types in domain classes" into an ArchUnit fluent API call or an import-linter contract; it is unreliable at deciding *which* rules matter enough to add in the first place. The ADR gives it the *what*; the agent produces the *how*.

Alexandre Amado Castro's **"Stop Architecture Drift: Operationalizing ADRs with Automated Fitness Functions"** is the cleanest writeup of the **ADR → fitness function → CI** pipeline pattern. The flow: every architecturally significant decision becomes an ADR; every ADR with an enforceable invariant gets a fitness function; every fitness function runs in CI and is referenced by the ADR. The ADR explains the *why*; the fitness function enforces the *what*. The aipatternbook.com "Architecture Fitness Function" entry frames the same pattern as the primary mechanism for "agents bouncing off rules" — which is exactly the [instruction-layer](../context-engineering/instruction-layer.md) move applied to architecture. You're not telling the agent the rule in CLAUDE.md; you're letting the build tell the agent the rule, every time.

The split matters because agents are excellent at *implementing* a fitness function from a clear ADR, and unreliable at *deciding* what should be a fitness function in the first place. Ask an agent "what fitness functions should we add?" and you get a plausible-looking list of generic rules. Ask it "implement an ArchUnit rule that enforces this ADR" and you get a working PR. Keep the decision in human hands; delegate the implementation. This pairs naturally with the [orchestration-layer](../context-engineering/orchestration-layer.md) pattern — the orchestrator decides; the workers implement.

## Traps

- **Rules without rationale.** A fitness function that fails with `"domain must not depend on infrastructure"` and no further explanation will, six months from now, be triaged by an agent that has never heard of hexagonal architecture and will confidently propose to "fix the false positive" by deleting the rule. Always include a `WHY` comment in the rule definition that links to the ADR or the postmortem. The rule's failure message should also link back. Make the rationale impossible to miss.
- **Disabled instead of fixed.** The agent learns very quickly that adding `// archunit:ignore` makes the failure go away. Treat ignore annotations as explicit code-review surface — grep for them in CI, require justification comments, and cap their total count. A growing population of ignores is a fitness-function failure of its own.
- **Coverage without depth.** Every layer has one rule, none of them check the architectural invariants that actually matter. The naming-convention check is green; the layering invariant is unenforced. Audit your fitness function suite the same way you audit test coverage: not by count, but by *what would break in production if this check disappeared*.
- **Rules in CI but not in the agent's loop.** This is the techdebt.best point and it deserves its own bullet. If the agent only learns about a rule after a 10-minute CI cycle, it has built five layers of code on top of the violation by the time the failure reports back, and unwinding is expensive enough that the agent will try to patch around the rule rather than respect it. Run fitness functions in **pre-commit hooks**, **pre-tool-use hooks**, and ideally as a `bash` command the agent runs itself between edits. For Claude Code specifically: the `PreToolUse` hook fires before any tool call; a hook that runs `import-linter check` or `dependency-cruiser` before allowing a file write in `domain/` gives the agent immediate feedback in its own loop, before the violation is baked into a diff. The shorter the loop, the more the rule shapes the agent's behavior rather than punishing it after the fact. Pair this with [contract-testing](contract-testing.md) and [bdd-for-agents](bdd-for-agents.md) for the full feedback envelope; pair it with [ddd-boundaries](ddd-boundaries.md) when the rule itself is a domain boundary.

## Action Step

Write **one** ArchUnit-style rule for your project this week (or the equivalent in your language: ts-arch, import-linter, NetArchTest, dependency-cruiser, ESLint). Pick one you are tired of catching in PR review — the one you sigh about every time a junior or an agent crosses the line. Add a `WHY` comment in the rule source that links to the ADR, the Slack thread, the postmortem, or the wiki page that explains the rule. Wire it into CI so the build fails on violation, and into a pre-commit hook so the agent gets the feedback inside its own loop.

Then start the next agent session and watch it bounce off the rule. The agent will try the disallowed import, the build will fail, the agent will read the failure message, follow the link, and route around the constraint. That bounce is the entire point. You have just moved one piece of architectural knowledge out of your head and into the system, where every future session — yours, your teammate's, an agent's at 3am — will respect it without you being there.

Then write a second one. The first fitness function is the hardest; the tenth is muscle memory. The compound effect of ten cheap rules is that the agent's environment becomes a stronger teacher than any CLAUDE.md file you can write. See [agentic-tdd](agentic-tdd.md) for how this composes with behavioral testing, [comprehension-debt](comprehension-debt.md) for what fitness functions cost (and save) over time, and [sources](sources.md) for the full citation list.

---

**Next Session:** [test-the-tests](test-the-tests.md)
