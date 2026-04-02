---
last_updated: 2026-04-02
last_read: null
status: unread
---

# The Orchestration Layer: Context Window Management

The orchestration layer is the part of your system that decides what lives in the context window at any given moment — and what doesn't. It handles compaction, sub-agent delegation, and cache-friendly design. Get it right and long-running agents stay coherent and affordable. Get it wrong and you hit token limits at the worst moments, pay to recompute the same context repeatedly, or watch agents drift off-task as their history grows noisy.

---

## Context Window Management

The context window is finite and expensive. Managing what's in it — and what's not — is the core job at the orchestration level.

### Compaction Strategies

Two primary strategies for keeping context lean:

**Observation masking** replaces verbose tool outputs with short summaries. Instead of keeping 500 lines of test output in context, you store "tests passed: 47/47." JetBrains Research tested three approaches — raw/unbounded context, observation masking, and LLM summarization — and found that observation masking produced 2.6% better solve rates at 52% lower cost than LLM summarization. It's simpler, cheaper, and works better as a default.

**LLM summarization** uses the model to compress old context before the window fills. You preserve architectural decisions and key facts, discard redundant output. Anthropic recommends this as a complement to masking, not a replacement. It becomes useful in long-running tasks where even masked output accumulates over time — but it shouldn't be your first move.

### When to Compact

Monitor token usage and compact proactively — before hitting the limit, not after. The approach:

- Preserve recent turns and key decisions
- Discard repetitive tool outputs (multiple similar search results, repeated file reads)
- Discard superseded information (plans that were revised, errors that were fixed)

The window is not a log. It's working memory. Old history that no longer informs the current task is noise, not context.

---

## Structured Note-Taking

For any task that runs longer than a few minutes, the context window alone isn't enough. Agents should maintain external state files as persistent memory:

- `todo.md` — what's left to do
- `progress.md` — what's been completed
- `decisions.md` — key choices and their rationale

This pattern comes from Manus's production framework. They call it "attention through recitation": a dynamic task summary is kept on disk and refreshed in context periodically. Even as older context gets compacted or pushed out, the model is reminded of its current objectives and what it has already done. This prevents the drift that accumulates in long sessions when an agent is working only from its own history.

The operational pattern: write state to a file after completing meaningful work, then read that file back into context when resuming after a break or after compaction. The file persists even if the context window is fully reset. This is how you bridge the memory layer (persistence) and the orchestration layer (active window management). An agent that loses its context window doesn't lose its work if that work was written down.

---

## Sub-Agent Architectures

When a task is too large or complex for one context window, split it across specialized agents with clean, focused contexts. There are two primary patterns.

### The Coordinator Pattern

A main agent breaks the task into pieces and delegates to sub-agents. Each sub-agent receives a clean context window with only the information relevant to its specific subtask. Sub-agents return distilled summaries — typically 1,000–2,000 tokens — to the coordinator, not their full output. The coordinator assembles the results and drives the overall task forward.

This keeps each context purposeful. A sub-agent analyzing a single module doesn't need to carry the history of every other module. The coordinator doesn't need to hold the full output of every sub-task — just the decisions and summaries.

See [MetaGPT / MGX](../frameworks/metagpt.md) for a concrete example. MetaGPT's pipeline runs Product Manager, Architect, Project Manager, and Engineer agents in sequence, each operating with focused context and producing structured artifacts that feed into the next phase. That's the coordinator + specialist pattern at the framework level.

### MapReduce Pattern

For parallel subtasks, dispatch multiple agents simultaneously. Each processes its piece independently; results are collected and merged. This is effective when you need to analyze multiple files, process independent features, or run parallel searches.

The key requirement: the subtasks must not share state. If they need to read each other's outputs or coordinate mid-task, they're not truly independent and the pattern breaks down.

### When to Use Sub-Agents

- The task has independent subtasks that don't share state
- The context window is getting noisy with accumulated history
- A subtask requires specialized context (deep knowledge of one module, one API, one codebase section) that would pollute the main agent's window
- You want to parallelize work and have subtasks that can run concurrently

See [GPT Pilot](../frameworks/gpt-pilot.md) for a different approach to the same problem. GPT Pilot uses "context rewinding" — resetting the LLM context after each completed task — rather than delegation. It's a sequential approach to the same constraint: long development sessions accumulate too much context to manage in one continuous window.

**Production case study: Claude Code's architecture.** When Anthropic's Claude Code internals were exposed in April 2026 (covered in TL;DR AI), analysis confirmed these patterns in production. Claude Code uses forked subagents for parallel processing "without contaminating the main execution loop" — a clean implementation of the coordinator pattern. It also employs file-read deduplication to reduce context bloat (a form of observation masking) and structured session memory management. These aren't novel patterns, but seeing them validated in one of the most widely-used coding agents confirms the theory.

---

## KV-Cache Optimization

The KV-cache stores the model's processed representation of context. When the beginning of the context changes — system prompt, tool definitions — the entire cache is invalidated and must be recomputed from scratch.

Recomputing the cache for a 100K+ token context is expensive in both time and money. Only new tokens at the end of a stable prefix require processing on each turn. Manus documented three concrete rules for designing cache-friendly agents:

**Keep system prompts and tool definitions constant between turns.** Any change to these early sections forces a full cache rebuild. If you need to change behavior, find a way to do it through the user turn or tool results, not by rewriting the system prompt.

**Use append-only context.** Add new information at the end. Don't reorganize or rewrite earlier context between turns. The KV-cache is invalidated at the point of the first change — everything after that point must be reprocessed.

**Use explicit cache breakpoints.** Structure your context so the stable prefix (system prompt, tool definitions, static examples) is clearly separated from the dynamic suffix (conversation history, tool results, current task). The boundary between what never changes and what always changes should be obvious in the design.

---

## Anti-Patterns

**LLM summarization as primary compaction.** The JetBrains data is clear: agents using LLM summarization as the main strategy ran 15% longer with worse results. The model over-trusts its own summaries and loses important details in the compression. Use observation masking first. Add LLM summarization for genuinely long-running tasks where masking alone isn't enough.

**Monolithic agents.** Trying to hold everything in one context window works for short tasks. For anything taking longer than 30–35 minutes, Anthropic found context degradation becomes likely. The model starts losing track of earlier decisions, repeating completed work, or missing relevant history that's been pushed too far back.

**Rewriting context between turns.** Changing system prompts, tool definitions, or any early context between turns invalidates the KV-cache. The cost scales with the total context length — expensive for large windows.

**No external state.** Relying entirely on the context window with no files, notes, or memory means that a context reset is a complete loss of progress. Any agent expected to run for more than a few turns should be writing state externally.

---

## Actionable Steps

1. **Start with observation masking** as the default compaction strategy. It's simpler, cheaper, and more effective than LLM summarization for most tasks.
2. **Add LLM summarization as a complement** for genuinely long-running tasks. Not a replacement — a fallback for when masking alone isn't enough.
3. **Use structured note-taking** for any task expected to run longer than ~15 minutes. Write state to disk; read it back after compaction or resumption.
4. **Design sub-agent boundaries around independent subtasks**, not arbitrary splits. Each sub-agent should have a clear, self-contained objective and return a distilled summary, not its full output.
5. **Monitor context window usage and compact proactively.** Don't wait until you're near the limit.
6. **Keep system prompts and tool definitions stable between turns** to preserve the KV-cache. Changes there are expensive.

---

## See Also

- [MetaGPT / MGX](../frameworks/metagpt.md) — multi-agent framework simulating a software company with PM, Architect, and Engineer agents. A concrete example of the coordinator + specialist pattern.
- [GPT Pilot](../frameworks/gpt-pilot.md) — multi-agent pipeline with context rewinding. Demonstrates how to recover when agent context gets corrupted or grows unmanageable across a long session.

---

For sources and further reading, see [sources.md](./sources.md).
