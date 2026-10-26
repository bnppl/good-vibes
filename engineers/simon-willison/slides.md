---
title: Simon Willison — executable evidence
parent: Simon Willison Slides
nav_order: 1
nav_exclude: true
last_updated: 2026-10-26
cache_schema: 1
derived_from: engineers/simon-willison/research.md
research_checked: 2026-10-26
---

# Simon Willison — executable evidence

Eight short ideas derived from cached research checked on 26 October 2026. Worked reward examples are suggested adaptations, not reports of Willison's own implementation.

## Card 01

### Baseline before brilliance

> **The fastest way into a codebase may be to run its tests.**
>
> Willison begins existing-project sessions with the test suite. It shows the agent the harness and gives later changes a baseline.

**In the wild:** Suggested adaptation: record existing reward-test failures before changing replay protection.

**Takeaway:** Execute the baseline before interpreting the diff.

[Optional practice: first lab](research.md#first-practical-lab) · [Detailed evidence](research.md#start-with-an-executable-baseline) · [Source register](sources.md)

---

## Card 02

### Red means something

> **A failing test is useful only if it fails for the right reason.**
>
> His red/green pattern calls for a failure before implementation. A broken import is not evidence that your replay check detects duplicate awards.

**In the wild:** Suggested adaptation: two deliveries should expose 20 points where the agreed rule requires 10.

**Takeaway:** Inspect the failure, not only the colour.

[Optional practice: first lab](research.md#first-practical-lab) · [Detailed evidence](research.md#red-before-green) · [Source register](sources.md)

---

## Card 03

### The real run

> **A green suite can still miss an obviously broken feature.**
>
> Willison complements tests with exploratory execution: try the API, run the code, or exercise a real web UI. Relevant discoveries can become regressions.

**In the wild:** Suggested adaptation: restart the real reward process, read the retained balance, then replay the original ID.

**Takeaway:** Exercise the boundary the requirement depends on.

[Optional practice: first lab](research.md#first-practical-lab) · [Detailed evidence](research.md#tests-plus-exercised-behaviour) · [Source register](sources.md)

---

## Card 04

### Own the handoff

> **Do not make your reviewer the first person to check your agent’s patch.**
>
> He places the initial review with the author, including the generated PR description. Evidence of testing makes the handoff more useful.

**In the wild:** Suggested adaptation: explain the durable replay rule before requesting review.

**Takeaway:** Review the work and its description yourself.

[Optional practice: first lab](research.md#first-practical-lab) · [Detailed evidence](research.md#review-is-the-authors-work) · [Source register](sources.md)

---

## Card 05

### A fresh working memory

> **A subagent is useful before it becomes a miniature bureaucracy.**
>
> Willison emphasises fresh context for exploration and verbose tasks. Independent work can parallelise; too many roles add coordination overhead.

**In the wild:** Suggested adaptation: separate read-only exploration of persistence and test setup.

**Takeaway:** Delegate a bounded question with a clear output.

[Optional practice: first lab](research.md#first-practical-lab) · [Detailed evidence](research.md#use-subagents-to-manage-context) · [Source register](sources.md)

---

## Card 06

### The explanation gap

> **An implementation you cannot reason about can slow the next change.**
>
> His walkthrough and interactive-explanation patterns address cognitive debt. A source tour explains structure; a visual mechanism can supply missing intuition.

**In the wild:** Suggested adaptation: trace first delivery, replay, restart and a new submission on an event timeline.

**Takeaway:** Use explanations to build understanding, then check them against the source.

[Optional practice: first lab](research.md#first-practical-lab) · [Detailed evidence](research.md#make-hard-mechanisms-visible) · [Source register](sources.md)

---

## Card 07

### Evidence with a memory

> **A useful demo records what ran, not merely what the agent hoped happened.**
>
> Showboat, built by Willison, combines commentary with executed commands and captured output. Its verifier can re-run code blocks; scope still matters.

**In the wild:** Suggested adaptation: record a local replay-and-restart sequence with synthetic data.

**Takeaway:** Keep a reproducible observation trail.

[Optional practice: first lab](research.md#first-practical-lab) · [Detailed evidence](research.md#tools-and-setup) · [Source register](sources.md)

---

## Card 08

### Different stakes

> **The same engineer can use different standards for a toy and a production feature.**
>
> His October accounts distinguish a heavily vibe-coded game from a blog feature refined through PR review. Preserve that context when comparing methods.

**In the wild:** A playtested experiment is not evidence of a universal production-review policy.

**Takeaway:** Compare like tasks and dates before declaring disagreement.

[Optional practice: first lab](research.md#first-practical-lab) · [Detailed evidence](research.md#a-feature-from-idea-to-release) · [Source register](sources.md)

---

