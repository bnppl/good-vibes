---
last_updated: 2026-04-03
last_read: null
status: unread
---

# Single-Agent Patterns

Before coordinating multiple agents, you need to understand how a single agent reasons and acts. These patterns define the loop an agent runs — how it decides what to do next, when to use tools, and when to stop. Every multi-agent system is built from these primitives.

---

## ReAct (Reasoning + Acting)

The most widely deployed agent pattern. The agent alternates between three phases:

1. **Thought** — the agent reasons about the current state and what to do next
2. **Action** — the agent calls a tool or takes an action
3. **Observation** — the agent reads the result and loops back to Thought

This loop continues until the agent decides the task is complete. The key insight is that reasoning and acting are interleaved — the agent doesn't plan everything upfront, it adapts based on what it observes after each action.

**When ReAct works well:**
- Exploratory tasks where the solution path isn't known upfront
- Tasks requiring dynamic adaptation (debugging, research, investigation)
- Situations where tool results change what the agent should do next

**When ReAct struggles:**
- Long-horizon tasks — the agent can lose track of the overall goal after many cycles
- Tasks requiring coordinated multi-step plans — ReAct tends to be greedy, optimizing the next step rather than the whole sequence
- Complex tasks where the reasoning chain exceeds the context window

ReAct is the default pattern in most coding agents today. Claude Code, Cursor, Copilot, and others all run some variant of the ReAct loop at their core.

---

## Plan-and-Execute

Separates planning from execution — addressing ReAct's weakness on long-horizon tasks.

**Two phases:**
1. **Plan** — a high-reasoning model analyzes the request and breaks it into an ordered list of subtasks
2. **Execute** — each subtask is executed independently, often by a smaller/faster model
3. **Re-plan** (optional) — after each subtask, evaluate whether the plan needs adjustment

The separation is the key design choice. Planning requires broad reasoning over the full problem; execution requires focused attention on one step. By splitting them, each phase gets a context window optimized for its job.

**Performance data:** Benchmarks show plan-and-execute architectures achieving up to 92% task completion rate with 3.6x speedup over sequential ReAct, because the executor models are smaller and faster while the planner only runs once (or on re-plan triggers).

**When plan-and-execute works well:**
- Structured tasks with clear decomposition (feature implementation, migrations, refactoring)
- Tasks where subtasks can be sized to fit in a single context window
- Work that benefits from a reviewable plan before execution starts

**When plan-and-execute struggles:**
- Highly exploratory work where you can't plan upfront (the "too confused to write the spec" problem from the [SDD debate](../context-engineering/agentic-dev.md))
- Tasks where early steps fundamentally change what later steps should be
- Simple tasks where the planning overhead isn't justified

This is the pattern behind spec-driven development — the spec IS the plan, and agents execute against it. Kiro's requirements/design/tasks pipeline is plan-and-execute made concrete.

---

## Reflection

The agent critiques its own output before returning a final answer.

**The loop:**
1. **Generate** — produce an initial response
2. **Critique** — switch into critic mode, assess the response for accuracy, completeness, logical gaps
3. **Revise** — fix identified problems
4. **Repeat** — until quality thresholds are met or a maximum iteration count is reached

Reflection reduces hallucination and improves accuracy through self-review. The mechanism is straightforward: the model is better at spotting errors in existing text than avoiding them during generation.

**Two forms:**
- **Self-reflection** — the same model critiques its own output. Cheaper, but the model may have blind spots to its own errors.
- **Cross-model reflection** — a different model (or the same model with a different prompt/role) does the critique. More expensive, but catches a wider range of errors.

**When reflection works well:**
- Code generation — review for bugs, edge cases, style violations
- Writing — review for accuracy, tone, completeness
- Any task where the cost of getting it wrong justifies an extra pass

**When reflection is overhead:**
- Simple factual lookups
- Tasks where speed matters more than perfection
- When the reflection prompt is too vague to catch real problems (generic "check your work" adds cost without improving quality)

Cursor's Bugbot uses reflection — it evolved from qualitative assessments to systematic, AI-driven metrics and found that shifting to an agentic architecture with critique loops produced the largest performance gains (covered in TL;DR Dev, January 2026).

---

## Tool-Use Loop

A specialized variant of ReAct focused on tool selection and invocation. The agent's primary job is choosing which tool to call and interpreting the result.

The tool-use loop is what makes agents different from chatbots. A chatbot generates text from its training data. An agent generates text AND takes actions — reading files, searching code, running tests, making API calls.

**Key design considerations:**
- Tool selection accuracy degrades with more tools (see [Tool Layer](../context-engineering/tool-layer.md))
- Tool results consume context — large outputs need truncation or summarization
- The quality of tool descriptions directly affects selection accuracy
- Failed tool calls should stay in context (Manus's "keep the wrong stuff in") so the agent doesn't retry the same failure

---

## Combining Patterns

These patterns aren't mutually exclusive. Production agents typically combine them:

- **Plan-and-execute + ReAct**: plan the overall approach, use ReAct loops for each subtask
- **ReAct + Reflection**: generate code with ReAct, then reflect on the result before committing
- **Plan-and-execute + Reflection**: generate a plan, critique the plan, then execute

The combination you choose depends on the task's complexity, time horizon, and error tolerance. The [Autonomy Spectrum](autonomy.md) page covers how these patterns map to different levels of agent independence.

---

## Anti-Patterns

**Unbounded ReAct loops.** An agent that can loop forever will eventually degrade — context fills up, attention degrades, and the agent starts repeating itself or contradicting earlier decisions. Set maximum iteration counts and escalation triggers.

**Planning without re-planning.** A plan made before execution starts will be wrong by step 3. Build in checkpoints where the agent evaluates whether the plan still holds.

**Reflection theater.** Asking the agent to "review your work" without specific criteria produces generic "looks good" responses that add cost without catching real issues. Reflection prompts should specify exactly what to check.

**Over-engineering simple tasks.** A simple file edit doesn't need a plan-and-execute pipeline with reflection. Match the pattern complexity to the task complexity.

---

For sources and further reading, see [sources.md](./sources.md).
