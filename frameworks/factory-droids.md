---
title: "Factory Droids"
parent: "SDD Frameworks"
nav_order: 9
last_updated: 2026-07-04
last_read: null
status: unread
---

# Factory AI Droids

{: .hook }
> **Factory Droids show what spec-driven development looks like when it's embedded in enterprise workflows — not as a new process to adopt, but as the default path from issue to PR.**
>
> When spec-before-code is the default path, it gets done. When it's an extra step, it gets skipped.

**In short:**
- **The problem:** Teams struggle to adopt SDD because it feels like extra overhead on top of an already-loaded workflow — another artifact to create before the "real" work begins.
- **The idea:** Droids receive tasks from GitHub, GitLab, Jira, or Slack → generate a spec for review → implement against the approved spec → create the PR. Spec-before-code is enforced, not optional.
- **How it works:** Three autonomy tiers (manual approval, safe commands only, full autonomy) per task; organizational memory persists across sessions; specs stored in `.factory/docs/` as first-class repo artifacts.
- **The result:** The spec isn't an extra step — it's the natural output of receiving a task and the natural input for implementation. It becomes the connective tissue between "what needs to be built" and "what gets shipped."

{: .aha }
> **When spec-before-code is the default path, it gets done.** When it's an extra step, it gets skipped every time there's deadline pressure.

{: .try-it }
> Look at your last five issues or tickets. How many were implemented directly from the issue description without a spec review? For each one, write one sentence describing what a mandatory pre-implementation spec would have caught or clarified.

---

## Deep dive

## Overview

Factory AI provides autonomous software development agents ("Droids") that operate across the full software development lifecycle. Droids generate complete specifications for user review before implementation, saving approved specs as markdown in `.factory/docs/`. They offer three autonomy levels: manual approval, allow safe commands, or full autonomy.

## How It Works

A Droid receives a task (from GitHub/GitLab issues, Jira tickets, Slack messages, or direct prompts), then:

1. **Generates a specification** -- Complete spec document for the proposed changes
2. **Human review** -- User reviews and approves the spec (at manual autonomy level)
3. **Implementation** -- Droid executes against the approved spec
4. **PR creation** -- Changes are submitted as a pull request

Specs are persisted in `.factory/docs/` within the repository. Organization-level memory persists across sessions, building institutional knowledge over time.

## Pros

- **Spec-before-code enforcement** -- Always generates a reviewable spec before touching code
- **Persistent spec storage** -- Specs saved in `.factory/docs/` become part of the repo history
- **Flexible autonomy levels** -- Choose between manual approval, safe-commands-only, or full autonomy per task
- **Native integrations** -- GitHub, GitLab, Jira, Slack, PagerDuty built in
- **Organizational memory** -- Learns and retains context across sessions and team members
- **Full SDLC coverage** -- From issue triage to PR creation in one flow
- **Configurable guardrails** -- Three autonomy tiers let teams calibrate risk tolerance

## Cons

- **Closed source and commercial** -- Enterprise pricing, no community edition
- **Opaque agent behavior** -- Less visibility into how specs are generated compared to open-source alternatives
- **Enterprise-oriented** -- Sales-driven access model that's harder for individuals or small teams
- **Integration dependency** -- Most valuable when deeply integrated with your issue tracker and CI/CD
- **Spec quality varies** -- Auto-generated specs may need significant human editing for complex tasks
- **Lock-in risk** -- `.factory/docs/` format and organizational memory are proprietary
- **Limited public benchmarks** -- Less objective performance data compared to open-source alternatives

## Motivational Argument

Factory Droids represent what spec-driven development looks like when it's embedded directly into enterprise workflows. The integration with issue trackers, chat tools, and CI/CD pipelines means the spec isn't an extra step -- it's the natural output of the agent receiving a task and the natural input for implementation. For teams that struggle to adopt SDD because it feels like "extra process," Factory makes it the default path.

The organizational memory feature addresses a critical gap in other tools. When a Droid learns that your team prefers certain patterns, avoids certain dependencies, or has specific compliance requirements, that knowledge persists and applies to future specs. Over time, the quality of generated specs improves as the system builds an understanding of your organization's standards and preferences.

If you work in an enterprise environment where development is deeply integrated with project management and communication tools, Factory Droids show how spec-driven development can be the connective tissue between "what needs to be built" and "what gets shipped" without requiring developers to change their workflow.

---

## Learn on the go

- **Video/Tutorial:** [The Most Underrated AI Agent for Coding and Product Work — Eno Reyes (Factory)](https://creatoreconomy.so/p/full-tutorial-the-most-underrated-ai-agent-for-coding-and-product-eno-reyes) — Peter Yang *(February 15, 2026)*. Factory's co-founder demonstrating Droids end to end, including a PRD-writing skill — the freshest hands-on walkthrough available.
- **Read (short):** [Code smells for AI agents: Q&A with Eno Reyes](https://stackoverflow.blog/2026/02/04/code-smells-for-ai-agents-q-and-a-with-eno-reyes-of-factory/) — Stack Overflow *(February 4, 2026)*. What "bad code" looks like when agents write it, from Factory's CTO.
- **Freshness note:** Both items are ~5 months old — slightly past this wiki's 4-month freshness bar, kept because nothing newer with comparable depth has surfaced. Factory raised a $150M Series C in 2026, so expect fresher coverage soon.
