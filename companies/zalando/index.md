---
title: Zalando
parent: Companies
nav_order: 15
company_profile: true
company_id: zalando
industry: Fashion retail / commerce
organisation_context: Large public company
research_checked: '2026-10-26'
evidence_since: '2025-10-01'
published: '2026-08-14'
evidence_kind: Company engineering retrospective
last_updated: '2026-10-26'
last_read: null
status: unread
canonical_name: Zalando
has_children: true
cache_schema: 1
aliases:
- Zalando Engineering
practice_focus: coding-workflows
research_cutoff: '2026-10-26'
focus_note: A company retrospective with uneven team adoption; older foundations and future capabilities are separated.
tagline: Share access and learning; preserve risk distinctions.
summary: The August 2026 retrospective combines shared infrastructure with local choice and risk-based review. It
  also records oversized PRs and mixed design effects.
strengths:
- Team variation
- Risk-based approval
- Shared learning
tools_summary: Reported LiteLLM-based access, reference coding-agent configs, shared skills and risk-approval tooling;
  future sandbox/identity work stays future.
slides_url: /companies/zalando/learn/
dimensions:
- id: D01
  title: Goal and bottleneck
  claim: C01
  detail: research.md#c01
  checked: '2026-10-26'
  position: Reduce delivery friction while retaining team experimentation.
  evidence: Stated
  source: https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html
  qualification: Adoption varies; the account does not claim one uniform company workflow.
  evidence_kind: Reported company use
  published: '2026-08-14'
  practice_date: Retrospective of 2.5 years, including 2024 foundations and 2026 observations
  source_id: S01
  ai_specific: true
  source_format: Authored engineering retrospective
- id: D02
  title: Requirements and specification
  claim: C02
  detail: research.md#c02
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
- id: D03
  title: Increment and planning
  claim: C03
  detail: research.md#c03
  checked: '2026-10-26'
  position: Risk-based approval encourages separating changes by rollout risk.
  evidence: Stated
  source: https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html
  qualification: An observed behavioural effect, not a prescribed universal PR-size threshold.
  evidence_kind: Reported company use
  published: '2026-08-14'
  practice_date: Retrospective of 2.5 years, including 2024 foundations and 2026 observations
  source_id: S01
  ai_specific: true
  source_format: Authored engineering retrospective
- id: D04
  title: Testing and verification
  claim: C04
  detail: research.md#c04
  checked: '2026-10-26'
  position: Preview deployments let agents and people inspect proposed frontend changes.
  evidence: Stated
  source: https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html
  qualification: Preview availability is not a full AI testing cadence or correctness guarantee.
  evidence_kind: Reported company use
  published: '2026-08-14'
  practice_date: Retrospective of 2.5 years, including 2024 foundations and 2026 observations
  source_id: S01
  ai_specific: true
  source_format: Authored engineering retrospective
- id: D05
  title: Design and refactoring
  claim: C05
  detail: research.md#c05
  checked: '2026-10-26'
  position: Measure complexity and recognize that agents amplify existing design practices.
  evidence: Stated
  source: https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html
  qualification: The observed codebases are not a controlled causal study or mandatory refactoring recipe.
  evidence_kind: Reported company use
  published: '2026-08-14'
  practice_date: Retrospective of 2.5 years, including 2024 foundations and 2026 observations
  source_id: S01
  ai_specific: true
  source_format: Authored engineering retrospective
- id: D06
  title: Human understanding and review
  claim: C06
  detail: research.md#c06
  checked: '2026-10-26'
  position: Medium-risk compatibility changes require another human’s judgment.
  evidence: Stated
  source: https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html
  qualification: Risk classes are specific to Zalando’s stack and incident experience.
  evidence_kind: Reported company use
  published: '2026-08-14'
  practice_date: Retrospective of 2.5 years, including 2024 foundations and 2026 observations
  source_id: S01
  ai_specific: true
  source_format: Authored engineering retrospective
- id: D07
  title: Agent autonomy and coordination
  claim: C07
  detail: research.md#c07
  checked: '2026-10-26'
  position: Teams choose coding tools within shared access and reference configurations.
  evidence: Stated
  source: https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html
  qualification: Tool-choice autonomy is not unrestricted agent execution or a defined agent topology.
  evidence_kind: Reported company use
  published: '2026-08-14'
  practice_date: Retrospective of 2.5 years, including 2024 foundations and 2026 observations
  source_id: S01
  ai_specific: true
  source_format: Authored engineering retrospective
- id: D08
  title: Context and durable state
  claim: C08
  detail: research.md#c08
  checked: '2026-10-26'
  position: Shared skills and configurations distribute repeatable engineering knowledge.
  evidence: Stated
  source: https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html
  qualification: A shared collection does not establish every team’s adoption or private context layout.
  evidence_kind: Reported company use
  published: '2026-08-14'
  practice_date: Retrospective of 2.5 years, including 2024 foundations and 2026 observations
  source_id: S01
  ai_specific: true
  source_format: Authored engineering retrospective
- id: D09
  title: Tooling and environment
  claim: C09
  detail: research.md#c09
  checked: '2026-10-26'
  position: Model access runs through a shared proxy with agent configuration helpers.
  evidence: Stated
  source: https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html
  qualification: Proxy foundations began in 2024; the recent source is retrospective.
  evidence_kind: Reported company use
  published: '2026-08-14'
  practice_date: Retrospective of 2.5 years, including 2024 foundations and 2026 observations
  source_id: S01
  ai_specific: true
  source_format: Authored engineering retrospective
- id: D10
  title: Integration and release
  claim: C10
  detail: research.md#c10
  checked: '2026-10-26'
  position: Low-risk PRs can receive bot approval; authors choose whether to merge.
  evidence: Stated
  source: https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html
  qualification: Automatic approval is distinct from automatic merge and production deployment.
  evidence_kind: Reported company use
  published: '2026-08-14'
  practice_date: Retrospective of 2.5 years, including 2024 foundations and 2026 observations
  source_id: S01
  ai_specific: true
  source_format: Authored engineering retrospective
- id: D11
  title: Boundaries and safeguards
  claim: C11
  detail: research.md#c11
  checked: '2026-10-26'
  position: Authentication helpers avoid hardcoded MCP credentials.
  evidence: Stated
  source: https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html
  qualification: The later sandbox/identity platform is work in progress, not a universally deployed boundary.
  evidence_kind: Reported company use
  published: '2026-08-14'
  practice_date: Retrospective of 2.5 years, including 2024 foundations and 2026 observations
  source_id: S01
  ai_specific: true
  source_format: Authored engineering retrospective
- id: D12
  title: Evaluation and tradeoffs
  claim: C12
  detail: research.md#c12
  checked: '2026-10-26'
  position: Inspect session costs, PR sizes and code-complexity effects.
  evidence: Stated
  source: https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html
  qualification: Self-reported associations and anecdotal effects do not prove net productivity gains.
  evidence_kind: Reported company use
  published: '2026-08-14'
  practice_date: Retrospective of 2.5 years, including 2024 foundations and 2026 observations
  source_id: S01
  ai_specific: true
  source_format: Authored engineering retrospective
comparison_group: commerce
---

# Zalando: building software using AI

[Detailed research](research.md) · [Source findings](sources.md) · [Workflow and optional practice](workflow.md) · [Slide notes](slides.md) · [Open slideshow]({{ '/companies/zalando/learn/' | relative_url }}) · [Compare companies](../comparison.md)

The August 2026 retrospective combines shared infrastructure with local choice and risk-based review. It also records oversized PRs and mixed design effects.

## Scope

A company retrospective with uneven team adoption; older foundations and future capabilities are separated. Publication window: **1 October 2025–26 October 2026**. Practice and publication dates are different. Sources were inspected, not independently executed.

Open-source background: [Patroni (Zalando-origin; community project)](https://github.com/patroni/patroni). It is not proof that the reported internal harness is public or that this workflow produced the project.

## Comparison evidence

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated · Reported company use.** Reduce delivery friction while retaining team experimentation.

Adoption varies; the account does not claim one uniform company workflow.

Published / revision: **2026-08-14**. Practice: Retrospective of 2.5 years, including 2024 foundations and 2026 observations. Checked: 2026-10-26. Format: Authored engineering retrospective.

[Source record](sources.md#s01) · [Original source](https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Not established · Not established.** Recent AI-assisted development evidence for this dimension is not established in this reviewed cache.

The bounded source review does not establish a complete current organisational policy. A gap does not imply the practice is absent.

Published / revision: **Not established**. Practice: Not established. Checked: 2026-10-26. Format: Not established.

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Stated · Reported company use.** Risk-based approval encourages separating changes by rollout risk.

An observed behavioural effect, not a prescribed universal PR-size threshold.

Published / revision: **2026-08-14**. Practice: Retrospective of 2.5 years, including 2024 foundations and 2026 observations. Checked: 2026-10-26. Format: Authored engineering retrospective.

[Source record](sources.md#s01) · [Original source](https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html)

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Stated · Reported company use.** Preview deployments let agents and people inspect proposed frontend changes.

Preview availability is not a full AI testing cadence or correctness guarantee.

Published / revision: **2026-08-14**. Practice: Retrospective of 2.5 years, including 2024 foundations and 2026 observations. Checked: 2026-10-26. Format: Authored engineering retrospective.

[Source record](sources.md#s01) · [Original source](https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Stated · Reported company use.** Measure complexity and recognize that agents amplify existing design practices.

The observed codebases are not a controlled causal study or mandatory refactoring recipe.

Published / revision: **2026-08-14**. Practice: Retrospective of 2.5 years, including 2024 foundations and 2026 observations. Checked: 2026-10-26. Format: Authored engineering retrospective.

[Source record](sources.md#s01) · [Original source](https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html)

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated · Reported company use.** Medium-risk compatibility changes require another human’s judgment.

Risk classes are specific to Zalando’s stack and incident experience.

Published / revision: **2026-08-14**. Practice: Retrospective of 2.5 years, including 2024 foundations and 2026 observations. Checked: 2026-10-26. Format: Authored engineering retrospective.

[Source record](sources.md#s01) · [Original source](https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Stated · Reported company use.** Teams choose coding tools within shared access and reference configurations.

Tool-choice autonomy is not unrestricted agent execution or a defined agent topology.

Published / revision: **2026-08-14**. Practice: Retrospective of 2.5 years, including 2024 foundations and 2026 observations. Checked: 2026-10-26. Format: Authored engineering retrospective.

[Source record](sources.md#s01) · [Original source](https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Stated · Reported company use.** Shared skills and configurations distribute repeatable engineering knowledge.

A shared collection does not establish every team’s adoption or private context layout.

Published / revision: **2026-08-14**. Practice: Retrospective of 2.5 years, including 2024 foundations and 2026 observations. Checked: 2026-10-26. Format: Authored engineering retrospective.

[Source record](sources.md#s01) · [Original source](https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Stated · Reported company use.** Model access runs through a shared proxy with agent configuration helpers.

Proxy foundations began in 2024; the recent source is retrospective.

Published / revision: **2026-08-14**. Practice: Retrospective of 2.5 years, including 2024 foundations and 2026 observations. Checked: 2026-10-26. Format: Authored engineering retrospective.

[Source record](sources.md#s01) · [Original source](https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Stated · Reported company use.** Low-risk PRs can receive bot approval; authors choose whether to merge.

Automatic approval is distinct from automatic merge and production deployment.

Published / revision: **2026-08-14**. Practice: Retrospective of 2.5 years, including 2024 foundations and 2026 observations. Checked: 2026-10-26. Format: Authored engineering retrospective.

[Source record](sources.md#s01) · [Original source](https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Stated · Reported company use.** Authentication helpers avoid hardcoded MCP credentials.

The later sandbox/identity platform is work in progress, not a universally deployed boundary.

Published / revision: **2026-08-14**. Practice: Retrospective of 2.5 years, including 2024 foundations and 2026 observations. Checked: 2026-10-26. Format: Authored engineering retrospective.

[Source record](sources.md#s01) · [Original source](https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html)

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Stated · Reported company use.** Inspect session costs, PR sizes and code-complexity effects.

Self-reported associations and anecdotal effects do not prove net productivity gains.

Published / revision: **2026-08-14**. Practice: Retrospective of 2.5 years, including 2024 foundations and 2026 observations. Checked: 2026-10-26. Format: Authored engineering retrospective.

[Source record](sources.md#s01) · [Original source](https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html)
