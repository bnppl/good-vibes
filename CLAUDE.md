# good-vibes

Personal learning wiki on context engineering and spec-driven development, plus Claude Code tooling.

## What's here

- `context-engineering/` — guide files, each with YAML frontmatter (`last_updated`, `last_read`, `status`)
- `frameworks/` — SDD framework survey files, same frontmatter
- `agent-patterns/`, `verification/` — notes directories
- `claude-config/commands/study.md` — the `/study` slash command definition (Claude Code)
- `.opencode/commands/study.md` — the `/study` custom command (OpenCode)
- `skills/agentic-alignment/` — the agentic-alignment skill (both Claude Code and OpenCode)

## Conventions

- Study files in `context-engineering/`, `frameworks/`, `agent-patterns/`, and `verification/` carry frontmatter — preserve it when editing content
- Voice: direct, practical, cited. No fluff.
- New content follows: concept → patterns/anti-patterns → actionable steps → cross-references
- TL;DR refs: `(covered in TL;DR [newsletter], [Month Year])`
- Internal links use relative paths: `[Kiro](../frameworks/kiro.md)`
- Learning content stays in Markdown. The GitHub Pages slideshow uses `_layouts/learning-deck.html` and vanilla CSS/JavaScript in `assets/`, with no additional build steps. Its lesson content comes from `learning-deck/week-*.md`.

## Boundaries

- Do not modify frontmatter `last_updated` unless content actually changed
- Do not modify content in Briefing, Status, or Deep Read modes — only frontmatter
- Research mode only writes content when `--apply` is passed or the user confirms

## Context

- Read `claude-config/commands/study.md` before modifying `/study` behaviour (Claude Code)
- Read `.opencode/commands/study.md` before modifying `/study` behaviour (OpenCode)
- Read `skills/agentic-alignment/SKILL.md` before modifying the skill
