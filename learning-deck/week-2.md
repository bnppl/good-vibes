---
title: "02 · Give the agent what it needs"
parent: Learning Deck
nav_order: 2
last_updated: 2026-10-26
---

# 02 · Give the agent what it needs

**What's causing the mistakes?** Diagnose a failure, then change one part of the workflow.

Four quick ideas · around 30 seconds each · optional deeper reading.

[All decks](index.md) · [First card ↓](#card-05)

---

## Card 05

### The context buffet

> **More context can make an agent less useful.**
>
> Dumping a whole repository into context gives useful facts more noise to compete with. Search for the missing fact, read the relevant slice, and keep the full evidence accessible by path.

**In the wild:** The agent follows an obsolete scoring helper while the current XP service sits elsewhere in the repo.

**Takeaway:** Give it the right fact at the right moment.

[Optional practice: session 5](../learning-plan.md#session-5-retrieval-that-fits-the-task) · Go deeper: [Knowledge layer](../context-engineering/knowledge-layer.md) · [Tool layer](../context-engineering/tool-layer.md)

---

## Card 06

### The missing feedback

> **A test the agent never sees cannot help it fix anything.**
>
> A harness connects the model to tools, checks, state, and permissions. Feedback only helps the next decision when it reaches the agent in a form it can act on.

**In the wild:** “Expected 10 XP, received 20” points at a real mismatch. A buried CI failure leaves the agent guessing.

**Takeaway:** Close the loop between a failed check and the next action.

[Optional practice: session 6](../learning-plan.md#session-6-harness-engineering) · Go deeper: [Harness engineering](../context-engineering/harness-engineering.md)

---

## Card 07

### The dead-end error

> **“Something went wrong” is an expensive tool response.**
>
> Vague errors encourage retries without a new hypothesis. Useful errors identify the failed operation, what changed, and what the agent can check next. Keep sensitive details out of the message.

**In the wild:** “Unknown learner ID; no record changed” is more useful than “Failed.”

**Takeaway:** Design error messages for the next decision.

[Optional practice: session 7](../learning-plan.md#session-7-tool-interfaces-and-useful-traces) · Go deeper: [Tool engineering](../context-engineering/tool-engineering.md) · [Agent evaluation](../verification/agent-evaluation.md)

---

## Card 08

### The handoff problem

> **A fresh chat forgets more than your code.**
>
> The files survive. The reasons, unchecked assumptions, and failed approaches may not. A short handoff should record the goal, revision, verified state, open questions, and next action.

**In the wild:** “Retry fix at abc123; scoring passes; offline sync untested” gives the next session a place to restart.

**Takeaway:** Attach a source or check to important conclusions.

[Optional practice: session 8](../learning-plan.md#session-8-state-across-context-windows) · Go deeper: [Memory layer](../context-engineering/memory-layer.md) · [Orchestration layer](../context-engineering/orchestration-layer.md)

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

[← All decks](index.md) · [Previous deck](week-1.md) · [Next deck →](week-3.md)
