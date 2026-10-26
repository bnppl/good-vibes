---
title: Stripe — source findings
parent: Stripe
nav_order: 3
last_updated: '2026-10-26'
research_checked: '2026-10-26'
research_cutoff: '2026-10-26'
evidence_since: '2025-10-01'
last_read: null
status: unread
cache_schema: 1
---

# Stripe: source findings

[Profile](index.md) · [Research](research.md)

All records inspected **26 October 2026**. Original authored pages were used for active claims. Repository overviews are background and remain unpinned; they cannot establish a recent internal deployment. No full third-party article, transcript or private configuration is archived.

<a id="s01"></a>

## S01 · Minions: Stripe’s one-shot, end-to-end coding agents

- **Author/source:** Alistair Gray, Stripe Leverage
- **Published / revision:** 2026-02-09
- **Practice period:** Tasks and usage before February publication; exact run dates not stated
- **Inspected:** 2026-10-26
- **Evidence kind / format:** Reported company use / Authored engineering article
- **Original:** [Minions: Stripe’s one-shot, end-to-end coding agents](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents)

**Inspected scope:** Inspected original account of invocation, scope, review and reported adoption.

**Finding:** Slack requests become unattended code changes and CI-ready PRs. Human attention is the constrained resource; human review remains in the delivery path.

**Supports:** C01, C03, C06, C10.

**Limits:** Self-report, not controlled productivity or a private configuration audit.

<a id="s02"></a>

## S02 · Minions part 2

- **Author/source:** Alistair Gray, Stripe Leverage
- **Published / revision:** 2026-02-19
- **Practice period:** Infrastructure and iteration policy reported at publication; exact sessions unknown
- **Inspected:** 2026-10-26
- **Evidence kind / format:** Reported company use / Authored engineering article
- **Original:** [Minions part 2](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2)

**Inspected scope:** Inspected original technical account of devboxes, blueprints, context, tools and validation.

**Finding:** Minions mix deterministic nodes with agent loops, use isolated devboxes and scoped context, run cheap local checks and stop after bounded full-CI attempts.

**Supports:** C02, C04, C07, C08, C09, C11, C12.

**Limits:** Published mechanics were not reproduced. Current October deployment and all team overrides are unknown.

<a id="s03"></a>

## S03 · Sorbet repository

- **Author/source:** Sorbet community / Stripe-origin
- **Published / revision:** Not established
- **Practice period:** Background only; current AI task dates not established
- **Inspected:** 2026-10-26
- **Evidence kind / format:** Published artifact / Repository overview
- **Original:** [Sorbet repository](https://github.com/sorbet/sorbet)

**Inspected scope:** Public repository overview; no immutable revision captured.

**Finding:** A concrete open-source engineering background entry point.

**Supports:** Background only; no active comparison claim.

**Limits:** Not evidence of a recent Minions run; community source and internal harness availability differ.

## Search and exclusion boundary

The current pass searched original company engineering sources beyond the shortlist seed. AI customer-facing features, general model-development techniques, marketing adoption figures and old engineering principles were not treated as proof of an internal software-development workflow. Source coverage is bounded, not an exhaustive absence claim. Exact task dates remain unknown where authors do not state them.
