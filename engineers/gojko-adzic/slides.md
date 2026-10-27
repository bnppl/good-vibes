---
title: Gojko Adžić — bite-sized ideas
parent: Gojko Adžić Slides
nav_order: 1
last_updated: '2026-10-27'
last_read: null
status: unread
research_cutoff: '2026-10-27'
research_checked: '2026-10-27'
cache_schema: 1
nav_exclude: true
derived_from: engineers/gojko-adzic/recent-ai.md
evidence_since: '2025-10-01'
---

# Gojko Adžić — recent AI use

Publications since 1 October 2025. Source dates and evidence kinds appear on each card. [Earlier cards and principles](background.md) remain outside this feed.

## Card 09

### A pinned lights-on software factory

> **Replace "dark factory" markdown prayers with deterministic orchestration and visible decisions.**
>
> Published artifact · published 2026-10-22. The cache records the October 2026 revision of his public lights-on factory (based on Votito): interactive `/impact-analysis`, declared-file `.plan.json` steps, failing-test-first `workflow-worker` instructions, merged-tree `workflow-gate` checks, a `workflow-check` skeptic, and Bash regulation. September slides (`S01`) frame the `Dictating → Regulating → Supervising` path.

**In the wild:** Compiling `plans/<name>.plan.json` into a deterministic `.workflow.mjs` script with `bin/regulate.js` and `lint-edited-file.js` hooks rather than relying on unconstrained LLM orchestration (inspected artifact; not executed here).

**Takeaway:** Move repeatable orchestration and guardrails from LLM inference into deterministic computation while keeping human decisions visible.

[Optional practice: adapt locally](research.md) · [Recent evidence](recent-ai.md) · [Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/WORKFLOW.md)

---

## Card 01

### The unrequested product

> **Flawless agent-generated code can still cook a dish nobody ordered.**
>
> Commentary · published 2026-06-24. Adžić’s June 2026 product essay warns of a "Chef Gusteau" trap: as AI coding agents make technical implementation effortless, builders lacking product management skills risk shipping "junk food"—a beautifully engineered dish that nobody ordered.

**In the wild:** Authored product-role forecast (`S10`): easier code production increases the bottleneck on customer empathy, hypothesis testing, and scoping.

**Takeaway:** Verify the product decision and scope (`/impact-analysis`) as rigorously as the implementation.

[Optional practice: adapt locally](research.md) · [Recent evidence](recent-ai.md#c01) · [Primary source](https://gojko.net/2026/06/24/everyone-will-be-a-pm/)

---

## Card 03

### Plans and increments

> **An epic-sized plan need not be one giant implementation step.**
>
> Published artifact · published 2026-10-22. The public factory workflow breaks plans into declared-file steps and groups. Humans review phases and dependencies. Its planning scope and its verification increments are different things.

**In the wild:** Pinned artifact: WORKFLOW.md defines declared-file steps and execution groups. The reviewed revision is dated 22 October 2026.

**Takeaway:** Compare workflows at the same level of detail.

[Optional practice: adapt locally](research.md) · [Recent evidence](recent-ai.md) · [Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/WORKFLOW.md)

---

## Card 04

### The merged result

> **Three green workers do not prove one green system.**
>
> Published artifact · published 2026-10-22. The published orchestrator separates worker-local checks, merged-tree gates and a final check of completion claims. We inspected the artifact; we did not execute or benchmark it.

**In the wild:** Pinned artifact: ORCHESTRATOR.md separates worker checks from merged-tree and final gates; it was inspected, not run.

**Takeaway:** Keep someone responsible for integrated evidence.

[Optional practice: adapt locally](research.md) · [Recent evidence](recent-ai.md) · [Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/ORCHESTRATOR.md)

---

## Card 05

### Repeated feedback

> **The tenth reminder might deserve a tool.**
>
> Published artifact · published 2026-10-22. The public factory uses edit-time ESLint feedback as one way to encode recurring checks. Its example rules cover specific file types and mistakes, not every design or behaviour.

**In the wild:** Pinned artifact: edit-time lint rules encode specific recurring mistakes. Their publication does not establish effectiveness on every project.

**Takeaway:** Automate the check you can actually observe.

[Optional practice: adapt locally](research.md) · [Recent evidence](recent-ai.md) · [Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/LINTER-HOOK.md)

---

## Card 06

### The scope of a guardrail

> **A command hook cannot see every action inside an allowed program.**
>
> Published artifact · published 2026-10-22. The regulator documents role-specific Bash decisions and useful correction messages. It also states that an allowed make recipe runs beyond the hook’s direct inspection.

**In the wild:** Pinned artifact: the regulator documents role-scoped Bash decisions and limits on what the hook sees inside invoked programs.

**Takeaway:** Name what a control covers and what it leaves open.

[Optional practice: adapt locally](research.md) · [Recent evidence](recent-ai.md) · [Primary source](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/REGULATOR.md)

---
