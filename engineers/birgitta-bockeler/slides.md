---
title: Birgitta Böckeler — small ideas
parent: Birgitta Böckeler Slides
nav_order: 1
nav_exclude: true
last_updated: '2026-10-26'
cache_schema: 1
derived_from: engineers/birgitta-bockeler/research.md
research_checked: '2026-10-26'
---

# Birgitta Böckeler — small ideas

Derived from [cached research](research.md) checked on 26 October 2026. Worked examples are suggested adaptations.

## Card 01

### The missing alarm

> **More instructions do not tell you whether they worked.**
>
> Böckeler pairs guidance before action with feedback afterwards. These serve different purposes; a reliable structural check still cannot decide the intended feature.

**In the wild:** Suggested adaptation: document the allowed storage interface, then check that the change respects it.

**Takeaway:** Give each control a job and a failure it can detect.

[Optional practice: first lab](research.md#7-first-practical-lab) · [Detailed evidence](research.md#2-techniques-and-principles) · [Source findings](sources.md)

---

## Card 02

### The unopened manual

> **An available skill is not the same as loaded context.**
>
> Her context primer distinguishes loading chosen by a human, the model, or agent software. Important task guidance may need explicit loading.

**In the wild:** Suggested adaptation: open the reward policy before editing the reward handler.

**Takeaway:** Verify the context the agent actually used.

[Optional practice: first lab](research.md#7-first-practical-lab) · [Detailed evidence](research.md#2-techniques-and-principles) · [Source findings](sources.md)

---

## Card 03

### Three kinds of spec

> **Writing a spec first says little about its future.**
>
> She distinguishes spec-first, spec-anchored, and spec-as-source. Retaining a document creates a maintenance question; the categories are not automatic endorsements.

**In the wild:** Suggested adaptation: decide who updates the reward brief after the task ends.

**Takeaway:** Choose a specification lifecycle deliberately.

[Optional practice: first lab](research.md#7-first-practical-lab) · [Detailed evidence](research.md#2-techniques-and-principles) · [Source findings](sources.md)

---

## Card 04

### The invisible bug

> **Review effort should follow what you might fail to notice.**
>
> Her risk model considers probability, impact, and detectability. Oversight can vary with the task rather than following an all-or-nothing rule.

**In the wild:** Suggested adaptation: inspect restart persistence more closely than a visible colour change.

**Takeaway:** Check the failure that a happy-path demo could hide.

[Optional practice: first lab](research.md#7-first-practical-lab) · [Detailed evidence](research.md#2-techniques-and-principles) · [Source findings](sources.md)

---

## Card 05

### The maintenance signal

> **Working today is only one part of being easy to change.**
>
> Her sensor experiments explore structural and test-quality feedback in a specific dashboard. They do not establish the best universal tool stack.

**In the wild:** Suggested adaptation: check whether a small reward adjustment unexpectedly spreads across many modules.

**Takeaway:** Inspect the change surface as well as the result.

[Optional practice: first lab](research.md#7-first-practical-lab) · [Detailed evidence](research.md#4-tools-and-setup) · [Source findings](sources.md)

---

## Card 06

### The TDD question

> **An agent following TDD is a different experiment from a human owning tests.**
>
> Her small agent-loop evaluation found no clear TDD advantage in that setting. Limited tasks and LLM-based judgment prevent a general conclusion about TDD.

**In the wild:** Suggested adaptation: review the expected reward independently, even when the test came first.

**Takeaway:** Keep the research question narrower than the headline.

[Optional practice: first lab](research.md#7-first-practical-lab) · [Detailed evidence](research.md#2-techniques-and-principles) · [Source findings](sources.md)

---

## Card 07

### The operator test

> **Would you be comfortable being on call for this change?**
>
> Böckeler retains responsibility for generated code and highlights test understanding. The question grounds scrutiny in consequences rather than generation speed.

**In the wild:** Suggested adaptation: explain why duplicate protection still works after restart.

**Takeaway:** Own enough understanding to support the result.

[Optional practice: first lab](research.md#7-first-practical-lab) · [Detailed evidence](research.md#1-approach-in-brief) · [Source findings](sources.md)

---

## Card 08

### The broad detour

> **A capable agent can still take a costly wrong turn.**
>
> Her brownfield account describes frequent human steering, including limiting scope and correcting diagnosis. Those observations are dated, not permanent verdicts on every agent.

**In the wild:** Suggested adaptation: prove one reward path before authorising a wider rewrite.

**Takeaway:** Use experience to constrain the next useful step.

[Optional practice: first lab](research.md#7-first-practical-lab) · [Detailed evidence](research.md#3-a-feature-from-idea-to-release) · [Source findings](sources.md)

---

