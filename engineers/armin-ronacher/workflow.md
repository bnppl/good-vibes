---
title: Armin Ronacher — common reward workflow
parent: Armin Ronacher
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
nav_order: 2
---

> **Scope update — 26 October 2026:** Start with [recent AI evidence](recent-ai.md). The material below retains earlier principles, dated reports and our optional adaptations. It must not be read as a complete current personal AI workflow.

# A reward feature through a practical feedback loop

**Suggested adaptation.** This is an original implementation exercise informed by the [cached research](research.md). Ronacher did not demonstrate this feature. The sequence and prompts below are our proposal. Their purpose is to make the different profiles comparable without claiming to emulate a private development session.

## Fixed task and starting assumptions

A request can arrive more than once. Each submission ID earns **10 points once**. A successful award survives a runtime restart. Replaying an already accepted ID after restart adds nothing. A new submission ID represents another event.

The current language, storage, test runner and application boundary are unknown. Begin by establishing what exists. No network, UI, distributed concurrency, authentication design or database migration is added to this exercise. If a real target requires those concerns, define them separately and apply the same scope to every compared workflow.

## Observable outcome table

Use an isolated account whose balance starts at zero. The test driver submits IDs and reads the actual application balance. A restart replaces the runtime but keeps the real durable data.

| Step | Action | Expected balance | Mistake this can expose |
|---|---|---|---|
| 0 | Read the initial balance | 0 | Fixture contamination |
| 1 | Deliver submission A | 10 | A handler that does nothing |
| 2 | Deliver A again | 10 | No duplicate protection |
| 3 | Restart and read, before sending any request | 10 | Balance stored only in memory |
| 4 | Deliver A after the restart | 10 | Duplicate identity forgotten on restart |
| 5 | Deliver new submission B | 20 | Accidentally suppressing all later rewards |

Step 3 must observe the retained balance **before** step 4. If the runtime loses everything, replaying A could award another 10 and disguise the lost state. A combined “restart, replay, assert 10” check alone is insufficient.

## Proposed sequence

### 1. Make the existing path inspectable

Find the entry point, submission identity handling, state update and persistence. Run the existing relevant checks and record their exact commands. Locate where diagnostic output is available.

Write a short state map: where does A enter, where is its identity compared, where do points change, and when is success reported? A plausible answer from the agent is not the observation itself. Inspect the code and command result.

If the runner cannot start, solve that environmental problem separately. Do not count a module import error as evidence that duplicate protection is absent. If an existing test already covers the behaviour, assess that test rather than manufacturing a new red state.

### 2. Create a visible handoff

Keep one small file containing the agreed table, relevant code paths, the next change, current evidence and questions. It should be editable by a person who understands the rule. Do not let the note silently become a second source of product truth.

This applies the [planning preference](research.md#requirements-and-planning); it does not require a particular planning UI or prohibit tests as specifications.

### 3. Change one coherent part

A possible first increment handles first delivery and repeat delivery within a running instance. A second makes the successful outcome and identity survive restart. This division is our pedagogical choice, not a claim about Ronacher's mandatory cadence.

Prefer existing transaction and persistence mechanisms when suitable. A set in memory is a useful suspect to investigate, but not a durable solution. Conversely, introducing a distributed workflow engine solely to store a few IDs would require justification beyond this task.

Review the state transition and success boundary: if the system reports success before the required state is durable, the exercise can still fail even when the happy path appears correct. The exact fix depends on the real target; do not decide its architecture in advance.

### 4. Consume real feedback

Run the relevant commands and inspect the output. When the agent says that tests passed, verify that the command actually completed and that its assertions observe application state.

For diagnostic runs, prefer concise messages identifying the submission, whether it was previously accepted, and the observed balance. Avoid logging unrelated data or credentials. These are proposed diagnostics for the exercise, not copied commands from a historical environment.

### 5. Review with a separate question

Ask the agent to inspect the diff for missing persistence, altered expectations, unnecessary dependencies and duplicated state rules. The human then reviews the findings and the code. A second model output is useful input, not independent proof that both outputs are correct.

Try a deliberate plausible defect in a disposable working state, such as forgetting accepted IDs across restart, and check whether step 4 detects it. Restore the implementation afterwards. This is our suggested sensitivity check, not evidence that Ronacher mandates mutation testing.

### 6. Stop with a maintainable result

Run the outcome sequence and relevant regression checks. Explain the chosen persistence boundary, failure assumptions, and remaining untested conditions. Keep one coherent diff and follow the repository's normal integration process.

Do not infer production release approval from this exercise. The [cache does not establish his universal release gate](research.md#integration-and-release).

## Reusable prompts

These are original adaptations, not published Ronacher prompts.

### Inspection

```text
Inspect how this project receives a reward submission, identifies a
previously accepted ID, updates points, and stores successful outcomes.
Run the existing focused baseline. Give me the relevant code paths,
commands, observed results, and uncertainties. Do not redesign it yet.
```

### Clarification and handoff

```text
Draft a short editable task note. The agreed observations are:
initial 0; A gives 10; replay A stays 10; restart then read gives 10;
replay A after restart stays 10; new B gives 20.
Separate requirements from proposed implementation. Ask only questions
that materially block the next coherent change. Keep the existing stack.
```

### Bounded implementation

```text
Implement the next agreed missing behaviour using the existing boundary
and runner. Keep the state rule clear enough that I can explain it.
Do not change expected balances to fit your implementation or introduce
new network, UI or concurrency requirements. Report real command results.
If a tool invocation fails, distinguish it from a product-logic failure.
```

### Review

```text
Review this diff against the agreed outcome sequence. Look for a balance
or processed-ID set that exists only in memory, success reported too
early, assertions that read test-owned substitutes, and unrelated new
machinery. Report concrete findings and limits. Do not silently rewrite
requirements or declare a release approved.
```

## First practical lab

1. Save the starting revision and run the relevant baseline.
2. Agree the six-row observation table and record unknown runtime assumptions.
3. Produce the state map and a short handoff.
4. Complete one reviewed increment, then the rest of the agreed outcomes.
5. Inspect a plausible broken version and confirm the relevant check notices.
6. Restore the correct code, rerun checks, and explain what is still unknown.

Keep the reviewed diff, checks, output and an explanation of the state transition. If comparing approaches later, reuse the same starting revision, requirements and environment. Record review/rework effort as well as generation time. This exercise itself supplies no measured ranking of engineers or tools.
