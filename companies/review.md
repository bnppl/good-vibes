---
title: Company research review
parent: Companies
nav_order: 32
last_updated: '2026-10-26'
last_read: null
status: unread
---

# Company research and comparability review

Reviewed **26 October 2026**, covering the twenty company knowledge bases. Research was delegated in five parallel groups of four companies, then integrated against one shared schema and reviewed as one collection.

[Company hub](index.md) · [Interactive field cards]({{ '/companies/compare/' | relative_url }}) · [Approach comparison](comparison.md)

## What the knowledge bases contain

Each company directory has a structured index, detailed research, source register, observed workflow with separately labelled optional practice, bite-size slide notes and a shared-viewer wrapper. Additional focused chapters are retained where useful. D01–D12 and C01–C12 refer to the same engineering questions across the cohort. The compact fields mirror the visible claims, qualifications and evidence kinds in the detailed research.

| Company | Source records | Cards | Unsupported fields |
|---|---|---|---|
| [Stripe](stripe/index.md) | 3 | 5 | 1 / 12 |
| [Monzo](monzo/index.md) | 3 | 5 | 2 / 12 |
| [Shopify](shopify/index.md) | 4 | 5 | 0 / 12 |
| [Spotify](spotify/index.md) | 4 | 5 | 0 / 12 |
| [Cloudflare](cloudflare/index.md) | 3 | 5 | 2 / 12 |
| [Mozilla](mozilla/index.md) | 4 | 5 | 3 / 12 |
| [GitHub](github/index.md) | 2 | 5 | 0 / 12 |
| [Microsoft](microsoft/index.md) | 3 | 4 | 4 / 12 |
| [Block](block/index.md) | 5 | 6 | 0 / 12 |
| [Coinbase](coinbase/index.md) | 3 | 5 | 1 / 12 |
| [Duolingo](duolingo/index.md) | 4 | 5 | 0 / 12 |
| [37signals](37signals/index.md) | 4 | 4 | 2 / 12 |
| [PostHog](posthog/index.md) | 5 | 4 | 1 / 12 |
| [Uber](uber/index.md) | 3 | 4 | 1 / 12 |
| [Zalando](zalando/index.md) | 4 | 4 | 1 / 12 |
| [Datadog](datadog/index.md) | 6 | 5 | 0 / 12 |
| [Grafana Labs](grafana-labs/index.md) | 3 | 4 | 1 / 12 |
| [GitLab](gitlab/index.md) | 4 | 4 | 0 / 12 |
| [CircleCI](circleci/index.md) | 5 | 3 | 12 / 12 |
| [JPMorgan Chase](jpmorgan-chase/index.md) | 6 | 2 | 10 / 12 |

Counts describe this cache, not engineering excellence. Research depth follows available evidence, rather than padding gaps to reach a target.

## Material research improvements

- **Stripe, Monzo, Block and Coinbase:** added technical mechanics, observed human boundaries and chronology. Coinbase now has an inspected full authored Figma-to-code account rather than only an archive summary. Monzo’s designer-contribution case separates review and engineering deployment. Block’s migration retrospective spans older work as well as 2026; it is not an overnight rewrite.
- **Shopify, Spotify, Cloudflare and Mozilla:** incorporated independent verification and failure cases. Stale CI cannot approve a newer Shopify change. Some Spotify migrations lacked automated build-time verification and depended on owning-team review, while other work was deferred. Mozilla’s hardening account is a specific development activity, not a universal feature-delivery policy.
- **GitHub, Microsoft, GitLab and CircleCI:** preserved team and ownership boundaries. GitLab’s dated playbook is declared policy rather than observed organisation-wide compliance. Microsoft’s rollout paper measures proxies and associations, not customer value directly. CircleCI’s internal-use evidence remains insufficient for a full current workflow.
- **Duolingo, 37signals, PostHog and JPMorgan Chase:** added concrete testing, editor and DevEx cases where available. DHH’s personal account no longer stands in for the entire 37signals study. JPMorgan’s primary strategy material provides recommendations without establishing an internal implementation-to-release sequence.
- **Uber, Zalando, Datadog and Grafana Labs:** expanded intent review, risk, economics and migration cases. Datadog’s research prototype retains its non-production and consistency limitations. Grafana’s migration account includes real execution and rollout failures. Zalando documents uneven effects, including larger PRs and complexity concerns.

## Comparison rules

The collection covers **using AI in software engineering**. Creating an AI-powered product feature alone cannot fill a comparison field. Each claim distinguishes reported company/team use, personal experience, inspected artifact, declared policy, recommendation and inference. Company-wide statements require company-wide scope; a team case stays a team case.

The publication window begins **1 October 2025**. Exact session dates remain unknown unless stated. Undated material and older OSS examples remain background unless a verified eligible revision supports the relevant claim. Repository instructions prove what was published, not compliance or effective permissions. Human review, automated approval, merge and production release are recorded separately.

The optional exercises are our proposed adaptations with explicit observations. They are not company case studies or comparable productivity experiments. No fictional numeric quality scores are introduced. Parent/subsidiary and shared ecosystem evidence is not treated as independent replication.

## Validation

Passed structural and content checks across **20 profiles, 240 comparison fields, 78 source records and 89 cards**. There are **41 explicit unsupported fields**; twelve belong to CircleCI and ten to JPMorgan Chase. The remaining supported fields distinguish reported team/company use, personal reports, artifacts, recommendations and declared policy.

Checks covered required chapters, exact dimension identities/titles, frontmatter-to-body mirrors, publication/revision eligibility, source-record mappings, local files/anchors, unique profile discovery, card anatomy, deck collection parents, stable company identities, reading metadata, URL paths and isolated browser storage keys. JavaScript syntax and whitespace checks passed.

Actual Chromium checks used the real Liquid comparison/deck layouts rendered from the cached pages under the site’s `/good-vibes` base path. Passed: 20-company discovery, the three-company limit, name/alias search, industry and dimension filters, reported-use filtering, query-state reload, cached-detail paths, cross-industry scope notices, all 89 cards, saved-card persistence, mobile overflow and three-card horizontal scrolling. The existing 20-engineer comparison also passed a regression check. No browser JavaScript errors were observed. Desktop/mobile screenshots were inspected for layout.

This validates the rendered views and their behaviour, not the companies’ reported productivity outcomes. A complete Ruby/Jekyll build was not run because that runtime is unavailable; the Liquid/Markdown fixture does not execute Jekyll theme/plugin integration. No example implementation, company harness or private system was executed.
