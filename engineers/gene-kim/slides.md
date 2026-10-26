---
title: Gene Kim — bite-sized ideas
parent: Gene Kim Slides
nav_order: 1
nav_exclude: true
last_updated: '2026-10-26'
cache_schema: 1
derived_from: engineers/gene-kim/index.md
research_checked: '2026-10-26'
---

# Gene Kim — bite-sized ideas

Eight short reads derived from the research cache. Examples are suggested adaptations. Personal reports and coauthored recommendations are distinguished in the full notes.

## Card 01

### Calibrated delegation

> **Autonomy is a decision about the task in front of you.**
>
> Kim's pairing-versus-delegation article makes novelty, capability and consequences part of the choice. Delegating one familiar task does not establish that the next risky change deserves the same freedom.

**In the wild:** Our reward example starts with inspection while persistence is unclear, then delegates a bounded change.

**Takeaway:** Name the uncertainty before choosing the amount of supervision.

[Optional practice: reward lab](workflow.md#first-practical-lab) · [Cached evidence](index.md#c07) · [Detailed research](research.md#calibrate-pairing-and-delegation)

---

## Card 02

### The feedback investment

> **A faster answer is less useful when finding the error is still slow.**
>
> In his add-on account, Kim reports improving the reload loop and access to error output. Better feedback was part of the project, not merely extra code generation.

**In the wild:** Our suggested task record keeps the actual reward-check command and result visible.

**Takeaway:** Improve the path from an action to an interpretable result.

[Optional practice: reward lab](workflow.md#first-practical-lab) · [Historical project evidence](sources.md#s02) · [Detailed research](research.md#make-feedback-part-of-the-working-environment)

---

## Card 03

### Fix the shape

> **A recurring bug may be asking for a better boundary.**
>
> Kim's Trello account describes asking AI for a testability plan and cleaner interfaces. Some changes were proposals; the account does not prove every recommendation was implemented.

**In the wild:** In our adaptation, isolate reward decisions enough to inspect them without dropping the persistence check.

**Takeaway:** Ask which structural change would make this class of mistake visible.

[Optional practice: reward lab](workflow.md#first-practical-lab) · [Cached evidence](index.md#c05) · [Detailed research](research.md#use-architecture-to-make-categories-of-mistakes-testable)

---

## Card 04

### Expectations before generation

> **Decide what success looks like before the code offers its own answer.**
>
> Kim and Yegge's joint loop recommends tests and expectations before generation. That supports test-first guidance without establishing a strict personal TDD ritual for every change.

**In the wild:** Our fixed outcomes are 0, 10, 10, restart/read 10, replay 10, then new ID 20.

**Takeaway:** Keep the acceptance meaning stable while the implementation changes.

[Optional practice: reward lab](workflow.md#first-practical-lab) · [Cached evidence](index.md#c04) · [Detailed research](research.md#keep-the-loop-small-and-verify-before-accepting)

---

## Card 05

### Coordination is design

> **More assistants create more interfaces to manage.**
>
> The joint orchestration excerpt treats partitioning, communication and integration as engineering work. It describes patterns, not a verified current Gene-operated swarm.

**In the wild:** Our reward adaptation gives one owner the shared persistence path instead of letting several agents collide there.

**Takeaway:** Define ownership and integration before increasing parallelism.

[Optional practice: reward lab](workflow.md#first-practical-lab) · [Joint guidance](sources.md#s07) · [Detailed research](research.md#treat-coordination-as-architecture)

---

## Card 06

### Volume is workload

> **A big diff creates something to verify—not an automatic productivity result.**
>
> Kim's manuscript-tool report contains impressive personal speed claims and published activity. Its historical self-comparison cannot tell us which engineer's approach wins on the common task.

**In the wild:** Our local experiment counts review and repair time alongside generation time.

**Takeaway:** Compare completed outcomes under matching conditions.

[Optional practice: reward lab](workflow.md#first-practical-lab) · [Evidence assessment](index.md#c12) · [Original report scope](sources.md#s08)

---

## Card 07

### Responsibility survives delegation

> **The assistant can do the work. It cannot inherit your accountability.**
>
> Kim's interview keeps responsibility with the human. That does not establish one universal review rule or reveal his complete private access-control configuration.

**In the wild:** Our reviewer inspects balance observations, changed tests and excluded risks before accepting the reward patch.

**Takeaway:** State what the checks establish and what still needs judgment.

[Optional practice: reward lab](workflow.md#first-practical-lab) · [Cached evidence](index.md#c06) · [Failure modes](research.md#6-failure-modes-and-limits)

---

## Card 08

### The missing observation

> **Restart, submit, and read can hide a persistence bug.**
>
> This is our suggested comparison exercise. Read immediately after restart, before replaying A. Otherwise lost state followed by a fresh award could still produce 10 and look correct.

**In the wild:** Baseline0 → A10 → replayA10 → restart/read10 → replayA10 → B20.

**Takeaway:** Keep each required observation separate enough to expose its failure.

[Optional practice: reward lab](workflow.md#first-practical-lab) · [Shared task and observations](workflow.md#fixed-task-and-unknowns) · [Research context](research.md)

---
