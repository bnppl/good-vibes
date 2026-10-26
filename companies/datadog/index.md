---
title: Datadog
parent: Companies
nav_order: 16
company_profile: true
company_id: datadog
industry: Observability / developer software
organisation_context: Large public company
research_checked: '2026-10-26'
evidence_since: '2025-10-01'
published: '2026-07-01'
evidence_kind: Company engineering case collection
last_updated: '2026-10-26'
last_read: null
status: unread
canonical_name: Datadog
has_children: true
cache_schema: 1
aliases:
- DataDog
practice_focus: coding-workflows
research_cutoff: '2026-10-26'
focus_note: Named systems, optimization and internal-tool cases; different autonomy boundaries are preserved.
tagline: Make the verification boundary explicit.
summary: Recent cases show systems construction, bounded optimization and AI-built validation infrastructure. Published
  experiment limits qualify broad correctness claims.
strengths:
- Verification boundaries
- Shadow evaluation
- Explicit contracts
tools_summary: Named cases use Claude Code/Cursor/Codex and verification tools. Pinned redis-rust is research, not
  a production replacement.
slides_url: /companies/datadog/learn/
dimensions:
- id: D01
  title: Goal and bottleneck
  claim: C01
  detail: research.md#c01
  checked: '2026-10-26'
  position: The cases move the bottleneck from generation to verification.
  evidence: Stated
  source: https://www.datadoghq.com/blog/ai/harness-first-agents/
  qualification: Specific systems work, not a controlled claim about all engineering.
  evidence_kind: Reported team use
  published: '2026-03-09'
  practice_date: Late-2025 capability change and subsequent projects; exact sessions unknown
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
- id: D02
  title: Requirements and specification
  claim: C02
  detail: research.md#c02
  checked: '2026-10-26'
  position: Humans specify system semantics and invariants before agent iteration.
  evidence: Stated
  source: https://www.datadoghq.com/blog/ai/harness-first-agents/
  qualification: Helix’s constraint-first case does not mandate formal methods for every product task.
  evidence_kind: Reported team use
  published: '2026-03-09'
  practice_date: Late-2025 capability change and subsequent projects; exact sessions unknown
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
- id: D03
  title: Increment and planning
  claim: C03
  detail: research.md#c03
  checked: '2026-10-26'
  position: The shadow-platform case separates planning, implementation and planner review.
  evidence: Stated
  source: https://www.datadoghq.com/blog/how-datadog-uses-ai-to-build-internal-software-delivery-tools-and-improve-system/
  qualification: One project’s context separation, not a universal multi-agent protocol.
  evidence_kind: Reported team use
  published: '2026-07-01'
  practice_date: Project work before July publication; exact dates unknown
  source_id: S02
  ai_specific: true
  source_format: Authored engineering case collection
- id: D04
  title: Testing and verification
  claim: C04
  detail: research.md#c04
  checked: '2026-10-26'
  position: Published checks vary with command, replication and performance changes.
  evidence: Demonstrated
  source: https://github.com/nerdsane/redis-rust/blob/c94fcb1fdc850727a06199a144a1eaa8951d1931/docs/HARNESS.md
  qualification: Pinned instructions were inspected, not executed; their uncovered properties remain explicit.
  evidence_kind: Published artifact
  published: '2026-04-02'
  practice_date: Inspected revision; commands not run
  source_id: S05
  ai_specific: true
  source_format: Pinned repository guide
- id: D05
  title: Design and refactoring
  claim: C05
  detail: research.md#c05
  checked: '2026-10-26'
  position: Agents explore architecture while humans approve boundaries and simplify excess abstraction.
  evidence: Stated
  source: https://www.datadoghq.com/blog/ai/harness-first-agents/
  qualification: A successful compile did not prevent compatibility mistakes or overengineering.
  evidence_kind: Reported team use
  published: '2026-03-09'
  practice_date: Late-2025 capability change and subsequent projects; exact sessions unknown
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
- id: D06
  title: Human understanding and review
  claim: C06
  detail: research.md#c06
  checked: '2026-10-26'
  position: Humans own harness design, targets and architectural approval.
  evidence: Stated
  source: https://www.datadoghq.com/blog/ai/harness-first-agents/
  qualification: Less line-by-line review in the cases does not remove human responsibility.
  evidence_kind: Reported team use
  published: '2026-03-09'
  practice_date: Late-2025 capability change and subsequent projects; exact sessions unknown
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
- id: D07
  title: Agent autonomy and coordination
  claim: C07
  detail: research.md#c07
  checked: '2026-10-26'
  position: Unicron experiments automate optimization within verification and shadow gates.
  evidence: Stated
  source: https://www.datadoghq.com/blog/ai/fully-autonomous-optimization/
  qualification: This is narrower than arbitrary autonomous development or company-wide release authority.
  evidence_kind: Reported team use
  published: '2026-03-09'
  practice_date: Two Unicron workload experiments before publication; exact dates unknown
  source_id: S03
  ai_specific: true
  source_format: Authored engineering article
- id: D08
  title: Context and durable state
  claim: C08
  detail: research.md#c08
  checked: '2026-10-26'
  position: Existing internal designs and code provide project context.
  evidence: Stated
  source: https://www.datadoghq.com/blog/how-datadog-uses-ai-to-build-internal-software-delivery-tools-and-improve-system/
  qualification: The account does not establish a complete company memory system.
  evidence_kind: Reported team use
  published: '2026-07-01'
  practice_date: Project work before July publication; exact dates unknown
  source_id: S02
  ai_specific: true
  source_format: Authored engineering case collection
- id: D09
  title: Tooling and environment
  claim: C09
  detail: research.md#c09
  checked: '2026-10-26'
  position: The reported shadow-platform work used Claude Code and Cursor.
  evidence: Stated
  source: https://www.datadoghq.com/blog/how-datadog-uses-ai-to-build-internal-software-delivery-tools-and-improve-system/
  qualification: Dated tools for a named project, not a verified current installation inventory.
  evidence_kind: Reported team use
  published: '2026-07-01'
  practice_date: Project work before July publication; exact dates unknown
  source_id: S02
  ai_specific: true
  source_format: Authored engineering case collection
- id: D10
  title: Integration and release
  claim: C10
  detail: research.md#c10
  checked: '2026-10-26'
  position: The described loop hot-swaps verified optimizations into running services.
  evidence: Stated
  source: https://www.datadoghq.com/blog/ai/fully-autonomous-optimization/
  qualification: Autonomy concerns the reported bounded workload setting, not all Datadog deployments.
  evidence_kind: Reported team use
  published: '2026-03-09'
  practice_date: Two Unicron workload experiments before publication; exact dates unknown
  source_id: S03
  ai_specific: true
  source_format: Authored engineering article
- id: D11
  title: Boundaries and safeguards
  claim: C11
  detail: research.md#c11
  checked: '2026-10-26'
  position: The public redis-rust experiment explicitly lacks production and persistence guarantees.
  evidence: Demonstrated
  source: https://github.com/nerdsane/redis-rust/blob/c94fcb1fdc850727a06199a144a1eaa8951d1931/README.md
  qualification: Its eventual cross-node consistency must not be relabelled as durable linearizable storage.
  evidence_kind: Published artifact
  published: '2026-04-02'
  practice_date: Inspected revision; no runtime executed
  source_id: S04
  ai_specific: true
  source_format: Pinned repository README
- id: D12
  title: Evaluation and tradeoffs
  claim: C12
  detail: research.md#c12
  checked: '2026-10-26'
  position: Separate measured staging improvements from projected production savings.
  evidence: Stated
  source: https://www.datadoghq.com/blog/how-datadog-uses-ai-to-build-internal-software-delivery-tools-and-improve-system/
  qualification: Benchmark workloads, service context and later production outcomes may differ.
  evidence_kind: Reported team use
  published: '2026-07-01'
  practice_date: Project work before July publication; exact dates unknown
  source_id: S02
  ai_specific: true
  source_format: Authored engineering case collection
comparison_group: observability
---

# Datadog: building software using AI

[Detailed research](research.md) · [Source findings](sources.md) · [Workflow and optional practice](workflow.md) · [Slide notes](slides.md) · [Open slideshow]({{ '/companies/datadog/learn/' | relative_url }}) · [Compare companies](../comparison.md)

Recent cases show systems construction, bounded optimization and AI-built validation infrastructure. Published experiment limits qualify broad correctness claims.

## Scope

Named systems, optimization and internal-tool cases; different autonomy boundaries are preserved. Publication window: **1 October 2025–26 October 2026**. Practice and publication dates are different. Sources were inspected, not independently executed.

Open-source background: [Datadog Agent](https://github.com/DataDog/datadog-agent). It is not proof that the reported internal harness is public or that this workflow produced the project.

## Comparison evidence

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated · Reported team use.** The cases move the bottleneck from generation to verification.

Specific systems work, not a controlled claim about all engineering.

Published / revision: **2026-03-09**. Practice: Late-2025 capability change and subsequent projects; exact sessions unknown. Checked: 2026-10-26. Format: Authored engineering article.

[Source record](sources.md#s01) · [Original source](https://www.datadoghq.com/blog/ai/harness-first-agents/)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Stated · Reported team use.** Humans specify system semantics and invariants before agent iteration.

Helix’s constraint-first case does not mandate formal methods for every product task.

Published / revision: **2026-03-09**. Practice: Late-2025 capability change and subsequent projects; exact sessions unknown. Checked: 2026-10-26. Format: Authored engineering article.

[Source record](sources.md#s01) · [Original source](https://www.datadoghq.com/blog/ai/harness-first-agents/)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Stated · Reported team use.** The shadow-platform case separates planning, implementation and planner review.

One project’s context separation, not a universal multi-agent protocol.

Published / revision: **2026-07-01**. Practice: Project work before July publication; exact dates unknown. Checked: 2026-10-26. Format: Authored engineering case collection.

[Source record](sources.md#s02) · [Original source](https://www.datadoghq.com/blog/how-datadog-uses-ai-to-build-internal-software-delivery-tools-and-improve-system/)

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Demonstrated · Published artifact.** Published checks vary with command, replication and performance changes.

Pinned instructions were inspected, not executed; their uncovered properties remain explicit.

Published / revision: **2026-04-02**. Practice: Inspected revision; commands not run. Checked: 2026-10-26. Format: Pinned repository guide.

[Source record](sources.md#s05) · [Original source](https://github.com/nerdsane/redis-rust/blob/c94fcb1fdc850727a06199a144a1eaa8951d1931/docs/HARNESS.md)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Stated · Reported team use.** Agents explore architecture while humans approve boundaries and simplify excess abstraction.

A successful compile did not prevent compatibility mistakes or overengineering.

Published / revision: **2026-03-09**. Practice: Late-2025 capability change and subsequent projects; exact sessions unknown. Checked: 2026-10-26. Format: Authored engineering article.

[Source record](sources.md#s01) · [Original source](https://www.datadoghq.com/blog/ai/harness-first-agents/)

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated · Reported team use.** Humans own harness design, targets and architectural approval.

Less line-by-line review in the cases does not remove human responsibility.

Published / revision: **2026-03-09**. Practice: Late-2025 capability change and subsequent projects; exact sessions unknown. Checked: 2026-10-26. Format: Authored engineering article.

[Source record](sources.md#s01) · [Original source](https://www.datadoghq.com/blog/ai/harness-first-agents/)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Stated · Reported team use.** Unicron experiments automate optimization within verification and shadow gates.

This is narrower than arbitrary autonomous development or company-wide release authority.

Published / revision: **2026-03-09**. Practice: Two Unicron workload experiments before publication; exact dates unknown. Checked: 2026-10-26. Format: Authored engineering article.

[Source record](sources.md#s03) · [Original source](https://www.datadoghq.com/blog/ai/fully-autonomous-optimization/)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Stated · Reported team use.** Existing internal designs and code provide project context.

The account does not establish a complete company memory system.

Published / revision: **2026-07-01**. Practice: Project work before July publication; exact dates unknown. Checked: 2026-10-26. Format: Authored engineering case collection.

[Source record](sources.md#s02) · [Original source](https://www.datadoghq.com/blog/how-datadog-uses-ai-to-build-internal-software-delivery-tools-and-improve-system/)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Stated · Reported team use.** The reported shadow-platform work used Claude Code and Cursor.

Dated tools for a named project, not a verified current installation inventory.

Published / revision: **2026-07-01**. Practice: Project work before July publication; exact dates unknown. Checked: 2026-10-26. Format: Authored engineering case collection.

[Source record](sources.md#s02) · [Original source](https://www.datadoghq.com/blog/how-datadog-uses-ai-to-build-internal-software-delivery-tools-and-improve-system/)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Stated · Reported team use.** The described loop hot-swaps verified optimizations into running services.

Autonomy concerns the reported bounded workload setting, not all Datadog deployments.

Published / revision: **2026-03-09**. Practice: Two Unicron workload experiments before publication; exact dates unknown. Checked: 2026-10-26. Format: Authored engineering article.

[Source record](sources.md#s03) · [Original source](https://www.datadoghq.com/blog/ai/fully-autonomous-optimization/)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Demonstrated · Published artifact.** The public redis-rust experiment explicitly lacks production and persistence guarantees.

Its eventual cross-node consistency must not be relabelled as durable linearizable storage.

Published / revision: **2026-04-02**. Practice: Inspected revision; no runtime executed. Checked: 2026-10-26. Format: Pinned repository README.

[Source record](sources.md#s04) · [Original source](https://github.com/nerdsane/redis-rust/blob/c94fcb1fdc850727a06199a144a1eaa8951d1931/README.md)

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Stated · Reported team use.** Separate measured staging improvements from projected production savings.

Benchmark workloads, service context and later production outcomes may differ.

Published / revision: **2026-07-01**. Practice: Project work before July publication; exact dates unknown. Checked: 2026-10-26. Format: Authored engineering case collection.

[Source record](sources.md#s02) · [Original source](https://www.datadoghq.com/blog/how-datadog-uses-ai-to-build-internal-software-delivery-tools-and-improve-system/)
