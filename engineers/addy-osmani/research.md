---
title: Addy Osmani — detailed research
parent: Addy Osmani
nav_order: 1
last_updated: 2026-10-26
last_read: null
status: unread
research_cutoff: 2026-10-26
research_checked: 2026-10-26
cache_schema: 1
---

# Addy Osmani: Build the System Around the Agent

[Profile](index.md) · [Worked feature and prompts](workflow.md) · [Tools](tools.md) · [Source findings](sources.md) · [Slide notes](slides.md)

## 1. Approach in brief

**Stated.** Osmani distinguishes professional agent-assisted development from accepting generated code without scrutiny. In his February account, humans retain architecture, quality and correctness responsibilities. [S01](sources.md#s01)

**Inferred synthesis.** His useful organising question is broader than “How do I prompt well?”: what surrounding system makes delegated work inspectable, recoverable and worth accepting? Specifications clarify the goal; the harness supplies context, tools and feedback; a loop repeats work; a person remains answerable for the decision to use its output. The following sections keep those components distinct rather than presenting every article as one immutable methodology.

This profile uses public material available by **26 October 2026**. Authored articles are recommendations or self-reports unless labelled otherwise. A maintained repository demonstrates published artifacts, not their universal effectiveness. No paid book chapters, private work sessions or complete personal configuration were accessed.

## 2. Techniques and principles

### A written agreement before implementation

**Stated.** His January specification guide starts with a concise goal and has the agent elaborate a reviewable plan. It recommends modular, evolving specifications, read-only planning, explicit commands and boundaries, and relevant context per task rather than one enormous prompt. [S02](sources.md#s02)

**Suggested application.** For an existing reward service, a useful specification might fit on one page: what counts as the same submission, what must persist, how existing behaviour is observed, and what may change. Record unresolved product decisions separately. Do not let a plausible generated data model become an accidental requirement.

### The harness is an engineering artifact

**Stated.** His April article treats the agent's environment—context, tools, feedback, persistence, permissions and recovery—as something to design around observable failures. Add a constraint for a concrete reason and retire it when it no longer earns its cost. He explicitly credits other authors for parts of the harness framing. [S03](sources.md#s03)

**Suggested application.** If replay protection keeps disappearing, investigate whether intent, tests, or access controls are missing before adding another paragraph to an instruction file. A failed database write and a misunderstood requirement require different remedies.

### Brownfield work earns autonomy

**Stated.** The September article proposes human-defined risk zones: well-tested isolated work can run in a tighter autonomous loop; uncertain areas need characterization; sensitive changes need close human involvement. It recommends a durable, cited comprehension memo, fresh planning/review contexts, and stopping when implementation disproves the map. [S04](sources.md#s04)

**Suggested application.** The reward calculation may be easy to understand while reward persistence affects billing-like or user-trust concerns. Classify the specific change, not the whole repository by reputation. “Existing tests pass” is not evidence that those tests cover the invariant being changed.

### Parallelism requires a coordination design

**Stated.** The March orchestration write-up describes independent contexts, scoped ownership, dependency tracking, isolated workspaces, plan review and verification gates. It also warns that generating work faster moves pressure onto verification. The article is a talk-based pattern survey; its heuristics are not a controlled proof that more agents outperform one. [S05](sources.md#s05)

**Suggested application.** Use parallelism to investigate independent questions, not to let two implementers edit the same reward transaction. A reviewer in a fresh context may challenge assumptions, but is still fallible and does not replace executable checks.

### Repeated work becomes a loop

**Stated.** The June loop article describes a system that discovers work, delegates, checks, and stores progress outside the conversation. It names worktrees, skills, connectors, sub-agents and durable memory, while explicitly cautioning about cost and the maturity of the approach. [S06](sources.md#s06)

**Suggested application.** A useful loop can be small: pick one eligible task, run bounded implementation, verify, record evidence, stop. An unbounded “keep fixing until done” instruction is not a robust scheduler or a completion criterion.

### The human owns the production decision

**Stated.** In July he separates quality evidence from the verdict and from answerability: agents can run investigation, implementation and verification, while humans own boundaries, audit, sampling and acceptance decisions. The article argues that humans need not intervene in every inner-loop action. [S07](sources.md#s07)

**Suggested application.** Keep a release record showing the requirement, actual checks, known gaps, owner and recovery route. A test log helps inform the decision; it does not itself decide whether a changed reward rule is desirable.

### Configuration needs pruning as well as accumulation

**Stated.** His August audit post self-reports periodic configuration review and identifies stale skills, instructions, hooks and memory as potential overhead. Archive and evaluate changes rather than deleting blindly; use enforceable controls for rules that must hold. His support for skills coexists with skepticism about keeping every installed skill forever. [S08](sources.md#s08)

**Suggested application.** Keep a reproducible task that previously failed, compare a lean configuration against the current one, and restore the old configuration if evidence worsens. Measure correctness, review effort and cost rather than instruction length alone.

## 3. A feature from idea to release

### Documented sequence and its limits

**Stated/self-reported.** The January workflow uses a specification and plan, small implementation chunks, relevant context, testing and review, and frequent version-control checkpoints. It reports a default of one main agent with possible secondary review, despite experiments with parallel agents. [S09](sources.md#s09)

The later pieces enlarge the design space: coordination, durable loops, human acceptance boundaries and brownfield constraints. They do not establish that every project uses the same number of agents or that his January personal practice was replaced wholesale.

The [worked feature](workflow.md) translates these ideas into an original procedure for the shared reward example. It is a proposed adaptation, not an observed Osmani coding session. Unknown starting architecture and concurrency semantics remain explicit rather than being invented to make the exercise convenient.

## 4. Tools and setup

Read the [tool inventory](tools.md) for the relationship between each named tool and the evidence. In particular, a tool discussed in an orchestration survey is not automatically part of Osmani's everyday setup. This profile publishes no model ranking or preferred current model configuration.

The public [Beyond Vibe Coding publisher page](https://www.oreilly.com/library/view/beyond-vibe-coding/9798341634749/) establishes a book about practical AI-assisted development, validation, integration and agent workflows. Its public outline does not establish the contents of inaccessible exercises. [S10](sources.md#s10)

## 5. Reusable working prompts

The original prompts in [the worked feature](workflow.md#reusable-working-prompts) cover inspection, planning, implementation, independent review and release evidence. They operationalise this guide's adaptation and must not be attributed as Osmani's actual prompts.

## 6. Failure modes and limits

The following is **our analysis**, informed by the documented approach rather than a list of measured defects in his tools.

| Failure | Why the process can still miss it | Practical response |
|---|---|---|
| A clear plan encodes the wrong rule | Clarity is not product correctness | Review concrete examples with the requirement owner |
| A green suite checks the wrong boundary | Test existence can mask missing persistence checks | Observe the real stored result and a restart |
| A fresh reviewer shares the same assumption | Context separation is not epistemic independence | Supply original intent and ask for counterexamples |
| Parallel builders create incompatible contracts | File isolation does not ensure conceptual agreement | Agree interface and ownership before delegating |
| Instructions accumulate without evaluation | A remembered fix may become irrelevant overhead | Keep a regression task and compare configurations |
| Automation repeats an invalid action | A loop can scale a mistake | Define limits and escalation conditions before running |
| “Human approval” becomes a rubber stamp | Too much output can exceed review capacity | Reduce scope and require concise, inspectable evidence |
| A safe-looking refactor changes an undocumented dependency | The repository may omit institutional knowledge | Use owners, operational evidence and characterization |

**Not established:** a universal optimal agent count, mandatory test-first cadence for every task, exact daily model routing, current private permission rules, or a controlled productivity advantage over another engineer's process. The numerical claims and studies cited in his essays were not independently reconstructed for this profile and are not repeated as findings here.

## 7. First practical lab

Complete [the reward lab](workflow.md#first-practical-lab) using one existing project and one assistant. Add a separate reviewer only if that question is useful. The lab's outputs are a behaviour map, reviewed plan, observed check results, a small understandable patch and an acceptance decision. It is a learning exercise, not a benchmark of Osmani's effectiveness.

## 8. Comparison profile

The stable [C01–C12 entries](index.md#comparison-evidence) correspond to D01–D12 in every other engineer profile. These are qualitative positions with dates and source links, not scores. Use the [shared field-card view]({{ '/engineers/compare/?people=addy-osmani' | relative_url }}) to inspect them.

For future comparisons, preserve distinctions between prose specifications and executable tests, individual interaction and orchestration, and acceptance responsibility versus line-by-line review. Apparent differences may be task context or changes over time rather than contradictory principles.

## 9. Sources and research gaps

The [source register](sources.md) records inspected scope, dates, findings, supported claims and access limits. The research is deliberately limited to public evidence. We did not install or execute the tool collection, validate every linked research study, watch inaccessible embedded videos, or infer employer-specific practice from an author biography.

The public articles span January–September 2026; the cutoff is October, not a claim that every tool was re-tested in October. Published setup instructions should be rechecked before use. No model prices, current performance rankings, or confidential operational details are assumed.
