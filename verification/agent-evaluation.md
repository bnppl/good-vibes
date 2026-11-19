---
title: Agent Evaluation
parent: Verification
nav_order: 11
last_updated: 2026-11-19
last_read: null
status: unread
---

# Agent Evaluation: Measure the Workflow You Actually Use

## Two different questions

Application tests ask whether the resulting software behaves correctly on the cases checked. Agent evaluation asks whether a model, instructions, tools, and environment reliably complete representative tasks within acceptable constraints. A correct patch can still require excessive review, violate scope, or cost too much. An agent can also claim success without producing a working result.

Anthropic's [Demystifying evals for AI agents](https://www.anthropic.com/research/demystifying-evals-for-ai-agents) (January 9, 2026) distinguishes tasks, repeated trials, traces, and actual outcomes. It recommends starting with 20–50 tasks drawn from real failures. Code-based checks, calibrated model grading, and human review serve different purposes. These are practical recommendations from that source, not a universal required dataset size.

## A small evaluation loop

The following is a suggested learning exercise. Start with five tasks you understand: a bug, feature, refactor, regression, and discovery task. Include ambiguous input where asking a question or stopping is correct. Add held-out tasks before tuning; grow the set as you encounter failures.

For each task, specify the starting commit and fixtures, the request, allowed actions, acceptance criteria, and limits. Write the rubric before inspecting candidate output. Prefer checks of observable outcomes over a prescribed sequence of tool calls: different valid implementations should be allowed.

Record each attempt independently:

| Field | What to record |
|---|---|
| Configuration | Model identifier, tool/harness version, instructions, permissions, date |
| Task and trial | Task ID, starting commit, fixtures, repeat number |
| Correctness | Acceptance checks, existing regression checks, human assessment |
| Operational behaviour | Scope violations, failed tool calls, retries, need for intervention |
| Effort | Elapsed time, human review minutes, rework minutes |
| Resource use | Cost or tokens; mark unavailable values as unknown |
| Understanding | Human explanation of the approach and important failure modes |
| Evidence | Diff, final state, check output, redacted tool trace |

Reset the environment between attempts. Keep a copy of the task/rubric outside the candidate's writable workspace where practical. Inspect changes to tests and grading configuration: weakening an assertion must not count as fixing a bug. Protect authoritative checks through repository permissions and CI where the risk warrants it.

## Keep comparisons fair

Change one variable at a time: instructions, retrieval, tool interface, feedback, or orchestration. Keep other configuration and starting state fixed. Repeat selected tasks under each configuration and alternate run order when practical. Account for cache effects and document model or service changes you cannot control.

Report counts and variation alongside averages. Five learning tasks cannot justify a population-wide productivity claim. Distinguish improvement on tasks used for tuning from results on unseen tasks. If the same held-out tasks repeatedly guide revisions, they have become tuning data; reserve new ones before making broader claims.

Evaluate reliable completion under a fixed budget. A workflow that eventually succeeds after many attempts may be unsuitable when each request needs dependable execution. Set your quality floor before choosing on latency or cost.

## Diagnose failures before adding complexity

Inspect the outcome and the tool trace, then classify the failure: ambiguous requirement, missing/stale context, tool misuse, implementation error, inadequate verification, permission violation, or failed handoff. Record the evidence and an alternative explanation. A trace documents observable actions and outputs; it does not establish the model's internal reasoning. Redact sensitive values before storing traces.

Use deterministic checks for precise assertions and human review for intent and important trade-offs. If using a model grader, calibrate it against human-labelled examples, test whether it favours its own style, and keep it separate from the candidate's instructions. Do not let a fluent explanation override a failed outcome check.

## Action step

Create your task list and run record. Predict the effect of one proposed change, repeat the comparison, and write a keep/reject decision with limitations. Turn each informative failure into a new regression task.

## Cross-references

- [Learning plan](../learning-plan.md) — baseline and comparison labs.
- [Harness engineering](../context-engineering/harness-engineering.md) — the components being evaluated.
- [Test the tests](test-the-tests.md) — checking whether your correctness checks catch defects.
- [Security and containment](agent-security.md) — access boundaries and benign negative tests.

## Evaluate Discovery and Environment Failures Separately

A skill can work when named explicitly yet never be selected during real work. Compare natural requests with explicit invocation, then inspect discovery, adherence, and the final application separately. See the [skills exercise](../context-engineering/instruction-layer.md#october-2026-evaluate-whether-skills-are-discovered).

An older gap also matters: Anthropic's [infrastructure-noise study](https://www.anthropic.com/research/infrastructure-noise) (February 5, 2026) showed that resource configuration changed Terminal-Bench 2.0 outcomes. Record CPU/RAM allocations and hard limits, timeouts, dependency availability, and infrastructure errors. Report environment failures separately and retain them in the run accounting; do not quietly remove failed runs or relabel implementation errors. This evidence predates the July update but was missing from this chapter.

## November 2026: Stratify Outcomes, Not Just Activity

OpenAI's [18 November research-acceleration report](https://openai.com/index/research-acceleration-jagged-frontier/) separates usage telemetry, researcher surveys and research outputs. Estimated success varies by task category; activity measures such as changed code and experiment counts do not themselves establish faster research progress. API-equivalent usage is valued at list prices, not actual internal cost. These are internal AI-R&D observations, not an independent trial of ordinary product-development teams. The public report combines changing models and harnesses rather than identifying one reproducible configuration for a general productivity claim.

**Suggested adaptation:** Break your task results down by bug fix, feature, refactor and investigation. Keep human intervention and review cost visible in each group. A better aggregate can hide a regression in a task type you depend on.

## November 2026: Rediscovery Must Be Repeatable

Datadog's [18 November hunt account](https://www.datadoghq.com/blog/datadogs-agentic-vulnerability-hunting-system/) distinguishes finding a reference vulnerability at least once from finding it consistently across independent runs. The initial August benchmark contains 43 validated vulnerabilities across nine threat packs; a working stability threshold is seven detections in ten runs, not a universal standard. Packs, repository snapshots and configurations are frozen; reference findings are hidden from the hunting agent.

**Suggested adaptation:** Repeat a small set of known-failure tasks before adopting a model or harness change. Report both any-run success and per-task consistency. Test the filter's false negatives as well as report volume. [Company evidence and limits](../companies/datadog/research.md#security-hunts-2026).
