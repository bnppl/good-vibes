---
title: Martin Fowler — common reward workflow
parent: Martin Fowler
nav_order: 2
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
derived_from: engineers/martin-fowler/research.md
---

> **Scope update — 26 October 2026:** Start with [recent AI evidence](recent-ai.md). The material below retains earlier principles, dated reports and our optional adaptations. It must not be read as a complete current personal AI workflow.

# A reward feature through a Fowler-informed lens

[Profile](index.md) · [Research](research.md) · [Source findings](sources.md)

**Suggested adaptation.** This entire worked feature is our original exercise. Fowler has not been observed implementing this task, endorsing its exact sequence, or choosing its tools. It applies cached ideas without filling gaps in his private workflow with invented facts.

## Shared task and assumptions

A request may be delivered more than once. Award **10 points once per submission ID**. A successful award survives runtime restart. A new ID is a separate event. First establish how the existing system behaves.

The starting language, architecture, storage engine, test runner, and runtime are unknown. No UI, network, distributed-concurrency, or performance requirement is added. Those matters may be important for a real product, but would change this common exercise if assigned to only one engineer.

| Step | Action | Expected balance | Distinct observation |
|---|---|---|---|
| 0 | Read isolated starting account | 0 | Fixture baseline |
| 1 | Deliver submission A | 10 | A valid event is awarded |
| 2 | Deliver A again | 10 | Immediate replay does not add points |
| 3 | Restart runtime, preserving durable data, then read balance | 10 | Successful reward survives restart before any replay |
| 4 | Deliver A again after restart | 10 | Duplicate identity also survives restart |
| 5 | Deliver new submission B | 20 | A separate event is not suppressed |

Keep steps 3 and 4 separately observable. If a restart loses all state and replay A awards 10 again, a combined restart-and-replay assertion would accidentally pass. The intermediate balance check detects that loss. The B case also rejects an implementation that simply stops processing every request after A.

These outputs define a small contract. They do not specify whether the product uses a journal, a constraint, a transaction, a file, or another mechanism. If a real requirement involves concurrent delivery, crash points, or multiple accounts, establish that separately rather than pretending this table proves those cases.

## Step 1 — Discover the present behaviour

Find the supported reward entry point, the identity representation, and the code that commits successful state. Run the existing relevant checks before changing anything. Record what can be observed through the actual application rather than a copied reward algorithm in a fixture.

Ask for a map with three columns: inspected location, observed responsibility, uncertainty. “This map has a durable store” must come from code or a verified configuration, not the assistant's expectation about how a reward system usually works.

A useful initial deliverable is a short explanation: “the process currently remembers processed IDs in memory; restart replaces that memory; balances are persisted separately.” That observation would suggest a specific risk to investigate without yet selecting a new architecture.

## Step 2 — Interview about intent

Apply the [context-interview idea](research.md#use-an-interview-to-build-context) by asking only questions that change the contract or a consequential implementation choice. For this exercise, the required balances above are already given. The remaining questions concern how to observe them and what “successful” means in the existing interface.

Do not spend a session asking whether the product should have a leaderboard or a mobile notification. Those are unrelated features. Useful questions might be: “Which existing action signals that a reward has been accepted?” and “What durable state should the restart fixture retain?”

After answers, create a report containing:

- Agreed observable outcomes.
- Existing boundaries that can exercise them.
- Known limitations of the check environment.
- Decisions still needed, with evidence that makes them necessary.
- Explicit exclusions so the implementation does not expand into a redesign.

A person should review that report. A second assistant's agreement is not independent confirmation of product intent.

## Step 3 — Turn the next uncertainty into feedback

Inspect which rows already work. Choose one missing or weakly verified behaviour. A focused test should fail because that behaviour is absent, rather than because an import, command, or environment is broken.

For example, if the immediate replay row changes 10 to 20, an assertion on the actual balance makes the problem concrete. If it stays at 10 already, investigate whether the replay actually reached the application and whether existing protection is sufficient. Avoid manufacturing a defect merely to claim a red state.

This is our use of historical test-first design ideas, not evidence that Fowler mandates the same micro-cadence for all modern agent work. What matters in the exercise is that the team can explain the feedback and how it relates to the intended outcome.

## Step 4 — Make a bounded change

Give the agent the approved report, relevant code paths, and the next outcome to establish. Preserve the existing runner and storage conventions unless evidence requires an exception. A proposal to add a database, queue, or new framework needs a reason grounded in this application.

Ask the agent to identify any changes to test fixtures, expected values, configuration, or data representation. The implementation and its evidence can otherwise drift together: changing “once per ID” to “once during the current process” might make a subset of tests easier while violating the task.

The person reviewing the result should be able to trace an incoming A to its durable identity record and balance effect. If that trace requires understanding the entire codebase, note the structural problem instead of accepting an attractive summary.

## Step 5 — Refactor for a specific benefit

Suppose the implementation now passes but reward amount, identity handling, and persistence are mixed in one opaque branch. Identify the next change that this structure makes difficult. Then propose one transformation that improves clarity without changing the agreed balances.

A small extraction may make the identity policy visible. Another abstraction may be unnecessary if it introduces an interface with only one trivial operation. Judge the change by its explanatory value and effect on realistic modifications, not by the number of patterns named in the design.

Keep the structural diff inspectable and rerun the checks. An assistant saying that it “only refactored” is a statement of intent, not evidence that observable behaviour stayed the same.

## Step 6 — Make reasoning durable where it matters

If a consequential choice is made, draft a short decision record. For example: the existing store already maintains an accepted-submission journal, and the reward path will consult that record rather than add a second independent ID list.

Record why the choice fits, alternatives considered, and conditions that would reopen it. Do not write that particular decision as if it were true before inspecting the application. If the store has no suitable journal, the example is inapplicable.

The record can help the next developer or agent understand intent. It does not enforce access permissions or prove that code follows the decision. The reviewed diff and executable checks remain separate evidence.

## Step 7 — Inspect integration and release readiness

Rerun the agreed sequence, including the balance read immediately after a real runtime restart. The fixture must retain durable data and replace transient runtime state. Merely clearing a test object's variable is not proof that persistence works.

Run relevant existing regression checks and the project's normal integrated build. Review changes to data formats or migration requirements if they arose. A local success does not establish that an installed or deployed product is wired correctly, but do not invent an additional environment requirement solely for this profile.

Keep release as an explicit product decision under the project's existing process. This exercise does not grant an agent permission to deploy, communicate with users, or alter external infrastructure.

## Reusable working prompt

```text
Our fixed outcomes are: baseline 0; A gives 10; replay A stays 10;
restart retaining durable data and read balance before any replay: 10;
replay A after restart stays 10; new B gives 20.

Inspect the current entry point, identity representation, persistence,
and checks. Produce a short evidence-based context report. Ask one
question at a time only for consequential unresolved choices.

Implement the next missing agreed behaviour as a bounded change.
Preserve expectations and report any test, fixture, configuration,
or data-format edits. Then explain the resulting state transitions,
show the checks actually run, and propose a small refactor only if
it solves a concrete comprehension or changeability problem.

Do not assume a new database, transport, UI, or concurrency contract.
```

This prompt is our adaptation, not a recovered Fowler prompt.

## First practical lab

Keep a record with six balance observations, baseline command results, a context report, one bounded implementation diff, and an explanation of the chosen state mechanism. Add a decision record only for a consequential decision actually made.

For a later experiment comparing approaches, start each attempt from the same revision and environment, fix the same acceptance contract, and record total time including review and rework. These written guides alone cannot establish that any engineer's approach wins.
