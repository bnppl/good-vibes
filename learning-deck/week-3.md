---
title: "03 · Make good work survive"
parent: Learning Deck
nav_order: 3
---

# 03 · Make good work survive

**Will this hold up next session?** Carry behaviour, intent, and access boundaries across sessions.

Four lesson cards · about 3–5 minutes each before the exercise · one 60–90 minute lab.

[All decks](index.md) · [First card ↓](#card-09)

---

## Card 09

### Protect yesterday’s behaviour

> {: .aha }
> **Today’s feature can undo yesterday’s fix.**
>
> Keep executable examples of behaviour that must survive later changes. Include edge cases as well as the new feature.

**Picture it:** Adding a hint must not reset retry limits or award XP for an incorrect spelling.

**Recall before revealing:** Must behavioural examples use Gherkin?

<details markdown="1">
<summary>Reveal the answer</summary>

No. Use a readable executable format that communicates intent. Gherkin is useful when it improves shared understanding.

</details>

**Try it:** Write three examples: normal behaviour, an edge case, and an existing behaviour that must survive.

[Full exercise: session 9](../learning-plan.md#session-9-behaviour-across-sessions) · Go deeper: [Cross-session regression](../verification/cross-session-regression.md) · [BDD for agents](../verification/bdd-for-agents.md)

[Next card →](#card-10)

---

## Card 10

### Check the crossing point

> {: .aha }
> **A local test can miss a broken agreement.**
>
> Choose checks around the boundary being crossed. A contract, integration, property, or architecture check answers a different question.

**Picture it:** A scoring unit test can pass while the sync client sends XP in a format the server rejects.

**Recall before revealing:** Can one boundary check establish that the whole feature works?

<details markdown="1">
<summary>Reveal the answer</summary>

No. State exactly what it observes and what it cannot detect; add other checks where the risk warrants them.

</details>

**Try it:** Sketch the changed components and their interface. Select one appropriate check and write its blind spot.

[Full exercise: session 10](../learning-plan.md#session-10-boundaries-and-the-right-checks) · Go deeper: [DDD boundaries](../verification/ddd-boundaries.md) · [Contract testing](../verification/contract-testing.md)

[Next card →](#card-11)

---

## Card 11

### Separate permission from persuasion

> {: .aha }
> **“Do not touch this” is not a locked door.**
>
> Treat retrieved instructions as untrusted content. Enforce access boundaries through the environment as well as instructions.

**Picture it:** A fixture README asks the agent to write outside the checkout. That text cannot grant authority or filesystem access.

**Recall before revealing:** Are a refusal and a denied write the same evidence?

<details markdown="1">
<summary>Reveal the answer</summary>

No. A refusal shows agent behaviour. A denied operation shows an enforced boundary on the path tested. Neither proves every path is safe.

</details>

**Try it:** Draft an access matrix for files, network, credentials, and external writes. Plan a benign negative test using disposable fixtures only.

[Full exercise: session 11](../learning-plan.md#session-11-permissions-and-prompt-injection) · Go deeper: [Agent security and containment](../verification/agent-security.md)

[Next card →](#card-12)

---

## Card 12

### Test the safety net

> {: .aha }
> **A test suite can agree with the same mistake.**
>
> Introduce a deliberate regression to check whether the relevant test rejects it. In legacy code, separate observed behaviour from intended behaviour.

**Picture it:** Temporarily award XP twice in an isolated copy. The retry check should fail for that change.

**Recall before revealing:** Does a characterization test prove the old behaviour is desirable?

<details markdown="1">
<summary>Reveal the answer</summary>

No. It captures what the system does. Review intent before turning an accidental behaviour into a requirement.

</details>

**Try it:** Choose a deliberate regression. Review the handoff for verification commands and unresolved risks.

[Full exercise: session 12](../learning-plan.md#session-12-test-the-safety-net-and-the-handoff) · Go deeper: [Test the tests](../verification/test-the-tests.md) · [Characterization and handoff](../verification/characterization-and-handoff.md)

[Ready for the lab →](#lab-card)

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

**Recall round:** Without looking, explain each card's main idea and one failure mode. Reopen the ones you cannot yet explain.

[← All decks](index.md) · [Previous deck](week-2.md) · [Next deck →](week-4.md)
