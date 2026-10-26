---
title: Microsoft
parent: Companies
nav_order: 8
company_profile: true
company_id: microsoft
industry: Enterprise software / cloud
organisation_context: Large public enterprise
research_checked: '2026-10-26'
evidence_since: '2025-10-01'
published: '2026-07-01'
evidence_kind: Research paper on internal rollout
last_updated: '2026-10-26'
last_read: null
status: unread
canonical_name: Microsoft
has_children: true
cache_schema: 1
aliases: []
practice_focus: coding-workflows
focus_note: Microsoft’s early-2026 CLI cohorts, research authors’ analysis code and VS Code’s pinned guidance.
research_cutoff: '2026-10-26'
tagline: A rollout study and an inspectable project artifact
summary: Adoption evidence and repository instructions answer different engineering questions.
strengths:
- Rollout measurement
- Scoped validation
- Repository context
tools_summary: January–April Copilot CLI/Claude Code cohorts; October VS Code instructions. No universal current
  Microsoft tool stack established.
slides_url: /companies/microsoft/learn/
dimensions:
- id: D01
  title: Goal and bottleneck
  claim: C01
  detail: research.md#c01
  checked: '2026-10-26'
  position: The study measured CLI adoption and output.
  evidence: Stated
  source: https://arxiv.org/html/2607.01418v1
  qualification: An organisational research question; not every team’s product objective.
  evidence_kind: Reported company use
  published: '2026-07-01'
  practice_date: January 5–April 29 2026; not the October tool estate
  source_id: S01
  ai_specific: true
  source_format: Research paper; full HTML methods and disclosure
- id: D02
  title: Requirements and specification
  claim: C02
  detail: research.md#c02
  checked: '2026-10-26'
  position: Research authors retained methodological decisions.
  evidence: Stated
  source: https://arxiv.org/html/2607.01418v1
  qualification: Their AI-assisted analysis-code case; no universal feature-specification format.
  evidence_kind: Reported team use
  published: '2026-07-01'
  practice_date: January 5–April 29 2026; not the October tool estate
  source_id: S01
  ai_specific: true
  source_format: Research paper; full HTML methods and disclosure
- id: D03
  title: Increment and planning
  claim: C03
  detail: research.md#c03
  checked: '2026-10-26'
  position: Recent internal AI-development practice is not established for this dimension.
  evidence: Not established
  source: ''
  qualification: This is a bounded public-evidence gap. Product capabilities, general advice and old principles
    cannot supply a missing internal practice.
  evidence_kind: Not established
  published: Not established
  practice_date: Not established
  source_id: ''
  ai_specific: false
  source_format: Not established
- id: D04
  title: Testing and verification
  claim: C04
  detail: research.md#c04
  checked: '2026-10-26'
  position: Published instructions scale validation to change risk.
  evidence: Demonstrated
  source: https://github.com/microsoft/vscode/blob/c480e9e49e2a116c458518ecbdec56d50e4af3d2/.github/copilot-instructions.md
  qualification: VS Code artifact, not observed compliance or a test-first policy.
  evidence_kind: Published artifact
  published: 2026-10-12 (pinned revision)
  practice_date: Artifact at revision; session execution not observed
  source_id: S02
  ai_specific: true
  source_format: Pinned repository instruction artifact
- id: D05
  title: Design and refactoring
  claim: C05
  detail: research.md#c05
  checked: '2026-10-26'
  position: Published instructions preserve repository layering.
  evidence: Demonstrated
  source: https://github.com/microsoft/vscode/blob/c480e9e49e2a116c458518ecbdec56d50e4af3d2/.github/copilot-instructions.md
  qualification: Artifact for VS Code; other Microsoft systems differ.
  evidence_kind: Published artifact
  published: 2026-10-12 (pinned revision)
  practice_date: Artifact at revision; session execution not observed
  source_id: S02
  ai_specific: true
  source_format: Pinned repository instruction artifact
- id: D06
  title: Human understanding and review
  claim: C06
  detail: research.md#c06
  checked: '2026-10-26'
  position: Research authors verified assisted analysis code.
  evidence: Stated
  source: https://arxiv.org/html/2607.01418v1
  qualification: Their responsibility statement is not an independently reproduced audit.
  evidence_kind: Reported team use
  published: '2026-07-01'
  practice_date: January 5–April 29 2026; not the October tool estate
  source_id: S01
  ai_specific: true
  source_format: Research paper; full HTML methods and disclosure
- id: D07
  title: Agent autonomy and coordination
  claim: C07
  detail: research.md#c07
  checked: '2026-10-26'
  position: Recent internal AI-development practice is not established for this dimension.
  evidence: Not established
  source: ''
  qualification: This is a bounded public-evidence gap. Product capabilities, general advice and old principles
    cannot supply a missing internal practice.
  evidence_kind: Not established
  published: Not established
  practice_date: Not established
  source_id: ''
  ai_specific: false
  source_format: Not established
- id: D08
  title: Context and durable state
  claim: C08
  detail: research.md#c08
  checked: '2026-10-26'
  position: The instruction file maps architecture and commands.
  evidence: Demonstrated
  source: https://github.com/microsoft/vscode/blob/c480e9e49e2a116c458518ecbdec56d50e4af3d2/.github/copilot-instructions.md
  qualification: Documented project context, not a company-wide durable-memory system.
  evidence_kind: Published artifact
  published: 2026-10-12 (pinned revision)
  practice_date: Artifact at revision; session execution not observed
  source_id: S02
  ai_specific: true
  source_format: Pinned repository instruction artifact
- id: D09
  title: Tooling and environment
  claim: C09
  detail: research.md#c09
  checked: '2026-10-26'
  position: The study covers Copilot CLI and Claude Code.
  evidence: Stated
  source: https://arxiv.org/html/2607.01418v1
  qualification: January–April cohorts; licenses changed afterward, so this is not an October inventory.
  evidence_kind: Reported company use
  published: '2026-07-01'
  practice_date: January 5–April 29 2026; not the October tool estate
  source_id: S01
  ai_specific: true
  source_format: Research paper; full HTML methods and disclosure
- id: D10
  title: Integration and release
  claim: C10
  detail: research.md#c10
  checked: '2026-10-26'
  position: Recent internal AI-development practice is not established for this dimension.
  evidence: Not established
  source: ''
  qualification: This is a bounded public-evidence gap. Product capabilities, general advice and old principles
    cannot supply a missing internal practice.
  evidence_kind: Not established
  published: Not established
  practice_date: Not established
  source_id: ''
  ai_specific: false
  source_format: Not established
- id: D11
  title: Boundaries and safeguards
  claim: C11
  detail: research.md#c11
  checked: '2026-10-26'
  position: Recent internal AI-development practice is not established for this dimension.
  evidence: Not established
  source: ''
  qualification: This is a bounded public-evidence gap. Product capabilities, general advice and old principles
    cannot supply a missing internal practice.
  evidence_kind: Not established
  published: Not established
  practice_date: Not established
  source_id: ''
  ai_specific: false
  source_format: Not established
- id: D12
  title: Evaluation and tradeoffs
  claim: C12
  detail: research.md#c12
  checked: '2026-10-26'
  position: Merged-PR throughput remains an imperfect outcome proxy.
  evidence: Stated
  source: https://arxiv.org/html/2607.01418v1
  qualification: Observational designs and selection limits remain; quality and value were unresolved.
  evidence_kind: Reported company use
  published: '2026-07-01'
  practice_date: January 5–April 29 2026; not the October tool estate
  source_id: S01
  ai_specific: true
  source_format: Research paper; full HTML methods and disclosure
comparison_group: developer-tools
---

# Microsoft: building software using AI

[Detailed research](research.md) · [Observed workflow and optional practice](workflow.md) · [Source register](sources.md) · [Bite-size notes](slides.md) · [Open slideshow]({{ '/companies/microsoft/learn/' | relative_url }}) · [Compare approaches](../comparison.md)

## A rollout study and an inspectable project artifact

Adoption evidence and repository instructions answer different engineering questions.

**Scope:** Microsoft’s early-2026 CLI cohorts, research authors’ analysis code and VS Code’s pinned guidance.

Publication window: **1 October 2025–26 October 2026**. A revision dates an artifact, not every original passage or every session. A team, personal account, policy, research study and observed runtime result remain different evidence.

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
