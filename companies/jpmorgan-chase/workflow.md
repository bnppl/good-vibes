---
parent: JPMorgan Chase
last_updated: '2026-10-26'
research_checked: '2026-10-26'
research_cutoff: '2026-10-26'
evidence_since: '2025-10-01'
last_read: null
status: unread
cache_schema: 1
title: JPMorgan Chase — workflow and optional practice
nav_order: 2
---

# JPMorgan Chase — workflow and optional practice

[Profile](index.md) · [Research](research.md) · [Source findings](sources.md)

## Observed account and its boundary

There is no complete recent observed workflow to reproduce in this cache. The following is an evidence map, not a reconstructed bank delivery process.

| Stage | Published observation | Evidence |
|---|---|---|
| Adoption statement | Internal AI use is publicly stated; task mechanics absent. | [S01](sources.md#s01) |
| Guidance | Leadership recommends platform and context discipline. | [S02](sources.md#s02) |
| Historical lead | Payments tooling detail predates the cutoff. | [S04](sources.md#s04) |
| Research gap | Recent test, review and release execution remains unknown. | [S03](sources.md#s03) |

## What to preserve when adapting

Preserve provenance before adopting a claimed workflow. A dated strategy deck is not a task trace; do not supply missing safeguards from assumptions about banks.

## Optional practice

**Suggested adaptation, not company practice.** Use a small reward service as a common contract when comparing the approaches. Keep this behavior independent of any agent-generated implementation:

| Step | Observation | Expected balance |
|---|---|---|
| 0 | Read an isolated initial account | 0 |
| 1 | Deliver event A | 10 |
| 2 | Deliver A again | 10 |
| 3 | Restart the service while retaining durable data; read before replay | 10 |
| 4 | Deliver A after restart | 10 |
| 5 | Deliver distinct event B | 20 |

Have the implementation expose `balance()`, `deliver(event_id)` and `restart_preserving_data()`. Run these observations through an external black-box check, rather than reading a test-owned substitute for the balance. The replay-only check cannot reveal whether the service lost its state at restart: the pre-replay read is essential.

Before asking an agent to implement or test it, record who may edit the contract, which files it may change, the command used to execute checks, and when a human decision is needed. Preserve the actual command output and changed-file list. A passing generated test suite is not a substitute for the observations above.

For this gap-first study, also score the evidence itself: does the proposed source show a task, original input, actual executed checks and named decision authority? If any is missing, label it unknown rather than filling it with a generic bank policy.
