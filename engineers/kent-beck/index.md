---
title: Kent Beck
parent: Engineers
has_children: true
nav_order: 4
engineer_profile: true
cache_schema: 1
person_id: kent-beck
canonical_name: Kent Beck
aliases: []
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
last_updated: '2026-10-26'
last_read: null
status: unread
tagline: Small decisions. Clear feedback. Human judgment.
summary: Augmented coding retains concern for code, tests, design, and the person steering the work. Public experiments
  show evolving tools rather than one fixed agent recipe.
strengths:
- Small feedback loops
- Tidy First design decisions
- Human-centred tooling
tools_summary: Dated Augment experiments and inspected BPlusTree3 conventions; a full private stack is not established.
slides_url: /engineers/kent-beck/learn/
dimensions:
- id: D01
  title: Goal and bottleneck
  position: Useful behaviour, future flexibility, and human needs matter beyond generated volume.
  evidence: Inferred
  claim: C01
  detail: research.md#1-approach-in-brief
  source: https://newsletter.kentbeck.com/p/genie-tarpit
  checked: '2026-10-26'
  qualification: Synthesis across dated design and AI material; not a named Beck metric.
- id: D02
  title: Requirements and specification
  position: The published June 2025 workflow uses a next-test plan.
  evidence: Stated
  claim: C02
  detail: sources.md#s01
  source: https://newsletter.kentbeck.com/p/augmented-coding-beyond-the-vibes
  checked: '2026-10-26'
  qualification: Historical project instructions; not a universal requirements format.
- id: D03
  title: Increment and planning
  position: Small increments; an October 2026 public teaser proposes fixing feedback-loop time and flexing scope.
  evidence: Stated
  claim: C03
  detail: research.md#2-techniques-and-principles
  source: https://newsletter.kentbeck.com/p/thinkie-fix-time-flex-scope
  checked: '2026-10-26'
  qualification: October paid body was not accessed; no universal time target inferred.
- id: D04
  title: Testing and verification
  position: BPlusTree3 documents test-first work and validation against reference implementations.
  evidence: Stated
  claim: C04
  detail: sources.md#s02
  source: https://github.com/KentBeck/BPlusTree3
  checked: '2026-10-26'
  qualification: Repository prescription; tests and benchmarks were not run in this research.
- id: D05
  title: Design and refactoring
  position: Keep structure and behaviour changes distinguishable; judge when tidying pays off.
  evidence: Stated
  claim: C05
  detail: sources.md#s04
  source: https://newsletter.kentbeck.com/p/distinctions-with-a-difference
  checked: '2026-10-26'
  qualification: Timing is contextual, not a mandate to refactor before every change.
- id: D06
  title: Human understanding and review
  position: In his June 2025 augmented-coding account, Beck reports inspecting design and intervening when generation
    goes off course.
  evidence: Stated
  claim: C06
  detail: sources.md#s01
  source: https://newsletter.kentbeck.com/p/augmented-coding-beyond-the-vibes
  checked: '2026-10-26'
  qualification: June self-report; complete current review policy is not established.
- id: D07
  title: Agent autonomy and coordination
  position: His April 2026 Intent session reports coordination burden and argues for desired outcomes rather than
    managing agents for its own sake.
  evidence: Stated
  claim: C07
  detail: sources.md#s06
  source: https://newsletter.kentbeck.com/p/genie-lessons-nobody-wants-agents
  checked: '2026-10-26'
  qualification: April self-report about Intent; not evidence that all parallel work fails.
- id: D08
  title: Context and durable state
  position: June 2025 test-plan instructions and inspected BPlusTree3 conventions provide explicit project guidance.
  evidence: Stated
  claim: C08
  detail: research.md#4-tools-and-setup
  source: https://github.com/KentBeck/BPlusTree3/blob/main/agent.md
  checked: '2026-10-26'
  qualification: No complete personal durable-memory or handoff architecture established.
- id: D09
  title: Tooling and environment
  position: Dated Augment experiments and inspected BPlusTree3 Cargo/benchmark checks provide examples, not a complete
    current personal stack.
  evidence: Stated
  claim: C09
  detail: research.md#4-tools-and-setup
  source: https://github.com/KentBeck/BPlusTree3/blob/main/agent.md
  checked: '2026-10-26'
  qualification: Tool use is dated and project-specific; no universal preferred model inferred.
- id: D10
  title: Integration and release
  position: Small focused commits and project checks are documented; production release policy remains unknown.
  evidence: Stated
  claim: C10
  detail: sources.md#s02
  source: https://github.com/KentBeck/BPlusTree3
  checked: '2026-10-26'
  qualification: Do not generalise a library project into a full product pipeline.
- id: D11
  title: Boundaries and safeguards
  position: A complete personal permissions, sandbox, protected-test, approval, or budget policy is not established
    by the reviewed cache.
  evidence: Not established
  claim: C11
  detail: research.md#6-failure-modes-and-limits
  source: ''
  checked: '2026-10-26'
  qualification: Unknown is not opposition or non-use. The June project account reports unwanted work and removed
    tests, but our proposed stop rule is an adaptation rather than evidence of Beck’s deployed enforcement policy.
- id: D12
  title: Evaluation and tradeoffs
  position: Evaluate behaviour, changeability, and coordination cost; universal superiority is unproven.
  evidence: Inferred
  claim: C12
  detail: research.md#6-failure-modes-and-limits
  source: https://newsletter.kentbeck.com/p/genie-tarpit
  checked: '2026-10-26'
  qualification: Conceptual synthesis and self-reports, not a controlled comparative productivity result.
---

# Kent Beck

[Open the slideshow]({{ '/engineers/kent-beck/learn/' | relative_url }}) · [Compare cached profiles]({{ '/engineers/compare/?people=kent-beck,dave-farley' | relative_url }})

## Research cache

[Detailed research](research.md) · [Worked feature and original prompts](workflow.md) · [Source findings](sources.md) · [Slide notes](slides.md)

Research inspected and cut off on **26 October 2026**. Current public excerpts are distinguished from historical instructions; paid content and a complete private environment were not accessed.

## Comparison evidence

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Inferred.** Useful behaviour, future flexibility, and human needs matter beyond generated volume.

Synthesis across dated design and AI material; not a named Beck metric.

[Cached source finding](sources.md#s07) · [Primary source](https://newsletter.kentbeck.com/p/genie-tarpit)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Stated.** The published June 2025 workflow uses a next-test plan.

Historical project instructions; not a universal requirements format.

[Cached source finding](sources.md#s01) · [Primary source](https://newsletter.kentbeck.com/p/augmented-coding-beyond-the-vibes)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Stated.** Small increments; an October 2026 public teaser proposes fixing feedback-loop time and flexing scope.

October paid body was not accessed; no universal time target inferred.

[Cached detail](research.md#2-techniques-and-principles) · [Primary source](https://newsletter.kentbeck.com/p/thinkie-fix-time-flex-scope)

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Stated.** BPlusTree3 documents test-first work and validation against reference implementations.

Repository prescription; tests and benchmarks were not run in this research.

[Cached source finding](sources.md#s02) · [Primary source](https://github.com/KentBeck/BPlusTree3)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Stated.** Keep structure and behaviour changes distinguishable; judge when tidying pays off.

Timing is contextual, not a mandate to refactor before every change.

[Cached source finding](sources.md#s04) · [Primary source](https://newsletter.kentbeck.com/p/distinctions-with-a-difference)

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated.** In his June 2025 augmented-coding account, Beck reports inspecting design and intervening when generation goes off course.

June self-report; complete current review policy is not established.

[Cached detail](sources.md#s01) · [Primary source](https://newsletter.kentbeck.com/p/augmented-coding-beyond-the-vibes)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Stated.** His April 2026 Intent session reports coordination burden and argues for desired outcomes rather than managing agents for its own sake.

April self-report about Intent; not evidence that all parallel work fails.

[Cached detail](sources.md#s06) · [Primary source](https://newsletter.kentbeck.com/p/genie-lessons-nobody-wants-agents)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Stated.** June 2025 test-plan instructions and inspected BPlusTree3 conventions provide explicit project guidance.

No complete personal durable-memory or handoff architecture established.

[Cached detail](research.md#4-tools-and-setup) · [Primary source](https://github.com/KentBeck/BPlusTree3/blob/main/agent.md)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Stated.** Dated Augment experiments and inspected BPlusTree3 Cargo/benchmark checks provide examples, not a complete current personal stack.

Tool use is dated and project-specific; no universal preferred model inferred.

[Cached detail](research.md#4-tools-and-setup) · [Primary source](https://github.com/KentBeck/BPlusTree3/blob/main/agent.md)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Stated.** Small focused commits and project checks are documented; production release policy remains unknown.

Do not generalise a library project into a full product pipeline.

[Cached source finding](sources.md#s02) · [Primary source](https://github.com/KentBeck/BPlusTree3)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Not established.** A complete personal permissions, sandbox, protected-test, approval, or budget policy is not established by the reviewed cache.

Unknown is not opposition or non-use. The June project account reports unwanted work and removed tests, but our proposed stop rule is an adaptation rather than evidence of Beck’s deployed enforcement policy.

[Cached detail](research.md#6-failure-modes-and-limits)

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Inferred.** Evaluate behaviour, changeability, and coordination cost; universal superiority is unproven.

Conceptual synthesis and self-reports, not a controlled comparative productivity result.

[Cached source finding](sources.md#s07) · [Primary source](https://newsletter.kentbeck.com/p/genie-tarpit)

