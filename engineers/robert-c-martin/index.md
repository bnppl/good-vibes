---
title: Robert C. Martin
parent: Engineers
has_children: true
nav_order: 15
engineer_profile: true
cache_schema: 1
person_id: robert-c-martin
canonical_name: Robert C. Martin
aliases:
- Uncle Bob
- Robert Martin
- Bob Martin
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
last_updated: '2026-10-26'
last_read: null
status: unread
tagline: Engineer the checks. Keep responsibility. Revisit the machinery.
summary: Historical design principles, published agent artifacts, and a changing personal workflow provide distinct
  evidence. Discipline matters without turning a dated harness or review choice into a universal rule.
strengths:
- Test sensitivity
- Behaviour and structure
- Explicit responsibilities
tools_summary: Published artifacts and personal reports are separate evidence; a complete current private stack
  is not established.
slides_url: /engineers/robert-c-martin/learn/
dimensions:
- id: D01
  title: Goal and bottleneck
  position: The joint Robert/Justin Martin teaching outline proposes engineering discipline for agent work.
  evidence: Stated
  claim: C01
  detail: research.md#approach-in-brief
  source: https://cleancoders.com/episode/agentic-discipline-1
  checked: '2026-10-26'
  qualification: Public coauthored teaching description, not a measured universal bottleneck.
- id: D02
  title: Requirements and specification
  position: The joint Robert/Justin Martin public outline proposes a higher-level source humans can review.
  evidence: Stated
  claim: C02
  detail: research.md#start-with-a-source-humans-can-review
  source: https://cleancoders.com/episode/agentic-discipline-2
  checked: '2026-10-26'
  qualification: Public Robert/Justin Martin outline; paid demonstration not viewed. The reward contract is our
    adaptation.
- id: D03
  title: Increment and planning
  position: 2014 guidance separates test-first, refactoring and architectural feedback cycles.
  evidence: Stated
  claim: C03
  detail: research.md#keep-test-first-design-separate-from-larger-feedback
  source: https://blog.cleancoder.com/uncle-bob/2014/12/17/TheCyclesOfTDD.html
  checked: '2026-10-26'
  qualification: Historical general practice, not a complete current internal agent cadence.
- id: D04
  title: Testing and verification
  position: His June 2016 article advocates mutation testing to challenge assertions; coverage alone records execution.
  evidence: Stated
  claim: C04
  detail: research.md#challenge-assertions-rather-than-worship-coverage
  source: https://blog.cleancoder.com/uncle-bob/2016/06/10/MutationTesting.html
  checked: '2026-10-26'
  qualification: Historical authored explanation. Missing requirements and equivalent mutants still limit confidence.
- id: D05
  title: Design and refactoring
  position: His 2012 architecture advice separates business policy from mechanisms through controlled dependencies.
  evidence: Stated
  claim: C05
  detail: research.md#separate-policy-from-technical-mechanism
  source: https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html
  checked: '2026-10-26'
  qualification: 2012 architecture advice, not a mandatory four-tier product or language.
- id: D06
  title: Human understanding and review
  position: His 24 September 2026 interview-page account reports mostly above-code supervision, with occasional
    inspection.
  evidence: Stated
  claim: C06
  detail: research.md#published-framework-is-not-a-current-personal-topology
  source: https://www.aviator.co/podcast/uncle-bob-martin-ai-clean-code
  checked: '2026-10-26'
  qualification: Inspected first-person episode text, not a verified complete recording; not a universal no-source-reading
    policy or safety result.
- id: D07
  title: Agent autonomy and coordination
  position: His 24 September 2026 interview-page account reports moving away from his custom harness.
  evidence: Stated
  claim: C07
  detail: research.md#published-framework-is-not-a-current-personal-topology
  source: https://www.aviator.co/podcast/uncle-bob-martin-ai-clean-code
  checked: '2026-10-26'
  qualification: Earlier public multi-agent teaching and the published framework remain separate evidence; private
    current topology unknown.
- id: D08
  title: Context and durable state
  position: Pinned SwarmForge handoff documentation prescribes committed, structured work items.
  evidence: Demonstrated
  claim: C08
  detail: research.md#tools-and-setup
  source: https://github.com/unclebob/swarm-forge/blob/f4f5fbcae0de6f7dcc26e82400334227647cfdb2/swarmforge/constitution/articles/handoffs.prompt
  checked: '2026-10-26'
  qualification: Published artifact at pinned revision; not executed. Durable task records do not establish application
    persistence.
- id: D09
  title: Tooling and environment
  position: Pinned public SwarmForge documentation describes branch-specific products, not a verified current private
    stack.
  evidence: Demonstrated
  claim: C09
  detail: tools.md#different-evidence-different-scope
  source: https://github.com/unclebob/swarm-forge/blob/f4f5fbcae0de6f7dcc26e82400334227647cfdb2/README.md
  checked: '2026-10-26'
  qualification: Pinned artifact inspected. September terminal-use report is separately dated; installation and
    backends not tested.
- id: D10
  title: Integration and release
  position: Pinned SwarmForge documentation prescribes assigned checkouts and committed handoffs; full current integration/release
    policy is unknown.
  evidence: Demonstrated
  claim: C10
  detail: tools.md#quality-tools-and-guardrails
  source: https://github.com/unclebob/swarm-forge/blob/f4f5fbcae0de6f7dcc26e82400334227647cfdb2/swarmforge/constitution/articles/workflow.prompt
  checked: '2026-10-26'
  qualification: Inspected workflow and handoff instructions (S11/S12), not an observed integration, deployment
    or rollback arrangement.
- id: D11
  title: Boundaries and safeguards
  position: Pinned SwarmForge engineering instructions forbid fabricated metric substitutes and hand-edited mutation
    manifests.
  evidence: Demonstrated
  claim: C11
  detail: tools.md#quality-tools-and-guardrails
  source: https://github.com/unclebob/swarm-forge/blob/f4f5fbcae0de6f7dcc26e82400334227647cfdb2/swarmforge/constitution/articles/engineering.prompt
  checked: '2026-10-26'
  qualification: Inspected prompt instructions do not establish filesystem permissions, enforcement completeness
    or security efficacy.
- id: D12
  title: Evaluation and tradeoffs
  position: His 24 September 2026 interview-page account describes adjusting constraints after observing agent confusion.
  evidence: Stated
  claim: C12
  detail: research.md#published-framework-is-not-a-current-personal-topology
  source: https://www.aviator.co/podcast/uncle-bob-martin-ai-clean-code
  checked: '2026-10-26'
  qualification: Contextual personal judgment; no universal thresholds or controlled superiority established.
practice_focus: coding-workflows
---

# Robert C. Martin

[Open the slideshow]({{ '/engineers/robert-c-martin/learn/' | relative_url }}) · [Compare profiles]({{ '/engineers/compare/' | relative_url }})

## Research cache

[Detailed guide](research.md) · [Common reward workflow](workflow.md) · [Tools and chronology](tools.md) · [Source findings](sources.md) · [Slide notes](slides.md)

Research checked and cut off on **26 October 2026**. Joint teaching outlines, historical authored principles, inspected artifacts, and dated personal reports remain distinct. No paid videos were viewed and no tool was executed.

## Comparison evidence

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated.** The joint Robert/Justin Martin teaching outline proposes engineering discipline for agent work.

Public coauthored teaching description, not a measured universal bottleneck.

[Cached detail](research.md#approach-in-brief) · [Primary material](https://cleancoders.com/episode/agentic-discipline-1)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Stated.** The joint Robert/Justin Martin public outline proposes a higher-level source humans can review.

Public Robert/Justin Martin outline; paid demonstration not viewed. The reward contract is our adaptation.

[Cached detail](research.md#start-with-a-source-humans-can-review) · [Primary material](https://cleancoders.com/episode/agentic-discipline-2)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Stated.** 2014 guidance separates test-first, refactoring and architectural feedback cycles.

Historical general practice, not a complete current internal agent cadence.

[Cached detail](research.md#keep-test-first-design-separate-from-larger-feedback) · [Primary material](https://blog.cleancoder.com/uncle-bob/2014/12/17/TheCyclesOfTDD.html)

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Stated.** His June 2016 article advocates mutation testing to challenge assertions; coverage alone records execution.

Historical authored explanation. Missing requirements and equivalent mutants still limit confidence.

[Cached detail](research.md#challenge-assertions-rather-than-worship-coverage) · [Primary material](https://blog.cleancoder.com/uncle-bob/2016/06/10/MutationTesting.html)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Stated.** His 2012 architecture advice separates business policy from mechanisms through controlled dependencies.

2012 architecture advice, not a mandatory four-tier product or language.

[Cached detail](research.md#separate-policy-from-technical-mechanism) · [Primary material](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated.** His 24 September 2026 interview-page account reports mostly above-code supervision, with occasional inspection.

Inspected first-person episode text, not a verified complete recording; not a universal no-source-reading policy or safety result.

[Cached detail](research.md#published-framework-is-not-a-current-personal-topology) · [Primary material](https://www.aviator.co/podcast/uncle-bob-martin-ai-clean-code)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Stated.** His 24 September 2026 interview-page account reports moving away from his custom harness.

Earlier public multi-agent teaching and the published framework remain separate evidence; private current topology unknown.

[Cached detail](research.md#published-framework-is-not-a-current-personal-topology) · [Primary material](https://www.aviator.co/podcast/uncle-bob-martin-ai-clean-code)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Demonstrated.** Pinned SwarmForge handoff documentation prescribes committed, structured work items.

Published artifact at pinned revision; not executed. Durable task records do not establish application persistence.

[Cached detail](research.md#tools-and-setup) · [Primary material](https://github.com/unclebob/swarm-forge/blob/f4f5fbcae0de6f7dcc26e82400334227647cfdb2/swarmforge/constitution/articles/handoffs.prompt)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Demonstrated.** Pinned public SwarmForge documentation describes branch-specific products, not a verified current private stack.

Pinned artifact inspected. September terminal-use report is separately dated; installation and backends not tested.

[Cached detail](tools.md#different-evidence-different-scope) · [Primary material](https://github.com/unclebob/swarm-forge/blob/f4f5fbcae0de6f7dcc26e82400334227647cfdb2/README.md)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Demonstrated.** Pinned SwarmForge documentation prescribes assigned checkouts and committed handoffs; full current integration/release policy is unknown.

Inspected workflow and handoff instructions (S11/S12), not an observed integration, deployment or rollback arrangement.

[Cached detail](tools.md#quality-tools-and-guardrails) · [Workflow finding](sources.md#s11) · [Handoff finding](sources.md#s12)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Demonstrated.** Pinned SwarmForge engineering instructions forbid fabricated metric substitutes and hand-edited mutation manifests.

Inspected prompt instructions do not establish filesystem permissions, enforcement completeness or security efficacy.

[Cached detail](tools.md#quality-tools-and-guardrails) · [Primary material](https://github.com/unclebob/swarm-forge/blob/f4f5fbcae0de6f7dcc26e82400334227647cfdb2/swarmforge/constitution/articles/engineering.prompt)

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Stated.** His 24 September 2026 interview-page account describes adjusting constraints after observing agent confusion.

Contextual personal judgment; no universal thresholds or controlled superiority established.

[Cached detail](research.md#published-framework-is-not-a-current-personal-topology) · [Primary material](https://www.aviator.co/podcast/uncle-bob-martin-ai-clean-code)

