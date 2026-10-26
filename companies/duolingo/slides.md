---
title: Duolingo — bite-sized ideas
parent: Duolingo Company Slides
nav_order: 1
nav_exclude: true
last_updated: '2026-10-26'
cache_schema: 1
derived_from: companies/duolingo/research.md
research_checked: '2026-10-26'
evidence_since: '2025-10-01'
---

# Duolingo — bite-sized ideas

Real cases and explicit gaps from AI-assisted software development. Publication and practice dates are different. [Detailed research](research.md).

## Card 01

### The test-PR lifecycle

> **Writing a test is only the beginning.**
>
> Reported team use · published 2026-06-24. A generated test change still has to survive CI, repair and a reviewer queue.

**In the wild:** The iOS pipeline tracks what happens after generation.

**Takeaway:** Design a stopping rule as well as a retry loop.

[Optional practice: adapt the shared observations](workflow.md#optional-practice) · [Detailed research](research.md) · [Source findings](sources.md#s02)

---

## Card 02

### A shared task interface

> **A useful workflow should outlive one chat.**
>
> Reported company use · published 2025-12-11. Reusable task definitions let common coding operations become internal capabilities.

**In the wild:** December’s account separates common patterns from custom multi-step workflows.

**Takeaway:** Package repeated work only after understanding its checks.

[Optional practice: adapt the shared observations](workflow.md#optional-practice) · [Detailed research](research.md) · [Source findings](sources.md#s01)

---

## Card 03

### Toolchain reality

> **An agent cannot run a toolchain it does not have.**
>
> Reported team use · published 2026-06-24. Linux-hosted iOS work depended on remote CI feedback.

**In the wild:** Moving workers to Macs was described as future improvement.

**Takeaway:** Make verification limits visible before scaling output.

[Optional practice: adapt the shared observations](workflow.md#optional-practice) · [Detailed research](research.md) · [Source findings](sources.md#s02)

---

## Card 04

### Teach the reviewer

> **Approval automation needs informed feedback.**
>
> Reported team use · published 2026-09-16 (page date; recording date not independently established). The DevEx AI talk connects education to review changes.

**In the wild:** Low-risk approval is a scoped path, not universal autonomous shipping.

**Takeaway:** Teach people how to challenge the system.

[Optional practice: adapt the shared observations](workflow.md#optional-practice) · [Detailed research](research.md) · [Source findings](sources.md#s03)

---

## Card 05

### A boundary that failed

> **A requested file boundary can still be crossed.**
>
> Reported team use · published 2026-06-24. The test-generation account reports an unwanted production-file edit.

**In the wild:** Stricter controls were being added after that incident.

**Takeaway:** Distinguish an instruction from an enforced restriction.

[Optional practice: adapt the shared observations](workflow.md#optional-practice) · [Detailed research](research.md) · [Source findings](sources.md#s02)

---
