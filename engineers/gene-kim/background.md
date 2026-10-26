---
title: Gene Kim — comparison history
parent: Gene Kim
nav_order: 9
last_updated: '2026-10-26'
nav_exclude: true
---

# Comparison history

These fields and slide notes preceded the publication-window review on 26 October 2026. They are retained for traceability, not evidence of current AI practice. [Current evidence](recent-ai.md).

## Previous comparison fields

### C01 · Goal and bottleneck

Joint Kim/Yegge 2025 guidance emphasises useful outcomes, frequent feedback and modularity as code generation becomes cheaper.

Joint Kim/Yegge prescription, not a demonstrated universal productivity effect.

[Original supporting source](https://itrevolution.com/articles/essential-skills-of-a-vibe-coder/)

### C02 · Requirements and specification

Joint Kim/Yegge October 2025 guidance uses concrete requirements, examples and context for conversational refinement.

Joint excerpt; no universal private template established.

[Original supporting source](https://itrevolution.com/articles/the-key-vibe-coding-practices/)

### C03 · Increment and planning

Joint Kim/Yegge September 2025 guidance decomposes objectives into manageable steps, then reviews and iterates.

Joint recommendation; no fixed increment size or mandatory agent count.

[Original supporting source](https://itrevolution.com/articles/the-vibe-coding-loop/)

### C04 · Testing and verification

Joint Kim/Yegge September 2025 guidance recommends tests and expectations before generation, followed by verification.

This does not establish strict unit-level TDD for every personal change.

[Original supporting source](https://itrevolution.com/articles/the-vibe-coding-loop/)

### C05 · Design and refactoring

His March 2025 Trello account proposes better testability and interfaces; completion of every proposed refactor is not established.

Personal 2025 account includes proposed changes; completion of every refactor is unverified.

[Original supporting source](https://itrevolution.com/articles/rearchitecting-my-trello-management-tool-with-claude-code-using-vibe-coding-architecting-part-2/)

### C06 · Human understanding and review

In his January 2026 interview, Kim retains human accountability even when implementation is delegated.

Interview self-report and advice; not a universal line-by-line review rule.

[Original supporting source](https://techleadjournal.dev/episodes/244/)

### C07 · Agent autonomy and coordination

His March 2025 solo guidance calibrates pairing and delegation by novelty, capability and consequences.

Solo 2025 guidance. Joint later orchestration patterns are not a complete current personal topology.

[Original supporting source](https://itrevolution.com/articles/vibe-coding-pairing-vs-delegation/)

### C08 · Context and durable state

His June 2025 manuscript-tool report includes plan files; a complete current memory/handoff protocol is not established.

Historical published output; do not infer that a particular durable-state file is always used.

[Original supporting source](https://itrevolution.com/articles/the-last-80-hours-of-editing-the-vibe-coding-book/)

### C09 · Tooling and environment

His 2025 project reports name Claude Code and Clojure; those dated choices do not establish a complete current private stack.

Historical personal use; complete current stack and configuration unknown.

[Original supporting source](https://itrevolution.com/articles/the-last-80-hours-of-editing-the-vibe-coding-book/)

### C10 · Integration and release

A complete current personal integration, release and rollback policy is not established.

General verification guidance does not supply his actual present release gates.

### C11 · Boundaries and safeguards

His January 2026 interview warns about unchecked generated work and retains human responsibility; enforced protections remain unestablished.

Specific current access controls or enforced test protections were not established.

[Original supporting source](https://techleadjournal.dev/episodes/244/)

### C12 · Evaluation and tradeoffs

The June 2025 report records agent/local test disagreement; assess accepted outcomes and verification effort rather than transfer personal speed claims.

Our inference from a retrospective project report: test-result mismatch is reported, while the common-task evaluation protocol is our adaptation. No controlled comparative advantage is established.

[Original supporting source](https://itrevolution.com/articles/the-last-80-hours-of-editing-the-vibe-coding-book/)

## Previous slide notes

# Gene Kim — bite-sized ideas

Eight short reads derived from the research cache. Examples are suggested adaptations. Personal reports and coauthored recommendations are distinguished in the full notes.

### Archived card 01

### Calibrated delegation

> **Autonomy is a decision about the task in front of you.**
>
> Kim's pairing-versus-delegation article makes novelty, capability and consequences part of the choice. Delegating one familiar task does not establish that the next risky change deserves the same freedom.

**In the wild:** Our reward example starts with inspection while persistence is unclear, then delegates a bounded change.

**Takeaway:** Name the uncertainty before choosing the amount of supervision.

[Optional practice: reward lab](workflow.md#first-practical-lab) · [Cached evidence](index.md#c07) · [Detailed research](research.md#calibrate-pairing-and-delegation)

---

### Archived card 02

### The feedback investment

> **A faster answer is less useful when finding the error is still slow.**
>
> In his add-on account, Kim reports improving the reload loop and access to error output. Better feedback was part of the project, not merely extra code generation.

**In the wild:** Our suggested task record keeps the actual reward-check command and result visible.

**Takeaway:** Improve the path from an action to an interpretable result.

[Optional practice: reward lab](workflow.md#first-practical-lab) · [Historical project evidence](sources.md#s02) · [Detailed research](research.md#make-feedback-part-of-the-working-environment)

---

### Archived card 03

### Fix the shape

> **A recurring bug may be asking for a better boundary.**
>
> Kim's Trello account describes asking AI for a testability plan and cleaner interfaces. Some changes were proposals; the account does not prove every recommendation was implemented.

**In the wild:** In our adaptation, isolate reward decisions enough to inspect them without dropping the persistence check.

**Takeaway:** Ask which structural change would make this class of mistake visible.

[Optional practice: reward lab](workflow.md#first-practical-lab) · [Cached evidence](index.md#c05) · [Detailed research](research.md#use-architecture-to-make-categories-of-mistakes-testable)

---

### Archived card 04

### Expectations before generation

> **Decide what success looks like before the code offers its own answer.**
>
> Kim and Yegge's joint loop recommends tests and expectations before generation. That supports test-first guidance without establishing a strict personal TDD ritual for every change.

**In the wild:** Our fixed outcomes are 0, 10, 10, restart/read 10, replay 10, then new ID 20.

**Takeaway:** Keep the acceptance meaning stable while the implementation changes.

[Optional practice: reward lab](workflow.md#first-practical-lab) · [Cached evidence](index.md#c04) · [Detailed research](research.md#keep-the-loop-small-and-verify-before-accepting)

---

### Archived card 05

### Coordination is design

> **More assistants create more interfaces to manage.**
>
> The joint orchestration excerpt treats partitioning, communication and integration as engineering work. It describes patterns, not a verified current Gene-operated swarm.

**In the wild:** Our reward adaptation gives one owner the shared persistence path instead of letting several agents collide there.

**Takeaway:** Define ownership and integration before increasing parallelism.

[Optional practice: reward lab](workflow.md#first-practical-lab) · [Joint guidance](sources.md#s07) · [Detailed research](research.md#treat-coordination-as-architecture)

---

### Archived card 06

### Volume is workload

> **A big diff creates something to verify—not an automatic productivity result.**
>
> Kim's manuscript-tool report contains impressive personal speed claims and published activity. Its historical self-comparison cannot tell us which engineer's approach wins on the common task.

**In the wild:** Our local experiment counts review and repair time alongside generation time.

**Takeaway:** Compare completed outcomes under matching conditions.

[Optional practice: reward lab](workflow.md#first-practical-lab) · [Evidence assessment](index.md#c12) · [Original report scope](sources.md#s08)

---

### Archived card 07

### Responsibility survives delegation

> **The assistant can do the work. It cannot inherit your accountability.**
>
> Kim's interview keeps responsibility with the human. That does not establish one universal review rule or reveal his complete private access-control configuration.

**In the wild:** Our reviewer inspects balance observations, changed tests and excluded risks before accepting the reward patch.

**Takeaway:** State what the checks establish and what still needs judgment.

[Optional practice: reward lab](workflow.md#first-practical-lab) · [Cached evidence](index.md#c06) · [Failure modes](research.md#6-failure-modes-and-limits)

---

### Archived card 08

### The missing observation

> **Restart, submit, and read can hide a persistence bug.**
>
> This is our suggested comparison exercise. Read immediately after restart, before replaying A. Otherwise lost state followed by a fresh award could still produce 10 and look correct.

**In the wild:** Baseline0 → A10 → replayA10 → restart/read10 → replayA10 → B20.

**Takeaway:** Keep each required observation separate enough to expose its failure.

[Optional practice: reward lab](workflow.md#first-practical-lab) · [Shared task and observations](workflow.md#fixed-task-and-unknowns) · [Research context](research.md)

---
