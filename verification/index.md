---
last_updated: 2026-04-27
last_read: null
status: unread
---

# Agentic Verification: Per-Session Habits and Cross-Session Artifacts

Professional AI-assisted development in 2026 is defined by a shift from **code generation** to **code verification**. As AI agents generate increasing volumes of code, the bottleneck — and the risk — is the human ability to verify, understand, and govern the output.

The wiki splits verification into two modules. **Module 3** covers verification habits *within* a single agent session: tests as prompts, comprehension discipline, ACI design. **Module 4** covers verification artifacts that span sessions: the scenarios, contracts, fitness functions, and characterization tests that catch regressions when one agent session breaks something a previous session built.

## Module 3: Per-Session Verification

- [[agentic-tdd]] — Using tests as the primary specification and success criterion for agents.
- [[comprehension-debt]] — Strategies for maintaining cognitive sustainability and system understanding.
- [[../context-engineering/tool-engineering]] — Designing robust Agent-Computer Interfaces (ACI).

## Module 4: Cross-Session Verification

- [[cross-session-regression]] — The cross-session regression problem; why classical regression thinking falls short.
- [[bdd-for-agents]] — Gherkin scenarios as agent contracts and living documentation.
- [[ddd-boundaries]] — Bounded contexts as agent session boundaries.
- [[contract-testing]] — Anti-corruption layers and consumer-driven contracts.
- [[fitness-functions]] — Architectural fitness functions as codified institutional memory.
- [[test-the-tests]] — Mutation and property-based testing for agent-written tests.
- [[characterization-and-handoff]] — Characterization tests for legacy plus the verification handoff problem.
- [[sources]] — Annotated bibliography for the module.
