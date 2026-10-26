---
title: Simon Willison — comparison history
parent: Simon Willison
nav_order: 9
last_updated: '2026-10-26'
nav_exclude: true
---

# Comparison history

These fields and slide notes preceded the publication-window review on 26 October 2026. They are retained for traceability, not evidence of current AI practice. [Current evidence](recent-ai.md).

## Previous comparison fields

### C01 · Goal and bottleneck

Use executing agents to build useful, better software; humans still choose problems and verify results.

Definition and practitioner priorities, not a controlled outcome result.

[Original supporting source](https://simonwillison.net/guides/agentic-engineering-patterns/what-is-agentic-engineering/)

### C02 · Requirements and specification

His 9 October 2026 production blog feature uses conversational requirements and a live preview; the guide also advocates iterating on evidence.

The voice-led blog feature is one project, not a universal specification format.

[Original supporting source](https://simonwillison.net/2026/Oct/9/built-using-my-voice/)

### C03 · Increment and planning

Start with the existing tests; prefer reviewable changes and use Git to inspect and isolate work.

No universal timebox or maximum patch size established; reviewability is contextual.

[Original supporting source](https://simonwillison.net/guides/agentic-engineering-patterns/first-run-the-tests/)

### C04 · Testing and verification

Use red/green TDD and complement automated checks with exploratory execution of actual behaviour.

Relevant sources S02–S04; a green suite does not establish every requirement.

[Original supporting source](https://simonwillison.net/guides/agentic-engineering-patterns/agentic-manual-testing/)

### C05 · Design and refactoring

Use cheaper refactoring and experiments to improve quality and explore design alternatives.

Accept, refine or discard results; no complete architectural doctrine inferred.

[Original supporting source](https://simonwillison.net/guides/agentic-engineering-patterns/better-code/)

### C06 · Human understanding and review

Authors own initial review; walkthroughs and interactive explanations can repair understanding gaps.

Sources S05, S09 and S10. Experimental projects are distinct from collaborator-facing guidance.

[Original supporting source](https://simonwillison.net/guides/agentic-engineering-patterns/anti-patterns/)

### C07 · Agent autonomy and coordination

Use fresh subagent contexts and parallelise independent tasks when the coordination cost is justified.

The Battle Drones account also shows a more open-ended experimental multi-agent run; not a universal prescription.

[Original supporting source](https://simonwillison.net/guides/agentic-engineering-patterns/subagents/)

### C08 · Context and durable state

Retain working examples and update guidance from experience; use history and fresh contexts for orientation.

Sources S06–S08 and S12; complete private memory infrastructure is not established.

[Original supporting source](https://simonwillison.net/guides/agentic-engineering-patterns/hoard-things-you-know-how-to-do/)

### C09 · Tooling and environment

Documented tools include Claude Code, Codex, Git, Rodney and Showboat; tool roles vary by project.

Sources S04, S06, S09, S13, S14 and S16; inventory is not an exhaustive current stack.

[Original supporting source](https://github.com/simonw/showboat)

### C10 · Integration and release

His 9 October 2026 production-feature account uses PR review and corrections before deployment; guide recommendations favour reviewable Git changes.

One release account does not establish a universal CI or rollback system.

[Original supporting source](https://simonwillison.net/2026/Oct/9/built-using-my-voice/)

### C11 · Boundaries and safeguards

Avoid combining private data, untrusted input and outbound communication without effective separation.

The lethal trifecta concerns exfiltration and is not an exhaustive security model.

[Original supporting source](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/)

### C12 · Evaluation and tradeoffs

Evaluate evidence in project context; no universal comparative speed or safety advantage is established here.

Our evidence assessment, not an effectiveness claim by Willison; experiments and production have different stakes.

[Original supporting source](https://simonwillison.net/2026/Oct/20/battledrones/)

## Previous slide notes

# Simon Willison — executable evidence

Eight short ideas derived from cached research checked on 26 October 2026. Worked reward examples are suggested adaptations, not reports of Willison's own implementation.

### Archived card 01

### Baseline before brilliance

> **The fastest way into a codebase may be to run its tests.**
>
> Willison begins existing-project sessions with the test suite. It shows the agent the harness and gives later changes a baseline.

**In the wild:** Suggested adaptation: record existing reward-test failures before changing replay protection.

**Takeaway:** Execute the baseline before interpreting the diff.

[Optional practice: first lab](research.md#first-practical-lab) · [Detailed evidence](research.md#start-with-an-executable-baseline) · [Source register](sources.md)

---

### Archived card 02

### Red means something

> **A failing test is useful only if it fails for the right reason.**
>
> His red/green pattern calls for a failure before implementation. A broken import is not evidence that your replay check detects duplicate awards.

**In the wild:** Suggested adaptation: two deliveries should expose 20 points where the agreed rule requires 10.

**Takeaway:** Inspect the failure, not only the colour.

[Optional practice: first lab](research.md#first-practical-lab) · [Detailed evidence](research.md#red-before-green) · [Source register](sources.md)

---

### Archived card 03

### The real run

> **A green suite can still miss an obviously broken feature.**
>
> Willison complements tests with exploratory execution: try the API, run the code, or exercise a real web UI. Relevant discoveries can become regressions.

**In the wild:** Suggested adaptation: restart the real reward process and replay the original ID.

**Takeaway:** Exercise the boundary the requirement depends on.

[Optional practice: first lab](research.md#first-practical-lab) · [Detailed evidence](research.md#tests-plus-exercised-behaviour) · [Source register](sources.md)

---

### Archived card 04

### Own the handoff

> **Do not make your reviewer the first person to check your agent’s patch.**
>
> He places the initial review with the author, including the generated PR description. Evidence of testing makes the handoff more useful.

**In the wild:** Suggested adaptation: explain the durable replay rule before requesting review.

**Takeaway:** Review the work and its description yourself.

[Optional practice: first lab](research.md#first-practical-lab) · [Detailed evidence](research.md#review-is-the-authors-work) · [Source register](sources.md)

---

### Archived card 05

### A fresh working memory

> **A subagent is useful before it becomes a miniature bureaucracy.**
>
> Willison emphasises fresh context for exploration and verbose tasks. Independent work can parallelise; too many roles add coordination overhead.

**In the wild:** Suggested adaptation: separate read-only exploration of persistence and test setup.

**Takeaway:** Delegate a bounded question with a clear output.

[Optional practice: first lab](research.md#first-practical-lab) · [Detailed evidence](research.md#use-subagents-to-manage-context) · [Source register](sources.md)

---

### Archived card 06

### The explanation gap

> **An implementation you cannot reason about can slow the next change.**
>
> His walkthrough and interactive-explanation patterns address cognitive debt. A source tour explains structure; a visual mechanism can supply missing intuition.

**In the wild:** Suggested adaptation: trace first delivery, replay, restart and a new submission on an event timeline.

**Takeaway:** Use explanations to build understanding, then check them against the source.

[Optional practice: first lab](research.md#first-practical-lab) · [Detailed evidence](research.md#make-hard-mechanisms-visible) · [Source register](sources.md)

---

### Archived card 07

### Evidence with a memory

> **A useful demo records what ran, not merely what the agent hoped happened.**
>
> Showboat, built by Willison, combines commentary with executed commands and captured output. Its verifier can re-run code blocks; scope still matters.

**In the wild:** Suggested adaptation: record a local replay-and-restart sequence with synthetic data.

**Takeaway:** Keep a reproducible observation trail.

[Optional practice: first lab](research.md#first-practical-lab) · [Detailed evidence](research.md#tools-and-setup) · [Source register](sources.md)

---

### Archived card 08

### Different stakes

> **The same engineer can use different standards for a toy and a production feature.**
>
> His October accounts distinguish a heavily vibe-coded game from a blog feature refined through PR review. Preserve that context when comparing methods.

**In the wild:** A playtested experiment is not evidence of a universal production-review policy.

**Takeaway:** Compare like tasks and dates before declaring disagreement.

[Optional practice: first lab](research.md#first-practical-lab) · [Detailed evidence](research.md#a-feature-from-idea-to-release) · [Source register](sources.md)

---
