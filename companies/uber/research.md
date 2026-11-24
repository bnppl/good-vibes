---
title: Uber — detailed research
parent: Uber
nav_order: 1
last_updated: '2026-11-24'
research_checked: '2026-11-24'
research_cutoff: '2026-11-24'
evidence_since: '2025-10-01'
last_read: null
status: unread
cache_schema: 1
---

# Uber: detailed AI-assisted development research

[Profile](index.md) · [Source register](sources.md) · [Workflow](workflow.md) · [Slides](slides.md)

Baseline reviewed **26 October 2026**; November skill evidence inspected **24 November 2026**. PRD evaluation and managed engineering-agent platform accounts; not every Uber team’s private delivery process. Recent publication does not date every underlying practice.

## A real sequence: strengthen intent, then measure execution

The May PRD evaluator and August software-factory account describe different stages of development. Their relationship here is an analytical map, not a claim that every Uber change passes through one integrated pipeline. The PRD tool retrieves context and returns prioritized gaps before people make the expensive decision. The factory account describes the economics and engineering checks around execution. [S02](sources.md#s02) · [S01](sources.md#s01)

The useful distinction is between making an agent call cheaper and making a completed change better. A team could lower token cost while raising retries, review load or reverts. This cache therefore compares verification quality and outcome cost, rather than turning agent-attributed PR share into a productivity score.

## Model selection is an engineering decision

The reported reviewer benchmark uses known-defect PRs. That supplies a concrete way to compare a cheaper model against a more capable model without treating the vendor’s general benchmark as the answer. The article’s context limits, caching and tool-routing defaults are dated operational choices, not timeless recommendations. [S01](sources.md#s01)

## What the evidence cannot settle

The sources do not establish a single mandatory increment size, design/refactoring cadence, private production approval matrix or complete effective permission inventory. Cadence’s public source establishes a useful engineering background, not the code or runtime of Uber’s internal managed agents. [S03](sources.md#s03)

## Comparison claims

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated · Reported company use.** Optimize engineering outcomes and unit costs together.

Reported internal metrics, not an independent productivity experiment.

Published / revision: **2026-08-27**. Practice: February–August 2026 measurements; exact task dates not established. Checked: 2026-10-26. Format: Authored engineering article.

[Source record](sources.md#s01) · [Original source](https://www.uber.com/gb/en/blog/efficient-software-factory/)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Stated · Reported team use.** AI critiques PRDs before existing expert approval.

The evaluator strengthens an input artifact; it does not make the final approval decision.

Published / revision: **2026-05-12**. Practice: Trial before publication; exact sessions not established. Checked: 2026-10-26. Format: Authored engineering article.

[Source record](sources.md#s02) · [Original source](https://www.uber.com/us/en/blog/first-pass-prd/)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Stated · Reported company use.** Primary models decompose work; cheaper subagents handle bounded tasks.

An August routing strategy, not a fixed staffing model or universal task size.

Published / revision: **2026-08-27**. Practice: February–August 2026 measurements; exact task dates not established. Checked: 2026-10-26. Format: Authored engineering article.

[Source record](sources.md#s01) · [Original source](https://www.uber.com/gb/en/blog/efficient-software-factory/)

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Stated · Reported company use.** Reviewer models are benchmarked against real PRs with known bugs.

Precision, recall, noise and latency are task measures, not proof of bug-free code.

Published / revision: **2026-08-27**. Practice: February–August 2026 measurements; exact task dates not established. Checked: 2026-10-26. Format: Authored engineering article.

[Source record](sources.md#s01) · [Original source](https://www.uber.com/gb/en/blog/efficient-software-factory/)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Not established · Not established.** Recent AI-assisted development evidence for this dimension is not established in this reviewed cache.

The bounded source review does not establish a complete current organisational policy. A gap does not imply the practice is absent.

Published / revision: **Not established**. Practice: Not established. Checked: 2026-10-26. Format: Not established.

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated · Reported team use.** Humans retain high-cost product approval and domain judgment.

This concerns PRD review; exact code-review depth differs by managed workflow.

Published / revision: **2026-05-12**. Practice: Trial before publication; exact sessions not established. Checked: 2026-10-26. Format: Authored engineering article.

[Source record](sources.md#s02) · [Original source](https://www.uber.com/us/en/blog/first-pass-prd/)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Stated · Reported company use.** Managed agents handle coding, CI repair and maintenance with escalation.

No blanket unattended production-release authority is established.

Published / revision: **2026-08-27**. Practice: February–August 2026 measurements; exact task dates not established. Checked: 2026-10-26. Format: Authored engineering article.

[Source record](sources.md#s01) · [Original source](https://www.uber.com/gb/en/blog/efficient-software-factory/)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Stated · Reported company use.** Gateway tools and graph-grounded context reduce repeated discovery.

An internal platform account; private retrieval rules and every memory layout were not inspected.

Published / revision: **2026-08-27**. Practice: February–August 2026 measurements; exact task dates not established. Checked: 2026-10-26. Format: Authored engineering article.

[Source record](sources.md#s01) · [Original source](https://www.uber.com/gb/en/blog/efficient-software-factory/)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Stated · Reported company use.** A shared wrapper standardizes interactive agent configuration and cost visibility.

Specific defaults are dated and may change after publication.

Published / revision: **2026-08-27**. Practice: February–August 2026 measurements; exact task dates not established. Checked: 2026-10-26. Format: Authored engineering article.

[Source record](sources.md#s01) · [Original source](https://www.uber.com/gb/en/blog/efficient-software-factory/)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Stated · Reported company use.** Managed work is measured through merged PRs and other completed outcomes.

A complete approval, deployment and rollback policy remains unestablished.

Published / revision: **2026-08-27**. Practice: February–August 2026 measurements; exact task dates not established. Checked: 2026-10-26. Format: Authored engineering article.

[Source record](sources.md#s01) · [Original source](https://www.uber.com/gb/en/blog/efficient-software-factory/)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Stated · Reported company use.** Internal MCP traffic uses a gateway for authentication and policy.

Gateway presence does not establish every task’s effective permission set.

Published / revision: **2026-08-27**. Practice: February–August 2026 measurements; exact task dates not established. Checked: 2026-10-26. Format: Authored engineering article.

[Source record](sources.md#s01) · [Original source](https://www.uber.com/gb/en/blog/efficient-software-factory/)

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Stated · Reported company use.** Compare skill-assisted and no-skill runs with blind judging; retain outcome, trajectory and cost measures separately.

November 2026 internal report; no independent reproduction or fixed public model/harness/task sample. A/B canaries and per-model compilation are future work, not deployed guarantees.

Published / revision: **2026-11-23**. Practice: Marketplace and evaluation work before publication; exact ablation trial dates not established. Checked: 2026-11-24. Format: Authored engineering article.

[Source record](sources.md#s04) · [Original source](https://www.uber.com/us/en/blog/optimizing-ubers-agent-skills/)

## November 2026: skills have a retirement path

Uber reports replaying real prompts with and without skills in isolated environments, using blind answer comparisons alongside trajectory checks. Skill Workshop keeps intent in a spec and generates instructions and test prompts; failed maintenance PRs feed evaluation cases. A shared temporary commit-message file let concurrent sessions interfere with each other's PRs: a concrete isolation regression to retain. [S04](sources.md#s04)

The article separates currently described evaluation from future A/B canaries and model-specific compilation. It does not publish a fixed reproducible model/harness/sample for a general productivity claim. The invocation headline measures activity, not accepted delivery. Our adaptation is to retest a skill after model changes and keep, shorten or retire it based on outcomes, without imposing Uber's suggested evaluation mix as a standard.

**Claim history:** C12 previously used the August outcome-cost account ([S01](sources.md#s01)); that remains background support. November evidence extends the same evaluation dimension rather than reassigning the claim ID. Private Skill Workshop/aifx installation and company-wide compliance were not verified.
