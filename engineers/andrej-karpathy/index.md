---
title: Andrej Karpathy
parent: Engineers
has_children: true
nav_order: 17
engineer_profile: true
cache_schema: 1
person_id: andrej-karpathy
canonical_name: Andrej Karpathy
aliases: []
practice_focus: mixed
focus_note: Conceptual AI systems and coding guidance are distinct; ML experiments do not establish a complete personal
  coding-agent policy.
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
last_updated: '2026-10-26'
last_read: null
status: unread
tagline: Give the loop a trustworthy question. Keep understanding.
summary: A mixed lens on verifiable feedback, context, and understandable artifacts. Published ML experiments and
  conceptual guidance remain distinct from undocumented private coding practice.
strengths:
- Verifiable feedback
- Inspectable artifacts
- Context and judgment
tools_summary: Pinned autoresearch instructions, microgpt and LLM Wiki were inspected; dated agent commentary is
  not a complete current private stack.
slides_url: /engineers/andrej-karpathy/learn/
dimensions:
- id: D01
  title: Goal and bottleneck
  position: Verifiable feedback makes repeated optimisation tractable.
  evidence: Stated
  claim: C01
  detail: research.md#approach-in-brief
  source: https://karpathy.bearblog.dev/verifiability/
  checked: '2026-10-26'
  qualification: November 2025 conceptual argument; not a universal coding-workflow performance result.
- id: D02
  title: Requirements and specification
  position: His endorsed April 2026 account keeps people responsible for specifications and oversight.
  evidence: Stated
  claim: C02
  detail: research.md#human-understanding-and-review
  source: https://karpathy.bearblog.dev/sequoia-ascent-2026/
  checked: '2026-10-26'
  qualification: AI-generated publication checked by Karpathy, not an independently verified raw transcript. Reward
    prompts are our adaptation.
- id: D03
  title: Increment and planning
  position: The 2019 ML recipe builds from inspected data and simple baselines through tested hypotheses.
  evidence: Stated
  claim: C03
  detail: research.md#establish-a-simple-baseline-before-adding-complexity
  source: https://karpathy.github.io/2019/04/25/recipe/
  checked: '2026-10-26'
  qualification: Historical neural-network guidance, not an established current private coding-agent cadence.
- id: D04
  title: Testing and verification
  position: Published ML instructions retain a baseline and exclude evaluator edits.
  evidence: Demonstrated
  claim: C04
  detail: research.md#what-the-public-artifacts-actually-show
  source: https://github.com/karpathy/autoresearch/blob/228791fb499afffb54b46200aca536f79142f117/program.md
  checked: '2026-10-26'
  qualification: 26 March 2026 instruction artifact inspected, not executed; not a universal unit-level TDD prescription.
- id: D05
  title: Design and refactoring
  position: microgpt demonstrates an inspectable educational implementation, not a universal product architecture.
  evidence: Demonstrated
  claim: C05
  detail: research.md#keep-the-artifact-small-enough-to-explain
  source: https://karpathy.github.io/2026/02/12/microgpt/
  checked: '2026-10-26'
  qualification: Article/code inspected, not executed; explanatory minimalism does not imply one-file production
    systems.
- id: D06
  title: Human understanding and review
  position: The endorsed April 2026 account retains human judgment and responsibility.
  evidence: Stated
  claim: C06
  detail: research.md#human-understanding-and-review
  source: https://karpathy.bearblog.dev/sequoia-ascent-2026/
  checked: '2026-10-26'
  qualification: AI-generated account checked by Karpathy; complete current review/approval checklist remains unknown.
- id: D07
  title: Agent autonomy and coordination
  position: The published autoresearch baseline gives one agent a bounded ML experiment.
  evidence: Demonstrated
  claim: C07
  detail: research.md#what-the-public-artifacts-actually-show
  source: https://github.com/karpathy/autoresearch/blob/228791fb499afffb54b46200aca536f79142f117/README.md
  checked: '2026-10-26'
  qualification: 26 March 2026 design inspected, not executed; neither a complete private workflow nor proof that autonomous loops are
    generally effective.
- id: D08
  title: Context and durable state
  position: The public LLM Wiki pattern separates sources, derived knowledge, and schema.
  evidence: Stated
  claim: C08
  detail: research.md#context-and-durable-state
  source: https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
  checked: '2026-10-26'
  qualification: Abstract pattern and stated preferences, not a verified private deployment; application persistence
    is a different concern.
- id: D09
  title: Tooling and environment
  position: December 2025 commentary endorses computer-local agent interaction and application-specific context.
  evidence: Stated
  claim: C09
  detail: research.md#tools-and-setup
  source: https://karpathy.bearblog.dev/year-in-review-2025/
  checked: '2026-10-26'
  qualification: Historical commentary; complete present private host/model/tools inventory is not established.
- id: D10
  title: Integration and release
  position: The April 2025 MenuGen account reports work beyond a local prototype into deployment.
  evidence: Stated
  claim: C10
  detail: research.md#tools-and-setup
  source: https://karpathy.bearblog.dev/vibe-coding-menugen/
  checked: '2026-10-26'
  qualification: One project report does not establish present CI, rollback, or production approval policy.
- id: D11
  title: Boundaries and safeguards
  position: Published ML instructions forbid changing the evaluator and adding dependencies.
  evidence: Demonstrated
  claim: C11
  detail: research.md#tools-and-setup
  source: https://github.com/karpathy/autoresearch/blob/228791fb499afffb54b46200aca536f79142f117/program.md
  checked: '2026-10-26'
  qualification: 26 March 2026 instructional boundary, not verified access enforcement; complete private permission policy remains
    unknown.
- id: D12
  title: Evaluation and tradeoffs
  position: Judge the observation boundary and simplicity as well as the measured outcome.
  evidence: Inferred
  claim: C12
  detail: research.md#failure-modes-and-limits
  source: https://karpathy.github.io/2019/04/25/recipe/
  checked: '2026-10-26'
  qualification: Our synthesis across ML guidance and artifact limits; a reward metric is not every product requirement
    and no universal comparative advantage is established.
---

# Andrej Karpathy

[Open slideshow]({{ '/engineers/andrej-karpathy/learn/' | relative_url }}) · [Compare profiles]({{ '/engineers/compare/' | relative_url }})

## Research map

[Detailed research](research.md) · [Common reward workflow](workflow.md) · [Source findings](sources.md) · [Slide notes](slides.md)

Research checked and cut off on **26 October 2026**. Mixed focus: coding guidance, ML experimentation and conceptual AI systems are related but distinct. Public artifacts were inspected, not executed. Private policies remain unknown.

## Comparison evidence

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated.** Verifiable feedback makes repeated optimisation tractable.

November 2025 conceptual argument; not a universal coding-workflow performance result.

[Cached detail](research.md#approach-in-brief) · [Primary source](https://karpathy.bearblog.dev/verifiability/)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Stated.** His endorsed April 2026 account keeps people responsible for specifications and oversight.

AI-generated publication checked by Karpathy, not an independently verified raw transcript. Reward prompts are our adaptation.

[Cached detail](research.md#human-understanding-and-review) · [Primary source](https://karpathy.bearblog.dev/sequoia-ascent-2026/)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Stated.** The 2019 ML recipe builds from inspected data and simple baselines through tested hypotheses.

Historical neural-network guidance, not an established current private coding-agent cadence.

[Cached detail](research.md#establish-a-simple-baseline-before-adding-complexity) · [Primary source](https://karpathy.github.io/2019/04/25/recipe/)

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Demonstrated.** Published ML instructions retain a baseline and exclude evaluator edits.

26 March 2026 instruction artifact inspected, not executed; not a universal unit-level TDD prescription.

[Cached detail](research.md#what-the-public-artifacts-actually-show) · [Primary source](https://github.com/karpathy/autoresearch/blob/228791fb499afffb54b46200aca536f79142f117/program.md)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Demonstrated.** microgpt demonstrates an inspectable educational implementation, not a universal product architecture.

Article/code inspected, not executed; explanatory minimalism does not imply one-file production systems.

[Cached detail](research.md#keep-the-artifact-small-enough-to-explain) · [Primary source](https://karpathy.github.io/2026/02/12/microgpt/)

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated.** The endorsed April 2026 account retains human judgment and responsibility.

AI-generated account checked by Karpathy; complete current review/approval checklist remains unknown.

[Cached detail](research.md#human-understanding-and-review) · [Primary source](https://karpathy.bearblog.dev/sequoia-ascent-2026/)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Demonstrated.** The published autoresearch baseline gives one agent a bounded ML experiment.

26 March 2026 design inspected, not executed; neither a complete private workflow nor proof that autonomous loops are generally effective.

[Cached detail](research.md#what-the-public-artifacts-actually-show) · [Primary source](https://github.com/karpathy/autoresearch/blob/228791fb499afffb54b46200aca536f79142f117/README.md)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Stated.** The public LLM Wiki pattern separates sources, derived knowledge, and schema.

Abstract pattern and stated preferences, not a verified private deployment; application persistence is a different concern.

[Cached detail](research.md#context-and-durable-state) · [Primary source](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Stated.** December 2025 commentary endorses computer-local agent interaction and application-specific context.

Historical commentary; complete present private host/model/tools inventory is not established.

[Cached detail](research.md#tools-and-setup) · [Primary source](https://karpathy.bearblog.dev/year-in-review-2025/)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Stated.** The April 2025 MenuGen account reports work beyond a local prototype into deployment.

One project report does not establish present CI, rollback, or production approval policy.

[Cached detail](research.md#tools-and-setup) · [Primary source](https://karpathy.bearblog.dev/vibe-coding-menugen/)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Demonstrated.** Published ML instructions forbid changing the evaluator and adding dependencies.

26 March 2026 instructional boundary, not verified access enforcement; complete private permission policy remains unknown.

[Cached detail](research.md#tools-and-setup) · [Primary source](https://github.com/karpathy/autoresearch/blob/228791fb499afffb54b46200aca536f79142f117/program.md)

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Inferred.** Judge the observation boundary and simplicity as well as the measured outcome.

Our synthesis across ML guidance and artifact limits; a reward metric is not every product requirement and no universal comparative advantage is established.

[Cached detail](research.md#failure-modes-and-limits) · [Primary source](https://karpathy.github.io/2019/04/25/recipe/)

