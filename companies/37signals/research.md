---
parent: 37signals
last_updated: '2026-10-26'
research_checked: '2026-10-26'
research_cutoff: '2026-10-26'
evidence_since: '2025-10-01'
last_read: null
status: unread
cache_schema: 1
title: 37signals — detailed AI-assisted development research
nav_order: 1
---

# 37signals — detailed AI-assisted development research

[Profile](index.md) · [Source register](sources.md) · [Workflow](workflow.md) · [Slides](slides.md)

## Scope and reading guide

Named Lexxy and Hot Cell project accounts; CTO personal practice retains personal attribution. The question is how software is built using AI, not how an end-user AI feature is designed. Start with the concrete case; use the claims below for the shared twelve-dimension comparison.

## A named product case replaces a generic company story

Lexxy is ordinary product infrastructure: a rich-text editor used by Basecamp and Fizzy. Its September written talk explicitly describes how agents helped develop it. The project started before the publication window, so the release account is recent while some underlying practice is older. Its browser-feedback changes span 2026. [S02](sources.md#s02)

## Requirements are concrete in Hot Cell

The October account connects an actual requirements list to collaboration with an agent. Its strongest transferable lesson is clarity about compatibility and constraints. The result is a production attachment-processing system, not an AI feature. The report also describes operational failures; shipping a constrained design did not eliminate the need to learn from production. [S03](sources.md#s03)

## Avoid two attribution errors

DHH’s January account adds a different perspective on delegated work. It remains personal and does not define every team’s practice. [S01](sources.md#s01)

Hot Cell isolates potentially hostile media-processing tools. It is not evidence that coding agents at 37signals have no network, no secrets or an identical sandbox. The project’s safeguards cannot be reassigned to the development process. No complete company-wide memory or coding-agent permission policy was established here.

Rails and related projects are community engineering background. Company participation is neither exclusive ownership nor proof that current AI tooling produced every community contribution. [S04](sources.md#s04)

## Comparison claims

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated · Reported team use.** Lexxy’s team used agents to work through editor defects under small-team constraints.

A concrete editor project, not a universal productivity figure.

Publication / revision: **2026-09-28**. Practice: Lexxy began May 2025; account includes March–September 2026 test-workflow changes. Checked: 2026-10-26. Source format: Authored engineering article / written talk.

[Primary source](https://dev.37signals.com/lexxy-1-0/) · [Cached findings](sources.md#s02)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Stated · Reported team use.** Hot Cell’s author gave the agent explicit compatibility and isolation requirements.

These are product requirements; they do not describe coding-agent permissions.

Publication / revision: **2026-10-05**. Practice: 2026 development and production rollout before October publication. Checked: 2026-10-26. Source format: Authored engineering article / written talk.

[Primary source](https://dev.37signals.com/hot-cell-1-0/) · [Cached findings](sources.md#s03)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Stated · Reported team use.** A stronger browser test loop enabled batching editor bug fixes.

No fixed task size, planning ritual or universal agent count is established.

Publication / revision: **2026-09-28**. Practice: Lexxy began May 2025; account includes March–September 2026 test-workflow changes. Checked: 2026-10-26. Source format: Authored engineering article / written talk.

[Primary source](https://dev.37signals.com/lexxy-1-0/) · [Cached findings](sources.md#s02)

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Stated · Reported team use.** Lexxy moved system tests to Playwright so agents could exercise realistic browser behavior.

Reported test feedback, not independently rerun browser results.

Publication / revision: **2026-09-28**. Practice: Lexxy began May 2025; account includes March–September 2026 test-workflow changes. Checked: 2026-10-26. Source format: Authored engineering article / written talk.

[Primary source](https://dev.37signals.com/lexxy-1-0/) · [Cached findings](sources.md#s02)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Stated · Reported team use.** Hot Cell preserved application behavior through replaceable Rails integration points.

A scoped design example developed with an agent, not a mandatory company architecture.

Publication / revision: **2026-10-05**. Practice: 2026 development and production rollout before October publication. Checked: 2026-10-26. Source format: Authored engineering article / written talk.

[Primary source](https://dev.37signals.com/hot-cell-1-0/) · [Cached findings](sources.md#s03)

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated · Personal use.** DHH reports reviewing delegated outcomes and providing guidance.

Personal CTO use; this does not establish every team’s review depth.

Publication / revision: **2026-01-07**. Practice: Late 2025/early 2026 retrospective; exact sessions unknown. Checked: 2026-10-26. Source format: Authored CTO personal article.

[Primary source](https://world.hey.com/dhh/promoting-ai-agents-3ee04945) · [Cached findings](sources.md#s01)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Stated · Reported team use.** An agent reproduced a defect publicly and rechecked it on the proposed branch.

Scoped validation role; merge and release authority remain unknown.

Publication / revision: **2026-09-28**. Practice: Lexxy began May 2025; account includes March–September 2026 test-workflow changes. Checked: 2026-10-26. Source format: Authored engineering article / written talk.

[Primary source](https://dev.37signals.com/lexxy-1-0/) · [Cached findings](sources.md#s02)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Not established · Not established.** A recent, sufficiently detailed internal AI-development practice is not established for this dimension in the reviewed sources.

This is a bounded evidence gap, not absence of use or disagreement. Historical practice and adjacent product safeguards do not fill it.

Publication / revision: **Not established**. Practice: Not established. Checked: 2026-10-26. Source format: Not established.

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Stated · Reported team use.** Lexxy’s account names Claude and Playwright in its development loop.

Different company projects and employees may use different tools.

Publication / revision: **2026-09-28**. Practice: Lexxy began May 2025; account includes March–September 2026 test-workflow changes. Checked: 2026-10-26. Source format: Authored engineering article / written talk.

[Primary source](https://dev.37signals.com/lexxy-1-0/) · [Cached findings](sources.md#s02)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Stated · Reported team use.** Hot Cell’s production rollout exposed failures that were folded back into the library.

Operational learning is described; a full AI-to-production approval pipeline is not.

Publication / revision: **2026-10-05**. Practice: 2026 development and production rollout before October publication. Checked: 2026-10-26. Source format: Authored engineering article / written talk.

[Primary source](https://dev.37signals.com/hot-cell-1-0/) · [Cached findings](sources.md#s03)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Not established · Not established.** A recent, sufficiently detailed internal AI-development practice is not established for this dimension in the reviewed sources.

This is a bounded evidence gap, not absence of use or disagreement. Historical practice and adjacent product safeguards do not fill it.

Publication / revision: **Not established**. Practice: Not established. Checked: 2026-10-26. Source format: Not established.

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Stated · Reported team use.** The Lexxy account values realistic browser interaction and documents tool changes.

Self-report with earlier project history; no general AI-versus-human benchmark.

Publication / revision: **2026-09-28**. Practice: Lexxy began May 2025; account includes March–September 2026 test-workflow changes. Checked: 2026-10-26. Source format: Authored engineering article / written talk.

[Primary source](https://dev.37signals.com/lexxy-1-0/) · [Cached findings](sources.md#s02)

## Transfer and uncertainty

The optional exercise in [workflow notes](workflow.md#optional-practice) is our adaptation. It neither reproduces the company’s private environment nor measures its effectiveness. Compare the same observable task and risk level before comparing speed, autonomy or cost. Tool names, policy statements, executed checks and observed outcomes are different kinds of evidence.
