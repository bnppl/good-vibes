---
title: Matt Pocock — common reward workflow
parent: Matt Pocock
nav_order: 2
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
---

# A reward feature through a Pocock-informed workflow

[Profile](index.md) · [Detailed research](research.md) · [Sources](sources.md)

**Suggested adaptation.** This entire chapter is original proposed guidance using the cached ideas. It is not a demonstration by Pocock and does not claim to reproduce his private process. The implementation is not performed by this study.

## Fixed task and assumptions

A request can be delivered more than once. Award 10 points once per submission ID. Successful state survives a real runtime restart; a new ID is a separate event. The existing language, storage, runner and application architecture are unknown.

Do not add a mandatory network API, UI, concurrent delivery, crash-injection campaign, authentication subsystem or new framework. Those may be reasonable future requirements, but adding them to only this profile changes the comparison.

| Step | Action | Expected balance | Distinct question |
|---|---|---|---|
| 0 | Read an isolated empty account | 0 | Is the baseline uncontaminated? |
| 1 | Deliver submission A | 10 | Does a valid event award points? |
| 2 | Deliver A again | 10 | Does immediate replay repeat the award? |
| 3 | Restart the runtime while retaining durable data, then read before any replay | 10 | Did the successful reward itself persist? |
| 4 | Deliver A again after restart | 10 | Did duplicate identity persist? |
| 5 | Deliver distinct submission B | 20 | Can the next independent event still earn points? |

Keep steps 3 and 4 separate. A faulty system that loses everything and then awards A again might finish with 10 after replay while having violated successful-state persistence. The intermediate read prevents that false assurance. Likewise, an implementation that ignores every request after A can pass replay checks but fail B.

## 1. Inspect before creating process artifacts

Locate the submission entry point, identity handling, reward calculation, durability boundary and existing checks. Run a focused baseline and retain the actual output. Determine how the application indicates a successful accepted event.

Write a small evidence map with inspected location, observed behaviour and uncertainty. If the application currently stores points in a file but processed IDs only in a set, that is a concrete observation with a testable consequence; it is not yet permission to replace the storage design.

Separate environment failure from product failure. A missing dependency may prevent a check from reaching the behaviour. Fix or explain that problem instead of counting a broken test runner as a useful red state. If all required behaviour already exists, the next useful work may be strengthening an observation rather than implementing another version.

## 2. Agree the language and observation seam

The word “submission” must mean the stable identity supplied to the agreed operation, not the spelling of a word, a button press, or an arbitrary timestamp chosen by the test. Record that distinction only where it improves shared understanding.

Propose the highest suitable existing interface through which both application use and verification can observe the rule. Describe what it catches and misses. For example, an application-level command could verify identity accounting and real persistent state while leaving a graphical interface untested. If no existing interface can express the required observation honestly, make that limitation a design decision rather than silently substituting a fake.

A restart helper must replace the runtime while retaining durable application data. Creating a fresh test object around an in-memory map does not establish the requirement. Verify that reads after restart reach the actual persisted outcome.

## 3. Keep the specification proportional

The six-row table is already an independent source of expected values. The exercise is not an invitation to produce a speculative product roadmap. Ask only questions that change the agreed behaviour or a consequential implementation decision.

If this fits one focused session, a brief approved note may suffice. If it crosses sessions, preserve the agreed observations, seam, exclusions, code references and remaining decisions in a stable artifact. The spec should record settled choices, not invent new ones while summarising the conversation.

Any example design should be clearly conditional. “Reuse the existing accepted-event journal if it is the authoritative durable identity record” is useful guidance. “Add a new journal service” before inspecting the system is an unsupported architecture choice.

## 4. Choose a verifiable slice

Start from the next missing observable outcome, not a list of filenames to generate. A first path can establish A producing 10. Subsequent cycles expose immediate replay, persistence, post-restart replay and B. The precise ordering is our exercise design, not Pocock's claim about this feature.

If a ticket needs to span several files to make one behaviour observable, that is not automatically too large. Conversely, producing a controller file, a storage file and a test file as separate tickets does not make each independently useful. Each ticket should say what a reviewer can run and see.

The task graph may be almost entirely sequential because the same state rule is being changed. That is a reason to keep one implementer, not a failure to use available parallelism. A separate read-only investigation may be independent; its findings still need review before becoming implementation assumptions.

## 5. Implement red-green at the agreed seam

Write a focused assertion from the table and run it. A failure such as expected 10 but received 20 after replay is useful evidence only if the replay actually reached the application. A mock that updates its own expected total proves little about the product.

Make the next behaviour pass without changing the expected totals. Run relevant focused checks while working and the appropriate broader regression checks before claiming completion. Record any edits to fixtures, test setup or configuration; these can accidentally weaken the observation just as production changes can fix it.

The current published reference separates implementation red-green cycles from later refactoring review. In this adaptation, resist a broad redesign in the middle of chasing a failing outcome unless the baseline demonstrates that the behaviour cannot be made coherent without it. If a structural decision is necessary, explain it and keep the semantic change traceable.

## 6. Review the two axes separately

Pin the comparison point so the diff under review is unambiguous. On the standards axis, inspect the documented repository rules and distinguish mechanical violations from judgement calls. On the specification axis, walk the six observations and exclusions.

A standards report should not silently become a product acceptance report. A specification report should not approve an unrelated framework migration merely because the balance is correct. Keep both lists visible, including an explicit absence of a specification if one cannot be found.

Ask the implementer to explain how an accepted A changes durable state and how the restarted process recognises it. The human reviews that explanation against code and executed evidence. Two agreeing model reports do not confer independent ground truth.

## 7. Refine structure only for an earned benefit

If the passing implementation scatters identity and reward coordination across callers, consider a smaller interface that concentrates the responsibility. If the existing abstraction already does this clearly, adding another wrapper may make navigation worse.

For a proposed refactor, name the concrete comprehension or changeability problem, the intended transformation and the checks that preserve behaviour. Keep its diff distinguishable from changes to the reward rule. Repeat the common observations afterwards if the relevant path changed.

## 8. Integrate and improve the environment

Use the target repository's normal integration process; this guide does not authorise publishing, deployment, or external communication. A coherent local branch and passing scoped checks are evidence, but not an invented production release policy.

Retain a compact task record with the current revision, outcomes, exact commands, observed limitations and unresolved questions. Reference stable artifacts instead of pasting copies into multiple handoffs. Agent handoff state and the reward system's durable state remain different concerns.

After a difficult session, identify one specific improvement justified by the record. A missing deterministic check may deserve a check; a hard-to-find file may need a navigation pointer. A generic rule added because the retrospective expects a full list is not automatically helpful. A human should decide whether a proposed control earns its permanent cost.

## Reusable prompts

These are original suggestions, not Pocock's private prompts.

### Inspect and agree a seam

```text
Inspect the existing submission entry point, identity handling, reward
update, persistence and checks. Run the focused baseline. Propose an
existing public seam for observing our rule, stating what it catches
and misses. Separate facts from assumptions; do not redesign yet.
```

### Implement the next agreed outcome

```text
Our observations are 0; A -> 10; replay A -> 10; real runtime restart
then read BEFORE replay -> 10; replay A after restart -> 10; new B -> 20.
Implement only the next missing behaviour at the agreed seam. Keep
expected values independent of the implementation. Report actual
commands and results and any test, fixture or configuration edits.
No new UI, network, concurrency or framework requirement is implied.
```

### Review without blending the verdicts

```text
Review the diff against the specified starting revision. Report repo
standards findings separately from reward-specification findings.
Check that restart persistence and duplicate identity are observed
separately. Identify unrequested scope and explain any proposed
refactor. Do not treat a passing axis as cancelling a failing one.
```

## First practical lab

Keep the starting revision, a seam note, the six-row table, baseline output, an implementation diff, real check results and two separate review lists. Explain the state transition and one untested condition without the assistant.

A later execution comparison must reuse the same starting code, environment, acceptance scope and trial protocol, including review/rework cost. This written application is not a productivity experiment or evidence of a winning method.
