---
title: Addy Osmani — comparison history
parent: Addy Osmani
nav_order: 9
last_updated: '2026-10-26'
nav_exclude: true
---

# Comparison history

These fields and slide notes preceded the publication-window review on 26 October 2026. They are retained for traceability, not evidence of current AI practice. [Current evidence](recent-ai.md).

## Previous comparison fields

### C01 · Goal and bottleneck

Reliable delegation needs verification and human answerability, not generation speed alone.

Public advocacy; no controlled advantage inferred.

[Original supporting source](https://addyosmani.com/blog/own-the-outer-loop/)

### C02 · Requirements and specification

Review an evolving specification and plan; give each task only relevant context.

Prose guidance must still be connected to executable checks.

[Original supporting source](https://addyosmani.com/blog/good-spec/)

### C03 · Increment and planning

His January 2026 workflow reports small supervised chunks, meaningful checks, and version-control checkpoints.

January self-report; not proof of an invariant process across all projects.

[Original supporting source](https://addyosmani.com/blog/ai-coding-workflow/)

### C04 · Testing and verification

Characterize uncertain legacy behaviour and review against original requirements.

No universal mandatory TDD cadence established.

[Original supporting source](https://addyosmani.com/blog/brownfield-agentic-engineering/)

### C05 · Design and refactoring

Learn existing constraints before redesigning; match changes to risk and reversibility.

The shared reward implementation is our adaptation.

[Original supporting source](https://addyosmani.com/blog/brownfield-agentic-engineering/)

### C06 · Human understanding and review

Humans own acceptance, audit and explanation; they need not prompt every inner-loop step.

Review depth is contextual; no approval-free release implied.

[Original supporting source](https://addyosmani.com/blog/own-the-outer-loop/)

### C07 · Agent autonomy and coordination

His March 2026 orchestration guidance gives parallel workers scoped ownership, coordination and verification gates.

Talk-based guidance, not evidence that every personal task uses a fleet.

[Original supporting source](https://addyosmani.com/blog/code-agent-orchestra/)

### C08 · Context and durable state

Keep durable task state outside chat; loops depend on persistent progress records.

Exact private memory configuration not established.

[Original supporting source](https://addyosmani.com/blog/loop-engineering/)

### C09 · Tooling and environment

Publishes Agent Skills; his January 2026 self-report separately names coding and debugging tools.

Published artifacts and historical self-report are distinguished in tools.md.

[Original supporting source](https://github.com/addyosmani/agent-skills)

### C10 · Integration and release

His January 2026 workflow reports small comprehensible changes and frequent version-control checkpoints; a complete production release policy is not established.

No complete personal production deployment topology established.

[Original supporting source](https://addyosmani.com/blog/ai-coding-workflow/)

### C11 · Boundaries and safeguards

Autonomy should follow risk, visibility and recoverability; enforce important boundaries.

A prose policy is not a demonstrated resource permission.

[Original supporting source](https://addyosmani.com/blog/brownfield-agentic-engineering/)

### C12 · Evaluation and tradeoffs

Audit configuration value and cost; do not assume every skill improves every workflow.

Personal observations and reported research do not establish universal thresholds.

[Original supporting source](https://addyosmani.com/blog/audit-your-agent-files/)

## Previous slide notes

# Addy Osmani — bite-sized ideas

Eight small reads derived from public-source research checked on 26 October 2026. All reward examples below are suggested adaptations, not Osmani demonstrations.

### Archived card 01

### The reviewable plan

> **Make the agreement visible before the code arrives.**
>
> Osmani recommends a reviewed, evolving specification and focused task context. A giant prompt is not the objective.

**In the wild:** Suggested adaptation: agree that replayed submission A still leaves the reward at 10 points.

**Takeaway:** Clarify the rule and keep its checks close.

[Optional practice: reward lab](workflow.md#first-practical-lab) · [Detailed guide](research.md#2-techniques-and-principles) · [Cached source](sources.md#s02)

---

### Archived card 02

### The surrounding system

> **A better model cannot fix every missing feedback loop.**
>
> His harness framing treats tools, context, permissions and feedback as engineering work. Diagnose a recurring failure before adding machinery.

**In the wild:** Suggested adaptation: a real persistence check catches what another instruction paragraph might miss.

**Takeaway:** Give every harness component a specific job.

[Optional practice: reward lab](workflow.md#first-practical-lab) · [Detailed guide](research.md#2-techniques-and-principles) · [Cached source](sources.md#s03)

---

### Archived card 03

### Earned autonomy

> **The riskiest file should not set its own permission level.**
>
> His brownfield guidance gives people responsibility for risk zones. Test confidence, visibility and recovery influence autonomy.

**In the wild:** Suggested adaptation: inspect the reward ledger before granting an unattended rewrite.

**Takeaway:** Map the change’s risk before delegating it.

[Optional practice: reward lab](workflow.md#first-practical-lab) · [Detailed guide](research.md#2-techniques-and-principles) · [Cached source](sources.md#s04)

---

### Archived card 04

### The lasting record

> **The next session should not repeat the same archaeology.**
>
> His loop discussion relies on durable progress outside the conversation. Chat context is not the only place work state should live.

**In the wild:** Suggested adaptation: save which restart check ran and which requirement remains unresolved.

**Takeaway:** Leave evidence the next session can inspect.

[Optional practice: reward lab](workflow.md#first-practical-lab) · [Detailed guide](research.md#2-techniques-and-principles) · [Cached source](sources.md#s06)

---

### Archived card 05

### Coordinated parallelism

> **Five busy agents are not automatically a team.**
>
> His orchestration patterns pair independent workers with ownership, isolation, dependencies and verification. Coordination is part of the work.

**In the wild:** Suggested adaptation: separate implementation ownership from a fresh review of the same reward rule.

**Takeaway:** Parallelise a boundary you can explain.

[Optional practice: reward lab](workflow.md#first-practical-lab) · [Detailed guide](research.md#2-techniques-and-principles) · [Cached source](sources.md#s05)

---

### Archived card 06

### The production verdict

> **The agent can finish its loop. You still own the decision.**
>
> His outer-loop argument distinguishes quality evidence from acceptance and answerability. More autonomy does not erase ownership.

**In the wild:** Suggested adaptation: review the restart evidence and known gaps before accepting the change.

**Takeaway:** Be able to explain why the result was accepted.

[Optional practice: reward lab](workflow.md#first-practical-lab) · [Detailed guide](research.md#2-techniques-and-principles) · [Cached source](sources.md#s07)

---

### Archived card 07

### Configuration half-life

> **A useful instruction can become stale overhead.**
>
> His configuration audit recommends revisiting instructions, skills, hooks and memory. Keeping a capability forever is a separate decision from installing it.

**In the wild:** Suggested adaptation: compare a lean configuration against the old one on a reproducible task.

**Takeaway:** Retain guidance because evidence still supports it.

[Optional practice: reward lab](workflow.md#first-practical-lab) · [Detailed guide](research.md#2-techniques-and-principles) · [Cached source](sources.md#s08)

---

### Archived card 08

### Published discipline

> **A skill pack is an artifact, not a guarantee.**
>
> His public Agent Skills repository packages lifecycle guidance. The inspected README establishes published commands, not effectiveness in your project.

**In the wild:** Suggested adaptation: verify what actually runs when a reward change claims to pass its checks.

**Takeaway:** Evaluate the outcome, not the command name.

[Optional practice: reward lab](workflow.md#first-practical-lab) · [Detailed guide](research.md#2-techniques-and-principles) · [Cached source](sources.md#s11)

---
