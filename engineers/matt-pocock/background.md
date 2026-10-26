---
title: Matt Pocock — comparison history
parent: Matt Pocock
nav_order: 9
last_updated: '2026-10-26'
nav_exclude: true
---

# Comparison history

These fields and slide notes preceded the publication-window review on 26 October 2026. They are retained for traceability, not evidence of current AI practice. [Current evidence](recent-ai.md).

## Previous comparison fields

### C01 · Goal and bottleneck

His March 2026 method stages discovery, execution and human QA; later retrospective guidance improves the environment from session evidence.

Recommendations and self-report, not a controlled production-quality advantage.

[Original supporting source](https://www.aihero.dev/my-7-phases-of-ai-development)

### C02 · Requirements and specification

August 2026 guidance distinguishes interviewing from recording settled multi-session decisions; small work may skip the spec.

A written spec does not validate itself. The shared reward spec is our adaptation.

[Original supporting source](https://www.aihero.dev/skills-to-spec)

### C03 · Increment and planning

Documented tickets are thin verifiable paths with blocking edges, sized for fresh sessions.

Guidance includes broad-refactor exceptions; ticket size is not a universal duration or line limit.

[Original supporting source](https://www.aihero.dev/skills-to-tickets)

### C04 · Testing and verification

The pinned October skill specifies red-green at human-agreed public seams; refactoring moves to review.

Inspected instructions, not a runtime test. Old red-green-refactor trigger wording does not define the current body.

[Original supporting source](https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/skills/engineering/tdd/SKILL.md)

### C05 · Design and refactoring

Published design guidance uses interface leverage and locality; refactoring is separate from implementation cycles.

A reference vocabulary and process prescription, not a measured maintainability score.

[Original supporting source](https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/skills/engineering/codebase-design/SKILL.md)

### C06 · Human understanding and review

The published review artifact keeps standards and specification findings separate at a fixed diff point.

Separate model contexts do not establish independent correctness; human QA remains documented guidance.

[Original supporting source](https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/skills/engineering/code-review/SKILL.md)

### C07 · Agent autonomy and coordination

October implement-spec documentation dispatches dependency-ready tickets in worktrees and reviews the assembled branch.

Published artifact, not an executed fleet or a claim that every personal task uses parallelism.

[Original supporting source](https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/skills/engineering/implement-spec/SKILL.md)

### C08 · Context and durable state

August handoff guidance references settled artifacts and distinguishes portability from ordinary context continuation.

Temporary handoff output is not a durable memory system or application persistence.

[Original supporting source](https://www.aihero.dev/skills-handoff)

### C09 · Tooling and environment

Publishes composable agent skills; the pinned README documents installation and repo-specific setup routes.

Published artifact with a daily-use self-report; full current private stack and host compatibility were not tested.

[Original supporting source](https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/README.md)

### C10 · Integration and release

Pinned implementation instructions run checks and review before committing; larger runs integrate ticket branches.

Artifact inspection only. A complete personal production release and rollback policy is not established.

[Original supporting source](https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/skills/engineering/implement/SKILL.md)

### C11 · Boundaries and safeguards

A complete current personal permission, sandbox, protected-test and budget policy is not established.

Setup confirmation and course sandbox topics do not establish deployed access controls. Unknown is not opposition or non-use.

### C12 · Evaluation and tradeoffs

October retrospective guidance proposes environment changes from actual session struggles, with human selection.

One-session evidence can overweight a recent issue; no universal productivity advantage is established.

[Original supporting source](https://www.aihero.dev/skills-retro)

## Previous slide notes

# Matt Pocock — bite-sized ideas

Derived from the cached research checked on 26 October 2026. Worked examples are suggested adaptations, not Pocock demonstrations.

### Archived card 01

### The agreed seam

> **A passing test is useful only if it watches the right thing.**
>
> The pinned October 2026 TDD skill requires human agreement on public observation seams. It is an inspected process prescription, not a guarantee that a generated test is meaningful.

**In the wild:** Our reward test reads real application balance rather than a fixture-owned substitute.

**Takeaway:** Name what the seam catches and misses.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#agree-the-observation-seam) · [Cached claim](index.md#c04)

---

### Archived card 02

### The changed loop

> **The trigger still says refactor. The body moved it to review.**
>
> The pinned October 2026 instructions use red-green implementation and separate review-stage refactoring. Keep that dated distinction instead of inferring the loop from its old trigger wording.

**In the wild:** Our patch establishes the next reward outcome before a separate structural review.

**Takeaway:** Read the current instructions, not only the skill name.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#agree-the-observation-seam) · [Cached claim](index.md#c04)

---

### Archived card 03

### Two review questions

> **Correct by convention can still be wrong by requirement.**
>
> The published review design keeps standards and spec findings separate. Independent agent contexts are a design choice, not proof that every defect will be found.

**In the wild:** A tidy replay handler can still add the same 10 points twice.

**Takeaway:** Do not let one passing axis hide another failure.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#review-two-different-questions) · [Cached claim](index.md#c06)

---

### Archived card 04

### A usable slice

> **A file is not an independently verifiable feature.**
>
> The ticket guidance favours thin observable paths and explicit blockers. It also recognises exceptions for broad mechanical refactors rather than forcing every job into one shape.

**In the wild:** Our first slice delivers A and observes 10; it does not merely create a storage file.

**Takeaway:** Give a ticket a result someone can verify.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#slice-by-observable-capability) · [Cached claim](index.md#c03)

---

### Archived card 05

### The right amount of planning

> **A small task may not need a second specification artifact.**
>
> The August 2026 guidance treats a spec as a record of settled multi-session decisions. It permits going directly to implementation when the work fits one session.

**In the wild:** Our six reward observations may be enough context for one focused change.

**Takeaway:** Preserve decisions without manufacturing paperwork.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#clarify-decisions-before-writing-more-prose) · [Cached claim](index.md#c02)

---

### Archived card 06

### Parallel with dependencies

> **More workers do not remove the graph.**
>
> October 2026’s published implement-spec design schedules dependency-ready worktrees, then reviews assembled work. It was inspected, not executed in this study.

**In the wild:** A shared reward-state change may be mostly sequential; a read-only investigation can be separate.

**Takeaway:** Parallelise independent work, not overlapping guesses.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#agent-autonomy-and-coordination) · [Cached claim](index.md#c07)

---

### Archived card 07

### The learning environment

> **Fix the repeated source of friction, not just its latest symptom.**
>
> The retrospective guidance proposes environmental changes from session evidence and leaves selection to a person. One difficult session is useful evidence, not a universal diagnosis.

**In the wild:** A repeatedly missed replay check may justify a focused executable check.

**Takeaway:** Choose a specific improvement and inspect its cost.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#evaluation-and-tradeoffs) · [Cached claim](index.md#c12)

---

### Archived card 08

### Observe the restart

> **Read the balance before replay can hide its loss.**
>
> Suggested adaptation: the common exercise observes retained reward state immediately after runtime restart. Replaying A first could award 10 again and disguise data loss.

**In the wild:** A10 → replay A10 → restart/read10 → replay A10 → new B20.

**Takeaway:** Separate persistence from duplicate protection.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](workflow.md#first-practical-lab) · [Cached claim](index.md#c04)

---
