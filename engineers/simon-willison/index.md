---
title: Simon Willison
parent: Engineers
has_children: true
nav_order: 2
engineer_profile: true
cache_schema: 1
person_id: simon-willison
canonical_name: Simon Willison
aliases:
- simonw
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
last_updated: '2026-10-26'
last_read: null
status: unread
tagline: Execute it. Show the evidence. Own the result.
summary: A newsletter feature shipped through review. Personal trials, recommendations and unknowns are dated separately.
strengths:
- Executable feedback
- Evidence and walkthroughs
- Context-aware delegation
tools_summary: Documented examples include Claude Code, Codex, Rodney, Showboat and Git; no complete private setup
  established.
slides_url: /engineers/simon-willison/learn/
dimensions:
- id: D01
  title: Goal and bottleneck
  position: Use executing agents to build useful, better software; humans still choose problems and verify results.
  evidence: Stated
  claim: C01
  detail: recent-ai.md#c01
  source: https://simonwillison.net/guides/agentic-engineering-patterns/what-is-agentic-engineering/
  checked: '2026-10-26'
  qualification: Definition and practitioner priorities, not a controlled outcome result.
  evidence_kind: Recommendation
  published: 2026 (guide began 2026-02-23; chapter date unknown)
  practice_date: Living guide; exact practice dates not established
  source_id: S01
  ai_specific: true
  source_format: Authored article
- id: D02
  title: Requirements and specification
  position: His 9 October 2026 production blog feature uses conversational requirements and a live preview; the
    guide also advocates iterating on evidence.
  evidence: Stated
  claim: C02
  detail: recent-ai.md#c02
  source: https://simonwillison.net/2026/Oct/9/built-using-my-voice/
  checked: '2026-10-26'
  qualification: The voice-led blog feature is one project, not a universal specification format.
  evidence_kind: Personal use
  published: '2026-10-09'
  practice_date: Newsletter feature built and shipped 2026-10-09
  source_id: S14
  ai_specific: true
  source_format: Authored article
- id: D03
  title: Increment and planning
  position: Start with the existing tests; prefer reviewable changes and use Git to inspect and isolate work.
  evidence: Stated
  claim: C03
  detail: recent-ai.md#c03
  source: https://simonwillison.net/guides/agentic-engineering-patterns/first-run-the-tests/
  checked: '2026-10-26'
  qualification: No universal timebox or maximum patch size established; reviewability is contextual.
  evidence_kind: Recommendation
  published: 2026 (guide began 2026-02-23; chapter date unknown)
  practice_date: Living guide; exact practice dates not established
  source_id: S02
  ai_specific: true
  source_format: Authored article
- id: D04
  title: Testing and verification
  position: Use red/green TDD and complement automated checks with exploratory execution of actual behaviour.
  evidence: Stated
  claim: C04
  detail: recent-ai.md#c04
  source: https://simonwillison.net/guides/agentic-engineering-patterns/agentic-manual-testing/
  checked: '2026-10-26'
  qualification: Relevant sources S02–S04; a green suite does not establish every requirement.
  evidence_kind: Recommendation
  published: 2026 (guide began 2026-02-23; chapter date unknown)
  practice_date: Living guide; exact practice dates not established
  source_id: S04
  ai_specific: true
  source_format: Authored article
- id: D05
  title: Design and refactoring
  position: Use cheaper refactoring and experiments to improve quality and explore design alternatives.
  evidence: Stated
  claim: C05
  detail: recent-ai.md#c05
  source: https://simonwillison.net/guides/agentic-engineering-patterns/better-code/
  checked: '2026-10-26'
  qualification: Accept, refine or discard results; no complete architectural doctrine inferred.
  evidence_kind: Recommendation
  published: 2026 (guide began 2026-02-23; chapter date unknown)
  practice_date: Living guide; exact practice dates not established
  source_id: S06
  ai_specific: true
  source_format: Authored article
- id: D06
  title: Human understanding and review
  position: Authors own initial review; walkthroughs and interactive explanations can repair understanding gaps.
  evidence: Stated
  claim: C06
  detail: recent-ai.md#c06
  source: https://simonwillison.net/guides/agentic-engineering-patterns/anti-patterns/
  checked: '2026-10-26'
  qualification: Sources S05, S09 and S10. Experimental projects are distinct from collaborator-facing guidance.
  evidence_kind: Recommendation
  published: 2026 (guide began 2026-02-23; chapter date unknown)
  practice_date: Living guide; exact practice dates not established
  source_id: S05
  ai_specific: true
  source_format: Authored article
- id: D07
  title: Agent autonomy and coordination
  position: Use fresh subagent contexts and parallelise independent tasks when the coordination cost is justified.
  evidence: Stated
  claim: C07
  detail: recent-ai.md#c07
  source: https://simonwillison.net/guides/agentic-engineering-patterns/subagents/
  checked: '2026-10-26'
  qualification: The Battle Drones account also shows a more open-ended experimental multi-agent run; not a universal
    prescription.
  evidence_kind: Recommendation
  published: 2026 (guide began 2026-02-23; chapter date unknown)
  practice_date: Living guide; exact practice dates not established
  source_id: S08
  ai_specific: true
  source_format: Authored article
- id: D08
  title: Context and durable state
  position: Retain working examples and update guidance from experience; use history and fresh contexts for orientation.
  evidence: Stated
  claim: C08
  detail: recent-ai.md#c08
  source: https://simonwillison.net/guides/agentic-engineering-patterns/hoard-things-you-know-how-to-do/
  checked: '2026-10-26'
  qualification: Sources S06–S08 and S12; complete private memory infrastructure is not established.
  evidence_kind: Recommendation
  published: 2026 (guide began 2026-02-23; chapter date unknown)
  practice_date: Living guide; exact practice dates not established
  source_id: S07
  ai_specific: true
  source_format: Authored article
- id: D09
  title: Tooling and environment
  position: His October 2026 newsletter feature used Codex voice interaction, a local preview, and GitHub PR review.
  evidence: Stated
  claim: C09
  detail: recent-ai.md#c09
  source: https://simonwillison.net/2026/Oct/9/built-using-my-voice/
  checked: '2026-10-26'
  qualification: Actual dated project account; this does not describe every tool he uses.
  evidence_kind: Personal use
  published: '2026-10-09'
  practice_date: Newsletter feature built and shipped 2026-10-09
  source_id: S14
  ai_specific: true
  source_format: Authored article
- id: D10
  title: Integration and release
  position: His 9 October 2026 production-feature account uses PR review and corrections before deployment; guide
    recommendations favour reviewable Git changes.
  evidence: Stated
  claim: C10
  detail: recent-ai.md#c10
  source: https://simonwillison.net/2026/Oct/9/built-using-my-voice/
  checked: '2026-10-26'
  qualification: One release account does not establish a universal CI or rollback system.
  evidence_kind: Personal use
  published: '2026-10-09'
  practice_date: Newsletter feature built and shipped 2026-10-09
  source_id: S14
  ai_specific: true
  source_format: Authored article
- id: D11
  title: Boundaries and safeguards
  position: Recent AI-specific evidence for this dimension is not established in the reviewed material.
  evidence: Not established
  claim: C11
  detail: recent-ai.md#c11
  source: ''
  checked: '2026-10-26'
  qualification: Older guidance and undated artifacts remain in the background archive. This gap does not imply
    opposition or absence of use.
  evidence_kind: Not established
  published: Not established
  practice_date: Not established
  source_id: ''
  ai_specific: false
  source_format: Not established
- id: D12
  title: Evaluation and tradeoffs
  position: Evaluate evidence in project context; no universal comparative speed or safety advantage is established
    here.
  evidence: Inferred
  claim: C12
  detail: recent-ai.md#c12
  source: https://simonwillison.net/2026/Oct/20/battledrones/
  checked: '2026-10-26'
  qualification: Our evidence assessment, not an effectiveness claim by Willison; experiments and production have
    different stakes.
  evidence_kind: Personal use
  published: '2026-10-20'
  practice_date: Experimental game account; exact session dates not stated
  source_id: S15
  ai_specific: true
  source_format: Authored article
evidence_since: '2025-10-01'
evidence_focus: AI-specific publications since October 2025; personal use distinguished from advice
practice_focus: coding-workflows
---

# Simon Willison

[Recent AI evidence](recent-ai.md) · [Slideshow]({{ '/engineers/simon-willison/learn/' | relative_url }}) · [Compare profiles]({{ '/engineers/compare/' | relative_url }})

## Research map

[AI use and recent publications](recent-ai.md) · [Earlier detailed research](research.md) · [Source register](sources.md) · [Comparison history](background.md) · [Slide notes](slides.md)

The comparison prioritises AI-specific publications since **1 October 2025**. Publication date does not establish when a practice occurred. Older general advice no longer fills missing recent fields.

## Comparison evidence

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated · Recommendation.** Use executing agents to build useful, better software; humans still choose problems and verify results.

Source format: Authored article.

Published: **2026 (guide began 2026-02-23; chapter date unknown)**. Practice: Living guide; exact practice dates not established.

Definition and practitioner priorities, not a controlled outcome result.

[Recent evidence](recent-ai.md#c01) · [Primary source](https://simonwillison.net/guides/agentic-engineering-patterns/what-is-agentic-engineering/)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Stated · Personal use.** His 9 October 2026 production blog feature uses conversational requirements and a live preview; the guide also advocates iterating on evidence.

Source format: Authored article.

Published: **2026-10-09**. Practice: Newsletter feature built and shipped 2026-10-09.

The voice-led blog feature is one project, not a universal specification format.

[Recent evidence](recent-ai.md#c02) · [Primary source](https://simonwillison.net/2026/Oct/9/built-using-my-voice/)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Stated · Recommendation.** Start with the existing tests; prefer reviewable changes and use Git to inspect and isolate work.

Source format: Authored article.

Published: **2026 (guide began 2026-02-23; chapter date unknown)**. Practice: Living guide; exact practice dates not established.

No universal timebox or maximum patch size established; reviewability is contextual.

[Recent evidence](recent-ai.md#c03) · [Primary source](https://simonwillison.net/guides/agentic-engineering-patterns/first-run-the-tests/)

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Stated · Recommendation.** Use red/green TDD and complement automated checks with exploratory execution of actual behaviour.

Source format: Authored article.

Published: **2026 (guide began 2026-02-23; chapter date unknown)**. Practice: Living guide; exact practice dates not established.

Relevant sources S02–S04; a green suite does not establish every requirement.

[Recent evidence](recent-ai.md#c04) · [Primary source](https://simonwillison.net/guides/agentic-engineering-patterns/agentic-manual-testing/)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Stated · Recommendation.** Use cheaper refactoring and experiments to improve quality and explore design alternatives.

Source format: Authored article.

Published: **2026 (guide began 2026-02-23; chapter date unknown)**. Practice: Living guide; exact practice dates not established.

Accept, refine or discard results; no complete architectural doctrine inferred.

[Recent evidence](recent-ai.md#c05) · [Primary source](https://simonwillison.net/guides/agentic-engineering-patterns/better-code/)

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated · Recommendation.** Authors own initial review; walkthroughs and interactive explanations can repair understanding gaps.

Source format: Authored article.

Published: **2026 (guide began 2026-02-23; chapter date unknown)**. Practice: Living guide; exact practice dates not established.

Sources S05, S09 and S10. Experimental projects are distinct from collaborator-facing guidance.

[Recent evidence](recent-ai.md#c06) · [Primary source](https://simonwillison.net/guides/agentic-engineering-patterns/anti-patterns/)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Stated · Recommendation.** Use fresh subagent contexts and parallelise independent tasks when the coordination cost is justified.

Source format: Authored article.

Published: **2026 (guide began 2026-02-23; chapter date unknown)**. Practice: Living guide; exact practice dates not established.

The Battle Drones account also shows a more open-ended experimental multi-agent run; not a universal prescription.

[Recent evidence](recent-ai.md#c07) · [Primary source](https://simonwillison.net/guides/agentic-engineering-patterns/subagents/)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Stated · Recommendation.** Retain working examples and update guidance from experience; use history and fresh contexts for orientation.

Source format: Authored article.

Published: **2026 (guide began 2026-02-23; chapter date unknown)**. Practice: Living guide; exact practice dates not established.

Sources S06–S08 and S12; complete private memory infrastructure is not established.

[Recent evidence](recent-ai.md#c08) · [Primary source](https://simonwillison.net/guides/agentic-engineering-patterns/hoard-things-you-know-how-to-do/)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Stated · Personal use.** His October 2026 newsletter feature used Codex voice interaction, a local preview, and GitHub PR review.

Source format: Authored article.

Published: **2026-10-09**. Practice: Newsletter feature built and shipped 2026-10-09.

Actual dated project account; this does not describe every tool he uses.

[Recent evidence](recent-ai.md#c09) · [Primary source](https://simonwillison.net/2026/Oct/9/built-using-my-voice/)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Stated · Personal use.** His 9 October 2026 production-feature account uses PR review and corrections before deployment; guide recommendations favour reviewable Git changes.

Source format: Authored article.

Published: **2026-10-09**. Practice: Newsletter feature built and shipped 2026-10-09.

One release account does not establish a universal CI or rollback system.

[Recent evidence](recent-ai.md#c10) · [Primary source](https://simonwillison.net/2026/Oct/9/built-using-my-voice/)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Not established · Not established.** Recent AI-specific evidence for this dimension is not established in the reviewed material.

Source format: Not established.

Published: **Not established**. Practice: Not established.

Older guidance and undated artifacts remain in the background archive. This gap does not imply opposition or absence of use.

[Recent evidence](recent-ai.md#c11)

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Inferred · Personal use.** Evaluate evidence in project context; no universal comparative speed or safety advantage is established here.

Source format: Authored article.

Published: **2026-10-20**. Practice: Experimental game account; exact session dates not stated.

Our evidence assessment, not an effectiveness claim by Willison; experiments and production have different stakes.

[Recent evidence](recent-ai.md#c12) · [Primary source](https://simonwillison.net/2026/Oct/20/battledrones/)
