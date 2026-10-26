---
title: Chip Huyen — bite-sized ideas
parent: Chip Huyen Slides
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
nav_order: 1
nav_exclude: true
derived_from: engineers/chip-huyen/research.md
---

# Chip Huyen — bite-sized ideas

Derived from the public research cache checked on 26 October 2026. These ideas concern **building AI systems**. Reward examples are our suggested adaptations, not demonstrations by Huyen or evidence of her personal coding-agent policy.

## Card 01

### The right problem

> **A better model can still make the wrong product.**
>
> Her January 2025 advice separates product value from model capability. It does not establish a personal coding workflow.

**In the wild:** Our reward task needs exact state semantics, not a model to guess whether A equals A.

**Takeaway:** State the user outcome before choosing an AI mechanism.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#requirements-and-scope) · [Cached evidence](index.md#c01)

---

## Card 02

### The minimum platform

> **You do not need the whole architecture on day one.**
>
> Her July 2024 platform design adds components as needs arise. Its order is illustrative, not compulsory.

**In the wild:** Our deterministic reward boundary may need no retrieval or model router at all.

**Takeaway:** Make each component earn its place.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#increment-and-planning) · [Cached evidence](index.md#c03)

---

## Card 03

### Two kinds of checking

> **A judge’s approval does not make 20 equal 10.**
>
> Her product-evaluation advice retains human assessment. Exact balance assertions remain separate deterministic checks.

**In the wild:** Check real balance separately from an optional generated explanation.

**Takeaway:** Name the system and the claim being evaluated.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#testing-and-verification) · [Cached evidence](index.md#c04)

---

## Card 04

### The configuration matters

> **Changing the prompt can change the product.**
>
> Her April 2023 production account discusses tracking prompt versions and evaluating changes. Its old API examples are not current setup instructions.

**In the wild:** Keep a separate record if a later explanation model or prompt changes.

**Takeaway:** Version the change you are trying to assess.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#design-and-refactoring) · [Cached evidence](index.md#c05)

---

## Card 05

### The source of the failure

> **Not every AI-system failure is a model failure.**
>
> Her 2022 monitoring note includes ordinary pipeline defects among failure sources. Monitoring helps detect a problem; it does not repair it.

**In the wild:** A lost award after restart is a state problem even if the explanation sounds convincing.

**Takeaway:** Locate the failing boundary before selecting the remedy.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#techniques-and-principles) · [Cached evidence](sources.md#s08)

---

## Card 06

### The price of another try

> **Extra sampling is an engineering tradeoff.**
>
> Her January 2024 sampling discussion connects quality choices with cost. A format-valid result does not settle semantic correctness.

**In the wild:** A deterministic reward total needs a direct assertion, not repeated model votes.

**Takeaway:** Measure the benefit and the resource cost separately.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#evaluation-and-tradeoffs) · [Cached evidence](sources.md#s06)

---

## Card 07

### Tool authority

> **Reading and changing the world are different capabilities.**
>
> Her January 2025 agent framework treats write actions as a distinct risk. This is product-agent guidance, not a verified personal sandbox.

**In the wild:** A future explanation component need not receive authority to award points.

**Takeaway:** Make capabilities explicit at the application boundary.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#boundaries-and-safeguards) · [Cached evidence](index.md#c11)

---

## Card 08

### The shared task

> **Read after restart before replaying the event.**
>
> Suggested adaptation: a replay could re-award A after all state was lost, accidentally producing the expected 10. Observe retained balance first.

**In the wild:** 0 → A10 → replay A10 → restart/read10 → replay A10 → B20.

**Takeaway:** Test persistence and duplicate protection as separate claims.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](workflow.md#six-independent-observations) · [Cached evidence](workflow.md#fixed-task-and-starting-assumptions)

---
