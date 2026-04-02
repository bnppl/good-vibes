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
