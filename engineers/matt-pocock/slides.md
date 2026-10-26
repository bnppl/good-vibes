---
title: Matt Pocock — bite-sized ideas
parent: Matt Pocock Slides
nav_order: 1
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
nav_exclude: true
derived_from: engineers/matt-pocock/index.md
---

# Matt Pocock — bite-sized ideas

Derived from the cached research checked on 26 October 2026. Worked examples are suggested adaptations, not Pocock demonstrations.

## Card 01

### The agreed seam

> **A passing test is useful only if it watches the right thing.**
>
> The pinned October 2026 TDD skill requires human agreement on public observation seams. It is an inspected process prescription, not a guarantee that a generated test is meaningful.

**In the wild:** Our reward test reads real application balance rather than a fixture-owned substitute.

**Takeaway:** Name what the seam catches and misses.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#agree-the-observation-seam) · [Cached claim](index.md#c04)

---

## Card 02

### The changed loop

> **The trigger still says refactor. The body moved it to review.**
>
> The pinned October 2026 instructions use red-green implementation and separate review-stage refactoring. Keep that dated distinction instead of inferring the loop from its old trigger wording.

**In the wild:** Our patch establishes the next reward outcome before a separate structural review.

**Takeaway:** Read the current instructions, not only the skill name.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#agree-the-observation-seam) · [Cached claim](index.md#c04)

---

## Card 03

### Two review questions

> **Correct by convention can still be wrong by requirement.**
>
> The published review design keeps standards and spec findings separate. Independent agent contexts are a design choice, not proof that every defect will be found.

**In the wild:** A tidy replay handler can still add the same 10 points twice.

**Takeaway:** Do not let one passing axis hide another failure.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#review-two-different-questions) · [Cached claim](index.md#c06)

---

## Card 04

### A usable slice

> **A file is not an independently verifiable feature.**
>
> The ticket guidance favours thin observable paths and explicit blockers. It also recognises exceptions for broad mechanical refactors rather than forcing every job into one shape.

**In the wild:** Our first slice delivers A and observes 10; it does not merely create a storage file.

**Takeaway:** Give a ticket a result someone can verify.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#slice-by-observable-capability) · [Cached claim](index.md#c03)

---

## Card 05

### The right amount of planning

> **A small task may not need a second specification artifact.**
>
> The August 2026 guidance treats a spec as a record of settled multi-session decisions. It permits going directly to implementation when the work fits one session.

**In the wild:** Our six reward observations may be enough context for one focused change.

**Takeaway:** Preserve decisions without manufacturing paperwork.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#clarify-decisions-before-writing-more-prose) · [Cached claim](index.md#c02)

---

## Card 06

### Parallel with dependencies

> **More workers do not remove the graph.**
>
> October 2026’s published implement-spec design schedules dependency-ready worktrees, then reviews assembled work. It was inspected, not executed in this study.

**In the wild:** A shared reward-state change may be mostly sequential; a read-only investigation can be separate.

**Takeaway:** Parallelise independent work, not overlapping guesses.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#agent-autonomy-and-coordination) · [Cached claim](index.md#c07)

---

## Card 07

### The learning environment

> **Fix the repeated source of friction, not just its latest symptom.**
>
> The retrospective guidance proposes environmental changes from session evidence and leaves selection to a person. One difficult session is useful evidence, not a universal diagnosis.

**In the wild:** A repeatedly missed replay check may justify a focused executable check.

**Takeaway:** Choose a specific improvement and inspect its cost.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#evaluation-and-tradeoffs) · [Cached claim](index.md#c12)

---

## Card 08

### Observe the restart

> **Read the balance before replay can hide its loss.**
>
> Suggested adaptation: the common exercise observes retained reward state immediately after runtime restart. Replaying A first could award 10 again and disguise data loss.

**In the wild:** A10 → replay A10 → restart/read10 → replay A10 → new B20.

**Takeaway:** Separate persistence from duplicate protection.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](workflow.md#first-practical-lab) · [Cached claim](index.md#c04)

---
