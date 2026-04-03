---
last_updated: 2026-04-03
last_read: null
status: unread
---

# Sources: Agent Architecture Patterns

## Essential Reading

**[Building Effective Agents](https://www.anthropic.com/research/building-effective-agents)**
Anthropic

The foundational guide to agent design patterns. Covers workflows vs. agents, augmented LLMs, and composable patterns including chaining, routing, parallelization, orchestrator-worker, and evaluator-optimizer. The key principle: "agents can be built with simple, composable patterns."

Most useful for: understanding the building blocks before combining them.

---

**[How We Built Our Multi-Agent Research System](https://www.anthropic.com/engineering/multi-agent-research-system)**
Anthropic Engineering

The most detailed production account of a multi-agent system. Covers the orchestrator-worker pattern, effort scaling, parallel execution (90% time reduction), and the finding that token usage explains 80% of performance variance. Unusually candid about production engineering challenges (statefulness, debugging, deployment).

Most useful for: anyone building or operating multi-agent systems.

---

**[The Code Agent Orchestra](https://addyosmani.com/blog/code-agent-orchestra/)**
Addy Osmani

Multi-agent patterns specifically for coding: subagents (focused delegation), agent teams (parallel with peer-to-peer messaging), hierarchical subagents (3+ levels). Key insight: "the mechanical work of typing code is being automated. The cognitive work of understanding systems is being amplified." Includes specific warnings about loss of system comprehension.

Most useful for: developers running multi-agent coding workflows.

---

## Strong References

**[AI Agent Design Patterns (Video Series)](https://www.youtube.com/watch?v=GDm_uH6VxPY)**
Google Cloud Tech

Practical walkthrough of single agent, sequential, parallel, orchestrator, loop/critique, and agent-as-tool patterns with code examples using Google's ADK. Clear, visual, and implementable.

Most useful for: visual learners who want to see patterns in action.

---

**[Choose a Design Pattern for Your Agentic AI System](https://docs.cloud.google.com/architecture/choose-design-pattern-agentic-ai-system)**
Google Cloud Architecture Center

Decision framework for selecting agent patterns based on task characteristics. Covers single agent, multi-agent, and hybrid patterns with clear criteria for when to use each.

Most useful for: decision-making when choosing a pattern for a specific task.

---

**[Five Levels of AI Coding Agent Autonomy](https://www.swarmia.com/blog/five-levels-ai-agent-autonomy/)**
Swarmia

The clearest articulation of the autonomy spectrum for coding agents. Five levels from inline assistance to fully autonomous, with the argument that Level 2 (plan-level approval) is the right default for most professional work.

Most useful for: calibrating how much autonomy to give your agents.

---

**[Measuring Agent Autonomy](https://www.anthropic.com/research/measuring-agent-autonomy)**
Anthropic Research

Academic framework for quantifying agent autonomy. Argues that autonomy should expand based on demonstrated reliability, not assumed capability.

Most useful for: teams building governance frameworks around agent deployment.

---

**[15 Agentic AI Design Patterns You Should Know](https://aitoolsclub.com/15-agentic-ai-design-patterns-you-should-know-research-backed-and-emerging-frameworks-2026/)**
AI Tools Club

Comprehensive catalog of 15 patterns with research backing. Goes beyond the core 4-5 patterns to cover emerging frameworks. Good reference when the standard patterns don't fit your use case.

Most useful for: exhaustive reference of what patterns exist.

---

## Deeper Reading

**[Agentic AI: Architectures, Taxonomies, and Evaluation](https://arxiv.org/html/2601.12560v1)**
Academic survey

Formal taxonomy of agent architectures with evaluation frameworks. Covers the theoretical underpinnings of why certain patterns work better for certain tasks.

Most useful for: researchers and people wanting formal grounding.

---

**[Multi-Agent AI Architecture Patterns for Enterprise](https://www.augmentcode.com/guides/multi-agent-ai-architecture-patterns-enterprise)**
Augment Code

Enterprise-focused guide to multi-agent patterns. Covers orchestrator-worker, pipeline, and hierarchical patterns with attention to enterprise concerns (cost, security, governance).

Most useful for: enterprise teams evaluating multi-agent adoption.

---

**[AI Agent Architecture: Build Systems That Work in 2026](https://redis.io/blog/ai-agent-architecture/)**
Redis

Practical guide connecting agent patterns to infrastructure. Covers how state management, caching, and persistence shape agent architecture decisions.

Most useful for: infrastructure engineers supporting agent systems.
