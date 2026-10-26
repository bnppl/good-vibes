---
title: Chip Huyen — common reward workflow
parent: Chip Huyen
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
nav_order: 2
---

# A deterministic reward boundary through an AI-systems lens

[Profile](index.md) · [Research](research.md) · [Sources](sources.md)

**Suggested adaptation.** This is our original exercise. Huyen did not demonstrate this implementation, approve these prompts, or prescribe this exact development sequence. It applies a systems/evaluation lens to a deterministic software boundary. It is not a model-quality benchmark.

## Fixed task and starting assumptions

Each submission ID can earn **10 points once**. A successful award survives runtime restart. Repeated delivery of that ID must not add another award, including after restart. A new ID is a separate event.

The starting code, language, runtime, runner, storage and application boundary are unknown. Inspect them first. No new model, retrieval layer, network, UI, concurrency contract or performance target is required. Additional concerns must be separately agreed and applied equally to any later execution comparison.

## Six independent observations

Use an isolated account with an initial balance of zero. The driver reaches the real application, not a test-owned copy of the reward algorithm.

| Step | Action | Expected balance | Meaning |
|---|---|---|---|
| 0 | Read the isolated account | 0 | Known baseline |
| 1 | Deliver submission A | 10 | First event earns the reward |
| 2 | Deliver A again | 10 | Immediate replay adds nothing |
| 3 | Restart the runtime, retain durable data, and read before replay | 10 | Successful award persists |
| 4 | Deliver A after restart | 10 | Duplicate identity persists too |
| 5 | Deliver distinct submission B | 20 | New event is not suppressed |

Steps 3 and 4 are separate. If all state disappears on restart, a replay could award A again and accidentally yield 10. A final assertion alone would hide that failure. Read before replay so that persistence and deduplication make distinct claims.

A restart must replace transient runtime state while preserving actual durable data. Constructing a new test object with an expected balance is not evidence that the application preserves anything. If the environment cannot perform the required restart, record that gap rather than declaring the task verified.

## Step 1 — Establish the baseline and the decision boundary

Locate the supported submission entry point, ID representation, reward update, success signal, and persistence. Find and run the relevant existing checks. Keep their exact command and output with the starting revision.

Ask where the decision “already rewarded” is made. If a model currently interprets an event, distinguish that interpretation from the supplied deterministic identity. Do not ask a model to guess whether A and A are the same supplied ID. Our exercise already defines that rule.

Produce a short map: observed code path, responsibility, evidence, and unresolved assumption. The map should let a reviewer trace a submission into a state update without accepting an assistant's narrative as proof.

## Step 2 — State what each check can establish

Write the observation table before choosing a remedy. Existing tests may establish some rows already. A passing row may also be weakly observed, so inspect the assertion boundary.

A code assertion can compare balance to an exact integer. It should not use a language-model judge for that comparison. A model-generated explanation is not independent evidence of the state it describes. A test that merely asks the same model twice whether the result looks correct is similarly weak for this task.

If a row already passes, investigate rather than deliberately breaking production code to obtain a red result. A separate disposable mutation can test an assertion's sensitivity, but that is a different operation with a different purpose.

## Step 3 — Choose the smallest coherent change

Inspect the mechanism before selecting the architecture. The project may already have a durable accepted-ID record, an append-only ledger, or another relevant feature. It may have neither. Do not choose a database, queue or agent framework on the basis of a diagram from a general article.

Select one missing behaviour. For example, immediate replay may fail while persistence already works. Or balance may survive restart while accepted IDs do not. Those observations suggest different changes.

The proposed change should identify its expected effect and the checks that will observe it. Keep new product semantics separate from diagnostic logging or structural cleanup. Do not silently redefine an accepted event as one accepted only during the current process.

## Step 4 — Implement with a clear observation path

Give the implementer the agreed contract, inspected code locations, and relevant constraints. Preserve expected balances. Require disclosure of changes to tests, fixtures, configuration, and stored-data assumptions.

Run the focused check, then relevant regression checks. For each result, ask whether the command completed and whether the observed value came from the real system. A driver that updates its own balance object may reproduce the intended output while the application remains broken.

The success boundary matters. If the application says success before the required state is durable, the reward may disappear after restart. The correct implementation depends on the inspected system; this exercise does not presume a transaction primitive or storage engine.

## Step 5 — Explain the state, not just the score

Review the actual changed path. Ask a person to trace first A, replay A, restart/read, replay A, and B. Explain what is stored, which state is transient, and what a successful response means.

The reviewer should be able to distinguish balance persistence from identity persistence. Two pieces of state can fail independently. A single “idempotency passed” label is less useful than the observations supporting it.

Inspect assertions and configuration as carefully as implementation changes. Removing a failing case or changing the expected total may be legitimate only if the requirement intentionally changes; that is not part of this fixed exercise.

## Step 6 — Optionally challenge an important assertion

**Optional extension, outside the six common acceptance observations.** In a disposable state, try one plausible defect: forget accepted IDs on restart or stop persisting the awarded balance. Run the relevant checks and inspect the failure. Restore the correct implementation afterwards.

This sensitivity exercise is our suggested adaptation, not a claim that Huyen mandates mutation testing. Its value is narrow: it helps show whether the chosen assertion distinguishes a particular wrong result. It cannot demonstrate complete requirements or safe behaviour under every untested condition.

## Step 7 — Integrate without inventing a release policy

Rerun all six observations and relevant existing checks on the coherent change. Record remaining limitations. Follow the target repository's normal integration process.

Do not claim that a local check establishes a production rollout or Huyen's private release controls. This deterministic task also establishes nothing about the reliability of an optional language model. The application may be correct at this boundary while other components remain unverified.

## Optional illustration: an explanation beside the reward

This is **outside the common acceptance task**. Suppose a product team separately wants a model to explain why a submission earned no additional points. The deterministic service remains authoritative; the generated text is an optional presentation component.

The two evaluation records should remain distinct:

| Component | Proposed observation | Does not establish |
|---|---|---|
| Reward service | Exact balances for the six fixed cases | Helpfulness or factuality of generated explanations |
| Optional explanation | A reviewed rubric for consistency with the observed result and usefulness to the user | Correct persistence or complete domain understanding |

For that separate component, collect representative example situations, include replay and new-event cases, and ask a domain owner to review expected meaning. Record the model/configuration and changes. Automated judgments may help prioritise review; agreement between models is not automatically ground truth.

Compare against a non-model baseline, such as a deterministic message assembled from the actual outcome. If that meets the user need, extra generation may add avoidable uncertainty. This is our proposed product experiment, not Huyen's own reward feature, and it must not become an extra hurdle in another engineer's comparison task.

## Reusable working prompts

These prompts were written for this guide.

### Inspect the deterministic boundary

```text
Find the existing reward entry point, submission identity check,
success boundary, persistence and relevant tests. Run the baseline.
Separate inspected facts from assumptions. Do not add an AI component.
Show how a driver can observe the actual application state.
```

### Implement the agreed next observation

```text
Our fixed sequence is 0; A -> 10; replay A -> 10; restart retaining
actual durable data and read BEFORE replay -> 10; replay A -> 10;
new B -> 20. Implement the next missing agreed behaviour.

Keep the existing stack unless a concrete limitation requires a change.
Do not alter expected totals or add network, UI or concurrency scope.
Report commands, results, and any test/fixture/configuration changes.
```

### Keep model evaluation separate

```text
If we separately consider a generated explanation, first describe its
user purpose and a non-model baseline. Keep the deterministic service
authoritative. Propose a separate evaluation record for the text.
Do not use a model judge to decide whether the balance equals 10.
Label every unverified model-quality or rollout assumption.
```

## First practical lab

Keep the starting revision, state map, six observed balances, command results, reviewed diff, and explanation of the persistence boundary. Optionally include a sensitivity check and its restored clean result if the environment supports it; it is outside the common acceptance scope.

The optional explanation illustration can be a later separate lab. Its success criteria and resource costs should not be mixed into the deterministic acceptance result. For any later execution comparison, hold the starting system, requirements, environment, checks and trial protocol constant, and record review/rework as well as generation effort.
