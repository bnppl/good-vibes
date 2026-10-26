---
title: Dave Farley — bite-sized ideas
parent: Dave Farley Slides
nav_order: 1
nav_exclude: true
last_updated: 2026-10-26
cache_schema: 1
derived_from: engineers/dave-farley/recent-ai.md
research_checked: 2026-10-26
evidence_since: '2025-10-01'
---

# Dave Farley — recent AI use

Publications since 1 October 2025. Source dates and evidence kinds appear on each card. [Earlier cards and principles](background.md) remain outside this feed.

## Card 09

### An AI acceptance-contract proposal

> **His latest proposal puts acceptance examples under human control.**
>
> Recommendation · published 2026-10-25. The cached October 2026 authored article proposes human-owned executable acceptance examples, incremental agent implementation and verification. February interview and May AI-delivery guidance support the focus on precise intent and feedback. These are prescriptions and experience, not an inspected full coding session.

**In the wild:** Practice period: Proposed agent workflow; not a reproduced implementation.

**Takeaway:** Distinguish the reported work from a complete daily workflow.

[Optional practice: adapt locally](research.md#7-your-first-lab) · [Recent evidence](recent-ai.md) · [Primary source](https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe)

---

## Card 01

### The executable promise

> **A specification should be able to tell you it was broken.**
>
> Recommendation · published 2026-10-25. Farley advocates human-approved executable examples to guide agent work. The acceptance contract gives a concrete result to check. It still needs to express the right requirement.

**In the wild:** Cached authored proposal: people own executable acceptance examples while agents implement against them. No complete personal build is reproduced.

**Takeaway:** Own the intended behaviour before delegating implementation.

[Optional practice: adapt locally](research.md#7-your-first-lab) · [Recent evidence](recent-ai.md) · [Primary source](https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe)

---

## Card 02

### Four layers, one stable idea

> **Let the interface change without rewriting the intention.**
>
> Recommendation · published 2026-10-25. His four-layer model separates scenarios, a domain language, protocol drivers, and the real system. Technical details belong below the behavioural example.

**In the wild:** Cached proposal: scenarios, domain language, drivers and the system separate behavioural intent from interface details.

**Takeaway:** Put technical coupling behind a driver.

[Optional practice: adapt locally](research.md#7-your-first-lab) · [Recent evidence](recent-ai.md) · [Primary source](https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe)

---

## Card 03

### The size of a mistake

> **Small steps make being wrong cheaper.**
>
> Recommendation · published 2026-10-25. Farley recommends one scenario at a time: observe a meaningful failure, implement, review, and commit. This is incremental discovery rather than an upfront specification of everything.

**In the wild:** Cached proposal: work in observable increments rather than treating an entire upfront document as complete knowledge.

**Takeaway:** Finish one observable increment.

[Optional practice: adapt locally](research.md#7-your-first-lab) · [Recent evidence](recent-ai.md) · [Primary source](https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe)

---

## Card 04

### The moving finish line

> **A passing test means less if the agent rewrote the answer.**
>
> Recommendation · published 2026-10-25. Farley calls for human control of acceptance tests. Reviewing changes can detect contract erosion; actual access controls are a separate concern.

**In the wild:** Cached proposal: humans control changes to the acceptance contract. A recommendation is not proof of deployed access controls.

**Takeaway:** Treat an expectation change as a product decision.

[Optional practice: adapt locally](research.md#7-your-first-lab) · [Recent evidence](recent-ai.md) · [Primary source](https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe)

---

## Card 05

### The green question

> **Would your test notice a plausible defect?**
>
> Recommendation · published 2026-10-25. Farley recommends pairing acceptance tests with mutation testing. Surviving mutations need investigation; some reveal missing assertions, while others preserve equivalent behaviour.

**In the wild:** Cached proposal: mutation checks challenge test sensitivity. No independently reproduced mutation result is available here.

**Takeaway:** Challenge assertions, then investigate survivors.

[Optional practice: adapt locally](research.md#7-your-first-lab) · [Recent evidence](recent-ai.md) · [Primary source](https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe)

---
