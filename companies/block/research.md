---
title: Block — detailed research
parent: Block
nav_order: 1
last_updated: '2026-10-26'
research_checked: '2026-10-26'
research_cutoff: '2026-10-26'
evidence_since: '2025-10-01'
last_read: null
status: unread
cache_schema: 1
---

# Block: AI-assisted engineering research

[Profile](index.md) · [Sources](sources.md) · [Workflow](workflow.md) · [Slides](slides.md)

## Scope and chronology

Console migration retrospective (2024–February 2026), February Actionable CI and skills accounts, and January security exercise. The evidence was inspected on **26 October 2026**. These are authored reports, not independently executed experiments. No complete private setup or uniform policy is assumed.

## The migration case: a retrospective, not an overnight rewrite

The April account concerns Console's transition away from Base Web while the live codebase kept changing. It describes a substantial preexisting tooling effort, an evolving agent runtime and eventual cleanup. Its practice window begins in 2024, so the April publication date must not be treated as an April-only implementation story. [S01](sources.md#s01)

## Why the other cases matter

Actionable CI offers a different unit of work: a supported build failure with an explicit repair lifecycle. Its checks decide whether to offer automation and whether a candidate should return for review. Skills provide another layer: reusable organisational knowledge maintained through normal versioning and review. The security exercise asks whether the surrounding agent environment can be subverted. [S02](sources.md#s02) · [S03](sources.md#s03) · [S04](sources.md#s04)

## Our synthesis

These accounts suggest three separable investments: make intent inspectable, make checks executable, and make handoffs safe. They need not be implemented by one product. A diagnostics service, an ordinary CI step and a human decision may be more appropriate than another model call. That is a design interpretation, not an assertion that Block prescribes identical machinery for every team.

## Important limits

The cases do not supply a complete private model/permissions inventory or uniform release policy. The migration's checks are specific to its frameworks; its reported duration includes infrastructure construction. A red-team finding is neither a generic agent-safety score nor proof of an unresolved present vulnerability. The public goose project is distinct from Block's private tool deployment.

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
