---
title: David Heinemeier Hansson
parent: Engineers
has_children: true
nav_order: 16
engineer_profile: true
cache_schema: 1
person_id: david-heinemeier-hansson
canonical_name: David Heinemeier Hansson
aliases:
- DHH
research_cutoff: '2026-10-27'
research_checked: '2026-10-27'
last_updated: '2026-10-27'
last_read: null
status: unread
tagline: Keep the dates. Judge the design. Build something useful.
summary: Supervised OpenCode terminal delegation in January 2026 shifts to 'pencils down' agent-written code by October 2026, alongside an isolated February OpenClaw VM experiment.
strengths:
- Product judgment
- Design clarity
- Revising assumptions
tools_summary: 'January 2026: OpenCode and Claude Code (in Omarchy) across Claude Opus 4.5, Codex 5, Gemini 3, MiniMax M2.1 and GLM-4.7; February: OpenClaw in a Proxmox VM; March: Basecamp CLI/skills is team product work.'
slides_url: /engineers/david-heinemeier-hansson/learn/
dimensions:
- id: D01
  title: Goal and bottleneck
  position: 'October 2026: declares it is time to "put down the pencils" because writing the vast majority of code by hand is no longer economically viable, shifting human focus to directing and reviewing agent "coworkers."'
  evidence: Stated
  claim: C01
  detail: recent-ai.md#c01
  source: https://world.hey.com/dhh/over-my-dead-pencil-fb0f3647
  checked: '2026-10-27'
  qualification: Combines his Rails World 2026 "pencils down" stance and room poll with an economic forecast; no controlled productivity benchmark is supplied.
  evidence_kind: Commentary
  published: '2026-10-06'
  practice_date: Rails World 2026 remarks and October 2026 forecast
  source_id: S06
  ai_specific: true
  source_format: Authored article
- id: D02
  title: Requirements and specification
  position: Recent AI-specific evidence for this dimension is not established in the reviewed material.
  evidence: Not established
  claim: C02
  detail: recent-ai.md#c02
  source: ''
  checked: '2026-10-27'
  qualification: Plain-English direction is described in general terms, but a concrete specification format or template is not established.
  evidence_kind: Not established
  published: Not established
  practice_date: Not established
  source_id: ''
  ai_specific: false
  source_format: Not established
- id: D03
  title: Increment and planning
  position: Recent AI-specific evidence for this dimension is not established in the reviewed material.
  evidence: Not established
  claim: C03
  detail: recent-ai.md#c03
  source: ''
  checked: '2026-10-27'
  qualification: Older guidance and undated artifacts remain in the background archive. This gap does not imply opposition or absence of use.
  evidence_kind: Not established
  published: Not established
  practice_date: Not established
  source_id: ''
  ai_specific: false
  source_format: Not established
- id: D04
  title: Testing and verification
  position: 'January 2026: reports that terminal coding agents control the terminal and run validation tests themselves to verify their work before human review.'
  evidence: Stated
  claim: C04
  detail: recent-ai.md#c04
  source: https://world.hey.com/dhh/promoting-ai-agents-3ee04945
  checked: '2026-10-27'
  qualification: Self-reported agent verification loop in his January OpenCode account; a complete current test-suite policy is not established, and 2014/2024 testing essays remain historical.
  evidence_kind: Personal use
  published: '2026-01-07'
  practice_date: January OpenCode workflow account
  source_id: S02
  ai_specific: true
  source_format: Authored article
- id: D05
  title: Design and refactoring
  position: Recent AI-specific evidence for this dimension is not established in the reviewed authored articles.
  evidence: Not established
  claim: C05
  detail: recent-ai.md#c05
  source: ''
  checked: '2026-10-27'
  qualification: January 2026 notes holding the line on quality and cohesion; the 2014 design essay remains historical, and linked Rails World 2026 keynote remarks were not independently transcribed in the primary register.
  evidence_kind: Not established
  published: Not established
  practice_date: Not established
  source_id: ''
  ai_specific: false
  source_format: Not established
- id: D06
  title: Human understanding and review
  position: 'January 2026: reports reviewing final agent outputs and offering guidance to hold the line on quality and cohesion, rather than using inline autocomplete that "steals the keyboard."'
  evidence: Stated
  claim: C06
  detail: recent-ai.md#c06
  source: https://world.hey.com/dhh/promoting-ai-agents-3ee04945
  checked: '2026-10-27'
  qualification: Dated self-report; October 2026 reiterates helping and occasionally disagreeing with agent "coworkers," though a formal review checklist is unknown.
  evidence_kind: Personal use
  published: '2026-01-07'
  practice_date: January OpenCode workflow account
  source_id: S02
  ai_specific: true
  source_format: Authored article
- id: D07
  title: Agent autonomy and coordination
  position: 'January 2026: reports supervised terminal-agent collaboration ("nowhere close to 90%+" agent-written code); by October 2026, argues developers will no longer write the vast majority of code by hand.'
  evidence: Stated
  claim: C07
  detail: recent-ai.md#c07
  source: https://world.hey.com/dhh/promoting-ai-agents-3ee04945
  checked: '2026-10-27'
  qualification: Documents a major 2026 shift from bounded January delegation (S02) to October "pencils down" advocacy (S06); exact private multi-agent topology remains unknown.
  evidence_kind: Personal use
  published: '2026-01-07'
  practice_date: January OpenCode account; compared with October 2026 stance
  source_id: S02
  ai_specific: true
  source_format: Authored article
- id: D08
  title: Context and durable state
  position: 'February/March 2026: reports persistent agent memory and reminders in an OpenClaw VM experiment, alongside filesystem continuity in team agent workflows.'
  evidence: Stated
  claim: C08
  detail: recent-ai.md#c08
  source: https://world.hey.com/dhh/clankers-with-claws-9f86fa71
  checked: '2026-10-27'
  qualification: OpenCode session capture (S02) and OpenClaw assistant persistence (S03) are reported; full private coding memory architecture is unknown.
  evidence_kind: Personal use
  published: '2026-02-05'
  practice_date: OpenClaw VM experiment before publication
  source_id: S03
  ai_specific: true
  source_format: Authored article
- id: D09
  title: Tooling and environment
  position: 'January 2026: uses terminal harnesses (OpenCode, Claude Code in Omarchy) rather than IDE autocomplete, switching across Claude Opus 4.5, Codex 5, Gemini 3, MiniMax M2.1 and GLM-4.7.'
  evidence: Stated
  claim: C09
  detail: recent-ai.md#c09
  source: https://world.hey.com/dhh/promoting-ai-agents-3ee04945
  checked: '2026-10-27'
  qualification: The February OpenClaw Proxmox VM trial is a separate experiment, and the March Basecamp CLI/skill release is team product work.
  evidence_kind: Personal use
  published: '2026-01-07'
  practice_date: January OpenCode workflow account
  source_id: S02
  ai_specific: true
  source_format: Authored article
- id: D10
  title: Integration and release
  position: Recent AI-specific evidence for this dimension is not established in the reviewed material.
  evidence: Not established
  claim: C10
  detail: recent-ai.md#c10
  source: ''
  checked: '2026-10-27'
  qualification: Older guidance and undated artifacts remain in the background archive. This gap does not imply opposition or absence of use.
  evidence_kind: Not established
  published: Not established
  practice_date: Not established
  source_id: ''
  ai_specific: false
  source_format: Not established
- id: D11
  title: Boundaries and safeguards
  position: 'February 2026: reports an OpenClaw experiment ("Kef") isolated from personal data and logins inside a Proxmox VM while navigating standard web UIs.'
  evidence: Stated
  claim: C11
  detail: recent-ai.md#c11
  source: https://world.hey.com/dhh/clankers-with-claws-9f86fa71
  checked: '2026-10-27'
  qualification: Single self-reported experiment, not a security audit or universal coding-agent permission policy.
  evidence_kind: Personal use
  published: '2026-02-05'
  practice_date: OpenClaw VM experiment before publication
  source_id: S03
  ai_specific: true
  source_format: Authored article
- id: D12
  title: Evaluation and tradeoffs
  position: 'August 2026: describes "endless execution" with coding agents as transformative creative liberation, while March/May product posts reject unuseful native AI features.'
  evidence: Stated
  claim: C12
  detail: recent-ai.md#c12
  source: https://world.hey.com/dhh/endless-execution-4157e065
  checked: '2026-10-27'
  qualification: Personal experience report and product judgment, not a controlled measurement of defect rate, latency or cost.
  evidence_kind: Personal use
  published: '2026-08-09'
  practice_date: Personal account; no controlled productivity comparison
  source_id: S05
  ai_specific: true
  source_format: Authored article
practice_focus: coding-workflows
evidence_since: '2025-10-01'
evidence_focus: AI-specific publications since October 2025; personal use distinguished from advice
---

# David Heinemeier Hansson

[Recent AI evidence](recent-ai.md) · [Slideshow]({{ '/engineers/david-heinemeier-hansson/learn/' | relative_url }}) · [Compare profiles]({{ '/engineers/compare/' | relative_url }})

## Research map

[AI use and recent publications](recent-ai.md) · [Earlier detailed research](research.md) · [Source register](sources.md) · [Comparison history](background.md) · [Slide notes](slides.md)

The comparison prioritises AI-specific publications since **1 October 2025**. Publication date does not establish when a practice occurred. Older general advice no longer fills missing recent fields.

## Comparison evidence

<a id="c01"></a>

### C01 · D01 · Goal and bottleneck

**Stated · Commentary.** October 2026: declares it is time to "put down the pencils" because writing the vast majority of code by hand is no longer economically viable, shifting human focus to directing and reviewing agent "coworkers."

Source format: Authored article. Published / revision: **2026-10-06**. Practice: Rails World 2026 remarks and October 2026 forecast.

Combines his Rails World 2026 "pencils down" stance and room poll with an economic forecast; no controlled productivity benchmark is supplied.

[Recent evidence](recent-ai.md#c01) · [Primary source](https://world.hey.com/dhh/over-my-dead-pencil-fb0f3647)

<a id="c02"></a>

### C02 · D02 · Requirements and specification

**Not established · Not established.** Recent AI-specific evidence for this dimension is not established in the reviewed material.

Source format: Not established. Published / revision: **Not established**. Practice: Not established.

Plain-English direction is described in general terms, but a concrete specification format or template is not established.

[Recent evidence](recent-ai.md#c02)

<a id="c03"></a>

### C03 · D03 · Increment and planning

**Not established · Not established.** Recent AI-specific evidence for this dimension is not established in the reviewed material.

Source format: Not established. Published / revision: **Not established**. Practice: Not established.

Older guidance and undated artifacts remain in the background archive. This gap does not imply opposition or absence of use.

[Recent evidence](recent-ai.md#c03)

<a id="c04"></a>

### C04 · D04 · Testing and verification

**Stated · Personal use.** January 2026: reports that terminal coding agents control the terminal and run validation tests themselves to verify their work before human review.

Source format: Authored article. Published / revision: **2026-01-07**. Practice: January OpenCode workflow account.

Self-reported agent verification loop in his January OpenCode account; a complete current test-suite policy is not established, and 2014/2024 testing essays remain historical.

[Recent evidence](recent-ai.md#c04) · [Primary source](https://world.hey.com/dhh/promoting-ai-agents-3ee04945)

<a id="c05"></a>

### C05 · D05 · Design and refactoring

**Not established · Not established.** Recent AI-specific evidence for this dimension is not established in the reviewed authored articles.

Source format: Not established. Published / revision: **Not established**. Practice: Not established.

January 2026 notes holding the line on quality and cohesion; the 2014 design essay remains historical, and linked Rails World 2026 keynote remarks were not independently transcribed in the primary register.

[Recent evidence](recent-ai.md#c05)

<a id="c06"></a>

### C06 · D06 · Human understanding and review

**Stated · Personal use.** January 2026: reports reviewing final agent outputs and offering guidance to hold the line on quality and cohesion, rather than using inline autocomplete that "steals the keyboard."

Source format: Authored article. Published / revision: **2026-01-07**. Practice: January OpenCode workflow account.

Dated self-report; October 2026 reiterates helping and occasionally disagreeing with agent "coworkers," though a formal review checklist is unknown.

[Recent evidence](recent-ai.md#c06) · [Primary source](https://world.hey.com/dhh/promoting-ai-agents-3ee04945)

<a id="c07"></a>

### C07 · D07 · Agent autonomy and coordination

**Stated · Personal use.** January 2026: reports supervised terminal-agent collaboration ("nowhere close to 90%+" agent-written code); by October 2026, argues developers will no longer write the vast majority of code by hand.

Source format: Authored article. Published / revision: **2026-01-07**. Practice: January OpenCode account; compared with October 2026 stance.

Documents a major 2026 shift from bounded January delegation (S02) to October "pencils down" advocacy (S06); exact private multi-agent topology remains unknown.

[Recent evidence](recent-ai.md#c07) · [Primary source](https://world.hey.com/dhh/promoting-ai-agents-3ee04945)

<a id="c08"></a>

### C08 · D08 · Context and durable state

**Stated · Personal use.** February/March 2026: reports persistent agent memory and reminders in an OpenClaw VM experiment, alongside filesystem continuity in team agent workflows.

Source format: Authored article. Published / revision: **2026-02-05**. Practice: OpenClaw VM experiment before publication.

OpenCode session capture (S02) and OpenClaw assistant persistence (S03) are reported; full private coding memory architecture is unknown.

[Recent evidence](recent-ai.md#c08) · [Primary source](https://world.hey.com/dhh/clankers-with-claws-9f86fa71)

<a id="c09"></a>

### C09 · D09 · Tooling and environment

**Stated · Personal use.** January 2026: uses terminal harnesses (OpenCode, Claude Code in Omarchy) rather than IDE autocomplete, switching across Claude Opus 4.5, Codex 5, Gemini 3, MiniMax M2.1 and GLM-4.7.

Source format: Authored article. Published / revision: **2026-01-07**. Practice: January OpenCode workflow account.

The February OpenClaw Proxmox VM trial is a separate experiment, and the March Basecamp CLI/skill release is team product work.

[Recent evidence](recent-ai.md#c09) · [Primary source](https://world.hey.com/dhh/promoting-ai-agents-3ee04945)

<a id="c10"></a>

### C10 · D10 · Integration and release

**Not established · Not established.** Recent AI-specific evidence for this dimension is not established in the reviewed material.

Source format: Not established. Published / revision: **Not established**. Practice: Not established.

Older guidance and undated artifacts remain in the background archive. This gap does not imply opposition or absence of use.

[Recent evidence](recent-ai.md#c10)

<a id="c11"></a>

### C11 · D11 · Boundaries and safeguards

**Stated · Personal use.** February 2026: reports an OpenClaw experiment ("Kef") isolated from personal data and logins inside a Proxmox VM while navigating standard web UIs.

Source format: Authored article. Published / revision: **2026-02-05**. Practice: OpenClaw VM experiment before publication.

Single self-reported experiment, not a security audit or universal coding-agent permission policy.

[Recent evidence](recent-ai.md#c11) · [Primary source](https://world.hey.com/dhh/clankers-with-claws-9f86fa71)

<a id="c12"></a>

### C12 · D12 · Evaluation and tradeoffs

**Stated · Personal use.** August 2026: describes "endless execution" with coding agents as transformative creative liberation, while March/May product posts reject unuseful native AI features.

Source format: Authored article. Published / revision: **2026-08-09**. Practice: Personal account; no controlled productivity comparison.

Personal experience report and product judgment, not a controlled measurement of defect rate, latency or cost.

[Recent evidence](recent-ai.md#c12) · [Primary source](https://world.hey.com/dhh/endless-execution-4157e065)
