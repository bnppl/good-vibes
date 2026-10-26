---
title: Armin Ronacher — bite-sized ideas
parent: Armin Ronacher Slides
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
nav_order: 1
nav_exclude: true
derived_from: engineers/armin-ronacher/research.md
---

# Armin Ronacher — bite-sized ideas

Derived from the research cache checked on 26 October 2026. Dates and evidence qualifications remain part of each idea. Worked examples are suggested adaptations.

## Card 01

### Tool feedback

> **The agent cannot fix an error it cannot see.**
>
> Ronacher’s 2025 recommendations favour fast tools, readable errors and accessible logs. That is dated guidance about the feedback environment, not proof of a universal productivity effect.

**In the wild:** Our reward exercise records whether A was newly accepted and what balance the application actually holds.

**Takeaway:** Make the failure observable before adding orchestration.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#techniques-and-principles) · [Cached claims](index.md#comparison-evidence)

---

## Card 02

### Visible intent

> **A plan is easier to challenge when you can edit it.**
>
> His December 2025 preference is conversational clarification and a visible Markdown handoff. This is not a universal rejection of other planning interfaces or executable tests.

**In the wild:** Our handoff lists the reward rule, relevant files, open questions and observed checks.

**Takeaway:** Keep requirements distinct from speculative design.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#requirements-and-planning) · [Cached claims](index.md#comparison-evidence)

---

## Card 03

### Keep your understanding

> **A running loop is not the same as a maintainable result.**
>
> In June 2026 he separates useful bounded loops from difficulties with unattended long-lived code. The distinction concerns task and outcome, not a blanket rejection of agents.

**In the wild:** Our suggested review asks a person to explain why replaying A cannot add points again.

**Takeaway:** Judge the artifact, not how long the machine stayed busy.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#human-role-and-coordination) · [Cached claims](index.md#comparison-evidence)

---

## Card 04

### Dated tools

> **January’s tool description can be wrong by October.**
>
> His January Pi article and October Codemode account describe different capabilities. The cache keeps those dates attached rather than inventing one timeless personal stack.

**In the wild:** A historical absence of built-in MCP is not a current claim about Pi 1.0.

**Takeaway:** Compare tools at compatible dates.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#tools-and-setup) · [Cached claims](index.md#comparison-evidence)

---

## Card 05

### Context has a shape

> **A toy prompt can miss the failure your real session produces.**
>
> His July 2026 tool-schema investigation reports history-dependent malformed calls. The proposed explanation about training remains a hypothesis, not verified provider internals.

**In the wild:** Our diagnostic bundle keeps the actual failing invocation and the relevant session conditions.

**Takeaway:** Reproduce the integration before ranking the model.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#verification-and-design) · [Cached claims](index.md#comparison-evidence)

---

## Card 06

### Responsibility

> **The machinery did it. You still own the action.**
>
> Ronacher’s accountability position keeps responsibility with the human or organisation deploying the tool. That principle does not specify one immutable review checklist.

**In the wild:** Before accepting our reward patch, a person checks the changed state rule and its evidence.

**Takeaway:** Delegate work without delegating ownership.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#human-role-and-coordination) · [Cached claims](index.md#comparison-evidence)

---

## Card 07

### Trust boundaries

> **A sandbox around the shell is not the whole harness.**
>
> October’s architecture account distinguishes harness trust from execution isolation. This is not a safety guarantee or complete permission policy.

**In the wild:** Our setup review asks which operations occur on each side of the boundary.

**Takeaway:** Inspect actual capabilities, not just a sandbox label.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#boundaries-and-safeguards) · [Cached claims](index.md#comparison-evidence)

---

## Card 08

### The common test

> **Read after restart before you replay.**
>
> In our shared exercise, combining restart and replay can hide lost state: A is simply rewarded again. This is a suggested adaptation, not a Ronacher demonstration.

**In the wild:** A gives 10; restart then read must still show 10; only then replay A and check it stays 10.

**Takeaway:** Separate persistence from duplicate detection.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#first-practical-lab) · [Cached claims](index.md#comparison-evidence)

---
