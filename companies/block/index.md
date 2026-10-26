---
title: Block
parent: Companies
nav_order: 9
company_profile: true
company_id: block
industry: Payments / fintech
organisation_context: Large public company
research_checked: '2026-10-26'
evidence_since: '2025-10-01'
published: '2026-04-06'
evidence_kind: Reported team use
last_updated: '2026-10-26'
last_read: null
status: unread
canonical_name: Block
has_children: true
cache_schema: 1
aliases: []
practice_focus: coding-workflows
focus_note: Console migration retrospective (2024–February 2026), February Actionable CI and skills accounts, and
  January security exercise.
research_cutoff: '2026-10-26'
tagline: Turn observed failures into checks, then give agents a bounded loop.
summary: Block’s published cases span a UI migration, CI repair, reusable skills and an internal red-team exercise.
  They show different scopes of AI-assisted engineering rather than one universal goose workflow.
strengths:
- Failure-driven validation
- Explicit autofix lifecycle
- Shared operational knowledge
tools_summary: Dated accounts include goose, a TypeScript diagnostics/migration runtime, targeted Jest execution,
  CI repair agents and a versioned skills marketplace. Runtime evolution must not be flattened into a single October
  stack.
slides_url: /companies/block/learn/
dimensions:
- id: D01
  title: Goal and bottleneck
  position: Reduce time spent interpreting failures, not merely time running CI.
  evidence: Stated
  claim: C01
  detail: research.md#c01
  source: https://engineering.block.xyz/blog/actionable-ci
  checked: '2026-10-26'
  qualification: This is the Actionable CI motivation, not a measured company-wide bottleneck ranking.
  evidence_kind: Reported company use
  published: '2026-02-23'
  practice_date: Reported workflow at publication; exact deployment/session dates unknown
  source_id: S02
  ai_specific: true
  source_format: Authored engineering article
- id: D02
  title: Requirements and specification
  position: Express migration completion through checkable import and framework constraints.
  evidence: Stated
  claim: C02
  detail: research.md#c02
  source: https://engineering.block.xyz/blog/from-base-web-to-fluent-ui-without-a-flag-day
  checked: '2026-10-26'
  qualification: A specific UI migration contract, not a universal product specification format.
  evidence_kind: Reported team use
  published: '2026-04-06'
  practice_date: Migration-engine work from 2024-12-02 through 2026-02-26; retrospective
  source_id: S01
  ai_specific: true
  source_format: Authored engineering retrospective
- id: D03
  title: Increment and planning
  position: Migrate files and product surfaces in waves while normal development continues.
  evidence: Stated
  claim: C03
  detail: research.md#c03
  source: https://engineering.block.xyz/blog/from-base-web-to-fluent-ui-without-a-flag-day
  checked: '2026-10-26'
  qualification: The retrospective spans late 2024 to February 2026.
  evidence_kind: Reported team use
  published: '2026-04-06'
  practice_date: Migration-engine work from 2024-12-02 through 2026-02-26; retrospective
  source_id: S01
  ai_specific: true
  source_format: Authored engineering retrospective
- id: D04
  title: Testing and verification
  position: Combine rule checks, linters, diagnostics and targeted tests.
  evidence: Stated
  claim: C04
  detail: research.md#c04
  source: https://engineering.block.xyz/blog/from-base-web-to-fluent-ui-without-a-flag-day
  checked: '2026-10-26'
  qualification: Compilation alone missed framework-level errors; no benchmark was reproduced here.
  evidence_kind: Reported team use
  published: '2026-04-06'
  practice_date: Migration-engine work from 2024-12-02 through 2026-02-26; retrospective
  source_id: S01
  ai_specific: true
  source_format: Authored engineering retrospective
- id: D05
  title: Design and refactoring
  position: Use a temporary migration lane, then remove its scaffolding.
  evidence: Stated
  claim: C05
  detail: research.md#c05
  source: https://engineering.block.xyz/blog/from-base-web-to-fluent-ui-without-a-flag-day
  checked: '2026-10-26'
  qualification: A migration design choice, not a mandate for every application architecture.
  evidence_kind: Reported team use
  published: '2026-04-06'
  practice_date: Migration-engine work from 2024-12-02 through 2026-02-26; retrospective
  source_id: S01
  ai_specific: true
  source_format: Authored engineering retrospective
- id: D06
  title: Human understanding and review
  position: Humans handle the last mile and rework problematic migrations.
  evidence: Stated
  claim: C06
  detail: research.md#c06
  source: https://engineering.block.xyz/blog/from-base-web-to-fluent-ui-without-a-flag-day
  checked: '2026-10-26'
  qualification: The account includes reversions; agent output was not treated as invariably acceptable.
  evidence_kind: Reported team use
  published: '2026-04-06'
  practice_date: Migration-engine work from 2024-12-02 through 2026-02-26; retrospective
  source_id: S01
  ai_specific: true
  source_format: Authored engineering retrospective
- id: D07
  title: Agent autonomy and coordination
  position: Developers initiate eligible autofixes with a bounded retry path.
  evidence: Stated
  claim: C07
  detail: research.md#c07
  source: https://engineering.block.xyz/blog/actionable-ci
  checked: '2026-10-26'
  qualification: Automatic diagnosis and explicit autofix initiation are different authority levels.
  evidence_kind: Reported company use
  published: '2026-02-23'
  practice_date: Reported workflow at publication; exact deployment/session dates unknown
  source_id: S02
  ai_specific: true
  source_format: Authored engineering article
- id: D08
  title: Context and durable state
  position: Share team knowledge through versioned, reviewed agent skills.
  evidence: Stated
  claim: C08
  detail: research.md#c08
  source: https://engineering.block.xyz/blog/3-principles-for-designing-agent-skills
  checked: '2026-10-26'
  qualification: Skill publication does not prove compliance on every run.
  evidence_kind: Reported company use
  published: '2026-02-15'
  practice_date: Internal marketplace and examples reported in February
  source_id: S03
  ai_specific: true
  source_format: Authored engineering article
- id: D09
  title: Tooling and environment
  position: Evolve the migration runtime around language-server feedback and related tests.
  evidence: Stated
  claim: C09
  detail: research.md#c09
  source: https://engineering.block.xyz/blog/from-base-web-to-fluent-ui-without-a-flag-day
  checked: '2026-10-26'
  qualification: Historical tool evolution, not a complete present-day stack inventory.
  evidence_kind: Reported team use
  published: '2026-04-06'
  practice_date: Migration-engine work from 2024-12-02 through 2026-02-26; retrospective
  source_id: S01
  ai_specific: true
  source_format: Authored engineering retrospective
- id: D10
  title: Integration and release
  position: Promote validated drafts for review only if the original branch is unchanged.
  evidence: Stated
  claim: C10
  detail: research.md#c10
  source: https://engineering.block.xyz/blog/actionable-ci
  checked: '2026-10-26'
  qualification: Ready-for-review is not automatic merge or release.
  evidence_kind: Reported company use
  published: '2026-02-23'
  practice_date: Reported workflow at publication; exact deployment/session dates unknown
  source_id: S02
  ai_specific: true
  source_format: Authored engineering article
- id: D11
  title: Boundaries and safeguards
  position: Exercise prompt-injection and response controls against the agent environment.
  evidence: Stated
  claim: C11
  detail: research.md#c11
  source: https://engineering.block.xyz/blog/how-we-red-teamed-our-own-ai-agent-
  checked: '2026-10-26'
  qualification: A simulated internal engagement; current residual exposure remains unknown.
  evidence_kind: Reported team use
  published: '2026-01-15'
  practice_date: Internal exercise before publication; exact campaign dates not established
  source_id: S04
  ai_specific: true
  source_format: Authored security exercise report
- id: D12
  title: Evaluation and tradeoffs
  position: Count platform-building effort as well as migration execution.
  evidence: Stated
  claim: C12
  detail: research.md#c12
  source: https://engineering.block.xyz/blog/from-base-web-to-fluent-ui-without-a-flag-day
  checked: '2026-10-26'
  qualification: The source reports substantial preparation and exceptions; code volume is not net value.
  evidence_kind: Reported team use
  published: '2026-04-06'
  practice_date: Migration-engine work from 2024-12-02 through 2026-02-26; retrospective
  source_id: S01
  ai_specific: true
  source_format: Authored engineering retrospective
comparison_group: fintech
---

# Block: building software using AI

[Detailed research](research.md) · [Observed workflow and optional practice](workflow.md) · [Source register](sources.md) · [Slide notes](slides.md) · [Open slideshow]({{ '/companies/block/learn/' | relative_url }}) · [Company comparison](../comparison.md)

Block’s published cases span a UI migration, CI repair, reusable skills and an internal red-team exercise. They show different scopes of AI-assisted engineering rather than one universal goose workflow.

**Evidence scope:** Console migration retrospective (2024–February 2026), February Actionable CI and skills accounts, and January security exercise.

Publication window: **1 October 2025–26 October 2026**. Publication, practice and inspection dates are distinct. Only actual AI-assisted development evidence fills the active fields; older OSS background and unverified private setup do not.

## What makes this a useful engineering study

Test the coding agent environment as an attack surface. The open-source link provides a concrete place to inspect code, contribution practices and engineering artifacts. It is background for selection, not proof that this AI workflow produced that project or that every team works identically.

## Comparison evidence

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated · Reported company use.** Reduce time spent interpreting failures, not merely time running CI.

This is the Actionable CI motivation, not a measured company-wide bottleneck ranking.

Source format: Authored engineering article. Published / revision: **2026-02-23**. Practice: Reported workflow at publication; exact deployment/session dates unknown. Checked: 2026-10-26.

[Primary source](https://engineering.block.xyz/blog/actionable-ci) · [Source register](sources.md#s02)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Stated · Reported team use.** Express migration completion through checkable import and framework constraints.

A specific UI migration contract, not a universal product specification format.

Source format: Authored engineering retrospective. Published / revision: **2026-04-06**. Practice: Migration-engine work from 2024-12-02 through 2026-02-26; retrospective. Checked: 2026-10-26.

[Primary source](https://engineering.block.xyz/blog/from-base-web-to-fluent-ui-without-a-flag-day) · [Source register](sources.md#s01)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Stated · Reported team use.** Migrate files and product surfaces in waves while normal development continues.

The retrospective spans late 2024 to February 2026.

Source format: Authored engineering retrospective. Published / revision: **2026-04-06**. Practice: Migration-engine work from 2024-12-02 through 2026-02-26; retrospective. Checked: 2026-10-26.

[Primary source](https://engineering.block.xyz/blog/from-base-web-to-fluent-ui-without-a-flag-day) · [Source register](sources.md#s01)

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Stated · Reported team use.** Combine rule checks, linters, diagnostics and targeted tests.

Compilation alone missed framework-level errors; no benchmark was reproduced here.

Source format: Authored engineering retrospective. Published / revision: **2026-04-06**. Practice: Migration-engine work from 2024-12-02 through 2026-02-26; retrospective. Checked: 2026-10-26.

[Primary source](https://engineering.block.xyz/blog/from-base-web-to-fluent-ui-without-a-flag-day) · [Source register](sources.md#s01)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Stated · Reported team use.** Use a temporary migration lane, then remove its scaffolding.

A migration design choice, not a mandate for every application architecture.

Source format: Authored engineering retrospective. Published / revision: **2026-04-06**. Practice: Migration-engine work from 2024-12-02 through 2026-02-26; retrospective. Checked: 2026-10-26.

[Primary source](https://engineering.block.xyz/blog/from-base-web-to-fluent-ui-without-a-flag-day) · [Source register](sources.md#s01)

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated · Reported team use.** Humans handle the last mile and rework problematic migrations.

The account includes reversions; agent output was not treated as invariably acceptable.

Source format: Authored engineering retrospective. Published / revision: **2026-04-06**. Practice: Migration-engine work from 2024-12-02 through 2026-02-26; retrospective. Checked: 2026-10-26.

[Primary source](https://engineering.block.xyz/blog/from-base-web-to-fluent-ui-without-a-flag-day) · [Source register](sources.md#s01)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Stated · Reported company use.** Developers initiate eligible autofixes with a bounded retry path.

Automatic diagnosis and explicit autofix initiation are different authority levels.

Source format: Authored engineering article. Published / revision: **2026-02-23**. Practice: Reported workflow at publication; exact deployment/session dates unknown. Checked: 2026-10-26.

[Primary source](https://engineering.block.xyz/blog/actionable-ci) · [Source register](sources.md#s02)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Stated · Reported company use.** Share team knowledge through versioned, reviewed agent skills.

Skill publication does not prove compliance on every run.

Source format: Authored engineering article. Published / revision: **2026-02-15**. Practice: Internal marketplace and examples reported in February. Checked: 2026-10-26.

[Primary source](https://engineering.block.xyz/blog/3-principles-for-designing-agent-skills) · [Source register](sources.md#s03)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Stated · Reported team use.** Evolve the migration runtime around language-server feedback and related tests.

Historical tool evolution, not a complete present-day stack inventory.

Source format: Authored engineering retrospective. Published / revision: **2026-04-06**. Practice: Migration-engine work from 2024-12-02 through 2026-02-26; retrospective. Checked: 2026-10-26.

[Primary source](https://engineering.block.xyz/blog/from-base-web-to-fluent-ui-without-a-flag-day) · [Source register](sources.md#s01)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Stated · Reported company use.** Promote validated drafts for review only if the original branch is unchanged.

Ready-for-review is not automatic merge or release.

Source format: Authored engineering article. Published / revision: **2026-02-23**. Practice: Reported workflow at publication; exact deployment/session dates unknown. Checked: 2026-10-26.

[Primary source](https://engineering.block.xyz/blog/actionable-ci) · [Source register](sources.md#s02)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Stated · Reported team use.** Exercise prompt-injection and response controls against the agent environment.

A simulated internal engagement; current residual exposure remains unknown.

Source format: Authored security exercise report. Published / revision: **2026-01-15**. Practice: Internal exercise before publication; exact campaign dates not established. Checked: 2026-10-26.

[Primary source](https://engineering.block.xyz/blog/how-we-red-teamed-our-own-ai-agent-) · [Source register](sources.md#s04)

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Stated · Reported team use.** Count platform-building effort as well as migration execution.

The source reports substantial preparation and exceptions; code volume is not net value.

Source format: Authored engineering retrospective. Published / revision: **2026-04-06**. Practice: Migration-engine work from 2024-12-02 through 2026-02-26; retrospective. Checked: 2026-10-26.

[Primary source](https://engineering.block.xyz/blog/from-base-web-to-fluent-ui-without-a-flag-day) · [Source register](sources.md#s01)
