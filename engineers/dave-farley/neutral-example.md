---
title: Dave Farley — common reward example
parent: Dave Farley
nav_order: 3
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
derived_from: engineers/dave-farley/research.md
---

# A common reward example

**Suggested adaptation.** This chapter applies the [cached Farley principles](index.md#comparison-evidence) to the same neutral task used for other engineers. It is original proposed guidance, not a demonstration by Farley, a report of his private process, or a runnable implementation. No additional external research was performed.

The original [Spellhaven walkthrough](research.md#3-a-step-by-step-session) remains available in full. This mapping removes its spelling-app-specific rules so a comparison can keep the problem constant.

## The shared requirement

A request may be delivered more than once. A reward worth **10 points must be awarded once per submission ID**. A successful award must survive restart. A new submission ID is a separate event. Start by establishing how the existing system behaves.

The initial implementation, language, storage, test runner, and runtime are unknown. No network transport, UI journey, distributed concurrency, or particular database is assumed. Those can matter in a real product, but adding them here for only one profile would change the comparison.

Use the same starting revision, environment, and checks if this later becomes a runnable comparison. These research profiles alone cannot establish which workflow performs better.

## Translate intent into observable examples

Start with an isolated account whose balance is zero. Use a logical application boundary through which a driver can submit an ID, read the balance, and restart the system while retaining its durable data.

| Observation | Action | Expected balance | What this checks |
|---|---|---|---|
| Baseline | Read a new isolated account | 0 | The fixture starts in a known state |
| First delivery | Deliver submission `A` | 10 | One event creates one reward |
| Replay | Deliver `A` again | 10 | Repeating the identity does not repeat the reward |
| Restart | Restart, then read the account | 10 | A successful reward persists |
| Replay after restart | Deliver `A` again after restart | 10 | Duplicate protection is not merely transient memory |
| Separate event | Deliver new submission `B` | 20 | A different identity represents another reward |

These are agreed outcomes for this exercise. They are not claims about Farley's preferred reward policy or the existing application's behaviour. If the real product's contract differs, resolve that explicitly before implementing it.

A scenario could be expressed as:

```gherkin
Scenario: A rewarded submission remains a single event after restart
  Given an isolated account with 0 points
  When submission A is delivered
  And the system restarts while retaining durable data
  And submission A is delivered again
  Then the account has 10 points
```

A second scenario can check that `B` takes the balance to 20. An implementation that ignores every submission would pass a weak replay-only check; the first-delivery and separate-event observations prevent that particular false assurance.

## Map the four layers without prescribing the product design

This is an application of [C02](index.md#c02) and [C04](index.md#c04):

| Layer | Proposed responsibility | Evidence to inspect |
|---|---|---|
| Test cases | Express the outcomes in the example table | Expected balances come from agreed intent |
| Domain language | Provide operations such as `deliver`, `balance`, and `restartKeepingData` | Operations preserve domain meaning rather than expose selectors or SQL |
| Protocol driver | Translate operations to the system's real supported boundary | Assertions observe real application state rather than a copied reward algorithm |
| System under test | Apply the reward rule and preserve successful state | Restart genuinely replaces the process or equivalent runtime state without replacing durable data |

The four test layers do not require four product tiers or a new web service. Keep any existing supported boundary that can observe the behaviour honestly. A driver which merely clears a local test variable does not establish restart persistence.

## Proposed sequence from inspection to integration

1. **Inspect the starting system.** Locate reward entry points, identity handling, persistence, and existing checks. Run a baseline. Record assumptions and pre-existing failures.
2. **Agree the examples.** Review the balance table with a person who owns intent. Keep the acceptance contract inspectable before implementation.
3. **Pick one missing behaviour.** A sensible first slice is first delivery. Implementing every case in one large patch would obscure where a misunderstanding entered.
4. **Observe the right failure.** A test failing because a package is unavailable does not show missing reward behaviour. If the rule is already implemented, investigate existing coverage instead of manufacturing a product defect.
5. **Implement and verify.** Give the agent the approved test and the relevant design constraints. Read the result, run relevant regression checks, and review any changes to tests or configuration.
6. **Add the next scenario.** Replay, persistence, replay after restart, and a separate ID make distinct mistakes visible. Follow the same small-step loop for each agreed missing behaviour.
7. **Refactor deliberately.** Improve clarity or separation only where it helps the actual path. Preserve the acceptance meaning and rerun checks.
8. **Challenge and integrate.** Temporarily remove identity protection or durable identity recording and check whether the relevant scenario notices. Restore the code and run the normal checks. Review and integrate a coherent increment through the existing project process.

The sequence adapts [C03](index.md#c03), [C05](index.md#c05), [C06](index.md#c06), [C10](index.md#c10), and [C11](index.md#c11). Its specific scenario order and implementation checkpoints are our proposal. No particular agent model, plugin, storage engine, or test framework follows automatically from those principles.

## A reusable implementation prompt

```text
Our agreed contract is in the acceptance examples. Inspect the existing
reward entry point, submission identity handling, persistence, and tests.
Report observed behaviour before proposing a change.

Implement only the next missing approved scenario. A successful reward
is 10 points once per submission ID, remains after restart, and cannot be
awarded again by replaying that ID after restart. A different submission
ID is a separate event.

Use the existing application boundary and runner where suitable. Keep
technical coupling behind the driver. Do not change expected outcomes to
fit the implementation. If the contract or environment is inconsistent,
explain the issue. Report the checks run and the resulting behaviour.
```

This is an original prompt adapted from the cached approach, not a published Farley prompt.

## What remains outside this example

The exercise does not establish simultaneous-delivery behaviour, recovery during a partially completed write, access control, performance under load, a UI, or a transport contract. Record those as outside scope rather than claiming this small suite verifies them. If one becomes a real requirement, add the same requirement to every workflow comparison before measuring results.

Useful evidence is the approved example, the observed failure or existing coverage, the resulting small diff, passing checks, and a plausible defect a check detects. Research-based comparison should discuss these responsibilities; it should not invent time savings or a winner.

[Full guide](research.md) · [Cached source findings](sources.md) · [Slide notes](slides.md) · [Profile claims](index.md#comparison-evidence).
