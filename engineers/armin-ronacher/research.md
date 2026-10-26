---
title: Armin Ronacher — detailed research
parent: Armin Ronacher
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
nav_order: 1
---

> **Scope update — 26 October 2026:** Start with [recent AI evidence](recent-ai.md). The material below retains earlier principles, dated reports and our optional adaptations. It must not be read as a complete current personal AI workflow.

# Armin Ronacher — detailed research

**Scope:** software engineering with coding agents, from June 2025 to the 6 October 2026 Codemode article; research inspected on 26 October 2026. This profile records changing public practices rather than claiming to reproduce a complete current personal system.

[Profile and claims](index.md#comparison-evidence) · [Worked feature](workflow.md) · [Source register](sources.md) · [Slides](slides.md)

## Approach in brief

**Stated — C01.** Ronacher values being able to explain code he ships. In June 2026 he describes difficulties with hands-off generation of long-lived systems while acknowledging useful loop-based work in bounded domains. [S09](sources.md#s09)

**Our synthesis:** the interesting unit is the human–model–tool feedback system. A faster model helps little if its environment is confusing, its outputs become unreviewable, or an automation costs more attention than it saves. This interpretation connects the sources below; it is not a measured general result.

## Techniques and principles

### Make feedback practical

The June 2025 recommendations emphasise quick tools, useful errors, accessible logs, simplicity and ecosystem stability. His illustrated process-manager guard and log lookup show the sort of feedback an agent can consume. That article also describes a historical Claude Code setup. It must not be read as a current complete configuration. [S01](sources.md#s01)

**Suggested adaptation:** before adding a new orchestration layer, ask whether the existing test command runs reliably and whether a failed operation explains what happened. A deterministic wrapper with an explicit error is often easier to diagnose than another paragraph telling the model to be careful.

### Measure the helper, not its sophistication

The July 2025 retrospective favours recurring, demonstrably useful automation and repeated manual acceptance checks. These are informal heuristics. [S02](sources.md#s02)

**Suggested adaptation:** keep a small ledger of tasks, accepted results, rework, and maintenance effort. Delete or revise a helper that no longer earns its place. Do not mistake a catalogue of skills for evidence that they help.

### Explicitness has a review benefit

The February 2026 language essay argues that tooling, churn and visible information matter alongside training familiarity. Its language discussion is experiential, not a controlled benchmark. [S05](sources.md#s05)

**Suggested adaptation:** evaluate the existing project's friction before considering a rewrite. Record startup time, test duration, error clarity and the reviewer’s ability to trace state changes. A different language introduces migration cost and new unknowns; none is required by the common exercise.

## Requirements and planning

**Stated — C02/C03.** In December 2025 Ronacher describes clarifying questions and an editable Markdown handoff instead of relying on a special planning interface. His inspection concerns that product version. It does not establish current enforcement properties, a universal task size, or opposition to executable specifications. [S03](sources.md#s03)

A readable handoff can expose assumptions, but it cannot independently prove implementation correctness. Our proposed handoff for the shared example contains the exact reward rule, current code entry points, checks, unresolved questions and the next bounded change. Keep requirements distinct from a speculative design.

## Verification and design

**Stated — C04.** He reports test-generation dissatisfaction. A complete current testing cadence was not established; do not borrow one from another profile. [S02](sources.md#s02)

The July 2026 tool-schema investigation demonstrates why an apparently strong model can fail a particular integration. Ronacher reproduced history-dependent malformed calls and labels his proposed training explanation as a hypothesis. We do not promote that hypothesis to verified provider internals or transfer its observations into a general model ranking. [S10](sources.md#s10)

**Suggested adaptation:** when a reward check fails, separate product logic, runner setup, tool invocation and observation errors. Retain the actual failing invocation and a reproducible starting state. Testing a fresh isolated prompt is not equivalent to retesting the original session.

**Stated — C05.** His explicitness argument favours code whose meaning is easier to inspect. Our design application is to make identity handling and durable state transitions visible in the changed path, not to add defensive scaffolding around an unclear rule. [S05](sources.md#s05)

## Human role and coordination

**Stated — C06.** The May 2026 accountability essay assigns responsibility to the person or organisation deploying the machinery. That establishes a position on ownership, not a universal review checklist. [S08](sources.md#s08)

**Stated — C07.** His June account keeps human comprehension important and treats bounded mechanical transformations, research and experiments differently from code intended to live. The opening quotation about no longer prompting Claude belongs to Boris Cherny, not Ronacher. [S09](sources.md#s09)

In September he publishes a deliberately hands-off factory experiment that disappointed him on a demanding interpreter task. That is evidence of an experiment and its reported outcome, not proof that all long-running agents fail or that comparable users would see the same result. [S11](sources.md#s11)

**Suggested adaptation:** isolate read-only investigations if they can run independently. Keep one owner of the final reward implementation and acceptance evidence. Introducing parallel writers to a tiny shared state transition would change the exercise rather than demonstrate a fairer comparison.

## Context and durable state

**Stated — C08.** January’s Pi article describes local task records, session trees and branch-based review context. It also distinguishes a multi-agent control extension he was experimenting with from one he actively used. [S04](sources.md#s04)

His April Absurd account reports checkpointed workflows and operational inspection. This is useful evidence of related infrastructure work, but it does not prove that every coding session uses Absurd. [S07](sources.md#s07)

**Suggested adaptation:** keep a concise task note with intent, decisions, exact commands, current result and remaining uncertainty. Do not confuse durable agent notes with durable application data. A transcript saying “A was rewarded” does not make replay protection survive a process restart.

## Tools and setup

**Stated — C09.** The public chronology matters: June 2025 discusses Claude Code; January 2026 reports Pi use and a then-minimal extension-oriented architecture; October describes Pi 1.0 Codemode and MCP integration. January’s “no built-in MCP” description is historical, not a current prohibition. [S01](sources.md#s01), [S04](sources.md#s04), [S12](sources.md#s12)

| Resource | Relationship established | Useful role | Setup status |
|---|---|---|---|
| Claude Code | Historical self-report, June 2025 | Coding assistant in that account | No installation performed; current settings unknown |
| Pi | January personal-use report; October architecture account | Agent and extensible session environment | No immutable installed revision captured |
| Custom Pi extensions | Authored descriptions of todos, review and experiments | Personal interaction/context helpers | Linked repositories not inspected; no copied installation recipe |
| Codemode / MCP | October authored explanation with session examples | Compose harness-side calls and discover tools progressively | Article inspected; not a claim about every installed release |
| Absurd / absurdctl | Related production account | Checkpoint state and operational inspection | No requirement to add it to the reward exercise |
| Existing project runner | Our suggested adaptation | Check required reward behaviour | Discover and reuse the real project's command |

October’s Codemode account distinguishes execution environments and retains unresolved durability limits. [S12](sources.md#s12)

## Integration and release

**Not established — C10.** The inspected sources do not establish a complete current branch policy, mandatory release checks or deployment checklist for all of Ronacher’s coding work. Absurd’s production account cannot fill that gap. [S07](sources.md#s07)

**Suggested adaptation:** use the target repository’s existing integration process after reviewing the diff and checks. Treat a local success as scoped evidence, not release approval. Do not attribute this policy to Ronacher.

## Boundaries and safeguards

**Stated — C11.** The harness and execution environment have distinct trust boundaries. [S12](sources.md#s12)

June’s report of broad permissions is historical self-report, not a recommendation in this guide to grant access or disable protections. We did not establish his full current permission policy. [S01](sources.md#s01)

## Failure modes and limits

**Stated — C12.** July assesses automation informally. Later essays add sustained commitment and artifact-review costs. [S02](sources.md#s02), [S06](sources.md#s06), [S11](sources.md#s11)

| Risk | Concrete symptom in our reward exercise | Proposed response |
|---|---|---|
| Ambiguous intent | Agent chooses a different meaning of “same submission” | Resolve identity semantics before coding |
| Tool friction | Repeated runs fail before reaching the rule | Capture and fix the invocation/environment separately |
| Transient duplicate state | Replay works until restart | Replace the runtime while retaining real durable data |
| Self-confirming tests | Assertions reproduce implementation assumptions | Compare observed results with the independent outcome table |
| Unbounded autonomy | Repeated local patches obscure the invariant | Stop, inspect the transition and reduce scope |
| Over-engineering | A tiny rule triggers a new orchestration platform | Reuse the existing application boundary |
| Context drift | A stale note overrides a newer product decision | Date the handoff and identify authoritative requirements |

These responses are our adaptations. They do not establish how Ronacher would personally implement this feature.

## Reusable working prompts

The [worked workflow](workflow.md#reusable-prompts) provides original prompts for inspection, clarification, a bounded implementation and review. They are not quotations of his prompts. Do not install tool configurations from an old essay simply to imitate the surface of a workflow.

## First practical lab

Use [the common reward exercise](workflow.md#first-practical-lab). Keep its requirements and unknown starting assumptions identical across people. Success is observable behaviour plus an explanation of the implementation and its limits, not a claim that one engineer's approach wins.

## Comparison profile

The [cached C01–C12 entries](index.md#comparison-evidence) map to the shared D01–D12 dimensions. Statements, personal experiments, our proposed applications and unknowns are labelled separately. C10 remains unknown rather than borrowing an integration prescription from another person.

## Sources and research gaps

Read the [twelve-record source register](sources.md). No paid material or private sessions were accessed. Tool articles were inspected as authored evidence, not independently reproduced in a live installation. No complete current private stack, fixed test-first cadence, universal release gate, or controlled comparative productivity result was established. Source snapshots and immutable repository revisions were not archived.
