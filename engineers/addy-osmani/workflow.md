---
title: Addy Osmani — worked feature and prompts
parent: Addy Osmani
nav_order: 2
last_updated: 2026-10-26
last_read: null
status: unread
research_cutoff: 2026-10-26
research_checked: 2026-10-26
cache_schema: 1
---

# A Reward Feature Through a Designed Agent Loop

[Profile](index.md) · [Detailed research](research.md) · [Sources](sources.md)

Everything on this page is a **suggested adaptation** by this guide. It is neither Osmani's code nor a reconstruction of a private development session. The [research guide](research.md) contains the source-backed positions from which this exercise draws.

## Shared task and unknown starting conditions

A request may be delivered more than once. A reward worth **10 points** must be awarded once per submission ID. A successful award must survive restart. A new submission ID is a separate event. Begin by establishing existing behaviour.

The application language, persistence mechanism, transport and current architecture are unknown. “Restart” must be defined for the target application before the test is written. Concurrent delivery, multiple processes, conflicting payloads for one ID, and transport acknowledgements are open questions, not silently added requirements.

These fixed assumptions make a future comparison fair: other profiles should solve the same agreed task, not an easier variant with in-memory state.

## Step 1 — Investigate in a constrained pass

Find the entry point, reward calculation, write path and observation path. Ask how a duplicate is identified and whether IDs are already stored. Inspect existing tests before deciding which new ones are necessary.

Produce a short comprehension memo with:

- Entry points and relevant callers, each linked to a file or other available evidence.
- The existing definition of submission identity.
- Where awarded points and processing history persist.
- Checks already available and gaps relevant to restart behaviour.
- Owners or external constraints that cannot be inferred from code.
- Questions that block the choice of implementation.

An agent saying “the repository uses SQLite” is insufficient evidence if the inspected code uses an in-memory adapter in this execution path. The memo must describe the path the proposed test will actually reach.

## Step 2 — Give the change a risk boundary

Have a person classify the intended change using test confidence, blast radius, observability and reversibility. This is a task-specific decision. A toy reward demo and a real rewards ledger with financial implications need different review effort.

Write an explicit implementation boundary: files or modules likely to change, data that must be preserved, and actions outside the task. If the target is uncertain, begin with a behaviour-preserving check rather than a rewrite.

Do not mark an entire area safe just because its code looks modern. A small module may still control an important persistent invariant.

## Step 3 — Agree the behavioural examples

| Sequence | Expected observable result |
|---|---|
| Start at zero; process submission A | Total becomes 10 |
| Receive A again | Total remains 10 |
| Restart; read without receiving another submission | Total remains 10 |
| Receive A again after restart | Total remains 10 |
| Receive new submission B | Total becomes 20 |

Read after restart before replaying A: a lost balance followed by an accidental second award could otherwise produce the expected total of 10 for the wrong reason.

Record additional questions separately. For instance, if submission A arrives with different content, there is no agreed outcome yet. Stop and resolve the rule before treating any generated answer as authoritative.

The examples are an agreement to verify. A Markdown specification does not automatically execute itself; connect the examples to real checks in the project's existing harness.

## Step 4 — Plan one coherent slice

Ask for a short plan that names the observation boundary, proposed code changes and the check for each relevant invariant. Compare alternatives against current architecture. Do not select a schema, database or distributed lock simply because those are common solutions to idempotency.

A proposed plan should explain how persistence and replay recognition remain consistent. If they are separate writes, investigate what failures can happen between them within the agreed operating model. This identifies a design question; it does not automatically expand the exercise into a distributed-systems project.

The person responsible for the change picks the approach. Keep the plan small enough to review without depending on the agent's confidence.

## Step 5 — Implement with feedback and checkpoints

Use the existing test runner and establish a baseline. Add a check that observes the actual persistent state after the specified sequence. Where the missing behaviour can be demonstrated, inspect a meaningful failure before accepting the implementation.

Give the agent one bounded slice. Let it run relevant checks and inspect failures, but stop for a changed requirement, disproved architectural assumption or unexpected data risk. Keep checkpoints where the result is coherent and inspectable.

A retry should explain the previous failure and the proposed correction. Repeating an unchanged command indefinitely is not useful progress. Set a task-specific budget or retry limit before using unattended loops; the exact number is a local choice.

## Step 6 — Review from the original intent

Give a fresh reviewer the requirement, changed files and check evidence. Do not supply only the implementer's summary. Ask the reviewer to trace the requirement to the observation path and challenge the following possibilities:

- Replay detection happens after points are awarded.
- Processing history disappears on restart.
- The test reads the same in-memory object the implementation mutated.
- The implementation treats every new submission as a duplicate.
- Fixture reset or test order creates an accidental pass.
- An exception is swallowed and the operation is reported successful anyway.

These are proposed review probes, not claimed defects in an existing project. Select checks appropriate to the actual code and requirements. A second model is another fallible reviewer, not an authoritative oracle.

## Step 7 — Package the evidence and make the decision

Produce a concise handoff containing the agreed rule, relevant changed files, commands run, observed results, restart verification, known gaps and the way to undo the change. Include data implications if the actual implementation changes storage.

The owner decides whether to accept, block, narrow or investigate further. The agent's “done” message is one report to inspect. An external dependency, unanswered question or failed check should remain visible rather than being absorbed into a confident completion statement.

If this exercise is conducted in a real repository, integrate through its normal process. The exercise does not itself authorise release to users, modification of production data or changes to access controls.

## Reusable working prompts

These are original adaptation prompts. Replace the bracketed paths and commands only after inspecting the target repository.

### Inspect

```text
Read the reward submission path and existing tests. Make no code changes.
Produce a short memo with cited entry points, callers, current identity
rules, persistence, observation paths, and unknowns. Separate facts from
inferences. Focus on duplicate delivery and persistence after restart.
```

### Plan

```text
Using the approved memo, propose a minimal change for this rule:
10 points once per submission ID, persistent across restart; new ID means
another event. Name the files, checks, assumptions and recovery route.
Do not choose a new storage system unless the evidence requires it.
Flag unresolved semantics instead of inventing them.
```

### Implement

```text
Implement the approved slice within the agreed boundary. Preserve the
behavioural expectations. Run the established baseline and relevant checks.
If the code contradicts the memo or the plan needs broader access, stop
and report the discrepancy. Record actual results, not intended commands.
```

### Challenge

```text
Review from the original requirement, independently of the implementation
summary. Trace each expected outcome to the actual observation path.
Look for replay, restart, and new-ID cases that can pass incorrectly.
Explain the most important gap and the smallest useful check to resolve it.
Do not edit expectations just to make the implementation pass.
```

### Decide

```text
Prepare a reviewable evidence packet: agreed rule, meaningful diff,
commands and results, restart observation, known gaps, data implications,
and recovery route. Recommend accept, block or investigate with reasons.
Do not claim release approval or execute deployment.
```

## First practical lab

Run the shared task from a reproducible starting revision. Keep the agent and harness configuration in the task record. Use one assistant first; a later repetition can explore whether a separate review pass adds value.

| Output | What a reviewer should be able to inspect |
|---|---|
| Comprehension memo | Evidence of the real code path and uncertainty |
| Agreed examples | Same-ID replay, restart, and a new ID |
| Reviewed plan | Scope, observation boundary and reversibility |
| Patch and checks | Actual behaviour rather than generated reassurance |
| Review note | A challenged assumption or an explicitly justified absence of findings |
| Decision record | Why the result was accepted or blocked and what remains unknown |

At the retrospective, record implementation time, review time, rework, context spent on irrelevant material and any failed handoff. These measurements help choose local changes; one exercise cannot establish a universal productivity result.
