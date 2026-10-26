---
title: Dave Farley — comparison history
parent: Dave Farley
nav_order: 9
last_updated: '2026-10-26'
nav_exclude: true
---

# Comparison history

These fields and slide notes preceded the publication-window review on 26 October 2026. They are retained for traceability, not evidence of current AI practice. [Current evidence](recent-ai.md).

## Previous comparison fields

### C01 · Goal and bottleneck

Farley prioritises precise intent and verification, which he identifies as the bottleneck in agentic work.

S02: public first-person interview, checked 26 October 2026; a stated priority, not a measured universal bottleneck.

[Original supporting source](https://www.aviator.co/podcast/engineering-discipline-dave-farley)

### C02 · Requirements and specification

Human-owned executable examples define the acceptance contract.

S01/S03/S12: human ownership and executable examples are documented; the reward examples here are our adaptations.

[Original supporting source](https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe)

### C03 · Increment and planning

One scenario at a time: observe failure, implement, review, commit.

S01/S04: the incremental loop is stated; the exact worked scenario order in this cache is proposed guidance.

[Original supporting source](https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe)

### C04 · Testing and verification

Drive behaviour with human-owned failing acceptance examples; separate unit-level design feedback and challenge assertions with mutation testing.

S01/S05/S06/S07/S12: acceptance-first behaviour, unit-level design, and test quality are distinct concerns. Tool selection and boundaries in the reward exercise remain suggested adaptations.

[Original supporting source](https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe)

### C05 · Design and refactoring

Retain modularity, separation of concerns, testability, and refactoring.

S02: foundational design concerns remain important; the cache does not establish one mandatory architecture or refactoring tool.

[Original supporting source](https://www.aviator.co/podcast/engineering-discipline-dave-farley)

### C06 · Human understanding and review

Humans own intent; inspect code when risk warrants it.

S01: human intent ownership and risk-based code inspection. This does not establish that every generated line can safely go unread.

[Original supporting source](https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe)

### C07 · Agent autonomy and coordination

His 25 October 2026 proposal has agents implement within human-owned acceptance contracts; a complete personal orchestration setup is not established.

S01/S03: implementation against an acceptance contract is stated. Personal orchestration, model routing, and parallel-agent arrangements are not established.

[Original supporting source](https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe)

### C08 · Context and durable state

A complete personal context, memory, and handoff setup is not established.

The inspected public cache does not establish a complete personal memory or handoff setup. Unknown is not evidence of non-use.

### C09 · Tooling and environment

Official course plugin offers learn, build, and review. This does not establish his complete personal stack.

S08/S09/S10: official course commands are documented; the advertised score feature and separately maintained scoring implementation are not a complete personal stack. Repository revision was not captured; recheck before installation.

[Original supporting source](https://github.com/cd-training-courses/claude-skills)

### C10 · Integration and release

Small reversible changes, automated verification, and releasability.

S04/S07: continuous verification and releasability are documented. The proposed application pipeline is not Farley’s private configuration.

[Original supporting source](https://www.linkedin.com/pulse/continuous-delivery-matters-more-less-when-ai-loop-dave-farley-zidce)

### C11 · Boundaries and safeguards

Acceptance-test changes need human control.

S01: the human-controlled acceptance contract is stated. Permission and CI arrangements in the worked guide are suggested implementations of that concern.

[Original supporting source](https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe)

### C12 · Evaluation and tradeoffs

Assess behavioural confidence through acceptance evidence and mutation checks while retaining review and acknowledging untested requirements; universal productivity gains remain unestablished.

Inferred synthesis of S01/S02/S05: source recommendations concern verification and risk-based review; our limits include equivalent mutants, incomplete requirements, and lack of controlled cross-workflow outcome evidence. C12 retains its original universal-efficacy limitation.

[Original supporting source](https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe)

## Previous slide notes

# Dave Farley — bite-sized ideas

Derived from the cached research checked on 26 October 2026. Examples are suggested adaptations for Spellhaven or the [common reward task](neutral-example.md); they are not Farley demonstrations.

### Archived card 01

### The executable promise

> **A specification should be able to tell you it was broken.**
>
> Farley advocates human-approved executable examples to guide agent work. The acceptance contract gives a concrete result to check. It still needs to express the right requirement.

**In the wild:** A replayed spelling submission leaves the XP total unchanged.

**Takeaway:** Own the intended behaviour before delegating implementation.

[Optional practice: first lab](research.md#7-your-first-lab) · [Detailed research](research.md#1-the-techniques-and-what-each-contributes) · [Cached evidence](index.md#comparison-evidence)

---

### Archived card 02

### Four layers, one stable idea

> **Let the interface change without rewriting the intention.**
>
> His four-layer model separates scenarios, a domain language, protocol drivers, and the real system. Technical details belong below the behavioural example.

**In the wild:** “The learner has 50 XP” survives a change to a button label or API route.

**Takeaway:** Put technical coupling behind a driver.

[Optional practice: first lab](research.md#7-your-first-lab) · [Detailed research](research.md#2-the-four-layer-model-applied-to-spellhaven) · [Cached evidence](index.md#comparison-evidence)

---

### Archived card 03

### The size of a mistake

> **Small steps make being wrong cheaper.**
>
> Farley recommends one scenario at a time: observe a meaningful failure, implement, review, and commit. This is incremental discovery rather than an upfront specification of everything.

**In the wild:** Agree replay protection before asking the agent to build an entire reward economy.

**Takeaway:** Finish one observable increment.

[Optional practice: first lab](research.md#7-your-first-lab) · [Detailed research](research.md#3-a-step-by-step-session) · [Cached evidence](index.md#comparison-evidence)

---

### Archived card 04

### The moving finish line

> **A passing test means less if the agent rewrote the answer.**
>
> Farley calls for human control of acceptance tests. Reviewing changes can detect contract erosion; actual access controls are a separate concern.

**In the wild:** Changing expected XP from 50 to 60 hides the duplicate reward.

**Takeaway:** Treat an expectation change as a product decision.

[Optional practice: first lab](research.md#7-your-first-lab) · [Detailed research](research.md#5-protecting-the-contract-in-practice) · [Cached evidence](index.md#comparison-evidence)

---

### Archived card 05

### The green question

> **Would your test notice a plausible defect?**
>
> Farley recommends pairing acceptance tests with mutation testing. Surviving mutations need investigation; some reveal missing assertions, while others preserve equivalent behaviour.

**In the wild:** Temporarily remove duplicate protection and check that the reward scenario fails.

**Takeaway:** Challenge assertions, then investigate survivors.

[Optional practice: first lab](research.md#7-your-first-lab) · [Detailed research](research.md#3-a-step-by-step-session) · [Cached evidence](index.md#comparison-evidence)

---

### Archived card 06

### Guidance is not a gate

> **A course plugin can coach the agent. Your harness checks the result.**
>
> The official course plugin documents learn, build, and review commands. It supplies guidance, not an independent test runner. This does not establish Farley’s entire private tool stack.

**In the wild:** For Spellhaven, our guide suggests using its existing runner and a compatible mutation tool.

**Takeaway:** Separate documented tools from your own adaptations.

[Optional practice: first lab](research.md#7-your-first-lab) · [Detailed research](research.md#4-tools-what-is-official-and-what-is-a-suggested-choice) · [Cached evidence](index.md#comparison-evidence)

---

### Archived card 07

### Same problem, fairer comparison

> **Changing the task changes what you are comparing.**
>
> Our common reward exercise keeps the same outcomes for every engineer: 10 points once per submission ID, persistence across restart, and a new ID as a separate event. This is a suggested application of the cached principles, not a Farley demonstration.

**In the wild:** Replaying A leaves 10 points; restarting and replaying A still leaves 10; delivering B produces 20.

**Takeaway:** Agree the same observable outcomes before comparing workflows.

[Optional practice: common reward lab](neutral-example.md#proposed-sequence-from-inspection-to-integration) · [Shared task and assumptions](neutral-example.md#the-shared-requirement) · [Cached evidence](index.md#comparison-evidence)

---

### Archived card 08

### The restart that matters

> **A process-local memory can pass a replay test and still lose the rule.**
>
> In our suggested reward exercise, restart is part of the agreed contract. The check must observe retained application state after a real runtime restart. Clearing a test variable does not establish persistence.

**In the wild:** Suggested adaptation: A yields 10; a read after restart still shows 10; replaying A still leaves 10.

**Takeaway:** Verify the boundary the requirement actually crosses.

[Optional practice: common reward lab](neutral-example.md#proposed-sequence-from-inspection-to-integration) · [Layer and driver responsibilities](neutral-example.md#map-the-four-layers-without-prescribing-the-product-design) · [Detailed guide](research.md#3-a-step-by-step-session)

---
