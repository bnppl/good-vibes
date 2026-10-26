---
title: Monzo — source findings
parent: Monzo
nav_order: 3
last_updated: '2026-10-26'
research_checked: '2026-10-26'
research_cutoff: '2026-10-26'
evidence_since: '2025-10-01'
last_read: null
status: unread
cache_schema: 1
---

# Monzo: source findings

[Profile](index.md) · [Research](research.md)

All records inspected **26 October 2026**. Original authored pages were used for active claims. Repository overviews are background and remain unpinned; they cannot establish a recent internal deployment. No full third-party article, transcript or private configuration is archived.

<a id="s01"></a>

## S01 · Building Agent Chip: Monzo’s in-house agentic tool

- **Author/source:** Fabien Deshayes and Oli Haley
- **Published / revision:** 2026-08-13
- **Practice period:** Build decision in late 2025; capabilities reported August 2026
- **Inspected:** 2026-10-26
- **Evidence kind / format:** Reported company use / Authored engineering article
- **Original:** [Building Agent Chip: Monzo’s in-house agentic tool](https://monzo.com/blog/building-agent-chip)

**Inspected scope:** Inspected original architecture, use cases, current one-shot workflow and next-steps sections.

**Finding:** Internal knowledge access, per-task sandbox/proxy boundaries and workflow-level observability support coding and incident assistance. Engineers review and merge proposed changes.

**Supports:** C01, C07, C08, C11, C12.

**Limits:** Self-reported adoption is not an effectiveness benchmark. Whole-codebase build/test/deploy access appears as future work.

<a id="s02"></a>

## S02 · How Monzo designers are shipping safer, faster product improvements

- **Author/source:** Monzo; first-person accounts by Susan Walsh and Sasha Ward
- **Published / revision:** 2026-03-20
- **Practice period:** Designer examples before March publication; exact session dates unknown
- **Inspected:** 2026-10-26
- **Evidence kind / format:** Reported team use / Authored practitioner case collection
- **Original:** [How Monzo designers are shipping safer, faster product improvements](https://monzo.com/blog/how-Monzo-Designers-are-shipping-safer-faster-product-improvements)

**Inspected scope:** Inspected first-person code-contribution examples, Cursor use and explicit review/deployment boundaries.

**Finding:** Designers make small changes with engineering partners. A cross-platform copy inconsistency is one concrete example; review is mandatory and qualified engineers retain deployment.

**Supports:** C02, C03, C06, C09, C10.

**Limits:** Individual team accounts do not establish every designer’s authority or a complete automated test policy.

<a id="s03"></a>

## S03 · Monzo public repositories

- **Author/source:** Monzo maintainers
- **Published / revision:** Not established
- **Practice period:** Background; individual project usage/revisions not verified
- **Inspected:** 2026-10-26
- **Evidence kind / format:** Published artifact / Repository organisation overview
- **Original:** [Monzo public repositories](https://github.com/monzo)

**Inspected scope:** Public overview including Typhon and response; no immutable revision captured.

**Finding:** Open-source platform and incident-tooling background provides inspectable engineering context.

**Supports:** Background only; no active comparison claim.

**Limits:** Not evidence that Agent Chip is open source or that the listed projects were built using AI.

## Search and exclusion boundary

The current pass searched original company engineering sources beyond the shortlist seed. AI customer-facing features, general model-development techniques, marketing adoption figures and old engineering principles were not treated as proof of an internal software-development workflow. Source coverage is bounded, not an exhaustive absence claim. Exact task dates remain unknown where authors do not state them.
