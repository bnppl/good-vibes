---
title: Charity Majors — detailed research
parent: Charity Majors
nav_order: 1
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
---

> **Scope update — 26 October 2026:** Start with [recent AI evidence](recent-ai.md). The material below retains earlier principles, dated reports and our optional adaptations. It must not be read as a complete current personal AI workflow.

# Charity Majors — connect intent to operational reality

[Profile](index.md) · [Common reward workflow](workflow.md) · [Source findings](sources.md) · [Slide notes](slides.md)

## Approach in brief

**Stated.** Majors's March 2026 article makes operational feedback part of development, alongside pre-production checks. [S02](sources.md#s02)

**Inferred synthesis.** Her distinctive contribution to this collection is an operational and organisational lens on AI-assisted engineering. That differs from a documented personal coding-agent recipe. A team can generate a plausible patch quickly while transferring understanding, reliability, and attention costs to other people. This guide therefore asks what the changed system does and who will maintain it, without inventing her private commands or agent topology.

Scope: public material checked on **26 October 2026**, with that date as cutoff. Historical engineering advice, current advocacy, team documents, and our adaptations stay distinct. No private Honeycomb configuration or paid book body was accessed.

## Techniques and principles

### Production feedback belongs in development

**Stated — C01/C10.** Her recommendation connects intent with observed outcomes; it does not discard pre-production checks. [S02](sources.md#s02)

**Suggested adaptation.** For the common reward feature, separate two questions. First, does the implementation satisfy the fixed local contract? Second, when the real product is deployed through its normal process, can its owner understand whether that behaviour is actually occurring? The first is required by our exercise. The second is an optional operational extension, applied consistently if a later comparison includes production. Do not add a deployment requirement to this profile alone.

A useful diagnostic record would relate the received submission identity to its accepted/replayed outcome and the observed state transition. It should help explain a result without becoming a new source of truth. A log message that says “awarded” cannot substitute for observing the balance or retained identity record. This record design is our proposal, not her published schema.

### Keep commitments outside one person's head

**Stated — C02/C05.** The June discipline essay considers making behavioural commitments more explicit and discusses regeneration ideas while crediting Chad Fowler. It explicitly rejects the interpretation that everyone should immediately abandon review and ship unread code. [S01](sources.md#s01)

**Suggested adaptation.** Write the six reward observations in a form another person can inspect. Preserve the distinction between desired behaviour, observed legacy behaviour, and a proposed design. For example, an existing implementation might reward once per process; the agreed rule rewards once per submission ID across restart. The former is an observation to investigate, not permission to weaken the latter.

A requirements table alone does not make replacement safe. The team still needs executable observations of the relevant boundary, a clear success condition, and enough understanding to detect a test that simply agrees with the implementation. We do not infer a mandate to regenerate a codebase or a universal refactoring cadence from Majors's discussion.

### Observe detailed events, then ask questions

**Stated — C08/C09.** Her August 2024 observability account favours wide structured events, preserved relationships, and exploratory querying over relying solely on preselected aggregates. This is her technical framing, not a neutral certification of every vendor. [S03](sources.md#s03)

**Suggested adaptation.** Start by listing the questions the reward owner will need to answer. Was this A new or replayed? Which runtime processed it? What persisted state was observed after restart? Use the target system's existing instrumentation where it can answer those questions. Add only the missing context that has a concrete diagnostic purpose.

Avoid collecting unrelated user data merely because an event format permits arbitrary fields. Do not log credentials, full private payloads, or unnecessary identifiers. These data-minimisation choices are our implementation guidance; the inspected sources do not establish her complete personal logging policy.

### Treat adoption as funded learning

**Stated — C03.** Her July 2026 mandate article argues that a coordinated technology change requires resources, explicit tradeoffs, and a way to recognise success. It does not claim every team always needs a mandate. [S05](sources.md#s05)

**Suggested adaptation.** If a team tries this workflow, decide what work is being displaced while it learns. Keep the first exercise small enough to review: one existing path, a fixed behaviour table, and a visible change. Record investigation, review and cleanup time alongside generation. Otherwise the team can report faster patch production while spending more time restoring confidence.

### Let the people with costs inform the experiment

**Stated — C12.** The June enthusiasts/skeptics essay asks teams to discuss both benefits and downstream costs. Its opening story is explicitly a composite, not a claim about an identified single talk or company. Reported results from another organisation remain that organisation's results. [S04](sources.md#s04)

**Stated.** In September, Majors describes opt-in listening sessions as part of learning what was frustrating people before publishing AI norms. Cat Hicks's response remains Hicks's work. [S07](sources.md#s07)

**Suggested adaptation.** After the reward exercise, ask the implementer, reviewer, and likely maintainer different questions. What accelerated? What became harder to explain? What did the next person have to recover? One task can provide a useful learning record, but it cannot establish a general productivity effect or a ranking of engineers.

## A feature from idea to release

No inspected source demonstrates Majors implementing this exact reward task with a particular agent. The [worked feature](workflow.md) is original guidance informed by the cache.

| Proposed activity | Output to inspect | Why it belongs in this exercise |
|---|---|---|
| Inspect the starting system | Entry point, identity handling, durable state, baseline | Establish actual behaviour before rewriting it |
| Agree the six observations | A small acceptance table | Keep intended outcomes visible |
| Make one bounded change | Reviewable product and test diff | Locate mistakes while the context is manageable |
| Observe real state | Balance and replay evidence at the actual boundary | Avoid accepting a copied model inside the test |
| Review the result | Explanation, commands and remaining gaps | Keep ownership of the artifact |
| Integrate normally | Existing project checks | Do not invent private release rules |
| Optionally extend the operational loop | A scoped telemetry or deployment observation | Separate the common contract from real-product follow-up |

A successful local lab is not approval to deploy. Her operational recommendations do not establish a personal CI provider, merge policy, rollback implementation, or permission configuration. Those gaps remain visible in the comparison fields.

## Tools and setup

| Resource | What the evidence establishes | What it does not establish |
|---|---|---|
| Honeycomb and structured-event exploration | Named in her observability argument and company context, S03 | A mandatory vendor or full personal installation |
| Traces, behavioural checks, capture/replay and rollout feedback | Techniques discussed in her engineering writing, S01/S02 | An installed all-purpose harness or verified automated release gate |
| AI-assisted engineering at Honeycomb | Organisational direction; part 2 publishes Emily Nakashima's engineering note, S08 | Every detail as Majors's own personal agent setup |
| Company AI norms and values | Published ownership and communication principles, S06 | A complete technical security policy |
| Existing runner and supported interface | Our suggested tools for the common task | An attributed preference for a particular test library |

No packages or plugins were installed. No copied installation recipe is supplied because the sources do not establish a canonical personal toolchain. Before adopting a concrete product, inspect its current official documentation and fit it to the target system.

## Human understanding and review

**Stated — C06.** The September company values document makes the person responsible for their work. It distinguishes prose-artifact review from software validation and describes unread merging as something earned through safeguards, not a default badge. [S06](sources.md#s06)

**Suggested adaptation.** A reviewer should understand the contract and inspect evidence appropriate to the change. An AI-written explanation can help orientation, but it cannot grant itself acceptance. Trace an incoming ID to the state it changes and the success response. Check whether tests, fixtures, and configuration changed together in a way that hides the bug.

This is compatible with using automated checks extensively. It does not imply that a human is an infallible validator or that every line must always receive the same kind of review.

## Agent autonomy and safeguards

**Not established — C07/C11.** The inspected material does not establish a complete current personal agent topology, model-routing arrangement, permissions policy, protected-test scheme, or budget policy.

The September engineering FAQ is especially easy to misattribute. Majors introduces an Emily Nakashima note; the note's organisational goals and discussion of agent patterns are not a direct description of Majors's personal setup. Its targets are not achieved outcomes verified by this research. [S08](sources.md#s08)

**Suggested adaptation.** Give the reward implementer only the access the task requires. Keep the expected outcomes inspectable and call out changes to them. Use the project's real controls for consequential actions. A prompt saying “do not alter the test” is an instruction, not an access boundary.

## Evaluation and tradeoffs

**Stated.** Her 2020 productivity article warns against reducing creative work to individual activity markers and favours team outcomes, health, and informed judgment. That is historical management advice, not a current agent benchmark. [S09](sources.md#s09)

For this exercise, our proposed evidence bundle contains the agreed observations, implementation diff, executed checks, remaining gaps, and review/rework effort. Evaluate the whole result. Do not turn merged-PR counts, token usage, or time spent prompting into a sufficient measure of product value.

## Failure modes and limits

| Failure | What it might look like in the reward task | Proposed response |
|---|---|---|
| Production rhetoric replaces local correctness | A dashboard exists, but replay adds points | Check actual contract outcomes first |
| Telemetry replaces application state | Test asserts a log message instead of the balance | Observe state through a real boundary |
| Operational extension changes the comparison | Only this profile must deploy to a live service | Keep that extension optional and separately scoped |
| A team document becomes a personal claim | Emily's FAQ is presented as Majors's private topology | Keep the author and organisational scope visible |
| Costs are transferred | A fast patch creates long reviewer cleanup | Record who incurs the work, not only who generates code |
| Missing policy becomes an invented tool | A sandbox or model is added to complete the table | Leave the field unknown and label our adaptation |

These responses are proposed guidance. Neither a public essay nor one lab establishes universal effectiveness.

## Reusable working prompts

The [workflow prompts](workflow.md#reusable-prompts) ask for inspection, visible assumptions, a bounded implementation, and a complete evidence bundle. They are original adaptations, not recovered personal prompts.

## First practical lab

Use the [common reward lab](workflow.md#first-practical-lab). Keep the baseline, six separate observations, a reviewed diff, actual checks, and a short account of costs and remaining uncertainty. Optional operational follow-up must not silently change the common task.

## Comparison profile

[C01–C12](index.md#comparison-evidence) answer the shared D01–D12 questions. Read the operational emphasis as a documented viewpoint. It is not proof of a complete personal coding workflow or a disagreement with every test-first approach.

## Sources and research gaps

The [nine-record source register](sources.md) records publication dates, inspected scope, findings and claim mappings. No paid books or private configurations were accessed. Authored essays support the positions; a company note introduced by Majors retains its original authorship. Full personal setup, runtime reproduction, and comparative effectiveness remain unestablished.
