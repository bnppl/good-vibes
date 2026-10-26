---
title: "02 · Give the agent what it needs"
parent: Learning Deck
nav_order: 2
---

# 02 · Give the agent what it needs

**What's causing the mistakes?** Diagnose a failure, then change one part of the workflow.

Four lesson cards · about 3–5 minutes each before the exercise · one 60–90 minute lab.

[All decks](index.md) · [First card ↓](#card-05)

---

## Card 05

### Find the missing fact

> {: .aha }
> **The agent cannot use a fact it never finds.**
>
> Classify context failures before adding more text: missing, irrelevant, stale, or hard to retrieve. Choose retrieval to fit the task.

**Picture it:** The agent changes an old scoring helper because it never discovers the current XP service.

**Recall before revealing:** Would loading the whole repository necessarily fix this?

<details markdown="1">
<summary>Reveal the answer</summary>

No. Extra irrelevant or stale material can obscure the useful information. Compare direct discovery, upfront context, or a combination.

</details>

**Try it:** Trace one failure to a context problem. Propose one retrieval change and predict what should improve.

[Full exercise: session 5](../learning-plan.md#session-5-retrieval-that-fits-the-task) · Go deeper: [Knowledge layer](../context-engineering/knowledge-layer.md) · [Tool layer](../context-engineering/tool-layer.md)

[Next card →](#card-06)

---

## Card 06

### Close the feedback loop

> {: .aha }
> **Instructions alone do not run the workflow.**
>
> The harness connects instructions, tools, verification, state, and permissions. Feedback must reach the agent while it can still correct the result.

**Picture it:** A failed retry test returns the expected and actual XP values, giving the agent a concrete mismatch to investigate.

**Recall before revealing:** What is missing when tests run but their failures never reach the agent?

<details markdown="1">
<summary>Reveal the answer</summary>

A useful feedback path. A check only helps correction if its result is available and understandable.

</details>

**Try it:** Map instructions, tools, checks, state, permissions, and traces. Choose one missing feedback mechanism and note its limits.

[Full exercise: session 6](../learning-plan.md#session-6-harness-engineering) · Go deeper: [Harness engineering](../context-engineering/harness-engineering.md)

[Next card →](#card-07)

---

## Card 07

### Make errors actionable

> {: .aha }
> **“Something went wrong” is a dead end.**
>
> A useful tool response states what failed and gives enough context for the next step. Keep full evidence retrievable when shortening output.

**Picture it:** “Unknown learner ID; no record changed” is clearer than “Failed.” Synthetic IDs keep the example free of personal data.

**Recall before revealing:** Does a tool trace prove what the model was thinking?

<details markdown="1">
<summary>Reveal the answer</summary>

No. It records observable calls and results. Diagnose those actions without treating them as access to internal reasoning.

</details>

**Try it:** Rewrite one vague tool message. Choose trace fields: tool, arguments, result, version/configuration; redact secrets and personal data.

[Full exercise: session 7](../learning-plan.md#session-7-tool-interfaces-and-useful-traces) · Go deeper: [Tool engineering](../context-engineering/tool-engineering.md) · [Agent evaluation](../verification/agent-evaluation.md)

[Next card →](#card-08)

---

## Card 08

### Leave a restart point

> {: .aha }
> **A fresh session should not have to guess.**
>
> A handoff records goal, current commit, verified state, open questions, and next action. Verify it against the repository when resuming.

**Picture it:** “Retry fix at commit abc123; scoring checks pass; offline behaviour untested; next inspect the sync queue.”

**Recall before revealing:** When should you reset a session?

<details markdown="1">
<summary>Reveal the answer</summary>

Use observed drift, task boundaries, and context pressure. A fixed time limit is not a universal rule.

</details>

**Try it:** Draft a five-field handoff and name a concrete sign that would trigger a reset.

[Full exercise: session 8](../learning-plan.md#session-8-state-across-context-windows) · Go deeper: [Memory layer](../context-engineering/memory-layer.md) · [Orchestration layer](../context-engineering/orchestration-layer.md)

[Ready for the lab →](#lab-card)

---

## Lab card

### Change one variable

> {: .try-it }
> **Put the four cards to work.**
>
> Choose one instruction, retrieval, tool, or feedback change. Restore matched starting states, repeat selected tasks under both configurations, then try held-out tasks.

**Your evidence:** A comparison table and a keep/reject decision covering correctness, review/rework, elapsed time, and cost.

**Keep in mind:** Keep versions fixed where possible, document changes, and keep the rubric stable. Report small-sample limits.

[Open the full lab brief](../learning-plan.md#lab-2-change-one-variable)

**Recall round:** Without looking, explain each card's main idea and one failure mode. Reopen the ones you cannot yet explain.

[← All decks](index.md) · [Previous deck](week-1.md) · [Next deck →](week-3.md)
