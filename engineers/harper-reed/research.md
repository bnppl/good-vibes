---
title: Harper Reed — detailed research
parent: Harper Reed
nav_order: 1
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
---

# Harper Reed — make the workflow inspectable

[Profile](index.md) · [Worked feature](workflow.md) · [Source findings](sources.md) · [Slide notes](slides.md)

## Approach in brief

**Inferred synthesis.** Reed's public accounts are useful as a chronology of experimentation, not one timeless recipe. The April 2025 learning journey describes progressively more capable interactions, with experience informing judgment. This profile treats the journey as a practitioner account, not proof that everybody should follow its order. [S04](sources.md#s04)

The practical question is how to make intent, progress and observed behaviour available to the next decision. Our suggested application below keeps those artifacts inspectable without converting them into ceremony for its own sake. The complete current private development environment is not established.

Research was checked on **26 October 2026**. The latest source here is an October public instruction artifact. Earlier posts retain their own dates. A repository's publication demonstrates what is written, not that the instruction was obeyed in a live session.

## Techniques and principles

### Requirements and context

**Stated, historical personal workflow.** February 2025 separates clarification, a saved specification, a prompt plan and execution; established-code work is planned per task. Checklists provide continuity. [S01](sources.md#s01)

**Suggested adaptation.** A reward change does not need a second product strategy document. It needs a reviewed statement of identity, success and persistence, plus enough existing-code context to choose the next step. Distinguish what the product must do from how the current application happens to do it. A useful note can point to the real handler and store; a large generated description can merely restate assumptions.

When an agent lacks a fact, a question should expose the consequential uncertainty. For example, a successful response might mean only that an operation entered a queue, or that its balance effect is durably recorded. This difference changes what a restart check can establish. The common exercise leaves the implementation boundary unknown until inspection.

### Planning and increments

**Demonstrated artifact.** The October 2026 public instruction file explicitly scales process to the diff; it does not require extensive planning for every small change. [S10](sources.md#s10)

The inspected BASIC prompt plan is another concrete artifact: phased chunks and incomplete items coexist. It demonstrates a published plan, not a verified completed interpreter. [S11](sources.md#s11)

**Suggested adaptation.** Choose a plan that can reveal a mistake before it becomes expensive. If the existing system already handles repeated A within one process, do not regenerate that subsystem merely because it appears first in a template. Start with the missing restart behaviour. Conversely, a green check with no real second delivery should not be mistaken for implemented replay protection.

Treat a checked box as a progress claim. Keep its associated evidence close enough that a reviewer can inspect it. If assumptions change, revise the next step rather than preserving an obsolete plan for consistency with its original wording.

### Testing and feedback

**Stated.** In May 2025 Reed advocates TDD and executable checks, including linting and pre-commit feedback, as aids to agent work. His success reports are practitioner observations, not measured universal effects. [S02](sources.md#s02)

**Suggested adaptation.** Review the relationship between a test and its oracle. An assertion that reads the application balance is different from one that reads a fixture's own accumulated value. A fake restart which reconstructs the same in-memory object can test nothing about persistence. A missing dependency is a runner failure, not evidence that the reward rule fails.

For this exercise, use a focused check that observes a meaningful missing behaviour. If the behaviour already exists, assess its coverage rather than planting a permanent defect to manufacture red. A temporary deliberate defect can be a separate sensitivity experiment, restored afterwards. This recommendation is ours; no blanket mutation-testing requirement is attributed to Reed.

### Design and refactoring

**Demonstrated artifact.** The published October instructions prioritise limited, readable changes. [S10](sources.md#s10)

**Suggested adaptation.** Make the state transition traceable: received identity, previous acceptance, reward effect, persisted result, response. If these responsibilities are mixed, consider the smallest extraction that makes the rule easier to inspect. Do not add an abstraction merely to resemble a named pattern. The shared requirement chooses neither a database nor a service topology.

Separate structural improvement from semantic change in the review. A claim that the agent only refactored does not demonstrate preserved behaviour. The outcome sequence and relevant regression checks provide evidence within their boundaries; unexplored failure conditions remain unexplored.

## A feature from idea to release

The [common reward walkthrough](workflow.md) is an original application. Reed was not observed implementing this task. It keeps six independently observed balances and the same unknown starting architecture as the other profiles.

| Proposed stage | Inspectable output | What remains a human decision |
|---|---|---|
| Inspect the starting system | Entry points, baseline checks, observed state | Whether a baseline is trustworthy |
| Clarify intent | Fixed outcomes and unresolved boundary questions | What constitutes successful acceptance |
| Select a step | Small missing behaviour and relevant files | Scope and consequential design choices |
| Implement and check | Product diff and actual command output | Whether evidence addresses the intended rule |
| Review and checkpoint | Explained state transition and coherent change | Acceptance, integration, release readiness |

A useful comparison preserves those outputs without pretending every subject would choose the same step ordering or interface. The research guides are proposals informed by public evidence, not executed comparative benchmark runs.

## Human review

**Demonstrated artifact.** Published instructions require verification before claiming completion. [S10](sources.md#s10)

A December 2025 email account separately reports draft-first human review after an unwanted-send incident. That is communication-workflow evidence, not an automatically transferable software review policy. [S07](sources.md#s07)

**Suggested adaptation.** Use human review to challenge the explanation as well as the diff. Can someone trace why A after restart cannot add another reward? Do fixtures and configuration preserve the conditions being claimed? Could a simpler implementation satisfy the same outcomes? What is not checked? A second assistant can help inspect these questions but does not make intent independently correct.

## Autonomy and coordination

**Stated, January 2026 personal account.** Remote terminal multiplexing supports several ongoing coding sessions. That establishes an interaction setup, not a complete orchestration protocol. [S06](sources.md#s06)

**Suggested adaptation.** A small persistent-state rule may be easier with one implementation owner. If a separate read-only inspection is useful, give it a defined question and bring its evidence back to that owner. Parallel writes to the same reward function do not make a fairer application of the common exercise. If work is divided, define which files each worker may change and how conflicts are resolved; these are our proposed controls.

The September breakaway agent is a research experiment with unusually broad capabilities, not evidence that a low-control harness is the recommended environment for ordinary production work. [S05](sources.md#s05)

## Tools and setup

| Resource | Established relationship | Scope and verification limit |
|---|---|---|
| Aider and Claude Code | Reported transition in May 2025 | Historical personal use; not an installation performed here |
| Remote terminal stack | January 2026 self-report | Tailscale, Blink, tmux; no private configuration verified |
| Public instruction file | Inspected October artifact | Pinned revision; rules are not proof of compliance |
| BASIC prompt plan | Public project artifact | Plan inspected; project and tests not executed |
| Breakaway agent | Public experimental platform | README inspected; neither installed nor security-audited |
| LLM commit helper | March 2024 account | Historical supporting automation, not a quality gate |

[S02](sources.md#s02) · [S06](sources.md#s06) · [S08](sources.md#s08) · [S09](sources.md#s09) · [S10](sources.md#s10) · [S11](sources.md#s11)

No installation commands are copied from these dated accounts. Use the actual target project's supported tooling in our exercise. The profile does not assume private model parameters, an unchanged preferred model, a complete memory system, or a universal current agent count.

## Integration and release

**Stated, April 2025 advice.** Frequent commits act as recovery points. [S03](sources.md#s03)

A 2024 authored commit-message helper illustrates separate historical automation around Git metadata. Generating a good message is not evidence that the committed behaviour is correct. [S08](sources.md#s08)

**Suggested adaptation.** Keep an integrated change that the project's normal checks can evaluate. Inspect a migration or persisted-data format change if one actually arises; do not invent one to satisfy the outline. The common lab does not grant permission to deploy. An established branch or release process should be followed, and missing release evidence should be named rather than replaced with a generic imagined pipeline.

## Boundaries and safeguards

**Stated, lab incident.** The September 2026 account reports environment credential exposure during an agent experiment. [S05](sources.md#s05)

**Demonstrated artifact.** The experimental README explicitly lacks ordinary interactive safeguards and documents optional loop limits. That is inspected documentation, not a demonstrated safe sandbox. [S09](sources.md#s09)

**Suggested adaptation.** Before giving a reward task to an agent, identify the resources it can actually modify and the unrelated credentials or services reachable from that environment. Keep the implementation exercise within its authorised working surface. A task note saying that access is forbidden is not the same as denying access. No containment experiment, network probe, credential forwarding or unrestricted harness execution was performed for this research.

## Reusable working prompts

All prompts in [the walkthrough](workflow.md#reusable-prompts) are our suggested adaptations, not reproduced published prompts. They make the common task's intent and observation boundaries explicit without claiming to recover Reed's private session text.

## Failure modes and limits

| Failure | Why it matters in the common exercise | Proposed response |
|---|---|---|
| A plan is treated as truth | Completion labels can outlive their evidence | Inspect the actual state and command result |
| Source dates disappear | A historical tool preference becomes a false current policy | Retain publication dates and inspected scope |
| Restart is only simulated | Transient state survives the fake boundary | Replace runtime state while retaining real durable data |
| Review follows the implementation's assumptions | Code and tests can agree on the wrong rule | Compare against independent product outcomes |
| Communication safeguards are generalised | Draft review does not specify a coding-release gate | Keep the evidence's domain visible |
| Experiment becomes prescription | An exploratory harness is treated as a production recommendation | Separate lab design from ordinary task controls |

These responses are our analysis. The inspected sources do not provide a fully observed current private build, release, security, or memory configuration.

## Evaluation and tradeoffs

**Inferred synthesis.** Reed's staged learning account supplies experience and adoption advice, not comparative outcome evidence. [S04](sources.md#s04)

Our proposed evaluation records accepted behaviour, review effort, rework and explanatory quality. It does not rank approaches by how excited the author sounds or how many lines a session produced. Fix the starting revision, environment, task and checks before a later execution comparison. Then include the costs of recovery and review, not only time to a first patch.

## First practical lab

Complete one coherent increment of [the common reward task](workflow.md#first-practical-lab). Keep the baseline, fixed outcome table, bounded task note, reviewed diff and actual check results. Explain why the two post-restart observations test different things. This is a learning activity, not a controlled productivity experiment.

## Comparison profile

The [C01–C12 entries](index.md#comparison-evidence) use the common D01–D12 questions. A stated self-report, a recommendation, a published instruction and our proposed workflow are not interchangeable. A source whose inspection date is October can still describe a 2024 or 2025 practice.

## Sources and research gaps

The [eleven-source register](sources.md) records authored accounts and public artifacts. Source dates, public revisions where captured, and access limits are retained. Paid/private material was not used. No inspected code was executed. One guessed knowledge-graph URL was inaccessible and supports no claim. There is no measured head-to-head result, comprehensive private current setup, or tested claim of sandbox effectiveness.
