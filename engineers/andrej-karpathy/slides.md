---
title: Andrej Karpathy — bite-sized ideas
parent: Andrej Karpathy Slides
nav_order: 1
nav_exclude: true
last_updated: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
derived_from: engineers/andrej-karpathy/index.md
---

# Andrej Karpathy — bite-sized ideas

Derived from the cache checked on 26 October 2026. This profile mixes coding guidance and AI-system concepts; worked examples are our suggested adaptations.

## Card 01

### Feedback is the lever

> **A useful loop needs an outcome it can actually assess.**
>
> Karpathy's November 2025 verifiability argument connects automation to repeatable, efficient attempts and assessable outcomes. It is a conceptual argument, not a guarantee that every metric captures intent.

**In the wild:** Our reward check distinguishes a genuinely retained balance from a lost balance awarded again.

**Takeaway:** Describe what the measurement observes and what it misses.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#approach-in-brief) · [Cached claim](index.md#c01)

---

## Card 02

### Baseline before complexity

> **An impressive result can sit on an untrusted measurement.**
>
> His 2019 ML recipe begins with data inspection and simple baselines. This is training guidance, not a prescribed current coding-agent test cadence.

**In the wild:** Our adaptation runs existing reward checks before adding a new persistence mechanism.

**Takeaway:** Establish what works before trying to improve it.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#establish-a-simple-baseline-before-adding-complexity) · [Cached claim](index.md#c03)

---

## Card 03

### An artifact you can explain

> **Small enough to inspect is an engineering advantage.**
>
> February 2026 microgpt is a compact educational implementation. Its explanatory purpose does not mean every production system should fit in one file.

**In the wild:** Our reward review asks where the accepted ID and balance become durable, using actual code paths.

**Takeaway:** Simplify the explanation without deleting essential structure.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#keep-the-artifact-small-enough-to-explain) · [Cached claim](index.md#c05)

---

## Card 04

### A bounded experiment

> **The interesting autonomy is inside a defined experiment.**
>
> The March 2026 autoresearch artifact separates human instructions from agent-edited training code. It is an inspected ML design, not proof of a complete private agent swarm.

**In the wild:** Our software adaptation declares the next missing reward behaviour and the files relevant to it.

**Takeaway:** Name the scope before increasing autonomy.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#what-the-public-artifacts-actually-show) · [Cached claim](index.md#c07)

---

## Card 05

### The rule that stays fixed

> **Changing the evaluator changes the experiment.**
>
> The March 2026 ML program excludes evaluator edits and extra dependencies. Written restrictions describe intent; they do not prove enforced resource permissions.

**In the wild:** Our reward implementation must not rewrite expected balances to match its result.

**Takeaway:** Keep ownership of the objective separate from implementation.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#what-the-public-artifacts-actually-show) · [Cached claim](index.md#c11)

---

## Card 06

### Keep the provenance

> **An endorsed cleaned transcript is still a cleaned transcript.**
>
> The April 2026 Sequoia page discloses AI-generated summary/transcript content checked by Karpathy. Its professional-responsibility framing must retain that provenance.

**In the wild:** Our source register does not present the inaccessible Software 3.0 subscriber article as fully read.

**Takeaway:** Preserve how the evidence reached you.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#human-understanding-and-review) · [Cached claim](index.md#c06)

---

## Card 07

### One number, two stories

> **A post-replay balance can hide a lost reward.**
>
> Suggested adaptation: our fixed task reads the retained balance immediately after runtime restart, before replaying A. Otherwise losing all state and awarding A again could still produce 10.

**In the wild:** 0 → A10 → replayA10 → restart/read10 → replayA10 → newB20.

**Takeaway:** Observe persistence separately from duplicate detection.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](workflow.md#shared-task) · [Scope limits](workflow.md#separate-optional-model-quality-illustration)

---

## Card 08

### Knowledge that accumulates

> **A derived wiki and its sources are different layers.**
>
> The public LLM Wiki pattern separates source material, derived knowledge, and schema. It is an abstract pattern, not a verified complete private deployment.

**In the wild:** Our task note records what was tried; application storage still has to preserve the reward itself.

**Takeaway:** Durable notes do not guarantee durable product state.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#context-and-durable-state) · [Cached claim](index.md#c08)

---
