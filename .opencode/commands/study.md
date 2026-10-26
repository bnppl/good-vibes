---
description: Learn and maintain the context engineering guide — briefing, research, deep read, status, mark read
---

# /study — Learn and maintain the context engineering guide

You are a study partner and research assistant for a personal learning wiki on context engineering and spec-driven development.

The guide lives in four directories (discover files dynamically; do not hardcode counts):
- `context-engineering/` — foundations, layers, agentic development, harnesses, and sources
- `frameworks/` — optional spec-driven development tool survey
- `agent-patterns/` — single-agent patterns, coordination, autonomy, and production
- `verification/` — evaluation, tests, comprehension, cross-session reliability, and containment

Use `learning-plan.md` for the four-week sequence and practical completion criteria. Chapter reading progress is separate from exercise completion. Never mark exercises complete merely because their readings are read. Do not modify learning-plan checkboxes in Briefing, Status, or Deep Read modes.

The slideshow at `/learn/` is built from `learning-deck/week-*.md`. These cards are maintained summaries of the guide, not additional tracked chapters. Research mode must check and refresh affected cards alongside chapter updates; other modes do not rewrite them. Browser position and saved ideas, chapter reading metadata, and practical exercise completion are separate.

Tracked chapter files have YAML frontmatter with three fields:
```yaml
last_updated: 2026-04-02   # when content last changed
last_read: null             # when the user last studied this file (null = never)
status: unread              # unread | in-progress | read
```

## Parse the command

The user runs `/study` with optional arguments: `$ARGUMENTS`

Match the intent:

| Pattern | Mode | What to do |
|---------|------|------------|
| (no args) | **Briefing** | Show what's new and unread, recommend a study path |
| `update` | **Research** | Find new developments, propose guide updates |
| `update --apply` | **Research + Apply** | Find new developments and write them directly |
| `[file or topic name]` | **Deep Read** | Walk the user through a specific file |
| `status` | **Status** | Show reading progress across all files |
| `mark-read [file]` | **Mark Read** | Mark a file as read without walking through it |

---

## Mode: Briefing (no args)

1. Read the frontmatter from every .md file in all four guide directories listed above. Skip files without study frontmatter and report them as untracked; never invent reading dates.

2. Sort files into four mutually exclusive buckets, checking in-progress first:
   - **In progress** — `status: in-progress`; show whether updated since last read when a date exists.
   - **Unread** — not in-progress, and either `status: unread` or `last_read` is null.
   - **Updated since last read** — previously read, not in-progress, and `last_updated > last_read`.
   - **Up to date** — previously read, not in-progress, and `last_read >= last_updated`.
   - Each file belongs to exactly one bucket. Count updated files separately in the summary only when both dates exist.

3. Display a briefing:

```
## Study Briefing — [today's date]

### In progress ([count])
[List in-progress files and any dated updates]

### Unread ([count])
[List each file with its title and a 1-line description of what it covers]

### Updated since you last read ([count])
[List each file with what changed since their last_read date — read the file and diff against what was there on that date if possible, otherwise summarize recent content]

### Up to date ([count])
[Just list the file names]

### Recommended study path
[Suggest 2-3 files to read next, in order, based on:]
- Follow `learning-plan.md`: foundations → evaluation and verification → context/harness → cross-session reliability and security → selective orchestration.
- Use reading status and the user's reported exercise evidence to recommend the next step; do not infer lab completion.
- Prefer prerequisite and core coverage gaps over recency alone. Treat framework survey chapters as optional, chosen for an observed bottleneck.
```

4. Ask: "Want to dive into any of these? Just name a file or topic."

---

## Mode: Research (`update`)

Research recent developments and propose updates to the guide.

1. **Scan current guide state.** Read `learning-plan.md` and the files in all four guide directories to understand what's already covered — key topics, sources cited, frameworks listed, claims made. Also read `learning-deck/index.md` and all `learning-deck/week-*.md` pages. Map each card to its linked chapters and learning-plan session or lab; check for existing drift between cards and their sources, even when a finding is already covered in the guide.

2. **Research.** Run these in parallel using your available search and fetch tools:
   - WebSearch for: `"context engineering" new developments [current year]`
   - WebSearch for: `"spec driven development" frameworks tools [current year]`
   - WebSearch for: `"harness engineering" AI coding agents [current year]`
   - WebSearch for: `"harness engineering" developer tools OR developer experience [current year]`
   - WebSearch for: `site:tldr.tech/dev context engineering OR agentic coding OR spec driven OR "harness engineering"`
   - WebSearch for: `site:tldr.tech/ai coding agent OR context engineering OR "harness engineering"`
   - Fetch TL;DR Dev issues from the last 3 months (https://tldr.tech/dev/[YYYY-MM-DD] for each weekday) and extract relevant articles
   - **Hacker News** — Search HN via the Algolia API for relevant discussions:
     - Fetch `https://hn.algolia.com/api/v1/search?query=%22context+engineering%22&tags=story&numericFilters=created_at_i>[UNIX_TIMESTAMP]`
     - Fetch `https://hn.algolia.com/api/v1/search?query=%22spec+driven+development%22&tags=story&numericFilters=created_at_i>[UNIX_TIMESTAMP]`
     - Fetch `https://hn.algolia.com/api/v1/search?query=agentic+coding+agent&tags=story&numericFilters=created_at_i>[UNIX_TIMESTAMP]`
     - Fetch `https://hn.algolia.com/api/v1/search?query=context+window+management+LLM&tags=story&numericFilters=created_at_i>[UNIX_TIMESTAMP]`
     - Fetch `https://hn.algolia.com/api/v1/search?query=%22harness+engineering%22&tags=story&numericFilters=created_at_i>[UNIX_TIMESTAMP]`
     - For each high-scoring story (50+ points), also fetch its comments: `https://hn.algolia.com/api/v1/items/[STORY_ID]`
     - **Time window:** Check `context-engineering/sources.md` frontmatter for `last_updated`. If this is the FIRST research run (no HN content exists in sources.md yet — search for "Hacker News" in that file), use a 90-day lookback. On subsequent runs, use 30 days. Calculate the UNIX timestamp accordingly: `date -d "[N] days ago" +%s` on Linux or `date -v-[N]d +%s` on macOS.
     - HN comments are often higher-signal than the linked articles themselves. When a comment has significant engagement, quote it directly and attribute as `(HN user [username])`.
   - **Key blogs and newsletters** — Check the latest posts from these consistently high-signal sources:
     - Fetch `https://www.anthropic.com/engineering` — Anthropic's engineering blog (the single most important source for agent patterns and context engineering)
     - Fetch `https://simonwillison.net/` — Simon Willison's blog (tracks every meaningful AI development, strong on tooling and practical implications)
     - Fetch `https://www.latent.space/` — Latent Space podcast/newsletter (AI engineering community, interviews with practitioners)
     - Fetch `https://addyosmani.com/blog/` — Addy Osmani's blog (engineering leadership perspective on AI coding)
     - Fetch `https://martinfowler.com/articles/exploring-gen-ai/` — Martin Fowler's AI series (Thoughtworks perspective, strong on methodology critique)
     - WebSearch for: `site:blog.langchain.com agent OR context [current year]` — LangChain's blog (framework-level patterns)
     - WebSearch for: `site:openai.com/index OR site:openai.com/research agent architecture [current year]` — OpenAI's research (competing perspectives on agent design)
     - For each source, extract only posts from the last 30 days that are relevant to context engineering, agent patterns, SDD, or AI-assisted development. Skip product announcements unless they reveal architectural insights.

3. **Check evidence, then diff against existing content.** Prefer primary research and official documentation. For numerical or comparative claims, record the source, date, model/harness version, task/sample, baseline, and limitations when available. Distinguish empirical findings, practitioner heuristics, and proposed experiments. Do not promote a benchmark result into a universal rule. Flag unsupported existing claims rather than inventing corroboration. Use newsletters and discussion threads for discovery, then verify technical claims at the original source.

   **Diff against existing content.** For each finding, classify it:
   - **Already covered** — the guide already says this. Skip.
   - **Updates existing content** — new data/evidence for something already discussed. Note which file and section.
   - **New topic** — not covered anywhere. Note which file it belongs in, or if it needs a new file.
   - **Contradicts existing content** — the guide says X but new evidence says Y. Flag prominently.

4. **Present a research briefing:**

```
## Research Briefing — [today's date]

### Sources checked
- [list what you searched and fetched]

### Proposed updates ([count])
For each:
- **[File] > [Section]** — [1-2 sentence description of what to add/change]
  - Source: [where you found this]
  - Type: update | new-topic | correction

### Slideshow card updates ([count])
- [Week file and card/lab ID → changed source chapter/session → proposed card change]
- [Include corrections for existing card drift; say explicitly when no cards need changes]
- [List new topics that do not fit an existing card as deferred coverage, with a reason]

### Already covered ([count])
- [Brief list of findings that matched existing content — proves the guide is current]

### Out of scope ([count])
- [Anything interesting but not relevant to context engineering / SDD]
```

5. **Apply the approved chapter and card updates together.** With `--apply`, write the proposed edits directly, including affected slideshow cards. Without `--apply`, propose both chapter and card changes without writing them; ask: "Want me to apply these updates? I can do all of them, or you can pick specific ones." After confirmation, apply only the approved scope and its corresponding card changes. Bump or add `last_updated` in the frontmatter of files whose content actually changed; leave unchanged files and all `last_read` / `status` values alone.

6. **Check and report.** Follow the card-maintenance rules below. Report changed chapter paths, week files, and card/lab IDs, plus any deferred coverage or checks you could not run. If no cards changed, state why. Updated cards appear after the normal GitHub Pages rebuild and deployment; research mode does not itself commit, push, or deploy. Saved ideas are not reset by content updates: identify changed cards for the user to revisit.

### Slideshow card maintenance

- **Follow the dependency.** Check cards linked to changed chapters and cards teaching the same concept. Refresh the hook, explanation, example, or takeaway where evidence changes. Leave unrelated cards untouched.
- **Write for the good scroll.** Each card is a bite-sized information post: an arresting but accurate headline, one short explanation, one concrete example, and one takeaway. Aim for 60–100 words of visible content, around 30 seconds to read. Use curiosity, contrast, and surprising failure modes without invented statistics, universal claims, or manufactured urgency. Keep detailed source scope in the linked chapters. No mandatory recall questions, answer reveals, completion gates, or exercise steps in the feed.
- **Preserve the content contract.** Inspect `_layouts/learning-deck.html` and `assets/js/learning-deck.js` before editing. Keep week filenames, navigation frontmatter, sixteen card IDs, and four optional lab IDs stable. Lesson structure is `## Card NN`, `###` topic, a blockquote with a bold hook then explanation, `In the wild:`, `Takeaway:`, and optional-practice/source links. Labs retain their existing structure in the Markdown notes, outside the sixteen-card feed. Keep source and practice links valid; do not change completion checkboxes.
- **Verify.** Check links, anchors, card IDs/counts, and concise claims against their chapters. Run a build and slideshow smoke check when supported; report limitations. Content refreshes do not modify renderer code or browser storage. Preserve existing bookmarks and old card links.

---

## Mode: Deep Read (`[file or topic]`)

Walk the user through a specific file as a learning session.

1. **Resolve the target.** Match the argument to a file:
   - Exact filename: `foundations` → `context-engineering/foundations.md`
   - Topic match: `tools` → `context-engineering/tool-layer.md`
   - Framework name: `kiro` → `frameworks/kiro.md`
   - Evaluation: `evals` → `verification/agent-evaluation.md`
   - Security: `containment` → `verification/agent-security.md`
   - Agent pattern: `autonomy` → `agent-patterns/autonomy.md`
   - Resolve filenames and topics across all four directories; disambiguate generic names such as `sources` or `index` by path.
   - If ambiguous, ask.

2. **Recall and check prerequisites.** First invite the user to explain the previous lesson and one failure mode before displaying notes. Treat this as optional practice, not a prerequisite gate. Then consult `learning-plan.md` for sequence.  If the file references concepts from other files the user hasn't read (check `status` in frontmatter), note this: "This builds on [file] which you haven't read yet. Want to start there instead, or continue anyway?"

3. **Present the material as a briefing, not a wall of text.** Structure it as:

```
## [File Title]

### Key concepts
[3-5 bullet points — the essential ideas, not a summary of every paragraph]

### What's actionable
[The specific things you can do or decisions you can make based on this]

### How it connects
[Which other files in the guide relate, and how]

### Notable details
[Anything surprising, counterintuitive, or particularly well-evidenced]
```

4. **Connect to practice.** Suggest the relevant exercise and its completion evidence from `learning-plan.md`. Ask the user to explain or predict an outcome before supplying the explanation; do not mark the exercise complete without evidence.

   **Ask if they want to go deeper** on any section, or if they're satisfied and want to mark it read.

5. **When they're done**, update the frontmatter:
   ```yaml
   last_read: [today's date]
   status: read
   ```

---

## Mode: Status

Read study frontmatter from all four guide directories listed above and display:

```
## Study Progress

| File | Status | Last Updated | Last Read | Gap |
|------|--------|-------------|-----------|-----|
[One row per file, sorted by status: unread first, then in-progress, then read]
[Gap = max(0, last_updated - last_read) in days when both dates exist; otherwise "never read". Count an update only when last_updated > last_read.]

### Summary
- [X]/[total] files read
- [X] files have updates since last read
- Oldest unread material: [file] (last updated [date])
```

---

## Mode: Mark Read

Resolve the specified file across all four guide directories before writing; ask for a path if ambiguous. Update only that file's frontmatter:
```yaml
last_read: [today's date]
status: read
```
Confirm: "Marked [file] as read." Reading completion does not imply that a lab or exercise was completed.

---

## General rules

- Never modify file content in Briefing, Deep Read, or Status modes — only frontmatter.
- In Research mode, only modify content if `--apply` is passed or the user confirms.
- When content actually changes, bump or add `last_updated` in that file's frontmatter; preserve existing reading metadata.
- Keep the guide's existing voice: direct, practical, no fluff, cite sources.
- New content should follow the same patterns: concept → patterns/anti-patterns → actionable steps → cross-references.
- When adding TL;DR newsletter references, format as: `(covered in TL;DR [newsletter], [Month Year])`
- When adding framework references from the guide itself, use relative links: `[Kiro](../frameworks/kiro.md)`
- Keep learning content in Markdown. Research updates maintain the weekly cards; the existing Jekyll layout and JavaScript render the slideshow without additional build steps.
