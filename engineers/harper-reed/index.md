---
title: Harper Reed
parent: Engineers
has_children: true
nav_order: 12
engineer_profile: true
cache_schema: 1
person_id: harper-reed
canonical_name: Harper Reed
aliases: []
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
last_updated: '2026-10-26'
last_read: null
status: unread
tagline: Clarify the work. Keep the loop inspectable.
summary: Dated workflow accounts connect explicit intent, incremental execution and feedback. Later experiments
  and current public rules qualify the early planning recipe.
strengths:
- Explicit handoffs
- Practical feedback
- Dated experimentation
tools_summary: May 2025 Aider-to-Claude Code report; January 2026 remote terminal setup; September 2026 experimental
  harness is a separate context.
slides_url: /engineers/harper-reed/learn/
dimensions:
- id: D01
  title: Goal and bottleneck
  position: Build through explicit stages, then learn by inspecting each result.
  evidence: Inferred
  claim: C01
  detail: research.md#approach-in-brief
  source: https://harper.blog/2025/04/17/an-llm-codegen-heros-journey/
  checked: '2026-10-26'
  qualification: Our synthesis of dated practitioner accounts, not a validated productivity model.
- id: D02
  title: Requirements and specification
  position: February 2025 greenfield work separates idea clarification from a prompt plan.
  evidence: Stated
  claim: C02
  detail: research.md#requirements-and-context
  source: https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/
  checked: '2026-10-26'
  qualification: Historical personal workflow; not a universal requirement for extensive upfront specification.
- id: D03
  title: Increment and planning
  position: October 2026 published rules size planning effort to the change.
  evidence: Demonstrated
  claim: C03
  detail: research.md#planning-and-increments
  source: https://github.com/harperreed/dotfiles/blob/9b7fbb29d9e9835f29aae32544c1397a2ddde5ac/.claude/CLAUDE.md
  checked: '2026-10-26'
  qualification: Inspected instruction artifact, not proof of runtime compliance or a universal size threshold.
- id: D04
  title: Testing and verification
  position: May 2025 guidance advocates TDD, linting, and checks before committing.
  evidence: Stated
  claim: C04
  detail: research.md#testing-and-feedback
  source: https://harper.blog/2025/05/08/basic-claude-code/
  checked: '2026-10-26'
  qualification: Agent-written checks still need scrutiny; reported effectiveness is anecdotal.
- id: D05
  title: Design and refactoring
  position: Published instructions prefer small changes and readable, maintainable code.
  evidence: Demonstrated
  claim: C05
  detail: research.md#design-and-refactoring
  source: https://github.com/harperreed/dotfiles/blob/9b7fbb29d9e9835f29aae32544c1397a2ddde5ac/.claude/CLAUDE.md
  checked: '2026-10-26'
  qualification: Inspected October artifact; not an independently observed design-quality outcome.
- id: D06
  title: Human understanding and review
  position: Published instructions require actual verification before claiming completion.
  evidence: Demonstrated
  claim: C06
  detail: research.md#human-review
  source: https://github.com/harperreed/dotfiles/blob/9b7fbb29d9e9835f29aae32544c1397a2ddde5ac/.claude/CLAUDE.md
  checked: '2026-10-26'
  qualification: Rules describe intended behaviour; full personal review execution remains unobserved.
- id: D07
  title: Agent autonomy and coordination
  position: January 2026 personal account uses multiple remote terminal sessions.
  evidence: Stated
  claim: C07
  detail: research.md#autonomy-and-coordination
  source: https://harper.blog/2026/01/05/claude-code-is-better-on-your-phone/
  checked: '2026-10-26'
  qualification: Session multiplexing does not establish a complete orchestrator or safe parallel writes.
- id: D08
  title: Context and durable state
  position: February 2025 plans and checklists preserve work across sessions.
  evidence: Stated
  claim: C08
  detail: research.md#requirements-and-context
  source: https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/
  checked: '2026-10-26'
  qualification: Task records are distinct from durable application data and a complete current memory system.
- id: D09
  title: Tooling and environment
  position: January 2026 self-report names Claude Code, Tailscale, Blink and tmux.
  evidence: Stated
  claim: C09
  detail: research.md#tools-and-setup
  source: https://harper.blog/2026/01/05/claude-code-is-better-on-your-phone/
  checked: '2026-10-26'
  qualification: Dated personal setup; no present installation or private configuration verified.
- id: D10
  title: Integration and release
  position: April 2025 advice uses frequent commits as recovery checkpoints.
  evidence: Stated
  claim: C10
  detail: research.md#integration-and-release
  source: https://harper.blog/2025/04/10/waterfall-in-15-minutes-or-your-money-back/
  checked: '2026-10-26'
  qualification: Not a complete production deployment or rollback policy.
- id: D11
  title: Boundaries and safeguards
  position: September 2026 experiment reports credential exposure through its environment.
  evidence: Stated
  claim: C11
  detail: research.md#boundaries-and-safeguards
  source: https://harper.blog/2026/09/22/break-away/
  checked: '2026-10-26'
  qualification: A lab incident, not a recommended production policy or reproduced security audit.
- id: D12
  title: Evaluation and tradeoffs
  position: Assess learning and usable outcomes rather than treating enthusiasm as a benchmark.
  evidence: Inferred
  claim: C12
  detail: research.md#evaluation-and-tradeoffs
  source: https://harper.blog/2025/04/17/an-llm-codegen-heros-journey/
  checked: '2026-10-26'
  qualification: Our synthesis; reported learning and speed do not establish comparative superiority.
practice_focus: coding-workflows
---

# Harper Reed

[Open slideshow]({{ '/engineers/harper-reed/learn/' | relative_url }}) · [Compare profiles]({{ '/engineers/compare/' | relative_url }})

## Research cache

[Detailed guide](research.md) · [Common reward workflow](workflow.md) · [Source findings](sources.md) · [Slide notes](slides.md)

Checked and cut off on **26 October 2026**. Public authored accounts and published artifacts were inspected, not executed. The latest pinned instruction file is not evidence that every real session follows it. Proposed reward examples and prompts are our adaptations.

## Comparison evidence

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Inferred.** Build through explicit stages, then learn by inspecting each result.

Our synthesis of dated practitioner accounts, not a validated productivity model.

[Cached detail](research.md#approach-in-brief) · [Primary source](https://harper.blog/2025/04/17/an-llm-codegen-heros-journey/)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Stated.** February 2025 greenfield work separates idea clarification from a prompt plan.

Historical personal workflow; not a universal requirement for extensive upfront specification.

[Cached detail](research.md#requirements-and-context) · [Primary source](https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Demonstrated.** October 2026 published rules size planning effort to the change.

Inspected instruction artifact, not proof of runtime compliance or a universal size threshold.

[Cached detail](research.md#planning-and-increments) · [Primary source](https://github.com/harperreed/dotfiles/blob/9b7fbb29d9e9835f29aae32544c1397a2ddde5ac/.claude/CLAUDE.md)

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Stated.** May 2025 guidance advocates TDD, linting, and checks before committing.

Agent-written checks still need scrutiny; reported effectiveness is anecdotal.

[Cached detail](research.md#testing-and-feedback) · [Primary source](https://harper.blog/2025/05/08/basic-claude-code/)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Demonstrated.** Published instructions prefer small changes and readable, maintainable code.

Inspected October artifact; not an independently observed design-quality outcome.

[Cached detail](research.md#design-and-refactoring) · [Primary source](https://github.com/harperreed/dotfiles/blob/9b7fbb29d9e9835f29aae32544c1397a2ddde5ac/.claude/CLAUDE.md)

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Demonstrated.** Published instructions require actual verification before claiming completion.

Rules describe intended behaviour; full personal review execution remains unobserved.

[Cached detail](research.md#human-review) · [Primary source](https://github.com/harperreed/dotfiles/blob/9b7fbb29d9e9835f29aae32544c1397a2ddde5ac/.claude/CLAUDE.md)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Stated.** January 2026 personal account uses multiple remote terminal sessions.

Session multiplexing does not establish a complete orchestrator or safe parallel writes.

[Cached detail](research.md#autonomy-and-coordination) · [Primary source](https://harper.blog/2026/01/05/claude-code-is-better-on-your-phone/)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Stated.** February 2025 plans and checklists preserve work across sessions.

Task records are distinct from durable application data and a complete current memory system.

[Cached detail](research.md#requirements-and-context) · [Primary source](https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Stated.** January 2026 self-report names Claude Code, Tailscale, Blink and tmux.

Dated personal setup; no present installation or private configuration verified.

[Cached detail](research.md#tools-and-setup) · [Primary source](https://harper.blog/2026/01/05/claude-code-is-better-on-your-phone/)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Stated.** April 2025 advice uses frequent commits as recovery checkpoints.

Not a complete production deployment or rollback policy.

[Cached detail](research.md#integration-and-release) · [Primary source](https://harper.blog/2025/04/10/waterfall-in-15-minutes-or-your-money-back/)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Stated.** September 2026 experiment reports credential exposure through its environment.

A lab incident, not a recommended production policy or reproduced security audit.

[Cached detail](research.md#boundaries-and-safeguards) · [Primary source](https://harper.blog/2026/09/22/break-away/)

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Inferred.** Assess learning and usable outcomes rather than treating enthusiasm as a benchmark.

Our synthesis; reported learning and speed do not establish comparative superiority.

[Cached detail](research.md#evaluation-and-tradeoffs) · [Primary source](https://harper.blog/2025/04/17/an-llm-codegen-heros-journey/)

