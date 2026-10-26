---
title: Steve Yegge — tools and setup
parent: Steve Yegge
nav_order: 3
last_updated: '2026-10-26'
last_read: null
status: unread
cache_schema: 1
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
---

# Tools, provenance and setup boundaries

| Tool | Relationship and inspected scope | What this establishes |
|---|---|---|
| Beads | Created by Yegge; now maintained in `gastownhall`. Current README inspected. [S04](sources.md#s04) | Documented work graph and persistent project context |
| Gas Town | His original public orchestration experiment; current maintainer README inspected. [S02](sources.md#s02), [S05](sources.md#s05) | Public system's documented interfaces, not his complete current workstation |
| Gas City | Built by Julian Knutsen and Chris Sells; endorsed in Yegge's April essay. [S06](sources.md#s06) | Endorsement and ecosystem relationship, not sole authorship |
| Wheelhouse | Private bespoke harness described in August. [S07](sources.md#s07) | Self-reported use; no reproducible public installation recipe |
| Existing project tracker and test runner | Suggested adaptation in this guide | The reward exercise needs no new orchestration platform |

## Minimal public-tool orientation

The following commands were verified in the inspected READMEs; they were **not run**. Use a disposable learning project first and recheck the documentation/version before installing or initialising anything.

```text
bd ready
bd show <id>
bd update <id> --claim
bd close <id>
bd prime
```

These expose available work, task detail, ownership, completion, and workflow context. Beads setup may update instruction files and integrations, so inspect its current setup behaviour before applying it to an established repository. [S04](sources.md#s04)

For public Gas Town, documented orientation commands include:

```text
gt agents
gt convoy show
gt feed --problems
gt scheduler status
```

They concern worker visibility, work tracking and capacity, rather than proving feature correctness. The README also documents multiple runtimes. No particular runtime, version, cost plan, or permissive execution setting is prescribed here. [S05](sources.md#s05)

## What remains unknown

A public README cannot establish an entire private deployment. The inspected private-harness account is not a complete permission policy or release runbook. This guide does not infer that a role label, automated reviewer, or work graph supplies a security boundary. Specific permissions must be inspected in the actual environment.

The [worked feature](workflow.md) therefore begins with the existing app and its real observation boundary. Tool adoption is a separate decision from adopting explicit task ownership, durable findings, or a bounded review loop.
