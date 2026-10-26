---
title: GitLab — detailed AI-development research
parent: GitLab
nav_order: 1
last_updated: '2026-10-26'
research_checked: '2026-10-26'
research_cutoff: '2026-10-26'
evidence_since: '2025-10-01'
last_read: null
status: unread
---

# GitLab — detailed AI-development research

[Profile](index.md) · [Workflow](workflow.md) · [Sources](sources.md) · [Slides](slides.md)

**Scope:** DevEx team policy and the broader R&D playbook, at verified revisions.

## The earlier date gap is resolved

The DevEx source is now tied to its March revision; the R&D playbook to its October revision. Both pinned chapters and their commit metadata were inspected. This upgrades provenance, not proof of compliance. [S01–S04](sources.md)

## Two levels of declared workflow

DevEx documents assisted work with ordinary human review and contribution labels. The broader playbook connects specification, constrained implementation, CI and independent review. It does not establish that every independent reviewer is human. [S01](sources.md#s01) [S02](sources.md#s02)

## Read policy language precisely

A company handbook is valuable because the intended practice is inspectable, contestable and versioned. That does not make every line operational fact. Words such as required, recommended, available and observed have different meanings. The source register marks these chapters Declared policy, rather than upgrading them to Reported company use merely because internal examples are mentioned.

The actor distinction is particularly consequential. A team policy that specifically retains human review should not be generalized across an organisation when another document deliberately uses actor-neutral review language. Conversely, actor-neutral language is not proof that autonomous merging is routine. The decision-maker, independence of review and authority to release need separate evidence.

## Constraints need independent ownership

A CI check and its baseline can fail together if an agent is allowed to rewrite both. That is why a reader should inspect ownership and exception paths rather than counting the number of stated safeguards. Likewise, retaining the number of tests cannot establish that assertions still observe meaningful behaviour. These are our review questions, not an allegation that GitLab's examples are ineffective. The [optional exercise](workflow.md#optional-practice) makes the distinction concrete without claiming a company implementation.

## Public artifacts and private execution

The playbook's internal-example summaries are leads to actual projects. Their full work histories and private CI environments were not independently examined here. Open-core source availability makes some engineering visible, but it does not automatically expose every internal workflow or licensed component. The comparison stays at the documented policy/team level where execution evidence is absent.

## Comparison claims

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated · Declared policy.** The playbook targets reliable agent-assisted delivery.

Published intent, not measured effectiveness.

Publication / revision: **2026-10-13 (verified revision)**. Practice: Published R&D guidance; not every team’s observed workflow. Checked: 2026-10-26. Format: Pinned organisational playbook.

[Primary evidence](https://gitlab.com/gitlab-com/content-sites/handbook/-/blob/5f92de4547bca68f41f5ec784e621f097c1e8b38/content/handbook/engineering/workflow/ai-assisted-development.md) · [Source record](sources.md#s02)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Stated · Declared policy.** The playbook connects requirements to technical specifications.

Declared R&D framework, not observed adherence.

Publication / revision: **2026-10-13 (verified revision)**. Practice: Published R&D guidance; not every team’s observed workflow. Checked: 2026-10-26. Format: Pinned organisational playbook.

[Primary evidence](https://gitlab.com/gitlab-com/content-sites/handbook/-/blob/5f92de4547bca68f41f5ec784e621f097c1e8b38/content/handbook/engineering/workflow/ai-assisted-development.md) · [Source record](sources.md#s02)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Stated · Declared policy.** Planning, implementation and verification are separate stages.

The framework does not establish a fixed increment size.

Publication / revision: **2026-10-13 (verified revision)**. Practice: Published R&D guidance; not every team’s observed workflow. Checked: 2026-10-26. Format: Pinned organisational playbook.

[Primary evidence](https://gitlab.com/gitlab-com/content-sites/handbook/-/blob/5f92de4547bca68f41f5ec784e621f097c1e8b38/content/handbook/engineering/workflow/ai-assisted-development.md) · [Source record](sources.md#s02)

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Stated · Declared policy.** The playbook prescribes test-first CI constraints.

Recommendation in published policy; test counts alone do not prove test quality.

Publication / revision: **2026-10-13 (verified revision)**. Practice: Published R&D guidance; not every team’s observed workflow. Checked: 2026-10-26. Format: Pinned organisational playbook.

[Primary evidence](https://gitlab.com/gitlab-com/content-sites/handbook/-/blob/5f92de4547bca68f41f5ec784e621f097c1e8b38/content/handbook/engineering/workflow/ai-assisted-development.md) · [Source record](sources.md#s02)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Stated · Declared policy.** Structural and contract checks encode design constraints.

Published examples, not deployed controls verified in every repository.

Publication / revision: **2026-10-13 (verified revision)**. Practice: Published R&D guidance; not every team’s observed workflow. Checked: 2026-10-26. Format: Pinned organisational playbook.

[Primary evidence](https://gitlab.com/gitlab-com/content-sites/handbook/-/blob/5f92de4547bca68f41f5ec784e621f097c1e8b38/content/handbook/engineering/workflow/ai-assisted-development.md) · [Source record](sources.md#s02)

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated · Declared policy.** DevEx requires ordinary human code review.

Team policy. The broader playbook uses actor-neutral independent review; do not generalize.

Publication / revision: **2026-03-16 (verified revision)**. Practice: Declared DevEx practice; exact sessions unknown. Checked: 2026-10-26. Format: Pinned team handbook chapter.

[Primary evidence](https://gitlab.com/gitlab-com/content-sites/handbook/-/blob/946c9f1441d92caa142091e0678e7dbdac3d38c3/content/handbook/engineering/infrastructure-platforms/developer-experience/ai/_index.md) · [Source record](sources.md#s01)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Stated · Declared policy.** Readiness determines the recommended autonomy level.

A maturity framework, not evidence that every team uses the highest level.

Publication / revision: **2026-10-13 (verified revision)**. Practice: Published R&D guidance; not every team’s observed workflow. Checked: 2026-10-26. Format: Pinned organisational playbook.

[Primary evidence](https://gitlab.com/gitlab-com/content-sites/handbook/-/blob/5f92de4547bca68f41f5ec784e621f097c1e8b38/content/handbook/engineering/workflow/ai-assisted-development.md) · [Source record](sources.md#s02)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Stated · Declared policy.** Repository records anchor reusable agent context.

Published design; completeness and freshness were not audited.

Publication / revision: **2026-10-13 (verified revision)**. Practice: Published R&D guidance; not every team’s observed workflow. Checked: 2026-10-26. Format: Pinned organisational playbook.

[Primary evidence](https://gitlab.com/gitlab-com/content-sites/handbook/-/blob/5f92de4547bca68f41f5ec784e621f097c1e8b38/content/handbook/engineering/workflow/ai-assisted-development.md) · [Source record](sources.md#s02)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Stated · Declared policy.** DevEx names Duo, Claude and GitLab MCP.

Declared team tool use at the pinned revision; private installed setup unverified.

Publication / revision: **2026-03-16 (verified revision)**. Practice: Declared DevEx practice; exact sessions unknown. Checked: 2026-10-26. Format: Pinned team handbook chapter.

[Primary evidence](https://gitlab.com/gitlab-com/content-sites/handbook/-/blob/946c9f1441d92caa142091e0678e7dbdac3d38c3/content/handbook/engineering/infrastructure-platforms/developer-experience/ai/_index.md) · [Source record](sources.md#s01)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Stated · Declared policy.** CI and independent review precede integration.

Actor-neutral review wording. Production release authority remains unknown.

Publication / revision: **2026-10-13 (verified revision)**. Practice: Published R&D guidance; not every team’s observed workflow. Checked: 2026-10-26. Format: Pinned organisational playbook.

[Primary evidence](https://gitlab.com/gitlab-com/content-sites/handbook/-/blob/5f92de4547bca68f41f5ec784e621f097c1e8b38/content/handbook/engineering/workflow/ai-assisted-development.md) · [Source record](sources.md#s02)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Stated · Declared policy.** DevEx forbids unreviewed code and confidential-data leakage.

Declared policy, not proof of runtime prevention or a complete permissions model.

Publication / revision: **2026-03-16 (verified revision)**. Practice: Declared DevEx practice; exact sessions unknown. Checked: 2026-10-26. Format: Pinned team handbook chapter.

[Primary evidence](https://gitlab.com/gitlab-com/content-sites/handbook/-/blob/946c9f1441d92caa142091e0678e7dbdac3d38c3/content/handbook/engineering/infrastructure-platforms/developer-experience/ai/_index.md) · [Source record](sources.md#s01)

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Stated · Declared policy.** Assistance labels describe contribution, not product value.

Labels are self-classification; they do not establish causal productivity or quality gains.

Publication / revision: **2026-03-16 (verified revision)**. Practice: Declared DevEx practice; exact sessions unknown. Checked: 2026-10-26. Format: Pinned team handbook chapter.

[Primary evidence](https://gitlab.com/gitlab-com/content-sites/handbook/-/blob/946c9f1441d92caa142091e0678e7dbdac3d38c3/content/handbook/engineering/infrastructure-platforms/developer-experience/ai/_index.md) · [Source record](sources.md#s01)
