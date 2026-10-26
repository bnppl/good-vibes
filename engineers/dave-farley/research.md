---
title: Dave Farley — detailed research
parent: Dave Farley
nav_order: 1
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
---

# Dave Farley: A Practical Guide to Agentic Development

**Use the agent to implement a small, executable statement of intent. Keep ownership of what that statement means.**

Farley's approach centres on Acceptance Test-Driven Development (ATDD), supported by Behaviour-Driven Development (BDD), a layered testing architecture, and Continuous Delivery. His [25 October article](https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe) makes his position explicit: human-approved executable specifications should guide the agent; work in small increments; protect the acceptance contract; review the result; use mutation testing to challenge weak tests. This is his engineering prescription, not a controlled demonstration that one workflow always outperforms alternatives.

**Reading routes:** [Understand the approach](#1-the-techniques-and-what-each-contributes) · [See the four layers](#2-the-four-layer-model-applied-to-spellhaven) · [Follow a worked feature](#3-a-step-by-step-session) · [Choose tools](#4-tools-what-is-official-and-what-is-a-suggested-choice) · [Try a first lab](#7-your-first-lab).

The Spellhaven examples, file structure, prompts, and adoption plan below are **this guide's proposed application**. They are not Farley's code or a description of your app's current implementation. Illustrative product rules need your agreement before becoming real requirements. Research checked on 26 October 2026; paid course lessons were not accessed.

## 1. The techniques and what each contributes

Farley's [February interview](https://www.aviator.co/podcast/engineering-discipline-dave-farley) describes a shift towards specifying and verifying behaviour while retaining architecture, decomposition, and testability. He rejects writing every specification up front: development remains a process of discovery. His [August article](https://www.linkedin.com/pulse/bdd-ai-5th-generation-programming-dave-farley-mcyse) frames executable specifications as a higher-level way to direct AI implementation. The “AI as compiler” analogy is useful, but an agent does not acquire a compiler's determinism or correctness guarantees.

| Technique | Role in the approach | Proposed Spellhaven application |
|---|---|---|
| BDD and specification by example | Clarify behaviour through concrete examples | Agree what happens when a child retries a word |
| Story mapping | Organise user journeys and discover small slices | Map practise → submit → feedback → reward |
| ATDD | Establish externally observable acceptance before implementation | Verify the total XP after replaying an answer |
| A domain-specific language (DSL) | Express scenarios in reusable domain terms | `learner.answers(...)`, rather than selector operations |
| Protocol drivers | Translate domain operations into calls to the real system | Drive the app's supported interface or UI |
| TDD | Guide internal design with focused feedback | Explore a reward policy with small unit tests |
| Refactoring | Improve structure while retaining behaviour | Separate reward calculation from persistence |
| Continuous Delivery | Keep changes verifiable and releasable | Run checks and package each integrated change |
| Mutation testing | Challenge the discriminating power of assertions | Remove duplicate protection and see whether tests notice |

The [official course curriculum](https://courses.cd.training/courses/atdd-from-stories-to-executable-specifications-team) covers story mapping, event storming, specification by example, DSLs, isolation, protocol drivers, testing time, and intermittent failures. Its public outline supports those topic attributions; it does not expose every implementation detail of Farley's lessons.

**Distinguish the two testing loops.** Acceptance tests address whether the behaviour is useful and correct from the user's perspective. Unit-level TDD helps discover and verify the internal design. Farley's [earlier explanation](https://www.davefarley.net/?p=186) distinguishes business expectations from a developer's expectations. Neither perspective replaces the other.

For your JPMC-style BDD experience, the familiar part is executable agreement. The agent-specific addition is making that agreement the objective the implementer works towards, with checks against changing the agreement to fit the implementation.

## 2. The four-layer model applied to Spellhaven

Farley's model separates **test cases → DSL → protocol drivers → system under test**. The top expresses domain intent; the driver absorbs technical coupling. See his [four-layer explanation](https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe).

Here is an original mapping for a spelling app:

| Layer | Example responsibility | Should avoid |
|---|---|---|
| Test case | A repeated submission does not award XP twice | HTTP routes, selectors, storage layout |
| DSL | Create a learner, answer a word, inspect earned XP | Exposing transport-specific responses to scenarios |
| Protocol driver | Translate those actions into real application interactions | Reimplementing reward rules |
| System under test | Validate the answer, award and persist XP | Test-only implementations of the behaviour being accepted |

A possible layout, adapted to whichever test runner the app already uses:

```text
tests/acceptance/scenarios/reward-once.test.ts
tests/acceptance/dsl/learner.ts
tests/acceptance/drivers/app-driver.ts
src/practice/
src/rewards/
```

A scenario written in domain language might be:

```gherkin
Scenario: Replaying an accepted answer does not grant another reward
  Given a learner with 40 XP
  And a spelling attempt worth 10 XP
  When the learner submits the correct answer
  And that same submission is received again
  Then the learner has 50 XP
```

This defines **delivery replay of the same submission**. It does not silently decide whether a separate practice attempt earns another reward. That is a different product question.

The corresponding test could read like this. It is illustrative TypeScript, not a runnable addition to your app:

```typescript
it('awards a submission only once', async () => {
  const learner = await practice.learner({ xp: 40 });
  const attempt = await learner.startsWord('necessary', { reward: 10 });
  const submission = await learner.answers(attempt, 'necessary');

  await learner.replays(submission);

  expect(await learner.totalXp()).toBe(50);
});
```

`practice` is the DSL entry point. Its driver must perform real operations and observe real state. If `totalXp()` merely reads an object the test double updated, the scenario could pass while the application is broken.

**A useful diagnostic:** change the UI label or transport route. The driver might need editing; the meaning of the scenario should survive. Change the reward policy intentionally, and the scenario may need changing too. Stable specifications still evolve when requirements change.

### Choosing the system boundary

For this app, I would start with two complementary checks:

- A fast test through the application boundary for reward and persistence behaviour.
- A small UI journey proving that a child can submit an answer and see the resulting XP.

An in-process test can give valuable fast feedback, but it does not demonstrate installed-app wiring, transport, or device behaviour. Name its scope honestly. If there is no API, do not invent a network service solely to fit this diagram: use the boundary the product actually has.

Farley's [training prospectus](https://continuous-delivery.co.uk/downloads/Complete_CD_Training_Prospectus.pdf) explicitly includes protocol drivers and stubs, isolation, asynchronous systems, and testing time. The following implementation choices are suggestions for this app:

- Give each test its own learner and attempt identities.
- Keep product behaviour real inside the chosen boundary; substitute uncontrollable external dependencies at the boundary.
- Stub a remote speech service when testing rewards; verify the speech integration separately.
- Control time explicitly when testing spaced repetition. Retain a smaller check of real scheduling/wiring.
- Wait for an observable state with a deadline when an operation is asynchronous. A fixed sleep is both slower and less informative.

## 3. A step-by-step session

This walkthrough applies the approach to duplicate XP. It is a proposed working procedure, not a transcript of Farley's private development sessions.

### Step 1 — Inspect before deciding

Locate the submit handler, reward rules, persistence mechanism, and existing tests. Run the relevant baseline. Record any pre-existing failures.

Ask the agent:

```text
Inspect how spelling answers award XP. Find the relevant code,
existing tests, and documented commands. Explain where replayed
submissions could be detected. Do not change files yet.
Separate observations from assumptions.
```

**Output:** a short map of the path through the app. Avoid a speculative redesign before understanding the existing one.

### Step 2 — Resolve the product ambiguity

Write an example table before coding:

| Situation | Proposed outcome | Question to resolve |
|---|---|---|
| First correct submission | Add 10 XP | Is this the actual reward? |
| Same submission delivered twice | Still only 10 XP added | What identifies the same submission? |
| New practice attempt for the same word | Separate rule | Can practice earn rewards repeatedly? |
| Incorrect answer, then correct retry | Separate rule | Does a retry reduce or remove XP? |
| Restart after a successful submission | Existing reward persists | Is persistence local or remote? |

Implement only an agreed slice. The table exposes decisions; it is not permission for the agent to choose your economy.

### Step 3 — Draft one acceptance scenario and its wiring

```text
Draft one acceptance test for this agreed rule:
re-delivering the same correct submission must not award XP again.
Use the existing test runner. Keep scenario language about learners,
attempts, submissions and XP. Put technical details in a driver.
Show how the test reaches the real application and reads persisted XP.
Do not implement duplicate protection yet.
```

Review the expected value and the observation path yourself. Check that the DSL does not contain the reward algorithm it is supposed to verify.

### Step 4 — Establish a meaningful failure

Run the new test against the current implementation. An expected failure might be `expected 50, received 60`. A missing module or unreachable app does not demonstrate the duplicate-reward bug.

If the test already passes, investigate. The product may already handle replay, or the test may never deliver the second submission. Do not introduce a defect simply to manufacture a red state. A temporary deliberate defect can be a separate check of the assertion's sensitivity.

**Output:** the command, relevant failure, and explanation of why it represents the missing behaviour.

### Step 5 — Implement the smallest coherent change

```text
Make the approved replay scenario pass. Preserve the acceptance
scenario and expected values. Follow existing architecture.
Do not add unrelated retry or economy rules.
If the contract appears wrong, explain the conflict rather than
changing it to fit the implementation. Run the focused check and
relevant regression tests. Report the commands and results.
```

“Smallest” still needs to satisfy the rule under the app's operating conditions. For example, an in-memory set of processed IDs may fail after restart. A check followed by an unprotected write may fail under concurrency. Include those behaviours only when they are part of the agreed scope, then test them deliberately.

### Step 6 — Refactor with a clear purpose

Once behaviour is green, consider one structural improvement. For example, keep answer validation, reward eligibility, and storage responsibilities understandable without introducing a framework for hypothetical future features.

```text
Review the changed path for mixed responsibilities and duplication.
Propose one worthwhile refactor. Preserve observable behaviour and
acceptance tests. Prefer an existing deterministic refactoring tool
where it supports the change. Explain the resulting design.
```

Keep refactoring and new behaviour distinguishable in the diff. Fast checks let you inspect each step.

### Step 7 — Challenge the tests

For this feature, a useful mutation removes the duplicate-submission guard. Another changes the stored reward total. The relevant test should detect the changed behaviour.

[StrykerJS](https://stryker-mutator.io/docs/stryker-js/introduction/) is a real mutation-testing tool for JavaScript and TypeScript. Use a runner compatible with the project's configuration. Start with changed reward logic rather than mutating the whole React Native application.

A survivor requires triage: it may expose a missing assertion, an equivalent behaviour, an irrelevant mutation, or a test execution problem. A high score is not proof of complete requirements. Coverage and mutation results answer different questions; neither proves that the product rule itself is right.

### Step 8 — Review, integrate, and keep evidence

Review production code, tests, driver changes, fixtures, configuration, and disabled checks. Exercise the user-visible path. Confirm that the result remains understandable enough to maintain.

Farley's [Continuous Delivery article](https://www.linkedin.com/pulse/continuous-delivery-matters-more-less-when-ai-loop-dave-farley-zidce) connects AI development to small reversible changes and automated verification. His [pipeline prospectus](https://continuous-delivery.co.uk/downloads/Complete_CD_Training_Prospectus.pdf) includes commit, acceptance, non-functional, migration, and release concerns.

For this app, I would arrange feedback in increasing cost:

1. Formatting, static checks, and focused unit tests.
2. Application-level acceptance checks and relevant regression tests.
3. A device/emulator UI journey and packaging checks.
4. Targeted mutation testing and additional performance/security checks where the change warrants them.

Capture the approved rule, checks run, reviewed diff, and remaining limitations. Commit the coherent increment and integrate frequently through the project's normal process. A passing laptop test is one piece of evidence, not the entire release decision.

## 4. Tools: what is official and what is a suggested choice

| Tool or resource | Attribution and status | Use here |
|---|---|---|
| CD.Training ATDD plugin | Official public student distribution, maintained by `cd-training-courses` | Learn, build, and review using course-backed guidance |
| Claude Code | Supported host for that official plugin | Optional implementation assistant |
| “Farley Score” | Advertised in Farley's course promotion; implementations also exist elsewhere | Inspect provenance and rubric before relying on a score |
| Bryan Finster's Agentic Dev Team | Separate project; its docs include a Farley Score skill | Optional test-quality review, not evidence of Farley's personal setup |
| Existing unit-test runner | This guide's choice for the app | Keep established test execution working |
| Cucumber/Gherkin | Farley's curriculum includes Cucumber/SpecFlow; Gherkin is optional | Use if shared examples benefit from it; a readable test DSL can suffice |
| StrykerJS | This guide's TypeScript mutation-tool choice | Check whether reward tests detect plausible defects |
| Existing native UI automation | This guide's choice for React Native journeys | Prove installed-app interaction; a web browser alone does not test native behaviour |
| Existing CI | This guide's choice of automation host | Re-run independent checks on integrated changes |

The [official plugin README](https://github.com/cd-training-courses/claude-skills) documents these commands:

```text
/plugin marketplace add https://github.com/cd-training-courses/claude-skills.git
/plugin install msec@cd-training
/msec:atdd-learn
/msec:atdd-build
/msec:atdd-review
```

Run them inside Claude Code. The README describes email sign-in, a free tier with lesson summaries, and course ownership unlocking full lessons. Its commands fetch course content through an MCP server; this is guidance for the coding assistant, not an independent test executor or enforcement boundary. No plugin was installed during this research.

For another coding assistant, use the worked prompts above with the same test harness. I have not verified an equivalent official plugin for Codex or OpenCode. The method does not depend on a particular model.

### What the Farley Score can and cannot tell you

Farley's [January article](https://www.linkedin.com/pulse/tdd-properties-good-tests-dave-farley-iexge) names eight desirable properties: understandable, maintainable, repeatable, atomic, necessary, granular, fast, and first. Treat these as review questions. For example: can this XP test run independently, does a failure explain the broken rule, and does it remain meaningful after a refactor?

Farley's [course promotion](https://www.linkedin.com/posts/dave-farley-a67927_softwareengineering-atdd-tdd-activity-7512853450389504000-PznA) mentions a “Farley Score” plugin. The current public course README lists learn/build/review commands; it does not establish a separate score command or publish a canonical numerical formula. Do not infer either.

The [Agentic Dev Team documentation](https://devteam.bryanfinster.com/plugins/dev-team/docs/test-evaluation/) separately identifies its own scoring skill. An LLM's score is a review opinion whose reasoning you can inspect. Mutation results come from executing altered programs. Neither replaces human agreement on the expected behaviour.

## 5. Protecting the contract in practice

My suggested progression for this app is:

1. **Make changes visible.** Review all edits to acceptance scenarios, expected values, fixtures, and test configuration. This is detection, not prevention.
2. **Protect integration.** Require appropriate checks and independent review of contract changes. Ensure the implementer cannot bypass those controls.
3. **Separate execution permissions where needed.** Run an authoritative acceptance suite from a trusted revision in an environment the implementer cannot modify. Validate the product artifact, including its actual wiring.

A sentence in `CLAUDE.md` is an instruction. It is not a filesystem permission. Local read-only flags are also weak when the same process can change permissions. Choose controls according to the agent's actual tools and access; see [agent security](../../verification/agent-security.md).

Requirements do change. When a reward rule changes intentionally, revise the contract explicitly, then implement it. The aim is traceable product decisions, not permanently frozen tests.

## 6. Common ways this approach can fail

| Failure | What it looks like in Spellhaven | Better next step |
|---|---|---|
| Wrong specification | Retry XP is forbidden even though the desired game rewards retries | Resolve the rule with a concrete example |
| Circular verification | Driver computes XP using a copy of the reward algorithm | Observe the application's stored result |
| Missing boundary | Core tests pass, but the submit button never invokes the core | Add a focused UI wiring check |
| Implementation leakage | Every scenario mentions screen IDs and database fields | Move technical knowledge behind the driver |
| Excessive scope | “Build the whole reward system” produces a huge patch | Deliver one agreed reward behaviour |
| Contract erosion | Agent changes 50 to 60 to make the test green | Inspect and reject the expectation change |
| Brittle automation | Shared learners or fixed sleeps create intermittent failures | Isolate data and wait on observable conditions |
| Metric chasing | Many trivial tests or a high score disguise missing rules | Review important outcomes and plausible failures |

The discipline reduces certain risks; it does not eliminate exploration, architectural judgment, usability evaluation, or unknown requirements. For legacy areas without a reliable seam, start with [characterization tests](../../verification/characterization-and-handoff.md), then introduce the smallest boundary that permits meaningful verification.

## 7. Your first lab

Use one real Spellhaven behaviour, such as duplicate XP, and stop after a complete increment. These sessions are a suggested learning exercise, not measured optimal durations.

| Session | Do | Keep |
|---|---|---|
| 1 — Clarify | Inspect the current path; agree one rule and its boundary | Example table and baseline |
| 2 — Specify | Draft and review one scenario; verify its failure or existing coverage | Acceptance test and observed result |
| 3 — Implement | Make it pass, refactor if useful, run relevant checks | Small reviewed diff |
| 4 — Challenge | Try a meaningful mutation; exercise the app; integrate | Evidence and remaining gaps |

**Success:** you can explain the product rule, show the check observing real behaviour, demonstrate that it catches a plausible defect, and explain what it leaves unverified. Compare review and rework effort with your usual workflow using [agent evaluation](../../verification/agent-evaluation.md).

## Sources and further study

All sources below were checked through public material. Descriptions of lessons refer to their public curriculum, not access to paid content.

1. [Dave Farley — The Spec Must Be Executable](https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe), 25 October 2026. Core agent workflow, four layers, ownership of acceptance criteria, and mutation testing.
2. [Dave Farley — Engineering Discipline in the AI Era](https://www.aviator.co/podcast/engineering-discipline-dave-farley), 12 February 2026. First-person interview covering incremental discovery, testability, and verification.
3. [Dave Farley — Is BDD with AI the 5th Generation of Programming?](https://www.linkedin.com/pulse/bdd-ai-5th-generation-programming-dave-farley-mcyse), 18 August 2026. Specification as a higher abstraction for AI development.
4. [Dave Farley — Continuous Delivery matters more, not less, when AI is in the loop](https://www.linkedin.com/pulse/continuous-delivery-matters-more-less-when-ai-loop-dave-farley-zidce), 29 May 2026. Delivery discipline under rapid code generation.
5. [Dave Farley — TDD: The Properties of Good Tests](https://www.linkedin.com/pulse/tdd-properties-good-tests-dave-farley-iexge), 23 January 2026. Eight qualitative properties.
6. [CD.Training — ATDD course](https://courses.cd.training/courses/atdd-from-stories-to-executable-specifications-team). Official public curriculum and skill description.
7. [CD.Training — 2026 prospectus](https://continuous-delivery.co.uk/downloads/Complete_CD_Training_Prospectus.pdf). Testing infrastructure and deployment pipeline topics.
8. [CD.Training — official Claude skills distribution](https://github.com/cd-training-courses/claude-skills). Installation, commands, and access tiers; recheck before installing because tooling evolves.
9. [Dave Farley — ATDD and Farley Score course promotion](https://www.linkedin.com/posts/dave-farley-a67927_softwareengineering-atdd-tdd-activity-7512853450389504000-PznA). Evidence of the advertised score feature, not a published scoring formula.
10. [Bryan Finster's Agentic Dev Team — test evaluation](https://devteam.bryanfinster.com/plugins/dev-team/docs/test-evaluation/). Primary documentation for a separately maintained implementation.
11. [StrykerJS documentation](https://stryker-mutator.io/docs/stryker-js/introduction/). Primary source for the suggested mutation tool.
12. [Dave Farley — Strategies for effective Acceptance Testing](https://www.davefarley.net/?p=186), 24 October 2014. Earlier distinction between acceptance expectations and developer-level tests.

**Research limits:** references to the flight-search demonstration surfaced in search, but its repository contents could not be retrieved, so this guide does not infer its dependencies, prompts, or architecture. Public sources do not establish Farley's complete current personal stack, model configuration, or private orchestration setup. Tools featured by guests on his channel should be attributed to their builders unless Farley explicitly documents adopting them.

Related: [Agentic TDD](../../verification/agentic-tdd.md) · [BDD for agents](../../verification/bdd-for-agents.md) · [Test the tests](../../verification/test-the-tests.md) · [Learning plan](../../learning-plan.md).
