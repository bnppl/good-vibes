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
