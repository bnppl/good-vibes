---
title: Uber
parent: Companies
nav_order: 14
company_profile: true
company_id: uber
industry: Transport / logistics
organisation_context: Large public company
research_checked: '2026-10-26'
evidence_since: '2025-10-01'
published: '2026-08-27'
evidence_kind: Company engineering account
last_updated: '2026-10-26'
last_read: null
status: unread
canonical_name: Uber
has_children: true
cache_schema: 1
aliases:
- Uber Engineering
practice_focus: coding-workflows
research_cutoff: '2026-10-26'
focus_note: PRD evaluation and managed engineering-agent platform accounts; not every Uber team’s private delivery
  process.
tagline: Measure the outcome and the work around the model.
summary: May and August 2026 accounts connect upstream product review with measured managed-agent execution. Costs,
  quality and authority stay separate.
strengths:
- Outcome economics
- Task benchmarks
- Contextual review
tools_summary: Reported shared agent wrapper, model gateway, managed review/maintenance agents and PRD Evaluator;
  no complete private release setup inspected.
slides_url: /companies/uber/learn/
dimensions:
- id: D01
  title: Goal and bottleneck
  claim: C01
  detail: research.md#c01
  checked: '2026-10-26'
  position: Optimize engineering outcomes and unit costs together.
  evidence: Stated
  source: https://www.uber.com/gb/en/blog/efficient-software-factory/
  qualification: Reported internal metrics, not an independent productivity experiment.
  evidence_kind: Reported company use
  published: '2026-08-27'
  practice_date: February–August 2026 measurements; exact task dates not established
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
- id: D02
  title: Requirements and specification
  claim: C02
  detail: research.md#c02
  checked: '2026-10-26'
  position: AI critiques PRDs before existing expert approval.
  evidence: Stated
  source: https://www.uber.com/us/en/blog/first-pass-prd/
  qualification: The evaluator strengthens an input artifact; it does not make the final approval decision.
  evidence_kind: Reported team use
  published: '2026-05-12'
  practice_date: Trial before publication; exact sessions not established
  source_id: S02
  ai_specific: true
  source_format: Authored engineering article
- id: D03
  title: Increment and planning
  claim: C03
  detail: research.md#c03
  checked: '2026-10-26'
  position: Primary models decompose work; cheaper subagents handle bounded tasks.
  evidence: Stated
  source: https://www.uber.com/gb/en/blog/efficient-software-factory/
  qualification: An August routing strategy, not a fixed staffing model or universal task size.
  evidence_kind: Reported company use
  published: '2026-08-27'
  practice_date: February–August 2026 measurements; exact task dates not established
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
- id: D04
  title: Testing and verification
  claim: C04
  detail: research.md#c04
  checked: '2026-10-26'
  position: Reviewer models are benchmarked against real PRs with known bugs.
  evidence: Stated
  source: https://www.uber.com/gb/en/blog/efficient-software-factory/
  qualification: Precision, recall, noise and latency are task measures, not proof of bug-free code.
  evidence_kind: Reported company use
  published: '2026-08-27'
  practice_date: February–August 2026 measurements; exact task dates not established
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
- id: D05
  title: Design and refactoring
  claim: C05
  detail: research.md#c05
  checked: '2026-10-26'
  position: Recent AI-assisted development evidence for this dimension is not established in this reviewed cache.
  evidence: Not established
  source: ''
  qualification: The bounded source review does not establish a complete current organisational policy. A gap does
    not imply the practice is absent.
  evidence_kind: Not established
  published: Not established
  practice_date: Not established
  source_id: ''
  ai_specific: false
  source_format: Not established
- id: D06
  title: Human understanding and review
  claim: C06
  detail: research.md#c06
  checked: '2026-10-26'
  position: Humans retain high-cost product approval and domain judgment.
  evidence: Stated
  source: https://www.uber.com/us/en/blog/first-pass-prd/
  qualification: This concerns PRD review; exact code-review depth differs by managed workflow.
  evidence_kind: Reported team use
  published: '2026-05-12'
  practice_date: Trial before publication; exact sessions not established
  source_id: S02
  ai_specific: true
  source_format: Authored engineering article
- id: D07
  title: Agent autonomy and coordination
  claim: C07
  detail: research.md#c07
  checked: '2026-10-26'
  position: Managed agents handle coding, CI repair and maintenance with escalation.
  evidence: Stated
  source: https://www.uber.com/gb/en/blog/efficient-software-factory/
  qualification: No blanket unattended production-release authority is established.
  evidence_kind: Reported company use
  published: '2026-08-27'
  practice_date: February–August 2026 measurements; exact task dates not established
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
- id: D08
  title: Context and durable state
  claim: C08
  detail: research.md#c08
  checked: '2026-10-26'
  position: Gateway tools and graph-grounded context reduce repeated discovery.
  evidence: Stated
  source: https://www.uber.com/gb/en/blog/efficient-software-factory/
  qualification: An internal platform account; private retrieval rules and every memory layout were not inspected.
  evidence_kind: Reported company use
  published: '2026-08-27'
  practice_date: February–August 2026 measurements; exact task dates not established
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
- id: D09
  title: Tooling and environment
  claim: C09
  detail: research.md#c09
  checked: '2026-10-26'
  position: A shared wrapper standardizes interactive agent configuration and cost visibility.
  evidence: Stated
  source: https://www.uber.com/gb/en/blog/efficient-software-factory/
  qualification: Specific defaults are dated and may change after publication.
  evidence_kind: Reported company use
  published: '2026-08-27'
  practice_date: February–August 2026 measurements; exact task dates not established
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
- id: D10
  title: Integration and release
  claim: C10
  detail: research.md#c10
  checked: '2026-10-26'
  position: Managed work is measured through merged PRs and other completed outcomes.
  evidence: Stated
  source: https://www.uber.com/gb/en/blog/efficient-software-factory/
  qualification: A complete approval, deployment and rollback policy remains unestablished.
  evidence_kind: Reported company use
  published: '2026-08-27'
  practice_date: February–August 2026 measurements; exact task dates not established
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
- id: D11
  title: Boundaries and safeguards
  claim: C11
  detail: research.md#c11
  checked: '2026-10-26'
  position: Internal MCP traffic uses a gateway for authentication and policy.
  evidence: Stated
  source: https://www.uber.com/gb/en/blog/efficient-software-factory/
  qualification: Gateway presence does not establish every task’s effective permission set.
  evidence_kind: Reported company use
  published: '2026-08-27'
  practice_date: February–August 2026 measurements; exact task dates not established
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
- id: D12
  title: Evaluation and tradeoffs
  claim: C12
  detail: research.md#c12
  checked: '2026-10-26'
  position: Track outcome cost, quality and model changes separately.
  evidence: Stated
  source: https://www.uber.com/gb/en/blog/efficient-software-factory/
  qualification: Usage growth or a cheaper session alone does not demonstrate more customer value.
  evidence_kind: Reported company use
  published: '2026-08-27'
  practice_date: February–August 2026 measurements; exact task dates not established
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
comparison_group: transport
---

# Uber: building software using AI

[Detailed research](research.md) · [Source findings](sources.md) · [Workflow and optional practice](workflow.md) · [Slide notes](slides.md) · [Open slideshow]({{ '/companies/uber/learn/' | relative_url }}) · [Compare companies](../comparison.md)

May and August 2026 accounts connect upstream product review with measured managed-agent execution. Costs, quality and authority stay separate.

## Scope

PRD evaluation and managed engineering-agent platform accounts; not every Uber team’s private delivery process. Publication window: **1 October 2025–26 October 2026**. Practice and publication dates are different. Sources were inspected, not independently executed.

Open-source background: [Cadence (Uber-origin; community project)](https://github.com/cadence-workflow/cadence). It is not proof that the reported internal harness is public or that this workflow produced the project.

## Comparison evidence

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

**Stated · Reported company use.** Track outcome cost, quality and model changes separately.

Usage growth or a cheaper session alone does not demonstrate more customer value.

Published / revision: **2026-08-27**. Practice: February–August 2026 measurements; exact task dates not established. Checked: 2026-10-26. Format: Authored engineering article.

[Source record](sources.md#s01) · [Original source](https://www.uber.com/gb/en/blog/efficient-software-factory/)
