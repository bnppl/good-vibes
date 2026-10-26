---
title: Birgitta Böckeler
parent: Engineers
has_children: true
nav_order: 3
engineer_profile: true
cache_schema: 1
person_id: birgitta-bockeler
canonical_name: Birgitta Böckeler
aliases:
- Birgitta Bockeler
- Birgitta Boeckeler
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
last_updated: '2026-10-26'
last_read: null
status: unread
tagline: Calibrate trust. Curate context. Check the outcome.
summary: A context-sensitive approach to agent-assisted delivery that pairs engineering feedback with explicit human
  judgment.
strengths:
- Context engineering
- Risk-based oversight
- Maintainability feedback
tools_summary: Dated reports cover several coding agents and static-analysis sensors; they do not establish a complete
  current personal stack.
slides_url: /engineers/birgitta-bockeler/learn/
dimensions:
- id: D01
  title: Goal and bottleneck
  position: Calibrate oversight to error probability, consequence, and detectability.
  evidence: Stated
  claim: C01
  detail: research.md#2-techniques-and-principles
  source: https://martinfowler.com/articles/exploring-gen-ai/to-vibe-or-not-vibe.html
  checked: '2026-10-26'
  qualification: Conditional judgment, not a calibrated quantitative formula.
- id: D02
  title: Requirements and specification
  position: Distinguish spec-first, spec-anchored, and spec-as-source; evaluate their maintenance implications.
  evidence: Stated
  claim: C02
  detail: research.md#2-techniques-and-principles
  source: https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html
  checked: '2026-10-26'
  qualification: Tools were tried in September 2025; maintenance effectiveness remained an open question.
- id: D03
  title: Increment and planning
  position: Her March 2025 brownfield accounts favour working slices and human judgment to constrain broad agent
    changes.
  evidence: Stated
  claim: C03
  detail: research.md#2-techniques-and-principles
  source: https://martinfowler.com/articles/exploring-gen-ai/13-role-of-developer-skills.html
  checked: '2026-10-26'
  qualification: Dated personal experiences; not a controlled comparison of agent products.
- id: D04
  title: Testing and verification
  position: Her August 2026 exploratory evaluation distinguishes human-owned tests and review checkpoints from TDD
    wholly inside the agent loop.
  evidence: Stated
  claim: C04
  detail: research.md#2-techniques-and-principles
  source: https://martinfowler.com/articles/exploring-gen-ai/tdd-in-the-agent-loop.html
  checked: '2026-10-26'
  qualification: Limited greenfield tasks; LLM-based quality judgment; imperfect adherence. Not evidence against
    all TDD.
- id: D05
  title: Design and refactoring
  position: Her May 2026 dashboard experiments explore structural feedback to preserve changeability, while recognising
    its limits.
  evidence: Stated
  claim: C05
  detail: research.md#2-techniques-and-principles
  source: https://martinfowler.com/articles/sensors-for-coding-agents.html
  checked: '2026-10-26'
  qualification: One application, specific configurations; no universal performance claim or copied setup.
- id: D06
  title: Human understanding and review
  position: Keep responsibility for generated code, especially test quality; use operational consequences to guide
    scrutiny.
  evidence: Stated
  claim: C06
  detail: research.md#1-approach-in-brief
  source: https://martinfowler.com/articles/exploring-gen-ai/i-still-care-about-the-code.html
  checked: '2026-10-26'
  qualification: Does not establish a requirement to manually inspect every generated line.
- id: D07
  title: Agent autonomy and coordination
  position: Her March 2025 supervised brownfield accounts involve frequent human steering; a complete private orchestration
    setup is not established.
  evidence: Stated
  claim: C07
  detail: research.md#3-a-feature-from-idea-to-release
  source: https://martinfowler.com/articles/exploring-gen-ai/13-role-of-developer-skills.html
  checked: '2026-10-26'
  qualification: Dated personal experiences; not a controlled comparison of agent products.
- id: D08
  title: Context and durable state
  position: Curate context and distinguish human, model, and software-controlled loading.
  evidence: Stated
  claim: C08
  detail: research.md#2-techniques-and-principles
  source: https://martinfowler.com/articles/exploring-gen-ai/context-engineering-coding-agents.html
  checked: '2026-10-26'
  qualification: Claude Code feature descriptions are a dated example, not current installation verification.
- id: D09
  title: Tooling and environment
  position: Documented sensor experiments include type checking, ESLint, Semgrep, dependency-cruiser, and mutation
    testing.
  evidence: Stated
  claim: C09
  detail: research.md#4-tools-and-setup
  source: https://martinfowler.com/articles/sensors-for-coding-agents.html
  checked: '2026-10-26'
  qualification: One application, specific configurations; no universal performance claim or copied setup.
- id: D10
  title: Integration and release
  position: Place feedback along the lifecycle according to cost, speed, and criticality.
  evidence: Stated
  claim: C10
  detail: research.md#3-a-feature-from-idea-to-release
  source: https://martinfowler.com/articles/harness-engineering.html
  checked: '2026-10-26'
  qualification: Conceptual lifecycle-feedback model, not a complete proven control system or an established personal
    integration cadence, deployment approval, or rollback setup.
- id: D11
  title: Boundaries and safeguards
  position: A complete permission, protected-test, approval, or budget policy is not established by the reviewed
    material.
  evidence: Not established
  claim: C11
  detail: research.md#6-failure-modes-and-limits
  source: ''
  checked: '2026-10-26'
  qualification: Unknown is not evidence of opposition or lack of safeguards. Project-specific controls remain a
    separate design task.
- id: D12
  title: Evaluation and tradeoffs
  position: Her August 2026 exploratory agent-loop TDD study found no clear benefit under its narrow conditions;
    this is not a general verdict on TDD.
  evidence: Stated
  claim: C12
  detail: research.md#2-techniques-and-principles
  source: https://martinfowler.com/articles/exploring-gen-ai/tdd-in-the-agent-loop.html
  checked: '2026-10-26'
  qualification: Limited greenfield tasks; LLM-based quality judgment; imperfect adherence. Not evidence against
    all TDD.
---

# Birgitta Böckeler

[Open the slideshow]({{ '/engineers/birgitta-bockeler/learn/' | relative_url }}) · [Detailed research](research.md) · [Source findings](sources.md) · [Slide notes](slides.md)

Research cutoff and verification: **26 October 2026**. Eight authored primary articles form the substantive cache. Examples, prompts, and the reward lab are explicitly labelled suggested adaptations. No universal effectiveness ranking or complete personal tool inventory is claimed.

[Compare engineer field cards]({{ '/engineers/compare/?people=birgitta-bockeler,dave-farley' | relative_url }})

## Comparison evidence

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated.** Calibrate oversight to error probability, consequence, and detectability.

[Cached finding](research.md#2-techniques-and-principles) · [Primary source](https://martinfowler.com/articles/exploring-gen-ai/to-vibe-or-not-vibe.html)

Conditional judgment, not a calibrated quantitative formula.

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Stated.** Distinguish spec-first, spec-anchored, and spec-as-source; evaluate their maintenance implications.

[Cached finding](research.md#2-techniques-and-principles) · [Primary source](https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html)

Tools were tried in September 2025; maintenance effectiveness remained an open question.

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Stated.** Her March 2025 brownfield accounts favour working slices and human judgment to constrain broad agent changes.

Dated personal experiences; not a controlled comparison of agent products.

[Cached detail](research.md#2-techniques-and-principles) · [Primary source](https://martinfowler.com/articles/exploring-gen-ai/13-role-of-developer-skills.html)

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Stated.** Her August 2026 exploratory evaluation distinguishes human-owned tests and review checkpoints from TDD wholly inside the agent loop.

Limited greenfield tasks; LLM-based quality judgment; imperfect adherence. Not evidence against all TDD.

[Cached detail](research.md#2-techniques-and-principles) · [Primary source](https://martinfowler.com/articles/exploring-gen-ai/tdd-in-the-agent-loop.html)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Stated.** Her May 2026 dashboard experiments explore structural feedback to preserve changeability, while recognising its limits.

One application, specific configurations; no universal performance claim or copied setup.

[Cached detail](research.md#2-techniques-and-principles) · [Primary source](https://martinfowler.com/articles/sensors-for-coding-agents.html)

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated.** Keep responsibility for generated code, especially test quality; use operational consequences to guide scrutiny.

[Cached finding](research.md#1-approach-in-brief) · [Primary source](https://martinfowler.com/articles/exploring-gen-ai/i-still-care-about-the-code.html)

Does not establish a requirement to manually inspect every generated line.

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Stated.** Her March 2025 supervised brownfield accounts involve frequent human steering; a complete private orchestration setup is not established.

Dated personal experiences; not a controlled comparison of agent products.

[Cached detail](research.md#3-a-feature-from-idea-to-release) · [Primary source](https://martinfowler.com/articles/exploring-gen-ai/13-role-of-developer-skills.html)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Stated.** Curate context and distinguish human, model, and software-controlled loading.

[Cached finding](research.md#2-techniques-and-principles) · [Primary source](https://martinfowler.com/articles/exploring-gen-ai/context-engineering-coding-agents.html)

Claude Code feature descriptions are a dated example, not current installation verification.

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Stated.** Documented sensor experiments include type checking, ESLint, Semgrep, dependency-cruiser, and mutation testing.

[Cached finding](research.md#4-tools-and-setup) · [Primary source](https://martinfowler.com/articles/sensors-for-coding-agents.html)

One application, specific configurations; no universal performance claim or copied setup.

<a id="c10"></a>

### C10 · D10 · Integration and release

**Stated.** Place feedback along the lifecycle according to cost, speed, and criticality.

Conceptual lifecycle-feedback model, not a complete proven control system or an established personal integration cadence, deployment approval, or rollback setup.

[Cached detail](research.md#3-a-feature-from-idea-to-release) · [Primary source](https://martinfowler.com/articles/harness-engineering.html)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Not established.** A complete permission, protected-test, approval, or budget policy is not established by the reviewed material.

[Cached finding](research.md#6-failure-modes-and-limits)

Unknown is not evidence of opposition or lack of safeguards. Project-specific controls remain a separate design task.

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Stated.** Her August 2026 exploratory agent-loop TDD study found no clear benefit under its narrow conditions; this is not a general verdict on TDD.

Limited greenfield tasks; LLM-based quality judgment; imperfect adherence. Not evidence against all TDD.

[Cached detail](research.md#2-techniques-and-principles) · [Primary source](https://martinfowler.com/articles/exploring-gen-ai/tdd-in-the-agent-loop.html)
