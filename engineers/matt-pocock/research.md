---
title: Matt Pocock — detailed research
parent: Matt Pocock
nav_order: 1
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
---

> **Scope update — 26 October 2026:** Start with [recent AI evidence](recent-ai.md). The material below retains earlier principles, dated reports and our optional adaptations. It must not be read as a complete current personal AI workflow.

# Matt Pocock — explicit decisions, agreed seams, separate review

[Profile](index.md) · [Common reward workflow](workflow.md) · [Source findings](sources.md) · [Slide notes](slides.md)

## Approach in brief

**Stated.** Pocock's March 2026 guide presents staged discovery, implementation and human QA, with optional research and repeated feedback. It describes his method and recommendations, not a controlled demonstration of universal production quality. [S01](sources.md#s01)

**Demonstrated artifact.** The October public skills provide an inspectable, composable process. The repository calls them daily-use tools; that self-report does not establish every private setting or session. This profile inspected revision `5beb35b040e3de97e54fa9e386d7e42d15c295c2`, dated 19 October 2026. No skills were installed or executed. [S02](sources.md#s02)

Research checked and cut off on **26 October 2026**. This guide separates public prescriptions, older workflow names, artifact inspection, and our original application. The worked reward feature is not a Pocock demonstration.

## Techniques and principles

### Clarify decisions before writing more prose

**Stated.** The documented interview approach resolves domain vocabulary and writes qualifying architectural decisions. The later spec step records what was already decided, especially when work crosses sessions; small work may go straight to implementation. A spec that introduces an unagreed decision is defective. [S06](sources.md#s06) · [S07](sources.md#s07)

**Our application.** For the shared task, the important distinction is submission identity, not a preferred framework. Before naming a class, ask what observable action reports a successful reward and which real state survives restart. A glossary entry defining “submission” can be useful, but it does not itself decide storage semantics or enforce the once-only rule. If the existing language already makes the meaning clear, do not create a new document merely to reproduce the workflow's surface.

### Slice by observable capability

**Stated.** The ticket guidance favours a thin usable path rather than splitting work by technical layers. Blocking relationships express what can begin independently. It also recognises broad mechanical refactors as an exception requiring careful sequencing. [S08](sources.md#s08)

**Our application.** A reward ticket should have a result a reviewer can observe: delivering A creates 10 points. A separate “write storage adapter” ticket may be useful implementation work, but it is not accepted merely because a file exists. A dependency graph can prevent a persistence test from being scheduled before its necessary support lands. This small exercise does not require multiple workers simply because the tooling can create them.

### Agree the observation seam

**Demonstrated artifact.** The pinned TDD reference requires agreed public seams, behaviour-focused assertions and independent expected values. It prescribes one red-green slice at a time and places refactoring in review. The public explainer says the refactor step moved out in June 2026 while old trigger wording remains. This is a material distinction from a claim that his current skill runs every conventional red-green-refactor step internally. [S03](sources.md#s03)

**Our application.** A seam proposal must state both what it catches and what it misses. An in-process reward boundary may reveal duplicate accounting while omitting installed-app wiring. A restart-capable driver may exercise durability without proving crash recovery or concurrent delivery. Scope these limitations openly. An assertion that computes expected XP using the same algorithm as production is not independent evidence, regardless of its coverage percentage.

### Keep a small useful interface

**Demonstrated artifact.** His published design vocabulary relates a module's useful behaviour to what callers must understand, with leverage and locality as aims. It rejects reducing depth to a code-line ratio. These are design heuristics, not measured maintainability scores. [S05](sources.md#s05)

**Our application.** Prefer a clear operation for accepting a submission over forcing every caller to coordinate an ID set, a points calculation and a persistence call. Whether that operation deserves a new module depends on existing structure. A thin wrapper that merely adds another name may increase navigation cost without concentrating knowledge. The task does not justify inventing an abstraction hierarchy in advance.

### Review two different questions

**Demonstrated artifact.** The review skill inspects a fixed diff along separate standards and specification axes. It keeps the findings separate rather than letting conformity hide missing behaviour. It is a designed process, not evidence that two model reviewers are statistically independent or exhaustive. [S04](sources.md#s04)

**Our application.** For rewards, one question is whether the code follows the repository's conventions; another is whether restart and replay produce the agreed totals. Passing formatting does not answer the second question. Conversely, the right total does not establish that the design is easy to change. A human can use both reports while still checking the actual code and execution evidence.

## A feature from idea to release

The [worked workflow](workflow.md) applies these ideas to the common neutral task. It makes discovery, seam choice, a bounded implementation, review and evidence preservation explicit. Its exact sequence is our adaptation, not a private session reconstructed from a course outline.

| Decision in our exercise | Observable output | What remains open |
|---|---|---|
| Establish the starting path | Code locations, baseline commands and current observations | Unknown infrastructure must be inspected |
| Agree intent and a seam | Six outcome rows and what the chosen boundary observes | Other system boundaries may remain untested |
| Choose a next slice | A concrete missing behaviour | Existing behaviour may already satisfy some rows |
| Implement and review | Diff, actual results, standards findings and requirement findings | Reviewer agreement is not proof |
| Integrate under the existing process | Coherent branch state and relevant checks | Production release/rollback rules are not supplied by this study |

The pinned implementation skill runs focused checks, a final suite and review before committing. The larger implementation artifact assembles a graph's tickets on an integration branch. Neither establishes a complete personal deployment policy. [S13](sources.md#s13) · [S09](sources.md#s09)

## Tools and setup

| Resource | Relationship | Verified scope |
|---|---|---|
| `mattpocock/skills` | Published composable instructions; README self-reports use | README, four core skill references, implementation and orchestration artifacts inspected at the pinned revision |
| AI Hero explainers | Authored descriptions of the intended process and known problems | Public text only; not paid classroom execution |
| Configured tracker | Explicit part of the setup design | Can be repository-specific; no assumption that GitHub is compulsory |
| Git worktrees | Part of the documented parallel implementation design | Artifact inspection, not a test of every host's concurrency support |
| Existing runner | Our recommendation for the reward exercise | Discover its command in the actual target repository |

The pinned README documents an editable installation route:

```text
npx skills@latest add mattpocock/skills -a <agent>
```

This is a documented example, not an instruction executed here. Inspect the current README and host support before installing; plugin and copied-file routes have different update behaviour. The setup explainer separates repo configuration from reusable instructions and asks for confirmation before writes. That is interaction policy, not an enforced sandbox. [S02](sources.md#s02) · [S14](sources.md#s14)

The public workshop outline lists Ralph and AFK topics. It supports teaching-topic attribution only, not details of uninspected lessons or a universal recommendation to run unattended. [S12](sources.md#s12)

## Context and durable state

**Stated.** The handoff explainer describes portable session material that references existing artifacts rather than copying them, and warns about temporary-file persistence. It distinguishes moving work from ordinary continuation or compaction. [S10](sources.md#s10)

**Our application.** Keep the canonical outcome table in one place and reference it from task notes. A handoff that changes A's identity semantics creates a second conflicting contract. Also distinguish the agent's durable notes from the application's durable reward state: a persisted Markdown note does not prove a restarted process remembers that A was rewarded.

## Agent autonomy and coordination

**Demonstrated artifact.** The October implementation design schedules dependency-ready tickets in separate worktrees, merges their results and reviews the assembled branch. It uses references to shared artifacts rather than copying every detail into each worker. The explainer acknowledges costs and an incompletely specified post-fix stopping rule. [S09](sources.md#s09)

**Our application.** Do not split this tiny state transition into independent writers unless there is genuinely separable work. If two agents both change the same accounting rule, their merge is not a substitute for joint behavioural verification. Bound any review/fix loop by an explicit stopping decision in the task's normal process; that rule is our adaptation, not a claim that the public skill enforces it mechanically.

## Failure modes and limits

| Failure mode | Example in our task | Proposed response |
|---|---|---|
| Process imitation | A tiny bug fix gains a PRD, a large board and many agents | Keep only artifacts that resolve an actual coordination or context need |
| Wrong observation seam | Test reads a fixture-owned balance instead of the real application | Inspect the driver and state source |
| Self-confirming assertion | Expected points are recomputed from the implementation | Use the independently agreed literal outcomes |
| Misleading restart check | State is lost, then replay awards A again and appears correct | Read immediately after restart, before replay |
| Blended review verdict | Style success hides an unimplemented requirement | Keep standards and spec findings distinct |
| Context duplication | Notes and tickets disagree about when rewards become durable | Reference one reviewed contract and reconcile discrepancies |
| Endless remediation | Review repeatedly reopens work without a termination decision | Identify the concrete blocking defect and explicit next decision |

These are our applications of the research, not a claim that Pocock observed every failure in this exact exercise.

## Reusable working prompts

Original inspection, seam-agreement, implementation and review prompts are in [the worked guide](workflow.md#reusable-prompts). They are suggested adaptations rather than recovered private instructions.

## First practical lab

Use [the common lab](workflow.md#first-practical-lab). Record the baseline, the seam's coverage and blind spots, all six balance observations, an implementation diff and separate review findings. Explain what changed and what remains untested. A lab completion is not evidence that one person's workflow outperforms another.

## Comparison profile

The stable [C01–C12 entries](index.md#comparison-evidence) preserve advice versus inspected artifacts and explicitly unknown current private controls. D04 is red-green at an agreed public seam with review-stage refactoring, not an inferred universal micro-refactor cycle. D07 describes a published parallel design, not every daily task. D10 stops short of a private production release policy.

## Evaluation and tradeoffs

**Stated.** The retrospective skill uses difficult session evidence to propose changes to the agent environment, choosing executable checks for mechanical mistakes and review standards for judgement. It leaves acceptance to the human and acknowledges that one session is a limited view. [S11](sources.md#s11)

**Our application.** Evaluate the whole completed change: review time, rework, requirement accuracy and maintainability as well as generation time. Remove process steps that repeatedly cost more than they teach, but do not remove the check that catches the actual failure. There is no controlled head-to-head reward implementation in this profile.

## Sources and research gaps

The [fourteen source records](sources.md) identify inspected scope, dates, findings and claim links. Public explainers and a pinned repository support process attribution. Tool instructions were not executed; paid course bodies, full private configuration, complete security permissions and production release/rollback policy were not established. Public source terminology evolves: March's seven-phase guide and October's current skill names should be read in their own dates.
