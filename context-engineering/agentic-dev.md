---
last_updated: 2026-04-02
last_read: null
status: unread
---

# Agentic Development: Patterns That Work

This is the payoff page. If you've read the layer pages, you understand the theory — system prompts, knowledge retrieval, memory, orchestration. This page is about applying that theory to real development work. Concrete patterns, concrete tradeoffs, concrete steps.

---

## Instruction File Design

Your CLAUDE.md, `.cursorrules`, or AGENTS.md is the one piece of context that loads on every task. That makes it powerful and dangerous. Everything you put there occupies space and competes for attention on work where it might be irrelevant.

**What belongs in an instruction file:**

- Test commands and how to run them (`npm test`, `pytest -x`, specific flags)
- Commit conventions and branch naming rules
- Architectural constraints ("never modify `src/generated/` directly", "API changes require schema updates in `openapi.yaml`")
- Code style preferences the linter won't catch (naming conventions, error handling patterns)
- Project-specific gotchas that aren't obvious from reading the code

**What doesn't belong:**

- File structure and directory layouts — the agent can list the filesystem
- Function signatures and API shapes — the agent can read the source
- Git history and why decisions were made — that's what `git log` is for
- Debugging sessions and their solutions — these become noise once the bug is fixed
- Ephemeral task state — write that to a todo file instead

**The 50-instruction ceiling.** Anthropic's own research notes that models can reliably follow around 50 discrete instructions. Past that, instructions start competing for attention and less prominent ones get dropped. This isn't a soft guideline — it's a practical ceiling. If your instruction file has 80 rules, you're probably getting 50 of them followed inconsistently. Audit ruthlessly. Cut anything that's redundant with the linter, derivable from the code, or hasn't been violated in the last month.

**Progressive disclosure over exhaustive lists.** Instead of enumerating every API convention in CLAUDE.md, write one line: "Read `docs/api-conventions.md` before making API changes." The agent loads the detailed guidance when it needs it, and it doesn't crowd out other instructions the rest of the time. This pattern scales — you can have deep reference material without overwhelming the always-on context.

See [Instruction Layer](instruction-layer.md) for the theory behind system prompt and rules file design.

---

## Spec-Driven Development

A spec is the most information-dense artifact you can put in an agent's context window. It defines what to build, how it should work, what the constraints are, and what success looks like — all in one document. Compared to ad-hoc instructions typed into a chat interface, a spec front-loads the understanding an agent needs instead of letting it discover requirements through trial and error.

**The spec is context engineering in document form.** When you write a spec before starting implementation, you're doing context engineering — deciding in advance what information the agent needs, making tradeoffs explicit, and capturing intent in a form that's loadable at any point in the project lifecycle.

**Maturity levels for spec-driven development:**

- **Spec-first**: the spec is written upfront and guides the AI through implementation, but often becomes stale as the code evolves. This is where most current tools land. Better than nothing, but the spec and code drift apart.
- **Spec-anchored**: the spec evolves alongside the code as living documentation. Changes to behavior update the spec; the spec informs future changes. More discipline required, but the spec stays useful throughout the project.
- **Spec-as-source**: the spec IS the source. Humans maintain specs and never directly edit generated code. The implementation is derived from the spec on demand. The most powerful form — and the most demanding.

One tool that explicitly bridges both concepts: GSD (Get Shit Done), described as "a meta-prompting and context engineering system for AI coding assistants that enables reliable, spec-driven development by managing context and streamlining complex project workflows." GSD hit 473 points on Hacker News (March 2026) — the highest-scoring story in the context engineering / SDD space in three months, with 255 comments. The community response validated that developers want structured workflows that manage context, not just better prompts.

See [Spec-Driven Development Frameworks](../frameworks/index.md) for a comparative guide to the top tools implementing these patterns, from GitHub Spec Kit to Kiro to Tessl.

### The SDD Triangle

Dan Breunig proposed a useful framework: the **SDD Triangle** — spec, test, and code as three nodes that must stay synchronized (HN, March 2026). Rather than a one-directional flow (spec → code), it's a feedback loop where each element informs the others. "The act of writing code improves the spec" because implementation surfaces decisions and dependencies that abstract documentation misses.

His companion tool **Plumb** captures decisions made during implementation via agent traces and code diffs, blocking commits until decisions are reviewed. This treats decision documentation as a commit-blocking checkpoint rather than optional metadata — a practical mechanism for keeping the triangle in sync.

### The "SDD Is Just Waterfall" Debate

The most common criticism of spec-driven development is that it reintroduces waterfall process — write a big spec upfront, throw it over the wall, hope for the best. Agentic Conf Hamburg 2026 featured a session called "Beyond the Vibes" dedicated to this tension. On HN, "Ask HN: Why spec-driven development when code IS spec?" (February 2026) crystallized the counterargument: "Code is a detailed, verifiable spec that a machine can execute. LLMs are already great at translating code to natural language. Why do we need a second, less detailed and less verifiable copy?" (HN user kikkupico).

The criticism has merit when SDD is applied indiscriminately. Writing 16 acceptance criteria for a minor bug fix (a real example from Martin Fowler's team evaluating Kiro) is ceremony that slows you down without improving outcomes. Not every task benefits from a spec.

**When SDD adds clear value:**
- Adding features to complex existing codebases where the agent needs to understand how new code interacts with existing systems
- Work involving multiple files, architectural decisions, or cross-cutting concerns
- Tasks where getting it wrong is expensive (migrations, API contracts, security-sensitive changes)
- Parallel execution — a spec lets multiple agents or developers work from a shared understanding

**When SDD is overhead:**
- Small bug fixes where the fix is obvious from the error
- Single-file changes with no architectural implications
- Exploratory work where you don't yet know what you're building
- Prototyping and throwaway code

**The "too confused" boundary.** A complementary critique: "Spec driven development doesn't work if you're too confused to write the spec" (32 points on HN, February 2026). When you don't yet understand the problem space well enough to specify what you want, writing a spec is premature formalization. The fix is exploratory work first — spikes, prototypes, conversations — until your understanding crystallizes enough to specify.

A sharper version of the core criticism came from Gabriel Gonzalez (covered in TL;DR Dev, March 2026): "a sufficiently detailed spec is code." His argument is that truly precise specifications become as complex as the code itself, making the spec layer redundant. This holds for algorithmic or logic-heavy work where the spec and the implementation converge. It's weaker for integration-heavy work where the spec captures *intent and constraints* that multiple agents or humans need to coordinate around — information that doesn't naturally live in any single code file.

**The stale spec failure mode.** Augment Code's analysis ("What spec-driven development gets wrong," HN, February 2026) identifies the core engineering problem: specs are documents, and documents become stale. Unlike humans who notice inconsistencies, agents will "execute a plan that no longer matches reality, confidently, and they won't flag that anything is wrong." Their proposed fix is bidirectional spec maintenance — developers write requirements, agents update specs as they implement, surfacing decisions that changed the original plan. This is the same insight behind the SDD Triangle: one-directional spec-to-code breaks; the triangle must stay synchronized.

The distinction isn't "use SDD or don't" — it's about matching the level of specification to the complexity of the task. A one-paragraph spec for a small feature is still spec-driven development. A 50-page requirements document for a two-hour task is waterfall cosplaying as modern practice.

**Community reality check.** "Ask HN: Are you still using spec-driven development?" (February 2026) showed a pragmatic middle ground: most respondents use SDD selectively. One developer described maintaining structured documentation (README, ARCHITECTURE, research docs) at ~750 lines per file rather than formal specs (HN user waldopat). Another noted that "tools like spec kit give reliably good results in brownfield codebases" but improved prompting skills have made direct approaches viable for simpler tasks. The consensus: SDD is a tool, not a religion.

---

## Context Strategies for Long Coding Sessions

**The 35-minute degradation curve.** Anthropic's production data shows agent success rates decrease meaningfully after 35 minutes of work, with doubled session duration quadrupling the failure rate. This is the practical ceiling for unmanaged context. It's not that models can't handle long sessions — it's that accumulated noise, compacted decisions, and degraded instruction recall compound. The longer the session, the more the context has drifted from what you actually want.

Three strategies for working around this:

**Strategy 1 — Break into sub-tasks.** Structure work into tasks that each complete within one context window. Use specs and implementation plans to define task boundaries before you start. Each task gets a fresh agent or a compacted context. This is the most reliable approach for planned work because you're eliminating context degradation rather than managing it.

**Strategy 2 — Compact and continue.** Summarize progress, reinitialize the context with that summary, and keep working. Write structured notes to files — `todo.md`, `progress.md`, `decisions.md` — before compacting. Those files are the bridge between old context and new. Best for exploratory or debugging work where you can't plan sub-tasks upfront, because the task structure only becomes clear as you work.

**Strategy 3 — Fresh agents per task.** Each task gets a brand new agent with a clean context window. The implementation plan serves as the context bridge — it tells the new agent everything it needs without carrying over noise from previous tasks. Best for parallelizable independent tasks where each agent only needs to know about its own piece of work.

**When to use each:** Strategy 1 for planned, well-defined work. Strategy 2 for exploration and debugging. Strategy 3 for independent parallel tasks.

See [Orchestration Layer](orchestration-layer.md) for compaction patterns and sub-agent architectures.

---

## Sub-Agent Patterns for Development

**Parallel dispatch.** When tasks touch independent files with no shared state, dispatch multiple agents simultaneously. Examples: implementing independent API endpoints, writing tests for separate modules, updating documentation across unrelated sections. The key requirement is independence — if Task B needs to know what Task A decided, they can't run in parallel.

**Sequential dispatch.** When one task's output informs the next, chain them. Example: design the database schema (Task 1), implement the migration (Task 2), write the API layer on top (Task 3). Each task waits for the previous output before starting. The completed output from each step becomes part of the context for the next.

**The coordinator pattern.** A main agent reads the implementation plan, dispatches per-task agents with precisely scoped context, and reviews results between tasks. The plan is the shared context — each sub-agent gets the plan plus their specific task description, nothing more. The coordinator doesn't try to run everything; it owns the plan and the review loop, delegates the work.

**The quality multiplier.** The quality of sub-agent work is directly proportional to the quality of context you give them. A vague task description ("implement the user auth stuff") produces vague, incomplete work. A precise task with exact file paths, expected behavior, edge cases to handle, and test criteria produces precise work. The effort you invest in writing clear task descriptions pays back in fewer iteration loops.

**Industry validation.** Stripe's "Minions" system (covered in TL;DR Dev, March 2026) uses "blueprints" — hybrid workflows that mix deterministic nodes (lint, push) with free-running agent loops — and a centralized MCP server called Toolshed with 500+ shared tools across agents. A LogRocket experiment found that multi-agent setups succeed when tasks genuinely parallelize and agents agree on interfaces beforehand — validating the independence requirement. Cursor's Bugbot evolution showed that shifting to an agentic architecture produced the largest performance gains, more than model improvements or prompt tuning.

---

## Filesystem as Context

Manus (the autonomous agent platform) documented a key insight from production: project files are persistent context that survives context window resets. The filesystem is external memory.

The pattern is simple: write decisions, progress, and architectural choices to files on disk. When starting a new session or after compaction, read those files back into context. You don't lose anything because it was never only in the context window.

This is why spec-driven development works at a fundamental level. The spec file is the context, persisted on disk, loadable by any agent at any time. It doesn't degrade with session length. It doesn't get compacted away. It doesn't accumulate conversational noise. It just sits on disk, always available, always up to date if you maintain it.

The pattern is gaining traction beyond agent frameworks. "Personal Brain OS" (covered in TL;DR AI, February 2026) is a file-based personal operating system living inside a Git repository, designed to stop agents from forgetting important context. It preserves voice, brand, goals, and research pipelines across sessions — filesystem-as-context applied to personal knowledge management.

**CLAUDE.md vs. specs: two filesystem-as-context strategies.** CLAUDE.md is always-loaded context — it's read automatically before every task. Specs are on-demand context — loaded when the agent needs them, or when you tell it to read them. Both are filesystem-as-context, just with different loading strategies. The always-loaded file should be small and universal; the on-demand files can be large and specific.

Other filesystem context patterns that work in practice:

- **Implementation plans** — the task breakdown that outlasts any single session
- **Todo lists** — current state of work, updated as tasks complete
- **Decision logs** — why you chose this architecture, what alternatives were rejected
- **Architecture documents** — how the system fits together, what invariants to preserve

All persistent. All loadable. All immune to context window degradation.

---

## The Evaluation Gap

Most teams running agentic development workflows have no idea whether their context engineering is working. They notice when things break badly enough to require human intervention, but they're not tracking whether things are getting better or worse. You can't improve what you don't measure.

**Four metrics worth tracking:**

- **Task completion rate**: are agents finishing tasks successfully without requiring human correction? Track this across sessions and over time. Declining rates signal that something in your context stack is degrading.
- **Token efficiency**: how many tokens does it take to complete a typical task? More tokens usually means more noise — verbose instructions, redundant context, unnecessary back-and-forth. Efficiency gains here are also cost and speed gains.
- **Error rates by type**: are agents making the same mistakes repeatedly? Repeated errors on the same pattern usually signal a gap in the instruction layer (a rule you never wrote) or a gap in the knowledge layer (information the agent needs but doesn't have).
- **Time to completion**: how long does each task take? Rising times can signal context degradation — the agent is spending more cycles on confusion and recovery than on the actual work.

**The Augment finding.** When Augment Code ran benchmark evaluations on coding tools, identical models (Claude Opus 4.5) scored 17 problems apart across different tools. Same model. Different results. The gap wasn't capability — it was context engineering. How each tool assembled the context window, what it included, how it structured the task — that's what drove the 17-point spread. This is the most direct evidence that context engineering matters as much as model selection for practical development work.

**The Claude Code leak.** In April 2026, Anthropic inadvertently exposed Claude Code's internal architecture (covered in TL;DR AI). Analysis revealed a three-layer memory architecture as their solution to context entropy, along with specialized utilities (Grep, Glob, LSP) for efficient repository navigation, file-read deduplication to reduce context bloat, structured session memory management, and forked subagents for parallel processing "without contaminating the main execution loop." This confirmed in practice what the field was converging on in theory: the engineering around the model matters as much as the model itself.

**The "coding agent is dead" counterpoint.** Amp (formerly Amphion) argued in February 2026 that modern models perform well with minimal tooling — often just bash — and that the actual bottleneck is codebase organization, not agent sophistication (covered in TL;DR AI). They discontinued their IDE extensions in favor of a lightweight CLI. This is a useful corrective: if your codebase is well-organized and your context is clean, you may need less agent infrastructure than you think. The context engineering still matters — it just moves from the agent framework into your project structure.

---

## Practical Playbook

A step-by-step setup for a new agentic dev project:

**1. Set up your instruction file.** Create CLAUDE.md (or the equivalent for your tool). Keep it under 50 rules. Focus on universal project rules: how to run tests, commit and style conventions, architectural boundaries. Use progressive disclosure for anything detailed — point to reference docs rather than inlining their content.

**2. Write a spec before implementation.** Define what you're building, how it should work, and what success looks like. Even a one-page spec dramatically improves agent output compared to ad-hoc instructions. The spec doesn't need to be exhaustive — it needs to establish the right frame before the agent starts generating code.

**3. Create an implementation plan.** Break the spec into tasks sized for one context window — roughly 15–30 minutes of agent work each. Include exact file paths, expected behavior, and test criteria in each task description. This is where the quality multiplier kicks in: precise task descriptions produce precise work.

**4. Execute per-task with fresh agents or compaction breaks.** Don't let context degrade through a long session. Either dispatch fresh agents per task (Strategy 3 above) or compact explicitly between tasks (Strategy 2). Treat the 35-minute curve as a hard constraint, not a soft guideline.

**5. Use the filesystem for persistence.** Write progress, decisions, and notes to files. These survive context resets and serve as the bridge between sessions. Update the spec and implementation plan as the project evolves — keep them as the canonical source of truth rather than letting the conversation history become the record.

**6. Measure and iterate.** Track task completion rates and token usage. If agents are failing or burning excessive tokens, diagnose whether it's an instruction problem (missing or conflicting rules), a context problem (agent doesn't have the information it needs), or a task sizing problem (tasks are too large for one context window). Cut what isn't helping. Add what's missing. The context stack is a system to be maintained, not a one-time configuration.
