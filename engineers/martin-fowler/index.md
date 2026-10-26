---
title: Martin Fowler
parent: Engineers
has_children: true
nav_order: 6
engineer_profile: true
cache_schema: 1
person_id: martin-fowler
canonical_name: Martin Fowler
aliases: []
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
last_updated: '2026-10-26'
last_read: null
status: unread
tagline: Understand the system. Improve the feedback. Keep it changeable.
summary: A context-sensitive view of agentic engineering that keeps humans responsible for code and its evolution.
  Historical testing, refactoring and integration principles inform the guide without becoming an invented personal
  agent workflow.
strengths:
- Changeability and cognitive load
- Workflow-sensitive evaluation
- Scenario-led understanding
tools_summary: Public context-interview trial; Pi/gptel interest is not a verified daily stack. Guest tool inventories
  stay with their authors.
slides_url: /engineers/martin-fowler/learn/
dimensions:
- id: D01
  title: Goal and bottleneck
  position: His August 2025 guidance asks for workflow and model details before accepting broad productivity conclusions.
  evidence: Stated
  claim: C01
  detail: research.md#approach-in-brief
  source: https://martinfowler.com/articles/202508-ai-thoughts.html
  checked: '2026-10-26'
  qualification: Historical 2025 methodological advice, not a measured universal advantage.
- id: D02
  title: Requirements and specification
  position: Start from concrete scenarios; use an interview to clarify context and assumptions.
  evidence: Stated
  claim: C02
  detail: research.md#start-with-scenarios-and-let-design-teach-you
  source: https://martinfowler.com/articles/convo-what-how.html
  checked: '2026-10-26'
  qualification: Scenario recommendation and context-interview trial are documented separately; reward prompts are
    our adaptation.
- id: D03
  title: Increment and planning
  position: His 2023 TDD explanation selects a next test and preserves refactoring; a current private agent cadence
    is not established.
  evidence: Stated
  claim: C03
  detail: research.md#test-and-refactor-as-design-work
  source: https://martinfowler.com/bliki/TestDrivenDevelopment.html
  checked: '2026-10-26'
  qualification: General 2023 TDD explanation must not be treated as a mandatory 2026 internal agent loop.
- id: D04
  title: Testing and verification
  position: Historical self-testing guidance advocates executable checks; his August 2025 account also warns that
    agent success claims can disagree with execution.
  evidence: Stated
  claim: C04
  detail: research.md#test-and-refactor-as-design-work
  source: https://martinfowler.com/bliki/SelfTestingCode.html
  checked: '2026-10-26'
  qualification: Combines historical self-testing guidance with the reported success-claim problem in S01; exact
    modern test stack unknown.
- id: D05
  title: Design and refactoring
  position: His general refactoring guidance uses small behaviour-preserving transformations to improve understanding
    and changeability.
  evidence: Stated
  claim: C05
  detail: research.md#test-and-refactor-as-design-work
  source: https://refactoring.com/
  checked: '2026-10-26'
  qualification: General engineering guidance; exact transformations and reward architecture are suggested adaptations.
- id: D06
  title: Human understanding and review
  position: Humans remain responsible for generated code and review code, tests and other feedback.
  evidence: Stated
  claim: C06
  detail: research.md#approach-in-brief
  source: https://martinfowler.com/bliki/AgenticEngineering.html
  checked: '2026-10-26'
  qualification: Conceptual agentic-engineering definition, not an observed complete private session.
- id: D07
  title: Agent autonomy and coordination
  position: A current personal multi-agent coordination or autonomy configuration is not established.
  evidence: Not established
  claim: C07
  detail: research.md#sources-and-research-gaps
  source: ''
  checked: '2026-10-26'
  qualification: Conceptual descriptions of terminal agents do not establish a personal swarm topology or unattended
    policy.
- id: D08
  title: Context and durable state
  position: May 2026 context-interview trials and March 2026 decision-record guidance provide ways to preserve understanding.
  evidence: Stated
  claim: C08
  detail: research.md#use-an-interview-to-build-context
  source: https://martinfowler.com/bliki/InterrogatoryLLM.html
  checked: '2026-10-26'
  qualification: S03 and S07 are documented techniques; a private automatic memory/handoff configuration is not
    established.
- id: D09
  title: Tooling and environment
  position: Pi and gptel were expressed interests in January 2026, not a verified daily agent stack.
  evidence: Stated
  claim: C09
  detail: research.md#tools-and-setup
  source: https://martinfowler.com/fragments/2026-01-08.html
  checked: '2026-10-26'
  qualification: Do not convert curated guest reports or tool interest into current personal adoption.
- id: D10
  title: Integration and release
  position: His 2024 CI guidance favours frequent verified mainline integration; release remains a separate decision.
  evidence: Stated
  claim: C10
  detail: research.md#a-feature-from-idea-to-release
  source: https://martinfowler.com/articles/continuousIntegration.html
  checked: '2026-10-26'
  qualification: General team practice; current private CI provider and agent deployment rights are unknown.
- id: D11
  title: Boundaries and safeguards
  position: His August 2025 article raises injection concerns while explicitly crediting Willison’s analysis; an
    implemented personal sandbox is not established.
  evidence: Stated
  claim: C11
  detail: research.md#failure-modes-and-limits
  source: https://martinfowler.com/articles/202508-ai-thoughts.html
  checked: '2026-10-26'
  qualification: This is a security concern, not proof of an implemented personal sandbox or permission policy.
- id: D12
  title: Evaluation and tradeoffs
  position: Treat practices as context-sensitive defaults and evaluate evidence at the workflow level.
  evidence: Stated
  claim: C12
  detail: research.md#treat-conventions-as-defaults-with-reasons
  source: https://martinfowler.com/bliki/SensibleDefault.html
  checked: '2026-10-26'
  qualification: General sensible-default framing; a universal comparative productivity result is not established.
---

# Martin Fowler

[Open the slideshow]({{ '/engineers/martin-fowler/learn/' | relative_url }}) · [Compare cached profiles]({{ '/engineers/compare/' | relative_url }})

## Research map

[Detailed guide](research.md) · [Common reward workflow](workflow.md) · [Source findings](sources.md) · [Slide notes](slides.md)

Research checked and cut off on **26 October 2026**. Historical principles, current recommendations, self-reported trials and our proposed reward implementation are distinct. A complete private tool, orchestration, or permission setup is not established.

## Comparison evidence

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated.** His August 2025 guidance asks for workflow and model details before accepting broad productivity conclusions.

Historical 2025 methodological advice, not a measured universal advantage.

[Cached detail](research.md#approach-in-brief) · [Primary source](https://martinfowler.com/articles/202508-ai-thoughts.html)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Stated.** Start from concrete scenarios; use an interview to clarify context and assumptions.

Scenario recommendation and context-interview trial are documented separately; reward prompts are our adaptation.

[Detail](research.md#start-with-scenarios-and-let-design-teach-you) · [Scenario source](sources.md#s10) · [Interview source](sources.md#s03)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Stated.** His 2023 TDD explanation selects a next test and preserves refactoring; a current private agent cadence is not established.

General 2023 TDD explanation must not be treated as a mandatory 2026 internal agent loop.

[Cached detail](research.md#test-and-refactor-as-design-work) · [Primary source](https://martinfowler.com/bliki/TestDrivenDevelopment.html)

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Stated.** Historical self-testing guidance advocates executable checks; his August 2025 account also warns that agent success claims can disagree with execution.

Combines historical self-testing guidance with the reported success-claim problem in S01; exact modern test stack unknown.

[Cached detail](research.md#test-and-refactor-as-design-work) · [Primary source](https://martinfowler.com/bliki/SelfTestingCode.html)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Stated.** His general refactoring guidance uses small behaviour-preserving transformations to improve understanding and changeability.

General engineering guidance; exact transformations and reward architecture are suggested adaptations.

[Cached detail](research.md#test-and-refactor-as-design-work) · [Primary source](https://refactoring.com/)

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated.** Humans remain responsible for generated code and review code, tests and other feedback.

Conceptual agentic-engineering definition, not an observed complete private session.

[Detail](research.md#approach-in-brief) · [Source finding](sources.md#s02)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Not established.** A current personal multi-agent coordination or autonomy configuration is not established.

Conceptual descriptions of terminal agents do not establish a personal swarm topology or unattended policy.

[Detail](research.md#sources-and-research-gaps) · [Research gaps](research.md#sources-and-research-gaps)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Stated.** May 2026 context-interview trials and March 2026 decision-record guidance provide ways to preserve understanding.

S03 and S07 are documented techniques; a private automatic memory/handoff configuration is not established.

[Cached detail](research.md#use-an-interview-to-build-context) · [Primary source](https://martinfowler.com/bliki/InterrogatoryLLM.html)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Stated.** Pi and gptel were expressed interests in January 2026, not a verified daily agent stack.

Do not convert curated guest reports or tool interest into current personal adoption.

[Detail](research.md#tools-and-setup) · [Source finding](sources.md#s09)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Stated.** His 2024 CI guidance favours frequent verified mainline integration; release remains a separate decision.

General team practice; current private CI provider and agent deployment rights are unknown.

[Cached detail](research.md#a-feature-from-idea-to-release) · [Primary source](https://martinfowler.com/articles/continuousIntegration.html)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Stated.** His August 2025 article raises injection concerns while explicitly crediting Willison’s analysis; an implemented personal sandbox is not established.

This is a security concern, not proof of an implemented personal sandbox or permission policy.

[Cached detail](research.md#failure-modes-and-limits) · [Primary source](https://martinfowler.com/articles/202508-ai-thoughts.html)

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Stated.** Treat practices as context-sensitive defaults and evaluate evidence at the workflow level.

General sensible-default framing; a universal comparative productivity result is not established.

[Detail](research.md#treat-conventions-as-defaults-with-reasons) · [Default framing](sources.md#s08) · [Workflow-sensitive evaluation](sources.md#s01)
