---
title: Zalando — source findings
parent: Zalando
nav_order: 2
last_updated: '2026-10-26'
research_checked: '2026-10-26'
research_cutoff: '2026-10-26'
evidence_since: '2025-10-01'
last_read: null
status: unread
cache_schema: 1
---

# Zalando: source findings

[Profile](index.md) · [Research](research.md)

Sources inspected on **26 October 2026**. No tools, services or experiments were executed. Dates below are publication/revision dates, not inspection dates substituted for freshness. Original pages may change; pinned artifacts preserve only the stated revision.

<a id="s01"></a>

## S01 · Agentic Engineering at Zalando: a snapshot

- **Author:** Bartosz Ocytko
- **Published / revision:** 2026-08-14
- **Practice period:** Retrospective of 2.5 years, including 2024 foundations and 2026 observations
- **Checked:** 2026-10-26
- **Kind / format:** Reported company use / Authored engineering retrospective
- **Original:** [Agentic Engineering at Zalando: a snapshot](https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html)
- **Inspected scope:** Public authored body or pinned file; source claims inspected, no independent execution.
- **Finding:** Describes shared model access and reference configurations with team tool choice, incident-informed risk approval, shared skills, complexity/PR observations and preview deployments.
- **Supports:** C01, C03, C04, C05, C06, C07, C08, C09, C10, C11, C12
- **Limits:** Retrospective publication is recent; not all practices began after October 2025. Agent platform sandboxing and identity broker are described as work in progress, not universal deployed controls.

<a id="s02"></a>

## S02 · LLM powered migration of UI component libraries

- **Author:** Zalando engineering team
- **Published / revision:** 2025-02 (before window)
- **Practice period:** Historical migration before publication
- **Checked:** 2026-10-26
- **Kind / format:** Reported team use / Authored engineering article
- **Original:** [LLM powered migration of UI component libraries](https://engineering.zalando.com/posts/2025/02/llm-migration-ui-component-libraries.html)
- **Inspected scope:** Public authored body or pinned file; source claims inspected, no independent execution.
- **Finding:** An older concrete UI-migration account linked by the August retrospective.
- **Supports:** Background / contextual qualification only
- **Limits:** Retained as a historical lead only; it cannot supply a missing recent comparison dimension.

<a id="s03"></a>

## S03 · agent-skills-eval README — pinned revision

- **Author:** Public project maintainers; linked by Zalando retrospective
- **Published / revision:** 2026-09-29
- **Practice period:** Inspected revision, not an executed Zalando evaluation
- **Checked:** 2026-10-26
- **Kind / format:** Published artifact / Pinned repository README
- **Original:** [agent-skills-eval README — pinned revision](https://github.com/darkrishabh/agent-skills-eval/blob/f10ae2b3c93055cadd82c02a3b7fe4cfbd9a4645/README.md)
- **Inspected scope:** Public authored body or pinned file; source claims inspected, no independent execution.
- **Finding:** Documents with-skill/baseline evaluation and tool-assertion reporting, with an explicit boundary between requested tool calls and actual tool execution.
- **Supports:** Background / contextual qualification only
- **Limits:** A referenced third-party artifact is not a Zalando-owned harness or proof of its installed version. Current README says default provider does not execute a multi-turn tool loop.

<a id="s04"></a>

## S04 · Patroni public repository

- **Author:** Patroni maintainers
- **Published / revision:** Undated living repository; not current-window support
- **Practice period:** Background only
- **Checked:** 2026-10-26
- **Kind / format:** Published artifact / Repository landing page
- **Original:** [Patroni public repository](https://github.com/patroni/patroni)
- **Inspected scope:** Public authored body or pinned file; source claims inspected, no independent execution.
- **Finding:** Zalando-origin PostgreSQL high-availability project now maintained as a community project.
- **Supports:** Background / contextual qualification only
- **Limits:** Selection background only; does not prove current company AI practice.

## Evidence not established

No private configuration, exact current installed stack, undisclosed permissions, protected-test policy or missing release authority is manufactured from public examples. Vendor and practitioner reports retain their attribution. Exact practice dates remain unknown where sources do not supply them.
