---
title: Robert C. Martin — comparison history
parent: Robert C. Martin
nav_order: 9
last_updated: '2026-10-26'
nav_exclude: true
---

# Comparison history

These fields and slide notes preceded the publication-window review on 26 October 2026. They are retained for traceability, not evidence of current AI practice. [Current evidence](recent-ai.md).

## Previous comparison fields

### C01 · Goal and bottleneck

The joint Robert/Justin Martin teaching outline proposes engineering discipline for agent work.

Public coauthored teaching description, not a measured universal bottleneck.

[Original supporting source](https://cleancoders.com/episode/agentic-discipline-1)

### C02 · Requirements and specification

The joint Robert/Justin Martin public outline proposes a higher-level source humans can review.

Public Robert/Justin Martin outline; paid demonstration not viewed. The reward contract is our adaptation.

[Original supporting source](https://cleancoders.com/episode/agentic-discipline-2)

### C03 · Increment and planning

2014 guidance separates test-first, refactoring and architectural feedback cycles.

Historical general practice, not a complete current internal agent cadence.

[Original supporting source](https://blog.cleancoder.com/uncle-bob/2014/12/17/TheCyclesOfTDD.html)

### C04 · Testing and verification

His June 2016 article advocates mutation testing to challenge assertions; coverage alone records execution.

Historical authored explanation. Missing requirements and equivalent mutants still limit confidence.

[Original supporting source](https://blog.cleancoder.com/uncle-bob/2016/06/10/MutationTesting.html)

### C05 · Design and refactoring

His 2012 architecture advice separates business policy from mechanisms through controlled dependencies.

2012 architecture advice, not a mandatory four-tier product or language.

[Original supporting source](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

### C06 · Human understanding and review

His 24 September 2026 interview-page account reports mostly above-code supervision, with occasional inspection.

Inspected first-person episode text, not a verified complete recording; not a universal no-source-reading policy or safety result.

[Original supporting source](https://www.aviator.co/podcast/uncle-bob-martin-ai-clean-code)

### C07 · Agent autonomy and coordination

His 24 September 2026 interview-page account reports moving away from his custom harness.

Earlier public multi-agent teaching and the published framework remain separate evidence; private current topology unknown.

[Original supporting source](https://www.aviator.co/podcast/uncle-bob-martin-ai-clean-code)

### C08 · Context and durable state

Pinned SwarmForge handoff documentation prescribes committed, structured work items.

Published artifact at pinned revision; not executed. Durable task records do not establish application persistence.

[Original supporting source](https://github.com/unclebob/swarm-forge/blob/f4f5fbcae0de6f7dcc26e82400334227647cfdb2/swarmforge/constitution/articles/handoffs.prompt)

### C09 · Tooling and environment

Pinned public SwarmForge documentation describes branch-specific products, not a verified current private stack.

Pinned artifact inspected. September terminal-use report is separately dated; installation and backends not tested.

[Original supporting source](https://github.com/unclebob/swarm-forge/blob/f4f5fbcae0de6f7dcc26e82400334227647cfdb2/README.md)

### C10 · Integration and release

Pinned SwarmForge documentation prescribes assigned checkouts and committed handoffs; full current integration/release policy is unknown.

Inspected workflow and handoff instructions (S11/S12), not an observed integration, deployment or rollback arrangement.

[Original supporting source](https://github.com/unclebob/swarm-forge/blob/f4f5fbcae0de6f7dcc26e82400334227647cfdb2/swarmforge/constitution/articles/workflow.prompt)

### C11 · Boundaries and safeguards

Pinned SwarmForge engineering instructions forbid fabricated metric substitutes and hand-edited mutation manifests.

Inspected prompt instructions do not establish filesystem permissions, enforcement completeness or security efficacy.

[Original supporting source](https://github.com/unclebob/swarm-forge/blob/f4f5fbcae0de6f7dcc26e82400334227647cfdb2/swarmforge/constitution/articles/engineering.prompt)

### C12 · Evaluation and tradeoffs

His 24 September 2026 interview-page account describes adjusting constraints after observing agent confusion.

Contextual personal judgment; no universal thresholds or controlled superiority established.

[Original supporting source](https://www.aviator.co/podcast/uncle-bob-martin-ai-clean-code)

## Previous slide notes

# Robert C. Martin — bite-sized ideas

Derived from the cache checked on 26 October 2026. Worked reward examples are suggested adaptations. Paid video descriptions establish teaching scope, not demonstrations observed in this research.

### Archived card 01

### A source to challenge

> **The human needs something better than a success message.**
>
> The joint Clean AI outline proposes a higher-level source document humans can review. The advertised cross-platform exercise was not watched here.

**In the wild:** Our reward contract says once per submission ID, including after restart.

**Takeaway:** Make intended behaviour inspectable before implementation.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#start-with-a-source-humans-can-review) · [Cached claim](index.md#c02)

---

### Archived card 02

### More than green

> **Running a line is not the same as testing its meaning.**
>
> Martin's 2016 mutation article distinguishes execution coverage from detection of a changed outcome. Missing requirements still need attention.

**In the wild:** Our suggested check forgets accepted IDs after restart and tests whether replay is wrongly rewarded.

**Takeaway:** Challenge the detector, not just its coverage report.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#challenge-assertions-rather-than-worship-coverage) · [Cached claim](index.md#c04)

---

### Archived card 03

### Behaviour and structure

> **“It works” leaves another engineering question open.**
>
> His 2014 TDD account separates fine test-first work, refactoring, and wider architectural feedback. Historical advice is not a verified current agent micro-cadence.

**In the wild:** Our exercise keeps replay semantics separate from an extraction that clarifies persistence.

**Takeaway:** Ask what changed and what should remain invariant.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#keep-test-first-design-separate-from-larger-feedback) · [Cached claim](index.md#c03)

---

### Archived card 04

### Policy and mechanism

> **The rule should not disappear inside the plumbing.**
>
> The historical Clean Architecture article separates business policy from external mechanisms. It does not require exactly four tiers.

**In the wild:** Our reviewer traces submission identity and the successful durable points update through the existing boundary.

**Takeaway:** Choose a seam that makes the important transition explainable.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#separate-policy-from-technical-mechanism) · [Cached claim](index.md#c05)

---

### Archived card 05

### An artifact is not a habit

> **A published swarm does not prove its author still uses it.**
>
> SwarmForge is an inspected public artifact. Martin's 24 September 2026 interview-page account describes moving away from his custom harness. Those records answer different questions.

**In the wild:** Compare a repository's documented design separately from a dated personal workflow.

**Takeaway:** Preserve chronology when comparing approaches.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#published-framework-is-not-a-current-personal-topology) · [Cached claim](index.md#c07)

---

### Archived card 06

### Instructions and enforcement

> **A rule against weakening a gate is not proof the gate is protected.**
>
> The published engineering prompt forbids invented metric substitutes and hand-edited mutation manifests. Its text alone does not establish enforcement completeness.

**In the wild:** Our proposed review includes changed assertions, fixtures, runner configuration, and metric tools.

**Takeaway:** Inspect the control surface as well as the instruction.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](tools.md#quality-tools-and-guardrails) · [Cached claim](index.md#c11)

---

### Archived card 07

### Handoff evidence

> **A finished conversation is not a durable work item.**
>
> The inspected handoff rules use committed structured work and explicit receive/complete steps. This is documented protocol, not verified execution.

**In the wild:** Our adaptation hands over the reviewed diff, contract, command results, and remaining gaps.

**Takeaway:** Make the next worker's starting point inspectable.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](research.md#tools-and-setup) · [Cached claim](index.md#c08)

---

### Archived card 08

### The missing observation

> **Read the balance before replay can repair the evidence.**
>
> Suggested adaptation: our shared task observes retained balance immediately after restart. Re-awarding A could otherwise conceal that the original reward was lost.

**In the wild:** 0 → A10 → replay A10 → restart/read10 → replay A10 → B20.

**Takeaway:** Test persistence and replay identity separately.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed evidence](workflow.md#fixed-task-and-assumptions) · [Cached workflow](workflow.md#5-challenge-the-checks)

---
