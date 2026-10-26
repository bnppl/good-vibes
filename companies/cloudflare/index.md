---
title: Cloudflare
parent: Companies
nav_order: 5
company_profile: true
company_id: cloudflare
industry: Internet infrastructure / security
organisation_context: Large public company
research_checked: '2026-10-26'
evidence_since: '2025-10-01'
published: '2026-04-20'
evidence_kind: Reported company use
last_updated: '2026-10-26'
last_read: null
status: unread
canonical_name: Cloudflare
has_children: true
cache_schema: 1
aliases: []
practice_focus: coding-workflows
focus_note: Internal AI code review, design review and the supporting platform; implementation and deployment policies
  are not assumed from review automation.
research_cutoff: '2026-10-26'
tagline: Bring governed standards to the point where work changes.
summary: Bring governed standards to the point where work changes. Internal AI code review, design review and the
  supporting platform; implementation and deployment policies are not assumed from review automation.
strengths:
- Governed standards
- Review orchestration
- Context freshness
tools_summary: OpenCode-based review orchestration, GitLab CI, Cloudflare Access/AI Gateway, Backstage and AGENTS.md
  context, governed Engineering Codex. The Codex is internal standards, not OpenAI Codex.
slides_url: /companies/cloudflare/learn/
dimensions:
- id: D01
  title: Goal and bottleneck
  position: The review system targets waiting time and noisy feedback.
  evidence: Stated
  claim: C01
  detail: research.md#c01
  source: https://blog.cloudflare.com/ai-code-review/
  checked: '2026-10-26'
  qualification: A review bottleneck, not evidence that coding itself is always fast enough.
  evidence_kind: Reported team use
  published: '2026-04-20'
  practice_date: Reported review runs from 2026-03-10 through 2026-04-09
  source_id: S03
  ai_specific: true
  source_format: Authored engineering article
- id: D02
  title: Requirements and specification
  position: Specifications receive checks against relevant governed standards.
  evidence: Stated
  claim: C02
  detail: research.md#c02
  source: https://blog.cloudflare.com/engineering-standards-enforcement/
  checked: '2026-10-26'
  qualification: This establishes design review, not automatic requirements ownership.
  evidence_kind: Reported company use
  published: '2026-08-04'
  practice_date: Codex usage and review activity during 2026 before publication
  source_id: S02
  ai_specific: true
  source_format: Authored engineering article
- id: D03
  title: Increment and planning
  position: An eligible recent AI-specific increment and planning policy is not established in these sources.
  evidence: Not established
  claim: C03
  detail: research.md#c03
  source: ''
  checked: '2026-10-26'
  qualification: This bounded gap does not imply absence of the practice. The inspected case cannot supply a complete
    company policy.
  evidence_kind: Not established
  published: Not established
  practice_date: Not established
  source_id: ''
  ai_specific: false
  source_format: Not established
- id: D04
  title: Testing and verification
  position: An eligible recent AI-specific testing and verification policy is not established in these sources.
  evidence: Not established
  claim: C04
  detail: research.md#c04
  source: ''
  checked: '2026-10-26'
  qualification: This bounded gap does not imply absence of the practice. The inspected case cannot supply a complete
    company policy.
  evidence_kind: Not established
  published: Not established
  practice_date: Not established
  source_id: ''
  ai_specific: false
  source_format: Not established
- id: D05
  title: Design and refactoring
  position: Architecture-related standards inform pre-implementation review.
  evidence: Stated
  claim: C05
  detail: research.md#c05
  source: https://blog.cloudflare.com/engineering-standards-enforcement/
  checked: '2026-10-26'
  qualification: The source does not establish a universal refactoring cadence or architecture.
  evidence_kind: Reported company use
  published: '2026-08-04'
  practice_date: Codex usage and review activity during 2026 before publication
  source_id: S02
  ai_specific: true
  source_format: Authored engineering article
- id: D06
  title: Human understanding and review
  position: Humans remain necessary for architectural and cross-system judgment.
  evidence: Stated
  claim: C06
  detail: research.md#c06
  source: https://blog.cloudflare.com/ai-code-review/
  checked: '2026-10-26'
  qualification: A stated limitation of the reviewer; no exact mandatory review checklist is inferred.
  evidence_kind: Reported team use
  published: '2026-04-20'
  practice_date: Reported review runs from 2026-03-10 through 2026-04-09
  source_id: S03
  ai_specific: true
  source_format: Authored engineering article
- id: D07
  title: Agent autonomy and coordination
  position: A coordinator combines bounded specialist review sessions.
  evidence: Stated
  claim: C07
  detail: research.md#c07
  source: https://blog.cloudflare.com/ai-code-review/
  checked: '2026-10-26'
  qualification: Reviewer orchestration is not a fleet of autonomous implementation agents.
  evidence_kind: Reported team use
  published: '2026-04-20'
  practice_date: Reported review runs from 2026-03-10 through 2026-04-09
  source_id: S03
  ai_specific: true
  source_format: Authored engineering article
- id: D08
  title: Context and durable state
  position: Repository context and organisational knowledge have separate layers.
  evidence: Stated
  claim: C08
  detail: research.md#c08
  source: https://blog.cloudflare.com/internal-ai-engineering-stack/
  checked: '2026-10-26'
  qualification: A dated platform account, not proof that all context is always fresh.
  evidence_kind: Reported company use
  published: '2026-04-20'
  practice_date: Retrospective of eleven months, plus usage at publication
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
- id: D09
  title: Tooling and environment
  position: Shared access and routing support multiple coding tools.
  evidence: Stated
  claim: C09
  detail: research.md#c09
  source: https://blog.cloudflare.com/internal-ai-engineering-stack/
  checked: '2026-10-26'
  qualification: No single model or tool is inferred as mandatory for every developer.
  evidence_kind: Reported company use
  published: '2026-04-20'
  practice_date: Retrospective of eleven months, plus usage at publication
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
- id: D10
  title: Integration and release
  position: Enforced mandatory standards can block merge approval.
  evidence: Stated
  claim: C10
  detail: research.md#c10
  source: https://blog.cloudflare.com/engineering-standards-enforcement/
  checked: '2026-10-26'
  qualification: This is a code-review gate, not production deployment or rollback authority.
  evidence_kind: Reported company use
  published: '2026-08-04'
  practice_date: Codex usage and review activity during 2026 before publication
  source_id: S02
  ai_specific: true
  source_format: Authored engineering article
- id: D11
  title: Boundaries and safeguards
  position: Access and gateway layers centralize credentials and policy.
  evidence: Stated
  claim: C11
  detail: research.md#c11
  source: https://blog.cloudflare.com/internal-ai-engineering-stack/
  checked: '2026-10-26'
  qualification: Reported infrastructure controls; no private permissions audit was performed.
  evidence_kind: Reported company use
  published: '2026-04-20'
  practice_date: Retrospective of eleven months, plus usage at publication
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
- id: D12
  title: Evaluation and tradeoffs
  position: Review cost and noise are tracked alongside limitations.
  evidence: Stated
  claim: C12
  detail: research.md#c12
  source: https://blog.cloudflare.com/ai-code-review/
  checked: '2026-10-26'
  qualification: Company telemetry is not a controlled quality or productivity study.
  evidence_kind: Reported team use
  published: '2026-04-20'
  practice_date: Reported review runs from 2026-03-10 through 2026-04-09
  source_id: S03
  ai_specific: true
  source_format: Authored engineering article
comparison_group: infrastructure
---

# Cloudflare: how software is built using AI

[Research](research.md) · [Sources](sources.md) · [Workflow and optional practice](workflow.md) · [Slide notes](slides.md) · [Slideshow]({{ '/companies/cloudflare/learn/' | relative_url }})

[Company comparison](../comparison.md) · [Company cohort](../index.md)

Internal AI code review, design review and the supporting platform; implementation and deployment policies are not assumed from review automation.

Evidence window: **1 October 2025–26 October 2026**. Publication, practice and inspection dates remain separate. The sources describe reported work; the cache does not claim an independent execution or organisation-wide audit.

## Research map

Start with the [documented cases](research.md#documented-cases), then read the [observed workflow](workflow.md#observed-workflow). The optional exercise is our adaptation, not company practice. Open-source work is background for inspectability, not proof of the internal agent stack.

## Comparison claims

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated · Reported team use.** The review system targets waiting time and noisy feedback.

A review bottleneck, not evidence that coding itself is always fast enough.

Source format: Authored engineering article. Published: **2026-04-20**. Practice: Reported review runs from 2026-03-10 through 2026-04-09. Checked: 2026-10-26.

[Primary source](https://blog.cloudflare.com/ai-code-review/) · [Source register](sources.md#s03)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Stated · Reported company use.** Specifications receive checks against relevant governed standards.

This establishes design review, not automatic requirements ownership.

Source format: Authored engineering article. Published: **2026-08-04**. Practice: Codex usage and review activity during 2026 before publication. Checked: 2026-10-26.

[Primary source](https://blog.cloudflare.com/engineering-standards-enforcement/) · [Source register](sources.md#s02)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Not established · Not established.** An eligible recent AI-specific increment and planning policy is not established in these sources.

This bounded gap does not imply absence of the practice. The inspected case cannot supply a complete company policy.

Source format: Not established. Published: **Not established**. Practice: Not established. Checked: 2026-10-26.

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Not established · Not established.** An eligible recent AI-specific testing and verification policy is not established in these sources.

This bounded gap does not imply absence of the practice. The inspected case cannot supply a complete company policy.

Source format: Not established. Published: **Not established**. Practice: Not established. Checked: 2026-10-26.

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Stated · Reported company use.** Architecture-related standards inform pre-implementation review.

The source does not establish a universal refactoring cadence or architecture.

Source format: Authored engineering article. Published: **2026-08-04**. Practice: Codex usage and review activity during 2026 before publication. Checked: 2026-10-26.

[Primary source](https://blog.cloudflare.com/engineering-standards-enforcement/) · [Source register](sources.md#s02)

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated · Reported team use.** Humans remain necessary for architectural and cross-system judgment.

A stated limitation of the reviewer; no exact mandatory review checklist is inferred.

Source format: Authored engineering article. Published: **2026-04-20**. Practice: Reported review runs from 2026-03-10 through 2026-04-09. Checked: 2026-10-26.

[Primary source](https://blog.cloudflare.com/ai-code-review/) · [Source register](sources.md#s03)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Stated · Reported team use.** A coordinator combines bounded specialist review sessions.

Reviewer orchestration is not a fleet of autonomous implementation agents.

Source format: Authored engineering article. Published: **2026-04-20**. Practice: Reported review runs from 2026-03-10 through 2026-04-09. Checked: 2026-10-26.

[Primary source](https://blog.cloudflare.com/ai-code-review/) · [Source register](sources.md#s03)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Stated · Reported company use.** Repository context and organisational knowledge have separate layers.

A dated platform account, not proof that all context is always fresh.

Source format: Authored engineering article. Published: **2026-04-20**. Practice: Retrospective of eleven months, plus usage at publication. Checked: 2026-10-26.

[Primary source](https://blog.cloudflare.com/internal-ai-engineering-stack/) · [Source register](sources.md#s01)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Stated · Reported company use.** Shared access and routing support multiple coding tools.

No single model or tool is inferred as mandatory for every developer.

Source format: Authored engineering article. Published: **2026-04-20**. Practice: Retrospective of eleven months, plus usage at publication. Checked: 2026-10-26.

[Primary source](https://blog.cloudflare.com/internal-ai-engineering-stack/) · [Source register](sources.md#s01)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Stated · Reported company use.** Enforced mandatory standards can block merge approval.

This is a code-review gate, not production deployment or rollback authority.

Source format: Authored engineering article. Published: **2026-08-04**. Practice: Codex usage and review activity during 2026 before publication. Checked: 2026-10-26.

[Primary source](https://blog.cloudflare.com/engineering-standards-enforcement/) · [Source register](sources.md#s02)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Stated · Reported company use.** Access and gateway layers centralize credentials and policy.

Reported infrastructure controls; no private permissions audit was performed.

Source format: Authored engineering article. Published: **2026-04-20**. Practice: Retrospective of eleven months, plus usage at publication. Checked: 2026-10-26.

[Primary source](https://blog.cloudflare.com/internal-ai-engineering-stack/) · [Source register](sources.md#s01)

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Stated · Reported team use.** Review cost and noise are tracked alongside limitations.

Company telemetry is not a controlled quality or productivity study.

Source format: Authored engineering article. Published: **2026-04-20**. Practice: Reported review runs from 2026-03-10 through 2026-04-09. Checked: 2026-10-26.

[Primary source](https://blog.cloudflare.com/ai-code-review/) · [Source register](sources.md#s03)
