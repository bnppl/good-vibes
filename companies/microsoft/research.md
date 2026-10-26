---
title: Microsoft — detailed AI-development research
parent: Microsoft
nav_order: 1
last_updated: '2026-10-26'
research_checked: '2026-10-26'
research_cutoff: '2026-10-26'
evidence_since: '2025-10-01'
last_read: null
status: unread
---

# Microsoft — detailed AI-development research

[Profile](index.md) · [Workflow](workflow.md) · [Sources](sources.md) · [Slides](slides.md)

**Scope:** Microsoft’s early-2026 CLI cohorts, research authors’ analysis code and VS Code’s pinned guidance.

## Three evidence objects, kept separate

The July study covers an early-2026 internal CLI rollout. The authors also disclose using assisted code for their analysis while retaining research responsibility. It reports output associations, leaving quality and value unresolved. [S01](sources.md#s01)

The October VS Code artifact documents scoped checks and repository conventions. It is an inspectable design, not an observed session. [S02](sources.md#s02)

An Azure Functions operational article was discovered, but its body did not provide usable text in this pass. Its title cannot support imagined incident-resolution mechanics. [S03](sources.md#s03)

## What the study can and cannot answer

Adoption, sustained use and a merged change are different outcomes. An engineer who tries a tool once has not necessarily incorporated it into a workflow. A merged change has passed some integration boundary, but its count does not reveal customer benefit, maintenance burden or escaped defects. These distinctions prevent an organisational study from becoming a recommendation that every engineer should maximize usage.

The study's observation window is material. A later review cannot turn January–April tool access into an October inventory. The paper notes a subsequent licensing transition, so even the organisation's available tools were not fixed over time. Treat software-development policy as a versioned dependency of the evidence, alongside models and tasks.

## Why the instruction artifact is useful

A published instruction file allows a reader to inspect intended interfaces between agent and repository. It can identify what a team wants an assistant to know. It cannot prove that a particular model loaded the file, followed it, passed the right tests or preserved the intended architecture. Those need session or execution evidence. In this knowledge base the artifact-backed dimensions therefore use Published artifact, while the study-backed dimensions use reported use.

## Transfer without pretending to copy Microsoft

A team can use the [optional practice](workflow.md#optional-practice) to make a validation plan inspectable and repeatable. That exercise does not reproduce Microsoft's rollout or claim the same effects. The broader company contains many product groups; VS Code and the paper's cohorts are specific evidence scopes. GitHub's corporate relationship also means company names should not be treated as statistically independent observations.

## Comparison claims

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated · Reported company use.** The study measured CLI adoption and output.

An organisational research question; not every team’s product objective.

Publication / revision: **2026-07-01**. Practice: January 5–April 29 2026; not the October tool estate. Checked: 2026-10-26. Format: Research paper; full HTML methods and disclosure.

[Primary evidence](https://arxiv.org/html/2607.01418v1) · [Source record](sources.md#s01)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Stated · Reported team use.** Research authors retained methodological decisions.

Their AI-assisted analysis-code case; no universal feature-specification format.

Publication / revision: **2026-07-01**. Practice: January 5–April 29 2026; not the October tool estate. Checked: 2026-10-26. Format: Research paper; full HTML methods and disclosure.

[Primary evidence](https://arxiv.org/html/2607.01418v1) · [Source record](sources.md#s01)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Not established · Not established.** Recent internal AI-development practice is not established for this dimension.

This is a bounded public-evidence gap. Product capabilities, general advice and old principles cannot supply a missing internal practice.

Publication / revision: **Not established**. Practice: Not established. Checked: 2026-10-26. Format: Not established.

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Demonstrated · Published artifact.** Published instructions scale validation to change risk.

VS Code artifact, not observed compliance or a test-first policy.

Publication / revision: **2026-10-12 (pinned revision)**. Practice: Artifact at revision; session execution not observed. Checked: 2026-10-26. Format: Pinned repository instruction artifact.

[Primary evidence](https://github.com/microsoft/vscode/blob/c480e9e49e2a116c458518ecbdec56d50e4af3d2/.github/copilot-instructions.md) · [Source record](sources.md#s02)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Demonstrated · Published artifact.** Published instructions preserve repository layering.

Artifact for VS Code; other Microsoft systems differ.

Publication / revision: **2026-10-12 (pinned revision)**. Practice: Artifact at revision; session execution not observed. Checked: 2026-10-26. Format: Pinned repository instruction artifact.

[Primary evidence](https://github.com/microsoft/vscode/blob/c480e9e49e2a116c458518ecbdec56d50e4af3d2/.github/copilot-instructions.md) · [Source record](sources.md#s02)

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated · Reported team use.** Research authors verified assisted analysis code.

Their responsibility statement is not an independently reproduced audit.

Publication / revision: **2026-07-01**. Practice: January 5–April 29 2026; not the October tool estate. Checked: 2026-10-26. Format: Research paper; full HTML methods and disclosure.

[Primary evidence](https://arxiv.org/html/2607.01418v1) · [Source record](sources.md#s01)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Not established · Not established.** Recent internal AI-development practice is not established for this dimension.

This is a bounded public-evidence gap. Product capabilities, general advice and old principles cannot supply a missing internal practice.

Publication / revision: **Not established**. Practice: Not established. Checked: 2026-10-26. Format: Not established.

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Demonstrated · Published artifact.** The instruction file maps architecture and commands.

Documented project context, not a company-wide durable-memory system.

Publication / revision: **2026-10-12 (pinned revision)**. Practice: Artifact at revision; session execution not observed. Checked: 2026-10-26. Format: Pinned repository instruction artifact.

[Primary evidence](https://github.com/microsoft/vscode/blob/c480e9e49e2a116c458518ecbdec56d50e4af3d2/.github/copilot-instructions.md) · [Source record](sources.md#s02)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Stated · Reported company use.** The study covers Copilot CLI and Claude Code.

January–April cohorts; licenses changed afterward, so this is not an October inventory.

Publication / revision: **2026-07-01**. Practice: January 5–April 29 2026; not the October tool estate. Checked: 2026-10-26. Format: Research paper; full HTML methods and disclosure.

[Primary evidence](https://arxiv.org/html/2607.01418v1) · [Source record](sources.md#s01)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Not established · Not established.** Recent internal AI-development practice is not established for this dimension.

This is a bounded public-evidence gap. Product capabilities, general advice and old principles cannot supply a missing internal practice.

Publication / revision: **Not established**. Practice: Not established. Checked: 2026-10-26. Format: Not established.

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Not established · Not established.** Recent internal AI-development practice is not established for this dimension.

This is a bounded public-evidence gap. Product capabilities, general advice and old principles cannot supply a missing internal practice.

Publication / revision: **Not established**. Practice: Not established. Checked: 2026-10-26. Format: Not established.

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Stated · Reported company use.** Merged-PR throughput remains an imperfect outcome proxy.

Observational designs and selection limits remain; quality and value were unresolved.

Publication / revision: **2026-07-01**. Practice: January 5–April 29 2026; not the October tool estate. Checked: 2026-10-26. Format: Research paper; full HTML methods and disclosure.

[Primary evidence](https://arxiv.org/html/2607.01418v1) · [Source record](sources.md#s01)
