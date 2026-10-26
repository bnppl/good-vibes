---
title: Armin Ronacher — bite-sized ideas
parent: Armin Ronacher Slides
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
nav_order: 1
nav_exclude: true
derived_from: engineers/armin-ronacher/recent-ai.md
evidence_since: '2025-10-01'
---

# Armin Ronacher — recent AI use

Publications since 1 October 2025. Source dates and evidence kinds appear on each card. [Earlier cards and principles](background.md) remain outside this feed.

## Card 09

### Porting MiniJinja, then composing tools in Pi

> **Porting and maintenance earned different levels of trust.**
>
> Personal use · published 2026-06-23. In June 2026 Ronacher reports successful loop-assisted porting of MiniJinja to Go while describing difficulties accepting unattended long-lived code. In October he publishes examples from his own Pi sessions using Codemode to compose operations, alongside an explanation of the harness/execution boundary.

**In the wild:** Practice period: Loop experiments before publication; exact dates not stated.

**Takeaway:** Distinguish the reported work from a complete daily workflow.

[Optional practice: adapt locally](research.md) · [Recent evidence](recent-ai.md) · [Primary source](https://lucumr.pocoo.org/2026/6/23/the-coming-loop/)

---

## Card 02

### Visible intent

> **A plan is easier to challenge when you can edit it.**
>
> Personal use · published 2025-12-17. His December 2025 preference is conversational clarification and a visible Markdown handoff. This is not a universal rejection of other planning interfaces or executable tests.

**In the wild:** Reported preference: conversational planning with a Markdown handoff he can inspect and edit.

**Takeaway:** Keep requirements distinct from speculative design.

[Optional practice: adapt locally](research.md) · [Recent evidence](recent-ai.md) · [Primary source](https://lucumr.pocoo.org/2025/12/17/what-is-plan-mode/)

---

## Card 03

### Keep your understanding

> **A running loop is not the same as a maintainable result.**
>
> Personal use · published 2026-06-23. In June 2026 he separates useful bounded loops from difficulties with unattended long-lived code. The distinction concerns task and outcome, not a blanket rejection of agents.

**In the wild:** Reported contrast: loop-assisted MiniJinja-to-Go porting helped; unattended long-lived code remained harder to accept.

**Takeaway:** Judge the artifact, not how long the machine stayed busy.

[Optional practice: adapt locally](research.md) · [Recent evidence](recent-ai.md) · [Primary source](https://lucumr.pocoo.org/2026/6/23/the-coming-loop/)

---

## Card 04

### Dated tools

> **January’s tool description can be wrong by October.**
>
> Personal use · published 2026-10-06. His January Pi article and October Codemode account describe different capabilities. The cache keeps those dates attached rather than inventing one timeless personal stack.

**In the wild:** Authored October account: Pi’s Codemode can compose MCP operations. This supersedes an assumption drawn from the January tool description.

**Takeaway:** Compare tools at compatible dates.

[Optional practice: adapt locally](research.md) · [Recent evidence](recent-ai.md) · [Primary source](https://lucumr.pocoo.org/2026/10/6/codemode/)

---

## Card 05

### Context has a shape

> **A toy prompt can miss the failure your real session produces.**
>
> Personal use · published 2026-07-04. His July 2026 tool-schema investigation reports history-dependent malformed calls. The proposed explanation about training remains a hypothesis, not verified provider internals.

**In the wild:** Reported investigation: a tool-schema failure depended on the real session history, not just a minimal prompt.

**Takeaway:** Reproduce the integration before ranking the model.

[Optional practice: adapt locally](research.md) · [Recent evidence](recent-ai.md) · [Primary source](https://lucumr.pocoo.org/2026/7/4/better-models-worse-tools/)

---

## Card 06

### Responsibility

> **The machinery did it. You still own the action.**
>
> Commentary · published 2026-05-26. Ronacher’s accountability position keeps responsibility with the human or organisation deploying the tool. That principle does not specify one immutable review checklist.

**In the wild:** Authored argument: human and organisational accountability remains even when a tool performs an action.

**Takeaway:** Delegate work without delegating ownership.

[Optional practice: adapt locally](research.md) · [Recent evidence](recent-ai.md) · [Primary source](https://lucumr.pocoo.org/2026/5/26/clankers/)

---

## Card 07

### Trust boundaries

> **A sandbox around the shell is not the whole harness.**
>
> Personal use · published 2026-10-06. October’s architecture account distinguishes harness trust from execution isolation. This is not a safety guarantee or complete permission policy.

**In the wild:** Published architecture: Codemode operates in the harness, distinct from the target execution environment.

**Takeaway:** Inspect actual capabilities, not just a sandbox label.

[Optional practice: adapt locally](research.md) · [Recent evidence](recent-ai.md) · [Primary source](https://lucumr.pocoo.org/2026/10/6/codemode/)

---
