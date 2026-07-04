---
title: "Cross-Session Regression"
parent: "Verification"
nav_order: 3
last_updated: 2026-07-04
last_read: null
status: unread
---

# Cross-Session Regression

{: .hook }
> **Session B breaks what Session A built — while every test in your repository still passes. That's not a bug. That's the default.**
>
> Cross-session regression is a distinct failure class from "the agent wrote a bug." The agent wrote correct code against the slice of the system it could see. The bug lives in the gap between sessions.

**In short:**
- **The problem:** Three failure shapes — silent contract break (behavior changed underneath a still-compiling interface), parallel re-implementation (utility duplicated because the existing one wasn't found), and invariant violation (rule that lived only in human memory, violated by an agent that never knew it existed).
- **The idea:** Move constraints out of human discipline and into artifacts that survive session boundaries: tests, contracts, build rules.
- **How it works:** BDD scenarios for behavior, DDD boundaries for scope, contract tests for interface drift, fitness functions for architectural invariants, characterization tests for legacy.
- **The result:** Context engineering raises the floor (the next session sees the right things); verification installs the ceiling (the build refuses what context engineering missed). Both layers are needed.

{: .aha }
> **Context engineering fails open. Verification fails closed.** — context engineering makes it likely the agent sees the constraint; verification makes it certain the build rejects the violation.

{: .try-it }
> Pick a feature you built across multiple agent sessions. List three specific places where a fresh session could silently break it — name the file path and the exact change you can imagine an agent making. Tag each with: silent contract break, parallel re-implementation, or invariant violation.

---

## Deep dive

**Cross-session regression** is the failure mode where Session B of an agent breaks something Session A built, while every test in the repository still passes. Classical regression assumes a single author with continuous memory who could, in principle, have remembered the constraint they just violated; cross-session regression assumes the opposite—each session starts cold, sees only what context engineering surfaces, and has no episodic memory of why the code looks the way it does.

This is a distinct problem class from "the agent wrote a bug." The agent did not write a bug. The agent wrote correct code against the slice of the system it could see. The bug exists in the gap between sessions. Module 4 is about closing that gap with verification artifacts that survive session boundaries—because the human reading the diff can no longer be the load-bearing check. The remaining sessions cover six techniques, mapped to the failure shapes below.

## Three Failure Shapes

### 1. Silent Contract Break

The interface still compiles. The signature still matches. The behavior changed underneath.

Session A builds a `parseInvoice` function that returns `Result<Invoice, ParseError>`—a tagged union, callers must check the discriminant. Two weeks later, Session B is asked to "simplify error handling in the invoice module." It refactors `parseInvoice` to throw `ParseError` instead. It dutifully updates every caller it can see in the `invoice/` directory. Tests pass. The PR is small and clean.

The downstream consumer lives in `reporting/monthly-summary.ts`, which Session B never opened. That file still calls `parseInvoice(raw).ok ? ... : ...`—the `.ok` check now reads `undefined` on the thrown path, the ternary always takes the success branch, and the monthly summary silently drops malformed invoices instead of flagging them. No test fails because the reporting module's tests stub `parseInvoice` directly. The contract was the connective tissue, and nothing in the codebase forced Session B to honor it. This is the canonical shape, and the most common one in the wild ([Columbia DAPLab](https://daplab.cs.columbia.edu/general/2026/01/08/9-critical-failure-patterns-of-coding-agents.html) catalogs it as "refactor amnesia").

### 2. Parallel Re-Implementation

Session B is asked for a feature that needs a utility. It does not find the existing one, so it builds another.

Session A wrote `formatRelativeTime(date)` in `lib/time.ts` four months ago—handles timezones, pluralization, the "just now" threshold. Session B is building a notification panel and needs to render "3 minutes ago." It searches `notifications/` and the top of `lib/`, sees nothing obvious, and writes `timeAgo(date)` inline in the component. The two functions agree for the first six months. Then a daylight-saving edge case is fixed in `formatRelativeTime` and not in `timeAgo`, because no one knows `timeAgo` exists. The notification panel starts showing "in 1 hour" for events that just happened, twice a year, in two timezones.

Dexter Horthy's [Advanced Context Engineering](https://github.com/humanlayer/advanced-context-engineering-for-coding-agents/blob/main/ace-fca.md) writeup describes this as the predictable cost of "frequent intentional compaction"—every compaction is a chance for the agent to forget that something already exists, and the larger the codebase the more likely re-implementation becomes. The same discipline that keeps context windows from overflowing (keeping utilization in the 40–60% range, compacting between research and implementation) is structurally the same discipline that drops knowledge of existing utilities from the window. Two implementations of the same concept are worse than one bad one, because divergence is now invisible.

### 3. Invariant Violation

Session A held a rule by discipline. Session B never knew the rule existed.

The team's ORM layer has a hard rule: never issue a database query inside a `.map()` over a collection. Session A knew this—it was painful to learn, it cost a production incident in 2025, and the senior engineer who taught the rule has it memorized. The rule lives in nobody's head except by oral tradition. The codebase is N+1-free because every author so far has internalized it.

Session B is asked to add a "last login" field to the user list endpoint. It writes `users.map(u => ({ ...u, lastLogin: db.sessions.findLast({ userId: u.id }) }))`. The code is clear, the tests pass (the test fixture has three users), and CI is green. In production, the endpoint times out at 5,000 users and degrades the auth service with it. The invariant existed only in human memory; agents do not have access to human memory; therefore the invariant did not exist for Session B. The earezki postmortem of the [Claude Code thinking-budget incident](https://earezki.com/ai-news/2026-04-23-claude-code-felt-off-for-a-month-here-is-what-broke/) is structurally identical at a different scale—a regression that nothing in the test suite was shaped to catch, diffuse across thousands of sessions, invisible until aggregate behavior shifted.

## Why Reading the Code Doesn't Scale

The traditional answer to "how do we catch regressions across authors" is code review. A human reads the diff, holds the rest of the system in their head, notices the contract break or the duplicate utility or the N+1, and blocks the merge. This worked when the diff arrived once a day and the reviewer had built half the surrounding code themselves. It does not work when an agent produces a clean, well-formatted, locally-correct PR every twelve minutes and the reviewer has not personally written any of the surrounding code in months.

This is the speed asymmetry from [comprehension-debt](comprehension-debt.md): AI generates code 5–7x faster than humans can comprehend it, and the Anthropic study (Jan 2026) found developers using AI for passive delegation scored **17% lower** on debugging and comprehension tests. The implication for cross-session regression is brutal. The reviewer cannot detect the silent contract break by reading the diff, because the broken caller is not in the diff. They cannot detect the parallel re-implementation, because the existing utility is not in the diff. They cannot detect the invariant violation, because the invariant is not written down anywhere in the diff's blast radius. Reading the code only catches the bugs that are visible in the code being read—and the cross-session regressions, by definition, live in the code that isn't.

## Why Context Engineering Alone Is Insufficient

Context engineering—the discipline of loading the right facts into the next session's window—reduces the probability of cross-session regression by making it more likely the agent sees the existing utility, knows the contract shape, or reads the invariant rule. But it is a probabilistic input, not a guarantee. A retrieval system can miss. A CLAUDE.md can grow stale. A skill file can be loaded but ignored under token pressure. And optimizing context utilization (the 40–60% range Horthy recommends) means compressing content out of the window — which creates a systematic blind spot for facts the agent *did* know earlier in a session but can no longer reference. Context engineering raises the floor; it does not install a ceiling. Verification is the deterministic gate: a property-based test, a contract assertion, a fitness function, or an architecture rule that fails the build when the invariant is violated, regardless of whether the agent "knew" about it. Both layers are needed, and they fail in different ways—context engineering fails open (the agent proceeds without the fact), verification fails closed (the build refuses the change). Module 4 is about the second layer.

## What This Module Covers

The remaining sessions of Module 4 each address one or more of the three failure shapes above:

- [bdd-for-agents](bdd-for-agents.md) (S23) — Behavior-driven specs written before the code give the agent a runnable definition of intent. Prevents **silent contract breaks** by encoding the behavior contract, and reduces **parallel re-implementation** by making existing behaviors discoverable as scenarios.
- [ddd-boundaries](ddd-boundaries.md) (S24) — Domain-driven design surfaces the bounded contexts and ubiquitous language. Prevents **parallel re-implementation** by giving the agent a map of where things belong, and reduces **silent contract breaks** by making aggregate boundaries explicit.
- [contract-testing](contract-testing.md) (S25) — Anti-corruption layers and consumer-driven contracts (Pact, OpenAPI) catch **silent contract breaks** at the exact layer where they manifest. The contract is enforced by code, not by reviewer attention.
- [fitness-functions](fitness-functions.md) (S26) — Executable architecture rules (cyclomatic limits, layer dependency checks, "no DB calls in this directory") encode the **invariants** that previously lived in senior engineers' heads. The build fails when the rule is violated, no matter who wrote the code.
- [test-the-tests](test-the-tests.md) (S27) — Mutation testing and property-based testing verify the safety net is real. A green test suite that doesn't catch a reverted line is theater, and example-based tests miss the corner cases agents reliably skip.
- [characterization-and-handoff](characterization-and-handoff.md) (S28) — Lock down legacy behavior before letting an agent touch it, and make the verification surface discoverable so the next session actually uses it.

The pattern across all six: move the constraint out of human discipline and into a test, a contract, or a build rule that survives the next session boundary.

## Appendix: Fourth Failure Shape — Correlated Drift

As agentic codebases scale and more sessions run in parallel, a fourth failure shape has become distinct enough to name: **correlated drift**.

Unlike the original three shapes — which each have a clean cause (contract not honored, utility not found, rule not known) — correlated drift is a systems-level failure. Multiple sessions each make locally correct changes that, in combination, produce a behavior the original design never anticipated. No individual session made a mistake. No single PR breaks anything. The failure emerges from the *composition* of individually correct changes.

A concrete shape: Session A refactors `formatCurrency()` to handle negative values correctly; Session B updates the cart total calculation to return negative values for credits; Session C adds a display component that calls `formatCurrency()` on cart totals. Each change is independently sensible. Together, credits now display as "−$5.00" on the checkout page — technically correct but visually alarming and UX-breaking. No existing contract test catches this because no existing contract specified what `formatCurrency(-5)` should look like on a checkout summary.

What makes this a distinct failure shape: **the bug lives at an integration boundary that no session defined**. The three original shapes fail because a session violated something explicit. Correlated drift fails because no one made the integration contract explicit in the first place.

Detection mechanism: holistic integration tests — end-to-end scenarios that verify system-level behaviors across the full stack, not just individual module contracts. The [bdd-for-agents](bdd-for-agents.md) approach at its most expansive: feature scenarios that span contexts rather than staying within one. The [fitness-functions](fitness-functions.md) approach for the behavioral domain: "a cart with a credit always shows a non-negative display value" as a property, verified by a synthetic integration test on every deploy.

This shape doesn't invalidate the original three — those remain more common and more mechanically addressable. Correlated drift is harder to catch because it requires the kind of holistic thinking across sessions that agents don't have by default and humans struggle to maintain at scale.

## Action Step

Pick a feature you built across multiple agent sessions in the last month. Open the PRs side by side. List three specific places where a future agent session, working only from a fresh context window and the current state of the repo, could silently break it. For each:

1. Write down the file path and the exact change you can imagine an agent making.
2. Tag it with which of the three failure shapes applies—**silent contract break**, **parallel re-implementation**, or **invariant violation**.
3. Note whether your current test suite would catch it. If you're honest, most won't.

Keep the list. The next six sessions will give you the techniques to close each one. By the end of the module, every item on your list should map to a verification artifact you can add—not a habit you have to remember.

## Learn on the go

- **Podcast/Video:** [The AI Native Dev — harness engineering at AI Native DevCon London 2026](https://ainativedev.io/podcast) *(June 2026)*. Ryan Lopopolo (OpenAI) on "the asynchronous CI jobs that catch slop before it compounds" — the deterministic-gate argument of this page, from a team running agents at a billion tokens a day.
- **Course:** [Claude Code Beginner to Pro: Agentic Coding for Developers](https://www.udemy.com/course/learn-claude-code/) — Udemy *(updated June 2026)*. Building custom workflows and automations around Claude Code — the practical scaffolding for making verification artifacts run in every session.

Each technique page in this module has its own resource list — see [bdd-for-agents](bdd-for-agents.md), [ddd-boundaries](ddd-boundaries.md), [contract-testing](contract-testing.md), [fitness-functions](fitness-functions.md), [test-the-tests](test-the-tests.md), and [characterization-and-handoff](characterization-and-handoff.md).

---

**Next Session:** [bdd-for-agents](bdd-for-agents.md)
