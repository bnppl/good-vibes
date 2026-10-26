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
  position: Small increments; recent public teaser proposes fixing loop time and flexing scope.
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
  position: The human continues to inspect design and intervene in augmented coding.
  evidence: Stated
  claim: C06
  detail: sources.md#s01
  source: https://newsletter.kentbeck.com/p/augmented-coding-beyond-the-vibes
  checked: '2026-10-26'
  qualification: June self-report; complete current review policy is not established.
- id: D07
  title: Agent autonomy and coordination
  position: Desired outcomes matter more than managing agent coordination.
  evidence: Stated
  claim: C07
  detail: sources.md#s06
  source: https://newsletter.kentbeck.com/p/genie-lessons-nobody-wants-agents
  checked: '2026-10-26'
  qualification: April self-report about Intent; not evidence that all parallel work fails.
- id: D08
  title: Context and durable state
  position: Published test-plan instructions and repository-local conventions provide explicit guidance.
  evidence: Stated
  claim: C08
  detail: research.md#4-tools-and-setup
  source: https://github.com/KentBeck/BPlusTree3/blob/main/agent.md
  checked: '2026-10-26'
  qualification: No complete personal durable-memory or handoff architecture established.
- id: D09
  title: Tooling and environment
  position: Reported Augment experiments; BPlusTree3 uses concrete Cargo and benchmark checks.
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
  position: Distinguish reversible changes and wider impact; stop unexplained expectation changes.
  evidence: Suggested adaptation
  claim: C11
  detail: sources.md#s04
  source: https://newsletter.kentbeck.com/p/distinctions-with-a-difference
  checked: '2026-10-26'
  qualification: The stop rule is this guide’s application; security permissions and sandbox are not established.
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

**Stated.** Small increments; recent public teaser proposes fixing loop time and flexing scope.

October paid body was not accessed; no universal time target inferred.

[Cached source finding](sources.md#s09) · [Primary source](https://newsletter.kentbeck.com/p/thinkie-fix-time-flex-scope)

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

**Stated.** The human continues to inspect design and intervene in augmented coding.

June self-report; complete current review policy is not established.

[Cached source finding](sources.md#s01) · [Primary source](https://newsletter.kentbeck.com/p/augmented-coding-beyond-the-vibes)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Stated.** Desired outcomes matter more than managing agent coordination.

April self-report about Intent; not evidence that all parallel work fails.

[Cached source finding](sources.md#s06) · [Primary source](https://newsletter.kentbeck.com/p/genie-lessons-nobody-wants-agents)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Stated.** Published test-plan instructions and repository-local conventions provide explicit guidance.

No complete personal durable-memory or handoff architecture established.

[Cached source finding](sources.md#s03) · [Primary source](https://github.com/KentBeck/BPlusTree3/blob/main/agent.md)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Stated.** Reported Augment experiments; BPlusTree3 uses concrete Cargo and benchmark checks.

Tool use is dated and project-specific; no universal preferred model inferred.

[Cached source finding](sources.md#s03) · [Primary source](https://github.com/KentBeck/BPlusTree3/blob/main/agent.md)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Stated.** Small focused commits and project checks are documented; production release policy remains unknown.

Do not generalise a library project into a full product pipeline.

[Cached source finding](sources.md#s02) · [Primary source](https://github.com/KentBeck/BPlusTree3)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Suggested adaptation.** Distinguish reversible changes and wider impact; stop unexplained expectation changes.

The stop rule is this guide’s application; security permissions and sandbox are not established.

[Cached source finding](sources.md#s04) · [Primary source](https://newsletter.kentbeck.com/p/distinctions-with-a-difference)

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Inferred.** Evaluate behaviour, changeability, and coordination cost; universal superiority is unproven.

Conceptual synthesis and self-reports, not a controlled comparative productivity result.

[Cached source finding](sources.md#s07) · [Primary source](https://newsletter.kentbeck.com/p/genie-tarpit)

