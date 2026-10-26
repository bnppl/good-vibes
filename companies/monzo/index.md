---
title: Monzo
parent: Companies
nav_order: 2
company_profile: true
company_id: monzo
industry: Digital banking
organisation_context: Scale-up bank
research_checked: '2026-10-26'
evidence_since: '2025-10-01'
published: '2026-08-13'
evidence_kind: Reported company use
last_updated: '2026-10-26'
last_read: null
status: unread
canonical_name: Monzo
has_children: true
cache_schema: 1
aliases: []
practice_focus: coding-workflows
focus_note: March 2026 designer contribution cases and August Agent Chip platform account; not a universal autonomous-release
  policy.
research_cutoff: '2026-10-26'
tagline: Broaden contribution while keeping engineering authority explicit.
summary: Monzo documents both designers making scoped production-code changes and an owned Agent Chip platform.
  The March and August accounts distinguish access to implementation from mandatory review and controlled deployment.
strengths:
- Scoped contribution
- Explicit review boundary
- Per-task execution controls
tools_summary: Reported Cursor use in March designer examples; August Agent Chip integrates Slack, Linear, GitHub,
  internal knowledge and sandboxed agent bundles. Models and private configuration remain incomplete.
slides_url: /companies/monzo/learn/
dimensions:
- id: D01
  title: Goal and bottleneck
  position: Move routine work and contextual investigation off engineering queues.
  evidence: Stated
  claim: C01
  detail: research.md#c01
  source: https://monzo.com/blog/building-agent-chip
  checked: '2026-10-26'
  qualification: A stated platform objective; reported task counts are not quality measurements.
  evidence_kind: Reported company use
  published: '2026-08-13'
  practice_date: Build decision in late 2025; capabilities reported August 2026
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
- id: D02
  title: Requirements and specification
  position: Start with a concrete mismatch on an owned product surface.
  evidence: Stated
  claim: C02
  detail: research.md#c02
  source: https://monzo.com/blog/how-Monzo-Designers-are-shipping-safer-faster-product-improvements
  checked: '2026-10-26'
  qualification: A designer example, not a company-wide specification template.
  evidence_kind: Reported team use
  published: '2026-03-20'
  practice_date: Designer examples before March publication; exact session dates unknown
  source_id: S02
  ai_specific: true
  source_format: Authored practitioner case collection
- id: D03
  title: Increment and planning
  position: Keep early designer changes small and scoped with an engineering partner.
  evidence: Stated
  claim: C03
  detail: research.md#c03
  source: https://monzo.com/blog/how-Monzo-Designers-are-shipping-safer-faster-product-improvements
  checked: '2026-10-26'
  qualification: No universal code-size limit or permission for arbitrary end-to-end features follows.
  evidence_kind: Reported team use
  published: '2026-03-20'
  practice_date: Designer examples before March publication; exact session dates unknown
  source_id: S02
  ai_specific: true
  source_format: Authored practitioner case collection
- id: D04
  title: Testing and verification
  position: A recent AI-assisted development policy for this dimension is not established in the reviewed accounts.
  evidence: Not established
  claim: C04
  detail: research.md#c04
  source: ''
  checked: '2026-10-26'
  qualification: The bounded gap is not evidence of opposition, absence of practice or poor engineering. General
    principles cannot fill it.
  evidence_kind: Not established
  published: Not established
  practice_date: Not established
  source_id: ''
  ai_specific: false
  source_format: Not established
- id: D05
  title: Design and refactoring
  position: A recent AI-assisted development policy for this dimension is not established in the reviewed accounts.
  evidence: Not established
  claim: C05
  detail: research.md#c05
  source: ''
  checked: '2026-10-26'
  qualification: The bounded gap is not evidence of opposition, absence of practice or poor engineering. General
    principles cannot fill it.
  evidence_kind: Not established
  published: Not established
  practice_date: Not established
  source_id: ''
  ai_specific: false
  source_format: Not established
- id: D06
  title: Human understanding and review
  position: Require code review for designer-authored AI-assisted changes.
  evidence: Stated
  claim: C06
  detail: research.md#c06
  source: https://monzo.com/blog/how-Monzo-Designers-are-shipping-safer-faster-product-improvements
  checked: '2026-10-26'
  qualification: The account retains ordinary production expectations; actual review depth was not observed.
  evidence_kind: Reported team use
  published: '2026-03-20'
  practice_date: Designer examples before March publication; exact session dates unknown
  source_id: S02
  ai_specific: true
  source_format: Authored practitioner case collection
- id: D07
  title: Agent autonomy and coordination
  position: Route current Agent Chip work as distinct one-shot jobs.
  evidence: Stated
  claim: C07
  detail: research.md#c07
  source: https://monzo.com/blog/building-agent-chip
  checked: '2026-10-26'
  qualification: Incident assistance is separately described; no complete multi-agent fleet policy is established.
  evidence_kind: Reported company use
  published: '2026-08-13'
  practice_date: Build decision in late 2025; capabilities reported August 2026
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
- id: D08
  title: Context and durable state
  position: Expose repository, documentation and operational context through shared infrastructure.
  evidence: Stated
  claim: C08
  detail: research.md#c08
  source: https://monzo.com/blog/building-agent-chip
  checked: '2026-10-26'
  qualification: Access is task-dependent; this is not proof of unrestricted access.
  evidence_kind: Reported company use
  published: '2026-08-13'
  practice_date: Build decision in late 2025; capabilities reported August 2026
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
- id: D09
  title: Tooling and environment
  position: Designers report using Cursor to understand and change code.
  evidence: Stated
  claim: C09
  detail: research.md#c09
  source: https://monzo.com/blog/how-Monzo-Designers-are-shipping-safer-faster-product-improvements
  checked: '2026-10-26'
  qualification: March personal/team examples do not establish every engineer’s October tool choice.
  evidence_kind: Reported team use
  published: '2026-03-20'
  practice_date: Designer examples before March publication; exact session dates unknown
  source_id: S02
  ai_specific: true
  source_format: Authored practitioner case collection
- id: D10
  title: Integration and release
  position: Keep production deployment with engineers who completed required safety checks.
  evidence: Stated
  claim: C10
  detail: research.md#c10
  source: https://monzo.com/blog/how-Monzo-Designers-are-shipping-safer-faster-product-improvements
  checked: '2026-10-26'
  qualification: Specific designer workflow; no complete company rollback process is supplied.
  evidence_kind: Reported team use
  published: '2026-03-20'
  practice_date: Designer examples before March publication; exact session dates unknown
  source_id: S02
  ai_specific: true
  source_format: Authored practitioner case collection
- id: D11
  title: Boundaries and safeguards
  position: Isolate agent bundles and mediate external access through a restricted proxy.
  evidence: Stated
  claim: C11
  detail: research.md#c11
  source: https://monzo.com/blog/building-agent-chip
  checked: '2026-10-26'
  qualification: Reported architecture, not an independently executed security audit.
  evidence_kind: Reported company use
  published: '2026-08-13'
  practice_date: Build decision in late 2025; capabilities reported August 2026
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
- id: D12
  title: Evaluation and tradeoffs
  position: Attribute agent work and cost to workflows and teams.
  evidence: Stated
  claim: C12
  detail: research.md#c12
  source: https://monzo.com/blog/building-agent-chip
  checked: '2026-10-26'
  qualification: The article supplies adoption signals, not a controlled quality or productivity result.
  evidence_kind: Reported company use
  published: '2026-08-13'
  practice_date: Build decision in late 2025; capabilities reported August 2026
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
comparison_group: banking
---

# Monzo: building software using AI

[Detailed research](research.md) · [Observed workflow and optional practice](workflow.md) · [Source register](sources.md) · [Slide notes](slides.md) · [Open slideshow]({{ '/companies/monzo/learn/' | relative_url }}) · [Company comparison](../comparison.md)

Monzo documents both designers making scoped production-code changes and an owned Agent Chip platform. The March and August accounts distinguish access to implementation from mandatory review and controlled deployment.

**Evidence scope:** March 2026 designer contribution cases and August Agent Chip platform account; not a universal autonomous-release policy.

Publication window: **1 October 2025–26 October 2026**. Publication, practice and inspection dates are distinct. Only actual AI-assisted development evidence fills the active fields; older OSS background and unverified private setup do not.

## What makes this a useful engineering study

Control of context, credentials and execution in a regulated bank. The open-source link provides a concrete place to inspect code, contribution practices and engineering artifacts. It is background for selection, not proof that this AI workflow produced that project or that every team works identically.

## Comparison evidence

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated · Reported company use.** Move routine work and contextual investigation off engineering queues.

A stated platform objective; reported task counts are not quality measurements.

Source format: Authored engineering article. Published / revision: **2026-08-13**. Practice: Build decision in late 2025; capabilities reported August 2026. Checked: 2026-10-26.

[Primary source](https://monzo.com/blog/building-agent-chip) · [Source register](sources.md#s01)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Stated · Reported team use.** Start with a concrete mismatch on an owned product surface.

A designer example, not a company-wide specification template.

Source format: Authored practitioner case collection. Published / revision: **2026-03-20**. Practice: Designer examples before March publication; exact session dates unknown. Checked: 2026-10-26.

[Primary source](https://monzo.com/blog/how-Monzo-Designers-are-shipping-safer-faster-product-improvements) · [Source register](sources.md#s02)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Stated · Reported team use.** Keep early designer changes small and scoped with an engineering partner.

No universal code-size limit or permission for arbitrary end-to-end features follows.

Source format: Authored practitioner case collection. Published / revision: **2026-03-20**. Practice: Designer examples before March publication; exact session dates unknown. Checked: 2026-10-26.

[Primary source](https://monzo.com/blog/how-Monzo-Designers-are-shipping-safer-faster-product-improvements) · [Source register](sources.md#s02)

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Not established · Not established.** A recent AI-assisted development policy for this dimension is not established in the reviewed accounts.

The bounded gap is not evidence of opposition, absence of practice or poor engineering. General principles cannot fill it.

Source format: Not established. Published / revision: **Not established**. Practice: Not established. Checked: 2026-10-26.

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Not established · Not established.** A recent AI-assisted development policy for this dimension is not established in the reviewed accounts.

The bounded gap is not evidence of opposition, absence of practice or poor engineering. General principles cannot fill it.

Source format: Not established. Published / revision: **Not established**. Practice: Not established. Checked: 2026-10-26.

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated · Reported team use.** Require code review for designer-authored AI-assisted changes.

The account retains ordinary production expectations; actual review depth was not observed.

Source format: Authored practitioner case collection. Published / revision: **2026-03-20**. Practice: Designer examples before March publication; exact session dates unknown. Checked: 2026-10-26.

[Primary source](https://monzo.com/blog/how-Monzo-Designers-are-shipping-safer-faster-product-improvements) · [Source register](sources.md#s02)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Stated · Reported company use.** Route current Agent Chip work as distinct one-shot jobs.

Incident assistance is separately described; no complete multi-agent fleet policy is established.

Source format: Authored engineering article. Published / revision: **2026-08-13**. Practice: Build decision in late 2025; capabilities reported August 2026. Checked: 2026-10-26.

[Primary source](https://monzo.com/blog/building-agent-chip) · [Source register](sources.md#s01)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Stated · Reported company use.** Expose repository, documentation and operational context through shared infrastructure.

Access is task-dependent; this is not proof of unrestricted access.

Source format: Authored engineering article. Published / revision: **2026-08-13**. Practice: Build decision in late 2025; capabilities reported August 2026. Checked: 2026-10-26.

[Primary source](https://monzo.com/blog/building-agent-chip) · [Source register](sources.md#s01)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Stated · Reported team use.** Designers report using Cursor to understand and change code.

March personal/team examples do not establish every engineer’s October tool choice.

Source format: Authored practitioner case collection. Published / revision: **2026-03-20**. Practice: Designer examples before March publication; exact session dates unknown. Checked: 2026-10-26.

[Primary source](https://monzo.com/blog/how-Monzo-Designers-are-shipping-safer-faster-product-improvements) · [Source register](sources.md#s02)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Stated · Reported team use.** Keep production deployment with engineers who completed required safety checks.

Specific designer workflow; no complete company rollback process is supplied.

Source format: Authored practitioner case collection. Published / revision: **2026-03-20**. Practice: Designer examples before March publication; exact session dates unknown. Checked: 2026-10-26.

[Primary source](https://monzo.com/blog/how-Monzo-Designers-are-shipping-safer-faster-product-improvements) · [Source register](sources.md#s02)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Stated · Reported company use.** Isolate agent bundles and mediate external access through a restricted proxy.

Reported architecture, not an independently executed security audit.

Source format: Authored engineering article. Published / revision: **2026-08-13**. Practice: Build decision in late 2025; capabilities reported August 2026. Checked: 2026-10-26.

[Primary source](https://monzo.com/blog/building-agent-chip) · [Source register](sources.md#s01)

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Stated · Reported company use.** Attribute agent work and cost to workflows and teams.

The article supplies adoption signals, not a controlled quality or productivity result.

Source format: Authored engineering article. Published / revision: **2026-08-13**. Practice: Build decision in late 2025; capabilities reported August 2026. Checked: 2026-10-26.

[Primary source](https://monzo.com/blog/building-agent-chip) · [Source register](sources.md#s01)
