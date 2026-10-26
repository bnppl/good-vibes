---
title: Robert C. Martin — detailed research
parent: Robert C. Martin
nav_order: 1
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
---

> **Scope update — 26 October 2026:** Start with [recent AI evidence](recent-ai.md). The material below retains earlier principles, dated reports and our optional adaptations. It must not be read as a complete current personal AI workflow.

# Robert C. Martin — discipline above the implementation

[Profile](index.md) · [Common worked example](workflow.md) · [Tools](tools.md) · [Source findings](sources.md) · [Slides](slides.md)

## Approach in brief

**Stated, public teaching scope.** The Clean AI introduction frames testing and refactoring as disciplines for controlling powerful coding agents. Its public descriptions are jointly credited to Justin Martin and Robert C. Martin. They are not evidence that we watched the paid demonstrations. [S01](sources.md#s01)

**Inferred synthesis.** The useful comparison is between different locations for engineering judgment: requirements, executable checks, structure, operational feedback, and direct source inspection. Martin's public material should not be flattened into “trust the agent” or “always build a swarm.” Evidence for both qualifications appears below.

Research inspected on **26 October 2026**. The guide distinguishes historical design advice, inspected repository instructions, later personal reports, and our proposed exercise. It does not establish a complete current private system.

## Techniques and principles

### Start with a source humans can review

**Stated, coauthored outline.** The second Clean AI episode proposes a higher-level source document from which implementations can be built. The public description advertises a cross-platform exercise; its execution was not observed here. [S02](sources.md#s02)

**Suggested adaptation.** Before implementing the reward rule, write a six-row outcome table and a description of how observations reach the real application. A specification that says only “avoid duplicates” leaves important choices open. Are two deliveries identical because their payloads match, because they name the same submission, or because they occur in the same session? Our common task already resolves identity: it is the submission ID.

A reviewer should also challenge the observation mechanism. An acceptance test can have correct prose and still read the wrong state. If the test driver remembers the result it expected to receive, the suite may agree with itself while the application loses points on restart. Preserve the distinction between the human contract and the code translating that contract into executable actions.

### Keep test-first design separate from larger feedback

**Stated, historical.** Martin's December 2014 article distinguishes very small test-first steps, red/green/refactor, growing generality, and periodic architectural inspection. It is historical design guidance, not proof of one mandatory modern agent cadence. [S03](sources.md#s03)

**Suggested adaptation.** Choose a missing behaviour from the common outcome table. If immediate replay is broken, inspect the failing balance assertion before asking for a correction. Once it passes, assess the state mechanism and whether a meaningful refactor is needed. Do not confuse those two jobs: adding replay persistence changes behaviour; extracting a clearer boundary should preserve it.

The task may already partly work. Capture that baseline rather than deliberately removing correct functionality to claim a red state. Where a deliberate defect is useful, make it a separate sensitivity check in a disposable state, restore the correct implementation, and record what it established.

### Challenge assertions rather than worship coverage

**Stated, historical.** The June 2016 mutation-testing article distinguishes execution coverage from detecting changed meaning and also notes missing requirements. Its advocacy does not prove that every surviving mutant is a useful product defect. [S04](sources.md#s04)

**Suggested adaptation.** For the reward feature, temporarily forget accepted IDs while retaining balances. A check that replays A after restart should detect an unwanted increase. Separately, lose the balance but retain accepted IDs; the immediate post-restart read should catch that problem. Those deliberately different faults explain why one broad end-to-end result can be insufficient.

Do not optimise only a mutation percentage. A tool can generate equivalent changes, omit important fault classes, or spend excessive time in unsuitable modules. Inspect the surviving change, the outcome it could alter, and whether a missing requirement or an ineffective assertion caused the gap. The exercise's acceptance meaning remains authoritative.

### Separate policy from technical mechanism

**Stated, historical.** The 2012 Clean Architecture article separates business rules from external mechanisms through inward source dependencies and boundary translation. It does not prescribe exactly four product tiers or a particular language. [S05](sources.md#s05)

**Suggested adaptation.** The reward policy answers whether a submission can add ten points. Persistence must retain the successful transition and the identity needed to recognise replay. Give that path a comprehensible boundary in the existing application, but do not introduce a framework simply to reproduce an architecture diagram.

A pure calculation unit test cannot establish restart persistence. Conversely, a real-store acceptance test need not know every class name. Use each boundary for the question it can actually answer. A seam is useful when it isolates a reason for change without hiding the state transition the requirement depends on.

## Documented agent work and changes over time

### Public teaching describes several role arrangements

**Stated, coauthored public outlines.** Episode three describes plan management with four collaborating agents; episode five describes building an orchestration tool. These describe the teaching sequence, not a requirement to use that agent count for every feature. [S06](sources.md#s06) · [S07](sources.md#s07)

**Stated, coauthored outline.** Episode six names specification, implementation, cleanup, architecture, hardening, and QA roles, including separate worktrees. Only its public workflow description was inspected. [S08](sources.md#s08)

**Suggested adaptation.** Treat roles as questions to answer, not mandatory processes to launch. Who agrees the intended behaviour? Who implements it? Who challenges the checks and structure? A small reward change may answer all three with one implementer and a human reviewer. Parallelising writers over one tiny state transition can add contention without adding independent evidence.

### Published framework is not a current personal topology

**Demonstrated artifact.** SwarmForge's pinned README documents worktrees, tmux, operator controls, and composed products; `main` supplies shared infrastructure rather than a standalone runnable pack. We inspected the artifact, not a running swarm. [S09](sources.md#s09)

**Stated, September personal report.** He describes mostly above-code supervision and leaving his custom harness. This is dated self-report, not a universal instruction to stop reading code. [S13](sources.md#s13)

The key comparison is temporal and contextual. A repository can remain published even when its creator reports preferring another interaction model. A teaching demonstration can still illuminate responsibilities without describing the exact private setup at the research cutoff. Preserve both records; neither licenses inventing a current swarm or an absence of engineering oversight.

## Tools and setup

The [tool chapter](tools.md) separates inspected artifacts from personal-use reports and suggested choices. No installation or tool execution occurred.

**Demonstrated artifact.** The engineering prompt documents named language-specific quality tools and acceptance-pipeline components, together with rules against fabricated substitutes or manually altered mutation manifests. Those are published instructions, not proof that their enforcement is complete. [S10](sources.md#s10)

**Demonstrated artifact.** The workflow prompt confines agents to assigned checkouts and defines conditions for stopping on an unexpected layout. [S11](sources.md#s11)

**Demonstrated artifact.** Handoff rules use committed structured work items and helper-mediated receiving and completion. These are task-state conventions, not durable application data. [S12](sources.md#s12)

**Suggested adaptation.** Select only tools that answer an actual question in the target project. The existing runner is the starting point. Verify its command and output before adding a metric, a mutation runner, or another agent. A quality gate that the implementer can quietly replace with a dummy script needs independent review or stronger execution separation.

## A feature from idea to release

There is no inspected demonstration of Martin implementing our exact persistent reward task. The [worked feature](workflow.md) is an original application, not his recovered session or a verified instruction file.

| Proposed stage | Output to inspect | Why it matters in this task |
|---|---|---|
| Establish existing behaviour | Actual baseline and relevant state path | Avoid fixing behaviour that already works or relying on a broken runner |
| Agree the contract | Six independent observations | Preserve both reward state and replay identity across restart |
| Implement a bounded change | Coherent diff with check results | Keep the cause of a changed outcome inspectable |
| Challenge the detector | A plausible fault that the check catches | Avoid confidence based only on execution |
| Inspect structure and evidence | State-transition explanation and relevant source/diagram | Keep the reviewer capable of owning the result |
| Integrate through the project process | Reviewed checks on integrated changes | Local evidence alone does not grant release authority |

No complete current private deployment or rollback policy is established. Published worktree/handoff instructions do not fill that gap. Our release checkpoint is a proposed application of the target project's actual process, not a statement that Martin uses a specific provider or approval arrangement.

## Reusable working prompts

The [workflow chapter](workflow.md#reusable-working-prompts) supplies original prompts for investigation, a next bounded change, independent challenge, and review. They keep the acceptance contract inspectable and forbid silently redefining success. They are not quotations of Martin's private prompts.

## Failure modes and limits

| Mistake | How it appears here | Proposed response |
|---|---|---|
| A headline replaces the position | “Uncle Bob never reviews anything” | Read the dated personal report and distinguish supervision from source-reading frequency |
| Public framework becomes private fact | SwarmForge is assumed to be his mandatory current workflow | Keep artifact and personal chronology separate |
| Paid lesson invention | Public episode marketing becomes a claimed watched procedure | State the inspected scope and keep unknown details unknown |
| Metric proxy replaces behaviour | A quality score improves while replay still grants points | Run the independent outcome sequence |
| Strong tests share the same wrong assumption | Implementation and fixtures both reset identity state | Review what the restart actually replaces and retains |
| Agent controls are only prose | An instruction is described as a security boundary | Inspect permissions, execution paths and review mechanisms separately |
| Too much machinery | A six-role pipeline is introduced for a tiny state transition | Choose a bounded workflow appropriate to the actual risk |

The public workshop page lists agent disciplines as teaching goals; it does not establish outcomes of an unobserved class. [S14](sources.md#s14) The final choices in this table are our guidance, not a claim that Martin would choose them for every product.

## First practical lab

Use [the common reward lab](workflow.md#first-practical-lab). Keep requirements and starting conditions fixed if comparing this proposed workflow with another. Record review and rework effort as well as generation time. No head-to-head execution experiment was conducted for this profile.

## Comparison profile

The [C01–C12 entries](index.md#comparison-evidence) distinguish historical advice, public artifacts, a dated personal report, coauthored outlines, and unknown private policy. A shared evidence date does not make every practice contemporary. A `Demonstrated` artifact entry establishes what was inspected, not that the code was installed or its effectiveness measured.

## Sources and research gaps

The [source register](sources.md) records fourteen primary records and their inspected scope. Website text and pinned repository files were read; paid video bodies, private prompts and private installations were not accessed. No immutable snapshots of living websites were archived. The original X post could not be retrieved directly, so secondary reproductions do not support any claim in this cache.
