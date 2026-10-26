---
title: Zalando — detailed research
parent: Zalando
nav_order: 1
last_updated: '2026-10-26'
research_checked: '2026-10-26'
research_cutoff: '2026-10-26'
evidence_since: '2025-10-01'
last_read: null
status: unread
cache_schema: 1
---

# Zalando: detailed AI-assisted development research

[Profile](index.md) · [Source register](sources.md) · [Workflow](workflow.md) · [Slides](slides.md)

Reviewed **26 October 2026**. A company retrospective with uneven team adoption; older foundations and future capabilities are separated. Recent publication does not date every underlying practice.

## A platform with deliberately uneven adoption

The August article is a retrospective, not a claim that all 250-plus teams work alike. Its older access infrastructure is distinguished from newer agent usage. The useful organisational question is which decisions should be shared and which should remain local. This account describes common access/configuration and knowledge sharing alongside team tool choice. [S01](sources.md#s01)

## Approval is not deployment

The risk bot’s classification affects the review path. A low-risk approval still leaves a merge choice; neither that nor a favourable risk label establishes permission to deploy any change unattended. The author also reports oversized PRs and varying design effects. These qualify a simple story that more generated code automatically shortens delivery. [S01](sources.md#s01)

## A linked evaluation tool has its own boundary

The pinned skills-evaluation README is a useful inspection exercise: it distinguishes declared tool requests from actual tool execution. It is a third-party artifact cited by Zalando, not a public copy of Zalando’s private runtime. Knowing this prevents a green evaluation report from being mistaken for successful end-to-end execution. [S03](sources.md#s03)

## Historical and unfinished work

The February 2025 UI migration article remains historical. It cannot date a current personal or company workflow. The retrospective’s future agent platform and identity broker remain planned/in-progress capabilities, not safeguards silently assumed to protect all agent sessions. Patroni is selection background, with community ownership distinct from its corporate origins. [S02](sources.md#s02) · [S04](sources.md#s04)

## Comparison claims

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated · Reported company use.** Reduce delivery friction while retaining team experimentation.

Adoption varies; the account does not claim one uniform company workflow.

Published / revision: **2026-08-14**. Practice: Retrospective of 2.5 years, including 2024 foundations and 2026 observations. Checked: 2026-10-26. Format: Authored engineering retrospective.

[Source record](sources.md#s01) · [Original source](https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Not established · Not established.** Recent AI-assisted development evidence for this dimension is not established in this reviewed cache.

The bounded source review does not establish a complete current organisational policy. A gap does not imply the practice is absent.

Published / revision: **Not established**. Practice: Not established. Checked: 2026-10-26. Format: Not established.

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Stated · Reported company use.** Risk-based approval encourages separating changes by rollout risk.

An observed behavioural effect, not a prescribed universal PR-size threshold.

Published / revision: **2026-08-14**. Practice: Retrospective of 2.5 years, including 2024 foundations and 2026 observations. Checked: 2026-10-26. Format: Authored engineering retrospective.

[Source record](sources.md#s01) · [Original source](https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html)

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Stated · Reported company use.** Preview deployments let agents and people inspect proposed frontend changes.

Preview availability is not a full AI testing cadence or correctness guarantee.

Published / revision: **2026-08-14**. Practice: Retrospective of 2.5 years, including 2024 foundations and 2026 observations. Checked: 2026-10-26. Format: Authored engineering retrospective.

[Source record](sources.md#s01) · [Original source](https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Stated · Reported company use.** Measure complexity and recognize that agents amplify existing design practices.

The observed codebases are not a controlled causal study or mandatory refactoring recipe.

Published / revision: **2026-08-14**. Practice: Retrospective of 2.5 years, including 2024 foundations and 2026 observations. Checked: 2026-10-26. Format: Authored engineering retrospective.

[Source record](sources.md#s01) · [Original source](https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html)

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated · Reported company use.** Medium-risk compatibility changes require another human’s judgment.

Risk classes are specific to Zalando’s stack and incident experience.

Published / revision: **2026-08-14**. Practice: Retrospective of 2.5 years, including 2024 foundations and 2026 observations. Checked: 2026-10-26. Format: Authored engineering retrospective.

[Source record](sources.md#s01) · [Original source](https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Stated · Reported company use.** Teams choose coding tools within shared access and reference configurations.

Tool-choice autonomy is not unrestricted agent execution or a defined agent topology.

Published / revision: **2026-08-14**. Practice: Retrospective of 2.5 years, including 2024 foundations and 2026 observations. Checked: 2026-10-26. Format: Authored engineering retrospective.

[Source record](sources.md#s01) · [Original source](https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Stated · Reported company use.** Shared skills and configurations distribute repeatable engineering knowledge.

A shared collection does not establish every team’s adoption or private context layout.

Published / revision: **2026-08-14**. Practice: Retrospective of 2.5 years, including 2024 foundations and 2026 observations. Checked: 2026-10-26. Format: Authored engineering retrospective.

[Source record](sources.md#s01) · [Original source](https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Stated · Reported company use.** Model access runs through a shared proxy with agent configuration helpers.

Proxy foundations began in 2024; the recent source is retrospective.

Published / revision: **2026-08-14**. Practice: Retrospective of 2.5 years, including 2024 foundations and 2026 observations. Checked: 2026-10-26. Format: Authored engineering retrospective.

[Source record](sources.md#s01) · [Original source](https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Stated · Reported company use.** Low-risk PRs can receive bot approval; authors choose whether to merge.

Automatic approval is distinct from automatic merge and production deployment.

Published / revision: **2026-08-14**. Practice: Retrospective of 2.5 years, including 2024 foundations and 2026 observations. Checked: 2026-10-26. Format: Authored engineering retrospective.

[Source record](sources.md#s01) · [Original source](https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Stated · Reported company use.** Authentication helpers avoid hardcoded MCP credentials.

The later sandbox/identity platform is work in progress, not a universally deployed boundary.

Published / revision: **2026-08-14**. Practice: Retrospective of 2.5 years, including 2024 foundations and 2026 observations. Checked: 2026-10-26. Format: Authored engineering retrospective.

[Source record](sources.md#s01) · [Original source](https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html)

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Stated · Reported company use.** Inspect session costs, PR sizes and code-complexity effects.

Self-reported associations and anecdotal effects do not prove net productivity gains.

Published / revision: **2026-08-14**. Practice: Retrospective of 2.5 years, including 2024 foundations and 2026 observations. Checked: 2026-10-26. Format: Authored engineering retrospective.

[Source record](sources.md#s01) · [Original source](https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html)

## How to use this knowledge base

Start with a concrete decision you need to improve, then inspect its claim and source scope. The optional exercise transfers an observation technique, not a company’s complete process. Before adopting a pattern, identify the artifact under test, who owns its meaning, what can falsify it, and who can authorize a production change. No numerical ranking of companies is implied.
