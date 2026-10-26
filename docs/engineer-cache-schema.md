# Engineer research cache and view schema (v1)

This is the storage contract for `/engineer`. The portable research prompt defines research quality; this file defines where it lives and how the web views read it.

## Directory per person

```text
engineers/<canonical-person-slug>/
  index.md             # person identity, comparison fields, research map
  recent-ai.md         # recent AI evidence, actual cases, dates and current claim map
  background.md        # archived comparison fields and retired slide notes
  research.md          # detailed guide; can link to focused chapters
  sources.md           # source register, inspected findings, dates and gaps
  techniques.md        # optional deep chapter
  workflow.md          # optional deep chapter
  tools.md             # optional tool inventory with verified setup
  history.md           # optional dated changes in views
  slides.md            # derived bite-sized collection
  slides-02.md         # optional additional collection
  slideshow.html       # wrapper for the shared learning-deck layout
engineers/comparisons/<sorted-person-slugs>/index.md
```

Depth follows available evidence. Expand chapters and source notes rather than compressing research to fit the slides. Optional chapters are added when supported by substantive material. Preserve original analysis and detailed examples; do not save entire third-party articles or transcripts without rights. Record an inspected source's relevant findings, not only its URL. At minimum, the first research pass creates `index.md`, `research.md`, and `sources.md`.

Use a stable canonical identity and aliases in `index.md`; never create separate directories for an alias. Reading metadata belongs on readable research chapters. All pages use `parent: <canonical name>` except the profile root (`parent: Engineers`), slide collections, and standalone slideshow wrappers. Keep any old published path as a small link page when migrating; update internal references to the canonical directory.

## Profile frontmatter

The comparison UI discovers `site.pages` where `engineer_profile: true`. Exactly one such page per person. Required fields:

```yaml
---
title: Person Name
parent: Engineers
has_children: true
nav_order: 2
engineer_profile: true
cache_schema: 1
person_id: person-name
canonical_name: Person Name
aliases: []
practice_focus: coding-workflows
focus_note: State a material scope boundary if needed.
evidence_since: 2025-10-01
research_cutoff: 2026-10-26
research_checked: 2026-10-26
last_updated: 2026-10-26
last_read: null
status: unread
tagline: A concise, evidence-based description.
summary: Two sentences explaining the approach without claiming universal effectiveness.
strengths: [Documented emphasis one, Documented emphasis two]
tools_summary: Distinguish documented tools from suggested adaptations.
slides_url: /engineers/person-name/learn/
dimensions:
  - id: D01
    title: Goal and bottleneck
    position: A concrete documented position, or explicitly unknown.
    evidence: Stated
    claim: C01
    detail: research.md#supported-heading
    source: https://example.org/original-source
    checked: 2026-10-26
    evidence_kind: Personal use
    source_format: Authored article
    published: 2026-05-14
    practice_date: Trial before publication; exact date not stated
    source_id: S03
    ai_specific: true
    qualification: Relevant scope, dates, limits, and distinctions.
---
```

Include all D01–D12 in the order and with titles defined in the portable prompt. Evidence is one of `Demonstrated`, `Stated`, `Inferred`, `Suggested adaptation`, `Not established`. Unknowns have an empty `source`, an explanatory gap, and a local detail link. A dimension summarising several claims must link to a cached section that maps those claims to the relevant primary sources. The frontmatter `claim` is a stable entry ID rendered as an explicit lowercase anchor in the profile body, such as `<a id="c01"></a>`, so generated comparisons can cite `index.md#c01` across heading edits. Do not invent evidence for an unknown dimension. Mirror the frontmatter position, evidence label, and qualification in the profile's visible claim entry; links alone do not make that entry reviewable. If the two disagree, reconcile them against cached evidence before generating slides or comparisons. A recommendation and a self-reported personal practice may both be `Stated`, so their difference must remain explicit in the qualification. Record publication/practice dates separately from the evidence check date.

`research_checked` records actual research verification, not slide generation or site build dates. `research_cutoff` records the evidence horizon. Each source record should retain publication date, inspected date, URL, inspected scope, findings, supported claim IDs, and limitations; repository sources should retain revisions when available. Preserve claim IDs across refreshes, marking superseded claims explicitly rather than reassigning their IDs to unrelated assertions.

Write a discoverable profile body linking detailed chapters, the source register, slide notes, and comparison view. If no deck has been generated yet, omit the slideshow link from the body and set `slides_url` to an empty string. The UI must not promise a nonexistent deck.

`practice_focus` identifies the content's subject, not a person's skill, attitude, or permanent identity. Use `coding-workflows` for AI-assisted software development/delivery, `ai-systems` for building/evaluating products containing models, and `mixed` when both are substantively covered. `focus_note` is optional and explains a material boundary. The comparison picker can filter by focus and search names/aliases; selected people remain visible. A cross-focus comparison displays an explicit scope note. Missing legacy focus metadata defaults to coding-workflows, but new/updated profiles should state it explicitly.

## Recent-AI eligibility

The default main comparison uses AI-specific publications/revisions since `evidence_since` (2025-10-01 for this project). Each active dimension has `evidence_kind`, `source_format`, `published`, `practice_date`, `source_id`, and `ai_specific`, alongside the existing evidence label. A recommendation is not personal use. Keep exact dates unknown when they are unknown; a documented lower bound for a living guide is acceptable if explicitly labelled. A dated article about an older experiment must retain the older practice period.

`Not established` fields use an empty primary source/source ID, `ai_specific: false`, and explicit date gaps. Historical or non-AI guidance cannot stand in for current evidence. Archive prior field values and retired slides in `background.md` without `engineer_profile: true` or a slide-collection parent. Preserve full research and its old inbound anchors; visibly route readers to `recent-ai.md` for current-window claims. Changes of claim support stay documented in the archive and source register.

All visible claims mirror their structured positions and evidence kinds. Keep the check date separate from publication and practice metadata. No new date is inferred from the site's latest build, source search crawl, or mutable author biography.

## Derived slideshow collections

The existing viewer loads Markdown via a Jekyll `<template>` at build time. It makes no runtime research or content requests and uses no extra JavaScript build step.

Create one wrapper per engineer:

```yaml
---
layout: learning-deck
title: Person Name — small ideas
nav_exclude: true
search_exclude: true
permalink: /engineers/person-name/learn/
deck_parent: Person Name Slides
deck_notes: /engineers/person-name/
deck_storage_key: good-vibes-engineer-person-name-v1
deck_section: / engineer field notes
deck_intro: Short readings from cached research, with links to the detail.
deck_card_label: Person Name / engineering practice
---
```

Each Markdown collection uses `parent: Person Name Slides`, a unique `nav_order`, `nav_exclude: true`, `last_updated`, `cache_schema: 1`, `derived_from` (a repo-relative research/profile path), and the cache's `research_checked`. Cards must have IDs unique across this person's collections. Never recycle a removed card's ID for an unrelated idea.

```markdown
## Card 01

### One short topic

> **A punchy hook that the evidence supports.**
>
> A short explanation of one idea, with the right qualifications.

**In the wild:** One concrete example; label adaptations when applicable.

**Takeaway:** One useful action or mental model.

[Optional practice: first lab](research.md#first-lab) · [Detailed evidence](research.md#relevant-section)
```

Every card requires the hook, explanation, example, takeaway, optional-practice link, and at least one deeper-reading link. Keep body text around 30 seconds of reading when possible; split a complex topic into several cards rather than dropping material qualifications. The notes remain a detailed escape hatch. No recall/reveal step is required. Stable card IDs and per-engineer storage keys keep saved ideas separate from the main learning deck and other engineers.

## Comparability review

After a batch, read every selected profile's research, worked examples, source findings, comparison entries, and slides. Check the twelve dimension titles and scope, source-to-claim attribution, frontmatter/body agreement, material historical dates, unknowns, and the fixed reward observation sequence in the research prompt. Keep card IDs, cache identity, and reading metadata stable. Do not refresh research dates for a cache-only editorial correction.

Record substantive corrections and remaining limitations in a review document. A missing personal setup remains unknown; do not add an invented policy to make profiles look equally complete. Compare documented principles, advice, experiments, and demonstrated artifacts as distinct kinds of evidence. The shared example aligns the problem, not the workflow or its effectiveness. Retain legitimate differences.

## Cached comparison stage

The generic `engineers/compare.html` wrapper and `engineer-comparison` layout read profile frontmatter. They render editorial field cards, using initials rather than invented portraits and qualitative evidence rather than made-up scores. Users can select up to three profiles and filter by the shared dimensions. Mobile cards scroll horizontally. URLs retain selected people and dimension for sharing.

The page is a factual inspection surface, not an automated disagreement detector. The separately generated comparison synthesis explains supported disagreements and adoption choices, using the same cache. Save it under a directory named by canonical person slugs sorted alphabetically; order must not depend on argument order. Add links to the shared comparison UI, each person's research, and evidence claims. Compare on a common task and cutoff, or explicitly state the mismatch.

No cache fetch or refresh occurs during stage 2. Report unknowns, missing people, historical cutoffs the cache cannot support, and evidence dates. Refresh only when explicitly requested. Local comparisons may cite the cached source register without reopening primary URLs; mark reused evidence as cached and retain its last verification date.
