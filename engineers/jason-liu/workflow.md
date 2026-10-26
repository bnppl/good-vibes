---
title: Jason Liu — common reward workflow
parent: Jason Liu
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
nav_order: 2
---

# A deterministic reward feature through a measurement-first lens

[Profile](index.md) · [Detailed research](research.md) · [Sources](sources.md)

**Suggested adaptation.** This entire exercise and its prompts are our proposal, informed by the cached research. Liu has not been observed implementing this feature. His AI-system evaluation advice does not establish a particular private coding-agent workflow.

## Shared task and assumptions

Award **10 points once per submission ID**. Replayed delivery must not repeat an award. A successful award survives runtime restart; a new ID is a separate event. First establish how the existing system behaves.

The language, storage engine, runner, runtime and application boundary are unknown. No UI, network, distributed-concurrency or performance requirement is added. An AI component is not required to implement this rule. If the real target contains a model elsewhere, keep that component's quality assessment separate.

| Step | Action | Expected balance | Independent observation |
|---|---|---|---|
| 0 | Read an isolated empty account | 0 | Baseline is known |
| 1 | Deliver A | 10 | First event is rewarded |
| 2 | Deliver A again | 10 | Immediate replay adds nothing |
| 3 | Restart runtime retaining durable data, then read before any replay | 10 | Reward balance is persistent |
| 4 | Deliver A again after restart | 10 | Accepted identity is persistent |
| 5 | Deliver new B | 20 | A separate event still works |

Step 3 must stand alone. If everything is lost at restart and A is then awarded again, a combined restart/replay assertion might still observe 10. It would miss the lost successful reward. Replacing an in-memory test object is not a demonstration that the application's real persistence boundary works.

## Step 1 — Establish the current system and observation path

Locate the submission entry point, identity representation, reward update and success signal. Find the durable store, if one exists, and how the normal runtime loads it. Run the existing relevant checks and save their commands and outputs.

Produce an evidence map rather than a speculative architecture. Each observation should name the inspected location and uncertainty. If a runner fails before the application starts, record that as an environment problem. If replay already works, investigate its coverage rather than implementing a duplicate mechanism.

A useful map might reveal that balance survives but accepted IDs do not. Another might show that both survive. The next step depends on what the actual code and checks establish. Do not assume the most convenient defect merely because the task is called replay protection.

## Step 2 — Agree a small evaluation ledger

Use the six fixed observations as the task contract. Keep the baseline revision, environment, expected balance, observed balance, check command and interpretation in one small record. The expected values come from the agreed task; they must not be regenerated from the implementation under test.

Separate a missing behaviour from a missing check. An existing correct implementation may need stronger observation. An apparently passing check may read test-owned state rather than the application. Both problems are visible only if the ledger records what was actually exercised.

This record is deterministic software evidence. It does not need a model judge to decide whether 10 equals 10. A natural-language explanation may help a reviewer understand the result, but it must not replace the authoritative assertion.

## Step 3 — Diagnose the narrow failure

Suppose A produces 20 on its second delivery. Trace where identity is compared, which record is authoritative and when success is acknowledged. Do not ask for a new database or orchestration framework before understanding those responsibilities.

Suppose immediate replay works but step 3 observes zero. That is a persistence failure even if a later A restores the displayed total to 10. Conversely, if step 3 stays at 10 and step 4 raises it to 20, balance persistence works but duplicate recognition does not survive restart.

These distinctions show why one “reward test passed” headline is weak. Preserve the row-level evidence and select the next coherent change based on the failure. No concurrency test or crash-point guarantee follows automatically from these six sequential observations.

## Step 4 — Implement one bounded correction

Give the implementer the agreed outcomes, observed failure and relevant code paths. Reuse existing boundaries and tooling where they can establish the behaviour. Require an explanation before changing expectations, fixtures or data representation.

A successful implementation must keep the rule coherent with the actual persistence mechanism. An in-memory set alone cannot fulfil the restart requirement. Two independently updated records may require careful coordination under the existing success semantics. The exact design is a decision to make after inspection, not a prescribed storage pattern in this guide.

Keep the change reviewable. A small adapter that exposes a real supported operation to the runner may be useful. A test driver that computes a duplicate reward result itself would be circular verification. The test's job is to observe the product, not build a second product in its fixture.

## Step 5 — Re-run the complete contract

Run all six observations after the correction, not only the previously failing one. New B rejects a fix that suppresses every later event. The initial A observation rejects a no-op handler. Step 3 and step 4 distinguish two different kinds of lost state.

Then run relevant existing regression checks. Inspect actual output and any skipped or disabled checks. Preserve failures rather than asking an assistant to summarise only a successful final attempt. A run that never reached the application cannot count as a behavioural pass.

A useful optional sensitivity check deliberately forgets accepted IDs across restart in a disposable working state. Step 4 should notice it. Restore the correct implementation before integration. This is our proposal, not an attributed Liu mutation-testing requirement.

## Step 6 — Review the outcome and its limits

A reviewer should explain how A becomes an accepted identity, when the reward becomes durable, and how the later process recognises it. Review the production diff, assertions, fixture changes and configuration together. An assistant's assurance is not an independent product decision.

Retain the target repository's existing integration and release process. The research cache does not provide Liu's complete private production gate. The lab does not authorise deployment, access expansion, notifications or changes to external systems.

Keep the current scope explicit: sequential deliveries, a successful award and runtime restart. If the real product needs concurrent requests, crash recovery mid-write, migrations or account isolation, establish those requirements separately and apply the same additions to every compared approach.

## Optional AI-system illustration

This is separate from the shared reward task. Imagine a support assistant that explains reward rules from a small document set. Its answer could be unsupported even when the reward implementation passes every deterministic check.

For that illustration, keep reviewed question/evidence/answer expectations. Observe whether the needed policy is present, retrieved and accurately used. A candidate metadata filter may improve one class of questions but harm another; inspect both and retain cost and latency evidence. Do not replace the six deterministic observations with an LLM score or use this optional scenario to claim a fair cross-profile benchmark.

## Reusable working prompts

These are original adaptations, not recovered Liu prompts.

### Inspection

```text
Inspect the existing reward entry point, identity handling, persistence,
and test observation path. Run the focused baseline. Report code paths,
commands, observed outcomes and unknowns; do not redesign the system yet.
```

### Implementation

```text
Our fixed sequence is baseline0; A10; replayA10; runtime restart retaining
durable data then read10 BEFORE any replay; replayA10; distinct B20.
Use the observed failure to choose one coherent correction. Keep expected
outcomes independent of the implementation. Explain any proposed test,
fixture, configuration or stored-data change. Do not add AI, UI, network
or concurrency requirements to this task.
```

### Review

```text
Trace each observed balance to real application state. Check that restart
replaces transient runtime state while retaining real durable data. Look
for test-owned duplicate logic and altered expectations. Run all six rows
and relevant regressions, show results and state what remains untested.
```

### Separate product-evaluation question

```text
For the optional policy-answering assistant only, separate missing source,
retrieval failure and unsupported answer. Keep reviewed examples, inspect
per-case disagreements, and compare one proposed change with the baseline.
Do not treat a valid output schema as evidence that the answer is correct.
```

## First practical lab

Keep a baseline record, the six-row ledger, one reviewed correction, executed checks and an explanation of persistence. If the existing system already meets the contract, improve its evidence rather than inventing a defect. Record time spent inspecting, reviewing and reworking as well as generating.

A later execution comparison must hold starting revision, environment, task and checks constant. This written adaptation demonstrates neither Liu's private coding practice nor a measured advantage over another engineer.
