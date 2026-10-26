---
title: "01 · Build confidence"
parent: Learning Deck
nav_order: 1
---

# 01 · Build confidence

**Did the agent actually help?** Choose one project and define what “better” means before changing your workflow.

Four lesson cards · about 3–5 minutes each before the exercise · one 60–90 minute lab.

[All decks](index.md) · [First card ↓](#card-01)

---

## Card 01

### Define the finish line

> {: .aha }
> **A convincing answer is not a finished task.**
>
> Define success as an observable outcome before the agent starts. Include a case where asking a question or stopping is correct.

**Picture it:** “Fix spelling retries” becomes “An incorrect answer allows one retry, and does not award XP twice.”

**Recall before revealing:** What makes “improve the app” difficult to evaluate?

<details markdown="1">
<summary>Reveal the answer</summary>

There is no agreed outcome to check. Pick a specific behaviour, starting state, and acceptance criteria first.

</details>

**Try it:** Write five task titles: bug, feature, refactor, regression, discovery. Add acceptance criteria and include one ambiguous request.

[Full exercise: session 1](../learning-plan.md#session-1-context-and-a-measurable-goal) · Go deeper: [Foundations](../context-engineering/foundations.md) · [Agent evaluation](../verification/agent-evaluation.md)

[Next card →](#card-02)

---

## Card 02

### Measure the whole job

> {: .aha }
> **A fast patch can create a slow afternoon.**
>
> Measure correctness, review, rework, elapsed time, and cost. Keep unseen tasks aside before tuning your setup.

**Picture it:** The agent finishes in four minutes, but you spend thirty repairing it. Generation time alone hides that cost.

**Recall before revealing:** Why keep tasks the agent configuration has not been tuned against?

<details markdown="1">
<summary>Reveal the answer</summary>

They test whether an improvement transfers beyond the examples you used to design it. Once they guide tuning, reserve fresh tasks.

</details>

**Try it:** Create one blank run record: task, starting commit, configuration, trial, checks, review/rework minutes, elapsed time, cost, failure, evidence. Reserve unseen tasks.

[Full exercise: session 2](../learning-plan.md#session-2-evaluate-the-agent) · Go deeper: [Agent evaluation](../verification/agent-evaluation.md)

[Next card →](#card-03)

---

## Card 03

### Make the failure visible

> {: .aha }
> **Green tests mean little if they never saw the bug.**
>
> For understood behaviour, run a relevant check before implementation. Confirm it fails for the intended reason. Review the result and explain the change yourself.

**Picture it:** A retry test fails because XP is awarded twice—not because the test cannot import the app.

**Recall before revealing:** What if you cannot yet describe the correct behaviour?

<details markdown="1">
<summary>Reveal the answer</summary>

Investigate and clarify intent first. A confidently written test can still encode the wrong requirement.

</details>

**Try it:** Write one behavioural check. Record its intended failure and what you must be able to explain before accepting a fix.

[Full exercise: session 3](../learning-plan.md#session-3-acceptance-tests-and-human-understanding) · Go deeper: [Agentic TDD](../verification/agentic-tdd.md) · [Comprehension debt](../verification/comprehension-debt.md)

[Next card →](#card-04)

---

## Card 04

### Give instructions a job

> {: .aha }
> **More rules can mean more noise.**
>
> Keep instructions relevant and non-conflicting. Link to detailed material when needed; preserve safety constraints. Test whether a smaller file actually helps.

**Picture it:** “See the package scripts for test commands” can avoid maintaining a second, stale command list.

**Recall before revealing:** Should you aim for a fixed maximum number of rules?

<details markdown="1">
<summary>Reveal the answer</summary>

No. Relevance, conflicts, and measured task outcomes matter more than an arbitrary rule count.

</details>

**Try it:** Find three redundant, conflicting, or derivable instructions. Draft a leaner version and keep the baseline for comparison.

[Full exercise: session 4](../learning-plan.md#session-4-lean-instructions) · Go deeper: [Instruction layer](../context-engineering/instruction-layer.md)

[Ready for the lab →](#lab-card)

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

**Recall round:** Without looking, explain each card's main idea and one failure mode. Reopen the ones you cannot yet explain.

[← All decks](index.md) · [Next deck →](week-2.md)
