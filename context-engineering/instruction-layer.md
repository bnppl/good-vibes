---
last_updated: 2026-04-02
last_read: null
status: unread
---

# The Instruction Layer

The instruction layer is the static scaffolding that's always in context: system prompts, rules files, and the behavioral guidelines that shape how an agent operates before any user message arrives. Getting this layer right has an outsized effect on everything downstream.

---

## System Prompt Design

### The Goldilocks Problem

System prompts fail in two directions. Too prescriptive and you end up with a brittle rulebook — the model follows instructions rigidly even when they don't apply, and every edge case requires another rule to patch. Too vague and behavior becomes inconsistent, with the model filling gaps unpredictably.

The goal is calibrated specificity: explicit enough that the model knows what you want, general enough that it can handle variation without instructions for every case.

### Role, Task, Constraints

A simple three-part structure works for most system prompts:

- **Role**: who the model is ("You are a senior backend engineer working in a TypeScript monorepo"). This sets tone, judgment, and the frame the model uses to interpret ambiguous requests.
- **Task**: what it's doing ("Your job is to help implement features, review code, and debug problems in this codebase").
- **Constraints**: what limits apply ("Do not modify files outside the `src/` directory without explicit approval. Always run the test suite mentally before proposing changes").

This structure makes prompts readable and auditable. When behavior goes wrong, you can usually trace it to a problem in one of these three areas.

### Persona vs. Behavioral Rules

These serve different purposes and work best in combination.

**Persona** ("You are a senior engineer") is good for calibrating judgment and tone. It shapes how the model weighs tradeoffs, what level of explanation it defaults to, and how it handles uncertainty. You're not specifying actions — you're setting the defaults the model uses when specific instructions don't apply.

**Behavioral rules** ("Always check for existing tests before writing new ones") are good for specific, repeatable actions. They work when you have a concrete, predictable pattern you want to enforce regardless of context.

The mistake is over-indexing on behavioral rules when persona would handle it more flexibly. If you find yourself writing rules like "be thoughtful about edge cases" or "consider the broader context," that's persona work dressed as instruction work.

### Examples Beat Rules

One of Anthropic's clearest findings is that diverse, canonical few-shot examples outperform instruction sprawl. Showing the model what good output looks like is often more effective than describing it.

This maps to a deeper point: rules describe behavior abstractly, and models have to interpret that abstraction. Examples demonstrate behavior concretely, giving the model a direct signal about the target. When you're struggling to get consistent output with instructions, try replacing the instructions with two or three examples instead.

---

## Rules Files and Instruction Hierarchies

### The Instruction File Ecosystem

Modern AI coding tools load persistent instruction files into every session:

- **CLAUDE.md** (Claude Code) — loaded automatically when Claude Code starts in a project directory
- **.cursorrules** (Cursor) — the original; still widely used but Cursor has since moved toward project rules in settings
- **AGENTS.md** — an emerging cross-tool standard that works across Claude Code, Cursor, GitHub Copilot, and others

AGENTS.md is worth adopting if you're working across tools. A single file that governs agent behavior everywhere reduces duplication and drift between tool-specific versions of the same guidance.

### Scoped Rules

Not all rules apply everywhere. Claude Code supports hierarchical CLAUDE.md files: a root-level file applies to the whole project, and CLAUDE.md files in subdirectories apply only within those directories. This is scoped context — the model only loads the rules relevant to where it's working.

Birgitta Boeckeler's analysis on Martin Fowler's site documents how Claude Code layers these mechanisms:

- **CLAUDE.md** — always loaded, project-wide baseline
- **Rules** — path-scoped, loaded when the model is working in specific directories
- **Skills** — lazy-loaded on demand, not in context until needed
- **Hooks** — deterministic scripts triggered by events (file save, create, delete)
- **MCP Servers** — tool integrations that extend what the model can do

The key principle: context should be loaded when it's relevant, not pre-loaded because it might be relevant.

### The ~50 Instruction Ceiling

Anthropic's documentation notes that system prompts already contain around 50 instructions by the time you account for tool descriptions, formatting guidance, and core behavioral rules. Models can reliably follow approximately this many instructions before degradation sets in.

Every instruction you add competes for attention with every other instruction. This isn't a theoretical concern — at high instruction counts, models start dropping rules inconsistently. The ceiling forces prioritization: if you're writing instruction 51, something else should come out.

---

## Anti-Patterns

**Instruction bloat.** Adding rules for every edge case until the model can't follow any of them reliably. Each additional rule has diminishing returns and increasing interference cost. The fix is usually to delete, not refine.

**Contradictory rules.** "Always be concise" alongside "always explain your reasoning in detail." The model has to resolve the contradiction somehow, and it may resolve it differently each time. When you see inconsistent behavior, check for rules that pull in opposite directions before assuming the model is broken.

**Over-specifying format when behavior matters more.** Spending effort on output structure when the real problem is decision-making. If the model is making wrong choices, fixing the markdown formatting of its responses won't help.

**Duplicating derivable information.** Putting file structure, function signatures, or coding conventions into the system prompt when they already exist in the codebase. The model can read the code — use progressive disclosure to point it there rather than duplicating content that will fall out of sync.

---

## Actionable Steps

1. **Audit your system prompt.** Count instructions explicitly. If you're over 50, start removing. Cut anything the model already knows, anything derivable from the codebase, and anything that hasn't demonstrably changed behavior.

2. **Use progressive disclosure.** Instead of embedding all project conventions, tell the model where to find them: "Before making changes to the API layer, read `docs/api-conventions.md`." This keeps the instruction layer lean and ensures the model gets current information rather than a potentially stale copy.

3. **Test instruction effectiveness.** Does adding an instruction actually change behavior? Remove it and check. If output quality doesn't change, the instruction is noise — it's consuming budget without producing results.

4. **Keep rules files focused.** Only include guidance that applies universally across the project. If a rule only applies in one directory, scope it there with a subdirectory CLAUDE.md rather than loading it everywhere.

5. **Prefer examples over rules.** When you're trying to shape output, write two or three canonical examples before reaching for another instruction. Examples give the model a concrete target; rules give it an abstraction it has to interpret.

---

## See Also

- [../frameworks/kiro.md](../frameworks/kiro.md) — Kiro uses EARS notation for structured requirements, a formal approach to writing unambiguous instructions. The GIVEN/WHEN/THEN format is a useful model for behavioral rules that need to be precise.

- [../frameworks/github-spec-kit.md](../frameworks/github-spec-kit.md) — GitHub Spec Kit uses a Constitution pattern — a master file of immutable project principles that governs agent behavior across the project. A practical model for the highest tier of your instruction hierarchy.
