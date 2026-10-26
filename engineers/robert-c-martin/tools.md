---
title: Robert C. Martin — tools and chronology
parent: Robert C. Martin
nav_order: 3
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
---

# Tools and chronology

[Profile](index.md) · [Research](research.md) · [Sources](sources.md)

## Different evidence, different scope

| Resource | Relationship established | What was inspected | Limit |
|---|---|---|---|
| Clean AI series | Joint Robert/Justin Martin teaching | Public episode descriptions | Paid videos were not viewed |
| SwarmForge | Published agent-coordination artifact | README and three shared instruction files at pinned revision | Not executed; not assumed to be his current personal topology |
| Quality-tool family | Named by the repository's engineering instructions | Tool table and guardrails | Individual tool implementations and installations were not audited |
| Gherkin acceptance components | Named in the engineering instructions | Parser/mutation pipeline description | No end-to-end generated harness was run |
| Terminal Grok, with earlier Codex/Claude | September personal report | Primary interview page | Dated self-report, not a complete present private inventory |
| Existing target-project runner | Our suggested choice | Must be discovered in the real project | No language or runner is prescribed by the common task |

The personal report and published artifact can coexist without contradiction: publication is not evidence of continuing daily adoption. See [the chronology](research.md#published-framework-is-not-a-current-personal-topology).

## Pinned artifact

The SwarmForge files were read at `f4f5fbcae0de6f7dcc26e82400334227647cfdb2`, commit dated **4 September 2026**, inspected on 26 October. The README describes product composition, prerequisites and launch routes. The branch/product-specific configuration remains relevant; the shared branch alone is not a complete installation. [S09](sources.md#s09)

This guide intentionally links the authoritative setup rather than copying an installer recipe that composes moving branches. No command was run, no dependency installed, and no credentials or agent backend configured. Recheck the selected product and its complete configuration before adopting it.

## Quality tools and guardrails

The engineering prompt names CRAP, mutation and duplication tooling for several languages. It also describes acceptance-pipeline helpers, sequential verification and restrictions on substituting invented tools or manually editing mutation manifests. [S10](sources.md#s10)

These are instructions in an inspected artifact. They are not an independently verified access-control boundary. A prompt that forbids weakening a check does not prove that an implementer lacks the capability to weaken it. In our adaptation, reviewers inspect changes to tools, configuration, expectations and manifests as part of the acceptance decision.

The repository's published workflow and handoff records address which checkout an agent owns and how committed work is transferred. They do not establish application-state durability or a universal production release gate. [S11](sources.md#s11) · [S12](sources.md#s12)

## Suggested selection for the reward task

Start with the real project's existing runner and supported application boundary. Add a mutation tool only when compatible and useful; investigate a surviving mutation before changing a threshold. Use a diagram only if it helps explain the state transition, and verify it against actual code or execution.

Do not assume that adopting a package or copying a role name reproduces another engineer's judgment. The necessary setup for this exercise is the ability to observe the six agreed outcomes honestly, keep the change comprehensible, and record the checks that support acceptance.
