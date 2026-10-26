---
title: Gene Kim
parent: Engineers
has_children: true
nav_order: 10
engineer_profile: true
cache_schema: 1
person_id: gene-kim
canonical_name: Gene Kim
aliases:
- RealGeneKim
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
last_updated: '2026-10-26'
last_read: null
status: unread
tagline: Delegate the work. Design the feedback. Own the outcome.
summary: A feedback-centred approach to conversational development, calibrated delegation and organisational learning.
  Personal project accounts are kept separate from joint Kim/Yegge prescriptions.
strengths:
- Fast feedback
- Calibrated delegation
- Organisational wiring
tools_summary: Historical Claude Code/Clojure project accounts; current full personal stack remains unknown.
slides_url: /engineers/gene-kim/learn/
dimensions:
- id: D01
  title: Goal and bottleneck
  position: Joint Kim/Yegge 2025 guidance emphasises useful outcomes, frequent feedback and modularity as code generation
    becomes cheaper.
  evidence: Stated
  claim: C01
  detail: research.md#2-techniques-and-principles
  source: https://itrevolution.com/articles/essential-skills-of-a-vibe-coder/
  checked: '2026-10-26'
  qualification: Joint Kim/Yegge prescription, not a demonstrated universal productivity effect.
- id: D02
  title: Requirements and specification
  position: Joint Kim/Yegge October 2025 guidance uses concrete requirements, examples and context for conversational
    refinement.
  evidence: Stated
  claim: C02
  detail: research.md#state-outcomes-and-let-conversation-refine-them
  source: https://itrevolution.com/articles/the-key-vibe-coding-practices/
  checked: '2026-10-26'
  qualification: Joint excerpt; no universal private template established.
- id: D03
  title: Increment and planning
  position: Joint Kim/Yegge September 2025 guidance decomposes objectives into manageable steps, then reviews and
    iterates.
  evidence: Stated
  claim: C03
  detail: research.md#keep-the-loop-small-and-verify-before-accepting
  source: https://itrevolution.com/articles/the-vibe-coding-loop/
  checked: '2026-10-26'
  qualification: Joint recommendation; no fixed increment size or mandatory agent count.
- id: D04
  title: Testing and verification
  position: Joint Kim/Yegge September 2025 guidance recommends tests and expectations before generation, followed
    by verification.
  evidence: Stated
  claim: C04
  detail: research.md#keep-the-loop-small-and-verify-before-accepting
  source: https://itrevolution.com/articles/the-vibe-coding-loop/
  checked: '2026-10-26'
  qualification: This does not establish strict unit-level TDD for every personal change.
- id: D05
  title: Design and refactoring
  position: His March 2025 Trello account proposes better testability and interfaces; completion of every proposed
    refactor is not established.
  evidence: Stated
  claim: C05
  detail: research.md#use-architecture-to-make-categories-of-mistakes-testable
  source: https://itrevolution.com/articles/rearchitecting-my-trello-management-tool-with-claude-code-using-vibe-coding-architecting-part-2/
  checked: '2026-10-26'
  qualification: Personal 2025 account includes proposed changes; completion of every refactor is unverified.
- id: D06
  title: Human understanding and review
  position: In his January 2026 interview, Kim retains human accountability even when implementation is delegated.
  evidence: Stated
  claim: C06
  detail: research.md#3-a-feature-from-idea-to-release
  source: https://techleadjournal.dev/episodes/244/
  checked: '2026-10-26'
  qualification: Interview self-report and advice; not a universal line-by-line review rule.
- id: D07
  title: Agent autonomy and coordination
  position: His March 2025 solo guidance calibrates pairing and delegation by novelty, capability and consequences.
  evidence: Stated
  claim: C07
  detail: research.md#calibrate-pairing-and-delegation
  source: https://itrevolution.com/articles/vibe-coding-pairing-vs-delegation/
  checked: '2026-10-26'
  qualification: Solo 2025 guidance. Joint later orchestration patterns are not a complete current personal topology.
- id: D08
  title: Context and durable state
  position: His June 2025 manuscript-tool report includes plan files; a complete current memory/handoff protocol
    is not established.
  evidence: Stated
  claim: C08
  detail: research.md#evaluate-more-than-generated-volume
  source: https://itrevolution.com/articles/the-last-80-hours-of-editing-the-vibe-coding-book/
  checked: '2026-10-26'
  qualification: Historical published output; do not infer that a particular durable-state file is always used.
- id: D09
  title: Tooling and environment
  position: His 2025 project reports name Claude Code and Clojure; those dated choices do not establish a complete
    current private stack.
  evidence: Stated
  claim: C09
  detail: research.md#4-tools-and-setup
  source: https://itrevolution.com/articles/the-last-80-hours-of-editing-the-vibe-coding-book/
  checked: '2026-10-26'
  qualification: Historical personal use; complete current stack and configuration unknown.
- id: D10
  title: Integration and release
  position: A complete current personal integration, release and rollback policy is not established.
  evidence: Not established
  claim: C10
  detail: research.md#6-failure-modes-and-limits
  source: ''
  checked: '2026-10-26'
  qualification: General verification guidance does not supply his actual present release gates.
- id: D11
  title: Boundaries and safeguards
  position: His January 2026 interview warns about unchecked generated work and retains human responsibility; enforced
    protections remain unestablished.
  evidence: Stated
  claim: C11
  detail: research.md#6-failure-modes-and-limits
  source: https://techleadjournal.dev/episodes/244/
  checked: '2026-10-26'
  qualification: Specific current access controls or enforced test protections were not established.
- id: D12
  title: Evaluation and tradeoffs
  position: The June 2025 report records agent/local test disagreement; assess accepted outcomes and verification
    effort rather than transfer personal speed claims.
  evidence: Inferred
  claim: C12
  detail: research.md#evaluate-more-than-generated-volume
  source: https://itrevolution.com/articles/the-last-80-hours-of-editing-the-vibe-coding-book/
  checked: '2026-10-26'
  qualification: 'Our inference from a retrospective project report: test-result mismatch is reported, while the
    common-task evaluation protocol is our adaptation. No controlled comparative advantage is established.'
---

# Gene Kim

Delegate the work. Design the feedback. Own the outcome.

[Open the slideshow]({{ '/engineers/gene-kim/learn/' | relative_url }}) · [Compare cached profiles]({{ '/engineers/compare/' | relative_url }})

## Research map

[Detailed research](research.md) · [Common reward workflow](workflow.md) · [Source findings and limits](sources.md) · [Slide notes](slides.md)

Research checked and cut off on **26 October 2026**. The cache combines dated personal reports with clearly attributed joint recommendations. It does not establish an October 2026 private configuration.

## Comparison evidence

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated.** Joint Kim/Yegge 2025 guidance emphasises useful outcomes, frequent feedback and modularity as code generation becomes cheaper.

Joint Kim/Yegge prescription, not a demonstrated universal productivity effect.

[Cached detail](research.md#2-techniques-and-principles) · [Primary source](https://itrevolution.com/articles/essential-skills-of-a-vibe-coder/)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Stated.** Joint Kim/Yegge October 2025 guidance uses concrete requirements, examples and context for conversational refinement.

Joint excerpt; no universal private template established.

[Cached detail](research.md#state-outcomes-and-let-conversation-refine-them) · [Primary source](https://itrevolution.com/articles/the-key-vibe-coding-practices/)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Stated.** Joint Kim/Yegge September 2025 guidance decomposes objectives into manageable steps, then reviews and iterates.

Joint recommendation; no fixed increment size or mandatory agent count.

[Cached detail](research.md#keep-the-loop-small-and-verify-before-accepting) · [Primary source](https://itrevolution.com/articles/the-vibe-coding-loop/)

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Stated.** Joint Kim/Yegge September 2025 guidance recommends tests and expectations before generation, followed by verification.

This does not establish strict unit-level TDD for every personal change.

[Cached detail](research.md#keep-the-loop-small-and-verify-before-accepting) · [Primary source](https://itrevolution.com/articles/the-vibe-coding-loop/)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Stated.** His March 2025 Trello account proposes better testability and interfaces; completion of every proposed refactor is not established.

Personal 2025 account includes proposed changes; completion of every refactor is unverified.

[Cached detail](research.md#use-architecture-to-make-categories-of-mistakes-testable) · [Primary source](https://itrevolution.com/articles/rearchitecting-my-trello-management-tool-with-claude-code-using-vibe-coding-architecting-part-2/)

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated.** In his January 2026 interview, Kim retains human accountability even when implementation is delegated.

Interview self-report and advice; not a universal line-by-line review rule.

[Cached detail](research.md#3-a-feature-from-idea-to-release) · [Primary source](https://techleadjournal.dev/episodes/244/)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Stated.** His March 2025 solo guidance calibrates pairing and delegation by novelty, capability and consequences.

Solo 2025 guidance. Joint later orchestration patterns are not a complete current personal topology.

[Cached detail](research.md#calibrate-pairing-and-delegation) · [Primary source](https://itrevolution.com/articles/vibe-coding-pairing-vs-delegation/)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Stated.** His June 2025 manuscript-tool report includes plan files; a complete current memory/handoff protocol is not established.

Historical published output; do not infer that a particular durable-state file is always used.

[Cached detail](research.md#evaluate-more-than-generated-volume) · [Primary source](https://itrevolution.com/articles/the-last-80-hours-of-editing-the-vibe-coding-book/)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Stated.** His 2025 project reports name Claude Code and Clojure; those dated choices do not establish a complete current private stack.

Historical personal use; complete current stack and configuration unknown.

[Cached detail](research.md#4-tools-and-setup) · [Primary source](https://itrevolution.com/articles/the-last-80-hours-of-editing-the-vibe-coding-book/)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Not established.** A complete current personal integration, release and rollback policy is not established.

General verification guidance does not supply his actual present release gates.

[Cached detail](research.md#6-failure-modes-and-limits)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Stated.** His January 2026 interview warns about unchecked generated work and retains human responsibility; enforced protections remain unestablished.

Specific current access controls or enforced test protections were not established.

[Cached detail](research.md#6-failure-modes-and-limits) · [Primary source](https://techleadjournal.dev/episodes/244/)

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Inferred.** The June 2025 report records agent/local test disagreement; assess accepted outcomes and verification effort rather than transfer personal speed claims.

Our inference from a retrospective project report: test-result mismatch is reported, while the common-task evaluation protocol is our adaptation. No controlled comparative advantage is established.

[Cached detail](research.md#evaluate-more-than-generated-volume) · [Primary source](https://itrevolution.com/articles/the-last-80-hours-of-editing-the-vibe-coding-book/)
