---
title: Hamel Husain — comparison history
parent: Hamel Husain
nav_order: 9
last_updated: '2026-10-26'
nav_exclude: true
---

# Comparison history

These fields and slide notes preceded the publication-window review on 26 October 2026. They are retained for traceability, not evidence of current AI practice. [Current evidence](recent-ai.md).

## Previous comparison fields

### C01 · Goal and bottleneck

Make AI-product quality measurable before optimising architecture or generation speed.

Product-development advice from 2024/2025, not a measured universal bottleneck or personal coding cadence.

[Original supporting source](https://hamel.dev/blog/posts/evals/index.html)

### C02 · Requirements and specification

His 2025 guide and September 2026 trial favour inspecting examples before committing to subjective failure criteria.

Open-ended product criteria can emerge from review; this does not suspend already agreed deterministic requirements.

[Original supporting source](https://hamel.dev/blog/posts/claude-auto-evals/index.html)

### C03 · Increment and planning

Use a product-improvement loop of observation, targeted change and measured feedback.

A product-experiment increment is not an established patch size or strict internal agent TDD cycle.

[Original supporting source](https://hamel.dev/blog/posts/field-guide/index.html)

### C04 · Testing and verification

Use code for objective product checks; validate subjective judges against human labels and held-out examples.

Product evaluation, with supporting published skill artifacts. It does not establish a universal personal coding-agent test-first policy.

[Original supporting source](https://hamel.dev/blog/posts/llm-judge/index.html)

### C05 · Design and refactoring

Make AI outputs and supporting evidence easier for users and reviewers to verify.

June 2026 product-design advice; not a complete architecture or refactoring cadence for code generation.

[Original supporting source](https://hamel.dev/blog/posts/eval-smell/)

### C06 · Human understanding and review

Domain experts own quality criteria; inspect the data and the evaluator rather than approving a score alone.

September trial and earlier judge guidance. Human product judgment remains distinct from complete line-by-line code-review policy.

[Original supporting source](https://hamel.dev/blog/posts/claude-auto-evals/index.html)

### C07 · Agent autonomy and coordination

Joint eval skills let coding agents assist discovery and evaluator work; private coding-agent topology is not established.

Husain/Shankar guidance and inspected repository, not an observed complete personal fleet or autonomous production permission.

[Original supporting source](https://hamel.dev/blog/posts/evals-skills/)

### C08 · Context and durable state

Published evaluator guidance separates prompt examples, development cases and final test cases.

An inspected artifact and data-state convention, not evidence of personal conversational memory or handoff infrastructure.

[Original supporting source](https://github.com/ai-evals-course/evals-skills/blob/80d5f7b0127c7572ed9e9339937adbfd7240ffeb/skills/validate-evaluator/SKILL.md)

### C09 · Tooling and environment

His October 2025 account favours notebooks and custom review interfaces over a vendor-specific universal answer.

Historical self-report; joint published eval skills and September tool trial are separately attributed. Complete present stack unknown.

[Original supporting source](https://hamel.dev/blog/posts/eval-tools/index.html)

### C10 · Integration and release

Joint September 2026 guidance separates regression checks before release from sampled production evaluation.

AI-product lifecycle guidance, not a verified current private deployment, approval or rollback configuration.

[Original supporting source](https://hamel.dev/blog/posts/evals-faq/)

### C11 · Boundaries and safeguards

Joint guidance distinguishes inline guardrails from evaluators that measure outcomes after generation.

Product-control distinction; a complete personal coding sandbox, permission and protected-test policy is not established.

[Original supporting source](https://hamel.dev/blog/posts/evals-faq/)

### C12 · Evaluation and tradeoffs

The October 2026 joint study tunes task-specific decision thresholds and checks calibration alongside cost.

Husain/Saha study on 100 traces, not universal default thresholds, calibrated probabilities, or a cross-engineer performance ranking.

[Original supporting source](https://hamel.dev/blog/posts/decision-model-evals/)

## Previous slide notes

# Hamel Husain — bite-sized ideas

Derived from the cache checked on 26 October 2026. This deck concerns AI-product evaluation. Reward examples are our suggested adaptations, not a personal Husain coding-session demonstration.

### Archived card 01

### The right target

> **A model benchmark is not your product’s acceptance test.**
>
> Husain’s product-evaluation work asks whether a particular application succeeds on its users’ tasks. General model scores answer a different question.

**In the wild:** Our reward lab checks the stored balance, not the model’s general reasoning score.

**Takeaway:** Name the system and outcome being evaluated.

[Optional practice: common lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#approach-in-brief) · [Cached claim](index.md#c01)

---

### Archived card 02

### Look before scoring

> **A rubric can hide a problem you have not noticed yet.**
>
> His September 2026 tool trial argues for examining data before committing to subjective criteria. That does not undo already agreed objective rules.

**In the wild:** A earns ten points once is fixed intent; whether an explanation is misleading may need example review.

**Takeaway:** Separate known obligations from criteria still being discovered.

[Optional practice: common lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#requirements-and-error-discovery) · [Cached claim](index.md#c02)

---

### Archived card 03

### The exact check

> **Do not ask a language model whether ten equals ten.**
>
> The inspected code-eval skill assigns objective rules to code checks. A judge is for an interpretive criterion, not a substitute for an exact state observation.

**In the wild:** Read the actual balance after replay instead of grading a confident success message.

**Takeaway:** Use the simplest valid observation for the rule.

[Optional practice: common lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#testing-and-verification) · [Cached claim](sources.md#s10)

---

### Archived card 04

### Earn trust

> **Your judge needs a test of its own.**
>
> Husain’s guide uses expert labels and critiques; the published validation recipe separates development from final assessment. A high aggregate agreement can conceal important errors.

**In the wild:** Inspect both false acceptance and false rejection, with the positive class written down.

**Takeaway:** Validate the evaluator before trusting its verdicts.

[Optional practice: common lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#testing-and-verification) · [Cached claim](index.md#c04)

---

### Archived card 05

### Make review possible

> **A score is hard to challenge without the example.**
>
> His June 2026 product-design argument makes supporting evidence part of the review experience. It is guidance about verifiability, not a universal UI template.

**In the wild:** Our suggested viewer shows the event, retained balance and explanation together.

**Takeaway:** Show what a reviewer needs to decide.

[Optional practice: common lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#design-and-refactoring) · [Cached claim](index.md#c05)

---

### Archived card 06

### Thresholds are choices

> **The default cutoff is not a business decision.**
>
> Husain and Antaripa Saha’s October 2026 study investigates task-specific thresholds and calibration on 100 leasing traces. Its model results do not transfer automatically.

**In the wild:** A different cost of missed failures can justify a different classifier tradeoff.

**Takeaway:** Choose the tradeoff, then measure it on suitable data.

[Optional practice: common lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#evaluation-and-tradeoffs) · [Cached claim](index.md#c12)

---

### Archived card 07

### A tool, not a policy

> **Published eval skills are not a private agent setup.**
>
> Husain and Shreya Shankar’s March/August 2026 publication shares product-evaluation skills. The September 2026 repository revision was inspected, not run.

**In the wild:** A discovery helper can organise review; it does not own the product’s quality decision.

**Takeaway:** Keep shared guidance, personal practice and runtime evidence distinct.

[Optional practice: common lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#agent-autonomy-and-coordination) · [Cached claim](index.md#c07)

---

### Archived card 08

### The boundary matters

> **Read after restart before replaying the event.**
>
> Suggested adaptation: the shared task observes persistence before resubmitting A. Otherwise losing all state and awarding A again could accidentally produce the expected ten.

**In the wild:** 0 → A10 → replayA10 → restart/read10 → replayA10 → B20.

**Takeaway:** Check persistence and duplicate identity separately.

[Optional practice: common lab](workflow.md#first-practical-lab) · [Detailed evidence](workflow.md#the-fixed-task) · [Cached claim](workflow.md#step-1--establish-the-observation-path)

---
