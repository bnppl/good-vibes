---
title: "BDD for Agents"
parent: "Verification"
nav_order: 4
last_updated: 2026-07-04
last_read: null
status: unread
---

# BDD for Agents: Scenarios as Cross-Session Memory

{: .hook }
> **A Gherkin scenario does two jobs: it's the spec the agent writes against today, and the regression net the next session is forbidden to break. One artifact, two jobs — and the second job is free.**
>
> Unit tests are too small to express cross-session intent. Design docs are too inert to fail a build. Gherkin scenarios are the only form of specification that survives session boundaries and runs in CI.

**In short:**
- **The problem:** Chat logs vanish at context reset; markdown docs go stale silently; unit tests don't capture intent across a feature — and cross-session breaks happen at exactly that level.
- **The idea:** BDD scenarios as cross-session memory — written in domain language, committed as `.feature` files next to the code, executable in CI, surviving every session reset.
- **How it works:** Outside-in workflow: human writes/approves Given/When/Then, agent drafts step definitions, agent writes code to make scenarios green, human reviews scenarios (not code) before merge.
- **The result:** Code review becomes spec review — scenarios are an order of magnitude smaller than the code they generate, and they're written in a language non-engineers can also review.

{: .aha }
> **The scenario is the contract. The code is the byproduct.** — review the scenarios before the diff, not after.

{: .try-it }
> Pick a feature an agent built last week. Write three Gherkin scenarios: happy path, one error case, one boundary condition. Keep them declarative — outcomes, not mechanisms. Commit them next to the code. You've just converted tacit session knowledge into durable cross-session memory.

---

## Deep dive

A Gherkin scenario does two jobs at once. While the current session is open, it is the **specification** the agent writes against — a binary, executable success criterion in the language of the domain. After the session closes, the same scenario becomes the **regression net** the next session is forbidden to break. One artifact, two jobs, and the second job is free.

That dual role is why **BDD** (Behavior-Driven Development) is the verification primitive most worth investing in for agent-led work in 2026. Unit tests are too small to express intent across a feature; design docs are too inert to fail a build; chat logs are gone the moment context compacts. **Gherkin** sits in the only sweet spot that survives session boundaries: it lives in the repo as `.feature` files, it executes against the system, and it reads like the original ask. The next session does not need to reconstruct what "done" meant — it can grep for it.

## Scenarios as the Agent's Contract Surface

The outside-in workflow stays unchanged from the human-driven era; what changes is who writes which artifact. A human (or a product agent supervised by one) writes or approves the **Given/When/Then** scenarios. The implementation agent then drafts step definitions, wires them to production code, and iterates until the scenario is green. The scenario is the contract. The code is the byproduct.

This is the feature-level analogue of the "tests as prompts" pattern from [agentic-tdd](agentic-tdd.md). TDD pins behavior at the unit boundary — one method, one assertion, one tight loop. BDD pins behavior at the **feature boundary** — one user-visible outcome, several collaborating units, often several services. The cross-session regressions that hurt most do not happen at the unit boundary, where coverage is usually decent and the agent's blast radius is small. They happen at the feature boundary, where Session B refactors a controller and silently changes the redirect target, or swaps a synchronous call for a queue and breaks an invariant that no unit test ever named. BDD is verification at the layer where cross-session damage actually accrues.

The deliberate.codes piece on writing specs for AI coding agents (2026) makes the case bluntly: scenarios are the **contract surface** an agent should be programmed against, not the prose in a ticket. Prose is interpreted; Gherkin executes. When the agent finishes, the human reviews the scenario list and the diff against it — not 800 lines of generated code line by line.

## Living Documentation as Cross-Session Context

The next session does not read your code first. It reads what you tell it to read, in the order you tell it to load it. Every byte of that context window is a budget decision. **Feature files are the cheapest high-signal artifact you can spend that budget on.**

They are cheap because they are short — a typical scenario fits in 15 lines and conveys what 200 lines of source obscure. They are high-signal because they are written in domain language, which is exactly what the agent needs to disambiguate intent before it touches code. And they are honest in a way that markdown docs are not: a stale scenario fails CI, while a stale README just sits there lying. This is the discipline [instruction-layer](../context-engineering/instruction-layer.md) keeps pointing at — instructions that cannot rot silently are worth more than instructions that can.

There is also a structural reason Gherkin is more LLM-readable than prose documentation: it has a fixed grammar (`Given/When/Then`), a consistent vocabulary (the ubiquitous language of the domain), and produces structured assertions an agent can compare against its own planned behavior. Unstructured prose requires interpretation; Gherkin does not. The TestQuality practitioner write-up on Gherkin in 2026 frames this as the main reason the format has outlived several waves of "Gherkin is dead" commentary — the LLM-readability of `.feature` files turned out to be the killer feature, not the human-readability that originally sold it.

There is a second-order effect worth naming. Scenarios pay for themselves twice: once when they drive the original implementation, and again when they are loaded as context for the next session. Most documentation only ever pays once, if at all. Living documentation amortized across sessions is the lowest-cost form of cross-session memory available to a team in 2026.

A practical note: keep feature files near the code they describe, not in a sibling `docs/` tree. The agent's file-discovery heuristics weight proximity heavily, and so do humans skimming a PR. A scenario that lives next to its module gets read; one buried under `docs/specs/v3/legacy/` does not.

## Outside-In with Agents

The workflow is short enough to fit on a Post-it:

1. **Human writes Given/When/Then** for the feature in business language. No clicks, no DOM, no SQL.
2. **Agent drafts step definitions** and runs them. They go red — there is no production code yet, or the existing code does not satisfy the new scenario.
3. **Agent writes minimal production code** to turn the scenarios green, iterating in a tight loop without human intervention.
4. **Human reviews the scenarios** before merge — not the code. The code is accepted because the scenarios are accepted and the suite is green.

The motivation for inverting the review focus is the **Fowler "TDD Paradox"** finding cited in [agentic-tdd](agentic-tdd.md): agents that write their own tests after the fact inflate regressions rather than reducing them, because the tests end up encoding whatever the code happens to do, including its bugs. The fix is to lift the test-authoring step above the agent's reach. The scenario must exist before the code does, and a human (or a separate, narrowly-scoped agent that does nothing else) must approve it. This is the same separation-of-concerns logic behind code review, applied one layer up: the thing the human reviews is the thing the system is contractually obligated to do, not the particular sequence of statements that achieves it.

The Test2Doc piece on **Narrative-Driven Development** (Feb 2026) frames this as a unified loop: BDD scenarios at the outside, TDD cycles at the inside, living documentation as the byproduct. The agent runs the inner TDD cycle autonomously; the human only ever touches the outer BDD loop. That division of labor is what makes the workflow scale past one session.

A sharp consequence: code review becomes spec review. The diff is still there, the agent still has to pass linters and the existing suite, but the load-bearing human judgment moves to the `.feature` files. This is good news, because scenarios are an order of magnitude smaller than the code they generate, and they are written in a language non-engineers can also review.

## Traps and Anti-Patterns

- **Scenario sprawl.** Every edge case becomes a scenario, the suite balloons to thousands of steps, the wall-clock time creeps past 20 minutes, and agents start treating intermittent failures as noise rather than signal. *Fix:* push edge cases down to unit tests; reserve scenarios for user-visible behaviors and integration seams.

- **Over-specification.** Scenarios pin implementation details — specific button labels, exact JSON shapes, particular SQL — instead of behavior. Every refactor then requires a scenario rewrite, and the agent learns that scenarios are obstacles rather than guardrails. *Fix:* write Given/When/Then in terms of outcomes ("the order is confirmed"), not mechanisms ("a POST to `/orders` returns 201").

- **Scenarios as a second implementation.** Step definitions accumulate logic until they duplicate what the production code does, at which point a bug in the code is mirrored by a bug in the steps and the scenario passes anyway. *Fix:* step definitions should orchestrate, not compute. If a step needs branching logic, the production code is missing an abstraction.

- **Imperative Gherkin.** "When I click the Submit button, then I see a green checkmark" is a UI test in Gherkin clothing — brittle, vague about intent, and useless to a future agent that swaps the UI framework. *Fix:* declarative phrasing — "When the customer submits the order, then the order is accepted" — keeps the scenario stable across UI rewrites and tells the next session what *matters*, not what happens to be on screen today.

The common thread: every anti-pattern degrades the scenario's value as cross-session memory. A bloated, brittle, or UI-coupled scenario will be ignored or rewritten by the next session, and you have spent the spec budget for nothing.

## Tooling in 2026

The classic stack still anchors the ecosystem: **Cucumber** (Ruby, JavaScript, Java), **SpecFlow** (.NET), and **Behave** (Python). What changed in the last year is the layer above them.

- **Cucumber + Playwright + agent loop.** The Levi9 piece (2026) walks through a hybrid pipeline where an agent authors Playwright-backed step definitions from natural-language scenarios, runs them inside an Azure DevOps pipeline, and self-heals broken locators when the UI shifts. The interesting part is not the locator-healing (every test framework now ships some flavor of that) but the boundary it draws: the agent owns step definitions and locators; humans own scenarios. That boundary maps cleanly onto the outside-in workflow above.

- **`touring_test`.** A Cucumber extension (worksonmymachine.ai, 2026) where an agent reads screenshots and tries to satisfy Gherkin steps from outside the test runner, the way a human exploratory tester would. This is AI-native BDD: the scenario stays declarative, but the executor is a vision-capable agent rather than a Selenium driver. The key property that distinguishes it from scripted automation: when `touring_test` fails a step, it can explain *why* in natural language — "the submit button was visible but non-interactive because the form was still loading" — rather than throwing a locator exception. That explanation is more useful to the next session than a stack trace. The use case is usability and "does this actually work end-to-end" coverage that scripted automation routinely misses. Worth tracking even if you do not adopt it — it signals where the executable-spec layer is heading.

- **In-IDE scenario authoring.** Most agent-aware IDEs in 2026 will offer to draft scenarios from a ticket title and the surrounding code. Treat these drafts as starting points, not commits — they tend toward over-specification and imperative phrasing because the LLM is pattern-matching from training data that is mostly bad Gherkin.

The tooling story is converging on a clean split: humans and product agents author declarative scenarios; implementation agents own everything below the step-definition line. The frameworks listed above are all moving to make that split easier to enforce.

## Action Step

Pick a feature an agent built recently — last week is fine, last month is better, because you will have forgotten enough of the implementation to be honest about what the *intent* was. After the fact, write three Gherkin scenarios that capture the intended behavior. Not coverage; intent. Happy path, one important error case, one boundary condition. Keep them declarative.

Now open a fresh agent session with no shared context. Give it only the three scenarios and the relevant module path. Ask it to extend the feature — add a related capability, handle a new input type, whatever the next reasonable iteration would be.

Watch where the agent's interpretation diverges from yours. It will diverge — that is the point of the exercise. Every divergence is a place where, in real cross-session work, Session B would have built something incompatible with Session A's assumptions and no test would have caught it. The scenarios you wrote are the cheapest fix available: tighten their phrasing, add the missing one, and commit them next to the code. You have just converted tacit session-local knowledge into durable cross-session memory, and the agent did most of the work.

## Learn on the go

- **Course:** [ATDD: From Stories to Executable Specifications](https://courses.cd.training/courses/atdd-from-stories-to-executable-specifications) — Dave Farley (Continuous Delivery). Turning user stories into executable specs — the exact outside-in workflow this page describes.
- **Video:** [Acceptance Testing for Continuous Delivery — Dave Farley](https://www.youtube.com/watch?v=SBhgteA2szg) — GOTO 2016. The declarative-over-imperative scenario discipline, and why the executable spec layer belongs in the deployment pipeline.
- **Course:** [Master Cucumber BDD with Selenium: Frameworks from Scratch](https://www.udemy.com/course/cucumber-bdd/) — Udemy. Gherkin syntax, step definitions, and framework structure with Java/Selenium; recently updated with AI-assisted automation concepts.
- **Course:** [Cucumber BDD with Python Behave and Selenium WebDriver](https://www.udemy.com/course/bdd-testing-with-python/) — Udemy. The same discipline in Python using Behave, the tooling named in this page's 2026 stack.

---

**Next Session:** [ddd-boundaries](ddd-boundaries.md)
