---
title: Learning Plan
nav_order: 6
last_updated: 2026-04-27
last_read: null
status: unread
---

# Learning Plan: Context Engineering & Spec-Driven Development

**How to use this:** Open this vault in Obsidian mobile. Work through one session per sitting — each is designed for ~15 minutes of reading plus a quick action step you can do from your phone. Check off sessions as you complete them.

**Reading order matters.** The context engineering guide builds on itself — foundations first, then layers, then the deep dive. The frameworks section is modular and can be read in any order after Session 6.

**What's new (April 27, 2026):** Module 4 added — **Cross-Session Verification** (8 sessions, S22–S29). Direct response to the cross-session regression problem: how to gain confidence AI-generated code is correct *without reading all of it*, and how to prevent a feature added in one agent session from silently breaking something built in a previous session. Covers BDD as the agent's contract surface, DDD bounded contexts as session boundaries, consumer-driven contracts (Pact + ACL), architectural fitness functions, mutation/property-based testing, and characterization tests + the verification handoff problem.

**Previous update (April 12, 2026):** Research update across 7 files. New content marked with **(New — April 12 research)** throughout. Key additions: Agentic Engine Optimization / AEO (Osmani — structuring docs for AI agents), LangChain's four multi-agent architecture patterns with context trade-offs, parallel agent limit (>5 agents = diminishing returns), LangChain's continual learning framework (model/harness/context layers), Agent Skills format as industry standard (adopted by OpenAI, Google, GitHub, Cursor), Marc Brooker's "SDD Isn't Waterfall" rebuttal, tool count constraints (OpenAI: <20 tools, accuracy degrades past 10), JetBrains Central as first IDE-vendor agent orchestration layer. 9 new annotated sources + 5 new HN threads added.

**Previous update (April 4, 2026):** Harness engineering as a discipline, LangChain's three-tier compression and autonomous context compression, Osmani's multi-agent taxonomy and "comprehension debt," ClickHouse's production case study (700 PRs, skill amplification), Claude Code auto mode, MDD parallel warning for SDD, and the SDD backlash thread. 10 annotated sources added.

---

## Phase 1: Foundations (Sessions 1-3)

### Session 1: What Is Context Engineering? ✅
**Read:** [index](context-engineering/index.md) then [foundations](context-engineering/foundations.md)
**Time:** ~12 min (~1,650 words)
**Key takeaway:** The three mental models — Karpathy's CPU/RAM metaphor, LangChain's Write/Select/Compress/Isolate, and Schmid's 7-component checklist. Plus: context engineering went mainstream in 2026 (QCon London, Agentic Conf Hamburg, multiple "state of" reports). The "8 Levels of Agentic Engineering" framework shows where context engineering sits in the progression — it's foundational, not the ceiling.

**Action:** Pick one AI tool you use regularly (Claude Code, Cursor, ChatGPT, etc.). Mentally map what's in its context window using Schmid's 7 components: which of the 7 does it use? Which are missing? Make a quick note.

---

### Session 2: The Instruction Layer ✅
**Read:** [instruction-layer](context-engineering/instruction-layer.md)
**Time:** ~12 min (~1,500 words)
**Key takeaway:** The ~50 instruction ceiling, and why examples beat rules. **New:** Boeckeler's taxonomy of context types (reusable prompts vs. context interfaces) and decision control (who decides what context to load). The important caution: context engineering is probabilistic, "not really engineering" — it increases odds but can't guarantee outcomes. **New (April 12):** Agent Skills format (Anthropic, Dec 2025) has become the industry standard for progressive disclosure — adopted by OpenAI, Google, GitHub, and Cursor within weeks. ~80 tokens at discovery, 275-8K on activation. Worth re-reading the new section.

**Action:** If you have a CLAUDE.md, .cursorrules, or AGENTS.md file in any project, open it and count the instructions. Are you over 50? Flag 3 that could be cut or moved to progressive disclosure. If you don't have one yet, draft 5 rules you'd want in one for your main project.

---

### Session 3: The Knowledge Layer ✅
**Read:** [knowledge-layer](context-engineering/knowledge-layer.md)
**Time:** ~12 min (~1,500 words)
**Key takeaway:** Just-in-time loading beats frontloading. Hybrid search is the right default. **New:** Cursor's "dynamic context discovery" is the most detailed production implementation — MCP tool descriptions loaded on demand (46.9% token reduction), long outputs written to files for progressive retrieval.

**Action:** Think about the last time an AI tool gave you a wrong answer about your codebase or domain. Was it a retrieval problem (didn't have the info), a context pollution problem (had too much info), or a grounding problem (hallucinated instead of citing)? Then consider: could just-in-time loading (like Cursor's approach) have helped?

---

## Phase 2: The Remaining Layers (Sessions 4-6)

### Session 4: The Tool Layer
**Read:** [tool-layer](context-engineering/tool-layer.md)
**Time:** ~12 min (~1,500 words)
**Key takeaway:** Tool descriptions are instructions. Mask, don't remove. **New:** MCP servers can consume tens of thousands of tokens just for tool schemas before any work begins (Apideck's analysis, TL;DR Dev March 2026). Stripe's Toolshed (500+ tools) shows the solution at scale is dynamic tool loading, not exposing everything. **New (April 12):** Hard numbers on tool count constraints — OpenAI recommends <20 tools per agent, accuracy degrades past 10, and a single complex JSON schema consumes 500+ tokens (90 tools = 50K tokens before any work begins).

**Action:** List the MCP servers or tools you have configured in your coding agent. Are any overlapping? Are any returning large outputs that could be truncated? Roughly estimate how many tokens your tool definitions alone consume.

---

### Session 5: The Memory Layer
**Read:** [memory-layer](context-engineering/memory-layer.md)
**Time:** ~14 min (~1,700 words)
**Key takeaway:** Structured belief-updates beat append-only logs. Memory is a claim about the past, not the present. **New:** Self-improving agents use episodic memory as a feedback loop. **New (April 12):** LangChain's continual learning framework — three layers of agent improvement (model, harness, context), all powered by traces. The harness layer (optimizing tools and orchestration via execution logs) is the most underutilized and immediately actionable.

**Action:** Check the memory system in a tool you use (e.g., Claude Code's MEMORY.md, ChatGPT's memory). Is it storing things it shouldn't? Is anything stale? Clean up one thing.

---

### Session 6: The Orchestration Layer ✅
**Read:** [orchestration-layer](context-engineering/orchestration-layer.md)
**Time:** ~22 min (~2,700 words)
**Key takeaway:** Observation masking beats LLM summarization. The 35-minute degradation curve means you should break work into sub-tasks. **New (April 4):** Harness engineering as a formal discipline (OpenAI's 1M-line zero-manual-code system, Anthropic's Generator-Evaluator pattern). LangChain's three-tier compression and autonomous context compression. "Context anxiety" — some models prematurely wrap up work as context fills; context resets fix this. Osmani's three-pattern taxonomy for multi-agent coordination: subagents, agent teams, orchestration at scale. **New (April 12):** LangChain's four-pattern multi-agent taxonomy (Subagents/Skills/Handoffs/Router) with explicit context management trade-offs per pattern. Parallel agent limit: beyond 5, coordination costs exceed benefits. Human-curated AGENTS.md outperforms LLM-generated. LangChain formalizes "Agent = Model + Harness" with 5-component taxonomy and the Ralph Loop Pattern.

**Action:** Think about your last long coding session with an AI agent. Did quality degrade toward the end? Estimate how long the session was. Next time, plan a compaction break or fresh agent at the 30-minute mark.

---

## Phase 3: Putting It Together (Session 7-8)

### Session 7: Agentic Development Deep Dive — Patterns
**Read:** [agentic-dev](context-engineering/agentic-dev.md) — through "Sub-Agent Patterns for Development" (first half)
**Time:** ~15 min (~1,500 words)
**Key takeaway:** The 6-step practical playbook, instruction file design, sub-agent patterns. **New:** Stripe's "Minions" system uses blueprints mixing deterministic nodes with agent loops. Cursor Bugbot's shift to agentic architecture produced the largest performance gains. LogRocket confirmed multi-agent setups work when tasks genuinely parallelize.

**Action:** Pick a real project you're working on. Walk through the 6-step playbook mentally:
1. Do you have an instruction file? Is it lean?
2. Do you write specs before implementation?
3. Do you break specs into sized tasks?
4. Do you use fresh agents or compaction breaks?
5. Do you persist progress to files?
6. Are you measuring anything?

Identify the weakest link. That's your first improvement.

---

### Session 8: Agentic Development Deep Dive — The SDD Debate & Production Reality
**Read:** [agentic-dev](context-engineering/agentic-dev.md) — from "Spec-Driven Development" through the end (second half)
**Time:** ~20 min (~2,400 words)
**Key takeaway:** The SDD debate is the most active discussion in the space right now, and the backlash is crystallizing. Key positions: the **SDD Triangle**, **"code IS spec"** counterargument, **MDD parallel warning** (Boeckeler: spec-as-source risks combining MDD's inflexibility with LLM non-determinism), and the **85-comment backlash thread** calling SDD frameworks "technical masturbation." **New (April 4):** ClickHouse's production case study (700 PRs, skill amplification), comprehension debt (Anthropic: 17% lower comprehension with AI), and Claude Code auto mode (93% auto-approval, two-stage classification). **New (April 12):** Marc Brooker's "SDD Isn't Waterfall" rebuttal — specs aren't pulled "up-front" but pulled "up," living artifacts upstream of implementation. The strongest counterargument to the waterfall critique to date.

**Action:** Where do you fall in the debate? Think about your last three projects:
- Would a spec have helped or been overhead for each?
- Did you hit the "too confused" problem where you couldn't specify upfront?
- Have you experienced the stale spec failure mode (agent executing outdated assumptions)?
- Are you noticing comprehension debt — code you generated but don't fully understand?

This tells you your personal SDD sweet spot.

---

## Phase 4: Frameworks Survey (Sessions 9-12)

These sessions survey spec-driven development tools. Read the index first, then the framework pages are grouped by theme. Each group fits in one session.

### Session 9: The SDD Landscape
**Read:** [index](frameworks/index.md)
**Time:** ~4 min (~440 words)
**Key takeaway:** The three maturity levels (spec-first, spec-anchored, spec-as-source), the rankings table, and the fact that the space has grown to 30+ frameworks — this guide covers the nine most significant.

**Action:** Look at the rankings table. Based on your own priorities (cost, ease of adoption, effectiveness), which 2-3 frameworks would you shortlist? Note them for the next sessions.

---

### Session 10: Purpose-Built SDD Tools (Part 1)
**Read:** [kiro](frameworks/kiro.md) then [github-spec-kit](frameworks/github-spec-kit.md)
**Time:** ~8 min (~1,000 words)
**Key takeaway:** Kiro uses a three-phase pipeline (requirements/design/tasks) with EARS notation. Spec Kit is agent-agnostic and open source with a Constitution pattern. GSD (473 points on HN — the highest-scoring post in this space in Q1 2026) bridges context engineering and SDD in a single system.

**Action:** Both tools structure requirements differently. Which approach appeals more to you — Kiro's formal EARS notation or Spec Kit's interconnected file approach? Consider which would fit your team's workflow.

---

### Session 11: Purpose-Built SDD Tools (Part 2)
**Read:** [tessl](frameworks/tessl.md) then [openspec](frameworks/openspec.md) then [augment-intent](frameworks/augment-intent.md)
**Time:** ~11 min (~1,350 words)
**Key takeaway:** Tessl is spec-as-source (most ambitious). OpenSpec is a universal standard. Augment Intent uses living specs with multi-agent orchestration. The HN community debate showed Augment's analysis of "what SDD gets wrong" (stale specs, agent blindness) is the most actionable critique — their bidirectional spec maintenance proposal directly addresses it.

**Action:** These three represent increasing ambition: universal standard, living docs, and full spec-as-source. Which maturity level is realistic for your current projects? What would need to change to move up one level?

---

### Session 12: Multi-Agent Frameworks & Others
**Read:** [metagpt](frameworks/metagpt.md) then [gpt-pilot](frameworks/gpt-pilot.md) then [smol-developer](frameworks/smol-developer.md) then [factory-droids](frameworks/factory-droids.md)
**Time:** ~13 min (~2,050 words)
**Key takeaway:** MetaGPT simulates a full software company. GPT Pilot adds TDD and context rewinding. Smol Developer is a learning starting point. Factory Droids is enterprise-grade.

**Action:** If you wanted to experiment with one multi-agent framework this month, which would it be? MetaGPT and GPT Pilot are open source and free to try. Smol Developer is the simplest starting point if you want to understand the mechanics before committing.

---

## Phase 5: Sources & Review (Session 13)

### Session 13: Deep Reading Selection
**Read:** [sources](context-engineering/sources.md)
**Time:** ~15 min (~2,500 words)
**Key takeaway:** Sources now include April 2026 updates — 10 new annotated entries covering harness engineering (OpenAI, Anthropic), context compression (LangChain), multi-agent patterns and comprehension debt (Osmani), ClickHouse production case study, and the SDD tools comparative analysis (Boeckeler/Fowler). The HN threads section now includes the SDD backlash discussion and the "broken rhythm of agentic coding" human factors thread.

**Action:** Pick one source from each tier to read this week:
- **Essential:** Anthropic's guide (if building agents), LangChain's framework (if wanting a mental model), Manus's lessons (if optimizing systems)
- **April 2026:** ClickHouse's agentic coding post (strongest production case study), or Osmani's comprehension debt (most important counter-narrative)
- **HN thread:** The VSDD thread (211 pts, 118 comments) for SDD's strengths and weaknesses, or the "broken rhythm" thread for human factors

---

## Module 2: Agent Architecture Patterns (Sessions 14-18)

### Session 14: The Agent Patterns Landscape
**Read:** [index](agent-patterns/index.md) then [single-agent](agent-patterns/single-agent.md)
**Time:** ~15 min (~1,750 words)
**Key takeaway:** The four core single-agent patterns — ReAct (reason-act-observe loop), plan-and-execute (separate planning from doing), reflection (self-critique before returning), and tool-use loops. ReAct is the default in most coding agents. Plan-and-execute is the pattern behind SDD. They combine: plan-and-execute + ReAct is the most common production stack.

**Action:** Think about your last 3 interactions with an AI coding agent. Which pattern was the agent running? Was it ReAct (exploring step by step), plan-and-execute (following a structured plan), or something else? Knowing which pattern you're working with changes how you prompt.

---

### Session 15: Multi-Agent Coordination
**Read:** [multi-agent](agent-patterns/multi-agent.md)
**Time:** ~15 min (~1,800 words)
**Key takeaway:** Orchestrator-worker accounts for ~70% of production multi-agent deployments. Anthropic's system outperformed single-agent by 90.2% using this pattern. The independence requirement for parallel agents is strict — hidden dependencies between "parallel" agents are the most common multi-agent failure. Osmani's key warning: "if you lose understanding of your own system, you have lost the ability to fix it."

**Action:** If you've used multi-agent features (Claude Code subagents, Cursor's parallel edits, or similar), did the agents work on truly independent tasks? If you haven't, identify one task from your current project that could be split into 2-3 genuinely independent subtasks.

---

### Session 16: The Autonomy Spectrum
**Read:** [autonomy](agent-patterns/autonomy.md)
**Time:** ~12 min (~1,450 words)
**Key takeaway:** Five levels from inline assistance to fully autonomous. Most enterprise deployments in 2026 are at Level 2 (plan-level approval). Level 5 isn't appropriate for production yet. "Bounded autonomy" is the leading pattern — clear limits, mandatory escalation, comprehensive audit trails. The error blast radius scales with autonomy level.

**Action:** What autonomy level are you personally operating at? Most developers are at Level 1-2 even when their tools support Level 3. Pick one low-risk task type (test generation, documentation, simple refactors) and try it at one level higher than your default this week.

---

### Session 17: Production Lessons
**Read:** [production](agent-patterns/production.md)
**Time:** ~13 min (~1,500 words)
**Key takeaway:** Production case studies from Anthropic (multi-agent research), Stripe (hybrid blueprints + Toolshed), Cursor (dynamic context discovery), and Claude Code (leaked architecture). The common thread: the best agent systems are hybrids — deterministic steps for predictable work, agents for reasoning. Not everything needs to be agentic.

**Action:** Review the production engineering checklist at the end of the page. How many items would you check off for your current AI setup? Which gaps are the most concerning?

---

### Session 18: Agent Patterns Sources
**Read:** [sources](agent-patterns/sources.md)
**Time:** ~8 min (~900 words)
**Key takeaway:** Three tiers of sources. Essential reading: Anthropic's "Building Effective Agents" (composable patterns), their multi-agent research system writeup, and Osmani's coding-specific analysis.

**Action:** Pick one essential source to read this week:
- **If building agents:** Anthropic's multi-agent research system writeup — the most detailed production account available
- **If using agents:** Osmani's "Code Agent Orchestra" — focused on what makes multi-agent coding work vs. fail
- **If evaluating tools:** Google Cloud's design pattern chooser — decision framework for matching patterns to tasks

---

## Module 3: Verification & Governance (Sessions 19-21)

### Session 19: Agentic TDD (Verification-First Development)
**Read:** [agentic-tdd](verification/agentic-tdd.md)
**Time:** ~15 min
**Key takeaway:** Tests are the new prompts. By 2026, professional AI-assisted development is defined by "Verification over Execution." If an agent generates code without a failing test, it's creating "Technical Debt at Industrial Speed."

**Action:** Pick a small feature. Write the test first (or have the agent write the test based on your spec), verify it fails, then command the agent: "Make this test pass." Do not provide any other implementation details.

---

### Session 20: Comprehension Debt & Cognitive Sustainability
**Read:** [comprehension-debt](verification/comprehension-debt.md)
**Time:** ~15 min
**Key takeaway:** The "17% Decline" in human understanding. Comprehension debt is invisible — tests stay green but the system becomes a black box. Master the **1-5 Rule** and the **"Explain the PR" Protocol**.

**Action:** Open your most recent AI-generated PR. Try to explain the "why" behind three specific architectural choices without looking at the code. If you can't, you have accumulated debt. Practice "Active Inquiry" by asking the agent to explain its reasoning for those choices.

---

### Session 21: ACI & Tool Engineering
**Read:** [tool-engineering](context-engineering/tool-engineering.md)
**Time:** ~15 min
**Key takeaway:** Poka-yoke tool design. You are no longer just a user of tools; you are an engineer of Agent-Computer Interfaces (ACI). Absolute paths, structured schemas, and deterministic feedback loops reduce agent errors by 40%+. **New (April 12):** Agentic Engine Optimization (AEO) — Osmani's framework for structuring documentation so AI agents can consume it efficiently. Five techniques: llms.txt, skill.md, token-efficient pages (15K-25K), clean Markdown. Identified 9 distinct agent HTTP fingerprints. Upstream context engineering for the docs your agents read.

**Action:** Audit one MCP server or tool you use. Is the schema overly complex? Are paths relative? Draft a "Poka-yoke" version of one tool definition that makes it structurally impossible for the agent to use it incorrectly.

---

## Module 4: Cross-Session Verification (Sessions 22-29)

Module 3 covered verification *within* a session — TDD, comprehension, ACI. Module 4 covers verification *across* sessions: the artifacts, contracts, and automated checks that catch regressions when one agent session breaks something a previous session built. The unifying claim: when reading the diff is no longer the load-bearing check, you need verification artifacts that fail loudly on their own.

### Session 22: The Cross-Session Regression Problem
**Read:** [cross-session-regression](verification/cross-session-regression.md)
**Time:** ~13 min (~1,500 words)
**Key takeaway:** Three failure shapes — **silent contract break** (interface compiles, behavior changes), **parallel re-implementation** (Session B doesn't find the existing utility, builds another), **invariant violation** (rule held in human memory, not in code). Reading the code doesn't scale because the broken caller, the duplicate utility, and the invariant are not in the diff. Context engineering raises the floor; verification installs the ceiling.

**Action:** Pick a feature you built across multiple agent sessions in the last month. List three specific places where a future session could silently break it. Tag each with which failure shape applies, and whether your current test suite would catch it.

---

### Session 23: BDD for Agents
**Read:** [bdd-for-agents](verification/bdd-for-agents.md)
**Time:** ~15 min (~1,800 words)
**Key takeaway:** A Gherkin scenario does two jobs at once — the spec the *current* session writes against, and the regression net the *next* session can't break. BDD pins behavior at the **feature boundary** (where cross-session damage actually accrues), not the unit boundary. Living documentation amortized across sessions is the lowest-cost form of cross-session memory available in 2026.

**Action:** Pick a recently-agent-built feature. After the fact, write 3 Gherkin scenarios capturing the intended behavior. Open a fresh agent session, give it only the scenarios, ask it to extend the feature. Note where the agent's interpretation diverges from yours.

---

### Session 24: DDD Bounded Contexts as Session Boundaries
**Read:** [ddd-boundaries](verification/ddd-boundaries.md)
**Time:** ~17 min (~2,000 words)
**Key takeaway:** **One bounded context, one agent session, one blast radius.** Context maps are what survives between sessions. Aggregates encode invariants the agent literally cannot violate. Ubiquitous language is the highest-ROI context-engineering primitive — when the domain model, code, scenarios, and human conversation all use the same words, the agent has no room to invent synonyms. Conway's law for agent topology: codebases mirror the session boundaries used to build them, whether you choose them or not.

**Action:** Sketch a context map for a real codebase (even informally). Identify two places where different agent sessions touched the same area. Were those areas in the same context (good) or crossing contexts (where you now want an ACL or contract)?

---

### Session 25: Anti-Corruption Layers & Consumer-Driven Contracts
**Read:** [contract-testing](verification/contract-testing.md)
**Time:** ~16 min (~1,900 words)
**Key takeaway:** The most direct mechanical answer to the cross-session regression problem. Session A built the provider on Monday; Session B builds a new consumer on Friday; Session B's contract is the trip-wire that catches whatever Session A assumed but never enforced. Pact for services; OpenAPI/schema-first as the lighter-weight version. PactFlow's MCP server (2026) makes this loop agent-native. Contracts are the only technique that fails the *consumer's* CI when the *provider* drifts.

**Action:** Pick two modules in your project that one agent built and another touched later. Write one consumer-driven contract test (or generate an OpenAPI schema and add a CI check). Wire it into CI.

---

### Session 26: Architectural Fitness Functions
**Read:** [fitness-functions](verification/fitness-functions.md)
**Time:** ~17 min (~2,000 words)
**Key takeaway:** Neal Ford's *Building Evolutionary Architectures* is the primary citation. Fitness functions are the only technique that catches the **invariant violation** failure shape directly: they move human-memory rules into CI, where the agent bounces off them. Three principles: agents will silently violate rules you hold in your head; fitness functions are codified institutional memory; humans author the rules, agents enforce them. Run them in pre-commit / pre-tool hooks where possible — CI is too late.

**Action:** Write one ArchUnit-style rule for your project (or the equivalent in your language). Pick one you're tired of catching in PR review. Add a `WHY` comment linking to the ADR. Watch the next agent session bounce off it.

---

### Session 27: Test-the-Tests — Mutation & Property-Based Testing
**Read:** [test-the-tests](verification/test-the-tests.md)
**Time:** ~15 min (~1,800 words)
**Key takeaway:** When the agent says "I added tests," do they catch anything? **Mutation testing** measures kill rate — the actual coverage metric, not line coverage. **Property-based testing** covers the input spaces the agent didn't enumerate. Both matter more in agentic dev because the test author and the code author are the same untrusted party. Anthropic's Red Team writeup (2026) shows agents now write surprisingly strong property tests *when asked specifically*; the arXiv NeurIPS paper found 56% of agent-generated bug reports valid across 100 Python packages.

**Action:** Run a mutation tester on a file an agent recently touched. The surviving mutants are the gaps the agent left. Then write one property-based test for a pure function — note the inputs Hypothesis generates that you'd never have enumerated.

---

### Session 28: Characterization Tests & The Handoff Problem
**Read:** [characterization-and-handoff](verification/characterization-and-handoff.md)
**Time:** ~17 min (~2,100 words)
**Key takeaway:** Two problems, same answer. Feathers-style characterization tests pin behavior before agents touch legacy: the agent's first task is "write tests until you can describe what this code does," only then modify. The handoff problem: verification artifacts are useless if the next session doesn't discover them — co-locate, point at them from `AGENTS.md`/`CLAUDE.md`, and use CI as backstop. Vercel's Jan 2026 eval: an 8KB AGENTS.md hit 100% pass on Next.js 16 API tasks vs. 79% for skills. Verification and context engineering are two halves of the same problem.

**Action:** Identify a legacy file you'd be afraid to let an agent touch. In one session, generate characterization tests with the agent. In a *fresh* session, give the agent only the tests and `AGENTS.md` and ask it to refactor. Each gap the second session reveals is a fitness function, contract, or scenario you should add.

---

### Session 29: Module 4 Sources & Deep Reads
**Read:** [sources](verification/sources.md)
**Time:** ~10 min (~2,800 words — reference, skim)
**Key takeaway:** Tiered bibliography. **Foundational books:** Ford *Building Evolutionary Architectures*, Adzic *Specification by Example*, Evans / Vernon DDD, Feathers *Working Effectively with Legacy Code*, Pact docs. **Essential 2025–2026:** Vercel's AGENTS.md eval, Golovko's DDD-for-agentic-codebases talk, Anthropic's PBT writeup, the arXiv NeurIPS PBT paper, PactFlow's MCP server, Castro's ADR-to-fitness-function pipeline. Plus Strong References, April 2026 Updates, and high-signal HN threads.

**Action:** Pick one Essential entry to read this week. If you only read one: Vercel's AGENTS.md eval — empirical, short, and the strongest argument for the verification handoff pattern.

---

## Summary

| Module | Sessions | Total Time | Focus |
|---|---|---|---|
| **1: Context Engineering** | | | |
| Foundations | 1-3 | ~34 min | Mental models, instructions, knowledge |
| Remaining Layers | 4-6 | ~34 min | Tools, memory, orchestration |
| Putting It Together | 7-8 | ~30 min | Agentic dev playbook + SDD debate |
| Frameworks Survey | 9-12 | ~36 min | 9 SDD tools compared |
| CE Sources & Review | 13 | ~10 min | Pick your next deep reads |
| **2: Agent Patterns** | | | |
| Single & Multi-Agent | 14-15 | ~30 min | Core reasoning loops + coordination |
| Autonomy & Production | 16-17 | ~25 min | Choosing the right level + real-world lessons |
| AP Sources & Review | 18 | ~8 min | Pick your next deep reads |
| **3: Per-Session Verification** | | | |
| TDD & Comprehension | 19-20 | ~30 min | Verification-first + Cognitive debt |
| ACI & Tool Eng | 21 | ~12 min | Mistake-proofing agent tools |
| **4: Cross-Session Verification** | | | |
| The problem + BDD + DDD | 22-24 | ~45 min | Failure shapes, scenarios as contracts, contexts as boundaries |
| Contracts + Fitness Functions | 25-26 | ~33 min | Catching breaks at module boundaries; codifying invariants in CI |
| Test-the-tests + Handoff | 27-28 | ~32 min | Verifying the safety net is real; making it discoverable to the next session |
| M4 Sources | 29 | ~10 min | Bibliography |
| **Total** | **29 sessions** | **~6.2 hours** | |

At one session per day, you'll finish in about 4 weeks. At two per day, about 2 weeks.

---

## Keeping It Fresh

Run `/study` in Claude Code to see what's unread or updated since your last session. Run `/study update` to pull in new developments from TL;DR, Hacker News, and the web. The guide's frontmatter tracks your reading progress automatically.
