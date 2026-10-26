---
title: Addy Osmani — source findings
parent: Addy Osmani
nav_order: 4
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
---

## Publication-window review — 26 October 2026

The active source-to-claim map, publication dates, practice periods and evidence kinds are in [recent AI evidence](recent-ai.md#evidence-used-in-the-comparison). Earlier mappings below are retained as provenance; they do not make a background source current. The original inspection dates remain unchanged.

# Source Findings and Access Limits

[Profile](index.md) · [Research](research.md) · [Tools](tools.md)

All sources inspected **26 October 2026**, with an evidence cutoff of the same date. Source text is not archived in full. These are research notes on public material. Claim IDs refer to the stable entries in [the profile](index.md#comparison-evidence).

<a id="s01"></a>

## S01: Agentic Engineering

- **Author/publisher:** Addy Osmani
- **Publication:** 2026-02-04
- **URL:** [Agentic Engineering](https://addyosmani.com/blog/agentic-engineering/)
- **Inspected scope:** Public authored article; distinguishes unreviewed generation from disciplined agent-assisted work.
- **Cached finding:** Human ownership of architecture and correctness remains central.
- **Supports:** C01
- **Limits:** Advocacy; no general productivity effect inferred.

<a id="s02"></a>

## S02: How to write a good spec for AI agents

- **Author/publisher:** Addy Osmani
- **Publication:** 2026-01-13
- **URL:** [How to write a good spec for AI agents](https://addyosmani.com/blog/good-spec/)
- **Inspected scope:** Public authored article; inspected goal, planning, structure and modular-context sections.
- **Cached finding:** A reviewed, evolving specification and focused task context guide execution.
- **Supports:** C02
- **Limits:** Examples and referenced research are not independently validated here.

<a id="s03"></a>

## S03: Agent Harness Engineering

- **Author/publisher:** Addy Osmani
- **Publication:** 2026-04-19
- **URL:** [Agent Harness Engineering](https://addyosmani.com/blog/agent-harness-engineering/)
- **Inspected scope:** Public authored article; inspected harness definition, feedback, failures and durable-state discussion.
- **Cached finding:** Engineering the surrounding environment is a first-class responsibility; constraints should answer actual failures.
- **Supports:** C01
- **Limits:** Framing incorporates credited third-party work; cited benchmark numbers are not repeated as findings.

<a id="s04"></a>

## S04: Brownfield Agentic Engineering

- **Author/publisher:** Addy Osmani
- **Publication:** 2026-09-14
- **URL:** [Brownfield Agentic Engineering](https://addyosmani.com/blog/brownfield-agentic-engineering/)
- **Inspected scope:** Public authored article, including risk zones, comprehension memo, characterization and fresh review.
- **Cached finding:** Map uncertainty and risk before granting autonomy; preserve behaviour and make exploration durable.
- **Supports:** C04, C05, C11
- **Limits:** Guidance, not a demonstrated replay-reward implementation or permission audit.

<a id="s05"></a>

## S05: The Code Agent Orchestra

- **Author/publisher:** Addy Osmani
- **Publication:** 2026-03-26
- **URL:** [The Code Agent Orchestra](https://addyosmani.com/blog/code-agent-orchestra/)
- **Inspected scope:** Public write-up of his O’Reilly AI CodeCon talk; inspected coordination, ownership and verification sections.
- **Cached finding:** Parallel agents need decomposition, isolation, coordination and quality checks.
- **Supports:** C07
- **Limits:** Tool survey and heuristics; no universal optimal team size established. Embedded talk was not independently watched.

<a id="s06"></a>

## S06: Loop Engineering

- **Author/publisher:** Addy Osmani
- **Publication:** 2026-06-07
- **URL:** [Loop Engineering](https://addyosmani.com/blog/loop-engineering/)
- **Inspected scope:** Public authored article; inspected loop components, persistent memory and cost qualification.
- **Cached finding:** A loop delegates and checks repeated work while keeping state outside the chat.
- **Supports:** C08
- **Limits:** Some ideas are explicitly attributed to other practitioners; current product features are not independently tested.

<a id="s07"></a>

## S07: Own the Outer Loop

- **Author/publisher:** Addy Osmani
- **Publication:** 2026-07-15
- **URL:** [Own the Outer Loop](https://addyosmani.com/blog/own-the-outer-loop/)
- **Inspected scope:** Public written keynote; inspected quality, verdict, answerability and human boundary discussion.
- **Cached finding:** People own acceptance decisions and must be able to justify their outcomes.
- **Supports:** C01, C06
- **Limits:** The essay’s cited surveys were not independently audited. No blanket removal of human review inferred.

<a id="s08"></a>

## S08: Audit your Agent files

- **Author/publisher:** Addy Osmani
- **Publication:** 2026-08-27
- **URL:** [Audit your Agent files](https://addyosmani.com/blog/audit-your-agent-files/)
- **Inspected scope:** Public authored article; inspected self-reported configuration hygiene, bloat and enforcement discussion.
- **Cached finding:** Instructions and installed skills need reevaluation as models, harnesses and projects change.
- **Supports:** C11, C12
- **Limits:** Research summaries remain secondary reports; no universal deletion schedule or line-count target adopted.

<a id="s09"></a>

## S09: My LLM coding workflow going into 2026

- **Author/publisher:** Addy Osmani
- **Publication:** 2026-01-04
- **URL:** [My LLM coding workflow going into 2026](https://addyosmani.com/blog/ai-coding-workflow/)
- **Inspected scope:** Public first-person workflow; inspected planning, context, tools, review and version-control sections.
- **Cached finding:** Reports small supervised chunks, runtime checks, review, checkpoints, and usually one primary agent.
- **Supports:** C03, C09, C10
- **Limits:** Dated self-report, not a complete October stack; some observations credit others.

<a id="s10"></a>

## S10: Beyond Vibe Coding — public publisher page

- **Author/publisher:** O’Reilly Media; book by Addy Osmani
- **Publication:** publication date not established in inspected excerpt
- **URL:** [Beyond Vibe Coding — public publisher page](https://www.oreilly.com/library/view/beyond-vibe-coding/9798341634749/)
- **Inspected scope:** Public title, overview and table of contents only.
- **Cached finding:** Book covers AI-assisted workflows, validation and integration.
- **Supports:** Book attribution
- **Limits:** Paid chapters and exercises were not accessed; title marketing is not outcome evidence.

<a id="s11"></a>

## S11: Agent Skills repository README

- **Author/publisher:** addyosmani/agent-skills maintainers
- **Publication:** mutable repository; inspected 2026-10-26
- **URL:** [Agent Skills repository README](https://github.com/addyosmani/agent-skills)
- **Inspected scope:** Public README, command table and installation sections.
- **Cached finding:** A published lifecycle skill collection supplies specification, implementation and verification guidance.
- **Supports:** C09
- **Limits:** No revision SHA captured. No install, execution, hook enforcement or effectiveness evaluation performed.

## Research gaps

No private prompts, complete current model routing, full production permissions configuration, or controlled comparative outcome study was established. A source mentioning an orchestration tool is not evidence of daily adoption. Source dates reflect article headers, not a current site's mutable author biography. Links and tools can change after inspection.

The neutral reward walkthrough, prompts and lab are original suggested adaptations. They provide depth without implying the author demonstrated this exact feature. Stage-two slides derive only from this cache and retain the same evidence date.

## Research log

26 October 2026: initial public-source research and source findings recorded. No tools installed; no code exercised in the target reward application; no claims of user exercise completion.
