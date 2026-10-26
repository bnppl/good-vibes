---
title: Block — source findings
parent: Block
nav_order: 3
last_updated: '2026-10-26'
research_checked: '2026-10-26'
research_cutoff: '2026-10-26'
evidence_since: '2025-10-01'
last_read: null
status: unread
cache_schema: 1
---

# Block: source findings

[Profile](index.md) · [Research](research.md)

All records inspected **26 October 2026**. Original authored pages were used for active claims. Repository overviews are background and remain unpinned; they cannot establish a recent internal deployment. No full third-party article, transcript or private configuration is archived.

<a id="s01"></a>

## S01 · From Base Web to Fluent UI without a flag day

- **Author/source:** Block Engineering
- **Published / revision:** 2026-04-06
- **Practice period:** Migration-engine work from 2024-12-02 through 2026-02-26; retrospective
- **Inspected:** 2026-10-26
- **Evidence kind / format:** Reported team use / Authored engineering retrospective
- **Original:** [From Base Web to Fluent UI without a flag day](https://engineering.block.xyz/blog/from-base-web-to-fluent-ui-without-a-flag-day)

**Inspected scope:** Inspected chronology, failure examples, selective context, rules, validation and rollout account.

**Finding:** The migration used file-specific context, explicit import constraints, diagnostics and tests, plus a temporary rollout lane. Some surfaces required manual correction or reversion.

**Supports:** C02, C03, C04, C05, C06, C09, C12.

**Limits:** A long, partly pre-cutoff project; publication is recent but the work did not all occur after October. No independently reproduced outcomes.

<a id="s02"></a>

## S02 · Actionable CI

- **Author/source:** Angie Jones, AI Enablement
- **Published / revision:** 2026-02-23
- **Practice period:** Reported workflow at publication; exact deployment/session dates unknown
- **Inspected:** 2026-10-26
- **Evidence kind / format:** Reported company use / Authored engineering article
- **Original:** [Actionable CI](https://engineering.block.xyz/blog/actionable-ci)

**Inspected scope:** Inspected complete three-layer diagnosis and explicit autofix lifecycle.

**Finding:** Static diagnosis precedes LLM explanation. Developer-triggered eligible fixes create draft PRs, rerun CI with bounded retries and respect whether the original branch changed.

**Supports:** C01, C07, C10.

**Limits:** Explains the supported workflow, not all failure categories or an autonomous merge/release policy.

<a id="s03"></a>

## S03 · 3 principles for designing agent skills

- **Author/source:** Angie Jones
- **Published / revision:** 2026-02-15
- **Practice period:** Internal marketplace and examples reported in February
- **Inspected:** 2026-10-26
- **Evidence kind / format:** Reported company use / Authored engineering article
- **Original:** [3 principles for designing agent skills](https://engineering.block.xyz/blog/3-principles-for-designing-agent-skills)

**Inspected scope:** Inspected internal marketplace practice and deterministic versus interpretive responsibilities.

**Finding:** Team-specific runbooks and workflows are versioned as skills. Consistency-critical operations belong in scripts or templates while agents interpret context.

**Supports:** C08.

**Limits:** Repo Readiness scoring is that tool’s design, not a validated universal engineering-quality metric.

<a id="s04"></a>

## S04 · How we red-teamed our own AI agent

- **Author/source:** Josiah Peedikayil and Wes Ring
- **Published / revision:** 2026-01-15
- **Practice period:** Internal exercise before publication; exact campaign dates not established
- **Inspected:** 2026-10-26
- **Evidence kind / format:** Reported team use / Authored security exercise report
- **Original:** [How we red-teamed our own AI agent](https://engineering.block.xyz/blog/how-we-red-teamed-our-own-ai-agent-)

**Inspected scope:** Inspected attack-surface, changing model/tool conditions and simulated compromise/response account.

**Finding:** An internal test exposed how untrusted content and shared workflows could steer an agent with shell access; detection and response also formed part of the exercise.

**Supports:** C11.

**Limits:** A dated simulated engagement, not proof that the same vulnerability remains open or affects every current installation.

<a id="s05"></a>

## S05 · goose repository

- **Author/source:** Block-origin / AAIF community
- **Published / revision:** Not established
- **Practice period:** Background overview; no immutable revision captured
- **Inspected:** 2026-10-26
- **Evidence kind / format:** Published artifact / Repository overview
- **Original:** [goose repository](https://github.com/aaif-goose/goose)

**Inspected scope:** Public overview only.

**Finding:** A concrete open-source agent entry point; project governance extends beyond Block.

**Supports:** Background only; no active comparison claim.

**Limits:** No current private configuration or successful run established by this unpinned overview.

## Search and exclusion boundary

The current pass searched original company engineering sources beyond the shortlist seed. AI customer-facing features, general model-development techniques, marketing adoption figures and old engineering principles were not treated as proof of an internal software-development workflow. Source coverage is bounded, not an exhaustive absence claim. Exact task dates remain unknown where authors do not state them.
