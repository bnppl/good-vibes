# Augment Code Intent

## Overview

Intent is Augment Code's desktop workspace for spec-driven development with multi-agent orchestration. Its key innovation is "living specs" -- specifications that update continuously as agents implement changes, maintaining real-time sync between documentation and code.

## How It Works

Intent uses a multi-agent architecture:

- **Coordinator** agent breaks specs into tasks
- **Implementor** agents execute tasks in parallel
- **Verifier** agent checks results against the spec

Powered by a "Context Engine" with cross-repository understanding, Intent maintains living specs that evolve alongside the implementation rather than becoming stale artifacts.

## Pros

- **Living specs** -- Specs update as code changes, solving the biggest problem with spec-first tools (stale documentation)
- **Multi-agent orchestration** -- Multiple agents working against the same spec simultaneously enables parallelism
- **Cross-repository context** -- Context Engine understands relationships across repos, not just within one
- **Spec-anchored maturity** -- Closest to the ideal of specs and code evolving together
- **Coordinator/Implementor/Verifier pattern** -- Built-in quality checks through agent role separation
- **Enterprise positioning** -- Designed for team-scale development, not just individual use

## Cons

- **Closed source and commercial** -- Proprietary tool with enterprise pricing
- **Desktop app requirement** -- Not terminal-native or browser-based; requires their specific client
- **Relatively opaque** -- Less public documentation about spec format and agent behavior than competitors
- **Enterprise sales cycle** -- May be difficult for individual developers or small teams to access
- **Unproven living spec model** -- The promise of specs staying in sync with code is ambitious and hard to verify
- **Vendor lock-in** -- Specs are managed within Intent's ecosystem, limiting portability
- **New entrant** -- Less community validation and real-world case studies

## Motivational Argument

Intent is the only tool that takes the "living spec" concept seriously as a product feature. Every other spec-driven tool generates specs upfront and then largely abandons them as the code evolves. Intent's promise -- that specs and code stay synchronized through continuous agent-mediated updates -- is the holy grail of spec-driven development. If it delivers, it eliminates the primary criticism of SDD: that specs become stale documentation.

The multi-agent architecture is worth studying even if you never use Intent itself. The Coordinator/Implementor/Verifier pattern is a design pattern for agentic systems that you'll see replicated across the industry. Understanding how to decompose specs into parallelizable tasks and verify results against requirements is a core competency for working with any multi-agent system.

For developers working in enterprise environments where cross-repository context and team-scale coordination matter, Intent represents what spec-driven development looks like when it grows up beyond individual developer productivity.
