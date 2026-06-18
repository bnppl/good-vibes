---
title: "Agentic TDD"
parent: "Verification"
nav_order: 1
last_updated: 2026-06-16
last_read: null
status: unread
---

# Agentic TDD: Verification-First Development

{: .hook }
> **Adding "do TDD" to a system prompt can actually increase regressions — because the agent writes tests that confirm its own broken logic.**
>
> The Fowler "TDD Paradox" (March 2026): agents writing their own tests inflate regressions rather than reduce them when there's no human review gate on the tests themselves.

**In short:**
- **The problem:** Agent-written tests validate whatever the agent happened to produce — the test author and code author are the same untrusted party.
- **The idea:** Tests as prompts — failing tests as the specification language, giving agents an unambiguous binary success criterion before they write a line of code.
- **How it works:** Red-Green-Agent loop (human-approved failing test → agent makes it pass → fresh agent refactors); negative test priority; PreToolUse hooks as hard gates blocking writes to `src/` without a failing test.
- **The result:** A green suite is not a safe suite. Kill rate from mutation testing is the honest measure; line coverage tells you the test ran the code, not that it would notice if the code changed.

{: .aha }
> **Tests as prompts, not tests as validation** — the agent needs a runnable binary success criterion before it writes a line, not a vague "add tests when done" instruction.

{: .try-it }
> Pick one function an agent wrote recently. Write one test that specifies a specific invariant — a boundary condition, an error path, something non-obvious. Confirm the test would fail on a plausible wrong implementation before the agent sees it.

---

## Deep dive

By 2026, **Agentic TDD** has emerged as the primary "safety net" for AI-driven software engineering. As AI agents generate an increasing percentage of new code, the focus has shifted from *writing* code to *verifying* it.

## The Core Paradigm: "Tests as Prompts"

The most significant shift in professional agentic workflows is treating tests not just as validation, but as the **specification language** for AI.

- **Deterministic Success:** Instead of vague natural language prompts (e.g., "build a login page"), you provide a suite of failing tests. This gives the agent a clear, binary success criterion: the task is done when the tests are green.
- **Preventing "Hallucinated Quality":** TDD prevents a common failure mode where agents write tests *after* the code that simply confirm their own broken logic. By requiring the test to exist (and fail) first, the agent cannot "cheat."

## Key Trends in 2026

- **TDAD (Test-Driven Agentic Development):** A formalized protocol that uses graph-based impact analysis to improve issue resolution. The core mechanism: rather than asking an agent to "fix issue #123," you surface the specific tests that currently fail due to that issue, and the agent targets those directly. Research shows that providing specific test context to agents is 40% more effective than general instruction — because the agent has an unambiguous success criterion rather than a prose description it must interpret.
- **Autonomous Quality Assurance (AQA):** Independent QA agents that observe application updates and modify test coverage on the fly, handling up to 60% of regression testing without human intervention. These agents watch for behavior drift rather than just green/red test status.
- **Self-Healing Test Suites:** 2026 agents can automatically update test selectors and assertions when UI changes or minor refactors occur, significantly reducing the "maintenance tax." Note the narrow scope: self-healing is appropriate for *structural* changes (a renamed CSS class, a moved DOM element) but not *behavioral* ones (a changed button label that signals a changed user flow). Agents that heal behavioral changes without human review are concealing regressions, not fixing them.

## The "TDD Paradox" (March 2026 Finding)

A study by Martin Fowler's team found that simply adding "do TDD" to a system prompt can actually *increase* regressions if the agent is allowed to write its own tests without oversight. The most effective 2026 workflows involve:

1.  **Human-defined Intent:** The human writes the high-level spec and edge cases.
2.  **Agent-generated Tests:** The agent translates that spec into executable tests.
3.  **Human Review of Tests:** The human verifies the *tests* are correct before the agent writes a single line of production code.

## Actionable Patterns

- **The Red-Green-Agent Loop:** 
    1. Write (or approve) a failing test.
    2. Dispatch agent with the command: "Make this test pass."
    3. Verify the pass and refactor using a fresh agent context.
- **Negative Testing as a Priority:** Agents are naturally "optimistic." Explicitly requiring tests for error states, null values, and security boundaries is the only way to ensure robust output.
- **Agentic Hooks:** Claude Code's `PreToolUse` hook fires before any tool call, including file writes. A hook configured to check for at least one failing test in the session before allowing writes to `src/` is a hard gate — the agent physically cannot produce untested code. Gemini CLI offers equivalent `before_tool` hooks. The pattern works best when the hook outputs a clear error message pointing the agent back to the test-first requirement, rather than silently blocking.

## A Green Suite Is Not a Safe Suite

The "TDD Paradox" is partly a test-quality problem: an agent that writes shallow tests — ones that execute a function but assert almost nothing meaningful about its behavior — can reach green with very little verification value. The kill rate metric from mutation testing (see [test-the-tests](test-the-tests.md)) is the honest measure of whether the suite would catch bugs. Line coverage tells you the test *ran* the code; kill rate tells you the test *would notice* if the code changed. A 90% line-coverage suite with a 35% kill rate is theater. Asking the agent to write tests that cover specific invariants, error conditions, and boundary values — and then running mutation testing on the result — is the only reliable way to confirm the safety net is real.

---

**Next Session:** [comprehension-debt](comprehension-debt.md)
