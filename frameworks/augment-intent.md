---
title: "Augment Intent"
parent: "SDD Frameworks"
nav_order: 5
last_updated: 2026-06-16
last_read: null
status: unread
---

# Augment Code Intent

{: .hook }
> **Every other spec-driven tool generates specs upfront and then largely abandons them as the code evolves. Intent is the only tool that takes "living specs" seriously as a product feature.**
>
> Specs that stay in sync with code aren't documentation — they're the authoritative source of intent. That's the holy grail of spec-driven development, and Intent is the first serious attempt to ship it.

**In short:**
- **The problem:** Specs become stale documentation the moment implementation begins — the spec says one thing, the code does another, and nobody is certain which is right.
- **The idea:** Living specs that update continuously as agents implement changes, maintained by a Coordinator/Implementor/Verifier multi-agent architecture.
- **How it works:** Coordinator breaks specs into tasks → parallel Implementors execute → Verifier checks results against spec → spec is updated as implementation proceeds (not abandoned). Cross-repository context engine understands relationships across repos.
- **The result:** The Coordinator/Implementor/Verifier pattern is a transferable design pattern for any multi-agent system — regardless of whether you use Intent itself.

{: .aha }
> **A spec that stays in sync with the code isn't documentation — it's the source of truth.** Every other tool treats the spec as a starting point; Intent treats it as a living contract.

{: .try-it }
> For your last feature, find one place where the original spec and the final implementation diverged. Who updated the spec? If the answer is "nobody," write down what the spec now says vs. what the code does. That delta is exactly what Intent is designed to prevent.

---

## Deep dive

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
