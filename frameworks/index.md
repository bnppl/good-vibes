---
has_children: true
title: SDD Frameworks
nav_order: 4
last_updated: 2026-08-16
last_read: null
status: unread
---

# Spec-Driven Development Frameworks

A curated guide to the top tools where structured specifications drive code generation -- not general AI coding assistants, but frameworks where the spec is the primary artifact. The SDD space has grown to [30+ frameworks](https://medium.com/@visrow/spec-driven-development-is-eating-software-engineering-a-map-of-30-agentic-coding-frameworks-6ac0b5e2b484) as of early 2026, with [15+ compared in depth](https://medium.com/@wasowski.jarek/comparing-15-spec-driven-development-frameworks-artifacts-and-decision-paths-sdd-c052df529274) by Jaroslaw Wasowski (Apr 2026) on an 8-dimensional matrix. This guide covers the twelve most significant. Notable ecosystem additions since last update: **Superpowers** (166K GitHub stars — most in category), **GSD** (473 HN points, March 2026), **MUSUBI** (EARS format, C4 diagrams, traceability matrix). New convergence: SDD frameworks increasingly integrate harness engineering patterns — spec-as-source is meeting verification loops.

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

### August 2026 Update: Consolidation, and a Credibility Question

**Google's Conductor went cross-tool (July 16, 2026).** Conductor — spec-driven development in the terminal, built on persistent version-controlled `spec.md` and `plan.md` artifacts — graduated from a Gemini CLI extension into a **plugin framework supporting multiple tools**, starting with Antigravity CLI. Google reports the Conductor plugin achieving a higher success rate than non-SDD usage on the most complex subset of TerminalBench tasks. Two things are notable. First, the framing: Google is explicitly targeting "a more fluid, conversational experience without sacrificing the procedural rigor of SDD" — an admission that the ceremony critique landed. Second, the direction of travel matches OpenSpec and Spec Kit: the winning frameworks are becoming *portable layers* over whichever agent you already run, not IDEs you switch to.

**Tier structure has stabilized.** The current consensus grouping across the 2026 surveys: **Tier 1** vendor-backed (AWS Kiro, GitHub Spec Kit), **Tier 2** community-led (BMAD-METHOD, GSD, Cursor Plan Mode, Conductor), **Tier 3** niche-optimized (OpenSpec, Tessl). OpenSpec remains the most actively maintained open-source entrant at 52.1K GitHub stars as of June 2026.

{: .caution }
> **Treat framework star counts as marketing, not adoption.** Superpowers' 166K stars — cited in the intro above and in most 2026 surveys as "most in category" — is an outlier large enough to be worth skepticism, and star counts have never tracked production use well. The July–August 2026 HN threads point the other way: "Ask HN: What Happened to Spec-Driven Development?" (August 5) and "Spec-Driven Development: The New Waterfall" (August 5) both drew engagement while the SDD tooling announcements drew almost none. Two readings fit the data — the methodology has quietly become normal infrastructure that nobody posts about, or the hype cycle has turned. This guide does not yet have the evidence to say which, and neither does anyone selling a framework.

The substantive counterweight to read alongside any framework evaluation is HumanLayer's "Why Software Factories Fail" (July 2026), covered in [harness-engineering](../context-engineering/harness-engineering.md#the-limits-of-the-harness). Its argument bears directly on tool selection: the planning phases that matter most — product review and system architecture — are the ones no framework can perform for you. A framework that structures those conversations is worth adopting; one that generates artifacts *instead of* having them is the ceremony the critics are describing.
