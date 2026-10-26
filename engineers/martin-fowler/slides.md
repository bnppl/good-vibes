---
title: Martin Fowler — bite-sized ideas
parent: Martin Fowler Slides
nav_order: 1
nav_exclude: true
last_updated: '2026-10-26'
cache_schema: 1
derived_from: engineers/martin-fowler/index.md
research_checked: '2026-10-26'
---

# Martin Fowler — bite-sized ideas

Derived from the research cache checked on 26 October 2026. Reward examples are suggested adaptations, not demonstrations of Fowler implementing the feature.

## Card 01

### Keep the code in view

> **Delegating the typing does not delegate responsibility.**
>
> Fowler describes agentic engineering as work where people still care about generated code, its structure, and the feedback around it. This is a conceptual recommendation, not a complete private workflow.

**In the wild:** Review the reward path and executed checks before accepting an agent’s success report.

**Takeaway:** Keep a human accountable for what the software does and how it works.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed research](research.md#approach-in-brief) · [Cached evidence](index.md#c06)

---

## Card 02

### Let the model ask

> **The missing context may be an unanswered question.**
>
> His interrogatory-LLM entry describes interviews that create or review context documents. He credits Harper Reed and reports that his own trial needed reminders about one-question pacing.

**In the wild:** Ask what “successful award” means before assuming how restart persistence works.

**Takeaway:** Review the generated context report against the answers.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed research](research.md#use-an-interview-to-build-context) · [Cached evidence](index.md#c08)

---

## Card 03

### Concrete before abstract

> **A scenario can expose what a diagram hides.**
>
> In a multi-person conversation, Fowler’s own contributions favour concrete scenarios and domain-familiar abstractions. Do not assign every speaker’s claims to him.

**In the wild:** Walk through first A, replay A, restart, and new B before choosing a reward design.

**Takeaway:** Let observed cases sharpen the model.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed research](research.md#start-with-scenarios-and-let-design-teach-you) · [Cached evidence](index.md#c02)

---

## Card 04

### A smaller transformation

> **A large rewrite is not automatically a refactoring.**
>
> Fowler’s public refactoring introduction describes small behaviour-preserving transformations. Improving structure before or after a feature should leave observable behaviour intact.

**In the wild:** Separate an extraction that clarifies storage access from a change to replay semantics.

**Takeaway:** Show what stayed the same as well as what became clearer.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed research](research.md#test-and-refactor-as-design-work) · [Cached evidence](index.md#c05)

---

## Card 05

### Read the test result

> **“All green” is a claim until the checks run.**
>
> The cached material combines historical self-testing-code guidance with Fowler’s reported experience of agent success claims disagreeing with execution. Neither establishes a flawless modern test policy.

**In the wild:** Inspect the actual balance checks and their output instead of accepting the final summary.

**Takeaway:** Observe the evidence the report is supposed to describe.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed research](research.md#test-and-refactor-as-design-work) · [Cached evidence](index.md#c04)

---

## Card 06

### Read the byline

> **The host of a website is not the author of every method on it.**
>
> The maintainability-sensors article on Fowler’s site is authored by Birgitta Böckeler. Its experiments and tool inventory belong to her account. Fowler’s own related commentary is separate evidence.

**In the wild:** A source comparison must not give two people the same private stack because both appear on one site.

**Takeaway:** Check authorship before assigning a workflow.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed research](research.md#tools-and-setup) · [Cached evidence](sources.md#s13)

---

## Card 07

### A reason to deviate

> **A sensible default starts a decision. It does not finish it.**
>
> Fowler describes defaults as known starting practices that can be overridden when context gives a good reason. This is general guidance, not a validated agent-productivity ranking.

**In the wild:** Begin with the existing runner; explain a change if it cannot observe the required restart boundary.

**Takeaway:** Make the reason for an exception inspectable.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed research](research.md#treat-conventions-as-defaults-with-reasons) · [Cached evidence](index.md#c12)

---

## Card 08

### The invisible re-award

> **Restart plus replay can hide a lost reward.**
>
> Suggested adaptation: our common exercise reads balance immediately after restart, before replaying A. Otherwise losing all state and awarding A again could still produce the expected 10.

**In the wild:** Baseline 0 → A10 → replay A10 → restart/read10 → replay A10 → B20.

**Takeaway:** Observe persistence and duplicate protection separately.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed research](workflow.md#shared-task-and-assumptions) · [Cached evidence](workflow.md#step-7--inspect-integration-and-release-readiness)

---

