---
title: Jason Liu
parent: Engineers
has_children: true
nav_order: 20
engineer_profile: true
cache_schema: 1
person_id: jason-liu
canonical_name: Jason Liu
aliases:
- jxnl
practice_focus: ai-systems
focus_note: Retrieval, model and product evaluation are distinct from a documented personal coding-agent workflow.
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
last_updated: '2026-10-26'
last_read: null
status: unread
tagline: Find the failing boundary. Measure the useful outcome.
summary: 'A measurement-led approach to RAG and agent applications: diagnose components, expose context clearly
  and iterate on evidence. Private coding practices remain separate from published product guidance.'
strengths:
- Retrieval diagnosis
- Context interfaces
- Product feedback
tools_summary: Instructor authorship; living 2024 tutorials inspected in 2026; September 2025 agent-prototyping
  guidance. Complete present private setup unknown.
slides_url: /engineers/jason-liu/learn/
dimensions:
- id: D01
  title: Goal and bottleneck
  position: His May 2024 RAG guidance diagnoses retrieval before changing generation.
  evidence: Stated
  claim: C01
  detail: research.md#approach-in-brief
  source: https://jxnl.co/writing/2024/05/22/systematically-improving-your-rag/
  checked: '2026-10-26'
  qualification: Application advice based on consulting; not a universal coding bottleneck or controlled speed result.
- id: D02
  title: Requirements and specification
  position: His January 2025 blueprint separates information gaps from capability gaps.
  evidence: Stated
  claim: C02
  detail: research.md#requirements-inventory-is-different-from-capability
  source: https://jxnl.co/writing/2025/01/24/systematically-improving-rag-applications/
  checked: '2026-10-26'
  qualification: AI-product requirements and segmentation; not a complete personal coding specification format.
- id: D03
  title: Increment and planning
  position: September 2025 guidance prototypes a bounded agent capability before infrastructure.
  evidence: Stated
  claim: C03
  detail: research.md#planning-prove-one-bounded-capability-first
  source: https://jxnl.co/writing/2025/09/04/context-engineering-rapid-agent-prototyping/
  checked: '2026-10-26'
  qualification: A passing scenario is narrow feasibility evidence, not production reliability or a fixed personal
    cadence.
- id: D04
  title: Testing and verification
  position: His May 2025 RAG framework distinguishes retrieval and question/context/answer relationships.
  evidence: Stated
  claim: C04
  detail: research.md#evaluation-name-the-relationship
  source: https://jxnl.co/writing/2025/05/19/there-are-only-6-rag-evals/
  checked: '2026-10-26'
  qualification: Product evaluation, not a unit-TDD policy; exhaustive framing and judge effectiveness are not independently
    proven here.
- id: D05
  title: Design and refactoring
  position: November 2024 guidance separates topic coverage from processing capabilities.
  evidence: Stated
  claim: C05
  detail: research.md#diagnose-a-component-without-forgetting-the-user
  source: https://jxnl.co/writing/2024/11/18/decomposing-rag-systems-to-identify-bottlenecks/
  checked: '2026-10-26'
  qualification: Modular AI-application diagnosis; no mandatory personal refactoring cadence established.
- id: D06
  title: Human understanding and review
  position: May 2024 feedback guidance names the quality being judged.
  evidence: Stated
  claim: C06
  detail: research.md#match-feedback-to-the-decision
  source: https://jxnl.co/writing/2024/05/11/low-hanging-fruit-for-rag-search/
  checked: '2026-10-26'
  qualification: User/product feedback is not a documented private code-review ritual.
- id: D07
  title: Agent autonomy and coordination
  position: August 2025 guidance isolates noisy reads in subagents; January 2026 update dates interface changes.
  evidence: Stated
  claim: C07
  detail: research.md#coordination-isolate-the-noisy-work
  source: https://jxnl.co/writing/2025/08/29/context-engineering-slash-commands-subagents/
  checked: '2026-10-26'
  qualification: Transferable context design, not a complete personal swarm topology or guaranteed token saving.
- id: D08
  title: Context and durable state
  position: August 2025 tool-response guidance exposes source metadata and facets.
  evidence: Stated
  claim: C08
  detail: research.md#context-is-an-interface
  source: https://jxnl.co/writing/2025/08/27/facets-context-engineering/
  checked: '2026-10-26'
  qualification: Context presentation is not evidence of a private durable-memory store or application persistence.
- id: D09
  title: Tooling and environment
  position: Authored Instructor tutorials publish structured relevance-judgment examples.
  evidence: Demonstrated
  claim: C09
  detail: research.md#tools-and-setup
  source: https://python.useinstructor.com/blog/2024/10/23/building-an-llm-based-reranker-for-your-rag-pipeline/
  checked: '2026-10-26'
  qualification: Inspected code artifact, not executed. Living snippets are not an immutable historical or verified
    current setup.
- id: D10
  title: Integration and release
  position: His August 2024 product playbook links evaluation to production observations and iteration.
  evidence: Stated
  claim: C10
  detail: research.md#a-feature-from-idea-to-release
  source: https://jxnl.co/writing/2024/08/19/rag-flywheel/
  checked: '2026-10-26'
  qualification: AI-product lifecycle advice; complete personal Git/CI/deployment/rollback policy remains unknown.
- id: D11
  title: Boundaries and safeguards
  position: September 2025 application guidance starts deterministic and bounds tool loops.
  evidence: Stated
  claim: C11
  detail: research.md#boundaries-and-safeguards
  source: https://jxnl.co/writing/2025/09/04/context-engineering-agent-frameworks-and-form-factors/
  checked: '2026-10-26'
  qualification: Stopping/cost advice is not a verified private permission, sandbox or protected-test policy.
- id: D12
  title: Evaluation and tradeoffs
  position: August 2024 tool-selection advice weighs coverage, usage and added latency.
  evidence: Stated
  claim: C12
  detail: research.md#evaluation-and-tradeoffs
  source: https://jxnl.co/writing/2024/08/21/trade-off-tool-selection/
  checked: '2026-10-26'
  qualification: Usage distributions are heuristics; no guaranteed recall floor or comparative superiority established.
---

# Jason Liu

[Open slideshow]({{ '/engineers/jason-liu/learn/' | relative_url }}) · [Compare profiles]({{ '/engineers/compare/' | relative_url }})

[Detailed research](research.md) · [Common reward workflow](workflow.md) · [Source findings](sources.md) · [Slide notes](slides.md)

Research checked and cut off on **26 October 2026**. This profile primarily concerns building AI systems. Deterministic software tests, retrieval evaluation and model-output quality are separate subjects. The common reward workflow is our adaptation, not a Liu demonstration.

## Comparison evidence

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated.** His May 2024 RAG guidance diagnoses retrieval before changing generation.

Application advice based on consulting; not a universal coding bottleneck or controlled speed result.

[Cached detail](research.md#approach-in-brief) · [Primary source](https://jxnl.co/writing/2024/05/22/systematically-improving-your-rag/)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Stated.** His January 2025 blueprint separates information gaps from capability gaps.

AI-product requirements and segmentation; not a complete personal coding specification format.

[Cached detail](research.md#requirements-inventory-is-different-from-capability) · [Primary source](https://jxnl.co/writing/2025/01/24/systematically-improving-rag-applications/)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Stated.** September 2025 guidance prototypes a bounded agent capability before infrastructure.

A passing scenario is narrow feasibility evidence, not production reliability or a fixed personal cadence.

[Cached detail](research.md#planning-prove-one-bounded-capability-first) · [Primary source](https://jxnl.co/writing/2025/09/04/context-engineering-rapid-agent-prototyping/)

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Stated.** His May 2025 RAG framework distinguishes retrieval and question/context/answer relationships.

Product evaluation, not a unit-TDD policy; exhaustive framing and judge effectiveness are not independently proven here.

[Cached detail](research.md#evaluation-name-the-relationship) · [Primary source](https://jxnl.co/writing/2025/05/19/there-are-only-6-rag-evals/)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Stated.** November 2024 guidance separates topic coverage from processing capabilities.

Modular AI-application diagnosis; no mandatory personal refactoring cadence established.

[Cached detail](research.md#diagnose-a-component-without-forgetting-the-user) · [Primary source](https://jxnl.co/writing/2024/11/18/decomposing-rag-systems-to-identify-bottlenecks/)

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated.** May 2024 feedback guidance names the quality being judged.

User/product feedback is not a documented private code-review ritual.

[Cached detail](research.md#match-feedback-to-the-decision) · [Primary source](https://jxnl.co/writing/2024/05/11/low-hanging-fruit-for-rag-search/)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Stated.** August 2025 guidance isolates noisy reads in subagents; January 2026 update dates interface changes.

Transferable context design, not a complete personal swarm topology or guaranteed token saving.

[Cached detail](research.md#coordination-isolate-the-noisy-work) · [Primary source](https://jxnl.co/writing/2025/08/29/context-engineering-slash-commands-subagents/)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Stated.** August 2025 tool-response guidance exposes source metadata and facets.

Context presentation is not evidence of a private durable-memory store or application persistence.

[Cached detail](research.md#context-is-an-interface) · [Primary source](https://jxnl.co/writing/2025/08/27/facets-context-engineering/)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Demonstrated.** Authored Instructor tutorials publish structured relevance-judgment examples.

Inspected code artifact, not executed. Living snippets are not an immutable historical or verified current setup.

[Cached detail](research.md#tools-and-setup) · [Primary source](https://python.useinstructor.com/blog/2024/10/23/building-an-llm-based-reranker-for-your-rag-pipeline/)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Stated.** His August 2024 product playbook links evaluation to production observations and iteration.

AI-product lifecycle advice; complete personal Git/CI/deployment/rollback policy remains unknown.

[Cached detail](research.md#a-feature-from-idea-to-release) · [Primary source](https://jxnl.co/writing/2024/08/19/rag-flywheel/)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Stated.** September 2025 application guidance starts deterministic and bounds tool loops.

Stopping/cost advice is not a verified private permission, sandbox or protected-test policy.

[Cached detail](research.md#boundaries-and-safeguards) · [Primary source](https://jxnl.co/writing/2025/09/04/context-engineering-agent-frameworks-and-form-factors/)

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Stated.** August 2024 tool-selection advice weighs coverage, usage and added latency.

Usage distributions are heuristics; no guaranteed recall floor or comparative superiority established.

[Cached detail](research.md#evaluation-and-tradeoffs) · [Primary source](https://jxnl.co/writing/2024/08/21/trade-off-tool-selection/)

