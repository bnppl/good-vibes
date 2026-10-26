---
title: Stripe — bite-sized ideas
parent: Stripe Company Slides
nav_order: 1
nav_exclude: true
last_updated: '2026-10-26'
cache_schema: 1
derived_from: companies/stripe/research.md
research_checked: '2026-10-26'
evidence_since: '2025-10-01'
---

# Stripe: bite-sized ideas

Derived from the dated source findings checked on 26 October 2026. Team/company reports, background and our optional practice remain separate.

## Card 01

### A bounded handoff

> **The finish line is a PR, not production.**
>
> Reported company use · published 2026-02-09. A February 2026 company account describes unattended implementation followed by human review.

**In the wild:** A Slack task becomes a candidate change; acceptance remains another decision.

**Takeaway:** Separate permission to implement from permission to ship.

[Optional practice: inspect one change](workflow.md#optional-practice) · [Detailed research](research.md) · [Source finding](sources.md#s01)

---

## Card 02

### Deterministic machinery

> **Do not spend reasoning on a fixed command.**
>
> Reported company use · published 2026-02-19. The February technical account describes blueprints combining ordinary code nodes and agent loops.

**In the wild:** Lint and push operations can be fixed workflow steps while implementation remains adaptive.

**Takeaway:** Make predictable requirements executable.

[Optional practice: inspect one change](workflow.md#optional-practice) · [Detailed research](research.md) · [Source finding](sources.md#s02)

---

## Card 03

### Cheap feedback first

> **An avoidable CI failure is wasted feedback time.**
>
> Reported company use · published 2026-02-19. The documented loop runs local checks before a bounded number of full CI attempts.

**In the wild:** A retry budget creates an explicit handback when automation stops paying.

**Takeaway:** Choose a stop rule before running unattended work.

[Optional practice: inspect one change](workflow.md#optional-practice) · [Detailed research](research.md) · [Source finding](sources.md#s02)

---

## Card 04

### Context with a boundary

> **The whole rulebook is not the right prompt.**
>
> Reported company use · published 2026-02-19. Stripe reports attaching rules relevant to the files being visited.

**In the wild:** Context follows the affected portion of the repository instead of flooding every task.

**Takeaway:** Select context by relevance and ownership.

[Optional practice: inspect one change](workflow.md#optional-practice) · [Detailed research](research.md) · [Source finding](sources.md#s02)

---

## Card 05

### Reuse developer infrastructure

> **A useful agent environment can start with a useful human environment.**
>
> Reported company use · published 2026-02-19. The February account reuses standardized devboxes that predate coding agents.

**In the wild:** Environment reproducibility and isolation help both kinds of contributor.

**Takeaway:** Evaluate existing platform capabilities before building a new harness.

[Optional practice: inspect one change](workflow.md#optional-practice) · [Detailed research](research.md) · [Source finding](sources.md#s02)

---
