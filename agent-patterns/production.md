---
title: "Production Patterns"
parent: "Agent Architecture Patterns"
nav_order: 4
last_updated: 2026-07-03
last_read: null
status: unread
---

# Production Patterns: Lessons from Shipping Agents at Scale

{: .hook }
> **Theory tells you which patterns exist. Production tells you which ones survive — and the list is shorter than you'd think.**
>
> The hardest lessons from Anthropic, Stripe, Cursor, and Claude Code's leaked architecture aren't in any pattern document.

**In short:**
- **The problem:** Agent systems fail in predictable ways — context drift after 35 minutes, cascading errors without verification gates, tool output flooding, and over-delegation that costs more than it saves.
- **The idea:** Hard-won lessons from teams who've shipped agent systems at scale: what worked, what failed, and what nobody warned them about.
- **How it works:** Orchestrator-worker with parallel execution + explicit effort budgets + rainbow rollouts for long-running agents + tracing for decisions (not just tool calls).
- **The result:** The best production agent systems aren't fully agentic — they're hybrids where deterministic steps handle the predictable work and agents handle the reasoning.

{: .aha }
> **The engineering around the model matters as much as the model itself** — Claude Code's advantage is context engineering and tool design, not raw model capability.

{: .try-it }
> Run your production agent system against the 8-item checklist at the bottom of this page. Which items are missing? Each gap is a failure mode waiting to happen at the worst possible time.

---

## Deep dive

Theory tells you which patterns exist. Production tells you which ones survive. This page collects hard-won lessons from teams running agent systems in production — what worked, what failed, and what nobody warned them about.

---

## Anthropic: Multi-Agent Research System

Anthropic published the most detailed account of a production multi-agent system in 2026. Their research system uses an orchestrator-worker pattern with Claude Opus as lead and Claude Sonnet as subagents.

**What worked:**
- Multi-agent outperformed single-agent by 90.2% on their internal evaluation
- Parallel execution reduced research time by ~90% vs. serial spawning
- Token usage explains 80% of performance variance — more tokens (via parallel agents) = better results
- Extended thinking (scratchpads) for both lead and subagents improved reasoning quality

**What they learned the hard way:**
- **Effort scaling is hard.** Agents struggle to judge appropriate effort. The fix: embed explicit effort budgets in prompts ("simple fact-finding: 1 agent, 3-10 calls; complex research: 10+ subagents")
- **Statefulness creates fragility.** Long-running agent processes cascade failures from minor issues. Solution: checkpoint systems enabling resumption from failure points, not from scratch.
- **Debugging non-deterministic systems requires tracing.** Production monitoring must track decision patterns and interaction structures. Traditional logging isn't enough.
- **Deployment requires rainbow rollouts.** Standard rolling deployments break running agents when the underlying code changes. Rainbow deployments keep the old version running for in-flight tasks.
- **Multi-agent is expensive.** ~15x more tokens than chat interactions. Only justified when the task value exceeds the compute cost. Poorest fit: coding tasks (limited parallelization) and highly interdependent work.

---

## Stripe: Minions (Blueprints + Toolshed)

Stripe's one-shot coding agents use "blueprints" — hybrid workflows that mix deterministic nodes (lint, push, test) with free-running agent loops (covered in TL;DR Dev, March 2026).

**Key innovations:**
- **Blueprints as hybrid workflows.** Not everything needs to be agentic. Deterministic steps (formatting, linting, testing) are faster and more reliable than agent-driven equivalents. Only the reasoning-heavy steps need agent loops.
- **Toolshed MCP server.** A centralized MCP server with 500+ shared tools across all agents. Rather than each agent carrying its own tools, they share a common registry. This standardizes tool behavior and reduces per-agent context overhead.
- **One-shot execution.** Agents receive a task and complete it in a single run — no back-and-forth with humans. This forces the task description to be comprehensive upfront (essentially plan-and-execute).

**Lesson:** The best agent systems aren't fully agentic. They're hybrids where deterministic steps handle the predictable work and agents handle the reasoning. Trying to make everything agentic is more expensive and less reliable.

---

## Cursor: Dynamic Context Discovery

Cursor's approach to context management (published January 2026, discussed on HN) is the most detailed production implementation of just-in-time loading.

**Five techniques:**
1. Long tool outputs written to files, not truncated — agents retrieve what they need via `tail`/`grep`
2. Chat history saved to files for recovery after context window summarization
3. Skill descriptions listed minimally — full details discovered via search when relevant
4. MCP tool descriptions synced to folders, loaded on demand — **46.9% token reduction** in A/B tests
5. Terminal outputs written to filesystem for selective retrieval

**Lesson:** Everything to disk, load only what's needed. This principle applies to any agent system — the filesystem is the most reliable context store, and progressive discovery beats static loading.

---

## Claude Code: Leaked Architecture

When Anthropic's Claude Code internals were accidentally exposed in April 2026 (covered in TL;DR AI), analysis revealed production-grade implementations of several patterns:

- **Three-layer memory architecture** solving context entropy
- **Forked subagents** for parallel processing "without contaminating the main execution loop" — orchestrator-worker in action
- **File-read deduplication** to reduce context bloat — a form of observation masking
- **Specialized utilities** (Grep, Glob, LSP) for efficient repository navigation — domain-specific tools outperform generic ones
- **Structured session memory management**

**Lesson:** The engineering around the model matters as much as the model itself. Claude Code's advantage isn't model capability — it's the context engineering, tool design, and agent architecture layered on top.

---

## Common Production Failure Modes

These failures appear across organizations, regardless of which agent framework they use:

**1. Context drift in long sessions.** After 35+ minutes (Anthropic's data), agents lose track of earlier decisions. Symptoms: repeated work, contradictory changes, ignoring established constraints. Fix: compaction breaks, fresh agents per task, structured note-taking.

**2. Cascading errors in multi-agent systems.** One agent makes a wrong decision, and downstream agents build on it. Without verification gates between phases, the error compounds. Fix: quality gates, human checkpoints at phase boundaries, automated tests between steps.

**3. Tool output flooding.** Agents call tools that return massive outputs (full test suites, large file reads, verbose logs), filling the context window with noise. Fix: observation masking, truncation, progressive retrieval.

**4. Over-delegation.** Splitting work across too many agents creates coordination overhead that exceeds the time savings. The overhead of managing 10 agents can be worse than one agent working sequentially. Fix: start with the minimum number of agents, add only when there's a clear independence-based justification.

**5. Loss of system comprehension.** As Osmani warns: when humans can't understand what agents built, they can't maintain it. High-autonomy systems that make architectural decisions without human review create technical debt that's invisible until something breaks. Fix: mandatory human review of architectural decisions, regardless of autonomy level.

**6. The "AI coding is gambling" trap.** Without structure, using agents becomes a slot machine — keep re-rolling until you get output that looks right. The fix is the subject of this entire learning program: context engineering, specs, plans, patterns, and verification.

---

## Production Engineering Checklist

Before deploying an agent system:

- [ ] **Pattern chosen deliberately** — not defaulting to the most complex option
- [ ] **Context management designed** — compaction strategy, tool output limits, memory schema
- [ ] **Verification gates in place** — tests, human checkpoints, quality metrics
- [ ] **Failure recovery planned** — checkpoints for long tasks, graceful degradation
- [ ] **Cost model understood** — token usage per task, multi-agent multiplier budgeted
- [ ] **Observability deployed** — tracing for agent decisions, not just tool calls
- [ ] **Human escalation paths defined** — when should the agent stop and ask?
- [ ] **Deployment strategy handles long-running agents** — rainbow/canary, not hard cutover

---

## Enterprise Context: Thoughtworks Analysis, June 2026

Birgitta Boeckeler's Thoughtworks report (Martin Fowler's site, June 16, 2026) documents how large regulated organizations differ from cloud-native teams when adopting agentic development — and where the patterns converge.

**What the analysis found:**

The core patterns described above (orchestrator-worker, verification gates, context management) all apply in enterprise settings, but with one structural difference: the human-in-the-loop cadence is higher and non-negotiable. Regulatory, compliance, and IP constraints mean enterprise teams cannot simply "let it run." This turns out not to be a constraint but a discipline — the kind the rest of the field is discovering independently through the Supervision Paradox.

Teams that front-loaded context engineering — AGENTS.md files, architectural fitness functions, domain-specific instruction schemas — saw larger gains than those relying on ad-hoc prompting. The gap was steeper than in cloud-native environments, likely because enterprise codebases carry more implicit domain knowledge that has never been written down. Agents amplified that gap: well-documented codebases got significantly better results; underdocumented ones saw agents confident and wrong.

**The orchestration tax is steeper in enterprises.** More reviewers, more approval gates, more stakeholders each holding the GIL on architectural decisions. The same fix applies — scale fleet to your review rate — but the review rate ceiling is lower in regulated environments.

**The "broken rhythm" finding.** Intensive agent sessions are more mentally exhausting than manual coding because the human remains the primary quality gate for a higher volume of output. ClickHouse found this; Boeckeler's enterprise analysis found the same pattern. The solution isn't to reduce autonomy — it's to invest in the artifacts (specs, ADRs, fitness functions) that make review faster without making it shallower.

---

For sources and further reading, see [sources.md](./sources.md).
