---
title: GitHub — bite-sized ideas
parent: GitHub Company Slides
nav_order: 1
nav_exclude: true
last_updated: '2026-10-26'
cache_schema: 1
derived_from: companies/github/research.md
research_checked: '2026-10-26'
evidence_since: '2025-10-01'
---

# GitHub — bite-sized ideas

Recent AI-assisted development evidence, scoped to the inspected cases. Publication/revision dates differ from practice dates.

## Card 01

### A live port

> **A rewrite can keep a small blast radius.**
>
> Reported team use · September 2026. Components were replaced incrementally.

**In the wild:** The runtime case retained a live compatibility boundary.

**Takeaway:** Compare the unit of change, not just the amount of code.

[Optional practice: inspect the boundary](workflow.md#optional-practice) · [Detailed research](research.md) · [Source record](sources.md#s02)

---

## Card 02

### Independent contracts

> **The implementation must not redefine success.**
>
> Reported team use · March 2026. Regression contracts remained human-controlled.

**In the wild:** A passing self-authored test is a different observer from an independent contract.

**Takeaway:** Ask who may change the oracle.

[Optional practice: inspect the boundary](workflow.md#optional-practice) · [Detailed research](research.md) · [Source record](sources.md#s01)

---

## Card 03

### Translation before redesign

> **Changing fewer variables helps diagnosis.**
>
> Reported team use · September 2026. Compatibility came before redesign.

**In the wild:** Separate translation defects from intended behaviour changes.

**Takeaway:** Make the purpose of a migration explicit.

[Optional practice: inspect the boundary](workflow.md#optional-practice) · [Detailed research](research.md) · [Source record](sources.md#s02)

---

## Card 04

### The final review

> **Automated review is one observer.**
>
> Reported team use · March 2026. McGoffin retained final human review.

**In the wild:** His named project does not establish every GitHub team’s practice.

**Takeaway:** Keep the team scope attached to the claim.

[Optional practice: inspect the boundary](workflow.md#optional-practice) · [Detailed research](research.md) · [Source record](sources.md#s01)

---

## Card 05

### Escaped defects

> **An agent-assisted port can still regress.**
>
> Reported team use · September 2026. Lifecycle regressions survived checks.

**In the wild:** A large successful migration does not prove complete test coverage.

**Takeaway:** Use failure classes to improve future observations.

[Optional practice: inspect the boundary](workflow.md#optional-practice) · [Detailed research](research.md) · [Source record](sources.md#s02)

---
