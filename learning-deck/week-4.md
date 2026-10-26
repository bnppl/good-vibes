---
title: "04 · Choose your workflow"
parent: Learning Deck
nav_order: 4
last_updated: 2026-10-26
---

# 04 · Choose your workflow

**How much automation earns its keep?** Use your results to choose a workflow you can defend.

Four quick ideas · around 30 seconds each · optional deeper reading.

[All decks](index.md) · [First card ↓](#card-13)

---

## Card 13

### The extra-agent trap

> **A second agent can multiply an unclear task.**
>
> More agents add handoffs, coordination, and integration. First establish a clear single-agent loop. Add complexity when a specific bottleneck gives you a reason to compare it.

**In the wild:** One agent can investigate a retry bug, change scoring, run checks, and present the diff.

**Takeaway:** Name the bottleneck before adding another agent.

[Optional practice: session 13](../learning-plan.md#session-13-start-with-a-simple-workflow) · Go deeper: [Single-agent patterns](../agent-patterns/single-agent.md) · [Agentic development](../context-engineering/agentic-dev.md)

---

## Card 14

### The telephone game

> **Every agent handoff can lose part of the story.**
>
> Tightly coupled specialists may work better as skills and tools in one shared loop. Separate agents can still help with independent work, verification, or permission boundaries. Compare outcomes on your tasks.

**In the wild:** The “scoring agent” keeps asking the “retry agent” for context it already had.

**Takeaway:** Split work where the boundary helps. Measure the trade-off.

[Optional practice: session 14](../learning-plan.md#session-14-delegate-only-with-a-testable-reason) · Go deeper: [Multi-agent coordination](../agent-patterns/multi-agent.md) · [Orchestration layer](../context-engineering/orchestration-layer.md)

---

## Card 15

### The identity gap

> **Your approval is not the same thing as a working credential.**
>
> An action needs both authority and an integration that can execute it. User identity, service accounts, and scheduled jobs can have different permissions. More retries do not create missing access.

**In the wild:** You approve a GitHub push. The connected integration still rejects the write.

**Takeaway:** Know whose credentials each external action uses.

[Optional practice: session 15](../learning-plan.md#session-15-autonomy-recovery-and-review) · Go deeper: [Autonomy](../agent-patterns/autonomy.md) · [Production lessons](../agent-patterns/production.md)

---

## Card 16

### The moving bottleneck

> **When code gets cheaper, the queue moves somewhere else.**
>
> Faster generation can shift waiting time into review, CI, and integration. Count useful delivery and rework, rather than treating more code or more PRs as the result.

**In the wild:** A team doubles its patches. Review queues double too. Users see no improvement yet.

**Takeaway:** Find the slowest part of the whole system.

[Optional practice: session 16](../learning-plan.md#session-16-evidence-and-team-recommendation) · Go deeper: [Agent evaluation](../verification/agent-evaluation.md) · [Verification sources](../verification/sources.md)

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

[← All decks](index.md) · [Previous deck](week-3.md) · [Optional framework survey](../learning-plan.md#optional-framework-survey-and-deep-reads)
