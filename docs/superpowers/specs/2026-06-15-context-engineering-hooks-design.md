# Context Engineering — Insta-Style Hooks Design Spec

## Overview

Apply the "Insta-style educational slideshow" framework (`format/insta.md`) to the 8 topic pages in `context-engineering/`. Each page gets a short, visually distinct "hook" block prepended above its existing content, translating the carousel's four phases (curiosity gap → micro-dose breakdown → synthetic consolidation → actionable prompt) into a Jekyll-native format using just-the-docs callouts.

**Goal:** Make each topic page open with something that grabs attention and gives a 30-second mental model, while preserving the full existing material as "Deep dive" reading immediately below.

**Scope:** Pilot on `context-engineering/` only (8 pages). `index.md` and `sources.md` are navigational/reference pages and are excluded.

## Jekyll Integration

Add a `callouts` block to `_config.yml` (just-the-docs built-in callout feature, kramdown IAL syntax — no custom CSS needed):

```yaml
callouts:
  hook:
    title: Hook
    color: purple
  aha:
    title: Mental Model
    color: blue
  try-it:
    title: Try This
    color: green
```

## Per-Page Template

Prepended above the existing `# Title` heading's content (title stays first), `last_updated` bumped to 2026-06-15:

```markdown
{: .hook }
> **[Curiosity-gap headline]**
>
> [1-2 sentence hook]

**In short:**
- **The problem:** ...
- **The component/idea:** ...
- **How it works:** ...
- **The result:** ...

{: .aha }
> [Mental model / cheat-sheet line or table]

{: .try-it }
> [One concrete action to do right now]

---

## Deep dive

[existing content, unchanged]
```

## Per-Page Hook Content Plan

### foundations.md
- **Hook:** "More context isn't a feature — it's a tax. The biggest wins in production agents came from *removing* context, not adding it."
- **In short:** Problem = teams assume bigger context windows solve everything → Idea = Karpathy's CPU/RAM framing, you're the OS → Mechanism = Write/Select/Compress/Isolate + the 7-component audit → Result = smallest set of high-signal tokens wins.
- **Mental model:** "You're not filling RAM, you're managing it — every token competes for attention."
- **Try this:** Run the 7-component checklist against your current system prompt; cut anything that doesn't earn its place.

### instruction-layer.md
- **Hook:** "Your CLAUDE.md has a ~50-rule ceiling — and most projects blow past it without noticing."
- **In short:** Problem = instruction bloat degrades reliability → Idea = system prompt as scaffolding, not a dumping ground → Mechanism = Goldilocks principle, scoped rules, progressive disclosure → Result = fewer, sharper rules beat exhaustive ones.
- **Mental model:** "Instructions are a budget, not a wishlist."
- **Try this:** Count the directives in your current rules files. If you're over ~50, pick three to delete today.

### knowledge-layer.md
- **Hook:** "Your RAG pipeline might be making your agent dumber — by feeding it more, not better."
- **In short:** Problem = retrieval treated as a silver bullet → Idea = grounding vs. noise → Mechanism = retrieval strategies + just-in-time loading (paths/keys over pasted docs) → Result = relevance beats volume.
- **Mental model:** "Retrieve a pointer, not a paragraph — load the paragraph only when it's needed."
- **Try this:** Pick one place your agent retrieves full documents upfront; replace it with a reference it can fetch on demand.

### tool-layer.md
- **Hook:** "Give an agent 50 tools and watch it get worse at all of them — the tool selection problem nobody designs for."
- **In short:** Problem = too many/overlapping tools confuse the model → Idea = minimal non-overlapping tool sets → Mechanism = clear schemas, result management, MCP, Manus's "mask don't remove" → Result = fewer, well-described tools outperform broad ones.
- **Mental model:** "Tools are part of the prompt — every tool definition is tokens competing for attention."
- **Try this:** List your agent's tools and flag any two with overlapping purposes — merge or cut one.

### tool-engineering.md
- **Hook:** "Most 'reasoning failures' in agents are actually tool design failures in disguise."
- **In short:** Problem = bad tool ergonomics cause silent mistakes → Idea = Agent-Computer Interface (ACI) as a first-class design surface → Mechanism = mistake-proofing patterns (constrained outputs, validation, clear errors) → Result = good ACI prevents whole classes of errors before they happen.
- **Mental model:** "Design tools like a UI for a careless user — your agent."
- **Try this:** Find one tool whose error messages are vague, and rewrite them to tell the model exactly what to do differently.

### memory-layer.md
- **Hook:** "Your agent's memory isn't a record of the past — it's a claim, and claims go stale."
- **In short:** Problem = unbounded or unverified memory misleads future sessions → Idea = short-term vs. long-term vs. episodic memory → Mechanism = belief-update patterns, file-based memory (MEMORY.md), pruning → Result = memory is useful only when treated as fallible.
- **Mental model:** "Memory is a hypothesis about the present, written in the past — verify before trusting."
- **Try this:** Open one memory/notes file your agent relies on and check whether its claims are still true.

### orchestration-layer.md
- **Hook:** "Summarizing your agent's context might be making it worse — here's what the data actually shows."
- **In short:** Problem = naive LLM summarization encourages longer, worse runs → Idea = compaction vs. observation masking vs. sub-agents → Mechanism = structured note-taking, KV-cache stability, coordinator/MapReduce patterns → Result = the right isolation strategy beats aggressive compression.
- **Mental model:** "Don't compress the window — split the work."
- **Try this:** Next time a session feels bogged down, try spawning a sub-agent for the side-task instead of summarizing.

### agentic-dev.md
- **Hook:** "The 35-minute cliff: your coding agent doesn't get smarter the longer it runs — it gets worse."
- **In short:** Problem = long sessions degrade silently → Idea = context strategy is a development practice, not an afterthought → Mechanism = instruction files, specs as context artifacts, sub-agent dispatch, filesystem-as-context → Result = a concrete playbook for starting, structuring, and managing agentic dev sessions.
- **Mental model:** "Treat each session like a sprint with a context budget, not an open-ended conversation."
- **Try this:** Time your next agent session. At the 30-minute mark, checkpoint progress to a file and consider starting fresh.

## Design Decisions

- **Callouts over plain blockquotes** because just-the-docs renders `{: .classname }` blocks as colored boxes — gives each hook/mental-model/action element genuine visual distinction, closer to the "slide" feel of the source format, with zero custom CSS.
- **"Deep dive" heading, not a rewrite** — existing content is preserved verbatim. The hook block is additive framing, not a replacement; readers who want full depth scroll past four short elements to get it.
- **Per-page custom hooks, not a generic template filled in** — each headline is built from a real, specific finding already in that page's content (the 35-minute cliff, the 50-rule ceiling, JetBrains' compaction data, etc.), so the hook is honest rather than clickbait.
- **`index.md` and `sources.md` excluded** — they're navigation/reference, not "topics" with a single core idea to hook on.
- **Pilot scope** — if this lands well, the same template/callouts can extend to `agent-patterns/`, `frameworks/`, and `verification/` in a follow-up.
