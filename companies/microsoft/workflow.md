---
title: Microsoft — workflow and optional practice
parent: Microsoft
nav_order: 2
last_updated: '2026-10-26'
research_checked: '2026-10-26'
research_cutoff: '2026-10-26'
evidence_since: '2025-10-01'
last_read: null
status: unread
---

# Microsoft — workflow and optional practice

[Profile](index.md) · [Research](research.md) · [Sources](sources.md)

## What is actually documented

The paper's authors used assisted analysis code and retained responsibility. The VS Code artifact specifies validation expectations. These are different cases, not successive steps of one Microsoft-wide process. [Study](sources.md#s01) · [Artifact](sources.md#s02)

A complete feature-to-production workflow is not established by either. The exercise below tests a transferable engineering decision, not Microsoft's measured rollout effect.

<a id="optional-practice"></a>

## Optional practice

**Suggested adaptation, not reported company practice.** No proposed step below is evidence that the company follows it.

Choose a small local change with a public behaviour you can independently observe. This is a validation-plan exercise, not a rollout experiment.

1. State the behaviour and one plausible regression before delegating implementation.
2. Inventory existing checks and identify which inspect the changed behaviour, which merely compile code and which are unrelated.
3. Let an assistant propose the smallest justified check set. Ask it to explain why each check matters.
4. Run that set and retain actual outputs. Change one relevant input or dependency, then show which prior result is no longer reusable.
5. Introduce a controlled incorrect implementation and verify that the selected check catches it. If it does not, improve the observation rather than reporting a misleading pass.
6. Record correctness, elapsed human effort and verification effort separately. Do not use generated line counts as the result.

**Success observations:** validation covers the stated risk, old results are invalidated when relevant inputs change, and an independent observation rejects the seeded defect. This tests your harness, not Microsoft's reported effect size.
