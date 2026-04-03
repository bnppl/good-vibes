---
last_updated: 2026-04-02
last_read: null
status: unread
---

# The Tool Layer

Tools are how your agent acts on the world. They're also a significant source of context overhead, decision friction, and subtle failure modes. Getting the tool layer right means thinking about tool design, output management, and availability — not just which tools exist.

---

## Tool Design Principles

Anthropic's guidance is clear: keep tool sets minimal and non-overlapping. Each tool should do one thing. When two tools could plausibly handle the same request, the model wastes tokens deciding between them — and sometimes picks the wrong one.

**Names signal intent.** `search_codebase` tells the model what to expect. `tool_1` does not. Descriptive names reduce ambiguity before the model even reads the description.

**Parameter schemas are instructions too.** Every field in a tool's schema should have a clear description. If a parameter can only take certain values, say so. If it defaults to something meaningful, explain it. The schema is part of the context the model reads to decide how to call the tool.

**One action per tool.** A tool that reads, writes, and validates is three tools pretending to be one. Split them. The short-term convenience of a "do everything" tool creates long-term reliability problems: the model has to interpret which sub-action you want, and it will sometimes guess wrong.

**Tool descriptions are instructions.** This is worth stating plainly: tool descriptions go into context and directly shape model behavior. A well-written description that explains when to use a tool (and when not to) will reduce misuse more reliably than any amount of system prompt instruction. Treat them accordingly — write them carefully, review them when behavior is off, update them when the tool's purpose evolves.

---

## Tool Result Management

Every tool output goes back into context and consumes tokens. A tool that returns 10,000 lines of logs is a context bomb — it shoves useful information out of the window and dilutes the model's attention across irrelevant data.

Design for minimum useful output by default. The model can always ask for more. The strategies:

- **Truncate**: return the first N lines or characters, with a note indicating what was cut and how much. `"Showing first 100 lines of 4,382."` is more useful than silently dropping content.
- **Summarize**: return a digest instead of raw output. `"47 tests passed, 3 failed: test_auth, test_login, test_session"` is almost always more useful than the full test runner output.
- **Selective return**: only include the fields or sections relevant to the query. A database record with 40 fields doesn't need all 40 fields in the response if the model asked about two of them.
- **Paginate**: return a page of results with a mechanism to request the next page. Pagination keeps individual tool calls bounded while still allowing access to the full dataset.

The discipline here is consistent: treat tool output as context real estate. Return what's needed to continue the task, not everything you have.

---

## MCP Servers

The Model Context Protocol (MCP) is a standardized way to expose tools and data sources to LLMs. Think of it as a universal adapter between AI agents and external services — define a tool once, and it works across any MCP-compatible client (Claude Code, Cursor, custom agents, etc.).

**When MCP makes sense:**
- You want tools to be available across multiple clients without rewriting integrations for each one.
- You're exposing an external service — a database, an API, a monitoring system — as a tool that various agents might need.
- You want a clean separation between tool implementation and the agents that use tools.

**When direct function calling is fine:**
- Single-tool integrations tightly coupled to one agent.
- Internal tools that won't be shared and don't need the portability.
- Prototypes where the overhead of an MCP server isn't justified yet.

MCP provides both tools (actions the model can take) and resources (data the model can read). This maps naturally onto two distinct layers: tools belong to the action layer, resources belong to the knowledge layer. Keeping that distinction clear helps when designing what an MCP server should expose.

**The MCP context cost.** A practical warning from Apideck (covered in TL;DR Dev, March 2026): MCP servers with extensive tool definitions can consume tens of thousands of tokens just for the tool schemas, before any actual work begins. Their analysis found that agents using heavy MCP configurations suffered from token bloat that crowded out working context. The alternative they propose — CLI-based tools with progressive discovery through `--help` commands — trades organization-wide authentication for dramatically lower context overhead. This is a real engineering tradeoff: MCP's portability and authentication benefits come at a token cost that scales with the number of tools exposed. Stripe's approach with their "Toolshed" MCP server (500+ tools across agents) suggests the answer at scale is dynamic tool loading rather than exposing everything at once.

---

## The Tool Selection Problem

Models struggle with large tool sets. Once you have 20 or more tools, you start seeing predictable failure modes:

- **Misrouting**: the model picks a plausible-sounding tool instead of the right one.
- **Hallucination**: the model invents a tool name that doesn't exist.
- **Suboptimal selection**: a better tool exists but the model picks a familiar or more prominent one.

The core problem is attention. With a large flat list of tools, the model has to consider all of them for every decision. That's cognitively expensive (in the model-behavior sense), and it introduces noise.

Strategies for managing large tool sets:

- **Dynamic tool loading**: only expose tools relevant to the current task or phase of work. If you're in a planning phase, planning tools are available. Execution tools come later.
- **Tool categories**: group related tools so the model navigates a hierarchy rather than a flat list. Finding the right category first narrows the decision space before any individual tool selection.
- **Scoped availability**: explicitly different tools at different lifecycle stages. Birgitta Boeckeler's observation about coding agents captures this well: tool availability is a steering mechanism. Which tools are available communicates what's appropriate right now, without requiring explicit instructions about it.

---

## Manus's Insight: Mask, Don't Remove

Dynamic tool availability has a hidden cost: KV-cache invalidation.

When you add or remove tools from the schema between turns, the model has to reprocess the entire context from scratch. The schema has changed, so nothing cached before that change is valid. For long contexts with many turns, this gets expensive quickly.

Manus's solution is to define all tools in the schema upfront and use a state machine to mark which tools are active at each step. The model sees the same schema every turn — so the cache stays warm — but gets guidance about which tools are appropriate right now.

The schema is stable (cache-friendly). The behavior is dynamic (tools are contextually scoped). You get both benefits without paying the reprocessing cost.

This is the kind of optimization that matters at scale. In early development you probably won't notice. Once you're running long multi-turn agentic sessions with large tool sets, cache efficiency becomes a real performance variable.

---

## Actionable Steps

1. **Audit your tool set.** List all tools. Check for overlap: if two tools could handle the same request, merge them or differentiate them until they can't. Ambiguous tool sets produce ambiguous behavior.

2. **Check tool output sizes.** Which tools return the most tokens? Profile them. Can they be trimmed, summarized, or paginated without losing the information the model actually needs?

3. **Write tool descriptions as instructions.** Because that's what they are. Be specific. Include examples of when to use a tool and — just as important — when not to. If a tool has a common misuse pattern, document it in the description.

4. **If you have 15+ tools**, implement dynamic tool loading or categorization. A flat list of 20 tools is harder for the model to navigate correctly than two categories of 10. Don't present all tools all the time.

5. **Consider KV-cache impact before changing tool schemas between turns.** If you're dynamically controlling availability, evaluate whether Manus's masking approach would be more efficient than adding and removing tools. Stable schema, dynamic guidance — the cache stays valid, the behavior changes.


---


---
last_updated: 2026-04-02
last_read: null
status: unread
---

# The Memory Layer: Short-Term, Long-Term, and Episodic Memory Systems

Memory in context engineering means deciding what information persists across turns and sessions, what gets retrieved and when, and what gets discarded. Get this wrong and your agent either drowns in accumulated noise or repeatedly forgets what it learned. This document covers the three distinct memory types, how to retrieve from them effectively, and the anti-patterns that undermine each.

## Short-Term Memory — Conversation History

The default context: previous turns in the conversation. Short-term memory is what lets the model reference earlier decisions, correct a misunderstanding from three messages ago, and maintain coherent multi-step workflows without being re-briefed at every turn.

It works well for referencing earlier requirements, building on prior discussion, and keeping the model oriented within a single task. The problem is that it degrades over time.

Anthropic's finding from production agent work: every agent's success rate decreases after 35 minutes of continuous operation, and doubling task duration quadruples the failure rate. Old turns don't disappear — they accumulate. What was useful context ten messages ago becomes noise now: resolved questions, superseded plans, outdated status updates. The model's attention gets divided across all of it, diluting focus on what currently matters.

This is the core tension in short-term memory: you need history for continuity, but history degrades performance over time. You can't simply dump everything into context and expect performance to hold. This tension drives most of the strategies in the orchestration layer — context compression, turn summarization, and explicit pruning of resolved threads.

## Long-Term Memory — Cross-Session Persistence

Long-term memory is information that survives beyond a single conversation. Two fundamental approaches:

**Structured memory with belief-updates** (recommended for most cases): store facts as structured fields with clear keys, and update them in place when new information arrives rather than appending. A record like `user_role: "senior backend engineer"` gets overwritten when the user's role changes. No contradiction accumulates, no search is needed to find the current value, and the memory stays clean over time. This is harder to implement than append-only, but it pays off as memory grows.

**Unstructured memory** — append-only logs — is simpler to implement but degrades as the log grows. Contradictions accumulate. Retrieval becomes noisier. You end up needing search and summarization on top just to make it usable, which adds complexity you would have avoided with structured memory from the start.

**File-based memory** sits between the two and is worth calling out specifically. Claude Code's MEMORY.md pattern is a practical implementation: an index file pointing to categorized memory files on disk — user preferences, feedback on past work, project context, external references. The filesystem is the memory store; the index file is always loaded into context. This scales reasonably well for agent workflows where memory categories are known in advance and don't require fuzzy retrieval.

The key design decision: what is worth persisting versus what is derivable from other sources? Memory should store what is NOT available elsewhere. User preferences, feedback, project context, past decisions — these aren't in any file you can read. Code structure, function signatures, git history — these are better derived fresh from source. Storing derivable information wastes memory space and creates staleness risk without adding anything that a tool call wouldn't give you more reliably.

## Episodic Memory — Learning from Experience

Episodic memory is different from factual memory. It's not "the API uses REST" — it's "last time we tried approach X, it failed because Y." It's the record of what happened, not just what's currently true.

This kind of memory is underused and underappreciated in agent design. Manus's insight is instructive here: deliberately preserve error traces in context rather than cleaning them up. If you remove all evidence that an approach was tried and failed, the model has no reason not to try it again. The error trace is the negative example. Keeping the wrong stuff in is a feature, not a bug.

Episodic memory is useful for avoiding repeated mistakes, learning from past debugging sessions, remembering which approaches the user preferred or rejected, and building a history of what worked and what didn't in a given codebase or workflow. An agent that can say "we tried parallelizing this step last week and it caused race conditions" is more useful than one that treats every session as the first.

The challenge is that episodic memories are inherently larger and noisier than factual memories. A fact is a key-value pair. An episode is a sequence of events with context. Retrieval needs to be more aggressive about filtering — you want the relevant past attempt, not every session in the log.

**Self-improving agents.** An emerging pattern (covered in TL;DR Dev, January 2026) extends episodic memory into a feedback loop: agents can improve through environmental modification rather than static weight adjustments. By recording what worked and what didn't, then modifying their own instruction files or tool configurations based on those episodes, agents turn episodic memory into a self-improvement mechanism. This goes beyond passive recall — the memory actively changes future behavior.

## Memory Retrieval

Having memory is useless if you retrieve the wrong piece at the wrong time. Four retrieval strategies, each suited to different memory types:

**Keyword and tag matching** works well for structured memory with clear categories and keys. If you know what you're looking for, exact matching is fast and reliable.

**Semantic search** handles unstructured memory where the query might not match exact terms. Useful when the episodic record uses different vocabulary than the current question.

**Recency-weighted retrieval** reflects a basic truth: recent memories are usually more relevant. Weight by recency alongside relevance score, especially for episodic memory where the most recent attempt is typically most informative.

**Always-loaded versus on-demand** is a design decision, not a retrieval strategy. Some memory belongs in context unconditionally — user preferences, project goals, active constraints. Other memory (past debugging sessions, prior feature work) should only enter context when relevant to the current task. Deciding which category each memory type falls into is part of schema design, not something to resolve at retrieval time.

The staleness problem applies to all of it: memory is a claim about the past, not the present. "The API uses REST" was true when you recorded it. It may not be now. Before acting on a remembered fact, verify it against the current state. Treat memory as a starting point for investigation, not a substitute for it.

## Anti-Patterns

**Unbounded history**: never trimming conversation context, letting noise accumulate turn by turn until the model is reasoning over a wall of irrelevant prior exchanges. The failure mode is gradual — performance degrades slowly, not catastrophically, which makes it easy to miss.

**Never pruning memory**: storing everything forever makes retrieval noisy and increases the chance of acting on stale information. Memory requires maintenance. What goes in should eventually come out or get updated.

**Treating memory as authoritative**: acting on remembered facts without checking whether they're still true. This is the most dangerous anti-pattern because it's invisible — the model reasons confidently from a premise that stopped being accurate last month.

**Storing derivable information**: filling memory with code patterns, file structures, or git history that should be read fresh from source. This adds staleness risk, consumes memory space, and provides no benefit over a tool call that reads the current state directly.

## Actionable Steps

1. **Design a memory schema before implementing.** What categories of information do you persist? What is the update strategy — overwrite or append? What triggers pruning? These decisions are much harder to change after the system is running than to get right upfront.

2. **Default to structured memory with belief-updates over append-only logs.** It requires more upfront thought, but it stays clean over time and avoids the retrieval complexity that append-only logs eventually demand.

3. **Build verification into memory retrieval.** The pattern should be: "memory says X — let me check whether X is still true." This is especially critical for facts about external systems, APIs, team structure, and anything that changes independently of your agent.

4. **Separate what to remember from what to look up.** User preferences, feedback, project context, and past decisions belong in memory. Code structure, function signatures, and git history belong in tools. Mixing them degrades both.

5. **Establish the always-loaded versus on-demand split explicitly.** Universal context — user role, project goals, active constraints — loads every session. Situational context — past debugging sessions, prior feature work — retrieves only when relevant. Don't leave this implicit or you'll end up front-loading everything by default.


---


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
