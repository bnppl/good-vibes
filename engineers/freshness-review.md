---
title: Freshness review — recent AI use
parent: Engineers
nav_order: 23
last_updated: '2026-10-26'
last_read: null
status: unread
---

> The [next-ten freshness review](freshness-review-next-ten.md) completes this treatment across all twenty profiles. This page records the first batch.

# Freshness review — recent AI use

Reviewed on **26 October 2026**, for AI-specific publications from **1 October 2025** through that date. Scope: the ten profiles present on main at revision `89e19ba`; the remaining ten shortlist profiles were not in that revision. This is a source and presentation review, not a head-to-head implementation experiment.

[Comparison cards]({{ '/engineers/compare/' | relative_url }}) · [Engineers](index.md)

## What changed

- All twelve fields now distinguish publication date, practice period and check date, with evidence kind and source format. Recommendations, self-reports, artifacts, commentary and episode summaries remain different evidence.
- A recent-AI chapter leads each profile. Old general advice and undated artifacts no longer fill missing recent fields. Earlier field values and retired slide notes remain in each person's background archive; the detailed original research remains available with a scope notice.
- Slides lead with a documented project or explicitly labelled proposal. Repeated hypothetical reward examples were removed from the main feed and retained as optional exercises. Existing card IDs keep their original topics; new case cards use ID 09. Retired IDs are never reassigned.
- The viewer can restrict itself to reported personal use and artifacts. Missing publication-window metadata in a future cache is treated as unreviewed rather than quietly qualifying it.
- The shared research prompt, schema and both command wrappers use a configurable publication lower bound (`--since`, default 2025-10-01).

## Per-person result

| Engineer | Recent entry point | Current cards | Dimensions with no eligible evidence |
|---|---|---|---|
| Martin Fowler | [Recent AI evidence](martin-fowler/recent-ai.md) | 4 | 5 / 12 |
| Gene Kim | [Recent AI evidence](gene-kim/recent-ai.md) | 3 | 1 / 12 |
| Kent Beck | [Recent AI evidence](kent-beck/recent-ai.md) | 5 | 3 / 12 |
| Birgitta Böckeler | [Recent AI evidence](birgitta-bockeler/recent-ai.md) | 6 | 3 / 12 |
| Armin Ronacher | [Recent AI evidence](armin-ronacher/recent-ai.md) | 7 | 1 / 12 |
| Addy Osmani | [Recent AI evidence](addy-osmani/recent-ai.md) | 8 | 0 / 12 |
| Dave Farley | [Recent AI evidence](dave-farley/recent-ai.md) | 6 | 2 / 12 |
| Gojko Adžić | [Recent AI evidence](gojko-adzic/recent-ai.md) | 6 | 0 / 12 |
| Steve Yegge | [Recent AI evidence](steve-yegge/recent-ai.md) | 6 | 1 / 12 |
| Simon Willison | [Recent AI evidence](simon-willison/recent-ai.md) | 8 | 1 / 12 |

The gap count describes this inspected cache, not how capable or prolific a person is. It includes missing recent, AI-specific evidence; it is not a claim that the practice does not exist.

## Material corrections

**Martin Fowler:** TDD (2023), self-testing code (2014), CI (2024), undated refactoring material and the August 2025 AI essay move out of the current fields. His May context-interview trial is the clearest inspected personal technique. May agentic-engineering and January conversation entries are advice; September reflections concern direct interactions. No private coding tool, orchestration, release or safeguard policy is manufactured from them. Pi/gptel interest remains interest. Böckeler’s experiments remain hers.

**Gene Kim:** Revisiting the January 2026 public interview transcript exposed a more useful personal distinction: he usually retains the commit decision, with discretionary exceptions. It also describes a Trello API investigation delegated to Claude Code, merge contention and exploring alternatives. These are retrospective accounts; the publication date is not the project date. The interview format is visible, and the absence of a complete recent written personal workflow remains explicit. Joint Kim/Yegge October guidance stays joint. Puppeteer in the example is attributed to Yegge.

**Kent Beck:** The April Intent/radix-tree session and later experiments replace June 2025 BPlusTree assumptions as the current entry point. The sponsoring relationship and limited public scope are explicit. A repository inspected today without a dated revision does not prove recent use. His full current test, memory and release policies remain incomplete.

**Birgitta Böckeler:** The May dashboard sensor work and August agent-loop TDD exploration lead. The October 2025 spec-tool article reports September trials: eligible publication, earlier practice. March 2025 supervision anecdotes do not fill current planning/orchestration fields. The TDD exploration remains narrow and does not rank TDD generally.

**Armin Ronacher:** June loop/porting experience replaces July 2025 test-generation dissatisfaction as the testing/evaluation context. October Pi/Codemode examples distinguish actual sessions from architectural commentary. No full test-first or release policy is inferred.

**Gojko Adžić:** The pinned October 2026 factory artifacts replace old Spec Kit/test-design advice as the comparison basis. Published hooks, worker checks and merged-tree gates were inspected, not executed or benchmarked.

**Willison, Osmani, Farley and Yegge:** Recent examples retain task and evidence boundaries. Willison’s production newsletter feature differs from Battle Drones; the guide launch bounds living chapter age without inventing chapter dates. Osmani’s January personal workflow and August configuration audit differ from later general guidance. Farley’s AI acceptance-contract material is a proposal, with private setup gaps. Yegge’s August Wyvern/Wheelhouse account differs from the earlier public Gas Town ecosystem and from his forecasts.

## Access and freshness limits

Recent does not mean current daily practice. Reused cached findings retain their original inspection dates. Focused reinspection covered Fowler’s recent authored entries, Kim’s interview transcript, Beck’s written Intent account, Böckeler’s sensor/TDD articles, Ronacher’s loop/Codemode accounts, Osmani’s configuration/brownfield guidance, Willison’s guide launch and October projects, and Gojko’s pinned workflow file. Other eligible records remain explicitly cached leads and findings from the earlier source review.

Farley’s October LinkedIn page could not be reopened in this pass; its previously inspected findings are retained with that limit. Paid bodies, private configurations, full inaccessible recordings and unavailable revisions were not invented. A recently published interview recalling 2025 work cannot establish an October 2026 stack.

## Validation

- Passed: ten YAML profiles, all 120 D01–D12 fields, mirrored claim positions/types, date-window eligibility, explicit unknowns, unchanged reading metadata, local file/anchor links and stable card topics/IDs.
- Passed: Markdown-to-HTML parsing and the actual viewer’s required hook/body/example/takeaway/source structure for all 59 cards. The general learning deck and its script were not modified.
- Passed: JavaScript syntax and whitespace/diff checks.
- Not run: a full Jekyll build (Ruby unavailable), or live desktop/mobile browser execution. No local browser binary was available, its download failed, and the separate cloud browser could not reach the local fixture. The evidence filter and visual layout still need browser verification.

No product implementation or comparative productivity benchmark is part of this change.
