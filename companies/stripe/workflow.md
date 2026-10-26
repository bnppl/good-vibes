---
title: Stripe — observed workflow and optional practice
parent: Stripe
nav_order: 2
last_updated: '2026-10-26'
research_checked: '2026-10-26'
research_cutoff: '2026-10-26'
evidence_since: '2025-10-01'
last_read: null
status: unread
cache_schema: 1
---

# Stripe: observed workflow and optional practice

[Research](research.md) · [Source register](sources.md)

## Observed workflow

This table reconstructs only the published case. It does not invent missing stages or combine separate projects into a mandatory company procedure.

| Stage | Reported action | Evidence |
|---|---|---|
| Describe a bounded task | A developer invokes Minions with enough task context; the reported interaction can start in Slack. | [S01](sources.md#s01) |
| Prepare task environment and context | The documented devbox and selective rules/tool context give the agent an executable workspace. | [S02](sources.md#s02) |
| Execute with fixed gates | The blueprint mixes implementation reasoning with deterministic lint, push and CI operations. | [S02](sources.md#s02) |
| Stop and hand back | A limited CI-repair opportunity is followed by human scrutiny rather than an endless attempt loop. | [S02](sources.md#s02) |

## What is still unknown

The sources do not settle every private permission, production release gate, rollback mechanism, exact model choice or operational result. A successful reported case does not validate a general approach for every workload. Testing a harness and testing the product remain different activities.

<a id="optional-practice"></a>

## Optional practice

**Our adaptation, not a company exercise or reported implementation.** Use a disposable repository and a small product-maintenance change, such as replacing one deprecated API call without changing behaviour. Define a contract before inviting an agent to edit it.

1. Record the current observable behaviour and identify an independent check that would detect a wrong change. Keep the expected outcome outside the generated implementation.
2. Give the agent one bounded change, the relevant source context and an explicit stop condition. Require a proposed plan if the change touches shared behaviour.
3. Run the existing checks before and after the patch. Add a negative observation that would fail for a plausible incorrect implementation; a passing formatting or type check is insufficient.
4. Review the diff and actual behaviour. Record any change to tests, configuration or unrelated files. Do not accept a test rewritten merely to agree with the patch.
5. Keep review, merge and release as separately recorded decisions. If a gate fails, preserve the evidence and either allow a bounded repair or return the task to a person.
6. Record the whole effort: setup, waiting, review, correction and cleanup. Compare a completed useful change, not raw code volume or token consumption.

The result should be a small review packet: original intent, permitted files/actions, independent observations, exact commands and outputs, unresolved risks and a human acceptance decision. Do not connect this exercise to live financial accounts, production credentials or customer data.

## Reflection

Which part required the most human judgment: specifying intent, preparing the environment, evaluating the result, or integrating it? Which checks caught a real error? Which controls existed only in prose? These questions help compare the named case with local conditions without pretending the company’s private tooling has been reproduced.
