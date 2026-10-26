---
title: "03 · Make good work survive"
parent: Learning Deck
nav_order: 3
last_updated: 2026-10-26
---

# 03 · Make good work survive

**Will this hold up next session?** Carry behaviour, intent, and access boundaries across sessions.

Four quick ideas · around 30 seconds each · optional deeper reading.

[All decks](index.md) · [First card ↓](#card-09)

---

## Card 09

### The disappearing fix

> **Today’s feature can quietly undo yesterday’s fix.**
>
> Agents working in fresh sessions may not know which old behaviours matter. Executable examples preserve those agreements across changes, even when the conversation has disappeared.

**In the wild:** A new hint button works beautifully. It also resets the retry limit.

**Takeaway:** Protect existing behaviour alongside the new feature.

[Optional practice: session 9](../learning-plan.md#session-9-behaviour-across-sessions) · Go deeper: [Cross-session regression](../verification/cross-session-regression.md) · [BDD for agents](../verification/bdd-for-agents.md)

---

## Card 10

### The border problem

> **Two correct components can still make one broken feature.**
>
> A unit test can prove local behaviour while missing a disagreement at an interface. Contracts and integration checks help you examine the crossing point. Each check still has blind spots.

**In the wild:** Scoring calculates the right XP. Sync sends it in a format the server rejects.

**Takeaway:** Check the agreement between components.

[Optional practice: session 10](../learning-plan.md#session-10-boundaries-and-the-right-checks) · Go deeper: [DDD boundaries](../verification/ddd-boundaries.md) · [Contract testing](../verification/contract-testing.md)

---

## Card 11

### The unlocked door

> **“Please don’t” is a prompt. A denied write is a boundary.**
>
> Instructions influence behaviour. Permissions limit what actions can happen. Retrieved text cannot grant authority, even when it survives in a summary or a later session.

**In the wild:** A README asks the agent to write outside the checkout. The environment should reject that write if it is attempted.

**Takeaway:** Check the boundary itself, not just the agent’s promise.

[Optional practice: session 11](../learning-plan.md#session-11-permissions-and-prompt-injection) · Go deeper: [Agent security and containment](../verification/agent-security.md)

---

## Card 12

### The agreeable safety net

> **Your AI can write a bug and a test that agrees with it.**
>
> Implementation and tests can share the same misunderstanding. A deliberate regression checks whether your safety net rejects a known defect. It does not prove the suite catches every defect.

**In the wild:** In an isolated copy, award XP twice. Does the retry test fail?

**Takeaway:** Test whether your checks can disagree with broken code.

[Optional practice: session 12](../learning-plan.md#session-12-test-the-safety-net-and-the-handoff) · Go deeper: [Test the tests](../verification/test-the-tests.md) · [Characterization and handoff](../verification/characterization-and-handoff.md)

---

## Lab card

### Resume safely

> {: .try-it }
> **Put the four cards to work.**
>
> Finish a small feature and hand it to a fresh session. Extend it, rerun earlier scenarios, and confirm a deliberate regression is caught in an isolated copy.

**Your evidence:** A checked handoff, a caught regression, and denial evidence for a benign prohibited operation against resources you control.

**Keep in mind:** Use disposable fixtures and synthetic data. Record which access path was tested and what remains untested; never use production systems or real secrets.

[Open the full lab brief](../learning-plan.md#lab-3-resume-safely)

[← All decks](index.md) · [Previous deck](week-2.md) · [Next deck →](week-4.md)
