---
title: Grafana Labs — detailed research
parent: Grafana Labs
nav_order: 1
last_updated: '2026-10-26'
research_checked: '2026-10-26'
research_cutoff: '2026-10-26'
evidence_since: '2025-10-01'
last_read: null
status: unread
cache_schema: 1
---

# Grafana Labs: detailed AI-assisted development research

[Profile](index.md) · [Source register](sources.md) · [Workflow](workflow.md) · [Slides](slides.md)

Reviewed **26 October 2026**. Tern/data-source migration and internal CLI exercises; not a company-wide autonomous-release policy. Recent publication does not date every underlying practice.

## One migration, not a generic AI factory

Tern concerns extracting data sources from Grafana core while retaining a compatible user experience. The important comparison is not how many files an agent edited, but whether source independence, packaging and runtime behaviour agree. Releasing a plugin independently creates an additional compatibility boundary; it does not erase the distribution problem. [S01](sources.md#s01)

## Guides improve through execution

The migration article reports both mechanical failures and rollout surprises. That makes it a more useful learning case than a finished checklist presented without history. A generated guide is a hypothesis about what will work. An execution can falsify it, and a production observation can expose assumptions that tests missed. Human design decisions remain a different responsibility from mechanical migration work. [S01](sources.md#s01)

## Agent-facing tooling is supporting evidence

The gcx design account began with engineers observing actual agent behaviour on an older CLI. Its lesson for development tooling is to make capabilities and errors usable by the caller. The October pinned README demonstrates what is publicly documented now, not that every internal team runs that revision or grants the same permissions. [S02](sources.md#s02) · [S03](sources.md#s03)

## What remains unknown

This cache does not establish an organisation-wide requirements process, private agent permissions, protected-test policy, budget limits or universal automatic release authority. The Tern case supports its own workflow and failures; the optional lab below is our adaptation.

## Comparison claims

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated · Reported team use.** Extract data sources so fixes need not wait for a monolith release.

This is the data-sources team’s migration objective, not every Grafana initiative.

Published / revision: **2026-09-24**. Practice: Migration over preceding months; exact agent runs not dated. Checked: 2026-10-26. Format: Authored company engineering article.

[Source record](sources.md#s01) · [Original source](https://medium.com/grafana-labs/how-and-why-were-bringing-data-sources-out-of-the-grafana-monolith-775f58eaebc3)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Stated · Reported team use.** Completed extractions become precise, checkable migration guides.

Human intent and shared-code decisions are not delegated to the guide writer.

Published / revision: **2026-09-24**. Practice: Migration over preceding months; exact agent runs not dated. Checked: 2026-10-26. Format: Authored company engineering article.

[Source record](sources.md#s01) · [Original source](https://medium.com/grafana-labs/how-and-why-were-bringing-data-sources-out-of-the-grafana-monolith-775f58eaebc3)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Stated · Reported team use.** Tern separates learning, guide creation, readiness audit and execution.

The account describes staged roles, not a universal number of concurrent agents.

Published / revision: **2026-09-24**. Practice: Migration over preceding months; exact agent runs not dated. Checked: 2026-10-26. Format: Authored company engineering article.

[Source record](sources.md#s01) · [Original source](https://medium.com/grafana-labs/how-and-why-were-bringing-data-sources-out-of-the-grafana-monolith-775f58eaebc3)

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Stated · Reported team use.** Manual distribution checks complement existing end-to-end tests.

No complete automated gate matrix or independently reproduced result is supplied.

Published / revision: **2026-09-24**. Practice: Migration over preceding months; exact agent runs not dated. Checked: 2026-10-26. Format: Authored company engineering article.

[Source record](sources.md#s01) · [Original source](https://medium.com/grafana-labs/how-and-why-were-bringing-data-sources-out-of-the-grafana-monolith-775f58eaebc3)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Stated · Reported team use.** Engineers decide shared-library boundaries where extraction is not mechanical.

Agents handle mechanical edits; human design work remains substantial.

Published / revision: **2026-09-24**. Practice: Migration over preceding months; exact agent runs not dated. Checked: 2026-10-26. Format: Authored company engineering article.

[Source record](sources.md#s01) · [Original source](https://medium.com/grafana-labs/how-and-why-were-bringing-data-sources-out-of-the-grafana-monolith-775f58eaebc3)

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated · Reported team use.** Engineers supervise rollouts and diagnose unexpected behaviour.

Human observation found issues absent from the generated guides.

Published / revision: **2026-09-24**. Practice: Migration over preceding months; exact agent runs not dated. Checked: 2026-10-26. Format: Authored company engineering article.

[Source record](sources.md#s01) · [Original source](https://medium.com/grafana-labs/how-and-why-were-bringing-data-sources-out-of-the-grafana-monolith-775f58eaebc3)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Stated · Reported team use.** Agents perform scoped migration phases under human supervision.

No unattended production authority or company-wide agent topology is established.

Published / revision: **2026-09-24**. Practice: Migration over preceding months; exact agent runs not dated. Checked: 2026-10-26. Format: Authored company engineering article.

[Source record](sources.md#s01) · [Original source](https://medium.com/grafana-labs/how-and-why-were-bringing-data-sources-out-of-the-grafana-monolith-775f58eaebc3)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Stated · Reported team use.** Failures update migration guidance for later extractions.

The cache was not inspected as a complete private memory implementation.

Published / revision: **2026-09-24**. Practice: Migration over preceding months; exact agent runs not dated. Checked: 2026-10-26. Format: Authored company engineering article.

[Source record](sources.md#s01) · [Original source](https://medium.com/grafana-labs/how-and-why-were-bringing-data-sources-out-of-the-grafana-monolith-775f58eaebc3)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Stated · Reported team use.** Internal CLI exercises expose where agents guess or waste context.

This is observed tool use during design, not a current company-wide tool inventory.

Published / revision: **2026-07-28**. Practice: Internal offsite and CLI-design iteration before publication. Checked: 2026-10-26. Format: Authored company engineering article.

[Source record](sources.md#s02) · [Original source](https://medium.com/grafana-labs/clis-in-the-age-of-agents-how-we-designed-gcx-cdfca8954b30)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Stated · Reported team use.** Externalized plugins retain independent releases and are rebundled into distributions.

Compatibility and rollout verification remain work beyond source rewriting.

Published / revision: **2026-09-24**. Practice: Migration over preceding months; exact agent runs not dated. Checked: 2026-10-26. Format: Authored company engineering article.

[Source record](sources.md#s01) · [Original source](https://medium.com/grafana-labs/how-and-why-were-bringing-data-sources-out-of-the-grafana-monolith-775f58eaebc3)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Not established · Not established.** Recent AI-assisted development evidence for this dimension is not established in this reviewed cache.

The bounded source review does not establish a complete current organisational policy. A gap does not imply the practice is absent.

Published / revision: **Not established**. Practice: Not established. Checked: 2026-10-26. Format: Not established.

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Stated · Reported team use.** Evaluate actual agent failures instead of assuming help text is sufficient.

Observed usability failures do not establish measured delivery or cost improvement.

Published / revision: **2026-07-28**. Practice: Internal offsite and CLI-design iteration before publication. Checked: 2026-10-26. Format: Authored company engineering article.

[Source record](sources.md#s02) · [Original source](https://medium.com/grafana-labs/clis-in-the-age-of-agents-how-we-designed-gcx-cdfca8954b30)

## How to use this knowledge base

Start with a concrete decision you need to improve, then inspect its claim and source scope. The optional exercise transfers an observation technique, not a company’s complete process. Before adopting a pattern, identify the artifact under test, who owns its meaning, what can falsify it, and who can authorize a production change. No numerical ranking of companies is implied.
