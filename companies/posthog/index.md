---
title: PostHog
parent: Companies
nav_order: 13
company_profile: true
company_id: posthog
industry: Product analytics / developer software
organisation_context: Startup / scale-up
research_checked: '2026-10-26'
evidence_since: '2025-10-01'
published: '2026-09-15'
evidence_kind: Reported team use
last_updated: '2026-10-26'
last_read: null
status: unread
canonical_name: PostHog
has_children: true
cache_schema: 1
aliases: []
practice_focus: coding-workflows
focus_note: Company DevEx account, a self-driving team case and Andy Maguire’s personal workflow remain separate
  scopes.
research_cutoff: '2026-10-26'
tagline: Make the work reviewable before increasing its volume.
summary: DevEx and self-driving team accounts describe PR-readiness loops, verification and explicit human decisions.
  A later personal skills account adds durable state, without defining a company-wide policy.
strengths:
- PR readiness
- Feedback loops
- Explicit state
tools_summary: Published accounts include cloud dev environments, hogli, CI, ReviewHog/Codex in a named review case,
  and versioned skills.
slides_url: /companies/posthog/learn/
dimensions:
- id: D01
  title: Goal and bottleneck
  position: DevEx work targets handling agent-produced PRs, not merely producing more code.
  evidence: Stated
  claim: C01
  detail: research.md#c01
  source: https://posthog.com/blog/10k-prs-a-month
  checked: '2026-10-26'
  qualification: The stated target is an engineering-system goal, not proof of customer value.
  evidence_kind: Reported company use
  published: '2026-07-28'
  practice_date: January–July 2026 retrospective; individual changes span that period
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
- id: D02
  title: Requirements and specification
  position: The team writes issue specs and returns unresolved product decisions to humans.
  evidence: Stated
  claim: C02
  detail: research.md#c02
  source: https://posthog.com/blog/self-driving-loops
  checked: '2026-10-26'
  qualification: One team’s loop; no universal company requirements format.
  evidence_kind: Reported team use
  published: '2026-09-15'
  practice_date: Named examples August–September 2026
  source_id: S02
  ai_specific: true
  source_format: Authored practitioner account
- id: D03
  title: Increment and planning
  position: Scouts check readiness and duplication before routing issues toward implementation.
  evidence: Stated
  claim: C03
  detail: research.md#c03
  source: https://posthog.com/blog/self-driving-loops
  checked: '2026-10-26'
  qualification: A reported workflow, not a guarantee that all duplicate work is prevented.
  evidence_kind: Reported team use
  published: '2026-09-15'
  practice_date: Named examples August–September 2026
  source_id: S02
  ai_specific: true
  source_format: Authored practitioner account
- id: D04
  title: Testing and verification
  position: Browser-driven QA and CI supply evidence before reviewers evaluate changes.
  evidence: Stated
  claim: C04
  detail: research.md#c04
  source: https://posthog.com/blog/10k-prs-a-month
  checked: '2026-10-26'
  qualification: Some improvements are early or planned; automated testing does not establish exhaustive correctness.
  evidence_kind: Reported company use
  published: '2026-07-28'
  practice_date: January–July 2026 retrospective; individual changes span that period
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
- id: D05
  title: Design and refactoring
  position: A recent, sufficiently detailed internal AI-development practice is not established for this dimension
    in the reviewed sources.
  evidence: Not established
  claim: C05
  detail: research.md#c05
  source: ''
  checked: '2026-10-26'
  qualification: This is a bounded evidence gap, not absence of use or disagreement. Historical practice and adjacent
    product safeguards do not fill it.
  evidence_kind: Not established
  published: Not established
  practice_date: Not established
  source_id: ''
  ai_specific: false
  source_format: Not established
- id: D06
  title: Human understanding and review
  position: A named fix went through agent reviews, human approval and a human merge command.
  evidence: Stated
  claim: C06
  detail: research.md#c06
  source: https://posthog.com/blog/self-driving-loops
  checked: '2026-10-26'
  qualification: One traceable example, not a policy for every PR.
  evidence_kind: Reported team use
  published: '2026-09-15'
  practice_date: Named examples August–September 2026
  source_id: S02
  ai_specific: true
  source_format: Authored practitioner account
- id: D07
  title: Agent autonomy and coordination
  position: Feedback scouts investigate, deduplicate and propose work, with human steering retained.
  evidence: Stated
  claim: C07
  detail: research.md#c07
  source: https://posthog.com/blog/self-driving-loops
  checked: '2026-10-26'
  qualification: Observed account is team-scoped; future product autonomy is separate.
  evidence_kind: Reported team use
  published: '2026-09-15'
  practice_date: Named examples August–September 2026
  source_id: S02
  ai_specific: true
  source_format: Authored practitioner account
- id: D08
  title: Context and durable state
  position: A practitioner uses versioned project skills and explicit handovers for continuity.
  evidence: Stated
  claim: C08
  detail: research.md#c08
  source: https://posthog.com/blog/how-i-use-skills-for-everything
  checked: '2026-10-26'
  qualification: Personal workflow, not a company-mandated memory layout.
  evidence_kind: Personal use
  published: '2026-10-20'
  practice_date: Work over the preceding 28 days and ongoing sessions
  source_id: S03
  ai_specific: true
  source_format: Authored practitioner account
- id: D09
  title: Tooling and environment
  position: The developer CLI and cloud environments help agents run checks and collect evidence.
  evidence: Stated
  claim: C09
  detail: research.md#c09
  source: https://posthog.com/blog/10k-prs-a-month
  checked: '2026-10-26'
  qualification: The July account includes work being built; universal availability is not established.
  evidence_kind: Reported company use
  published: '2026-07-28'
  practice_date: January–July 2026 retrospective; individual changes span that period
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
- id: D10
  title: Integration and release
  position: The published example distinguishes approval, merge and arrival in production.
  evidence: Stated
  claim: C10
  detail: research.md#c10
  source: https://posthog.com/blog/self-driving-loops
  checked: '2026-10-26'
  qualification: Timing is one case; production release authority is not generalized.
  evidence_kind: Reported team use
  published: '2026-09-15'
  practice_date: Named examples August–September 2026
  source_id: S02
  ai_specific: true
  source_format: Authored practitioner account
- id: D11
  title: Boundaries and safeguards
  position: The July account describes discretionary token spending and discussion of unusual costs.
  evidence: Stated
  claim: C11
  detail: research.md#c11
  source: https://posthog.com/blog/10k-prs-a-month
  checked: '2026-10-26'
  qualification: Dated cultural account, not proof of unlimited permissions or absence of later controls.
  evidence_kind: Reported company use
  published: '2026-07-28'
  practice_date: January–July 2026 retrospective; individual changes span that period
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
- id: D12
  title: Evaluation and tradeoffs
  position: The team inspects PR size, CI cost, reverts and reliability as output grows.
  evidence: Stated
  claim: C12
  detail: research.md#c12
  source: https://posthog.com/blog/10k-prs-a-month
  checked: '2026-10-26'
  qualification: These proxies are incomplete and do not independently establish unchanged defect risk.
  evidence_kind: Reported company use
  published: '2026-07-28'
  practice_date: January–July 2026 retrospective; individual changes span that period
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
comparison_group: developer-tools
---

# PostHog: building software using AI

[Detailed research](research.md) · [Observed workflow and optional practice](workflow.md) · [Sources](sources.md) · [Slide notes](slides.md) · [Slideshow]({{ '/companies/posthog/learn/' | relative_url }}) · [Company comparison](../comparison.md)

DevEx and self-driving team accounts describe PR-readiness loops, verification and explicit human decisions. A later personal skills account adds durable state, without defining a company-wide policy.

**Scope:** Company DevEx account, a self-driving team case and Andy Maguire’s personal workflow remain separate scopes.

The main evidence window is **1 October 2025–26 October 2026**. Publication, practice and inspection dates remain separate. These accounts were inspected, not independently executed. Open-source origin is background, not proof of a current internal coding-agent policy.

## Open-source and engineering background

[PostHog’s public repository](https://github.com/PostHog/posthog) supplies inspectable open-core engineering background. Component licences differ. Public code is not a guarantee that all private skill state, internal review tools or deployment permissions can be inspected.

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
