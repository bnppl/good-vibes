---
title: David Heinemeier Hansson — common reward workflow
parent: David Heinemeier Hansson
nav_order: 2
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
derived_from: engineers/david-heinemeier-hansson/research.md
---

# A reward feature with explicit outcomes and design judgment

[Profile](index.md) · [Research](research.md) · [Source findings](sources.md)

**Suggested adaptation.** This entire walkthrough is our original exercise. It applies selected documented ideas without claiming to reproduce DHH's private process, encode a current personal testing policy, or quote his prompts. The mandatory outcomes are identical to those used for other engineers.

## Shared task and assumptions

A request can be delivered more than once. Award **10 points once per submission ID**. A successful award survives runtime restart. A new ID is a separate event. Establish existing behaviour before selecting a change.

The initial language, framework, storage, runner, and supported application boundary are unknown. Nothing here requires Rails, a new database, a web UI, a network service, concurrent requests, or production deployment. If a real project has those additional concerns, record them separately and keep their scope constant across compared workflows.

| Step | Action | Expected balance | Independent question |
|---|---|---|---|
| 0 | Read an isolated empty account | 0 | Is the fixture clean? |
| 1 | Deliver submission A | 10 | Does the first event earn its reward? |
| 2 | Deliver A again | 10 | Is immediate replay suppressed? |
| 3 | Restart runtime, retain durable data, read before any replay | 10 | Did the successful reward persist? |
| 4 | Deliver A after restart | 10 | Did accepted identity persist too? |
| 5 | Deliver new submission B | 20 | Can a genuinely new event still earn points? |

A combined restart-and-replay check can miss data loss: A may simply be awarded again after all state disappears. Step 3 must read the balance before step 4. A test fixture that recreates an in-memory object is not necessarily a runtime restart, and a copied reward algorithm in the test is not evidence of product behaviour.

## 1. Find the actual state transition

Inspect the entry point and follow the data. Where is the submission ID created or received? What operation changes the balance? Where are successful IDs remembered? When does the operation report success? Which pieces live only inside the current process?

Produce a small evidence map rather than a redesign. An answer like “the handler calls a service” merely moves the question; keep tracing until the actual durable state boundary is visible. Note whether the current architecture already has a usable mechanism that the new behaviour can reuse.

Run the existing focused checks. If the command cannot start, record the environment problem separately from missing product behaviour. If a relevant test passes, inspect whether it actually exercises the intended condition. Do not intentionally break the application just to manufacture a red state.

## 2. Keep product intent distinct from implementation

The six observations are already agreed for the exercise. Clarify only unresolved information that affects implementing or observing them: the supported restart procedure, how to isolate an account, or what an accepted operation means in the existing code.

Do not ask the agent to design a leaderboard, reputation economy, or distributed event platform. Those additions would change the comparison. The question is whether one coherent rule is implemented and can be checked honestly.

A useful task note can be short: requirement table, relevant locations, observed baseline, next change, and remaining uncertainties. This note is our choice, not an attributed DHH specification format. Neither this file nor the implementation should silently redefine “once per ID” as “once during this process.”

## 3. Delegate a coherent change

Select the next missing behaviour with a reviewable scope. One proposed sequence is first delivery and immediate replay, then persistence and replay after restart, then the distinct-ID check. That sequence is a teaching choice, not proof of his preferred increment size.

Ask the agent to use the actual project's runner and boundary. If database-backed model logic is already the natural place to observe the reward, there is no need to mock the database solely to make the check look like an isolated unit test. If a smaller deterministic function truly captures the rule, use it where it provides meaningful feedback, while retaining the separate persistence observation.

This does not mandate tests before or after every line. It does require that the final evidence observes the agreed outcomes. Keep known requirements outside the candidate implementation's authority to redefine.

## 4. Review the design by explanation

Trace A through the changed path. Explain how the balance effect relates to the accepted-ID record, and how both survive replacing the runtime. Look for a tempting but incomplete design: a persistent balance paired with an in-memory set of IDs. Immediate replay could pass while replay after restart fails.

Also look for excessive scaffolding. If a new repository interface just forwards calls and adds nothing to the explanation or realistic changeability, ask why it exists. Conversely, do not refuse a useful boundary simply because it has a formal name. The question is the responsibility it makes clearer.

A plausible defect to investigate is reporting success before the required state is durable. The exact implications depend on the existing system's semantics. The common exercise does not pretend to prove arbitrary crash consistency or distributed concurrency. Those are extensions requiring their own contract.

## 5. Choose evidence with an honest boundary

Run the six observations through the real application boundary available to the task. Read actual stored results. Retain durable data while replacing runtime state for the restart check.

Review test edits, fixtures, configuration, and expected values. A passing test can become meaningless if the agent changes its expected balance or redirects its observation to a test-owned fake. An independent review question is: what plausible incorrect implementation would this check reject?

If a UI already exists, exploring it can provide additional usability or wiring feedback. It is not a new acceptance requirement for only this profile. If a browser smoke test is valuable, keep its purpose distinct from the check of reward rules and persistence.

## 6. Refine and integrate

Make a structural adjustment only when it solves a concrete problem. Keep a behaviour-preserving change distinguishable from the introduction of new semantics. Re-run relevant checks afterwards.

Follow the repository's existing integration process and record what it establishes. A successful local run is not production approval, and a hosting product announcement is not a personal deployment policy. No external messages, infrastructure changes, or production actions are authorised by this exercise.

Record the observed result, commands, reviewed diff, and limitations. If a later session continues the work, its first action should be to inspect the state and repeat useful checks, not merely trust a handoff claiming completion.

## Reusable working prompts

These are original suggested prompts, not recovered DHH prompts.

### Inspect

```text
Inspect the reward entry point, submission identity, balance update,
persistence and current focused tests. Show the actual state transition,
commands run, observed baseline and uncertainties. Do not assume Rails,
a new database, a network service or a UI redesign.
```

### Delegate a bounded change

```text
Our agreed observations are baseline0, A10, replayA10,
runtime restart retaining durable data then read10 BEFORE replay,
replayA10, and newB20. Implement the next coherent missing behaviour.
Use existing project mechanisms where they fit. Report any changes to
expectations, fixtures or configuration. Do not change the contract to
make the implementation easier.
```

### Review

```text
Explain why the reward and accepted identity survive runtime restart.
Inspect the diff for transient deduplication, test-owned substitutes,
unexplained indirection and unrelated scope. Show actual check output.
Separate what passed from what the exercise does not establish.
```

### Refine

```text
Identify one concrete comprehension or changeability problem in this
path. Propose a small structural improvement only if its benefit is
clear. Preserve the six outcomes and keep the structural diff distinct
from new behaviour. Do not replace judgment with a named pattern.
```

## First practical lab

1. Save the starting revision and identify the observation boundary.
2. Record the baseline and the six agreed outcomes.
3. Complete one bounded change and inspect its code and evidence.
4. Establish persistence and duplicate protection as separate observations.
5. Verify that a new ID remains a new event.
6. Explain the result without the assistant and list untested conditions.

Keep total effort including review and rework if comparing attempts later. Use the same initial code, environment, and acceptance checks. These written adaptations are not measured evidence that one engineer's method wins.
