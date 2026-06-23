---
title: "Harness Engineering"
parent: "Context Engineering"
nav_order: 10
last_updated: 2026-06-23
last_read: null
status: unread
---

# Harness Engineering

{: .hook }
> **Agent = Model + Harness.**
>
> The third phase of AI engineering maturity — and the one that makes agents production-ready.

{: .in-short }
- **Prompt engineering** (2024) optimizes wording. **Context engineering** (2025) optimizes information. **Harness engineering** (2026) optimizes the environment.
- **The formula:** The harness is everything around the model — constraints, tools, verification loops, observability, permissions. The model provides raw intelligence; the harness makes that intelligence reliable.
- **The evidence:** OpenAI built 1M lines of production code with zero human-written lines, using a strict harness (Feb 2026). LangChain gained 13.7 benchmark points changing only the harness, not the model (Feb 2026). Stanford/MIT Meta-Harness automated harness optimization, achieving +4.7 IMO math points across 5 models (Mar 2026).

## The Three Phases

| Phase | Era | Core Discipline | What It Entails | Limitation |
|---|---|---|---|---|
| 1. Prompt Engineering | 2023–2024 | Language | Crafting the right words to get the right output | Works for single-turn, fails at multi-step |
| 2. Context Engineering | 2025 | Information | Managing what the model sees, in what order, at what resolution | Still probabilistic — no guarantees |
| 3. Harness Engineering | 2026 | Environment | Building deterministic guardrails, verification loops, and runtime constraints around the model | Requires upfront investment |

{: .aha }
> **You can't prompt or context your way to reliability.** At some point you need enforcement, not advice. A CLAUDE.md saying "don't delete production tables" is a suggestion. A PreToolUse hook that blocks DROP TABLE in production is a guarantee.

## The 5 Layers of a Production Harness

Faros.ai's 2026 framework, corroborated by OpenAI, Anthropic, and LangChain, identifies five layers:

### 1. Tool Orchestration
Which tools the agent can invoke, when, and with what permissions. Intent-based tool selection (only load relevant tools per step), sandboxed execution, and deterministic command validation.

### 2. Verification Loops
The agent checks its own work. Tests, linters, type checkers run automatically. Output is compared against a spec or acceptance criteria before it reaches a human. LangChain's deepagents-cli uses self-verification + tracing for their 26% improvement.

### 3. Context & Memory
Progressive disclosure across sessions. A "Director's Journal" (Slack Engineering) for structured long-run memory. Compression strategies for multi-hour sessions. Relevant context loaded per sub-task, not all at once.

### 4. Guardrails
Deterministic pre/post-execution hooks. PreToolUse hooks block dangerous commands before they run (not after, not "the model should know better"). File system sandboxes. DORA report found higher AI adoption correlates with deployment instability — guardrails are the remediation.

### 5. Observability
Tracing every agent action: tool calls, model decisions, context state at decision time. Not just "what went wrong" but "what did the agent see when it made that decision?" Metrics: cost per merged PR, time-to-merge, review velocity relative to PR size.

## Key Findings from 2026

**OpenAI's Codex experiment (Feb 2026):** A team of 3–7 engineers built a product with 1M+ lines of code — application logic, tests, CI, docs, observability — all written by agents. The constraint of "no manual code" forced them to build the harness. Their conclusion: *"Early progress was slower than expected, not because [the model] was incapable, but because the environment was underspecified."*

**LangChain's harness-only improvement (Feb 2026):** Their coding agent went from Top 30 to Top 5 on Terminal Bench 2.0 (52.8% → 66.5%). They changed nothing about the model — only the system prompt, tools, and middleware.

**Anthropic's containment work (Mar–Jun 2026):**
- "How we contain Claude across products" (Jun 2026) — blast radius containment as a harness design problem
- "Harness design for long-running application development" (Mar 2026) — patterns for multi-hour agent sessions
- "Effective harnesses for long-running agents" (Nov 2025) — the precursor that defined the category

**Martin Fowler on harness engineering (Apr 2026):** Formalized the discipline at the architectural level, mixing deterministic rules (linting, module boundaries) with LLM-based checks to keep agents aligned.

## How It Connects to Context Engineering

Harness engineering doesn't replace context engineering — it sits on top of it. Context engineering provides the information layer; harness engineering provides the enforcement layer.

- **Context engineering says** "here's the relevant code, here's the style guide"
- **Harness engineering says** "and if you violate the style guide, the PR won't merge"

Progressive disclosure, compression, and instruction files (all context engineering concepts) are the *input* to a harness. The harness adds verification, guardrails, and observability as the *feedback* layer.

{: .try-it }
> Add one deterministic guardrail to your agent pipeline this week. A PreToolUse hook that blocks `DROP TABLE` in production. A CI check that runs a linter on every agent-generated PR. Start with enforcement, not advice — that's the harness mindset.

## Cross-References

- [Foundations](foundations.md) — the OS/CPU/RAM mental model: harness engineering is the OS kernel
- [Agentic Development](agentic-dev.md) — harness patterns for coding agents: CLAUDE.md as Layer 1, hooks as Layer 2+
- [Tool Layer](tool-layer.md) — tool design is a subset of harness design; intent-based tool selection belongs here
- [Verification](../verification/index.md) — the verification section covers agentic TDD, contract testing, and fitness functions — all harness concepts
- [Agent Patterns](../agent-patterns/index.md) — multi-agent coordination is a harness orchestration problem
