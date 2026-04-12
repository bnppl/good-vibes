---
last_updated: 2026-04-12
last_read: null
status: unread
---

# The Tool Layer

Tools are how your agent acts on the world. They're also a significant source of context overhead, decision friction, and subtle failure modes. Getting the tool layer right means thinking about tool design, output management, and availability — not just which tools exist.

---

## Tool Design Principles

Anthropic's guidance is clear: keep tool sets minimal and non-overlapping. Each tool should do one thing. When two tools could plausibly handle the same request, the model wastes tokens deciding between them — and sometimes picks the wrong one.

**Names signal intent.** `search_codebase` tells the model what to expect. `tool_1` does not. Descriptive names reduce ambiguity before the model even reads the description.

**Parameter schemas are instructions too.** Every field in a tool's schema should have a clear description. If a parameter can only take certain values, say so. If it defaults to something meaningful, explain it. The schema is part of the context the model reads to decide how to call the tool.

**One action per tool.** A tool that reads, writes, and validates is three tools pretending to be one. Split them. The short-term convenience of a "do everything" tool creates long-term reliability problems: the model has to interpret which sub-action you want, and it will sometimes guess wrong.

**Tool descriptions are instructions.** This is worth stating plainly: tool descriptions go into context and directly shape model behavior. A well-written description that explains when to use a tool (and when not to) will reduce misuse more reliably than any amount of system prompt instruction. Treat them accordingly — write them carefully, review them when behavior is off, update them when the tool's purpose evolves.

---

## Tool Result Management

Every tool output goes back into context and consumes tokens. A tool that returns 10,000 lines of logs is a context bomb — it shoves useful information out of the window and dilutes the model's attention across irrelevant data.

Design for minimum useful output by default. The model can always ask for more. The strategies:

- **Truncate**: return the first N lines or characters, with a note indicating what was cut and how much. `"Showing first 100 lines of 4,382."` is more useful than silently dropping content.
- **Summarize**: return a digest instead of raw output. `"47 tests passed, 3 failed: test_auth, test_login, test_session"` is almost always more useful than the full test runner output.
- **Selective return**: only include the fields or sections relevant to the query. A database record with 40 fields doesn't need all 40 fields in the response if the model asked about two of them.
- **Paginate**: return a page of results with a mechanism to request the next page. Pagination keeps individual tool calls bounded while still allowing access to the full dataset.

The discipline here is consistent: treat tool output as context real estate. Return what's needed to continue the task, not everything you have.

---

## MCP Servers

The Model Context Protocol (MCP) is a standardized way to expose tools and data sources to LLMs. Think of it as a universal adapter between AI agents and external services — define a tool once, and it works across any MCP-compatible client (Claude Code, Cursor, custom agents, etc.).

**When MCP makes sense:**
- You want tools to be available across multiple clients without rewriting integrations for each one.
- You're exposing an external service — a database, an API, a monitoring system — as a tool that various agents might need.
- You want a clean separation between tool implementation and the agents that use tools.

**When direct function calling is fine:**
- Single-tool integrations tightly coupled to one agent.
- Internal tools that won't be shared and don't need the portability.
- Prototypes where the overhead of an MCP server isn't justified yet.

MCP provides both tools (actions the model can take) and resources (data the model can read). This maps naturally onto two distinct layers: tools belong to the action layer, resources belong to the knowledge layer. Keeping that distinction clear helps when designing what an MCP server should expose.

**The MCP context cost.** A practical warning from Apideck (covered in TL;DR Dev, March 2026): MCP servers with extensive tool definitions can consume tens of thousands of tokens just for the tool schemas, before any actual work begins. Their analysis found that agents using heavy MCP configurations suffered from token bloat that crowded out working context. The alternative they propose — CLI-based tools with progressive discovery through `--help` commands — trades organization-wide authentication for dramatically lower context overhead. This is a real engineering tradeoff: MCP's portability and authentication benefits come at a token cost that scales with the number of tools exposed. Stripe's approach with their "Toolshed" MCP server (500+ tools across agents) suggests the answer at scale is dynamic tool loading rather than exposing everything at once.

---

## The Tool Selection Problem

Models struggle with large tool sets. Once you have 20 or more tools, you start seeing predictable failure modes.

**(New — April 12 research)** The numbers are now more concrete. The SwirlAI "State of Context Engineering in 2026" report cites OpenAI's recommendation: **fewer than 20 tools per agent, with accuracy degrading past 10.** The token cost alone is significant — a single complex JSON schema consumes 500+ tokens, so 90 tools burn 50,000+ tokens before any user interaction even begins. This reframes the tool selection problem as partly a context budget problem: large tool sets don't just confuse the model, they consume the context window that should be available for actual work.

Predictable failure modes:

- **Misrouting**: the model picks a plausible-sounding tool instead of the right one.
- **Hallucination**: the model invents a tool name that doesn't exist.
- **Suboptimal selection**: a better tool exists but the model picks a familiar or more prominent one.

The core problem is attention. With a large flat list of tools, the model has to consider all of them for every decision. That's cognitively expensive (in the model-behavior sense), and it introduces noise.

Strategies for managing large tool sets:

- **Dynamic tool loading**: only expose tools relevant to the current task or phase of work. If you're in a planning phase, planning tools are available. Execution tools come later.
- **Tool categories**: group related tools so the model navigates a hierarchy rather than a flat list. Finding the right category first narrows the decision space before any individual tool selection.
- **Scoped availability**: explicitly different tools at different lifecycle stages. Birgitta Boeckeler's observation about coding agents captures this well: tool availability is a steering mechanism. Which tools are available communicates what's appropriate right now, without requiring explicit instructions about it.

---

## Manus's Insight: Mask, Don't Remove

Dynamic tool availability has a hidden cost: KV-cache invalidation.

When you add or remove tools from the schema between turns, the model has to reprocess the entire context from scratch. The schema has changed, so nothing cached before that change is valid. For long contexts with many turns, this gets expensive quickly.

Manus's solution is to define all tools in the schema upfront and use a state machine to mark which tools are active at each step. The model sees the same schema every turn — so the cache stays warm — but gets guidance about which tools are appropriate right now.

The schema is stable (cache-friendly). The behavior is dynamic (tools are contextually scoped). You get both benefits without paying the reprocessing cost.

This is the kind of optimization that matters at scale. In early development you probably won't notice. Once you're running long multi-turn agentic sessions with large tool sets, cache efficiency becomes a real performance variable.

---

## Actionable Steps

1. **Audit your tool set.** List all tools. Check for overlap: if two tools could handle the same request, merge them or differentiate them until they can't. Ambiguous tool sets produce ambiguous behavior.

2. **Check tool output sizes.** Which tools return the most tokens? Profile them. Can they be trimmed, summarized, or paginated without losing the information the model actually needs?

3. **Write tool descriptions as instructions.** Because that's what they are. Be specific. Include examples of when to use a tool and — just as important — when not to. If a tool has a common misuse pattern, document it in the description.

4. **If you have 15+ tools**, implement dynamic tool loading or categorization. A flat list of 20 tools is harder for the model to navigate correctly than two categories of 10. Don't present all tools all the time.

5. **Consider KV-cache impact before changing tool schemas between turns.** If you're dynamically controlling availability, evaluate whether Manus's masking approach would be more efficient than adding and removing tools. Stable schema, dynamic guidance — the cache stays valid, the behavior changes.
