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
summary: Acceptance Test-Driven Development gives agents a human-approved behavioural contract.
strengths:
- Executable specifications
- Four-layer acceptance tests
- Continuous Delivery
tools_summary: Official CD.Training Claude plugin; tool choices in the worked example are adaptations.
slides_url: /engineers/dave-farley/learn/
dimensions:
- id: D01
  title: Goal and bottleneck
  position: Verification is the bottleneck; define intended behaviour precisely.
  evidence: Stated
  claim: C01
  detail: research.md#1-the-techniques-and-what-each-contributes
  source: https://www.aviator.co/podcast/engineering-discipline-dave-farley
  checked: '2026-10-26'
  qualification: 'S02: public first-person interview, checked 26 October 2026; a stated priority, not a measured
    universal bottleneck.'
- id: D02
  title: Requirements and specification
  position: Human-owned executable examples define the acceptance contract.
  evidence: Stated
  claim: C02
  detail: research.md#1-the-techniques-and-what-each-contributes
  source: https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe
  checked: '2026-10-26'
  qualification: 'S01/S03/S12: human ownership and executable examples are documented; the reward examples here
    are our adaptations.'
- id: D03
  title: Increment and planning
  position: 'One scenario at a time: observe failure, implement, review, commit.'
  evidence: Stated
  claim: C03
  detail: research.md#3-a-step-by-step-session
  source: https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe
  checked: '2026-10-26'
  qualification: 'S01/S04: the incremental loop is stated; the exact worked scenario order in this cache is proposed
    guidance.'
- id: D04
  title: Testing and verification
  position: Layer acceptance tests; use mutation testing to challenge assertions.
  evidence: Stated
  claim: C04
  detail: research.md#2-the-four-layer-model-applied-to-spellhaven
  source: https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe
  checked: '2026-10-26'
  qualification: 'S01/S05/S06/S07: acceptance layering and mutation are documented. Tool selection and test boundaries
    in the worked example are suggestions.'
- id: D05
  title: Design and refactoring
  position: Retain modularity, separation of concerns, testability, and refactoring.
  evidence: Stated
  claim: C05
  detail: research.md#1-the-techniques-and-what-each-contributes
  source: https://www.aviator.co/podcast/engineering-discipline-dave-farley
  checked: '2026-10-26'
  qualification: 'S02: foundational design concerns remain important; the cache does not establish one mandatory
    architecture or refactoring tool.'
- id: D06
  title: Human understanding and review
  position: Humans own intent; inspect code when risk warrants it.
  evidence: Stated
  claim: C06
  detail: research.md#3-a-step-by-step-session
  source: https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe
  checked: '2026-10-26'
  qualification: 'S01: human intent ownership and risk-based code inspection. This does not establish that every
    generated line can safely go unread.'
- id: D07
  title: Agent autonomy and coordination
  position: Agents implement within the acceptance contract. A complete orchestration setup is not established.
  evidence: Stated
  claim: C07
  detail: research.md#sources-and-further-study
  source: https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe
  checked: '2026-10-26'
  qualification: 'S01/S03: implementation against an acceptance contract is stated. Personal orchestration, model
    routing, and parallel-agent arrangements are not established.'
- id: D08
  title: Context and durable state
  position: A complete personal context, memory, and handoff setup is not established.
  evidence: Not established
  claim: C08
  detail: research.md#sources-and-further-study
  source: ''
  checked: '2026-10-26'
  qualification: The inspected public cache does not establish a complete personal memory or handoff setup. Unknown
    is not evidence of non-use.
- id: D09
  title: Tooling and environment
  position: Official course plugin offers learn, build, and review. This does not establish his complete personal
    stack.
  evidence: Stated
  claim: C09
  detail: research.md#4-tools-what-is-official-and-what-is-a-suggested-choice
  source: https://github.com/cd-training-courses/claude-skills
  checked: '2026-10-26'
  qualification: 'S08/S09/S10: official course commands are documented; the advertised score feature and separately
    maintained scoring implementation are not a complete personal stack. Repository revision was not captured; recheck
    before installation.'
- id: D10
  title: Integration and release
  position: Small reversible changes, automated verification, and releasability.
  evidence: Stated
  claim: C10
  detail: research.md#3-a-step-by-step-session
  source: https://www.linkedin.com/pulse/continuous-delivery-matters-more-less-when-ai-loop-dave-farley-zidce
  checked: '2026-10-26'
  qualification: 'S04/S07: continuous verification and releasability are documented. The proposed application pipeline
    is not Farley’s private configuration.'
- id: D11
  title: Boundaries and safeguards
  position: Acceptance-test changes need human control.
  evidence: Stated
  claim: C11
  detail: research.md#5-protecting-the-contract-in-practice
  source: https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe
  checked: '2026-10-26'
  qualification: 'S01: the human-controlled acceptance contract is stated. Permission and CI arrangements in the
    worked guide are suggested implementations of that concern.'
- id: D12
  title: Evaluation and tradeoffs
  position: A universal productivity advantage is not established by the public material reviewed.
  evidence: Inferred
  claim: C12
  detail: research.md#6-common-ways-this-approach-can-fail
  source: https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe
  checked: '2026-10-26'
  qualification: 'Our assessment of S01–S12: advocacy, interview, curriculum, and documentation are not comparable
    controlled outcome evidence. No workflow winner or universal productivity effect is claimed.'
---

# Dave Farley

Executable intent. Small steps. Fast feedback.

[Open the slideshow]({{ '/engineers/dave-farley/learn/' | relative_url }}) · [Compare profiles]({{ '/engineers/compare/' | relative_url }})

## Research cache

[Full detailed guide](research.md) · [Source findings and register](sources.md) · [Common reward example](neutral-example.md) · [Slide notes](slides.md)

Research checked and cut off on **26 October 2026**. This is public-source research, not access to paid lessons or a complete personal tool inventory. The original guide was migrated without new external research. This run reused that cache; the [common reward mapping](neutral-example.md) is a new suggested adaptation, not newly verified source material.

## Comparison evidence

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated.** Verification is the bottleneck; define intended behaviour precisely.

[Detail](research.md#1-the-techniques-and-what-each-contributes) · [Primary source](https://www.aviator.co/podcast/engineering-discipline-dave-farley)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Stated.** Human-owned executable examples define the acceptance contract.

[Detail](research.md#1-the-techniques-and-what-each-contributes) · [Primary source](https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Stated.** One scenario at a time: observe failure, implement, review, commit.

[Detail](research.md#3-a-step-by-step-session) · [Primary source](https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe)

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Stated.** Layer acceptance tests; use mutation testing to challenge assertions.

[Detail](research.md#2-the-four-layer-model-applied-to-spellhaven) · [Primary source](https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Stated.** Retain modularity, separation of concerns, testability, and refactoring.

[Detail](research.md#1-the-techniques-and-what-each-contributes) · [Primary source](https://www.aviator.co/podcast/engineering-discipline-dave-farley)

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated.** Humans own intent; inspect code when risk warrants it.

[Detail](research.md#3-a-step-by-step-session) · [Primary source](https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Stated.** Agents implement within the acceptance contract. A complete orchestration setup is not established.

[Detail](research.md#sources-and-further-study) · [Primary source](https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Not established.** A complete personal context, memory, and handoff setup is not established.

[Detail](research.md#sources-and-further-study)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Stated.** Official course plugin offers learn, build, and review. This does not establish his complete personal stack.

[Detail](research.md#4-tools-what-is-official-and-what-is-a-suggested-choice) · [Primary source](https://github.com/cd-training-courses/claude-skills)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Stated.** Small reversible changes, automated verification, and releasability.

[Detail](research.md#3-a-step-by-step-session) · [Primary source](https://www.linkedin.com/pulse/continuous-delivery-matters-more-less-when-ai-loop-dave-farley-zidce)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Stated.** Acceptance-test changes need human control.

[Detail](research.md#5-protecting-the-contract-in-practice) · [Primary source](https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe)

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Inferred.** A universal productivity advantage is not established by the public material reviewed.

[Detail](research.md#6-common-ways-this-approach-can-fail) · [Primary source](https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe)
