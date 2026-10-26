---
title: Shopify — source findings
parent: Shopify
nav_order: 2
last_updated: '2026-10-26'
research_checked: '2026-10-26'
research_cutoff: '2026-10-26'
evidence_since: '2025-10-01'
last_read: null
status: unread
cache_schema: 1
---

# Shopify — source findings

[Profile](index.md) · [Research](research.md) · [Workflow](workflow.md)

Checked **2026-10-26**. This register records concise findings and inspected scope rather than copying article bodies. Publication dates do not imply exact task dates. Repository projects below are background links, not pinned evidence of the private harness.

<a id="s01"></a>

## S01 · We gave AI agents a mobile dev environment

- **Author:** Michael Garfinkle, Mauricio de Meirelles and David Cortes
- **Original:** [We gave AI agents a mobile dev environment](https://shopify.engineering/remote-dev)
- **Published / revision:** 2026-10-22
- **Practice period:** Mobile workflows before publication; exact sessions not stated
- **Inspected:** 2026-10-26
- **Evidence kind:** Reported team use
- **Inspected scope:** Public authored article; relevant case and technical sections inspected.
- **Finding:** Remote mobile environments let River execute builds, tests and app interactions, including before/after recordings. Laptop resource limits motivated the change.
- **Supports:** C01, C07, C09
- **Limits:** Mobile platform account; not a complete release policy.

<a id="s02"></a>

## S02 · How River takes security work from a fix to merge

- **Author:** Erin Son and Kaiyi Li
- **Original:** [How River takes security work from a fix to merge](https://shopify.engineering/river-vulnerability-remediation)
- **Published / revision:** 2026-09-02
- **Practice period:** Remediation runs before publication; exact dates not stated
- **Inspected:** 2026-10-26
- **Evidence kind:** Reported team use
- **Inspected scope:** Public authored article; relevant case and technical sections inspected.
- **Finding:** Remediation follows live repository state, checks CI identity and verifies closure after merge. Human owners decide product risk and merge.
- **Supports:** C02, C06, C10, C12
- **Limits:** Prompted behaviour and code-enforced invariants are explicitly different.

<a id="s03"></a>

## S03 · Building an agentic harness that outlasts the model

- **Author:** Zack Deveau
- **Original:** [Building an agentic harness that outlasts the model](https://shopify.engineering/building-an-agentic-harness-that-outlasts-the-model)
- **Published / revision:** 2026-07-29
- **Practice period:** Five-month exploration and recent scanning period; exact session dates not stated
- **Inspected:** 2026-10-26
- **Evidence kind:** Reported team use
- **Inspected scope:** Public authored article; relevant case and technical sections inspected.
- **Finding:** Dispatch partitions code, separates hunting from executable verification and presents proposed remediation to developers. Findings require realistic tests.
- **Supports:** C03, C04, C11
- **Limits:** Security workflow and self-reported results; no independent reproduction.

<a id="s04"></a>

## S04 · Under the River

- **Author:** Burke Libbey, Javier Moreno and River
- **Original:** [Under the River](https://shopify.engineering/under-the-river)
- **Published / revision:** 2026-05-28
- **Practice period:** Retrospective beginning in 2024 and River usage before publication
- **Inspected:** 2026-10-26
- **Evidence kind:** Reported company use
- **Inspected scope:** Public authored article; relevant case and technical sections inspected.
- **Finding:** World, reproducible environments and shared Slack threads support River. The account discusses expensive infrastructure changes and reusable knowledge.
- **Supports:** C05, C08
- **Limits:** Co-authored by River; May publication includes earlier infrastructure work.

## Date and access qualifications

Some original pages are live documents. Exact original versions and private settings were not archived. Descriptions of internal tools are reported use, not inspected implementations. A search or crawl date never substitutes for publication. Any exact day not verified remains marked as such.

## Open questions

These sources establish several complementary workflows, not one identical process across all of Shopify. Remote Dev, Dispatch and the remediation loop solve different problems. River and World remain internal; Liquid and other open-source contributions establish background rather than public availability of the entire harness.
