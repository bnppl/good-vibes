---
title: Simon Willison — executable evidence
parent: Simon Willison Slides
nav_order: 1
nav_exclude: true
last_updated: 2026-10-26
cache_schema: 1
derived_from: engineers/simon-willison/recent-ai.md
research_checked: 2026-10-26
evidence_since: '2025-10-01'
---

# Simon Willison — recent AI use

Publications since 1 October 2025. Source dates and evidence kinds appear on each card. [Earlier cards and principles](background.md) remain outside this feed.

## Card 09

### A newsletter feature shipped through review

> **Dinner produced a feature; review made it ready to ship.**
>
> Personal use · published 2026-10-09. His 9 October 2026 account describes developing a Django newsletter feature with Codex voice interaction and a local preview, then reviewing the PR and correcting an import approach before shipping. It is a maintained-feature account; the separate October game experiment has a different risk context.

**In the wild:** Practice period: Newsletter feature built and shipped 2026-10-09.

**Takeaway:** Distinguish the reported work from a complete daily workflow.

[Optional practice: adapt locally](research.md) · [Recent evidence](recent-ai.md) · [Primary source](https://simonwillison.net/2026/Oct/9/built-using-my-voice/)

---

## Card 01

### Baseline before brilliance

> **The fastest way into a codebase may be to run its tests.**
>
> Recommendation · published 2026 (guide began 2026-02-23; chapter date unknown). Willison begins existing-project sessions with the test suite. It shows the agent the harness and gives later changes a baseline.

**In the wild:** Published pattern: First Run the Tests describes establishing the project’s execution baseline. It is advice, not a claim about every later project.

**Takeaway:** Execute the baseline before interpreting the diff.

[Optional practice: adapt locally](research.md) · [Recent evidence](recent-ai.md) · [Primary source](https://simonwillison.net/guides/agentic-engineering-patterns/first-run-the-tests/)

---

## Card 02

### Red means something

> **A failing test is useful only if it fails for the right reason.**
>
> Recommendation · published 2026 (guide began 2026-02-23; chapter date unknown). His red/green pattern calls for a failure before implementation. A broken import is not evidence that your replay check detects duplicate awards.

**In the wild:** Published pattern: confirm a meaningful failure before implementation. The guide’s launch post identifies this as one of its first chapters.

**Takeaway:** Inspect the failure, not only the colour.

[Optional practice: adapt locally](research.md) · [Recent evidence](recent-ai.md) · [Primary source](https://simonwillison.net/guides/agentic-engineering-patterns/red-green-tdd/)

---

## Card 03

### The real run

> **A green suite can still miss an obviously broken feature.**
>
> Recommendation · published 2026 (guide began 2026-02-23; chapter date unknown). Willison complements tests with exploratory execution: try the API, run the code, or exercise a real web UI. Relevant discoveries can become regressions.

**In the wild:** Published pattern: exploratory execution complements automated tests; it does not guarantee that every requirement was exercised.

**Takeaway:** Exercise the boundary the requirement depends on.

[Optional practice: adapt locally](research.md) · [Recent evidence](recent-ai.md) · [Primary source](https://simonwillison.net/guides/agentic-engineering-patterns/agentic-manual-testing/)

---

## Card 04

### Own the handoff

> **Do not make your reviewer the first person to check your agent’s patch.**
>
> Personal use · published 2026-10-09. He places the initial review with the author, including the generated PR description. Evidence of testing makes the handoff more useful.

**In the wild:** Reported production feature: he reviewed the newsletter PR and changed the import approach before deploying it.

**Takeaway:** Review the work and its description yourself.

[Optional practice: adapt locally](research.md) · [Recent evidence](recent-ai.md) · [Primary source](https://simonwillison.net/2026/Oct/9/built-using-my-voice/)

---

## Card 05

### A fresh working memory

> **A subagent is useful before it becomes a miniature bureaucracy.**
>
> Recommendation · published 2026 (guide began 2026-02-23; chapter date unknown). Willison emphasises fresh context for exploration and verbose tasks. Independent work can parallelise; too many roles add coordination overhead.

**In the wild:** Published subagent guidance: independent work can use fresh context; this is separate from the much longer Battle Drones experiment.

**Takeaway:** Delegate a bounded question with a clear output.

[Optional practice: adapt locally](research.md) · [Recent evidence](recent-ai.md) · [Primary source](https://simonwillison.net/guides/agentic-engineering-patterns/subagents/)

---

## Card 06

### The explanation gap

> **An implementation you cannot reason about can slow the next change.**
>
> Recommendation · published 2026 (guide began 2026-02-23; chapter date unknown). His walkthrough and interactive-explanation patterns address cognitive debt. A source tour explains structure; a visual mechanism can supply missing intuition.

**In the wild:** Published explanation pattern: ask for a source walkthrough to rebuild understanding. A generated explanation still needs checking.

**Takeaway:** Use explanations to build understanding, then check them against the source.

[Optional practice: adapt locally](research.md) · [Recent evidence](recent-ai.md) · [Primary source](https://simonwillison.net/guides/agentic-engineering-patterns/linear-walkthroughs/)

---

## Card 08

### Different stakes

> **The same engineer can use different standards for a toy and a production feature.**
>
> Personal use · published 2026-10-20. His October accounts distinguish a heavily vibe-coded game from a blog feature refined through PR review. Preserve that context when comparing methods.

**In the wild:** Reported game experiment: Battle Drones was extensively playtested with little code review, unlike the maintained newsletter feature.

**Takeaway:** Compare like tasks and dates before declaring disagreement.

[Optional practice: adapt locally](research.md) · [Recent evidence](recent-ai.md) · [Primary source](https://simonwillison.net/2026/Oct/20/battledrones/)

---
