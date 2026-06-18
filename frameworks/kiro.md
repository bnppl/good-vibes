---
title: "Kiro"
parent: "SDD Frameworks"
nav_order: 1
last_updated: 2026-06-16
last_read: null
status: unread
---

# Kiro (AWS)

{: .hook }
> **Kiro generated 16 acceptance criteria for a minor bug fix — and that's actually the point. Spec overhead that won't scale down is often a signal you're doing requirements right for the first time.**
>
> Every spec you write with Kiro is building a transferable skill: EARS notation and GIVEN/WHEN/THEN acceptance criteria are established software engineering practices, not AI scaffolding.

**In short:**
- **The problem:** Spec-driven development workflows that produce great artifacts but struggle when the task is small — the ceremony doesn't scale gracefully to bug fixes.
- **The idea:** A three-phase pipeline (requirements → design → tasks) embedded in a familiar VS Code environment, making formal requirements engineering the path of least resistance.
- **How it works:** Requirements.md (EARS/GIVEN-WHEN-THEN), design.md (architecture + tech stack), tasks.md (sequenced implementation plan) — each human-reviewable and editable before proceeding. Steering files persist project knowledge; Agent hooks automate file-event workflows.
- **The result:** The benchmark for what spec-driven development looks like as a first-class product — every artifact is a reviewable, editable checkpoint that stops the train if wrong.

{: .aha }
> **The spec pipeline IS the product** — Kiro's value isn't code generation, it's the structured review checkpoint before any code gets written.

{: .try-it }
> Open Kiro on a feature you were about to implement with a vibe prompt. Read the generated `requirements.md` before proceeding. Count how many acceptance criteria you would have missed without it.

---

## Deep dive

## Overview

Kiro is a VS Code fork / AI-native IDE built on Amazon Bedrock. It's the most prominent purpose-built spec-driven development tool, using a structured three-phase approach to turn natural language prompts into implemented code.

## How It Works

Kiro generates three markdown files that form the spec pipeline:

1. **`requirements.md`** -- Generates requirements and acceptance criteria using EARS notation (Easy Approach to Requirements Syntax) with "GIVEN...WHEN...THEN..." format
2. **`design.md`** -- Analyzes the codebase and produces architecture, system design, and tech stack decisions
3. **`tasks.md`** -- Creates a sequenced implementation plan with discrete tasks and optional tests

Code is then generated file-by-file following the task plan. Kiro also supports "Steering files" (persistent project knowledge in markdown) and "Agent hooks" (automated triggers on file save/create/delete).

## Pros

- **Structured, reviewable pipeline** -- Each phase produces a human-readable artifact you can review and edit before proceeding
- **EARS notation for requirements** -- Brings formal requirements engineering practices into AI-assisted development
- **Familiar IDE experience** -- VS Code fork means minimal learning curve for editor mechanics
- **AWS ecosystem backing** -- Bedrock integration, likely strong future ties to AWS dev tooling
- **Steering files** -- Persistent project context that survives across sessions, similar to `.cursorrules` but spec-oriented
- **Agent hooks** -- Automated workflows triggered by file events, enabling CI-like behavior in the IDE
- **Free during preview** -- No cost barrier to try it now

## Cons

- **Over-documentation for small changes** -- Martin Fowler's team found a minor bug fix generated 16 acceptance criteria; the spec overhead doesn't scale down gracefully
- **Spec-first, not spec-anchored** -- Specs are generated upfront but don't stay in sync with code as it evolves
- **AWS/Bedrock lock-in** -- Tied to Amazon's model infrastructure
- **Closed source** -- No ability to customize the spec pipeline or agent behavior
- **Best for small-to-medium features** -- The three-phase approach becomes unwieldy for large architectural changes
- **New and unproven at scale** -- Limited track record in production team environments
- **Pricing uncertainty** -- Free now, but GA pricing ($19-39/mo) puts it in competitive territory with more mature tools

## Motivational Argument

Kiro is the tool that makes spec-driven development accessible to mainstream developers. By embedding a structured requirements-to-design-to-tasks pipeline directly into a familiar VS Code environment, it removes the friction of adopting SDD practices. You don't need to learn a new framework or change your editor -- you just get a disciplined spec workflow layered on top of what you already know.

The EARS notation and GIVEN/WHEN/THEN acceptance criteria aren't just AI scaffolding -- they're established software engineering practices that have been proven in safety-critical industries for decades. Kiro is teaching developers formal requirements engineering by making it the path of least resistance. Every spec you write with Kiro is building a transferable skill.

If you want to understand what spec-driven development looks like as a first-class product experience rather than a bolted-on workflow, Kiro is the clearest example. It's the benchmark that every other tool in this space is measured against.
