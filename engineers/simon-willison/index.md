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
summary: Use coding agents ambitiously while retaining responsibility for verification, understanding and collaborator-ready
  changes. Experimental prototypes and production work have different standards.
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
  detail: research.md#approach-in-brief
  source: https://simonwillison.net/guides/agentic-engineering-patterns/what-is-agentic-engineering/
  checked: '2026-10-26'
  qualification: Definition and practitioner priorities, not a controlled outcome result.
- id: D02
  title: Requirements and specification
  position: Specify goals and iterate on evidence; a recent production example uses conversational requirements
    and a live preview.
  evidence: Stated
  claim: C02
  detail: research.md#a-feature-from-idea-to-release
  source: https://simonwillison.net/2026/Oct/9/built-using-my-voice/
  checked: '2026-10-26'
  qualification: The voice-led blog feature is one project, not a universal specification format.
- id: D03
  title: Increment and planning
  position: Start with the existing tests; prefer reviewable changes and use Git to inspect and isolate work.
  evidence: Stated
  claim: C03
  detail: research.md#start-with-an-executable-baseline
  source: https://simonwillison.net/guides/agentic-engineering-patterns/first-run-the-tests/
  checked: '2026-10-26'
  qualification: No universal timebox or maximum patch size established; reviewability is contextual.
- id: D04
  title: Testing and verification
  position: Use red/green TDD and complement automated checks with exploratory execution of actual behaviour.
  evidence: Stated
  claim: C04
  detail: research.md#tests-plus-exercised-behaviour
  source: https://simonwillison.net/guides/agentic-engineering-patterns/agentic-manual-testing/
  checked: '2026-10-26'
  qualification: Relevant sources S02–S04; a green suite does not establish every requirement.
- id: D05
  title: Design and refactoring
  position: Use cheaper refactoring and experiments to improve quality and explore design alternatives.
  evidence: Stated
  claim: C05
  detail: research.md#cheap-refactoring-and-experiments
  source: https://simonwillison.net/guides/agentic-engineering-patterns/better-code/
  checked: '2026-10-26'
  qualification: Accept, refine or discard results; no complete architectural doctrine inferred.
- id: D06
  title: Human understanding and review
  position: Authors own initial review; walkthroughs and interactive explanations can repair understanding gaps.
  evidence: Stated
  claim: C06
  detail: research.md#review-is-the-authors-work
  source: https://simonwillison.net/guides/agentic-engineering-patterns/anti-patterns/
  checked: '2026-10-26'
  qualification: Sources S05, S09 and S10. Experimental projects are distinct from collaborator-facing guidance.
- id: D07
  title: Agent autonomy and coordination
  position: Use fresh subagent contexts and parallelise independent tasks when the coordination cost is justified.
  evidence: Stated
  claim: C07
  detail: research.md#use-subagents-to-manage-context
  source: https://simonwillison.net/guides/agentic-engineering-patterns/subagents/
  checked: '2026-10-26'
  qualification: The Battle Drones account also shows a more open-ended experimental multi-agent run; not a universal
    prescription.
- id: D08
  title: Context and durable state
  position: Retain working examples and update guidance from experience; use history and fresh contexts for orientation.
  evidence: Stated
  claim: C08
  detail: research.md#keep-reusable-proof-not-just-remembered-claims
  source: https://simonwillison.net/guides/agentic-engineering-patterns/hoard-things-you-know-how-to-do/
  checked: '2026-10-26'
  qualification: Sources S06–S08 and S12; complete private memory infrastructure is not established.
- id: D09
  title: Tooling and environment
  position: Documented tools include Claude Code, Codex, Git, Rodney and Showboat; tool roles vary by project.
  evidence: Stated
  claim: C09
  detail: research.md#tools-and-setup
  source: https://github.com/simonw/showboat
  checked: '2026-10-26'
  qualification: Sources S04, S06, S09, S13, S14 and S16; inventory is not an exhaustive current stack.
- id: D10
  title: Integration and release
  position: Use Git and reviewable changes; the October production example deploys after PR review and corrections.
  evidence: Stated
  claim: C10
  detail: research.md#a-feature-from-idea-to-release
  source: https://simonwillison.net/2026/Oct/9/built-using-my-voice/
  checked: '2026-10-26'
  qualification: One release account does not establish a universal CI or rollback system.
- id: D11
  title: Boundaries and safeguards
  position: Avoid combining private data, untrusted input and outbound communication without effective separation.
  evidence: Stated
  claim: C11
  detail: research.md#separate-capabilities-that-create-exfiltration-risk
  source: https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/
  checked: '2026-10-26'
  qualification: The lethal trifecta concerns exfiltration and is not an exhaustive security model.
- id: D12
  title: Evaluation and tradeoffs
  position: Evaluate evidence in project context; no universal comparative speed or safety advantage is established
    here.
  evidence: Inferred
  claim: C12
  detail: research.md#failure-modes-and-limits
  source: https://simonwillison.net/2026/Oct/20/battledrones/
  checked: '2026-10-26'
  qualification: Our evidence assessment, not an effectiveness claim by Willison; experiments and production have
    different stakes.
---

# Simon Willison

Execute it. Show the evidence. Own the result.

[Open the slideshow]({{ '/engineers/simon-willison/learn/' | relative_url }}) · [Compare cached profiles]({{ '/engineers/compare/' | relative_url }})

## Research cache

[Detailed research](research.md) · [Worked reward workflow](workflow.md) · [Source findings](sources.md) · [Slide notes](slides.md)

Research checked and cut off on **26 October 2026**. Living guide chapters have inspection dates rather than invented publication dates. The worked workflow and prompts are suggested adaptations. No tools were installed and no private source material was accessed.

## Comparison evidence

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated.** Use executing agents to build useful, better software; humans still choose problems and verify results.

Definition and practitioner priorities, not a controlled outcome result.

[Cached detail](research.md#approach-in-brief) · [Primary source](https://simonwillison.net/guides/agentic-engineering-patterns/what-is-agentic-engineering/)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Stated.** Specify goals and iterate on evidence; a recent production example uses conversational requirements and a live preview.

The voice-led blog feature is one project, not a universal specification format.

[Cached detail](research.md#a-feature-from-idea-to-release) · [Primary source](https://simonwillison.net/2026/Oct/9/built-using-my-voice/)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Stated.** Start with the existing tests; prefer reviewable changes and use Git to inspect and isolate work.

No universal timebox or maximum patch size established; reviewability is contextual.

[Cached detail](research.md#start-with-an-executable-baseline) · [Primary source](https://simonwillison.net/guides/agentic-engineering-patterns/first-run-the-tests/)

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Stated.** Use red/green TDD and complement automated checks with exploratory execution of actual behaviour.

Relevant sources S02–S04; a green suite does not establish every requirement.

[Cached detail](research.md#tests-plus-exercised-behaviour) · [Primary source](https://simonwillison.net/guides/agentic-engineering-patterns/agentic-manual-testing/)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Stated.** Use cheaper refactoring and experiments to improve quality and explore design alternatives.

Accept, refine or discard results; no complete architectural doctrine inferred.

[Cached detail](research.md#cheap-refactoring-and-experiments) · [Primary source](https://simonwillison.net/guides/agentic-engineering-patterns/better-code/)

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated.** Authors own initial review; walkthroughs and interactive explanations can repair understanding gaps.

Sources S05, S09 and S10. Experimental projects are distinct from collaborator-facing guidance.

[Cached detail](research.md#review-is-the-authors-work) · [Primary source](https://simonwillison.net/guides/agentic-engineering-patterns/anti-patterns/)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Stated.** Use fresh subagent contexts and parallelise independent tasks when the coordination cost is justified.

The Battle Drones account also shows a more open-ended experimental multi-agent run; not a universal prescription.

[Cached detail](research.md#use-subagents-to-manage-context) · [Primary source](https://simonwillison.net/guides/agentic-engineering-patterns/subagents/)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Stated.** Retain working examples and update guidance from experience; use history and fresh contexts for orientation.

Sources S06–S08 and S12; complete private memory infrastructure is not established.

[Cached detail](research.md#keep-reusable-proof-not-just-remembered-claims) · [Primary source](https://simonwillison.net/guides/agentic-engineering-patterns/hoard-things-you-know-how-to-do/)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Stated.** Documented tools include Claude Code, Codex, Git, Rodney and Showboat; tool roles vary by project.

Sources S04, S06, S09, S13, S14 and S16; inventory is not an exhaustive current stack.

[Cached detail](research.md#tools-and-setup) · [Primary source](https://github.com/simonw/showboat)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Stated.** Use Git and reviewable changes; the October production example deploys after PR review and corrections.

One release account does not establish a universal CI or rollback system.

[Cached detail](research.md#a-feature-from-idea-to-release) · [Primary source](https://simonwillison.net/2026/Oct/9/built-using-my-voice/)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Stated.** Avoid combining private data, untrusted input and outbound communication without effective separation.

The lethal trifecta concerns exfiltration and is not an exhaustive security model.

[Cached detail](research.md#separate-capabilities-that-create-exfiltration-risk) · [Primary source](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/)

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Inferred.** Evaluate evidence in project context; no universal comparative speed or safety advantage is established here.

Our evidence assessment, not an effectiveness claim by Willison; experiments and production have different stakes.

[Cached detail](research.md#failure-modes-and-limits) · [Primary source](https://simonwillison.net/2026/Oct/20/battledrones/)

