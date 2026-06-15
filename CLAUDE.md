# good-vibes

Personal learning wiki on context engineering and spec-driven development, plus Claude Code tooling.

## What's here

- `context-engineering/` — guide files, each with YAML frontmatter (`last_updated`, `last_read`, `status`)
- `frameworks/` — SDD framework survey files, same frontmatter
- `agent-patterns/`, `verification/` — notes directories
- `claude-config/commands/study.md` — the `/study` slash command definition
- `skills/agentic-alignment/` — the agentic-alignment skill

## Conventions

- Every `.md` in `context-engineering/` and `frameworks/` carries frontmatter — preserve it when editing content
- Voice: direct, practical, cited. No fluff.
- New content follows: concept → patterns/anti-patterns → actionable steps → cross-references
- TL;DR refs: `(covered in TL;DR [newsletter], [Month Year])`
- Internal links use relative paths: `[Kiro](../frameworks/kiro.md)`
- No code, no build steps — markdown only

## Boundaries

- Do not modify frontmatter `last_updated` unless content actually changed
- Do not modify content in Briefing, Status, or Deep Read modes — only frontmatter
- Research mode only writes content when `--apply` is passed or the user confirms

## Context

- Read `claude-config/commands/study.md` before modifying `/study` behaviour
- Read `skills/agentic-alignment/SKILL.md` before modifying the skill
