---
title: "Smol Developer"
parent: "SDD Frameworks"
nav_order: 8
last_updated: 2026-07-04
last_read: null
status: unread
---

# Smol Developer (smol-ai)

{: .hook }
> **Under 200 lines of Python. No pipeline, no agents, no phases — just a markdown spec in and code out. This is the entire spec-driven development space, stripped to its core mechanism.**
>
> Every other tool in this space is a more sophisticated version of exactly this loop.

**In short:**
- **The problem:** The mechanics of spec-to-code generation are obscured by the complexity of production tools — most developers can't explain how the loop actually works, so they can't reason about where it goes wrong.
- **The idea:** A proof-of-concept that reveals the core mechanism in its purest form: the markdown spec IS the prompt; a file plan is derived; code is generated file-by-file following the plan.
- **How it works:** Read spec → draft file plan → generate code per file. Three stages, under 200 lines, fully transparent. The human can take over the codebase at any point.
- **The result:** The "markdown is the perfect way to prompt for whole program synthesis" insight that proved foundational — Kiro, Spec Kit, OpenSpec, CLAUDE.md all follow it.

{: .aha }
> **The spec is the prompt. All the complexity above this is variations on that single idea.** Understanding the variation matters; understanding the foundation matters more.

{: .try-it }
> Read the Smol Developer source code — it's under 200 lines. Write a markdown spec for a small utility, run it, and observe where the file plan matches your mental model and where it diverges. Each divergence is a design decision the more complex tools are trying to solve.

---

## Deep dive

## Overview

Smol Developer is a lightweight, open-source "junior developer" agent in under 200 lines of Python. Its philosophy is radical simplicity: a markdown specification document IS the prompt, and the entire generation process is transparent and hackable. It's more a proof-of-concept and learning tool than a production framework.

## How It Works

Three stages:

1. **Read spec** -- Ingests a markdown specification mixing English and code
2. **Draft file plan** -- Lists all files needed to implement the spec
3. **Generate code** -- Produces code file-by-file following the plan

The spec is plain markdown -- no special syntax, no proprietary format. Human-in-the-loop: you can take over the codebase at any point and continue manually.

## Pros

- **Radical simplicity** -- Under 200 lines of code; you can read and understand the entire tool in an hour
- **Markdown-is-the-spec** -- No format to learn; your specification document is literally the prompt
- **Fully transparent** -- Every decision the agent makes is visible and understandable
- **Educational value** -- The best tool for understanding how spec-to-code generation actually works
- **Zero ceremony** -- No pipelines, no agents, no phases -- just spec in, code out
- **Hackable** -- Small enough to fork and customize for your specific workflow in a day
- **Open source** -- MIT licensed, no restrictions

## Cons

- **Not production-grade** -- Designed as a proof-of-concept, not a reliable development tool
- **No iteration or debugging** -- Generates code once; doesn't test, debug, or refine
- **No context management** -- Entire spec must fit in one context window
- **Single-shot generation** -- No incremental building or task decomposition
- **No persistent project knowledge** -- Each run is independent; no memory across sessions
- **Limited to small projects** -- Context window constraints mean it can't handle large specifications
- **Minimal maintenance** -- Foundational project that influenced the category but isn't actively developed

## Motivational Argument

Smol Developer is the "Hello World" of spec-driven development. Its value isn't in what it builds -- it's in what it teaches. By stripping away every abstraction, framework, and pipeline, Smol Developer reveals the core mechanism of spec-driven development in its purest form: a structured document goes in, a file plan is derived, and code is generated file-by-file. Every other tool in this space is a more sophisticated version of this exact loop.

The "markdown is the perfect way to prompt for whole program synthesis" insight that Smol Developer demonstrated has proven to be foundational. Kiro uses markdown. Spec Kit uses markdown. OpenSpec uses markdown. CLAUDE.md is markdown. The format won, and Smol Developer was one of the first to prove why.

If you're learning spec-driven development, start here. Spend an afternoon reading the source code, writing a spec, and watching what happens. You'll understand the fundamental mechanics that every tool in this space builds upon, and you'll never be confused by the abstractions that more complex tools layer on top.

---

## Learn on the go

- **Read (short):** [How Coding Agents Work — Simon Willison](https://simonwillison.net/guides/agentic-engineering-patterns/how-coding-agents-work/) *(2026)*. The current-day equivalent of what Smol Developer teaches: the fundamental loop (LLM + system prompt + tools), explained with 2026 tooling instead of a 2023 proof-of-concept.
- **Freshness note:** Smol Developer is a dormant foundational project — no recent coverage exists, and none is expected. Read the source (it's still under 200 lines and still teaches the core mechanism), then study the loop as it exists today via Willison's guide and the resources on [agentic-dev](../context-engineering/agentic-dev.md).
