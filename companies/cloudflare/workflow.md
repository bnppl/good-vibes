---
title: Cloudflare — workflow
parent: Cloudflare
nav_order: 3
last_updated: '2026-10-26'
research_checked: '2026-10-26'
research_cutoff: '2026-10-26'
evidence_since: '2025-10-01'
last_read: null
status: unread
cache_schema: 1
---

# Cloudflare — observed workflow and optional practice

[Profile](index.md) · [Research](research.md) · [Sources](sources.md)

## Observed workflow

This map keeps the related cases separate. It is not a fabricated single standard operating procedure for the company. The interpretation column describes why an observation matters; it does not add undocumented private steps.

| Reported step or boundary | Source / date | Reading implication |
|---|---|---|
| Maintain approved requirements with accountable owners | [S02](sources.md#s02) · 2026-08-04 | Separate a standards document’s acceptance from its promotion to enforcement. |
| Supply relevant context through shared infrastructure | [S01](sources.md#s01) · 2026-04-20 | Access to many tools is not a reason to place all information into every task. |
| Coordinate specialist findings into a review result | [S03](sources.md#s03) · 2026-04-20 | Structured outputs make duplicate handling and downstream actions explicit. |
| Re-review the changed work with its history | [S03](sources.md#s03) · 2026-04-20 | Previously raised issues need a resolution state, not merely another fresh summary. |
| Escalate what the review cannot establish | [S03](sources.md#s03) · 2026-04-20 | Architecture, dependency consumers and subtle timing behaviour can demand independent investigation. |

## What this map cannot establish

Cloudflare’s Engineering Codex is its own internal guidance corpus; it must not be confused with an OpenAI product. These sources establish concrete internal review work, not an end-to-end test-first or release workflow. Aggregate findings can include false positives and do not measure defects prevented. Pingora and other public projects do not make the private standards or review deployment public.

Do not fill the gaps with a company’s older books, its open-source popularity or a tool vendor’s feature list. A policy can be sensible without being this team’s observed practice.

<a id="optional-practice"></a>

## Optional practice

### A non-blocking standard promoted to a gate

**Our suggested adaptation.** This is a small independent exercise, not a reproduction or benchmark of the company’s infrastructure. Use disposable code and synthetic data. Write the expected observation before asking an assistant to change anything.

1. In a sample repository, write two short standards with owners and stable identifiers: one advisory and one mandatory. Keep both initially non-blocking.
2. Ask an assistant to review a small diff against only the relevant standards and return structured findings with exact locations and identifiers. Compare the output with a human reading.
3. Promote only the mechanically checkable mandatory rule to a deterministic CI gate. Keep judgment-heavy findings advisory. Exercise a compliant diff and a violating diff.
4. Change the diff and re-review it. Record which findings were fixed, disputed or still open. Verify that an unavailable model cannot silently change the meaning of the deterministic gate.

### Record evidence, including a useful stop

| Record | What to capture |
|---|---|
| Intent | The observable outcome and the owner of the decision |
| Context | The revision, configuration and inputs actually supplied |
| Observation | The executed check, output and the limits of its coverage |
| Decision | Accept, reject, defer or ask a named human to decide |
| Follow-through | The final revision and any unresolved work, rather than an unsupported completion claim |

Keep failures and uncertainty in the record. Compare time, cost and rework only across equivalent tasks and validation boundaries. The source accounts do not establish a universal performance target for this exercise.
