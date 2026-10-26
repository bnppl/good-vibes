---
title: Duolingo
parent: Companies
nav_order: 11
company_profile: true
company_id: duolingo
industry: Education technology
organisation_context: Public product company
research_checked: '2026-10-26'
evidence_since: '2025-10-01'
published: '2026-06-24'
evidence_kind: Reported team use
last_updated: '2026-10-26'
last_read: null
status: unread
canonical_name: Duolingo
has_children: true
cache_schema: 1
aliases: []
practice_focus: coding-workflows
focus_note: Duolingo iOS and DevEx AI cases; reported company primitives are distinct from team-specific operations.
research_cutoff: '2026-10-26'
tagline: Automate the test-PR lifecycle, then confront the review bottleneck.
summary: The strongest current case is an iOS test-generation system. A broader workflow platform and a DevEx AI
  conference account add context without making the iOS pipeline universal.
strengths:
- Durable workflows
- CI failure analysis
- Human approval
tools_summary: 'Published accounts: Temporal, shared Codex/Claude wrappers, S3 state and CI; not a private installed
  inventory.'
slides_url: /companies/duolingo/learn/
dimensions:
- id: D01
  title: Goal and bottleneck
  position: The iOS test-generation case targets verification capacity as code generation accelerates.
  evidence: Stated
  claim: C01
  detail: research.md#c01
  source: https://blog.duolingo.com/ai-ios-unit-test-generation-pipeline/
  checked: '2026-10-26'
  qualification: Team case; this does not prove a company-wide bottleneck or quality gain.
  evidence_kind: Reported team use
  published: '2026-06-24'
  practice_date: February–June 2026 account; automation live in March, described as autonomous by April
  source_id: S02
  ai_specific: true
  source_format: Authored engineering article; publication confirmed in HTML metadata
- id: D02
  title: Requirements and specification
  position: Reusable workflow definitions supply the repository, prompt and task parameters.
  evidence: Stated
  claim: C02
  detail: research.md#c02
  source: https://blog.duolingo.com/agentic-workflows/
  checked: '2026-10-26'
  qualification: Task instructions are not a complete product-requirements contract.
  evidence_kind: Reported company use
  published: '2025-12-11'
  practice_date: Workflows operating before December publication; exact start dates unknown
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
- id: D03
  title: Increment and planning
  position: Backfill selects candidate files and avoids duplicate or recently abandoned work.
  evidence: Stated
  claim: C03
  detail: research.md#c03
  source: https://blog.duolingo.com/ai-ios-unit-test-generation-pipeline/
  checked: '2026-10-26'
  qualification: Selection heuristics are specific to the reported iOS pipeline.
  evidence_kind: Reported team use
  published: '2026-06-24'
  practice_date: February–June 2026 account; automation live in March, described as autonomous by April
  source_id: S02
  ai_specific: true
  source_format: Authored engineering article; publication confirmed in HTML metadata
- id: D04
  title: Testing and verification
  position: CI feedback drives repair; Linux workers cannot locally validate Swift builds.
  evidence: Stated
  claim: C04
  detail: research.md#c04
  source: https://blog.duolingo.com/ai-ios-unit-test-generation-pipeline/
  checked: '2026-10-26'
  qualification: Passing CI and added coverage do not prove meaningful assertions.
  evidence_kind: Reported team use
  published: '2026-06-24'
  practice_date: February–June 2026 account; automation live in March, described as autonomous by April
  source_id: S02
  ai_specific: true
  source_format: Authored engineering article; publication confirmed in HTML metadata
- id: D05
  title: Design and refactoring
  position: Testing failures exposed concrete coupling; protocol-based seams and linting addressed it.
  evidence: Stated
  claim: C05
  detail: research.md#c05
  source: https://blog.duolingo.com/ai-ios-unit-test-generation-pipeline/
  checked: '2026-10-26'
  qualification: A reported design change, not a universal MVVM prescription.
  evidence_kind: Reported team use
  published: '2026-06-24'
  practice_date: February–June 2026 account; automation live in March, described as autonomous by April
  source_id: S02
  ai_specific: true
  source_format: Authored engineering article; publication confirmed in HTML metadata
- id: D06
  title: Human understanding and review
  position: Human engineers reviewed and approved the reported merged test PRs.
  evidence: Stated
  claim: C06
  detail: research.md#c06
  source: https://blog.duolingo.com/ai-ios-unit-test-generation-pipeline/
  checked: '2026-10-26'
  qualification: Automated lifecycle management did not eliminate human approval.
  evidence_kind: Reported team use
  published: '2026-06-24'
  practice_date: February–June 2026 account; automation live in March, described as autonomous by April
  source_id: S02
  ai_specific: true
  source_format: Authored engineering article; publication confirmed in HTML metadata
- id: D07
  title: Agent autonomy and coordination
  position: Temporal coordinates retryable activities for multi-step coding workflows.
  evidence: Stated
  claim: C07
  detail: research.md#c07
  source: https://blog.duolingo.com/agentic-workflows/
  checked: '2026-10-26'
  qualification: Durability of orchestration is separate from correctness of generated code.
  evidence_kind: Reported company use
  published: '2025-12-11'
  practice_date: Workflows operating before December publication; exact start dates unknown
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
- id: D08
  title: Context and durable state
  position: Per-file and per-PR records preserve retry and cooldown state outside chat.
  evidence: Stated
  claim: C08
  detail: research.md#c08
  source: https://blog.duolingo.com/ai-ios-unit-test-generation-pipeline/
  checked: '2026-10-26'
  qualification: Application persistence and a complete agent memory system are different concerns.
  evidence_kind: Reported team use
  published: '2026-06-24'
  practice_date: February–June 2026 account; automation live in March, described as autonomous by April
  source_id: S02
  ai_specific: true
  source_format: Authored engineering article; publication confirmed in HTML metadata
- id: D09
  title: Tooling and environment
  position: A shared coding library wraps Codex CLI and Claude Code SDK.
  evidence: Stated
  claim: C09
  detail: research.md#c09
  source: https://blog.duolingo.com/agentic-workflows/
  checked: '2026-10-26'
  qualification: Names describe the published architecture, not every employee’s installed setup.
  evidence_kind: Reported company use
  published: '2025-12-11'
  practice_date: Workflows operating before December publication; exact start dates unknown
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
- id: D10
  title: Integration and release
  position: The lifecycle manager assigns reviewers and enables auto-merge after CI succeeds.
  evidence: Stated
  claim: C10
  detail: research.md#c10
  source: https://blog.duolingo.com/ai-ios-unit-test-generation-pipeline/
  checked: '2026-10-26'
  qualification: The reported merged PRs still required human approval; production deployment is not established.
  evidence_kind: Reported team use
  published: '2026-06-24'
  practice_date: February–June 2026 account; automation live in March, described as autonomous by April
  source_id: S02
  ai_specific: true
  source_format: Authored engineering article; publication confirmed in HTML metadata
- id: D11
  title: Boundaries and safeguards
  position: An auto-fix agent changed production files during a test-only task.
  evidence: Stated
  claim: C11
  detail: research.md#c11
  source: https://blog.duolingo.com/ai-ios-unit-test-generation-pipeline/
  checked: '2026-10-26'
  qualification: The account reports tighter file controls as work in progress, not an enforced universal boundary.
  evidence_kind: Reported team use
  published: '2026-06-24'
  practice_date: February–June 2026 account; automation live in March, described as autonomous by April
  source_id: S02
  ai_specific: true
  source_format: Authored engineering article; publication confirmed in HTML metadata
- id: D12
  title: Evaluation and tradeoffs
  position: DevEx AI combines education and feedback with risk-based review changes.
  evidence: Stated
  claim: C12
  detail: research.md#c12
  source: https://www.infoq.com/presentations/duolingo-ai-literacy-code-review/
  checked: '2026-10-26'
  qualification: Practitioner transcript; reported benefits are contextual, not a controlled causal result.
  evidence_kind: Reported team use
  published: 2026-09-16 (page date; recording date not independently established)
  practice_date: Retrospective of DevEx AI work; exact experiment/session dates unknown
  source_id: S03
  ai_specific: true
  source_format: Practitioner talk transcript
comparison_group: education
---

# Duolingo: building software using AI

[Detailed research](research.md) · [Observed workflow and optional practice](workflow.md) · [Sources](sources.md) · [Slide notes](slides.md) · [Slideshow]({{ '/companies/duolingo/learn/' | relative_url }}) · [Company comparison](../comparison.md)

The strongest current case is an iOS test-generation system. A broader workflow platform and a DevEx AI conference account add context without making the iOS pipeline universal.

**Scope:** Duolingo iOS and DevEx AI cases; reported company primitives are distinct from team-specific operations.

The main evidence window is **1 October 2025–26 October 2026**. Publication, practice and inspection dates remain separate. These accounts were inspected, not independently executed. Open-source origin is background, not proof of a current internal coding-agent policy.

## Open-source and engineering background

The [historical half-life regression release](https://github.com/duolingo/halflife-regression) is an MIT research artifact, rather than evidence of recent coding-agent practice. Duolingo remains a deliberately weaker OSS-footprint match than Mozilla or Microsoft.

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
