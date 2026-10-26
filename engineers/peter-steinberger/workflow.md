---
title: Peter Steinberger — common reward workflow
parent: Peter Steinberger
nav_order: 2
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
---

> **Scope update — 26 October 2026:** Start with [recent AI evidence](recent-ai.md). The material below retains earlier principles, dated reports and our optional adaptations. It must not be read as a complete current personal AI workflow.

# A reward feature through an iterative feedback loop

[Profile](index.md) · [Research](research.md) · [Tools](tools.md) · [Sources](sources.md)

**Suggested adaptation.** This is our original exercise, informed by the cached public material. Steinberger did not demonstrate this task. Its exact sequence, prompts and checks are not a recovered personal workflow. In particular, agreeing the outcomes does not mean that he advocates a test-first coding cadence.

## Fixed task and observations

A submission ID earns **10 points once**. A successful award survives runtime restart. A distinct ID is a separate event. First discover the existing system; its language, storage engine, runner and interfaces are unknown.

No network, UI, distributed concurrency, migration, or performance requirement is added. Such concerns may matter in a real application, but must not be silently assigned to only one workflow in a comparison.

| Step | Action | Expected balance | Independent observation |
|---|---|---|---|
| 0 | Read an isolated empty account | 0 | Clean baseline |
| 1 | Deliver A | 10 | Valid event is awarded |
| 2 | Deliver A again | 10 | Immediate replay does not repeat the reward |
| 3 | Restart runtime, retaining durable data, then read before replay | 10 | Successful balance persisted |
| 4 | Deliver A after restart | 10 | Accepted identity persisted too |
| 5 | Deliver distinct B | 20 | New events are not all suppressed |

Step 3 must precede replay. Otherwise a system that loses all state could reward A again and accidentally end at 10. The last row also rejects a degenerate handler that accepts A and then ignores all later events.

## 1. Establish a useful feedback surface

Locate the real reward entry point, accepted-ID representation, balance mutation and success response. Run existing relevant checks and record the actual result. Identify how to read application state without duplicating its algorithm in the driver.

The first output should be a compact map: inspected location, observed responsibility, and uncertainty. If storage is already durable but duplicate history is only in memory, that is a concrete finding. If the agent merely suspects that arrangement, record the suspicion separately.

If the runner cannot start, investigate that environment problem before discussing product correctness. A missing dependency is not evidence that replay protection is broken. Likewise, an already-passing scenario is a reason to inspect the check and existing implementation, not permission to manufacture a red state for appearances.

## 2. Explore choices without moving the finish line

Use conversation to clarify the implementation boundary. The six required balances are already fixed; do not reopen them as optional product choices. A useful question is where a successful response is produced and which state the restart harness retains. Adding a leaderboard or a notification is unrelated work.

For a consequential design uncertainty, ask for a few options with evidence from the current code. For example, if an existing journal records accepted submissions, determine whether it is suitable before adding a second store. That is a conditional possibility, not a statement about a repository we have not inspected.

Write a short task note only when it helps preserve decisions or coordinate work. Avoid making a document whose only purpose is to repeat the agent's own speculative plan. The authoritative requirements must remain distinguishable from a proposed implementation.

## 3. Choose a coherent change and write ownership

Keep one writer responsible for the state transition. A separate read-only investigation can inspect existing test conventions or persistence if it can proceed independently. Parallel execution should remove waiting, not create two implementations of the same rule.

A proposed first increment could establish first delivery and immediate replay. A later increment can address runtime restart. This is our decomposition; another may fit the actual code better. Every completed step should leave a comprehensible diff and an observable result.

Use existing project mechanisms when they satisfy the contract. An in-memory set may help explain the current bug, but cannot by itself satisfy restart persistence. Introducing an entire orchestration service to store a few identities also needs justification. The right design follows from the inspected application, not from imitating someone else's tool list.

## 4. Implement, then examine focused tests

To preserve the relevant difference between profiles, this proposed application permits implementation before the agent writes the focused tests. It does not describe this as TDD. The independent outcome table already supplies an external statement of intent.

After the change, request tests in the implementation context, then review what they assert. Ask whether they observe actual application state, deliver A twice, perform a real runtime replacement, read before replay, and deliver B. A test that calls the implementation and asserts only that it returned something is weak evidence.

The same context can preserve useful design information, but also a shared misunderstanding. Compare the tests with the independently agreed table rather than accepting them because their author understands its own patch. Inspect any changes to expected values, test helpers, configuration or fixtures.

## 5. Inspect the state transition and improve structure deliberately

Ask a person to explain why A cannot be awarded twice and when success becomes durable. Follow the path through the actual code. A good explanation should identify where identity and points remain consistent, without requiring an invented storage technology.

If the path is difficult to understand, identify one structural change with a concrete benefit. It might clarify a transaction boundary, consolidate duplicate policy logic, or separate diagnostic formatting from the state update. Keep the structural change distinguishable from new behaviour and rerun the relevant checks.

Do not optimize for fewer questions or shorter model runtime alone. A fast patch that requires repeated repairs may be a worse result than a slower, clearer increment. Conversely, extra orchestration that merely increases review burden is not automatically more disciplined.

## 6. Challenge one plausible wrong result

In a disposable working state, consider a defect that preserves the balance but forgets processed IDs after restart. The post-restart replay should expose the extra reward. Another defect loses the balance, which the immediate post-restart read should detect before replay has any chance to hide it.

Restore the correct implementation and rerun the full fixed sequence. This sensitivity exercise is our suggestion; it is not evidence that Steinberger mandates mutation testing. It demonstrates a limited property of these assertions, not completeness of every requirement.

## 7. Integrate according to the actual project's authority

Inspect the whole diff and relevant regression results. Record compatibility implications if the implementation changed persisted state. Use the repository's established integration process rather than importing a historical main-branch convention by imitation.

The deliverable is a reviewed coherent increment, the six observations, relevant checks, and an explanation of remaining uncertainty. It is not a production release unless that separate action is authorized and its checks are met. A source article saying a person moves quickly does not settle another project's risk policy.

## Reusable prompts

These are original adaptations, not quotations of Steinberger's prompts.

### Inspect the current system

```text
Find the reward entry point, accepted-submission representation,
balance update and persistence boundary. Run the existing relevant
baseline checks. Report observed behaviour, exact commands and gaps.
Do not assume a new database, transport or UI.
```

### Implement a bounded change

```text
Our fixed observations are: initial0; A10; replayA10; restart then read10
before replay; replayA10; newB20. Keep these requirements unchanged.
Implement the next coherent missing behaviour using existing project
conventions. Give one writer ownership of the state transition.
Ask for a consequential unresolved choice rather than silently choosing
an unrelated architecture. Report the resulting diff and real feedback.
```

### Write and review focused checks

```text
Now write focused checks for the implemented feature in this context.
Verify real application state against the independent outcome table.
Show that runtime restart retains durable data and that balance is read
before replay. Explain any edited expectations, helpers or fixtures.
A green run is evidence for covered observations, not every requirement.
```

### Close the loop

```text
Explain how success and submission identity survive runtime restart.
Inspect the entire diff and relevant regression checks. Propose one
worthwhile structural improvement only if it addresses actual friction.
State remaining gaps and stop at the project's existing integration
boundary; do not infer publication approval from a successful commit.
```

## First practical lab

Keep the starting revision, environment, baseline output, ownership map, reviewed diff, six balance observations and one sensitivity check. Explain the chosen persistence mechanism without relying on the agent's completion summary.

If later comparing implementations, hold the revision, task, environment, model/harness settings and acceptance checks constant. Include review, rework, integration and tool cost in the record. This written exercise establishes no comparative performance result.
