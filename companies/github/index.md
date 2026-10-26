---
title: GitHub
parent: Companies
nav_order: 7
company_profile: true
company_id: github
industry: Developer platform
organisation_context: Microsoft subsidiary
research_checked: '2026-10-26'
evidence_since: '2025-10-01'
published: '2026-03-31'
evidence_kind: Named practitioner / team account
last_updated: '2026-10-26'
last_read: null
status: unread
canonical_name: GitHub
has_children: true
cache_schema: 1
aliases:
- GitHub Inc.
practice_focus: coding-workflows
focus_note: Copilot Applied Science and the Copilot runtime migration. Neither is a GitHub-wide mandate.
research_cutoff: '2026-10-26'
tagline: Two real projects, two different units of delegation
summary: A team workflow plus an incremental migration; human-owned correctness remains distinct from model output.
strengths:
- Team planning
- Protected contracts
- Incremental migration
tools_summary: March Copilot CLI/VS Code account; September runtime-port retrospective. Current private company-wide
  stack unknown.
slides_url: /companies/github/learn/
dimensions:
- id: D01
  title: Goal and bottleneck
  claim: C01
  detail: research.md#c01
  checked: '2026-10-26'
  position: The team reduced repetitive trajectory-analysis work.
  evidence: Stated
  source: https://github.blog/ai-and-ml/github-copilot/agent-driven-development-in-copilot-applied-science/
  qualification: One project’s objective, not a company-wide bottleneck.
  evidence_kind: Reported team use
  published: '2026-03-31'
  practice_date: Work before publication; exact sessions not dated
  source_id: S01
  ai_specific: true
  source_format: Authored practitioner article
- id: D02
  title: Requirements and specification
  claim: C02
  detail: research.md#c02
  checked: '2026-10-26'
  position: McGoffin planned conversationally before implementation.
  evidence: Stated
  source: https://github.blog/ai-and-ml/github-copilot/agent-driven-development-in-copilot-applied-science/
  qualification: Reported planning habit, not a fixed GitHub specification template.
  evidence_kind: Reported team use
  published: '2026-03-31'
  practice_date: Work before publication; exact sessions not dated
  source_id: S01
  ai_specific: true
  source_format: Authored practitioner article
- id: D03
  title: Increment and planning
  claim: C03
  detail: research.md#c03
  checked: '2026-10-26'
  position: The migration replaced components incrementally.
  evidence: Stated
  source: https://github.blog/ai-and-ml/generative-ai/migrating-the-github-copilot-runtime-to-rust-using-copilot/
  qualification: Reported migration cadence; not a universal PR-size rule.
  evidence_kind: Reported team use
  published: 2026-09-16 (updated 2026-09-23)
  practice_date: May–August 2026 migration; retrospective
  source_id: S02
  ai_specific: true
  source_format: Authored engineering case study
- id: D04
  title: Testing and verification
  claim: C04
  detail: research.md#c04
  checked: '2026-10-26'
  position: Existing E2E tests gated port changes.
  evidence: Stated
  source: https://github.blog/ai-and-ml/generative-ai/migrating-the-github-copilot-runtime-to-rust-using-copilot/
  qualification: Preservation checks did not prevent every regression.
  evidence_kind: Reported team use
  published: 2026-09-16 (updated 2026-09-23)
  practice_date: May–August 2026 migration; retrospective
  source_id: S02
  ai_specific: true
  source_format: Authored engineering case study
- id: D05
  title: Design and refactoring
  claim: C05
  detail: research.md#c05
  checked: '2026-10-26'
  position: The port prioritized compatibility over redesign.
  evidence: Stated
  source: https://github.blog/ai-and-ml/generative-ai/migrating-the-github-copilot-runtime-to-rust-using-copilot/
  qualification: Specific translation constraint; later redesign remained separate.
  evidence_kind: Reported team use
  published: 2026-09-16 (updated 2026-09-23)
  practice_date: May–August 2026 migration; retrospective
  source_id: S02
  ai_specific: true
  source_format: Authored engineering case study
- id: D06
  title: Human understanding and review
  claim: C06
  detail: research.md#c06
  checked: '2026-10-26'
  position: Automated review preceded final human review.
  evidence: Stated
  source: https://github.blog/ai-and-ml/github-copilot/agent-driven-development-in-copilot-applied-science/
  qualification: Named team workflow, not every GitHub repository.
  evidence_kind: Reported team use
  published: '2026-03-31'
  practice_date: Work before publication; exact sessions not dated
  source_id: S01
  ai_specific: true
  source_format: Authored practitioner article
- id: D07
  title: Agent autonomy and coordination
  claim: C07
  detail: research.md#c07
  checked: '2026-10-26'
  position: Agents handled scoped porting and review work.
  evidence: Stated
  source: https://github.blog/ai-and-ml/generative-ai/migrating-the-github-copilot-runtime-to-rust-using-copilot/
  qualification: Coordination retained an engineer; no universal safe agent count.
  evidence_kind: Reported team use
  published: 2026-09-16 (updated 2026-09-23)
  practice_date: May–August 2026 migration; retrospective
  source_id: S02
  ai_specific: true
  source_format: Authored engineering case study
- id: D08
  title: Context and durable state
  claim: C08
  detail: research.md#c08
  checked: '2026-10-26'
  position: Repository documentation evolved with the work.
  evidence: Stated
  source: https://github.blog/ai-and-ml/github-copilot/agent-driven-development-in-copilot-applied-science/
  qualification: The account does not establish a private organisation-wide memory service.
  evidence_kind: Reported team use
  published: '2026-03-31'
  practice_date: Work before publication; exact sessions not dated
  source_id: S01
  ai_specific: true
  source_format: Authored practitioner article
- id: D09
  title: Tooling and environment
  claim: C09
  detail: research.md#c09
  checked: '2026-10-26'
  position: The account names Copilot CLI and VS Code.
  evidence: Stated
  source: https://github.blog/ai-and-ml/github-copilot/agent-driven-development-in-copilot-applied-science/
  qualification: March setup; not a complete October inventory.
  evidence_kind: Reported team use
  published: '2026-03-31'
  practice_date: Work before publication; exact sessions not dated
  source_id: S01
  ai_specific: true
  source_format: Authored practitioner article
- id: D10
  title: Integration and release
  claim: C10
  detail: research.md#c10
  checked: '2026-10-26'
  position: The migration shipped through incremental mainline releases.
  evidence: Stated
  source: https://github.blog/ai-and-ml/generative-ai/migrating-the-github-copilot-runtime-to-rust-using-copilot/
  qualification: Case-specific release practice, not a company-wide deployment policy.
  evidence_kind: Reported team use
  published: 2026-09-16 (updated 2026-09-23)
  practice_date: May–August 2026 migration; retrospective
  source_id: S02
  ai_specific: true
  source_format: Authored engineering case study
- id: D11
  title: Boundaries and safeguards
  claim: C11
  detail: research.md#c11
  checked: '2026-10-26'
  position: Regression contracts remained under human control.
  evidence: Stated
  source: https://github.blog/ai-and-ml/github-copilot/agent-driven-development-in-copilot-applied-science/
  qualification: Reported safeguard; independently enforced access controls not inspected.
  evidence_kind: Reported team use
  published: '2026-03-31'
  practice_date: Work before publication; exact sessions not dated
  source_id: S01
  ai_specific: true
  source_format: Authored practitioner article
- id: D12
  title: Evaluation and tradeoffs
  claim: C12
  detail: research.md#c12
  checked: '2026-10-26'
  position: The author reports gains alongside escaped regressions.
  evidence: Stated
  source: https://github.blog/ai-and-ml/generative-ai/migrating-the-github-copilot-runtime-to-rust-using-copilot/
  qualification: Self-report; code size and issue rates are imperfect quality measures.
  evidence_kind: Reported team use
  published: 2026-09-16 (updated 2026-09-23)
  practice_date: May–August 2026 migration; retrospective
  source_id: S02
  ai_specific: true
  source_format: Authored engineering case study
comparison_group: developer-tools
---

# GitHub: building software using AI

[Detailed research](research.md) · [Observed workflow and optional practice](workflow.md) · [Source register](sources.md) · [Bite-size notes](slides.md) · [Open slideshow]({{ '/companies/github/learn/' | relative_url }}) · [Compare approaches](../comparison.md)

## Two real projects, two different units of delegation

A team workflow plus an incremental migration; human-owned correctness remains distinct from model output.

**Scope:** Copilot Applied Science and the Copilot runtime migration. Neither is a GitHub-wide mandate.

Publication window: **1 October 2025–26 October 2026**. A revision dates an artifact, not every original passage or every session. A team, personal account, policy, research study and observed runtime result remain different evidence.

## Comparison claims

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated · Reported team use.** The team reduced repetitive trajectory-analysis work.

One project’s objective, not a company-wide bottleneck.

Publication / revision: **2026-03-31**. Practice: Work before publication; exact sessions not dated. Checked: 2026-10-26. Format: Authored practitioner article.

[Primary evidence](https://github.blog/ai-and-ml/github-copilot/agent-driven-development-in-copilot-applied-science/) · [Source record](sources.md#s01)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Stated · Reported team use.** McGoffin planned conversationally before implementation.

Reported planning habit, not a fixed GitHub specification template.

Publication / revision: **2026-03-31**. Practice: Work before publication; exact sessions not dated. Checked: 2026-10-26. Format: Authored practitioner article.

[Primary evidence](https://github.blog/ai-and-ml/github-copilot/agent-driven-development-in-copilot-applied-science/) · [Source record](sources.md#s01)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Stated · Reported team use.** The migration replaced components incrementally.

Reported migration cadence; not a universal PR-size rule.

Publication / revision: **2026-09-16 (updated 2026-09-23)**. Practice: May–August 2026 migration; retrospective. Checked: 2026-10-26. Format: Authored engineering case study.

[Primary evidence](https://github.blog/ai-and-ml/generative-ai/migrating-the-github-copilot-runtime-to-rust-using-copilot/) · [Source record](sources.md#s02)

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Stated · Reported team use.** Existing E2E tests gated port changes.

Preservation checks did not prevent every regression.

Publication / revision: **2026-09-16 (updated 2026-09-23)**. Practice: May–August 2026 migration; retrospective. Checked: 2026-10-26. Format: Authored engineering case study.

[Primary evidence](https://github.blog/ai-and-ml/generative-ai/migrating-the-github-copilot-runtime-to-rust-using-copilot/) · [Source record](sources.md#s02)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Stated · Reported team use.** The port prioritized compatibility over redesign.

Specific translation constraint; later redesign remained separate.

Publication / revision: **2026-09-16 (updated 2026-09-23)**. Practice: May–August 2026 migration; retrospective. Checked: 2026-10-26. Format: Authored engineering case study.

[Primary evidence](https://github.blog/ai-and-ml/generative-ai/migrating-the-github-copilot-runtime-to-rust-using-copilot/) · [Source record](sources.md#s02)

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated · Reported team use.** Automated review preceded final human review.

Named team workflow, not every GitHub repository.

Publication / revision: **2026-03-31**. Practice: Work before publication; exact sessions not dated. Checked: 2026-10-26. Format: Authored practitioner article.

[Primary evidence](https://github.blog/ai-and-ml/github-copilot/agent-driven-development-in-copilot-applied-science/) · [Source record](sources.md#s01)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Stated · Reported team use.** Agents handled scoped porting and review work.

Coordination retained an engineer; no universal safe agent count.

Publication / revision: **2026-09-16 (updated 2026-09-23)**. Practice: May–August 2026 migration; retrospective. Checked: 2026-10-26. Format: Authored engineering case study.

[Primary evidence](https://github.blog/ai-and-ml/generative-ai/migrating-the-github-copilot-runtime-to-rust-using-copilot/) · [Source record](sources.md#s02)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Stated · Reported team use.** Repository documentation evolved with the work.

The account does not establish a private organisation-wide memory service.

Publication / revision: **2026-03-31**. Practice: Work before publication; exact sessions not dated. Checked: 2026-10-26. Format: Authored practitioner article.

[Primary evidence](https://github.blog/ai-and-ml/github-copilot/agent-driven-development-in-copilot-applied-science/) · [Source record](sources.md#s01)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Stated · Reported team use.** The account names Copilot CLI and VS Code.

March setup; not a complete October inventory.

Publication / revision: **2026-03-31**. Practice: Work before publication; exact sessions not dated. Checked: 2026-10-26. Format: Authored practitioner article.

[Primary evidence](https://github.blog/ai-and-ml/github-copilot/agent-driven-development-in-copilot-applied-science/) · [Source record](sources.md#s01)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Stated · Reported team use.** The migration shipped through incremental mainline releases.

Case-specific release practice, not a company-wide deployment policy.

Publication / revision: **2026-09-16 (updated 2026-09-23)**. Practice: May–August 2026 migration; retrospective. Checked: 2026-10-26. Format: Authored engineering case study.

[Primary evidence](https://github.blog/ai-and-ml/generative-ai/migrating-the-github-copilot-runtime-to-rust-using-copilot/) · [Source record](sources.md#s02)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Stated · Reported team use.** Regression contracts remained under human control.

Reported safeguard; independently enforced access controls not inspected.

Publication / revision: **2026-03-31**. Practice: Work before publication; exact sessions not dated. Checked: 2026-10-26. Format: Authored practitioner article.

[Primary evidence](https://github.blog/ai-and-ml/github-copilot/agent-driven-development-in-copilot-applied-science/) · [Source record](sources.md#s01)

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Stated · Reported team use.** The author reports gains alongside escaped regressions.

Self-report; code size and issue rates are imperfect quality measures.

Publication / revision: **2026-09-16 (updated 2026-09-23)**. Practice: May–August 2026 migration; retrospective. Checked: 2026-10-26. Format: Authored engineering case study.

[Primary evidence](https://github.blog/ai-and-ml/generative-ai/migrating-the-github-copilot-runtime-to-rust-using-copilot/) · [Source record](sources.md#s02)
