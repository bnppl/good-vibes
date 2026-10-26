---
title: Gene Kim — common reward workflow
parent: Gene Kim
nav_order: 2
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
derived_from: engineers/gene-kim/research.md
---

> **Scope update — 26 October 2026:** Start with [recent AI evidence](recent-ai.md). The material below retains earlier principles, dated reports and our optional adaptations. It must not be read as a complete current personal AI workflow.

# Common reward workflow

**Suggested adaptation.** This is an original application of the cached principles, not a demonstration by Gene Kim or a claim about his private process. It holds the same problem constant across all engineer profiles. [Research context](research.md) · [Comparison claims](index.md#comparison-evidence).

## Fixed task and unknowns

A request may arrive more than once. Award **10 points once per submission ID**. A successful award must survive a real runtime restart. A new submission ID is a separate event. Begin by establishing existing behaviour.

The starting code, language, storage, runner, and application boundary are unknown. Do not add a UI, HTTP service, distributed system, simultaneous delivery, or a specific database merely to make the example look realistic. Those additions change the comparison. Record them as follow-up questions if the real product needs them.

The scenario assumes an isolated account with zero starting points and a restart that retains its durable data:

| Observation | Action | Expected balance |
|---|---|---|
| Baseline | Read isolated account | 0 |
| First success | Deliver A | 10 |
| Replay | Deliver A again | 10 |
| Persistence | Restart runtime, then read without submitting anything | 10 |
| Replay after restart | Deliver A again | 10 |
| New event | Deliver B | 20 |

The independent read immediately after restart matters. If a test restarts and then delivers A before reading, an implementation could lose all state and award A afresh, still producing 10. That weak check would miss both a lost balance and lost duplicate history.

No concurrency guarantee is being smuggled into this task. Whether the actual product can receive simultaneous deliveries needs an explicit requirement and a separately agreed check.

## 1. Inspect the actual development system

Ask the assistant to locate the current entry point, identity handling, reward logic, durable state, and tests. Run the normal relevant checks before editing. Keep pre-existing failures distinct from failures caused by the proposed change.

Create a small task record with:

- Agreed balance observations and the chosen system boundary.
- The actual commands needed to start, inspect, stop, and restart that boundary.
- Whether runtime restart genuinely creates fresh process/application state.
- Which data remains and how the test isolates that data from other runs.
- Baseline results and any unresolved question.

This is not a demand for a new planning framework. A short existing issue or Markdown file can suffice. The record's purpose is to make the next decision inspectable.

## 2. Calibrate the first delegation

Use pairing while the entry point or persistence semantics remain unclear. An agent can inspect code and propose options, but uncertainty should appear in its answer rather than be silently converted into a design decision.

Delegate a bounded implementation only after intent and the next check are sufficiently clear. The important contract is not “do whatever is needed to make it work”; it names the next behaviour, current constraints, checks, and conditions requiring a report back.

For example, preserving an existing durable transaction boundary may be a constraint. Replacing the storage engine is not automatically authorised by a duplicate-reward bug. Conversely, a change that cannot satisfy the agreed restart contract inside the current design should be explained rather than hidden behind a passing in-memory test.

## 3. Establish an interpretable feedback path

Prefer the target repository's established test runner and normal application boundary. Do not copy the reward algorithm into a test double and then assert against that copy.

A useful test failure names an observation: after replay A, the balance is 20 instead of 10. A missing dependency is an environment failure. Both deserve attention, but only the first demonstrates the reward defect.

If the proposed scenario already passes, investigate whether the requirement is already met or the check is weak. Do not damage the product merely to manufacture a red state. A temporary deliberate defect may be used later to challenge assertion sensitivity, with the working code restored afterwards.

Keep the last command, its result, and the next action visible. Shortening setup or making errors accessible can improve the loop without changing what is being verified.

## 4. Implement one missing behaviour at a time

A sensible sequence is first success, replay, persistence, replay after restart, and separate event. This ordering is our proposal, not a prescribed Kim sequence. Existing coverage may make a different next slice more useful.

After each small change:

1. Run the focused check.
2. Inspect production and test changes together.
3. Run the relevant existing regression checks.
4. Verify that the expected balance did not move to accommodate the code.
5. Decide whether another increment or a design correction is needed.

An in-memory set can satisfy a replay test while failing after restart. Persisting balance without persisting the information needed to recognise A can also fail. The observations should reveal these mistakes without prescribing a specific table layout or library.

## 5. Improve structure only where feedback demands it

If important behaviour is tangled with unrelated side effects, propose a small separation that makes it independently understandable. Preserve the actual persistence check; extracting a pure reward function does not demonstrate durable behaviour by itself.

Compare design options by their effect on this feature's clarity, testability, and maintenance. There is no need to build three whole implementations to honour the idea of optionality. An inspected sketch or tiny spike may answer the question more cheaply.

Where alternatives are explored, keep them in isolated working states. Name the selection criterion before inspecting the outputs. Discarded experiments must not leave partial migrations or incompatible state in the accepted version.

## 6. Coordinate parallel work deliberately

The reference task does not require multiple agents. If parallelism is used as an experiment, a safe initial split is research of the current path versus independent review of the proposed checks. One owner should implement the shared reward/persistence change.

Before parallel edits, specify writable files, interfaces, shared assumptions, and who will integrate results. An agent reporting a changed contract must be reconciled before another implementer continues. Counting concurrent agents is not a success metric if a human spends the saving resolving conflicts.

## 7. Challenge and accept the result

Inspect each of the six table observations against the real chosen boundary. Check that restart preserves data but replaces transient runtime state. Confirm that B is a new event rather than another delivery of A.

A deliberately removed duplicate check should cause a relevant failure. A temporarily disabled durable write should cause the immediate post-restart read to fail. These are proposed targeted checks, not a demand for a full mutation-testing platform.

Restore working code, rerun normal checks, and review the final diff. Name any excluded concern, such as concurrent delivery or production migration, rather than implying it has been verified. Integrate using the repository's existing process. This adaptation does not infer Kim's private deployment rules.

## Original working prompts

These prompts are written for this guide. They are not copied Kim prompts.

### Inspect and expose uncertainty

```text
Inspect the reward path, submission identity handling, durable data,
and existing checks. Run the relevant baseline command. Distinguish
observed behaviour from assumptions. Do not modify files yet.
Show how to restart the actual runtime without replacing durable data.
```

### Propose a bounded next step

```text
Our agreed observations are baseline0, A10, replayA10,
restart-and-read10, replayA10, then B20. Identify the next missing
behaviour. Propose the smallest coherent change and a check that
would detect its absence. State what remains uncertain and what
would require a product or architecture decision.
```

### Implement without moving the contract

```text
Implement the approved next behaviour using existing conventions.
Keep expected balances unchanged. Do not add transport, UI, a new
storage product, or unrequested concurrency guarantees. If the design
cannot meet the restart contract, explain the conflict. Report the
actual commands and observed outcomes, including failures.
```

### Review before acceptance

```text
Review the final code, tests, fixtures and configuration against the
six agreed observations. Read the balance immediately after restart
before sending A again. Look for checks that observe a fake rather
than the real state, disabled assertions, and changes outside scope.
Separate demonstrated results from unverified concerns.
```

## First practical lab

Keep one task record and one coherent reviewed change. Success means the six observations are reproduced, the runtime restart is meaningful, the relevant checks catch a plausible defect, and a person can explain what the result leaves out.

For a local comparison, fix the starting revision, environment, contract, and checks before running another workflow. Measure review, rework, and integration as well as generation time. Treat this first exercise as learning evidence, not a universal productivity finding.
