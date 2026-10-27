---
title: David Heinemeier Hansson — bite-sized ideas
parent: David Heinemeier Hansson Slides
nav_order: 1
nav_exclude: true
last_updated: '2026-10-27'
cache_schema: 1
derived_from: engineers/david-heinemeier-hansson/recent-ai.md
research_checked: '2026-10-27'
evidence_since: '2025-10-01'
---

# David Heinemeier Hansson — recent AI evidence

Window: **1 October 2025–27 October 2026**. Publication/revision dates and practice periods differ. [Earlier cards and principles](background.md).

## Card 09

### Terminal harnesses, isolated experiments and "pencils down"

> **An everyday coding harness, an isolated VM experiment and a team product have different boundaries.**
>
> Personal use · publication / revision: 2026-01-07 to 2026-10-06. In January 2026 he reports guiding terminal agents and reviewing outcomes in OpenCode (and Claude Code in Omarchy). In February he runs an OpenClaw assistant inside an isolated Proxmox VM. By October he declares it is time to "put down the pencils" on writing the vast majority of code by hand.

**In the wild:** Switching between Claude Opus 4.5, Codex 5, Gemini 3, MiniMax M2.1 and GLM-4.7 in OpenCode while agents run terminal tests, contrasted with the isolated February "Kef" VM trial.

**Takeaway:** Keep personal harness use, isolated assistant experiments, economic forecasts, and historical 2014/2024 testing essays distinct.

[Optional practice: adapt locally](research.md) · [Recent evidence](recent-ai.md) · [Source register](sources.md) · [Primary source](https://world.hey.com/dhh/promoting-ai-agents-3ee04945)

---

## Card 01

### Keep the timeline

> **A 2025 opinion—or even a January 2026 boundary—is not a permanent position.**
>
> Personal use & commentary · publication / revision: 2026-01-07 and 2026-10-06. In May 2025 he preferred keeping the keyboard over inline autocomplete. In January 2026 he promoted supervised terminal agents while stating he was "nowhere close to 90%+" agent-written code. By October 2026 he argued developers will no longer write the vast majority of code by hand.

**In the wild:** Moving from conversational LLM use (May 2025) to supervised OpenCode collaboration (January 2026) to "Over my dead pencil" (October 2026).

**Takeaway:** Record the date, task, and tool generation alongside any engineer's AI stance.

[Optional practice: adapt locally](research.md) · [Recent evidence](recent-ai.md#c01) · [Source register](sources.md#s06) · [Primary source](https://world.hey.com/dhh/over-my-dead-pencil-fb0f3647)

---

## Card 02

### Supervised delegation

> **Terminal agents earned promotion because they run tests and return finished work for review.**
>
> Personal use · publication / revision: 2026-01-07. Unlike inline editor autocomplete that "steals the keyboard" mid-thought, terminal harnesses let agents control the terminal, run validation tests themselves, and search documentation while the human reviews outcomes and guides cohesion.

**In the wild:** January 2026 OpenCode workflow: agents execute terminal tests to validate their own changes before human outcome review.

**Takeaway:** Separate autonomous terminal execution and self-testing from final human acceptance.

[Optional practice: adapt locally](research.md) · [Recent evidence](recent-ai.md#c04) · [Source register](sources.md#s02) · [Primary source](https://world.hey.com/dhh/promoting-ai-agents-3ee04945)

---

## Card 05

### An experiment has a boundary

> **One isolated assistant experiment is not a complete security policy.**
>
> Personal use · publication / revision: 2026-02-05. In February 2026 he reports running an OpenClaw agent ("Kef") inside a Proxmox VM separated from personal data and logins, watching it navigate standard human web interfaces without custom MCPs or APIs.

**In the wild:** "Kef" independently signing up for a HEY.com email address to complete a Fizzy registration and join Basecamp inside an isolated VM.

**Takeaway:** Single self-reported VM isolation is a useful containment pattern, not a security audit or universal coding permission policy.

[Optional practice: adapt locally](research.md) · [Recent evidence](recent-ai.md#c11) · [Source register](sources.md#s03) · [Primary source](https://world.hey.com/dhh/clankers-with-claws-9f86fa71)

---

## Card 06

### Useful to whom?

> **An AI feature can be possible to generate without being worth shipping.**
>
> Commentary & personal use · publication / revision: 2026-03-25 and 2026-08-09. While his August 2026 essay celebrates "endless execution" for personal ideas, his March and May Basecamp posts report discarding native in-app AI experiments that missed the mark in favour of an agent-accessible CLI/API and human-centred product basics.

**In the wild:** Declining to ship rigid native chatbots in Basecamp and Fizzy, while building the `basecamp` CLI and agent skills so external agents can operate the product.

**Takeaway:** Distinguish personal creative velocity with agents from what belongs as a native feature in a shipped product.

[Optional practice: adapt locally](research.md) · [Recent evidence](recent-ai.md#c12) · [Source register](sources.md#s04) · [Primary source](https://world.hey.com/dhh/basecamp-becomes-agent-accessible-3ae6b949)

---

## Card 07

### The tool-inventory trap

> **Announcing a team product does not document every private coding step.**
>
> Personal use · publication / revision: 2026-01-07. His January account documents personal use of OpenCode and Claude Code (aliased in Omarchy) to switch models and capture sessions, whereas the March Basecamp CLI/skill release and ONCE hosting features are 37signals team product announcements.

**In the wild:** Personal OpenCode terminal harness usage (January 2026) versus the team-built `basecamp` CLI and skill package (March 2026).

**Takeaway:** Separate personal coding harnesses from team-shipped product interfaces.

[Optional practice: adapt locally](research.md) · [Recent evidence](recent-ai.md#c09) · [Source register](sources.md#s02) · [Primary source](https://world.hey.com/dhh/promoting-ai-agents-3ee04945)

---
