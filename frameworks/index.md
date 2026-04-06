---
last_updated: 2026-04-06
last_read: null
status: unread
---

# Spec-Driven Development Frameworks

A curated guide to the top tools where structured specifications drive code generation -- not general AI coding assistants, but frameworks where the spec is the primary artifact. The SDD space has grown to [30+ frameworks](https://medium.com/@visrow/spec-driven-development-is-eating-software-engineering-a-map-of-30-agentic-coding-frameworks-6ac0b5e2b484) as of early 2026; this guide covers the nine most significant.

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
