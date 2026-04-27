---
last_updated: 2026-04-27
last_read: null
status: unread
---

When the agent says "I added tests," do they catch anything? In classical development that question still matters, but you usually have a separation between the engineer who wrote the production code and the engineer (or at least the moment) who wrote the tests. In agentic development that separation collapses: the **test author and the code author are the same untrusted party**, working from the same misunderstanding, in the same turn. A green suite means the agent's code agrees with the agent's tests. It does not mean the tests would notice if the code were wrong.

The Fowler "TDD Paradox" finding from [[agentic-tdd]] — that agents writing their own tests can *inflate* regressions rather than reduce them — was the warning shot. This session is the answer. Two techniques, both decades old, both newly load-bearing in the agent era: **mutation testing** measures whether your tests would catch bugs that don't yet exist, and **property-based testing** generates the inputs your agent never thought to enumerate. Together they shift the question from "are there tests?" to "is the safety net real?"

## Mutation Testing: Measuring Kill Rate

Mutation testing works by sabotage. The tool plants small, syntactically valid changes — **mutations** — into your production code: flip a `>` to `>=`, replace a `+` with a `-`, return `null` instead of the computed value, delete a method call. Then it runs your test suite against each mutated version. If a test fails, the mutation was **killed**. If every test still passes, the mutation **survived** — meaning your tests cannot tell the difference between correct code and broken code.

The ratio of killed mutations to total mutations is the **kill rate** (also called mutation score), and it is the actual coverage metric. Line coverage tells you the test *executed* the line; kill rate tells you the test *would notice* if the line changed. Those are different claims, and only the second one matters. A suite can hit 95% line coverage and 30% kill rate — that is the shape of a test suite that asserts nothing meaningful, and it is exactly the shape an agent will produce when prompted "add tests for this file" without further constraint.

Tooling exists in every major language now: **PIT** for Java, **Stryker** for JavaScript/TypeScript/.NET/Scala, **Mutmut** and **Cosmic Ray** for Python, **Cargo Mutants** for Rust. The prodsens.live writeup on Stryker and Cosmic Ray reports a representative case where introducing mutation testing as a gate took a project's mutation score from **62% to 88%** — not by writing more tests, but by writing better assertions inside the tests that already existed. That gap, between "tests exist" and "tests assert," is the gap mutation testing surfaces and the gap agents fall into by default.

## Property-Based Testing: Coverage Beyond Examples

Where example-based tests enumerate cases — `add(2, 3) == 5`, `add(0, 0) == 0`, `add(-1, 1) == 0` — **property-based testing** specifies the rule that must hold across an entire input space, then asks the framework to generate inputs trying to break it. The property `for all integers a, b: add(a, b) == add(b, a)` does not name any specific inputs; the framework generates hundreds, including the pathological ones — `MAX_INT`, empty strings, NaN, surrogate pairs, the integer that triggers your overflow.

The canonical tools are **Hypothesis** (Python, by David MacIver), **fast-check** (JavaScript/TypeScript), the original **QuickCheck** (Haskell, with ports to nearly every language), and **PropEr** (Erlang). New entrants worth tracking include the **Hegel** universal PBT protocol (133 HN points on its April 2026 launch) and Antithesis's **Bombadil**, which extends the property-based approach to web UIs.

Why this matters specifically with agents: agents enumerate the obvious examples. They write three or four cases — happy path, one edge, maybe a null check — drawn from the typical distribution of code they were trained on. Properties cover the input spaces the agent did not think of, because the framework, not the agent, generates the inputs. This connects directly to [[bdd-for-agents]]: a Gherkin scenario is one example dressed up in narrative; a property is the universal-quantifier version of the same intent. "Given a non-empty cart, when the user checks out, the total equals the sum of line items" is not a scenario — it is a property, and it should be tested with a generator producing thousands of carts.

## Why This Matters More with Agents

Three reasons mutation testing and property-based testing matter more under agent authorship than they did under human authorship.

First, **agents will satisfy any test you write**. The same generative pressure that makes agents productive — they will get the suite green — makes them dangerous when the suite is shallow. If the test asserts only that a function returns non-null, the agent will write a function that returns non-null and stop thinking. **If the test is shallow, the code is shallow.** Mutation score makes shallowness measurable; without it, you are trusting vibes.

Second, agents pattern-match to typical examples. Property-based tests are **adversarial** by construction — Hypothesis's shrinking algorithm finds the *minimal* failing case, the one-character string or zero-length list that the agent's example set never enumerated. The arXiv "Use Property-Based Testing to Bridge LLM Code Generation and Validation" paper (June 2025) operationalizes this in a Generator/Tester two-agent loop, using PBT as the validation oracle and reporting **23–37% pass@1 gains over TDD-style prompting**. The gain is not from better generation; it is from better adversarial pressure on what was generated.

Third, mutation testing is the **lie detector** for "I added tests" claims. A green suite with a 30% kill rate is theater. The Anthropic Red Team's "Property-Based Testing with Claude" writeup (2026) describes an internal agent that autonomously infers properties from docstrings and type signatures and writes Hypothesis tests directly — a workflow that only became trustworthy once the team paired it with mutation-score gating to verify the generated properties were actually discriminating. The arXiv "Agentic Property-Based Testing" paper at NeurIPS 2025 ran this pattern across 100 popular Python packages and found **56% of agent-generated bug reports were valid** — credible enough to ship, weak enough to require human review at the report layer, but a long way from theater.

## Workflow Integration

Mutation testing is slow. A full mutation run on a non-trivial codebase can take an hour, because the suite is rerun once per mutant. **Do not gate every PR on it.** Run it nightly, or on a cron, or only on changed files; fail the build only if the kill rate drops below an established baseline for the module. Set a **kill-rate floor** per module that reflects the actual stakes — 80% on a payment processor, 60% on UI utilities, perhaps not at all on generated code or thin glue. The floor is a [[fitness-functions|fitness function]]; it lives in CI and it stays out of the agent's everyday loop.

For property-based tests the cost profile is friendlier. A property-based test runs in seconds, generates hundreds of inputs each run, and slots into the regular suite without ceremony. Add them at the same time as example-based tests — agents can write both if asked explicitly, and the right prompt is "write three example-based tests and one property-based test for this function, naming the invariant." Without the explicit ask, you get four examples and no properties.

For the mutation-survivor loop, Alex Op's "Mutation Testing with AI Agents" piece describes the practical pattern that has emerged in 2026: feed the **Stryker survivor report** back into a Claude Code skill whose only job is writing targeted mutant-killing tests. The agent is good at this when scoped narrowly — given a specific surviving mutant and the test file, it can write the one assertion that kills it. It is bad at this when given the whole report at once. Decompose the work; do not hand the agent a mountain.

## 2026 Findings

The empirical picture as of early 2026 is clearer than it was a year ago. The arXiv NeurIPS 2025 data shows agent-generated property-based tests are credible — 56% valid bug reports across 100 packages is not noise, and the Anthropic Red Team writeup confirms the workflow is now baked into internal agent harnesses rather than living in research demos. The honest read of the same evidence: agents do **not** reliably generate mutation-surviving tests *without explicit prompting* about what the mutations would be, but they will write surprisingly strong property tests when asked specifically to name an invariant. The implication is that **prompt design — and a fitness function on kill rate — is the difference between a theatrical safety net and a real one**. The tooling no longer limits you. The instruction layer ([[../context-engineering/instruction-layer]]) and the orchestration layer ([[../context-engineering/orchestration-layer]]) do.

## Traps

- **Mutation testing run too often.** The suite times out, the team gets annoyed, someone disables the gate, and the project is back to line coverage within a sprint. Schedule it; do not gate every PR on it; report drift, not absolute scores.
- **Property tests with weak properties.** "Result is not null" passes for any function that returns anything. "Result is a list" is barely better. Teach the agent — explicitly, in the prompt — to state domain invariants: idempotence, commutativity, round-trip equivalence, monotonicity, conservation of total. Without a named invariant, you get a tautology.
- **Coverage-metric goal-seeking.** When kill rate becomes a target, teams find ways to inflate it that do not improve quality — deleting hard-to-cover code paths, excluding "untestable" modules, lowering the floor module by module until the gate is decorative. The metric is for diagnosis, not bonus calculation.
- **Equivalent mutants treated as failures.** Some mutations produce code that is semantically identical to the original (a constant folded in two ways, a redundant null check, a dead branch). These cannot be killed because there is nothing to kill. Document them, mark them excluded in the tool config, and move on. Do not contort the suite to chase them.

## Action Step

Pick a file an agent recently touched in a project you care about. Run a mutation tester against it — Stryker if it's TypeScript, PIT if it's Java, Mutmut if it's Python. Look at the **surviving mutants**. For each one, decide: is the test missing, or is the production code dead? The surviving mutants are a literal list of the gaps the agent left behind, ranked by what would actually slip past CI.

Then, separately and on a different file: pick one pure function — something with a clear input/output contract, no I/O — and write a single property-based test for it. Just one property. Note the inputs the framework generates that you would never have thought to enumerate. That moment, the first time Hypothesis hands you a Unicode surrogate pair or a zero-length list that breaks code you would have sworn was correct, is the entire pedagogical point. The agent did not generate that input either. That is why the property exists.

See [[sources]] for full citations.

---

**Next Session:** [[characterization-and-handoff]]
