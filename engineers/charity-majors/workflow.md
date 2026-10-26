---
title: Charity Majors — common reward workflow
parent: Charity Majors
nav_order: 2
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
derived_from: engineers/charity-majors/research.md
---

# A reward feature through an operational lens

**Suggested adaptation.** This whole exercise is original proposed guidance informed by the [cached research](research.md). Majors did not demonstrate this feature or publish these prompts. The aim is to keep the task comparable while examining what an operational perspective adds.

## Fixed task and starting assumptions

Award **10 points once per submission ID**. A successful award survives runtime restart. Replaying an accepted ID adds nothing, including after restart. A distinct ID is a separate event.

The initial code, language, storage, runner, and supported application interface are unknown. Start by inspecting them. No UI, network, concurrent delivery, deployment, migration, or performance requirement is added. A real project may require those concerns, but they are separate extensions and must not be imposed on only one compared workflow.

| Step | Action | Expected balance | Separate observation |
|---|---|---|---|
| 0 | Read an isolated empty account | 0 | A known starting state |
| 1 | Deliver submission A | 10 | First delivery creates the reward |
| 2 | Deliver A again | 10 | Immediate replay is suppressed |
| 3 | Restart runtime, preserving durable data; read before any replay | 10 | Successful reward persists |
| 4 | Deliver A again after restart | 10 | Accepted identity also persists |
| 5 | Deliver distinct submission B | 20 | A new event still works |

Do not combine steps 3 and 4. A system that loses all state could reward A again and appear to pass an assertion made only after replay. Reading the retained balance first exposes that loss. A restart means replacing transient runtime state while retaining the real durable data, not recreating an in-memory fixture with the expected values.

## Step 1 — Discover the actual state transition

Inspect where a submission enters, how its identity is represented, where points are changed, and when the caller is told that the award succeeded. Find the persistence boundary and relevant existing checks.

Record observations separately from assumptions. “The IDs are stored durably” needs an inspected write path or configuration, not a plausible model of how a rewards application usually works. “The command passed” needs a completed command and the relevant output.

A useful state map contains four locations: input identity, prior-acceptance check, balance update, and successful completion. It also records any gap in understanding. Do not design a new database or queue before deciding whether the existing mechanism already supports the task.

## Step 2 — Give intent an inspectable artifact

Use the six-row table as the exercise's agreed contract. Name the code revision, environment, and isolated account used for the observations. Preserve a short explanation of why A and B are different events.

If the existing behaviour differs, write down both the observed and intended result. For example, an in-memory ID set might suppress A until restart. That observation explains a likely failure mode; it does not make “once per runtime” an acceptable interpretation of the requirement.

Keep the task note concise enough for the reviewer to inspect. Link to the code and checks rather than copying the whole repository into the agent's prompt. The task note helps shared understanding but does not itself prove the implementation.

## Step 3 — Pick a bounded next change

Run the baseline and determine which observations already hold. If all outcomes already work, focus on confirming the observation path and the adequacy of existing checks rather than manufacturing a defect.

Choose one missing outcome or one weak observation to improve. A first increment might establish immediate replay protection; a later increment might address persistence. That order is our teaching choice, not Majors's prescribed micro-cadence.

Use the existing supported boundary and project conventions where they fit. A new orchestration framework, database, or deployment system is not justified by the simplicity of a prompt. Ask for the smallest coherent change that a maintainer can explain.

## Step 4 — Make feedback useful without confusing its roles

The acceptance check should submit real IDs and read actual application state. If a driver computes the reward independently, it may validate itself rather than the product.

A diagnostic event can help explain a failure. For example, record the operation's outcome, whether the identity was previously accepted, and a suitable correlation identifier. Keep sensitive data out of diagnostics and use the target's existing telemetry convention. These fields are our proposal, not Majors's published instrumentation schema.

Telemetry is explanatory evidence. The balance and retained acceptance state remain the observations the contract requires. A log saying “duplicate rejected” is not enough if the balance still increased.

## Step 5 — Check persistence independently

Run the restart observation before replaying A. Ensure the restart replaces runtime state while retaining durable data. If the test harness cannot do that, state the limitation rather than claiming persistence was proven.

Then replay A and read the balance again. Finally deliver B and confirm 20. Those steps distinguish a durable correct rule from accidental suppression of every later request or repeated reconstruction of an expected balance.

Inspect success timing too. If the application tells the caller an award succeeded before the required state is preserved, the contract may fail after restart. The mechanism for fixing that depends on the actual application; do not infer a transaction design without evidence.

## Step 6 — Review the artifact and its cost

Inspect production changes, assertions, fixtures, configuration, and dependencies. Ask the implementer to explain how A's identity and the balance survive restart. An attractive generated narrative does not replace that explanation or actual check output.

Record review and rework effort along with implementation effort. Did the patch make the next person's job easier? Did a new helper need more maintenance than it saved? Was the requirement clarified, or merely buried in a different file? These are learning questions, not an invented numerical score for an engineer.

A second agent can help look for a plausible defect, but its agreement is not independent proof that the rule is correct. Retain human ownership of intent and acceptance.

## Step 7 — Integrate through the existing process

Run the agreed sequence and relevant regression checks. Keep a coherent diff and follow the target project's normal integration process. A successful local exercise does not imply production release approval.

If the product later deploys, an operational extension can ask whether real usage matches intent and whether the change caused unexpected effects. Scope that extension explicitly, with the same requirements for every workflow being compared. It is not part of the common six-observation lab.

## Reusable prompts

These are original adaptations, not Majors's personal prompts.

### Inspect

```text
Inspect the reward entry point, submission identity handling, balance
update, success response and persistence. Run the existing focused
baseline. Report code paths, commands, observed results and assumptions.
Do not choose a new architecture yet.
```

### Implement the next bounded outcome

```text
Our fixed observations are: initial0; A10; replayA10; runtime restart
retaining durable data then read10 BEFORE replay; replayA10; newB20.
Implement only the next missing agreed outcome with the existing runner
and supported application boundary. Preserve expected results.
Report any test, fixture, configuration or data-format changes.
```

### Review the evidence

```text
Review the diff against the fixed observations. Trace incoming identity
to retained acceptance state and balance. Show actual checks and output.
Do not substitute telemetry or a test-owned reward model for application
state. Explain remaining gaps and the work a maintainer must still do.
Do not infer deployment approval from a local success.
```

## First practical lab

Keep the starting revision, a state map, the six outcomes, a reviewed change, command results, and an explanation of remaining uncertainty. Add a short retrospective that includes reviewer and maintainer costs.

For a later runnable comparison, hold the initial code, environment, model/harness, task, and acceptance protocol constant. These written guides do not establish relative speed, safety, or productivity.
