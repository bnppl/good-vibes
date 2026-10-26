---
title: Dave Farley
parent: Engineers
has_children: true
nav_order: 1
engineer_profile: true
cache_schema: 1
person_id: dave-farley
canonical_name: Dave Farley
aliases:
- David Farley
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
last_updated: '2026-10-26'
last_read: null
status: unread
tagline: Executable intent. Small steps. Fast feedback.
summary: An AI acceptance-contract proposal. Recent acceptance-contract guidance; a full private implementation
  workflow is not established.
strengths:
- Executable specifications
- Four-layer acceptance tests
- Continuous Delivery
tools_summary: Official CD.Training Claude plugin; tool choices in the worked example are adaptations.
slides_url: /engineers/dave-farley/learn/
dimensions:
- id: D01
  title: Goal and bottleneck
  position: Farley prioritises precise intent and verification, which he identifies as the bottleneck in agentic
    work.
  evidence: Stated
  claim: C01
  detail: recent-ai.md#c01
  source: https://www.aviator.co/podcast/engineering-discipline-dave-farley
  checked: '2026-10-26'
  qualification: 'S02: public first-person interview, checked 26 October 2026; a stated priority, not a measured
    universal bottleneck.'
  evidence_kind: Recommendation
  published: '2026-02-12'
  practice_date: Interview includes experience; not an end-to-end build log
  source_id: S02
  ai_specific: true
  source_format: Interview page
- id: D02
  title: Requirements and specification
  position: Human-owned executable examples define the acceptance contract.
  evidence: Stated
  claim: C02
  detail: recent-ai.md#c02
  source: https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe
  checked: '2026-10-26'
  qualification: 'S01/S03/S12: human ownership and executable examples are documented; the reward examples here
    are our adaptations.'
  evidence_kind: Recommendation
  published: '2026-10-25'
  practice_date: Proposed agent workflow; not a reproduced implementation
  source_id: S01
  ai_specific: true
  source_format: Authored article (cached inspection)
- id: D03
  title: Increment and planning
  position: 'One scenario at a time: observe failure, implement, review, commit.'
  evidence: Stated
  claim: C03
  detail: recent-ai.md#c03
  source: https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe
  checked: '2026-10-26'
  qualification: 'S01/S04: the incremental loop is stated; the exact worked scenario order in this cache is proposed
    guidance.'
  evidence_kind: Recommendation
  published: '2026-10-25'
  practice_date: Proposed agent workflow; not a reproduced implementation
  source_id: S01
  ai_specific: true
  source_format: Authored article (cached inspection)
- id: D04
  title: Testing and verification
  position: Drive behaviour with human-owned failing acceptance examples; separate unit-level design feedback and
    challenge assertions with mutation testing.
  evidence: Stated
  claim: C04
  detail: recent-ai.md#c04
  source: https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe
  checked: '2026-10-26'
  qualification: 'S01/S05/S06/S07/S12: acceptance-first behaviour, unit-level design, and test quality are distinct
    concerns. Tool selection and boundaries in the reward exercise remain suggested adaptations.'
  evidence_kind: Recommendation
  published: '2026-10-25'
  practice_date: Proposed agent workflow; not a reproduced implementation
  source_id: S01
  ai_specific: true
  source_format: Authored article (cached inspection)
- id: D05
  title: Design and refactoring
  position: Retain modularity, separation of concerns, testability, and refactoring.
  evidence: Stated
  claim: C05
  detail: recent-ai.md#c05
  source: https://www.aviator.co/podcast/engineering-discipline-dave-farley
  checked: '2026-10-26'
  qualification: 'S02: foundational design concerns remain important; the cache does not establish one mandatory
    architecture or refactoring tool.'
  evidence_kind: Recommendation
  published: '2026-02-12'
  practice_date: Interview includes experience; not an end-to-end build log
  source_id: S02
  ai_specific: true
  source_format: Interview page
- id: D06
  title: Human understanding and review
  position: Humans own intent; inspect code when risk warrants it.
  evidence: Stated
  claim: C06
  detail: recent-ai.md#c06
  source: https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe
  checked: '2026-10-26'
  qualification: 'S01: human intent ownership and risk-based code inspection. This does not establish that every
    generated line can safely go unread.'
  evidence_kind: Recommendation
  published: '2026-10-25'
  practice_date: Proposed agent workflow; not a reproduced implementation
  source_id: S01
  ai_specific: true
  source_format: Authored article (cached inspection)
- id: D07
  title: Agent autonomy and coordination
  position: His 25 October 2026 proposal has agents implement within human-owned acceptance contracts; a complete
    personal orchestration setup is not established.
  evidence: Stated
  claim: C07
  detail: recent-ai.md#c07
  source: https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe
  checked: '2026-10-26'
  qualification: 'S01/S03: implementation against an acceptance contract is stated. Personal orchestration, model
    routing, and parallel-agent arrangements are not established.'
  evidence_kind: Recommendation
  published: '2026-10-25'
  practice_date: Proposed agent workflow; not a reproduced implementation
  source_id: S01
  ai_specific: true
  source_format: Authored article (cached inspection)
- id: D08
  title: Context and durable state
  position: Recent AI-specific evidence for this dimension is not established in the reviewed material.
  evidence: Not established
  claim: C08
  detail: recent-ai.md#c08
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
- id: D09
  title: Tooling and environment
  position: Recent AI-specific evidence for this dimension is not established in the reviewed material.
  evidence: Not established
  claim: C09
  detail: recent-ai.md#c09
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
- id: D10
  title: Integration and release
  position: Small reversible changes, automated verification, and releasability.
  evidence: Stated
  claim: C10
  detail: recent-ai.md#c10
  source: https://www.linkedin.com/pulse/continuous-delivery-matters-more-less-when-ai-loop-dave-farley-zidce
  checked: '2026-10-26'
  qualification: 'S04/S07: continuous verification and releasability are documented. The proposed application pipeline
    is not Farley’s private configuration.'
  evidence_kind: Recommendation
  published: '2026-05-29'
  practice_date: AI-specific delivery guidance
  source_id: S04
  ai_specific: true
  source_format: Authored article (cached inspection)
- id: D11
  title: Boundaries and safeguards
  position: Acceptance-test changes need human control.
  evidence: Stated
  claim: C11
  detail: recent-ai.md#c11
  source: https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe
  checked: '2026-10-26'
  qualification: 'S01: the human-controlled acceptance contract is stated. Permission and CI arrangements in the
    worked guide are suggested implementations of that concern.'
  evidence_kind: Recommendation
  published: '2026-10-25'
  practice_date: Proposed agent workflow; not a reproduced implementation
  source_id: S01
  ai_specific: true
  source_format: Authored article (cached inspection)
- id: D12
  title: Evaluation and tradeoffs
  position: Assess behavioural confidence through acceptance evidence and mutation checks while retaining review
    and acknowledging untested requirements; universal productivity gains remain unestablished.
  evidence: Inferred
  claim: C12
  detail: recent-ai.md#c12
  source: https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe
  checked: '2026-10-26'
  qualification: 'Inferred synthesis of S01/S02/S05: source recommendations concern verification and risk-based
    review; our limits include equivalent mutants, incomplete requirements, and lack of controlled cross-workflow
    outcome evidence. C12 retains its original universal-efficacy limitation.'
  evidence_kind: Recommendation
  published: '2026-10-25'
  practice_date: Proposed agent workflow; not a reproduced implementation
  source_id: S01
  ai_specific: true
  source_format: Authored article (cached inspection)
evidence_since: '2025-10-01'
evidence_focus: AI-specific publications since October 2025; personal use distinguished from advice
practice_focus: coding-workflows
---

# Dave Farley

[Recent AI evidence](recent-ai.md) · [Slideshow]({{ '/engineers/dave-farley/learn/' | relative_url }}) · [Compare profiles]({{ '/engineers/compare/' | relative_url }})

## Research map

[AI use and recent publications](recent-ai.md) · [Earlier detailed research](research.md) · [Source register](sources.md) · [Comparison history](background.md) · [Slide notes](slides.md)

The comparison prioritises AI-specific publications since **1 October 2025**. Publication date does not establish when a practice occurred. Older general advice no longer fills missing recent fields.

## Comparison evidence

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated · Recommendation.** Farley prioritises precise intent and verification, which he identifies as the bottleneck in agentic work.

Source format: Interview page.

Published: **2026-02-12**. Practice: Interview includes experience; not an end-to-end build log.

S02: public first-person interview, checked 26 October 2026; a stated priority, not a measured universal bottleneck.

[Recent evidence](recent-ai.md#c01) · [Primary source](https://www.aviator.co/podcast/engineering-discipline-dave-farley)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Stated · Recommendation.** Human-owned executable examples define the acceptance contract.

Source format: Authored article (cached inspection).

Published: **2026-10-25**. Practice: Proposed agent workflow; not a reproduced implementation.

S01/S03/S12: human ownership and executable examples are documented; the reward examples here are our adaptations.

[Recent evidence](recent-ai.md#c02) · [Primary source](https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Stated · Recommendation.** One scenario at a time: observe failure, implement, review, commit.

Source format: Authored article (cached inspection).

Published: **2026-10-25**. Practice: Proposed agent workflow; not a reproduced implementation.

S01/S04: the incremental loop is stated; the exact worked scenario order in this cache is proposed guidance.

[Recent evidence](recent-ai.md#c03) · [Primary source](https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe)

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Stated · Recommendation.** Drive behaviour with human-owned failing acceptance examples; separate unit-level design feedback and challenge assertions with mutation testing.

Source format: Authored article (cached inspection).

Published: **2026-10-25**. Practice: Proposed agent workflow; not a reproduced implementation.

S01/S05/S06/S07/S12: acceptance-first behaviour, unit-level design, and test quality are distinct concerns. Tool selection and boundaries in the reward exercise remain suggested adaptations.

[Recent evidence](recent-ai.md#c04) · [Primary source](https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Stated · Recommendation.** Retain modularity, separation of concerns, testability, and refactoring.

Source format: Interview page.

Published: **2026-02-12**. Practice: Interview includes experience; not an end-to-end build log.

S02: foundational design concerns remain important; the cache does not establish one mandatory architecture or refactoring tool.

[Recent evidence](recent-ai.md#c05) · [Primary source](https://www.aviator.co/podcast/engineering-discipline-dave-farley)

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated · Recommendation.** Humans own intent; inspect code when risk warrants it.

Source format: Authored article (cached inspection).

Published: **2026-10-25**. Practice: Proposed agent workflow; not a reproduced implementation.

S01: human intent ownership and risk-based code inspection. This does not establish that every generated line can safely go unread.

[Recent evidence](recent-ai.md#c06) · [Primary source](https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Stated · Recommendation.** His 25 October 2026 proposal has agents implement within human-owned acceptance contracts; a complete personal orchestration setup is not established.

Source format: Authored article (cached inspection).

Published: **2026-10-25**. Practice: Proposed agent workflow; not a reproduced implementation.

S01/S03: implementation against an acceptance contract is stated. Personal orchestration, model routing, and parallel-agent arrangements are not established.

[Recent evidence](recent-ai.md#c07) · [Primary source](https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Not established · Not established.** Recent AI-specific evidence for this dimension is not established in the reviewed material.

Source format: Not established.

Published: **Not established**. Practice: Not established.

Older guidance and undated artifacts remain in the background archive. This gap does not imply opposition or absence of use.

[Recent evidence](recent-ai.md#c08)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Not established · Not established.** Recent AI-specific evidence for this dimension is not established in the reviewed material.

Source format: Not established.

Published: **Not established**. Practice: Not established.

Older guidance and undated artifacts remain in the background archive. This gap does not imply opposition or absence of use.

[Recent evidence](recent-ai.md#c09)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Stated · Recommendation.** Small reversible changes, automated verification, and releasability.

Source format: Authored article (cached inspection).

Published: **2026-05-29**. Practice: AI-specific delivery guidance.

S04/S07: continuous verification and releasability are documented. The proposed application pipeline is not Farley’s private configuration.

[Recent evidence](recent-ai.md#c10) · [Primary source](https://www.linkedin.com/pulse/continuous-delivery-matters-more-less-when-ai-loop-dave-farley-zidce)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Stated · Recommendation.** Acceptance-test changes need human control.

Source format: Authored article (cached inspection).

Published: **2026-10-25**. Practice: Proposed agent workflow; not a reproduced implementation.

S01: the human-controlled acceptance contract is stated. Permission and CI arrangements in the worked guide are suggested implementations of that concern.

[Recent evidence](recent-ai.md#c11) · [Primary source](https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe)

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Inferred · Recommendation.** Assess behavioural confidence through acceptance evidence and mutation checks while retaining review and acknowledging untested requirements; universal productivity gains remain unestablished.

Source format: Authored article (cached inspection).

Published: **2026-10-25**. Practice: Proposed agent workflow; not a reproduced implementation.

Inferred synthesis of S01/S02/S05: source recommendations concern verification and risk-based review; our limits include equivalent mutants, incomplete requirements, and lack of controlled cross-workflow outcome evidence. C12 retains its original universal-efficacy limitation.

[Recent evidence](recent-ai.md#c12) · [Primary source](https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe)
