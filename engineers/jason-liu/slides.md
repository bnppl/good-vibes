---
title: Jason Liu — bite-sized ideas
parent: Jason Liu Slides
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
nav_order: 1
nav_exclude: true
derived_from: engineers/jason-liu/research.md
---

# Jason Liu — bite-sized ideas

Derived from the cache checked on 26 October 2026. This deck concerns building AI systems; examples are suggested adaptations.

## Card 01

### Locate the bottleneck

> **A better answer prompt cannot retrieve a missing source.**
>
> Liu’s May 2024 guidance starts by diagnosing retrieval. This is application advice, not proof that every AI failure begins there.

**In the wild:** Our optional policy assistant checks whether the needed rule was retrieved before changing generation.

**Takeaway:** Name the failing boundary.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#approach-in-brief) · [Cached claim](index.md#c01)

---

## Card 02

### Separate the gaps

> **Missing information and missing capability need different work.**
>
> His January 2025 blueprint distinguishes unavailable source material from an inability to process it. A single average can hide the difference.

**In the wild:** A missing policy differs from an existing policy with no usable effective-date field.

**Takeaway:** Classify the failure before adding machinery.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#requirements-inventory-is-different-from-capability) · [Cached claim](index.md#c02)

---

## Card 03

### Prototype the decision

> **Test one useful capability before building a platform.**
>
> September 2025 guidance uses an available harness and scenario checks. One passing attempt is feasibility evidence, not proof of dependable production behaviour.

**In the wild:** Our reward lab starts with real baseline observations instead of a new orchestration layer.

**Takeaway:** Keep the first claim small enough to inspect.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#planning-prove-one-bounded-capability-first) · [Cached claim](index.md#c03)

---

## Card 04

### Ask what the score means

> **A valid judgment object can still contain a wrong judgment.**
>
> His May 2025 RAG evaluation framework distinguishes question, context and answer relationships. Our qualification: schema validity and an LLM score do not independently establish correctness.

**In the wild:** A Boolean relevance verdict needs checked examples before it becomes trusted evaluation evidence.

**Takeaway:** Evaluate the evaluator too.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#evaluation-name-the-relationship) · [Cached claim](index.md#c04)

---

## Card 05

### Context is an interface

> **A search result can help the agent decide what to read next.**
>
> The August 2025 context article adds metadata and facets to raw chunks. This is interface guidance, not a private-memory implementation or permission boundary.

**In the wild:** A result exposes document identity and effective date so an agent can inspect the right source.

**Takeaway:** Add structure that changes a useful decision.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#context-is-an-interface) · [Cached claim](index.md#c08)

---

## Card 06

### Isolate noisy work

> **A diagnostic summary should preserve the important uncertainty.**
>
> His August 2025 guidance, updated January 2026, isolates messy reads. Its examples are not guaranteed savings or a complete private coordination setup.

**In the wild:** A worker returns the failing command, evidence location and unresolved hypothesis instead of every log line.

**Takeaway:** Check what the summary leaves out.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#coordination-isolate-the-noisy-work) · [Cached claim](index.md#c07)

---

## Card 07

### Observe the restart

> **Read the balance before replay can accidentally repair the evidence.**
>
> Suggested adaptation: the shared reward lab observes retained balance immediately after runtime restart. It checks deterministic persistence, not retrieval or model quality.

**In the wild:** A10 → replayA10 → restart/read10 → replayA10 → B20.

**Takeaway:** Separate lost balance from forgotten identity.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](workflow.md#shared-task-and-assumptions) · [Cached adaptation](workflow.md#step-5--re-run-the-complete-contract)

---

## Card 08

### Tradeoffs need data

> **Fewer tools can reduce noise and still hide the tool you needed.**
>
> His August 2024 tool-selection advice balances common tools, retrieval and latency. Usage heuristics do not guarantee a recall floor or universal improvement.

**In the wild:** A candidate tool filter is checked on both frequent and unusual requests before adoption.

**Takeaway:** Keep the missed cases beside the average.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#evaluation-and-tradeoffs) · [Cached claim](index.md#c12)

---
