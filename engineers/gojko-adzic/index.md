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
summary: A product-aware approach to specifications and supervised automation. His public factory makes planning,
  role boundaries and verification more explicit.
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
  detail: research.md#approach-in-brief
  source: https://gojko.net/slides/202609-gotocph.pdf
  checked: '2026-10-26'
  qualification: Advocacy and a product-role forecast; not a measured universal bottleneck for every team.
- id: D02
  title: Requirements and specification
  position: His September 2025 Spec Kit trial favours inspectable decisions and finer scope; the October 2026 public
    factory supplies an approvable planning format.
  evidence: Stated
  claim: C02
  detail: research.md#requirements-and-scope
  source: https://www.linkedin.com/pulse/spec-driven-development-revenge-waterfall-bdd-taken-gojko-adzic-imquf
  checked: '2026-10-26'
  qualification: Early Spec Kit findings are from September 2025; the later repository supplies a replaceable planning
    format.
- id: D03
  title: Increment and planning
  position: The inspected October 2026 factory workflow declares writable-file steps and green groups, with human
    phase/dependency approval.
  evidence: Demonstrated
  claim: C03
  detail: research.md#increment-and-planning
  source: https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/WORKFLOW.md
  checked: '2026-10-26'
  qualification: Demonstrated means an inspected published artifact, not an executed session. The sample targets
    larger changes but permits small tasks.
- id: D04
  title: Testing and verification
  position: The inspected factory artifact assigns worker-local checks, merged-work gates, and a final attempt to
    refute completion claims.
  evidence: Demonstrated
  claim: C04
  detail: research.md#testing-and-verification
  source: https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/ORCHESTRATOR.md
  checked: '2026-10-26'
  qualification: Inspected artifact; test strength and real behaviour still need independent evaluation in the target
    system.
- id: D05
  title: Design and refactoring
  position: His 2016 test-design advice organises documentation by function and avoids unnecessary test-execution
    coupling.
  evidence: Stated
  claim: C05
  detail: research.md#design-and-refactoring
  source: https://gojko.net/favourites/testing/agile/2016/05/24/large-test-suites.html
  checked: '2026-10-26'
  qualification: Historical test-design advice. No universal architecture or exact agent refactoring cadence is
    established.
- id: D06
  title: Human understanding and review
  position: Keep consequential decisions visible and humans supervising throughout, rather than only inspecting
    the final result.
  evidence: Stated
  claim: C06
  detail: research.md#human-review
  source: https://gojko.net/slides/202609-gotocph.pdf
  checked: '2026-10-26'
  qualification: A direction for supervision, not permission to discard all code review for every change.
- id: D07
  title: Agent autonomy and coordination
  position: The inspected October 2026 factory documentation describes deterministic scheduling of worker, gate
    and check roles from an approved plan.
  evidence: Demonstrated
  claim: C07
  detail: research.md#autonomy-and-coordination
  source: https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/ORCHESTRATOR.md
  checked: '2026-10-26'
  qualification: Public boilerplate based on Votito, not a complete current private team configuration; no universal
    agent-count recommendation.
- id: D08
  title: Context and durable state
  position: The inspected public workflow retains versioned plans and structured progress; generated execution scripts
    are disposable.
  evidence: Demonstrated
  claim: C08
  detail: research.md#context-and-durable-state
  source: https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/WORKFLOW.md
  checked: '2026-10-26'
  qualification: Project-state convention, not proof that every kind of learning or context is retained automatically.
- id: D09
  title: Tooling and environment
  position: The public factory at its pinned October 2026 revision documents Docker/make and Claude Code impact-analysis,
    planning and execution commands.
  evidence: Demonstrated
  claim: C09
  detail: tools.md#documented-setup
  source: https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/GETTING-STARTED.md
  checked: '2026-10-26'
  qualification: Documentation inspected at a pinned revision. Installation and feature availability were not runtime-tested.
- id: D10
  title: Integration and release
  position: Published factory guidance places fast group gates before a broader final check; builds, tests and deployment
    checks must fit the target project.
  evidence: Stated
  claim: C10
  detail: research.md#a-feature-from-idea-to-release
  source: https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/ORCHESTRATOR.md
  checked: '2026-10-26'
  qualification: The sample is not a published end-to-end production deployment pipeline; exact private branch and
    rollback policies are unknown.
- id: D11
  title: Boundaries and safeguards
  position: The public artifact documents role-scoped Bash regulation, edit-time lint and a container; runtime enforcement
    and isolation were not audited.
  evidence: Demonstrated
  claim: C11
  detail: tools.md#controls-and-their-limits
  source: https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/REGULATOR.md
  checked: '2026-10-26'
  qualification: Hook scope is limited. A prompt or hook is not a comprehensive security boundary, and invoked program
    internals can escape its inspection.
- id: D12
  title: Evaluation and tradeoffs
  position: Inspect outcomes, run cost and feedback quality; reported factory savings do not establish superiority
    over other workflows.
  evidence: Inferred
  claim: C12
  detail: research.md#evaluation-and-tradeoffs
  source: https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/README.md
  checked: '2026-10-26'
  qualification: Our evidence assessment. Repository self-reports and historical survey correlations are not a controlled
    cross-engineer trial.
practice_focus: coding-workflows
---

# Gojko Adžić

**Make decisions visible. Turn recurring feedback into tools.**

[Open slideshow]({{ '/engineers/gojko-adzic/learn/' | relative_url }}) · [Compare profiles]({{ '/engineers/compare/' | relative_url }})

[Detailed research](research.md) · [Common reward walkthrough](workflow.md) · [Tools and setup](tools.md) · [Source findings](sources.md) · [Slide notes](slides.md)

Research checked and cut off on **26 October 2026**. The public factory repository was inspected at revision `7e8ee8b4dcd9857da48845b187540e3e1891c70f` (22 October 2026). Paid book content and private Votito code were not accessed; no factory commands were executed.

## Comparison evidence

The evidence label applies to the position, not to all possible implications. An inspected artifact demonstrates a published design; it does not demonstrate real-world effectiveness.

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated.** Make product decisions and human review effective as code production accelerates.

Advocacy and a product-role forecast; not a measured universal bottleneck for every team.

[Detail](research.md#approach-in-brief) · [Primary source](https://gojko.net/slides/202609-gotocph.pdf)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Stated.** His September 2025 Spec Kit trial favours inspectable decisions and finer scope; the October 2026 public factory supplies an approvable planning format.

Early Spec Kit findings are from September 2025; the later repository supplies a replaceable planning format.

[Cached detail](research.md#requirements-and-scope) · [Primary source](https://www.linkedin.com/pulse/spec-driven-development-revenge-waterfall-bdd-taken-gojko-adzic-imquf)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Demonstrated.** The inspected October 2026 factory workflow declares writable-file steps and green groups, with human phase/dependency approval.

Demonstrated means an inspected published artifact, not an executed session. The sample targets larger changes but permits small tasks.

[Cached detail](research.md#increment-and-planning) · [Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/WORKFLOW.md)

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Demonstrated.** The inspected factory artifact assigns worker-local checks, merged-work gates, and a final attempt to refute completion claims.

Inspected artifact; test strength and real behaviour still need independent evaluation in the target system.

[Cached detail](research.md#testing-and-verification) · [Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/ORCHESTRATOR.md)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Stated.** His 2016 test-design advice organises documentation by function and avoids unnecessary test-execution coupling.

Historical test-design advice. No universal architecture or exact agent refactoring cadence is established.

[Cached detail](research.md#design-and-refactoring) · [Primary source](https://gojko.net/favourites/testing/agile/2016/05/24/large-test-suites.html)

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated.** Keep consequential decisions visible and humans supervising throughout, rather than only inspecting the final result.

A direction for supervision, not permission to discard all code review for every change.

[Detail](research.md#human-review) · [Primary source](https://gojko.net/slides/202609-gotocph.pdf)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Demonstrated.** The inspected October 2026 factory documentation describes deterministic scheduling of worker, gate and check roles from an approved plan.

Public boilerplate based on Votito, not a complete current private team configuration; no universal agent-count recommendation.

[Cached detail](research.md#autonomy-and-coordination) · [Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/ORCHESTRATOR.md)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Demonstrated.** The inspected public workflow retains versioned plans and structured progress; generated execution scripts are disposable.

Project-state convention, not proof that every kind of learning or context is retained automatically.

[Cached detail](research.md#context-and-durable-state) · [Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/WORKFLOW.md)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Demonstrated.** The public factory at its pinned October 2026 revision documents Docker/make and Claude Code impact-analysis, planning and execution commands.

Documentation inspected at a pinned revision. Installation and feature availability were not runtime-tested.

[Cached detail](tools.md#documented-setup) · [Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/GETTING-STARTED.md)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Stated.** Published factory guidance places fast group gates before a broader final check; builds, tests and deployment checks must fit the target project.

The sample is not a published end-to-end production deployment pipeline; exact private branch and rollback policies are unknown.

[Cached detail](research.md#a-feature-from-idea-to-release) · [Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/ORCHESTRATOR.md)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Demonstrated.** The public artifact documents role-scoped Bash regulation, edit-time lint and a container; runtime enforcement and isolation were not audited.

Hook scope is limited. A prompt or hook is not a comprehensive security boundary, and invoked program internals can escape its inspection.

[Cached detail](tools.md#controls-and-their-limits) · [Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/REGULATOR.md)

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Inferred.** Inspect outcomes, run cost and feedback quality; reported factory savings do not establish superiority over other workflows.

Our evidence assessment. Repository self-reports and historical survey correlations are not a controlled cross-engineer trial.

[Detail](research.md#evaluation-and-tradeoffs) · [Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/README.md)
