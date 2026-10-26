---
title: Andrej Karpathy — common reward workflow
parent: Andrej Karpathy
nav_order: 2
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
---

# A reward feature with an inspectable objective

[Research](research.md) · [Profile](index.md) · [Source findings](sources.md)

**Suggested adaptation.** This is our original exercise informed by the cached material. Karpathy has not been observed implementing this feature or approving these prompts. It is a deterministic software task, not an ML training experiment. No neural model, GPU, new infrastructure, or indefinite agent loop is required.

## Shared task

A submission earns **10 points once per submission ID**. A successful award survives a real runtime restart; replaying the same ID still adds nothing afterward. Another ID is a separate event.

The starting language, architecture, data representation, runner, and storage mechanism are unknown. Inspect them before choosing a solution. No UI, networking, concurrency, crash-injection, or performance requirement is added to the common acceptance scope.

| Step | Action | Expected balance | Distinct question |
|---|---|---|---|
| 0 | Read an isolated empty account | 0 | Is the starting state known? |
| 1 | Deliver A | 10 | Does a valid first delivery earn the reward? |
| 2 | Deliver A again | 10 | Is immediate replay suppressed? |
| 3 | Restart runtime, retain durable data, then read before sending anything | 10 | Did the successful balance persist? |
| 4 | Deliver A after restart | 10 | Did duplicate identity persist too? |
| 5 | Deliver new B | 20 | Can a distinct event still earn a reward? |

Step 3 is not optional. A system that loses all state could re-award A during step 4 and show 10, masking the loss. Likewise, a handler that returns a constant 10 might satisfy several superficial checks but fail the empty-account or new-ID observation.

The table is an oracle for specified observations, not a proof of all possible histories. A real project may need more cases; add those transparently and keep them common across any later execution comparison.

## 1. Understand the state before optimising anything

Ask the agent to inspect the supported submission entry point and trace a successful award. Where is submission identity checked? Where does the balance change? What is durable, what is process-local, and when does the interface report success?

Keep a distinction between an observation and a plausible architectural guess. “The project uses a database” does not tell you whether the relevant ID record is committed before success is reported. “There is a restart helper” does not tell you whether it actually replaces runtime state.

Run the existing focused checks and record their commands and results. If the runner is unavailable, solve that setup problem separately. If replay already works, investigate existing coverage and the restart boundary instead of assuming the entire feature is missing.

**Checkpoint:** a small state map tied to inspected files and a reproducible baseline. It should identify the largest unresolved assumption without proposing a platform rewrite.

## 2. Make the objective hard to satisfy accidentally

Review each observation and name at least one incorrect implementation it rejects. For example, the new-ID row rejects a rule that disables all rewards after the first event. The post-restart read rejects a process-local balance disguised by reprocessing.

Check the test's observation path. A fake that reproduces the intended arithmetic may agree with the assertion while the real application is broken. If a driver submits through one boundary and reads directly from a test-owned object, explain why that object represents authoritative state; otherwise change the observation.

Keep the same expected results after the agent starts implementation. A genuine requirement change should be explicit, not silently introduced to make a candidate pass.

**Checkpoint:** approved outcomes plus a short explanation of what they establish and leave untested. No model-generated explanation can independently confirm that the business rule is desirable; that ownership stays with the person defining the task.

## 3. Bound the next change

Choose one coherent missing behaviour from the baseline. Make its relevant files and exclusions visible. A simple change may need only a short plan; the point is to reduce uncertainty, not maximise documentation.

Use the existing runner and persistence mechanism when suitable. A new service, queue, or data store needs a reason grounded in this product, not an analogy to an AI research system. Separate implementation concerns from accepted outcomes: the table does not require a particular class hierarchy or database schema.

Define how to stop if feedback becomes uninformative. If repeated commands fail before reaching the product rule, pause the implementation and inspect the environment. If expected values are being altered, inspect intent before accepting another generated patch.

These stop conditions are our proposed exercise controls. They are not inferred from a private Karpathy setup.

## 4. Execute and retain evidence

After a change, run the relevant observation sequence and existing regression checks. Capture enough output to distinguish a failed invocation, an actual product defect, a timeout, and a completed passing run. Avoid treating missing output as success.

Retain the starting revision and the candidate diff. A useful record names what changed, why, which checks ran, and what the observations showed. A screenshot of a green badge or an agent's final sentence is not equivalent to those details.

When the test is already green, inspect whether it exercises the changed path. A test can be useful without being newly red in this session, but the evidence should support that claim. A temporary deliberate defect in a disposable working state can test assertion sensitivity; restore the correct version afterwards.

**Checkpoint:** an explainable candidate and actual check evidence. Nothing here authorises unattended indefinite iteration, changes to the evaluator, installation, or deployment.

## 5. Judge simplicity alongside success

A candidate may pass the six observations while adding unnecessary concepts or duplicating the state rule. Ask whether a simpler existing mechanism can express the behaviour and whether the next maintainer can trace it.

Conversely, the fewest lines are not automatically the clearest solution. If combining balance and identity updates into an existing atomic operation is important in the inspected environment, avoid removing that structure merely to shrink the diff. Concurrency requirements remain outside the common task unless separately agreed.

A useful human review question is: “Show me where A becomes a durable accepted event, and explain why a restart cannot turn it into a new event.” The answer should refer to the implementation and observed boundary, not just recite the acceptance table.

## 6. Integrate without inventing a release policy

Run the project's normal integrated checks and inspect the final diff, including test fixtures and configuration. Record any migration or operational question that arose, while keeping unrequested deployment outside this exercise.

The result is a reviewed increment, not evidence that every deployment concern has been resolved. The profile's [integration field](index.md#c10) explicitly limits what is known about the subject's private policy.

For a future measured comparison, start each workflow from the same revision and environment, use the same outcome sequence, and record total time including setup, review, and repair. Written profiles alone cannot establish a winner.

## Reusable prompts

These prompts are our adaptations, not quotations or recovered private instructions.

### Inspect before proposing

```text
Inspect the existing reward path. Identify the submission entry point,
identity check, balance update, durable state, success boundary, and tests.
Run the relevant baseline. Separate observed facts from assumptions.
Do not introduce a new architecture or implementation yet.
```

### Establish the common observations

```text
Our agreed sequence is: empty account 0; A gives 10; replay A stays 10;
restart retaining real durable data, then read before any replay: 10;
replay A after restart stays 10; new B gives 20.

Show how each observation reaches the real application and one plausible
wrong implementation it can distinguish. Identify remaining gaps.
Do not replace runtime restart with a fresh in-memory test object.
```

### Implement and report

```text
Implement the next agreed missing behaviour as a bounded change.
Use the existing stack and runner. Keep accepted outcomes unchanged.
Report actual commands, results, affected paths, and unresolved assumptions.
If feedback fails before reaching the behaviour, diagnose that separately.
Do not install tools, deploy, or run an indefinite loop.
```

### Review understanding

```text
Explain how accepted submission identity and the balance survive restart.
Trace A through the changed code, then explain why B remains a new event.
Inspect altered tests, fixtures, configuration, and duplicated rules.
Suggest one simplification only if it preserves the agreed behaviour.
State what the evidence does not establish.
```

## Separate optional model-quality illustration

If the product later contains a model, evaluate that component separately. For instance, a classifier might decide whether an incoming message represents a reward request. Keep a fixed labelled sample, inspect errors, and distinguish false acceptance from false rejection.

That additional example changes the product and is **not** part of the shared deterministic reward task. A correct state machine does not prove that the classifier understands requests; a good classifier score does not prove durable duplicate protection. This separation is the point of the profile's mixed-focus label.

## First practical lab

Keep the starting revision, state map, six observed balances, candidate diff, actual command results, and one explanation of the durable transition. Record a plausible defect the checks catch and at least one behaviour they do not establish. Use that record to decide whether the workflow improved understanding and review effort in this project, without turning a single exercise into a general productivity result.
