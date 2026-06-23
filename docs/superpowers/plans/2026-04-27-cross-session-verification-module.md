# Module 4: Cross-Session Verification — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a new Module 4 (Cross-Session Verification) to the learning wiki — 8 new markdown files under `verification/` plus updates to `verification/index.md` and `learning-plan.md` — all written and committed in a single batch.

**Architecture:** Pure content authoring task. Each session is one self-contained markdown file (~1,500–2,200 words) following the existing wiki template (frontmatter → opening framing → key concepts → practical applications → traps → action step → citations). Foundations are cited from canonical sources without external research; 2026-specific angles are researched per session via WebSearch and HN/TL;DR sweeps extending back ~12 months. All files committed together at the end.

**Tech Stack:** Markdown only. YAML frontmatter for `/study` integration. No code, no tests, no tooling changes.

**Spec:** `docs/superpowers/specs/2026-04-27-cross-session-verification-module-design.md`

**Voice & format conventions** (extracted from existing sessions like `verification/agentic-tdd.md`, `verification/comprehension-debt.md`, `context-engineering/agentic-dev.md`):
- Direct, practical, opinionated. No throat-clearing.
- Year markers used freely ("By 2026", "March 2026 finding").
- H2 sections, numbered sub-points where appropriate, bold key terms.
- End each file with `---\n\n**Next Session:** [[next-file-name]]` link.
- Frontmatter: `last_updated: 2026-04-27`, `last_read: null`, `status: unread`.
- Citations: inline links in body where the claim is made; consolidated tiered list in `verification/sources.md`.

---

## Task 0: Pre-flight setup

**Files:**
- Read: `verification/agentic-tdd.md` (voice reference)
- Read: `verification/comprehension-debt.md` (voice reference)
- Read: `verification/index.md` (current state before modification)
- Read: `learning-plan.md` (current Module 3 section + summary table)
- Read: `context-engineering/sources.md` (sources page format reference)
- Read: `agent-patterns/sources.md` (alternative sources page format reference)

- [ ] **Step 1: Re-read voice references**

Read the four files above to lock in tone, paragraph length, and structure before drafting. Specifically note: how they open (no preamble), how they cite (inline + named author), how they end (next-session link).

- [ ] **Step 2: Confirm working directory is clean**

Run: `git status`
Expected: clean working tree on `main` (or note any uncommitted work to preserve before starting).

---

## Task 1: Research sweep (batched, parallel)

Run a single broad research pass across all 8 session topics before drafting any prose. This avoids context-switching mid-write and ensures `sources.md` can be assembled coherently. Findings get noted in scratch — no files written yet.

**Files:**
- Scratch only (notes captured in agent context, not on disk).

- [ ] **Step 1: Dispatch parallel WebSearch queries**

Run these searches in parallel (single message, multiple WebSearch calls):
1. `"BDD" "AI agents" 2026 site:martinfowler.com OR site:cucumber.io`
2. `"Gherkin" "LLM" OR "AI agent" specification 2025..2026`
3. `"bounded context" "AI agent" OR "Claude Code" OR "Cursor" 2025..2026`
4. `"consumer-driven contract" "AI generated" OR "agent" 2025..2026`
5. `"Pact" testing "AI" OR "LLM" 2025..2026`
6. `"architectural fitness functions" 2025..2026 site:thoughtworks.com OR site:martinfowler.com`
7. `"ArchUnit" OR "ts-arch" OR "dependency-cruiser" "AI" OR "agent" 2025..2026`
8. `"mutation testing" "AI generated tests" OR "LLM" 2025..2026`
9. `"property-based testing" "AI agent" OR "LLM" 2025..2026`
10. `"characterization tests" OR "approval tests" "AI" OR "LLM" 2025..2026`
11. `"AGENTS.md" OR "CLAUDE.md" verification handoff 2026`

Capture: title, URL, author, date, one-sentence relevance note. Discard anything older than April 2025 unless it's a canonical reference (Ford, Adzic, Evans, Vernon, Feathers — these don't need search).

- [ ] **Step 2: Dispatch parallel HN/Algolia queries**

Run these in parallel via WebFetch on `https://hn.algolia.com/api/v1/search?query=...&tags=story`:
1. `BDD AI agents`
2. `consumer driven contracts AI`
3. `architectural fitness functions`
4. `mutation testing AI generated`
5. `DDD bounded context AI`

Capture top 3 results per query with score ≥50 from the past 12 months.

- [ ] **Step 3: Run /last30days sweep**

Use the 7 active sources from the startup hook. Look for any post in the last 30 days mentioning: BDD, DDD, contract testing, fitness functions, mutation testing, characterization tests, verification handoff, AGENTS.md.

- [ ] **Step 4: Consolidate research notes**

Organize findings into 8 buckets, one per session. Note any cross-cutting sources (likely Ford, Adzic, Pact docs) that will appear in multiple sessions.

---

## Task 2: Write S22 — `verification/cross-session-regression.md`

**Files:**
- Create: `verification/cross-session-regression.md`

- [ ] **Step 1: Write frontmatter and opening framing**

```yaml
---
last_updated: 2026-04-27
last_read: null
status: unread
---
```

Opening: 2 short paragraphs. The first defines the cross-session regression problem in one sentence and contrasts it with classical regression. The second names this as a distinct problem class and signals the structure of Module 4.

- [ ] **Step 2: Write "Three Failure Shapes" section**

H2 `## Three Failure Shapes`. Three numbered subsections:
1. **Silent contract break** — interface compiles, behavior changes. Concrete example: Session A returns `Result<T, E>`, Session B refactors to throw, all callers in same module updated, downstream consumer in another module not.
2. **Parallel re-implementation** — Session B doesn't discover the existing utility, builds a parallel one. Two implementations diverge over time.
3. **Invariant violation** — Session A held a rule by discipline ("never query inside this loop"), Session B never knew, introduces N+1 in CI-passing code.

Each ~150 words with a concrete example.

- [ ] **Step 3: Write "Why Reading the Code Doesn't Scale" section**

H2 `## Why Reading the Code Doesn't Scale`. Two paragraphs. Tie to comprehension debt (link to `[[comprehension-debt]]`) and the speed mismatch between agent generation and human reading.

- [ ] **Step 4: Write "Why Context Engineering Alone Is Insufficient" section**

H2 `## Why Context Engineering Alone Is Insufficient`. One paragraph. Context engineering loads the right facts into the next session, but it's a probabilistic input. Verification is the deterministic gate. Both are needed.

- [ ] **Step 5: Write "What This Module Covers" section**

H2 `## What This Module Covers`. Bulleted list mapping the failure shapes to the upcoming sessions: BDD (S23) and DDD (S24) prevent silent contract breaks and parallel re-implementation; contracts (S25) catch silent breaks at module boundaries; fitness functions (S26) enforce invariants; test-the-tests (S27) verifies the safety net is real; characterization tests (S28) lock down legacy before agent contact.

- [ ] **Step 6: Write Action Step**

H2 `## Action Step`. One concrete exercise: pick a multi-session feature you built recently. List three specific places where a future agent session could silently break it. For each, note which of the three failure shapes applies.

- [ ] **Step 7: Write closing footer**

```markdown
---

**Next Session:** [[bdd-for-agents]]
```

- [ ] **Step 8: Verify word count and citations**

Run: `wc -w verification/cross-session-regression.md`
Expected: 1500–2200 words. Note any inline citations that need to land in `verification/sources.md`.

---

## Task 3: Write S23 — `verification/bdd-for-agents.md`

**Files:**
- Create: `verification/bdd-for-agents.md`

- [ ] **Step 1: Write frontmatter and opening framing**

Same frontmatter as S22. Opening: BDD reframed for agentic dev — Gherkin scenarios are simultaneously the spec the current session writes against AND the regression net the next session can't break.

- [ ] **Step 2: Write "Scenarios as the Agent's Contract Surface" section**

H2 `## Scenarios as the Agent's Contract Surface`. The outside-in workflow: human writes (or approves) scenarios → agent generates step definitions and code → tests are the binary success criterion. Connect to S19 (Agentic TDD) — BDD is the specification-language version of "tests as prompts."

- [ ] **Step 3: Write "Living Documentation as Cross-Session Context" section**

H2 `## Living Documentation as Cross-Session Context`. The next session reads `.feature` files instead of code. Why this is high-signal context-layer material (cheap to load, written in domain language, executable so it can't go stale silently). Connect to instruction layer (`[[../context-engineering/instruction-layer]]`).

- [ ] **Step 4: Write "Outside-In with Agents" section**

H2 `## Outside-In with Agents`. Concrete workflow:
1. Human writes Given/When/Then for the feature.
2. Agent drafts step definitions, runs them (red).
3. Agent writes minimal production code to make them green.
4. Human reviews scenarios (not code) before merge.

Cite the Fowler "TDD Paradox" finding (see S19) as motivation for human-reviewed scenarios.

- [ ] **Step 5: Write "Traps and Anti-Patterns" section**

H2 `## Traps and Anti-Patterns`. Bulleted:
- **Scenario sprawl:** every edge case becomes a scenario; suite slows; agents start ignoring failures.
- **Over-specification:** scenarios pin implementation, not behavior; refactors require scenario rewrites.
- **Scenarios as second implementation:** step definitions duplicate production logic.
- **Imperative Gherkin:** Given/When/Then describing UI clicks instead of business outcomes.

Each ~50 words with a one-line fix.

- [ ] **Step 6: Write "Tooling in 2026" section**

H2 `## Tooling in 2026`. Cucumber (Ruby/JS/Java), SpecFlow (.NET), Behave (Python). Note any AI-native BDD tooling surfaced in research (e.g., scenario generators, agent-aware step definitions). Keep this short — 1 paragraph + bullets.

- [ ] **Step 7: Write Action Step**

H2 `## Action Step`. Pick a recently-agent-built feature. After the fact, write 3 Gherkin scenarios capturing the intended behavior. Open a fresh agent session, give it only the scenarios, ask it to extend the feature. Note where the agent's interpretation diverges from yours — that divergence is what scenarios prevent in cross-session work.

- [ ] **Step 8: Closing footer + word count check**

```markdown
---

**Next Session:** [[ddd-boundaries]]
```

Run: `wc -w verification/bdd-for-agents.md`
Expected: 1500–2200 words.

---

## Task 4: Write S24 — `verification/ddd-boundaries.md`

**Files:**
- Create: `verification/ddd-boundaries.md`

- [ ] **Step 1: Write frontmatter and opening framing**

Opening: state the core insight in the first sentence — *one bounded context, one agent session, one blast radius.* Second paragraph: this is DDD repurposed as agent-topology design.

- [ ] **Step 2: Write "Bounded Contexts as Session Boundaries" section**

H2 `## Bounded Contexts as Session Boundaries`. Why session = context: a session has limited context window, limited working memory, and limited ubiquitous-language vocabulary. Mapping one session to one context aligns the agent's cognitive surface with the model's natural seam. Cross-context calls then become explicit, not accidental.

- [ ] **Step 3: Write "Context Maps as Cross-Session Artifacts" section**

H2 `## Context Maps as Cross-Session Artifacts`. The context map is what survives between sessions. It tells the next session: here are the contexts, here are the relationships (Customer/Supplier, Conformist, Anti-Corruption Layer, Shared Kernel, Published Language). Recommend storing the context map in a discoverable location (e.g., `docs/context-map.md`) and referencing it from `AGENTS.md` / `CLAUDE.md`.

- [ ] **Step 4: Write "Aggregates and Invariants as Testable Constraints" section**

H2 `## Aggregates and Invariants as Testable Constraints`. The aggregate is the unit of consistency. If invariants are encoded in the aggregate's constructor/methods (raise on violation), the agent literally cannot produce code that violates them — the tests fail, the type checker complains, or the code throws at runtime. Contrast with invariants held in PR-review discipline.

- [ ] **Step 5: Write "Ubiquitous Language as a Context-Engineering Primitive" section**

H2 `## Ubiquitous Language as a Context-Engineering Primitive`. Shared vocabulary cuts cross-session drift more than any single technique. When the domain model, code identifiers, scenarios, and human conversation all use the same words, the agent has no room to invent synonyms. Connect back to `[[../context-engineering/instruction-layer]]` and `[[../context-engineering/knowledge-layer]]`.

- [ ] **Step 6: Write "Conway's Law for Agent Topology" section**

H2 `## Conway's Law for Agent Topology`. Conway: systems mirror the communication structures that build them. Agent corollary: codebases mirror the *session boundaries* used to build them. Bounded contexts are the deliberate version of this; ad-hoc session splits are the accidental version.

- [ ] **Step 7: Write "Traps" section**

H2 `## Traps`. Bullets:
- **Over-fragmentation:** every module declared a context; ACLs everywhere; coordination cost explodes.
- **Stale context map:** map written once, not updated; next session reads fiction.
- **Implicit shared kernel:** two contexts share types via accident, not declaration; refactor in one breaks the other.

- [ ] **Step 8: Write Action Step**

Pick a real codebase. Sketch a context map (even informally). Identify two places where you've previously had different agent sessions touch the same area. Were those areas in the same context (good) or crossing contexts (where you now want an ACL or contract)?

- [ ] **Step 9: Closing footer + word count check**

```markdown
---

**Next Session:** [[contract-testing]]
```

Expected: 1500–2200 words.

---

## Task 5: Write S25 — `verification/contract-testing.md`

**Files:**
- Create: `verification/contract-testing.md`

- [ ] **Step 1: Write frontmatter and opening framing**

Opening: name this as the most direct answer to the cross-session regression question. When two sessions touch opposite sides of a boundary, contracts are the only thing that catches the break before merge.

- [ ] **Step 2: Write "Anti-Corruption Layers as Verification Gates" section**

H2 `## Anti-Corruption Layers as Verification Gates`. Recap ACL from DDD: a translation layer at the boundary between two contexts. Reframe for agents: the ACL is *the* place where you assert "this is what we expect from the other side." Tests on the ACL are tests on the cross-context contract, even if no formal contract framework is involved.

- [ ] **Step 3: Write "Consumer-Driven Contracts (Pact Pattern)" section**

H2 `## Consumer-Driven Contracts (Pact Pattern)`. Walk through the workflow:
1. Consumer writes a test that mocks the provider's responses → generates a *contract file* declaring "I expect these responses."
2. Contract file gets published (Pact broker, git, S3).
3. Provider's CI pulls the contract and runs it against the real provider implementation.
4. Provider's CI fails if it can't satisfy what consumers expect.

Then: map this to sessions. Session A built the provider on Monday. Session B builds a new consumer on Friday. Session B's contract is the trip-wire that catches whatever Session A assumed but never enforced.

- [ ] **Step 4: Write "Schema-First as the Lighter-Weight Version" section**

H2 `## Schema-First as the Lighter-Weight Version`. OpenAPI / GraphQL schemas / Protobuf / TypeScript types at the boundary. Less ceremony than Pact, weaker guarantees (covers shape, not behavior). Right starting point for most teams.

- [ ] **Step 5: Write "What This Catches That Other Techniques Miss" section**

H2 `## What This Catches That Other Techniques Miss`. Bullets:
- BDD scenarios cover behavior *within* a context, not contracts *between* them.
- Fitness functions cover architecture, not message shapes.
- Type systems cover compile-time shape, not runtime contracts (especially across processes / async / serialized boundaries).

Contracts are the only technique that fails the consumer's CI when the provider drifts.

- [ ] **Step 6: Write "Pact Broker Workflow at Team Scale" section**

H2 `## Pact Broker Workflow at Team Scale`. Brief: broker stores contracts, runs `can-i-deploy` checks, prevents deploys when contracts would break. Cite Pact docs.

- [ ] **Step 7: Write "Traps" section**

H2 `## Traps`. Bullets:
- **Contracts as implementation mirrors:** consumer mocks copied from production responses; contracts pin current behavior, not consumer needs.
- **Skipped on internal modules:** teams adopt Pact for cross-team APIs but skip it within a service; cross-session breaks happen *inside* services too.
- **Provider verification skipped in CI:** broker is decorative, not a gate.

- [ ] **Step 8: Write Action Step**

Pick two modules in your project that one agent built and another touched later. Write one consumer-driven contract test (Pact, or even just an OpenAPI schema test). Wire it into CI. Note: this is an upfront investment that pays back the *next* time a session touches the provider.

- [ ] **Step 9: Closing footer + word count check**

```markdown
---

**Next Session:** [[fitness-functions]]
```

Expected: 1500–2200 words.

---

## Task 6: Write S26 — `verification/fitness-functions.md`

**Files:**
- Create: `verification/fitness-functions.md`

- [ ] **Step 1: Write frontmatter and opening framing**

Opening: name Neal Ford's *Building Evolutionary Architectures* as the primary citation. Frame fitness functions as the most underrated technique in the agentic regression toolkit.

- [ ] **Step 2: Write "What Fitness Functions Are" section**

H2 `## What Fitness Functions Are`. Definition: an automated check on an architectural characteristic. Atomic vs. holistic, triggered vs. continual. Examples kept short — one-liners.

- [ ] **Step 3: Write "Why They Matter More for Agentic Code" section**

H2 `## Why They Matter More for Agentic Code`. Three points:
1. Agents silently violate rules you hold in your head — fitness functions move those rules into CI where the agent bounces off them.
2. Agents have no continuity across sessions; fitness functions are the *codified institutional memory* of architectural decisions.
3. Agents will write fitness functions on request, but humans must author the rules.

- [ ] **Step 4: Write "Categories with Concrete Examples" section**

H2 `## Categories with Concrete Examples`. Five categories, each with a one-line concrete check:
- **Dependency rules:** `domain/` cannot import `infrastructure/`.
- **Layering:** controllers cannot call repositories directly.
- **Naming:** all public methods on aggregates start with a verb.
- **Performance budgets:** p95 < 200ms on `/api/checkout`.
- **Security:** no hardcoded credentials; no `eval` in production code.

- [ ] **Step 5: Write "Tooling in 2026" section**

H2 `## Tooling in 2026`. ArchUnit (Java), ts-arch / dependency-cruiser (TypeScript), Pyarchitecture / import-linter (Python), custom AST checks for niche rules. Plus: ESLint rules and the underrated trick of CI scripts that grep for forbidden patterns.

- [ ] **Step 6: Write "The Author/Enforce Split" section**

H2 `## The Author/Enforce Split`. Humans author the rules (they encode taste and tradeoffs). Agents enforce them (they write the checker code, integrate with CI). This split is the right collaboration shape — humans bring judgment, agents bring throughput.

- [ ] **Step 7: Write "Traps" section**

H2 `## Traps`. Bullets:
- **Rules without rationale:** future sessions don't know why the rule exists, propose to "fix the false positive" and remove it.
- **Disabled instead of fixed:** the agent learns to add `// archunit:ignore` annotations; rule erodes.
- **Coverage without depth:** every layer has one rule; deep architectural invariants go unchecked.

- [ ] **Step 8: Write Action Step**

Write one ArchUnit-style rule for your project (or the equivalent in your language). Pick one you're tired of catching in PR review. Add a `WHY` comment. Watch the next agent session bounce off it.

- [ ] **Step 9: Closing footer + word count check**

```markdown
---

**Next Session:** [[test-the-tests]]
```

Expected: 1500–2200 words.

---

## Task 7: Write S27 — `verification/test-the-tests.md`

**Files:**
- Create: `verification/test-the-tests.md`

- [ ] **Step 1: Write frontmatter and opening framing**

Opening: when the agent says "I added tests," do they catch anything? In agentic dev this question matters more than in classical dev because the test author and the code author are the same untrusted party.

- [ ] **Step 2: Write "Mutation Testing: Measuring Kill Rate" section**

H2 `## Mutation Testing: Measuring Kill Rate`. How it works: tool plants small changes (mutations) in production code, runs the test suite, counts how many mutations are killed (caught). Kill rate is the actual coverage metric, not line coverage. Tools: PIT (Java), Stryker (JS/TS/.NET/Scala), Mutmut (Python), Cargo Mutants (Rust).

- [ ] **Step 3: Write "Property-Based Testing: Coverage Beyond Examples" section**

H2 `## Property-Based Testing: Coverage Beyond Examples`. Generate inputs from a specification (the property) instead of enumerating examples. Tools: Hypothesis (Python), fast-check (JS/TS), QuickCheck (Haskell, ports to many languages). Why this matters with agents: agents enumerate the obvious examples, not the corner cases. Properties cover the input spaces the agent didn't think of.

- [ ] **Step 4: Write "Why This Matters More with Agents" section**

H2 `## Why This Matters More with Agents`. Three points:
1. Agents will satisfy any test you write. If the test is shallow, the code is shallow.
2. Agents pattern-match to typical examples; property-based tests are adversarial.
3. Mutation testing is the lie detector for "I added tests" claims.

- [ ] **Step 5: Write "Workflow Integration" section**

H2 `## Workflow Integration`. Don't run mutation testing on every PR (slow). Run it nightly or on a schedule. Set a kill-rate floor for critical modules. For property-based tests, add them at the same time as example-based tests — agents can write both if asked explicitly.

- [ ] **Step 6: Write "2026 Findings" section**

H2 `## 2026 Findings`. Cite any 2025–2026 research surfaced in Task 1's sweep on whether agents generate mutation-surviving tests. If sweep finds nothing definitive, frame as an open question and cite the most credible adjacent work.

- [ ] **Step 7: Write "Traps" section**

H2 `## Traps`. Bullets:
- **Mutation testing run too often:** suite times out; team disables.
- **Property tests with weak properties:** "result is not null" passes everything; teach the agent to specify domain invariants instead.
- **Coverage metric goal-seeking:** team optimizes kill rate by deleting hard-to-cover code instead of adding tests.

- [ ] **Step 8: Write Action Step**

Run a mutation tester (Stryker / PIT / Mutmut) on a file an agent recently touched. Look at surviving mutants. For each, decide: is the test missing, or is the production code dead? The surviving mutants are the gaps the agent left.

- [ ] **Step 9: Closing footer + word count check**

```markdown
---

**Next Session:** [[characterization-and-handoff]]
```

Expected: 1500–2200 words.

---

## Task 8: Write S28 — `verification/characterization-and-handoff.md`

**Files:**
- Create: `verification/characterization-and-handoff.md`

- [ ] **Step 1: Write frontmatter and opening framing**

Opening: two problems in one session because they're the same problem. Characterization tests pin behavior before agents touch legacy. The handoff problem asks: where do these tests (and scenarios, contracts, fitness functions) live so the *next* agent session discovers them?

- [ ] **Step 2: Write "Characterization Tests for Legacy" section**

H2 `## Characterization Tests for Legacy`. Cite Feathers, *Working Effectively with Legacy Code*. The pattern: characterize behavior before changing it. The agent equivalent: agent's first task in a legacy area is "write tests until you can describe what this code does." Only then does it modify.

- [ ] **Step 3: Write "Approval / Golden / Snapshot Tests" section**

H2 `## Approval / Golden / Snapshot Tests`. Modern lightweight characterization. Tools: ApprovalTests, jest snapshots, insta (Rust), syrupy (Python). When to use: legacy with complex output (HTML, JSON, generated code). Trap: snapshots blindly approved on first failure.

- [ ] **Step 4: Write "The Pattern: Characterize, Then Modify" section**

H2 `## The Pattern: Characterize, Then Modify`. Concrete workflow:
1. Agent: "Read this module and describe its behavior."
2. Agent: "Write tests that pin every behavior you described, even ones you think are buggy."
3. Human: review tests for correctness against intent.
4. Agent: now modify, re-running tests after each change.

- [ ] **Step 5: Write "The Handoff Problem" section**

H2 `## The Handoff Problem`. The verification artifacts (scenarios, contracts, fitness functions, characterization tests) are useless if the next session doesn't discover them. Three discoverability layers:
1. **Co-location:** tests next to code; scenarios next to features; contracts in a known directory.
2. **Instruction-layer pointers:** `AGENTS.md` / `CLAUDE.md` names the verification surface ("Run `npm run fitness` before declaring done; scenarios in `features/`").
3. **CI as backstop:** even if the agent ignores the pointers, CI fails the merge.

Cross-link to `[[../context-engineering/instruction-layer]]` and `[[../context-engineering/orchestration-layer]]`.

- [ ] **Step 6: Write "AGENTS.md / CLAUDE.md Patterns for Verification Handoff" section**

H2 `## AGENTS.md / CLAUDE.md Patterns for Verification Handoff`. Show a small example block (~10–15 lines) that:
- Lists the verification commands.
- Names where scenarios, contracts, fitness rules live.
- Specifies the order: characterize → modify → verify.
- States the kill-rate / contract-pass threshold.

- [ ] **Step 7: Write "Closing the Loop Back to Module 1" section**

H2 `## Closing the Loop Back to Module 1`. Brief: this module took the verification habits from Module 3 (per-session) and extended them into artifacts that span sessions. The artifacts only work because the instruction layer (Module 1) and orchestration layer (Module 1) point the next session at them. Verification and context engineering are two halves of the same problem.

- [ ] **Step 8: Write Action Step**

Identify a legacy file you'd be afraid to let an agent touch. In one session, generate characterization tests with the agent. In a *fresh* session, give the agent only the tests and `AGENTS.md` and ask it to refactor. Note where the verification net catches the second session's misunderstandings.

- [ ] **Step 9: Closing footer + word count check**

```markdown
---

**Next Session:** [[sources]]
```

Expected: 1500–2200 words.

---

## Task 9: Write S29 — `verification/sources.md`

**Files:**
- Create: `verification/sources.md`

- [ ] **Step 1: Write frontmatter and opening blurb**

Same frontmatter. One-paragraph opening mirroring `context-engineering/sources.md`: "An annotated bibliography of key sources on cross-session verification, organized by how essential they are."

- [ ] **Step 2: Write "Essential Reading" tier**

Each entry: `**[Title](url)**` + author/publisher line + 2–3 sentence annotation + "Most useful for: ..." line. Then `---`.

Mandatory entries (foundations):
- Neal Ford et al., *Building Evolutionary Architectures* (2nd ed.)
- Gojko Adzic, *Specification by Example*
- Eric Evans, *Domain-Driven Design*
- Vaughn Vernon, *Implementing Domain-Driven Design*
- Michael Feathers, *Working Effectively with Legacy Code*
- Pact documentation (`docs.pact.io`)

- [ ] **Step 3: Write "Strong References" tier**

Mandatory entries:
- ArchUnit user guide
- Stryker / PIT / Mutmut docs (one consolidated entry)
- Hypothesis docs (David MacIver)
- ApprovalTests project page
- Cucumber documentation

Plus any 2025–2026 articles surfaced in Task 1's sweep that materially shape practice.

- [ ] **Step 4: Write "April 2026 Updates" tier**

For sources newer than April 2025 from the research sweep: title, author, date, 2–3 sentence annotation. Mirror the format in `context-engineering/sources.md`'s recent-updates section.

- [ ] **Step 5: Write "HN Threads" tier**

For each thread surfaced in Task 1 step 2: title, link to HN discussion, point count, comment count, one-sentence note on what the thread reveals.

- [ ] **Step 6: Closing footer**

No "Next Session" link (this is the last file in the module).

- [ ] **Step 7: Verify cross-references**

Skim S22–S28 for inline citations. Confirm every cited source appears in `sources.md`. Add anything missing.

---

## Task 10: Update `verification/index.md`

**Files:**
- Modify: `verification/index.md`

- [ ] **Step 1: Update frontmatter**

Bump `last_updated` to `2026-04-27`.

- [ ] **Step 2: Reframe the opening paragraph**

Current opening positions verification as Module 3. Update to acknowledge Module 4 split: Module 3 is per-session verification habits; Module 4 is cross-session verification artifacts. Keep it short — 2 paragraphs total.

- [ ] **Step 3: Update Directory Contents**

Add Module 4 sections beneath the existing Module 3 list. New structure:

```markdown
## Module 3: Per-Session Verification

- [[agentic-tdd]] — Using tests as the primary specification and success criterion for agents.
- [[comprehension-debt]] — Strategies for maintaining cognitive sustainability and system understanding.
- [[../context-engineering/tool-engineering]] — Designing robust Agent-Computer Interfaces (ACI).

## Module 4: Cross-Session Verification

- [[cross-session-regression]] — The cross-session regression problem and why classical regression thinking falls short.
- [[bdd-for-agents]] — Gherkin scenarios as agent contracts and living documentation.
- [[ddd-boundaries]] — Bounded contexts as agent session boundaries.
- [[contract-testing]] — Anti-corruption layers and consumer-driven contracts.
- [[fitness-functions]] — Architectural fitness functions as codified institutional memory.
- [[test-the-tests]] — Mutation and property-based testing for agent-written tests.
- [[characterization-and-handoff]] — Characterization tests for legacy plus the verification handoff problem.
- [[sources]] — Annotated bibliography for the module.
```

---

## Task 11: Update `learning-plan.md`

**Files:**
- Modify: `learning-plan.md`

- [ ] **Step 1: Add Module 4 section**

Insert after the existing "Module 3: Verification & Governance (Sessions 19–21)" block. Match the formatting of existing module sections (heading, intro paragraph, then per-session blocks with **Read** / **Time** / **Key takeaway** / **Action**).

Module 4 intro (one paragraph): Module 3 covered verification *within* a session. Module 4 covers verification *across* sessions — the artifacts, contracts, and automated checks that catch regressions when one agent session breaks something a previous session built.

Then the 8 session blocks. For each: pull the H2 framing from the file you just wrote, condense the action step to one or two sentences, estimate time at ~12–18 minutes per session based on the word count.

- [ ] **Step 2: Update the summary table**

Current table sums to 21 sessions, ~4.2 hours. New table adds:

```markdown
| **4: Cross-Session Verification** | | | |
| Cross-session regression + BDD + DDD | 22-24 | ~45 min | The problem, scenarios as contracts, contexts as boundaries |
| Contracts + Fitness Functions | 25-26 | ~30 min | Catching breaks at module boundaries; codifying invariants |
| Test-the-tests + Handoff | 27-28 | ~30 min | Verifying the safety net; making it discoverable to the next session |
| M4 Sources | 29 | ~10 min | Bibliography |
| **Total** | **29 sessions** | **~6 hours** | |
```

Adjust per-row times based on actual word counts. Keep the existing rows for Modules 1–3 unchanged.

- [ ] **Step 3: Update the "What's new" header**

Add a new line at the top of the file beneath the existing "What's new" block:

```markdown
**What's new (April 27, 2026):** Module 4 added — Cross-Session Verification (8 sessions, S22–S29). Covers BDD as agent contract surface, DDD bounded contexts as session boundaries, consumer-driven contracts, architectural fitness functions, mutation/property-based testing, and characterization tests + verification handoff. Direct response to the cross-session regression problem.
```

- [ ] **Step 4: Update bottom-of-file pacing line**

Change "At one session per day, you'll finish in about 3 weeks. At two per day, under 11 days." to reflect 29 sessions: "At one session per day, you'll finish in about 4 weeks. At two per day, about 2 weeks."

---

## Task 12: Final review pass

**Files:**
- All files created/modified in Tasks 2–11.

- [ ] **Step 1: Run `wc -w` on all 8 new files**

Run: `wc -w verification/cross-session-regression.md verification/bdd-for-agents.md verification/ddd-boundaries.md verification/contract-testing.md verification/fitness-functions.md verification/test-the-tests.md verification/characterization-and-handoff.md verification/sources.md`

Expected: each between 1500–2200 words (sources.md may be shorter, ~800–1500).

- [ ] **Step 2: Frontmatter audit**

Run: `head -5 verification/cross-session-regression.md verification/bdd-for-agents.md verification/ddd-boundaries.md verification/contract-testing.md verification/fitness-functions.md verification/test-the-tests.md verification/characterization-and-handoff.md verification/sources.md`

Confirm every file has `last_updated: 2026-04-27`, `last_read: null`, `status: unread`.

- [ ] **Step 3: Cross-reference audit**

For each S22–S28: confirm "Next Session" link points to the correct next file. S29 has none. Confirm all `[[wiki-links]]` resolve to existing files.

- [ ] **Step 4: Citation audit**

For each inline citation in S22–S28, confirm the source is listed in `verification/sources.md` at the appropriate tier.

- [ ] **Step 5: Voice consistency spot-check**

Read the opening paragraph of each session aloud. Compare against `verification/agentic-tdd.md` and `verification/comprehension-debt.md`. Anything that sounds like throat-clearing, hedging, or marketing copy gets cut.

---

## Task 13: Single batch commit

**Files:**
- All from Tasks 2–11.

- [ ] **Step 1: Stage new and modified files**

Run:
```bash
git add verification/cross-session-regression.md \
        verification/bdd-for-agents.md \
        verification/ddd-boundaries.md \
        verification/contract-testing.md \
        verification/fitness-functions.md \
        verification/test-the-tests.md \
        verification/characterization-and-handoff.md \
        verification/sources.md \
        verification/index.md \
        learning-plan.md
```

- [ ] **Step 2: Verify staging**

Run: `git status`
Expected: 8 new files + 2 modified files staged. No `docs/` files (gitignored).

- [ ] **Step 3: Commit**

Run:
```bash
git commit -m "$(cat <<'EOF'
add Module 4: Cross-Session Verification (8 sessions)

New module covering verification artifacts and automated checks that
span independent agent sessions: cross-session regression problem,
BDD for agents, DDD bounded contexts as session boundaries,
consumer-driven contracts, architectural fitness functions, mutation
and property-based testing, characterization tests + verification
handoff, and sources.

Updates verification/index.md to reflect M3/M4 split and
learning-plan.md with Module 4 sections (S22-S29) and refreshed
summary table.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

- [ ] **Step 4: Confirm commit**

Run: `git log -1 --stat`
Expected: 8 new files, 2 modified, sane line counts.

---

## Self-review

**Spec coverage check:**
- S22 cross-session regression problem ✓ (Task 2)
- S23 BDD for agents ✓ (Task 3)
- S24 DDD bounded contexts ✓ (Task 4)
- S25 ACL + consumer-driven contracts ✓ (Task 5)
- S26 architectural fitness functions ✓ (Task 6)
- S27 mutation + property-based testing ✓ (Task 7)
- S28 characterization tests + handoff ✓ (Task 8)
- S29 sources ✓ (Task 9)
- `verification/index.md` updated ✓ (Task 10)
- `learning-plan.md` updated, summary table refreshed ✓ (Task 11)
- Frontmatter on all new files ✓ (Task 12 step 2)
- Batch commit ✓ (Task 13)
- Research sweep extending ~12 months back ✓ (Task 1)

**Placeholder scan:** No "TBD"/"TODO"/"implement later". Each writing task spells out the section list and intent. Where research is needed, the search queries are explicit.

**Type / name consistency:** File names match the spec exactly across all tasks. Wiki-links and "Next Session" pointers form a clean chain S22→S29 with no dead ends.

**Scope:** Single module, ~8 hours of writing work. Bounded.
