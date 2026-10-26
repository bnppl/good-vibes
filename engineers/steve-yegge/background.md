---
title: Steve Yegge — comparison history
parent: Steve Yegge
nav_order: 9
last_updated: '2026-10-26'
nav_exclude: true
---

# Comparison history

These fields and slide notes preceded the publication-window review on 26 October 2026. They are retained for traceability, not evidence of current AI practice. [Current evidence](recent-ai.md).

## Previous comparison fields

### C01 · Goal and bottleneck

The September 2026 interview-page summary attributes an emphasis on useful outcomes, human attention and downstream capacity to Yegge.

Primary episode-page editorial account, not a complete independently checked transcript or controlled effectiveness result.

[Original supporting source](https://re-cinq.com/podcast/steve-yegge-software-factory)

### C02 · Requirements and specification

His August 2026 Wheelhouse account describes conversations and designs becoming structured work records.

August personal account; no mandatory executable-spec-only rule established.

[Original supporting source](https://yegge.ai/essays/the-shape-of-things-to-come/)

### C03 · Increment and planning

His January 2026 retrospective describes task decomposition and observation-led experiments with agent-friendly tool interfaces.

January retrospective, not a fixed current task size or planning horizon.

[Original supporting source](https://steve-yegge.medium.com/the-future-of-coding-agents-e9451a84207c)

### C04 · Testing and verification

His December 2025 guidance advocates recurring AI inspection and tests; a universal test-first cadence is not established.

December guidance; regenerated tests require independent contract review in our adaptation.

[Original supporting source](https://steve-yegge.medium.com/six-new-tips-for-better-coding-with-agents-d4e9c86e42a9)

### C05 · Design and refactoring

His December 2025 code-health advice accepts replacing generated code and tests; behavioural equivalence still needs evidence.

Historical personal advice; not proof that replacement preserves behaviour or fits every legacy system.

[Original supporting source](https://steve-yegge.medium.com/six-new-tips-for-better-coding-with-agents-d4e9c86e42a9)

### C06 · Human understanding and review

His August 2026 account predicts less human diff review in future but explicitly retains it in the short term.

Prediction and time-bound advice; not a present universal ban on human review.

[Original supporting source](https://yegge.ai/essays/the-shape-of-things-to-come/)

### C07 · Agent autonomy and coordination

January 2026 introduces Gas Town fleet orchestration; his August 2026 personal account describes private, bespoke Wheelhouse.

January Gas Town launch must not be presented as his complete October setup.

[Original supporting source](https://yegge.ai/essays/the-shape-of-things-to-come/)

### C08 · Context and durable state

The Beads README inspected in October 2026 describes dependency-aware work and durable project facts; this is public tool documentation.

Current project documentation, not independently executed or proof of every private setting.

[Original supporting source](https://github.com/gastownhall/beads)

### C09 · Tooling and environment

His April 2026 Gas City endorsement credits Knutsen and Sells; the later private Wheelhouse account is a separate tool history.

April endorsement credits Knutsen and Sells; later private practice is separately dated.

[Original supporting source](https://yegge.ai/essays/welcome-to-gas-city/)

### C10 · Integration and release

The public Gas Town README inspected in October 2026 describes a merge queue and verification gates, not his complete private release policy.

Does not establish the full current private release policy.

[Original supporting source](https://github.com/gastownhall/gastown)

### C11 · Boundaries and safeguards

The September 2026 episode-page summary reports mechanical constraints and bounded adoption; complete private access controls are not established.

Editorial account of the interview, not a complete independently checked transcript or an audit of current permissions.

[Original supporting source](https://re-cinq.com/podcast/steve-yegge-software-factory)

### C12 · Evaluation and tradeoffs

The September 2026 episode-page account emphasises outcomes, quality debt and downstream capacity rather than activity counts.

Editorial interview summary and anecdotes, not a controlled comparison. The useful evaluation focus is not a demonstrated universal productivity advantage.

[Original supporting source](https://re-cinq.com/podcast/steve-yegge-software-factory)

## Previous slide notes

# Steve Yegge — bite-sized ideas

Derived from cached research checked on 26 October 2026. Examples and proposed task checks are adaptations, not attributed demonstrations.

### Archived card 01

### A dated method

> **A launch post is a timestamp, not a permanent setup.**
>
> Yegge endorsed Gas City in April 2026, then described private Wheelhouse in August 2026. Those accounts should keep their dates. The second is not proof that the first tool has no value.

**In the wild:** Our comparison labels public ecosystem tools separately from reported personal practice.

**Takeaway:** Compare positions at comparable dates.

[Optional practice: common lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#preserve-the-chronology) · [Cached claims](index.md#comparison-evidence)

---

### Archived card 02

### The interface the agent reaches for

> **A tool can be clever and still be awkward for an agent.**
>
> His January 2026 follow-up describes improving interfaces by watching agent behaviour. This is a reported design practice, not a guarantee that any particular tool will be adopted.

**In the wild:** Suggested adaptation: observe where a worker gets stuck before inventing another instruction.

**Takeaway:** Inspect the interaction before adding complexity.

[Optional practice: common lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#tools-can-fail-to-converge) · [Cached claims](index.md#comparison-evidence)

---

### Archived card 03

### Maintenance has a budget

> **Feature output can hide a growing repair bill.**
>
> Yegge’s December 2025 advice reserves substantial effort for code health. His percentages are heuristics, not validated targets for every team.

**In the wild:** Suggested adaptation: record review, repair and coordination time beside time spent implementing the reward rule.

**Takeaway:** Measure the whole delivery effort.

[Optional practice: common lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#code-health-competes-with-feature-throughput) · [Cached claims](index.md#comparison-evidence)

---

### Archived card 04

### The outcome that counts

> **A busy fleet can still miss the useful result.**
>
> The September 2026 interview-page summary reports an emphasis on outcomes and downstream limits. Reported scale is context for his experiments, not comparative proof of productivity.

**In the wild:** Our reward feature is useful only when the observed balances satisfy the agreed rule.

**Takeaway:** Ask what improved for the user.

[Optional practice: common lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#approach-in-brief) · [Cached claims](index.md#comparison-evidence)

---

### Archived card 05

### A task worth handing over

> **Memory should preserve the question and the evidence.**
>
> In our suggested reward workflow, the task record retains the contract, baseline, owner, dependencies and verification. A chat completion message alone cannot tell the next session what was established.

**In the wild:** The record distinguishes “A replays correctly in memory” from “A remains a duplicate after restart.”

**Takeaway:** Carry observations forward, not just confidence.

[Optional practice: common lab](workflow.md#first-practical-lab) · [Detailed evidence](workflow.md#step-2-turn-ambiguity-into-a-durable-work-item) · [Cached claims](index.md#comparison-evidence)

---

### Archived card 06

### A replacement needs a reference

> **New green tests can agree with a new mistake.**
>
> Yegge’s December 2025 advice describes regenerating tests after changes. In our adaptation, preserving an independent acceptance contract is how a rewrite can be checked against the original intent.

**In the wild:** Internal tests change, but replay A must still leave 10 points.

**Takeaway:** Review changed expectations as carefully as changed code.

[Optional practice: common lab](workflow.md#first-practical-lab) · [Detailed evidence](workflow.md#step-5-review-the-contract-and-the-candidate-separately) · [Cached claims](index.md#comparison-evidence)

---

### Archived card 07

### The restart read

> **Replay can conceal a lost reward.**
>
> Our common exercise checks the balance immediately after restart, before resubmitting A. Otherwise a lost balance followed by another award could produce a misleading final total of 10. This is our proposed check.

**In the wild:** Restart → read 10 → replay A → read 10.

**Takeaway:** Observe persistence separately from duplicate protection.

[Optional practice: common lab](workflow.md#first-practical-lab) · [Detailed evidence](workflow.md#the-observation-contract) · [Cached claims](index.md#comparison-evidence)

---

### Archived card 08

### Earn the parallelism

> **Another worker needs an independent job.**
>
> For our small reward feature, a scoped investigator or reviewer may reduce uncertainty. Several workers editing the same path may instead add integration work. This is a suggested adaptation, not a Yegge worker-count rule.

**In the wild:** One worker traces persistence while another checks the agreed outcomes.

**Takeaway:** Name the uncertainty and the ownership boundary.

[Optional practice: common lab](workflow.md#first-practical-lab) · [Detailed evidence](workflow.md#step-3-parallelism-must-have-a-useful-boundary) · [Cached claims](index.md#comparison-evidence)

---
