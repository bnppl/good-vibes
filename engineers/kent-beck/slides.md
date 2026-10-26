---
title: Kent Beck — bite-sized ideas
parent: Kent Beck Slides
nav_order: 1
nav_exclude: true
last_updated: 2026-10-26
cache_schema: 1
derived_from: engineers/kent-beck/research.md
research_checked: 2026-10-26
---

# Kent Beck — bite-sized ideas

Derived from the public-source research cache checked on 26 October 2026. Reward examples are suggested adaptations, not demonstrations by Beck.

## Card 01

### One more question

> **A small next step is easier to judge than a finished-looking system.**
>
> Beck’s published workflow uses a test plan to steer the next increment. The useful idea is a visible next decision, not a giant checklist treated as complete foresight.

**In the wild:** Suggested adaptation: ask whether replay adds points before building a whole reward platform.

**Takeaway:** Choose the next missing behaviour.

[Optional practice: first lab](research.md#7-first-practical-lab) · [Detailed source finding](sources.md#s01) · [Full research](research.md)

---

## Card 02

### Two kinds of change

> **A cleanup and a new rule ask different questions of the reviewer.**
>
> Beck distinguishes structural and behavioural changes. Separating their diffs helps reveal what should remain the same and what should change. Timing still requires judgment.

**In the wild:** Suggested adaptation: rename the reward calculation separately from changing replay eligibility.

**Takeaway:** Make the intent of each change visible.

[Optional practice: first lab](research.md#7-first-practical-lab) · [Detailed source finding](sources.md#s04) · [Full research](research.md)

---

## Card 03

### The cost of tomorrow

> **Working today and easy to change tomorrow are different achievements.**
>
> Beck’s Genie Tarpit discussion separates features from future flexibility. It diagnoses a tension and leaves the general remedy open.

**In the wild:** Suggested adaptation: passing replay tests should not hide state that nobody can explain after restart.

**Takeaway:** Review behaviour and changeability.

[Optional practice: first lab](research.md#7-first-practical-lab) · [Detailed source finding](sources.md#s07) · [Full research](research.md)

---

## Card 04

### A swarm is a feature

> **More agents can create more work for the human steering them.**
>
> In an Intent session, Beck reported carrying coordination state himself. His question is whether the tool delivers the desired outcome. This is an account of one experience, not a universal benchmark.

**In the wild:** Suggested adaptation: compare coordination and review effort before adding another worker to a tiny patch.

**Takeaway:** Optimise the outcome, not the agent count.

[Optional practice: first lab](research.md#7-first-practical-lab) · [Detailed source finding](sources.md#s06) · [Full research](research.md)

---

## Card 05

### Instructions have a home

> **A useful instruction can be specific enough to run.**
>
> BPlusTree3’s inspected agent.md names project checks and benchmarks. Its conventions are scoped to that repository; they are not a complete personal setup.

**In the wild:** Suggested adaptation: name your real reward test command rather than telling an agent to “check everything.”

**Takeaway:** Keep guidance concrete and local.

[Optional practice: first lab](research.md#7-first-practical-lab) · [Detailed source finding](sources.md#s03) · [Full research](research.md)

---

## Card 06

### The human in the loop

> **Tool capability is only part of the design problem.**
>
> Beck’s October public introduction calls for augmented-coding tools oriented around human needs. The full paid essay was not accessed, so this card does not infer a detailed method from it.

**In the wild:** Suggested adaptation: notice whether each cycle leaves you able to explain the important decisions.

**Takeaway:** Track understanding alongside output.

[Optional practice: first lab](research.md#7-first-practical-lab) · [Detailed source finding](sources.md#s08) · [Full research](research.md)

---

## Card 07

### A faster way to learn

> **Try changing the scope before accepting a longer wait.**
>
> An October public teaser proposes fixing feedback-loop time and varying scope. It does not supply a universal latency target in the inspected excerpt.

**In the wild:** Suggested adaptation: reduce a sprawling reward patch to one observable question, then inspect the result.

**Takeaway:** Experiment with a shorter decision loop.

[Optional practice: first lab](research.md#7-first-practical-lab) · [Detailed source finding](sources.md#s09) · [Full research](research.md)

---

## Card 08

### What the tests observe

> **A project’s validation story should be more than “the agent said green.”**
>
> The BPlusTree3 README describes reference-comparison tests and performance checks. Those are project practices; this research did not reproduce its benchmark results.

**In the wild:** Suggested adaptation: check a fresh process reading the stored reward, not the old object’s memory.

**Takeaway:** Match the observation to the guarantee.

[Optional practice: first lab](research.md#7-first-practical-lab) · [Detailed source finding](sources.md#s02) · [Full research](research.md)

---

