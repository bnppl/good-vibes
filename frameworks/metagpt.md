# MetaGPT / MGX

## Overview

MetaGPT is an open-source multi-agent framework that simulates a software company. Agents play roles -- Product Manager, Architect, Project Manager, Engineer -- each generating structured artifacts that feed into the next phase. MGX (MetaGPT X) launched in Feb 2025 as the hosted product version.

## How It Works

From a one-line requirement, the agent pipeline produces:

1. **Product Manager agent** -- Generates a full PRD with goals, user stories, competitive analysis, requirement pool, and competitive quadrant chart
2. **Architect agent** -- Produces system design, class diagrams, and API specs
3. **Project Manager agent** -- Creates development tasks and schedules
4. **Engineer agent** -- Implements code with unit tests

Each agent verifies intermediate results before passing to the next, following Standardized Operating Procedures (SOPs) encoded into prompt sequences.

## Pros

- **Full software company simulation** -- Models the entire development lifecycle with specialized agents
- **Rich artifact generation** -- PRDs, system designs, class diagrams, API specs, and code all from a single prompt
- **Academic rigor** -- Research paper accepted at ICLR 2025; well-studied and benchmarked
- **Open source** -- Full codebase available, large community, active development
- **SOP-driven** -- Standardized Operating Procedures bring process discipline to agent behavior
- **Verification at each handoff** -- Built-in quality gates between agent phases
- **MGX hosted option** -- Don't need to self-host if you want a managed experience

## Cons

- **Heavy for small tasks** -- Simulating a full software company for a simple feature is massive overkill
- **One-line input limitation** -- The requirement input is less structured than Kiro's or Spec Kit's approach
- **Auto-generated specs** -- You don't write the PRD; the AI does. Less human control over spec content
- **Complex setup for self-hosting** -- Multiple agents, models, and dependencies to configure
- **Optimistic artifact quality** -- Generated PRDs and designs can be superficially impressive but lack domain nuance
- **Token-intensive** -- Multiple agents each consuming full context windows adds up quickly
- **Research-oriented** -- Primary focus has been academic benchmarks rather than production workflows

## Motivational Argument

MetaGPT is the most intellectually ambitious framework in the spec-driven space. By encoding the entire software development lifecycle into communicating agents with formal roles and SOPs, it forces you to think about what each phase of development actually produces and why. Using MetaGPT is like taking a compressed course in software project management, taught by watching AI agents attempt each role.

The multi-agent architecture is genuinely innovative. The insight that different development phases require different reasoning modes -- creative for product thinking, analytical for architecture, systematic for implementation -- and that these should be separate agents with separate prompts, is a design principle that transfers to any agentic system you build or work with.

Even if you use a simpler tool for daily work, understanding MetaGPT's approach gives you a mental model for how complex AI systems decompose problems. The SOPs, verification gates, and role-based prompting patterns are building blocks you'll use in every agentic workflow you design.
