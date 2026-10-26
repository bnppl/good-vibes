---
title: Steve Yegge — common reward workflow
parent: Steve Yegge
nav_order: 2
last_updated: '2026-10-26'
last_read: null
status: unread
cache_schema: 1
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
---

# A tracked reward feature from intent to evidence

**Suggested adaptation.** This is original applied guidance informed by the [cached research](research.md). It is not Yegge's own demo, a reproduction of private Wheelhouse, or evidence that this sequence is faster than another engineer's sequence.

## Shared task and assumptions

A request may be delivered more than once. Award **10 points once per submission ID**. A successful award survives a runtime restart. A new submission ID is a separate event. Establish existing behaviour before changing code.

The starting language, framework, storage, transport, and test runner are unknown. There is no extra concurrent-delivery, network, UI, migration, or distributed transaction requirement in this exercise. Those may warrant separate requirements in a real product; adding them to only one engineer's example makes comparison unfair.

Use the same starting revision and isolated data for any later runnable comparison. This guide proposes a workflow; it does not run that experiment.

## The observation contract

Start with an isolated account at zero points:

| Step | Action | Expected balance | What a mistaken implementation might do |
|---|---|---|---|
| 0 | Read initial account | 0 | Reuse polluted fixture state |
| 1 | Deliver A | 10 | Ignore all submissions |
| 2 | Deliver A again | 10 | Add the reward twice |
| 3 | Restart runtime, retain durable storage, then read | 10 | Lose the successful reward |
| 4 | Deliver A after restart | 10 | Lose the replay identity and award again |
| 5 | Deliver B | 20 | Treat every later event as a duplicate |

**Read immediately after restart, before replaying A.** Combining restart and replay in a single final assertion can hide lost balance followed by a second award. The test driver must genuinely replace runtime state without replacing durable data; changing a local test variable proves something else.

## Step 1 — Reconnaissance has a finish line

Ask one investigator to identify the submission entry point, the observable balance, persistence, existing replay handling, and documented test commands. It should distinguish observed facts, code inspection, and assumptions.

Stop when it can explain how to exercise the six observations above. Do not request a new framework, database, queue, or orchestration platform before establishing a need. A missing test seam is a concrete finding; a vague claim that the architecture is “not agent-friendly” is not an actionable diagnosis.

Keep the baseline output and the exact starting revision. A pre-existing failing dependency check should not later be reported as a regression caused by the feature.

<a id="step-2-turn-ambiguity-into-a-durable-work-item"></a>

## Step 2 — Turn ambiguity into a durable work item

Create one authoritative task record containing:

- The agreed contract and table of expected balances.
- The real system boundary and fixture reset procedure.
- Known failures and relevant existing checks.
- The owner, dependencies, and scope exclusions.
- Completion evidence and a stop condition.

The record can live in the team's existing tracker. Using a dependency graph is an option; installing Beads is not a prerequisite for understanding the method. If using a graph, separate an investigative finding from the implementation change it motivates. “Replay check passes in memory” and “persist replay identity” should not become competing versions of the requirement.

<a id="step-3-parallelism-must-have-a-useful-boundary"></a>

## Step 3 — Parallelism must have a useful boundary

For this small task, start with one implementer and one review responsibility. An independent read-only investigator may help if persistence behaviour is unclear. Several workers editing the same reward path can add coordination work without adding useful independence.

If parallel work is justified, assign disjoint responsibilities. For example, one worker traces existing behaviour while another drafts externally observable acceptance cases. Both work from the same contract, and neither changes it unilaterally. Agree which outputs must wait on earlier findings rather than treating every item as immediately executable.

This is our conservative application choice. It is not a claim that Yegge's fleet size, private roles, or model choices are required for a tiny feature.

## Step 4 — Implement the missing behaviour

The implementer should follow the current architecture where it can satisfy the rule. It may improve a seam when that makes the behaviour observable, but it should explain why the seam is needed.

Require evidence for each missing behaviour. An implementation can pass an in-memory replay check while failing restart persistence. It can retain the balance but forget the processed ID. It can remember the ID but accidentally block a new ID. The observation table distinguishes those mistakes.

If the existing implementation already satisfies the contract, report that and strengthen relevant evidence rather than inventing product changes to appear productive.

<a id="step-5-review-the-contract-and-the-candidate-separately"></a>

## Step 5 — Review the contract and the candidate separately

Give the reviewer the agreed expected outcomes, the starting observations, and the actual diff. Ask it to look for a plausible incorrect implementation that would still pass the proposed tests.

Review changes to fixtures, expected values, skipped checks, and test configuration alongside production code. Regenerating an internal test suite may be legitimate after an intentional redesign; it cannot by itself show that the old acceptance intent survived.

A useful review result identifies a concrete gap and the observation that would expose it. A broad “looks good” from another agent is not an independent proof. Human review of the rule remains separate from model review of the patch.

## Step 6 — Integrate at the rate you can verify

Run focused tests and relevant regressions, then exercise the real application boundary. Resolve integration conflicts with the behaviour in view. A merge queue is a mechanism for combining changes; it is not permission to equate merged with useful.

For this exercise, do not add production deployment permissions. Record a reviewed, integrated candidate through the existing process. A real release decision also needs the product's normal operational checks, which this hypothetical task does not specify.

Keep queue wait, rework, reviewer effort, and actual verification time. These show whether coordination improved delivery or simply moved work to another part of the process.

## Step 7 — Close only with evidence and residual uncertainty

Close the task with the observed balances, commands, revision, inspected diff, and limits. A useful handoff should let the next session tell what is established without rereading every conversation.

Record follow-up issues only when they represent a distinct unresolved concern. Do not reopen the whole feature for speculative improvements after the agreed contract is satisfied. Conversely, do not hide an unresolved persistence failure inside a “future cleanup” note while claiming completion.

## Reusable working prompts

These are **our prompts**, not published Yegge prompts.

### Inspect

```text
Inspect the existing reward path without changing it. Locate the real
submission boundary, stored balance, submission identity, and test commands.
Check the agreed observation table from baseline through restart and B.
Report observations, assumptions, pre-existing failures, and the smallest
missing behaviour. Stop when you can explain how to verify the contract.
```

### Implement

```text
Use the approved work item as the contract. Implement only the missing
reward behaviour. Keep the same outcomes: A gives 10; replay stays 10;
restart followed by a read stays 10; replay after restart stays 10;
B gives 20. Keep existing storage and test conventions where suitable.
Explain any proposed contract or architecture change before adopting it.
Report changed files, commands run, results, and remaining uncertainty.
```

### Challenge

```text
Review the diff against the original reward contract. Find one plausible
incorrect implementation that could pass these tests. Inspect fixtures,
expected values, disabled checks, and the actual restart boundary.
Separate a product-contract gap from an implementation defect. Do not
rewrite expected outcomes merely to get the candidate green.
```

### Decide whether another worker is useful

```text
Name the concrete uncertainty another worker would reduce. Identify its
inputs, independent output, writable boundary, dependencies, and stop
condition. If no independent responsibility exists, keep the task serial.
```

## First practical lab

Use one real existing implementation. Run the sequence above once with the normal workflow and once with a carefully scoped investigator/reviewer split, starting from comparable states. Keep the same contract, tools, and baseline; record differences rather than interpreting one result as a general productivity finding.

Keep a small evidence packet: starting revision, initial observations, task record, candidate diff, verification output, review findings, cost, coordination time, and final known limits. A successful learning outcome is explaining both what the task proves and why more workers did or did not help. No fixed duration, worker count, or improvement percentage is validated by this lab.
