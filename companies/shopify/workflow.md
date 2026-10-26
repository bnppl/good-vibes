---
title: Shopify — workflow
parent: Shopify
nav_order: 3
last_updated: '2026-10-26'
research_checked: '2026-10-26'
research_cutoff: '2026-10-26'
evidence_since: '2025-10-01'
last_read: null
status: unread
cache_schema: 1
---

# Shopify — observed workflow and optional practice

[Profile](index.md) · [Research](research.md) · [Sources](sources.md)

## Observed workflow

This map keeps the related cases separate. It is not a fabricated single standard operating procedure for the company. The interpretation column describes why an observation matters; it does not add undocumented private steps.

| Reported step or boundary | Source / date | Reading implication |
|---|---|---|
| Set a task and provide an executable environment | [S01](sources.md#s01) · 2026-10-22 | Record the target, platform and observed output, rather than accepting a source edit as completion. |
| Discover, then verify candidates | [S03](sources.md#s03) · 2026-07-29 | Separate a hypothesis from a test that exercises it. Preserve the real application controls. |
| Refresh state before advancing the remediation | [S02](sources.md#s02) · 2026-09-02 | Old records and prior checks cannot certify a changed revision. |
| Escalate decisions and retain the handoff | [S02](sources.md#s02) · 2026-09-02 | A human authority boundary is a normal result, not an agent failure. |
| Use shared context without treating it as infallible | [S04](sources.md#s04) · 2026-05-28 | Discussion records and skills are inputs to judgment, not the source of operational truth. |

## What this map cannot establish

These sources establish several complementary workflows, not one identical process across all of Shopify. Remote Dev, Dispatch and the remediation loop solve different problems. River and World remain internal; Liquid and other open-source contributions establish background rather than public availability of the entire harness.

Do not fill the gaps with a company’s older books, its open-source popularity or a tool vendor’s feature list. A policy can be sensible without being this team’s observed practice.

<a id="optional-practice"></a>

## Optional practice

### Revision-aware remediation rehearsal

**Our suggested adaptation.** This is a small independent exercise, not a reproduction or benchmark of the company’s infrastructure. Use disposable code and synthetic data. Write the expected observation before asking an assistant to change anything.

1. Create a tiny service with a deliberately outdated dependency and a test exercising the affected public behaviour. Keep it offline and use a harmless fixture, not a real exploit.
2. Have an assistant prepare a narrow upgrade and record the tested commit. Independently change a neighbouring dependency on the base branch.
3. Rebase the proposal. Check that the neighbouring change survives and that a fresh test run names the new commit. Reject the old green result.
4. Review and merge manually, then inspect the resulting dependency tree and reconcile the work record. Also rehearse a human-takeover branch that the assistant must leave untouched.

### Record evidence, including a useful stop

| Record | What to capture |
|---|---|
| Intent | The observable outcome and the owner of the decision |
| Context | The revision, configuration and inputs actually supplied |
| Observation | The executed check, output and the limits of its coverage |
| Decision | Accept, reject, defer or ask a named human to decide |
| Follow-through | The final revision and any unresolved work, rather than an unsupported completion claim |

Keep failures and uncertainty in the record. Compare time, cost and rework only across equivalent tasks and validation boundaries. The source accounts do not establish a universal performance target for this exercise.
