---
title: Hamel Husain — common task and product-eval lab
parent: Hamel Husain
nav_order: 2
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
---

> **Scope update — 26 October 2026:** Start with [recent AI evidence](recent-ai.md). The material below retains earlier principles, dated reports and our optional adaptations. It must not be read as a complete current personal AI workflow.

# A reward boundary, then a separate AI-quality question

[Profile](index.md) · [Research](research.md) · [Source findings](sources.md)

**Suggested adaptation.** This is an original teaching exercise, not a feature Husain demonstrated or an observed private development session. It uses his evaluation lens without pretending an exact software invariant requires a model judge. A separate optional AI-product illustration follows; its results must not be combined with the shared task.

## The fixed task

A request may arrive repeatedly. Award **10 points once per submission ID**. The successful award survives runtime restart. A new submission ID is a separate event.

The starting language, storage, application interface and test runner are unknown. Use an isolated account beginning at zero. Do not add UI, network, concurrency, load or model-quality requirements to the common scope.

| Step | Action | Expected balance | What is independently observed |
|---|---|---|---|
| 0 | Read initial account | 0 | Known fixture state |
| 1 | Deliver submission A | 10 | The valid event is accepted |
| 2 | Deliver A again | 10 | Immediate replay does not re-award |
| 3 | Restart runtime retaining durable data, then read before any replay | 10 | The prior successful award persists |
| 4 | Deliver A again after restart | 10 | Duplicate identity also persists |
| 5 | Deliver new submission B | 20 | A distinct event is not suppressed |

Read at step 3 **before** step 4. A broken implementation could lose everything, then re-award A to produce 10 again. A combined restart/replay assertion would miss the lost reward. Similarly, a handler that refuses all subsequent submissions might pass replay checks but fail B.

## Step 1 — Establish the observation path

Inspect the actual entry point, submission identity, balance update and success signal. Determine where durable data lives. Run existing relevant checks and record failures already present before any change.

Create an evidence map:

| Question | Evidence to locate | Example of insufficient evidence |
|---|---|---|
| Did A arrive twice? | Two actual submissions at the supported boundary | The fixture called its own replay helper but never reached the application |
| What balance exists? | State read through a valid application or storage observation | A test-owned variable calculated the expected answer |
| Did runtime state change? | A fresh process or equivalent real runtime replacement | Renaming a variable inside one test object |
| Was durable data retained? | The same durable records survive the replacement | A fresh empty fixture silently replaced the store |

The concrete commands depend on the target. Do not invent a database or network service merely to make the example resemble a particular tool’s demo.

## Step 2 — Separate product intent from investigation

The six expected balances are already agreed. Ask questions only where the existing system prevents a meaningful observation or has a conflicting documented rule. Do not allow an agent to turn “once per submission ID” into “once while this process is running.”

Keep a small record containing the task, code revision, relevant files, observed starting behaviour and unresolved assumptions. A human approves the meaning of the contract. The agent can help organise evidence, but it does not choose a different economy.

For a deterministic rule, error discovery does not mean waiting for a large production dataset before checking a known requirement. Here, the useful discovery is whether the current implementation or its test wiring violates the supplied contract.

## Step 3 — Choose objective checks

Implement checks that observe the six outcomes in the real target environment. A model should not grade whether an integer equals ten. If the system returns both a balance and explanatory text, check the balance independently; prose that sounds correct cannot compensate for a wrong stored total.

Challenge a check with an obvious defect in a disposable working state. For example, use a version that forgets processed IDs at restart. Step 4 should notice. Use a version that loses balances but remembers nothing; step 3 should notice before A is resubmitted. Restore the intended implementation after the sensitivity investigation.

These deliberate defects test the observation design. They do not prove completeness for all crashes, parallel writers or storage failures. Those are different requirements and remain excluded from this common task.

## Step 4 — Make and review one bounded change

Choose one missing behaviour based on the baseline. Change only the relevant path, preserving the existing architecture where suitable. Ask the agent to report edits to assertions, fixtures and configuration as well as product code.

The review should be able to explain why the reward and accepted identity survive the runtime boundary. The implementation might need one durable record or an existing transactional mechanism. Its exact shape follows the application, not a generic recipe in this guide.

If the focused check passes, run relevant existing regression checks too. A successful new case does not justify deleting inconvenient old assertions. If intent legitimately changes, record that decision before rewriting the expected outcomes.

## Step 5 — Keep useful evidence, then integrate

Record the starting revision, changed revision, environment, commands and six actual observations. Keep a short explanation of what remains unverified. Follow the repository’s existing integration/release process; this exercise neither grants deployment permission nor establishes Husain’s private release policy.

A later comparison of working procedures would need the same starting state and environment for every attempt. Include review and rework effort in its record. Reading these profiles alone provides no execution-based ranking.

## Optional AI-product illustration

This is a separate extension, not a seventh requirement of the reward task.

Suppose an AI component drafts a customer-facing explanation of reward outcomes. The ledger remains deterministic; the wording may be wrong, confusing or misleading even when the balance is correct. Do not merge that quality problem with the balance checks.

### Discover what needs interpretation

Collect representative explanation examples with the relevant accepted/replayed event and actual balance. A reviewer should see those facts next to the generated text. Begin with free-form observations: “says another reward was granted after replay” is more actionable than a generic low-helpfulness score.

Use the observations to propose specific criteria. One criterion might be objective if the output is structured; another might require interpreting whether the explanation misleads a reader. Keep separate results rather than letting an easy formatting check disguise a difficult meaning failure.

### Validate any judge before relying on it

Have the domain owner review examples with rationales. Separate examples used in a judge prompt, examples used to refine it, and a final assessment set. Decide which class means positive. A report should describe false acceptance and false rejection in ordinary language as well as its chosen metric names.

When the judge disagrees, inspect the underlying example. The judge may be wrong, the human label may be inconsistent, or the criterion may be underspecified. Do not automatically change a human label to match a confident generated critique.

This lab makes no universal sample-size or alignment threshold claim. Choose evidence proportionate to the use and report uncertainty. A judge that aligns with current labels may still fail on a new product behaviour or a shifted input population.

### Keep action controls separate from evaluation

If explanatory text is sampled after delivery, its evaluator cannot prevent a bad message already seen by a customer. Any requirement to block an action before it occurs needs a separately designed control path. Adding a slower judge to every request can create a latency or availability tradeoff; that decision is not established by a high offline score.

## Reusable prompts

These are original prompts for the exercises, not Husain’s published prompts.

### Inspect the deterministic boundary

```text
Inspect the reward entry point, identity handling, balance updates and
persistence. Establish the baseline using the existing runner. Our fixed
sequence is 0; A10; replayA10; runtime restart then read10 BEFORE replay;
replayA10; B20. Report observed facts and unknowns separately.
Do not add a model judge, network, UI or concurrency requirement.
```

### Implement and explain the result

```text
Make the next missing agreed outcome work. Preserve the expected totals
and report changes to tests, fixtures, configuration and product code.
Show the real commands and results. Explain how restart replaced runtime
state while preserving durable reward and identity data. Identify what
our checks do not establish, and follow the existing integration process.
```

### Prepare an optional AI-output review

```text
For this separate explanation-quality exercise, prepare a small review
view showing generated text beside the actual event and stored result.
Let the domain owner leave observations before proposing a failure
rubric. Distinguish objective checks from interpretive criteria.
Do not convert guessed failure categories into trusted automated judges.
```

### Audit an evaluator

```text
Explain the evaluator's criterion, positive-label convention, data
provenance and train/development/final-assessment separation. Inspect
human disagreements. Report false acceptance and false rejection,
uncertainty and relevant slices. Do not tune on the final assessment
or treat a point score as proof that the entire product is safe.
```

## First practical lab

Keep the six balance observations, one reviewed diff, command results and a written explanation of the runtime boundary. If you also try the AI-product extension, store its examples, criteria and results separately. The first demonstrates a deterministic state rule; the second explores a product-quality judgment. Neither should be used as a substitute for the other.
