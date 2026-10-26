---
title: Robert C. Martin — bite-sized ideas
parent: Robert C. Martin Slides
nav_order: 1
nav_exclude: true
last_updated: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
derived_from: engineers/robert-c-martin/index.md
---

# Robert C. Martin — bite-sized ideas

Derived from the cache checked on 26 October 2026. Worked reward examples are suggested adaptations. Paid video descriptions establish teaching scope, not demonstrations observed in this research.

## Card 01

### A source to challenge

> **The human needs something better than a success message.**
>
> The joint Clean AI outline proposes a higher-level source document humans can review. The advertised cross-platform exercise was not watched here.

**In the wild:** Our reward contract says once per submission ID, including after restart.

**Takeaway:** Make intended behaviour inspectable before implementation.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#start-with-a-source-humans-can-review) · [Cached claim](index.md#c02)

---

## Card 02

### More than green

> **Running a line is not the same as testing its meaning.**
>
> Martin's 2016 mutation article distinguishes execution coverage from detection of a changed outcome. Missing requirements still need attention.

**In the wild:** Our suggested check forgets accepted IDs after restart and tests whether replay is wrongly rewarded.

**Takeaway:** Challenge the detector, not just its coverage report.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#challenge-assertions-rather-than-worship-coverage) · [Cached claim](index.md#c04)

---

## Card 03

### Behaviour and structure

> **“It works” leaves another engineering question open.**
>
> His 2014 TDD account separates fine test-first work, refactoring, and wider architectural feedback. Historical advice is not a verified current agent micro-cadence.

**In the wild:** Our exercise keeps replay semantics separate from an extraction that clarifies persistence.

**Takeaway:** Ask what changed and what should remain invariant.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#keep-test-first-design-separate-from-larger-feedback) · [Cached claim](index.md#c03)

---

## Card 04

### Policy and mechanism

> **The rule should not disappear inside the plumbing.**
>
> The historical Clean Architecture article separates business policy from external mechanisms. It does not require exactly four tiers.

**In the wild:** Our reviewer traces submission identity and the successful durable points update through the existing boundary.

**Takeaway:** Choose a seam that makes the important transition explainable.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#separate-policy-from-technical-mechanism) · [Cached claim](index.md#c05)

---

## Card 05

### An artifact is not a habit

> **A published swarm does not prove its author still uses it.**
>
> SwarmForge is an inspected public artifact. Martin's 24 September 2026 interview-page account describes moving away from his custom harness. Those records answer different questions.

**In the wild:** Compare a repository's documented design separately from a dated personal workflow.

**Takeaway:** Preserve chronology when comparing approaches.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#published-framework-is-not-a-current-personal-topology) · [Cached claim](index.md#c07)

---

## Card 06

### Instructions and enforcement

> **A rule against weakening a gate is not proof the gate is protected.**
>
> The published engineering prompt forbids invented metric substitutes and hand-edited mutation manifests. Its text alone does not establish enforcement completeness.

**In the wild:** Our proposed review includes changed assertions, fixtures, runner configuration, and metric tools.

**Takeaway:** Inspect the control surface as well as the instruction.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](tools.md#quality-tools-and-guardrails) · [Cached claim](index.md#c11)

---

## Card 07

### Handoff evidence

> **A finished conversation is not a durable work item.**
>
> The inspected handoff rules use committed structured work and explicit receive/complete steps. This is documented protocol, not verified execution.

**In the wild:** Our adaptation hands over the reviewed diff, contract, command results, and remaining gaps.

**Takeaway:** Make the next worker's starting point inspectable.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#tools-and-setup) · [Cached claim](index.md#c08)

---

## Card 08

### The missing observation

> **Read the balance before replay can repair the evidence.**
>
> Suggested adaptation: our shared task observes retained balance immediately after restart. Re-awarding A could otherwise conceal that the original reward was lost.

**In the wild:** 0 → A10 → replay A10 → restart/read10 → replay A10 → B20.

**Takeaway:** Test persistence and replay identity separately.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](workflow.md#fixed-task-and-assumptions) · [Cached workflow](workflow.md#5-challenge-the-checks)

---
