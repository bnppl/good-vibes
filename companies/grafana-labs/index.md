---
title: Grafana Labs
parent: Companies
nav_order: 17
company_profile: true
company_id: grafana-labs
industry: Observability / open-source infrastructure
organisation_context: Private growth company
research_checked: '2026-10-26'
evidence_since: '2025-10-01'
published: '2026-09-24'
evidence_kind: Company engineer account
last_updated: '2026-10-26'
last_read: null
status: unread
canonical_name: Grafana Labs
has_children: true
cache_schema: 1
aliases:
- Grafana
practice_focus: coding-workflows
research_cutoff: '2026-10-26'
focus_note: Tern/data-source migration and internal CLI exercises; not a company-wide autonomous-release policy.
tagline: Let migrations teach the next migration.
summary: The September Tern migration account connects agent guidance to execution failures, human design decisions
  and distribution checks. CLI work provides a separate supporting case.
strengths:
- Migration feedback
- Human design decisions
- Artifact verification
tools_summary: Tern is the reported migration tool. gcx has a pinned public README; the migration does not establish
  every team’s installed tools.
slides_url: /companies/grafana-labs/learn/
dimensions:
- id: D01
  title: Goal and bottleneck
  claim: C01
  detail: research.md#c01
  checked: '2026-10-26'
  position: Extract data sources so fixes need not wait for a monolith release.
  evidence: Stated
  source: https://medium.com/grafana-labs/how-and-why-were-bringing-data-sources-out-of-the-grafana-monolith-775f58eaebc3
  qualification: This is the data-sources team’s migration objective, not every Grafana initiative.
  evidence_kind: Reported team use
  published: '2026-09-24'
  practice_date: Migration over preceding months; exact agent runs not dated
  source_id: S01
  ai_specific: true
  source_format: Authored company engineering article
- id: D02
  title: Requirements and specification
  claim: C02
  detail: research.md#c02
  checked: '2026-10-26'
  position: Completed extractions become precise, checkable migration guides.
  evidence: Stated
  source: https://medium.com/grafana-labs/how-and-why-were-bringing-data-sources-out-of-the-grafana-monolith-775f58eaebc3
  qualification: Human intent and shared-code decisions are not delegated to the guide writer.
  evidence_kind: Reported team use
  published: '2026-09-24'
  practice_date: Migration over preceding months; exact agent runs not dated
  source_id: S01
  ai_specific: true
  source_format: Authored company engineering article
- id: D03
  title: Increment and planning
  claim: C03
  detail: research.md#c03
  checked: '2026-10-26'
  position: Tern separates learning, guide creation, readiness audit and execution.
  evidence: Stated
  source: https://medium.com/grafana-labs/how-and-why-were-bringing-data-sources-out-of-the-grafana-monolith-775f58eaebc3
  qualification: The account describes staged roles, not a universal number of concurrent agents.
  evidence_kind: Reported team use
  published: '2026-09-24'
  practice_date: Migration over preceding months; exact agent runs not dated
  source_id: S01
  ai_specific: true
  source_format: Authored company engineering article
- id: D04
  title: Testing and verification
  claim: C04
  detail: research.md#c04
  checked: '2026-10-26'
  position: Manual distribution checks complement existing end-to-end tests.
  evidence: Stated
  source: https://medium.com/grafana-labs/how-and-why-were-bringing-data-sources-out-of-the-grafana-monolith-775f58eaebc3
  qualification: No complete automated gate matrix or independently reproduced result is supplied.
  evidence_kind: Reported team use
  published: '2026-09-24'
  practice_date: Migration over preceding months; exact agent runs not dated
  source_id: S01
  ai_specific: true
  source_format: Authored company engineering article
- id: D05
  title: Design and refactoring
  claim: C05
  detail: research.md#c05
  checked: '2026-10-26'
  position: Engineers decide shared-library boundaries where extraction is not mechanical.
  evidence: Stated
  source: https://medium.com/grafana-labs/how-and-why-were-bringing-data-sources-out-of-the-grafana-monolith-775f58eaebc3
  qualification: Agents handle mechanical edits; human design work remains substantial.
  evidence_kind: Reported team use
  published: '2026-09-24'
  practice_date: Migration over preceding months; exact agent runs not dated
  source_id: S01
  ai_specific: true
  source_format: Authored company engineering article
- id: D06
  title: Human understanding and review
  claim: C06
  detail: research.md#c06
  checked: '2026-10-26'
  position: Engineers supervise rollouts and diagnose unexpected behaviour.
  evidence: Stated
  source: https://medium.com/grafana-labs/how-and-why-were-bringing-data-sources-out-of-the-grafana-monolith-775f58eaebc3
  qualification: Human observation found issues absent from the generated guides.
  evidence_kind: Reported team use
  published: '2026-09-24'
  practice_date: Migration over preceding months; exact agent runs not dated
  source_id: S01
  ai_specific: true
  source_format: Authored company engineering article
- id: D07
  title: Agent autonomy and coordination
  claim: C07
  detail: research.md#c07
  checked: '2026-10-26'
  position: Agents perform scoped migration phases under human supervision.
  evidence: Stated
  source: https://medium.com/grafana-labs/how-and-why-were-bringing-data-sources-out-of-the-grafana-monolith-775f58eaebc3
  qualification: No unattended production authority or company-wide agent topology is established.
  evidence_kind: Reported team use
  published: '2026-09-24'
  practice_date: Migration over preceding months; exact agent runs not dated
  source_id: S01
  ai_specific: true
  source_format: Authored company engineering article
- id: D08
  title: Context and durable state
  claim: C08
  detail: research.md#c08
  checked: '2026-10-26'
  position: Failures update migration guidance for later extractions.
  evidence: Stated
  source: https://medium.com/grafana-labs/how-and-why-were-bringing-data-sources-out-of-the-grafana-monolith-775f58eaebc3
  qualification: The cache was not inspected as a complete private memory implementation.
  evidence_kind: Reported team use
  published: '2026-09-24'
  practice_date: Migration over preceding months; exact agent runs not dated
  source_id: S01
  ai_specific: true
  source_format: Authored company engineering article
- id: D09
  title: Tooling and environment
  claim: C09
  detail: research.md#c09
  checked: '2026-10-26'
  position: Internal CLI exercises expose where agents guess or waste context.
  evidence: Stated
  source: https://medium.com/grafana-labs/clis-in-the-age-of-agents-how-we-designed-gcx-cdfca8954b30
  qualification: This is observed tool use during design, not a current company-wide tool inventory.
  evidence_kind: Reported team use
  published: '2026-07-28'
  practice_date: Internal offsite and CLI-design iteration before publication
  source_id: S02
  ai_specific: true
  source_format: Authored company engineering article
- id: D10
  title: Integration and release
  claim: C10
  detail: research.md#c10
  checked: '2026-10-26'
  position: Externalized plugins retain independent releases and are rebundled into distributions.
  evidence: Stated
  source: https://medium.com/grafana-labs/how-and-why-were-bringing-data-sources-out-of-the-grafana-monolith-775f58eaebc3
  qualification: Compatibility and rollout verification remain work beyond source rewriting.
  evidence_kind: Reported team use
  published: '2026-09-24'
  practice_date: Migration over preceding months; exact agent runs not dated
  source_id: S01
  ai_specific: true
  source_format: Authored company engineering article
- id: D11
  title: Boundaries and safeguards
  claim: C11
  detail: research.md#c11
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
- id: D12
  title: Evaluation and tradeoffs
  claim: C12
  detail: research.md#c12
  checked: '2026-10-26'
  position: Evaluate actual agent failures instead of assuming help text is sufficient.
  evidence: Stated
  source: https://medium.com/grafana-labs/clis-in-the-age-of-agents-how-we-designed-gcx-cdfca8954b30
  qualification: Observed usability failures do not establish measured delivery or cost improvement.
  evidence_kind: Reported team use
  published: '2026-07-28'
  practice_date: Internal offsite and CLI-design iteration before publication
  source_id: S02
  ai_specific: true
  source_format: Authored company engineering article
comparison_group: observability
---

# Grafana Labs: building software using AI

[Detailed research](research.md) · [Source findings](sources.md) · [Workflow and optional practice](workflow.md) · [Slide notes](slides.md) · [Open slideshow]({{ '/companies/grafana-labs/learn/' | relative_url }}) · [Compare companies](../comparison.md)

The September Tern migration account connects agent guidance to execution failures, human design decisions and distribution checks. CLI work provides a separate supporting case.

## Scope

Tern/data-source migration and internal CLI exercises; not a company-wide autonomous-release policy. Publication window: **1 October 2025–26 October 2026**. Practice and publication dates are different. Sources were inspected, not independently executed.

Open-source background: [Grafana](https://github.com/grafana/grafana). It is not proof that the reported internal harness is public or that this workflow produced the project.

## Comparison evidence

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated · Reported team use.** Extract data sources so fixes need not wait for a monolith release.

This is the data-sources team’s migration objective, not every Grafana initiative.

Published / revision: **2026-09-24**. Practice: Migration over preceding months; exact agent runs not dated. Checked: 2026-10-26. Format: Authored company engineering article.

[Source record](sources.md#s01) · [Original source](https://medium.com/grafana-labs/how-and-why-were-bringing-data-sources-out-of-the-grafana-monolith-775f58eaebc3)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Stated · Reported team use.** Completed extractions become precise, checkable migration guides.

Human intent and shared-code decisions are not delegated to the guide writer.

Published / revision: **2026-09-24**. Practice: Migration over preceding months; exact agent runs not dated. Checked: 2026-10-26. Format: Authored company engineering article.

[Source record](sources.md#s01) · [Original source](https://medium.com/grafana-labs/how-and-why-were-bringing-data-sources-out-of-the-grafana-monolith-775f58eaebc3)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Stated · Reported team use.** Tern separates learning, guide creation, readiness audit and execution.

The account describes staged roles, not a universal number of concurrent agents.

Published / revision: **2026-09-24**. Practice: Migration over preceding months; exact agent runs not dated. Checked: 2026-10-26. Format: Authored company engineering article.

[Source record](sources.md#s01) · [Original source](https://medium.com/grafana-labs/how-and-why-were-bringing-data-sources-out-of-the-grafana-monolith-775f58eaebc3)

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Stated · Reported team use.** Manual distribution checks complement existing end-to-end tests.

No complete automated gate matrix or independently reproduced result is supplied.

Published / revision: **2026-09-24**. Practice: Migration over preceding months; exact agent runs not dated. Checked: 2026-10-26. Format: Authored company engineering article.

[Source record](sources.md#s01) · [Original source](https://medium.com/grafana-labs/how-and-why-were-bringing-data-sources-out-of-the-grafana-monolith-775f58eaebc3)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Stated · Reported team use.** Engineers decide shared-library boundaries where extraction is not mechanical.

Agents handle mechanical edits; human design work remains substantial.

Published / revision: **2026-09-24**. Practice: Migration over preceding months; exact agent runs not dated. Checked: 2026-10-26. Format: Authored company engineering article.

[Source record](sources.md#s01) · [Original source](https://medium.com/grafana-labs/how-and-why-were-bringing-data-sources-out-of-the-grafana-monolith-775f58eaebc3)

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated · Reported team use.** Engineers supervise rollouts and diagnose unexpected behaviour.

Human observation found issues absent from the generated guides.

Published / revision: **2026-09-24**. Practice: Migration over preceding months; exact agent runs not dated. Checked: 2026-10-26. Format: Authored company engineering article.

[Source record](sources.md#s01) · [Original source](https://medium.com/grafana-labs/how-and-why-were-bringing-data-sources-out-of-the-grafana-monolith-775f58eaebc3)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Stated · Reported team use.** Agents perform scoped migration phases under human supervision.

No unattended production authority or company-wide agent topology is established.

Published / revision: **2026-09-24**. Practice: Migration over preceding months; exact agent runs not dated. Checked: 2026-10-26. Format: Authored company engineering article.

[Source record](sources.md#s01) · [Original source](https://medium.com/grafana-labs/how-and-why-were-bringing-data-sources-out-of-the-grafana-monolith-775f58eaebc3)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Stated · Reported team use.** Failures update migration guidance for later extractions.

The cache was not inspected as a complete private memory implementation.

Published / revision: **2026-09-24**. Practice: Migration over preceding months; exact agent runs not dated. Checked: 2026-10-26. Format: Authored company engineering article.

[Source record](sources.md#s01) · [Original source](https://medium.com/grafana-labs/how-and-why-were-bringing-data-sources-out-of-the-grafana-monolith-775f58eaebc3)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Stated · Reported team use.** Internal CLI exercises expose where agents guess or waste context.

This is observed tool use during design, not a current company-wide tool inventory.

Published / revision: **2026-07-28**. Practice: Internal offsite and CLI-design iteration before publication. Checked: 2026-10-26. Format: Authored company engineering article.

[Source record](sources.md#s02) · [Original source](https://medium.com/grafana-labs/clis-in-the-age-of-agents-how-we-designed-gcx-cdfca8954b30)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Stated · Reported team use.** Externalized plugins retain independent releases and are rebundled into distributions.

Compatibility and rollout verification remain work beyond source rewriting.

Published / revision: **2026-09-24**. Practice: Migration over preceding months; exact agent runs not dated. Checked: 2026-10-26. Format: Authored company engineering article.

[Source record](sources.md#s01) · [Original source](https://medium.com/grafana-labs/how-and-why-were-bringing-data-sources-out-of-the-grafana-monolith-775f58eaebc3)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Not established · Not established.** Recent AI-assisted development evidence for this dimension is not established in this reviewed cache.

The bounded source review does not establish a complete current organisational policy. A gap does not imply the practice is absent.

Published / revision: **Not established**. Practice: Not established. Checked: 2026-10-26. Format: Not established.

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Stated · Reported team use.** Evaluate actual agent failures instead of assuming help text is sufficient.

Observed usability failures do not establish measured delivery or cost improvement.

Published / revision: **2026-07-28**. Practice: Internal offsite and CLI-design iteration before publication. Checked: 2026-10-26. Format: Authored company engineering article.

[Source record](sources.md#s02) · [Original source](https://medium.com/grafana-labs/clis-in-the-age-of-agents-how-we-designed-gcx-cdfca8954b30)
