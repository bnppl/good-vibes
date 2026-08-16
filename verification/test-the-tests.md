---
title: "Test the Tests"
parent: "Verification"
nav_order: 8
last_updated: 2026-08-16
last_read: null
status: unread
---

# Test the Tests: Verifying Your Safety Net Is Real

{: .hook }
> **When the agent says "I added tests," do they catch anything? In agentic development, the test author and code author are the same untrusted party — working from the same misunderstanding, in the same turn.**
>
> A green suite means the agent's code agrees with the agent's tests. It does not mean the tests would notice if the code were wrong.

**In short:**
- **The problem:** Agent-written test suites hit 95% line coverage and 30% kill rate — theater that validates the agent's code agrees with the agent's tests, not that the code is actually correct.
- **The idea:** Two techniques that shift the question from "are there tests?" to "is the safety net real?": mutation testing (kill rate) and property-based testing (adversarial input generation).
- **How it works:** Mutation testing plants small valid bugs and checks if tests catch them; property-based testing specifies invariants and generates hundreds of inputs (including the pathological ones the agent never thought of) to find violations.
- **The result:** 23-37% pass@1 gains from property-based testing vs. TDD-style prompting (arXiv 2025). Prompt design and a kill-rate fitness function are the difference between a theatrical safety net and a real one.

{: .aha }
> **Line coverage tells you the test ran the code. Kill rate tells you the test would notice if the code changed.** Those are different claims — only the second one matters.

{: .try-it }
> Run Stryker (TypeScript), PIT (Java), or Mutmut (Python) against a file an agent recently touched. Look at the surviving mutants — they're a literal list of the gaps the agent left behind, each one a bug that would have passed CI.

---

## Deep dive

When the agent says "I added tests," do they catch anything? In classical development that question still matters, but you usually have a separation between the engineer who wrote the production code and the engineer (or at least the moment) who wrote the tests. In agentic development that separation collapses: the **test author and the code author are the same untrusted party**, working from the same misunderstanding, in the same turn. A green suite means the agent's code agrees with the agent's tests. It does not mean the tests would notice if the code were wrong.

The Fowler "TDD Paradox" finding from [agentic-tdd](agentic-tdd.md) — that agents writing their own tests can *inflate* regressions rather than reduce them — was the warning shot. This session is the answer. Two techniques, both decades old, both newly load-bearing in the agent era: **mutation testing** measures whether your tests would catch bugs that don't yet exist, and **property-based testing** generates the inputs your agent never thought to enumerate. Together they shift the question from "are there tests?" to "is the safety net real?"

## Mutation Testing: Measuring Kill Rate

Mutation testing works by sabotage. The tool plants small, syntactically valid changes — **mutations** — into your production code: flip a `>` to `>=`, replace a `+` with a `-`, return `null` instead of the computed value, delete a method call. Then it runs your test suite against each mutated version. If a test fails, the mutation was **killed**. If every test still passes, the mutation **survived** — meaning your tests cannot tell the difference between correct code and broken code.

The ratio of killed mutations to total mutations is the **kill rate** (also called mutation score), and it is the actual coverage metric. Line coverage tells you the test *executed* the line; kill rate tells you the test *would notice* if the line changed. Those are different claims, and only the second one matters. A suite can hit 95% line coverage and 30% kill rate — that is the shape of a test suite that asserts nothing meaningful, and it is exactly the shape an agent will produce when prompted "add tests for this file" without further constraint.

Tooling exists in every major language now: **PIT** for Java, **Stryker** for JavaScript/TypeScript/.NET/Scala, **Mutmut** and **Cosmic Ray** for Python, **Cargo Mutants** for Rust. The prodsens.live writeup on Stryker and Cosmic Ray reports a representative case where introducing mutation testing as a gate took a project's mutation score from **62% to 88%** — not by writing more tests, but by writing better assertions inside the tests that already existed. That gap, between "tests exist" and "tests assert," is the gap mutation testing surfaces and the gap agents fall into by default.

## Property-Based Testing: Coverage Beyond Examples

Where example-based tests enumerate cases — `add(2, 3) == 5`, `add(0, 0) == 0`, `add(-1, 1) == 0` — **property-based testing** specifies the rule that must hold across an entire input space, then asks the framework to generate inputs trying to break it. The property `for all integers a, b: add(a, b) == add(b, a)` does not name any specific inputs; the framework generates hundreds, including the pathological ones — `MAX_INT`, empty strings, NaN, surrogate pairs, the integer that triggers your overflow.

The canonical tools are **Hypothesis** (Python, by David MacIver), **fast-check** (JavaScript/TypeScript), the original **QuickCheck** (Haskell, with ports to nearly every language), and **PropEr** (Erlang). New entrants worth tracking include the **[Hegel](https://hegel.dev) universal PBT protocol** (133 HN points on its April 2026 launch) and Antithesis's **[Bombadil](https://github.com/antithesishq/bombadil)**, which extends the property-based approach to web UIs.

**Hegel** addresses a structural problem in polyglot codebases: each language has its own PBT tools (Hypothesis, fast-check, QuickCheck), each with its own API and output format. An agent working across a JavaScript frontend and a Python backend has to context-switch between two completely different PBT idioms. Hegel defines a language-agnostic wire protocol for property descriptions, counterexample reporting, and shrinking results, so agents can reason about PBT uniformly across the stack. For teams running multi-language codebases with agents that span services, this collapses what would otherwise be a two-toolchain problem into one.

**Bombadil** uses a *specification language* for defining UI invariants — you write assertions about how the UI should behave (e.g., "after submitting a valid order, the confirmation page always displays an order ID"), and Bombadil explores the UI autonomously to find inputs that violate them. The key difference from scripted automation: you do not write test scripts, you write behavioral specifications. Bombadil finds the counterexample; you did not have to enumerate the path to reach it. The HN thread on its launch surfaced the main skepticism: browsers are nondeterministic, and properties on stateful UIs are hard to write in a way that's stable across renders. Both objections are real; the Antithesis team's responses in-thread are worth reading. The use case it's strongest for today is stateless UI components with clear invariants, not full multi-step user flows.

Why this matters specifically with agents: agents enumerate the obvious examples. They write three or four cases — happy path, one edge, maybe a null check — drawn from the typical distribution of code they were trained on. Properties cover the input spaces the agent did not think of, because the framework, not the agent, generates the inputs. This connects directly to [bdd-for-agents](bdd-for-agents.md): a Gherkin scenario is one example dressed up in narrative; a property is the universal-quantifier version of the same intent. "Given a non-empty cart, when the user checks out, the total equals the sum of line items" is not a scenario — it is a property, and it should be tested with a generator producing thousands of carts.

## Why This Matters More with Agents

Three reasons mutation testing and property-based testing matter more under agent authorship than they did under human authorship.

First, **agents will satisfy any test you write**. The same generative pressure that makes agents productive — they will get the suite green — makes them dangerous when the suite is shallow. If the test asserts only that a function returns non-null, the agent will write a function that returns non-null and stop thinking. **If the test is shallow, the code is shallow.** Mutation score makes shallowness measurable; without it, you are trusting vibes.

Second, agents pattern-match to typical examples. Property-based tests are **adversarial** by construction — Hypothesis's shrinking algorithm finds the *minimal* failing case, the one-character string or zero-length list that the agent's example set never enumerated. The arXiv "Use Property-Based Testing to Bridge LLM Code Generation and Validation" paper (June 2025) operationalizes this in a Generator/Tester two-agent loop, using PBT as the validation oracle and reporting **23–37% pass@1 gains over TDD-style prompting**. The gain is not from better generation; it is from better adversarial pressure on what was generated.

Third, mutation testing is the **lie detector** for "I added tests" claims. A green suite with a 30% kill rate is theater. The Anthropic Red Team's "Property-Based Testing with Claude" writeup (2026) describes an internal agent that autonomously infers properties from docstrings and type signatures and writes Hypothesis tests directly — a workflow that only became trustworthy once the team paired it with mutation-score gating to verify the generated properties were actually discriminating. The arXiv "Agentic Property-Based Testing" paper at NeurIPS 2025 ran this pattern across 100 popular Python packages and found **56% of agent-generated bug reports were valid** — credible enough to ship, weak enough to require human review at the report layer, but a long way from theater.

## Workflow Integration

Mutation testing is slow. A full mutation run on a non-trivial codebase can take an hour, because the suite is rerun once per mutant. **Do not gate every PR on it.** Run it nightly, or on a cron, or only on changed files; fail the build only if the kill rate drops below an established baseline for the module. Set a **kill-rate floor** per module that reflects the actual stakes — 80% on a payment processor, 60% on UI utilities, perhaps not at all on generated code or thin glue. The floor is a [fitness function](fitness-functions.md); it lives in CI and it stays out of the agent's everyday loop.

For property-based tests the cost profile is friendlier. A property-based test runs in seconds, generates hundreds of inputs each run, and slots into the regular suite without ceremony. Add them at the same time as example-based tests — agents can write both if asked explicitly, and the right prompt is "write three example-based tests and one property-based test for this function, naming the invariant." Without the explicit ask, you get four examples and no properties.

For the mutation-survivor loop, Alex Op's "Mutation Testing with AI Agents" piece describes the practical pattern that has emerged in 2026: feed the **Stryker survivor report** back into a Claude Code skill whose only job is writing targeted mutant-killing tests. The agent is good at this when scoped narrowly — given a specific surviving mutant and the test file, it can write the one assertion that kills it. It is bad at this when given the whole report at once. Decompose the work; do not hand the agent a mountain.

## 2026 Findings

The empirical picture as of early 2026 is clearer than it was a year ago. The arXiv NeurIPS 2025 data shows agent-generated property-based tests are credible — 56% valid bug reports across 100 packages is not noise, and the Anthropic Red Team writeup confirms the workflow is now baked into internal agent harnesses rather than living in research demos. The honest read of the same evidence: agents do **not** reliably generate mutation-surviving tests *without explicit prompting* about what the mutations would be, but they will write surprisingly strong property tests when asked specifically to name an invariant. The implication is that **prompt design — and a fitness function on kill rate — is the difference between a theatrical safety net and a real one**. The tooling no longer limits you. The instruction layer ([instruction-layer](../context-engineering/instruction-layer.md)) and the orchestration layer ([orchestration-layer](../context-engineering/orchestration-layer.md)) do.

The **[DataPRM paper](https://arxiv.org/abs/2504.20015)** (2025–2026) adds a relevant finding from a different angle: it trains process reward models (PRMs) on agent outputs labeled at each *reasoning step*, not just final answers. The key insight is that fluency and correctness are decorrelated — the most dangerous agent outputs are wrong answers that sound exactly right, because they passed every surface-level check while encoding a subtle error in reasoning. Applied to test quality: an agent can write a test that reads cleanly, uses correct syntax, and follows naming conventions while asserting something that is trivially true and would survive any mutation. PRMs trained on DataPRM-style signals catch this by evaluating intermediate reasoning steps, not just final output. For teams building agent evaluation infrastructure, DataPRM signals a direction: assess *how* the agent reasoned about what to test, not just whether the test compiles and passes.

**(New — August 2026)** Dan Luu's agentic coding notes (July 2026) sharpen the "without explicit prompting" caveat above into something blunter. Surveying his own work and several other practitioners, he reports that default LLM-generated tests are **"between worthless and marginally useful"** — Em Chu's assessment, quoted in the piece, is that they are "painfully bad" at adversarial testing specifically. This is not a contradiction of the property-based testing results; it is the same finding stated from the other end. Agents asked to *write tests* produce tests that assert the code does what it does. Agents asked to *name an invariant and test it* produce something with a real chance of failing.

His comparative result is the more actionable one: **fuzzing generally wins on latency-to-find-a-bug** against asking an LLM to audit the same code. Where agents did earn their place in his pipeline was one step later — independent agents reviewing *bug reproductions*, and diverse "personas" reviewing artifacts, substantially reduced false positives. The pattern worth copying: let deterministic tooling find candidate failures, then use agents to triage and explain them. That ordering plays to what each is good at, and it is the reverse of how most teams wire it up.

For calibration on his baseline: Luu's team at Centaur ran a 1:1 test-to-developer ratio (55% of effort on testing) with a three-month regression suite across 1,000 machines, and shipped fewer than one significant bug per year *without* default code review. The lesson he draws is the one this page opens with — the verification infrastructure, not the review ritual, is what caught the bugs.

## Kill Rate Thresholds in Practice

The question "what floor should I set?" has a more concrete answer in 2026 than it did a year ago, from teams that have run mutation testing under agent authorship for multiple release cycles:

- **Payment/financial logic: 85%+.** Money calculations, rounding, edge cases in currency handling, tax logic. Agents are confidently wrong in subtle ways here — they produce code that handles the happy path beautifully and fails on edge cases the tests never enumerated.
- **Auth and security: 80%+.** The intersection of comprehension debt and security failure modes. A surviving mutant in an auth check is a potential bypass.
- **Domain/business logic: 75%.** Core behavioral rules that define what the product does. Lower than payment because the failure cost of each mutant varies more.
- **Application layer / orchestration: 60%.** Glue code, controller logic, service coordination. Valuable to check, but the blast radius of any single mutation is usually bounded.
- **Generated code, thin adapters, migrations: skip.** The floor for generated code is zero — the generator is the source of truth, not the tests.
- **UI components (non-behavioral): 50% or skip.** Snapshot tests cover the right concern here; mutation testing snapshots is theater.

The floor is a fitness function: commit it to CI, set it per-module in the mutation tool config, and treat a declining floor as a signal that test quality is degrading in parallel with agent output volume. A floor that grows or holds steady is the mutation equivalent of a rising code coverage — directionally positive, not proof of correctness.

**Surviving mutant categories to watch specifically under agent authorship:** off-by-one errors in range checks (agents pattern-match to `< n` when `<= n` is correct), missing null checks in newly added code paths (agents add the happy-path path and skip the defensive path), and inverted conditionals in error handling (the agent writes `if (isValid())` where the original had `if (!isValid())`). These categories survive more often in agent-written code than human-written code because agents don't have the debugging scar tissue that makes humans paranoid about these specific mistakes.

## Traps

- **Mutation testing run too often.** The suite times out, the team gets annoyed, someone disables the gate, and the project is back to line coverage within a sprint. Schedule it; do not gate every PR on it; report drift, not absolute scores.
- **Property tests with weak properties.** "Result is not null" passes for any function that returns anything. "Result is a list" is barely better. Teach the agent — explicitly, in the prompt — to state domain invariants: idempotence, commutativity, round-trip equivalence, monotonicity, conservation of total. Without a named invariant, you get a tautology.
- **Coverage-metric goal-seeking.** When kill rate becomes a target, teams find ways to inflate it that do not improve quality — deleting hard-to-cover code paths, excluding "untestable" modules, lowering the floor module by module until the gate is decorative. The metric is for diagnosis, not bonus calculation.
- **Equivalent mutants treated as failures.** Some mutations produce code that is semantically identical to the original (a constant folded in two ways, a redundant null check, a dead branch). These cannot be killed because there is nothing to kill. Document them, mark them excluded in the tool config, and move on. Do not contort the suite to chase them.

## Action Step

Pick a file an agent recently touched in a project you care about. Run a mutation tester against it — Stryker if it's TypeScript, PIT if it's Java, Mutmut if it's Python. Look at the **surviving mutants**. For each one, decide: is the test missing, or is the production code dead? The surviving mutants are a literal list of the gaps the agent left behind, ranked by what would actually slip past CI.

Then, separately and on a different file: pick one pure function — something with a clear input/output contract, no I/O — and write a single property-based test for it. Just one property. Note the inputs the framework generates that you would never have thought to enumerate. That moment, the first time Hypothesis hands you a Unicode surrogate pair or a zero-length list that breaks code you would have sworn was correct, is the entire pedagogical point. The agent did not generate that input either. That is why the property exists.

See [sources](sources.md) for full citations.

## Learn on the go

- **Read (long):** [Agentic coding notes — Dan Luu](https://danluu.com/ai-coding/) *(July 2026)*. The source for this page's August section, and the most useful skeptical counterweight to everything else on this list: what he measured about LLM-generated tests, why fuzzing beat LLM auditing on time-to-find-a-bug, and where agents did earn a place in his pipeline. Long, and worth it.
- **Read (short):** [Finding bugs with Claude and property-based testing](https://red.anthropic.com/2026/property-based-testing/) — Anthropic Red Team *(2026)*. The writeup cited in this page's Deep dive: an agent that infers properties from docstrings and writes Hypothesis tests, gated by mutation score. Read it against Luu's piece — the disagreement is entirely about whether you named the invariant.
- **Podcast:** [Signals and Threads — Why Testing is Hard and How to Fix It](https://signalsandthreads.com/why-testing-is-hard-and-how-to-fix-it/) *(March 2026)*. Will Wilson (Antithesis founder — the company behind Bombadil from this page) on property-based testing, fuzzing, and why deterministic verification matters more as generation gets cheaper.
- **Read (short):** [Meta Reports 4× Higher Bug Detection with Just-in-Time Testing](https://www.infoq.com/news/2026/04/meta-jit-testing-ai-detection/) — InfoQ *(April 2026)*. Meta generating tests during code review using LLMs + mutation testing — kill-rate thinking deployed at the largest scale reported to date.

---

**Next Session:** [characterization-and-handoff](characterization-and-handoff.md)
