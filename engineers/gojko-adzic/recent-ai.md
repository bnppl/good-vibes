---
title: Gojko Adžić — recent AI evidence
parent: Gojko Adžić
nav_order: 0
last_updated: '2026-10-27'
last_read: null
status: unread
research_cutoff: '2026-10-27'
research_checked: '2026-10-27'
evidence_since: '2025-10-01'
cache_schema: 1
---

# Gojko Adžić — recent AI evidence

[Profile](index.md) · [Source register](sources.md) · [Earlier research](research.md) · [Comparison history](background.md)

## Scope and dates

Publication window: **1 October 2025–27 October 2026**. Publication, practice and inspection dates are separate. This page prioritises actual use where documented; recommendations and inspected artifacts have their own labels. A newly published retrospective may describe older work.

## A pinned "lights-on" software factory vs. "dark factory" markdown prayers

In his September 2026 conference slides ([S01](https://gojko.net/slides/202609-gotocph.pdf)) and October 2026 `gojko/lights-on-software-factory` repository ([S03](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/README.md)), Adžić contrasts two paradigms for AI-assisted software delivery:
- **The "Dark Factory":** Fully automated, vibe-coded workflows where agents orchestrate other agents using loose prompt instructions (**"markdown prayers"**) and humans only evaluate the output at the very end.
- **The "Lights-On Factory":** Plan-driven automation anchored on a deterministic coordinating platform, where repeatable rules move from LLM inference into computation (`bin/regulate.js`, `lint-edited-file.js`, `.workflow.mjs`) and humans progress through **`Dictating → Regulating → Supervising`** by reviewing intermediate decisions and structured verification evidence.

The cache records the 22 October 2026 revision (`7e8ee8b4dcd9857da48845b187540e3e1891c70f`) of his public lights-on factory (based on Votito): interactive `/impact-analysis` ambiguity resolution, phased `.plan.json` sidecars with declared writable files, explicitly failing-test-first `workflow-worker` agents, merged-tree `workflow-gate` barriers, a read-only `workflow-check` skeptic, and role-scoped Bash command regulation. His June 2026 essay ([S10](https://gojko.net/2026/06/24/everyone-will-be-a-pm/)) complements this by warning of the **"Chef Gusteau" / "junk food" trap**—when AI makes code generation effortless, teams lacking product management skills build *"a beautifully engineered dish that nobody ordered."* The repository is an inspectable artifact; no factory run or benchmark was reproduced here.

[S01](https://gojko.net/slides/202609-gotocph.pdf) · [S03](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/README.md) · [S04](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/WORKFLOW.md) · [S05](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/ORCHESTRATOR.md) · [S06](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/REGULATOR.md)

## Limits and background

The pinned revision is the evidence date for the artifact, not a dated private session. Older Spec Kit (September 2025) and historical BDD test-design material remains background. Publication of the scaffold and its reported ~80% token reduction on Votito do not establish a controlled cross-engineer benchmark or every detail of Votito production deployment.

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
| [S10](https://gojko.net/2026/06/24/everyone-will-be-a-pm/) | 2026-06-24 | Commentary | Authored product-role forecast |
| [S15](sources.md#s15) | 2026-10-22 | Published worker instruction | Failing-test-first prescribed; not an executed run |
| [S16](sources.md#s16) | 2026-10-22 | Published planning instruction | Same-step tests and source, test first |

## Comparison claims

<a id="c01"></a>

### C01 · Goal and bottleneck

**Stated · Recommendation.** Make product decisions and human supervision effective as code production accelerates, avoiding both unconstrained "dark factory" chaos and the "Chef Gusteau" trap of building flawless code nobody ordered.

Source format: Conference slides.

Published: **2026-09**. Practice: Conference slides; exact day not established. Checked: 2026-10-27.

Advocacy and a product-role forecast (with June 2026 essay S10); not a measured universal bottleneck for every team.

[Primary source](https://gojko.net/slides/202609-gotocph.pdf) · [Source register](sources.md#s01)

<a id="c02"></a>

### C02 · Requirements and specification

**Demonstrated · Published artifact.** The October 2026 published workflow runs an interactive `/impact-analysis` that checks problem statements against existing code, asks up to four clarifying questions per round across scope and edge cases, and records out-of-scope items before planning.

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run. Checked: 2026-10-27.

Pinned public artifact (`WORKFLOW.md` and `/impact-analysis`); replaces the broad one-shot spec generation he criticised in his September 2025 Spec Kit trial (S02), though not proof of every private Votito session.

[Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/WORKFLOW.md) · [Source register](sources.md#s04)

<a id="c03"></a>

### C03 · Increment and planning

**Demonstrated · Published artifact.** The inspected October 2026 factory workflow (`/plan-execution`) compiles approved impact analyses into phased `plans/<name>.plan.json` sidecars with declared writable files, dependencies and parallel execution groups.

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run. Checked: 2026-10-27.

Demonstrated means an inspected published artifact, not an executed session. The sample targets larger changes but explicitly permits skipping impact analysis for small tasks.

[Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/WORKFLOW.md) · [Source register](sources.md#s04)

<a id="c04"></a>

### C04 · Testing and verification

**Demonstrated · Published artifact.** The published factory agent instructions require `workflow-worker` agents to write a failing test before implementation and run file-scoped checks, followed by `workflow-gate` merged-tree checks (up to three rework rounds) and a read-only `workflow-check` skeptic.

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run. Checked: 2026-10-27.

Inspected instructions, not observed execution. Writing a failing test first is explicit; actual red-phase execution and adherence were not verified. Later gates do not imply tests-after development.

[Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/workspace/.claude/agents/workflow-worker.md) · [Source register](sources.md#s15)

<a id="c05"></a>

### C05 · Design and refactoring

**Demonstrated · Published artifact.** The October 2026 factory artifact encodes recurring code-quality feedback into a blocking PostToolUse ESLint hook (`lint-edited-file.js`) rather than relying on prompt rules ("markdown prayers").

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run. Checked: 2026-10-27.

Published maintainability mechanism; covers eligible JS/MJS edits, not a comprehensive architecture or refactoring policy.

[Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/LINTER-HOOK.md) · [Source register](sources.md#s07)

<a id="c06"></a>

### C06 · Human understanding and review

**Stated · Recommendation.** Advocates a "lights-on" supervision progression (`Dictating → Regulating → Supervising`) where consequential decisions stay visible and agents produce structured evidence for humans to certify, rather than inspecting only a "dark factory" final dump.

Source format: Conference slides.

Published: **2026-09**. Practice: Conference slides; exact day not established. Checked: 2026-10-27.

A staged direction for supervision, not permission to discard all code review for every change.

[Primary source](https://gojko.net/slides/202609-gotocph.pdf) · [Source register](sources.md#s01)

<a id="c07"></a>

### C07 · Agent autonomy and coordination

**Demonstrated · Published artifact.** The inspected October 2026 factory compiles approved plans into deterministic `.workflow.mjs` scripts that schedule scoped `workflow-worker`, `workflow-gate` and `workflow-check` roles without LLM orchestration overhead.

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run. Checked: 2026-10-27.

Public boilerplate based on Votito, not a complete current private team configuration; no universal agent-count recommendation.

[Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/ORCHESTRATOR.md) · [Source register](sources.md#s05)

<a id="c08"></a>

### C08 · Context and durable state

**Demonstrated · Published artifact.** The inspected public workflow retains versioned markdown plans (`plans/<name>.md`), JSON plan sidecars (`.plan.json`) and structured progress logs (`.progress.jsonl`), while generated `.workflow.mjs` execution scripts are disposable.

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run. Checked: 2026-10-27.

Project-state convention, not proof that every kind of learning or context is retained automatically.

[Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/WORKFLOW.md) · [Source register](sources.md#s04)

<a id="c09"></a>

### C09 · Tooling and environment

**Demonstrated · Published artifact.** The public factory at its pinned October 2026 revision documents Docker/make and Claude Code `/impact-analysis`, `/plan-execution`, `/execute` and `/regulator` commands.

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run. Checked: 2026-10-27.

Documentation inspected at a pinned revision. Installation and feature availability were not runtime-tested.

[Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/GETTING-STARTED.md) · [Source register](sources.md#s09)

<a id="c10"></a>

### C10 · Integration and release

**Stated · Published artifact.** Published factory guidance runs fast group gates (`workflow-serial-gate`) before a broader final gate (`workflow-final-gate`) and read-only refutation check; builds, tests and deployment checks must fit the target project.

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run. Checked: 2026-10-27.

The sample is not a published end-to-end production deployment pipeline; exact private branch and rollback policies are unknown.

[Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/ORCHESTRATOR.md) · [Source register](sources.md#s05)

<a id="c11"></a>

### C11 · Boundaries and safeguards

**Demonstrated · Published artifact.** The public artifact documents a deterministic PreToolUse Bash regulator (`bin/regulate.js`) with role-scoped command rules (restricting workers to their own files and blocking broad `sudo`/path traversal), edit-time lint hooks and a Docker container.

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run. Checked: 2026-10-27.

Hook scope is limited. A prompt or hook is not a comprehensive security boundary, and allowed `make` recipes execute beyond direct hook inspection.

[Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/REGULATOR.md) · [Source register](sources.md#s06)

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Stated · Published artifact.** Reports that shifting repeatable orchestration and micro-decisions from LLM inference to deterministic computation cut token spend by ~80% (and ran 6–10x faster) on Votito, while warning that AI speed still requires product validation.

Source format: Repository artifact.

Published: **2026-10-22**. Practice: Pinned repository revision; not an executed run. Checked: 2026-10-27.

Context-specific Votito self-reports in S01/S03 and historical survey correlations (S11) do not establish a controlled cross-engineer benchmark.

[Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/README.md) · [Source register](sources.md#s03)
