---
title: Cloudflare — research
parent: Cloudflare
nav_order: 1
last_updated: '2026-10-26'
research_checked: '2026-10-26'
research_cutoff: '2026-10-26'
evidence_since: '2025-10-01'
last_read: null
status: unread
cache_schema: 1
---

# Cloudflare — detailed AI-assisted development research

[Research](research.md) · [Sources](sources.md) · [Workflow and optional practice](workflow.md) · [Slide notes](slides.md) · [Slideshow]({{ '/companies/cloudflare/learn/' | relative_url }})

## Scope and dates

Internal AI code review, design review and the supporting platform; implementation and deployment policies are not assumed from review automation. Window: **1 October 2025–26 October 2026**. Sources and practice periods differ; a later article may discuss earlier work. The findings below are cached from public authored accounts checked on 2026-10-26. No private environment, paid recording or runtime experiment was inspected.

## Documented cases

### Platform, context and enforcement are different jobs

**Reported company use · 2026-04-20.** The internal-stack account is useful because it separates infrastructure concerns rather than attributing the whole workflow to a model. Its reported usage is evidence of adoption, not a measure of completed useful work. Roadmap language in this publication must not be promoted into deployed capability.

[Original account](https://blog.cloudflare.com/internal-ai-engineering-stack/) · [Cached findings](sources.md#s01)

### A standard can be approved before it blocks

**Reported company use · 2026-08-04.** The standards account gives governance an explicit lifecycle. That makes the authority of a finding inspectable: a newly accepted rule and a blocking requirement are not interchangeable. For readers, this is a concrete example of separating policy publication from enforcement.

[Original account](https://blog.cloudflare.com/engineering-standards-enforcement/) · [Cached findings](sources.md#s02)

### A reviewer is a system that can fail

**Reported team use · 2026-04-20.** The review article discusses orchestration, repeated reviews and operational failure handling. It also admits that diff-based review has boundaries. The important lesson for comparison is not how many agents it spawns, but how the combined output is controlled and what still requires human context.

[Original account](https://blog.cloudflare.com/ai-code-review/) · [Cached findings](sources.md#s03)

## A concrete failure boundary

The review account describes why a generic diff prompt was too noisy. The later standards account separates approved advisory requirements from enforced mandatory requirements, and provides linters where checks can be mechanical. [S02](sources.md#s02) · [S03](sources.md#s03)

Our reading: decide what an automated finding is allowed to do before optimizing how eloquently it explains itself. Detection, severity, policy authority and enforcement are separate decisions. A model can help locate a concern while a deterministic check owns the gate. An advisory design critique should not accidentally acquire the authority of a required CI invariant.

## What to compare, and what to avoid

Cloudflare’s Engineering Codex is its own internal guidance corpus; it must not be confused with an OpenAI product. These sources establish concrete internal review work, not an end-to-end test-first or release workflow. Aggregate findings can include false positives and do not measure defects prevented. Pingora and other public projects do not make the private standards or review deployment public.

These are accounts of engineering work, not a score for the whole organisation. Adoption rates, generated changes and a reported successful case have different denominators. A review mechanism observes different failures from a running test. A merge is different from a deployed change. When transferring a technique, identify which of those observations you can reproduce independently.

## Open-source background

| Context | Existing public entry point |
|---|---|
| Public engineering / open-source entry point | [Pingora](https://github.com/cloudflare/pingora) |

The public project is an entry point for studying engineering artifacts. It does not make every internal system public, establish current maintenance status or prove that the reported AI workflow produced its code. Check the actual component licence and governance before reuse.

## Comparison claims

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated · Reported team use.** The review system targets waiting time and noisy feedback.

A review bottleneck, not evidence that coding itself is always fast enough.

Source format: Authored engineering article. Published: **2026-04-20**. Practice: Reported review runs from 2026-03-10 through 2026-04-09. Checked: 2026-10-26.

[Primary source](https://blog.cloudflare.com/ai-code-review/) · [Source register](sources.md#s03)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Stated · Reported company use.** Specifications receive checks against relevant governed standards.

This establishes design review, not automatic requirements ownership.

Source format: Authored engineering article. Published: **2026-08-04**. Practice: Codex usage and review activity during 2026 before publication. Checked: 2026-10-26.

[Primary source](https://blog.cloudflare.com/engineering-standards-enforcement/) · [Source register](sources.md#s02)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Not established · Not established.** An eligible recent AI-specific increment and planning policy is not established in these sources.

This bounded gap does not imply absence of the practice. The inspected case cannot supply a complete company policy.

Source format: Not established. Published: **Not established**. Practice: Not established. Checked: 2026-10-26.

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Not established · Not established.** An eligible recent AI-specific testing and verification policy is not established in these sources.

This bounded gap does not imply absence of the practice. The inspected case cannot supply a complete company policy.

Source format: Not established. Published: **Not established**. Practice: Not established. Checked: 2026-10-26.

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Stated · Reported company use.** Architecture-related standards inform pre-implementation review.

The source does not establish a universal refactoring cadence or architecture.

Source format: Authored engineering article. Published: **2026-08-04**. Practice: Codex usage and review activity during 2026 before publication. Checked: 2026-10-26.

[Primary source](https://blog.cloudflare.com/engineering-standards-enforcement/) · [Source register](sources.md#s02)

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated · Reported team use.** Humans remain necessary for architectural and cross-system judgment.

A stated limitation of the reviewer; no exact mandatory review checklist is inferred.

Source format: Authored engineering article. Published: **2026-04-20**. Practice: Reported review runs from 2026-03-10 through 2026-04-09. Checked: 2026-10-26.

[Primary source](https://blog.cloudflare.com/ai-code-review/) · [Source register](sources.md#s03)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Stated · Reported team use.** A coordinator combines bounded specialist review sessions.

Reviewer orchestration is not a fleet of autonomous implementation agents.

Source format: Authored engineering article. Published: **2026-04-20**. Practice: Reported review runs from 2026-03-10 through 2026-04-09. Checked: 2026-10-26.

[Primary source](https://blog.cloudflare.com/ai-code-review/) · [Source register](sources.md#s03)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Stated · Reported company use.** Repository context and organisational knowledge have separate layers.

A dated platform account, not proof that all context is always fresh.

Source format: Authored engineering article. Published: **2026-04-20**. Practice: Retrospective of eleven months, plus usage at publication. Checked: 2026-10-26.

[Primary source](https://blog.cloudflare.com/internal-ai-engineering-stack/) · [Source register](sources.md#s01)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Stated · Reported company use.** Shared access and routing support multiple coding tools.

No single model or tool is inferred as mandatory for every developer.

Source format: Authored engineering article. Published: **2026-04-20**. Practice: Retrospective of eleven months, plus usage at publication. Checked: 2026-10-26.

[Primary source](https://blog.cloudflare.com/internal-ai-engineering-stack/) · [Source register](sources.md#s01)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Stated · Reported company use.** Enforced mandatory standards can block merge approval.

This is a code-review gate, not production deployment or rollback authority.

Source format: Authored engineering article. Published: **2026-08-04**. Practice: Codex usage and review activity during 2026 before publication. Checked: 2026-10-26.

[Primary source](https://blog.cloudflare.com/engineering-standards-enforcement/) · [Source register](sources.md#s02)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Stated · Reported company use.** Access and gateway layers centralize credentials and policy.

Reported infrastructure controls; no private permissions audit was performed.

Source format: Authored engineering article. Published: **2026-04-20**. Practice: Retrospective of eleven months, plus usage at publication. Checked: 2026-10-26.

[Primary source](https://blog.cloudflare.com/internal-ai-engineering-stack/) · [Source register](sources.md#s01)

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Stated · Reported team use.** Review cost and noise are tracked alongside limitations.

Company telemetry is not a controlled quality or productivity study.

Source format: Authored engineering article. Published: **2026-04-20**. Practice: Reported review runs from 2026-03-10 through 2026-04-09. Checked: 2026-10-26.

[Primary source](https://blog.cloudflare.com/ai-code-review/) · [Source register](sources.md#s03)

## First practical lab

Use the [optional practice](workflow.md#optional-practice) to test the observation boundaries in a small setting. Keep your own decisions and results separate from the company account. A useful unsuccessful run is one that exposes the missing input or check; do not rewrite its record into a success.
