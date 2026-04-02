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
