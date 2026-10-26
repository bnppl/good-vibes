---
title: Stripe
parent: Companies
nav_order: 1
company_profile: true
company_id: stripe
industry: Payments / fintech
organisation_context: Large private company
research_checked: '2026-10-26'
evidence_since: '2025-10-01'
published: '2026-02-09'
evidence_kind: Reported company use
last_updated: '2026-10-26'
last_read: null
status: unread
canonical_name: Stripe
has_children: true
cache_schema: 1
aliases: []
practice_focus: coding-workflows
focus_note: Stripe Leverage team’s Minions workflow, reported in February 2026; not every Stripe engineering task.
research_cutoff: '2026-10-26'
tagline: Bound the task. Make the checks deterministic. Review the result.
summary: Stripe’s February Minions accounts describe unattended implementation inside isolated developer environments,
  followed by CI and human review. Deterministic orchestration, scoped context and a bounded repair loop distinguish
  this from an unconstrained agent session.
strengths:
- Deterministic gates
- Isolated task environments
- Bounded feedback loops
tools_summary: 'February 2026 reports: custom goose-derived Minions harness, AWS devboxes, scoped Cursor-compatible
  rules, Toolshed MCP and existing CI. The private harness was not executed.'
slides_url: /companies/stripe/learn/
dimensions:
- id: D01
  title: Goal and bottleneck
  position: Conserve developer attention by delegating bounded implementation work.
  evidence: Stated
  claim: C01
  detail: research.md#c01
  source: https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents
  checked: '2026-10-26'
  qualification: Reported motivation; faster code production is not measured customer value.
  evidence_kind: Reported company use
  published: '2026-02-09'
  practice_date: Tasks and usage before February publication; exact run dates not stated
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
- id: D02
  title: Requirements and specification
  position: Use scoped repository rules and task-specific retrieved context.
  evidence: Stated
  claim: C02
  detail: research.md#c02
  source: https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2
  checked: '2026-10-26'
  qualification: Documents context preparation, not a complete product-requirements policy.
  evidence_kind: Reported company use
  published: '2026-02-19'
  practice_date: Infrastructure and iteration policy reported at publication; exact sessions unknown
  source_id: S02
  ai_specific: true
  source_format: Authored engineering article
- id: D03
  title: Increment and planning
  position: Give Minions independent tasks that end at a reviewable PR.
  evidence: Stated
  claim: C03
  detail: research.md#c03
  source: https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents
  checked: '2026-10-26'
  qualification: Task boundaries vary; no universal ticket size is established.
  evidence_kind: Reported company use
  published: '2026-02-09'
  practice_date: Tasks and usage before February publication; exact run dates not stated
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
- id: D04
  title: Testing and verification
  position: Run deterministic local checks before a bounded CI repair loop.
  evidence: Stated
  claim: C04
  detail: research.md#c04
  source: https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2
  checked: '2026-10-26'
  qualification: The reported standard allows one retry; passing checks do not establish correctness.
  evidence_kind: Reported company use
  published: '2026-02-19'
  practice_date: Infrastructure and iteration policy reported at publication; exact sessions unknown
  source_id: S02
  ai_specific: true
  source_format: Authored engineering article
- id: D05
  title: Design and refactoring
  position: A recent AI-assisted development policy for this dimension is not established in the reviewed accounts.
  evidence: Not established
  claim: C05
  detail: research.md#c05
  source: ''
  checked: '2026-10-26'
  qualification: The bounded gap is not evidence of opposition, absence of practice or poor engineering. General
    principles cannot fill it.
  evidence_kind: Not established
  published: Not established
  practice_date: Not established
  source_id: ''
  ai_specific: false
  source_format: Not established
- id: D06
  title: Human understanding and review
  position: Humans review Minion-produced changes before acceptance.
  evidence: Stated
  claim: C06
  detail: research.md#c06
  source: https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents
  checked: '2026-10-26'
  qualification: No universal line-by-line review procedure is supplied.
  evidence_kind: Reported company use
  published: '2026-02-09'
  practice_date: Tasks and usage before February publication; exact run dates not stated
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
- id: D07
  title: Agent autonomy and coordination
  position: Blueprints interleave deterministic operations and agent reasoning.
  evidence: Stated
  claim: C07
  detail: research.md#c07
  source: https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2
  checked: '2026-10-26'
  qualification: Unattended execution is confined to the documented workflow.
  evidence_kind: Reported company use
  published: '2026-02-19'
  practice_date: Infrastructure and iteration policy reported at publication; exact sessions unknown
  source_id: S02
  ai_specific: true
  source_format: Authored engineering article
- id: D08
  title: Context and durable state
  position: Attach relevant rules selectively rather than loading all guidance.
  evidence: Stated
  claim: C08
  detail: research.md#c08
  source: https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2
  checked: '2026-10-26'
  qualification: Shared rule formats reduce duplication; no complete private memory inventory is established.
  evidence_kind: Reported company use
  published: '2026-02-19'
  practice_date: Infrastructure and iteration policy reported at publication; exact sessions unknown
  source_id: S02
  ai_specific: true
  source_format: Authored engineering article
- id: D09
  title: Tooling and environment
  position: Run tasks in standardized isolated devboxes using a custom harness.
  evidence: Stated
  claim: C09
  detail: research.md#c09
  source: https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2
  checked: '2026-10-26'
  qualification: Dated architecture; not an inspected current installation.
  evidence_kind: Reported company use
  published: '2026-02-19'
  practice_date: Infrastructure and iteration policy reported at publication; exact sessions unknown
  source_id: S02
  ai_specific: true
  source_format: Authored engineering article
- id: D10
  title: Integration and release
  position: Return CI-checked PRs for human review.
  evidence: Stated
  claim: C10
  detail: research.md#c10
  source: https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents
  checked: '2026-10-26'
  qualification: This does not establish autonomous merge, deployment or rollback authority.
  evidence_kind: Reported company use
  published: '2026-02-09'
  practice_date: Tasks and usage before February publication; exact run dates not stated
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
- id: D11
  title: Boundaries and safeguards
  position: Constrain devboxes to QA resources and selected tool access.
  evidence: Stated
  claim: C11
  detail: research.md#c11
  source: https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2
  checked: '2026-10-26'
  qualification: An account of intended isolation; no independent penetration test was performed here.
  evidence_kind: Reported company use
  published: '2026-02-19'
  practice_date: Infrastructure and iteration policy reported at publication; exact sessions unknown
  source_id: S02
  ai_specific: true
  source_format: Authored engineering article
- id: D12
  title: Evaluation and tradeoffs
  position: Limit expensive CI retries to balance completeness, cost and delay.
  evidence: Stated
  claim: C12
  detail: research.md#c12
  source: https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2
  checked: '2026-10-26'
  qualification: A local engineering tradeoff, not a universal optimal retry count.
  evidence_kind: Reported company use
  published: '2026-02-19'
  practice_date: Infrastructure and iteration policy reported at publication; exact sessions unknown
  source_id: S02
  ai_specific: true
  source_format: Authored engineering article
comparison_group: fintech
---

# Stripe: building software using AI

[Detailed research](research.md) · [Observed workflow and optional practice](workflow.md) · [Source register](sources.md) · [Slide notes](slides.md) · [Open slideshow]({{ '/companies/stripe/learn/' | relative_url }}) · [Company comparison](../comparison.md)

Stripe’s February Minions accounts describe unattended implementation inside isolated developer environments, followed by CI and human review. Deterministic orchestration, scoped context and a bounded repair loop distinguish this from an unconstrained agent session.

**Evidence scope:** Stripe Leverage team’s Minions workflow, reported in February 2026; not every Stripe engineering task.

Publication window: **1 October 2025–26 October 2026**. Publication, practice and inspection dates are distinct. Only actual AI-assisted development evidence fills the active fields; older OSS background and unverified private setup do not.

## What makes this a useful engineering study

Bounded delegation and a clear human review boundary. The open-source link provides a concrete place to inspect code, contribution practices and engineering artifacts. It is background for selection, not proof that this AI workflow produced that project or that every team works identically.

## Comparison evidence

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated · Reported company use.** Conserve developer attention by delegating bounded implementation work.

Reported motivation; faster code production is not measured customer value.

Source format: Authored engineering article. Published / revision: **2026-02-09**. Practice: Tasks and usage before February publication; exact run dates not stated. Checked: 2026-10-26.

[Primary source](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents) · [Source register](sources.md#s01)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Stated · Reported company use.** Use scoped repository rules and task-specific retrieved context.

Documents context preparation, not a complete product-requirements policy.

Source format: Authored engineering article. Published / revision: **2026-02-19**. Practice: Infrastructure and iteration policy reported at publication; exact sessions unknown. Checked: 2026-10-26.

[Primary source](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2) · [Source register](sources.md#s02)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Stated · Reported company use.** Give Minions independent tasks that end at a reviewable PR.

Task boundaries vary; no universal ticket size is established.

Source format: Authored engineering article. Published / revision: **2026-02-09**. Practice: Tasks and usage before February publication; exact run dates not stated. Checked: 2026-10-26.

[Primary source](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents) · [Source register](sources.md#s01)

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Stated · Reported company use.** Run deterministic local checks before a bounded CI repair loop.

The reported standard allows one retry; passing checks do not establish correctness.

Source format: Authored engineering article. Published / revision: **2026-02-19**. Practice: Infrastructure and iteration policy reported at publication; exact sessions unknown. Checked: 2026-10-26.

[Primary source](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2) · [Source register](sources.md#s02)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Not established · Not established.** A recent AI-assisted development policy for this dimension is not established in the reviewed accounts.

The bounded gap is not evidence of opposition, absence of practice or poor engineering. General principles cannot fill it.

Source format: Not established. Published / revision: **Not established**. Practice: Not established. Checked: 2026-10-26.

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated · Reported company use.** Humans review Minion-produced changes before acceptance.

No universal line-by-line review procedure is supplied.

Source format: Authored engineering article. Published / revision: **2026-02-09**. Practice: Tasks and usage before February publication; exact run dates not stated. Checked: 2026-10-26.

[Primary source](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents) · [Source register](sources.md#s01)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Stated · Reported company use.** Blueprints interleave deterministic operations and agent reasoning.

Unattended execution is confined to the documented workflow.

Source format: Authored engineering article. Published / revision: **2026-02-19**. Practice: Infrastructure and iteration policy reported at publication; exact sessions unknown. Checked: 2026-10-26.

[Primary source](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2) · [Source register](sources.md#s02)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Stated · Reported company use.** Attach relevant rules selectively rather than loading all guidance.

Shared rule formats reduce duplication; no complete private memory inventory is established.

Source format: Authored engineering article. Published / revision: **2026-02-19**. Practice: Infrastructure and iteration policy reported at publication; exact sessions unknown. Checked: 2026-10-26.

[Primary source](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2) · [Source register](sources.md#s02)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Stated · Reported company use.** Run tasks in standardized isolated devboxes using a custom harness.

Dated architecture; not an inspected current installation.

Source format: Authored engineering article. Published / revision: **2026-02-19**. Practice: Infrastructure and iteration policy reported at publication; exact sessions unknown. Checked: 2026-10-26.

[Primary source](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2) · [Source register](sources.md#s02)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Stated · Reported company use.** Return CI-checked PRs for human review.

This does not establish autonomous merge, deployment or rollback authority.

Source format: Authored engineering article. Published / revision: **2026-02-09**. Practice: Tasks and usage before February publication; exact run dates not stated. Checked: 2026-10-26.

[Primary source](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents) · [Source register](sources.md#s01)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Stated · Reported company use.** Constrain devboxes to QA resources and selected tool access.

An account of intended isolation; no independent penetration test was performed here.

Source format: Authored engineering article. Published / revision: **2026-02-19**. Practice: Infrastructure and iteration policy reported at publication; exact sessions unknown. Checked: 2026-10-26.

[Primary source](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2) · [Source register](sources.md#s02)

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Stated · Reported company use.** Limit expensive CI retries to balance completeness, cost and delay.

A local engineering tradeoff, not a universal optimal retry count.

Source format: Authored engineering article. Published / revision: **2026-02-19**. Practice: Infrastructure and iteration policy reported at publication; exact sessions unknown. Checked: 2026-10-26.

[Primary source](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2) · [Source register](sources.md#s02)
