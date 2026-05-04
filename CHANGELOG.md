---
title: Changelog
nav_order: 8
nav_exclude: false
---

# Changelog

Research updates applied on 2026-05-04. Each entry shows which finding landed where.

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
