---
title: Coinbase — bite-sized ideas
parent: Coinbase Company Slides
nav_order: 1
nav_exclude: true
last_updated: '2026-10-26'
cache_schema: 1
derived_from: companies/coinbase/research.md
research_checked: '2026-10-26'
evidence_since: '2025-10-01'
---

# Coinbase: bite-sized ideas

Derived from the dated source findings checked on 26 October 2026. Team/company reports, background and our optional practice remain separate.

## Card 01

### A better unit of review

> **Fast generation can create an unreviewable result.**
>
> Reported team use · published 2026-06-03. The June case reports replacing oversized output with a scaffold and focused component PRs.

**In the wild:** The orchestration changed because human review was the constraint.

**Takeaway:** Design the output for its reviewer.

[Optional practice: inspect one change](workflow.md#optional-practice) · [Detailed research](research.md) · [Source finding](sources.md#s01)

---

## Card 02

### Approve before generating

> **A plan checkpoint can prevent a large wrong implementation.**
>
> Reported team use · published 2026-06-03. The revised June workflow waits for engineer sign-off before writing code.

**In the wild:** The boundary is explicit even though later component work can run in parallel.

**Takeaway:** Agree on structure before multiplying workers.

[Optional practice: inspect one change](workflow.md#optional-practice) · [Detailed research](research.md) · [Source finding](sources.md#s01)

---

## Card 03

### Reference quality

> **A generator inherits the quality of its example.**
>
> Reported team use · published 2026-06-03. The internal tooling case pairs a real reference with rules and prompt templates.

**In the wild:** The authors distinguish predictable structure from context-dependent judgment.

**Takeaway:** Inspect the example before optimising the prompt.

[Optional practice: inspect one change](workflow.md#optional-practice) · [Detailed research](research.md) · [Source finding](sources.md#s01)

---

## Card 04

### Isolation and integration

> **Separate worktrees solve only one kind of conflict.**
>
> Reported company use · published 2026-05-11. The May Mux account gives agent sessions independent branches and terminals.

**In the wild:** Engineers still review and integrate completed work.

**Takeaway:** Plan semantic ownership as well as workspace isolation.

[Optional practice: inspect one change](workflow.md#optional-practice) · [Detailed research](research.md) · [Source finding](sources.md#s02)

---

## Card 05

### An honest denominator

> **High-output adopters are not a random sample.**
>
> Reported company use · published 2026-05-11. The May account explicitly acknowledges selection bias in its PR comparison.

**In the wild:** A throughput association cannot prove tool-caused improvement.

**Takeaway:** Measure quality and useful outcomes alongside adoption.

[Optional practice: inspect one change](workflow.md#optional-practice) · [Detailed research](research.md) · [Source finding](sources.md#s02)

---
