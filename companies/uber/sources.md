---
title: Uber — source findings
parent: Uber
nav_order: 2
last_updated: '2026-11-24'
research_checked: '2026-10-26'
research_cutoff: '2026-10-26'
evidence_since: '2025-10-01'
last_read: null
status: unread
cache_schema: 1
---

# Uber: source findings

[Profile](index.md) · [Research](research.md)

Sources inspected on **26 October 2026**. No tools, services or experiments were executed. Dates below are publication/revision dates, not inspection dates substituted for freshness. Original pages may change; pinned artifacts preserve only the stated revision.

<a id="s01"></a>

## S01 · Running a Software Factory Efficiently at Uber Scale

- **Author:** Uday Kiran Medisetty
- **Published / revision:** 2026-08-27
- **Practice period:** February–August 2026 measurements; exact task dates not established
- **Checked:** 2026-10-26
- **Kind / format:** Reported company use / Authored engineering article
- **Original:** [Running a Software Factory Efficiently at Uber Scale](https://www.uber.com/gb/en/blog/efficient-software-factory/)
- **Inspected scope:** Public authored body or pinned file; source claims inspected, no independent execution.
- **Finding:** Reports managed coding, review, CI-repair and maintenance agents; real-task model benchmarks; gateway access; session/token optimizations and outcome-denominated cost/quality measures.
- **Supports:** C01, C03, C04, C07, C08, C09, C10, C11, C12
- **Limits:** Self-reported internal results. Tool adoption and attributed PRs are not customer value. No full private harness, release policy or independent reproduction inspected.

<a id="s02"></a>

## S02 · Lessons from Building a First-Pass AI PRD Reviewer at Uber

- **Author:** Lakshmi Ashok
- **Published / revision:** 2026-05-12
- **Practice period:** Trial before publication; exact sessions not established
- **Checked:** 2026-10-26
- **Kind / format:** Reported team use / Authored engineering article
- **Original:** [Lessons from Building a First-Pass AI PRD Reviewer at Uber](https://www.uber.com/us/en/blog/first-pass-prd/)
- **Inspected scope:** Public authored body or pinned file; source claims inspected, no independent execution.
- **Finding:** PRD Evaluator retrieves organisational context and identifies prioritized readiness gaps upstream of ordinary expert approval.
- **Supports:** C02, C06
- **Limits:** A product-development review aid, not an autonomous requirements approver or evidence of every Uber team’s practice.

<a id="s03"></a>

## S03 · Cadence public repository

- **Author:** Cadence project maintainers
- **Published / revision:** Undated living repository; not current-window support
- **Practice period:** Background only
- **Checked:** 2026-10-26
- **Kind / format:** Published artifact / Repository landing page
- **Original:** [Cadence public repository](https://github.com/cadence-workflow/cadence)
- **Inspected scope:** Public authored body or pinned file; source claims inspected, no independent execution.
- **Finding:** Public durable-workflow project originated at Uber and is now a community project.
- **Supports:** Background / contextual qualification only
- **Limits:** OSS selection background, not evidence that Uber’s internal coding agents are public or that this repository was built with them.

## Evidence not established

No private configuration, exact current installed stack, undisclosed permissions, protected-test policy or missing release authority is manufactured from public examples. Vendor and practitioner reports retain their attribution. Exact practice dates remain unknown where sources do not supply them.

<a id="s04"></a>

## S04 · How Uber Evals 1 Million Agent Skill Invocations a Month

- **Authors:** Andrew Mager, Jason Varbedain, Uday Kiran Medisetty
- **Published:** 2026-11-23
- **Practice period:** Marketplace and evaluation work before publication; exact ablation trial dates not established; usage figures describe March–October 2026, not a productivity trial.
- **Checked:** 2026-11-24
- **Kind / format:** Reported company use / Authored engineering article
- **Original:** [Uber Engineering](https://www.uber.com/us/en/blog/optimizing-ubers-agent-skills/)
- **Inspected scope:** Full public article body fetched directly; search excerpts cross-checked. No private artifacts, runtime, transcripts or independent experiments inspected.
- **Findings:** Skill ownership and review tiers, spec-based authoring, isolated with/without-skill comparisons, separate outcome/trajectory measures, failure reports and maintenance-PR feedback. Concurrent temporary-file interference is a reported failure.
- **Supports:** C12; November research, workflow and card 05. Adds context to existing tool discussion without changing older claim dates.
- **Limits:** Self-report; fixed public model/harness versions and exact ablation trial sample are not established. Proposed A/B testing and per-model compilation remain future work. No reproducible public installation of internal aifx or Skill Workshop established.
