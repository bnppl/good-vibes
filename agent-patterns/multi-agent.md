---
last_updated: 2026-04-03
last_read: null
status: unread
---

# Multi-Agent Patterns

When a single agent isn't enough — because the task is too large for one context window, requires parallel work, or benefits from specialized expertise — you split across multiple agents. This page covers the coordination patterns that determine how those agents work together.

---

## Orchestrator-Worker (Hub and Spoke)

The most deployed multi-agent pattern in production, accounting for roughly 70% of enterprise deployments. A central orchestrator receives the task, decomposes it, and dispatches subtasks to specialized worker agents.

**How it works:**
1. Orchestrator analyzes the request and breaks it into subtasks
2. Each subtask is dispatched to a specialized worker with a clean context window
3. Workers execute independently and return distilled results
4. Orchestrator synthesizes results and determines if more work is needed

**Anthropic's production implementation.** Their multi-agent research system uses Claude Opus as the lead agent and Claude Sonnet as subagents. Key finding: the multi-agent system outperformed single-agent Claude Opus by 90.2% on internal research evaluations. Token usage alone explains 80% of performance variance — parallel subagents multiply reasoning capacity without sequential bottlenecks. Parallel execution reduced research time by ~90% versus serial subagent spawning.

**Critical success factors from Anthropic's experience:**
- Explicit delegation — each subagent needs a detailed objective, output format, tool guidance, and clear task boundaries. Vague instructions cause duplication.
- Effort budgets embedded in prompts — simple tasks: 1 agent / 3-10 tool calls; complex research: 10+ subagents with divided responsibilities.
- Extended thinking for both lead agent (planning) and subagents (post-tool evaluation).

**Addy Osmani's coding-specific findings:** Three focused agents consistently outperform one generalist. Quality gates are non-negotiable — plan approval catches architectural failures before code exists. And clear specifications amplify leverage: "the mechanical work of typing code is being automated. The cognitive work of understanding systems is being amplified."

This is the pattern behind Claude Code's forked subagents, Augment Intent's Coordinator/Implementor/Verifier, and Factory Droids' task pipeline.

---

## Pipeline (Sequential Chain)

Agents are arranged in a fixed sequence — the output of one becomes the input of the next. Like an assembly line.

**How it works:**
1. Agent A processes the input and produces output A
2. Output A becomes the input for Agent B
3. Agent B produces output B, which feeds Agent C
4. And so on until the final agent produces the result

**When pipeline works well:**
- Highly structured, repeatable workflows where the order is fixed
- Tasks with clear phase boundaries (research → design → implement → test)
- Situations where each phase requires different expertise or context

**When pipeline struggles:**
- Dynamic tasks where the order should change based on intermediate results
- Tasks where early agents need feedback from later agents
- Situations where parallelization would significantly reduce latency

MetaGPT is the clearest implementation: Product Manager → Architect → Project Manager → Engineer, each producing structured artifacts that feed the next phase. GPT Pilot uses a similar pipeline with its Product Owner → Architect → DevOps → Tech Lead → Developer sequence.

The pipeline pattern shares state through a common workspace — typically files on disk or a shared session state. Agents communicate by writing structured artifacts, not by passing raw context.

---

## Parallel (Fan-Out / Fan-In)

Multiple agents work simultaneously on independent subtasks, with results merged afterward.

**How it works:**
1. A coordinator identifies independent subtasks
2. All subtasks are dispatched simultaneously
3. Agents execute in parallel with no coordination between them
4. Results are collected and merged by an aggregator

**The independence requirement is strict.** If Agent B needs to know what Agent A decided, they can't truly run in parallel. Dependencies between parallel agents are the most common source of multi-agent failures — agents make incompatible decisions because they can't see each other's work.

**When parallel works well:**
- Independent file changes in a codebase
- Research across multiple sources
- Running the same analysis with different parameters
- Any task where subtasks share no state

**When parallel fails:**
- Tasks with hidden dependencies (two agents both modify the same config file)
- Work requiring coordination on shared interfaces
- When the merge/aggregation step is as complex as the original task

The parallel pattern is often combined with pipeline — run parallel searches first, then sequentially aggregate and synthesize. Google Cloud's ADK documentation calls this the most common production pattern for research and analysis tasks.

---

## Hierarchical (Multi-Level)

A tiered structure where higher-level agents supervise teams of lower-level workers. This is orchestrator-worker extended to multiple levels.

**How it works:**
- Top-level orchestrator breaks work into major workstreams
- Mid-level coordinators manage teams of workers for each workstream
- Workers execute specific tasks
- Results flow back up the hierarchy

**When hierarchical makes sense:**
- Very large tasks that can't be decomposed into a flat set of subtasks
- Work requiring different management granularities (architecture vs. implementation vs. testing)
- Teams of agents where domain boundaries are clear

**Osmani's coding-specific observation:** Feature leads can spawn their own specialists, creating 3+ levels of decomposition without fragmenting any single agent's context window. This mirrors real organizational structure — and shares its failure modes (communication overhead, misaligned goals between levels, slow escalation paths).

The risk with hierarchical systems is coordination cost. Each level adds latency and token overhead. Only justify the complexity when the task genuinely requires it.

---

## Swarm (Decentralized)

Agents operate autonomously with no central coordinator, communicating peer-to-peer.

**How it works:**
- Agents self-organize around tasks
- Communication is direct between agents, not mediated by a coordinator
- No single point of failure or bottleneck

**Current state:** Swarm patterns are mostly experimental in 2026. They're theoretically elegant but practically difficult — without a coordinator, agents struggle with task boundaries, duplicate work, and conflicting decisions. OpenAI's Swarm framework explored this space but production adoption remains limited.

**When swarm might make sense in the future:**
- Very large-scale tasks where a single coordinator becomes a bottleneck
- Systems that need fault tolerance (no single point of failure)
- Tasks where agents need to dynamically self-organize based on emerging requirements

For now, orchestrator-worker with parallel execution handles most production needs better than swarm.

---

## Choosing a Pattern

| Pattern | Best For | Tradeoff |
|---------|----------|----------|
| Orchestrator-Worker | Most multi-agent tasks | Central coordinator can become bottleneck |
| Pipeline | Structured, repeatable workflows | Rigid — can't adapt order dynamically |
| Parallel | Independent subtasks, research | Strict independence requirement; merge complexity |
| Hierarchical | Very large, multi-domain tasks | Coordination overhead at each level |
| Swarm | (Experimental) | Coordination without a coordinator is hard |

**The production default is orchestrator-worker with parallel execution.** Start there. Move to pipeline when your workflow is fixed and repeatable. Add hierarchical levels only when flat orchestrator-worker can't decompose the task sufficiently.

---

## Anti-Patterns

**Starting with multi-agent when single-agent suffices.** Multi-agent systems consume ~15x more tokens than single-agent (Anthropic's data). Only split when the task genuinely requires it — independent subtasks, context window limits, or specialized expertise.

**Unmanaged dependencies between "parallel" agents.** If agents share state, they're not truly parallel. Missing file-locking mechanisms and merge conflicts kill velocity in multi-agent coding setups (Osmani).

**Vague delegation.** "Handle the frontend" is not a task description. Workers need exact objectives, file boundaries, output format, and success criteria. The quality of sub-agent work is directly proportional to the quality of the delegation.

**No verification layer.** Multi-agent systems amplify errors at inhuman scale. Without quality gates between phases, small mistakes compound across parallel agents into incoherent output. "If you lose understanding of your own system, you have lost the ability to fix it" (Osmani).

---

For sources and further reading, see [sources.md](./sources.md).
