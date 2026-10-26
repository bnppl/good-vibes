---
title: David Heinemeier Hansson — detailed research
parent: David Heinemeier Hansson
nav_order: 1
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
---

> **Scope update — 26 October 2026:** Start with [recent AI evidence](recent-ai.md). The material below retains earlier principles, dated reports and our optional adaptations. It must not be read as a complete current personal AI workflow.

# David Heinemeier Hansson — a dated, changing approach

[Profile](index.md) · [Worked reward feature](workflow.md) · [Source findings](sources.md) · [Slide notes](slides.md)

## Approach in brief

**Stated.** On 6 October 2026 DHH argues that programmers should embrace agent-written code, presenting the shift as an economic and professional forecast. That is advocacy, not a controlled productivity result. [S06](sources.md#s06)

**Our synthesis:** this profile is most useful as a chronology of changing judgment about programming, tools, testing, and product usefulness. It would be misleading to assemble statements from different years into one timeless “DHH method.” The detailed task below is our adaptation; no inspected source shows him implementing it.

Research checked and cut off on **26 October 2026**. Only public authored articles were inspected. Private sessions, paid books, present company policies, exact installed versions, and a complete current personal harness configuration were not accessed.

## Techniques and principles

### Keep the timeline attached

In May 2025 he describes enjoying hand-written Ruby while using LLMs conversationally. The January 2026 account instead reports supervised agent delegation. August's essay expresses enthusiasm for rapidly exploring ideas, and October's argument is stronger still. These dates belong to the claims. [S01](sources.md#s01) · [S02](sources.md#s02) · [S05](sources.md#s05) · [S06](sources.md#s06)

**Suggested adaptation.** When adopting an engineer's advice, record the task, tool generation, and observation date alongside it. A preference formed during autocomplete usage need not predict how someone uses terminal agents a year later. A later enthusiastic essay also does not retroactively demonstrate that every earlier limitation disappeared.

For a team, a practical adoption note might contain: current problem; proposed change; evidence motivating it; conditions under which the change should be reconsidered. This is our decision aid, not a recovered DHH template.

### Test for confidence without conflating eras

His April 2014 TDD essay rejects a universal test-first design rule while valuing regression testing. It then favours more system coverage. The latter preference must not be treated as his final position. [S07](sources.md#s07)

In May 2024 he reports disappointing browser-suite returns, keeps smoke coverage, and favours model/controller checks for business logic, with human interaction for UI confidence. No complete 2026 agent testing cadence follows from that account. [S09](sources.md#s09)

**Suggested adaptation.** Choose a check according to the failure it can observe. A reward-persistence test needs to replace transient runtime state while retaining durable data. It does not need a browser merely because the product has a screen. Conversely, a storage-level check alone says little about whether a user-facing button invokes the right action. If that wiring matters to the target project, name the additional check separately.

Do not infer “no tests” from opposition to one testing doctrine. Do not infer “system tests only” from the 2014 essay, or “remove every browser test” from the 2024 one. Neither inference respects the inspected material.

### Judge an abstraction by what it clarifies

His April 2014 design essay criticises indirection added solely to make isolated tests easier. It is contextual Rails/MVC criticism, not a prohibition on every boundary or interface. [S08](sources.md#s08)

**Suggested adaptation.** Before extracting a reward repository or policy object, identify the responsibility that becomes clearer. A useful boundary might separate an external service from deterministic reward rules. A useless boundary might simply forward every call while adding names that obscure where the state changes. The existence of a mockable interface does not settle that judgment.

In a review, trace one submission through the actual code: identity received, prior acceptance checked, balance changed, outcome stored, success returned. If the structure helps explain that path and foreseeable changes, it has an intelligible purpose. This is our review procedure rather than a claim about DHH's current checklist.

### Distinguish technical possibility from a useful product

The March 2026 Basecamp article reports experiments that were not shipped because they were not sufficiently useful, alongside a launch of agent-accessible interfaces. [S04](sources.md#s04)

**Suggested adaptation.** Separate two questions: can an agent perform an operation, and should that operation become a product feature? In the reward exercise, adding a complicated operator dashboard may be technically possible without helping establish the agreed rule. Keep a working path and a clear reason for each additional capability.

The May Basecamp Five article emphasises its human communication purpose despite agent accessibility. This describes a product stance, not a private coding procedure. [S11](sources.md#s11)

## A feature from idea to release

No inspected source establishes one complete DHH sequence spanning requirement capture, implementation, verification, integration, and production release. The [worked feature](workflow.md) therefore proposes a sequence and labels its assumptions explicitly.

| Proposed step | Output to inspect | What remains our choice |
|---|---|---|
| Establish the current path | Code/state map and baseline result | Which existing command and boundary to use |
| Agree observable behaviour | Six independent balance observations | Exact fixture implementation |
| Ask for one coherent change | Reviewable product diff | Increment size and internal algorithm |
| Inspect the result | Actual state and check output | Specific review checklist |
| Improve structure if warranted | Explainable responsibility boundaries | Whether any extraction earns its cost |
| Integrate through existing process | Normal project checks and release decision | CI provider, approvals, deployment and rollback |

Calling this “DHH-informed” does not make the proposed prompts his words or the example his personal practice. The same accepted outcomes are used for other profiles; no extra network, UI, concurrency, or performance requirement is assigned only here.

## Tools and setup

The January account reports OpenCode use; it does not publish an immutable installed revision. March announces a team-provided Basecamp API/CLI/skill, not a claim that DHH personally wrote every component. [S02](sources.md#s02) · [S04](sources.md#s04)

| Tool or mechanism | Established relationship | Setup status and boundary |
|---|---|---|
| OpenCode | January 2026 personal-use report | No current installed version or model settings verified |
| OpenClaw with Proxmox | February personal experiment | One isolated assistant experiment, not every coding session |
| Basecamp API, CLI, and skill | March 37signals product announcement | Team artifact; implementation and commands not inspected |
| Rails/Ruby testing mechanisms | Historical authored guidance | Do not copy 2014 package/version choices into a current app |
| ONCE | March product announcement | Hosting capability is not a documented personal agent release gate |
| Existing project tools | Our proposed exercise | Discover the actual runner and persistence mechanism |

ONCE's March article describes hosting, upgrades, and backups. Those product capabilities do not establish his current branch policy, review gate, or private production configuration. [S12](sources.md#s12)

No installation command is offered: this study inspected authored descriptions, not the current tool repositories or onboarding instructions. Nothing was installed or executed. Follow the target project's existing setup rather than recreating a historical workstation.

## Human understanding and review

The January report describes reviewing outcomes and guiding agents when needed, with quality and cohesion limiting what he accepted then. Its review granularity is not a complete current checklist. [S02](sources.md#s02)

**Suggested adaptation.** Ask for evidence sufficient to own the result. For this task, explain how the reward and accepted submission identity remain consistent across a runtime restart. Inspect changes to expected values, fixtures, and configuration, not only the implementation. A polished completion summary can still omit the condition the exercise is designed to test.

## Context and durable state

The February OpenClaw account describes an assistant with persistent operation; March's product article discusses filesystem-based continuity. Neither establishes a universal private coding-memory design. [S03](sources.md#s03) · [S04](sources.md#s04)

**Suggested adaptation.** Keep a compact handoff with the agreed rule, observed state, exact commands, important decisions, and remaining uncertainty. Distinguish it from product persistence: a note that A was processed is not the application's durable record. If chat history disappears, the next session should still be able to inspect the actual state and repeat the required checks.

## Boundaries and safeguards

In February he reports isolating an OpenClaw experiment in a Proxmox VM away from personal data and logins. That is a concrete self-report, not an audited or comprehensive coding-agent permission policy. [S03](sources.md#s03)

**Suggested adaptation.** Review the capabilities the target task genuinely needs. A local reward change need not access personal mail, arbitrary accounts, or production credentials. Ensure tests use isolated data. These suggested constraints do not imply that the historical VM setup enforces every tool path, or that DHH follows our proposed controls.

His June open-source essay argues for participation by agent-assisted contributors. That stance does not define a complete maintainer review policy or establish that every generated contribution should be accepted. [S10](sources.md#s10)

## Evaluation and tradeoffs

The useful questions in our synthesis are whether a result meets the need, remains understandable, and earns its operational and review cost. The March/May product accounts and August enthusiasm provide different evidence: product decisions and personal experience, rather than matched outcome trials. [S04](sources.md#s04) · [S05](sources.md#s05) · [S11](sources.md#s11)

**Suggested adaptation.** Record rejected work and rework as well as accepted output. A model that generates a larger patch may impose a larger review burden; a slower attempt may fit the existing code better. A task ledger should include the starting revision, agreed checks, elapsed work including review, defects found, and unresolved limitations. None of the public accounts supplies a controlled ranking for this shared task.

## Reusable working prompts

Use [the original prompts in the worked feature](workflow.md#reusable-working-prompts). They are adaptations written for this guide. The cache does not establish a canonical public DHH prompt, agent team topology, or current model-routing rule.

## Failure modes and limits

| Misreading | Why it fails | Correction |
|---|---|---|
| DHH permanently rejects agents | Treats May 2025 as timeless | Read the January and October 2026 positions with dates |
| DHH opposes automated testing | Confuses opposition to a universal cadence with test avoidance | Distinguish regression, model, controller, browser, and human checks |
| His current policy is the 2014 system-test emphasis | Ignores the 2024 account | Retain the change and the project context |
| Every team product is his private setup | Confuses product authorship, use and ownership | Keep announced capability separate from demonstrated personal configuration |
| Isolation proves security | Treats a self-report as an audit | Inspect the target environment's actual capabilities |
| Strong economic predictions prove measured gains | Confuses advocacy with outcome evidence | Run a matched local experiment if that comparison is required |

## First practical lab

Use the [common reward exercise](workflow.md#first-practical-lab). Keep the initial code, environment, and six observations fixed if comparing approaches. Produce a baseline, reviewed diff, actual check results, and a short explanation of durable state. The exercise is not a requirement to adopt Rails or DHH's reported tools.

## Comparison profile

The [C01–C12 entries](index.md#comparison-evidence) use the common dimensions. Requirements format, exact increment cadence, and a complete current release policy remain unknown rather than filled with borrowed best practices. Testing and delegation fields retain the dates that materially change interpretation.

## Sources and research gaps

The [twelve source records](sources.md) retain publication dates, findings, inspected scope, and limitations. No full external article is archived. Linked talks and repositories were not used to infer details that their inspected article did not establish. No private configuration, current full testing policy, or head-to-head implementation outcome was established.
