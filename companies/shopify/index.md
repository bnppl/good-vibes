---
title: Shopify
parent: Companies
nav_order: 3
company_profile: true
company_id: shopify
industry: Commerce
organisation_context: Large public company
research_checked: '2026-10-26'
evidence_since: '2025-10-01'
published: '2026-10-22'
evidence_kind: Reported team use
last_updated: '2026-10-26'
last_read: null
status: unread
canonical_name: Shopify
has_children: true
cache_schema: 1
aliases: []
practice_focus: coding-workflows
focus_note: Reported Shopify mobile-platform, AppSec and River workflows; no single universal development policy
  is inferred.
research_cutoff: '2026-10-26'
tagline: Make the work executable, then keep its evidence current.
summary: Make the work executable, then keep its evidence current. Reported Shopify mobile-platform, AppSec and
  River workflows; no single universal development policy is inferred.
strengths:
- Executable verification
- Current-head evidence
- Shared context
tools_summary: River in Slack; World monorepo and Nix substrate; Remote Dev mobile environments; Dispatch security
  scanning. Internal configuration and a complete daily stack remain private.
slides_url: /companies/shopify/learn/
dimensions:
- id: D01
  title: Goal and bottleneck
  position: Delegation outgrew the available mobile build capacity.
  evidence: Stated
  claim: C01
  detail: research.md#c01
  source: https://shopify.engineering/remote-dev
  checked: '2026-10-26'
  qualification: Mobile platform case, not a company-wide productivity measurement.
  evidence_kind: Reported team use
  published: '2026-10-22'
  practice_date: Mobile workflows before publication; exact sessions not stated
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
- id: D02
  title: Requirements and specification
  position: Remediation rechecks the finding against live state.
  evidence: Stated
  claim: C02
  detail: research.md#c02
  source: https://shopify.engineering/river-vulnerability-remediation
  checked: '2026-10-26'
  qualification: A security-specific starting condition, not a universal requirements format.
  evidence_kind: Reported team use
  published: '2026-09-02'
  practice_date: Remediation runs before publication; exact dates not stated
  source_id: S02
  ai_specific: true
  source_format: Authored engineering article
- id: D03
  title: Increment and planning
  position: Dispatch partitions scanning work before parallel hunting.
  evidence: Stated
  claim: C03
  detail: research.md#c03
  source: https://shopify.engineering/building-an-agentic-harness-that-outlasts-the-model
  checked: '2026-10-26'
  qualification: Scanning scope is not the size of ordinary feature increments.
  evidence_kind: Reported team use
  published: '2026-07-29'
  practice_date: Five-month exploration and recent scanning period; exact session dates not stated
  source_id: S03
  ai_specific: true
  source_format: Authored engineering article
- id: D04
  title: Testing and verification
  position: Candidate vulnerabilities must survive executable verification.
  evidence: Stated
  claim: C04
  detail: research.md#c04
  source: https://shopify.engineering/building-an-agentic-harness-that-outlasts-the-model
  checked: '2026-10-26'
  qualification: The reported test oracle is domain-specific; no full current TDD policy follows.
  evidence_kind: Reported team use
  published: '2026-07-29'
  practice_date: Five-month exploration and recent scanning period; exact session dates not stated
  source_id: S03
  ai_specific: true
  source_format: Authored engineering article
- id: D05
  title: Design and refactoring
  position: The account invests in reproducible shared infrastructure.
  evidence: Stated
  claim: C05
  detail: research.md#c05
  source: https://shopify.engineering/under-the-river
  checked: '2026-10-26'
  qualification: Retrospective infrastructure choices do not establish a mandatory application architecture.
  evidence_kind: Reported company use
  published: '2026-05-28'
  practice_date: Retrospective beginning in 2024 and River usage before publication
  source_id: S04
  ai_specific: true
  source_format: Authored engineering article
- id: D06
  title: Human understanding and review
  position: Owners retain product-risk and merge decisions.
  evidence: Stated
  claim: C06
  detail: research.md#c06
  source: https://shopify.engineering/river-vulnerability-remediation
  checked: '2026-10-26'
  qualification: A reported authority boundary, not an independently audited permission system.
  evidence_kind: Reported team use
  published: '2026-09-02'
  practice_date: Remediation runs before publication; exact dates not stated
  source_id: S02
  ai_specific: true
  source_format: Authored engineering article
- id: D07
  title: Agent autonomy and coordination
  position: Separate remote environments support parallel mobile work.
  evidence: Stated
  claim: C07
  detail: research.md#c07
  source: https://shopify.engineering/remote-dev
  checked: '2026-10-26'
  qualification: Parallel task execution does not establish unlimited unattended delivery.
  evidence_kind: Reported team use
  published: '2026-10-22'
  practice_date: Mobile workflows before publication; exact sessions not stated
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
- id: D08
  title: Context and durable state
  position: Shared threads and repository guidance preserve knowledge.
  evidence: Stated
  claim: C08
  detail: research.md#c08
  source: https://shopify.engineering/under-the-river
  checked: '2026-10-26'
  qualification: An organisational learning mechanism, not proof of perfect or automatic memory.
  evidence_kind: Reported company use
  published: '2026-05-28'
  practice_date: Retrospective beginning in 2024 and River usage before publication
  source_id: S04
  ai_specific: true
  source_format: Authored engineering article
- id: D09
  title: Tooling and environment
  position: River can exercise iOS and Android environments.
  evidence: Stated
  claim: C09
  detail: research.md#c09
  source: https://shopify.engineering/remote-dev
  checked: '2026-10-26'
  qualification: A dated mobile capability account; the private installed configuration was not inspected.
  evidence_kind: Reported team use
  published: '2026-10-22'
  practice_date: Mobile workflows before publication; exact sessions not stated
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
- id: D10
  title: Integration and release
  position: Closure is checked after merge on repository head.
  evidence: Stated
  claim: C10
  detail: research.md#c10
  source: https://shopify.engineering/river-vulnerability-remediation
  checked: '2026-10-26'
  qualification: Repository/tracker closure does not establish a universal production deployment policy.
  evidence_kind: Reported team use
  published: '2026-09-02'
  practice_date: Remediation runs before publication; exact dates not stated
  source_id: S02
  ai_specific: true
  source_format: Authored engineering article
- id: D11
  title: Boundaries and safeguards
  position: Deterministic infrastructure owns credentials, Git and storage.
  evidence: Stated
  claim: C11
  detail: research.md#c11
  source: https://shopify.engineering/building-an-agentic-harness-that-outlasts-the-model
  checked: '2026-10-26'
  qualification: Reported AppSec harness architecture; exact private permission configuration is not public here.
  evidence_kind: Reported team use
  published: '2026-07-29'
  practice_date: Five-month exploration and recent scanning period; exact session dates not stated
  source_id: S03
  ai_specific: true
  source_format: Authored engineering article
- id: D12
  title: Evaluation and tradeoffs
  position: A stopped or superseded patch can be correct.
  evidence: Stated
  claim: C12
  detail: research.md#c12
  source: https://shopify.engineering/river-vulnerability-remediation
  checked: '2026-10-26'
  qualification: Evaluation concerns evidence-supported remediation rather than patch volume.
  evidence_kind: Reported team use
  published: '2026-09-02'
  practice_date: Remediation runs before publication; exact dates not stated
  source_id: S02
  ai_specific: true
  source_format: Authored engineering article
comparison_group: commerce
---

# Shopify: how software is built using AI

[Research](research.md) · [Sources](sources.md) · [Workflow and optional practice](workflow.md) · [Slide notes](slides.md) · [Slideshow]({{ '/companies/shopify/learn/' | relative_url }})

[Company comparison](../comparison.md) · [Company cohort](../index.md)

Reported Shopify mobile-platform, AppSec and River workflows; no single universal development policy is inferred.

Evidence window: **1 October 2025–26 October 2026**. Publication, practice and inspection dates remain separate. The sources describe reported work; the cache does not claim an independent execution or organisation-wide audit.

## Research map

Start with the [documented cases](research.md#documented-cases), then read the [observed workflow](workflow.md#observed-workflow). The optional exercise is our adaptation, not company practice. Open-source work is background for inspectability, not proof of the internal agent stack.

## Comparison claims

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated · Reported team use.** Delegation outgrew the available mobile build capacity.

Mobile platform case, not a company-wide productivity measurement.

Source format: Authored engineering article. Published: **2026-10-22**. Practice: Mobile workflows before publication; exact sessions not stated. Checked: 2026-10-26.

[Primary source](https://shopify.engineering/remote-dev) · [Source register](sources.md#s01)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Stated · Reported team use.** Remediation rechecks the finding against live state.

A security-specific starting condition, not a universal requirements format.

Source format: Authored engineering article. Published: **2026-09-02**. Practice: Remediation runs before publication; exact dates not stated. Checked: 2026-10-26.

[Primary source](https://shopify.engineering/river-vulnerability-remediation) · [Source register](sources.md#s02)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Stated · Reported team use.** Dispatch partitions scanning work before parallel hunting.

Scanning scope is not the size of ordinary feature increments.

Source format: Authored engineering article. Published: **2026-07-29**. Practice: Five-month exploration and recent scanning period; exact session dates not stated. Checked: 2026-10-26.

[Primary source](https://shopify.engineering/building-an-agentic-harness-that-outlasts-the-model) · [Source register](sources.md#s03)

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Stated · Reported team use.** Candidate vulnerabilities must survive executable verification.

The reported test oracle is domain-specific; no full current TDD policy follows.

Source format: Authored engineering article. Published: **2026-07-29**. Practice: Five-month exploration and recent scanning period; exact session dates not stated. Checked: 2026-10-26.

[Primary source](https://shopify.engineering/building-an-agentic-harness-that-outlasts-the-model) · [Source register](sources.md#s03)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Stated · Reported company use.** The account invests in reproducible shared infrastructure.

Retrospective infrastructure choices do not establish a mandatory application architecture.

Source format: Authored engineering article. Published: **2026-05-28**. Practice: Retrospective beginning in 2024 and River usage before publication. Checked: 2026-10-26.

[Primary source](https://shopify.engineering/under-the-river) · [Source register](sources.md#s04)

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated · Reported team use.** Owners retain product-risk and merge decisions.

A reported authority boundary, not an independently audited permission system.

Source format: Authored engineering article. Published: **2026-09-02**. Practice: Remediation runs before publication; exact dates not stated. Checked: 2026-10-26.

[Primary source](https://shopify.engineering/river-vulnerability-remediation) · [Source register](sources.md#s02)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Stated · Reported team use.** Separate remote environments support parallel mobile work.

Parallel task execution does not establish unlimited unattended delivery.

Source format: Authored engineering article. Published: **2026-10-22**. Practice: Mobile workflows before publication; exact sessions not stated. Checked: 2026-10-26.

[Primary source](https://shopify.engineering/remote-dev) · [Source register](sources.md#s01)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Stated · Reported company use.** Shared threads and repository guidance preserve knowledge.

An organisational learning mechanism, not proof of perfect or automatic memory.

Source format: Authored engineering article. Published: **2026-05-28**. Practice: Retrospective beginning in 2024 and River usage before publication. Checked: 2026-10-26.

[Primary source](https://shopify.engineering/under-the-river) · [Source register](sources.md#s04)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Stated · Reported team use.** River can exercise iOS and Android environments.

A dated mobile capability account; the private installed configuration was not inspected.

Source format: Authored engineering article. Published: **2026-10-22**. Practice: Mobile workflows before publication; exact sessions not stated. Checked: 2026-10-26.

[Primary source](https://shopify.engineering/remote-dev) · [Source register](sources.md#s01)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Stated · Reported team use.** Closure is checked after merge on repository head.

Repository/tracker closure does not establish a universal production deployment policy.

Source format: Authored engineering article. Published: **2026-09-02**. Practice: Remediation runs before publication; exact dates not stated. Checked: 2026-10-26.

[Primary source](https://shopify.engineering/river-vulnerability-remediation) · [Source register](sources.md#s02)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Stated · Reported team use.** Deterministic infrastructure owns credentials, Git and storage.

Reported AppSec harness architecture; exact private permission configuration is not public here.

Source format: Authored engineering article. Published: **2026-07-29**. Practice: Five-month exploration and recent scanning period; exact session dates not stated. Checked: 2026-10-26.

[Primary source](https://shopify.engineering/building-an-agentic-harness-that-outlasts-the-model) · [Source register](sources.md#s03)

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Stated · Reported team use.** A stopped or superseded patch can be correct.

Evaluation concerns evidence-supported remediation rather than patch volume.

Source format: Authored engineering article. Published: **2026-09-02**. Practice: Remediation runs before publication; exact dates not stated. Checked: 2026-10-26.

[Primary source](https://shopify.engineering/river-vulnerability-remediation) · [Source register](sources.md#s02)
