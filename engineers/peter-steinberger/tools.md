---
title: Peter Steinberger — tools and chronology
parent: Peter Steinberger
nav_order: 3
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
---

> **Scope update — 26 October 2026:** Start with [recent AI evidence](recent-ai.md). The material below retains earlier principles, dated reports and our optional adaptations. It must not be read as a complete current personal AI workflow.

# Tools and chronology

[Profile](index.md) · [Research](research.md) · [Source register](sources.md)

## Documented tools

| Evidence | Relationship and role | What is not established |
|---|---|---|
| August 2025 account | Historical Claude Code/Ghostty workflow, with other editors/review tools | A current preferred host or comparative model ranking. [S01](sources.md#s01) |
| October 2025 account | Historical Codex-led parallel terminal work | Current agent count or universal same-folder policy. [S02](sources.md#s02) |
| December 2025 account | Reports building and using Oracle for difficult second opinions | Its present frequency in private work. [S04](sources.md#s04) |
| Pinned Agent Scripts README | Public shared guidance, skills, and helper routing | Whether every private machine matches it. [S06](sources.md#s06) |
| Pinned Oracle agent docs | CLI, skill, and MCP second-opinion integrations with scoped previews | Runtime compatibility or an independent correctness guarantee. [S08](sources.md#s08) |
| Pinned Summarize instructions | Project-specific development and release checks | A universal private deployment pipeline. [S09](sources.md#s09) |

## Shared guidance and current artifacts

The October 2026 README makes shared instructions and repo-owned skills canonical. It therefore qualifies the earlier rhetoric about elaborate tool layers. A living workflow can adopt a mechanism later without invalidating the earlier account of a particular experience. [S06](sources.md#s06)

The inspected revisions are in the [source register](sources.md). These documents are research evidence, not instructions adopted by this project. No local paths, account identities, or organizational permissions from them are prerequisites for using the common exercise.

## Second opinions without invented setup

Oracle's pinned documentation describes handing a context bundle to another model and retaining session information. It also offers a preview route. [S08](sources.md#s08)

For a target project, our suggestion is to choose only the relevant files and explain what question the second opinion should answer. A second model agreeing with the first is not independent proof of intent or behaviour. Inspect what was sent and compare the answer with the code and actual checks.

No install command is copied here: this study did not install dependencies or test current host-specific setup. Read the pinned original and then current official documentation before adopting it. An integration supporting several model providers does not establish which one a person privately uses today.

## Integration and release boundaries

The pinned shared guidance separates shipping work from explicit artifact publication; the Summarize project specifies component ordering and extension verification. [S07](sources.md#s07) · [S09](sources.md#s09)

For the reward exercise, preserve the existing repository's release contract. If stored data representation changes, include its compatibility implications. Do not claim deployment because a commit exists or because one command passed. Our exercise stops at a reviewed, verifiable increment unless publication is independently requested.

## Controls and their limits

The public instructions prescribe review and authority distinctions. Oracle adds bundle-preview guidance. These are inspectable prescriptions, not a security audit or proof that every tool path enforces them. [S07](sources.md#s07) · [S08](sources.md#s08)

Our proposed setup should examine real capabilities: writable data, accessible credentials, outbound destinations, and the target app's test surface. Use only the controls relevant to the actual environment. The public repository's documentation cannot fill gaps in the target project's own permissions.
