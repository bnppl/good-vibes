---
has_children: true
title: SDD Frameworks
nav_order: 4
last_updated: 2026-05-29
last_read: null
status: unread
---

# Spec-Driven Development Frameworks

A curated guide to the top tools where structured specifications drive code generation -- not general AI coding assistants, but frameworks where the spec is the primary artifact. The SDD space has grown to [30+ frameworks](https://medium.com/@visrow/spec-driven-development-is-eating-software-engineering-a-map-of-30-agentic-coding-frameworks-6ac0b5e2b484) as of early 2026; this guide covers the twelve most significant.

## Rankings

| Framework | Ease of Adoption | Effectiveness | Cost | Open Source |
|-----------|:---:|:---:|:---:|:---:|
| [Kiro (AWS)](kiro.md) | 8 | 8 | 7 | No |
| [GitHub Spec Kit](github-spec-kit.md) | 6 | 7 | 10 | Yes |
| [Tessl](tessl.md) | 4 | 7 | 5 | No (beta) |
| [OpenSpec](openspec.md) | 7 | 6 | 10 | Yes |
| [Augment Intent](augment-intent.md) | 5 | 8 | 3 | No |
| [MetaGPT / MGX](metagpt.md) | 5 | 7 | 9 | Yes |
| [GPT Pilot](gpt-pilot.md) | 6 | 6 | 9 | Yes |
| [Smol Developer](smol-developer.md) | 9 | 4 | 10 | Yes |
| [Factory Droids](factory-droids.md) | 6 | 7 | 2 | No |
| **BMAD-METHOD** | 6 | 7 | 10 | Yes |
| **SPDD** | 7 | 5 | 10 | Yes |
| **SpecD** | 5 | 6 | 10 | Yes |

> **Scoring** (all out of 10):
> - **Ease of Adoption** -- How quickly you can go from zero to productive
> - **Effectiveness** -- How well it handles real-world spec-driven tasks at scale
> - **Cost** -- Affordability (10 = free/open-source, 1 = expensive enterprise pricing)

## SDD Maturity Levels

Martin Fowler's team (Thoughtworks) identifies three levels of spec-driven maturity:

| Level | Description | Tools at this level |
|-------|-------------|---------------------|
| **Spec-first** | Spec written upfront, guides AI, then often becomes stale | Kiro, Spec Kit, OpenSpec, MetaGPT, GPT Pilot, Smol Developer, Factory Droids, Traycer |
| **Spec-anchored** | Spec persists and evolves alongside code as living documentation | Augment Intent, Intent |
| **Spec-as-source** | Spec IS the source -- humans maintain specs, never edit generated code | Tessl |

## Categories

### Purpose-Built SDD Tools
- [Kiro (AWS)](kiro.md) -- IDE with three-phase requirements/design/tasks pipeline using EARS notation
- [GitHub Spec Kit](github-spec-kit.md) -- Agent-agnostic CLI generating 8+ interconnected spec files with a Constitution
- [Tessl](tessl.md) -- Bidirectional spec-code sync with a 10k+ library Spec Registry
- [OpenSpec](openspec.md) -- Universal standard across 21+ AI tools, brownfield-first
- [Augment Intent](augment-intent.md) -- Living specs with multi-agent orchestration (Coordinator/Implementor/Verifier)
- **Intent** -- Standalone desktop workspace featuring bidirectional sync to prevent spec drift.
- **Traycer** -- VS Code extension that manage "mini-specs" and conducts agent interviews for edge cases.

### Multi-Agent Spec Frameworks
- [MetaGPT / MGX](metagpt.md) -- Simulates a software company with PM, Architect, and Engineer agents
- [GPT Pilot](gpt-pilot.md) -- Multi-agent pipeline with TDD integration and context rewinding

### Foundations & Learning
- [Smol Developer](smol-developer.md) -- Sub-200-line proof-of-concept; the "Hello World" of SDD

### Enterprise Autonomous Agents
- [Factory Droids](factory-droids.md) -- Full SDLC agents with spec-before-code enforcement and org memory

### May 2026 Entrants

Three new frameworks entered the space in early 2026, each taking a distinct angle on the spec-driven model:

**BMAD-METHOD** (Breakthrough Multi-Agent Development) — An open-source structured methodology using specialized agent roles with explicit handoff protocols: Business Analyst, Architect, Developer, and QA agents work sequentially, each receiving a precisely scoped context package from the previous role. The defining feature is its strict no-cross-contamination rule: the Architect agent never sees user messages; the Developer agent never sees business requirements directly. Each agent only receives the artifact its role is responsible for consuming. This produces cleaner separations than frameworks that dump full history to every agent. GitHub: [bmad-code/bmad-method](https://github.com/bmad-code/bmad-method).

**SPDD** (Self-Prompting Driven Development) — A methodology where agents generate and refine their own prompts as part of the development loop. Rather than writing prompts manually, the developer writes a high-level intent statement; the SPDD framework uses an orchestrator agent to decompose that intent into concrete sub-prompts for implementation agents. The self-prompting loop runs iteratively: sub-prompts are refined based on implementation failures before retrying. Best suited for exploratory work where requirements aren't known upfront — the opposite of Kiro or Spec Kit, which require well-formed specs before work begins.

**SpecD** — Emphasizes machine-executable specifications as the primary development artifact. SpecD specs are written in a structured format that can be directly validated (tests generated from them automatically), edited by agents (changes propagate back to tests), and diff'd across versions. The value proposition is spec-code bidirectionality without requiring a proprietary IDE: the spec format is plain JSON/YAML, tooling is CLI-based, and execution is framework-agnostic. Earliest-stage of the three; documentation is sparse but the format specification is stable.

**GSD Redux** — The active fork of GSD (Get Shit Done), which hit 473 HN points in March 2026 as the highest-scoring context engineering / SDD story in Q1 2026. Active development has migrated to [open-gsd/get-shit-done-redux](https://github.com/open-gsd/get-shit-done-redux) (63.8k stars, 5.4k forks, 78 releases as of May 2026). Redux adds a six-command execution loop — `/gsd-new-project`, `/gsd-discuss-phase`, `/gsd-plan-phase`, `/gsd-execute-phase`, `/gsd-verify-work`, `/gsd-ship` — where `/gsd-execute-phase` runs parallel waves with fresh 200k contexts to address context rot. Key addition over the original: structured artifact preservation via STATE.md and CONTEXT.md files that survive context resets, and configurable agent profiles (quality/balanced/budget). Human approval gates at roadmap, plan, and ship stages; execution runs autonomously between gates. See [agentic-dev.md](../context-engineering/agentic-dev.md) for context on why GSD emerged and what problem it solves.

### Toward a Fourth Maturity Level: Compilable Specs

Pipelex (May 2026) argues the three-tier maturity taxonomy (spec-first → spec-anchored → spec-as-source) is incomplete. The next step is **compilable specs**: specifications written in a formal domain vocabulary that can be compiled directly to working code, deterministically, analogous to how OpenAPI specs compile to server stubs or Protobuf definitions compile to typed clients.

The historical precedent is exact — OpenAPI and Protobuf made API and data contracts compilable, eliminating the interpretation gap between spec and implementation. Compilable specs would apply the same principle to feature-level specifications: "What if we could build a compiler that takes a spec and spits out working code, deterministically?" This is the logical endpoint of the spec-as-source vision, with the key addition of determinism. Currently aspirational; Pipelex is pursuing it as their product direction.
