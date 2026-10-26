---
title: Changelog
nav_order: 8
nav_exclude: false
---

# Changelog

## October 26, 2026: Recent AI Practice Comparisons

- Refocused the ten published engineer comparisons on AI-specific publications since October 2025, with separate publication, practice and inspection dates and evidence kinds.
- Added recent-evidence chapters, preserved historical fields/slides, and rebuilt 59 information cards around actual projects or explicitly labelled proposals.
- Added source-format labels and a personal-use/artifact filter; clarified Fowler’s evidence gaps and Kim’s personal commit boundary.
- Updated the reusable research rules and both `/engineer` command definitions with `--since`. See the [freshness review](engineers/freshness-review.md) for scope, source-access limits and validation.

## October 26, 2026: The Good Scroll

- Rewrote sixteen cards as short information posts: hook, explanation, example, and takeaway, with optional source and practice links.
- Replaced Learn/Recall/Try steps and review gates with direct card navigation and optional saved ideas. Labs remain in the notes.
- Added bold collection colours and typography, retained touch/keyboard navigation, and preserved old card URLs and saved position.
- Updated both `/study` definitions to maintain this information-first format.

## October 26, 2026: Study Updates Keep Cards in Sync

- Extended both Claude Code and OpenCode `/study update` definitions to scan weekly cards, detect drift, and propose corresponding slideshow changes alongside chapter updates.
- Apply mode updates affected cards within the approved scope, preserving concise lessons, source qualifications, stable card IDs and parser labels, reading metadata, and exercise evidence.
- Added card-change reporting and checks for links, recall answers, and slideshow structure; clarified that Pages deployment and browser review marks remain separate.

## October 26, 2026: Study Research Catch-up

- Ran the study briefing across all 41 tracked files: 38 unread, three previously read and updated, no in-progress or current files. Kept reading dates, statuses, and exercise checkboxes unchanged.
- Added sourced material on skill discovery evaluation, simplifying coupled specialist agents, targeted retrieval, evidence-linked memory, trust across summaries/resumes, service identity, and delivery infrastructure bottlenecks.
- Added the older infrastructure-noise evaluation reference as a coverage gap, explicitly distinguished from newly published research.
- Corrected unsupported multi-agent defaults and the unconditional hybrid-search recommendation. Kept practitioner accounts, preprints, and proposed exercises distinct.
- Linked the findings into existing sessions and card exercises. Recorded source dates, research scope, limitations, and the full inventory in `study-briefings/2026-10-26.md`.

## October 26, 2026: GitHub Pages Learning Slideshow

- Added a JavaScript slideshow at `/learn/`, with a dedicated responsive layout, weekly deck picker, and Learn → Recall → Try steps.
- Added keyboard and swipe navigation, shareable card/step URLs, answer reveals, and browser-local position and review progress. Reviewing a card does not complete its practical exercise.
- Reused the weekly Markdown cards as the single content source, with Jekyll-rendered content and base-path-aware links. No additional JavaScript build or runtime dependencies.
- Linked the slideshow from the wiki home, deck index, and learning plan.

## October 26, 2026: Bite-Sized Learning Deck

- Added four weekly Markdown decks with 16 lesson cards and four lab cards, following the revised learning plan.
- Each lesson includes one main idea, a spelling-app example, a recall question with a collapsible answer, an exercise, and links to the full material.
- Added a deck landing page and entry links from the home page, README, and learning plan. Kept chapter reading metadata and exercise completion separate.


Updates to the learning guide and study tooling. Historical entries retain their original dates.

## October 26, 2026: Measured Practice and Evidence Corrections

- Replaced the 29-session reading sequence with 16 short sessions and four practical labs; preserved prior completed-reading notes and existing reading metadata.
- Added `verification/agent-evaluation.md` and `verification/agent-security.md`, linked through the verification index and source list.
- Moved evaluation, acceptance criteria, comprehension checks, and baseline measurement into week one; added harness mapping, held-out comparisons, cross-session regression checks, containment tests, and a team adoption recommendation.
- Made the framework survey optional and tied comparison to observed bottlenecks.
- Qualified instruction-count, session-duration, parallel-agent, comprehension, contract-testing, architecture, and hook-guarantee claims; corrected repeated claims in audio reading bundles. Removed the unsupported four-week comprehension-decay assertion.
- Updated both Claude Code and OpenCode `/study` definitions to scan four directories, follow the revised sequence, separate reading from exercise completion, and check source scope before adding claims.
- Clarified the TDD workflow: reviewed intent and tests, protected authoritative checks, risk-based review, and exploratory work where behaviour is unknown.


---

## May 2026 Research Pass

### context-engineering/tool-layer.md

| Finding | Section | Type |
|---------|---------|------|
| MCP breadcrumb navigation (taoofmac) — tools returning navigation hints alongside primary output, enabling discovery-on-demand rather than upfront schema loading | MCP Servers | New paragraph |
| Context routing (SwirlAI) — injecting different context subsets to different agent roles (planner vs. implementer vs. reviewer) | The Tool Selection Problem > Strategies | New bullet |
| Code Mode: read/write phase declarations (LeanIX) — `set_mode()` pattern reducing unintended writes ~60%, making intent auditable | New section before Actionable Steps | New section |

---

### context-engineering/instruction-layer.md

| Finding | Section | Type |
|---------|---------|------|
| SKILL.md format specification — YAML frontmatter → activation summary → reference sections; the 3–5× baseline context reduction math (80 tokens discovery vs. 3,000–8,000 pre-loaded) | Agent Skills: Progressive Disclosure | New paragraph |
| Anti-rationalization table — five common rationalizations for skipping skills, with explanations of why each is a red flag | Anti-Patterns | New table |

---

### context-engineering/agentic-dev.md

| Finding | Section | Type |
|---------|---------|------|
| The Supervision Paradox (Lars Faye, 406 HN pts) — more autonomy requires more oversight infrastructure; checkpoints every 3–5 steps outperform "let it run"; checkpoints as context reset events, not interruptions | New section before Practical Playbook | New section |

---

### context-engineering/memory-layer.md

| Finding | Section | Type |
|---------|---------|------|
| Agent Loom "placement beats recency" — position in context window affects attention as much as recency; middle content is downweighted; injection position is a separate decision from retrieval ranking | Memory Retrieval | New paragraph |

---

### context-engineering/knowledge-layer.md

| Finding | Section | Type |
|---------|---------|------|
| Intent debt — the accumulation of undocumented design decisions agents can't reason about; grows faster with agents than humans; mitigation via ADRs, annotated specs, decision logs | New section before Anti-Patterns | New section |

---

### context-engineering/sources.md

| Finding | Section | Type |
|---------|---------|------|
| "The Supervision Paradox" — Lars Faye (406 HN pts, May 2026) | May 2026 Updates | New source |
| "Agent Loom: Context Placement in Long-Horizon Tasks" — placement beats recency research | May 2026 Updates | New source |
| "MCP Breadcrumb Navigation" — taoofmac (May 2026) | May 2026 Updates | New source |

---

### frameworks/index.md

| Finding | Section | Type |
|---------|---------|------|
| BMAD-METHOD — multi-agent methodology with no-cross-contamination rule; specialized agent roles with strictly scoped context packages | Rankings table + May 2026 Entrants section | New framework |
| SPDD (Self-Prompting Driven Development) — orchestrator-generated sub-prompts, iterative refinement loop, exploratory-work focus | Rankings table + May 2026 Entrants section | New framework |
| SpecD — machine-executable specs in JSON/YAML with bidirectional test generation; CLI-based, framework-agnostic | Rankings table + May 2026 Entrants section | New framework |

---

### frameworks/openspec.md

| Finding | Section | Type |
|---------|---------|------|
| Three-phase state machine — `proposed → approved → implementing`; CLI-enforced state transitions; spec state as the asynchronous handoff mechanism between planning and implementation agents | New "Three-Phase State Machine" section | New section |

---

### verification/sources.md

| Finding | Section | Type |
|---------|---------|------|
| DataPRM — process reward modeling dataset for silent error detection; step-level correctness signals interrupt fluency-without-accuracy failure mode | May 2026 Updates (new section prepended before April 2026) | New source |
| Observability as evaluation — production traces as continuous eval signals; anomaly detection on agent telemetry; Claude Code postmortem as negative case | May 2026 Updates | New entry |

---

## Previously applied (April 2026 research pass)

The April 12 research pass added content now visible as `(New — April 12 research)` callouts in:
- `context-engineering/orchestration-layer.md` — Brain/Hands/Session architecture, tiered context compression
- `context-engineering/tool-layer.md` — Tool count numbers (20-tool ceiling, 10-tool accuracy cliff)
- `context-engineering/instruction-layer.md` — Agent Skills format, progressive disclosure as industry standard
- `context-engineering/agentic-dev.md` — Brooker SDD rebuttal, GSD, ClickHouse case study
- `context-engineering/memory-layer.md` — Continual learning three-layer framework
- `context-engineering/sources.md` — Anthropic managed agents, Osmani posts, LangChain sources
