---
title: Coinbase — observed workflow and optional practice
parent: Coinbase
nav_order: 2
last_updated: '2026-10-26'
research_checked: '2026-10-26'
research_cutoff: '2026-10-26'
evidence_since: '2025-10-01'
last_read: null
status: unread
cache_schema: 1
---

# Coinbase: observed workflow and optional practice

[Research](research.md) · [Source register](sources.md)

## Observed workflow

This table reconstructs only the published case. It does not invent missing stages or combine separate projects into a mandatory company procedure.

| Stage | Reported action | Evidence |
|---|---|---|
| Prepare the reference and intent | The engineer supplies the relevant screenshots or service details together with a reference and explicit rules. | [S01](sources.md#s01) |
| Review the plan | The orchestration pattern stops for human sign-off before implementation. | [S01](sources.md#s01) |
| Establish the shared scaffold | Routing, permissions and stubs form a checked draft foundation. | [S01](sources.md#s01) |
| Generate focused slices | Workers implement independent components and open focused draft PRs against that foundation. | [S01](sources.md#s01) |
| Review missing judgment | Engineers refine business rules, visual details, integration behaviour and edge-case tests before launch. | [S01](sources.md#s01) |

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
