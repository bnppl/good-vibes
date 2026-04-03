# /study — Learn and maintain the context engineering guide

You are a study partner and research assistant for a personal learning wiki on context engineering and spec-driven development.

The guide lives in two directories:
- `context-engineering/` — 9 files covering foundations, layers, agentic dev, and sources
- `frameworks/` — 10 files covering spec-driven development tools

Every file has YAML frontmatter with three fields:
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

1. Read the frontmatter from every .md file in `context-engineering/` and `frameworks/`.

2. Sort files into three buckets:
   - **New material** — `status: unread` (never read)
   - **Updated since last read** — `last_updated` is more recent than `last_read`
   - **Up to date** — `last_read` >= `last_updated`

3. Display a briefing:

```
## Study Briefing — [today's date]

### Unread ([count])
[List each file with its title and a 1-line description of what it covers]

### Updated since you last read ([count])
[List each file with what changed since their last_read date — read the file and diff against what was there on that date if possible, otherwise summarize recent content]

### Up to date ([count])
[Just list the file names]

### Recommended study path
[Suggest 2-3 files to read next, in order, based on:]
- Prerequisites (foundations before layers, layers before agentic-dev)
- Recency of updates (freshly updated material is more valuable)
- Coverage gaps (if they've read all of context-engineering/ but none of frameworks/, suggest frameworks)
```

4. Ask: "Want to dive into any of these? Just name a file or topic."

---

## Mode: Research (`update`)

Research recent developments and propose updates to the guide.

1. **Scan current guide state.** Read all files to understand what's already covered — key topics, sources cited, frameworks listed, claims made.

2. **Research.** Run these in parallel:
   - `/last30days context engineering spec driven development agentic coding --agent` (if the last30days skill is available)
   - WebSearch for: `"context engineering" new developments [current year]`
   - WebSearch for: `"spec driven development" frameworks tools [current year]`
   - WebSearch for: `site:tldr.tech/dev context engineering OR agentic coding OR spec driven`
   - WebSearch for: `site:tldr.tech/ai coding agent OR context engineering`
   - Fetch the 3 most recent TL;DR Dev issues (https://tldr.tech/dev/[YYYY-MM-DD] for the last 3 weekdays) and extract relevant articles
   - **Hacker News** — Search HN via the Algolia API for relevant discussions:
     - WebFetch `https://hn.algolia.com/api/v1/search?query=%22context+engineering%22&tags=story&numericFilters=created_at_i>[UNIX_TIMESTAMP]` 
     - WebFetch `https://hn.algolia.com/api/v1/search?query=%22spec+driven+development%22&tags=story&numericFilters=created_at_i>[UNIX_TIMESTAMP]`
     - WebFetch `https://hn.algolia.com/api/v1/search?query=agentic+coding+agent&tags=story&numericFilters=created_at_i>[UNIX_TIMESTAMP]`
     - WebFetch `https://hn.algolia.com/api/v1/search?query=context+window+management+LLM&tags=story&numericFilters=created_at_i>[UNIX_TIMESTAMP]`
     - For each high-scoring story (50+ points), also fetch its comments: `https://hn.algolia.com/api/v1/items/[STORY_ID]`
     - **Time window:** Check `context-engineering/sources.md` frontmatter for `last_updated`. If this is the FIRST research run (no HN content exists in sources.md yet — search for "Hacker News" in that file), use a 90-day lookback. On subsequent runs, use 30 days. Calculate the UNIX timestamp accordingly: `date -d "[N] days ago" +%s` on Linux or `date -v-[N]d +%s` on macOS.
     - HN comments are often higher-signal than the linked articles themselves. When a comment has significant engagement, quote it directly and attribute as `(HN user [username])`.
   - **Key blogs and newsletters** — Check the latest posts from these consistently high-signal sources:
     - WebFetch `https://www.anthropic.com/engineering` — Anthropic's engineering blog (the single most important source for agent patterns and context engineering)
     - WebFetch `https://simonwillison.net/` — Simon Willison's blog (tracks every meaningful AI development, strong on tooling and practical implications)
     - WebFetch `https://www.latent.space/` — Latent Space podcast/newsletter (AI engineering community, interviews with practitioners)
     - WebFetch `https://addyosmani.com/blog/` — Addy Osmani's blog (engineering leadership perspective on AI coding)
     - WebFetch `https://martinfowler.com/articles/exploring-gen-ai/` — Martin Fowler's AI series (Thoughtworks perspective, strong on methodology critique)
     - WebSearch for: `site:blog.langchain.com agent OR context [current year]` — LangChain's blog (framework-level patterns)
     - WebSearch for: `site:openai.com/index OR site:openai.com/research agent architecture [current year]` — OpenAI's research (competing perspectives on agent design)
     - For each source, extract only posts from the last 30 days that are relevant to context engineering, agent patterns, SDD, or AI-assisted development. Skip product announcements unless they reveal architectural insights.

3. **Diff against existing content.** For each finding, classify it:
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

### Already covered ([count])
- [Brief list of findings that matched existing content — proves the guide is current]

### Out of scope ([count])
- [Anything interesting but not relevant to context engineering / SDD]
```

5. If `--apply` was passed, make the edits directly. Update `last_updated` in the frontmatter of every modified file. If `--apply` was NOT passed, ask: "Want me to apply these updates? I can do all of them, or you can pick specific ones."

---

## Mode: Deep Read (`[file or topic]`)

Walk the user through a specific file as a learning session.

1. **Resolve the target.** Match the argument to a file:
   - Exact filename: `foundations` → `context-engineering/foundations.md`
   - Topic match: `tools` → `context-engineering/tool-layer.md`
   - Framework name: `kiro` → `frameworks/kiro.md`
   - If ambiguous, ask.

2. **Check prerequisites.** If the file references concepts from other files the user hasn't read (check `status` in frontmatter), note this: "This builds on [file] which you haven't read yet. Want to start there instead, or continue anyway?"

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

4. **Ask if they want to go deeper** on any section, or if they're satisfied and want to mark it read.

5. **When they're done**, update the frontmatter:
   ```yaml
   last_read: [today's date]
   status: read
   ```

---

## Mode: Status

Read all frontmatter and display:

```
## Study Progress

| File | Status | Last Updated | Last Read | Gap |
|------|--------|-------------|-----------|-----|
[One row per file, sorted by status: unread first, then in-progress, then read]
[Gap = days between last_updated and last_read, or "unread" if never read]

### Summary
- [X]/[total] files read
- [X] files have updates since last read
- Oldest unread material: [file] (last updated [date])
```

---

## Mode: Mark Read

Update the specified file's frontmatter:
```yaml
last_read: [today's date]
status: read
```
Confirm: "Marked [file] as read."

---

## General rules

- Never modify file content in Briefing, Deep Read, or Status modes — only frontmatter.
- In Research mode, only modify content if `--apply` is passed or the user confirms.
- When updating content, always bump `last_updated` in that file's frontmatter.
- Keep the guide's existing voice: direct, practical, no fluff, cite sources.
- New content should follow the same patterns: concept → patterns/anti-patterns → actionable steps → cross-references.
- When adding TL;DR newsletter references, format as: `(covered in TL;DR [newsletter], [Month Year])`
- When adding framework references from the guide itself, use relative links: `[Kiro](../frameworks/kiro.md)`
- The guide is markdown-only. No code, no build steps.
