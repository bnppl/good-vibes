---
title: Kent Beck — comparison history
parent: Kent Beck
nav_order: 9
last_updated: '2026-10-26'
nav_exclude: true
---

# Comparison history

These fields and slide notes preceded the publication-window review on 26 October 2026. They are retained for traceability, not evidence of current AI practice. [Current evidence](recent-ai.md).

## Previous comparison fields

### C01 · Goal and bottleneck

Useful behaviour, future flexibility, and human needs matter beyond generated volume.

Synthesis across dated design and AI material; not a named Beck metric.

[Original supporting source](https://newsletter.kentbeck.com/p/genie-tarpit)

### C02 · Requirements and specification

The published June 2025 workflow uses a next-test plan.

Historical project instructions; not a universal requirements format.

[Original supporting source](https://newsletter.kentbeck.com/p/augmented-coding-beyond-the-vibes)

### C03 · Increment and planning

Small increments; an October 2026 public teaser proposes fixing feedback-loop time and flexing scope.

October paid body was not accessed; no universal time target inferred.

[Original supporting source](https://newsletter.kentbeck.com/p/thinkie-fix-time-flex-scope)

### C04 · Testing and verification

BPlusTree3 documents test-first work and validation against reference implementations.

Repository prescription; tests and benchmarks were not run in this research.

[Original supporting source](https://github.com/KentBeck/BPlusTree3)

### C05 · Design and refactoring

Keep structure and behaviour changes distinguishable; judge when tidying pays off.

Timing is contextual, not a mandate to refactor before every change.

[Original supporting source](https://newsletter.kentbeck.com/p/distinctions-with-a-difference)

### C06 · Human understanding and review

In his June 2025 augmented-coding account, Beck reports inspecting design and intervening when generation goes off course.

June self-report; complete current review policy is not established.

[Original supporting source](https://newsletter.kentbeck.com/p/augmented-coding-beyond-the-vibes)

### C07 · Agent autonomy and coordination

His April 2026 Intent session reports coordination burden and argues for desired outcomes rather than managing agents for its own sake.

April self-report about Intent; not evidence that all parallel work fails.

[Original supporting source](https://newsletter.kentbeck.com/p/genie-lessons-nobody-wants-agents)

### C08 · Context and durable state

June 2025 test-plan instructions and inspected BPlusTree3 conventions provide explicit project guidance.

No complete personal durable-memory or handoff architecture established.

[Original supporting source](https://github.com/KentBeck/BPlusTree3/blob/main/agent.md)

### C09 · Tooling and environment

Dated Augment experiments and inspected BPlusTree3 Cargo/benchmark checks provide examples, not a complete current personal stack.

Tool use is dated and project-specific; no universal preferred model inferred.

[Original supporting source](https://github.com/KentBeck/BPlusTree3/blob/main/agent.md)

### C10 · Integration and release

Small focused commits and project checks are documented; production release policy remains unknown.

Do not generalise a library project into a full product pipeline.

[Original supporting source](https://github.com/KentBeck/BPlusTree3)

### C11 · Boundaries and safeguards

A complete personal permissions, sandbox, protected-test, approval, or budget policy is not established by the reviewed cache.

Unknown is not opposition or non-use. The June project account reports unwanted work and removed tests, but our proposed stop rule is an adaptation rather than evidence of Beck’s deployed enforcement policy.

### C12 · Evaluation and tradeoffs

Evaluate behaviour, changeability, and coordination cost; universal superiority is unproven.

Conceptual synthesis and self-reports, not a controlled comparative productivity result.

[Original supporting source](https://newsletter.kentbeck.com/p/genie-tarpit)

## Previous slide notes

# Kent Beck — bite-sized ideas

Derived from the public-source research cache checked on 26 October 2026. Reward examples are suggested adaptations, not demonstrations by Beck.

### Archived card 01

### One more question

> **A small next step is easier to judge than a finished-looking system.**
>
> Beck’s published workflow uses a test plan to steer the next increment. The useful idea is a visible next decision, not a giant checklist treated as complete foresight.

**In the wild:** Suggested adaptation: ask whether replay adds points before building a whole reward platform.

**Takeaway:** Choose the next missing behaviour.

[Optional practice: first lab](research.md#7-first-practical-lab) · [Detailed source finding](sources.md#s01) · [Full research](research.md)

---

### Archived card 02

### Two kinds of change

> **A cleanup and a new rule ask different questions of the reviewer.**
>
> Beck distinguishes structural and behavioural changes. Separating their diffs helps reveal what should remain the same and what should change. Timing still requires judgment.

**In the wild:** Suggested adaptation: rename the reward calculation separately from changing replay eligibility.

**Takeaway:** Make the intent of each change visible.

[Optional practice: first lab](research.md#7-first-practical-lab) · [Detailed source finding](sources.md#s04) · [Full research](research.md)

---

### Archived card 03

### The cost of tomorrow

> **Working today and easy to change tomorrow are different achievements.**
>
> Beck’s Genie Tarpit discussion separates features from future flexibility. It diagnoses a tension and leaves the general remedy open.

**In the wild:** Suggested adaptation: passing replay tests should not hide state that nobody can explain after restart.

**Takeaway:** Review behaviour and changeability.

[Optional practice: first lab](research.md#7-first-practical-lab) · [Detailed source finding](sources.md#s07) · [Full research](research.md)

---

### Archived card 04

### A swarm is a feature

> **More agents can create more work for the human steering them.**
>
> In an Intent session, Beck reported carrying coordination state himself. His question is whether the tool delivers the desired outcome. This is an account of one experience, not a universal benchmark.

**In the wild:** Suggested adaptation: compare coordination and review effort before adding another worker to a tiny patch.

**Takeaway:** Optimise the outcome, not the agent count.

[Optional practice: first lab](research.md#7-first-practical-lab) · [Detailed source finding](sources.md#s06) · [Full research](research.md)

---

### Archived card 05

### Instructions have a home

> **A useful instruction can be specific enough to run.**
>
> BPlusTree3’s inspected agent.md names project checks and benchmarks. Its conventions are scoped to that repository; they are not a complete personal setup.

**In the wild:** Suggested adaptation: name your real reward test command rather than telling an agent to “check everything.”

**Takeaway:** Keep guidance concrete and local.

[Optional practice: first lab](research.md#7-first-practical-lab) · [Detailed source finding](sources.md#s03) · [Full research](research.md)

---

### Archived card 06

### The human in the loop

> **Tool capability is only part of the design problem.**
>
> Beck’s October public introduction calls for augmented-coding tools oriented around human needs. The full paid essay was not accessed, so this card does not infer a detailed method from it.

**In the wild:** Suggested adaptation: notice whether each cycle leaves you able to explain the important decisions.

**Takeaway:** Track understanding alongside output.

[Optional practice: first lab](research.md#7-first-practical-lab) · [Detailed source finding](sources.md#s08) · [Full research](research.md)

---

### Archived card 07

### A faster way to learn

> **Try changing the scope before accepting a longer wait.**
>
> An October public teaser proposes fixing feedback-loop time and varying scope. It does not supply a universal latency target in the inspected excerpt.

**In the wild:** Suggested adaptation: reduce a sprawling reward patch to one observable question, then inspect the result.

**Takeaway:** Experiment with a shorter decision loop.

[Optional practice: first lab](research.md#7-first-practical-lab) · [Detailed source finding](sources.md#s09) · [Full research](research.md)

---

### Archived card 08

### What the tests observe

> **A project’s validation story should be more than “the agent said green.”**
>
> The BPlusTree3 README describes reference-comparison tests and performance checks. Those are project practices; this research did not reproduce its benchmark results.

**In the wild:** Suggested adaptation: check a fresh process reading the stored reward, not the old object’s memory.

**Takeaway:** Match the observation to the guarantee.

[Optional practice: first lab](research.md#7-first-practical-lab) · [Detailed source finding](sources.md#s02) · [Full research](research.md)

---
