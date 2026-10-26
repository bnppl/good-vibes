---
title: Stripe — detailed research
parent: Stripe
nav_order: 1
last_updated: '2026-10-26'
research_checked: '2026-10-26'
research_cutoff: '2026-10-26'
evidence_since: '2025-10-01'
last_read: null
status: unread
cache_schema: 1
---

# Stripe: AI-assisted engineering research

[Profile](index.md) · [Sources](sources.md) · [Workflow](workflow.md) · [Slides](slides.md)

## Scope and chronology

Stripe Leverage team’s Minions workflow, reported in February 2026; not every Stripe engineering task. The evidence was inspected on **26 October 2026**. These are authored reports, not independently executed experiments. No complete private setup or uniform policy is assumed.

## The actual case: unattended work with an endpoint

The February account begins with a developer request and ends at a PR awaiting human judgment. Its important boundary is where the agent stops. The workflow is described as unattended during implementation, not as a system authorised to decide whether a change belongs in production. [S01](sources.md#s01)

Part 2 explains why an agent that can edit files still needs conventional engineering infrastructure: a reproducible environment, available checks, appropriate context and a reliable way to hand work back. Its blueprints put predictable operations in ordinary code while reserving model reasoning for uncertain subtasks. [S02](sources.md#s02)

## What to inspect in an adoption decision

The transferable questions are whether tasks are isolated, whether feedback is available early, and whether somebody remains accountable for acceptance. Our synthesis is that a workflow should have an explicit stop condition before a team increases concurrency. That is an adoption question, not evidence that Stripe prescribes the same boundary for every task.

## What the source does not settle

The cache does not establish a comprehensive application-architecture method, a current model-routing table, every team's review depth, production deployment authority or comparative defect rates. Sorbet's public repository supplies background inspectability; it is not the Minions implementation. February reports should retain their date rather than becoming an October daily-stack claim.

## Comparison evidence

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated · Reported company use.** Conserve developer attention by delegating bounded implementation work.

Reported motivation; faster code production is not measured customer value.

Source format: Authored engineering article. Published / revision: **2026-02-09**. Practice: Tasks and usage before February publication; exact run dates not stated. Checked: 2026-10-26.

[Primary source](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents) · [Source register](sources.md#s01)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Stated · Reported company use.** Use scoped repository rules and task-specific retrieved context.

Documents context preparation, not a complete product-requirements policy.

Source format: Authored engineering article. Published / revision: **2026-02-19**. Practice: Infrastructure and iteration policy reported at publication; exact sessions unknown. Checked: 2026-10-26.

[Primary source](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2) · [Source register](sources.md#s02)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Stated · Reported company use.** Give Minions independent tasks that end at a reviewable PR.

Task boundaries vary; no universal ticket size is established.

Source format: Authored engineering article. Published / revision: **2026-02-09**. Practice: Tasks and usage before February publication; exact run dates not stated. Checked: 2026-10-26.

[Primary source](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents) · [Source register](sources.md#s01)

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Stated · Reported company use.** Run deterministic local checks before a bounded CI repair loop.

The reported standard allows one retry; passing checks do not establish correctness.

Source format: Authored engineering article. Published / revision: **2026-02-19**. Practice: Infrastructure and iteration policy reported at publication; exact sessions unknown. Checked: 2026-10-26.

[Primary source](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2) · [Source register](sources.md#s02)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Not established · Not established.** A recent AI-assisted development policy for this dimension is not established in the reviewed accounts.

The bounded gap is not evidence of opposition, absence of practice or poor engineering. General principles cannot fill it.

Source format: Not established. Published / revision: **Not established**. Practice: Not established. Checked: 2026-10-26.

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated · Reported company use.** Humans review Minion-produced changes before acceptance.

No universal line-by-line review procedure is supplied.

Source format: Authored engineering article. Published / revision: **2026-02-09**. Practice: Tasks and usage before February publication; exact run dates not stated. Checked: 2026-10-26.

[Primary source](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents) · [Source register](sources.md#s01)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Stated · Reported company use.** Blueprints interleave deterministic operations and agent reasoning.

Unattended execution is confined to the documented workflow.

Source format: Authored engineering article. Published / revision: **2026-02-19**. Practice: Infrastructure and iteration policy reported at publication; exact sessions unknown. Checked: 2026-10-26.

[Primary source](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2) · [Source register](sources.md#s02)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Stated · Reported company use.** Attach relevant rules selectively rather than loading all guidance.

Shared rule formats reduce duplication; no complete private memory inventory is established.

Source format: Authored engineering article. Published / revision: **2026-02-19**. Practice: Infrastructure and iteration policy reported at publication; exact sessions unknown. Checked: 2026-10-26.

[Primary source](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2) · [Source register](sources.md#s02)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Stated · Reported company use.** Run tasks in standardized isolated devboxes using a custom harness.

Dated architecture; not an inspected current installation.

Source format: Authored engineering article. Published / revision: **2026-02-19**. Practice: Infrastructure and iteration policy reported at publication; exact sessions unknown. Checked: 2026-10-26.

[Primary source](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2) · [Source register](sources.md#s02)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Stated · Reported company use.** Return CI-checked PRs for human review.

This does not establish autonomous merge, deployment or rollback authority.

Source format: Authored engineering article. Published / revision: **2026-02-09**. Practice: Tasks and usage before February publication; exact run dates not stated. Checked: 2026-10-26.

[Primary source](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents) · [Source register](sources.md#s01)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Stated · Reported company use.** Constrain devboxes to QA resources and selected tool access.

An account of intended isolation; no independent penetration test was performed here.

Source format: Authored engineering article. Published / revision: **2026-02-19**. Practice: Infrastructure and iteration policy reported at publication; exact sessions unknown. Checked: 2026-10-26.

[Primary source](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2) · [Source register](sources.md#s02)

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Stated · Reported company use.** Limit expensive CI retries to balance completeness, cost and delay.

A local engineering tradeoff, not a universal optimal retry count.

Source format: Authored engineering article. Published / revision: **2026-02-19**. Practice: Infrastructure and iteration policy reported at publication; exact sessions unknown. Checked: 2026-10-26.

[Primary source](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2) · [Source register](sources.md#s02)
