---
title: Armin Ronacher
parent: Engineers
has_children: true
nav_order: 8
engineer_profile: true
cache_schema: 1
person_id: armin-ronacher
canonical_name: Armin Ronacher
aliases: []
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
last_updated: '2026-10-26'
last_read: null
status: unread
tagline: Keep the tools simple. Keep your understanding.
summary: A pragmatic, changing agent workflow centred on understandable code, useful feedback, and carefully chosen
  automation. Dated experiments matter more than a fixed personal stack.
strengths:
- Tool feedback
- Context discipline
- Human comprehension
tools_summary: Dated public tool accounts; complete current private setup unknown.
slides_url: /engineers/armin-ronacher/learn/
dimensions:
- id: D01
  title: Goal and bottleneck
  position: For long-lived code he cares about, Ronacher prioritises understanding and maintainability rather than
    output volume.
  evidence: Stated
  claim: C01
  detail: research.md#approach-in-brief
  source: https://lucumr.pocoo.org/2026/6/23/the-coming-loop/
  checked: '2026-10-26'
  qualification: Long-lived code he cares about, not a claim that autonomous loops never work.
- id: D02
  title: Requirements and specification
  position: His December 2025 planning preference is conversational clarification and a visible, editable Markdown
    handoff.
  evidence: Stated
  claim: C02
  detail: research.md#requirements-and-planning
  source: https://lucumr.pocoo.org/2025/12/17/what-is-plan-mode/
  checked: '2026-10-26'
  qualification: December 2025 personal preference; not a requirement to reject executable specifications.
- id: D03
  title: Increment and planning
  position: The December 2025 account uses clarification and handoff; a universal increment size or mandatory cadence
    is not established.
  evidence: Stated
  claim: C03
  detail: research.md#requirements-and-planning
  source: https://lucumr.pocoo.org/2025/12/17/what-is-plan-mode/
  checked: '2026-10-26'
  qualification: Do not infer a strict test-first cycle or fixed task duration from this preference.
- id: D04
  title: Testing and verification
  position: His July 2025 retrospective reports test-generation dissatisfaction; a complete current test-first policy
    is not established.
  evidence: Stated
  claim: C04
  detail: research.md#verification-and-design
  source: https://lucumr.pocoo.org/2025/7/30/things-that-didnt-work/
  checked: '2026-10-26'
  qualification: July 2025 experience, not a verdict against testing or TDD.
- id: D05
  title: Design and refactoring
  position: Prefer explicit, understandable code and assess language tooling rather than familiarity alone.
  evidence: Stated
  claim: C05
  detail: research.md#verification-and-design
  source: https://lucumr.pocoo.org/2026/2/9/a-language-for-agents/
  checked: '2026-10-26'
  qualification: Recommendations and experience; no cross-language performance ranking established.
- id: D06
  title: Human understanding and review
  position: Humans and organisations retain responsibility for tool-produced actions.
  evidence: Stated
  claim: C06
  detail: research.md#human-role-and-coordination
  source: https://lucumr.pocoo.org/2026/5/26/clankers/
  checked: '2026-10-26'
  qualification: This is accountability, not proof of one immutable line-by-line review policy.
- id: D07
  title: Agent autonomy and coordination
  position: His June 2026 account distinguishes useful bounded investigations from unattended production of long-lived
    code.
  evidence: Stated
  claim: C07
  detail: research.md#human-role-and-coordination
  source: https://lucumr.pocoo.org/2026/6/23/the-coming-loop/
  checked: '2026-10-26'
  qualification: June 2026 self-report; September factory failure is additional task-specific evidence.
- id: D08
  title: Context and durable state
  position: His January 2026 Pi account reports local task records, session branches, and review context.
  evidence: Stated
  claim: C08
  detail: research.md#context-and-durable-state
  source: https://lucumr.pocoo.org/2026/1/31/pi/
  checked: '2026-10-26'
  qualification: January 2026 account; tool-session persistence is distinct from application reward persistence.
- id: D09
  title: Tooling and environment
  position: October 2026 Pi account includes Codemode/MCP composition.
  evidence: Stated
  claim: C09
  detail: research.md#tools-and-setup
  source: https://lucumr.pocoo.org/2026/10/6/codemode/
  checked: '2026-10-26'
  qualification: Dated authored account; complete current private setup unknown.
- id: D10
  title: Integration and release
  position: A complete current coding integration and release gate is not established.
  evidence: Not established
  claim: C10
  detail: research.md#integration-and-release
  source: ''
  checked: '2026-10-26'
  qualification: Production infrastructure examples do not establish branch strategy or required checks for all
    coding projects.
- id: D11
  title: Boundaries and safeguards
  position: His October 2026 Codemode account distinguishes harness trust from execution-environment isolation;
    it is not a complete personal permission policy.
  evidence: Stated
  claim: C11
  detail: research.md#boundaries-and-safeguards
  source: https://lucumr.pocoo.org/2026/10/6/codemode/
  checked: '2026-10-26'
  qualification: Architecture description, not a complete personal permission policy.
- id: D12
  title: Evaluation and tradeoffs
  position: Evaluate automation by observed acceptability and maintenance cost.
  evidence: Stated
  claim: C12
  detail: research.md#failure-modes-and-limits
  source: https://lucumr.pocoo.org/2025/7/30/things-that-didnt-work/
  checked: '2026-10-26'
  qualification: Informal personal heuristics; no universal productivity advantage established.
practice_focus: coding-workflows
---

# Armin Ronacher

[Open the slideshow]({{ '/engineers/armin-ronacher/learn/' | relative_url }}) · [Compare cached profiles]({{ '/engineers/compare/' | relative_url }})

## Research cache

[Detailed research](research.md) · [Common worked example and prompts](workflow.md) · [Source findings](sources.md) · [Slide notes](slides.md)

Checked and cut off on **26 October 2026**. Public material only. Twelve authored sources were inspected; no paid lessons, private sessions, or exact installed repository revisions were accessed. The reward workflow is our suggested adaptation, not a Ronacher demonstration.

## Comparison evidence

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated.** For long-lived code he cares about, Ronacher prioritises understanding and maintainability rather than output volume.

Long-lived code he cares about, not a claim that autonomous loops never work.

[Cached detail](research.md#approach-in-brief) · [Primary source](https://lucumr.pocoo.org/2026/6/23/the-coming-loop/)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Stated.** His December 2025 planning preference is conversational clarification and a visible, editable Markdown handoff.

December 2025 personal preference; not a requirement to reject executable specifications.

[Cached detail](research.md#requirements-and-planning) · [Primary source](https://lucumr.pocoo.org/2025/12/17/what-is-plan-mode/)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Stated.** The December 2025 account uses clarification and handoff; a universal increment size or mandatory cadence is not established.

Do not infer a strict test-first cycle or fixed task duration from this preference.

[Cached detail](research.md#requirements-and-planning) · [Primary source](https://lucumr.pocoo.org/2025/12/17/what-is-plan-mode/)

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Stated.** His July 2025 retrospective reports test-generation dissatisfaction; a complete current test-first policy is not established.

July 2025 experience, not a verdict against testing or TDD.

[Cached detail](research.md#verification-and-design) · [Primary source](https://lucumr.pocoo.org/2025/7/30/things-that-didnt-work/)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Stated.** Prefer explicit, understandable code and assess language tooling rather than familiarity alone.

Recommendations and experience; no cross-language performance ranking established.

[Cached detail](research.md#verification-and-design) · [Primary source](https://lucumr.pocoo.org/2026/2/9/a-language-for-agents/)

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated.** Humans and organisations retain responsibility for tool-produced actions.

This is accountability, not proof of one immutable line-by-line review policy.

[Cached detail](research.md#human-role-and-coordination) · [Primary source](https://lucumr.pocoo.org/2026/5/26/clankers/)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Stated.** His June 2026 account distinguishes useful bounded investigations from unattended production of long-lived code.

June 2026 self-report; September factory failure is additional task-specific evidence.

[Cached detail](research.md#human-role-and-coordination) · [Primary source](https://lucumr.pocoo.org/2026/6/23/the-coming-loop/)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Stated.** His January 2026 Pi account reports local task records, session branches, and review context.

January 2026 account; tool-session persistence is distinct from application reward persistence.

[Cached detail](research.md#context-and-durable-state) · [Primary source](https://lucumr.pocoo.org/2026/1/31/pi/)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Stated.** October 2026 Pi account includes Codemode/MCP composition.

Dated authored account; complete current private setup unknown.

[Cached detail](research.md#tools-and-setup) · [Primary source](https://lucumr.pocoo.org/2026/10/6/codemode/)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Not established.** A complete current coding integration and release gate is not established.

Production infrastructure examples do not establish branch strategy or required checks for all coding projects.

[Cached detail](research.md#integration-and-release)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Stated.** His October 2026 Codemode account distinguishes harness trust from execution-environment isolation; it is not a complete personal permission policy.

Architecture description, not a complete personal permission policy.

[Cached detail](research.md#boundaries-and-safeguards) · [Primary source](https://lucumr.pocoo.org/2026/10/6/codemode/)

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Stated.** Evaluate automation by observed acceptability and maintenance cost.

Informal personal heuristics; no universal productivity advantage established.

[Cached detail](research.md#failure-modes-and-limits) · [Primary source](https://lucumr.pocoo.org/2025/7/30/things-that-didnt-work/)
