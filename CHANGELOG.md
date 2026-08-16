---
title: Changelog
nav_order: 8
nav_exclude: false
---

# Changelog

Each entry shows which research finding landed where. Most recent pass first.

---

## August 2026 Research Pass

Applied 2026-08-16. Lookback window: 45 days (since the July 4 pass). Sources checked: Hacker News via Algolia (context engineering, harness engineering, spec-driven development, agentic coding), Anthropic/Claude blog, Lil'Log, Addy Osmani, Dan Luu, HumanLayer, Towards Data Science, Mem0, SE Radio, Google Developers Blog, and general web search.

The pass was dominated by two things: Anthropic's revision of context-engineering defaults for Claude 5–generation models, and a sharp turn in community sentiment toward the *limits* of harness engineering.

### context-engineering/instruction-layer.md

| Finding | Section | Type |
|---------|---------|------|
| Anthropic's "new rules of context engineering for Claude 5" (Jul 24, 2026; 463 HN pts) — 80%+ of Claude Code's system prompt removed with no eval loss; six then/now rule reversals; where each context type belongs | New "August 2026 Addendum: The Claude 5 Revision" section | **correction** |
| Same source contradicts this page's "Examples Beat Rules" guidance — examples now framed as constraining exploration vs. interface design | Caution callout added under Examples Beat Rules | **correction** |
| HN thread commentary (Willison, novaleaf, anon-3988) on instruction accumulation and contradiction | August addendum | update |

### context-engineering/harness-engineering.md

| Finding | Section | Type |
|---------|---------|------|
| HumanLayer "Why Software Factories Fail" (Jul 2026; 394 HN pts, 272 comments) — RL optimizes seconds-evaluable signals, architecture costs months; Faros AI metrics; four planning phases; 2–3× safe vs. 10–100× collapsing | New "The Limits of the Harness" section + In Short bullet | **new-topic** |
| SlopCodeBench Opus 5 run — 24% vs. 6% strict pass, 29,065 vs. ~9,000 source lines | The Limits of the Harness | new-topic |
| Lilian Weng "Harness Engineering for Self-Improvement" (Jul 4, 2026; 333 HN pts) — optimization ladder, ACE/MCE/meta-harness, Darwin Gödel Machine, STOP capability-gating, seven open challenges | New "Self-Improving Harnesses" section | **new-topic** |
| Boeckeler's guides-vs-sensors decomposition (SE Radio 730) | Key Findings from 2026 | update |

### context-engineering/foundations.md

| Finding | Section | Type |
|---------|---------|------|
| Chroma Research — all 18 frontier models degrade with input length; accuracy cliffs before rated limits | New "August 2026 Addendum" | update |
| ACE reframing: agent manages its own context budget, extending the CPU/RAM/OS metaphor | August 2026 Addendum | new-topic |
| Amazon CloudWatch Coding Agent Insights (Jul 2026) — context rot as a tracked operational metric | Caution callout | update |

### context-engineering/memory-layer.md

| Finding | Section | Type |
|---------|---------|------|
| ACE (Stanford/SambaNova/UC Berkeley) — context collapse, Generator/Reflector/Curator, +10.6% agent benchmarks | New "Context as an Evolving Playbook" section | **new-topic** |
| Mem0 State of AI Agent Memory (Aug 14, 2026) — LoCoMo/LongMemEval/BEAM scores, token-cost-per-query reporting, +29.6 temporal / +23.1 multi-hop | New "Memory Has Benchmarks Now" section | new-topic |

### context-engineering/knowledge-layer.md

| Finding | Section | Type |
|---------|---------|------|
| Context Compiler (Towards Data Science, Aug 1, 2026) — three-pass symbol resolution/interface extraction/tiered assembly, 69–74% reduction at <75ms | New "The Context Compiler" section | **new-topic** |

### context-engineering/agent-comparison.md

| Finding | Section | Type |
|---------|---------|------|
| SlopCodeBench long-horizon results and the code-volume finding | New "Long-Horizon Benchmarks and the Variance Problem" section | new-topic |
| Dan Luu — ±7.5% run-to-run variance, $12.45 vs. $40.38 cost spread on identical tasks | Same section; sharpened the Benchmark Shopping anti-pattern, added "Trusting a single run" | **correction** |

### context-engineering/agentic-dev.md

| Finding | Section | Type |
|---------|---------|------|
| Faros AI via Osmani's "Agentic Code Review" — churn +861%, defects 9%→54%, review duration +441.5%, zero-review merges +31.3%; four AI reviewers never flagged the same line across 146 PRs | New "The review bottleneck, measured" paragraph + caution | new-topic |
| The 80% system-prompt deletion result applied to instruction file design | Instruction File Design | **correction** |
| HumanLayer's four planning phases; ~40% of tasks warrant all four | Spec-Driven Development | update |

### context-engineering/sources.md

Added an August 2026 Updates section (11 annotated entries) and a July–August 2026 Hacker News section, including the negative signal that SDD tooling announcements drew almost no HN engagement while "what happened to SDD" posts did.

### frameworks/index.md

| Finding | Section | Type |
|---------|---------|------|
| Google Conductor → cross-tool plugin framework with Antigravity support (Jul 16, 2026); TerminalBench results | New "August 2026 Update" section | new-topic |
| Tier structure consensus; OpenSpec at 52.1K stars | Same section | update |
| Skepticism callout on star counts as adoption proxy, and the SDD engagement signal | Same section | **correction** |

### verification/comprehension-debt.md

| Finding | Section | Type |
|---------|---------|------|
| Faros AI / CodeRabbit / GitClear / GitHub review metrics; the zero-review merge increase; four AI reviewers with zero line overlap; agents abandoning PRs on subjective feedback | New "The Review Gate, Measured" section | **new-topic** |

### verification/test-the-tests.md

| Finding | Section | Type |
|---------|---------|------|
| Dan Luu — default LLM-generated tests "between worthless and marginally useful"; fuzzing beats LLM auditing on time-to-find-a-bug; agents useful for triaging reproductions instead | 2026 Findings | **correction** |

### Learn-on-the-go refresh

Replaced or reordered entries that had aged past the wiki's four-month freshness bar (older than 2026-04-16) across `foundations`, `instruction-layer`, `knowledge-layer`, `memory-layer`, `agentic-dev`, `agent-comparison`, `harness-engineering`, `augment-intent`, `agentic-tdd`, `ddd-boundaries`, and `fitness-functions`. Where nothing fresher with comparable depth exists, the stale item was kept with an explicit freshness note rather than dropped — `augment-intent` and `knowledge-layer` both carry one.

### Already covered (no change needed)

Loop engineering, the Supervision Paradox, orchestration tax, intent debt, VibeSec, the Augment 17-problem spread, Claude Code auto mode, and the ClickHouse case study all remain accurate and were re-confirmed against current sources.

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
