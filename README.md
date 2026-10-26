---
title: About
nav_order: 7
---

# good-vibes

A personal learning wiki on **context engineering** and **spec-driven development**, plus the Claude Code tooling used to maintain it.

This repo is primarily a markdown knowledge base. Two pieces of Claude Code machinery live alongside the content:

1. **`/study`** — a slash command that treats the wiki like a course: briefings, deep reads, research updates, and reading progress tracked in frontmatter.
2. **`agentic-alignment`** — a skill for bringing existing codebases into shape for AI coding agents.

---

## Repo layout

```
context-engineering/   # The guide: foundations, layers, agentic dev, sources
frameworks/            # Survey of spec-driven development tools
agent-patterns/        # Notes on agent architecture patterns
verification/          # Notes on verification practices
learning-plan.md       # Four-week roadmap: 16 short sessions and four practical labs
claude-config/
  commands/study.md    # The /study slash command definition
skills/
  agentic-alignment/   # The agentic-alignment skill
```

Study files in `context-engineering/`, `frameworks/`, `agent-patterns/`, and `verification/` carry YAML frontmatter used by `/study`:

```yaml
last_updated: 2026-04-02   # when content last changed
last_read: null            # when you last studied it (null = never)
status: unread             # unread | in-progress | read
```

---

## The learning plan

Start with the **learning slideshow** at `/learn/` on the GitHub Pages site: 16 lessons across four weeks with Learn → Recall → Try steps, plus four lab cards. It supports arrow keys, touch swipes, direct links to cards, and browser-local position and review progress. Exercise completion stays in the learning plan. The [Learning Deck notes](learning-deck/index.md) are the single source of lesson content.

The slideshow uses a standalone [Jekyll layout](_layouts/learning-deck.html), [CSS](assets/css/learning-deck.css), and [plain JavaScript](assets/js/learning-deck.js). Jekyll embeds the weekly Markdown pages at build time; no JavaScript build tools, external libraries, or runtime requests are needed. The existing GitHub Pages workflow builds and deploys it with the rest of the wiki. URLs respect the configured Pages base path. Browser progress does not sync between devices or modify `/study` metadata.

[`learning-plan.md`](learning-plan.md) brings evaluation and verification into week one, adds dedicated harness and containment work, and makes framework comparison optional. Short mobile readings lead to observable exercise outputs; four development labs provide baseline, comparison, handoff, and adoption evidence. Existing reading dates remain intact.

## The `/study` command

`/study` is a Claude Code slash command defined in [`claude-config/commands/study.md`](https://github.com/bnppl/good-vibes/blob/main/claude-config/commands/study.md). It turns the wiki into an active study partner rather than a passive pile of markdown. Run it inside Claude Code with optional arguments:

| Command | Mode | What it does |
|---|---|---|
| `/study` | **Briefing** | Reads frontmatter across all four content directories, buckets files into *unread*, *updated since last read*, and *up to date*, then recommends a 2–3 file study path. |
| `/study [file or topic]` | **Deep Read** | Walks you through a specific file as a structured briefing (key concepts → actionable → how it connects → notable details), warns about missing prerequisites, and updates `last_read` / `status` when you're done. |
| `/study status` | **Status** | Shows a table of reading progress — which files are read, which have updates since you last read them, and the oldest unread material. |
| `/study mark-read [file]` | **Mark Read** | Updates a file's frontmatter to `status: read` without walking through it. |
| `/study update` | **Research** | Scans current guide state, then researches recent developments in parallel across `last30days`, WebSearch, TL;DR newsletters, Hacker News (via Algolia API + comments), and a curated list of high-signal blogs (Anthropic Engineering, Simon Willison, Latent Space, Addy Osmani, Martin Fowler, LangChain, OpenAI). Diffs findings against existing content and proposes chapter updates plus affected slideshow-card refreshes. |
| `/study update --apply` | **Research + Apply** | Same as `update`, but writes the chapter and corresponding card edits directly, updating `last_updated` only on changed files. |

### Guarantees

- **Briefing, Deep Read, and Status modes never modify content** — only frontmatter.
- **Research mode** only modifies content when `--apply` is passed or you confirm.
- When content is updated, `last_updated` is bumped in that file's frontmatter.
- New content follows the guide's existing voice: direct, practical, cited.
- Research updates check the weekly slideshow cards against their source chapters and refresh affected cards while preserving IDs, concise formatting, and exercise progress. Browser review marks remain local and are not reset; the update summary identifies changed cards to revisit.
- Card updates reach the slideshow through the next GitHub Pages build and deployment; `/study update` does not commit, push, or deploy.

### How progress tracking works

Because `last_updated` and `last_read` are both dates in frontmatter, a file is "updated since you last read it" whenever `last_updated > last_read`. The Briefing mode uses that comparison to surface material that's drifted since your last pass. `/study status` shows the gap in days.

### Installing the command

Claude Code looks for slash commands in `.claude/commands/` inside a project, or `~/.claude/commands/` globally. To use `/study` in this repo, symlink or copy it:

```bash
mkdir -p .claude/commands
ln -s ../../claude-config/commands/study.md .claude/commands/study.md
```

---

## The `agentic-alignment` skill

A Claude Code skill defined in [`skills/agentic-alignment/SKILL.md`](https://github.com/bnppl/good-vibes/blob/main/skills/agentic-alignment/SKILL.md). It's **brownfield-focused**: the job is to take a codebase that already exists, already has conventions, and already has history, and make it work better with AI coding agents.

### When to use it

- You're starting to use Claude Code on an existing codebase.
- Agent output quality is inconsistent and you suspect context is the problem.
- The project has grown organically and instruction files are bloated or missing.
- You want to retroactively add specs to complex areas without boiling the ocean.

### When NOT to use it

- Greenfield projects — just write a good `CLAUDE.md` from the start.
- Quick bug fixes — just do the work.
- The project already has clean instruction files and good test coverage.

### The workflow

Four stages, in order. Each stage has its own reference file under `skills/agentic-alignment/references/` that the skill loads when it reaches that stage (progressive disclosure — it doesn't frontload everything).

1. **Audit** — Understand what the agent currently "sees." Produces a `CONTEXT_AUDIT.md` describing instruction files, test coverage, and documentation state.
2. **Instruct** — Clean up or create `CLAUDE.md` and subdirectory configs so they're focused and high-signal. Every instruction gets user approval.
3. **Spec** — Retroactively spec the parts of the codebase that are complex, poorly documented, or frequently misunderstood by agents. Leaves simple code alone.
4. **Verify** — Establish a test baseline and verification habits so agent output is checked, not trusted.

### Core principles the skill enforces

- **Less is often more.** Removing irrelevant context improves agent output.
- **Examples beat rules.** Showing good output outperforms describing it.
- **Progressive disclosure.** Point agents to docs when relevant, don't frontload.
- **Don't store what's derivable.** The agent can read the filesystem, run `git log`, and check test output.
- **Match effort to complexity.** Not everything needs a formal spec.
- **Verify before claiming done.** Run the tests, check the output, every stage.

### Guarantees

- **Always asks before changing files.** The skill audits and recommends; you decide what to apply.
- **Not all four stages in one session.** Stage 1 is always worth doing; 2–4 depend on what the audit reveals.
- **The audit may say the project is fine.** If so, the skill says so and stops.

### Installing the skill

Claude Code skills live in `~/.claude/skills/` globally or `.claude/skills/` per project. Symlink or copy the directory:

```bash
mkdir -p ~/.claude/skills
ln -s "$(pwd)/skills/agentic-alignment" ~/.claude/skills/agentic-alignment
```

---

## Working in the wiki by hand

You don't need Claude Code to use the content — everything is plain markdown. Start with:

- [`context-engineering/index.md`](context-engineering/index.md) — entry point for the guide
- [`frameworks/index.md`](frameworks/index.md) — entry point for the SDD framework survey
- [`learning-plan.md`](learning-plan.md) — the study roadmap
