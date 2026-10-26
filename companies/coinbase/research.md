---
title: Coinbase — detailed research
parent: Coinbase
nav_order: 1
last_updated: '2026-10-26'
research_checked: '2026-10-26'
research_cutoff: '2026-10-26'
evidence_since: '2025-10-01'
last_read: null
status: unread
cache_schema: 1
---

# Coinbase: AI-assisted engineering research

[Profile](index.md) · [Sources](sources.md) · [Workflow](workflow.md) · [Slides](slides.md)

## Scope and chronology

Internal tooling Figma-to-Code case and the May 2026 Mux adoption account; not all Coinbase engineering or trading software. The evidence was inspected on **26 October 2026**. These are authored reports, not independently executed experiments. No complete private setup or uniform policy is assumed.

## A full article now replaces the archive-only lead

The earlier shortlist only had an archive summary. The complete June case supplies a more useful chain: repeated internal-tooling patterns, an initial review problem, an orchestration redesign and documented human corrections. This makes it possible to examine the engineering approach rather than repeat a speed headline. [S01](sources.md#s01)

## Separate generation from concurrency

The Figma-to-Code workflow addresses a repeatable class of UI/backend construction. Mux addresses managing multiple sessions without repeatedly stashing and changing branches. These are separate accounts and should not be combined into a fictitious single mandatory harness. The Mux article explicitly warns that its users may already be unusually productive and inclined toward AI. [S02](sources.md#s02)

## What transfers, and what does not

Our synthesis is that reference quality, reviewable output size and an independent feedback mechanism are more informative adoption variables than the number of simultaneous agents. That interpretation should be tested in a local codebase. It does not establish that Coinbase’s internal rules are generally reusable or that a successful prototype automatically scales to novel business logic.

## Remaining gaps

The case does not provide a complete current permissions/sandbox policy, a private model-routing inventory or all production release/rollback gates. A rules document mentioning permissions in generated software is not itself a permission boundary on the coding agent. Public repositories provide engineering background, but do not make the internally described tooling reproducible from this cache alone.

## Comparison evidence

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated · Reported company use.** Address orchestration capacity after agents reduce implementation waiting time.

The Mux account’s diagnosis, not a controlled company-wide bottleneck result.

Source format: Authored engineering account. Published / revision: **2026-05-11**. Practice: Early-2026 rollout; reported adoption/output observations include April 2026. Checked: 2026-10-26.

[Primary source](https://www.coinbase.com/blog/coding-had-a-concurrency-problem-how-mux-helped-solve-it) · [Source register](sources.md#s02)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Stated · Reported team use.** Provide a real reference implementation, explicit rules and parameterised prompts.

Specific internal tooling case; quality depends on the example and omitted domain knowledge.

Source format: Authored engineering case study. Published / revision: **2026-06-03**. Practice: Internal tooling pilot and FCM feature before June publication; exact dates not stated. Checked: 2026-10-26.

[Primary source](https://www.coinbase.com/blog/automating-figma-to-code-at-coinbase) · [Source register](sources.md#s01)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Stated · Reported team use.** Approve a plan, scaffold shared structure, then implement focused slices.

Introduced after overly large initial PRs; not proof every Coinbase feature follows it.

Source format: Authored engineering case study. Published / revision: **2026-06-03**. Practice: Internal tooling pilot and FCM feature before June publication; exact dates not stated. Checked: 2026-10-26.

[Primary source](https://www.coinbase.com/blog/automating-figma-to-code-at-coinbase) · [Source register](sources.md#s01)

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Stated · Reported team use.** Run lint, typing, formatting, query and test gates before proposing changes.

Human reviewers still added missing edge-case coverage.

Source format: Authored engineering case study. Published / revision: **2026-06-03**. Practice: Internal tooling pilot and FCM feature before June publication; exact dates not stated. Checked: 2026-10-26.

[Primary source](https://www.coinbase.com/blog/automating-figma-to-code-at-coinbase) · [Source register](sources.md#s01)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Stated · Reported team use.** Reuse established structural patterns while leaving domain judgment to engineers.

A pattern-based internal tooling case, not a universal application architecture.

Source format: Authored engineering case study. Published / revision: **2026-06-03**. Practice: Internal tooling pilot and FCM feature before June publication; exact dates not stated. Checked: 2026-10-26.

[Primary source](https://www.coinbase.com/blog/automating-figma-to-code-at-coinbase) · [Source register](sources.md#s01)

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated · Reported team use.** Humans refine domain logic, UI detail, edge-case tests and integrations.

The article reports a successful case; review effectiveness was not independently measured.

Source format: Authored engineering case study. Published / revision: **2026-06-03**. Practice: Internal tooling pilot and FCM feature before June publication; exact dates not stated. Checked: 2026-10-26.

[Primary source](https://www.coinbase.com/blog/automating-figma-to-code-at-coinbase) · [Source register](sources.md#s01)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Stated · Reported company use.** Give concurrent agents separate worktrees, branches and terminals.

Isolation reduces workspace interference, not semantic integration conflicts.

Source format: Authored engineering account. Published / revision: **2026-05-11**. Practice: Early-2026 rollout; reported adoption/output observations include April 2026. Checked: 2026-10-26.

[Primary source](https://www.coinbase.com/blog/coding-had-a-concurrency-problem-how-mux-helped-solve-it) · [Source register](sources.md#s02)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Stated · Reported team use.** Version and review rules and prompts as shared engineering assets.

Internal artifacts described, not publicly inspected or executed here.

Source format: Authored engineering case study. Published / revision: **2026-06-03**. Practice: Internal tooling pilot and FCM feature before June publication; exact dates not stated. Checked: 2026-10-26.

[Primary source](https://www.coinbase.com/blog/automating-figma-to-code-at-coinbase) · [Source register](sources.md#s01)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Stated · Reported company use.** Use Mux alongside multiple coding tools rather than a single mandated agent.

May portfolio account; an exact October tool/model inventory is not established.

Source format: Authored engineering account. Published / revision: **2026-05-11**. Practice: Early-2026 rollout; reported adoption/output observations include April 2026. Checked: 2026-10-26.

[Primary source](https://www.coinbase.com/blog/coding-had-a-concurrency-problem-how-mux-helped-solve-it) · [Source register](sources.md#s02)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Stated · Reported team use.** Use draft scaffold and component PRs to make generated work reviewable.

Merge and launch remain human work; complete release and rollback controls are unknown.

Source format: Authored engineering case study. Published / revision: **2026-06-03**. Practice: Internal tooling pilot and FCM feature before June publication; exact dates not stated. Checked: 2026-10-26.

[Primary source](https://www.coinbase.com/blog/automating-figma-to-code-at-coinbase) · [Source register](sources.md#s01)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Not established · Not established.** A recent AI-assisted development policy for this dimension is not established in the reviewed accounts.

The bounded gap is not evidence of opposition, absence of practice or poor engineering. General principles cannot fill it.

Source format: Not established. Published / revision: **Not established**. Practice: Not established. Checked: 2026-10-26.

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Stated · Reported company use.** Interpret adoption/output comparisons with explicit self-selection caveats.

PR volume is not customer value and does not establish a causal tool effect.

Source format: Authored engineering account. Published / revision: **2026-05-11**. Practice: Early-2026 rollout; reported adoption/output observations include April 2026. Checked: 2026-10-26.

[Primary source](https://www.coinbase.com/blog/coding-had-a-concurrency-problem-how-mux-helped-solve-it) · [Source register](sources.md#s02)
