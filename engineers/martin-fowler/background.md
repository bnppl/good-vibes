---
title: Martin Fowler — comparison history
parent: Martin Fowler
nav_order: 9
last_updated: '2026-10-26'
nav_exclude: true
---

# Comparison history

These fields and slide notes preceded the publication-window review on 26 October 2026. They are retained for traceability, not evidence of current AI practice. [Current evidence](recent-ai.md).

## Previous comparison fields

### C01 · Goal and bottleneck

His August 2025 guidance asks for workflow and model details before accepting broad productivity conclusions.

Historical 2025 methodological advice, not a measured universal advantage.

[Original supporting source](https://martinfowler.com/articles/202508-ai-thoughts.html)

### C02 · Requirements and specification

Start from concrete scenarios; use an interview to clarify context and assumptions.

Scenario recommendation and context-interview trial are documented separately; reward prompts are our adaptation.

[Original supporting source](https://martinfowler.com/articles/convo-what-how.html)

### C03 · Increment and planning

His 2023 TDD explanation selects a next test and preserves refactoring; a current private agent cadence is not established.

General 2023 TDD explanation must not be treated as a mandatory 2026 internal agent loop.

[Original supporting source](https://martinfowler.com/bliki/TestDrivenDevelopment.html)

### C04 · Testing and verification

Historical self-testing guidance advocates executable checks; his August 2025 account also warns that agent success claims can disagree with execution.

Combines historical self-testing guidance with the reported success-claim problem in S01; exact modern test stack unknown.

[Original supporting source](https://martinfowler.com/bliki/SelfTestingCode.html)

### C05 · Design and refactoring

His general refactoring guidance uses small behaviour-preserving transformations to improve understanding and changeability.

General engineering guidance; exact transformations and reward architecture are suggested adaptations.

[Original supporting source](https://refactoring.com/)

### C06 · Human understanding and review

Humans remain responsible for generated code and review code, tests and other feedback.

Conceptual agentic-engineering definition, not an observed complete private session.

[Original supporting source](https://martinfowler.com/bliki/AgenticEngineering.html)

### C07 · Agent autonomy and coordination

A current personal multi-agent coordination or autonomy configuration is not established.

Conceptual descriptions of terminal agents do not establish a personal swarm topology or unattended policy.

### C08 · Context and durable state

May 2026 context-interview trials and March 2026 decision-record guidance provide ways to preserve understanding.

S03 and S07 are documented techniques; a private automatic memory/handoff configuration is not established.

[Original supporting source](https://martinfowler.com/bliki/InterrogatoryLLM.html)

### C09 · Tooling and environment

Pi and gptel were expressed interests in January 2026, not a verified daily agent stack.

Do not convert curated guest reports or tool interest into current personal adoption.

[Original supporting source](https://martinfowler.com/fragments/2026-01-08.html)

### C10 · Integration and release

His 2024 CI guidance favours frequent verified mainline integration; release remains a separate decision.

General team practice; current private CI provider and agent deployment rights are unknown.

[Original supporting source](https://martinfowler.com/articles/continuousIntegration.html)

### C11 · Boundaries and safeguards

His August 2025 article raises injection concerns while explicitly crediting Willison’s analysis; an implemented personal sandbox is not established.

This is a security concern, not proof of an implemented personal sandbox or permission policy.

[Original supporting source](https://martinfowler.com/articles/202508-ai-thoughts.html)

### C12 · Evaluation and tradeoffs

Treat practices as context-sensitive defaults and evaluate evidence at the workflow level.

General sensible-default framing; a universal comparative productivity result is not established.

[Original supporting source](https://martinfowler.com/bliki/SensibleDefault.html)

## Previous slide notes

# Martin Fowler — bite-sized ideas

Derived from the research cache checked on 26 October 2026. Reward examples are suggested adaptations, not demonstrations of Fowler implementing the feature.

### Archived card 01

### Keep the code in view

> **Delegating the typing does not delegate responsibility.**
>
> Fowler describes agentic engineering as work where people still care about generated code, its structure, and the feedback around it. This is a conceptual recommendation, not a complete private workflow.

**In the wild:** Review the reward path and executed checks before accepting an agent’s success report.

**Takeaway:** Keep a human accountable for what the software does and how it works.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed research](research.md#approach-in-brief) · [Cached evidence](index.md#c06)

---

### Archived card 02

### Let the model ask

> **The missing context may be an unanswered question.**
>
> His interrogatory-LLM entry describes interviews that create or review context documents. He credits Harper Reed and reports that his own trial needed reminders about one-question pacing.

**In the wild:** Ask what “successful award” means before assuming how restart persistence works.

**Takeaway:** Review the generated context report against the answers.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed research](research.md#use-an-interview-to-build-context) · [Cached evidence](index.md#c08)

---

### Archived card 03

### Concrete before abstract

> **A scenario can expose what a diagram hides.**
>
> In a multi-person conversation, Fowler’s own contributions favour concrete scenarios and domain-familiar abstractions. Do not assign every speaker’s claims to him.

**In the wild:** Walk through first A, replay A, restart, and new B before choosing a reward design.

**Takeaway:** Let observed cases sharpen the model.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed research](research.md#start-with-scenarios-and-let-design-teach-you) · [Cached evidence](index.md#c02)

---

### Archived card 04

### A smaller transformation

> **A large rewrite is not automatically a refactoring.**
>
> Fowler’s public refactoring introduction describes small behaviour-preserving transformations. Improving structure before or after a feature should leave observable behaviour intact.

**In the wild:** Separate an extraction that clarifies storage access from a change to replay semantics.

**Takeaway:** Show what stayed the same as well as what became clearer.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed research](research.md#test-and-refactor-as-design-work) · [Cached evidence](index.md#c05)

---

### Archived card 05

### Read the test result

> **“All green” is a claim until the checks run.**
>
> The cached material combines historical self-testing-code guidance with Fowler’s reported experience of agent success claims disagreeing with execution. Neither establishes a flawless modern test policy.

**In the wild:** Inspect the actual balance checks and their output instead of accepting the final summary.

**Takeaway:** Observe the evidence the report is supposed to describe.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed research](research.md#test-and-refactor-as-design-work) · [Cached evidence](index.md#c04)

---

### Archived card 06

### Read the byline

> **The host of a website is not the author of every method on it.**
>
> The maintainability-sensors article on Fowler’s site is authored by Birgitta Böckeler. Its experiments and tool inventory belong to her account. Fowler’s own related commentary is separate evidence.

**In the wild:** A source comparison must not give two people the same private stack because both appear on one site.

**Takeaway:** Check authorship before assigning a workflow.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed research](research.md#tools-and-setup) · [Cached evidence](sources.md#s13)

---

### Archived card 07

### A reason to deviate

> **A sensible default starts a decision. It does not finish it.**
>
> Fowler describes defaults as known starting practices that can be overridden when context gives a good reason. This is general guidance, not a validated agent-productivity ranking.

**In the wild:** Begin with the existing runner; explain a change if it cannot observe the required restart boundary.

**Takeaway:** Make the reason for an exception inspectable.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed research](research.md#treat-conventions-as-defaults-with-reasons) · [Cached evidence](index.md#c12)

---

### Archived card 08

### The invisible re-award

> **Restart plus replay can hide a lost reward.**
>
> Suggested adaptation: our common exercise reads balance immediately after restart, before replaying A. Otherwise losing all state and awarding A again could still produce the expected 10.

**In the wild:** Baseline 0 → A10 → replay A10 → restart/read10 → replay A10 → B20.

**Takeaway:** Observe persistence and duplicate protection separately.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed research](workflow.md#shared-task-and-assumptions) · [Cached evidence](workflow.md#step-7--inspect-integration-and-release-readiness)

---
