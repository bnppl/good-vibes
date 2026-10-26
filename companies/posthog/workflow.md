---
parent: PostHog
last_updated: '2026-10-26'
research_checked: '2026-10-26'
research_cutoff: '2026-10-26'
evidence_since: '2025-10-01'
last_read: null
status: unread
cache_schema: 1
title: PostHog — workflow and optional practice
nav_order: 2
---

# PostHog — workflow and optional practice

[Profile](index.md) · [Research](research.md) · [Source findings](sources.md)

## Observed account and its boundary

The sequence below connects published observations; it is an editorial map, not a claim that every employee follows an identical procedure. Steps from different projects retain their source scope.

| Stage | Published observation | Evidence |
|---|---|---|
| Specify | Write intended behavior and unresolved decisions. | [S02](sources.md#s02) |
| Detect | Gather and deduplicate feedback. | [S02](sources.md#s02) |
| Prepare | Generate a proposed fix and supporting review evidence. | [S02](sources.md#s02) |
| Decide | Review, approve and merge in the named example. | [S02](sources.md#s02) |
| Remember | Maintain explicit project state in the personal workflow. | [S03](sources.md#s03) |

## What to preserve when adapting

Keep a human decision point, durable evidence and a way to verify that a proposed fix actually addressed the original observation.

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
