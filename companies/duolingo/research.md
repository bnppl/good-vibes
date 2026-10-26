---
parent: Duolingo
last_updated: '2026-10-26'
research_checked: '2026-10-26'
research_cutoff: '2026-10-26'
evidence_since: '2025-10-01'
last_read: null
status: unread
cache_schema: 1
title: Duolingo — detailed AI-assisted development research
nav_order: 1
---

# Duolingo — detailed AI-assisted development research

[Profile](index.md) · [Source register](sources.md) · [Workflow](workflow.md) · [Slides](slides.md)

## Scope and reading guide

Duolingo iOS and DevEx AI cases; reported company primitives are distinct from team-specific operations. The question is how software is built using AI, not how an end-user AI feature is designed. Start with the concrete case; use the claims below for the shared twelve-dimension comparison.

## The concrete case

The June iOS account starts with experimentation rather than immediate scheduled generation. Engineers inspected early failures before selecting suitable files and automating the work. Its published chronology places local work in February and scheduled workflows in March–April 2026. The publication date is confirmed by the original page’s `article:published_time` and JSON-LD metadata. [S02](sources.md#s02)

## What surrounds generation

The December platform article shows how a repeatable task becomes a shareable workflow. This is useful organisational infrastructure: the task interface can remain stable while the underlying agent changes. Its next-step list is not evidence that all integrations already existed. [S01](sources.md#s01)

The September DevEx AI transcript adds a different decision: teach engineers to understand and critique AI assistance before expanding low-risk approval automation. That programme and the iOS test-PR manager are distinct systems with distinct scopes. [S03](sources.md#s03)

## What failed and what remains unknown

The iOS case is unusually useful because it records toolchain mismatches, coupling and review capacity. It does not establish the precision of every generated test, the bank of protected acceptance tests, or an organisation-wide production-release policy. These distinctions matter more than generated line counts. [S02](sources.md#s02)

The old MIT spaced-repetition release is background evidence of an open-source connection. It has no role in supporting current coding-agent claims. [S04](sources.md#s04)

## Comparison claims

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated · Reported team use.** The iOS test-generation case targets verification capacity as code generation accelerates.

Team case; this does not prove a company-wide bottleneck or quality gain.

Publication / revision: **2026-06-24**. Practice: February–June 2026 account; automation live in March, described as autonomous by April. Checked: 2026-10-26. Source format: Authored engineering article; publication confirmed in HTML metadata.

[Primary source](https://blog.duolingo.com/ai-ios-unit-test-generation-pipeline/) · [Cached findings](sources.md#s02)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Stated · Reported company use.** Reusable workflow definitions supply the repository, prompt and task parameters.

Task instructions are not a complete product-requirements contract.

Publication / revision: **2025-12-11**. Practice: Workflows operating before December publication; exact start dates unknown. Checked: 2026-10-26. Source format: Authored engineering article.

[Primary source](https://blog.duolingo.com/agentic-workflows/) · [Cached findings](sources.md#s01)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Stated · Reported team use.** Backfill selects candidate files and avoids duplicate or recently abandoned work.

Selection heuristics are specific to the reported iOS pipeline.

Publication / revision: **2026-06-24**. Practice: February–June 2026 account; automation live in March, described as autonomous by April. Checked: 2026-10-26. Source format: Authored engineering article; publication confirmed in HTML metadata.

[Primary source](https://blog.duolingo.com/ai-ios-unit-test-generation-pipeline/) · [Cached findings](sources.md#s02)

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Stated · Reported team use.** CI feedback drives repair; Linux workers cannot locally validate Swift builds.

Passing CI and added coverage do not prove meaningful assertions.

Publication / revision: **2026-06-24**. Practice: February–June 2026 account; automation live in March, described as autonomous by April. Checked: 2026-10-26. Source format: Authored engineering article; publication confirmed in HTML metadata.

[Primary source](https://blog.duolingo.com/ai-ios-unit-test-generation-pipeline/) · [Cached findings](sources.md#s02)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Stated · Reported team use.** Testing failures exposed concrete coupling; protocol-based seams and linting addressed it.

A reported design change, not a universal MVVM prescription.

Publication / revision: **2026-06-24**. Practice: February–June 2026 account; automation live in March, described as autonomous by April. Checked: 2026-10-26. Source format: Authored engineering article; publication confirmed in HTML metadata.

[Primary source](https://blog.duolingo.com/ai-ios-unit-test-generation-pipeline/) · [Cached findings](sources.md#s02)

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated · Reported team use.** Human engineers reviewed and approved the reported merged test PRs.

Automated lifecycle management did not eliminate human approval.

Publication / revision: **2026-06-24**. Practice: February–June 2026 account; automation live in March, described as autonomous by April. Checked: 2026-10-26. Source format: Authored engineering article; publication confirmed in HTML metadata.

[Primary source](https://blog.duolingo.com/ai-ios-unit-test-generation-pipeline/) · [Cached findings](sources.md#s02)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Stated · Reported company use.** Temporal coordinates retryable activities for multi-step coding workflows.

Durability of orchestration is separate from correctness of generated code.

Publication / revision: **2025-12-11**. Practice: Workflows operating before December publication; exact start dates unknown. Checked: 2026-10-26. Source format: Authored engineering article.

[Primary source](https://blog.duolingo.com/agentic-workflows/) · [Cached findings](sources.md#s01)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Stated · Reported team use.** Per-file and per-PR records preserve retry and cooldown state outside chat.

Application persistence and a complete agent memory system are different concerns.

Publication / revision: **2026-06-24**. Practice: February–June 2026 account; automation live in March, described as autonomous by April. Checked: 2026-10-26. Source format: Authored engineering article; publication confirmed in HTML metadata.

[Primary source](https://blog.duolingo.com/ai-ios-unit-test-generation-pipeline/) · [Cached findings](sources.md#s02)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Stated · Reported company use.** A shared coding library wraps Codex CLI and Claude Code SDK.

Names describe the published architecture, not every employee’s installed setup.

Publication / revision: **2025-12-11**. Practice: Workflows operating before December publication; exact start dates unknown. Checked: 2026-10-26. Source format: Authored engineering article.

[Primary source](https://blog.duolingo.com/agentic-workflows/) · [Cached findings](sources.md#s01)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Stated · Reported team use.** The lifecycle manager assigns reviewers and enables auto-merge after CI succeeds.

The reported merged PRs still required human approval; production deployment is not established.

Publication / revision: **2026-06-24**. Practice: February–June 2026 account; automation live in March, described as autonomous by April. Checked: 2026-10-26. Source format: Authored engineering article; publication confirmed in HTML metadata.

[Primary source](https://blog.duolingo.com/ai-ios-unit-test-generation-pipeline/) · [Cached findings](sources.md#s02)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Stated · Reported team use.** An auto-fix agent changed production files during a test-only task.

The account reports tighter file controls as work in progress, not an enforced universal boundary.

Publication / revision: **2026-06-24**. Practice: February–June 2026 account; automation live in March, described as autonomous by April. Checked: 2026-10-26. Source format: Authored engineering article; publication confirmed in HTML metadata.

[Primary source](https://blog.duolingo.com/ai-ios-unit-test-generation-pipeline/) · [Cached findings](sources.md#s02)

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Stated · Reported team use.** DevEx AI combines education and feedback with risk-based review changes.

Practitioner transcript; reported benefits are contextual, not a controlled causal result.

Publication / revision: **2026-09-16 (page date; recording date not independently established)**. Practice: Retrospective of DevEx AI work; exact experiment/session dates unknown. Checked: 2026-10-26. Source format: Practitioner talk transcript.

[Primary source](https://www.infoq.com/presentations/duolingo-ai-literacy-code-review/) · [Cached findings](sources.md#s03)

## Transfer and uncertainty

The optional exercise in [workflow notes](workflow.md#optional-practice) is our adaptation. It neither reproduces the company’s private environment nor measures its effectiveness. Compare the same observable task and risk level before comparing speed, autonomy or cost. Tool names, policy statements, executed checks and observed outcomes are different kinds of evidence.
