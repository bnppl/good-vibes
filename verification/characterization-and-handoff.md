---
last_updated: 2026-04-27
last_read: null
status: unread
---

Two problems share this session because they are the same problem. **Characterization tests** pin behavior in legacy code before an agent is allowed to touch it — they answer the question "what does this actually do, before I let something rewrite it?" The **handoff problem** asks the harder follow-up: where do those tests, the scenarios from [bdd-for-agents](bdd-for-agents.md), the contracts from [contract-testing](contract-testing.md), and the fitness functions from [fitness-functions](fitness-functions.md) live so that the *next* agent session — fresh context, no memory of yours — discovers them?

Without an answer to the handoff question, every other technique in Module 4 is decorative. You can build the most rigorous mutation-tested, contract-verified, architecturally-fenced verification surface in the world; if the next session doesn't see it, the agent reinvents reality from whatever subset of files it happens to read first. So this session closes Module 4 by tying the artifacts to the discovery mechanism that makes them load-bearing.

## Characterization Tests for Legacy

The canonical reference is still **Michael Feathers, *Working Effectively with Legacy Code*** (2004). Twenty-two years later, nothing has displaced it. Feathers's central move: before changing legacy code, **characterize its current behavior with tests** — not the tests you wish the code passed, but the tests that capture what the code *currently does*, including the bugs. Once you have that net, you can change the code and the tests will scream when behavior shifts. Without the net, you're flying blind and calling it refactoring.

The agent equivalent inverts the model's natural tendency. Drop an agent into legacy code and its first instinct is to "improve" — rename a confusing variable, extract a function, simplify a condition. Each of those edits silently re-specifies behavior. The discipline is to make the agent's **first task in any legacy area "write tests until you can describe what this code does."** Only then does it modify. This is uncomfortable for the agent (and the human watching) because it feels slow. It is slow. It is also the only way to know that the modification preserved what mattered. The "test the tests" rigor from [test-the-tests](test-the-tests.md) applies here too: a characterization test that doesn't fail when you mutate the legacy code is characterizing nothing.

## Approval / Golden / Snapshot Tests

The modern lightweight form of characterization is **approval testing** — sometimes called golden-master or snapshot testing. The tools are mature: **ApprovalTests** (Llewellyn Falco's library, ports across most languages), **jest snapshots** in JS, **insta** in Rust, **syrupy** in Python. The mechanism is identical across all of them: serialize the system's output, store it as a "golden" file, and on every test run compare current output to the stored version. Any drift fails the test.

Approval tests shine when the output is complex enough that hand-writing assertions is tedious or fragile: **rendered HTML, generated code, formatted JSON responses, template output, log streams**. You don't have to articulate "the output should contain these 47 specific values"; you let the system show you and lock that down.

The trap is the one-keystroke approval. When a snapshot test fails, the tool offers to update the golden file. Pressing the button without reading the diff converts characterization into theatre — the test now characterizes whatever the code currently does, which is what it always does, which is nothing. The discipline: **review the diff every time a snapshot updates, with the same care as a code review, just lower ceremony**. For agents this means the snapshot-update step requires a human-readable explanation of why the output changed, not just `--update-snapshots`.

## The Pattern: Characterize, Then Modify

Concretely, the workflow with an agent looks like this:

1. **Agent**: "Read this module and describe its behavior in plain English. Include edge cases, error paths, and anything that looks unintentional."
2. **Agent**: "Write tests that pin every behavior you described, even ones you think are buggy. Mark the suspicious ones with a comment, but lock them in."
3. **Human**: review the *tests* for correctness against intent. Not the code — the tests. Does this set of tests actually describe the contract this code is fulfilling for the rest of the system?
4. **Agent**: now modify the code, re-running tests after each change. Any failing test triggers a stop-and-explain: was this an intentional behavior change, or a regression?

The split mirrors the **outside-in BDD pattern from [bdd-for-agents](bdd-for-agents.md)**: human reviews the spec (here: the characterization test), agent writes the implementation. The cognitive load on the human is concentrated where it matters — on the *intent* expressed in tests — and the mechanical work of hitting the intent is the agent's. The CodeGeeks "Legacy Code Modernization Using AI" guide makes the same recommendation explicit: **golden-master tests first, then agent-led modernization**. Skipping step one and letting an agent "modernize" untested legacy is how production incidents get committed at three in the morning by something that does not know what three in the morning means.

This is also where the Module 3 habits from [agentic-tdd](agentic-tdd.md) and [comprehension-debt](comprehension-debt.md) meet legacy code. TDD on a greenfield is a discipline; TDD on legacy is a survival mechanism. The characterization tests *are* the missing comprehension layer — they translate "what this code does" from the implicit folklore of whoever wrote it into executable specification.

## The Handoff Problem

Here's the part the literature still under-treats. You finish a session having built a beautiful verification surface — characterization tests for the billing module, Pact contracts for the auth API, an architecture fitness rule preventing domain code from importing infrastructure, a BDD scenario suite for the new checkout flow. You close the laptop. Tomorrow, a different session of the same agent (or a different agent entirely) opens, gets a task in the same area, and reads… whatever files it happens to discover first.

If those verification artifacts are not discovered, the next session **cheerfully bypasses them all**. It does not run your fitness functions because it does not know they exist. It edits legacy/billing without running the golden tests because nothing told it golden tests live there. It writes a feature that violates a contract it never read.

The verification artifacts are useless if the next session doesn't discover them. There are three discoverability layers, used together:

1. **Co-location.** Tests next to the code they cover. Scenarios next to the features they describe. Contracts in a known top-level directory. The agent's file-discovery heuristics weight proximity heavily: if it opens `legacy/billing/charge.ts`, it is overwhelmingly likely to also notice `legacy/billing/__tests__/`. It is overwhelmingly *unlikely* to notice `tests/integration/legacy/billing/charge.spec.ts` six directories away. Put the verification near the thing being verified.
2. **Instruction-layer pointers.** `AGENTS.md` / `CLAUDE.md` names the verification surface explicitly: which commands to run, which directories hold which artifacts, what thresholds matter. This is the [instruction-layer](../context-engineering/instruction-layer.md) doing exactly the job it was designed for: telling a fresh session what the project considers true. The orchestration layer ([orchestration-layer](../context-engineering/orchestration-layer.md)) is what makes sure the instruction file actually loads in the first prompt; co-location is what makes the artifacts findable once the agent goes looking. They are complementary, not redundant — see [agentic-dev](../context-engineering/agentic-dev.md) for the broader pattern.
3. **CI as backstop.** Even if the agent ignores the pointers and skips the local commands, CI fails the merge. The verification gate is **deterministic**; the discoverability is **probabilistic**. You design for both — make it likely the agent runs the checks locally so the loop is fast, and certain that the checks run in CI so the loop is safe.

The empirical evidence on instruction files matters here. The **Vercel "AGENTS.md outperforms skills in our agent evals"** post (Jan 2026, 524 HN points) ran a controlled eval on Next.js 16 API tasks: an 8KB AGENTS.md file produced a **100% pass rate**, versus **79%** for the equivalent information packaged as skills. The handoff file is not optional, and its format matters. AGENTS.md is currently the format that wins.

## AGENTS.md / CLAUDE.md Patterns for Verification Handoff

Here is what a verification-aware AGENTS.md section looks like in practice. Tight, concrete, copyable:

```markdown
## Verification surface

Before declaring any task done:
1. Run `npm run test` (unit + scenarios in `features/`).
2. Run `npm run fitness` (architecture rules; see `architecture/rules.ts`).
3. Run `npm run contracts` (Pact provider verification).
4. If you touched `legacy/billing/`, characterization tests in `legacy/billing/__tests__/golden/` MUST pass — do not update snapshots without explaining the diff.

Mutation score floor: 70% on `domain/`, 80% on `payments/`. Run weekly via `npm run mutation`.
```

Read what this block is doing. It **names the commands** the agent should run, so there's no guessing at script names. It **names the artifact directories** so the agent knows where to look when something fails. It **calls out the high-risk area** (`legacy/billing/`) by name and attaches a non-negotiable rule (snapshots don't update without an explanation). It **sets numeric thresholds** for mutation score, so "good enough" has a definition rather than a vibe. And it tells the agent which checks are per-task versus per-week, so the cost-benefit is legible.

What it does *not* do is explain why each rule exists, lecture about software engineering, or dump the project's history. The **Tessl "Your AGENTS.md file isn't the problem. Your lack of evals is"** piece (Feb 2026) makes the case bluntly: the file is only as good as the eval loop validating it. Without measurement, it accretes — every incident adds a paragraph, nothing ever gets removed, and within six months the file is a 40KB folklore document the agent skims and ignores. The fix is to **treat AGENTS.md as a tested artifact**: A/B test rules, keep the ones that change behavior, delete the ones that don't. The **vltansky agents-md-evals** repo on GitHub is the concrete tool for this — it runs comparative evals on AGENTS.md variants and reports which rules actually move the pass rate. Their headline finding from early adopters: most files are **80–95% redundant**, and trimming improves agent behavior rather than degrading it.

For a broader survey of the file hierarchy and how CLAUDE.md, AGENTS.md, and per-skill files compose, see the **Data Science Collective "Complete Guide to CLAUDE.md and AGENTS.md 2026"**. For the specific pattern of emitting a `HANDOVER.md` at session end so the next session can pick up mid-task, see the **Ilyas Ibrahim Mohamed "4-Step Protocol That Fixes Claude Code's Context Amnesia"** piece — it codifies a handover prompt template that's worth stealing wholesale. And for a more ambitious direction, **Mozilla.ai's Cq** ("Stack Overflow for AI coding agents," March 2026, 225 HN points) is an early shot at cross-session knowledge sharing as infrastructure rather than per-repo convention. None of these have replaced AGENTS.md, but the space is moving.

## Closing the Loop Back to Module 1

This module took the verification habits from Module 3 — the per-session loop of [agentic-tdd](agentic-tdd.md) and [comprehension-debt](comprehension-debt.md) — and extended them into **artifacts that span sessions**. Cross-session regression suites ([cross-session-regression](cross-session-regression.md)). Behavior scenarios in shared `features/` directories. Domain boundaries that survive because [ddd-boundaries](ddd-boundaries.md) are encoded in [fitness-functions](fitness-functions.md). Contracts that don't drift because [contract-testing](contract-testing.md) catches the drift. Tests whose own value is checked by [test-the-tests](test-the-tests.md).

But the artifacts only work because the **instruction layer** and **orchestration layer** point the next session at them. Module 1 was about making the next session see the right things; Module 4 is about making the build refuse to proceed when those things are violated. **Verification and context engineering are two halves of the same problem.** Context engineering without verification is well-organized hope. Verification without context engineering is well-engineered checks that the agent never runs. Module 4 sits on top of Module 1; neither is sufficient alone.

## Action Step

Identify a legacy file in your codebase that you'd be afraid to let an agent touch. (You know the one. Everyone has one.) In a single session, generate characterization tests with the agent following steps 1–3 from "The Pattern" above — describe behavior, write tests pinning each behavior, you review the tests against intent.

Then open a *fresh* session. Give the agent only the tests and your `AGENTS.md`, and ask it to refactor the file. Watch what happens. Note where the verification net catches the second session's misunderstandings — wrong assumption about an edge case, accidental behavior change in an error path, snapshot drift it tries to silently approve. **Each gap is a fitness function, contract, or scenario you should add.** Each catch is evidence that the handoff worked.

The exercise produces two artifacts: a hardened legacy module, and a calibrated sense of how much your verification surface actually carries across the session boundary. Most teams discover both numbers were lower than they assumed.

---

**Next Session:** [sources](sources.md)
