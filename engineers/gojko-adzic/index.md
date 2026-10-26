---
title: Gojko Adžić
parent: Engineers
has_children: true
nav_order: 7
engineer_profile: true
cache_schema: 1
person_id: gojko-adzic
canonical_name: Gojko Adžić
aliases:
- Gojko Adzic
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
last_updated: '2026-10-26'
last_read: null
status: unread
tagline: Make decisions visible. Turn recurring feedback into tools.
summary: A pinned lights-on software factory. Personal trials, recommendations and unknowns are dated separately.
strengths:
- Collaborative specifications
- Deterministic orchestration
- Human decision visibility
tools_summary: Publishes a Claude Code factory based on Votito, with container, regulator, lint and workflow tools.
  Inspected, not executed.
slides_url: /engineers/gojko-adzic/learn/
dimensions:
- id: D01
  title: Goal and bottleneck
  position: Make product decisions and human review effective as code production accelerates.
  evidence: Stated
  claim: C01
  detail: recent-ai.md#c01
  source: https://gojko.net/slides/202609-gotocph.pdf
  checked: '2026-10-26'
  qualification: Advocacy and a product-role forecast; not a measured universal bottleneck for every team.
  evidence_kind: Recommendation
  published: 2026-09
  practice_date: Conference slides; exact day not established
  source_id: S01
  ai_specific: true
  source_format: Conference slides
- id: D02
  title: Requirements and specification
  position: The October 2026 published workflow makes plans inspectable and divides execution into declared-file
    steps.
  evidence: Stated
  claim: C02
  detail: recent-ai.md#c02
  source: https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/WORKFLOW.md
  checked: '2026-10-26'
  qualification: Pinned public artifact; not proof of a complete private requirements process.
  evidence_kind: Published artifact
  published: '2026-10-22'
  practice_date: Pinned repository revision; not an executed run
  source_id: S04
  ai_specific: true
  source_format: Repository artifact
- id: D03
  title: Increment and planning
  position: The inspected October 2026 factory workflow declares writable-file steps and green groups, with human
    phase/dependency approval.
  evidence: Demonstrated
  claim: C03
  detail: recent-ai.md#c03
  source: https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/WORKFLOW.md
  checked: '2026-10-26'
  qualification: Demonstrated means an inspected published artifact, not an executed session. The sample targets
    larger changes but permits small tasks.
  evidence_kind: Published artifact
  published: '2026-10-22'
  practice_date: Pinned repository revision; not an executed run
  source_id: S04
  ai_specific: true
  source_format: Repository artifact
- id: D04
  title: Testing and verification
  position: The inspected factory artifact assigns worker-local checks, merged-work gates, and a final attempt to
    refute completion claims.
  evidence: Demonstrated
  claim: C04
  detail: recent-ai.md#c04
  source: https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/ORCHESTRATOR.md
  checked: '2026-10-26'
  qualification: Inspected artifact; test strength and real behaviour still need independent evaluation in the target
    system.
  evidence_kind: Published artifact
  published: '2026-10-22'
  practice_date: Pinned repository revision; not an executed run
  source_id: S05
  ai_specific: true
  source_format: Repository artifact
- id: D05
  title: Design and refactoring
  position: The October 2026 factory artifact supplies edit-time lint feedback for recurring code-quality issues.
  evidence: Stated
  claim: C05
  detail: recent-ai.md#c05
  source: https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/LINTER-HOOK.md
  checked: '2026-10-26'
  qualification: Published maintainability mechanism; not a comprehensive architecture or refactoring policy.
  evidence_kind: Published artifact
  published: '2026-10-22'
  practice_date: Pinned repository revision; not an executed run
  source_id: S07
  ai_specific: true
  source_format: Repository artifact
- id: D06
  title: Human understanding and review
  position: Keep consequential decisions visible and humans supervising throughout, rather than only inspecting
    the final result.
  evidence: Stated
  claim: C06
  detail: recent-ai.md#c06
  source: https://gojko.net/slides/202609-gotocph.pdf
  checked: '2026-10-26'
  qualification: A direction for supervision, not permission to discard all code review for every change.
  evidence_kind: Recommendation
  published: 2026-09
  practice_date: Conference slides; exact day not established
  source_id: S01
  ai_specific: true
  source_format: Conference slides
- id: D07
  title: Agent autonomy and coordination
  position: The inspected October 2026 factory documentation describes deterministic scheduling of worker, gate
    and check roles from an approved plan.
  evidence: Demonstrated
  claim: C07
  detail: recent-ai.md#c07
  source: https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/ORCHESTRATOR.md
  checked: '2026-10-26'
  qualification: Public boilerplate based on Votito, not a complete current private team configuration; no universal
    agent-count recommendation.
  evidence_kind: Published artifact
  published: '2026-10-22'
  practice_date: Pinned repository revision; not an executed run
  source_id: S05
  ai_specific: true
  source_format: Repository artifact
- id: D08
  title: Context and durable state
  position: The inspected public workflow retains versioned plans and structured progress; generated execution scripts
    are disposable.
  evidence: Demonstrated
  claim: C08
  detail: recent-ai.md#c08
  source: https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/WORKFLOW.md
  checked: '2026-10-26'
  qualification: Project-state convention, not proof that every kind of learning or context is retained automatically.
  evidence_kind: Published artifact
  published: '2026-10-22'
  practice_date: Pinned repository revision; not an executed run
  source_id: S04
  ai_specific: true
  source_format: Repository artifact
- id: D09
  title: Tooling and environment
  position: The public factory at its pinned October 2026 revision documents Docker/make and Claude Code impact-analysis,
    planning and execution commands.
  evidence: Demonstrated
  claim: C09
  detail: recent-ai.md#c09
  source: https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/GETTING-STARTED.md
  checked: '2026-10-26'
  qualification: Documentation inspected at a pinned revision. Installation and feature availability were not runtime-tested.
  evidence_kind: Published artifact
  published: '2026-10-22'
  practice_date: Pinned repository revision; not an executed run
  source_id: S09
  ai_specific: true
  source_format: Repository artifact
- id: D10
  title: Integration and release
  position: Published factory guidance places fast group gates before a broader final check; builds, tests and deployment
    checks must fit the target project.
  evidence: Stated
  claim: C10
  detail: recent-ai.md#c10
  source: https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/ORCHESTRATOR.md
  checked: '2026-10-26'
  qualification: The sample is not a published end-to-end production deployment pipeline; exact private branch and
    rollback policies are unknown.
  evidence_kind: Published artifact
  published: '2026-10-22'
  practice_date: Pinned repository revision; not an executed run
  source_id: S05
  ai_specific: true
  source_format: Repository artifact
- id: D11
  title: Boundaries and safeguards
  position: The public artifact documents role-scoped Bash regulation, edit-time lint and a container; runtime enforcement
    and isolation were not audited.
  evidence: Demonstrated
  claim: C11
  detail: recent-ai.md#c11
  source: https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/REGULATOR.md
  checked: '2026-10-26'
  qualification: Hook scope is limited. A prompt or hook is not a comprehensive security boundary, and invoked program
    internals can escape its inspection.
  evidence_kind: Published artifact
  published: '2026-10-22'
  practice_date: Pinned repository revision; not an executed run
  source_id: S06
  ai_specific: true
  source_format: Repository artifact
- id: D12
  title: Evaluation and tradeoffs
  position: Inspect outcomes, run cost and feedback quality; reported factory savings do not establish superiority
    over other workflows.
  evidence: Inferred
  claim: C12
  detail: recent-ai.md#c12
  source: https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/README.md
  checked: '2026-10-26'
  qualification: Our evidence assessment. Repository self-reports and historical survey correlations are not a controlled
    cross-engineer trial.
  evidence_kind: Published artifact
  published: '2026-10-22'
  practice_date: Pinned repository revision; not an executed run
  source_id: S03
  ai_specific: true
  source_format: Repository artifact
evidence_since: '2025-10-01'
evidence_focus: AI-specific publications since October 2025; personal use distinguished from advice
practice_focus: coding-workflows
---

# Gojko Adžić

[Recent AI evidence](recent-ai.md) · [Slideshow]({{ '/engineers/gojko-adzic/learn/' | relative_url }}) · [Compare profiles]({{ '/engineers/compare/' | relative_url }})

## Research map

[AI use and recent publications](recent-ai.md) · [Earlier detailed research](research.md) · [Source register](sources.md) · [Comparison history](background.md) · [Slide notes](slides.md)

The comparison prioritises AI-specific publications since **1 October 2025**. Publication date does not establish when a practice occurred. Older general advice no longer fills missing recent fields.

## Comparison evidence

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated · Recommendation.** Make product decisions and human review effective as code production accelerates.

Source format: Conference slides.

Published: **2026-09**. Practice: Conference slides; exact day not established.

Advocacy and a product-role forecast; not a measured universal bottleneck for every team.

[Recent evidence](recent-ai.md#c01) · [Primary source](https://gojko.net/slides/202609-gotocph.pdf)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Stated · Published artifact.** The October 2026 published workflow makes plans inspectable and divides execution into declared-file steps.

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run.

Pinned public artifact; not proof of a complete private requirements process.

[Recent evidence](recent-ai.md#c02) · [Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/WORKFLOW.md)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Demonstrated · Published artifact.** The inspected October 2026 factory workflow declares writable-file steps and green groups, with human phase/dependency approval.

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run.

Demonstrated means an inspected published artifact, not an executed session. The sample targets larger changes but permits small tasks.

[Recent evidence](recent-ai.md#c03) · [Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/WORKFLOW.md)

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Demonstrated · Published artifact.** The inspected factory artifact assigns worker-local checks, merged-work gates, and a final attempt to refute completion claims.

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run.

Inspected artifact; test strength and real behaviour still need independent evaluation in the target system.

[Recent evidence](recent-ai.md#c04) · [Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/ORCHESTRATOR.md)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Stated · Published artifact.** The October 2026 factory artifact supplies edit-time lint feedback for recurring code-quality issues.

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run.

Published maintainability mechanism; not a comprehensive architecture or refactoring policy.

[Recent evidence](recent-ai.md#c05) · [Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/LINTER-HOOK.md)

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated · Recommendation.** Keep consequential decisions visible and humans supervising throughout, rather than only inspecting the final result.

Source format: Conference slides.

Published: **2026-09**. Practice: Conference slides; exact day not established.

A direction for supervision, not permission to discard all code review for every change.

[Recent evidence](recent-ai.md#c06) · [Primary source](https://gojko.net/slides/202609-gotocph.pdf)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Demonstrated · Published artifact.** The inspected October 2026 factory documentation describes deterministic scheduling of worker, gate and check roles from an approved plan.

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run.

Public boilerplate based on Votito, not a complete current private team configuration; no universal agent-count recommendation.

[Recent evidence](recent-ai.md#c07) · [Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/ORCHESTRATOR.md)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Demonstrated · Published artifact.** The inspected public workflow retains versioned plans and structured progress; generated execution scripts are disposable.

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run.

Project-state convention, not proof that every kind of learning or context is retained automatically.

[Recent evidence](recent-ai.md#c08) · [Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/WORKFLOW.md)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Demonstrated · Published artifact.** The public factory at its pinned October 2026 revision documents Docker/make and Claude Code impact-analysis, planning and execution commands.

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run.

Documentation inspected at a pinned revision. Installation and feature availability were not runtime-tested.

[Recent evidence](recent-ai.md#c09) · [Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/GETTING-STARTED.md)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Stated · Published artifact.** Published factory guidance places fast group gates before a broader final check; builds, tests and deployment checks must fit the target project.

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run.

The sample is not a published end-to-end production deployment pipeline; exact private branch and rollback policies are unknown.

[Recent evidence](recent-ai.md#c10) · [Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/ORCHESTRATOR.md)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Demonstrated · Published artifact.** The public artifact documents role-scoped Bash regulation, edit-time lint and a container; runtime enforcement and isolation were not audited.

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run.

Hook scope is limited. A prompt or hook is not a comprehensive security boundary, and invoked program internals can escape its inspection.

[Recent evidence](recent-ai.md#c11) · [Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/REGULATOR.md)

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Inferred · Published artifact.** Inspect outcomes, run cost and feedback quality; reported factory savings do not establish superiority over other workflows.

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run.

Our evidence assessment. Repository self-reports and historical survey correlations are not a controlled cross-engineer trial.

[Recent evidence](recent-ai.md#c12) · [Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/README.md)
