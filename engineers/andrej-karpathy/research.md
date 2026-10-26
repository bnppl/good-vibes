---
title: Andrej Karpathy — detailed research
parent: Andrej Karpathy
nav_order: 1
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
---

# Andrej Karpathy — context, verification, and understandable experiments

[Profile](index.md) · [Common reward workflow](workflow.md) · [Source findings](sources.md) · [Slide notes](slides.md)

## Approach in brief

This profile has **mixed focus**: conceptual AI systems, empirical model development, and AI-assisted software work. Those are related subjects, not interchangeable evidence of a personal coding-agent policy.

**Stated.** His November 2025 verifiability argument distinguishes tasks that can be specified as explicit programs from tasks made tractable through measurable feedback. It connects automation to environments that support repeated, efficient, assessable attempts. [S01](sources.md#s01)

**Inferred synthesis.** A useful way to apply the material is to inspect the objective, observation path, editable surface, and feedback cost together. That is this guide's synthesis, not a named universal Karpathy process or a measured productivity result.

Research was inspected on **26 October 2026**. Public code/documentation was inspected, not executed. No paid text or private configuration was accessed.

## Techniques and principles

### Verify the problem you actually mean

A convenient measurement can be correct yet incomplete. For our reward example, a test asserting only “balance is 10 after replay” could pass if the original award vanished during restart and was issued again. The intermediate observation matters because it distinguishes two explanations for the same final number.

**Suggested adaptation.** Write down the behaviour the measurement observes, the behaviour it leaves unconstrained, and one deliberately broken implementation it should distinguish. For a model experiment, ask the analogous questions about data, evaluation, and target behaviour. This does not turn a training metric into a proof of product correctness.

### Establish a simple baseline before adding complexity

**Stated; historical ML practice.** His 2019 training recipe begins with data inspection and a trusted training/evaluation skeleton, then adds complexity through explicit hypotheses and checks. That is neural-network-development guidance, not a documented current unit-test cadence for agents. [S02](sources.md#s02)

**Suggested adaptation.** In an existing product, first find the reward entry point and state boundary. Run the current checks. A baseline should establish what the system does before the proposed change. If a command fails to start, record an environment problem; do not count it as a meaningful behavioural failure.

A small baseline also gives later reviewers something concrete to challenge. “The agent improved it” is less useful than “this isolated account previously reached 20 after a duplicate; it now stays at 10, and the new-ID case still reaches 20.”

### Keep the artifact small enough to explain

**Demonstrated artifact.** The February 2026 microgpt article presents a compact, dependency-free educational implementation and walks through its computation. It illustrates explanatory minimalism, not production-readiness or a mandate to put every application in one file. [S03](sources.md#s03)

**Suggested adaptation.** Keep the reward change understandable enough that a reviewer can trace an ID to its durable record and balance effect. “Small” is relative to the existing design: deleting an essential abstraction merely to reduce line count can make the reasoning worse. Prefer a clear state transition over an unexplained framework or a clever compressed expression.

A useful explanation includes why the successful state is durable, how duplicate identity is represented, and what would happen on the next distinct ID. If the explanation cannot be tied to inspected code, a polished walkthrough has not repaired the gap.

## A feature from idea to release

### What the public artifacts actually show

**Demonstrated artifact.** The pinned autoresearch README describes a small single-GPU training experiment with a fixed training budget and validation bits-per-byte objective. It assigns distinct roles to human-edited instructions and agent-edited training code. Its opening swarm story is satire, not evidence of Karpathy's private topology. Cross-hardware results are not directly comparable. [S04](sources.md#s04)

**Demonstrated artifact.** The associated program establishes a baseline, limits edits, excludes evaluator changes and extra dependencies, records trials, and keeps or discards changes using measured results plus a simplicity preference. These are published instructions; they were not run during this study. [S05](sources.md#s05)

The inspected materials do not reconstruct a complete private software-delivery session. The [reward walkthrough](workflow.md) is therefore an original application, with an explicit fixed task and unknown starting architecture.

| Proposed checkpoint | Evidence to keep | Why it helps our exercise |
|---|---|---|
| Inspect current behaviour | Relevant code paths and baseline output | Prevents a speculative redesign |
| Fix the observable contract | Six balances and the real restart boundary | Keeps the measurement attached to intent |
| Bound a change | Editable paths, assumptions, and next missing outcome | Makes review and rollback tractable |
| Execute focused feedback | Actual command result and observed state | Separates a success claim from evidence |
| Inspect simplicity and omissions | Explanation, diff, and remaining gaps | Avoids optimising a metric at any cost |
| Follow existing integration process | Repository checks and release questions | Does not invent a private deployment recipe |

The fixed five-minute training budget in the ML artifact is not imported into this software task. Neither are GPU requirements, an overnight loop, or a directive to continue indefinitely. Those are properties of a particular experiment, not free-standing rules for all software development.

## Context and durable state

**Stated pattern.** The public LLM Wiki idea separates retained sources, derived knowledge, and a co-evolving schema, with ingest/query/lint operations. It describes both a proposed pattern and some personal interaction preferences; third-party implementations in gist comments are not his tools. [S06](sources.md#s06)

**Stated; personal note practice.** A separate March 2025 essay describes an append-and-review note for ideas and ongoing work. It is personal note-taking evidence, not an agent-memory architecture or application-persistence guarantee. [S10](sources.md#s10)

**Suggested adaptation.** Keep product intent, research evidence, and implementation progress distinct. A source file tells the next session what was inspected. A task note records what was tried. An executable check observes a particular behaviour. None automatically substitutes for the others.

For a reward change, a durable task record can contain the starting revision, six outcomes, relevant paths, last executed commands, and unresolved assumptions. It should not claim that an ID was safely recorded in production merely because the transcript says so. The application must retain that state through its own mechanism.

## Human understanding and review

**Stated in an endorsed AI-generated-and-checked account.** The April 2026 Sequoia page distinguishes professional agentic work from carefree experimentation, retains human responsibility for design and quality, and reports greater delegation after late 2025. Karpathy explicitly says the posted summary and cleaned transcript were AI-generated and checked by him. It is not a raw independently verified transcript. [S07](sources.md#s07)

**Suggested adaptation.** A reviewer should be able to explain the feature's invariant without relying on the model's assurance. They can use generated diagrams or walkthroughs, but should check those against the actual code and executed observations.

Reading every line and blindly accepting a large patch are not the only choices. Choose review depth based on the changed behaviour, the observation boundary, and consequences of failure. This is our proposed review strategy; the cache does not establish Karpathy's complete present checklist or approval system.

## Tools and setup

| Resource | Documented relationship | What the cache establishes | What it does not establish |
|---|---|---|---|
| autoresearch | Published research artifact | Pinned README and instructions were inspected | Runtime results in our environment or a general product release system |
| microgpt | Authored educational artifact | Public explanation and sample computation inspected | Production suitability or a universal one-file architecture |
| LLM Wiki | Published idea/pattern | Its source/derived/schema distinction is described | A complete private installed knowledge system |
| Claude Code and application orchestration | December 2025 commentary | A dated endorsement of computer-local agent interaction and application-specific context | A complete October 2026 daily tool inventory |
| Cursor/Claude in MenuGen | April 2025 self-report | A particular app-development account | A universal preferred host/model or repeatable productivity gain |
| Existing project runner and storage | Our adaptation | Use the target application's real tools | No new package or service is prescribed here |

The December review discusses application layers that organise context and interaction; it is commentary, not evidence that Karpathy implemented every named app or that his preferences never changed. [S08](sources.md#s08)

The April 2025 MenuGen account describes prototype-to-deployment work, stale API knowledge, and external-service friction. It is a dated personal project report, not a complete current CI, rollback, or review policy. [S09](sources.md#s09)

No installation was performed. The autoresearch README's broad-permission suggestion is recorded as a property of its experimental instructions, not recommended for an ordinary product checkout. Instructional edit restrictions are not demonstrated filesystem protections.

## Reusable working prompts

The [worked feature](workflow.md#reusable-prompts) includes original inspection, experiment, and review prompts. They are **suggested adaptations**, not recovered private prompts. They deliberately avoid copying the ML artifact's indefinite-loop instruction or treating a product feature as a validation-loss competition.

An effective prompt cannot supply absent environment permissions, missing evaluator trust, or a correct business rule by itself. Ask the implementer to report the actual result and failure path, and inspect changes to the checks as carefully as changes to production code.

## Failure modes and limits

| Failure | Why the apparent success is misleading | Proposed response |
|---|---|---|
| Same final balance, wrong history | Lost state followed by re-award still produces 10 | Read immediately after restart, before replay |
| Editable evaluator | Candidate code weakens the rule it is graded against | Review or enforce evaluator ownership separately |
| Optimising one number | Better validation loss is not every product property | Name omitted requirements and use relevant independent checks |
| Historical setup treated as permanent | Earlier tool commentary becomes a fabricated current stack | Retain practice dates and access scope |
| Neural-network recipe becomes agent dogma | ML debugging advice is presented as a prescribed coding loop | State the engineering subject explicitly |
| Gist comments become author claims | Other people's products are added to his inventory | Attribute the document and comments separately |
| AI-edited summary becomes verbatim transcript | A cleaned publication erases provenance and speaker differences | Keep the author's endorsement and editing disclosure attached |
| Automatic resumption becomes correctness | A task note faithfully resumes a mistaken objective | Review intent and the objective independently |

These are our analysis of how the material can be misapplied. They do not establish a universal failure rate or a measured comparison against another engineer.

## First practical lab

Use the [fixed reward task](workflow.md#shared-task). Record a baseline, a reviewed outcome table, one bounded change, actual observations after restart, and a concise explanation of the durable state transition. Review whether any measurement can be satisfied by an unintended implementation.

Optional model-quality exercises must stay separate. A deterministic reward test does not evaluate a language model's responses, retrieval quality, training generalisation, or an autonomous research organisation.

## Comparison profile

The [C01–C12 entries](index.md#comparison-evidence) retain these boundaries: D04/D07/D11 describe inspected ML experiment instructions; D08 describes a knowledge pattern; D09 contains dated tool commentary; D10 does not claim a private pipeline. D12 is our inference about evaluation scope and tradeoffs, not a controlled effectiveness result.

## Sources and research gaps

See the [source register](sources.md) for ten inspected primary/publication artifacts and one inaccessible lead. The original Software 3.0 Latent Space page is currently subscription-gated; only its public heading/byline and access boundary were inspected. It does not support claims about unseen talk content. The original talk was not independently watched in full.

The pin for autoresearch is `228791fb499afffb54b46200aca536f79142f117`, dated 26 March 2026. A complete current private model, orchestration, memory, security, integration, and release setup remains unestablished. No source's reported output or experiment count is adopted as a universal productivity result.
