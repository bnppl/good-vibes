# Kiro (AWS)

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
