---
title: Harper Reed — common reward workflow
parent: Harper Reed
nav_order: 2
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
---

# A reward feature with an inspectable plan

[Profile](index.md) · [Research](research.md) · [Source findings](sources.md)

**Suggested adaptation.** This entire worked feature and its prompts are our original proposal. It is not a session demonstrated by Reed or a claim that he would use this exact process. The example holds the problem constant across engineer profiles while leaving room for different implementation judgments.

## Shared task and assumptions

A submission can arrive more than once. Each distinct ID earns **10 points once**. A successful award and the knowledge that its ID was already accepted must survive a runtime restart. A distinct ID is a separate event.

The language, architecture, store, runner and supported application boundary are unknown. Begin with inspection. The common task adds no mandatory network, UI, distributed concurrency, crash-injection or performance requirement. Optional extensions must be separate and applied consistently if later compared.

| Step | Action | Expected balance | What this can reveal |
|---|---|---|---|
| 0 | Read an isolated empty account | 0 | Fixture contamination |
| 1 | Deliver A | 10 | No award or incorrect amount |
| 2 | Deliver A again | 10 | Repeated processing of one identity |
| 3 | Restart runtime while retaining durable data, then read before any delivery | 10 | Lost successful balance |
| 4 | Deliver A after restart | 10 | Lost accepted-ID history |
| 5 | Deliver distinct B | 20 | Incorrect suppression of new events |

Steps 3 and 4 must stay separate. Losing both the balance and the deduplication state could let replay A award 10 again, concealing the loss in a combined check. Likewise, an implementation which ignores every request after the first needs the B observation to reveal it.

## Step 1 — Inspect the starting path

Find the actual input boundary, ID representation, balance update and durable state. Locate the point at which the existing implementation reports success. Run the relevant baseline using the repository's normal command and retain the result.

Write observations as observations: a code path that appends an ID to a process-local set is not a durable acceptance record. A store write call is not necessarily evidence that the operation succeeded. If configuration or a runner failure blocks inspection, name that as an environment problem instead of changing the intended balances.

Keep a short map: location, responsibility, observed evidence, uncertainty. Avoid assuming a database or service because the feature sounds like one that often uses them.

## Step 2 — Make the intent inspectable

The six outcomes above are fixed. Questions should resolve how to reach and observe them, not reopen the reward amount, add a leaderboard, or choose a transport without need.

A useful task note contains:

- The fixed event sequence and balances.
- Existing boundaries that can issue A and B and read real state.
- How a runtime restart retains durable data in this environment.
- Relevant code and checks, with actual command names discovered locally.
- One next missing behaviour and the evidence that it is missing.
- Consequential unknowns and explicit exclusions.

Review that note before using it as an implementation handoff. If the next change is obvious and small, the note can be brief. More prose is not automatically better understanding.

## Step 3 — Choose the next coherent increment

Some outcomes may already hold. Verify existing behaviour before scheduling work. If same-process replay already works but restarting forgets the ID, start from that missing boundary rather than rebuilding the entire reward feature.

A possible increment makes accepted IDs durable through the existing mechanism. Another might correct when the success response is emitted. These are hypotheses to test against the code, not prescribed architecture. The task can only be split sensibly after the baseline and state map exist.

Keep each change reviewable. A prompt plan can describe several steps, but completion of the plan is not one giant unverified implementation event. Conversely, repeatedly interrupting an obvious small fix with irrelevant planning rituals can obscure the work.

## Step 4 — Establish meaningful feedback

Make the relevant check observe the actual application. It must not merely ask a fixture to recalculate 10 points when its helper is called. The restart operation must replace transient runtime state while leaving the real durable data in place.

If a focused check fails, read its reason. An expected balance of 10 versus an actual 20 after replay represents a product-rule failure. A missing import or a broken command does not. If the new check already passes, inspect whether it genuinely exercises the required path and whether the behaviour already exists.

Use a deliberate temporary defect only as a separate sensitivity exercise. For example, dropping the saved acceptance history should make step 4 fail. Restore the correct code and rerun relevant checks. This suggestion does not claim Reed requires a specific mutation tool.

## Step 5 — Implement within the existing system

Supply the reviewed note, relevant files and the next outcome. Prefer a mechanism the application already supports where suitable. A new dependency, storage engine or framework needs justification grounded in the inspected code.

Review changed expectations, fixtures and configuration as carefully as product code. If the agent cannot satisfy the contract without altering it, require an explanation. Quietly changing “once per ID” to “once during the current process” would make a subset of checks easier while violating the task.

Trace the state transition from A entering to success being reported. The reviewer should understand which facts are durable and which are transient, and why the duplicate decision remains valid after restart.

## Step 6 — Review and checkpoint

Inspect the actual diff and check output. Ask for a concise account of which required observations pass and which conditions remain outside scope. A claimed clean run should correspond to a completed command, not an unexecuted list of commands the agent recommends.

Make a structural adjustment only if it improves a real comprehension or change problem. Separate that adjustment from the semantic fix in the explanation. A smaller diff is useful when it carries the whole intended behaviour, not when it leaves the important work undone.

Keep one coherent change under the project's normal version-control process. Do not treat a commit, a checked box, or an agent summary as release approval. A private CI or deployment policy cannot be supplied by this research profile.

## Reusable prompts

These are original suggested adaptations, not Reed's published prompts.

### Inspect

```text
Inspect how this system accepts reward submissions, recognises an
accepted ID, updates points and persists successful state. Use the
existing focused baseline command. Report relevant paths, observed
behaviour and uncertainties. Do not redesign the system yet.
```

### Plan at the appropriate scale

```text
Our fixed observations are 0 initially; A gives 10; replay A stays 10;
restart retaining durable data, then read before replay: 10;
replay A after restart stays 10; distinct B gives 20.

Make the smallest useful task note for the next missing behaviour.
Separate product outcomes from implementation proposals. Include the
real command and observation boundary, then identify any choice that
actually requires a human decision. Do not add UI, network or
concurrency requirements.
```

### Implement

```text
Implement the next approved missing outcome using existing conventions
where suitable. Preserve expected balances. Report any test, fixture,
configuration or persisted-data changes. Run the relevant checks and
show what completed. If an assumption is wrong, explain it rather than
silently revising the contract.
```

### Review

```text
Review the diff against all six observations. Look for transient ID
history, balance loss at restart, a fake restart fixture, early success
reporting and tests that read their own substitutes. Explain the actual
state transition, remaining gaps, and any worthwhile small refactor.
Do not declare deployment authorised.
```

## First practical lab

Start from a recorded revision and environment. Produce the state map and a short reviewed note, complete one coherent increment, then verify the full agreed sequence. Keep the diff, executed commands and results. Explain why reading immediately after restart is necessary before replaying A.

Record total effort, including review and rework, if this later becomes a matched comparison. This written exercise alone does not establish which engineer's ideas, agent, or tool is fastest.
