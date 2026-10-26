---
title: "Agentic TDD"
parent: "Verification"
nav_order: 1
last_updated: 2026-10-26
last_read: null
status: unread
---


# Agentic TDD: Verification-First Development

## Concept

A reviewed failing test gives a coding agent concrete feedback about intended behaviour. It also gives the next session a regression check. Passing that test is evidence about the cases it covers, not proof that the whole feature is correct.

Tests and specifications complement implementation review. The same agent may misunderstand both the requirement and the test; writing the test first does not prevent that mistake. Verification must include whether the assertion expresses the user's intent and fails for the right reason.

## A Practical Loop

1. State the expected behaviour, edge cases, and acceptance criteria in terms a reviewer can inspect.
2. Write or review a focused test. Run it against the starting implementation and inspect the failure: a missing dependency or broken test setup is not the desired red state.
3. Ask the agent to implement the change within the agreed scope. Supply relevant domain and architecture constraints as well as the failing test.
4. Re-run the check and relevant existing regression tests. Inspect changes to tests, fixtures, and configuration as carefully as production code.
5. Refactor while preserving behaviour. Use a fresh context when it helps focus; it is not required for every refactor.
6. Review the actual implementation and explain its important choices and failure modes before accepting the change.

For exploratory work, first investigate what the system does and clarify intent. Characterization tests capture observed behaviour; they do not automatically make that behaviour desirable. A documentation-only edit or other low-impact reversible task may need a direct check rather than a new automated test. Match verification effort to the change.

## Patterns and Anti-Patterns

- **Protect authoritative checks.** Keep task acceptance criteria and evaluator checks outside the candidate's writable surface where practical. In shared repositories, use required checks and independent review for changes to grading or access controls.
- **Exercise errors and boundaries.** Include relevant invalid input, failure recovery, and existing behaviour. Do not rely on happy-path coverage alone.
- **Test the tests.** A deliberate defect, targeted mutation testing, or a property test can expose weak assertions. Mutation scores are diagnostic: equivalent mutants and the selected mutation operators limit what a score establishes.
- **Review self-healing tests.** A selector fix can be legitimate; weakening a behavioural assertion to make a change pass can hide a regression. Require evidence that the expected behaviour remains intact.
- **Use hooks for early feedback.** A hook can remind or block covered write paths. One failing test somewhere in the session does not prove that subsequent code is tested, and a hook does not necessarily cover every shell or tool path. CI and resource permissions remain separate controls.
- **Avoid green-by-construction.** Generating implementation and assertions from the same mistaken assumption can produce a green suite. Compare tests with independently reviewed intent and inspect the resulting behaviour.

## Action Step

Pick one small feature. Record a reviewed failing test, a successful implementation run, and one plausible defect the test catches. Explain what remains untested. Keep that evidence with the task record described in [agent evaluation](agent-evaluation.md).

## Cross-References and Sources

- [Dave Farley: agentic development](../engineers/dave-farley/index.md) — sourced techniques, tool attribution, and a worked spelling-app feature.

- [Test the tests](test-the-tests.md) — mutation and property-based checks.
- [Characterization and handoff](characterization-and-handoff.md) — legacy behaviour and the next session.
- [Comprehension debt](comprehension-debt.md) — maintaining understanding alongside verification.
- [Security and containment](agent-security.md) — limits of hooks and enforced access.
- [Demystifying evals for AI agents — Anthropic](https://www.anthropic.com/research/demystifying-evals-for-ai-agents) — outcome-based evaluation and grading. The workflow above is this guide's suggested practice, not a claim of a universal measured TDD improvement.
