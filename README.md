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

Start with the **learning slideshow** at `/learn/` on the GitHub Pages site: 16 bite-sized information cards with punchy hooks, concrete examples, and useful takeaways. Read each in around 30 seconds; swipe straight to the next, save an idea, or follow optional deeper-reading links. Four practical labs stay in the notes and learning plan. The [Learning Deck notes](learning-deck/index.md) are the single source of card content.

The slideshow uses a standalone [Jekyll layout](_layouts/learning-deck.html), [CSS](assets/css/learning-deck.css), and [plain JavaScript](assets/js/learning-deck.js). Jekyll embeds the weekly Markdown pages at build time; no JavaScript build tools, external libraries, or runtime requests are needed. The existing GitHub Pages workflow builds and deploys it with the rest of the wiki. URLs respect the configured Pages base path. Browser position and saved ideas do not sync between devices or modify `/study` metadata.

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

## Research an engineer's approach

`/engineer` separates detailed research from the short reads built from it. Each person has a directory under `engineers/` containing their research, sources, comparison fields, and derived slideshow notes. There is no fixed research length: substantial topics can grow into their own chapters.

```text
/engineer "Kent Beck" --stage research
/engineer "Kent Beck" --stage slides
/engineer "Kent Beck"
/engineer "Kent Beck" --compare "Dave Farley"
/engineer "Steve Yegge" --compare "Robert C. Martin, David Heinemeier Hansson"
/engineer "Kent Beck" --refresh --since 2025-10-01
```

The main comparison prioritises AI-specific publications since October 2025 (`--since` changes the lower bound). Each field shows publication date, practice period and whether the evidence is personal use, an artifact, advice or commentary. Older general principles are background.

The default single-person command ensures research exists and then creates slides. Existing research is reused. `--stage research` creates only the cache; `--stage slides` derives slides without browsing. `--refresh` explicitly updates primary-source research and affected views. `--compare` defaults to cached comparison: missing profiles are reported as prerequisites, and evidence dates stay visible. Use `--stage all --compare "..."` to explicitly research missing participants and derive all views.

[Browse engineers](engineers/index.md) and [open the side-by-side field cards]({{ '/engineers/compare/' | relative_url }}). The cards include twelve shared dimensions, tool summaries, qualifications, and source links, with a dimension selector and mobile horizontal scrolling. A generated comparison document adds evidence-backed disagreements, a common worked example, and adoption tradeoffs. The shared page discovers new cached profiles at build time. Name and alias search and focus filters keep larger collections usable. Focus badges distinguish coding with AI from building AI systems; selected people remain visible while filtering, and mixed-focus comparisons retain an explicit scope note.

The [interactive approach map]({{ '/engineers/map/' | relative_url }}) shows all twenty engineers in overlapping regions, with scoped tooling examples and direct links. The [visual exploration gallery]({{ '/engineers/visuals/' | relative_url }}) adds eight perspectives, including subway routes, verification ownership, project contexts and disagreement. These views retain their editorial scope and source qualifications.

The [portable research prompt](docs/engineer-research-prompt.md) works in another research-capable assistant with `PERSON` as a parameter. The [cache and view schema](docs/engineer-cache-schema.md) defines the directory structure, evidence fields, and slide format. The slide stage reuses the main viewer: Jekyll embeds Markdown and plain JavaScript renders one bite-sized idea at a time. Saved ideas are separate for each engineer.

Claude Code's wrapper is `claude-config/commands/engineer.md`; OpenCode's is `.opencode/commands/engineer.md`. Both read the same prompt and schema. To install the Claude command from the repo root:

```bash
mkdir -p .claude/commands
ln -s ../../claude-config/commands/engineer.md .claude/commands/engineer.md
```

Inspect an existing destination before replacing it. Run the commands in this repository. They write documentation and derived views; they do not commit, push, or deploy.

## How companies build software using AI

The [company knowledge bases](companies/index.md) cover twenty organisations across banking, fintech, crypto, education, retail, media, transport, infrastructure and developer tools. Each company has its own directory with detailed research, source findings, observed workflow, optional practice, structured D01–D12 fields, slide notes and a slideshow. The [written comparison](companies/comparison.md) and [side-by-side cards]({{ '/companies/compare/' | relative_url }}) use those same claims, dates and qualifications. Search by company or alias, filter by industry and evidence, and compare up to three cases.

The focus is how teams use AI to build and maintain software. An AI feature or tool announcement alone cannot establish an internal development practice. Policies, actual cases, artifacts and recommendations remain separate. A named team is not assumed to represent every employee. The [research review](companies/review.md) records evidence gaps, material corrections and validation.

The portable [company research prompt](docs/company-research-prompt.md) and [cache contract](docs/company-cache-schema.md) support `/company` in Claude Code and OpenCode:

```text
/company "Stripe" --stage research
/company "Stripe" --stage slides
/company "Monzo" --compare "Stripe, Shopify"
/company "GitLab" --refresh --since 2025-10-01
```

A comparison defaults to cached research; slide generation does not browse. Existing complete caches are reused unless a refresh is requested. The command wrappers live at `claude-config/commands/company.md` and `.opencode/commands/company.md`. Install the Claude wrapper in `.claude/commands/` using the same approach as `/engineer`. These commands do not themselves commit, push or deploy changes.

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

Explore [company subway routes](https://bnppl.github.io/good-vibes/companies/subway-routes/): source-backed AI-assisted engineering cases, with explicit endpoints and exclusions.

[Project bootstrap wizard](https://bnppl.github.io/good-vibes/pipeline/bootstrap/) curates sourced tools and processes into a downloadable agent setup prompt.
