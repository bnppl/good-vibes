# Context Engineering Guide Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a multi-file wiki guide to context engineering — broad on the discipline, deep on agentic software development.

**Architecture:** 9 markdown files in `context-engineering/` at the project root. An index page links to 6 layer pages, 1 deep-dive page, and 1 sources page. Each page is self-contained and can be read independently. Cross-references to the existing `frameworks/` folder where relevant.

**Tech Stack:** Markdown only. No code, no build steps.

**Spec:** `docs/superpowers/specs/2026-04-02-context-engineering-guide-design.md`

**Research sources (available to all tasks):**

The following sources were identified during research. Each task references which sources are most relevant, but all tasks should draw on this pool:

| Short Name | Full Title | URL | Key Contribution |
|---|---|---|---|
| **Anthropic** | Effective Context Engineering for AI Agents | https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents | Production patterns: Goldilocks prompts, just-in-time loading, compaction, sub-agents |
| **LangChain** | Context Engineering for Agents | https://blog.langchain.com/context-engineering-for-agents/ | Write/Select/Compress/Isolate framework. GitHub repo: https://github.com/langchain-ai/context_engineering |
| **Manus** | Context Engineering for AI Agents: Lessons from Building Manus | https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus | 6 production lessons: KV-cache, mask don't remove, filesystem as context, recitation, keep errors, anti-mimicry |
| **Karpathy** | X post on context engineering | https://x.com/karpathy/status/1937902205765607626 | Canonical definition. CPU/RAM metaphor. |
| **Schmid P1** | The New Skill in AI is Not Prompting, It's Context Engineering | https://www.philschmid.de/context-engineering | 7-component model |
| **Schmid P2** | Context Engineering Part 2 | https://www.philschmid.de/context-engineering-part-2 | Context rot, pollution, MapReduce sub-agents, "biggest gains from removing things" |
| **Boeckeler** | Context Engineering for Coding Agents (Martin Fowler's site) | https://martinfowler.com/articles/exploring-gen-ai/context-engineering-coding-agents.html | 3-dimensional framework for coding agents. Claude Code mechanism breakdown. |
| **JetBrains** | Cutting Through the Noise | https://blog.jetbrains.com/research/2025/12/efficient-context-management/ | Empirical: observation masking beats LLM summarization, 52% cheaper, 2.6% better |
| **Mei et al.** | A Survey of Context Engineering for LLMs | https://arxiv.org/abs/2507.13334 | Academic survey, 1400+ papers, formal taxonomy |
| **Osmani** | Context Engineering: Bringing Engineering Discipline to Prompts | https://addyo.substack.com/p/context-engineering-bringing-engineering | Broad overview. Also on O'Reilly: https://www.oreilly.com/radar/context-engineering-bringing-engineering-discipline-to-prompts-part-1/ |
| **Willison** | Context Engineering | https://simonwillison.net/2025/jun/27/context-engineering/ | Historical: why the term stuck |
| **Augment** | System Prompts Collected | https://www.augmentcode.com/learn/cursor-windsurf-claude-code-system-prompts | Identical models scored 17 problems apart across tools — context engineering matters as much as model capability |

---

### Task 1: Create `context-engineering/sources.md`

Write sources first so all subsequent tasks can reference it.

**Files:**
- Create: `context-engineering/sources.md`

- [ ] **Step 1: Create the sources file**

Write the annotated bibliography with three tiers. For each source include: title (as link), author/org, 1-2 sentence summary of unique coverage, and who it's most useful for.

**Tier 1 (essential reading):**
- Anthropic — production patterns from the Claude Code team. Most useful for: anyone building agents.
- LangChain — the Write/Select/Compress/Isolate framework + GitHub repo. Most useful for: people wanting an actionable mental model.
- Manus — 6 battle-tested lessons from rebuilding their framework 4 times. Most useful for: practitioners optimizing real systems.

**Tier 2 (strong references):**
- Karpathy — canonical definition, CPU/RAM metaphor. Most useful for: explaining context engineering to others.
- Schmid Parts 1 & 2 — 7-component taxonomy, context rot/pollution. Most useful for: systematic understanding of the building blocks.
- Boeckeler — 3-dimensional framework specifically for coding agents. Most useful for: people building or evaluating coding tools.
- JetBrains — empirical evidence on compaction strategies. Most useful for: data-driven decision-making on context management.

**Tier 3 (deeper reading):**
- Mei et al. — academic survey of 1400+ papers. Most useful for: researchers and people wanting formal taxonomy.
- Osmani / O'Reilly — broad overview. Most useful for: general audiences, sharing with non-technical stakeholders.
- Willison — why "context engineering" stuck as a term. Most useful for: historical context.
- Augment — system prompt comparison across tools. Most useful for: understanding why context engineering matters as much as model choice.

- [ ] **Step 2: Verify all links**

Spot-check that URLs are correctly formatted and match the source table above.

---

### Task 2: Create `context-engineering/foundations.md`

**Files:**
- Create: `context-engineering/foundations.md`

**Primary sources:** Karpathy, LangChain, Schmid P1, Anthropic, Manus, Schmid P2

- [ ] **Step 1: Write the foundations page**

Sections:

**The Shift: Prompt Engineering to Context Engineering**
- Prompt engineering = crafting a single input. Context engineering = designing the system that assembles the right information at the right time.
- Karpathy's framing: LLM is a CPU, context window is RAM, the engineer's job is analogous to an OS loading working memory. Quote or paraphrase the X post.
- Lutke's definition: "the art of providing all the context for the task to be plausibly solvable by the LLM."
- Why the term stuck (Willison's argument: its inferred definition is much closer to the intended meaning than "prompt engineering").

**Core Mental Models**
- **Karpathy's CPU/RAM metaphor** — enumerate what goes into the "RAM": system prompt, conversation history, tool definitions, tool results, retrieved documents, memory, examples.
- **LangChain's Write/Select/Compress/Isolate** — 4 strategies. For each agent step: what to persist externally (Write), what to pull in (Select), what to shrink (Compress), what to delegate (Isolate).
- **Schmid's 7 components** — Instructions, User Prompt, State/History, Long-Term Memory, RAG, Tools, Structured Output. A clean checklist for auditing what's in your context.

**The Fundamental Constraint**
- Context windows are finite. Attention degrades with noise. Every token has a cost (latency, money, attention dilution).
- Anthropic's framing: "find the smallest set of high-signal tokens that maximize the likelihood of some desired outcome."

**Key Principles**
- Progressive disclosure over frontloading — tell the model how to find information rather than embedding it all.
- Dynamic assembly over static prompts — context should be assembled at runtime based on the task.
- Less is often more — Manus and Schmid P2 both found biggest gains from removing things, not adding them.

Link to `sources.md` for full references.

---

### Task 3: Create `context-engineering/instruction-layer.md`

**Files:**
- Create: `context-engineering/instruction-layer.md`

**Primary sources:** Anthropic, Boeckeler, Schmid P1

- [ ] **Step 1: Write the instruction layer page**

Sections:

**System Prompt Design**
- Anthropic's "Goldilocks" principle: too prescriptive = brittle and hard to maintain; too vague = inconsistent behavior. Aim for the middle.
- The role/task/constraints structure: define who the model is, what it's doing, and what limits apply.
- When to use persona ("You are a senior engineer") vs. behavioral rules ("Always check for existing tests before writing new ones").
- The power of examples over rules — Anthropic found diverse canonical examples beat instruction sprawl.

**Rules Files and Instruction Hierarchies**
- CLAUDE.md, .cursorrules, AGENTS.md — tool-specific instruction files that are always loaded into context.
- The emerging cross-tool standard: AGENTS.md works across Claude Code, Cursor, Copilot.
- Scoped rules: project-level (applies everywhere) vs. path-level (applies to specific directories). Boeckeler's breakdown of how Claude Code layers these.
- The ~50 instruction ceiling: models can reliably follow around 50 instructions before degradation. This means every instruction competes for attention.

**Anti-Patterns**
- Instruction bloat: adding rules for every edge case until the model can't follow any of them well.
- Contradictory rules: "always be concise" + "always explain your reasoning in detail."
- Over-specifying format when behavior matters more.
- Duplicating information the model can derive from code or documentation.

**Actionable Steps**
- Audit system prompts: count instructions, remove anything the model already knows or can look up.
- Use progressive disclosure: instead of embedding all project conventions, tell the model where to find them.
- Test instruction effectiveness: does adding an instruction actually change behavior? If not, remove it.
- Keep rules files focused on universally applicable guidance.

Cross-references: `../frameworks/kiro.md` (EARS notation for structured requirements), `../frameworks/github-spec-kit.md` (Constitution pattern — a master file that governs agent behavior).

---

### Task 4: Create `context-engineering/knowledge-layer.md`

**Files:**
- Create: `context-engineering/knowledge-layer.md`

**Primary sources:** Anthropic, Schmid P1, Schmid P2, Mei et al.

- [ ] **Step 1: Write the knowledge layer page**

Sections:

**RAG Fundamentals**
- Retrieval-Augmented Generation: instead of training knowledge into the model, retrieve it at runtime and include it in context.
- When to use RAG vs. fine-tuning vs. in-context examples. RAG for: large/changing knowledge bases, domain-specific data, factual grounding. Fine-tuning for: behavioral changes, style adaptation. In-context examples for: format/pattern demonstration.
- The RAG pipeline: index documents -> chunk -> embed -> store -> retrieve at query time -> inject into context.

**Retrieval Strategies**
- Vector/semantic search: good for meaning-based queries, weak for exact matches.
- Keyword/lexical search: good for exact terms, weak for paraphrasing.
- Hybrid search: combines both. Usually the right default.
- Graph-enhanced RAG: for data with relationships (knowledge graphs, code dependency graphs).
- Chunking strategies and tradeoffs: small chunks = precise retrieval but lost context; large chunks = more context but more noise. Overlap helps. Semantic chunking (by section/paragraph) beats fixed-size.

**Grounding and Attribution**
- Retrieved context reduces hallucination by giving the model something to cite.
- Include source metadata so the model can attribute claims.
- Confidence calibration: when retrieval returns low-relevance results, the model should say so rather than fabricating.

**Just-in-Time Loading**
- Anthropic's pattern: don't stuff everything into the initial context. Maintain lightweight references (file paths, document IDs, URLs) and load data via tools only when the model needs it.
- This keeps the context window lean and lets the model decide what's relevant.
- Example: instead of loading all project documentation upfront, give the model a tool to search and read specific docs.

**Anti-Patterns**
- Context pollution: retrieving too much drowns the signal in noise. Schmid P2's finding that removing retrieved context sometimes improved results.
- Treating RAG as a silver bullet when the real problem is bad chunking, poor indexing, or missing data.
- Retrieving too little and forcing the model to hallucinate to fill gaps.
- Static retrieval: always retrieving the same documents regardless of the query.

**Actionable Steps**
- Evaluate retrieval quality: are retrieved chunks actually relevant? Sample queries and check.
- Measure context pollution: does adding retrieved context improve or degrade output quality? A/B test.
- Start with hybrid search as the default retrieval strategy.
- Use just-in-time loading via tools rather than frontloading all knowledge.

---

### Task 5: Create `context-engineering/tool-layer.md`

**Files:**
- Create: `context-engineering/tool-layer.md`

**Primary sources:** Anthropic, Manus, Boeckeler

- [ ] **Step 1: Write the tool layer page**

Sections:

**Tool Design Principles**
- Anthropic's guidance: minimal, non-overlapping tool sets. Each tool does one thing. If two tools could handle the same request, the model wastes tokens deciding.
- Descriptive names that signal purpose: `search_codebase` not `tool_1`. Clear parameter schemas with descriptions.
- One action per tool: a tool that reads, writes, AND validates is three tools pretending to be one.
- Tool descriptions are instructions — they consume context and guide behavior. Write them carefully.

**Tool Result Management**
- Tool outputs go back into context and consume tokens. A tool that returns 10,000 lines of logs is a context bomb.
- Strategies: truncate results (return first N lines), summarize (return a digest), selectively return (only the fields the model asked about), paginate (return a page with a "next" tool call).
- Design tools to return the minimum useful output by default.

**MCP Servers**
- The Model Context Protocol: a standardized way to expose tools and data sources to LLMs.
- When MCP makes sense: you want tools to work across multiple clients (Claude Code, Cursor, etc.), or you're exposing an external service.
- When direct function calling is fine: single-tool integrations, tightly coupled to one agent.

**The Tool Selection Problem**
- Models struggle when given too many tools (20+). They misroute, hallucinate tool names, or pick suboptimal tools.
- Strategies: dynamic tool loading (only expose tools relevant to the current task), tool categories (group related tools), scoped availability (different tools for different phases of work).
- Boeckeler's observation: coding agents use tool availability as a steering mechanism — different tools at different lifecycle stages.

**Manus's Insight: Mask Don't Remove**
- When you add/remove tools from the schema between turns, you invalidate the KV-cache (the model has to reprocess the entire context).
- Instead: define all tools upfront, use a state machine to mark which are available at each step. The model sees the same schema but gets guidance on which tools to use now.
- This preserves cache efficiency while still controlling tool availability.

**Actionable Steps**
- Audit your tool set: list all tools, check for overlap, merge or remove duplicates.
- Check tool output sizes: which tools return the most tokens? Can they be trimmed?
- Write tool descriptions as if they're instructions — because they are.
- If you have 15+ tools, implement dynamic tool loading or categorization.
- Consider KV-cache impact when changing tool availability between turns.

---

### Task 6: Create `context-engineering/memory-layer.md`

**Files:**
- Create: `context-engineering/memory-layer.md`

**Primary sources:** Anthropic, Manus, Schmid P1, Schmid P2

- [ ] **Step 1: Write the memory layer page**

Sections:

**Short-Term Memory: Conversation History**
- The default context: previous turns in the conversation. Provides continuity and lets the model reference earlier decisions.
- When it helps: maintaining coherent multi-step workflows, referencing earlier context.
- When it hurts: noise accumulates over time. Anthropic's finding: every agent's success rate decreases after 35 minutes, and doubling task duration quadruples failure rate. Old turns become irrelevant but still consume tokens and dilute attention.
- The core tension: you need history for continuity but history degrades performance over time.

**Long-Term Memory: Cross-Session Persistence**
- Information that survives beyond a single conversation. Two approaches:
- Structured memory (recommended): OpenAI's belief-update pattern — store facts as structured fields, update them when new information arrives rather than appending. Example: `user_role: "senior backend engineer"` gets updated, not duplicated.
- Unstructured memory: append-only logs, growing context. Simpler but degrades over time.
- File-based memory: Claude Code's MEMORY.md pattern — an index file pointing to categorized memory files. Types: user preferences, feedback, project context, external references.
- Key design decision: what's worth persisting vs. what's derivable from code, git history, or documentation. Memory should store what's NOT elsewhere.

**Episodic Memory: Learning from Experience**
- Remembering what happened, not just what's true. "Last time we tried X, it failed because Y."
- Manus's "keep the wrong stuff in": preserving error traces gives the model implicit negative examples. Removing errors means the model might repeat them.
- Useful for: avoiding repeated mistakes, learning from past debugging sessions, remembering which approaches the user preferred.

**Memory Retrieval**
- Having memory is useless if you can't retrieve the right piece at the right time.
- Strategies: keyword matching (simple, works for structured memory), semantic search (works for unstructured), recency-weighted (recent memories are more likely relevant).
- The staleness problem: memory is a claim about the past, not the present. A memory that says "the API uses REST" might be wrong if the team migrated to gRPC. Always verify before acting on memory.

**Anti-Patterns**
- Unbounded history: never trimming conversation context, letting noise accumulate.
- Never pruning memory: storing everything, retrieving too much, creating the same context pollution problem as bad RAG.
- Treating memory as authoritative: acting on remembered facts without checking if they're still true.
- Storing things that belong elsewhere: code patterns (belong in code), git history (use git log), debugging solutions (the fix is in the commit).

**Actionable Steps**
- Design a memory schema: what categories of information do you persist? What's the update/pruning strategy?
- Default to structured memory with belief-updates over append-only logs.
- Build verification into memory retrieval: "memory says X, let me check if X is still true."
- Separate what to remember (non-obvious, not derivable) from what to look up (code, git, docs).

---

### Task 7: Create `context-engineering/orchestration-layer.md`

**Files:**
- Create: `context-engineering/orchestration-layer.md`

**Primary sources:** Anthropic, Manus, JetBrains, Schmid P2, Boeckeler

- [ ] **Step 1: Write the orchestration layer page**

Sections:

**Context Window Management**
- The context window is finite and expensive. Managing what's in it is the core job of context engineering at the orchestration level.
- Two compaction strategies:
  - **Observation masking**: hide verbose tool outputs (e.g., replace 500 lines of test output with "tests passed: 47/47"). JetBrains found this is 52% cheaper than LLM summarization and produces 2.6% better solve rates.
  - **LLM summarization**: use the model to summarize old context before the window fills. Preserve architectural decisions and key facts, discard redundant output. Anthropic recommends this as a complement to masking, not a replacement.
- When to compact: monitor token usage, compact before you hit the limit (not after). Preserve recent turns and key decisions.

**Structured Note-Taking**
- Agents maintain external state files as memory outside the context window.
- Examples: todo.md (what's left to do), progress.md (what's been done), decisions.md (key choices and why).
- Manus's "attention through recitation": maintain a dynamic task summary that gets refreshed in context. This prevents drift by reminding the model what it's doing.
- The pattern: write to a file, then read the file back into context when needed. The file persists even if the context window is compacted.

**Sub-Agent Architectures**
- When a task is too large or complex for one context window, split it across specialized agents.
- The coordinator pattern: a main agent delegates to sub-agents, each with a clean context window focused on their specific task. Sub-agents return distilled summaries (1,000-2,000 tokens) to the coordinator.
- MapReduce pattern (Schmid P2): for parallel sub-tasks, dispatch multiple agents simultaneously, collect and merge results.
- When to use sub-agents: the task has independent subtasks, the context window is getting noisy, or a subtask requires specialized context that would pollute the main agent's window.

**KV-Cache Optimization**
- Manus's lesson: the KV-cache stores processed context. If you change the beginning of the context (system prompt, tool definitions), the entire cache is invalidated and must be recomputed.
- Design for stable prefixes: keep system prompts and tool definitions constant between turns.
- Append-only context: add new information at the end, don't rewrite earlier context.
- Explicit cache breakpoints: structure context so the model can reuse cached computations for the stable prefix.

**Anti-Patterns**
- LLM summarization as the primary compaction strategy: JetBrains data shows it encourages agents to run 15% longer with worse results. The model "trusts" its own summaries too much.
- Monolithic agents: trying to hold everything in one context window. If the task takes more than 30-35 minutes, context degradation is likely.
- Rewriting context between turns: invalidates KV-cache and forces recomputation. Expensive and slow.
- No external state: relying entirely on the context window with no files or memory to fall back on.

**Actionable Steps**
- Start with observation masking as the default compaction strategy (simpler, cheaper, often better).
- Add LLM summarization as a complement for long-running tasks, not a replacement for masking.
- Use structured note-taking for any task longer than ~15 minutes.
- Design sub-agent boundaries around independent subtasks, not arbitrary splits.
- Monitor context window usage and compact proactively, not reactively.
- Keep system prompts and tool definitions stable to preserve KV-cache.

Cross-references: `../frameworks/metagpt.md` (multi-agent software company simulation), `../frameworks/gpt-pilot.md` (multi-agent pipeline with context rewinding).

---

### Task 8: Create `context-engineering/agentic-dev.md`

**Files:**
- Create: `context-engineering/agentic-dev.md`

**Primary sources:** Anthropic, Boeckeler, Manus, JetBrains, Augment, all `frameworks/` pages

This is the deep-dive page. It should reference concepts from the layer pages (link to them) rather than re-explaining fundamentals.

- [ ] **Step 1: Write the agentic dev deep-dive**

Sections:

**Instruction File Design**
- Practical guide to CLAUDE.md / .cursorrules / AGENTS.md.
- What belongs: universal project rules (test commands, commit conventions, architectural constraints, style preferences). Things the agent needs on every task.
- What doesn't belong: information derivable from code (file structure, function signatures), git history, debugging solutions, ephemeral task state.
- The ~50 instruction ceiling: every instruction competes for attention. Ruthlessly prioritize.
- Progressive disclosure: instead of listing every API convention, tell the agent where to find the API docs.
- Cross-reference: `instruction-layer.md` for the theory behind system prompt design.

**Spec-Driven Development**
- Specs as the primary context artifact: a well-written spec front-loads the understanding an agent needs so it starts with the right context instead of discovering it through trial and error.
- The spec is context engineering in document form — it's the most information-dense thing you can put in an agent's window.
- Maturity levels (from `../frameworks/index.md`): spec-first (spec written then stale), spec-anchored (spec evolves with code), spec-as-source (humans only edit specs).
- Cross-reference: `../frameworks/index.md` for tool comparisons across 9 frameworks.

**Context Strategies for Long Coding Sessions**
- The 35-minute degradation curve (Anthropic): success rate drops, failure rate quadruples with doubled duration.
- Strategy 1: Break work into sub-tasks that each complete within a clean context window. Use specs and plans to define the boundaries.
- Strategy 2: Compact and continue — summarize progress, reinitialize the context, keep working. Use structured notes (todo.md) to survive the compaction.
- Strategy 3: Fresh agents per task — each task gets a new agent with a clean window. The plan document serves as the context bridge between agents.
- When to use each: Strategy 1 for planned work, Strategy 2 for exploratory/debugging work, Strategy 3 for parallel independent tasks.
- Cross-reference: `orchestration-layer.md` for compaction patterns and sub-agent architectures.

**Sub-Agent Patterns for Development**
- When to dispatch parallel agents: independent file changes, separate features, tasks with no shared state.
- When to use sequential agents: dependent changes where one task's output informs the next.
- The coordinator pattern applied to dev: a main agent reads the plan, dispatches per-task agents, reviews results between tasks.
- Cross-reference: `orchestration-layer.md` for the general sub-agent theory.

**Filesystem as Context**
- Manus's lesson applied to development: project files (specs, docs, todo lists, progress notes) are persistent context that survives window resets.
- The pattern: write decisions and progress to files, read them back when starting a new session or after compaction.
- This is why spec-driven development works: the spec file IS the context, persisted on disk, loadable by any agent at any time.
- CLAUDE.md as always-loaded context vs. specs as on-demand context — both are filesystem-as-context, just with different loading strategies.

**The Evaluation Gap**
- How to tell if your context engineering is working:
  - Task completion rate: are agents finishing tasks successfully?
  - Token efficiency: how many tokens to complete a task? Fewer is usually better (less noise, faster, cheaper).
  - Error rates: are agents making the same mistakes repeatedly? (Memory/instruction problem.)
  - The Augment finding: identical models (Opus 4.5) scored 17 problems apart when run through different tools. The context engineering was the difference, not the model.
- You can't improve what you don't measure. Track these metrics.

**Practical Playbook: Step by Step**
A numbered walkthrough for setting up context engineering for an agentic dev project:
1. Set up instruction files (CLAUDE.md/AGENTS.md) — keep it under 50 rules, focus on universals.
2. Write a spec before starting implementation — front-load context.
3. Create an implementation plan — break work into sub-tasks sized for one context window.
4. Execute per-task with fresh agents or compaction breaks — don't let context degrade.
5. Use filesystem for persistence — write progress, decisions, and notes to files.
6. Measure and iterate — track completion rates and token usage, trim what's not helping.

---

### Task 9: Create `context-engineering/index.md`

Write this last so it can accurately describe and link to all pages.

**Files:**
- Create: `context-engineering/index.md`

- [ ] **Step 1: Write the index page**

Structure:

**Title and Definition**
- "Context Engineering" as the heading.
- Karpathy's definition (paraphrased): the art and science of filling the context window with the right information for the next step. The LLM is a CPU, the context window is RAM, and the engineer's job is to be the operating system — loading the right code and data into working memory.
- One sentence on why the term replaced "prompt engineering": prompt engineering is one input; context engineering is the system.

**The Layers**
A visual/structured overview of the guide. For each page, a one-line description and link:

| Layer | What It Covers |
|---|---|
| [Foundations](foundations.md) | Mental models, key principles, why context engineering matters |
| [Instruction Layer](instruction-layer.md) | System prompts, rules files, CLAUDE.md, behavioral design |
| [Knowledge Layer](knowledge-layer.md) | RAG, retrieval strategies, grounding, just-in-time loading |
| [Tool Layer](tool-layer.md) | Tool design, MCP servers, tool result management |
| [Memory Layer](memory-layer.md) | Short-term, long-term, episodic memory systems |
| [Orchestration Layer](orchestration-layer.md) | Context window management, compaction, sub-agents |

**Deep Dive**
- [Agentic Software Development](agentic-dev.md) — actionable patterns for coding agents: instruction files, spec-driven development, long session strategies, sub-agent patterns, and a step-by-step playbook.

**Sources**
- [Annotated Bibliography](sources.md) — key sources ranked by usefulness, with summaries.

**Related**
- [Spec-Driven Development Frameworks](../frameworks/index.md) — comparative guide to 9 tools where specs drive code generation.

---

## Self-Review

**Spec coverage check:**
- index.md: covered (Task 9) ✓
- foundations.md: covered (Task 2) ✓
- instruction-layer.md: covered (Task 3) ✓
- knowledge-layer.md: covered (Task 4) ✓
- tool-layer.md: covered (Task 5) ✓
- memory-layer.md: covered (Task 6) ✓
- orchestration-layer.md: covered (Task 7) ✓
- agentic-dev.md: covered (Task 8) ✓
- sources.md: covered (Task 1) ✓
- All cross-references to frameworks/: specified in Tasks 3, 7, 8, 9 ✓

**Placeholder scan:** No TBDs, TODOs, or vague steps. Every task specifies exact content to write.

**Consistency check:** Source short names are consistent across all tasks. Layer names match between index (Task 9) and individual tasks. Cross-reference paths use consistent `../frameworks/` notation.

**Task ordering:** sources.md first (Task 1) so other pages can reference it. index.md last (Task 9) so it accurately reflects all pages. Layer pages (Tasks 2-7) in conceptual order. agentic-dev.md (Task 8) after all layers since it references them.
