# Factory AI Droids

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
