---
title: Mozilla — workflow
parent: Mozilla
nav_order: 3
last_updated: '2026-10-26'
research_checked: '2026-10-26'
research_cutoff: '2026-10-26'
evidence_since: '2025-10-01'
last_read: null
status: unread
cache_schema: 1
---

# Mozilla — observed workflow and optional practice

[Profile](index.md) · [Research](research.md) · [Sources](sources.md)

## Observed workflow

This map keeps the related cases separate. It is not a fabricated single standard operating procedure for the company. The interpretation column describes why an observation matters; it does not add undocumented private steps.

| Reported step or boundary | Source / date | Reading implication |
|---|---|---|
| Take an actionable security report | [S04](sources.md#s04) · 2026-03-06 | A concrete reproduction gives maintainers something to validate rather than a claim to debate in the abstract. |
| Integrate investigation with existing engineering systems | [S01](sources.md#s01) · 2026-05-07 | Discovery, triage, fixes and shipping remain separate pieces of the lifecycle. |
| Explore a product interaction in its real runtime | [S02](sources.md#s02) · 2026-08-05 | Real input behaviour can be observed without claiming all backend work is complete. |
| Keep personal experience scoped | [S03](sources.md#s03) · 2026-08-31 | An onboarding account adds useful detail without proving a mandatory organisation-wide sequence. |

## What this map cannot establish

The security, UX and internship sources are separate evidence strands. No complete company-wide requirement, increment-size, memory, permissions or release policy was established. Firefox is an open-source product; that does not automatically publish the private security harness. The August prototype was an exploration with explicit incomplete layers, not an already validated replacement for usability research.

Do not fill the gaps with a company’s older books, its open-source popularity or a tool vendor’s feature list. A policy can be sensible without being this team’s observed practice.

<a id="optional-practice"></a>

## Optional practice

### A harmless reproducer and a native prototype boundary

**Our suggested adaptation.** This is a small independent exercise, not a reproduction or benchmark of the company’s infrastructure. Use disposable code and synthetic data. Write the expected observation before asking an assistant to change anything.

1. Choose a small validation bug in an isolated demo application. Write an executable input that demonstrates the wrong observable result without accessing real user data.
2. Give an assistant the reproduction and ask for a minimal fix. Run the same input before and after, plus an independently chosen neighbouring case.
3. Separately prototype one small UI interaction in its actual runtime. Record which validation, navigation and input states work, and explicitly list unconnected APIs or fake data.
4. Have a human review the fix and the prototype boundary. Preserve the observation that changed the decision rather than counting generated code as success.

### Record evidence, including a useful stop

| Record | What to capture |
|---|---|
| Intent | The observable outcome and the owner of the decision |
| Context | The revision, configuration and inputs actually supplied |
| Observation | The executed check, output and the limits of its coverage |
| Decision | Accept, reject, defer or ask a named human to decide |
| Follow-through | The final revision and any unresolved work, rather than an unsupported completion claim |

Keep failures and uncertainty in the record. Compare time, cost and rework only across equivalent tasks and validation boundaries. The source accounts do not establish a universal performance target for this exercise.
