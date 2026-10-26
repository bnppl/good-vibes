---
title: Dave Farley — bite-sized ideas
parent: Dave Farley Slides
nav_order: 1
nav_exclude: true
last_updated: 2026-10-26
cache_schema: 1
derived_from: engineers/dave-farley/index.md
research_checked: 2026-10-26
---

# Dave Farley — bite-sized ideas

Derived from the cached research checked on 26 October 2026. Examples are suggested adaptations for Spellhaven or the [common reward task](neutral-example.md); they are not Farley demonstrations.

## Card 01

### The executable promise

> **A specification should be able to tell you it was broken.**
>
> Farley advocates human-approved executable examples to guide agent work. The acceptance contract gives a concrete result to check. It still needs to express the right requirement.

**In the wild:** A replayed spelling submission leaves the XP total unchanged.

**Takeaway:** Own the intended behaviour before delegating implementation.

[Optional practice: first lab](research.md#7-your-first-lab) · [Detailed research](research.md#1-the-techniques-and-what-each-contributes) · [Cached evidence](index.md#comparison-evidence)

---

## Card 02

### Four layers, one stable idea

> **Let the interface change without rewriting the intention.**
>
> His four-layer model separates scenarios, a domain language, protocol drivers, and the real system. Technical details belong below the behavioural example.

**In the wild:** “The learner has 50 XP” survives a change to a button label or API route.

**Takeaway:** Put technical coupling behind a driver.

[Optional practice: first lab](research.md#7-your-first-lab) · [Detailed research](research.md#2-the-four-layer-model-applied-to-spellhaven) · [Cached evidence](index.md#comparison-evidence)

---

## Card 03

### The size of a mistake

> **Small steps make being wrong cheaper.**
>
> Farley recommends one scenario at a time: observe a meaningful failure, implement, review, and commit. This is incremental discovery rather than an upfront specification of everything.

**In the wild:** Agree replay protection before asking the agent to build an entire reward economy.

**Takeaway:** Finish one observable increment.

[Optional practice: first lab](research.md#7-your-first-lab) · [Detailed research](research.md#3-a-step-by-step-session) · [Cached evidence](index.md#comparison-evidence)

---

## Card 04

### The moving finish line

> **A passing test means less if the agent rewrote the answer.**
>
> Farley calls for human control of acceptance tests. Reviewing changes can detect contract erosion; actual access controls are a separate concern.

**In the wild:** Changing expected XP from 50 to 60 hides the duplicate reward.

**Takeaway:** Treat an expectation change as a product decision.

[Optional practice: first lab](research.md#7-your-first-lab) · [Detailed research](research.md#5-protecting-the-contract-in-practice) · [Cached evidence](index.md#comparison-evidence)

---

## Card 05

### The green question

> **Would your test notice a plausible defect?**
>
> Farley recommends pairing acceptance tests with mutation testing. Surviving mutations need investigation; some reveal missing assertions, while others preserve equivalent behaviour.

**In the wild:** Temporarily remove duplicate protection and check that the reward scenario fails.

**Takeaway:** Challenge assertions, then investigate survivors.

[Optional practice: first lab](research.md#7-your-first-lab) · [Detailed research](research.md#3-a-step-by-step-session) · [Cached evidence](index.md#comparison-evidence)

---

## Card 06

### Guidance is not a gate

> **A course plugin can coach the agent. Your harness checks the result.**
>
> The official course plugin documents learn, build, and review commands. It supplies guidance, not an independent test runner. This does not establish Farley’s entire private tool stack.

**In the wild:** For Spellhaven, our guide suggests using its existing runner and a compatible mutation tool.

**Takeaway:** Separate documented tools from your own adaptations.

[Optional practice: first lab](research.md#7-your-first-lab) · [Detailed research](research.md#4-tools-what-is-official-and-what-is-a-suggested-choice) · [Cached evidence](index.md#comparison-evidence)

---

## Card 07

### Same problem, fairer comparison

> **Changing the task changes what you are comparing.**
>
> Our common reward exercise keeps the same outcomes for every engineer: 10 points once per submission ID, persistence across restart, and a new ID as a separate event. This is a suggested application of the cached principles, not a Farley demonstration.

**In the wild:** Replaying A leaves 10; a read immediately after restart still shows 10; replaying A stays at 10; B produces 20.

**Takeaway:** Agree the same observable outcomes before comparing workflows.

[Optional practice: common reward lab](neutral-example.md#proposed-sequence-from-inspection-to-integration) · [Shared task and assumptions](neutral-example.md#the-shared-requirement) · [Cached evidence](index.md#comparison-evidence)

---

## Card 08

### The restart that matters

> **A process-local memory can pass a replay test and still lose the rule.**
>
> In our suggested reward exercise, restart is part of the agreed contract. The check must observe retained application state after a real runtime restart. Clearing a test variable does not establish persistence.

**In the wild:** Suggested adaptation: A yields 10; a read after restart still shows 10; replaying A still leaves 10.

**Takeaway:** Verify the boundary the requirement actually crosses.

[Optional practice: common reward lab](neutral-example.md#proposed-sequence-from-inspection-to-integration) · [Layer and driver responsibilities](neutral-example.md#map-the-four-layers-without-prescribing-the-product-design) · [Detailed guide](research.md#3-a-step-by-step-session)

---
