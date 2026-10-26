---
title: Shopify — research
parent: Shopify
nav_order: 1
last_updated: '2026-10-26'
research_checked: '2026-10-26'
research_cutoff: '2026-10-26'
evidence_since: '2025-10-01'
last_read: null
status: unread
cache_schema: 1
---

# Shopify — detailed AI-assisted development research

[Research](research.md) · [Sources](sources.md) · [Workflow and optional practice](workflow.md) · [Slide notes](slides.md) · [Slideshow]({{ '/companies/shopify/learn/' | relative_url }})

## Scope and dates

Reported Shopify mobile-platform, AppSec and River workflows; no single universal development policy is inferred. Window: **1 October 2025–26 October 2026**. Sources and practice periods differ; a later article may discuss earlier work. The findings below are cached from public authored accounts checked on 2026-10-26. No private environment, paid recording or runtime experiment was inspected.

## Documented cases

### Remote Dev: close the execution gap

**Reported team use · 2026-10-22.** A mobile agent needs access to the environment in which its changes matter. This account is useful because it goes beyond editing source files: builds and device interaction become inspectable outputs. It remains a dated team case, and screenshots should not be mistaken for exhaustive acceptance coverage.

[Original account](https://shopify.engineering/remote-dev) · [Cached findings](sources.md#s01)

### River: evidence belongs to a specific revision

**Reported team use · 2026-09-02.** A patch may be right while its work record is wrong. The remediation account distinguishes a proposed fix, a successful branch check and verified repository closure. For readers, the important unit of evidence is the actual state under examination, not a reassuring status message.

[Original account](https://shopify.engineering/river-vulnerability-remediation) · [Cached findings](sources.md#s02)

### Dispatch: separate discovery from proof

**Reported team use · 2026-07-29.** The security case has a useful asymmetry: broad exploration may be parallel, but a finding still needs a concrete demonstration. The source describes rejected or downgraded candidates rather than treating every confident report as a vulnerability. This is verification work on software, not merely a product AI feature.

[Original account](https://shopify.engineering/building-an-agentic-harness-that-outlasts-the-model) · [Cached findings](sources.md#s03)

### World and shared sessions: infrastructure has a cost

**Reported company use · 2026-05-28.** The retrospective makes platform investment part of the explanation. Reproducibility and knowledge access were not free improvements obtained by buying a model. Its account can motivate an infrastructure discussion, but cannot establish that every organisation needs Shopify’s repository topology.

[Original account](https://shopify.engineering/under-the-river) · [Cached findings](sources.md#s04)

## A concrete failure boundary

The remediation article records two superficially green dependency PRs with different outcomes: one had actually merged, while the other still left the vulnerable dependency on the default branch. It also records withholding action when a human had taken over a branch. Those are useful examples of why the evidence ledger and operational state need reconciliation. [S02](sources.md#s02)

Our reading: a workflow has at least three separate questions—whether the proposed change is acceptable, whether its checks belong to the current revision, and whether the intended change has reached the system of record. Neither a persuasive summary nor a green branch status answers all three. This interpretation is transferable; Shopify’s private implementation and results are not.

## What to compare, and what to avoid

These sources establish several complementary workflows, not one identical process across all of Shopify. Remote Dev, Dispatch and the remediation loop solve different problems. River and World remain internal; Liquid and other open-source contributions establish background rather than public availability of the entire harness.

These are accounts of engineering work, not a score for the whole organisation. Adoption rates, generated changes and a reported successful case have different denominators. A review mechanism observes different failures from a running test. A merge is different from a deployed change. When transferring a technique, identify which of those observations you can reproduce independently.

## Open-source background

| Context | Existing public entry point |
|---|---|
| Public engineering / open-source entry point | [Liquid](https://github.com/Shopify/liquid) |

The public project is an entry point for studying engineering artifacts. It does not make every internal system public, establish current maintenance status or prove that the reported AI workflow produced its code. Check the actual component licence and governance before reuse.

## Comparison claims

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated · Reported team use.** Delegation outgrew the available mobile build capacity.

Mobile platform case, not a company-wide productivity measurement.

Source format: Authored engineering article. Published: **2026-10-22**. Practice: Mobile workflows before publication; exact sessions not stated. Checked: 2026-10-26.

[Primary source](https://shopify.engineering/remote-dev) · [Source register](sources.md#s01)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Stated · Reported team use.** Remediation rechecks the finding against live state.

A security-specific starting condition, not a universal requirements format.

Source format: Authored engineering article. Published: **2026-09-02**. Practice: Remediation runs before publication; exact dates not stated. Checked: 2026-10-26.

[Primary source](https://shopify.engineering/river-vulnerability-remediation) · [Source register](sources.md#s02)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Stated · Reported team use.** Dispatch partitions scanning work before parallel hunting.

Scanning scope is not the size of ordinary feature increments.

Source format: Authored engineering article. Published: **2026-07-29**. Practice: Five-month exploration and recent scanning period; exact session dates not stated. Checked: 2026-10-26.

[Primary source](https://shopify.engineering/building-an-agentic-harness-that-outlasts-the-model) · [Source register](sources.md#s03)

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Stated · Reported team use.** Candidate vulnerabilities must survive executable verification.

The reported test oracle is domain-specific; no full current TDD policy follows.

Source format: Authored engineering article. Published: **2026-07-29**. Practice: Five-month exploration and recent scanning period; exact session dates not stated. Checked: 2026-10-26.

[Primary source](https://shopify.engineering/building-an-agentic-harness-that-outlasts-the-model) · [Source register](sources.md#s03)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Stated · Reported company use.** The account invests in reproducible shared infrastructure.

Retrospective infrastructure choices do not establish a mandatory application architecture.

Source format: Authored engineering article. Published: **2026-05-28**. Practice: Retrospective beginning in 2024 and River usage before publication. Checked: 2026-10-26.

[Primary source](https://shopify.engineering/under-the-river) · [Source register](sources.md#s04)

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated · Reported team use.** Owners retain product-risk and merge decisions.

A reported authority boundary, not an independently audited permission system.

Source format: Authored engineering article. Published: **2026-09-02**. Practice: Remediation runs before publication; exact dates not stated. Checked: 2026-10-26.

[Primary source](https://shopify.engineering/river-vulnerability-remediation) · [Source register](sources.md#s02)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Stated · Reported team use.** Separate remote environments support parallel mobile work.

Parallel task execution does not establish unlimited unattended delivery.

Source format: Authored engineering article. Published: **2026-10-22**. Practice: Mobile workflows before publication; exact sessions not stated. Checked: 2026-10-26.

[Primary source](https://shopify.engineering/remote-dev) · [Source register](sources.md#s01)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Stated · Reported company use.** Shared threads and repository guidance preserve knowledge.

An organisational learning mechanism, not proof of perfect or automatic memory.

Source format: Authored engineering article. Published: **2026-05-28**. Practice: Retrospective beginning in 2024 and River usage before publication. Checked: 2026-10-26.

[Primary source](https://shopify.engineering/under-the-river) · [Source register](sources.md#s04)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Stated · Reported team use.** River can exercise iOS and Android environments.

A dated mobile capability account; the private installed configuration was not inspected.

Source format: Authored engineering article. Published: **2026-10-22**. Practice: Mobile workflows before publication; exact sessions not stated. Checked: 2026-10-26.

[Primary source](https://shopify.engineering/remote-dev) · [Source register](sources.md#s01)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Stated · Reported team use.** Closure is checked after merge on repository head.

Repository/tracker closure does not establish a universal production deployment policy.

Source format: Authored engineering article. Published: **2026-09-02**. Practice: Remediation runs before publication; exact dates not stated. Checked: 2026-10-26.

[Primary source](https://shopify.engineering/river-vulnerability-remediation) · [Source register](sources.md#s02)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Stated · Reported team use.** Deterministic infrastructure owns credentials, Git and storage.

Reported AppSec harness architecture; exact private permission configuration is not public here.

Source format: Authored engineering article. Published: **2026-07-29**. Practice: Five-month exploration and recent scanning period; exact session dates not stated. Checked: 2026-10-26.

[Primary source](https://shopify.engineering/building-an-agentic-harness-that-outlasts-the-model) · [Source register](sources.md#s03)

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Stated · Reported team use.** A stopped or superseded patch can be correct.

Evaluation concerns evidence-supported remediation rather than patch volume.

Source format: Authored engineering article. Published: **2026-09-02**. Practice: Remediation runs before publication; exact dates not stated. Checked: 2026-10-26.

[Primary source](https://shopify.engineering/river-vulnerability-remediation) · [Source register](sources.md#s02)

## First practical lab

Use the [optional practice](workflow.md#optional-practice) to test the observation boundaries in a small setting. Keep your own decisions and results separate from the company account. A useful unsuccessful run is one that exposes the missing input or check; do not rewrite its record into a success.
