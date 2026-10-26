---
parent: PostHog
last_updated: '2026-10-26'
research_checked: '2026-10-26'
research_cutoff: '2026-10-26'
evidence_since: '2025-10-01'
last_read: null
status: unread
cache_schema: 1
title: PostHog — detailed AI-assisted development research
nav_order: 1
---

# PostHog — detailed AI-assisted development research

[Profile](index.md) · [Source register](sources.md) · [Workflow](workflow.md) · [Slides](slides.md)

## Scope and reading guide

Company DevEx account, a self-driving team case and Andy Maguire’s personal workflow remain separate scopes. The question is how software is built using AI, not how an end-user AI feature is designed. Start with the concrete case; use the claims below for the shared twelve-dimension comparison.

## PR generation changes the surrounding system

The July DevEx account discusses the capacity needed after an agent opens a PR. It distinguishes critical data paths from reversible product changes and separates current practices from work being built. That is a more useful source than assuming that high adoption alone implies a particular review policy. [S01](sources.md#s01)

## A traceable feedback-to-fix case

In the September team account, missing-tool feedback became a report, then PR #90832. Review involved people and agents before the fix reached production. The article links the public change, but this cache did not execute it or reconstruct every private event. The important observation is that detection, preparation and shipping are separate stages. [S02](sources.md#s02)

## State can be explicit without becoming a company mandate

The October skills article describes a practitioner’s own project continuity. Its value here is an inspectable idea about maintaining work state; it does not prove every PostHog engineer uses the same scheme. [S03](sources.md#s03)

## What this does not establish

The newsletter contains forecasts as well as reports. Its adoption statistic is not a defect metric. [S04](sources.md#s04) The FDE handbook is useful declared context, but its unverified revision date prevents it from filling current-window fields. [S05](sources.md#s05)

The subject of these cases is how PostHog builds its software. A product announcement for its agents, skills store or MCP would not by itself qualify. Complete release permissions, protected-test controls and architecture standards remain incompletely documented.

## Comparison claims

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated · Reported company use.** DevEx work targets handling agent-produced PRs, not merely producing more code.

The stated target is an engineering-system goal, not proof of customer value.

Publication / revision: **2026-07-28**. Practice: January–July 2026 retrospective; individual changes span that period. Checked: 2026-10-26. Source format: Authored engineering article.

[Primary source](https://posthog.com/blog/10k-prs-a-month) · [Cached findings](sources.md#s01)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Stated · Reported team use.** The team writes issue specs and returns unresolved product decisions to humans.

One team’s loop; no universal company requirements format.

Publication / revision: **2026-09-15**. Practice: Named examples August–September 2026. Checked: 2026-10-26. Source format: Authored practitioner account.

[Primary source](https://posthog.com/blog/self-driving-loops) · [Cached findings](sources.md#s02)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Stated · Reported team use.** Scouts check readiness and duplication before routing issues toward implementation.

A reported workflow, not a guarantee that all duplicate work is prevented.

Publication / revision: **2026-09-15**. Practice: Named examples August–September 2026. Checked: 2026-10-26. Source format: Authored practitioner account.

[Primary source](https://posthog.com/blog/self-driving-loops) · [Cached findings](sources.md#s02)

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Stated · Reported company use.** Browser-driven QA and CI supply evidence before reviewers evaluate changes.

Some improvements are early or planned; automated testing does not establish exhaustive correctness.

Publication / revision: **2026-07-28**. Practice: January–July 2026 retrospective; individual changes span that period. Checked: 2026-10-26. Source format: Authored engineering article.

[Primary source](https://posthog.com/blog/10k-prs-a-month) · [Cached findings](sources.md#s01)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Not established · Not established.** A recent, sufficiently detailed internal AI-development practice is not established for this dimension in the reviewed sources.

This is a bounded evidence gap, not absence of use or disagreement. Historical practice and adjacent product safeguards do not fill it.

Publication / revision: **Not established**. Practice: Not established. Checked: 2026-10-26. Source format: Not established.

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated · Reported team use.** A named fix went through agent reviews, human approval and a human merge command.

One traceable example, not a policy for every PR.

Publication / revision: **2026-09-15**. Practice: Named examples August–September 2026. Checked: 2026-10-26. Source format: Authored practitioner account.

[Primary source](https://posthog.com/blog/self-driving-loops) · [Cached findings](sources.md#s02)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Stated · Reported team use.** Feedback scouts investigate, deduplicate and propose work, with human steering retained.

Observed account is team-scoped; future product autonomy is separate.

Publication / revision: **2026-09-15**. Practice: Named examples August–September 2026. Checked: 2026-10-26. Source format: Authored practitioner account.

[Primary source](https://posthog.com/blog/self-driving-loops) · [Cached findings](sources.md#s02)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Stated · Personal use.** A practitioner uses versioned project skills and explicit handovers for continuity.

Personal workflow, not a company-mandated memory layout.

Publication / revision: **2026-10-20**. Practice: Work over the preceding 28 days and ongoing sessions. Checked: 2026-10-26. Source format: Authored practitioner account.

[Primary source](https://posthog.com/blog/how-i-use-skills-for-everything) · [Cached findings](sources.md#s03)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Stated · Reported company use.** The developer CLI and cloud environments help agents run checks and collect evidence.

The July account includes work being built; universal availability is not established.

Publication / revision: **2026-07-28**. Practice: January–July 2026 retrospective; individual changes span that period. Checked: 2026-10-26. Source format: Authored engineering article.

[Primary source](https://posthog.com/blog/10k-prs-a-month) · [Cached findings](sources.md#s01)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Stated · Reported team use.** The published example distinguishes approval, merge and arrival in production.

Timing is one case; production release authority is not generalized.

Publication / revision: **2026-09-15**. Practice: Named examples August–September 2026. Checked: 2026-10-26. Source format: Authored practitioner account.

[Primary source](https://posthog.com/blog/self-driving-loops) · [Cached findings](sources.md#s02)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Stated · Reported company use.** The July account describes discretionary token spending and discussion of unusual costs.

Dated cultural account, not proof of unlimited permissions or absence of later controls.

Publication / revision: **2026-07-28**. Practice: January–July 2026 retrospective; individual changes span that period. Checked: 2026-10-26. Source format: Authored engineering article.

[Primary source](https://posthog.com/blog/10k-prs-a-month) · [Cached findings](sources.md#s01)

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Stated · Reported company use.** The team inspects PR size, CI cost, reverts and reliability as output grows.

These proxies are incomplete and do not independently establish unchanged defect risk.

Publication / revision: **2026-07-28**. Practice: January–July 2026 retrospective; individual changes span that period. Checked: 2026-10-26. Source format: Authored engineering article.

[Primary source](https://posthog.com/blog/10k-prs-a-month) · [Cached findings](sources.md#s01)

## Transfer and uncertainty

The optional exercise in [workflow notes](workflow.md#optional-practice) is our adaptation. It neither reproduces the company’s private environment nor measures its effectiveness. Compare the same observable task and risk level before comparing speed, autonomy or cost. Tool names, policy statements, executed checks and observed outcomes are different kinds of evidence.
