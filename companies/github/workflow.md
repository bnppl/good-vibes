---
title: GitHub — workflow and optional practice
parent: GitHub
nav_order: 2
last_updated: '2026-10-26'
research_checked: '2026-10-26'
research_cutoff: '2026-10-26'
evidence_since: '2025-10-01'
last_read: null
status: unread
---

# GitHub — workflow and optional practice

[Profile](index.md) · [Research](research.md) · [Sources](sources.md)

## Observed workflows

| Case | Reported sequence | Evidence |
|---|---|---|
| Small tool | Plan → implement → automated review → human review | [March account](sources.md#s01) |
| Runtime migration | Select a slice → preserve compatibility → run existing checks → integrate incrementally | [September retrospective](sources.md#s02) |

The rows are compressed maps, not a single combined official workflow. They omit no permission implied by a missing arrow: release approval and private controls remain scoped to the source.

<a id="optional-practice"></a>

## Optional practice

**Suggested adaptation, not reported company practice.** No proposed step below is evidence that the company follows it.

Use a small parser with a saved input/output corpus in an isolated local project. Keep the corpus outside the implementation agent's editable scope.

1. Write down the existing command, exit codes and outputs for valid and invalid inputs. Include an empty input, a malformed record and a Unicode case.
2. Establish the baseline against the original implementation. Record the tool versions and input fixture hashes.
3. Delegate a single implementation slice while preserving the same external command contract. Do not ask for architectural cleanup in the same task.
4. Run the saved corpus against both versions. Compare outputs, exit codes and error behaviour independently of tests the agent added.
5. Review fixture changes separately. Deliberately introduce one boundary error and confirm that the comparison fails.
6. Record a rollback path and what a staged deployment would observe. Do not deploy as part of this lab.

**Success observations:** the intended fixtures agree; the seeded defect is detected; the agent cannot quietly replace expected outputs; and a human can explain the changed boundary. Passing this small corpus does not prove compatibility on unseen inputs.
