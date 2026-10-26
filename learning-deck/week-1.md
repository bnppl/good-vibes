---
title: "01 · Build confidence"
parent: Learning Deck
nav_order: 1
last_updated: 2026-10-26
---

# 01 · Build confidence

**Did the agent actually help?** Choose one project and define what “better” means before changing your workflow.

Four quick ideas · around 30 seconds each · optional deeper reading.

[All decks](index.md) · [First card ↓](#card-01)

---

## Card 01

### The false finish

> **“Done” is the cheapest thing an AI can say.**
>
> An agent can write a convincing summary while the feature still fails. A completion message is a claim. The changed application, passing checks, and reviewed diff are the evidence.

**In the wild:** “Fixed retries” sounds finished. An incorrect spelling still awards XP twice.

**Takeaway:** Define the finish line before you ask the agent to run.

[Optional practice: session 1](../learning-plan.md#session-1-context-and-a-measurable-goal) · Go deeper: [Foundations](../context-engineering/foundations.md) · [Agent evaluation](../verification/agent-evaluation.md)

---

## Card 02

### The speed trap

> **A four-minute patch can create a thirty-minute repair job.**
>
> Generation time is only one part of the job. Review, rework, and integration can swallow the apparent saving. Track the whole journey before deciding a workflow is faster.

**In the wild:** One patch lands quickly but needs half an hour of repairs. Another takes longer to generate and works first time.

**Takeaway:** Measure time to a reviewed result you can actually use.

[Optional practice: session 2](../learning-plan.md#session-2-evaluate-the-agent) · Go deeper: [Agent evaluation](../verification/agent-evaluation.md)

---

## Card 03

### The green illusion

> **Your tests can pass for the wrong reason.**
>
> A green suite only tells you what its checks observed. If a test never catches the bug, its passing result says little about that bug. For understood behaviour, first watch the relevant check fail for the intended reason.

**In the wild:** A retry test must detect duplicate XP. A broken import is a different failure.

**Takeaway:** Make the bug visible before you celebrate its disappearance.

[Optional practice: session 3](../learning-plan.md#session-3-acceptance-tests-and-human-understanding) · Go deeper: [Agentic TDD](../verification/agentic-tdd.md) · [Dave Farley walkthrough](../engineers/dave-farley/research.md) · [Comprehension debt](../verification/comprehension-debt.md)

---

## Card 04

### The invisible instructions

> **Your perfect skill might never get opened.**
>
> Writing useful guidance and getting an agent to discover it are different problems. A skill that works when you name it may be skipped during ordinary work. Crowded catalogs can make discovery harder.

**In the wild:** “Use the scoring skill” succeeds. “Fix the retry bug” never loads that same skill.

**Takeaway:** Test a natural request. Check discovery and the final result separately.

[Optional practice: session 4](../learning-plan.md#session-4-lean-instructions) · Go deeper: [Instruction layer](../context-engineering/instruction-layer.md)

---

## Lab card

### Run your baseline

> {: .try-it }
> **Put the four cards to work.**
>
> Run the five tasks from reproducible starting states with your current setup. Repeat at least two. Inspect diffs, checks, and final application state.

**Your evidence:** A baseline table, one explained failure, and a reviewed change you can explain without AI.

**Keep in mind:** Keep task-specific acceptance checks separate from the agent’s editable working tests where practical. Five tasks are learning evidence, not a general productivity result.

[Open the full lab brief](../learning-plan.md#lab-1-run-the-baseline)

[← All decks](index.md) · [Next deck →](week-2.md)
