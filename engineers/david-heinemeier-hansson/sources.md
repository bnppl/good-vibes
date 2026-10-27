---
title: David Heinemeier Hansson — source findings
parent: David Heinemeier Hansson
nav_order: 3
last_updated: '2026-10-27'
last_read: null
status: unread
research_cutoff: '2026-10-27'
research_checked: '2026-10-27'
cache_schema: 1
---

## Publication-window review — 27 October 2026

The active source-to-claim map, publication dates, practice periods and evidence kinds are in [recent AI evidence](recent-ai.md#evidence-used-in-the-comparison). Earlier mappings below are retained as provenance; they do not make a background source current.

# David Heinemeier Hansson — source findings

All twelve public authored articles were inspected on **26–27 October 2026**. Dates are displayed publication dates, not assertions that a practice remains current. Whole articles are not archived. Tool repositories, immutable installed versions, paid book bodies, private sessions, and linked keynote transcripts were not independently inspected.

[Profile](index.md) · [Research](research.md) · [Worked feature](workflow.md)

<a id="s01"></a>

## S01 · Coding should be a vibe!

**Author:** David Heinemeier Hansson · **Published:** 2025-05-13 · **Inspected:** 2026-10-26.

[Primary source](https://world.hey.com/dhh/coding-should-be-a-vibe-50908f49)

**Inspected scope:** Public authored article, including its relevant testing, tool, or product discussion.

**Finding:** Enjoys writing Ruby by hand and reports conversational LLM collaboration rather than letting inline autocomplete tools take the keyboard; this is a dated position before his 2026 agent adoption.

**Supports:** Historical context for C01/C06/C07.

**Limits:** Later sources materially change the delegation stance. Not evidence of current refusal to use agents.

<a id="s02"></a>

## S02 · Promoting AI agents

**Author:** David Heinemeier Hansson · **Published:** 2026-01-07 · **Inspected:** 2026-10-27.

[Primary source](https://world.hey.com/dhh/promoting-ai-agents-3ee04945)

**Inspected scope:** Public authored article, including its relevant testing, tool, or product discussion.

**Finding:** Explains why terminal coding agents (using OpenCode and Claude Code, integrated into Omarchy) succeeded for him where inline IDE autocomplete (Copilot, Cursor) "stole the keyboard" mid-thought: agents control the terminal, run validation tests themselves, search documentation, and switch across Claude Opus 4.5, Codex 5, Gemini 3, MiniMax M2.1 and GLM-4.7. Reports supervised collaboration and human outcome review while noting he was then "nowhere close to the claims of having agents write 90%+ of the code" when holding the line on quality and cohesion.

**Supports:** C04, C06, C07, C08, C09.

**Limits:** Self-report at that date; his later October 2026 essay (S06) moves past the January "not 90%+" boundary toward "pencils down" on hand-written code. Exact current review checklist and complete private setup remain unknown.

<a id="s03"></a>

## S03 · Clankers with claws

**Author:** David Heinemeier Hansson · **Published:** 2026-02-05 · **Inspected:** 2026-10-27.

[Primary source](https://world.hey.com/dhh/clankers-with-claws-9f86fa71)

**Inspected scope:** Public authored article, including its relevant testing, tool, or product discussion.

**Finding:** Reports an OpenClaw experiment ("Kef") isolated in a Proxmox VM with persistent memory and reminders, navigating standard human-centric web interfaces (creating a HEY.com email account, signing up for Fizzy, populating a board, and joining Basecamp) without specialized MCPs, APIs, or pre-installed skills.

**Supports:** C08, C11.

**Limits:** Authored experiment report, not independently reproduced or security-audited; no complete coding permissions inferred.

<a id="s04"></a>

## S04 · Basecamp becomes agent accessible

**Author:** David Heinemeier Hansson · **Published:** 2026-03-25 · **Inspected:** 2026-10-27.

[Primary source](https://world.hey.com/dhh/basecamp-becomes-agent-accessible-3ae6b949)

**Inspected scope:** Public authored article, including its relevant testing, tool, or product discussion.

**Finding:** Announces team-built agent interfaces (revamped API, `basecamp` CLI, and agent skill instructions) after declining to ship native in-app AI experiments in Basecamp and Fizzy that proved insufficiently useful.

**Supports:** C08, C09, C12.

**Limits:** Product/team announcement. Component repositories and current command syntax were not inspected.

<a id="s05"></a>

## S05 · Endless execution

**Author:** David Heinemeier Hansson · **Published:** 2026-08-09 · **Inspected:** 2026-10-27.

[Primary source](https://world.hey.com/dhh/endless-execution-4157e065)

**Inspected scope:** Public authored article, including its relevant testing, tool, or product discussion.

**Finding:** Describes working with coding agents as "a little genie trapped in my machine" that grants the liberation of "endless execution"—turning every idea or whim into reality and calling it the most fun he has had in 40+ years of computing.

**Supports:** C12 and historical context.

**Limits:** Personal experience and rhetoric, not a speedup estimate or proof about all software work.

<a id="s06"></a>

## S06 · Over my dead pencil

**Author:** David Heinemeier Hansson · **Published:** 2026-10-06 · **Inspected:** 2026-10-27.

[Primary source](https://world.hey.com/dhh/over-my-dead-pencil-fb0f3647)

**Inspected scope:** Public authored article, including its relevant testing, tool, or product discussion.

**Finding:** Follows up on his Rails World 2026 remarks ("it's time to put down the pencils. We're not going to write the vast majority of code by hand any longer"), arguing that manually typing out lines of Ruby, Rust, or C++ is no longer economically viable. Frames AI agents as fast, capable "coworkers" who still need occasional help and direction, and predicts a software development bloom as costs plummet.

**Supports:** C01, C06, C07.

**Limits:** Room poll and economic predictions are not controlled experimental evidence. The linked Rails World 2026 keynote video was not independently transcribed in this register.

<a id="s07"></a>

## S07 · TDD is dead. Long live testing.

**Author:** David Heinemeier Hansson · **Published:** 2014-04-23 · **Inspected:** 2026-10-26.

[Primary source](https://dhh.dk/2014/tdd-is-dead-long-live-testing.html)

**Inspected scope:** Public authored article, including its relevant testing, tool, or product discussion.

**Finding:** Rejects universal test-first design rules while retaining regression testing; favours more system coverage at that historical point.

**Supports:** Historical context for C04.

**Limits:** Historical article, not a current agent-policy statement. Its system-test emphasis must be read with S09.

<a id="s08"></a>

## S08 · Test-induced design damage

**Author:** David Heinemeier Hansson · **Published:** 2014-04-29 · **Inspected:** 2026-10-26.

[Primary source](https://dhh.dk/2014/test-induced-design-damage.html)

**Inspected scope:** Public authored article, including its relevant testing, tool, or product discussion.

**Finding:** Criticises indirection introduced solely for isolated testing; contextual Rails/MVC design argument.

**Supports:** C05.

**Limits:** Does not establish that every interface, boundary, or test-driven design harms clarity.

<a id="s09"></a>

## S09 · System tests have failed

**Author:** David Heinemeier Hansson · **Published:** 2024-05-17 · **Inspected:** 2026-10-26.

[Primary source](https://world.hey.com/dhh/system-tests-have-failed-d90af718)

**Inspected scope:** Public authored article, including its relevant testing, tool, or product discussion.

**Finding:** Reports poor browser-suite returns, retaining smoke coverage and favouring model/controller and human UI checks.

**Supports:** C04.

**Limits:** Project experience and recommendation from 2024; not a blanket prohibition on all UI automation or a 2026 agent policy.

<a id="s10"></a>

## S10 · Let the agents democratize open source

**Author:** David Heinemeier Hansson · **Published:** 2026-06-01 · **Inspected:** 2026-10-26.

[Primary source](https://world.hey.com/dhh/let-the-agents-democratize-open-source-9fd630a9)

**Inspected scope:** Public authored article, including its relevant testing, tool, or product discussion.

**Finding:** Argues against excluding agent-assisted open-source contributors; does not specify an acceptance policy for every contribution.

**Supports:** Participation context.

**Limits:** Normative participation argument, not measured contribution quality or a complete maintainer policy.

<a id="s11"></a>

## S11 · Basecamp Five

**Author:** David Heinemeier Hansson · **Published:** 2026-05-26 · **Inspected:** 2026-10-26.

[Primary source](https://world.hey.com/dhh/basecamp-five-8fcfd2ef)

**Inspected scope:** Public authored article, including its relevant testing, tool, or product discussion.

**Finding:** Emphasises human communication and product basics despite agent accessibility.

**Supports:** C12.

**Limits:** Public product description; not evidence of the private coding and release steps used to build every feature.

<a id="s12"></a>

## S12 · ONCE (Again)

**Author:** David Heinemeier Hansson · **Published:** 2026-03-16 · **Inspected:** 2026-10-26.

[Primary source](https://world.hey.com/dhh/once-again-3e99f755)

**Inspected scope:** Public authored article, including its relevant testing, tool, or product discussion.

**Finding:** Announces hosting, upgrades and backup capabilities; not a personal agent release checklist.

**Supports:** Boundary for C10.

**Limits:** Announced product capabilities were not executed; no current personal deployment topology established.

## Research gaps

A complete current requirements template, increment cadence, orchestration topology, test-first policy, production release gate, and private model configuration are not established. Unknown is not opposition. Product announcements do not identify every component author or prove runtime behaviour. A self-reported isolated assistant experiment is not a full coding security policy. No implementation or comparative productivity trial was executed.

## Cache history

26 October 2026: initial primary-source research and comparison profile. Slide generation reused this cache without a fresh research pass.

## Cache-only refinement

26 October 2026: The compact tool summary now retains explicit 2026 dates. The existing 2014/2024 testing and 2025/2026 delegation distinctions were reviewed and retained. No external source refresh occurred; research dates, reading metadata, card IDs and browser-storage identity were preserved.
