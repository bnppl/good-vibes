---
title: Gojko Adžić — detailed research
parent: Gojko Adžić
nav_order: 1
last_updated: '2026-10-27'
last_read: null
status: unread
research_cutoff: '2026-10-27'
research_checked: '2026-10-27'
cache_schema: 1
---

> **Scope update — 27 October 2026:** Start with [recent AI evidence](recent-ai.md). The material below retains earlier principles, dated reports and our optional adaptations. It must not be read as a complete current personal AI workflow.

# Gojko Adžić — detailed research

**A useful comparison is not “BDD versus agents.” It is how people keep product intent, decisions and verification inspectable as more implementation is automated.**

Research horizon and verification date: **27 October 2026**. This profile combines current public factory artifacts with explicitly dated earlier writing. It does not infer that every historical technique remains a daily habit.

[Profile and evidence](index.md#comparison-evidence) · [Worked example](workflow.md) · [Tools](tools.md) · [Sources](sources.md)

## Approach in brief

**Stated.** The September 2026 talk contrasts a vibe-coded **"Dark Factory"** (where agents orchestrate agents via **"markdown prayers"** and humans inspect only at the finish line) with a plan-driven **"Lights-On Factory"** built on deterministic guardrails and visible decisions. It maps a three-stage supervision progression (**`Dictating → Regulating → Supervising`**) and reports that shifting repeatable micro-decisions from LLM inference to deterministic computation cuts token usage by ~80% and runs 6–10x faster. [S01](sources.md#s01)

**Stated.** His June 2026 product essay warns of the **"Chef Gusteau" / "junk food" problem**: when AI coding agents make technical execution effortless, builders lacking product management skills produce *"a beautifully engineered dish that nobody ordered."* Its future-role claims are predictions. The practical implication we draw is to distinguish “the rule is implemented” from “this was a useful rule to build.” [S10](sources.md#s10)

**Demonstrated artifact.** The public Lights-on Software Factory repository is a concrete starting point based on Votito. It brings together a controlled environment and deterministic support around an AI coding workflow. This cache inspected published documents, not an executed production session. [S03](sources.md#s03)

## Techniques and principles

### Requirements and scope

In a September 2025 Spec Kit experiment, Adžić valued editable intermediate decisions but found the generated requirements too broad and the documentation too overwhelming for meaningful human participation. He wanted better detail and a scoping step that supported progressive delivery. This is a dated account of the version he tried, not a verdict on all current spec-driven tools. [S02](sources.md#s02)

The later October 2026 sample workflow (`/impact-analysis`) reads a problem statement in `plans/<name>.md`, verifies claims against existing code/tests/docs, asks up to four clarifying questions per round across core functionality, scope, integration and edge cases, and records out-of-scope items before generating a human-approved execution plan. It explicitly permits bypassing impact analysis for a small, clear task. [S04](sources.md#s04)

**Our application:** start a reward change with six observable balances and a short anti-goal list. An agent can identify ambiguities, but a person owns product intent. In this fixed exercise, a new submission ID is already agreed to be a separately rewarded event; do not reopen that rule as an implementation choice. A beautifully formatted document that leaves identity undefined still hides the important choice.

### Increment and planning

**Demonstrated artifact.** The repository's plan steps name their writable files, verification and dependencies; related work forms groups with reviewable boundaries. A plan can describe an epic while implementation remains broken into smaller verified units. Do not compare an epic-sized planning artifact directly with another engineer's single-test edit and conclude they disagree about increment size. [S04](sources.md#s04)

**Our application:** a small reward task may need no parallelism. First inspect the existing path, then change only the next missing behaviour. If this expands into independently owned documentation and implementation work, identify the actual file conflicts before considering concurrent workers. Planning precision is useful even when there is only one worker.

### Testing and verification

**Demonstrated instruction artifact.** The pinned factory worker definition explicitly instructs agents to write a failing test before the implementation that makes it pass. The planning command places test and source in the same step and repeats the failing-test-first rule; the project contribution rules repeat it too. This is direct evidence about the agentic workflow, independent of earlier Specification by Example writing. [S15](sources.md#s15), [S16](sources.md#s16), [S17](sources.md#s17)

The worker also says to run its verification once when work is done. The inspected instructions therefore establish test-writing order, but do not demonstrate an observed failing run before code, mechanical enforcement of that order, or agent compliance. Local test-first work and later integration gates are separate layers.

**Demonstrated artifact.** The orchestrator documentation separates a worker's local evidence from merged-tree gates and a later attempt to refute step claims. Fast gates support progression; the final gate should cover the wider result. These are published responsibilities, not proof that all tests or all implementations are strong. [S05](sources.md#s05)

Earlier writing also distinguishes key BDD examples from other valuable testing activities. The 2020 Given-When-Then article discusses keeping additional exploration and regression data manageable instead of confusing all tests with the same documentation purpose. [S12](sources.md#s12)

**Our application:** the reward contract needs a first-delivery observation so an implementation that ignores every request cannot masquerade as correct duplicate protection. It also needs an immediate post-restart read, before replay, because replay could re-award a lost reward and conceal the loss. Acceptance intent and the mechanism that exercises it both need scrutiny.

### Design and refactoring

**Stated, historical.** The 2016 test-suite article recommends a functional catalogue rather than organising tests by the sequence of stories that created them. Documentation links can explain shared concepts without forcing tests into execution chains. [S13](sources.md#s13)

**Our application:** put first delivery, replay and persistence examples together under a reward capability. A future engineer should not need to reconstruct the current rule from six old tickets. Give each test independent setup even when the explanation cross-links related cases. Refactoring should preserve those observations, not merely the test names.

**Not established:** one mandatory product architecture, a universal refactoring cadence for agents, or a claim that lint rules can establish all architectural qualities.

### Human review

**Stated.** The 2026 talk places review at consequential decisions and advocates improving the feedback system. That is a direction for supervision; it is not a blanket statement that generated code never needs inspection. [S01](sources.md#s01)

**Our application:** separate the intent checkpoint from the implementation checkpoint. At the first, check identity, expected balances and non-goals. At the second, check how those outcomes were observed, what changed outside the planned path, and whether any expectation was weakened. The reviewer should be able to explain why a test could fail if the implementation were wrong.

### Autonomy and coordination

The public orchestrator translates approved structured work into execution with named worker, gate and check roles. This puts mechanical ordering into tooling rather than requiring a language model to rediscover it on each run. [S05](sources.md#s05)

**Our assessment:** this is a workflow/tool distinction, not evidence that more agents are automatically better. Compare scheduling, conflicts, merged verification, review workload and failure recovery. An experiment that counts only a worker's coding time misses the coordination system around it.

### Context and durable state

**Demonstrated artifact.** The workflow documentation uses a versioned plan and structured sidecar/progress records as task state; generated scripts can be recreated. The durable record and the disposable execution artifact have different purposes. [S04](sources.md#s04)

**Our application:** the reward handoff should state the reviewed contract, baseline, tests actually run, known limitations and next missing behaviour. A transcript or “done” message is not enough when the next session needs to know whether persistence was verified.

## A feature from idea to release

The [published command sequence](tools.md#documented-setup) shows clarification, planning, then execution. The detailed [reward workflow](workflow.md) below is our proposed application, not an Adžić demonstration. It preserves the same requirements used for every engineer in this collection.

In the public sample, final gates are meant to be adapted to real project checks. A precise private production release procedure, rollback policy and branch strategy were not established by the inspected sources. [S05](sources.md#s05), [S09](sources.md#s09)

## Tools and setup

See [tools and limits](tools.md). Tool ownership is unusually concrete here: the author publishes the factory repository and describes its relationship to Votito. That still does not establish that every public default matches the complete private setup. We did not install dependencies or run any commands from it.

## Reusable working prompts

The [worked feature](workflow.md#reusable-working-prompts) contains original prompts for intent review, a bounded implementation, and independent checking. They are suggested adaptations, not quotations of Adžić's private prompts. A short prompt can direct an existing harness; it cannot substitute for the harness's actual checks or permissions.

## Failure modes and limits

| Risk | What to inspect | Suggested response |
|---|---|---|
| Review becomes a formality | Large documents without explicit decisions | Ask for the disputed example and the smallest meaningful slice |
| Worker evidence hides integration failure | Individual green checks, no merged-tree result | Inspect the integrated result before accepting completion |
| A hook is treated as complete isolation | Allowed command invokes other uninspected work | Review the real execution environment and independent controls |
| Automation encodes the wrong norm | A rule passes while behaviour remains wrong | Reconcile the rule with independently agreed examples |
| Research turns into a current-tool endorsement | Historical experiments quoted without dates | Keep publication, artifact revision and applicability visible |
| Productivity claims outrun evidence | A percentage without a comparable baseline | Record scope and measure the full local process |

These responses are our synthesis. They do not prove that a specific undocumented failure occurred in Votito.

## First practical lab

Use the [common reward task](workflow.md#the-shared-contract). First record current observations. Agree the six balances, inspect the driver, implement only missing behaviour, and try a plausible defect such as dropping durable identity information. Keep the baseline, changed files, command results, review notes and unresolved scope.

Success means the reviewer can explain what was observed and what remains untested. It does not mean the study proved an engineer's approach universally faster. No predetermined duration or agent count is required.

## Comparison profile

[C01–C12](index.md#comparison-evidence) cover the shared twelve dimensions. An artifact label means a published design was inspected. Historical advice, predictions, current repository defaults and our adaptations are deliberately not collapsed into one undocumented personal habit.

## Evaluation and tradeoffs

The repository includes a context-specific reported token saving; the talk also contains speed and cost headlines. Neither is reproduced here. The 2020 Specification by Example survey explicitly reports sampling limits and correlation rather than causation. It is not an AI-agent productivity experiment. [S03](sources.md#s03), [S11](sources.md#s11)

**Our inference:** a fair local comparison should include verification, integration and review time as well as generation time. Reusing a reviewed task and baseline is more informative than comparing marketing headlines or output volume. Keep failed trials, setup cost and situations where a simple single-agent workflow sufficed.

## Sources and research gaps

The [seventeen source records](sources.md) retain inspected scope, findings, dates and limits. The [author catalogue](sources.md#s14) establishes book identity without pretending to have accessed paid bodies. Full private configurations, independent security assurance and controlled comparative effectiveness remain unestablished.
