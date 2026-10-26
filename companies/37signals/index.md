---
title: 37signals
parent: Companies
nav_order: 12
company_profile: true
company_id: 37signals
industry: Collaboration SaaS
organisation_context: Small independent company
research_checked: '2026-10-26'
evidence_since: '2025-10-01'
published: '2026-09-28'
evidence_kind: Reported team use
last_updated: '2026-10-26'
last_read: null
status: unread
canonical_name: 37signals
has_children: true
cache_schema: 1
aliases:
- DHH company
practice_focus: coding-workflows
focus_note: Named Lexxy and Hot Cell project accounts; CTO personal practice retains personal attribution.
research_cutoff: '2026-10-26'
tagline: Give agents a browser they can actually use.
summary: Recent Lexxy and Hot Cell project accounts replace reliance on DHH’s personal commentary alone. They document
  test feedback and concrete requirements while leaving company-wide policies unknown.
strengths:
- Browser verification
- Explicit requirements
- Operational feedback
tools_summary: Lexxy reports Claude and Playwright; DHH separately reports OpenCode. Hot Cell’s production sandbox
  is not a coding-agent sandbox.
slides_url: /companies/37signals/learn/
dimensions:
- id: D01
  title: Goal and bottleneck
  position: Lexxy’s team used agents to work through editor defects under small-team constraints.
  evidence: Stated
  claim: C01
  detail: research.md#c01
  source: https://dev.37signals.com/lexxy-1-0/
  checked: '2026-10-26'
  qualification: A concrete editor project, not a universal productivity figure.
  evidence_kind: Reported team use
  published: '2026-09-28'
  practice_date: Lexxy began May 2025; account includes March–September 2026 test-workflow changes
  source_id: S02
  ai_specific: true
  source_format: Authored engineering article / written talk
- id: D02
  title: Requirements and specification
  position: Hot Cell’s author gave the agent explicit compatibility and isolation requirements.
  evidence: Stated
  claim: C02
  detail: research.md#c02
  source: https://dev.37signals.com/hot-cell-1-0/
  checked: '2026-10-26'
  qualification: These are product requirements; they do not describe coding-agent permissions.
  evidence_kind: Reported team use
  published: '2026-10-05'
  practice_date: 2026 development and production rollout before October publication
  source_id: S03
  ai_specific: true
  source_format: Authored engineering article / written talk
- id: D03
  title: Increment and planning
  position: A stronger browser test loop enabled batching editor bug fixes.
  evidence: Stated
  claim: C03
  detail: research.md#c03
  source: https://dev.37signals.com/lexxy-1-0/
  checked: '2026-10-26'
  qualification: No fixed task size, planning ritual or universal agent count is established.
  evidence_kind: Reported team use
  published: '2026-09-28'
  practice_date: Lexxy began May 2025; account includes March–September 2026 test-workflow changes
  source_id: S02
  ai_specific: true
  source_format: Authored engineering article / written talk
- id: D04
  title: Testing and verification
  position: Lexxy moved system tests to Playwright so agents could exercise realistic browser behavior.
  evidence: Stated
  claim: C04
  detail: research.md#c04
  source: https://dev.37signals.com/lexxy-1-0/
  checked: '2026-10-26'
  qualification: Reported test feedback, not independently rerun browser results.
  evidence_kind: Reported team use
  published: '2026-09-28'
  practice_date: Lexxy began May 2025; account includes March–September 2026 test-workflow changes
  source_id: S02
  ai_specific: true
  source_format: Authored engineering article / written talk
- id: D05
  title: Design and refactoring
  position: Hot Cell preserved application behavior through replaceable Rails integration points.
  evidence: Stated
  claim: C05
  detail: research.md#c05
  source: https://dev.37signals.com/hot-cell-1-0/
  checked: '2026-10-26'
  qualification: A scoped design example developed with an agent, not a mandatory company architecture.
  evidence_kind: Reported team use
  published: '2026-10-05'
  practice_date: 2026 development and production rollout before October publication
  source_id: S03
  ai_specific: true
  source_format: Authored engineering article / written talk
- id: D06
  title: Human understanding and review
  position: DHH reports reviewing delegated outcomes and providing guidance.
  evidence: Stated
  claim: C06
  detail: research.md#c06
  source: https://world.hey.com/dhh/promoting-ai-agents-3ee04945
  checked: '2026-10-26'
  qualification: Personal CTO use; this does not establish every team’s review depth.
  evidence_kind: Personal use
  published: '2026-01-07'
  practice_date: Late 2025/early 2026 retrospective; exact sessions unknown
  source_id: S01
  ai_specific: true
  source_format: Authored CTO personal article
- id: D07
  title: Agent autonomy and coordination
  position: An agent reproduced a defect publicly and rechecked it on the proposed branch.
  evidence: Stated
  claim: C07
  detail: research.md#c07
  source: https://dev.37signals.com/lexxy-1-0/
  checked: '2026-10-26'
  qualification: Scoped validation role; merge and release authority remain unknown.
  evidence_kind: Reported team use
  published: '2026-09-28'
  practice_date: Lexxy began May 2025; account includes March–September 2026 test-workflow changes
  source_id: S02
  ai_specific: true
  source_format: Authored engineering article / written talk
- id: D08
  title: Context and durable state
  position: A recent, sufficiently detailed internal AI-development practice is not established for this dimension
    in the reviewed sources.
  evidence: Not established
  claim: C08
  detail: research.md#c08
  source: ''
  checked: '2026-10-26'
  qualification: This is a bounded evidence gap, not absence of use or disagreement. Historical practice and adjacent
    product safeguards do not fill it.
  evidence_kind: Not established
  published: Not established
  practice_date: Not established
  source_id: ''
  ai_specific: false
  source_format: Not established
- id: D09
  title: Tooling and environment
  position: Lexxy’s account names Claude and Playwright in its development loop.
  evidence: Stated
  claim: C09
  detail: research.md#c09
  source: https://dev.37signals.com/lexxy-1-0/
  checked: '2026-10-26'
  qualification: Different company projects and employees may use different tools.
  evidence_kind: Reported team use
  published: '2026-09-28'
  practice_date: Lexxy began May 2025; account includes March–September 2026 test-workflow changes
  source_id: S02
  ai_specific: true
  source_format: Authored engineering article / written talk
- id: D10
  title: Integration and release
  position: Hot Cell’s production rollout exposed failures that were folded back into the library.
  evidence: Stated
  claim: C10
  detail: research.md#c10
  source: https://dev.37signals.com/hot-cell-1-0/
  checked: '2026-10-26'
  qualification: Operational learning is described; a full AI-to-production approval pipeline is not.
  evidence_kind: Reported team use
  published: '2026-10-05'
  practice_date: 2026 development and production rollout before October publication
  source_id: S03
  ai_specific: true
  source_format: Authored engineering article / written talk
- id: D11
  title: Boundaries and safeguards
  position: A recent, sufficiently detailed internal AI-development practice is not established for this dimension
    in the reviewed sources.
  evidence: Not established
  claim: C11
  detail: research.md#c11
  source: ''
  checked: '2026-10-26'
  qualification: This is a bounded evidence gap, not absence of use or disagreement. Historical practice and adjacent
    product safeguards do not fill it.
  evidence_kind: Not established
  published: Not established
  practice_date: Not established
  source_id: ''
  ai_specific: false
  source_format: Not established
- id: D12
  title: Evaluation and tradeoffs
  position: The Lexxy account values realistic browser interaction and documents tool changes.
  evidence: Stated
  claim: C12
  detail: research.md#c12
  source: https://dev.37signals.com/lexxy-1-0/
  checked: '2026-10-26'
  qualification: Self-report with earlier project history; no general AI-versus-human benchmark.
  evidence_kind: Reported team use
  published: '2026-09-28'
  practice_date: Lexxy began May 2025; account includes March–September 2026 test-workflow changes
  source_id: S02
  ai_specific: true
  source_format: Authored engineering article / written talk
comparison_group: saas
---

# 37signals: building software using AI

[Detailed research](research.md) · [Observed workflow and optional practice](workflow.md) · [Sources](sources.md) · [Slide notes](slides.md) · [Slideshow]({{ '/companies/37signals/learn/' | relative_url }}) · [Company comparison](../comparison.md)

Recent Lexxy and Hot Cell project accounts replace reliance on DHH’s personal commentary alone. They document test feedback and concrete requirements while leaving company-wide policies unknown.

**Scope:** Named Lexxy and Hot Cell project accounts; CTO personal practice retains personal attribution.

The main evidence window is **1 October 2025–26 October 2026**. Publication, practice and inspection dates remain separate. These accounts were inspected, not independently executed. Open-source origin is background, not proof of a current internal coding-agent policy.

## Open-source and engineering background

[Rails](https://github.com/rails/rails) and the Rails/Hotwire/Kamal ecosystem have substantial community contributions beyond 37signals. The recent Lexxy and Hot Cell accounts provide named company-project evidence, avoiding an inference from community reputation alone.

## Comparison claims

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated · Reported team use.** Lexxy’s team used agents to work through editor defects under small-team constraints.

A concrete editor project, not a universal productivity figure.

Publication / revision: **2026-09-28**. Practice: Lexxy began May 2025; account includes March–September 2026 test-workflow changes. Checked: 2026-10-26. Source format: Authored engineering article / written talk.

[Primary source](https://dev.37signals.com/lexxy-1-0/) · [Cached findings](sources.md#s02)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Stated · Reported team use.** Hot Cell’s author gave the agent explicit compatibility and isolation requirements.

These are product requirements; they do not describe coding-agent permissions.

Publication / revision: **2026-10-05**. Practice: 2026 development and production rollout before October publication. Checked: 2026-10-26. Source format: Authored engineering article / written talk.

[Primary source](https://dev.37signals.com/hot-cell-1-0/) · [Cached findings](sources.md#s03)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Stated · Reported team use.** A stronger browser test loop enabled batching editor bug fixes.

No fixed task size, planning ritual or universal agent count is established.

Publication / revision: **2026-09-28**. Practice: Lexxy began May 2025; account includes March–September 2026 test-workflow changes. Checked: 2026-10-26. Source format: Authored engineering article / written talk.

[Primary source](https://dev.37signals.com/lexxy-1-0/) · [Cached findings](sources.md#s02)

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Stated · Reported team use.** Lexxy moved system tests to Playwright so agents could exercise realistic browser behavior.

Reported test feedback, not independently rerun browser results.

Publication / revision: **2026-09-28**. Practice: Lexxy began May 2025; account includes March–September 2026 test-workflow changes. Checked: 2026-10-26. Source format: Authored engineering article / written talk.

[Primary source](https://dev.37signals.com/lexxy-1-0/) · [Cached findings](sources.md#s02)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Stated · Reported team use.** Hot Cell preserved application behavior through replaceable Rails integration points.

A scoped design example developed with an agent, not a mandatory company architecture.

Publication / revision: **2026-10-05**. Practice: 2026 development and production rollout before October publication. Checked: 2026-10-26. Source format: Authored engineering article / written talk.

[Primary source](https://dev.37signals.com/hot-cell-1-0/) · [Cached findings](sources.md#s03)

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated · Personal use.** DHH reports reviewing delegated outcomes and providing guidance.

Personal CTO use; this does not establish every team’s review depth.

Publication / revision: **2026-01-07**. Practice: Late 2025/early 2026 retrospective; exact sessions unknown. Checked: 2026-10-26. Source format: Authored CTO personal article.

[Primary source](https://world.hey.com/dhh/promoting-ai-agents-3ee04945) · [Cached findings](sources.md#s01)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Stated · Reported team use.** An agent reproduced a defect publicly and rechecked it on the proposed branch.

Scoped validation role; merge and release authority remain unknown.

Publication / revision: **2026-09-28**. Practice: Lexxy began May 2025; account includes March–September 2026 test-workflow changes. Checked: 2026-10-26. Source format: Authored engineering article / written talk.

[Primary source](https://dev.37signals.com/lexxy-1-0/) · [Cached findings](sources.md#s02)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Not established · Not established.** A recent, sufficiently detailed internal AI-development practice is not established for this dimension in the reviewed sources.

This is a bounded evidence gap, not absence of use or disagreement. Historical practice and adjacent product safeguards do not fill it.

Publication / revision: **Not established**. Practice: Not established. Checked: 2026-10-26. Source format: Not established.

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Stated · Reported team use.** Lexxy’s account names Claude and Playwright in its development loop.

Different company projects and employees may use different tools.

Publication / revision: **2026-09-28**. Practice: Lexxy began May 2025; account includes March–September 2026 test-workflow changes. Checked: 2026-10-26. Source format: Authored engineering article / written talk.

[Primary source](https://dev.37signals.com/lexxy-1-0/) · [Cached findings](sources.md#s02)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Stated · Reported team use.** Hot Cell’s production rollout exposed failures that were folded back into the library.

Operational learning is described; a full AI-to-production approval pipeline is not.

Publication / revision: **2026-10-05**. Practice: 2026 development and production rollout before October publication. Checked: 2026-10-26. Source format: Authored engineering article / written talk.

[Primary source](https://dev.37signals.com/hot-cell-1-0/) · [Cached findings](sources.md#s03)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Not established · Not established.** A recent, sufficiently detailed internal AI-development practice is not established for this dimension in the reviewed sources.

This is a bounded evidence gap, not absence of use or disagreement. Historical practice and adjacent product safeguards do not fill it.

Publication / revision: **Not established**. Practice: Not established. Checked: 2026-10-26. Source format: Not established.

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Stated · Reported team use.** The Lexxy account values realistic browser interaction and documents tool changes.

Self-report with earlier project history; no general AI-versus-human benchmark.

Publication / revision: **2026-09-28**. Practice: Lexxy began May 2025; account includes March–September 2026 test-workflow changes. Checked: 2026-10-26. Source format: Authored engineering article / written talk.

[Primary source](https://dev.37signals.com/lexxy-1-0/) · [Cached findings](sources.md#s02)
