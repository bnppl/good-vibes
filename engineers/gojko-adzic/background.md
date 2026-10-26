---
title: Gojko Adžić — comparison history
parent: Gojko Adžić
nav_order: 9
last_updated: '2026-10-26'
nav_exclude: true
---

# Comparison history

These fields and slide notes preceded the publication-window review on 26 October 2026. They are retained for traceability, not evidence of current AI practice. [Current evidence](recent-ai.md).

## Previous comparison fields

### C01 · Goal and bottleneck

Make product decisions and human review effective as code production accelerates.

Advocacy and a product-role forecast; not a measured universal bottleneck for every team.

[Original supporting source](https://gojko.net/slides/202609-gotocph.pdf)

### C02 · Requirements and specification

His September 2025 Spec Kit trial favours inspectable decisions and finer scope; the October 2026 public factory supplies an approvable planning format.

Early Spec Kit findings are from September 2025; the later repository supplies a replaceable planning format.

[Original supporting source](https://www.linkedin.com/pulse/spec-driven-development-revenge-waterfall-bdd-taken-gojko-adzic-imquf)

### C03 · Increment and planning

The inspected October 2026 factory workflow declares writable-file steps and green groups, with human phase/dependency approval.

Demonstrated means an inspected published artifact, not an executed session. The sample targets larger changes but permits small tasks.

[Original supporting source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/WORKFLOW.md)

### C04 · Testing and verification

The inspected factory artifact assigns worker-local checks, merged-work gates, and a final attempt to refute completion claims.

Inspected artifact; test strength and real behaviour still need independent evaluation in the target system.

[Original supporting source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/ORCHESTRATOR.md)

### C05 · Design and refactoring

His 2016 test-design advice organises documentation by function and avoids unnecessary test-execution coupling.

Historical test-design advice. No universal architecture or exact agent refactoring cadence is established.

[Original supporting source](https://gojko.net/favourites/testing/agile/2016/05/24/large-test-suites.html)

### C06 · Human understanding and review

Keep consequential decisions visible and humans supervising throughout, rather than only inspecting the final result.

A direction for supervision, not permission to discard all code review for every change.

[Original supporting source](https://gojko.net/slides/202609-gotocph.pdf)

### C07 · Agent autonomy and coordination

The inspected October 2026 factory documentation describes deterministic scheduling of worker, gate and check roles from an approved plan.

Public boilerplate based on Votito, not a complete current private team configuration; no universal agent-count recommendation.

[Original supporting source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/ORCHESTRATOR.md)

### C08 · Context and durable state

The inspected public workflow retains versioned plans and structured progress; generated execution scripts are disposable.

Project-state convention, not proof that every kind of learning or context is retained automatically.

[Original supporting source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/WORKFLOW.md)

### C09 · Tooling and environment

The public factory at its pinned October 2026 revision documents Docker/make and Claude Code impact-analysis, planning and execution commands.

Documentation inspected at a pinned revision. Installation and feature availability were not runtime-tested.

[Original supporting source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/GETTING-STARTED.md)

### C10 · Integration and release

Published factory guidance places fast group gates before a broader final check; builds, tests and deployment checks must fit the target project.

The sample is not a published end-to-end production deployment pipeline; exact private branch and rollback policies are unknown.

[Original supporting source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/ORCHESTRATOR.md)

### C11 · Boundaries and safeguards

The public artifact documents role-scoped Bash regulation, edit-time lint and a container; runtime enforcement and isolation were not audited.

Hook scope is limited. A prompt or hook is not a comprehensive security boundary, and invoked program internals can escape its inspection.

[Original supporting source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/REGULATOR.md)

### C12 · Evaluation and tradeoffs

Inspect outcomes, run cost and feedback quality; reported factory savings do not establish superiority over other workflows.

Our evidence assessment. Repository self-reports and historical survey correlations are not a controlled cross-engineer trial.

[Original supporting source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/README.md)

## Previous slide notes

# Gojko Adžić — bite-sized ideas

Derived from cached research checked on 26 October 2026. Examples explicitly marked as adaptations are our proposals. Artifact inspection does not establish runtime effectiveness.

### Archived card 01

### The unrequested product

> **Correct code can still answer the wrong question.**
>
> Adžić’s product essay argues that easier technical production leaves customer understanding and prioritisation essential. Its future-role claims are predictions, not measured outcomes.

**In the wild:** Suggested adaptation: replay protection works perfectly, but nobody agreed whether that practice attempt should earn a reward.

**Takeaway:** Verify the product decision as well as its implementation.

[Optional practice: first lab](workflow.md#first-lab) · [Detailed evidence](research.md#approach-in-brief) · [Cached claims](index.md#comparison-evidence)

---

### Archived card 02

### Readable is not precise

> **A document can look like a specification and still hide the rule.**
>
> In his 2025 Spec Kit trial, Adžić found editable decisions helpful but the generated requirements too broad. That is a dated tool experiment, not a verdict on every current spec workflow.

**In the wild:** Suggested adaptation: “prevent duplicate rewards” leaves “same submission” undefined.

**Takeaway:** Approve concrete examples, not just a polished document.

[Optional practice: first lab](workflow.md#first-lab) · [Detailed evidence](research.md#requirements-and-scope) · [Cached claims](index.md#comparison-evidence)

---

### Archived card 03

### Plans and increments

> **An epic-sized plan need not be one giant implementation step.**
>
> The public factory workflow breaks plans into declared-file steps and groups. Humans review phases and dependencies. Its planning scope and its verification increments are different things.

**In the wild:** Suggested adaptation: plan the persistence change, then verify first delivery, replay and restart as distinct observations.

**Takeaway:** Compare workflows at the same level of detail.

[Optional practice: first lab](workflow.md#first-lab) · [Detailed evidence](research.md#increment-and-planning) · [Cached claims](index.md#comparison-evidence)

---

### Archived card 04

### The merged result

> **Three green workers do not prove one green system.**
>
> The published orchestrator separates worker-local checks, merged-tree gates and a final check of completion claims. We inspected the artifact; we did not execute or benchmark it.

**In the wild:** Suggested adaptation: reward logic and storage tests pass separately, but only the combined app can show durable replay protection.

**Takeaway:** Keep someone responsible for integrated evidence.

[Optional practice: first lab](workflow.md#first-lab) · [Detailed evidence](research.md#testing-and-verification) · [Cached claims](index.md#comparison-evidence)

---

### Archived card 05

### Repeated feedback

> **The tenth reminder might deserve a tool.**
>
> The public factory uses edit-time ESLint feedback as one way to encode recurring checks. Its example rules cover specific file types and mistakes, not every design or behaviour.

**In the wild:** Suggested adaptation: a recurring import convention may be checkable; durable reward correctness still needs a behavioural test.

**Takeaway:** Automate the check you can actually observe.

[Optional practice: first lab](workflow.md#first-lab) · [Detailed evidence](tools.md#controls-and-their-limits) · [Cached claims](index.md#comparison-evidence)

---

### Archived card 06

### The scope of a guardrail

> **A command hook cannot see every action inside an allowed program.**
>
> The regulator documents role-specific Bash decisions and useful correction messages. It also states that an allowed make recipe runs beyond the hook’s direct inspection.

**In the wild:** Suggested adaptation: accepting a gate command is not the same as independently auditing every action it invokes.

**Takeaway:** Name what a control covers and what it leaves open.

[Optional practice: first lab](workflow.md#first-lab) · [Detailed evidence](tools.md#controls-and-their-limits) · [Cached claims](index.md#comparison-evidence)

---

### Archived card 07

### The revealing pause

> **Read after restart before you replay the request.**
>
> In our shared reward exercise, a lost reward could be re-awarded by replay, producing the expected total for the wrong reason. The intermediate observation exposes that mistake. This is our adaptation, not an Adžić demonstration.

**In the wild:** Baseline 0 → A gives 10 → replay A stays 10 → restart/read gives 10 → replay A stays 10 → B gives 20.

**Takeaway:** Keep the same distinct observations across comparisons.

[Optional practice: first lab](workflow.md#first-lab) · [Detailed evidence](workflow.md#the-shared-contract) · [Cached claims](index.md#comparison-evidence)

---

### Archived card 08

### The historical tool trap

> **A tool someone tried once is not their permanent method.**
>
> This cache separates the 2025 Spec Kit experiment, older testing advice, and the pinned 2026 factory artifact. Neither a tool mention nor an inspected repository establishes a complete private stack.

**In the wild:** Suggested adaptation: compare the purpose and dated evidence behind a command, rather than assigning a person a permanent tool identity.

**Takeaway:** Carry dates, ownership and evidence limits into the comparison.

[Optional practice: first lab](workflow.md#first-lab) · [Detailed evidence](research.md#comparison-profile) · [Cached claims](index.md#comparison-evidence)

---
