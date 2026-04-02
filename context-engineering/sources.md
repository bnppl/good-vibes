---
last_updated: 2026-04-02
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
