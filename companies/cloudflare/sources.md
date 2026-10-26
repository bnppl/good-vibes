---
title: Cloudflare — source findings
parent: Cloudflare
nav_order: 2
last_updated: '2026-10-26'
research_checked: '2026-10-26'
research_cutoff: '2026-10-26'
evidence_since: '2025-10-01'
last_read: null
status: unread
cache_schema: 1
---

# Cloudflare — source findings

[Profile](index.md) · [Research](research.md) · [Workflow](workflow.md)

Checked **2026-10-26**. This register records concise findings and inspected scope rather than copying article bodies. Publication dates do not imply exact task dates. Repository projects below are background links, not pinned evidence of the private harness.

<a id="s01"></a>

## S01 · The AI engineering stack we built internally

- **Author:** Ayush Thakur, Scott Roe-Meschke and Rajesh Bhatia
- **Original:** [The AI engineering stack we built internally](https://blog.cloudflare.com/internal-ai-engineering-stack/)
- **Published / revision:** 2026-04-20
- **Practice period:** Retrospective of eleven months, plus usage at publication
- **Inspected:** 2026-10-26
- **Evidence kind:** Reported company use
- **Inspected scope:** Public authored article; relevant case and technical sections inspected.
- **Finding:** Shared access and model routing support internal coding tools; repository context and standards review form distinct layers. Some background-agent work is described as next steps.
- **Supports:** C08, C09, C11
- **Limits:** A platform snapshot and product-linked company account, not a comprehensive private configuration.

<a id="s02"></a>

## S02 · How Cloudflare enforces engineering standards using AI

- **Author:** Timo Reimann
- **Original:** [How Cloudflare enforces engineering standards using AI](https://blog.cloudflare.com/engineering-standards-enforcement/)
- **Published / revision:** 2026-08-04
- **Practice period:** Codex usage and review activity during 2026 before publication
- **Inspected:** 2026-10-26
- **Evidence kind:** Reported company use
- **Inspected scope:** Public authored article; relevant case and technical sections inspected.
- **Finding:** Governed RFCs have owners and separate approval/enforcement states. Code, spec and incident-review agents apply relevant requirements.
- **Supports:** C02, C05, C10
- **Limits:** Standards findings and withheld approvals are not confirmed defect counts.

<a id="s03"></a>

## S03 · Orchestrating AI Code Review at scale

- **Author:** Ryan Skidmore
- **Original:** [Orchestrating AI Code Review at scale](https://blog.cloudflare.com/ai-code-review/)
- **Published / revision:** 2026-04-20
- **Practice period:** Reported review runs from 2026-03-10 through 2026-04-09
- **Inspected:** 2026-10-26
- **Evidence kind:** Reported team use
- **Inspected scope:** Public authored article; relevant case and technical sections inspected.
- **Finding:** A coordinator combines specialized reviewers, structured findings and bounded retries. Re-review tracks prior findings, while humans remain needed for architectural and cross-system judgment.
- **Supports:** C01, C06, C07, C12
- **Limits:** Live article inspected; exact model assignments may have evolved. No independent accuracy audit.

## Date and access qualifications

Some original pages are live documents. Exact original versions and private settings were not archived. Descriptions of internal tools are reported use, not inspected implementations. A search or crawl date never substitutes for publication. Any exact day not verified remains marked as such.

## Open questions

Cloudflare’s Engineering Codex is its own internal guidance corpus; it must not be confused with an OpenAI product. These sources establish concrete internal review work, not an end-to-end test-first or release workflow. Aggregate findings can include false positives and do not measure defects prevented. Pingora and other public projects do not make the private standards or review deployment public.
