# Module 4: Cross-Session Verification — Design Spec

**Date:** 2026-04-27
**Status:** Approved (awaiting user review of this spec)
**Author:** Drafted with Claude (Opus 4.7)

---

## Problem

The user wants to learn how to gain confidence that AI-generated code is correct *without reading all of it* — and specifically how to prevent a feature added in one agent session from silently breaking a feature built in a previous session (different context window, different agent, no shared memory). The user is fluent in BDD and DDD as classical practices and wants to see how those (and adjacent verification techniques) apply to agentic codegen.

The existing wiki covers context engineering (Module 1), agent architecture patterns (Module 2), and verification habits inside a single session (Module 3: TDD, comprehension debt, ACI). It does not cover **cross-session verification** — the artifacts, contracts, and automated checks that catch regressions across independent agent sessions.

## Goal

Add a new **Module 4: Cross-Session Verification** to the learning wiki: 8 sessions (S22–S29), each a standalone markdown file under `verification/`, structured like the existing module sessions and integrated with the `/study` slash command via frontmatter.

## Non-goals

- Teach BDD or DDD foundations (user is already fluent).
- Restructure or rewrite Modules 1–3.
- Build any tooling, code, or new slash commands.
- Produce a published article or external blog post.

## Module structure

Promote new content to its own module rather than expanding Module 3:

- **Module 3 — Verification & Governance** (unchanged): per-session verification habits — TDD, comprehension debt, ACI/tool engineering.
- **Module 4 — Cross-Session Verification** (new): verification artifacts and automated checks that span independent agent sessions.

The split mirrors the conceptual distinction: M3 is the agent-and-you loop within one session; M4 is the agent-and-future-agent loop across sessions.

## Sessions

Each session produces one markdown file under `verification/`. Target ~1,500–2,200 words per file. Structure follows the existing template: opening framing → key concepts → practical applications → traps/anti-patterns → action step → citations.

### S22 — The cross-session regression problem
**File:** `verification/cross-session-regression.md`
Frames why this is a distinct problem class from classical regression. Three failure shapes:
1. **Silent contract break** — interface still compiles, behavior changes.
2. **Parallel re-implementation** — second session re-derives a capability that already exists, creating divergent paths.
3. **Invariant violation** — first session enforced a rule by discipline, not by code; the second session never knew.

Establishes why "just read the code" doesn't scale and why context engineering alone is insufficient — verification has to live in artifacts that fail loudly. Sets up the rest of the module.

### S23 — BDD for agents
**File:** `verification/bdd-for-agents.md`
Gherkin scenarios as both the spec the agent writes against and the regression net the next session can't break. Living documentation reframed: the next session reads `.feature` files instead of code. Scenarios as instruction-layer context (cheap to load, high signal). Outside-in workflow with agents. Traps: scenario sprawl, over-specification, scenarios as a second implementation. Brief 2026 tooling survey (Cucumber, SpecFlow, Behave, plus any AI-native BDD tools surfaced by research).

### S24 — DDD bounded contexts as agent session boundaries
**File:** `verification/ddd-boundaries.md`
Core insight: 1 bounded context ≈ 1 agent session ≈ 1 blast radius. Context maps as the artifact that survives between sessions. Aggregates and invariants as testable constraints the agent literally can't violate. Ubiquitous language as a context-engineering primitive — shared vocabulary cuts cross-session drift. Conway's law applied to agent topology.

### S25 — Anti-corruption layers & consumer-driven contracts
**File:** `verification/contract-testing.md`
Direct answer to the user's core question. ACL as the verification gate at every context boundary. Consumer-driven contracts (Pact-style): consumer publishes expectations, provider's CI fails if it can't satisfy. Session A builds provider, Session B builds consumer, contract test catches the break before merge. Schema-first / OpenAPI-first as the lighter-weight version. Pact broker workflow.

### S26 — Architectural fitness functions
**File:** `verification/fitness-functions.md`
Neal Ford's *Building Evolutionary Architectures* as the primary citation. Categories: dependency rules, layering, naming, perf budgets, security. Tools: ArchUnit, ts-arch, dependency-cruiser, custom eslint rules. Why these are uniquely suited to agent regression: agents silently violate rules you hold in your head; fitness functions move those rules into CI where the agent bounces off them. Agents can write fitness functions, but humans author the rules.

### S27 — Test-the-tests: mutation & property-based testing
**File:** `verification/test-the-tests.md`
The agent says "I added tests." Do they catch anything? Mutation testing (PIT, Stryker, Mutmut) measures kill rate. Property-based testing (Hypothesis, fast-check, QuickCheck) covers input spaces the agent didn't enumerate. Why this matters more in agentic dev than classical dev. The 2026 conversation on whether agents generate mutation-surviving tests without explicit prompting.

### S28 — Characterization tests + the handoff problem
**File:** `verification/characterization-and-handoff.md`
Feathers-style characterization tests to pin behavior before agents touch legacy. Approval/golden/snapshot tests as the modern lightweight form. The pattern: agent's first task in a legacy area is "write characterization tests until you can describe behavior," only then modify. The handoff question: where do scenarios, contracts, fitness functions live so the next agent session discovers them? AGENTS.md / CLAUDE.md patterns that point at the verification surface — closes the loop back to Module 1.

### S29 — Sources & deep reads
**File:** `verification/sources.md`
Tiered:
- **Essential:** Ford *Building Evolutionary Architectures*, Adzic *Specification by Example*, Evans/Vernon DDD, Feathers *Working Effectively with Legacy Code*, Pact docs.
- **High-value:** Hypothesis docs, ArchUnit, mutation testing intros, 2026 BDD-for-AI articles.
- **Deep cuts:** HN threads, recent blog posts surfaced via research sweep.

Format mirrors `context-engineering/sources.md` and `agent-patterns/sources.md`.

## File-level changes

**New files** (all under `verification/`, all with frontmatter `last_updated: 2026-04-27`, `last_read: null`, `status: unread`):
- `cross-session-regression.md`
- `bdd-for-agents.md`
- `ddd-boundaries.md`
- `contract-testing.md`
- `fitness-functions.md`
- `test-the-tests.md`
- `characterization-and-handoff.md`
- `sources.md`

**Modified files:**
- `verification/index.md` — add the 8 new files; update the module framing to introduce the M3 vs M4 split.
- `learning-plan.md` — add Module 4 section (sessions 22–29); update the summary table at the bottom (~29 sessions total, ~6 hours).
- `README.md` — only if the verification description needs updating; otherwise leave alone.

## Sourcing strategy

- **Foundations** (Ford, Adzic, Evans, Vernon, Feathers, Pact docs) — cited directly without external research; these are well-known.
- **2026-specific angles** (BDD-for-AI tooling, agent-generated mutation tests, AGENTS.md verification handoff patterns) — researched per session as it's written, using:
  - The 7 sources active in `/last30days` (per startup hook).
  - TL;DR-style sources extended back ~12 months (filtered for content still relevant given the field's pace).
  - Targeted WebSearch on each topic.
  - HN/Algolia for community discussion.
- Citations follow the existing pattern (inline links + tiered list in `verification/sources.md`).

## Writing & delivery mode

Batch: write all 8 files in one pass, then commit together. User has opted in to absorbing the module as a unit rather than per-session.

## Integration with `/study`

No code changes to `/study`. The slash command auto-discovers the new files via frontmatter once they exist. The user can run `/study` to surface them in the next briefing.

## Out-of-scope decisions deferred

- Whether to add `/study`-level filters or sub-module navigation later (only worth doing if more modules are added).
- Whether the verification module eventually warrants its own tooling (skill, slash command, audit script) — revisit after the user has read the module.

## Success criteria

- 8 new files exist with correct frontmatter and consistent voice.
- Module 4 entry added to `learning-plan.md` with summary table updated.
- `verification/index.md` updated.
- Each session ends with citations; `verification/sources.md` consolidates them in tiers.
- Running `/study` after the changes surfaces Module 4 as unread material.
