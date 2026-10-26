---
title: Gojko Adžić — recent AI evidence
parent: Gojko Adžić
nav_order: 0
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
evidence_since: '2025-10-01'
cache_schema: 1
---

# Gojko Adžić — recent AI evidence

[Profile](index.md) · [Source register](sources.md) · [Earlier research](research.md) · [Comparison history](background.md)

## Scope and dates

Publication window: **1 October 2025–26 October 2026**. Publication, practice and inspection dates are separate. This page prioritises actual use where documented; recommendations and inspected artifacts have their own labels. A newly published retrospective may describe older work.

## A pinned lights-on software factory

The cache records an October 2026 revision of the public lights-on factory: declared-file work, structured progress, explicitly test-first workers, integrated gates and command regulation. September conference slides supply the supervision argument. The repository is an inspectable artifact; no factory run or benchmark was reproduced.

[S04](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/WORKFLOW.md) · [S05](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/ORCHESTRATOR.md) · [S06](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/REGULATOR.md)

## Limits and background

The pinned revision is the evidence date for the artifact, not a dated private session. Older Spec Kit and test-design material remains background. Publication of the scaffold does not establish every detail of Votito production deployment.

The optional reward exercise in the earlier research/workflow remains our proposed adaptation. It is not the reported project above or evidence that the engineer follows the proposed sequence.

## Evidence used in the comparison

| Source | Published / revision | Relationship | Practice period |
|---|---|---|---|
| [S04](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/WORKFLOW.md) | 2026-10-22 | Published artifact | Pinned repository revision; not an executed run |
| [S05](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/ORCHESTRATOR.md) | 2026-10-22 | Published artifact | Pinned repository revision; not an executed run |
| [S06](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/REGULATOR.md) | 2026-10-22 | Published artifact | Pinned repository revision; not an executed run |
| [S01](https://gojko.net/slides/202609-gotocph.pdf) | 2026-09 | Recommendation | Conference slides; exact day not established |
| [S07](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/LINTER-HOOK.md) | 2026-10-22 | Published artifact | Pinned repository revision; not an executed run |
| [S09](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/GETTING-STARTED.md) | 2026-10-22 | Published artifact | Pinned repository revision; not an executed run |
| [S03](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/README.md) | 2026-10-22 | Published artifact | Pinned repository revision; not an executed run |

| [S15](sources.md#s15) | 2026-10-22 | Published worker instruction | Failing-test-first prescribed; not an executed run |
| [S16](sources.md#s16) | 2026-10-22 | Published planning instruction | Same-step tests and source, test first |

## Comparison claims

<a id="c01"></a>

### C01 · Goal and bottleneck

**Stated · Recommendation.** Make product decisions and human review effective as code production accelerates.

Source format: Conference slides.

Published: **2026-09**. Practice: Conference slides; exact day not established. Checked: 2026-10-26.

Advocacy and a product-role forecast; not a measured universal bottleneck for every team.

[Primary source](https://gojko.net/slides/202609-gotocph.pdf) · [Source register](sources.md#s01)

<a id="c02"></a>

### C02 · Requirements and specification

**Stated · Published artifact.** The October 2026 published workflow makes plans inspectable and divides execution into declared-file steps.

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run. Checked: 2026-10-26.

Pinned public artifact; not proof of a complete private requirements process.

[Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/WORKFLOW.md) · [Source register](sources.md#s04)

<a id="c03"></a>

### C03 · Increment and planning

**Demonstrated · Published artifact.** The inspected October 2026 factory workflow declares writable-file steps and green groups, with human phase/dependency approval.

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run. Checked: 2026-10-26.

Demonstrated means an inspected published artifact, not an executed session. The sample targets larger changes but permits small tasks.

[Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/WORKFLOW.md) · [Source register](sources.md#s04)

<a id="c04"></a>

### C04 · Testing and verification

**Demonstrated · Published artifact.** The published worker instructions explicitly require a failing test before implementation. Local verification, merged-work gates and a final refutation check add further layers.

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run. Checked: 2026-10-26.

Inspected instructions, not observed execution. Test-writing order is explicit, but actual red-phase execution and agent adherence were not verified. The worker also directs running local verification once when work is done.

[Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/workspace/.claude/agents/workflow-worker.md) · [Source register](sources.md#s05)

<a id="c05"></a>

### C05 · Design and refactoring

**Stated · Published artifact.** The October 2026 factory artifact supplies edit-time lint feedback for recurring code-quality issues.

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run. Checked: 2026-10-26.

Published maintainability mechanism; not a comprehensive architecture or refactoring policy.

[Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/LINTER-HOOK.md) · [Source register](sources.md#s07)

<a id="c06"></a>

### C06 · Human understanding and review

**Stated · Recommendation.** Keep consequential decisions visible and humans supervising throughout, rather than only inspecting the final result.

Source format: Conference slides.

Published: **2026-09**. Practice: Conference slides; exact day not established. Checked: 2026-10-26.

A direction for supervision, not permission to discard all code review for every change.

[Primary source](https://gojko.net/slides/202609-gotocph.pdf) · [Source register](sources.md#s01)

<a id="c07"></a>

### C07 · Agent autonomy and coordination

**Demonstrated · Published artifact.** The inspected October 2026 factory documentation describes deterministic scheduling of worker, gate and check roles from an approved plan.

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run. Checked: 2026-10-26.

Public boilerplate based on Votito, not a complete current private team configuration; no universal agent-count recommendation.

[Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/ORCHESTRATOR.md) · [Source register](sources.md#s05)

<a id="c08"></a>

### C08 · Context and durable state

**Demonstrated · Published artifact.** The inspected public workflow retains versioned plans and structured progress; generated execution scripts are disposable.

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run. Checked: 2026-10-26.

Project-state convention, not proof that every kind of learning or context is retained automatically.

[Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/WORKFLOW.md) · [Source register](sources.md#s04)

<a id="c09"></a>

### C09 · Tooling and environment

**Demonstrated · Published artifact.** The public factory at its pinned October 2026 revision documents Docker/make and Claude Code impact-analysis, planning and execution commands.

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run. Checked: 2026-10-26.

Documentation inspected at a pinned revision. Installation and feature availability were not runtime-tested.

[Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/GETTING-STARTED.md) · [Source register](sources.md#s09)

<a id="c10"></a>

### C10 · Integration and release

**Stated · Published artifact.** Published factory guidance places fast group gates before a broader final check; builds, tests and deployment checks must fit the target project.

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run. Checked: 2026-10-26.

The sample is not a published end-to-end production deployment pipeline; exact private branch and rollback policies are unknown.

[Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/ORCHESTRATOR.md) · [Source register](sources.md#s05)

<a id="c11"></a>

### C11 · Boundaries and safeguards

**Demonstrated · Published artifact.** The public artifact documents role-scoped Bash regulation, edit-time lint and a container; runtime enforcement and isolation were not audited.

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run. Checked: 2026-10-26.

Hook scope is limited. A prompt or hook is not a comprehensive security boundary, and invoked program internals can escape its inspection.

[Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/REGULATOR.md) · [Source register](sources.md#s06)

<a id="c12"></a>

### C12 · Evaluation and tradeoffs

**Inferred · Published artifact.** Inspect outcomes, run cost and feedback quality; reported factory savings do not establish superiority over other workflows.

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run. Checked: 2026-10-26.

Our evidence assessment. Repository self-reports and historical survey correlations are not a controlled cross-engineer trial.

[Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/README.md) · [Source register](sources.md#s03)
