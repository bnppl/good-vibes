---
title: Robert C. Martin
parent: Engineers
has_children: true
nav_order: 15
engineer_profile: true
cache_schema: 1
person_id: robert-c-martin
canonical_name: Robert C. Martin
aliases:
- Uncle Bob
- Robert Martin
- Bob Martin
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
last_updated: '2026-10-26'
last_read: null
status: unread
tagline: Engineer the checks. Keep responsibility. Revisit the machinery.
summary: September supervision supersedes the custom-harness story. Personal trials, recommendations and unknowns
  are dated separately.
strengths:
- Test sensitivity
- Behaviour and structure
- Explicit responsibilities
tools_summary: 'September 2026 interview: Grok TUI, prior Codex/Claude, above-code supervision; SwarmForge is a
  separately dated artifact.'
slides_url: /engineers/robert-c-martin/learn/
dimensions:
- id: D01
  title: Goal and bottleneck
  position: The joint Robert/Justin Martin teaching outline proposes engineering discipline for agent work.
  evidence: Stated
  claim: C01
  detail: recent-ai.md#c01
  source: https://cleancoders.com/episode/agentic-discipline-1
  checked: '2026-10-26'
  qualification: Public coauthored teaching description, not a measured universal bottleneck.
  evidence_kind: Joint recommendation
  published: 2026-02 (catalogue month; exact day unknown)
  practice_date: Public Robert/Justin Martin episode outline; recording not inspected
  source_id: S01
  ai_specific: true
  source_format: Public episode description (recording not inspected)
- id: D02
  title: Requirements and specification
  position: In September he describes human-authored or reviewed Gherkin for elaborate behaviour.
  evidence: Stated
  claim: C02
  detail: recent-ai.md#c02
  source: https://www.aviator.co/podcast/uncle-bob-martin-ai-clean-code
  checked: '2026-10-26'
  qualification: Interview-page self-report; not a mandatory format for every task.
  evidence_kind: Personal use
  published: '2026-09-24'
  practice_date: Interview-page account of then-current practice; full recording not checked
  source_id: S13
  ai_specific: true
  source_format: Interview page (full recording not checked)
- id: D03
  title: Increment and planning
  position: Recent AI-specific evidence for this dimension is not established in the reviewed material.
  evidence: Not established
  claim: C03
  detail: recent-ai.md#c03
  source: ''
  checked: '2026-10-26'
  qualification: Older guidance and undated artifacts remain in the background archive. This gap does not imply
    opposition or absence of use.
  evidence_kind: Not established
  published: Not established
  practice_date: Not established
  source_id: ''
  ai_specific: false
  source_format: Not established
- id: D04
  title: Testing and verification
  position: In September he reports unit tests, CRAP and mutation checks with relaxed constraints.
  evidence: Stated
  claim: C04
  detail: recent-ai.md#c04
  source: https://www.aviator.co/podcast/uncle-bob-martin-ai-clean-code
  checked: '2026-10-26'
  qualification: Self-report; metric thresholds evolve and no results were reproduced.
  evidence_kind: Personal use
  published: '2026-09-24'
  practice_date: Interview-page account of then-current practice; full recording not checked
  source_id: S13
  ai_specific: true
  source_format: Interview page (full recording not checked)
- id: D05
  title: Design and refactoring
  position: He reports relaxing structural constraints when agents remain coherent.
  evidence: Stated
  claim: C05
  detail: recent-ai.md#c05
  source: https://www.aviator.co/podcast/uncle-bob-martin-ai-clean-code
  checked: '2026-10-26'
  qualification: September account supersedes timeless small-function assumptions; no universal architecture follows.
  evidence_kind: Personal use
  published: '2026-09-24'
  practice_date: Interview-page account of then-current practice; full recording not checked
  source_id: S13
  ai_specific: true
  source_format: Interview page (full recording not checked)
- id: D06
  title: Human understanding and review
  position: His 24 September 2026 interview-page account reports mostly above-code supervision, with occasional
    inspection.
  evidence: Stated
  claim: C06
  detail: recent-ai.md#c06
  source: https://www.aviator.co/podcast/uncle-bob-martin-ai-clean-code
  checked: '2026-10-26'
  qualification: Inspected first-person episode text, not a verified complete recording; not a universal no-source-reading
    policy or safety result.
  evidence_kind: Personal use
  published: '2026-09-24'
  practice_date: Interview-page account of then-current practice; full recording not checked
  source_id: S13
  ai_specific: true
  source_format: Interview page (full recording not checked)
- id: D07
  title: Agent autonomy and coordination
  position: His 24 September 2026 interview-page account reports moving away from his custom harness.
  evidence: Stated
  claim: C07
  detail: recent-ai.md#c07
  source: https://www.aviator.co/podcast/uncle-bob-martin-ai-clean-code
  checked: '2026-10-26'
  qualification: Earlier public multi-agent teaching and the published framework remain separate evidence; private
    current topology unknown.
  evidence_kind: Personal use
  published: '2026-09-24'
  practice_date: Interview-page account of then-current practice; full recording not checked
  source_id: S13
  ai_specific: true
  source_format: Interview page (full recording not checked)
- id: D08
  title: Context and durable state
  position: Pinned SwarmForge handoff documentation prescribes committed, structured work items.
  evidence: Demonstrated
  claim: C08
  detail: recent-ai.md#c08
  source: https://github.com/unclebob/swarm-forge/blob/f4f5fbcae0de6f7dcc26e82400334227647cfdb2/swarmforge/constitution/articles/handoffs.prompt
  checked: '2026-10-26'
  qualification: Published artifact at pinned revision; not executed. Durable task records do not establish application
    persistence.
  evidence_kind: Published artifact
  published: '2026-09-04'
  practice_date: Pinned SwarmForge instructions; not an executed handoff
  source_id: S12
  ai_specific: true
  source_format: Repository artifact
- id: D09
  title: Tooling and environment
  position: In September he names Grok TUI, with prior Codex and Claude use.
  evidence: Stated
  claim: C09
  detail: recent-ai.md#c09
  source: https://www.aviator.co/podcast/uncle-bob-martin-ai-clean-code
  checked: '2026-10-26'
  qualification: Dated interview account; SwarmForge publication does not prove continued personal use.
  evidence_kind: Personal use
  published: '2026-09-24'
  practice_date: Interview-page account of then-current practice; full recording not checked
  source_id: S13
  ai_specific: true
  source_format: Interview page (full recording not checked)
- id: D10
  title: Integration and release
  position: Pinned SwarmForge documentation prescribes assigned checkouts and committed handoffs; full current integration/release
    policy is unknown.
  evidence: Demonstrated
  claim: C10
  detail: recent-ai.md#c10
  source: https://github.com/unclebob/swarm-forge/blob/f4f5fbcae0de6f7dcc26e82400334227647cfdb2/swarmforge/constitution/articles/workflow.prompt
  checked: '2026-10-26'
  qualification: Inspected workflow and handoff instructions (S11/S12), not an observed integration, deployment
    or rollback arrangement.
  evidence_kind: Published artifact
  published: '2026-09-04'
  practice_date: Pinned SwarmForge instructions; not a current private release log
  source_id: S11
  ai_specific: true
  source_format: Repository artifact
- id: D11
  title: Boundaries and safeguards
  position: Pinned SwarmForge engineering instructions forbid fabricated metric substitutes and hand-edited mutation
    manifests.
  evidence: Demonstrated
  claim: C11
  detail: recent-ai.md#c11
  source: https://github.com/unclebob/swarm-forge/blob/f4f5fbcae0de6f7dcc26e82400334227647cfdb2/swarmforge/constitution/articles/engineering.prompt
  checked: '2026-10-26'
  qualification: Inspected prompt instructions do not establish filesystem permissions, enforcement completeness
    or security efficacy.
  evidence_kind: Published artifact
  published: '2026-09-04'
  practice_date: Pinned SwarmForge instructions; not proof of enforcement
  source_id: S10
  ai_specific: true
  source_format: Repository artifact
- id: D12
  title: Evaluation and tradeoffs
  position: His 24 September 2026 interview-page account describes adjusting constraints after observing agent confusion.
  evidence: Stated
  claim: C12
  detail: recent-ai.md#c12
  source: https://www.aviator.co/podcast/uncle-bob-martin-ai-clean-code
  checked: '2026-10-26'
  qualification: Contextual personal judgment; no universal thresholds or controlled superiority established.
  evidence_kind: Personal use
  published: '2026-09-24'
  practice_date: Interview-page account of then-current practice; full recording not checked
  source_id: S13
  ai_specific: true
  source_format: Interview page (full recording not checked)
practice_focus: coding-workflows
evidence_since: '2025-10-01'
evidence_focus: AI-specific publications since October 2025; personal use distinguished from advice
---

# Robert C. Martin

[Recent AI evidence](recent-ai.md) · [Slideshow]({{ '/engineers/robert-c-martin/learn/' | relative_url }}) · [Compare profiles]({{ '/engineers/compare/' | relative_url }})

## Research map

[AI use and recent publications](recent-ai.md) · [Earlier detailed research](research.md) · [Source register](sources.md) · [Comparison history](background.md) · [Slide notes](slides.md)

The comparison prioritises AI-specific publications since **1 October 2025**. Publication date does not establish when a practice occurred. Older general advice no longer fills missing recent fields.

## Comparison evidence

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated · Joint recommendation.** The joint Robert/Justin Martin teaching outline proposes engineering discipline for agent work.

Source format: Public episode description (recording not inspected). Published / revision: **2026-02 (catalogue month; exact day unknown)**. Practice: Public Robert/Justin Martin episode outline; recording not inspected.

Public coauthored teaching description, not a measured universal bottleneck.

[Recent evidence](recent-ai.md#c01) · [Primary source](https://cleancoders.com/episode/agentic-discipline-1)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Stated · Personal use.** In September he describes human-authored or reviewed Gherkin for elaborate behaviour.

Source format: Interview page (full recording not checked). Published / revision: **2026-09-24**. Practice: Interview-page account of then-current practice; full recording not checked.

Interview-page self-report; not a mandatory format for every task.

[Recent evidence](recent-ai.md#c02) · [Primary source](https://www.aviator.co/podcast/uncle-bob-martin-ai-clean-code)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Not established · Not established.** Recent AI-specific evidence for this dimension is not established in the reviewed material.

Source format: Not established. Published / revision: **Not established**. Practice: Not established.

Older guidance and undated artifacts remain in the background archive. This gap does not imply opposition or absence of use.

[Recent evidence](recent-ai.md#c03)

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Stated · Personal use.** In September he reports unit tests, CRAP and mutation checks with relaxed constraints.

Source format: Interview page (full recording not checked). Published / revision: **2026-09-24**. Practice: Interview-page account of then-current practice; full recording not checked.

Self-report; metric thresholds evolve and no results were reproduced.

[Recent evidence](recent-ai.md#c04) · [Primary source](https://www.aviator.co/podcast/uncle-bob-martin-ai-clean-code)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Stated · Personal use.** He reports relaxing structural constraints when agents remain coherent.

Source format: Interview page (full recording not checked). Published / revision: **2026-09-24**. Practice: Interview-page account of then-current practice; full recording not checked.

September account supersedes timeless small-function assumptions; no universal architecture follows.

[Recent evidence](recent-ai.md#c05) · [Primary source](https://www.aviator.co/podcast/uncle-bob-martin-ai-clean-code)

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated · Personal use.** His 24 September 2026 interview-page account reports mostly above-code supervision, with occasional inspection.

Source format: Interview page (full recording not checked). Published / revision: **2026-09-24**. Practice: Interview-page account of then-current practice; full recording not checked.

Inspected first-person episode text, not a verified complete recording; not a universal no-source-reading policy or safety result.

[Recent evidence](recent-ai.md#c06) · [Primary source](https://www.aviator.co/podcast/uncle-bob-martin-ai-clean-code)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Stated · Personal use.** His 24 September 2026 interview-page account reports moving away from his custom harness.

Source format: Interview page (full recording not checked). Published / revision: **2026-09-24**. Practice: Interview-page account of then-current practice; full recording not checked.

Earlier public multi-agent teaching and the published framework remain separate evidence; private current topology unknown.

[Recent evidence](recent-ai.md#c07) · [Primary source](https://www.aviator.co/podcast/uncle-bob-martin-ai-clean-code)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Demonstrated · Published artifact.** Pinned SwarmForge handoff documentation prescribes committed, structured work items.

Source format: Repository artifact. Published / revision: **2026-09-04**. Practice: Pinned SwarmForge instructions; not an executed handoff.

Published artifact at pinned revision; not executed. Durable task records do not establish application persistence.

[Recent evidence](recent-ai.md#c08) · [Primary source](https://github.com/unclebob/swarm-forge/blob/f4f5fbcae0de6f7dcc26e82400334227647cfdb2/swarmforge/constitution/articles/handoffs.prompt)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Stated · Personal use.** In September he names Grok TUI, with prior Codex and Claude use.

Source format: Interview page (full recording not checked). Published / revision: **2026-09-24**. Practice: Interview-page account of then-current practice; full recording not checked.

Dated interview account; SwarmForge publication does not prove continued personal use.

[Recent evidence](recent-ai.md#c09) · [Primary source](https://www.aviator.co/podcast/uncle-bob-martin-ai-clean-code)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Demonstrated · Published artifact.** Pinned SwarmForge documentation prescribes assigned checkouts and committed handoffs; full current integration/release policy is unknown.

Source format: Repository artifact. Published / revision: **2026-09-04**. Practice: Pinned SwarmForge instructions; not a current private release log.

Inspected workflow and handoff instructions (S11/S12), not an observed integration, deployment or rollback arrangement.

[Recent evidence](recent-ai.md#c10) · [Primary source](https://github.com/unclebob/swarm-forge/blob/f4f5fbcae0de6f7dcc26e82400334227647cfdb2/swarmforge/constitution/articles/workflow.prompt)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Demonstrated · Published artifact.** Pinned SwarmForge engineering instructions forbid fabricated metric substitutes and hand-edited mutation manifests.

Source format: Repository artifact. Published / revision: **2026-09-04**. Practice: Pinned SwarmForge instructions; not proof of enforcement.

Inspected prompt instructions do not establish filesystem permissions, enforcement completeness or security efficacy.

[Recent evidence](recent-ai.md#c11) · [Primary source](https://github.com/unclebob/swarm-forge/blob/f4f5fbcae0de6f7dcc26e82400334227647cfdb2/swarmforge/constitution/articles/engineering.prompt)

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Stated · Personal use.** His 24 September 2026 interview-page account describes adjusting constraints after observing agent confusion.

Source format: Interview page (full recording not checked). Published / revision: **2026-09-24**. Practice: Interview-page account of then-current practice; full recording not checked.

Contextual personal judgment; no universal thresholds or controlled superiority established.

[Recent evidence](recent-ai.md#c12) · [Primary source](https://www.aviator.co/podcast/uncle-bob-martin-ai-clean-code)
