---
title: Kent Beck — detailed research
parent: Kent Beck
nav_order: 1
last_updated: 2026-10-26
last_read: null
status: unread
research_cutoff: 2026-10-26
research_checked: 2026-10-26
cache_schema: 1
---

# Kent Beck: Augmented Coding With Judgment

[Profile and comparison claims](index.md) · [Worked feature and prompts](workflow.md) · [Source findings](sources.md) · [Slide notes](slides.md)

## 1. Approach in brief

**Stated.** Beck's June 2025 account distinguishes augmented coding from merely accepting behaviour: he remains concerned with code complexity and testing, and intervenes when generation goes off course. [S01](sources.md#s01)

**Inferred synthesis.** The recurring question is how to retain effective judgment as typing gets cheaper. This profile treats feedback, design choices, and human agency as related concerns, rather than reducing Beck to “make the agent use TDD.” This is an interpretation of the sources below, not a named framework he has published.

**Scope:** public material inspected on 26 October 2026. The current cache includes historical design principles, a concrete project, published working instructions, experiments, and public descriptions of recent thinking. It does not claim access to paid essays or a complete daily setup.

## 2. Techniques and principles

### Tests as a sequence of decisions

**Documented instructions.** The appendix to the June 2025 account uses a test plan to direct small test-first increments, with structural and behavioural work kept separate. [S01](sources.md#s01) The public BPlusTree3 README also describes reference-comparison tests and separate commits. [S02](sources.md#s02)

**Suggested application.** In a reward service, “one request adds ten points” and “a replay adds nothing” are different questions. A plan makes the next question visible before the assistant invents a complete subsystem. Start with a test that tells you something specific about the desired rule. An import failure tells you about wiring; an unexpected total tells you about reward behaviour. Both can matter, but they are different feedback.

**Tradeoff.** Test-first instructions are a procedural aid. They do not establish that the requirement is useful, that all relevant cases have been considered, or that the assistant actually followed the procedure. Inspect the observation path and the resulting diff.

### Separate structure from behaviour

**Stated.** Beck's 2022 distinctions describe the value of separating changes with different reversibility and impact. His QCon presentation asks when tidying makes the next change easier; it is a judgment about timing, not an unconditional cleanup mandate. [S04](sources.md#s04), [S05](sources.md#s05)

**Suggested application.** Extracting a name for an existing calculation can be a structural change. Changing when points are awarded is behavioural. If both appear in one large patch, a reviewer has to reconstruct which altered statements are supposed to preserve behaviour and which are supposed to change it. Separating them makes that question easier to answer.

For a small, clear reward handler, the right decision may be to add the behaviour directly. For a handler whose persistence and reward calculation cannot be observed independently, a narrow preliminary refactor may pay off immediately. Do not invent a repository abstraction merely because a diagram looks tidier.

### Outcomes before orchestration

**Self-reported experiment.** In April 2026 Beck described using Intent's coordinator, implementer, and verifier arrangement on an adaptive radix tree. He found himself carrying coordination state and questioned whether the arrangement delivered the outcome he wanted. The session was sponsored by Augment Code. [S06](sources.md#s06)

**Suggested application.** A team considering several agents should name the cost they are trying to remove. Independent documentation research may separate cleanly; simultaneous edits to a small reward handler may require more coordination than the work itself. Count review and conflict resolution as work. A larger agent count is a tool configuration, not a result.

### Present features and future change

**Stated.** In “Genie Tarpit,” Beck distinguishes working features from the flexibility to change software later. He explicitly leaves the general solution open rather than supplying a proven recipe. [S07](sources.md#s07)

**Suggested application.** A reward patch can satisfy today's examples while leaving all state in a global mutable object that is difficult to restart, test, or evolve. Conversely, an elaborate event platform can be highly extensible while never completing the actual reward operation. Keep two review questions: does the agreed behaviour work, and can the next plausible change be understood? Do not use hypothetical flexibility to excuse missing behaviour.

### Human needs and feedback latency

**Stated, public excerpts only.** In October 2026, Beck's visible essay introductions describe reorienting augmented-coding tools towards human needs and fixing feedback-loop time while varying scope. The full paid arguments were not inspected. [S08](sources.md#s08), [S09](sources.md#s09)

**Suggested application.** Establish a loop you can understand: inspect one result, make one decision, and continue. When a task repeatedly produces a long wait followed by an incomprehensible patch, reduce the scope or improve the feedback boundary. Track whether you can still explain the decisions. This is a local experiment, not a claim that everyone needs a particular number of seconds or lines.

## 3. A feature from idea to release

The cache supports a concrete *development* loop more strongly than a complete universal *release* policy. The June account supplies working instructions; the repository supplies project-specific checks. It does not establish Beck's deployment architecture for every product. [S01](sources.md#s01), [S03](sources.md#s03)

The full [neutral reward walkthrough](workflow.md) applies these ideas without pretending Beck demonstrated that feature. It includes explicit decisions, original prompts, evidence to retain, and stop conditions. It deliberately avoids adding UI, networking, concurrency, or an assumed database to only this engineer's example.

For adoption, first find the existing command that observes the changed behaviour. A polished plan without executable feedback is still a plan. Once a passing increment is reviewed, integrate and release through the actual project's process. An agent's completion narrative cannot substitute for that process.

## 4. Tools and setup

| Tool or artifact | Relationship and evidence | Useful role | Limits |
|---|---|---|---|
| BPlusTree3 | Public project described by Beck; repository inspected | Concrete test and benchmark example | No benchmarks were reproduced; README performance claims are not general agent-productivity evidence |
| Published test-plan instructions | Authored appendix, June 2025 | Small next-test steering | Historical published instructions, not proof of the current prompt in every session |
| `agent.md` | Inspected project artifact, blob `813afacbd84e623ebfc3a3a01cf1092b8f3f809d` | Local conventions and validation | Different content from the earlier essay appendix; project context matters |
| Augment Remote Agent | Self-reported use in the June account | A project-specific rewrite experiment | Newsletter sponsorship disclosed; not a universal tool endorsement |
| Intent, Augment Code | Self-reported April 2026 session | Multi-agent exploration | Coordination criticism and sponsorship are part of the same account |
| Rust Cargo and Criterion | Named by project instructions | Tests and performance feedback | These commands apply to that repository |
| TCR with skills | Public session description, April 2026 | Experiment with test/commit/reset feedback | Full recording and a reusable skill implementation were not inspected |

Sources: [S01–S03](sources.md), [S06](sources.md#s06), [S10](sources.md#s10).

### Verified project commands, not a universal installation recipe

The inspected BPlusTree3 instructions include:

```text
cd rust
cargo fmt --all
cargo test --workspace
cargo bench --bench comparison deletion
cargo run --release --bin large_delete_benchmark
```

These are reference commands from that project's current instructions, not commands to paste into the reward app. The file also explicitly scopes its no-internal-feature-flag convention to a project with no external users. Do not generalise that into a prescription for deployed products. [S03](sources.md#s03)

No tool was installed, no repository was executed, and no private environment configuration was inferred during research. Use the existing project's compatible test runner for the practical lab.

## 5. Reusable working prompts

The [workflow chapter](workflow.md#original-working-prompts) contains original prompts for baseline inspection, a test plan, one increment, structural review, and handoff. These are **suggested adaptations**, not copied or attributed personal prompts.

A prompt should name the observable output the user needs. “Use good TDD” leaves many hidden choices; “show the failure for replayed submission `a`, then stop after making that case pass” gives a concrete point for review. Such wording still needs tool execution and inspection to establish what happened.

## 6. Failure modes and limits

| Failure | Diagnostic in the reward example | Proposed response |
|---|---|---|
| The assistant codes beyond the agreed increment | Adds accounts, dashboards, retries, or a queue without a requirement | Stop, inspect the diff, return to the one behaviour |
| Tests change to accommodate a defect | Expected 10 becomes 20 after replay | Revisit the rule and reject an unexplained expectation change |
| Local success conceals persistence failure | A second process awards again | Test the existing persistence path after restart |
| Cleanup overwhelms the feature | A small fix becomes a framework migration | Ask which immediate obstacle the structure change removes |
| Parallelism consumes the attention it promised to save | More time assigning/reviewing work than deciding behaviour | Try one owner and compare end-to-end effort |
| A metric replaces judgment | More generated code, passing tests, or faster generation becomes “success” | Review the useful result and the ability to change it |
| A historical artifact becomes a stereotype | One project's conventions are treated as a universal current policy | Retain source dates and context |

The first two diagnostics align with warnings in Beck's project account; the table's reward examples and responses are this guide's application. [S01](sources.md#s01) The coordination concern comes from his Intent account. [S06](sources.md#s06)

**Not established:** a standard security sandbox, canonical permission scheme, durable memory architecture, mandated model, fixed agent count, universal mutation-testing requirement, or a fully documented production deployment policy. Unknowns are not objections to those practices.

TCR includes automatic reset semantics in the inspected session description. Do not apply destructive reset automation to a working directory containing uncommitted work; an isolated exercise with recoverable state is the appropriate place to investigate it. No reset-based automation is included here. [S10](sources.md#s10)

## 7. First practical lab

**Suggested adaptation.** Use the exact reward contract in the [workflow](workflow.md#shared-contract). Save a baseline, one meaningful failure, a small passing increment, and the restart/replay evidence. Keep structural and behavioural diffs distinguishable. Finish with a short explanation of the state that prevents duplicates and the important assumptions left untested.

Measure time to a reviewed result, rework, and your ability to explain the implementation. Compare with your usual workflow on another comparable task; do not claim a productivity result from one successful exercise.

## 8. Comparison profile

The [profile's C01–C12 entries](index.md#comparison-evidence) provide the shared D01–D12 dimensions with evidence labels and sources. They distinguish historical instructions, current inspected project conventions, self-reported experiments, inferred synthesis, and unresolved gaps.

One useful future comparison is whether a workflow emphasises human control of the next test, an acceptance contract at a larger boundary, or autonomous orchestration. Establish each person's evidence before calling those positions incompatible. Beck's own material shows that tool experiments and implementation details change over time.

## 9. Sources and research gaps

See [the dated source register](sources.md). Public pages and repository files were inspected; paid bodies and recordings were not accessed. The public interview page for October 2026 had inconsistent transcript speaker labels, so this cache relies on Beck's authored public excerpts for his recent human-needs framing rather than assigning ambiguous statements to him.

The archived findings are sufficient for the claims made here. They are not a complete bibliography of Beck's work or an exhaustive inventory of every tool he has ever used. Subsequent refreshes should add evidence without recycling claim IDs or silently overwriting dated changes in position.
