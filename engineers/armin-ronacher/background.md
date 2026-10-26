---
title: Armin Ronacher — comparison history
parent: Armin Ronacher
nav_order: 9
last_updated: '2026-10-26'
nav_exclude: true
---

# Comparison history

These fields and slide notes preceded the publication-window review on 26 October 2026. They are retained for traceability, not evidence of current AI practice. [Current evidence](recent-ai.md).

## Previous comparison fields

### C01 · Goal and bottleneck

For long-lived code he cares about, Ronacher prioritises understanding and maintainability rather than output volume.

Long-lived code he cares about, not a claim that autonomous loops never work.

[Original supporting source](https://lucumr.pocoo.org/2026/6/23/the-coming-loop/)

### C02 · Requirements and specification

His December 2025 planning preference is conversational clarification and a visible, editable Markdown handoff.

December 2025 personal preference; not a requirement to reject executable specifications.

[Original supporting source](https://lucumr.pocoo.org/2025/12/17/what-is-plan-mode/)

### C03 · Increment and planning

The December 2025 account uses clarification and handoff; a universal increment size or mandatory cadence is not established.

Do not infer a strict test-first cycle or fixed task duration from this preference.

[Original supporting source](https://lucumr.pocoo.org/2025/12/17/what-is-plan-mode/)

### C04 · Testing and verification

His July 2025 retrospective reports test-generation dissatisfaction; a complete current test-first policy is not established.

July 2025 experience, not a verdict against testing or TDD.

[Original supporting source](https://lucumr.pocoo.org/2025/7/30/things-that-didnt-work/)

### C05 · Design and refactoring

Prefer explicit, understandable code and assess language tooling rather than familiarity alone.

Recommendations and experience; no cross-language performance ranking established.

[Original supporting source](https://lucumr.pocoo.org/2026/2/9/a-language-for-agents/)

### C06 · Human understanding and review

Humans and organisations retain responsibility for tool-produced actions.

This is accountability, not proof of one immutable line-by-line review policy.

[Original supporting source](https://lucumr.pocoo.org/2026/5/26/clankers/)

### C07 · Agent autonomy and coordination

His June 2026 account distinguishes useful bounded investigations from unattended production of long-lived code.

June 2026 self-report; September factory failure is additional task-specific evidence.

[Original supporting source](https://lucumr.pocoo.org/2026/6/23/the-coming-loop/)

### C08 · Context and durable state

His January 2026 Pi account reports local task records, session branches, and review context.

January 2026 account; tool-session persistence is distinct from application reward persistence.

[Original supporting source](https://lucumr.pocoo.org/2026/1/31/pi/)

### C09 · Tooling and environment

October 2026 Pi account includes Codemode/MCP composition.

Dated authored account; complete current private setup unknown.

[Original supporting source](https://lucumr.pocoo.org/2026/10/6/codemode/)

### C10 · Integration and release

A complete current coding integration and release gate is not established.

Production infrastructure examples do not establish branch strategy or required checks for all coding projects.

### C11 · Boundaries and safeguards

His October 2026 Codemode account distinguishes harness trust from execution-environment isolation; it is not a complete personal permission policy.

Architecture description, not a complete personal permission policy.

[Original supporting source](https://lucumr.pocoo.org/2026/10/6/codemode/)

### C12 · Evaluation and tradeoffs

Evaluate automation by observed acceptability and maintenance cost.

Informal personal heuristics; no universal productivity advantage established.

[Original supporting source](https://lucumr.pocoo.org/2025/7/30/things-that-didnt-work/)

## Previous slide notes

# Armin Ronacher — bite-sized ideas

Derived from the research cache checked on 26 October 2026. Dates and evidence qualifications remain part of each idea. Worked examples are suggested adaptations.

### Archived card 01

### Tool feedback

> **The agent cannot fix an error it cannot see.**
>
> Ronacher’s 2025 recommendations favour fast tools, readable errors and accessible logs. That is dated guidance about the feedback environment, not proof of a universal productivity effect.

**In the wild:** Our reward exercise records whether A was newly accepted and what balance the application actually holds.

**Takeaway:** Make the failure observable before adding orchestration.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#techniques-and-principles) · [Cached claims](index.md#comparison-evidence)

---

### Archived card 02

### Visible intent

> **A plan is easier to challenge when you can edit it.**
>
> His December 2025 preference is conversational clarification and a visible Markdown handoff. This is not a universal rejection of other planning interfaces or executable tests.

**In the wild:** Our handoff lists the reward rule, relevant files, open questions and observed checks.

**Takeaway:** Keep requirements distinct from speculative design.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#requirements-and-planning) · [Cached claims](index.md#comparison-evidence)

---

### Archived card 03

### Keep your understanding

> **A running loop is not the same as a maintainable result.**
>
> In June 2026 he separates useful bounded loops from difficulties with unattended long-lived code. The distinction concerns task and outcome, not a blanket rejection of agents.

**In the wild:** Our suggested review asks a person to explain why replaying A cannot add points again.

**Takeaway:** Judge the artifact, not how long the machine stayed busy.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#human-role-and-coordination) · [Cached claims](index.md#comparison-evidence)

---

### Archived card 04

### Dated tools

> **January’s tool description can be wrong by October.**
>
> His January Pi article and October Codemode account describe different capabilities. The cache keeps those dates attached rather than inventing one timeless personal stack.

**In the wild:** A historical absence of built-in MCP is not a current claim about Pi 1.0.

**Takeaway:** Compare tools at compatible dates.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#tools-and-setup) · [Cached claims](index.md#comparison-evidence)

---

### Archived card 05

### Context has a shape

> **A toy prompt can miss the failure your real session produces.**
>
> His July 2026 tool-schema investigation reports history-dependent malformed calls. The proposed explanation about training remains a hypothesis, not verified provider internals.

**In the wild:** Our diagnostic bundle keeps the actual failing invocation and the relevant session conditions.

**Takeaway:** Reproduce the integration before ranking the model.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#verification-and-design) · [Cached claims](index.md#comparison-evidence)

---

### Archived card 06

### Responsibility

> **The machinery did it. You still own the action.**
>
> Ronacher’s accountability position keeps responsibility with the human or organisation deploying the tool. That principle does not specify one immutable review checklist.

**In the wild:** Before accepting our reward patch, a person checks the changed state rule and its evidence.

**Takeaway:** Delegate work without delegating ownership.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#human-role-and-coordination) · [Cached claims](index.md#comparison-evidence)

---

### Archived card 07

### Trust boundaries

> **A sandbox around the shell is not the whole harness.**
>
> October’s architecture account distinguishes harness trust from execution isolation. This is not a safety guarantee or complete permission policy.

**In the wild:** Our setup review asks which operations occur on each side of the boundary.

**Takeaway:** Inspect actual capabilities, not just a sandbox label.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#boundaries-and-safeguards) · [Cached claims](index.md#comparison-evidence)

---

### Archived card 08

### The common test

> **Read after restart before you replay.**
>
> In our shared exercise, combining restart and replay can hide lost state: A is simply rewarded again. This is a suggested adaptation, not a Ronacher demonstration.

**In the wild:** A gives 10; restart then read must still show 10; only then replay A and check it stays 10.

**Takeaway:** Separate persistence from duplicate detection.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#first-practical-lab) · [Cached claims](index.md#comparison-evidence)

---
