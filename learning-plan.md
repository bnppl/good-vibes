# Learning Plan: Context Engineering & Spec-Driven Development

**How to use this:** Open this vault in Obsidian mobile. Work through one session per sitting — each is designed for ~15 minutes of reading plus a quick action step you can do from your phone. Check off sessions as you complete them.

**Reading order matters.** The context engineering guide builds on itself — foundations first, then layers, then the deep dive. The frameworks section is modular and can be read in any order after Session 6.

**What's new (April 2, 2026):** The guide now includes community debate from Hacker News (90-day lookback), TL;DR newsletter coverage, and production case studies (Stripe Minions, Cursor's dynamic context discovery, Claude Code's leaked architecture). The agentic dev page has nearly doubled in size with the SDD debate, SDD Triangle framework, and practitioner experience reports.

---

## Phase 1: Foundations (Sessions 1-3)

### Session 1: What Is Context Engineering?
**Read:** [[context-engineering/index]] then [[context-engineering/foundations]]
**Time:** ~12 min (~1,650 words)
**Key takeaway:** The three mental models — Karpathy's CPU/RAM metaphor, LangChain's Write/Select/Compress/Isolate, and Schmid's 7-component checklist. Plus: context engineering went mainstream in 2026 (QCon London, Agentic Conf Hamburg, multiple "state of" reports). The "8 Levels of Agentic Engineering" framework shows where context engineering sits in the progression — it's foundational, not the ceiling.

**Action:** Pick one AI tool you use regularly (Claude Code, Cursor, ChatGPT, etc.). Mentally map what's in its context window using Schmid's 7 components: which of the 7 does it use? Which are missing? Make a quick note.

---

### Session 2: The Instruction Layer
**Read:** [[context-engineering/instruction-layer]]
**Time:** ~10 min (~1,200 words)
**Key takeaway:** The ~50 instruction ceiling, and why examples beat rules.

**Action:** If you have a CLAUDE.md, .cursorrules, or AGENTS.md file in any project, open it and count the instructions. Are you over 50? Flag 3 that could be cut or moved to progressive disclosure. If you don't have one yet, draft 5 rules you'd want in one for your main project.

---

### Session 3: The Knowledge Layer
**Read:** [[context-engineering/knowledge-layer]]
**Time:** ~12 min (~1,500 words)
**Key takeaway:** Just-in-time loading beats frontloading. Hybrid search is the right default. **New:** Cursor's "dynamic context discovery" is the most detailed production implementation — MCP tool descriptions loaded on demand (46.9% token reduction), long outputs written to files for progressive retrieval.

**Action:** Think about the last time an AI tool gave you a wrong answer about your codebase or domain. Was it a retrieval problem (didn't have the info), a context pollution problem (had too much info), or a grounding problem (hallucinated instead of citing)? Then consider: could just-in-time loading (like Cursor's approach) have helped?

---

## Phase 2: The Remaining Layers (Sessions 4-6)

### Session 4: The Tool Layer
**Read:** [[context-engineering/tool-layer]]
**Time:** ~11 min (~1,350 words)
**Key takeaway:** Tool descriptions are instructions. Mask, don't remove. **New:** MCP servers can consume tens of thousands of tokens just for tool schemas before any work begins (Apideck's analysis, TL;DR Dev March 2026). Stripe's Toolshed (500+ tools) shows the solution at scale is dynamic tool loading, not exposing everything.

**Action:** List the MCP servers or tools you have configured in your coding agent. Are any overlapping? Are any returning large outputs that could be truncated? Roughly estimate how many tokens your tool definitions alone consume.

---

### Session 5: The Memory Layer
**Read:** [[context-engineering/memory-layer]]
**Time:** ~11 min (~1,400 words)
**Key takeaway:** Structured belief-updates beat append-only logs. Memory is a claim about the past, not the present. **New:** Self-improving agents use episodic memory as a feedback loop — recording what worked and what didn't, then modifying their own instruction files based on those episodes.

**Action:** Check the memory system in a tool you use (e.g., Claude Code's MEMORY.md, ChatGPT's memory). Is it storing things it shouldn't? Is anything stale? Clean up one thing.

---

### Session 6: The Orchestration Layer
**Read:** [[context-engineering/orchestration-layer]]
**Time:** ~12 min (~1,500 words)
**Key takeaway:** Observation masking beats LLM summarization. The 35-minute degradation curve means you should break work into sub-tasks. **New:** Claude Code's leaked architecture confirmed these patterns in production — forked subagents "without contaminating the main execution loop," file-read deduplication, structured session memory.

**Action:** Think about your last long coding session with an AI agent. Did quality degrade toward the end? Estimate how long the session was. Next time, plan a compaction break or fresh agent at the 30-minute mark.

---

## Phase 3: Putting It Together (Session 7-8)

### Session 7: Agentic Development Deep Dive — Patterns
**Read:** [[context-engineering/agentic-dev]] — through "Sub-Agent Patterns for Development" (first half)
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

### Session 8: Agentic Development Deep Dive — The SDD Debate
**Read:** [[context-engineering/agentic-dev]] — from "Spec-Driven Development" through the end (second half)
**Time:** ~15 min (~1,600 words)
**Key takeaway:** The SDD debate is the most active discussion in the space right now. Key positions: the **SDD Triangle** (spec/test/code must stay synchronized — dbreunig), **"code IS spec"** counterargument (HN, 211-pt thread), **"too confused to write the spec"** boundary condition, **stale spec failure mode** (Augment Code), and the **community reality check** — most practitioners use SDD selectively, not religiously.

**Action:** Where do you fall in the debate? Think about your last three projects:
- Would a spec have helped or been overhead for each?
- Did you hit the "too confused" problem where you couldn't specify upfront?
- Have you experienced the stale spec failure mode (agent executing outdated assumptions)?

This tells you your personal SDD sweet spot.

---

## Phase 4: Frameworks Survey (Sessions 9-12)

These sessions survey spec-driven development tools. Read the index first, then the framework pages are grouped by theme. Each group fits in one session.

### Session 9: The SDD Landscape
**Read:** [[frameworks/index]]
**Time:** ~4 min (~440 words)
**Key takeaway:** The three maturity levels (spec-first, spec-anchored, spec-as-source), the rankings table, and the fact that the space has grown to 30+ frameworks — this guide covers the nine most significant.

**Action:** Look at the rankings table. Based on your own priorities (cost, ease of adoption, effectiveness), which 2-3 frameworks would you shortlist? Note them for the next sessions.

---

### Session 10: Purpose-Built SDD Tools (Part 1)
**Read:** [[frameworks/kiro]] then [[frameworks/github-spec-kit]]
**Time:** ~8 min (~1,000 words)
**Key takeaway:** Kiro uses a three-phase pipeline (requirements/design/tasks) with EARS notation. Spec Kit is agent-agnostic and open source with a Constitution pattern. GSD (473 points on HN — the highest-scoring post in this space in Q1 2026) bridges context engineering and SDD in a single system.

**Action:** Both tools structure requirements differently. Which approach appeals more to you — Kiro's formal EARS notation or Spec Kit's interconnected file approach? Consider which would fit your team's workflow.

---

### Session 11: Purpose-Built SDD Tools (Part 2)
**Read:** [[frameworks/tessl]] then [[frameworks/openspec]] then [[frameworks/augment-intent]]
**Time:** ~11 min (~1,350 words)
**Key takeaway:** Tessl is spec-as-source (most ambitious). OpenSpec is a universal standard. Augment Intent uses living specs with multi-agent orchestration. The HN community debate showed Augment's analysis of "what SDD gets wrong" (stale specs, agent blindness) is the most actionable critique — their bidirectional spec maintenance proposal directly addresses it.

**Action:** These three represent increasing ambition: universal standard, living docs, and full spec-as-source. Which maturity level is realistic for your current projects? What would need to change to move up one level?

---

### Session 12: Multi-Agent Frameworks & Others
**Read:** [[frameworks/metagpt]] then [[frameworks/gpt-pilot]] then [[frameworks/smol-developer]] then [[frameworks/factory-droids]]
**Time:** ~13 min (~2,050 words)
**Key takeaway:** MetaGPT simulates a full software company. GPT Pilot adds TDD and context rewinding. Smol Developer is a learning starting point. Factory Droids is enterprise-grade.

**Action:** If you wanted to experiment with one multi-agent framework this month, which would it be? MetaGPT and GPT Pilot are open source and free to try. Smol Developer is the simplest starting point if you want to understand the mechanics before committing.

---

## Phase 5: Sources & Review (Session 13)

### Session 13: Deep Reading Selection
**Read:** [[context-engineering/sources]]
**Time:** ~10 min (~1,500 words)
**Key takeaway:** Four tiers of sources now — Essential Reading, Strong References, 2026 Updates (GitHub Blog, Towards AI, SwirlAI), TL;DR Newsletter Coverage (7 articles), and Hacker News Discussions (8 high-signal threads). The HN threads are especially worth reading for the community debate — the comments often have sharper insights than the linked articles.

**Action:** Pick one source from each tier to read this week:
- **Essential:** Anthropic's guide (if building agents), LangChain's framework (if wanting a mental model), Manus's lessons (if optimizing systems)
- **HN thread:** The VSDD thread (211 pts, 118 comments) is the richest single discussion on SDD's strengths and weaknesses
- **2026 Update:** Towards AI's "6 Techniques That Actually Matter" is the most concise practitioner checklist

---

## Module 2: Agent Architecture Patterns (Sessions 14-18)

### Session 14: The Agent Patterns Landscape
**Read:** [[agent-patterns/index]] then [[agent-patterns/single-agent]]
**Time:** ~15 min (~1,750 words)
**Key takeaway:** The four core single-agent patterns — ReAct (reason-act-observe loop), plan-and-execute (separate planning from doing), reflection (self-critique before returning), and tool-use loops. ReAct is the default in most coding agents. Plan-and-execute is the pattern behind SDD. They combine: plan-and-execute + ReAct is the most common production stack.

**Action:** Think about your last 3 interactions with an AI coding agent. Which pattern was the agent running? Was it ReAct (exploring step by step), plan-and-execute (following a structured plan), or something else? Knowing which pattern you're working with changes how you prompt.

---

### Session 15: Multi-Agent Coordination
**Read:** [[agent-patterns/multi-agent]]
**Time:** ~15 min (~1,800 words)
**Key takeaway:** Orchestrator-worker accounts for ~70% of production multi-agent deployments. Anthropic's system outperformed single-agent by 90.2% using this pattern. The independence requirement for parallel agents is strict — hidden dependencies between "parallel" agents are the most common multi-agent failure. Osmani's key warning: "if you lose understanding of your own system, you have lost the ability to fix it."

**Action:** If you've used multi-agent features (Claude Code subagents, Cursor's parallel edits, or similar), did the agents work on truly independent tasks? If you haven't, identify one task from your current project that could be split into 2-3 genuinely independent subtasks.

---

### Session 16: The Autonomy Spectrum
**Read:** [[agent-patterns/autonomy]]
**Time:** ~12 min (~1,450 words)
**Key takeaway:** Five levels from inline assistance to fully autonomous. Most enterprise deployments in 2026 are at Level 2 (plan-level approval). Level 5 isn't appropriate for production yet. "Bounded autonomy" is the leading pattern — clear limits, mandatory escalation, comprehensive audit trails. The error blast radius scales with autonomy level.

**Action:** What autonomy level are you personally operating at? Most developers are at Level 1-2 even when their tools support Level 3. Pick one low-risk task type (test generation, documentation, simple refactors) and try it at one level higher than your default this week.

---

### Session 17: Production Lessons
**Read:** [[agent-patterns/production]]
**Time:** ~13 min (~1,500 words)
**Key takeaway:** Production case studies from Anthropic (multi-agent research), Stripe (hybrid blueprints + Toolshed), Cursor (dynamic context discovery), and Claude Code (leaked architecture). The common thread: the best agent systems are hybrids — deterministic steps for predictable work, agents for reasoning. Not everything needs to be agentic.

**Action:** Review the production engineering checklist at the end of the page. How many items would you check off for your current AI setup? Which gaps are the most concerning?

---

### Session 18: Agent Patterns Sources
**Read:** [[agent-patterns/sources]]
**Time:** ~8 min (~900 words)
**Key takeaway:** Three tiers of sources. Essential reading: Anthropic's "Building Effective Agents" (composable patterns), their multi-agent research system writeup, and Osmani's coding-specific analysis.

**Action:** Pick one essential source to read this week:
- **If building agents:** Anthropic's multi-agent research system writeup — the most detailed production account available
- **If using agents:** Osmani's "Code Agent Orchestra" — focused on what makes multi-agent coding work vs. fail
- **If evaluating tools:** Google Cloud's design pattern chooser — decision framework for matching patterns to tasks

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
| **Total** | **18 sessions** | **~3.5 hours** | |

At one session per day, you'll finish in about 2.5 weeks. At two per day, under 10 days.

---

## Keeping It Fresh

Run `/study` in Claude Code to see what's unread or updated since your last session. Run `/study update` to pull in new developments from TL;DR, Hacker News, and the web. The guide's frontmatter tracks your reading progress automatically.
