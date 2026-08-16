---
title: "Agent Comparison"
parent: "Context Engineering"
nav_order: 9
last_updated: 2026-08-16
last_read: null
status: unread
---

# Open Models vs Proprietary Agents

{: .hook }
> **The best model is the one that fits your constraints — not the one with the highest benchmark.**

{: .in-short }
- **Open models** (DeepSeek, Llama, Qwen, Mistral): run locally or via cheap third-party providers. You own the data and the pipeline.
- **Proprietary models** (Claude, GPT-4o, Gemini): hosted APIs with polished tooling, reliability guarantees, and leading benchmark performance.
- **The tradeoff:** Open models give you privacy, customizability, and lower marginal cost. Proprietary models give you higher reasoning quality, lower engineering overhead, and someone else runs the infrastructure.

## At a Glance

| Dimension | Open Models | Proprietary (Claude/GPT/Gemini) |
|---|---|---|
| **Cost** | Cheap per-token (DeepSeek: ~$0.27/M input tokens) or free (local). CapEx for GPUs if self-hosting. | Claude 4 Opus: $15/M input tokens. Predictable OpEx. |
| **Privacy** | Full control. Run air-gapped. No data leaves your machine. | Your prompts and outputs go through a third-party API. Anthropic/OpenAI have data policies — but you're trusting them. |
| **Reasoning quality** | Catching up fast — DeepSeek v4 is competitive on many benchmarks. Still behind on nuanced multi-step reasoning, creative writing, and long-context tasks. | State of the art. Claude leads on coding and long-context reasoning. GPT leads on breadth. |
| **Tool use / function calling** | Improving but inconsistent. Often needs more explicit prompting to invoke tools correctly. | Mature, well-documented. Claude's tool use is particularly reliable. |
| **Context window** | Varies widely. DeepSeek V4: 1M (Pro/Flash). Llama 4 Scout: 10M, Llama 4 Maverick: 1M. GLM-5.2: 1M. Windows often exceed proprietary. | Claude: 200K. GPT-4o: 128K. Gemini: up to 2M. |
| **Fine-tuning** | Full control. Fine-tune on your codebase, your domain, your style. | Generally not available to individuals. Some enterprise options. |
| **Latency** | Fast if you have the GPUs. Local inference on consumer hardware means seconds-per-response for large models. Hosted open models (Together, Groq) can be very fast. | Consistent and reliable. Claude Sonnet is fast; Opus is deliberately slower. |
| **Reliability / Uptime** | On you. If you're self-hosting, you're the SRE team. Third-party providers offer SLAs. | 99.9%+ uptime SLAs. Someone else gets paged at 3am. |
| **Integration effort** | More work. You're configuring model servers, authentication, and API compatibility layers. | Drop-in. API keys, client libraries, done. |

## When to Use What

### Use proprietary models when:
- You need the highest reasoning quality and can't afford mistakes
- You're doing complex multi-step coding work (Claude Code's native model)
- You need mature tool use, image understanding, or structured output schemas
- You don't want to manage infrastructure
- Your data isn't sensitive enough to require air-gapping

### Use open models when:
- Privacy is non-negotiable (healthcare, finance, legal)
- You're shipping at scale and token costs matter more than marginal quality
- You need to fine-tune on proprietary domain knowledge
- You're building an offline-capable product
- You want vendor independence — no risk of API deprecation or pricing changes breaking your pipeline

### The hybrid approach:
Most teams land here. Use Claude/GPT for the hard reasoning steps and orchestrating complex tasks, and delegate bulk generation, classification, and high-volume tasks to cheaper open models. Think of it like CPU vs GPU — different workloads, different hardware.

## How Claude Code Supports Open Models

Claude Code itself isn't locked to Claude. It can be configured to use open models as the backend, either through:

- **Direct API compatibility:** Many open model providers (OpenRouter, Together, Groq) offer OpenAI-compatible endpoints that Claude Code can use
- **OpenCode integration:** Tools like OpenCode wrap Claude Code with open model support, translating between Claude's tool-use format and what the open model expects

{: .aha }
> **The wrapper matters as much as the model.** Claude Code's orchestration layer, agent loop, and tool infrastructure don't change — you're swapping the reasoning engine underneath.

{: .caution }
> **Tool use degrades with open models.** Claude's native tool-use format is tightly coupled to the model's training. When you swap in an open model, expect more prompt engineering to get reliable tool invocations, especially on multi-tool calls.

## Open Model Landscape: June 2026

The open model landscape is maturing rapidly on the coding front:

- **GLM-5.2** (Z.ai, June 2026): 753B MoE parameters, MIT license, 1M token context window. Simon Willison calls it "probably the most powerful text-only open weights LLM." Comparable to proprietary models on coding benchmarks.
- **Qwen3.6-27B** (Alibaba): Georgi Gerganov (llama.cpp creator) uses it daily for coding tasks on his M2 Ultra and RTX 5090. "A very capable local model for coding tasks." Runs with a lightweight harness — `pi -nc --offline` and a short system prompt.
- **Vicki Boykis** (Jun 2026): "Running local models is good now" — validates local models as viable for coding agent workflows. The gap between what's possible locally and what requires an API is shrinking month by month.

{: .aha }
> **Local models are now viable for real coding work.** The Qwen3.6-27B example shows the pattern: a lightweight harness + a concise system prompt + an offline-capable model = reliable daily use. The open model strategy is no longer theoretical.

## Long-Horizon Benchmarks and the Variance Problem **(New — August 2026)**

Two July 2026 results should change how you read every number on this page.

**Long-horizon benchmarks separate models that single-shot benchmarks don't.** SlopCodeBench (Gabe Orlanski's lab, UW Madison) reveals requirements incrementally across checkpoints — the model never sees the whole problem upfront and must evolve a codebase as new requirements arrive. Scoring is strict: a checkpoint passes only if all new tests *and* all inherited regression tests pass. HumanLayer's run found **Opus 5 at 24%** (4 of 17 checkpoints) against **6% for both Opus 4.8 and Sonnet 5** (1 of 17) — a four-fold gap that conventional benchmarks compress into a few points. The published paper's earlier numbers: Opus 4.6 at 17%, GPT-5.4 at 11%.

Two details matter more than the ranking. Opus 5 wrote **29,065 source lines** where the other models wrote about 9,000 — 51% of it tests, against 11–24% for the others. And complexity climbed across *every* model as checkpoints accumulated. Higher scores on long-horizon work currently come bundled with substantially more code, which is a maintainability cost this benchmark measures better than most but still doesn't score.

**Single benchmark runs are close to meaningless.** Dan Luu's July 2026 agentic coding notes documented **±7.5% run-to-run variation** for GPT-5.5 xhigh on the same task, with task-and-model combinations producing outright contradictory results across runs. Cost varied on the same scale — $12.45 versus $40.38 for the same optimization task depending on run. His conclusion is the one to carry into any model selection decision: variance is high enough that a single benchmark number tells you almost nothing, and "a reasonable setup around the model is at least as important as having the latest and greatest model."

{: .aha }
> **Run it more than once.** The Augment finding elsewhere in this guide — 17 problems' spread between tools running the identical model — is usually read as evidence that harness beats model. Luu's variance data adds a caveat: some of any measured spread is noise. If you're evaluating models or harnesses for your own team, run each configuration several times and look at the distribution, not the best run. A single head-to-head comparison is a coin flip dressed as evidence.

## Anti-Patterns

- **Benchmark shopping:** A model with the highest HumanEval score may be terrible at following instruction files or staying within a context budget. Test on your actual workload — and test it repeatedly, because run-to-run variance on identical tasks reaches ±7.5%.
- **Trusting a single run:** Related but distinct. Benchmark shopping picks the wrong metric; single-run trust picks the right metric and measures it once. Both produce confident conclusions from noise.
- **Gratuitous self-hosting:** Unless privacy or cost at scale demands it, running inference will cost you more in engineering time than API credits ever would.
- **Single-model purity:** Real pipelines already use multiple models. Claude for planning, a fast open model for codegen, a small classifier for routing. Don't optimize for one-model-to-rule-them-all.
- **Ignoring the wrapper:** When comparing open vs proprietary, people compare raw model outputs. But Claude Code, Cursor, and Copilot are products, not models — the agent loop, codebase indexing, and diffing infrastructure provide value independent of the model.

## Cross-References

- [Foundations](foundations.md) — the OS/CPU/RAM mental model: you're managing context, regardless of which model is consuming it
- [Agentic Development](agentic-dev.md) — patterns that work regardless of model choice
- [Tool Layer](tool-layer.md) — tool design gets twice as important when you're using open models with weaker tool-use capabilities
- [Orchestration Layer](orchestration-layer.md) — multi-model orchestration patterns

---

## Learn on the go

- **Podcast/Video:** [How I AI — Sonnet 5 review: I ran 64 generations to find out if it's worth it](https://www.lennysnewsletter.com/p/sonnet-5-review-i-ran-64-generations) *(June 30, 2026)*. Claire Vo builds a repeatable eval harness live with Claude Code and runs Sonnet 5 blind against Sonnet 4.6, Opus 4.8, GPT-5.5, and Gemini 3 Pro — the do-it-yourself version of this page's comparison methodology. The "64 generations" framing is the variance lesson above, arrived at independently.
- **Read (long):** [Agentic coding notes — Dan Luu](https://danluu.com/ai-coding/) *(July 2026)*. The source for this page's variance section, and the most careful benchmarking skepticism published this year. Also covers what he found actually works (fuzzing, randomized testing) versus what doesn't (default LLM test generation, "caveman mode" token reduction).
- **Hands-on:** [SlopCodeBench: benchmarking Opus 5](https://github.com/humanlayer/advanced-context-engineering-for-coding-agents/blob/main/benchmarking-opus-5-on-slop-code-bench.md) — HumanLayer *(July 27, 2026)*. Full methodology and per-checkpoint results for the long-horizon benchmark above. Reproducible — the harness and challenge definitions are in the same repo, so you can run your own model against it.
