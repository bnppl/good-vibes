---
title: "Harness Engineering"
parent: "Context Engineering"
nav_order: 10
last_updated: 2026-08-16
last_read: null
status: unread
---

# Harness Engineering

{: .hook }
> **Agent = Model + Harness.**
>
> The third phase of AI engineering maturity — and the one that makes agents production-ready.

{: .in-short }
- **Prompt engineering** (2024) optimizes wording. **Context engineering** (2025) optimizes information. **Harness engineering** (2026) optimizes the environment.
- **The formula:** The harness is everything around the model — constraints, tools, verification loops, observability, permissions. The model provides raw intelligence; the harness makes that intelligence reliable.
- **The evidence:** OpenAI built 1M lines of production code with zero human-written lines, using a strict harness (Feb 2026). LangChain gained 13.7 benchmark points changing only the harness, not the model (Feb 2026). Stanford/MIT Meta-Harness automated harness optimization, achieving +4.7 IMO math points across 5 models (Mar 2026).
- **The limit:** A harness cannot supply judgment. Models are trained against signals evaluable in seconds; bad architecture costs weeks. Harness engineering makes agents fast and safe — it does not make them care whether the design was worth building (HumanLayer, Jul 2026).

## The Three Phases

| Phase | Era | Core Discipline | What It Entails | Limitation |
|---|---|---|---|---|
| 1. Prompt Engineering | 2023–2024 | Language | Crafting the right words to get the right output | Works for single-turn, fails at multi-step |
| 2. Context Engineering | 2025 | Information | Managing what the model sees, in what order, at what resolution | Still probabilistic — no guarantees |
| 3. Harness Engineering | 2026 | Environment | Building deterministic guardrails, verification loops, and runtime constraints around the model | Requires upfront investment |

{: .aha }
> **You can't prompt or context your way to reliability.** At some point you need enforcement, not advice. A CLAUDE.md saying "don't delete production tables" is a suggestion. A PreToolUse hook that blocks DROP TABLE in production is a guarantee.

## The 5 Layers of a Production Harness

Faros.ai's 2026 framework, corroborated by OpenAI, Anthropic, and LangChain, identifies five layers:

### 1. Tool Orchestration
Which tools the agent can invoke, when, and with what permissions. Intent-based tool selection (only load relevant tools per step), sandboxed execution, and deterministic command validation.

### 2. Verification Loops
The agent checks its own work. Tests, linters, type checkers run automatically. Output is compared against a spec or acceptance criteria before it reaches a human. LangChain's deepagents-cli uses self-verification + tracing for their 26% improvement.

### 3. Context & Memory
Progressive disclosure across sessions. A "Director's Journal" (Slack Engineering) for structured long-run memory. Compression strategies for multi-hour sessions. Relevant context loaded per sub-task, not all at once.

### 4. Guardrails
Deterministic pre/post-execution hooks. PreToolUse hooks block dangerous commands before they run (not after, not "the model should know better"). File system sandboxes. DORA report found higher AI adoption correlates with deployment instability — guardrails are the remediation.

### 5. Observability
Tracing every agent action: tool calls, model decisions, context state at decision time. Not just "what went wrong" but "what did the agent see when it made that decision?" Metrics: cost per merged PR, time-to-merge, review velocity relative to PR size.

## Key Findings from 2026

**OpenAI's Codex experiment (Feb 2026):** A team of 3–7 engineers built a product with 1M+ lines of code — application logic, tests, CI, docs, observability — all written by agents. The constraint of "no manual code" forced them to build the harness. Their conclusion: *"Early progress was slower than expected, not because [the model] was incapable, but because the environment was underspecified."*

**LangChain's harness-only improvement (Feb 2026):** Their coding agent went from Top 30 to Top 5 on Terminal Bench 2.0 (52.8% → 66.5%). They changed nothing about the model — only the system prompt, tools, and middleware.

**Anthropic's containment work (Mar–Jun 2026):**
- "How we contain Claude across products" (Jun 2026) — blast radius containment as a harness design problem
- "Harness design for long-running application development" (Mar 2026) — patterns for multi-hour agent sessions
- "Effective harnesses for long-running agents" (Nov 2025) — the precursor that defined the category

**Martin Fowler on harness engineering (Apr 2026):** Formalized the discipline at the architectural level, mixing deterministic rules (linting, module boundaries) with LLM-based checks to keep agents aligned.

**Guides and sensors (Jul 2026):** Birgitta Boeckeler (Thoughtworks) offered the cleanest two-part decomposition of a harness on SE Radio 730: **guides** are information fed *forward* to the agent (markdown files, architectural constraints, conventions), and **sensors** are feedback fed *back* (static analysis, test suites, LLM-based review) that let the agent self-correct. Most teams over-invest in guides and under-invest in sensors — writing more markdown when what the agent needs is a signal that tells it when it's wrong. Her recommended starting point is the opposite of what teams do: run "plain vanilla without putting anything in there" first, then add each constraint in response to an observed failure.

## The Limits of the Harness

The most important harness engineering argument of 2026 is the one against over-trusting harnesses. Dex (HumanLayer) published "Why Software Factories Fail (or: harness engineering is not enough)" in July 2026 — 394 points and 272 comments on Hacker News — and it is the strongest available counterweight to the lights-off automation narrative.

**The argument:** a harness can make an agent fast and it can make an agent safe, but it cannot make an agent care about maintainability. The reason is in how models are trained. Reinforcement learning optimizes against signals that can be evaluated in seconds — did the tests pass? — while the cost of bad architecture is measured in weeks or months. As Dex puts it: *"Tests give you feedback in seconds, but the cost function of bad architecture is measured in weeks, months, maybe even years."* Nothing in training penalizes brittle code, so models produce defensive try-catch sprawl and type-unsafe patterns that pass every gate a harness can run.

**The evidence:** Faros AI's post-adoption metrics reported +25% more code review comments, +242.7% incidents per PR, and +54% bugs per developer. Benchmarks like SWE-bench Multilingual contain no maintainability evaluation at all, so there is no gradient pointing toward it.

**The failure curve:** three to six months into an agent-built codebase, velocity collapses as interconnected bad decisions compound. Incidents surface weeks after the decisions that caused them, which makes them impossible to backpropagate into either training or the harness.

**What Dex proposes instead** is staged human-AI collaboration with four planning phases *before* the agent implements:

| Phase | What it settles | Artifact |
|---|---|---|
| 1. Product review | The user problem and success metrics | Spec, mockups |
| 2. System architecture | How services interact and data flows | Sequence diagrams, contracts |
| 3. Program design | Call stacks, type signatures, file structure | Pseudocode |
| 4. Vertical slices | Incremental implementation and review | 100–200 line diffs |

Only about 40% of tasks warrant the full sequence; medium tasks combine phases 1 and 2, and small tasks skip straight to implementation. The claimed result is **2–3× velocity safely**, against 10–100× with quality collapse. His summary: *"30 minutes of planning saves hours of review."*

{: .aha }
> **The harness constrains behavior; it does not supply judgment.** A harness can guarantee the tests pass, the linter is clean, and no one dropped a production table. It cannot guarantee the design was worth building. That gap is where the human stays, and it is not closing on the current training paradigm.

The HN thread sharpened it further. Dex in the comments: *"Coding well with LLMs, it's not a skill issue, it's an effort/laziness/rigor issue"* — the teams succeeding with agents were already high-discipline teams. HN user danpalmer added the reviewer's side: agent-generated PRs are bad at *authoring for review* — oversized changes with weak judgment about what belongs together — which is a harness problem nobody has solved because no gate measures it.

**The benchmark that agrees.** SlopCodeBench (Gabe Orlanski's lab, UW Madison) tests long-horizon incremental development: requirements unfold across checkpoints, the model never sees the whole problem upfront, and a "strict pass" requires all new tests *plus* all inherited regression tests. HumanLayer's July 2026 run scored Opus 5 at **24%** (4 of 17 checkpoints), against 6% for both Opus 4.8 and Sonnet 5. Opus 5 also wrote 29,065 source lines where competitors wrote ~9,000, and complexity rose across every model as checkpoints accumulated. The conclusion matches the software-factories argument: frontier models "can't be relied on to run lights-off without steering" on realistic incremental work.

## Self-Improving Harnesses

If the harness is the thing that makes a model useful, the obvious next question is whether the harness can improve itself. Lilian Weng's "Harness Engineering for Self-Improvement" (July 2026, 333 HN points) is the field's most complete survey of that question.

Weng's framing: optimization targets escalate as models get more capable — **prompts → structured context → workflow → harness code → optimizer code**. Each rung up delegates more of the design work to the system itself.

Three patterns recur across the systems she surveys:

1. **Workflow automation** — goal-oriented plan/execute/observe/improve loops that run to completion.
2. **File system as persistent memory** — durable storage instead of holding everything in the context window (the same filesystem-as-context principle from [agentic-dev](agentic-dev.md)).
3. **Sub-agents and background jobs** — explicit, inspectable parallelism rather than one long serial run.

On the context side she highlights **Agentic Context Engineering (ACE)** — contexts as evolving playbooks of itemized bullets rather than ever-lengthening prompts — and **Meta Context Engineering (MCE)**, which separates the *mechanism* of context management from the *artifacts* being managed. On the code side, the Darwin Gödel Machine lets agents modify their own harness code and reported 20–50% improvements on SWE-bench Verified.

{: .caution }
> **Self-improvement is capability-gated.** The STOP (Self-Taught Optimizer) result is the cautionary one: it improved mean performance with GPT-4 but *degraded* it with GPT-3.5 and Mixtral. Lin et al. (2026) found harness-*updating* capability roughly flat from 9B models up to Opus 4.6, while harness-*benefit* is non-monotonic — middle-tier models sometimes gain the most. A self-improving loop is not a free upgrade; below a capability threshold it makes things worse.

Weng closes with seven open challenges, and the two that matter most for practitioners here are **weak evaluators** (self-improvement is only as good as the verifier scoring it) and **reward hacking** (a loop optimizing a given signal will find the cheapest way to satisfy it). Both are arguments for the verification discipline in [Verification](../verification/index.md) rather than against automation. Her seventh — the human role — lands in the same place as the software-factories argument: humans should move *up* the stack, not out of it.

## How It Connects to Context Engineering

Harness engineering doesn't replace context engineering — it sits on top of it. Context engineering provides the information layer; harness engineering provides the enforcement layer.

- **Context engineering says** "here's the relevant code, here's the style guide"
- **Harness engineering says** "and if you violate the style guide, the PR won't merge"

Progressive disclosure, compression, and instruction files (all context engineering concepts) are the *input* to a harness. The harness adds verification, guardrails, and observability as the *feedback* layer.

{: .try-it }
> Add one deterministic guardrail to your agent pipeline this week. A PreToolUse hook that blocks `DROP TABLE` in production. A CI check that runs a linter on every agent-generated PR. Start with enforcement, not advice — that's the harness mindset.

## Cross-References

- [Foundations](foundations.md) — the OS/CPU/RAM mental model: harness engineering is the OS kernel
- [Agentic Development](agentic-dev.md) — harness patterns for coding agents: CLAUDE.md as Layer 1, hooks as Layer 2+
- [Tool Layer](tool-layer.md) — tool design is a subset of harness design; intent-based tool selection belongs here
- [Verification](../verification/index.md) — the verification section covers agentic TDD, contract testing, and fitness functions — all harness concepts
- [Agent Patterns](../agent-patterns/index.md) — multi-agent coordination is a harness orchestration problem

---

## Learn on the go

- **Podcast:** [SE Radio 730 — Birgitta Boeckeler on Harness Engineering for AI Agents](https://se-radio.net/2026/07/se-radio-730-birgitta-boeckeler-on-harness-engineering-for-ai-agents/) *(July 22, 2026)*. The best single audio introduction to this page: the guides-versus-sensors decomposition, wiring harnesses into CI with SonarQube and Semgrep, and why you should start plain vanilla and add constraints only in response to real failures.
- **Read (short):** [Harness Engineering for Self-Improvement — Lilian Weng](https://lilianweng.github.io/posts/2026-07-04-harness/) *(July 4, 2026)*. The survey behind this page's self-improving harnesses section — the prompts → context → workflow → harness code → optimizer code ladder, ACE and MCE, and seven open challenges. Long, but the most rigorous treatment available.
- **Read (short):** [Why Software Factories Fail — Dex, HumanLayer](https://github.com/humanlayer/advanced-context-engineering-for-coding-agents/blob/main/wsff.md) *(July 2026)*. The counterargument this page now leads with, with the four planning phases laid out concretely. Read the [HN thread](https://news.ycombinator.com/item?id=49023019) alongside it — 272 comments, unusually high signal.
- **Hands-on:** [lopopolo/harness-engineering](https://github.com/lopopolo/harness-engineering) *(2026, 2.5k stars, CC BY 4.0)*. Ryan Lopopolo's own theses, playbooks, and evals, packaged as context bundles you can point an agent at directly — the primary source behind the OpenAI Codex harness work.
- **Course:** [Learn Harness Engineering — WalkingLabs](https://walkinglabs.github.io/learn-harness-engineering/en/) *(2026, free)*. The structured course version of this page — synthesizes the OpenAI and Anthropic material into exercises, with a minimal harness template to copy.
