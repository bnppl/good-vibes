---
parent: 37signals
last_updated: '2026-10-26'
research_checked: '2026-10-26'
research_cutoff: '2026-10-26'
evidence_since: '2025-10-01'
last_read: null
status: unread
cache_schema: 1
title: 37signals — workflow and optional practice
nav_order: 2
---

# 37signals — workflow and optional practice

[Profile](index.md) · [Research](research.md) · [Source findings](sources.md)

## Observed account and its boundary

The sequence below connects published observations; it is an editorial map, not a claim that every employee follows an identical procedure. Steps from different projects retain their source scope.

| Stage | Published observation | Evidence |
|---|---|---|
| Constrain | State compatibility and security properties for Hot Cell. | [S03](sources.md#s03) |
| Exercise | Let agents drive realistic editor interactions. | [S02](sources.md#s02) |
| Compare | Reproduce a defect, then recheck the branch. | [S02](sources.md#s02) |
| Supervise | Retain human direction and outcome review. | [S01](sources.md#s01) |
| Learn | Feed production findings back into Hot Cell. | [S03](sources.md#s03) |

## What to preserve when adapting

Use realistic execution to challenge the result. Keep explicit product constraints separate from development permissions; a component’s sandbox is not the agent’s sandbox.

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
