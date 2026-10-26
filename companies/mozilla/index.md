---
title: Mozilla
parent: Companies
nav_order: 6
company_profile: true
company_id: mozilla
industry: Browser / public-interest software
organisation_context: Established nonprofit-backed organisation
research_checked: '2026-10-26'
evidence_since: '2025-10-01'
published: '2026-05-07'
evidence_kind: Reported team use
last_updated: '2026-10-26'
last_read: null
status: unread
canonical_name: Mozilla
has_children: true
cache_schema: 1
aliases: []
practice_focus: coding-workflows
focus_note: Firefox security hardening, one Firefox Android UX prototype and a localization intern’s personal account;
  these are distinct practices.
research_cutoff: '2026-10-26'
tagline: Test the security hypothesis; prototype the real interaction.
summary: Test the security hypothesis; prototype the real interaction. Firefox security hardening, one Firefox Android
  UX prototype and a localization intern’s personal account; these are distinct practices.
strengths:
- Executable reproduction
- Real-app prototyping
- Human security triage
tools_summary: Firefox fuzzing infrastructure plus a security harness and ephemeral VMs; Claude for one Android
  prototype; Claude Code in a localization internship account. These are not a complete company-wide stack.
slides_url: /companies/mozilla/learn/
dimensions:
- id: D01
  title: Goal and bottleneck
  position: Native prototypes expose interaction details that simulations can hide.
  evidence: Stated
  claim: C01
  detail: research.md#c01
  source: https://blog.mozilla.org/ux/2026/08/let-your-designs-fail-for-the-right-reasons/
  checked: '2026-10-26'
  qualification: One designer’s exploration, not demonstrated organisation-wide design policy.
  evidence_kind: Personal use
  published: '2026-08-05'
  practice_date: Report Broken Site prototype before publication; session dates unknown
  source_id: S02
  ai_specific: true
  source_format: Authored engineering article
- id: D02
  title: Requirements and specification
  position: Requirements and missing states emerged through real-app interaction.
  evidence: Stated
  claim: C02
  detail: research.md#c02
  source: https://blog.mozilla.org/ux/2026/08/let-your-designs-fail-for-the-right-reasons/
  checked: '2026-10-26'
  qualification: An exploratory prototype does not replace product acceptance criteria.
  evidence_kind: Personal use
  published: '2026-08-05'
  practice_date: Report Broken Site prototype before publication; session dates unknown
  source_id: S02
  ai_specific: true
  source_format: Authored engineering article
- id: D03
  title: Increment and planning
  position: An eligible recent AI-specific increment and planning policy is not established in these sources.
  evidence: Not established
  claim: C03
  detail: research.md#c03
  source: ''
  checked: '2026-10-26'
  qualification: This bounded gap does not imply absence of the practice. The inspected case cannot supply a complete
    company policy.
  evidence_kind: Not established
  published: Not established
  practice_date: Not established
  source_id: ''
  ai_specific: false
  source_format: Not established
- id: D04
  title: Testing and verification
  position: Security findings arrived with executable minimal reproductions.
  evidence: Stated
  claim: C04
  detail: research.md#c04
  source: https://blog.mozilla.org/en/firefox/hardening-firefox-anthropic-red-team/
  checked: '2026-10-26'
  qualification: External discovery, Mozilla validation; a reproduction is narrower than a full regression policy.
  evidence_kind: Reported team use
  published: '2026-03-06'
  practice_date: Collaboration in weeks before Firefox 148 release
  source_id: S04
  ai_specific: true
  source_format: Authored engineering article
- id: D05
  title: Design and refactoring
  position: Layered browser defenses remained useful against model-driven investigation.
  evidence: Stated
  claim: C05
  detail: research.md#c05
  source: https://hacks.mozilla.org/2026/05/behind-the-scenes-hardening-firefox/
  checked: '2026-10-26'
  qualification: Security architecture feedback, not a general refactoring method.
  evidence_kind: Reported team use
  published: '2026-05-07'
  practice_date: Security work after February 2026 collaboration and before publication
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
- id: D06
  title: Human understanding and review
  position: One intern learned the codebase before using Claude Code.
  evidence: Stated
  claim: C06
  detail: research.md#c06
  source: https://blog.mozilla.org/l10n/2026/08/31/minding-my-language-my-internship-story/
  checked: '2026-10-26'
  qualification: A personal chronology; not a company rule delaying AI for all new engineers.
  evidence_kind: Personal use
  published: '2026-08-31'
  practice_date: Internship before August 2026 completion
  source_id: S03
  ai_specific: true
  source_format: Authored engineering article
- id: D07
  title: Agent autonomy and coordination
  position: Targeted investigations ran across ephemeral virtual machines.
  evidence: Stated
  claim: C07
  detail: research.md#c07
  source: https://hacks.mozilla.org/2026/05/behind-the-scenes-hardening-firefox/
  checked: '2026-10-26'
  qualification: Parallel security investigation does not establish autonomous production changes.
  evidence_kind: Reported team use
  published: '2026-05-07'
  practice_date: Security work after February 2026 collaboration and before publication
  source_id: S01
  ai_specific: true
  source_format: Authored engineering article
- id: D08
  title: Context and durable state
  position: An eligible recent AI-specific context and durable state policy is not established in these sources.
  evidence: Not established
  claim: C08
  detail: research.md#c08
  source: ''
  checked: '2026-10-26'
  qualification: This bounded gap does not imply absence of the practice. The inspected case cannot supply a complete
    company policy.
  evidence_kind: Not established
  published: Not established
  practice_date: Not established
  source_id: ''
  ai_specific: false
  source_format: Not established
- id: D09
  title: Tooling and environment
  position: The localization account names Claude Code for coding and review.
  evidence: Stated
  claim: C09
  detail: research.md#c09
  source: https://blog.mozilla.org/l10n/2026/08/31/minding-my-language-my-internship-story/
  checked: '2026-10-26'
  qualification: No complete installed configuration or team-wide mandatory tool is established.
  evidence_kind: Personal use
  published: '2026-08-31'
  practice_date: Internship before August 2026 completion
  source_id: S03
  ai_specific: true
  source_format: Authored engineering article
- id: D10
  title: Integration and release
  position: Mozilla engineers validated reports and shipped Firefox fixes.
  evidence: Stated
  claim: C10
  detail: research.md#c10
  source: https://blog.mozilla.org/en/firefox/hardening-firefox-anthropic-red-team/
  checked: '2026-10-26'
  qualification: A specific security response, not a universal deployment or rollback procedure.
  evidence_kind: Reported team use
  published: '2026-03-06'
  practice_date: Collaboration in weeks before Firefox 148 release
  source_id: S04
  ai_specific: true
  source_format: Authored engineering article
- id: D11
  title: Boundaries and safeguards
  position: An eligible recent AI-specific boundaries and safeguards policy is not established in these sources.
  evidence: Not established
  claim: C11
  detail: research.md#c11
  source: ''
  checked: '2026-10-26'
  qualification: This bounded gap does not imply absence of the practice. The inspected case cannot supply a complete
    company policy.
  evidence_kind: Not established
  published: Not established
  practice_date: Not established
  source_id: ''
  ai_specific: false
  source_format: Not established
- id: D12
  title: Evaluation and tradeoffs
  position: Native fidelity still left backend and cross-device gaps.
  evidence: Stated
  claim: C12
  detail: research.md#c12
  source: https://blog.mozilla.org/ux/2026/08/let-your-designs-fail-for-the-right-reasons/
  checked: '2026-10-26'
  qualification: An acknowledged prototype limit; better research outcomes had not yet been established.
  evidence_kind: Personal use
  published: '2026-08-05'
  practice_date: Report Broken Site prototype before publication; session dates unknown
  source_id: S02
  ai_specific: true
  source_format: Authored engineering article
comparison_group: infrastructure
---

# Mozilla: how software is built using AI

[Research](research.md) · [Sources](sources.md) · [Workflow and optional practice](workflow.md) · [Slide notes](slides.md) · [Slideshow]({{ '/companies/mozilla/learn/' | relative_url }})

[Company comparison](../comparison.md) · [Company cohort](../index.md)

Firefox security hardening, one Firefox Android UX prototype and a localization intern’s personal account; these are distinct practices.

Evidence window: **1 October 2025–26 October 2026**. Publication, practice and inspection dates remain separate. The sources describe reported work; the cache does not claim an independent execution or organisation-wide audit.

## Research map

Start with the [documented cases](research.md#documented-cases), then read the [observed workflow](workflow.md#observed-workflow). The optional exercise is our adaptation, not company practice. Open-source work is background for inspectability, not proof of the internal agent stack.

## Comparison claims

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated · Personal use.** Native prototypes expose interaction details that simulations can hide.

One designer’s exploration, not demonstrated organisation-wide design policy.

Source format: Authored engineering article. Published: **2026-08-05**. Practice: Report Broken Site prototype before publication; session dates unknown. Checked: 2026-10-26.

[Primary source](https://blog.mozilla.org/ux/2026/08/let-your-designs-fail-for-the-right-reasons/) · [Source register](sources.md#s02)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Stated · Personal use.** Requirements and missing states emerged through real-app interaction.

An exploratory prototype does not replace product acceptance criteria.

Source format: Authored engineering article. Published: **2026-08-05**. Practice: Report Broken Site prototype before publication; session dates unknown. Checked: 2026-10-26.

[Primary source](https://blog.mozilla.org/ux/2026/08/let-your-designs-fail-for-the-right-reasons/) · [Source register](sources.md#s02)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Not established · Not established.** An eligible recent AI-specific increment and planning policy is not established in these sources.

This bounded gap does not imply absence of the practice. The inspected case cannot supply a complete company policy.

Source format: Not established. Published: **Not established**. Practice: Not established. Checked: 2026-10-26.

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Stated · Reported team use.** Security findings arrived with executable minimal reproductions.

External discovery, Mozilla validation; a reproduction is narrower than a full regression policy.

Source format: Authored engineering article. Published: **2026-03-06**. Practice: Collaboration in weeks before Firefox 148 release. Checked: 2026-10-26.

[Primary source](https://blog.mozilla.org/en/firefox/hardening-firefox-anthropic-red-team/) · [Source register](sources.md#s04)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Stated · Reported team use.** Layered browser defenses remained useful against model-driven investigation.

Security architecture feedback, not a general refactoring method.

Source format: Authored engineering article. Published: **2026-05-07**. Practice: Security work after February 2026 collaboration and before publication. Checked: 2026-10-26.

[Primary source](https://hacks.mozilla.org/2026/05/behind-the-scenes-hardening-firefox/) · [Source register](sources.md#s01)

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated · Personal use.** One intern learned the codebase before using Claude Code.

A personal chronology; not a company rule delaying AI for all new engineers.

Source format: Authored engineering article. Published: **2026-08-31**. Practice: Internship before August 2026 completion. Checked: 2026-10-26.

[Primary source](https://blog.mozilla.org/l10n/2026/08/31/minding-my-language-my-internship-story/) · [Source register](sources.md#s03)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Stated · Reported team use.** Targeted investigations ran across ephemeral virtual machines.

Parallel security investigation does not establish autonomous production changes.

Source format: Authored engineering article. Published: **2026-05-07**. Practice: Security work after February 2026 collaboration and before publication. Checked: 2026-10-26.

[Primary source](https://hacks.mozilla.org/2026/05/behind-the-scenes-hardening-firefox/) · [Source register](sources.md#s01)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Not established · Not established.** An eligible recent AI-specific context and durable state policy is not established in these sources.

This bounded gap does not imply absence of the practice. The inspected case cannot supply a complete company policy.

Source format: Not established. Published: **Not established**. Practice: Not established. Checked: 2026-10-26.

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Stated · Personal use.** The localization account names Claude Code for coding and review.

No complete installed configuration or team-wide mandatory tool is established.

Source format: Authored engineering article. Published: **2026-08-31**. Practice: Internship before August 2026 completion. Checked: 2026-10-26.

[Primary source](https://blog.mozilla.org/l10n/2026/08/31/minding-my-language-my-internship-story/) · [Source register](sources.md#s03)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Stated · Reported team use.** Mozilla engineers validated reports and shipped Firefox fixes.

A specific security response, not a universal deployment or rollback procedure.

Source format: Authored engineering article. Published: **2026-03-06**. Practice: Collaboration in weeks before Firefox 148 release. Checked: 2026-10-26.

[Primary source](https://blog.mozilla.org/en/firefox/hardening-firefox-anthropic-red-team/) · [Source register](sources.md#s04)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Not established · Not established.** An eligible recent AI-specific boundaries and safeguards policy is not established in these sources.

This bounded gap does not imply absence of the practice. The inspected case cannot supply a complete company policy.

Source format: Not established. Published: **Not established**. Practice: Not established. Checked: 2026-10-26.

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Stated · Personal use.** Native fidelity still left backend and cross-device gaps.

An acknowledged prototype limit; better research outcomes had not yet been established.

Source format: Authored engineering article. Published: **2026-08-05**. Practice: Report Broken Site prototype before publication; session dates unknown. Checked: 2026-10-26.

[Primary source](https://blog.mozilla.org/ux/2026/08/let-your-designs-fail-for-the-right-reasons/) · [Source register](sources.md#s02)
