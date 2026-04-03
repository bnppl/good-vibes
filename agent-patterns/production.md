---
last_updated: 2026-04-03
last_read: null
status: unread
---

# Production Patterns: Lessons from Shipping Agents at Scale

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

For sources and further reading, see [sources.md](./sources.md).
