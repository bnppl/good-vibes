---
title: David Heinemeier Hansson — recent AI evidence
parent: David Heinemeier Hansson
nav_order: 0
last_updated: '2026-10-27'
last_read: null
status: unread
research_cutoff: '2026-10-27'
research_checked: '2026-10-27'
evidence_since: '2025-10-01'
cache_schema: 1
---

# David Heinemeier Hansson — recent AI evidence

[Profile](index.md) · [Source register](sources.md) · [Earlier research](research.md) · [Comparison history](background.md)

## Scope and dates

Publication window: **1 October 2025–27 October 2026**. Publication, revision, practice and inspection dates are separate. An update is labelled as an update and does not establish original publication or the date each passage was written. This page prioritises actual use where documented; recommendations and inspected artifacts have their own labels. A newly published retrospective may describe older work.

## From supervised OpenCode delegation to "pencils down"

In January 2026 ([S02](https://world.hey.com/dhh/promoting-ai-agents-3ee04945)), DHH reports promoting coding agents into his daily workflow via terminal harnesses (**OpenCode** and **Claude Code**, integrated into **Omarchy**) rather than inline IDE autocomplete that "steals the keyboard" mid-thought. He explains that agents "came alive" when able to control the terminal, **run validation tests themselves**, search documentation, and switch across frontier and open-weight models (**Claude Opus 4.5**, **Codex 5**, **Gemini 3**, **MiniMax M2.1**, **GLM-4.7**). At that point, he explicitly writes that he is *"nowhere close to the claims of having agents write 90%+ of the code"* when holding the line on quality and cohesion.

In February 2026 ([S03](https://world.hey.com/dhh/clankers-with-claws-9f86fa71)), he reports a separate experiment running an autonomous **OpenClaw** assistant ("Kef") inside an isolated Proxmox VM, separated from personal data and logins, navigating standard human web interfaces (`HEY.com`, `Fizzy`, `Basecamp`) without custom MCPs or APIs.

By August ([S05](https://world.hey.com/dhh/endless-execution-4157e065)) and October 2026 ([S06](https://world.hey.com/dhh/over-my-dead-pencil-fb0f3647)), his delegation stance shifts markedly: following his Rails World 2026 keynote, he declares it is time to **"put down the pencils"** (*"We're not going to write the vast majority of code by hand any longer"*), framing coding agents as fast, capable "coworkers" and manual typing of Ruby, Rust, or C++ as no longer economically viable. The March Basecamp API/CLI/skills launch ([S04](https://world.hey.com/dhh/basecamp-becomes-agent-accessible-3ae6b949)) and May Basecamp Five release ([S11](https://world.hey.com/dhh/basecamp-five-8fcfd2ef)) are distinct 37signals team product events.

[S02](https://world.hey.com/dhh/promoting-ai-agents-3ee04945) · [S03](https://world.hey.com/dhh/clankers-with-claws-9f86fa71) · [S04](https://world.hey.com/dhh/basecamp-becomes-agent-accessible-3ae6b949) · [S05](https://world.hey.com/dhh/endless-execution-4157e065) · [S06](https://world.hey.com/dhh/over-my-dead-pencil-fb0f3647)

## Limits and background

While his January 2026 post notes that terminal agents run tests to self-validate, the 2014 TDD/design essays and 2024 system-test post remain historical and do not establish his full 2026 test-suite cadence. October economic forecasts and August enthusiasm are not controlled delivery benchmarks.

The optional reward exercise in the earlier research/workflow remains our proposed adaptation. It is not the reported project above or evidence that the engineer follows the proposed sequence.

## Evidence used in the comparison

| Source | Published / revision | Relationship | Practice period |
|---|---|---|---|
| [S02](https://world.hey.com/dhh/promoting-ai-agents-3ee04945) | 2026-01-07 | Personal use | January OpenCode workflow account |
| [S03](https://world.hey.com/dhh/clankers-with-claws-9f86fa71) | 2026-02-05 | Personal use | OpenClaw VM experiment before publication |
| [S04](https://world.hey.com/dhh/basecamp-becomes-agent-accessible-3ae6b949) | 2026-03-25 | Commentary | Team product announcement; not a personal setup inventory |
| [S06](https://world.hey.com/dhh/over-my-dead-pencil-fb0f3647) | 2026-10-06 | Commentary | Rails World 2026 remarks and October 2026 forecast |
| [S05](https://world.hey.com/dhh/endless-execution-4157e065) | 2026-08-09 | Personal use | Personal account; no controlled productivity comparison |

## Comparison claims

<a id="c01"></a>

### C01 · Goal and bottleneck

**Stated · Commentary.** October 2026: declares it is time to "put down the pencils" because writing the vast majority of code by hand is no longer economically viable, shifting human focus to directing and reviewing agent "coworkers."

Source format: Authored article. Published / revision: **2026-10-06**. Practice: Rails World 2026 remarks and October 2026 forecast. Checked: 2026-10-27.

Combines his Rails World 2026 "pencils down" stance and room poll with an economic forecast; no controlled productivity benchmark is supplied.

[Primary source](https://world.hey.com/dhh/over-my-dead-pencil-fb0f3647) · [Source register](sources.md#s06)

<a id="c02"></a>

### C02 · Requirements and specification

**Not established · Not established.** Recent AI-specific evidence for this dimension is not established in the reviewed material.

Source format: Not established. Published / revision: **Not established**. Practice: Not established. Checked: 2026-10-27.

Plain-English direction is described in general terms, but a concrete specification format or template is not established.

<a id="c03"></a>

### C03 · Increment and planning

**Not established · Not established.** Recent AI-specific evidence for this dimension is not established in the reviewed material.

Source format: Not established. Published / revision: **Not established**. Practice: Not established. Checked: 2026-10-27.

Older guidance and undated artifacts remain in the background archive. This gap does not imply opposition or absence of use.

<a id="c04"></a>

### C04 · Testing and verification

**Stated · Personal use.** January 2026: reports that terminal coding agents control the terminal and run validation tests themselves to verify their work before human review.

Source format: Authored article. Published / revision: **2026-01-07**. Practice: January OpenCode workflow account. Checked: 2026-10-27.

Self-reported agent verification loop in his January OpenCode account; a complete current test-suite policy is not established, and 2014/2024 testing essays remain historical.

[Primary source](https://world.hey.com/dhh/promoting-ai-agents-3ee04945) · [Source register](sources.md#s02)

<a id="c05"></a>

### C05 · Design and refactoring

**Not established · Not established.** Recent AI-specific evidence for this dimension is not established in the reviewed authored articles.

Source format: Not established. Published / revision: **Not established**. Practice: Not established. Checked: 2026-10-27.

January 2026 notes holding the line on quality and cohesion; the 2014 design essay remains historical, and linked Rails World 2026 keynote remarks were not independently transcribed in the primary register.

<a id="c06"></a>

### C06 · Human understanding and review

**Stated · Personal use.** January 2026: reports reviewing final agent outputs and offering guidance to hold the line on quality and cohesion, rather than using inline autocomplete that "steals the keyboard."

Source format: Authored article. Published / revision: **2026-01-07**. Practice: January OpenCode workflow account. Checked: 2026-10-27.

Dated self-report; October 2026 reiterates helping and occasionally disagreeing with agent "coworkers," though a formal review checklist is unknown.

[Primary source](https://world.hey.com/dhh/promoting-ai-agents-3ee04945) · [Source register](sources.md#s02)

<a id="c07"></a>

### C07 · Agent autonomy and coordination

**Stated · Personal use.** January 2026: reports supervised terminal-agent collaboration ("nowhere close to 90%+" agent-written code); by October 2026, argues developers will no longer write the vast majority of code by hand.

Source format: Authored article. Published / revision: **2026-01-07**. Practice: January OpenCode account; compared with October 2026 stance. Checked: 2026-10-27.

Documents a major 2026 shift from bounded January delegation (S02) to October "pencils down" advocacy (S06); exact private multi-agent topology remains unknown.

[Primary source](https://world.hey.com/dhh/promoting-ai-agents-3ee04945) · [Source register](sources.md#s02)

<a id="c08"></a>

### C08 · Context and durable state

**Stated · Personal use.** February/March 2026: reports persistent agent memory and reminders in an OpenClaw VM experiment, alongside filesystem continuity in team agent workflows.

Source format: Authored article. Published / revision: **2026-02-05**. Practice: OpenClaw VM experiment before publication. Checked: 2026-10-27.

OpenCode session capture (S02) and OpenClaw assistant persistence (S03) are reported; full private coding memory architecture is unknown.

[Primary source](https://world.hey.com/dhh/clankers-with-claws-9f86fa71) · [Source register](sources.md#s03)

<a id="c09"></a>

### C09 · Tooling and environment

**Stated · Personal use.** January 2026: uses terminal harnesses (OpenCode, Claude Code in Omarchy) rather than IDE autocomplete, switching across Claude Opus 4.5, Codex 5, Gemini 3, MiniMax M2.1 and GLM-4.7.

Source format: Authored article. Published / revision: **2026-01-07**. Practice: January OpenCode workflow account. Checked: 2026-10-27.

The February OpenClaw Proxmox VM trial is a separate experiment, and the March Basecamp CLI/skill release is team product work.

[Primary source](https://world.hey.com/dhh/promoting-ai-agents-3ee04945) · [Source register](sources.md#s02)

<a id="c10"></a>

### C10 · Integration and release

**Not established · Not established.** Recent AI-specific evidence for this dimension is not established in the reviewed material.

Source format: Not established. Published / revision: **Not established**. Practice: Not established. Checked: 2026-10-27.

Older guidance and undated artifacts remain in the background archive. This gap does not imply opposition or absence of use.

<a id="c11"></a>

### C11 · Boundaries and safeguards

**Stated · Personal use.** February 2026: reports an OpenClaw experiment ("Kef") isolated from personal data and logins inside a Proxmox VM while navigating standard web UIs.

Source format: Authored article. Published / revision: **2026-02-05**. Practice: OpenClaw VM experiment before publication. Checked: 2026-10-27.

Single self-reported experiment, not a security audit or universal coding-agent permission policy.

[Primary source](https://world.hey.com/dhh/clankers-with-claws-9f86fa71) · [Source register](sources.md#s03)

<a id="c12"></a>

### C12 · Evaluation and tradeoffs

**Stated · Personal use.** August 2026: describes "endless execution" with coding agents as transformative creative liberation, while March/May product posts reject unuseful native AI features.

Source format: Authored article. Published / revision: **2026-08-09**. Practice: Personal account; no controlled productivity comparison. Checked: 2026-10-27.

Personal experience report and product judgment, not a controlled measurement of defect rate, latency or cost.

[Primary source](https://world.hey.com/dhh/endless-execution-4157e065) · [Source register](sources.md#s05)
