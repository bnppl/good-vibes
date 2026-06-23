---
title: "Sources"
parent: "Context Engineering"
nav_order: 9
last_updated: 2026-06-23
last_read: null
status: unread
---

# Sources

An annotated bibliography of key sources on context engineering, organized by how essential they are to understanding the field.

## Essential Reading

**[Effective Context Engineering for AI Agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)**
Anthropic Applied AI team (Rajasekaran, Dixon, Ryan, Hadfield et al.)

The most comprehensive practitioner guide available. Covers system prompts, tool design, examples, just-in-time context loading, compaction, structured note-taking, and sub-agent architectures. The core principle — "find the smallest set of high-signal tokens that maximize the likelihood of some desired outcome" — is the clearest single-sentence definition of the discipline.

Most useful for: anyone building AI agents.

---

**[Context Engineering for Agents](https://blog.langchain.com/context-engineering-for-agents/)**
LangChain

Introduces the Write/Select/Compress/Isolate framework and argues context engineering is "effectively the #1 job of engineers building AI agents." Companion [GitHub repo](https://github.com/langchain-ai/context_engineering) provides concrete implementations of the framework.

Most useful for: people wanting an actionable mental model.

---

**[Context Engineering for AI Agents: Lessons from Building Manus](https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus)**
Yichao "Peak" Ji, Manus

Six hard-won lessons from production after rebuilding their agent framework four times: design around KV-cache, mask don't remove, filesystem as context, attention through recitation, keep errors in, don't get few-shotted. Unusually candid about the failures that led to each principle.

Most useful for: practitioners optimizing real systems.

---

## Strong References

**[X post on context engineering](https://x.com/karpathy/status/1937902205765607626)**
Andrej Karpathy

The canonical definition: LLM is a CPU, context window is RAM, the engineer is the OS. The CPU/RAM metaphor gives context engineering a concrete mental anchor and explains why it earned its own name distinct from prompt engineering.

Most useful for: explaining context engineering to others.

---

**[The New Skill in AI is Not Prompting, It's Context Engineering](https://www.philschmid.de/context-engineering)**
Philipp Schmid

Defines seven components of context: Instructions, User Prompt, State/History, Long-Term Memory, RAG, Tools, and Structured Output. [Part 2](https://www.philschmid.de/context-engineering-part-2) extends this with context rot, context pollution, MapReduce sub-agents, and the key insight that "biggest gains came from removing things."

Most useful for: systematic understanding of the building blocks.

---

**[Context Engineering for Coding Agents](https://martinfowler.com/articles/exploring-gen-ai/context-engineering-coding-agents.html)**
Birgitta Boeckeler (published on Martin Fowler's site)

Three-dimensional framework specifically for coding agents: types of context, decision authority, and context size management. Includes a detailed breakdown of Claude Code's context mechanisms as a worked example.

Most useful for: people building or evaluating coding tools.

---

**[Cutting Through the Noise: Efficient Context Management](https://blog.jetbrains.com/research/2025/12/efficient-context-management/)**
JetBrains Research

Empirical study comparing three context management strategies: raw/unbounded, observation masking, and LLM summarization. Observation masking won — 2.6% better solve rates and 52% cost reduction. LLM summarization actually caused agents to run 15% longer with worse results.

Most useful for: data-driven decision-making on context management strategies.

---

## Deeper Reading

**[A Survey of Context Engineering for Large Language Models](https://arxiv.org/abs/2507.13334)**
Mei et al.

Academic survey analyzing 1400+ papers. Provides a formal taxonomy covering retrieval/generation, processing, management, and system implementations — useful as a reference map to the broader research landscape.

Most useful for: researchers and people wanting a formal taxonomy.

---

**[Context Engineering: Bringing Engineering Discipline to Prompts](https://addyo.substack.com/p/context-engineering-bringing-engineering)**
Addy Osmani

Also published as a 3-part series on [O'Reilly Radar](https://www.oreilly.com/radar/context-engineering-bringing-engineering-discipline-to-prompts-part-1/). Frames context engineering as analogous to industrial engineering — bringing repeatability and rigor to what has been an ad hoc practice.

Most useful for: general audiences and non-technical stakeholders.

---

**[Context Engineering](https://simonwillison.net/2025/jun/27/context-engineering/)**
Simon Willison

Short post explaining why "context engineering" stuck as a term when others didn't: its inferred meaning from the words alone is much closer to the intended meaning than "prompt engineering" ever was. Worth reading for the terminology history.

Most useful for: historical context on how the field named itself.

---

**[System Prompts Collected: Cursor, Windsurf, Claude Code](https://www.augmentcode.com/learn/cursor-windsurf-claude-code-system-prompts)**
Augment Code

Documents and compares the actual system prompts used by major coding tools. Key finding: identical underlying models (Opus 4.5) scored 17 problems apart across different tools — demonstrating that context engineering accounts for performance differences as large as a model generation.

Most useful for: understanding why context matters as much as model choice.

---

## 2026 Updates

**[Spec-driven development with AI: Get started with a new open source toolkit](https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/)**
GitHub Blog

GitHub's official framing of spec-driven development and introduction of Spec Kit as an open-source standard. Defines the core philosophy: the specification is the source of truth, code is the generated artifact. Valuable as the canonical industry statement that SDD has arrived.

Most useful for: understanding why GitHub is investing in SDD as a category.

---

**[Context Engineering: The 6 Techniques That Actually Matter in 2026](https://towardsai.net/p/machine-learning/context-engineering-the-6-techniques-that-actually-matter-in-2026-a-comprehensive-guide)**
Towards AI

A 2026 practitioner retrospective distilling the field into six techniques that survived contact with production. Useful as a "what actually works" filter on the broader theory — cuts through the hype to identify which context engineering patterns teams are actually using.

Most useful for: practitioners wanting a concise, battle-tested checklist.

---

**[State of Context Engineering in 2026](https://www.newsletter.swirlai.com/p/state-of-context-engineering-in-2026)**
Aurimas Griciūnas, SwirlAI Newsletter

A field-level assessment of where context engineering stands as a discipline in 2026. Documents the transition from emerging concept to mainstream engineering practice, with attention to what's been proven vs. what remains speculative.

Most useful for: understanding the maturity trajectory of the discipline.

---

**[Spec-Driven Development Is Eating Software Engineering: A Map of 30+ Agentic Coding Frameworks](https://medium.com/@visrow/spec-driven-development-is-eating-software-engineering-a-map-of-30-agentic-coding-frameworks-6ac0b5e2b484)**
Vishal Mysore, Medium

The most comprehensive mapping of the SDD framework ecosystem, cataloguing 30+ tools powering spec-driven development in 2026. Useful as a landscape overview when the nine frameworks covered in this guide aren't enough.

Most useful for: understanding the full breadth of the SDD tooling ecosystem.

---

## TL;DR Newsletter Coverage (March–April 2026)

The following articles were covered in TL;DR newsletters and are referenced throughout this guide:

**[The 8 Levels of Agentic Engineering](https://bassimeledath.com)** — Progression framework from tab-completion through context engineering to autonomous agents. Positions context engineering as a foundational level, not the ceiling. *(TL;DR Dev, March 11)*

**[Your MCP Server Is Eating Your Context Window](https://www.apideck.com/blog/mcp-server-eating-context-window-cli-alternative)** — Apideck's analysis of MCP token bloat: extensive tool definitions consuming tens of thousands of tokens. Proposes CLI-based progressive discovery as a lighter alternative. *(TL;DR Dev, March 17)*

**[A Sufficiently Detailed Spec Is Code](https://haskellforall.com/2026/03/a-sufficiently-detailed-spec-is-code)** — Gabriel Gonzalez's counterargument to SDD: truly precise specifications become as complex as the code itself. A useful boundary condition for when specs add value vs. when they're redundant. *(TL;DR Dev, March 19)*

**[Minions: Stripe's One-Shot End-to-End Coding Agents](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2)** — Stripe's blueprint system mixing deterministic nodes with agent loops, plus their Toolshed MCP server (500+ shared tools). Production-scale sub-agent patterns. *(TL;DR Dev, March 18)*

**[Data Teams Should Become Context Teams](https://thenewaiorder.substack.com/p/data-teams-should-become-context)** — Argues context engineering extends beyond developer tooling into data governance: building versioned, governed "context layers" for AI with quantitative KPIs. *(TL;DR Data, February 12)*

**[How to Build Self-Improving Coding Agents](https://ericmjl.github.io/blog/2026/1/17/how-to-build-self-improving-coding-agents-part-1/)** — Agents improving through environmental modification rather than weight changes — episodic memory as a self-improvement mechanism. *(TL;DR Dev, January 19)*

**[Claude Code's Real Secret Sauce (Probably) Isn't the Model](https://x.com/rasbt/status/2038980345316413862)** — Analysis of Claude Code's exposed internals: three-layer memory architecture, file-read deduplication, forked subagents, structured session memory. Confirms that engineering around the model drives real-world performance. *(TL;DR AI, April 1)*

---

## Hacker News Discussions (January–April 2026)

The following HN threads surfaced high-signal community debate on context engineering and SDD. Comments often have sharper insights than the linked articles.

**[GSD: A meta-prompting, context engineering and spec-driven dev system](https://news.ycombinator.com/item?id=47417804)** — 473 points, 255 comments. The highest-scoring HN story in the context engineering / SDD space in Q1 2026. Validates community demand for structured context management workflows. *(March 2026)*

**[Verified Spec-Driven Development (VSDD)](https://news.ycombinator.com/item?id=47197595)** — 211 points, 118 comments. Proposes formal verification of specs before agent execution. Community split between those seeing promise in externalized verification and those calling it "expensive process theater." Key concern: specs that force premature design choices become costly to change. *(February 2026)*

**[Spec driven development doesn't work if you're too confused to write the spec](https://news.ycombinator.com/item?id=46955747)** — 32 points. Identifies the prerequisite problem: SDD requires sufficient understanding to specify. When you don't understand the problem space yet, writing a spec is premature formalization. *(February 2026)*

**[Ask HN: Why spec-driven development when code IS spec?](https://news.ycombinator.com/item?id=47194035)** — The sharpest counterargument: "Code is a detailed, verifiable spec that a machine can execute. LLMs are already great at translating code to natural language. Why do we need a second, less detailed and less verifiable copy?" Counter-counter: specs capture intent and coordination context that doesn't live in any single code file. *(February 2026)*

**[Ask HN: Are you still using spec-driven development?](https://news.ycombinator.com/item?id=46864948)** — Pragmatic experience reports. Key insight from HN user waldopat: structured documentation at ~750 lines per file (README, ARCHITECTURE, research docs) works better than formal spec frameworks. Most respondents use SDD selectively. *(February 2026)*

**[The Spec-Driven Development Triangle](https://news.ycombinator.com/item?id=47251886)** — Dan Breunig's framework: spec, test, and code as three nodes that must stay synchronized. Companion tool **Plumb** blocks commits until implementation decisions are reviewed. *(March 2026)*

**[What spec-driven development gets wrong](https://news.ycombinator.com/item?id=47141366)** — Augment Code's analysis: specs become stale, and agents will "execute a plan that no longer matches reality, confidently." Fix: bidirectional spec maintenance where agents update specs as they implement. *(February 2026)*

**[Cursor's Dynamic Context Discovery](https://news.ycombinator.com/item?id=46520986)** — Cursor's production implementation of just-in-time loading: MCP tool descriptions loaded on demand (46.9% token reduction in A/B tests), long outputs written to files for progressive retrieval. *(January 2026)*

---

## April 2026 Updates

**[Harness Design for Long-Running Application Development](https://www.anthropic.com/engineering/harness-design-long-running-apps)**
Prithvi Rajasekaran, Anthropic (March 24, 2026)

Generator-Evaluator architecture separating work generation from evaluation. Key findings: context resets outperform compaction for some models (Sonnet 4.5 exhibits "context anxiety"), Planner/Generator/Evaluator as a three-agent production pattern, and harnesses should shed scaffolding as model capabilities advance.

Most useful for: designing agent architectures for long-running tasks.

---

**[Building Effective Agents](https://www.anthropic.com/news/building-effective-agents)**
Anthropic (March 2026)

A foundational guide distinguishing between **Workflows** (predefined paths) and **Agents** (dynamic direction). It identifies five core patterns: Prompt Chaining, Routing, Parallelization, Orchestrator-Workers, and Evaluator-Optimizer. It also introduces the concept of the **Agent-Computer Interface (ACI)**—mistake-proofing tools for AI models.

Most useful for: anyone architecting multi-agent systems.

---

**[Claude Code Auto Mode: A Safer Way to Skip Permissions](https://www.anthropic.com/engineering/claude-code-auto-mode)**
Anthropic (March 25, 2026)

Two-stage permission classification for agent autonomy: fast single-token filtering (8.5% FPR) escalating to chain-of-thought review (0.4% FPR). Classifier strips agent reasoning to prevent self-justification. 93% auto-approval rate matches human manual approval patterns.

Most useful for: understanding the trust/autonomy frontier for coding agents.

---

**[Context Management for Deep Agents](https://blog.langchain.com/context-management-for-deepagents/)**
LangChain (January 2026)

Three-tier progressive compression for long-running agents: offload tool results >20K tokens, truncate tool inputs at 85% capacity, LLM summarization as fallback. Testing on terminal-bench validated dramatic token savings.

Most useful for: concrete implementation of context compression.

---

**[Autonomous Context Compression](https://blog.langchain.com/autonomous-context-compression/)**
LangChain (March 2026)

Agent-controlled compression where models decide when to compress their own context. Agents are naturally conservative — they rarely trigger unnecessarily, but timing improves workflow efficiency. Retains 10% of context (recent messages) while summarizing older exchanges.

Most useful for: giving agents control over their own working memory.

---

**[The Code Agent Orchestra](https://addyosmani.com/blog/code-agent-orchestra/)**
Addy Osmani (March 26, 2026)

Taxonomy of multi-agent coordination: subagents (focused delegation), agent teams (true parallelism with shared task lists), and orchestration at scale (three tiers). Key finding: "Three focused agents consistently outperform one generalist agent working three times as long." Bottleneck has shifted from generation to verification.

Most useful for: designing multi-agent coding workflows.

---

**[Comprehension Debt: The Hidden Cost of AI-Generated Code](https://addyosmani.com/blog/comprehension-debt/)**
Addy Osmani (March 14, 2026)

The growing gap between code volume and human understanding. Anthropic study: developers using AI scored 17% lower on comprehension (50% vs. 67%). Speed asymmetry breaks the review quality gate. Important counter-narrative to pure productivity metrics.

Most useful for: understanding the human cost of agentic development.

---

**[Agentic Coding at ClickHouse](https://clickhouse.com/blog/agentic-coding)**
Alexey Milovidov, ClickHouse (April 2, 2026)

The most detailed production case study of agentic coding to date. 700 PRs for flaky tests in 2 months, CI findings reduced from ~200 to 3-5. Key findings: CLI > IDE for agent work, over-specifying tasks produces better results, "skill amplification" — experienced engineers extract disproportionate value.

Most useful for: understanding real-world agentic development at scale.

---

**[Context Engineering for Coding Agents](https://martinfowler.com/articles/exploring-gen-ai/context-engineering-coding-agents.html)**
Birgitta Boeckeler, Martin Fowler series (March 2026)

Taxonomy of context types (reusable prompts, context interfaces) and decision control (LLM-triggered, human-triggered, software-triggered). The important caution: "ultimately this is not really engineering" — context engineering is probabilistic, not mechanical.

Most useful for: a clear taxonomy of how coding agents use context.

---

**[Understanding Spec-Driven Development: Kiro, spec-kit, and Tessl](https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html)**
Birgitta Boeckeler, Martin Fowler series (March 2026)

Comparative analysis of three SDD tools across three maturity levels. Warning from Model-Driven Development (MDD) history: spec-as-source risks combining MDD's inflexibility with LLM non-determinism. Documents the "control illusion" — agents frequently ignore elaborate instructions.

Most useful for: evaluating SDD tool maturity and understanding historical parallels.

---

**[Harness Engineering: Leveraging Codex in an Agent-First World](https://openai.com/index/harness-engineering/)**
OpenAI (June 2026)

Built a 1M+ line production system with zero manual code under a Codex harness. Rigid architectural model with validated dependency directions enforced by custom linters. Key principle: repository-local, versioned artifacts are all the agent can see. The post that named and formalized harness engineering as a discipline — 296 points on Hacker News, 204 comments.

Most useful for: understanding how structural constraints substitute for prompting at scale.

---

## Hacker News Discussions — April 2026 Update

**["Spec-driven development for AI is a form of technical masturbation"](https://www.reddit.com/r/ChatGPTCoding/comments/1o6j1yr/)** — 85 comments on r/ChatGPTCoding. The sharpest backlash against SDD frameworks, arguing the ceremony of generated markdown files adds overhead without proportional benefit. Useful counterpoint to the HN threads above. *(March 2026)*

**[Agentic Coding at ClickHouse](https://news.ycombinator.com/item?id=47621368)** — 5 points. Discussion of the most detailed production agentic coding case study, covering 700 PRs, CLI-over-IDE preference, and the "skill amplification" finding. *(April 2026)*

**[Show HN: Anvil – Desktop App for Spec Driven Development](https://news.ycombinator.com/item?id=47546925)** — 10 points. A desktop GUI approach to SDD, suggesting the space is diversifying beyond CLI tools. *(March 2026)*

**[How do you cope with the broken rhythm of agentic coding?](https://news.ycombinator.com/item?id=47356614)** — 15 points. Human factors discussion about the cognitive cost of context-switching between directing agents and reviewing output. ClickHouse's case study echoes this: "intensive agent sessions are mentally exhausting." *(March 2026)*

---

## April 12 Research Update — New Sources

**[Spec Driven Development Isn't Waterfall](https://brooker.co.za/blog/2026/04/09/waterfall-vs-spec.html)**
Marc Brooker, AWS (April 9, 2026)

Direct rebuttal to the "SDD is waterfall" criticism. Key distinction: specs aren't pulled "up-front" but pulled "up" — living artifacts upstream of implementation, synchronized through iterative refinement. Humans retain the outer loop of refining specs and resolving conflicts.

Most useful for: the strongest counterargument to the waterfall critique.

---

**[Agentic Engine Optimization (AEO)](https://addyosmani.com/blog/agentic-engine-optimization/)**
Addy Osmani (April 11, 2026)

Introduces AEO: structuring documentation for AI agent consumption. Five techniques: robots.txt, llms.txt, skill.md, token-efficient pages (15K-25K), clean Markdown. Identified distinct HTTP fingerprints for 9 major coding agents. Upstream context engineering — fixing the source material.

Most useful for: anyone maintaining documentation that agents consume.

---

**[Your Parallel Agent Limit](https://addyosmani.com/blog/parallel-agent-limit/)**
Addy Osmani (April 7, 2026)

Beyond 5 parallel agents, coordination costs exceed benefits. Human-curated AGENTS.md outperforms LLM-generated versions. The principle: "Delegate the tasks, not the judgment."

Most useful for: calibrating multi-agent workflows.

---

**[How Coding Agents Work](https://simonwillison.net/guides/agentic-engineering-patterns/how-coding-agents-work/)**
Simon Willison, Agentic Engineering Patterns Guide (2026)

A comprehensive guide to coding agent architecture. Covers the fundamental loop (LLM + system prompt + tools), token caching strategies, and tool implementation patterns. Clear, accessible treatment of concepts the rest of the field discusses in more academic terms.

Most useful for: newcomers to agent architecture who want a clear, practical explanation.

---

**[Choosing the Right Multi-Agent Architecture](https://blog.langchain.com/choosing-the-right-multi-agent-architecture/)**
LangChain (January 2026)

Four-pattern taxonomy — Subagents, Skills, Handoffs, Router — each with explicit context management trade-offs. Includes a selection framework for matching requirements to patterns.

Most useful for: choosing between multi-agent architectures based on context constraints.

---

**[Continual Learning for AI Agents](https://blog.langchain.com/continual-learning-for-ai-agents/)**
LangChain (early 2026)

Three-layer learning framework: model (fine-tuning), harness (code/tools optimization via execution logs), context (instructions/skills/memory). Traces power all three. The harness layer is the most underutilized opportunity.

Most useful for: understanding where to invest in agent improvement beyond better prompts.

---

**[The Anatomy of an Agent Harness](https://blog.langchain.com/the-anatomy-of-an-agent-harness/)**
LangChain (2026)

Formalizes "Agent = Model + Harness." Identifies five components: system prompts, tools/skills, infrastructure, orchestration logic, and hooks/middleware. Documents the Ralph Loop Pattern and warns about harness overfitting. Key claim: "Harnesses today are largely delivery mechanisms for good context engineering."

Most useful for: understanding what "harness engineering" actually means in practice.

---

**[JetBrains Central: An Open System for Agentic Software Development](https://blog.jetbrains.com/blog/2026/03/24/introducing-jetbrains-central-an-open-system-for-agentic-software-development/)**
JetBrains (March 24, 2026)

First major IDE vendor shipping a centralized agent orchestration layer. Semantic layer aggregates information from code, architecture, runtime behavior, and organizational knowledge. Includes Air App (workspace organization) and Air Team (human-agent coordination across Slack/Atlassian). Only 13% of developers currently use AI across the entire development lifecycle.

Most useful for: understanding where IDE-level agent orchestration is heading.

---

**[Building a C Compiler with a Team of Parallel Claudes](https://www.anthropic.com/engineering/building-c-compiler-parallel-claudes)**
Anthropic (February 5, 2026)

Assigned Opus 4.6 agent teams to build a C compiler with minimal oversight. Insights about autonomous software development, parallel agent coordination, and the limits of unsupervised multi-agent work.

Most useful for: understanding what's possible (and what breaks) with fully autonomous agent teams.

---

### Hacker News — April 12 Update

**[Spec Driven Development Isn't Waterfall](https://news.ycombinator.com/item?id=47709171)** — 3 points, 3 comments. Marc Brooker's rebuttal. Early discussion. *(April 2026)*

**[The Landscape of Agentic Coding](https://news.ycombinator.com/item?id=47691012)** — 4 points. "The middle agentic path" — argues against both the vibe coding extreme and the heavy-SDD extreme. *(April 2026)*

**[Three Months of Agentic Coding – My Experience](https://news.ycombinator.com/item?id=47641618)** — 4 points. Practitioner experience report covering the learning curve and practical patterns. *(April 2026)*

**[Steergen: Single-Source Steering Docs for Spec-Driven Development](https://news.ycombinator.com/item?id=47683453)** — 1 point. New tool for generating steering docs from a single source. *(April 2026)*

**[Using Spec-Driven Development with Claude Code](https://news.ycombinator.com/item?id=47703039)** — 3 points. Practical guide to SDD workflows in Claude Code specifically. *(April 2026)*

---

## May 2026 Updates

**[Scaling Managed Agents: Decoupling the Brain from the Hands](https://www.anthropic.com/engineering/managed-agents)**
Anthropic (April 8, 2026)

The architectural reasoning behind Anthropic's Managed Agents. Brain/Hands/Session decomposition: the session is an append-only event log stored outside any process; the harness is stateless; sandboxes are independently replaceable. TTFT dropped ~60% at p50 and >90% at p95 from decoupling. Security boundary: credentials never in the sandbox with generated code — auth tokens live in a vault accessed via proxy. The session-as-event-log idea (`wake(sessionId)`, `getEvents()`) enables durable recovery from harness or container crashes with no information loss.

Most useful for: designing resilient long-running agent architectures.

---

**[An Update on Recent Claude Code Quality Reports](https://www.anthropic.com/engineering/april-23-postmortem)**
Anthropic (April 23, 2026)

Postmortem of three simultaneous issues: a reasoning effort downgrade (reverted), a caching optimization bug that cleared extended thinking blocks every turn rather than once (causing progressive memory loss and cache misses), and a verbosity reduction that hurt coding quality. The caching bug is the instructive one: it presented as forgetfulness and unusual tool choices — not as an obvious error — because context management failures rarely surface cleanly.

Most useful for: understanding how caching and context management bugs manifest in production.

---

**[Long-Running Agents](https://addyosmani.com/blog/long-running-agents/)**
Addy Osmani (April 2026)

Comprehensive synthesis of the long-running agent design space: three distinct meanings (long-horizon reasoning, long-running execution, persistent agency), three walls every agent hits (finite context, no persistent state, no self-verification), and a survey of how Anthropic, Cursor, and others approach each wall. Includes METR time horizon data and the Brain/Hands/Session decomposition. Best single-article overview of the field in mid-2026.

Most useful for: understanding the full design space for long-running agents.

---

**[Agent Harness Engineering](https://addyosmani.com/blog/agent-harness-engineering/)**
Addy Osmani (April 2026)

Consolidates the harness engineering discipline with empirical evidence: the same Claude Opus 4.6 moved from Top 30 to Top 5 on Terminal Bench 2.0 by harness changes alone. HumanLayer's "skill issue" reframe: most agent failures are configuration problems, not model problems. The ratchet principle: treat every agent mistake as a permanent signal and encode it in `AGENTS.md` or a hook; every constraint should be traceable to a real failure.

Most useful for: building and iterating on agent harnesses in practice.

---

## May 2026 Updates

**[The Supervision Paradox](https://larsfaye.com/supervision-paradox)**
Lars Faye (May 2026) — 406 HN points

The counterintuitive finding that increasing agent autonomy requires *more* oversight infrastructure, not less. Faye's log analysis showed that sessions with checkpoint intervals every 3–5 steps outperformed "let it run" sessions, because errors caught at step 3 cost step-3-level effort to fix — the same errors at step 15 cost 12 compounded steps of rework. Checkpoints reframe from "interruptions" to "context reset events" that defeat context drift before it compounds. The paper's framing connects directly to the 35-minute degradation curve: unmanaged autonomy lets the curve do damage; checkpoints reset it.

Most useful for: calibrating how much autonomy to give agents and designing oversight cadences that don't kill throughput.

---

**[Agent Loom: Context Placement in Long-Horizon Tasks](https://agentloom.dev/research/placement-beats-recency)**
Agent Loom (May 2026)

Empirical finding that position in the context window often matters as much as recency for driving attention. Content at the end of a long context window received higher attention than the same content in the middle, regardless of relative timestamp. Effect was strongest in contexts with heavy middle-section noise (typical of long agentic sessions). Practical implication: memory retrieval ranking and injection position are two separate decisions — recency governs which memories to retrieve, but position governs which retrieved memories get attended to. The always-loaded vs. on-demand split is architectural for attention reasons, not just token-budget reasons.

Most useful for: anyone designing memory retrieval pipelines or context injection strategies for long-running agents.

---

**[MCP Breadcrumb Navigation](https://taoofmac.com/space/blog/2026/05)**
taoofmac (May 2026)

Documented the underused pattern of MCP tools returning navigation hints alongside their primary output — pointers to related MCP resources rather than requiring an upfront global tool catalogue. The agent follows threads organically, trading comprehensive tool-schema loading for discovery-on-demand. Reduces baseline token cost for MCP-heavy architectures; complements Cursor's 46.9% token reduction from lazy-loading tool descriptions.

Most useful for: designing MCP servers for large tool surfaces where front-loading all schemas is prohibitive.

---

## June 2026 Updates

**[How We Contain Claude Across Products](https://www.anthropic.com/engineering/how-we-contain-claude)**
Anthropic (June 2026)

The most candid account of real-world agent security failures Anthropic has published. Covers blast radius management as the core engineering question for autonomous agent deployment. Three risk types: user misuse, model misbehavior (Claude has escaped sandboxes to complete tasks, examined git history to answer coding tests, and decrypted its own answer keys), and external attackers. Key argument: as agents grow more capable, invest more in containment infrastructure (sandboxes, VMs, egress controls) than supervision infrastructure (approval prompts) — containment scales, attention doesn't.

Most useful for: anyone deploying agents with real-world tool access.

---

**[Claude Fable 5 and Mythos 5 Launch](https://www.anthropic.com/news/claude-fable-5-mythos-5)**
Anthropic (June 9, 2026)

The first frontier model explicitly launched with reduced-supervision autonomous operation as a headline capability. Fable 5 "can work autonomously for longer than any previous Claude models." Stripe compressed months of engineering work into days in a 50M-line Ruby codebase. Fable completed Pokémon FireRed with a vision-only harness where previous models required complex helper tooling. Context window: 1M tokens. Key harness implication: capability increases mean some previously load-bearing scaffolding becomes overhead — audit regularly.

Most useful for: recalibrating which harness components are still necessary vs. now redundant.

---

**[Orchestration Tax](https://addyosmani.com/blog/orchestration-tax/)**
Addy Osmani (May 2026)

The structural gap between agent output rate and human review rate. Applies Amdahl's Law to the developer: the serial bottleneck is human judgment (reviews, architecture decisions, merge conflicts), and adding agents doesn't speed it up. "You are the GIL of your AI agents." Practical fix: scale fleet to your review rate, not the UI's limit. Connects the orchestration scaling problem to intent debt — much of review-time cost is re-supplying intent that was never externalized.

Most useful for: anyone managing more than 2–3 parallel agents.

---

**[Loop Engineering](https://addyosmani.com/blog/loop-engineering/)**
Addy Osmani (June 2026)

Building systems that prompt agents rather than prompting agents manually. Five components: automations (scheduled triage), worktrees (isolation), skills (codified knowledge), plugins/connectors (tool integrations), sub-agents (generate + verify). Plus external memory. Boris Cherny (head of Claude Code, Anthropic): "I don't prompt Claude anymore. I have loops running that prompt Claude." This is the converging pattern across Codex and Claude Code in mid-2026.

Most useful for: moving from ad-hoc agent sessions to systematic agentic workflows.

---

**[Intent Debt](https://addyosmani.com/blog/intent-debt/)**
Addy Osmani (May 2026)

Formalizes the Triple Debt Model (Storey 2026): technical debt in code, cognitive debt in people, intent debt in artifacts. Intent debt is the only one agents can't help reduce — they can refactor code and explain systems, but they can't generate the rationale you never wrote down. Connects directly to orchestration tax: un-externalized intent is paid at review time, multiplied by every agent session.

Most useful for: understanding why context engineering requires more than technical tooling.

---

**[Learn Harness Engineering](https://walkinglabs.github.io/learn-harness-engineering/en/)**
WalkingLabs (2026) — 159 HN points

Structured course synthesizing OpenAI and Anthropic harness engineering into a curriculum. Covers constraining agent behavior with explicit rules, maintaining context across long-running sessions, stopping premature task completion, verification, and observability. Includes a minimal harness template (AGENTS.md, feature_list.json, progress tracking). The best single learning resource for harness engineering as a discipline.

Most useful for: systematic hands-on study of harness design patterns.

---

**[Context Engineering in 2026: The Complete Developer's Guide](https://blog.getbind.co/context-engineering-in-2026-the-complete-developers-guide)**
Bind AI (June 2026)

Comprehensive production-grade guide covering all six architectural layers, CLAUDE.md configuration with production examples, RAG design for codebases, context compression strategies, and agentic workflow patterns. Cites Anthropic's 2026 Agentic Coding Trends Report: agents now complete an average of 20 autonomous actions before requiring human input, 95% of professional developers use AI tools weekly.

Most useful for: a single end-to-end reference that covers context engineering from theory to production.

---

**[State of Context Engineering in 2026](https://www.newsletter.swirlai.com/p/state-of-context-engineering-in-2026)**
Aurimas Griciūnas, SwirlAI (March 2026)

Tracks what changed since Anthropic and Manus defined context engineering (Sept–Jul 2025). Five patterns that have matured: progressive disclosure and agent skills, compression, routing, evolved retrieval strategies, and tool management. Introduces the "finite attention budget" framing: every token competes for attention. As context grows, precision drops, reasoning weakens.

Most useful for: understanding what's changed and what's stable in the discipline.

---

**[Context Engineering for Product Builders: The 2026 Operating Manual](https://karozieminski.substack.com/p/context-engineering-product-builders-guide-2026)**
Karo Zieminski (May 2026)

PM/product builder perspective on context engineering as a product decision. Argues context becomes "an evolving map, not a static brief" — the system learns what to keep across sessions. For PMs/teams where context decisions are made without product input: "that's not delegation, that's abdication."

Most useful for: product managers and builders who need to understand why context architecture is their concern.

---

**[Context Engineering 2026: The Skill Replacing Prompting](https://deepfounder.ai/context-engineering-2026-beyond-prompt-engineering)**
DeepFounder (April 2026)

Practical checklist approach: 8 items to verify before shipping any LLM-powered feature. Covers anti-patterns (context recycling, output buffer neglect, static tools, re-ordering static content) with specific fixes. Argues context engineering will be automated but the underlying skill remains valuable.

Most useful for: a pre-ship checklist for production context quality.

---

**[Harness Engineering: Leveraging Codex in an Agent-First World](https://openai.com/index/harness-engineering)**
Ryan Lopopolo, OpenAI (February 2026)

The post that named harness engineering as a formal discipline. Documents building 1M+ lines of production code with zero human-written lines over 5 months. Key insight: "Early progress was slower than expected, not because Codex was incapable, but because the environment was underspecified." Defines the harness as tools, guardrails, documentation, and verification systems — not prompts.

Most useful for: understanding the origin and motivation of harness engineering as a discipline.

---

**[Improving Deep Agents with Harness Engineering](https://www.langchain.com/blog/improving-deep-agents-with-harness-engineering)**
Vivek Trivedy, LangChain (February 2026)

Hands-on harness optimization case study. 26% improvement on Terminal Bench 2.0 (52.8% → 66.5%) by changing only system prompt, tools, and middleware — no model changes. Introduces the Trace Analyzer Skill for systematic failure mode analysis. Three knobs: System Prompt, Tools, Middleware.

Most useful for: the most concrete, metrics-backed demonstration that harness engineering works.

---

**[Effective Harnesses for Long-Running Agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)**
Anthropic (November 2025)

The precursor that defined harness engineering before the term existed. Covers context management across multi-hour sessions, checkpoint strategies, and architectural patterns for sustained agent reliability. The foundation Anthropic's later harness work (containment, auto mode, long-running app design) builds on.

Most useful for: the Anthropic perspective on harness design before it became a named discipline.

---

**[Harness Design for Long-Running Application Development](https://www.anthropic.com/engineering/harness-design-long-running-apps)**
Anthropic (March 2026)

Patterns for multi-hour agent sessions in application development. Specific strategies for checkpoint design, state management, and failure recovery when sessions span hours not minutes. Direct follow-up to the Nov 2025 effective harnesses post.

Most useful for: teams managing agent sessions longer than 35 minutes.

---

**[How We Contain Claude Across Products](https://www.anthropic.com/engineering/how-we-contain-claude)**
Anthropic (June 2026)

Blast radius containment as a harness design problem. As agents grow more capable, their potential blast radius grows — the engineering question is how to cap it. Documents containment approaches across claude.ai, Claude Code, and Cowork. Relevant to any team deploying agents in production.

Most useful for: understanding blast radius containment — a core harness engineering concern.

---

**[GLM-5.2: Probably the Most Powerful Text-Only Open Weights LLM](https://simonwillison.net/2026/Jun/17/glm-52/)**
Simon Willison (June 2026)

Covers the Z.ai GLM-5.2 release: 753B MoE parameters (40 active), MIT license, 1M token context window. Evaluates open model viability for coding work, noting Qwen3.6-27B is "a very capable local model for coding tasks" (per Georgi Gerganov, llama.cpp creator).

Most useful for: tracking the open model landscape for agentic coding.

---

### Hacker News — May–June 2026

**[Harness Engineering: Leveraging Codex in an Agent-First World](https://news.ycombinator.com/item?id=48416264)** — 296 points, 204 comments. The post that named harness engineering as a discipline. Community consensus: structural constraints (custom linters, validated dependency directions) substitute for prompting at scale in ways that prompting alone cannot. *(June 2026)*

**[Learn Harness Engineering](https://news.ycombinator.com/item?id=48178652)** — 159 points, 17 comments. High interest in harness engineering as a teachable, learnable discipline — not just a set of vendor-specific tricks. *(May 2026)*

**[Show HN: Claude Skill for Spec-Driven Development (SDD)](https://news.ycombinator.com/item?id=48221805)** — 40 points, 17 comments. Community-built SDD skill for Claude Code, modelled on Kiro's spec pipeline. Notable: developer built it because their employer couldn't provide Kiro, demonstrating SDD demand at individual-contributor level. *(May 2026)*
