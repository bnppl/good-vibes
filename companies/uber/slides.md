---
title: Uber — bite-sized ideas
parent: Uber Company Slides
nav_order: 1
last_updated: '2026-11-24'
research_checked: '2026-11-24'
research_cutoff: '2026-11-24'
evidence_since: '2025-10-01'
last_read: null
status: unread
cache_schema: 1
nav_exclude: true
derived_from: companies/uber/research.md
---

# Uber: bite-sized ideas

Recent AI-assisted software development, with dates and source scope attached. [Detailed research](research.md).

## Card 01

### Before the approval room

> **Improve the input before asking for a decision.**
>
> Reported team use · published/revision 2026-05-12. Uber’s PRD evaluator adds context and prioritized gaps before expert approval.

**In the wild:** Trial before publication; exact sessions not established. Reported case; not independently reproduced.

**Takeaway:** Keep critique and approval as separate responsibilities.

[Optional practice: inspect an outcome](workflow.md#optional-practice) · [Detailed evidence](research.md) · [Source record](sources.md#s02)

---

## Card 02

### The model earns its task

> **Choose a reviewer on defects it must actually find.**
>
> Reported company use · published/revision 2026-08-27. The reported uReview benchmark contains real PRs with known bugs.

**In the wild:** February–August 2026 measurements; exact task dates not established. Reported case; not independently reproduced.

**Takeaway:** Measure missed issues, noise, cost and latency together.

[Optional practice: inspect an outcome](workflow.md#optional-practice) · [Detailed evidence](research.md) · [Source record](sources.md#s01)

---

## Card 03

### A cheaper session is not the outcome

> **Count useful work, not just tokens.**
>
> Reported company use · published/revision 2026-08-27. The factory account distinguishes unit economics from completed outcomes.

**In the wild:** February–August 2026 measurements; exact task dates not established. Reported case; not independently reproduced.

**Takeaway:** Compare quality and cost at the same task boundary.

[Optional practice: inspect an outcome](workflow.md#optional-practice) · [Detailed evidence](research.md) · [Source record](sources.md#s01)

---

## Card 04

### Shared access

> **A tool gateway is part of the workflow.**
>
> Reported company use · published/revision 2026-08-27. Authentication, context access and routing sit around the model.

**In the wild:** February–August 2026 measurements; exact task dates not established. Reported case; not independently reproduced.

**Takeaway:** Inspect effective access before increasing agent autonomy.

[Optional practice: inspect an outcome](workflow.md#optional-practice) · [Detailed evidence](research.md) · [Source record](sources.md#s01)

---

## Card 05

### The skill that outlives its usefulness

> **A useful skill can become extra baggage.**
>
> Reported company use · published 2026-11-23. Uber compares isolated runs with and without skills using blind judging, then improves or retires guidance as models change.

**In the wild:** Its PR skill used a shared temporary file; concurrent sessions interfered with each other's PRs. This is a reported failure, not our reproduced experiment.

**Takeaway:** Retest discovery and outcomes after upgrades. Keep a regression for each meaningful failure; planned A/B canaries are future work.

[Optional practice: inspect an outcome](workflow.md#optional-practice) · [Detailed evidence](research.md#november-2026-skills-have-a-retirement-path) · [Source record](sources.md#s04)
