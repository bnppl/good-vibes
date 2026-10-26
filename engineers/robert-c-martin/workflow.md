---
title: Robert C. Martin — common reward workflow
parent: Robert C. Martin
nav_order: 2
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
derived_from: engineers/robert-c-martin/research.md
---

> **Scope update — 26 October 2026:** Start with [recent AI evidence](recent-ai.md). The material below retains earlier principles, dated reports and our optional adaptations. It must not be read as a complete current personal AI workflow.

# A reward feature with inspectable constraints

**Suggested adaptation.** This is an original exercise informed by the [cached material](research.md). Martin has not been observed implementing this task or approving these prompts. The point is to compare applications of ideas while holding the product problem constant.

## Fixed task and assumptions

Each submission ID earns **10 points once**. Requests may repeat. A successful reward survives runtime restart; an accepted ID remains recognised afterward. A distinct new ID is a separate event. First establish how the existing system behaves.

The current language, runner, storage and application boundary are unknown. The common task adds no UI, network, concurrency, authentication, migration, or performance requirement. Additional concerns can be explored separately, with the same scope for every compared workflow.

| Step | Action | Expected balance | What can go wrong |
|---|---|---|---|
| 0 | Read an isolated empty account | 0 | Contaminated setup |
| 1 | Deliver submission A | 10 | No reward is recorded |
| 2 | Deliver A again | 10 | Every delivery adds points |
| 3 | Restart runtime, retaining durable data, then read before sending anything | 10 | Balance is transient |
| 4 | Deliver A after restart | 10 | Replay identity is transient |
| 5 | Deliver distinct B | 20 | All later rewards are suppressed |

Step 3 must remain separately observable. Losing balance and identity, then awarding A again, could still produce ten after a combined restart-and-replay check. That result would conceal data loss.

A test driver must reach the real chosen application boundary. It should not contain a second implementation of the reward rule. Retaining a test object's expected balance while recreating another test object does not demonstrate persistence across runtime restart.

## 1. Make the present system visible

Locate the entry point, accepted-ID representation, points update, durable write and success response. Run the relevant baseline. Separate an environmental failure from missing behaviour.

A useful investigation note contains the inspected code locations, observed state transition, exact check command and unresolved questions. It should be short enough for a reviewer to challenge. If the current implementation already satisfies a row, record that and assess coverage rather than rewriting it to match an imagined design.

For example, a code path might persist the balance but hold accepted IDs in memory. That would explain why immediate replay is safe but replay after restart is not. Alternatively, both may be persistent but updated independently. Do not assume either until inspecting the implementation and observing a run.

## 2. Establish an independently understood contract

Review the six outcomes before delegating implementation. A second agent may help draft tests, but it cannot supply an independent source of business intent simply by agreeing with the first agent.

Decide how the existing application signals a successful award. Identify which durable data the restart fixture must preserve. Keep the storage choice unresolved until the current architecture is understood. “Use a database” is not itself an acceptance result, and “the test passed” is not a substitute for knowing what the test observed.

Express the cases as readable examples or the project's existing specification format. Introducing Gherkin is optional in this exercise; a well-named test using the current runner may be the smaller useful step. The contract should remain understandable if a technical adapter changes.

## 3. Implement the next missing outcome

Pick a coherent slice. If first delivery already works, start where behaviour or evidence is missing. Run a relevant test and inspect whether its failure represents the actual missing outcome. A compilation failure can be a useful development signal, but it does not by itself demonstrate the replay defect.

Ask for the smallest coherent implementation that preserves agreed outcomes and existing conventions. Small does not mean a superficial workaround. An in-memory set cannot satisfy durable replay identity, even if it makes the immediate-repeat test green.

Keep changes to expectations, fixtures, runner configuration and production logic visible. The reviewer should know if the agent disabled a check, changed a default store, or broadened a helper's authority. If the expected result appears wrong, resolve that as a contract question rather than silently editing it.

## 4. Select feedback for the question

Use tests at useful boundaries. A pure policy test can clarify eligibility rules. An application-level check can observe successful persistence. The restart check must replace transient runtime state while retaining real durable data.

Choose quality analysis only when it can influence a real decision. A complexity signal may reveal an opaque transition, but a numerical target can also encourage meaningless splitting. A duplication detector may identify repeated domain logic, but a tool's output still needs interpretation. Do not make an unverified score the definition of reward correctness.

Keep build and test results reproducible enough to inspect. Retain command names and relevant output. Do not invent a language-specific invocation because an example elsewhere used Go or Clojure. Confirm the current project's runner and any additional tool's documented support.

## 5. Challenge the checks

Create a disposable fault that is plausible for this implementation. For example:

- Retain balance but forget accepted IDs on restart. Step 4 should detect an extra award.
- Retain accepted IDs but forget balance on restart. Step 3 should detect the lost award before replay.
- Treat every future ID as a duplicate. Step 5 should detect missing points.

Restore the correct implementation after each diagnostic change. A failed check is useful only if it failed for the intended reason. A missing file or broken command may say nothing about assertion strength.

An automated mutation runner can scale some of this work when compatible with the stack. It does not enumerate every omitted requirement, and equivalent mutations can survive without representing a useful behavioural gap. Triage the report rather than requiring an arbitrary universal percentage.

## 6. Review ownership at the right depth

Explain the complete A transition: identity arrives, eligibility is determined, accepted state and balance become durable, success is reported, and later replay is recognised. The reviewer must be able to challenge the mechanism and evidence.

A diagram can help if it corresponds to actual dependencies and state. It can also be stale or omit the important write. Source inspection remains available where needed; this exercise does not require imitating another person's reported reading frequency. Accountability is a decision about the product and its risks, not a badge earned by avoiding or maximising code reading.

Separate a structural improvement from a behaviour change. If an extraction clarifies persistence responsibilities, rerun the same outcomes and explain what remained invariant. If it alters when success is reported, it may be a semantic change requiring its own reviewed example.

## 7. Integrate without inventing a release policy

Use the target repository's normal integration route and relevant regression checks. If work is split among roles, make ownership and the evidence carried between them explicit. Do not launch a multi-agent framework merely because a public teaching example used one.

A local pass does not prove release readiness under every operating condition. Report remaining untested assumptions. Requirements involving concurrency, crashes during a write, external side effects, or multi-user isolation can matter in a real system, but are separate extensions to this fixed exercise.

No deployment, external message, purchase, installation or production data change is authorised by this lab.

## Reusable working prompts

These are original adaptations, not recovered private prompts.

### Inspect

```text
Inspect the existing reward entry point, identity checks, points update,
persistence, success response and relevant tests. Run the focused baseline.
Give observed code paths, command results and uncertainties. Do not
introduce a new storage or orchestration architecture yet.
```

### Establish one outcome

```text
Our fixed sequence is: baseline0; A10; replayA10; restart retaining durable
data then read10 before any delivery; replayA10; newB20.
Implement the next missing agreed outcome. Preserve expected values and
make test, fixture, configuration and state-mechanism changes visible.
If intent conflicts with the implementation, report it rather than
changing the contract. Show the checks actually run.
```

### Challenge

```text
Review what the checks observe. In a disposable state, identify one
plausible defect involving retained balance or replay identity and show
whether the relevant check detects it. Restore the correct code. Separate
a behavioural failure from an invocation or environment failure.
```

### Accept

```text
Explain the state transition across first delivery, replay and restart.
Show the integrated checks and relevant diff. Identify any relaxed gate,
untested assumption or proposed structural change. Do not claim that a
metric or another agent's agreement establishes all requirements.
```

## First practical lab

Keep a starting revision, baseline output, six-row observation table, reviewed specification, one coherent implementation diff, a check that catches a plausible fault, and a state-transition explanation. Record any useful structural improvement separately from semantic work.

For a later comparison experiment, hold the task, starting revision, environment, model/harness conditions and acceptance checks constant. Measure review and rework as well as generation. These written profiles alone do not establish a winner.
