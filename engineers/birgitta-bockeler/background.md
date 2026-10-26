---
title: Birgitta Böckeler — comparison history
parent: Birgitta Böckeler
nav_order: 9
last_updated: '2026-10-26'
nav_exclude: true
---

# Comparison history

These fields and slide notes preceded the publication-window review on 26 October 2026. They are retained for traceability, not evidence of current AI practice. [Current evidence](recent-ai.md).

## Previous comparison fields

### C01 · Goal and bottleneck

Calibrate oversight to error probability, consequence, and detectability.

Conditional judgment, not a calibrated quantitative formula.

[Original supporting source](https://martinfowler.com/articles/exploring-gen-ai/to-vibe-or-not-vibe.html)

### C02 · Requirements and specification

Distinguish spec-first, spec-anchored, and spec-as-source; evaluate their maintenance implications.

Tools were tried in September 2025; maintenance effectiveness remained an open question.

[Original supporting source](https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html)

### C03 · Increment and planning

Her March 2025 brownfield accounts favour working slices and human judgment to constrain broad agent changes.

Dated personal experiences; not a controlled comparison of agent products.

[Original supporting source](https://martinfowler.com/articles/exploring-gen-ai/13-role-of-developer-skills.html)

### C04 · Testing and verification

Her August 2026 exploratory evaluation distinguishes human-owned tests and review checkpoints from TDD wholly inside the agent loop.

Limited greenfield tasks; LLM-based quality judgment; imperfect adherence. Not evidence against all TDD.

[Original supporting source](https://martinfowler.com/articles/exploring-gen-ai/tdd-in-the-agent-loop.html)

### C05 · Design and refactoring

Her May 2026 dashboard experiments explore structural feedback to preserve changeability, while recognising its limits.

One application, specific configurations; no universal performance claim or copied setup.

[Original supporting source](https://martinfowler.com/articles/sensors-for-coding-agents.html)

### C06 · Human understanding and review

Keep responsibility for generated code, especially test quality; use operational consequences to guide scrutiny.

Does not establish a requirement to manually inspect every generated line.

[Original supporting source](https://martinfowler.com/articles/exploring-gen-ai/i-still-care-about-the-code.html)

### C07 · Agent autonomy and coordination

Her March 2025 supervised brownfield accounts involve frequent human steering; a complete private orchestration setup is not established.

Dated personal experiences; not a controlled comparison of agent products.

[Original supporting source](https://martinfowler.com/articles/exploring-gen-ai/13-role-of-developer-skills.html)

### C08 · Context and durable state

Curate context and distinguish human, model, and software-controlled loading.

Claude Code feature descriptions are a dated example, not current installation verification.

[Original supporting source](https://martinfowler.com/articles/exploring-gen-ai/context-engineering-coding-agents.html)

### C09 · Tooling and environment

Documented sensor experiments include type checking, ESLint, Semgrep, dependency-cruiser, and mutation testing.

One application, specific configurations; no universal performance claim or copied setup.

[Original supporting source](https://martinfowler.com/articles/sensors-for-coding-agents.html)

### C10 · Integration and release

Place feedback along the lifecycle according to cost, speed, and criticality.

Conceptual lifecycle-feedback model, not a complete proven control system or an established personal integration cadence, deployment approval, or rollback setup.

[Original supporting source](https://martinfowler.com/articles/harness-engineering.html)

### C11 · Boundaries and safeguards

A complete permission, protected-test, approval, or budget policy is not established by the reviewed material.

Unknown is not evidence of opposition or lack of safeguards. Project-specific controls remain a separate design task.

### C12 · Evaluation and tradeoffs

Her August 2026 exploratory agent-loop TDD study found no clear benefit under its narrow conditions; this is not a general verdict on TDD.

Limited greenfield tasks; LLM-based quality judgment; imperfect adherence. Not evidence against all TDD.

[Original supporting source](https://martinfowler.com/articles/exploring-gen-ai/tdd-in-the-agent-loop.html)

## Previous slide notes

# Birgitta Böckeler — small ideas

Derived from [cached research](research.md) checked on 26 October 2026. Worked examples are suggested adaptations.

### Archived card 01

### The missing alarm

> **More instructions do not tell you whether they worked.**
>
> Böckeler pairs guidance before action with feedback afterwards. These serve different purposes; a reliable structural check still cannot decide the intended feature.

**In the wild:** Suggested adaptation: document the allowed storage interface, then check that the change respects it.

**Takeaway:** Give each control a job and a failure it can detect.

[Optional practice: first lab](research.md#7-first-practical-lab) · [Detailed evidence](research.md#2-techniques-and-principles) · [Source findings](sources.md)

---

### Archived card 02

### The unopened manual

> **An available skill is not the same as loaded context.**
>
> Her context primer distinguishes loading chosen by a human, the model, or agent software. Important task guidance may need explicit loading.

**In the wild:** Suggested adaptation: open the reward policy before editing the reward handler.

**Takeaway:** Verify the context the agent actually used.

[Optional practice: first lab](research.md#7-first-practical-lab) · [Detailed evidence](research.md#2-techniques-and-principles) · [Source findings](sources.md)

---

### Archived card 03

### Three kinds of spec

> **Writing a spec first says little about its future.**
>
> She distinguishes spec-first, spec-anchored, and spec-as-source. Retaining a document creates a maintenance question; the categories are not automatic endorsements.

**In the wild:** Suggested adaptation: decide who updates the reward brief after the task ends.

**Takeaway:** Choose a specification lifecycle deliberately.

[Optional practice: first lab](research.md#7-first-practical-lab) · [Detailed evidence](research.md#2-techniques-and-principles) · [Source findings](sources.md)

---

### Archived card 04

### The invisible bug

> **Review effort should follow what you might fail to notice.**
>
> Her risk model considers probability, impact, and detectability. Oversight can vary with the task rather than following an all-or-nothing rule.

**In the wild:** Suggested adaptation: inspect restart persistence more closely than a visible colour change.

**Takeaway:** Check the failure that a happy-path demo could hide.

[Optional practice: first lab](research.md#7-first-practical-lab) · [Detailed evidence](research.md#2-techniques-and-principles) · [Source findings](sources.md)

---

### Archived card 05

### The maintenance signal

> **Working today is only one part of being easy to change.**
>
> Her sensor experiments explore structural and test-quality feedback in a specific dashboard. They do not establish the best universal tool stack.

**In the wild:** Suggested adaptation: check whether a small reward adjustment unexpectedly spreads across many modules.

**Takeaway:** Inspect the change surface as well as the result.

[Optional practice: first lab](research.md#7-first-practical-lab) · [Detailed evidence](research.md#4-tools-and-setup) · [Source findings](sources.md)

---

### Archived card 06

### The TDD question

> **An agent following TDD is a different experiment from a human owning tests.**
>
> Her small agent-loop evaluation found no clear TDD advantage in that setting. Limited tasks and LLM-based judgment prevent a general conclusion about TDD.

**In the wild:** Suggested adaptation: review the expected reward independently, even when the test came first.

**Takeaway:** Keep the research question narrower than the headline.

[Optional practice: first lab](research.md#7-first-practical-lab) · [Detailed evidence](research.md#2-techniques-and-principles) · [Source findings](sources.md)

---

### Archived card 07

### The operator test

> **Would you be comfortable being on call for this change?**
>
> Böckeler retains responsibility for generated code and highlights test understanding. The question grounds scrutiny in consequences rather than generation speed.

**In the wild:** Suggested adaptation: explain why duplicate protection still works after restart.

**Takeaway:** Own enough understanding to support the result.

[Optional practice: first lab](research.md#7-first-practical-lab) · [Detailed evidence](research.md#1-approach-in-brief) · [Source findings](sources.md)

---

### Archived card 08

### The broad detour

> **A capable agent can still take a costly wrong turn.**
>
> Her brownfield account describes frequent human steering, including limiting scope and correcting diagnosis. Those observations are dated, not permanent verdicts on every agent.

**In the wild:** Suggested adaptation: prove one reward path before authorising a wider rewrite.

**Takeaway:** Use experience to constrain the next useful step.

[Optional practice: first lab](research.md#7-first-practical-lab) · [Detailed evidence](research.md#3-a-feature-from-idea-to-release) · [Source findings](sources.md)

---
