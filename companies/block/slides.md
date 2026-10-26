---
title: Block — bite-sized ideas
parent: Block Company Slides
nav_order: 1
nav_exclude: true
last_updated: '2026-10-26'
cache_schema: 1
derived_from: companies/block/research.md
research_checked: '2026-10-26'
evidence_since: '2025-10-01'
---

# Block: bite-sized ideas

Derived from the dated source findings checked on 26 October 2026. Team/company reports, background and our optional practice remain separate.

## Card 01

### The migration beneath the demo

> **A passing typecheck can still hide the wrong UI behaviour.**
>
> Reported team use · published 2026-04-06. The April retrospective describes framework mistakes that needed more specific checks.

**In the wild:** The migration added rules and diagnostics for failures a generic compiler did not settle.

**Takeaway:** Check the requirement at the right observation boundary.

[Optional practice: inspect one change](workflow.md#optional-practice) · [Detailed research](research.md) · [Source finding](sources.md#s01)

---

## Card 02

### Choose context

> **A hint for every component is not useful for every file.**
>
> Reported team use · published 2026-04-06. The migration account reports deriving context from the file being changed.

**In the wild:** The relevant imports guided which migration knowledge reached the model.

**Takeaway:** Select evidence before expanding the prompt.

[Optional practice: inspect one change](workflow.md#optional-practice) · [Detailed research](research.md) · [Source finding](sources.md#s01)

---

## Card 03

### A repair lifecycle

> **A CI repair is a candidate, not an acceptance decision.**
>
> Reported company use · published 2026-02-23. The February Actionable CI account creates drafts and validates them before review.

**In the wild:** A changed original branch can make the proposed fix obsolete.

**Takeaway:** Handle superseded work as part of automation.

[Optional practice: inspect one change](workflow.md#optional-practice) · [Detailed research](research.md) · [Source finding](sources.md#s02)

---

## Card 04

### Keep fixed work fixed

> **An agent should not improvise a deterministic result.**
>
> Reported company use · published 2026-02-15. February skills guidance puts consistency-critical operations in scripts or templates.

**In the wild:** The model can interpret an output without owning its fixed calculation.

**Takeaway:** Separate mechanics from judgment.

[Optional practice: inspect one change](workflow.md#optional-practice) · [Detailed research](research.md) · [Source finding](sources.md#s03)

---

## Card 05

### The environment is part of the system

> **A trustworthy coding loop has an attack surface.**
>
> Reported team use · published 2026-01-15. The January internal exercise tested agent access to untrusted content and shell capabilities.

**In the wild:** The report includes model/tool variation and response work, not just one prompt.

**Takeaway:** Test the surrounding access path.

[Optional practice: inspect one change](workflow.md#optional-practice) · [Detailed research](research.md) · [Source finding](sources.md#s04)

---

## Card 06

### Count the preparation

> **Migration speed includes the system that made it possible.**
>
> Reported team use · published 2026-04-06. The April account describes a long preparation and rollout history.

**In the wild:** Retrospective success includes tooling, exceptions, corrections and cleanup.

**Takeaway:** Measure the whole programme rather than only generated changes.

[Optional practice: inspect one change](workflow.md#optional-practice) · [Detailed research](research.md) · [Source finding](sources.md#s01)

---
