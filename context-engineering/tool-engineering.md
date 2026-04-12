---
last_updated: 2026-04-12
last_read: null
status: unread
---

# ACI & Tool Engineering: Mistake-Proofing Agents

In 2026, you are no longer just a user of AI tools; you are an engineer of **Agent-Computer Interfaces (ACI)**. The "plumbing" of how an agent interacts with your system determines its success rate more than the model's size.

## The Principle of Poka-yoke (Mistake-Proofing)

Derived from lean manufacturing, **Poka-yoke** tool design means structuring your tools so it is structurally difficult (or impossible) for the agent to use them incorrectly.

### 1. Absolute Paths over Relative Paths
Agents frequently lose track of their "current directory" in complex project structures. ACIs should enforce absolute paths for all file operations. A tool that accepts `./src/main.js` is brittle; a tool that requires `/Users/dev/project/src/main.js` is robust.

### 2. Structured Schemas (JSON/Zod)
Never ask an agent to "write a description" for a tool argument. Use rigid schemas. If a tool expects a choice, use an `enum`. If it expects a number, define the `min` and `max`. This moves the validation from the model's reasoning to the tool's interface.

### 3. Deterministic Feedback Loops
When a tool fails, it shouldn't just return an error message. It should return **actionable context**. 
- **Bad:** `File not found.`
- **Good:** `File not found. Did you mean 'src/main.ts'? Here is a list of similar files in the directory...`

## Tool Descriptions as Instructions

Tool descriptions are effectively "system prompts for functions." By 2026, we know that:
- **Masking Verbosity:** Tools should truncate large outputs by default. An agent shouldn't see a 1,000-line log file; it should see a 10-line summary with a tool to `fetch_more_lines(offset, limit)`.
- **Constraint Inlining:** Put critical constraints directly in the tool description. (e.g., "Note: This tool cannot modify files in 'dist/'. If you try, it will fail silently to prevent environment pollution.")

## The MCP Standard (2026)

The **Model Context Protocol (MCP)**, governed by the Linux Foundation, has become the universal standard for tool definition. Mastery of MCP means:
- **Discovery over Definition:** Agents should "discover" tools dynamically via an MCP server rather than having every tool defined in a static system prompt. This saves thousands of tokens and prevents "tool confusion."
- **Context Caching for Tools:** Standardizing tool schemas allows providers to cache the tool-calling logic, reducing latency by 40%+.

## Agentic Engine Optimization (AEO) **(New — April 12 research)**

Addy Osmani introduced AEO (April 2026): the practice of structuring and serving technical content so AI coding agents can effectively consume it — analogous to how SEO optimizes for search engines. The key insight: "AI coding agents consume documentation fundamentally differently from how humans do." Unlike developers who browse pages over minutes, agents compress multi-page navigation into single HTTP requests. Traditional analytics (scroll depth, time-on-page) become invisible.

**Five AEO techniques:**

1. **Access Control** — Configure `robots.txt` to permit AI agent traffic
2. **Discovery via `llms.txt`** — Create structured directories describing documentation, so agents know what's available without reading everything
3. **Capability Signaling** — Use `skill.md` to declare what APIs actually accomplish (intent, not just interface)
4. **Token Efficiency** — Keep pages under 15K–25K tokens. A single oversized document can consume an agent's entire usable context window, forcing truncation or fallback to hallucination
5. **Content Formatting** — Serve clean Markdown with consistent heading hierarchies. Agents parse structure, not visual layout

Osmani identified distinct HTTP fingerprints for nine major agents (Claude Code, Cursor, Cline, and others), revealing they operate with measurable behavioral signatures. This means documentation teams can track agent consumption patterns alongside human usage — and optimize for both audiences.

AEO connects directly to context engineering: if the documentation your agent retrieves is token-bloated or poorly structured, you're wasting context budget before the agent even starts working. Optimizing the source material is upstream context engineering.

## Actionable Steps

1. **Audit your ACI:** List every tool your coding agent uses. Which one fails most often?
2. **Schema Lockdown:** Refine the JSON schema for that failing tool. Add `enum`s, `pattern`s, and `description`s that explicitly state "DO NOT use this tool for X."
3. **Observation Masking:** Implement a wrapper that automatically summarizes large tool outputs before the agent sees them.
4. **(New)** **Check your documentation's AEO readiness:** Does your project have an `llms.txt`? Are your docs under 25K tokens per page? Would an agent fetching your docs waste half its context window on boilerplate?

---

**Next Module:** [[../agent-patterns/index]]
