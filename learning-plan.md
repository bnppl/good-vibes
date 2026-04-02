# Learning Plan: Context Engineering & Spec-Driven Development

**How to use this:** Open this vault in Obsidian mobile. Work through one session per sitting — each is designed for ~15 minutes of reading plus a quick action step you can do from your phone. Check off sessions as you complete them.

**Reading order matters.** The context engineering guide builds on itself — foundations first, then layers, then the deep dive. The frameworks section is modular and can be read in any order after Session 6.

---

## Phase 1: Foundations (Sessions 1-3)

### Session 1: What Is Context Engineering?
**Read:** [[context-engineering/index]] then [[context-engineering/foundations]]
**Time:** ~12 min (~1,600 words)
**Key takeaway:** The three mental models — Karpathy's CPU/RAM metaphor, LangChain's Write/Select/Compress/Isolate, and Schmid's 7-component checklist.

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
**Time:** ~11 min (~1,400 words)
**Key takeaway:** Just-in-time loading beats frontloading. Hybrid search is the right default.

**Action:** Think about the last time an AI tool gave you a wrong answer about your codebase or domain. Was it a retrieval problem (didn't have the info), a context pollution problem (had too much info), or a grounding problem (hallucinated instead of citing)? Knowing which failure mode you hit most tells you where to focus.

---

## Phase 2: The Remaining Layers (Sessions 4-6)

### Session 4: The Tool Layer
**Read:** [[context-engineering/tool-layer]]
**Time:** ~10 min (~1,250 words)
**Key takeaway:** Tool descriptions are instructions. Mask, don't remove.

**Action:** List the MCP servers or tools you have configured in your coding agent. Are any overlapping? Are any returning large outputs that could be truncated? Identify one tool that could be improved.

---

### Session 5: The Memory Layer
**Read:** [[context-engineering/memory-layer]]
**Time:** ~11 min (~1,350 words)
**Key takeaway:** Structured belief-updates beat append-only logs. Memory is a claim about the past, not the present.

**Action:** Check the memory system in a tool you use (e.g., Claude Code's MEMORY.md, ChatGPT's memory). Is it storing things it shouldn't? Is anything stale? Clean up one thing.

---

### Session 6: The Orchestration Layer
**Read:** [[context-engineering/orchestration-layer]]
**Time:** ~12 min (~1,425 words)
**Key takeaway:** Observation masking beats LLM summarization. The 35-minute degradation curve means you should break work into sub-tasks.

**Action:** Think about your last long coding session with an AI agent. Did quality degrade toward the end? Estimate how long the session was. Next time, plan a compaction break or fresh agent at the 30-minute mark.

---

## Phase 3: Putting It Together (Session 7)

### Session 7: Agentic Development Deep Dive
**Read:** [[context-engineering/agentic-dev]]
**Time:** ~15 min (~2,250 words — the longest session, but the payoff page)
**Key takeaway:** The 6-step practical playbook for setting up context engineering on any project.

**Action:** Pick a real project you're working on. Walk through the 6-step playbook mentally:
1. Do you have an instruction file? Is it lean?
2. Do you write specs before implementation?
3. Do you break specs into sized tasks?
4. Do you use fresh agents or compaction breaks?
5. Do you persist progress to files?
6. Are you measuring anything?

Identify the weakest link. That's your first improvement.

---

## Phase 4: Frameworks Survey (Sessions 8-11)

These sessions survey spec-driven development tools. Read the index first, then the framework pages are grouped by theme. Each group fits in one session.

### Session 8: The SDD Landscape
**Read:** [[frameworks/index]]
**Time:** ~4 min (~435 words)
**Key takeaway:** The three maturity levels (spec-first, spec-anchored, spec-as-source) and the rankings table.

**Action:** Look at the rankings table. Based on your own priorities (cost, ease of adoption, effectiveness), which 2-3 frameworks would you shortlist? Note them for the next sessions.

---

### Session 9: Purpose-Built SDD Tools (Part 1)
**Read:** [[frameworks/kiro]] then [[frameworks/github-spec-kit]]
**Time:** ~8 min (~975 words)
**Key takeaway:** Kiro uses a three-phase pipeline (requirements/design/tasks) with EARS notation. Spec Kit is agent-agnostic and open source with a Constitution pattern.

**Action:** Both tools structure requirements differently. Which approach appeals more to you — Kiro's formal EARS notation or Spec Kit's interconnected file approach? Consider which would fit your team's workflow.

---

### Session 10: Purpose-Built SDD Tools (Part 2)
**Read:** [[frameworks/tessl]] then [[frameworks/openspec]] then [[frameworks/augment-intent]]
**Time:** ~11 min (~1,335 words)
**Key takeaway:** Tessl is spec-as-source (most ambitious). OpenSpec is a universal standard. Augment Intent uses living specs with multi-agent orchestration.

**Action:** These three represent increasing ambition: universal standard, living docs, and full spec-as-source. Which maturity level is realistic for your current projects? What would need to change to move up one level?

---

### Session 11: Multi-Agent Frameworks & Others
**Read:** [[frameworks/metagpt]] then [[frameworks/gpt-pilot]] then [[frameworks/smol-developer]] then [[frameworks/factory-droids]]
**Time:** ~13 min (~2,000 words)
**Key takeaway:** MetaGPT simulates a full software company. GPT Pilot adds TDD and context rewinding. Smol Developer is a learning starting point. Factory Droids is enterprise-grade.

**Action:** If you wanted to experiment with one multi-agent framework this month, which would it be? MetaGPT and GPT Pilot are open source and free to try. Smol Developer is the simplest starting point if you want to understand the mechanics before committing.

---

## Phase 5: Sources & Review (Session 12)

### Session 12: Deep Reading Selection
**Read:** [[context-engineering/sources]]
**Time:** ~7 min (~890 words)
**Key takeaway:** The three tiers of sources — pick your next reads based on what you want to go deeper on.

**Action:** Pick one Tier 1 source to read in full this week. Recommendation:
- If you're building agents → Anthropic's guide
- If you want a framework to think with → LangChain's Write/Select/Compress/Isolate post
- If you're optimizing an existing system → Manus's production lessons

---

## Summary

| Phase | Sessions | Total Time | Focus |
|---|---|---|---|
| Foundations | 1-3 | ~33 min | Mental models, instructions, knowledge |
| Remaining Layers | 4-6 | ~33 min | Tools, memory, orchestration |
| Putting It Together | 7 | ~15 min | Agentic dev playbook |
| Frameworks Survey | 8-11 | ~36 min | 9 SDD tools compared |
| Sources & Review | 12 | ~7 min | Pick your next deep reads |
| **Total** | **12 sessions** | **~2 hours** | |

At one session per day, you'll finish in under two weeks. At two per day, one week.
