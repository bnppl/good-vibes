---
title: Spotify
parent: Companies
nav_order: 4
company_profile: true
company_id: spotify
industry: Music / media
organisation_context: Large public company
research_checked: '2026-10-26'
evidence_since: '2025-10-01'
published: '2025-11-24'
evidence_kind: Reported team use
last_updated: '2026-10-26'
last_read: null
status: unread
canonical_name: Spotify
has_children: true
cache_schema: 1
aliases: []
practice_focus: coding-workflows
focus_note: Honk and Fleet Management publications at different dates, including a dataset migration with explicit
  verification gaps.
research_cutoff: '2026-10-26'
tagline: Fleet automation works only as well as its context and feedback.
summary: Fleet automation works only as well as its context and feedback. Honk and Fleet Management publications
  at different dates, including a dataset migration with explicit verification gaps.
strengths:
- Migration orchestration
- Scoped context
- Verification boundaries
tools_summary: Honk / Claude Code, Fleetshift, Backstage, restricted verification/Git tools and Kubernetes-hosted
  background sessions. Tool access evolved; November restrictions are not silently applied to later versions.
slides_url: /companies/spotify/learn/
dimensions:
- id: D01
  title: Goal and bottleneck
  position: Maintenance and migrations motivate fleet-level automation.
  evidence: Stated
  claim: C01
  detail: research.md#c01
  source: https://engineering.atspotify.com/2026/6/code-with-claude-coding-is-no-longer-the-constraint
  checked: '2026-10-26'
  qualification: Reported organisational bottleneck, not a universal diagnosis.
  evidence_kind: Reported company use
  published: '2026-06-03'
  practice_date: Retrospective and usage reported by June publication
  source_id: S04
  ai_specific: true
  source_format: Written talk highlights
- id: D02
  title: Requirements and specification
  position: Migration prompts require explicit field mappings.
  evidence: Stated
  claim: C02
  detail: research.md#c02
  source: https://engineering.atspotify.com/2026/4/background-coding-agents-dataset-migrations-honk-part-4
  checked: '2026-10-26'
  qualification: One dataset migration; ambiguous cases were not resolved by guessing.
  evidence_kind: Reported team use
  published: '2026-04-22'
  practice_date: Migration initiated after late-2025 deprecation planning
  source_id: S03
  ai_specific: true
  source_format: Authored engineering article
- id: D03
  title: Increment and planning
  position: The team recommends one bounded change per prompt.
  evidence: Stated
  claim: C03
  detail: research.md#c03
  source: https://engineering.atspotify.com/2025/11/context-engineering-background-coding-agents-part-2
  checked: '2026-10-26'
  qualification: This is prompting advice, not an enforced universal increment limit.
  evidence_kind: Recommendation
  published: '2025-11-24'
  practice_date: Retrospective experiments and then-current migration practice
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
- id: D04
  title: Testing and verification
  position: Independent verifiers run before agent PR creation.
  evidence: Stated
  claim: C04
  detail: research.md#c04
  source: https://engineering.atspotify.com/2025/12/feedback-loops-background-coding-agents-part-3
  checked: '2026-10-26'
  qualification: The later dataset case lacked automated coverage in some repositories; do not assume uniform verification.
  evidence_kind: Reported team use
  published: 2025-12-09
  practice_date: Feedback-loop design before publication
  source_id: S02
  ai_specific: true
  source_format: Authored engineering article
- id: D05
  title: Design and refactoring
  position: Consistent codebases make agent work more tractable.
  evidence: Stated
  claim: C05
  detail: research.md#c05
  source: https://engineering.atspotify.com/2026/6/code-with-claude-coding-is-no-longer-the-constraint
  checked: '2026-10-26'
  qualification: A reported platform observation, not a universal application architecture.
  evidence_kind: Reported company use
  published: '2026-06-03'
  practice_date: Retrospective and usage reported by June publication
  source_id: S04
  ai_specific: true
  source_format: Written talk highlights
- id: D06
  title: Human understanding and review
  position: Owning teams manually tested uncovered migration changes.
  evidence: Stated
  claim: C06
  detail: research.md#c06
  source: https://engineering.atspotify.com/2026/4/background-coding-agents-dataset-migrations-honk-part-4
  checked: '2026-10-26'
  qualification: Case-specific fallback; no company-wide rule requiring manual testing of every change.
  evidence_kind: Reported team use
  published: '2026-04-22'
  practice_date: Migration initiated after late-2025 deprecation planning
  source_id: S03
  ai_specific: true
  source_format: Authored engineering article
- id: D07
  title: Agent autonomy and coordination
  position: Fleetshift coordinates multiple background agent sessions.
  evidence: Stated
  claim: C07
  detail: research.md#c07
  source: https://engineering.atspotify.com/2026/6/code-with-claude-coding-is-no-longer-the-constraint
  checked: '2026-10-26'
  qualification: Orchestration is distinct from the coding agent’s own reasoning and from release authority.
  evidence_kind: Reported company use
  published: '2026-06-03'
  practice_date: Retrospective and usage reported by June publication
  source_id: S04
  ai_specific: true
  source_format: Written talk highlights
- id: D08
  title: Context and durable state
  position: The November design favoured bounded supplied context.
  evidence: Stated
  claim: C08
  detail: research.md#c08
  source: https://engineering.atspotify.com/2025/11/context-engineering-background-coding-agents-part-2
  checked: '2026-10-26'
  qualification: That version limited dynamic retrieval; later roadmaps and deployments must remain separately dated.
  evidence_kind: Reported team use
  published: '2025-11-24'
  practice_date: Retrospective experiments and then-current migration practice
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
- id: D09
  title: Tooling and environment
  position: Honk runs within the existing developer platform.
  evidence: Stated
  claim: C09
  detail: research.md#c09
  source: https://engineering.atspotify.com/2026/6/code-with-claude-coding-is-no-longer-the-constraint
  checked: '2026-10-26'
  qualification: The internal system is not established as an open-source release.
  evidence_kind: Reported company use
  published: '2026-06-03'
  practice_date: Retrospective and usage reported by June publication
  source_id: S04
  ai_specific: true
  source_format: Written talk highlights
- id: D10
  title: Integration and release
  position: Migration PRs remained subject to owning-team verification.
  evidence: Stated
  claim: C10
  detail: research.md#c10
  source: https://engineering.atspotify.com/2026/4/background-coding-agents-dataset-migrations-honk-part-4
  checked: '2026-10-26'
  qualification: This case does not establish a universal merge or production-release policy.
  evidence_kind: Reported team use
  published: '2026-04-22'
  practice_date: Migration initiated after late-2025 deprecation planning
  source_id: S03
  ai_specific: true
  source_format: Authored engineering article
- id: D11
  title: Boundaries and safeguards
  position: Git and shell access were deliberately constrained.
  evidence: Stated
  claim: C11
  detail: research.md#c11
  source: https://engineering.atspotify.com/2025/11/context-engineering-background-coding-agents-part-2
  checked: '2026-10-26'
  qualification: November tool restrictions; exact present private enforcement was not inspected.
  evidence_kind: Reported team use
  published: '2025-11-24'
  practice_date: Retrospective experiments and then-current migration practice
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
- id: D12
  title: Evaluation and tradeoffs
  position: Unsupported migration scope was deferred.
  evidence: Stated
  claim: C12
  detail: research.md#c12
  source: https://engineering.atspotify.com/2026/4/background-coding-agents-dataset-migrations-honk-part-4
  checked: '2026-10-26'
  qualification: A reported tradeoff; the estimated manual effort is not a controlled productivity result.
  evidence_kind: Reported team use
  published: '2026-04-22'
  practice_date: Migration initiated after late-2025 deprecation planning
  source_id: S03
  ai_specific: true
  source_format: Authored engineering article
comparison_group: media
---

# Spotify: how software is built using AI

[Research](research.md) · [Sources](sources.md) · [Workflow and optional practice](workflow.md) · [Slide notes](slides.md) · [Slideshow]({{ '/companies/spotify/learn/' | relative_url }})

[Company comparison](../comparison.md) · [Company cohort](../index.md)

Honk and Fleet Management publications at different dates, including a dataset migration with explicit verification gaps.

Evidence window: **1 October 2025–26 October 2026**. Publication, practice and inspection dates remain separate. The sources describe reported work; the cache does not claim an independent execution or organisation-wide audit.

## Research map

Start with the [documented cases](research.md#documented-cases), then read the [observed workflow](workflow.md#observed-workflow). The optional exercise is our adaptation, not company practice. Open-source work is background for inspectability, not proof of the internal agent stack.

## Comparison claims

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated · Reported company use.** Maintenance and migrations motivate fleet-level automation.

Reported organisational bottleneck, not a universal diagnosis.

Source format: Written talk highlights. Published: **2026-06-03**. Practice: Retrospective and usage reported by June publication. Checked: 2026-10-26.

[Primary source](https://engineering.atspotify.com/2026/6/code-with-claude-coding-is-no-longer-the-constraint) · [Source register](sources.md#s04)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Stated · Reported team use.** Migration prompts require explicit field mappings.

One dataset migration; ambiguous cases were not resolved by guessing.

Source format: Authored engineering article. Published: **2026-04-22**. Practice: Migration initiated after late-2025 deprecation planning. Checked: 2026-10-26.

[Primary source](https://engineering.atspotify.com/2026/4/background-coding-agents-dataset-migrations-honk-part-4) · [Source register](sources.md#s03)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Stated · Recommendation.** The team recommends one bounded change per prompt.

This is prompting advice, not an enforced universal increment limit.

Source format: Authored engineering article. Published: **2025-11-24**. Practice: Retrospective experiments and then-current migration practice. Checked: 2026-10-26.

[Primary source](https://engineering.atspotify.com/2025/11/context-engineering-background-coding-agents-part-2) · [Source register](sources.md#s01)

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Stated · Reported team use.** Independent verifiers run before agent PR creation.

The later dataset case lacked automated coverage in some repositories; do not assume uniform verification.

Source format: Authored engineering article. Published: **2025-12-09**. Practice: Feedback-loop design before publication. Checked: 2026-10-26.

[Primary source](https://engineering.atspotify.com/2025/12/feedback-loops-background-coding-agents-part-3) · [Source register](sources.md#s02)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Stated · Reported company use.** Consistent codebases make agent work more tractable.

A reported platform observation, not a universal application architecture.

Source format: Written talk highlights. Published: **2026-06-03**. Practice: Retrospective and usage reported by June publication. Checked: 2026-10-26.

[Primary source](https://engineering.atspotify.com/2026/6/code-with-claude-coding-is-no-longer-the-constraint) · [Source register](sources.md#s04)

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated · Reported team use.** Owning teams manually tested uncovered migration changes.

Case-specific fallback; no company-wide rule requiring manual testing of every change.

Source format: Authored engineering article. Published: **2026-04-22**. Practice: Migration initiated after late-2025 deprecation planning. Checked: 2026-10-26.

[Primary source](https://engineering.atspotify.com/2026/4/background-coding-agents-dataset-migrations-honk-part-4) · [Source register](sources.md#s03)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Stated · Reported company use.** Fleetshift coordinates multiple background agent sessions.

Orchestration is distinct from the coding agent’s own reasoning and from release authority.

Source format: Written talk highlights. Published: **2026-06-03**. Practice: Retrospective and usage reported by June publication. Checked: 2026-10-26.

[Primary source](https://engineering.atspotify.com/2026/6/code-with-claude-coding-is-no-longer-the-constraint) · [Source register](sources.md#s04)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Stated · Reported team use.** The November design favoured bounded supplied context.

That version limited dynamic retrieval; later roadmaps and deployments must remain separately dated.

Source format: Authored engineering article. Published: **2025-11-24**. Practice: Retrospective experiments and then-current migration practice. Checked: 2026-10-26.

[Primary source](https://engineering.atspotify.com/2025/11/context-engineering-background-coding-agents-part-2) · [Source register](sources.md#s01)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Stated · Reported company use.** Honk runs within the existing developer platform.

The internal system is not established as an open-source release.

Source format: Written talk highlights. Published: **2026-06-03**. Practice: Retrospective and usage reported by June publication. Checked: 2026-10-26.

[Primary source](https://engineering.atspotify.com/2026/6/code-with-claude-coding-is-no-longer-the-constraint) · [Source register](sources.md#s04)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Stated · Reported team use.** Migration PRs remained subject to owning-team verification.

This case does not establish a universal merge or production-release policy.

Source format: Authored engineering article. Published: **2026-04-22**. Practice: Migration initiated after late-2025 deprecation planning. Checked: 2026-10-26.

[Primary source](https://engineering.atspotify.com/2026/4/background-coding-agents-dataset-migrations-honk-part-4) · [Source register](sources.md#s03)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Stated · Reported team use.** Git and shell access were deliberately constrained.

November tool restrictions; exact present private enforcement was not inspected.

Source format: Authored engineering article. Published: **2025-11-24**. Practice: Retrospective experiments and then-current migration practice. Checked: 2026-10-26.

[Primary source](https://engineering.atspotify.com/2025/11/context-engineering-background-coding-agents-part-2) · [Source register](sources.md#s01)

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Stated · Reported team use.** Unsupported migration scope was deferred.

A reported tradeoff; the estimated manual effort is not a controlled productivity result.

Source format: Authored engineering article. Published: **2026-04-22**. Practice: Migration initiated after late-2025 deprecation planning. Checked: 2026-10-26.

[Primary source](https://engineering.atspotify.com/2026/4/background-coding-agents-dataset-migrations-honk-part-4) · [Source register](sources.md#s03)
