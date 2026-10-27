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
research_cutoff: '2026-10-27'
research_checked: '2026-10-27'
last_updated: '2026-10-27'
last_read: null
status: unread
tagline: Make decisions visible. Turn recurring feedback into tools.
summary: Contrasts 'lights-on' supervised software factories against unconstrained 'dark' vibe-coding ('markdown prayers'), publishing a pinned Claude Code factory based on Votito.
strengths:
- Collaborative specifications
- Deterministic orchestration
- Human decision visibility
tools_summary: Publishes a Claude Code 'lights-on' factory based on Votito, with Docker/make, a PreToolUse Bash regulator, PostToolUse ESLint hook, and deterministic workflow compiler. Inspected, not executed.
slides_url: /engineers/gojko-adzic/learn/
dimensions:
- id: D01
  title: Goal and bottleneck
  position: 'Make product decisions and human supervision effective as code production accelerates, avoiding both unconstrained "dark factory" chaos and the "Chef Gusteau" trap of building flawless code nobody ordered.'
  evidence: Stated
  claim: C01
  detail: recent-ai.md#c01
  source: https://gojko.net/slides/202609-gotocph.pdf
  checked: '2026-10-27'
  qualification: Advocacy and a product-role forecast (with June 2026 essay S10); not a measured universal bottleneck for every team.
  evidence_kind: Recommendation
  published: 2026-09
  practice_date: Conference slides; exact day not established
  source_id: S01
  ai_specific: true
  source_format: Conference slides
- id: D02
  title: Requirements and specification
  position: 'The October 2026 published workflow runs an interactive `/impact-analysis` that checks problem statements against existing code, asks up to four clarifying questions per round across scope and edge cases, and records out-of-scope items before planning.'
  evidence: Demonstrated
  claim: C02
  detail: recent-ai.md#c02
  source: https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/WORKFLOW.md
  checked: '2026-10-27'
  qualification: Pinned public artifact (`WORKFLOW.md` and `/impact-analysis`); replaces the broad one-shot spec generation he criticised in his September 2025 Spec Kit trial (S02), though not proof of every private Votito session.
  evidence_kind: Published artifact
  published: '2026-10-22'
  practice_date: Pinned repository revision; not an executed run
  source_id: S04
  ai_specific: true
  source_format: Repository artifact
- id: D03
  title: Increment and planning
  position: 'The inspected October 2026 factory workflow (`/plan-execution`) compiles approved impact analyses into phased `plans/<name>.plan.json` sidecars with declared writable files, dependencies and parallel execution groups.'
  evidence: Demonstrated
  claim: C03
  detail: recent-ai.md#c03
  source: https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/WORKFLOW.md
  checked: '2026-10-27'
  qualification: Demonstrated means an inspected published artifact, not an executed session. The sample targets larger changes but explicitly permits skipping impact analysis for small tasks.
  evidence_kind: Published artifact
  published: '2026-10-22'
  practice_date: Pinned repository revision; not an executed run
  source_id: S04
  ai_specific: true
  source_format: Repository artifact
- id: D04
  title: Testing and verification
  position: 'The published factory agent instructions require `workflow-worker` agents to write a failing test before implementation and run file-scoped checks, followed by `workflow-gate` merged-tree checks (up to three rework rounds) and a read-only `workflow-check` skeptic.'
  evidence: Demonstrated
  claim: C04
  detail: recent-ai.md#c04
  source: https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/workspace/.claude/agents/workflow-worker.md
  checked: '2026-10-27'
  qualification: Inspected instructions, not observed execution. Writing a failing test first is explicit; actual red-phase execution and adherence were not verified. Later gates do not imply tests-after development.
  evidence_kind: Published artifact
  published: '2026-10-22'
  practice_date: Pinned repository revision; not an executed run
  source_id: S15
  ai_specific: true
  source_format: Repository artifact
- id: D05
  title: Design and refactoring
  position: 'The October 2026 factory artifact encodes recurring code-quality feedback into a blocking PostToolUse ESLint hook (`lint-edited-file.js`) rather than relying on prompt rules ("markdown prayers").'
  evidence: Demonstrated
  claim: C05
  detail: recent-ai.md#c05
  source: https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/LINTER-HOOK.md
  checked: '2026-10-27'
  qualification: Published maintainability mechanism; covers eligible JS/MJS edits, not a comprehensive architecture or refactoring policy.
  evidence_kind: Published artifact
  published: '2026-10-22'
  practice_date: Pinned repository revision; not an executed run
  source_id: S07
  ai_specific: true
  source_format: Repository artifact
- id: D06
  title: Human understanding and review
  position: 'Advocates a "lights-on" supervision progression (`Dictating → Regulating → Supervising`) where consequential decisions stay visible and agents produce structured evidence for humans to certify, rather than inspecting only a "dark factory" final dump.'
  evidence: Stated
  claim: C06
  detail: recent-ai.md#c06
  source: https://gojko.net/slides/202609-gotocph.pdf
  checked: '2026-10-27'
  qualification: A staged direction for supervision, not permission to discard all code review for every change.
  evidence_kind: Recommendation
  published: 2026-09
  practice_date: Conference slides; exact day not established
  source_id: S01
  ai_specific: true
  source_format: Conference slides
- id: D07
  title: Agent autonomy and coordination
  position: 'The inspected October 2026 factory compiles approved plans into deterministic `.workflow.mjs` scripts that schedule scoped `workflow-worker`, `workflow-gate` and `workflow-check` roles without LLM orchestration overhead.'
  evidence: Demonstrated
  claim: C07
  detail: recent-ai.md#c07
  source: https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/ORCHESTRATOR.md
  checked: '2026-10-27'
  qualification: Public boilerplate based on Votito, not a complete current private team configuration; no universal agent-count recommendation.
  evidence_kind: Published artifact
  published: '2026-10-22'
  practice_date: Pinned repository revision; not an executed run
  source_id: S05
  ai_specific: true
  source_format: Repository artifact
- id: D08
  title: Context and durable state
  position: 'The inspected public workflow retains versioned markdown plans (`plans/<name>.md`), JSON plan sidecars (`.plan.json`) and structured progress logs (`.progress.jsonl`), while generated `.workflow.mjs` execution scripts are disposable.'
  evidence: Demonstrated
  claim: C08
  detail: recent-ai.md#c08
  source: https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/WORKFLOW.md
  checked: '2026-10-27'
  qualification: Project-state convention, not proof that every kind of learning or context is retained automatically.
  evidence_kind: Published artifact
  published: '2026-10-22'
  practice_date: Pinned repository revision; not an executed run
  source_id: S04
  ai_specific: true
  source_format: Repository artifact
- id: D09
  title: Tooling and environment
  position: 'The public factory at its pinned October 2026 revision documents Docker/make and Claude Code `/impact-analysis`, `/plan-execution`, `/execute` and `/regulator` commands.'
  evidence: Demonstrated
  claim: C09
  detail: recent-ai.md#c09
  source: https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/GETTING-STARTED.md
  checked: '2026-10-27'
  qualification: Documentation inspected at a pinned revision. Installation and feature availability were not runtime-tested.
  evidence_kind: Published artifact
  published: '2026-10-22'
  practice_date: Pinned repository revision; not an executed run
  source_id: S09
  ai_specific: true
  source_format: Repository artifact
- id: D10
  title: Integration and release
  position: 'Published factory guidance runs fast group gates (`workflow-serial-gate`) before a broader final gate (`workflow-final-gate`) and read-only refutation check; builds, tests and deployment checks must fit the target project.'
  evidence: Stated
  claim: C10
  detail: recent-ai.md#c10
  source: https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/ORCHESTRATOR.md
  checked: '2026-10-27'
  qualification: The sample is not a published end-to-end production deployment pipeline; exact private branch and rollback policies are unknown.
  evidence_kind: Published artifact
  published: '2026-10-22'
  practice_date: Pinned repository revision; not an executed run
  source_id: S05
  ai_specific: true
  source_format: Repository artifact
- id: D11
  title: Boundaries and safeguards
  position: 'The public artifact documents a deterministic PreToolUse Bash regulator (`bin/regulate.js`) with role-scoped command rules (restricting workers to their own files and blocking broad `sudo`/path traversal), edit-time lint hooks and a Docker container.'
  evidence: Demonstrated
  claim: C11
  detail: recent-ai.md#c11
  source: https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/REGULATOR.md
  checked: '2026-10-27'
  qualification: Hook scope is limited. A prompt or hook is not a comprehensive security boundary, and allowed `make` recipes execute beyond direct hook inspection.
  evidence_kind: Published artifact
  published: '2026-10-22'
  practice_date: Pinned repository revision; not an executed run
  source_id: S06
  ai_specific: true
  source_format: Repository artifact
- id: D12
  title: Evaluation and tradeoffs
  position: 'Reports that shifting repeatable orchestration and micro-decisions from LLM inference to deterministic computation cut token spend by ~80% (and ran 6–10x faster) on Votito, while warning that AI speed still requires product validation.'
  evidence: Stated
  claim: C12
  detail: recent-ai.md#c12
  source: https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/README.md
  checked: '2026-10-27'
  qualification: Context-specific Votito self-reports in S01/S03 and historical survey correlations (S11) do not establish a controlled cross-engineer benchmark.
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

**Stated · Recommendation.** Make product decisions and human supervision effective as code production accelerates, avoiding both unconstrained "dark factory" chaos and the "Chef Gusteau" trap of building flawless code nobody ordered.

Source format: Conference slides.

Published: **2026-09**. Practice: Conference slides; exact day not established.

Advocacy and a product-role forecast (with June 2026 essay S10); not a measured universal bottleneck for every team.

[Recent evidence](recent-ai.md#c01) · [Primary source](https://gojko.net/slides/202609-gotocph.pdf)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Demonstrated · Published artifact.** The October 2026 published workflow runs an interactive `/impact-analysis` that checks problem statements against existing code, asks up to four clarifying questions per round across scope and edge cases, and records out-of-scope items before planning.

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run.

Pinned public artifact (`WORKFLOW.md` and `/impact-analysis`); replaces the broad one-shot spec generation he criticised in his September 2025 Spec Kit trial (S02), though not proof of every private Votito session.

[Recent evidence](recent-ai.md#c02) · [Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/WORKFLOW.md)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Demonstrated · Published artifact.** The inspected October 2026 factory workflow (`/plan-execution`) compiles approved impact analyses into phased `plans/<name>.plan.json` sidecars with declared writable files, dependencies and parallel execution groups.

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run.

Demonstrated means an inspected published artifact, not an executed session. The sample targets larger changes but explicitly permits skipping impact analysis for small tasks.

[Recent evidence](recent-ai.md#c03) · [Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/WORKFLOW.md)

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Demonstrated · Published artifact.** The published factory agent instructions require `workflow-worker` agents to write a failing test before implementation and run file-scoped checks, followed by `workflow-gate` merged-tree checks (up to three rework rounds) and a read-only `workflow-check` skeptic.

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run.

Inspected instructions, not observed execution. Writing a failing test first is explicit; actual red-phase execution and adherence were not verified. Later gates do not imply tests-after development.

[Recent evidence](recent-ai.md#c04) · [Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/workspace/.claude/agents/workflow-worker.md)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Demonstrated · Published artifact.** The October 2026 factory artifact encodes recurring code-quality feedback into a blocking PostToolUse ESLint hook (`lint-edited-file.js`) rather than relying on prompt rules ("markdown prayers").

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run.

Published maintainability mechanism; covers eligible JS/MJS edits, not a comprehensive architecture or refactoring policy.

[Recent evidence](recent-ai.md#c05) · [Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/LINTER-HOOK.md)

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated · Recommendation.** Advocates a "lights-on" supervision progression (`Dictating → Regulating → Supervising`) where consequential decisions stay visible and agents produce structured evidence for humans to certify, rather than inspecting only a "dark factory" final dump.

Source format: Conference slides.

Published: **2026-09**. Practice: Conference slides; exact day not established.

A staged direction for supervision, not permission to discard all code review for every change.

[Recent evidence](recent-ai.md#c06) · [Primary source](https://gojko.net/slides/202609-gotocph.pdf)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Demonstrated · Published artifact.** The inspected October 2026 factory compiles approved plans into deterministic `.workflow.mjs` scripts that schedule scoped `workflow-worker`, `workflow-gate` and `workflow-check` roles without LLM orchestration overhead.

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run.

Public boilerplate based on Votito, not a complete current private team configuration; no universal agent-count recommendation.

[Recent evidence](recent-ai.md#c07) · [Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/ORCHESTRATOR.md)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Demonstrated · Published artifact.** The inspected public workflow retains versioned markdown plans (`plans/<name>.md`), JSON plan sidecars (`.plan.json`) and structured progress logs (`.progress.jsonl`), while generated `.workflow.mjs` execution scripts are disposable.

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run.

Project-state convention, not proof that every kind of learning or context is retained automatically.

[Recent evidence](recent-ai.md#c08) · [Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/WORKFLOW.md)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Demonstrated · Published artifact.** The public factory at its pinned October 2026 revision documents Docker/make and Claude Code `/impact-analysis`, `/plan-execution`, `/execute` and `/regulator` commands.

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run.

Documentation inspected at a pinned revision. Installation and feature availability were not runtime-tested.

[Recent evidence](recent-ai.md#c09) · [Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/GETTING-STARTED.md)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Stated · Published artifact.** Published factory guidance runs fast group gates (`workflow-serial-gate`) before a broader final gate (`workflow-final-gate`) and read-only refutation check; builds, tests and deployment checks must fit the target project.

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run.

The sample is not a published end-to-end production deployment pipeline; exact private branch and rollback policies are unknown.

[Recent evidence](recent-ai.md#c10) · [Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/ORCHESTRATOR.md)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Demonstrated · Published artifact.** The public artifact documents a deterministic PreToolUse Bash regulator (`bin/regulate.js`) with role-scoped command rules (restricting workers to their own files and blocking broad `sudo`/path traversal), edit-time lint hooks and a Docker container.

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run.

Hook scope is limited. A prompt or hook is not a comprehensive security boundary, and allowed `make` recipes execute beyond direct hook inspection.

[Recent evidence](recent-ai.md#c11) · [Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/REGULATOR.md)

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Stated · Published artifact.** Reports that shifting repeatable orchestration and micro-decisions from LLM inference to deterministic computation cut token spend by ~80% (and ran 6–10x faster) on Votito, while warning that AI speed still requires product validation.

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run.

Context-specific Votito self-reports in S01/S03 and historical survey correlations (S11) do not establish a controlled cross-engineer benchmark.

[Recent evidence](recent-ai.md#c12) · [Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/README.md)
