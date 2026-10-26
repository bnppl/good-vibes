---
title: Coinbase
parent: Companies
nav_order: 10
company_profile: true
company_id: coinbase
industry: Crypto / financial infrastructure
organisation_context: Large public company
research_checked: '2026-10-26'
evidence_since: '2025-10-01'
published: '2026-06-03'
evidence_kind: Reported team use
last_updated: '2026-10-26'
last_read: null
status: unread
canonical_name: Coinbase
has_children: true
cache_schema: 1
aliases: []
practice_focus: coding-workflows
focus_note: Internal tooling Figma-to-Code case and the May 2026 Mux adoption account; not all Coinbase engineering
  or trading software.
research_cutoff: '2026-10-26'
tagline: Prepare references, split the output, and preserve human judgment.
summary: Coinbase’s authored Figma-to-Code account supplies a concrete plan/scaffold/worker workflow with local
  validation and human corrections. Its separate Mux account explains isolated parallel sessions while explicitly
  acknowledging selection bias in output metrics.
strengths:
- Reference-driven generation
- Reviewable work slices
- Explicit metric caveats
tools_summary: 'June internal tooling: screenshot inputs, reference implementations, versioned rules/templates and
  local checks. May Mux: worktree/branch/terminal isolation within a broader portfolio including Cursor, Copilot,
  OpenCode and Claude Code.'
slides_url: /companies/coinbase/learn/
dimensions:
- id: D01
  title: Goal and bottleneck
  position: Address orchestration capacity after agents reduce implementation waiting time.
  evidence: Stated
  claim: C01
  detail: research.md#c01
  source: https://www.coinbase.com/blog/coding-had-a-concurrency-problem-how-mux-helped-solve-it
  checked: '2026-10-26'
  qualification: The Mux account’s diagnosis, not a controlled company-wide bottleneck result.
  evidence_kind: Reported company use
  published: '2026-05-11'
  practice_date: Early-2026 rollout; reported adoption/output observations include April 2026
  source_id: S02
  ai_specific: true
  source_format: Authored engineering account
- id: D02
  title: Requirements and specification
  position: Provide a real reference implementation, explicit rules and parameterised prompts.
  evidence: Stated
  claim: C02
  detail: research.md#c02
  source: https://www.coinbase.com/blog/automating-figma-to-code-at-coinbase
  checked: '2026-10-26'
  qualification: Specific internal tooling case; quality depends on the example and omitted domain knowledge.
  evidence_kind: Reported team use
  published: '2026-06-03'
  practice_date: Internal tooling pilot and FCM feature before June publication; exact dates not stated
  source_id: S01
  ai_specific: true
  source_format: Authored engineering case study
- id: D03
  title: Increment and planning
  position: Approve a plan, scaffold shared structure, then implement focused slices.
  evidence: Stated
  claim: C03
  detail: research.md#c03
  source: https://www.coinbase.com/blog/automating-figma-to-code-at-coinbase
  checked: '2026-10-26'
  qualification: Introduced after overly large initial PRs; not proof every Coinbase feature follows it.
  evidence_kind: Reported team use
  published: '2026-06-03'
  practice_date: Internal tooling pilot and FCM feature before June publication; exact dates not stated
  source_id: S01
  ai_specific: true
  source_format: Authored engineering case study
- id: D04
  title: Testing and verification
  position: Run lint, typing, formatting, query and test gates before proposing changes.
  evidence: Stated
  claim: C04
  detail: research.md#c04
  source: https://www.coinbase.com/blog/automating-figma-to-code-at-coinbase
  checked: '2026-10-26'
  qualification: Human reviewers still added missing edge-case coverage.
  evidence_kind: Reported team use
  published: '2026-06-03'
  practice_date: Internal tooling pilot and FCM feature before June publication; exact dates not stated
  source_id: S01
  ai_specific: true
  source_format: Authored engineering case study
- id: D05
  title: Design and refactoring
  position: Reuse established structural patterns while leaving domain judgment to engineers.
  evidence: Stated
  claim: C05
  detail: research.md#c05
  source: https://www.coinbase.com/blog/automating-figma-to-code-at-coinbase
  checked: '2026-10-26'
  qualification: A pattern-based internal tooling case, not a universal application architecture.
  evidence_kind: Reported team use
  published: '2026-06-03'
  practice_date: Internal tooling pilot and FCM feature before June publication; exact dates not stated
  source_id: S01
  ai_specific: true
  source_format: Authored engineering case study
- id: D06
  title: Human understanding and review
  position: Humans refine domain logic, UI detail, edge-case tests and integrations.
  evidence: Stated
  claim: C06
  detail: research.md#c06
  source: https://www.coinbase.com/blog/automating-figma-to-code-at-coinbase
  checked: '2026-10-26'
  qualification: The article reports a successful case; review effectiveness was not independently measured.
  evidence_kind: Reported team use
  published: '2026-06-03'
  practice_date: Internal tooling pilot and FCM feature before June publication; exact dates not stated
  source_id: S01
  ai_specific: true
  source_format: Authored engineering case study
- id: D07
  title: Agent autonomy and coordination
  position: Give concurrent agents separate worktrees, branches and terminals.
  evidence: Stated
  claim: C07
  detail: research.md#c07
  source: https://www.coinbase.com/blog/coding-had-a-concurrency-problem-how-mux-helped-solve-it
  checked: '2026-10-26'
  qualification: Isolation reduces workspace interference, not semantic integration conflicts.
  evidence_kind: Reported company use
  published: '2026-05-11'
  practice_date: Early-2026 rollout; reported adoption/output observations include April 2026
  source_id: S02
  ai_specific: true
  source_format: Authored engineering account
- id: D08
  title: Context and durable state
  position: Version and review rules and prompts as shared engineering assets.
  evidence: Stated
  claim: C08
  detail: research.md#c08
  source: https://www.coinbase.com/blog/automating-figma-to-code-at-coinbase
  checked: '2026-10-26'
  qualification: Internal artifacts described, not publicly inspected or executed here.
  evidence_kind: Reported team use
  published: '2026-06-03'
  practice_date: Internal tooling pilot and FCM feature before June publication; exact dates not stated
  source_id: S01
  ai_specific: true
  source_format: Authored engineering case study
- id: D09
  title: Tooling and environment
  position: Use Mux alongside multiple coding tools rather than a single mandated agent.
  evidence: Stated
  claim: C09
  detail: research.md#c09
  source: https://www.coinbase.com/blog/coding-had-a-concurrency-problem-how-mux-helped-solve-it
  checked: '2026-10-26'
  qualification: May portfolio account; an exact October tool/model inventory is not established.
  evidence_kind: Reported company use
  published: '2026-05-11'
  practice_date: Early-2026 rollout; reported adoption/output observations include April 2026
  source_id: S02
  ai_specific: true
  source_format: Authored engineering account
- id: D10
  title: Integration and release
  position: Use draft scaffold and component PRs to make generated work reviewable.
  evidence: Stated
  claim: C10
  detail: research.md#c10
  source: https://www.coinbase.com/blog/automating-figma-to-code-at-coinbase
  checked: '2026-10-26'
  qualification: Merge and launch remain human work; complete release and rollback controls are unknown.
  evidence_kind: Reported team use
  published: '2026-06-03'
  practice_date: Internal tooling pilot and FCM feature before June publication; exact dates not stated
  source_id: S01
  ai_specific: true
  source_format: Authored engineering case study
- id: D11
  title: Boundaries and safeguards
  position: A recent AI-assisted development policy for this dimension is not established in the reviewed accounts.
  evidence: Not established
  claim: C11
  detail: research.md#c11
  source: ''
  checked: '2026-10-26'
  qualification: The bounded gap is not evidence of opposition, absence of practice or poor engineering. General
    principles cannot fill it.
  evidence_kind: Not established
  published: Not established
  practice_date: Not established
  source_id: ''
  ai_specific: false
  source_format: Not established
- id: D12
  title: Evaluation and tradeoffs
  position: Interpret adoption/output comparisons with explicit self-selection caveats.
  evidence: Stated
  claim: C12
  detail: research.md#c12
  source: https://www.coinbase.com/blog/coding-had-a-concurrency-problem-how-mux-helped-solve-it
  checked: '2026-10-26'
  qualification: PR volume is not customer value and does not establish a causal tool effect.
  evidence_kind: Reported company use
  published: '2026-05-11'
  practice_date: Early-2026 rollout; reported adoption/output observations include April 2026
  source_id: S02
  ai_specific: true
  source_format: Authored engineering account
comparison_group: crypto
---

# Coinbase: building software using AI

[Detailed research](research.md) · [Observed workflow and optional practice](workflow.md) · [Source register](sources.md) · [Slide notes](slides.md) · [Open slideshow]({{ '/companies/coinbase/learn/' | relative_url }}) · [Company comparison](../comparison.md)

Coinbase’s authored Figma-to-Code account supplies a concrete plan/scaffold/worker workflow with local validation and human corrections. Its separate Mux account explains isolated parallel sessions while explicitly acknowledging selection bias in output metrics.

**Evidence scope:** Internal tooling Figma-to-Code case and the May 2026 Mux adoption account; not all Coinbase engineering or trading software.

Publication window: **1 October 2025–26 October 2026**. Publication, practice and inspection dates are distinct. Only actual AI-assisted development evidence fills the active fields; older OSS background and unverified private setup do not.

## What makes this a useful engineering study

Reuse reference implementations and rules for repetitive UI work. The open-source link provides a concrete place to inspect code, contribution practices and engineering artifacts. It is background for selection, not proof that this AI workflow produced that project or that every team works identically.

## Comparison evidence

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated · Reported company use.** Address orchestration capacity after agents reduce implementation waiting time.

The Mux account’s diagnosis, not a controlled company-wide bottleneck result.

Source format: Authored engineering account. Published / revision: **2026-05-11**. Practice: Early-2026 rollout; reported adoption/output observations include April 2026. Checked: 2026-10-26.

[Primary source](https://www.coinbase.com/blog/coding-had-a-concurrency-problem-how-mux-helped-solve-it) · [Source register](sources.md#s02)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Stated · Reported team use.** Provide a real reference implementation, explicit rules and parameterised prompts.

Specific internal tooling case; quality depends on the example and omitted domain knowledge.

Source format: Authored engineering case study. Published / revision: **2026-06-03**. Practice: Internal tooling pilot and FCM feature before June publication; exact dates not stated. Checked: 2026-10-26.

[Primary source](https://www.coinbase.com/blog/automating-figma-to-code-at-coinbase) · [Source register](sources.md#s01)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Stated · Reported team use.** Approve a plan, scaffold shared structure, then implement focused slices.

Introduced after overly large initial PRs; not proof every Coinbase feature follows it.

Source format: Authored engineering case study. Published / revision: **2026-06-03**. Practice: Internal tooling pilot and FCM feature before June publication; exact dates not stated. Checked: 2026-10-26.

[Primary source](https://www.coinbase.com/blog/automating-figma-to-code-at-coinbase) · [Source register](sources.md#s01)

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Stated · Reported team use.** Run lint, typing, formatting, query and test gates before proposing changes.

Human reviewers still added missing edge-case coverage.

Source format: Authored engineering case study. Published / revision: **2026-06-03**. Practice: Internal tooling pilot and FCM feature before June publication; exact dates not stated. Checked: 2026-10-26.

[Primary source](https://www.coinbase.com/blog/automating-figma-to-code-at-coinbase) · [Source register](sources.md#s01)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Stated · Reported team use.** Reuse established structural patterns while leaving domain judgment to engineers.

A pattern-based internal tooling case, not a universal application architecture.

Source format: Authored engineering case study. Published / revision: **2026-06-03**. Practice: Internal tooling pilot and FCM feature before June publication; exact dates not stated. Checked: 2026-10-26.

[Primary source](https://www.coinbase.com/blog/automating-figma-to-code-at-coinbase) · [Source register](sources.md#s01)

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated · Reported team use.** Humans refine domain logic, UI detail, edge-case tests and integrations.

The article reports a successful case; review effectiveness was not independently measured.

Source format: Authored engineering case study. Published / revision: **2026-06-03**. Practice: Internal tooling pilot and FCM feature before June publication; exact dates not stated. Checked: 2026-10-26.

[Primary source](https://www.coinbase.com/blog/automating-figma-to-code-at-coinbase) · [Source register](sources.md#s01)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Stated · Reported company use.** Give concurrent agents separate worktrees, branches and terminals.

Isolation reduces workspace interference, not semantic integration conflicts.

Source format: Authored engineering account. Published / revision: **2026-05-11**. Practice: Early-2026 rollout; reported adoption/output observations include April 2026. Checked: 2026-10-26.

[Primary source](https://www.coinbase.com/blog/coding-had-a-concurrency-problem-how-mux-helped-solve-it) · [Source register](sources.md#s02)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Stated · Reported team use.** Version and review rules and prompts as shared engineering assets.

Internal artifacts described, not publicly inspected or executed here.

Source format: Authored engineering case study. Published / revision: **2026-06-03**. Practice: Internal tooling pilot and FCM feature before June publication; exact dates not stated. Checked: 2026-10-26.

[Primary source](https://www.coinbase.com/blog/automating-figma-to-code-at-coinbase) · [Source register](sources.md#s01)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Stated · Reported company use.** Use Mux alongside multiple coding tools rather than a single mandated agent.

May portfolio account; an exact October tool/model inventory is not established.

Source format: Authored engineering account. Published / revision: **2026-05-11**. Practice: Early-2026 rollout; reported adoption/output observations include April 2026. Checked: 2026-10-26.

[Primary source](https://www.coinbase.com/blog/coding-had-a-concurrency-problem-how-mux-helped-solve-it) · [Source register](sources.md#s02)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Stated · Reported team use.** Use draft scaffold and component PRs to make generated work reviewable.

Merge and launch remain human work; complete release and rollback controls are unknown.

Source format: Authored engineering case study. Published / revision: **2026-06-03**. Practice: Internal tooling pilot and FCM feature before June publication; exact dates not stated. Checked: 2026-10-26.

[Primary source](https://www.coinbase.com/blog/automating-figma-to-code-at-coinbase) · [Source register](sources.md#s01)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Not established · Not established.** A recent AI-assisted development policy for this dimension is not established in the reviewed accounts.

The bounded gap is not evidence of opposition, absence of practice or poor engineering. General principles cannot fill it.

Source format: Not established. Published / revision: **Not established**. Practice: Not established. Checked: 2026-10-26.

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Stated · Reported company use.** Interpret adoption/output comparisons with explicit self-selection caveats.

PR volume is not customer value and does not establish a causal tool effect.

Source format: Authored engineering account. Published / revision: **2026-05-11**. Practice: Early-2026 rollout; reported adoption/output observations include April 2026. Checked: 2026-10-26.

[Primary source](https://www.coinbase.com/blog/coding-had-a-concurrency-problem-how-mux-helped-solve-it) · [Source register](sources.md#s02)
