---
title: Steve Yegge — bite-sized ideas
parent: Steve Yegge Slides
nav_order: 1
nav_exclude: true
last_updated: '2026-10-26'
cache_schema: 1
derived_from: engineers/steve-yegge/index.md
research_checked: '2026-10-26'
---

# Steve Yegge — bite-sized ideas

Derived from cached research checked on 26 October 2026. Examples and proposed task checks are adaptations, not attributed demonstrations.

## Card 01

### A dated method

> **A launch post is a timestamp, not a permanent setup.**
>
> Yegge endorsed Gas City in April 2026, then described private Wheelhouse in August 2026. Those accounts should keep their dates. The second is not proof that the first tool has no value.

**In the wild:** Our comparison labels public ecosystem tools separately from reported personal practice.

**Takeaway:** Compare positions at comparable dates.

[Optional practice: common lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#preserve-the-chronology) · [Cached claims](index.md#comparison-evidence)

---

## Card 02

### The interface the agent reaches for

> **A tool can be clever and still be awkward for an agent.**
>
> His January 2026 follow-up describes improving interfaces by watching agent behaviour. This is a reported design practice, not a guarantee that any particular tool will be adopted.

**In the wild:** Suggested adaptation: observe where a worker gets stuck before inventing another instruction.

**Takeaway:** Inspect the interaction before adding complexity.

[Optional practice: common lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#tools-can-fail-to-converge) · [Cached claims](index.md#comparison-evidence)

---

## Card 03

### Maintenance has a budget

> **Feature output can hide a growing repair bill.**
>
> Yegge’s December 2025 advice reserves substantial effort for code health. His percentages are heuristics, not validated targets for every team.

**In the wild:** Suggested adaptation: record review, repair and coordination time beside time spent implementing the reward rule.

**Takeaway:** Measure the whole delivery effort.

[Optional practice: common lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#code-health-competes-with-feature-throughput) · [Cached claims](index.md#comparison-evidence)

---

## Card 04

### The outcome that counts

> **A busy fleet can still miss the useful result.**
>
> The September 2026 interview-page summary reports an emphasis on outcomes and downstream limits. Reported scale is context for his experiments, not comparative proof of productivity.

**In the wild:** Our reward feature is useful only when the observed balances satisfy the agreed rule.

**Takeaway:** Ask what improved for the user.

[Optional practice: common lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#approach-in-brief) · [Cached claims](index.md#comparison-evidence)

---

## Card 05

### A task worth handing over

> **Memory should preserve the question and the evidence.**
>
> In our suggested reward workflow, the task record retains the contract, baseline, owner, dependencies and verification. A chat completion message alone cannot tell the next session what was established.

**In the wild:** The record distinguishes “A replays correctly in memory” from “A remains a duplicate after restart.”

**Takeaway:** Carry observations forward, not just confidence.

[Optional practice: common lab](workflow.md#first-practical-lab) · [Detailed evidence](workflow.md#step-2-turn-ambiguity-into-a-durable-work-item) · [Cached claims](index.md#comparison-evidence)

---

## Card 06

### A replacement needs a reference

> **New green tests can agree with a new mistake.**
>
> Yegge’s December 2025 advice describes regenerating tests after changes. In our adaptation, preserving an independent acceptance contract is how a rewrite can be checked against the original intent.

**In the wild:** Internal tests change, but replay A must still leave 10 points.

**Takeaway:** Review changed expectations as carefully as changed code.

[Optional practice: common lab](workflow.md#first-practical-lab) · [Detailed evidence](workflow.md#step-5-review-the-contract-and-the-candidate-separately) · [Cached claims](index.md#comparison-evidence)

---

## Card 07

### The restart read

> **Replay can conceal a lost reward.**
>
> Our common exercise checks the balance immediately after restart, before resubmitting A. Otherwise a lost balance followed by another award could produce a misleading final total of 10. This is our proposed check.

**In the wild:** Restart → read 10 → replay A → read 10.

**Takeaway:** Observe persistence separately from duplicate protection.

[Optional practice: common lab](workflow.md#first-practical-lab) · [Detailed evidence](workflow.md#the-observation-contract) · [Cached claims](index.md#comparison-evidence)

---

## Card 08

### Earn the parallelism

> **Another worker needs an independent job.**
>
> For our small reward feature, a scoped investigator or reviewer may reduce uncertainty. Several workers editing the same path may instead add integration work. This is a suggested adaptation, not a Yegge worker-count rule.

**In the wild:** One worker traces persistence while another checks the agreed outcomes.

**Takeaway:** Name the uncertainty and the ownership boundary.

[Optional practice: common lab](workflow.md#first-practical-lab) · [Detailed evidence](workflow.md#step-3-parallelism-must-have-a-useful-boundary) · [Cached claims](index.md#comparison-evidence)

---

