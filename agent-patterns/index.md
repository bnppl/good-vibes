---
has_children: true
title: Agent Architecture Patterns
nav_order: 3
last_updated: 2026-05-29
last_read: null
status: unread
---

# Agent Architecture Patterns

How AI agents work at a fundamental level — the building blocks that show up in every agent framework, every coding tool, and every autonomous system. This module covers single-agent patterns, multi-agent orchestration, the autonomy spectrum, and production engineering lessons.

If [Context Engineering](../context-engineering/index.md) is about *what goes into the context window*, agent architecture is about *how the agent uses it* — the reasoning loops, delegation patterns, and coordination strategies that determine whether an agent completes a task or spirals.

## The Pages

| Page | What It Covers |
|---|---|
| [Single-Agent Patterns](single-agent.md) | ReAct, plan-and-execute, reflection, tool-use loops — the core reasoning strategies |
| [Multi-Agent Patterns](multi-agent.md) | Orchestrator-worker, pipeline, swarm, hierarchical — how agents coordinate |
| [The Autonomy Spectrum](autonomy.md) | Five levels from copilot to fully autonomous, and why higher isn't always better |
| [Production Patterns](production.md) | Lessons from Anthropic, Stripe, Cursor, and others shipping agents at scale |
| [Sources](sources.md) | Annotated bibliography of key references on agent architecture |

## How This Connects

Agent patterns build directly on context engineering. The [orchestration layer](../context-engineering/orchestration-layer.md) covers how to manage a single agent's context window — compaction, sub-agents, KV-cache. This module covers the *why* and *when* of those patterns: which reasoning loop fits which task, when to split into multiple agents, and what the tradeoffs look like in production.

The [frameworks](../frameworks/index.md) module shows these patterns implemented in specific tools — MetaGPT uses the pipeline pattern, Augment Intent uses orchestrator-worker, GPT Pilot uses sequential with context rewinding.

## Vocabulary Reference

The agent engineering field has historically used inconsistent terminology. HuggingFace published a collaborative glossary in May 2026 (71+ contributors) that is becoming the industry standard for key terms:

- **Model** — the LLM alone, with no memory, no loop, no tools
- **Scaffolding** — the behavior-defining layer: system prompt, tool descriptions, response parsing, context management. Shapes how the model sees the world.
- **Harness** — the execution layer: calls the model, handles tool calls, decides when to stop. "The harness is what makes the agent run."
- **Agent = Model + Harness**
- **Orchestrator** — a higher-level controller coordinating multiple agents (distinct from the harness, which drives a single model)
- **Skills** — reusable structured packages of knowledge; differ from tools (which are actions) by bundling everything needed to accomplish a goal; portable across agents, loaded on demand

The harness/scaffolding distinction is worth preserving: scaffolding is declarative (what the model knows about itself and its tools); harness is operational (the loop that runs the model and acts on its output). Conflating them makes debugging harder — when a model behaves unexpectedly, the question is usually whether it's a scaffolding problem (the model was told something wrong) or a harness problem (the execution layer didn't handle the output correctly).

Source: [Harness, Scaffold, and the AI Agent Terms Worth Getting Right](https://huggingface.co/blog/agent-glossary) — HuggingFace, May 2026.
