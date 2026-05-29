---
title: "Agentic TDD"
parent: "Verification"
nav_order: 1
last_updated: 2026-05-29
last_read: null
status: unread
---

# Agentic TDD: Verification-First Development

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

## Formal Evaluation: Moving Beyond "It Works on My Machine"

The verification layer extends beyond individual test suites to systematic evaluation of agent behavior across a distribution of inputs. Anthropic's "Demystifying Evals for AI Agents" (January 2026) provides the operational framework.

**Three grader types:**
- **Code-based** — exact match, regex, function calls. Fast and objective, but brittle: any format variation breaks them. Best for structured, deterministic outputs.
- **Model-based (LLM judge)** — a separate model evaluates output against a rubric. Flexible, scales to nuanced judgment, but requires calibration against known examples to prevent systematic bias. Best for natural language outputs and complex behavioral assessment.
- **Human-based** — gold standard, expensive, slow. Best for calibrating model-based graders and for high-stakes evaluation of behaviors that are hard to encode in rules.

**Two coverage metrics that measure different things:**
- **pass@k** — probability that at least one of k attempts succeeds. Measures whether the agent *can* do the task.
- **pass^k** — probability that *all* k attempts succeed. Measures whether the agent does the task *reliably*.

For production use, pass^k matters more than pass@k. An agent that succeeds 1 in 5 times isn't production-ready even if its pass@1 looks acceptable. The ratio between the two reveals how consistent (vs. lucky) your agent's successes are.

**Practical starting point:** Start with 20–50 tasks drawn from real failures in production or testing — not theoretical edge cases you invented, but the actual scenarios your system failed on. "Reading transcripts is how you verify that your eval is measuring what actually matters."

The structural connection to TDD: evals are TDD at the agent-system level. Individual tests verify a function behaves correctly; evals verify the agent behaves correctly across a distribution of inputs. Both are specification-by-example; both fail loudly when behavior drifts. The difference is scope: a test covers one behavior in isolation; an eval covers the agent's behavior as a whole.

---

**Next Session:** [comprehension-debt](comprehension-debt.md)
