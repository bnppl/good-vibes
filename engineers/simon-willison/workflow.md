---
title: Simon Willison — worked reward workflow
parent: Simon Willison
nav_order: 2
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: 2026-10-26
research_checked: 2026-10-26
cache_schema: 1
---

> **Scope update — 26 October 2026:** Start with [recent AI evidence](recent-ai.md). The material below retains earlier principles, dated reports and our optional adaptations. It must not be read as a complete current personal AI workflow.

# A feature from idea to release

This is a **suggested adaptation** combining the cached patterns in [the research guide](research.md), not a demonstration that Willison would follow exactly these steps. It uses the same neutral example as other profiles so later comparisons can focus on workflow rather than different requirements.

## The fixed problem

A request may be delivered more than once. Award **10 points once per submission ID**. A successful award survives restart. A new submission ID is a separate event. First establish how the existing system behaves.

Unknowns to resolve from the project: storage engine, invocation boundary, runtime command, current checks, and how to observe a durable total. No new network, concurrency, or UI requirements are assumed. If these are later added, add them to every workflow being compared.

## 1. Start by executing what exists

Read project instructions and locate the test command. Run it. Read the relevant tests and the current award code. A baseline helps distinguish a new defect from an existing problem, and gives the agent an executable introduction to the project.

For a repository without a suite, do not pretend to have a green baseline. Record the gap and create a focused behavioural check at a boundary you can exercise. Record the current observed behaviour separately from the desired rule.

**Keep:** commands, results, revision, and a short map from input to storage. This is our application of [the baseline pattern](research.md#start-with-an-executable-baseline).

## 2. Make the examples unambiguous

Use one known starting state:

| Operation | Expected total |
|---|---:|
| Begin with an empty reward store | 0 |
| Submit ID `alpha` | 10 |
| Deliver `alpha` again | 10 |
| Restart using the same store; read without delivering anything | 10 |
| Deliver `alpha` again after restart | 10 |
| Submit ID `beta` | 20 |

Read the retained total immediately after restart, before sending another submission. Combining restart with replay could conceal a lost balance followed by a second award.

Specify whether a return value reports total points or points newly awarded, if that is part of the API. Those are different quantities; a total of 10 is not evidence of a new 10-point award. Do not let the agent infer an incompatible interpretation from a convenient function name.

**Keep:** the examples and boundary assumptions. This table is original scenario design, not copied from Willison's material.

## 3. Observe a discriminating failure

Write a test that delivers `alpha` twice and reads the result through the intended observation boundary. Run it before implementing replay protection. If it fails because the observed total is 20 rather than 10, you have useful evidence. If it cannot start the runtime, fix the test setup first.

An existing green result deserves investigation: is replay already supported, or did the test bypass it? Do not remove working replay protection simply to stage a red result. A separately identified deliberate defect can challenge a test if you need evidence of its sensitivity.

**Keep:** the check and explanation of what it observes. Related pattern: [red before green](research.md#red-before-green).

## 4. Implement within the current design

Give the agent the rule, test, existing conventions, and scope. Review its proposed storage invariant. A list held only in memory cannot satisfy restart persistence. Conversely, inventing an event platform is unnecessary if the existing durable store already supports a coherent small solution.

Do not prescribe an exact schema before inspecting the project. The requirement concerns observable replay behaviour; design choices must fit the actual store and runtime. A focused internal test may help explore those choices, while an integration check establishes what happens through the real path.

**Keep:** the small diff and relevant regression results. Separate a useful structural refactor from additional product behaviour.

## 5. Explore what the tests may have missed

Start the real process with local synthetic data. Follow the example table, including the restart. Use a CLI, library invocation, API, or browser only when it represents the product boundary you actually have.

Watch for these specific gaps:

- A test fixture resets the store while the real process does not.
- The app writes to one storage path and the demo reads another.
- A duplicate response is correct but the durable balance still changes.
- A restart loads stale state or ignores the recorded submission IDs.
- A new ID is incorrectly treated as a duplicate of a previous request.

If exploration uncovers a relevant bug, capture a regression case before accepting the repair. This is our application of [exercised behaviour](research.md#tests-plus-exercised-behaviour), not a requirement that every feature gets every type of manual test.

## 6. Record actions and outcomes

A brief execution record should show the runtime command, input IDs, observed totals, and restart. Where suitable, Showboat can capture commands and output. An ordinary well-reviewed task record may be sufficient when another tool is unavailable.

Keep commentary separate from executed results. A screenshot of “success” is weaker evidence of persistence than a restart observation against the actual store. If a document is executable, review commands before replaying it; documentation can contain destructive operations too.

**Keep:** evidence someone else could inspect, with environment assumptions and limitations.

## 7. Pay down the understanding gap

Ask the agent for a linear walkthrough using actual source excerpts. Trace submission intake, duplicate detection, storage update, restart loading, and total retrieval. Then explain the design yourself:

- What persisted fact distinguishes a replay?
- Which operation establishes a successful award?
- What did the restart check actually prove?
- What could fail outside the tested boundary?

If a picture helps, draw an event timeline. The timeline is explanatory material, not a substitute for the program's behaviour.

**Keep:** a source-grounded explanation and one reviewer question the walkthrough uncovered. Related patterns: [walkthroughs](research.md#walk-through-unfamiliar-code) and [interactive explanations](research.md#make-hard-mechanisms-visible).

## 8. Prepare the change for someone else

Read the diff, tests, execution record, and PR description yourself. Confirm that the description does not claim concurrency, distributed idempotency, production verification, or any other property you did not establish. Split a large change into coherent review units where practical.

An author who understands the rule and has checked the implementation is providing value beyond asking another person to inspect generated output. That is the collaboration responsibility documented in [the review pattern](research.md#review-is-the-authors-work).

## 9. Retain the lesson

If the session exposed a reproducible setup problem or a reliable testing technique, save a concise durable note with its context. Do not endlessly append every transcript to root instructions. Keep a working example discoverable and explain when it applies.

For later workflow comparisons, record total elapsed effort, hands-on review, reruns, rework, and unresolved failures. One completed feature is a learning artifact, not a controlled productivity experiment.
