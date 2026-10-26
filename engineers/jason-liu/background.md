---
title: Jason Liu — comparison history
parent: Jason Liu
nav_order: 9
last_updated: '2026-10-26'
nav_exclude: true
---

# Comparison history

These fields and slide notes preceded the publication-window review on 26 October 2026. They are retained for traceability, not evidence of current AI practice. [Current evidence](recent-ai.md).

## Previous comparison fields

### C01 · Goal and bottleneck

His May 2024 RAG guidance diagnoses retrieval before changing generation.

Application advice based on consulting; not a universal coding bottleneck or controlled speed result.

[Original supporting source](https://jxnl.co/writing/2024/05/22/systematically-improving-your-rag/)

### C02 · Requirements and specification

His January 2025 blueprint separates information gaps from capability gaps.

AI-product requirements and segmentation; not a complete personal coding specification format.

[Original supporting source](https://jxnl.co/writing/2025/01/24/systematically-improving-rag-applications/)

### C03 · Increment and planning

September 2025 guidance prototypes a bounded agent capability before infrastructure.

A passing scenario is narrow feasibility evidence, not production reliability or a fixed personal cadence.

[Original supporting source](https://jxnl.co/writing/2025/09/04/context-engineering-rapid-agent-prototyping/)

### C04 · Testing and verification

His May 2025 RAG framework distinguishes retrieval and question/context/answer relationships.

Product evaluation, not a unit-TDD policy; exhaustive framing and judge effectiveness are not independently proven here.

[Original supporting source](https://jxnl.co/writing/2025/05/19/there-are-only-6-rag-evals/)

### C05 · Design and refactoring

November 2024 guidance separates topic coverage from processing capabilities.

Modular AI-application diagnosis; no mandatory personal refactoring cadence established.

[Original supporting source](https://jxnl.co/writing/2024/11/18/decomposing-rag-systems-to-identify-bottlenecks/)

### C06 · Human understanding and review

May 2024 feedback guidance names the quality being judged.

User/product feedback is not a documented private code-review ritual.

[Original supporting source](https://jxnl.co/writing/2024/05/11/low-hanging-fruit-for-rag-search/)

### C07 · Agent autonomy and coordination

August 2025 guidance isolates noisy reads in subagents; January 2026 update dates interface changes.

Transferable context design, not a complete personal swarm topology or guaranteed token saving.

[Original supporting source](https://jxnl.co/writing/2025/08/29/context-engineering-slash-commands-subagents/)

### C08 · Context and durable state

August 2025 tool-response guidance exposes source metadata and facets.

Context presentation is not evidence of a private durable-memory store or application persistence.

[Original supporting source](https://jxnl.co/writing/2025/08/27/facets-context-engineering/)

### C09 · Tooling and environment

Authored Instructor tutorials publish structured relevance-judgment examples.

Inspected code artifact, not executed. Living snippets are not an immutable historical or verified current setup.

[Original supporting source](https://python.useinstructor.com/blog/2024/10/23/building-an-llm-based-reranker-for-your-rag-pipeline/)

### C10 · Integration and release

His August 2024 product playbook links evaluation to production observations and iteration.

AI-product lifecycle advice; complete personal Git/CI/deployment/rollback policy remains unknown.

[Original supporting source](https://jxnl.co/writing/2024/08/19/rag-flywheel/)

### C11 · Boundaries and safeguards

September 2025 application guidance starts deterministic and bounds tool loops.

Stopping/cost advice is not a verified private permission, sandbox or protected-test policy.

[Original supporting source](https://jxnl.co/writing/2025/09/04/context-engineering-agent-frameworks-and-form-factors/)

### C12 · Evaluation and tradeoffs

August 2024 tool-selection advice weighs coverage, usage and added latency.

Usage distributions are heuristics; no guaranteed recall floor or comparative superiority established.

[Original supporting source](https://jxnl.co/writing/2024/08/21/trade-off-tool-selection/)

## Previous slide notes

# Jason Liu — bite-sized ideas

Derived from the cache checked on 26 October 2026. This deck concerns building AI systems; examples are suggested adaptations.

### Archived card 01

### Locate the bottleneck

> **A better answer prompt cannot retrieve a missing source.**
>
> Liu’s May 2024 guidance starts by diagnosing retrieval. This is application advice, not proof that every AI failure begins there.

**In the wild:** Our optional policy assistant checks whether the needed rule was retrieved before changing generation.

**Takeaway:** Name the failing boundary.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#approach-in-brief) · [Cached claim](index.md#c01)

---

### Archived card 02

### Separate the gaps

> **Missing information and missing capability need different work.**
>
> His January 2025 blueprint distinguishes unavailable source material from an inability to process it. A single average can hide the difference.

**In the wild:** A missing policy differs from an existing policy with no usable effective-date field.

**Takeaway:** Classify the failure before adding machinery.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#requirements-inventory-is-different-from-capability) · [Cached claim](index.md#c02)

---

### Archived card 03

### Prototype the decision

> **Test one useful capability before building a platform.**
>
> September 2025 guidance uses an available harness and scenario checks. One passing attempt is feasibility evidence, not proof of dependable production behaviour.

**In the wild:** Our reward lab starts with real baseline observations instead of a new orchestration layer.

**Takeaway:** Keep the first claim small enough to inspect.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#planning-prove-one-bounded-capability-first) · [Cached claim](index.md#c03)

---

### Archived card 04

### Ask what the score means

> **A valid judgment object can still contain a wrong judgment.**
>
> His May 2025 RAG evaluation framework distinguishes question, context and answer relationships. Our qualification: schema validity and an LLM score do not independently establish correctness.

**In the wild:** A Boolean relevance verdict needs checked examples before it becomes trusted evaluation evidence.

**Takeaway:** Evaluate the evaluator too.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#evaluation-name-the-relationship) · [Cached claim](index.md#c04)

---

### Archived card 05

### Context is an interface

> **A search result can help the agent decide what to read next.**
>
> The August 2025 context article adds metadata and facets to raw chunks. This is interface guidance, not a private-memory implementation or permission boundary.

**In the wild:** A result exposes document identity and effective date so an agent can inspect the right source.

**Takeaway:** Add structure that changes a useful decision.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#context-is-an-interface) · [Cached claim](index.md#c08)

---

### Archived card 06

### Isolate noisy work

> **A diagnostic summary should preserve the important uncertainty.**
>
> His August 2025 guidance, updated January 2026, isolates messy reads. Its examples are not guaranteed savings or a complete private coordination setup.

**In the wild:** A worker returns the failing command, evidence location and unresolved hypothesis instead of every log line.

**Takeaway:** Check what the summary leaves out.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#coordination-isolate-the-noisy-work) · [Cached claim](index.md#c07)

---

### Archived card 07

### Observe the restart

> **Read the balance before replay can accidentally repair the evidence.**
>
> Suggested adaptation: the shared reward lab observes retained balance immediately after runtime restart. It checks deterministic persistence, not retrieval or model quality.

**In the wild:** A10 → replayA10 → restart/read10 → replayA10 → B20.

**Takeaway:** Separate lost balance from forgotten identity.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](workflow.md#shared-task-and-assumptions) · [Cached adaptation](workflow.md#step-5--re-run-the-complete-contract)

---

### Archived card 08

### Tradeoffs need data

> **Fewer tools can reduce noise and still hide the tool you needed.**
>
> His August 2024 tool-selection advice balances common tools, retrieval and latency. Usage heuristics do not guarantee a recall floor or universal improvement.

**In the wild:** A candidate tool filter is checked on both frequent and unusual requests before adoption.

**Takeaway:** Keep the missed cases beside the average.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#evaluation-and-tradeoffs) · [Cached claim](index.md#c12)

---
