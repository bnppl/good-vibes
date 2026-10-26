---
title: Peter Steinberger — detailed research
parent: Peter Steinberger
nav_order: 1
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
---

# Peter Steinberger — feedback, impact, and changing practice

[Profile](index.md) · [Worked reward feature](workflow.md) · [Tools and chronology](tools.md) · [Source findings](sources.md) · [Slides](slides.md)

## Approach in brief

**Stated — C01.** His December 2025 update describes executable feedback and consequential design decisions as priorities, alongside a personal account of rapid output. It is not controlled productivity evidence. [S04](sources.md#s04)

**Inferred synthesis.** The useful lesson for this guide is to shorten the distance between a request, a working artifact, and an informed decision about its next change. This interpretation does not turn one person's intuition into a general safety argument. Our [common reward exercise](workflow.md) supplies an independently agreed finish line.

Research inspected on 26 October 2026. Current public artifacts and earlier personal reports are treated separately. His February announcement describes an accessibility goal, not a later complete coding routine. [S05](sources.md#s05)

## Techniques and principles

Three ideas guide the original application in this cache:

1. Make the result easy to exercise through an actual application boundary.
2. Choose work that can be steered and reviewed without entangling unrelated changes.
3. Revisit the process when its tools, the model, or the project changes.

These are our synthesis of the dated evidence. The application is not a recovered private prompt or an exact account of how Steinberger would implement this feature. A small reward handler and a long-lived product have different failure costs.

## Requirements and specification

**Stated — C02.** The October 2025 account favours discussion and iteration, with more planning for uncertain changes. It does not establish that every task should start from a large specification. [S02](sources.md#s02)

**Suggested adaptation.** Keep the six reward observations stable while exploring implementation choices. Ask whether the existing application already distinguishes a submission ID from a user or word ID. If the agent proposes a design before establishing that distinction, pause for evidence. Conversational refinement should clarify the implementation, not quietly revise the agreed outcome.

For this exercise, the interface and storage are unknown. A useful context note can record the real entry point and the code that reports success. It should not add a database merely because an example reward service often has one. No product architecture is prescribed by the research method.

## Increment and planning

**Stated — C03.** His August 2025 account varies planning and parallel work with scope. The account is a personal heuristic rather than a measured agent-count rule. [S01](sources.md#s01)

**Suggested adaptation.** Use one implementation owner for the reward state transition. An independent read-only investigation of existing persistence may help if it genuinely removes uncertainty. Giving two writers the same tiny handler creates coordination work without necessarily adding useful parallelism.

The increment should leave a coherent artifact that can be checked. For example, first delivery and immediate replay might be one step, with restart persistence examined next. That is a proposed decomposition, not the subject's mandatory sequence. If all required behaviour already exists, improving the observation or reducing uncertainty may be the next useful change instead of writing more code.

## Testing and verification

**Stated — C04.** The October 2025 article recommends requesting tests after implementation in the same context. This differs from a strict test-first prescription. [S02](sources.md#s02)

**Suggested adaptation.** Do not rename this workflow TDD to make it agree with another profile. Let the implementer use the existing project mechanisms, then draft focused checks. Keep the independently agreed outcome table visible while reviewing those checks. Tests derived from a patch may share the patch's assumptions; a replay test that reads a test-owned counter does not verify the application.

The reward exercise needs separate evidence that accepted balance survives restart and that accepted identity also survives. A single final value after restart and replay can be correct by accident. The [workflow table](workflow.md#fixed-task-and-observations) makes the two observations independent.

A plausible defect check is useful here: temporarily forget processed IDs across restart while retaining balance, then confirm the replay observation detects the extra award. This is our sensitivity exercise, not evidence that Steinberger prescribes mutation testing.

## Design and refactoring

**Stated — C05.** The December 2025 update describes more ad-hoc cleanup when friction appears, rather than only scheduled cleanup phases. [S04](sources.md#s04)

**Suggested adaptation.** Identify one concrete source of friction, such as success reporting being distant from the state commit. Clarify that path with the smallest justified structural change. Keep behaviour changes and structural changes distinguishable in the diff. An extra abstraction is useful only if it makes the actual rule clearer or the next change easier.

Do not treat unexpected model duration as a reliable architectural measurement. It can prompt investigation, but the cause may be a tool failure, context omission, dependency problem, or poor requirement. Inspect the cause rather than optimizing for an impressive completion time.

## Human understanding and review

**Stated — C06.** In December 2025 he reports reading selected code while retaining knowledge of the architecture. This describes his practice; it is not a policy that another team should copy without regard to risk. [S04](sources.md#s04)

**Suggested adaptation.** For this task, a reviewer should be able to trace one A through identity recognition, balance update, durable success, restart, and replay. If the explanation depends on uninspected generated code, name that uncertainty. A confident architecture summary is not evidence that the state transition follows it.

Review changes to expected values, test setup, migrations, dependencies, and configuration alongside production code. A narrowly scoped feature can still hide an unrelated change in its fixtures. The final result should be explainable without asking the same agent to restate its own claim.

## Agent autonomy and coordination

**Stated — C07.** October's personal account uses parallel terminal agents with active steering and attention to change impact. Same-folder work is a dated practice, not proof that simultaneous edits cannot collide. [S02](sources.md#s02)

**Suggested adaptation.** Assign one owner per writable surface and make integration explicit. A research agent can inspect persistence while the implementer waits for its findings; that is different from two agents changing the same store. Keep total coordination and review effort in any later evaluation.

Do not infer a mandatory agent topology from a screen layout or reported session count. A productive solo workflow can rely on knowledge that a new team, remote worker, or unfamiliar repository does not possess.

## Context and durable state

**Demonstrated artifact — C08.** The pinned October 2026 Agent Scripts README describes canonical shared guidance and repo-owned skills. This is later evidence than the 2025 skepticism about elaborate tooling. [S06](sources.md#s06)

**Suggested adaptation.** Keep reusable tool instructions close to their owner and link them from the task context. Keep the reward contract separately identifiable. A reusable skill should not acquire a second, inconsistent copy of the product's state rule.

Agent session records and application persistence solve different problems. A durable conversation note saying A was accepted cannot substitute for a durable application record. After restart, the actual application must still report the balance and recognize A independently of the assistant's memory.

## Tools and setup

Read the [dated tool inventory](tools.md). No software was installed. Current public documentation establishes possible integrations and published conventions, not the full contents of a private machine. A recommendation to use a CLI is not a claim that every MCP is rejected forever.

## Integration and release

**Demonstrated artifact — C10.** Pinned shared instructions distinguish shipping from artifact publication, while a project-specific document adds its own checks and publish order. These are prescriptions, not an observed deployment. [S07](sources.md#s07) · [S09](sources.md#s09)

**Suggested adaptation.** Integrate through the target repository's existing route. If the change alters stored data, inspect that contract before deciding whether a migration is needed. A green focused test does not authorize publication or establish rollback readiness. Those decisions remain with the project's actual release process.

## Boundaries and safeguards

**Demonstrated artifact — C11.** Public guidance includes review/publication authority, and Oracle documentation includes previewing scoped bundles. Neither proves resource-level enforcement. [S07](sources.md#s07) · [S08](sources.md#s08)

**Suggested adaptation.** Give the task only the environment it needs, keep authoritative expectations inspectable, and explicitly review any external-data or publication action. These are our control choices for a target project. They are not claims that a prompt or a published file prevents every bypass.

## Evaluation and tradeoffs

**Inferred — C12.** Assess actual outcomes and rework rather than turning rapid feature reports into comparative effectiveness. The Arena landing page explicitly labels its session summary AI-assisted; this study did not independently watch and reproduce the whole session. [S03](sources.md#s03)

For a later runnable comparison, hold the starting revision, task, environment, acceptance checks, and model/harness configuration constant. Record review, corrections, and integration effort. The written guides here compare documented ideas and proposed applications; they do not establish which engineer's method would win.

## Reusable working prompts

The [workflow prompts](workflow.md#reusable-prompts) are original suggestions for inspection, a bounded change, and review. They are not attributed as Steinberger's exact prompts. Use actual project commands discovered from the repository rather than copying historical configuration into a different environment.

## Failure modes and limits

| Failure | How it could appear in the reward task | Our proposed response |
|---|---|---|
| Scope mistaken for certainty | A short prompt leaves identity semantics unstated | Keep the fixed outcomes separate from design exploration |
| Parallel work entangles state | Two agents each change the reward store | Assign one write owner and inspect integration |
| Tests repeat implementation assumptions | Replay only checks a mock-maintained variable | Observe the real application balance |
| Restart is only simulated by a fixture reset | In-memory duplicate protection appears durable | Replace runtime state while retaining real stored data |
| A source is frozen in time | October 2025 skepticism becomes a current anti-skill policy | Compare dated articles with pinned later artifacts |
| Publication is inferred from a commit | A local or integrated change is called released | Follow the actual project's release authority and checks |

## First practical lab

Complete the [common reward exercise](workflow.md#first-practical-lab). Keep the six balance observations, the actual check output, a reviewed diff, and an explanation of the state mechanism. The exercise is proposed guidance, not an experiment already run by the subject.

## Comparison profile

The stable [C01–C12 entries](index.md#comparison-evidence) preserve dates, evidence types, and qualifications. D04 intentionally remains a test-after account rather than being normalized into test-first. D08–D11 describe inspected published artifacts, not a tested complete private setup.

## Sources and research gaps

The [nine-record source register](sources.md) records authored articles, the qualified session-summary evidence, and pinned repository documents. A complete current private model configuration, permissions implementation, build/release topology, and controlled productivity advantage are not established. Paid material was not used. No tools or application implementation were executed for this research.
