---
title: Birgitta Böckeler — recent AI evidence
parent: Birgitta Böckeler
nav_order: 0
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
evidence_since: '2025-10-01'
cache_schema: 1
---

# Birgitta Böckeler — recent AI evidence

[Profile](index.md) · [Source register](sources.md) · [Earlier research](research.md) · [Comparison history](background.md)

## Scope and dates

Publication window: **1 October 2025–26 October 2026**. Publication, practice and inspection dates are separate. This page prioritises actual use where documented; recommendations and inspected artifacts have their own labels. A newly published retrospective may describe older work.

## Maintainability sensors on an analytics dashboard

Her May 2026 written account describes experimenting with structural and test-quality sensors while developing an internal analytics dashboard. Her August account separately explores TDD inside the agent loop. These are different experiments: one concerns maintainability feedback, the other a limited workflow comparison.

[S07](https://martinfowler.com/articles/sensors-for-coding-agents.html) · [S08](https://martinfowler.com/articles/exploring-gen-ai/tdd-in-the-agent-loop.html)

## Limits and background

The TDD exploration used small greenfield tasks, model-based judgments and imperfect adherence. The October 2025 spec-tool article reports September trials: it meets the publication window but not a post-October practice date. March/July 2025 supervision accounts stay background.

The optional reward exercise in the earlier research/workflow remains our proposed adaptation. It is not the reported project above or evidence that the engineer follows the proposed sequence.

## Evidence used in the comparison

| Source | Published / revision | Relationship | Practice period |
|---|---|---|---|
| [S07](https://martinfowler.com/articles/sensors-for-coding-agents.html) | 2026-05-27 | Personal use | Dashboard experiments before publication; exact dates not stated |
| [S08](https://martinfowler.com/articles/exploring-gen-ai/tdd-in-the-agent-loop.html) | 2026-08-10 | Personal use | Exploratory evaluation before publication; exact dates not stated |
| [S03](https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html) | 2025-10-15 | Personal use | September 2025 tool trials; retrospective |
| [S02](https://martinfowler.com/articles/exploring-gen-ai/context-engineering-coding-agents.html) | 2026-02-05 | Recommendation | Feature descriptions as of publication |
| [S01](https://martinfowler.com/articles/harness-engineering.html) | 2026-04-02 | Recommendation | Not a complete personal workflow |

## Comparison claims

<a id="c01"></a>

### C01 · Goal and bottleneck

**Stated · Personal use.** Her May 2026 dashboard experiments target maintainability as well as functional correctness.

Source format: Authored article.

Published: **2026-05-27**. Practice: Dashboard experiments before publication; exact dates not stated. Checked: 2026-10-26.

One application; not a universal bottleneck or controlled speed result.

[Primary source](https://martinfowler.com/articles/sensors-for-coding-agents.html) · [Source register](sources.md#s07)

<a id="c02"></a>

### C02 · Requirements and specification

**Stated · Personal use.** Distinguish spec-first, spec-anchored, and spec-as-source; evaluate their maintenance implications.

Source format: Authored article.

Published: **2025-10-15**. Practice: September 2025 tool trials; retrospective. Checked: 2026-10-26.

Tools were tried in September 2025; maintenance effectiveness remained an open question.

[Primary source](https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html) · [Source register](sources.md#s03)

<a id="c03"></a>

### C03 · Increment and planning

**Not established · Not established.** Recent AI-specific evidence for this dimension is not established in the reviewed material.

Source format: Not established.

Published: **Not established**. Practice: Not established. Checked: 2026-10-26.

Older guidance and undated artifacts remain in the background archive. This gap does not imply opposition or absence of use.

<a id="c04"></a>

### C04 · Testing and verification

**Stated · Personal use.** Her August 2026 exploratory evaluation distinguishes human-owned tests and review checkpoints from TDD wholly inside the agent loop.

Source format: Authored article.

Published: **2026-08-10**. Practice: Exploratory evaluation before publication; exact dates not stated. Checked: 2026-10-26.

Limited greenfield tasks; LLM-based quality judgment; imperfect adherence. Not evidence against all TDD.

[Primary source](https://martinfowler.com/articles/exploring-gen-ai/tdd-in-the-agent-loop.html) · [Source register](sources.md#s08)

<a id="c05"></a>

### C05 · Design and refactoring

**Stated · Personal use.** Her May 2026 dashboard experiments explore structural feedback to preserve changeability, while recognising its limits.

Source format: Authored article.

Published: **2026-05-27**. Practice: Dashboard experiments before publication; exact dates not stated. Checked: 2026-10-26.

One application, specific configurations; no universal performance claim or copied setup.

[Primary source](https://martinfowler.com/articles/sensors-for-coding-agents.html) · [Source register](sources.md#s07)

<a id="c06"></a>

### C06 · Human understanding and review

**Stated · Recommendation.** Her August 2026 article distinguishes human-authored scenarios and human review checkpoints from agent-only TDD.

Source format: Authored article.

Published: **2026-08-10**. Practice: Exploratory evaluation before publication; exact dates not stated. Checked: 2026-10-26.

Describes alternatives and their purposes; not a complete personal review ritual.

[Primary source](https://martinfowler.com/articles/exploring-gen-ai/tdd-in-the-agent-loop.html) · [Source register](sources.md#s08)

<a id="c07"></a>

### C07 · Agent autonomy and coordination

**Not established · Not established.** Recent AI-specific evidence for this dimension is not established in the reviewed material.

Source format: Not established.

Published: **Not established**. Practice: Not established. Checked: 2026-10-26.

Older guidance and undated artifacts remain in the background archive. This gap does not imply opposition or absence of use.

<a id="c08"></a>

### C08 · Context and durable state

**Stated · Recommendation.** Curate context and distinguish human, model, and software-controlled loading.

Source format: Authored article.

Published: **2026-02-05**. Practice: Feature descriptions as of publication. Checked: 2026-10-26.

Claude Code feature descriptions are a dated example, not current installation verification.

[Primary source](https://martinfowler.com/articles/exploring-gen-ai/context-engineering-coding-agents.html) · [Source register](sources.md#s02)

<a id="c09"></a>

### C09 · Tooling and environment

**Stated · Personal use.** Documented sensor experiments include type checking, ESLint, Semgrep, dependency-cruiser, and mutation testing.

Source format: Authored article.

Published: **2026-05-27**. Practice: Dashboard experiments before publication; exact dates not stated. Checked: 2026-10-26.

One application, specific configurations; no universal performance claim or copied setup.

[Primary source](https://martinfowler.com/articles/sensors-for-coding-agents.html) · [Source register](sources.md#s07)

<a id="c10"></a>

### C10 · Integration and release

**Stated · Recommendation.** Place feedback along the lifecycle according to cost, speed, and criticality.

Source format: Authored article.

Published: **2026-04-02**. Practice: Not a complete personal workflow. Checked: 2026-10-26.

Conceptual lifecycle-feedback model, not a complete proven control system or an established personal integration cadence, deployment approval, or rollback setup.

[Primary source](https://martinfowler.com/articles/harness-engineering.html) · [Source register](sources.md#s01)

<a id="c11"></a>

### C11 · Boundaries and safeguards

**Not established · Not established.** Recent AI-specific evidence for this dimension is not established in the reviewed material.

Source format: Not established.

Published: **Not established**. Practice: Not established. Checked: 2026-10-26.

Older guidance and undated artifacts remain in the background archive. This gap does not imply opposition or absence of use.

<a id="c12"></a>

### C12 · Evaluation and tradeoffs

**Stated · Personal use.** Her August 2026 exploratory agent-loop TDD study found no clear benefit under its narrow conditions; this is not a general verdict on TDD.

Source format: Authored article.

Published: **2026-08-10**. Practice: Exploratory evaluation before publication; exact dates not stated. Checked: 2026-10-26.

Limited greenfield tasks; LLM-based quality judgment; imperfect adherence. Not evidence against all TDD.

[Primary source](https://martinfowler.com/articles/exploring-gen-ai/tdd-in-the-agent-loop.html) · [Source register](sources.md#s08)
