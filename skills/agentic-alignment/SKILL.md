---
name: agentic-alignment
description: Use when an existing project needs better AI-agent ergonomics — cleaning up instruction files, adding specs where they help, establishing test baselines, and removing context noise. Brownfield-focused.
---

# Agentic Alignment

Bring an existing codebase into shape for working with AI coding agents. This skill is for **brownfield projects** — code that already exists, has history, and has conventions (documented or not).

This is NOT about setting up a new project from scratch. It's about making an existing one work better with agents by reducing noise, clarifying intent, and establishing verification habits.

## When to use this

- You're starting to use Claude Code (or another agent) on an existing codebase
- Agent output quality is inconsistent and you suspect the context is the problem
- The project has grown organically and instruction files are bloated or missing
- You want to retroactively add specs to complex areas without boiling the ocean

## When NOT to use this

- Greenfield projects — just write good CLAUDE.md from the start
- Quick bug fixes or small features — just do the work
- The project already has clean instruction files and good test coverage

## Core principles

1. **Less is often more** — removing irrelevant context improves agent output. Don't add things "just in case."
2. **Examples beat rules** — showing the model what good output looks like outperforms describing it.
3. **Progressive disclosure** — point agents to docs when relevant, don't frontload everything.
4. **Don't store what's derivable** — the agent can read the filesystem, run git log, and check test output. Don't duplicate that in instruction files.
5. **Match effort to complexity** — a one-paragraph spec for a small module is fine. Not everything needs formal treatment.
6. **Verify before claiming done** — run the tests, check the output, confirm it works. Every stage.

## Workflow

Four stages, in order. Each stage has detailed instructions in a reference file — read it when you reach that stage, not before.

### Stage 1: Audit

Understand what the agent currently "sees" and where the noise is.

**Read:** [references/stage-1-audit.md](references/stage-1-audit.md)

**Done when:** You have a clear picture of instruction files, test coverage, and documentation state, written to a `CONTEXT_AUDIT.md` in the project root.

### Stage 2: Instruct

Set up or clean up instruction files (CLAUDE.md, subdirectory configs) so they are focused and high-signal.

**Read:** [references/stage-2-instruct.md](references/stage-2-instruct.md)

**Done when:** The project has a CLAUDE.md that a new agent session could pick up and immediately be productive with. The user has approved every instruction.

### Stage 3: Spec

Retroactively spec the parts of the codebase that are complex, poorly documented, or frequently misunderstood by agents.

**Read:** [references/stage-3-spec.md](references/stage-3-spec.md)

**Done when:** High-complexity modules have lightweight specs. Simple code is left alone.

### Stage 4: Verify

Establish a test baseline and verification habits so agent output is checked, not trusted.

**Read:** [references/stage-4-verify.md](references/stage-4-verify.md)

**Done when:** Core modules have test coverage, the test command is in CLAUDE.md, and there's a clear workflow for verifying agent changes.

## Important

- **Always ask before changing files.** This skill audits and recommends. The user decides what to apply.
- **Don't do all four stages in one session.** Stage 1 is always worth doing. Stages 2-4 depend on what the audit reveals — some projects may only need one or two of them.
- **The audit may reveal the project is fine.** If instruction files are clean, tests pass, and the agent works well, say so and stop.
