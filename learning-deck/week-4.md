---
title: "04 · Choose your workflow"
parent: Learning Deck
nav_order: 4
---

# 04 · Choose your workflow

**How much automation earns its keep?** Use your results to choose a workflow you can defend.

Four lesson cards · about 3–5 minutes each before the exercise · one 60–90 minute lab.

[All decks](index.md) · [First card ↓](#card-13)

---

## Card 13

### Start with a clear loop

> {: .aha }
> **A second agent cannot fix an unclear task.**
>
> Begin with intent, investigation, implementation, checks, and review. Add orchestration only to address a specific bottleneck.

**Picture it:** For a retry bug, one agent locates scoring, fixes the behaviour, runs checks, and presents the diff for review.

**Recall before revealing:** What should come before adding agents?

<details markdown="1">
<summary>Reveal the answer</summary>

Name the bottleneck and explain why a more complex workflow might reduce it. Keep the simple workflow as the comparison.

</details>

**Try it:** Describe your simple workflow for one task. Name the bottleneck, if one exists.

[Full exercise: session 13](../learning-plan.md#session-13-start-with-a-simple-workflow) · Go deeper: [Single-agent patterns](../agent-patterns/single-agent.md) · [Agentic development](../context-engineering/agentic-dev.md)

[Next card →](#card-14)

---

## Card 14

### Give delegation a hypothesis

> {: .aha }
> **Parallel work still has to fit together.**
>
> Separate ownership, agree interfaces, isolate workspaces, and budget for integration and review. Compare results rather than assuming more agents are faster.

**Picture it:** Hint UI and scoring changes may overlap. Agree their interface and who owns each file before splitting the work.

**Recall before revealing:** Why can parallel tasks take longer overall?

<details markdown="1">
<summary>Reveal the answer</summary>

Coordination, conflicts, integration, review, and duplicated work can outweigh time saved. Agent count needs evidence for your workload.

</details>

**Try it:** Design a bounded comparison with ownership, interfaces, isolation, integration checks, and cost budget—or explain why one agent is enough.

[Full exercise: session 14](../learning-plan.md#session-14-delegate-only-with-a-testable-reason) · Go deeper: [Multi-agent coordination](../agent-patterns/multi-agent.md) · [Orchestration layer](../context-engineering/orchestration-layer.md)

[Next card →](#card-15)

---

## Card 15

### Define the stop conditions

> {: .aha }
> **Autonomy needs a way to stop and recover.**
>
> Match allowed actions to task risk. Define escalation, retry/step limits, rollback, and review before unattended work begins.

**Picture it:** An agent may edit a disposable feature branch, but a consequential release needs the agreed review process.

**Recall before revealing:** What should happen when the agent is unsure about scope?

<details markdown="1">
<summary>Reveal the answer</summary>

It should surface the uncertainty and escalate according to the agreed boundary. More retries do not create authority.

</details>

**Try it:** Write allowed actions, escalation triggers, limits, recovery steps, and who reviews consequential changes.

[Full exercise: session 15](../learning-plan.md#session-15-autonomy-recovery-and-review) · Go deeper: [Autonomy](../agent-patterns/autonomy.md) · [Production lessons](../agent-patterns/production.md)

[Next card →](#card-16)

---

## Card 16

### Make a recommendation you can defend

> {: .aha }
> **“It felt faster” is a starting hypothesis.**
>
> Separate what you measured, what a source reports, and what you still suspect. Include costs, understanding, risks, and conditions that would reverse the decision.

**Picture it:** “Review time fell on these tasks; offline sync remains untested; trial again on unseen sync work before expanding.”

**Recall before revealing:** What makes a recommendation stronger than a tool endorsement?

<details markdown="1">
<summary>Reveal the answer</summary>

An explicit problem, evidence with limits, adoption conditions, and a clear reason to reconsider when new results arrive.

</details>

**Try it:** Draft one page: problem, results, costs, comprehension check, risks, adoption conditions, and reversal criteria.

[Full exercise: session 16](../learning-plan.md#session-16-evidence-and-team-recommendation) · Go deeper: [Agent evaluation](../verification/agent-evaluation.md) · [Verification sources](../verification/sources.md)

[Ready for the lab →](#lab-card)

---

## Lab card

### Compare and decide

> {: .try-it }
> **Put the four cards to work.**
>
> Compare your simple workflow with a justified alternative on matched tasks and budgets. If delegation has no clear purpose, compare another workflow change. Include a held-out task.

**Your evidence:** A repeatable workflow, results table, and recommendation. Explain one architectural choice without AI before finalising it.

**Keep in mind:** Record integration/review effort, failures, and cost as well as elapsed time. Keep your claims within the evidence.

[Open the full lab brief](../learning-plan.md#lab-4-compare-and-decide)

**Recall round:** Without looking, explain each card's main idea and one failure mode. Reopen the ones you cannot yet explain.

[← All decks](index.md) · [Previous deck](week-3.md) · [Optional framework survey](../learning-plan.md#optional-framework-survey-and-deep-reads)
