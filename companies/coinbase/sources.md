---
title: Coinbase — source findings
parent: Coinbase
nav_order: 3
last_updated: '2026-10-26'
research_checked: '2026-10-26'
research_cutoff: '2026-10-26'
evidence_since: '2025-10-01'
last_read: null
status: unread
cache_schema: 1
---

# Coinbase: source findings

[Profile](index.md) · [Research](research.md)

All records inspected **26 October 2026**. Original authored pages were used for active claims. Repository overviews are background and remain unpinned; they cannot establish a recent internal deployment. No full third-party article, transcript or private configuration is archived.

<a id="s01"></a>

## S01 · Automating Figma-to-Code at Coinbase

- **Author/source:** Matheus Moreira and Marvin Mathew
- **Published / revision:** 2026-06-03
- **Practice period:** Internal tooling pilot and FCM feature before June publication; exact dates not stated
- **Inspected:** 2026-10-26
- **Evidence kind / format:** Reported team use / Authored engineering case study
- **Original:** [Automating Figma-to-Code at Coinbase](https://www.coinbase.com/blog/automating-figma-to-code-at-coinbase)

**Inspected scope:** Full original article inspected, replacing the earlier archive-only seed. Covers orchestration, validation, launch account and human corrections.

**Finding:** A reference feature plus rules/templates supports generation. Large initial PRs led to approved planning, scaffolding and focused worker PRs. Humans corrected domain, UI, tests and integration details.

**Supports:** C02, C03, C04, C05, C06, C08, C10.

**Limits:** Self-reported successful case, not a controlled benchmark or complete production-release policy.

<a id="s02"></a>

## S02 · Coding had a concurrency problem: how Mux helped solve it

- **Author/source:** Alessandro Rodi and Adam Wolf
- **Published / revision:** 2026-05-11
- **Practice period:** Early-2026 rollout; reported adoption/output observations include April 2026
- **Inspected:** 2026-10-26
- **Evidence kind / format:** Reported company use / Authored engineering account
- **Original:** [Coding had a concurrency problem: how Mux helped solve it](https://www.coinbase.com/blog/coding-had-a-concurrency-problem-how-mux-helped-solve-it)

**Inspected scope:** Inspected original workflow, isolation, adoption and selection-bias discussion.

**Finding:** Mux gives concurrent agents separate worktrees, branches and terminals. Human orchestration and review remain; the account notes that high-output adopters may bias comparisons.

**Supports:** C01, C07, C09, C12.

**Limits:** More PRs per adopter cannot by itself prove causal improvement or quality. No current private configuration audited.

<a id="s03"></a>

## S03 · Coinbase public repositories

- **Author/source:** Coinbase maintainers
- **Published / revision:** Not established
- **Practice period:** Background overview; no specific recent AI task established
- **Inspected:** 2026-10-26
- **Evidence kind / format:** Published artifact / Repository organisation overview
- **Original:** [Coinbase public repositories](https://github.com/coinbase)

**Inspected scope:** Public overview only, not individual pinned implementation files.

**Finding:** Public SDK and infrastructure source offers an inspectable engineering background.

**Supports:** Background only; no active comparison claim.

**Limits:** The private Figma-to-Code rules and Mux installation were not inspected as public immutable artifacts.

## Search and exclusion boundary

The current pass searched original company engineering sources beyond the shortlist seed. AI customer-facing features, general model-development techniques, marketing adoption figures and old engineering principles were not treated as proof of an internal software-development workflow. Source coverage is bounded, not an exhaustive absence claim. Exact task dates remain unknown where authors do not state them.
