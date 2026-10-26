---
title: Gojko Adžić — common reward workflow
parent: Gojko Adžić
nav_order: 2
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
---

# A common reward change

**Suggested adaptation.** This is an original worked application of the cached principles and public workflow design. It is not an Adžić demonstration, a private prompt, or a runnable implementation. Its purpose is to keep the task constant when comparing engineers.

[Detailed research](research.md) · [Claim evidence](index.md#comparison-evidence) · [Documented tooling](tools.md)

## The shared contract

A reward is worth **10 points once per submission ID**. A request may arrive repeatedly. A successful award survives a real runtime restart; replaying the same ID after restart must not grant another reward. A new submission ID is a separate event. Begin by establishing the existing behaviour.

Starting language, storage, runner and architecture are unknown. There is no added requirement for a UI, network service, distributed concurrency or a particular database. Those can be important in a real system, but introducing them for only one profile would change the comparison.

Use one isolated account and an initially zero balance:

| Step | Operation | Required balance | Distinct error exposed |
|---|---|---|---|
| Baseline | Read a fresh account | 0 | A contaminated fixture |
| First delivery | Submit A | 10 | All requests ignored or wrong reward |
| Replay | Submit A again | 10 | Duplicate delivery earns twice |
| Restart and read | Restart the runtime, retain durable data, read before replay | 10 | A successful reward disappears |
| Replay after restart | Submit A again | 10 | Submission identity was only transient |
| New event | Submit B | 20 | Dedupe incorrectly ignores distinct events |

The immediate post-restart read is essential: a system could lose its state, then re-award A and reach 10 again. Combining restart and replay into a single final assertion could conceal that defect. Inspect both observations separately.

## Phase 1 — Understand the current path

Find the real entry point, the place balance is read, how identities are represented and how state survives process replacement. Run the existing checks. Record which table rows already work, which fail, and which cannot yet be observed through the current harness.

Do not let the agent silently assume an in-memory implementation, a UUID format, or a web API. If identities are scoped by account, write that down as an explicit product decision for the target project; the generic exercise leaves architecture unspecified. A reviewable list of assumptions is more useful than a large generated plan whose hidden defaults decide the requirement.

**Output:** a short path map, observed baseline, and unresolved questions. A missing dependency is an environment finding, not a failure of the reward rule.

## Phase 2 — Clarify intent and anti-goals

Use the six rows as the concrete acceptance agreement. Check that “same submission” and “new submission” mean the same thing to the product owner and implementer. Keep balances and identity rules inspectable independently from proposed code.

A reasonable anti-goal list for this exercise excludes unrelated reward tuning, retry discounts, account management, visual redesign and storage migration unless the existing path makes a narrowly defined change necessary. The person owning intent decides scope. The agent can explain a dependency or ambiguity; it should not expand the economy because that makes its plan easier.

**Output:** reviewed examples and a bounded objective. These precise constraints are our adaptation of the intent/scoping emphasis, not a claim that Adžić uses this exact table.

## Phase 3 — Plan a coherent increment

Choose the next missing behaviour from the baseline. State the files likely to change, why each matters and which observation will establish success. The public factory can represent larger plans with dependencies and green groups, but this task may need only a straightforward sequence.

If several agents are considered, inspect actual write conflicts first. Verification of a merged result must remain someone’s responsibility. Splitting a coupled balance-and-identity change across simultaneous writers might increase risk without creating useful independence. A separate documentation review can be independent while core code changes stay coherent.

**Output:** the smallest useful plan, the shared contract, and an explicit checkpoint for integrated behaviour. Do not compare this task's full plan with another profile's individual test step as though they were the same level of work.

## Phase 4 — Implement against observable behaviour

Ask the agent to implement only the missing approved slice. Preserve expected values. Use an existing supported application boundary when it exposes the real behaviour. Test setup may isolate an account, but it must not compute the reward or duplicate policy inside a test double and then assert against that double.

For a restart observation, replace the runtime or use an equivalent application-supported lifecycle that genuinely discards volatile state while retaining durable data. Reconstructing the same mock object is not the same experiment. Document what restart means in this project and what the check cannot prove.

Record commands and results rather than accepting a completion narrative. Check that the agent did not skip a test, weaken an assertion or make the storage observation transient merely to get green output.

## Phase 5 — Verify the integrated result

Run the relevant local checks, then the agreed checks against the combined result. For this small exercise, these may be the same ordinary test runner invoked from a clean state. A complex orchestration system is optional; the responsibility for integrated verification is not.

Inspect the balance immediately after restart, before submitting A again. Inspect A replay and B separately. Explain the observed boundary and any remaining untested conditions. Crash consistency, simultaneous requests and remote delivery are not silently included by a successful sequential restart test; adding those would be a separate scope decision.

**Output:** evidence for all six observations and a description of the actual environment. This lets another engineer reproduce the claim instead of merely inheriting a status flag.

## Phase 6 — Challenge and improve the feedback

Choose one plausible defect, such as forgetting durable submission identities while retaining the balance. Temporarily introduce it in an isolated working state and observe whether the replay-after-restart check detects an extra award. Restore the intended code, rerun checks and inspect the diff. A different deliberate defect can challenge the persistence assertion itself.

This is our exercise, not a sourced claim that Adžić uses a particular mutation framework. The point is to test the evidence behind completion, not to manufacture an impressive metric.

If review revealed a recurring, mechanically detectable mistake, consider a small project-specific check with a clear correction message. Do not write a lint rule for a semantic property it cannot reliably observe. A static check may recognise an unsafe call pattern; the runtime reward contract still needs behavioural evidence.

## Phase 7 — Review and hand off

Keep the approved rule, starting baseline, changed files, actual results and limitations with the task. Explain any deviation between plan and implementation. Use the existing integration and release process; the public source does not establish a universal production rollout or rollback sequence to copy.

The meaningful success criterion is an understandable, verified change. Comparing workflows later requires equivalent starting states, checks and review responsibilities, including failed runs and rework. This written example alone establishes no speed or cost advantage.

## Reusable working prompts

These are original suggested prompts, not published Adžić prompts.

### Intent review

```text
Inspect the existing reward path and report observed behaviour.
Our common contract is 10 points once per submission ID, persistence
across real runtime restart, no extra award for replay after restart,
and a separate award for a new ID. Identify ambiguities and hidden
assumptions. Propose the smallest missing slice and explicit anti-goals.
Do not implement yet.
```

### Bounded implementation

```text
Implement the reviewed missing slice using the project's real boundary
and existing checks. Preserve the approved expected balances. Explain
any necessary scope change before incorporating it. Return the changed
files, commands run, actual results and deviations. Do not treat a
worker's local green result as evidence for untested integrated work.
```

### Independent evidence check

```text
Try to refute the completion claim without changing the product rules.
Check baseline0, A10, replayA10, restart/read10 BEFORE replay,
replayA10, and B20. Inspect whether the driver observes the real system,
whether restart replaces volatile state, and whether assertions or
configuration were weakened. State remaining gaps explicitly.
```

## First lab

Carry out one complete increment from a reproducible starting state. Save the example table, baseline, reviewed plan, evidence and limits. Explain one defect the checks detect and one condition they do not cover. Stop when the scoped behaviour is understood and verified; neither an arbitrary time budget nor a target number of agents is part of success.
