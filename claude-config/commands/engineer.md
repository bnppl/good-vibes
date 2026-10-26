---
description: Cache detailed engineer research, derive slides, and compare cached profiles
argument-hint: '"Person Name" [--stage research|slides|all] [--compare "Person A, Person B"] [--refresh] [--focus "topic"] [--project "context"] [--as-of YYYY-MM-DD]'
---

# /engineer — Research, distil, compare

Arguments: $ARGUMENTS

Read `docs/engineer-research-prompt.md` for the complete research and comparison instructions, and `docs/engineer-cache-schema.md` for the exact cache/frontmatter and slide formats. Both are canonical shared instructions for Claude Code and OpenCode.

## Parse inputs

- The person name before the first flag is required; quoted or unquoted multi-word names work.
- `--stage research|slides|all`: default `all` for a single-person request. For a request containing `--compare` and no explicit stage, default to **cached comparison only**.
- `--compare "Person A, Person B"`: compare the primary person and these additional people from their existing research caches. Resolve canonical identities and deduplicate aliases.
- `--refresh`: explicitly refresh the selected people's research using primary sources, then rebuild affected derived outputs. Without it, reuse existing caches and display their dates.
- `--focus "topic"`: default software engineering, particularly AI-assisted and agentic development.
- `--project "context"`: use a common project example; otherwise use the neutral example in the prompt.
- `--as-of YYYY-MM-DD`: filter the cache to evidence available at that cutoff. Never silently substitute later evidence. If the cache cannot support it, report the gap; research requires a research stage or `--refresh`.
- Missing person, invalid stage/date, or an empty explicit option needs clarification. Do not silently discard it.

## Execute in two stages

### Stage 1: research cache

Store each person's content under `engineers/<canonical-person-slug>/`. Discover existing profiles before creating paths. Research as deeply as primary evidence supports; use multiple focused Markdown files when needed, not a fixed-size summary. Follow the canonical prompt's evidence rules and schema. Capture techniques, full workflow, tool setup, changing views, concrete examples, source-level findings, gaps, and stable claim IDs. Do not archive whole copyrighted works.

For an existing cache, reuse it unless `--refresh` was supplied. If the requested focus/project differs, derive a new adaptation where the existing evidence supports it; explicitly identify research gaps rather than pretending a cache hit satisfies missing evidence. The research stage must leave a coherent `index.md` comparison profile and source register even if no slides are requested.

### Stage 2: consumable views

Read only the cached research; do not browse. Distil the cache into `slides.md` using the existing slideshow Markdown format and `slideshow.html` using `layout: learning-deck`. Use one idea per card, a punchy accurate hook, a concrete example, a useful takeaway, and optional deeper links. No mandatory recall test. Add collections when needed instead of stuffing an entire subject into a card. Preserve card IDs and per-person storage keys across updates.

Generate the compact comparison fields from the same claims and evidence, keeping dates and qualifications. The generic `/engineers/compare/` page discovers all cached profiles and renders detailed field cards with D01–D12, sources, and dimension filters. Do not edit its JavaScript for each new engineer.

For a requested comparison, also create or update a synthesis in `engineers/comparisons/<alphabetically-sorted-person-slugs>/index.md`. Follow the prompt's matrix, disagreement classification, common worked example, conditional adoption advice, and unresolved conflicts. Link the side-by-side UI with `?people=<comma-separated-person-ids>`. Reuse cached claim IDs and cite their evidence; do not research separately for this view. Missing caches should be listed as missing with exact research commands; do not fabricate profiles or launch unrequested research. Comparisons are provisional when a material dimension lacks evidence or dates differ.

### Stage selection

- `research`: research missing cache or reuse existing cache; refresh only with `--refresh`; do not create slides. If `--compare` is also supplied, prepare all named caches under the same rules, but leave comparison presentation to stage 2.
- `slides`: require cached research; rebuild slides and any requested comparison from it, without browsing. With `--refresh`, refresh cache first as explicitly requested, then derive views.
- `all`: ensure the requested cache(s) exist, then derive slides and any requested comparison. Use existing research unless `--refresh` is supplied.
- Cached comparison only (implicit with `--compare`): read selected caches, update their compact fields if necessary, and produce the comparison synthesis and UI link. Do not rebuild unrelated decks.

Link new profiles from the Engineers hub and relevant comparison documents. Preserve unrelated changes and reading metadata. Do not change general learning-deck cards, run `/study update`, perform example implementations, install tools, commit, push, or publish merely because this command was invoked. Verify local links, cache completeness, unique card IDs, and derived-output references. State the evidence dates, cache gaps, outputs, and validation limits.
