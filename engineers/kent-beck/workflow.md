---
title: Kent Beck — worked feature and prompts
parent: Kent Beck
nav_order: 2
last_updated: 2026-10-26
last_read: null
status: unread
research_cutoff: 2026-10-26
research_checked: 2026-10-26
cache_schema: 1
---

# Worked Feature: One Reward per Submission

This entire walkthrough is a **suggested adaptation** informed by [the research cache](research.md). It is not a transcript of Beck implementing this feature, and it is not a runnable patch to an inspected application. No initial architecture or implementation language has been assumed.

## Shared contract

A request may be delivered more than once. A reward worth **10 points** must be awarded **once per submission ID**. A successful award must survive restart. A new submission ID is a separate event. Start by establishing how the existing system behaves.

Do not silently add a network endpoint, multiple users, currency conversion, concurrency, or an administrative UI. If any such condition matters in the actual project, state it explicitly and use the same condition in comparisons with other workflows.

## Step 1: Make the starting state visible

Find the reward entry point, where its result is stored, and what the current checks exercise. Record the baseline revision and relevant existing failures. The important question is whether an existing test reaches the behaviour in question, rather than merely resembling the proposed example.

If the application already handles replay, do not manufacture a “new feature.” Establish that the check detects a plausible defect and identify a real remaining gap, such as restart. If the persistence path is opaque, investigate before assuming the handler can provide the stated guarantee.

**Keep:** the observed path, command, output, and a short statement of what they establish.

## Step 2: Make the next question explicit

Draft a small checklist:

```text
[ ] A first submission adds 10 points.
[ ] Delivering that submission again adds no points.
[ ] A distinct submission adds a separate 10 points.
[ ] Restarting preserves a successful award and replay protection.
```

This is an exercise plan, not Beck's original plan file. It is intentionally limited to the common contract. Choose the next missing behaviour, not the most impressive architecture. The existing product may need a different ordering because some of these cases are already satisfied.

For each entry, name the observation. For example, “points in a freshly restarted process are 10” is stronger evidence for persistence than “the same in-memory object still says 10.” Neither establishes crash atomicity or concurrent delivery unless those conditions are specifically exercised.

## Step 3: Establish one meaningful failure

Write one focused test through the closest appropriate real boundary. Run it. Inspect why it fails. A missing fixture and the wrong points total are separate problems; fix wiring without confusing it with the evidence of missing behaviour.

Review the expectation independently of generated implementation. For a replay scenario beginning from zero, the first delivery produces 10 and the repeated delivery leaves 10. An assertion that the result is merely non-negative would not distinguish this rule from awarding twice.

**Stop condition:** an unexplained failure, missing environment, or disagreement over the rule requires diagnosis before implementation.

## Step 4: Implement the coherent increment

Ask for the behaviour just specified and inspect the result. A test may tempt an assistant to use a process-local set of IDs. That could satisfy a first replay example while violating the already agreed restart requirement. It can be a deliberately temporary step only if the test plan and subsequent work make that incompleteness visible; do not release it as the finished contract.

An implementation might store successful submissions alongside the durable points state. Whether that is one operation, a transaction, or something else depends on the existing system. Do not prescribe a database mechanism without inspection. The final solution must explain how the guarantee is achieved under the stated conditions.

**Keep:** the relevant test output and the small production diff. Inspect changes to tests, fixtures, and execution configuration as well as production code.

## Step 5: Decide whether tidying helps now

After a green increment, identify an immediate obstacle to understanding or the next test. A better name or a separated responsibility may help. A full storage abstraction may not.

Ask whether the proposed structure change preserves behaviour and how you will observe that. Keep its diff distinct from the reward-policy change. Run relevant checks after the refactor. If the check cannot distinguish a behaviour regression, first improve the feedback path rather than declaring the refactor safe by intention.

The decision is contextual: tidy before, after, later, or never. The general design discussion should not be replaced with a ritual that always adds a cleanup commit.

## Step 6: Finish the agreed evidence

Repeat only for the remaining contract cases. Run the restart check with a genuinely renewed process or equivalent real lifecycle boundary in the target system. Verify that a new ID remains eligible; a crude global “already rewarded” switch could suppress all future rewards while passing the simplest replay case.

A useful final table:

| Observation | Expected result | What remains outside scope |
|---|---|---|
| First ID, first delivery | +10 | Other reward amounts |
| Same ID delivered again | +0 | Concurrency unless required separately |
| New ID delivered | +10 | Identity policy beyond the agreed ID |
| Restart then replay the successful ID | +0; previous total retained | Crash recovery at every possible write boundary unless specified |

This table is a local test design, not a claim that these examples exhaust correctness.

## Step 7: Review and hand over

Explain the product rule, the state that enforces it, the checks that observe it, and the assumptions that remain. Use the project's existing integration and release path. A local commit can make the increment recoverable; deployment approval and production checks still depend on the product.

Do not infer that Beck's small-project instructions prescribe a complete release pipeline for this application. The research establishes development practices more strongly than a universal production policy.

## Original working prompts

These prompts are written for this guide. They are adaptations, not quotations from Beck's appendix.

### Inspect the baseline

```text
Inspect the reward path and the checks that reach it. Identify how points
and submission IDs survive restart. Report observations and unknowns.
Do not change files. Do not assume networking, concurrency, or a database.
```

### Plan the next test

```text
Use the agreed contract: +10 once per submission ID, successful awards
survive restart, and a new ID is a separate event. Compare it with the
baseline. Propose the smallest missing observable behaviour to test next.
Explain the assertion and where the test reads actual application state.
```

### One increment

```text
Implement the approved test, run it, and explain the result. Once the
failure is understood, make that behaviour pass without unrelated work.
Preserve agreed expectations. Run relevant existing checks and show the
diff. Stop if the rule conflicts with the existing product behaviour.
```

### Review structure separately

```text
Is a structural change worthwhile for the next agreed step? Explain the
specific obstacle it removes and why doing it now helps. Keep behaviour
unchanged and the structural diff distinct. If no useful tidying is
needed, say so rather than introducing an abstraction for its own sake.
```

### Review ownership and evidence

```text
Show how a replay after restart is distinguished from a new submission.
List the checks actually run and what each observes. Explain remaining
assumptions and any test/configuration changes. Do not equate passing
examples with proof that every delivery failure mode is handled.
```

## Lab retrospective

Ask yourself: can I explain the reward guarantee without asking the agent to regenerate an explanation? Which next-test decision required judgment? Did small increments reduce review and rework, or merely add ceremony? Did any tool make me manage unnecessary coordination state?

Retain the answers alongside the baseline and reviewed increment. This is evidence for adapting the workflow locally, not a comparison of engineers' personal productivity.
