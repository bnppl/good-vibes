---
last_updated: 2026-04-02
last_read: null
status: unread
---

# Context Engineering

Context engineering is the art and science of filling the context window with the right information at the right time. Andrej Karpathy's framing (June 2025): the LLM is a CPU, the context window is RAM, and the engineer's job is to be the operating system — loading the right code, data, and instructions into working memory for each step. This replaced "prompt engineering" because prompt engineering is crafting one input; context engineering is designing the system that assembles the right information dynamically.

## The Layers

| Layer | What It Covers |
|---|---|
| [Foundations](foundations.md) | Mental models, key principles, why context engineering matters |
| [Instruction Layer](instruction-layer.md) | System prompts, rules files, CLAUDE.md, behavioral design |
| [Knowledge Layer](knowledge-layer.md) | RAG, retrieval strategies, grounding, just-in-time loading |
| [Tool Layer](tool-layer.md) | Tool design, MCP servers, tool result management |
| [Memory Layer](memory-layer.md) | Short-term, long-term, episodic memory systems |
| [Orchestration Layer](orchestration-layer.md) | Context window management, compaction, sub-agents |

## Deep Dive

[Agentic Software Development](agentic-dev.md) — actionable patterns for coding agents: instruction files, spec-driven development, long session strategies, sub-agent patterns, and a step-by-step playbook. This is where the guide goes from conceptual to concrete.

## Sources

[Annotated Bibliography](sources.md) — key sources on context engineering, ranked by usefulness with summaries.

## Related

[Spec-Driven Development Frameworks](../frameworks/index.md) — comparative guide to 9 tools where structured specifications drive code generation.


---


---
last_updated: 2026-04-02
last_read: null
status: unread
---

# Foundations of Context Engineering

Context engineering is the discipline of designing systems that assemble the right information, at the right time, for a language model to do useful work. This page covers the mental models and principles that everything else in this guide builds on.

---

## The Shift: From Prompt Engineering to Context Engineering

Most developers start by thinking about prompts — the single input you type or send to a model. That framing works for simple use cases. It breaks down quickly when you're building anything real.

**Prompt engineering** is about crafting a single input well. **Context engineering** is about designing the system that assembles the right information at the right time. The distinction matters because in production agents and complex workflows, the prompt is just one component among many.

Andrej Karpathy put it cleanly in a June 2025 post: the LLM is a CPU, the context window is RAM, and the engineer's job is analogous to an OS loading working memory with the right code and data. His endorsement of "context engineering" over "prompt engineering" helped the term gain traction — but it also captured something real about what the job actually requires.

Tobi Lutke (Shopify CEO) described it as "the art of providing all the context for the task to be plausibly solvable by the LLM." That's a useful definition: your job is not to write clever instructions, it's to make the task solvable in the first place.

Simon Willison noted that the term stuck partly because its inferred meaning is much closer to the actual discipline than "prompt engineering" — a phrase that people frequently dismiss as "a laughably pretentious term for typing things into a chatbot." Context engineering signals that there's real engineering work involved in deciding what information goes into a model's working memory.

The practical implication: a production system isn't a prompt. It's a dynamic assembly of system prompts, conversation history, tool definitions, tool results, retrieved documents, memory, and examples — all curated for the specific task at hand.

A useful framework for where context engineering sits in the broader progression: "The 8 Levels of Agentic Engineering" (covered in TL;DR Dev, March 2026) maps a trajectory from basic AI assistance (tab-completion, AI-focused IDEs) through context engineering and compounding engineering to autonomous agents with automated feedback. Context engineering isn't the final level — it's the foundational discipline that makes the higher levels possible.

---

## Core Mental Models

### The CPU/RAM Metaphor

Karpathy's analogy is worth internalizing because it clarifies what you can and can't control:

- **The LLM is a fixed-function CPU.** You can't change its weights at runtime. The model you're working with is what it is.
- **The context window is RAM.** It's finite, expensive, and the only lever you have for influencing behavior at inference time.
- **You are the OS.** Your job is to load the right data into working memory for each task — no more, no less.

What goes into "RAM" for a typical agent:

- System prompt (behavioral guidelines, role, constraints)
- Conversation history (what's been said so far)
- Tool definitions (what functions the model can call)
- Tool results (outputs from previous tool calls)
- Retrieved documents (external data fetched via RAG)
- Long-term memory (persistent knowledge from prior sessions)
- Few-shot examples (demonstrations of desired behavior)
- Environmental data (current time, user preferences, application state)

Every one of these competes for the same finite space. Managing that competition is the core engineering challenge.

### Write / Select / Compress / Isolate

LangChain's framework gives you four strategies for managing what goes into context. For any given agent step, ask yourself:

- **Write**: What should be persisted *outside* the context window? Scratchpads, memory stores, files, databases — anything that doesn't need to be in the model's active working memory right now but should be available later.
- **Select**: What should be pulled *into* context right now? This is where RAG retrieval, memory recall, and dynamic tool selection live. You're choosing what the model needs for this specific step.
- **Compress**: What should be shrunk to save space? Summarization, observation masking, and trimming long outputs all fall here. You keep the signal, discard the noise.
- **Isolate**: What should be delegated to a *separate* context? Sub-agents, sandboxes, and parallel workers each get their own context window. Use this when a task is complex enough that it shouldn't compete with everything else in the main context.

This framework is useful as a checklist when you're diagnosing a context problem. If a model is performing poorly or hitting token limits, running through these four questions often surfaces the fix.

### The 7-Component Model

Philipp Schmid offers a clean taxonomy for auditing what's actually in your context. Every component in a context window falls into one of these categories:

1. **Instructions / System Prompt** — behavioral guidelines, role definition, constraints, and format requirements
2. **User Prompt** — the immediate request or task
3. **State / History** — the current conversation thread (short-term memory)
4. **Long-Term Memory** — persistent knowledge that carries across sessions
5. **Retrieved Information (RAG)** — external data fetched at runtime based on the current query
6. **Available Tools** — function definitions the model can invoke
7. **Structured Output** — response format specifications

This checklist is practical: when debugging a context issue, go through each component and ask whether it's present, whether it belongs, and whether it's taking up more space than it should.

---

## The Fundamental Constraint

Context windows have grown dramatically — many models now offer 100K to 1M+ tokens. That scale can create a false sense of abundance. It doesn't change the underlying constraint.

Anthropic's framing cuts to it directly: the goal is to find **the smallest set of high-signal tokens that maximize the likelihood of the desired outcome.**

More context is not always better. Attention degrades with noise. Every irrelevant token dilutes the model's focus on what matters. And beyond attention quality, there are real costs: latency increases with context length, and token costs add up at scale.

The counterintuitive result: some of the biggest performance gains in production agent systems have come from *removing* context, not adding it. Both the Manus production agent framework and Philipp Schmid's work found that trimming irrelevant or redundant context measurably improved output quality. The model could focus better when it had less to sort through.

---

## Key Principles

**Progressive disclosure over frontloading.** Don't embed everything the model might need upfront. Instead, give it tools and mechanisms to find information when it needs it. A tool that searches documentation beats pasting all the documentation into the system prompt. The model gets fresher, more relevant information — and your context stays lean.

**Dynamic assembly over static prompts.** Context should be constructed at runtime based on the specific task at hand. A static prompt that tries to handle all cases will be bloated for any individual case. Build systems that select and assemble context dynamically.

**Less is often more.** Every piece of context that isn't directly relevant to the current task is noise. It costs tokens, adds latency, and dilutes the model's attention on what actually matters. When in doubt, leave it out and add it back if performance suffers.

**Design for attention distribution.** Information at the beginning and end of a context window gets more model attention than information buried in the middle. Structure matters as much as content. Put the most important instructions and examples where attention is highest. Don't assume the model reads context uniformly.

---

## Why This Matters

These aren't abstract principles. They're the difference between an agent that works reliably and one that hallucinates, loses track of the task, or hits token limits at the worst moments.

Context engineering is the foundational discipline for building production AI systems. Get the mental models right, and the rest of the guide — retrieval strategies, memory architectures, tool design — has clear grounding. Skip it, and you're optimizing in the dark.

**The 2026 inflection point.** Context engineering went from a niche concern to the core discipline of AI engineering in under a year. QCon London 2026 featured a dedicated talk on "Building the Knowledge Engine AI Agents Need." Agentic Conf Hamburg ran sessions on applying these principles to real codebases. Multiple "state of" reports (SwirlAI, Towards AI, BrightCoding) published 2026 retrospectives documenting how teams adopted these patterns in production. The foundational concepts laid out in mid-2025 by Karpathy, Anthropic, and others are now mainstream engineering practice — not emerging theory.

---

For sources and further reading, see [sources.md](./sources.md).


---


---
last_updated: 2026-04-02
last_read: null
status: unread
---

# The Instruction Layer

The instruction layer is the static scaffolding that's always in context: system prompts, rules files, and the behavioral guidelines that shape how an agent operates before any user message arrives. Getting this layer right has an outsized effect on everything downstream.

---

## System Prompt Design

### The Goldilocks Problem

System prompts fail in two directions. Too prescriptive and you end up with a brittle rulebook — the model follows instructions rigidly even when they don't apply, and every edge case requires another rule to patch. Too vague and behavior becomes inconsistent, with the model filling gaps unpredictably.

The goal is calibrated specificity: explicit enough that the model knows what you want, general enough that it can handle variation without instructions for every case.

### Role, Task, Constraints

A simple three-part structure works for most system prompts:

- **Role**: who the model is ("You are a senior backend engineer working in a TypeScript monorepo"). This sets tone, judgment, and the frame the model uses to interpret ambiguous requests.
- **Task**: what it's doing ("Your job is to help implement features, review code, and debug problems in this codebase").
- **Constraints**: what limits apply ("Do not modify files outside the `src/` directory without explicit approval. Always run the test suite mentally before proposing changes").

This structure makes prompts readable and auditable. When behavior goes wrong, you can usually trace it to a problem in one of these three areas.

### Persona vs. Behavioral Rules

These serve different purposes and work best in combination.

**Persona** ("You are a senior engineer") is good for calibrating judgment and tone. It shapes how the model weighs tradeoffs, what level of explanation it defaults to, and how it handles uncertainty. You're not specifying actions — you're setting the defaults the model uses when specific instructions don't apply.

**Behavioral rules** ("Always check for existing tests before writing new ones") are good for specific, repeatable actions. They work when you have a concrete, predictable pattern you want to enforce regardless of context.

The mistake is over-indexing on behavioral rules when persona would handle it more flexibly. If you find yourself writing rules like "be thoughtful about edge cases" or "consider the broader context," that's persona work dressed as instruction work.

### Examples Beat Rules

One of Anthropic's clearest findings is that diverse, canonical few-shot examples outperform instruction sprawl. Showing the model what good output looks like is often more effective than describing it.

This maps to a deeper point: rules describe behavior abstractly, and models have to interpret that abstraction. Examples demonstrate behavior concretely, giving the model a direct signal about the target. When you're struggling to get consistent output with instructions, try replacing the instructions with two or three examples instead.

---

## Rules Files and Instruction Hierarchies

### The Instruction File Ecosystem

Modern AI coding tools load persistent instruction files into every session:

- **CLAUDE.md** (Claude Code) — loaded automatically when Claude Code starts in a project directory
- **.cursorrules** (Cursor) — the original; still widely used but Cursor has since moved toward project rules in settings
- **AGENTS.md** — an emerging cross-tool standard that works across Claude Code, Cursor, GitHub Copilot, and others

AGENTS.md is worth adopting if you're working across tools. A single file that governs agent behavior everywhere reduces duplication and drift between tool-specific versions of the same guidance.

### Scoped Rules

Not all rules apply everywhere. Claude Code supports hierarchical CLAUDE.md files: a root-level file applies to the whole project, and CLAUDE.md files in subdirectories apply only within those directories. This is scoped context — the model only loads the rules relevant to where it's working.

Birgitta Boeckeler's analysis on Martin Fowler's site documents how Claude Code layers these mechanisms:

- **CLAUDE.md** — always loaded, project-wide baseline
- **Rules** — path-scoped, loaded when the model is working in specific directories
- **Skills** — lazy-loaded on demand, not in context until needed
- **Hooks** — deterministic scripts triggered by events (file save, create, delete)
- **MCP Servers** — tool integrations that extend what the model can do

The key principle: context should be loaded when it's relevant, not pre-loaded because it might be relevant.

### The ~50 Instruction Ceiling

Anthropic's documentation notes that system prompts already contain around 50 instructions by the time you account for tool descriptions, formatting guidance, and core behavioral rules. Models can reliably follow approximately this many instructions before degradation sets in.

Every instruction you add competes for attention with every other instruction. This isn't a theoretical concern — at high instruction counts, models start dropping rules inconsistently. The ceiling forces prioritization: if you're writing instruction 51, something else should come out.

---

## Anti-Patterns

**Instruction bloat.** Adding rules for every edge case until the model can't follow any of them reliably. Each additional rule has diminishing returns and increasing interference cost. The fix is usually to delete, not refine.

**Contradictory rules.** "Always be concise" alongside "always explain your reasoning in detail." The model has to resolve the contradiction somehow, and it may resolve it differently each time. When you see inconsistent behavior, check for rules that pull in opposite directions before assuming the model is broken.

**Over-specifying format when behavior matters more.** Spending effort on output structure when the real problem is decision-making. If the model is making wrong choices, fixing the markdown formatting of its responses won't help.

**Duplicating derivable information.** Putting file structure, function signatures, or coding conventions into the system prompt when they already exist in the codebase. The model can read the code — use progressive disclosure to point it there rather than duplicating content that will fall out of sync.

---

## Actionable Steps

1. **Audit your system prompt.** Count instructions explicitly. If you're over 50, start removing. Cut anything the model already knows, anything derivable from the codebase, and anything that hasn't demonstrably changed behavior.

2. **Use progressive disclosure.** Instead of embedding all project conventions, tell the model where to find them: "Before making changes to the API layer, read `docs/api-conventions.md`." This keeps the instruction layer lean and ensures the model gets current information rather than a potentially stale copy.

3. **Test instruction effectiveness.** Does adding an instruction actually change behavior? Remove it and check. If output quality doesn't change, the instruction is noise — it's consuming budget without producing results.

4. **Keep rules files focused.** Only include guidance that applies universally across the project. If a rule only applies in one directory, scope it there with a subdirectory CLAUDE.md rather than loading it everywhere.

5. **Prefer examples over rules.** When you're trying to shape output, write two or three canonical examples before reaching for another instruction. Examples give the model a concrete target; rules give it an abstraction it has to interpret.

---

## See Also

- [../frameworks/kiro.md](../frameworks/kiro.md) — Kiro uses EARS notation for structured requirements, a formal approach to writing unambiguous instructions. The GIVEN/WHEN/THEN format is a useful model for behavioral rules that need to be precise.

- [../frameworks/github-spec-kit.md](../frameworks/github-spec-kit.md) — GitHub Spec Kit uses a Constitution pattern — a master file of immutable project principles that governs agent behavior across the project. A practical model for the highest tier of your instruction hierarchy.


---


---
last_updated: 2026-04-02
last_read: null
status: unread
---

# The Knowledge Layer: RAG, Retrieval, and Just-in-Time Loading

Getting knowledge into context is one of the central problems in context engineering. You have three broad options: train it into the model (fine-tuning), include examples directly in the prompt (in-context learning), or retrieve it at runtime (RAG). Each has its place, and confusing them is a common source of wasted effort.

## RAG Fundamentals

Retrieval-Augmented Generation means: instead of baking knowledge into model weights, retrieve it when you need it and inject it into context. The model reasons over what you give it rather than recalling from parametric memory.

**When to use RAG vs. the alternatives:**

- **RAG** — large or frequently changing knowledge bases, domain-specific facts, anything where you need the model grounded in specific documents. The canonical use cases: internal documentation, product catalogs, legal corpora, codebases.
- **Fine-tuning** — behavioral changes, style adaptation, making the model follow conventions consistently. Fine-tuning is poor at injecting factual knowledge reliably; it's better at shaping how the model responds than what it knows.
- **In-context examples** — demonstrating output format, showing patterns, few-shot learning. Put examples in context when you want the model to match a specific structure or style.

The RAG pipeline at a high level:

1. Index documents — ingest your knowledge base
2. Chunk — break documents into retrievable units
3. Embed — convert chunks to vector representations
4. Store — write to a vector database (or hybrid store)
5. Retrieve — at query time, find the most relevant chunks
6. Inject — include retrieved chunks in the model's context

The devil is in every one of those steps. RAG gets blamed for model failures that are actually chunking failures, indexing failures, or retrieval failures.

## Retrieval Strategies

Not all retrieval is the same. The right strategy depends on what your queries look like and what your documents contain.

**Vector (semantic) search** embeds the query and finds documents by similarity in vector space. Strong for meaning-based queries — "how do I handle authentication errors?" returns relevant results even if the document uses different phrasing. Weak for exact matches: searching for error code `E4021` may surface semantically similar content instead of the exact identifier.

**Keyword (lexical) search** — BM25 and similar approaches — matches on terms. Strong for exact identifiers, proper nouns, code snippets, and technical strings. Weak when users paraphrase or when synonyms are common.

**Hybrid search** combines both. A query goes through semantic search and keyword search in parallel; results are merged and re-ranked. This handles the failure modes of each individual approach. For most production applications, hybrid search is the right default — don't start with pure vector search and assume you're done.

**Graph-enhanced RAG** adds relationship traversal to retrieval. Useful when your data has meaningful structure: knowledge graphs, code dependency graphs, document hierarchies with explicit links. Instead of just finding relevant nodes, you can follow edges to retrieve related context that pure similarity search would miss.

**Chunking strategies** have outsized impact on retrieval quality, and they're often underestimated:

- Small chunks (a few sentences) give precise retrieval but may lack surrounding context to be useful on their own.
- Large chunks (several paragraphs or pages) preserve more context but introduce noise, increase token costs, and dilute relevance scores.
- Overlapping chunks help bridge section boundaries — a chunk that starts 50% through the previous chunk ensures nothing falls through the gap.
- Semantic chunking — splitting by section, paragraph, or logical unit rather than by character count — generally outperforms fixed-size chunking. Documents have natural structure; honor it.

## Grounding and Attribution

One of RAG's primary benefits is reducing hallucination. When the model has concrete source material in context, it reasons over that material rather than generating from parametric memory. The difference between "the model recalls something that might be true" and "the model is working from a specific document you gave it" is meaningful for reliability.

For this to work well:

**Include source metadata.** Don't just inject raw text — include document title, URL, publication date, and any other identifiers alongside the content. This gives the model what it needs to attribute claims accurately, and gives users what they need to verify them.

**Calibrate for low-relevance retrieval.** When the retrieved chunks are weakly relevant to the query, the model should express uncertainty rather than papering over the gap with confident-sounding inference. This requires both prompt design (explicitly instruct the model to flag low-confidence answers) and retrieval quality (surface relevance scores so the model can reason about them).

The goal is not just "model has access to documents." It's "model reasons transparently from documents, cites what it uses, and flags when it doesn't have what it needs."

## Just-in-Time Loading

Anthropic's recommended pattern: don't load everything upfront. Maintain lightweight references — file paths, document IDs, URLs — and load actual content via tools only when the model determines it's needed.

The naive approach is to stuff all potentially relevant documentation into the system prompt before the conversation starts. This bloats the context window immediately, buries relevant information in noise, and costs tokens whether or not the model ever needed that knowledge.

The just-in-time alternative: give the model a `search_docs` tool. When it needs information, it retrieves it. The initial context stays lean. The model decides what's relevant based on the actual task at hand, not what an engineer predicted might be useful.

This is progressive disclosure applied to knowledge — the same principle that governs good instruction layering, applied to data. Don't front-load. Let the model pull what it needs.

The practical implication: design your tool interfaces so retrieval is cheap and fast. If calling a search tool is slow or unreliable, the model will hit friction every time it needs to look something up, and you'll be tempted to fall back to front-loading context to compensate.

**Cursor's dynamic context discovery.** Cursor published their implementation of this pattern in detail (January 2026, discussed on HN). Their approach uses five techniques: (1) long tool outputs are written to files rather than truncated, letting agents use `tail` or `grep` to retrieve what they need progressively; (2) when context windows fill and summarization occurs, agents reference saved chat history files to recover lost details; (3) skill descriptions are listed minimally, with agents discovering full details via search when relevant; (4) MCP tool descriptions sync to folders by server, with agents seeing only names initially — this reduced token usage by 46.9% in A/B tests; (5) terminal outputs are written to the filesystem so agents can grep specific results rather than consuming raw output. The common thread: write everything to disk, load only what's needed. This is just-in-time loading as a fully implemented product feature, not a theoretical pattern.

## Anti-Patterns

**Context pollution.** Retrieving too much drowns signal in noise. Philipp Schmid found in Part 2 of his context engineering series that removing retrieved context sometimes improved output quality — the noise was worse than no context at all. More retrieval is not always better. The question is always relevance, not volume.

**RAG as a silver bullet.** RAG cannot fix bad chunking, poor indexing, or missing data. If the information isn't in your index, retrieval won't find it. If your chunks split logical units at the wrong boundaries, retrieval will return incomplete or misleading fragments. Blame the pipeline before blaming the model.

**Retrieving too little.** Being overly aggressive with filtering forces the model to hallucinate to fill gaps. If you're confident your retrieval is so good that you can use a high relevance threshold and surface only a handful of chunks, verify that confidence empirically.

**Static retrieval.** Retrieving the same documents regardless of the query is not RAG — it's just prepending a static block of text. Real retrieval is dynamic and query-dependent. If your "retrieval" step ignores the query, you don't have retrieval.

## Actionable Steps

1. **Evaluate retrieval quality before blaming the model.** Sample 20-50 representative queries, inspect the retrieved chunks, and ask whether a human would find them relevant. If they're not relevant, fix chunking or indexing. This is the most common diagnostic gap — engineers blame model output when the root cause is retrieval quality.

2. **Measure context pollution with A/B testing.** Run queries with and without retrieved context. If adding retrieval doesn't improve output — or actively degrades it — you have a retrieval quality problem, not a model problem.

3. **Default to hybrid search.** Start with a combination of semantic and keyword retrieval. Pure vector search has enough failure modes on exact matches and identifiers that hybrid is the safer default, especially for technical content.

4. **Load via tools, not upfront injection.** Give the model a retrieval tool and let it pull what it needs. Reserve system prompt knowledge for things that are always relevant: core instructions, persona, constraints. Everything else should be retrievable.

5. **Monitor and tune chunk sizes.** If retrieved chunks consistently lack surrounding context (too small) or consistently include irrelevant material (too large), adjust. There's no universal correct chunk size — it depends on your documents and your queries. Treat it as a tunable parameter, not a one-time decision.
