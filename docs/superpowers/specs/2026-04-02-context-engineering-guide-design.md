# Context Engineering Guide — Design Spec

## Overview

A multi-file wiki-style guide to context engineering, living in `context-engineering/` at the project root. The guide covers the full discipline of context engineering broadly, then goes deep on actionable patterns for agentic software development.

**Audience:** Developers and teams evaluating and choosing context engineering strategies, and people learning the discipline from scratch.

**Format:** Multi-file markdown wiki (like the existing `frameworks/` folder), with an index page linking to deep-dive pages per topic.

## Structure

```
context-engineering/
  index.md              — Overview, definition, navigation hub
  foundations.md         — What context engineering is, why it matters, key mental models
  instruction-layer.md  — System prompts, rules files, CLAUDE.md, behavioral design
  knowledge-layer.md    — RAG, retrieval strategies, grounding in external data
  tool-layer.md         — Tool/function design, MCP servers, tool result management
  memory-layer.md       — Short-term, long-term, episodic memory systems
  orchestration-layer.md — Context window management, compaction, sub-agents
  agentic-dev.md        — Deep dive: actionable patterns for agentic software development
  sources.md            — Annotated bibliography of key sources with summaries
```

Each layer page covers:
- The concept (broad, educational)
- Key patterns and anti-patterns (decision-making)
- Actionable steps (practical)
- Cross-references to `frameworks/` where relevant

## Page Designs

### index.md

The landing page. Defines context engineering using Karpathy's framing (LLM as CPU, context window as RAM, engineer as OS). Explains why the term replaced "prompt engineering." Provides a visual map of the layers with one-line descriptions linking to each page. Notes that `agentic-dev.md` is where the deep actionable content lives.

Short, punchy, gets people oriented and moving to the right page.

### foundations.md

The "why" and mental models:

- **The shift from prompt engineering to context engineering** — prompt engineering is about crafting a single input; context engineering is about designing the system that assembles the right information at the right time.
- **Core mental models** — Karpathy's CPU/RAM metaphor, LangChain's Write/Select/Compress/Isolate framework, Schmid's 7-component model.
- **The fundamental constraint** — context windows are finite, attention degrades with noise, every token has a cost. The job is finding the smallest set of high-signal tokens that maximize the desired outcome (Anthropic's framing).
- **Key principles** — progressive disclosure over frontloading, dynamic assembly over static prompts, less is often more (Manus and Schmid both found biggest gains from removing things).

### instruction-layer.md

The static scaffolding — what's always in context:

- **System prompt design** — Anthropic's "Goldilocks" principle (not too prescriptive, not too vague), role/task/constraints structure, when to use persona vs. behavioral rules.
- **Rules files and instruction hierarchies** — CLAUDE.md, .cursorrules, AGENTS.md as emerging cross-tool standard; scoped rules (project-level vs. path-level); the finding that models can reliably follow ~50 instructions before degradation.
- **Anti-patterns** — instruction bloat, contradictory rules, over-specifying format when behavior matters more.
- **Actionable steps** — how to audit and trim system prompts, progressive disclosure (tell the model how to find information rather than embedding it all upfront).

Cross-references: `frameworks/kiro.md` (EARS notation for requirements), `frameworks/github-spec-kit.md` (Constitution pattern).

### knowledge-layer.md

Getting the right external information into context at the right time:

- **RAG fundamentals** — retrieval-augmented generation as the core pattern, when to use it vs. fine-tuning vs. in-context examples.
- **Retrieval strategies** — vector search, hybrid search (semantic + keyword), graph-enhanced RAG, chunking strategies and their tradeoffs.
- **Grounding and attribution** — citing sources, reducing hallucination through retrieval, confidence calibration.
- **Just-in-time loading** — Anthropic's pattern of maintaining lightweight references (file paths, URLs, keys) and loading data via tools only when needed.
- **Anti-patterns** — retrieving too much (context pollution), retrieving too little (hallucination risk), treating RAG as a silver bullet when the real problem is bad chunking or indexing.

Actionable steps: how to evaluate whether retrieval is actually helping, signs a RAG pipeline is adding noise rather than signal.

### tool-layer.md

How tools extend what the model can do, and how tool design shapes context quality:

- **Tool design principles** — Anthropic's guidance: minimal non-overlapping tool sets, one action per tool, descriptive names, clear parameter schemas.
- **Tool result management** — tool outputs consume context; strategies for truncating, summarizing, or selectively returning results.
- **MCP servers** — the Model Context Protocol as a standardized way to expose tools and data sources, when MCP makes sense vs. direct function calling.
- **The tool selection problem** — models struggle when given too many tools; strategies for dynamic tool loading, tool categories, scoped availability.
- **Manus's insight: mask don't remove** — use state machines to manage tool availability per step rather than adding/removing from the schema (preserves KV-cache).

Actionable steps: how to audit tool sets for overlap, how to write tool descriptions that reduce misuse, when to collapse multiple tools into one vs. splitting.

### memory-layer.md

Persistence across turns and sessions:

- **Short-term memory** — conversation history, the default context. When it helps (continuity) and when it hurts (noise accumulation, the finding that agent success drops after 35 minutes).
- **Long-term memory** — cross-session persistence. Structured approaches (OpenAI's belief-update pattern: update facts rather than accumulate them) vs. unstructured (append-only logs). File-based memory systems like Claude Code's MEMORY.md.
- **Episodic memory** — remembering what happened in past sessions, not just facts. Useful for avoiding repeated mistakes, learning from past errors (connects to Manus's "keep the wrong stuff in").
- **Memory retrieval** — how to decide what to recall and when. The staleness problem: memory is a claim about the past, not the present.
- **Anti-patterns** — unbounded history, never pruning, treating memory as authoritative without verification.

Actionable steps: designing a memory schema, deciding what's worth persisting vs. what's derivable from code/git, when to use memory vs. RAG vs. tool calls.

### orchestration-layer.md

Managing the context window itself and splitting work across agents:

- **Context window management** — compaction strategies (summarize before window fills, preserve architectural decisions, discard redundant output), observation masking (JetBrains finding: simpler than LLM summarization, better results, 52% cheaper).
- **Structured note-taking** — agents maintaining external state files (todo.md, progress.md) as memory outside the window. Manus's "attention through recitation" pattern.
- **Sub-agent architectures** — when and how to split work across agents with clean context windows. Coordinator pattern: main agent gets distilled 1,000-2,000 token summaries. MapReduce for parallel sub-tasks.
- **KV-cache optimization** — Manus's lesson: stable prefixes, append-only context, explicit cache breakpoints. Why rewriting context is expensive.
- **Anti-patterns** — LLM summarization as primary compaction (JetBrains data shows it encourages longer runs with worse results), monolithic agents trying to hold everything in one window.

Actionable steps: when to compact vs. spawn a sub-agent, how to design agent boundaries, signals that context is degrading.

Cross-references: `frameworks/metagpt.md` and `frameworks/gpt-pilot.md` for multi-agent architecture examples.

### agentic-dev.md

The deep dive — the payoff page. Specifically about coding agents and actionable paths:

- **Instruction file design** — practical guide to writing effective CLAUDE.md / .cursorrules / AGENTS.md. What belongs there (universal project rules), what doesn't (stuff derivable from code). The ~50 instruction ceiling.
- **Spec-driven development** — specs as the primary context artifact. How specs front-load understanding so the agent starts with the right context. Links to `frameworks/` index for tool comparisons.
- **Context strategies for long coding sessions** — the 35-minute degradation curve, when to start fresh vs. compact, how to structure work into sub-tasks that fit cleanly in a window.
- **Sub-agent patterns for development** — when to dispatch parallel agents (independent file changes), when to use sequential agents (dependent changes), coordinator patterns.
- **Filesystem as context** — Manus's lesson applied to dev: using project files (specs, docs, todo lists) as persistent context that survives window resets.
- **The evaluation gap** — how to tell if context engineering is working: task completion rates, token efficiency, error rates, the Augment finding that identical models scored 17 problems apart across different tools.
- **Practical playbook** — step-by-step: start a project, set up instruction files, write specs, structure agent work, manage long sessions, iterate.

### sources.md

Annotated bibliography in three tiers:

- **Tier 1 (essential reading):** Anthropic's "Effective Context Engineering for AI Agents," LangChain's "Context Engineering for Agents" (with GitHub repo), Manus's "Lessons from Building Manus."
- **Tier 2 (strong references):** Karpathy's X post (canonical definition), Schmid's Parts 1 & 2 (component taxonomy), Boeckeler on Martin Fowler's site (coding agents), JetBrains research (empirical compaction evidence).
- **Tier 3 (deeper reading):** Mei et al. academic survey (1400+ papers), Addy Osmani / O'Reilly series (broad audience), Simon Willison's post (historical context).

Each entry: link, author, 1-2 sentence summary of unique coverage, who it's most useful for.

## Design Decisions

- **Layer-cake structure chosen over concept-first or problem-first** because it builds understanding progressively (good for teaching) while each page doubles as a decision-making reference. It mirrors how context actually flows into a model.
- **Separate agentic-dev page rather than weaving it through every layer** because the audience wanting broad context engineering education differs from the audience wanting coding agent specifics. The layer pages cover agentic dev lightly; agentic-dev.md goes deep.
- **Sources as a separate page** rather than inline citations because the user wanted links as "nice to have" — a separate annotated bibliography keeps the content pages clean while still providing the references.
- **Cross-references to frameworks/ are natural, not systematic** — linked where a framework illustrates a concept, not catalogued exhaustively.
