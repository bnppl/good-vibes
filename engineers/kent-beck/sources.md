---
title: Kent Beck — source findings
parent: Kent Beck
nav_order: 3
last_updated: 2026-10-26
last_read: null
status: unread
research_cutoff: 2026-10-26
research_checked: 2026-10-26
cache_schema: 1
---

# Kent Beck — Source Findings and Gaps

Inspected on **26 October 2026**. These notes preserve relevant findings, scope, and limits rather than copying source works. Claims C01–C12 are indexed in [the profile](index.md#comparison-evidence). Publication dates use the inspected primary publication, not dates from discovery summaries.

<a id="s01"></a>
## S01 — Augmented Coding: Beyond the Vibes

- **Author/date:** Kent Beck, 25 June 2025.
- **URL:** <https://newsletter.kentbeck.com/p/augmented-coding-beyond-the-vibes>.
- **Inspected:** public article and published system-prompt appendix.
- **Finding:** a self-reported BPlusTree3 experience, human intervention, and explicit next-test instructions. Augment sponsorship disclosed.
- **Supports:** C02, C03, C06, C08, C09, C11.
- **Limits:** project account and instructions, not a reproduced effectiveness study or proof of current daily settings. Warnings about unwanted work and removed tests are observations from this context.

<a id="s02"></a>
## S02 — BPlusTree3 README

- **Owner/date:** KentBeck repository; evolving document, inspected 26 October 2026. Publication date and exact README revision not captured.
- **URL:** <https://github.com/KentBeck/BPlusTree3>.
- **Inspected:** public README, development and contribution sections.
- **Finding:** project documents test-first work, structural/behavioural separation, reference validation, and performance checks.
- **Supports:** C04, C05, C10.
- **Limits:** documentation demonstrates what the project prescribes, not that every historical commit followed it. Benchmark claims were not reproduced and are not agent-productivity measurements.

<a id="s03"></a>
## S03 — BPlusTree3 engineering conventions

- **Owner/date:** KentBeck repository; publication date not established; inspected 26 October 2026.
- **URL:** <https://github.com/KentBeck/BPlusTree3/blob/main/agent.md>.
- **Version:** fetched content blob `813afacbd84e623ebfc3a3a01cf1092b8f3f809d`.
- **Inspected:** full file through the GitHub connector after webpage retrieval failed.
- **Finding:** project-specific Cargo/benchmark checks, focused changes, dead-code removal, and a no-internal-feature-flag convention expressly scoped to having no external users.
- **Supports:** C08, C09, C10.
- **Limits:** a repository artifact; not a complete private development environment. Its contents differ from the June essay's appendix, so retain both contexts rather than conflating them.

<a id="s04"></a>
## S04 — Distinctions With A Difference

- **Author/date:** Kent Beck, 5 December 2022.
- **URL:** <https://newsletter.kentbeck.com/p/distinctions-with-a-difference>.
- **Inspected:** public authored post, excluding reader comments as evidence of Beck's position.
- **Finding:** distinguishes reversibility, safety, scope of impact, and structural versus behavioural changes. Timing matters.
- **Supports:** C05, C11.
- **Limits:** historical general design advice, not a current AI product setup or automatic rejection of every combined patch.

<a id="s05"></a>
## S05 — Tidy First? Kent Beck on Refactoring

- **Speaker/date:** Kent Beck, QCon Plus presentation; historical talk, exact publication date not established from inspected page.
- **URL:** <https://www.infoq.com/presentations/refactoring-cleaning-code/>.
- **Inspected:** publicly available first-person presentation transcript, especially behaviour/structure and timing discussion.
- **Finding:** asks whether tidying before a specific behaviour change reduces total effort and treats design as a human concern.
- **Supports:** C01, C05, C06.
- **Limits:** not an AI workflow experiment. A conference host's biography and unrelated site material are not used as method evidence.

<a id="s06"></a>
## S06 — Genie Lessons: Nobody Wants Agents

- **Author/date:** Kent Beck, 23 April 2026.
- **URL:** <https://newsletter.kentbeck.com/p/genie-lessons-nobody-wants-agents>.
- **Inspected:** public written account of an Intent session; not the full paid live session.
- **Finding:** coordinator/implementer/verifier tooling can leave the human with coordination state; desired outcomes should drive tool design. Augment sponsorship disclosed.
- **Supports:** C07, C09, C12.
- **Limits:** self-report about a session, not controlled evidence that multi-agent work cannot help. The broader multiplayer direction is exploratory, not an implemented standard.

<a id="s07"></a>
## S07 — Genie Tarpit

- **Author/date:** Kent Beck, 29 April 2026. Discovery-summary timestamps differed; this date comes from the article.
- **URL:** <https://newsletter.kentbeck.com/p/genie-tarpit>.
- **Inspected:** public authored article; reader comments excluded from position attribution.
- **Finding:** distinguishes today's working features from future flexibility and leaves the general remedy unresolved.
- **Supports:** C01, C05, C12.
- **Limits:** a conceptual diagnosis based on observations, not a validated two-axis metric or established benchmark.

<a id="s08"></a>
## S08 — Tools Aren't Here to Make Us Feel Good

- **Author/date:** Kent Beck, 7 October 2026.
- **URL:** <https://newsletter.kentbeck.com/p/tools-arent-here-to-make-us-feel>.
- **Inspected:** public opening excerpt only.
- **Finding:** describes recent talks about reorienting augmented-coding tools around human needs.
- **Supports:** C01, C06.
- **Limits:** paid body not accessed. The excerpt does not establish a detailed intervention, measurement instrument, or complete argument.

<a id="s09"></a>
## S09 — Thinkie: Fix Time, Flex Scope

- **Author/date:** Kent Beck, 9 October 2026.
- **URL:** <https://newsletter.kentbeck.com/p/thinkie-fix-time-flex-scope>.
- **Inspected:** primary publisher's public teaser as retrieved in search; direct page retrieval unavailable.
- **Finding:** proposes fixing feedback-loop time and varying scope in the context of augmented coding.
- **Supports:** C03, C12.
- **Limits:** paid body not accessed; no specific universal latency target inferred. Citation supports only the visible pattern.

<a id="s10"></a>
## S10 — Genie Sessions: TCR Skill

- **Author/date:** Kent Beck, 1 April 2026.
- **URL:** <https://newsletter.kentbeck.com/p/genie-sessions-tcr-skill>.
- **Inspected:** primary publication's public description in retrieved search output; direct recording retrieval unavailable.
- **Finding:** describes exploring a skills-based test/commit/reset workflow.
- **Supports:** contextual tool experiment, not a claim that C09 includes a released reusable TCR skill.
- **Limits:** full session, downloadable skill, and exact mechanics were not inspected. This profile provides no destructive reset automation.

## Research gaps

- Private model settings, a universal personal tool stack, canonical context-memory design, security sandbox, and production deployment pipeline were not established.
- Paid bodies and live-session recordings were not accessed. Their descriptions establish topics or reported experiments only.
- The October “How Many CTOs?” public interview transcript surfaced inconsistent speaker labels. It is an unresolved lead for deeper recent material, not the basis for attributed quotations here.
- No source establishes a universal productivity advantage for this workflow. The worked reward example and prompts are original adaptations.

## Cache log

26 October 2026: initial primary-source research and comparison fields created. Slides were derived from this cache after the research stage; generating slides does not refresh source verification dates.
