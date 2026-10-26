---
title: Gene Kim — detailed research
parent: Gene Kim
nav_order: 1
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
---

# Gene Kim — detailed research

[Profile](index.md) · [Worked reward feature](workflow.md) · [Source findings](sources.md) · [Slide notes](slides.md)

## 1. Approach in brief

**Stated, with attribution limits.** Kim's public material puts engineering feedback around conversational development, and treats delegation as a skill rather than an excuse to abandon responsibility. The strongest personal evidence is his dated project accounts; the broader prescriptions are often coauthored with Steve Yegge. Keep those categories separate. [S01](sources.md#s01) · [S09](sources.md#s09).

This research was checked on **26 October 2026**. Its most substantial inspected first-person interview was published in January 2026; most detailed written examples are from 2025. This does not establish his exact current private configuration. The research cutoff is an evidence horizon, not a claim that every tool description is current to that day.

The practical question for this profile is: **how can a human create a development system in which delegation produces useful results and mistakes become visible soon enough to correct?** That question guides our proposed application; it is not a quotation or a named method Kim published in this form.

## 2. Techniques and principles

### Calibrate pairing and delegation

Kim's solo March 2025 article places interactive pairing and hands-off delegation on a spectrum. Delegation depends on task familiarity, demonstrated capability, skills, and consequences. It does not prescribe the same autonomy for every job. [S01](sources.md#s01).

**Suggested adaptation:** classify the next change, not the whole project. A known formatting operation and a persistent reward-state change have different failure costs. Record the missing knowledge that requires a checkpoint; relax supervision only after observing suitable evidence on the actual task.

### State outcomes and let conversation refine them

The jointly authored *Key Vibe Coding Practices* excerpt emphasises concrete requirements, relevant context, and clarification when the assistant diverges. A reviewed plan can form part of that initial direction. These are joint recommendations, not proof of Gene's universal personal prompt template. [S06](sources.md#s06).

**Suggested adaptation:** turn a vague request into a table of observations. Ask what is still ambiguous before the implementer chooses a storage rule. Conversation can reveal requirements, but a long conversation is not durable evidence that the final program satisfies them.

### Make feedback part of the working environment

Kim's Google Docs add-on account describes investing in a shorter push/reload cycle and more accessible error output, rather than merely generating code faster. He reports both visual checking for simpler output and tests where needed. Its technical account is dated; do not reuse its historical Apps Script assumptions as current platform documentation. [S02](sources.md#s02).

**Suggested adaptation:** measure the time from an agent action to an interpretable result. A fast assertion nobody can locate is poor feedback. Put the relevant command and its observable result in the task record. Speed up the slowest useful check without replacing a real integration with a fake.

### Use architecture to make categories of mistakes testable

In the Trello architecture article, Kim reports asking Claude Code for a plan to improve testability, including consistent access to data and separation of logic from UI handling. Some changes are described as intended future work. A recommendation in that account is not evidence that every refactor was completed. [S03](sources.md#s03).

**Suggested adaptation:** identify one coupling that prevents a meaningful check, then establish a seam with a small change. Avoid a wholesale redesign whose only justification is that an agent proposed it. For the common task, the reward rule and durable state must remain observable even if their internal structure changes.

### Keep the loop small and verify before accepting

The joint *Vibe Coding Loop* excerpt moves from a clear objective through decomposition and conversation to review, testing, refinement, and workflow automation. It explicitly recommends establishing tests and expectations before code generation. This supports a recommendation about test-first work, not a claim that Kim follows strict unit-level red–green–refactor for every edit. [S04](sources.md#s04).

**Suggested adaptation:** use the smallest check that exposes the next missing behaviour, and retain the contract while fixing it. Tests of the core rule, actual persistence, and workflow wiring cover different risks. A documentation change needs appropriate direct verification rather than ceremonial new tests.

### Treat coordination as architecture

The jointly authored *Head Chef* excerpt distinguishes the work, the tools, and how the work is partitioned and integrated. It discusses agent roles, shared documents, task decomposition, and planned merging as emerging patterns. This is published joint guidance; it does not establish a particular Gene-operated swarm or current orchestration product. [S07](sources.md#s07).

**Suggested adaptation:** before adding another implementer, name its writable scope, required inputs, output contract, and integration owner. If two agents need to rewrite the same reward entry point, sequential work may be simpler than concurrent patching. Compare coordination and review cost with the benefit of parallelism.

### Evaluate more than generated volume

Kim's June 2025 account publishes prompts and commit-associated output from a manuscript-tool project, and makes large speed claims against his historical activity. That is a personal retrospective with a particular tool, task, and comparison basis—not a controlled result or a prediction for this reward feature. It also records a discrepancy between agent-side and local test results. [S08](sources.md#s08).

The joint *Essential Skills* excerpt argues that quicker generation increases the importance of frequent feedback and modularity. Its links to earlier DevOps research must not be converted into a causal experiment about present coding agents. [S05](sources.md#s05).

**Suggested adaptation:** measure time to a reviewed, working outcome, along with rework and failed checks. Treat output volume as workload created, not automatically value delivered. The benchmark is your own reproducible starting state and agreed result.

## 3. A feature from idea to release

The cache supports a general loop and some personal examples, not a single complete production recipe:

| Stage | What the evidence supports | What remains open |
|---|---|---|
| Identify an outcome | Personal tools solve specific work friction; joint guidance asks for clear outcomes | A universal requirements template |
| Choose interaction | Pair or delegate according to novelty and risk [S01](sources.md#s01) | A numerical autonomy threshold |
| Plan and divide | Review a proposed plan, use manageable tasks [S04](sources.md#s04) | Fixed task sizes or mandatory agent counts |
| Build feedback | Improve observability of errors and execution [S02](sources.md#s02) | A current complete harness configuration |
| Implement and revise | Conversation and testable design changes [S03](sources.md#s03) | Mandatory internal design or test framework |
| Accept and operate | Human accountability remains in Kim's interview [S09](sources.md#s09) | His full present release, rollback, and access policy |

The separate [worked feature](workflow.md) fills those engineering choices in explicitly as **our suggested adaptation**. It does not reconstruct an unobserved session by Kim.

## 4. Tools and setup

| Tool or artifact | Relationship and evidence | Current setup status |
|---|---|---|
| Claude Code | Kim reports using it for Trello and manuscript tooling [S03](sources.md#s03), [S08](sources.md#s08) | Historical personal use; full current configuration unknown |
| Augment Code | Reported in the March add-on project [S02](sources.md#s02) | Historical use, not a universal recommendation |
| Google Apps Script and CLASP | Part of that add-on's local edit/deployment loop [S02](sources.md#s02) | Do not transplant dated platform details without current docs |
| Clojure | Language in the manuscript-tool report [S08](sources.md#s08) | Evidence of that project, not a requirement for this method |
| Shared plans/documents and agent roles | Joint orchestration guidance [S07](sources.md#s07) | No canonical product installation established |
| Public workshop dataset gist | Artifact published under Kim's account [S10](sources.md#s10) | Workshop material; linked datasets were not independently validated |
| Existing runner and version control | Our choice for the common lab | Discover commands and conventions in the actual target repository |

No tool was installed, and no setup command is offered as a verified current Kim configuration. His private model selection, credentials, instruction files, hooks, sandbox, and hosting arrangements are not established.

## 5. Reusable working prompts

The [workflow chapter](workflow.md#original-working-prompts) contains original prompts for inspection, calibrated delegation, implementation, and acceptance. They are proposed applications, not prompts copied from Kim's book or private sessions. For historical examples of actual published requests, inspect the relevant original accounts directly; this cache preserves findings rather than reproducing their prompt logs.

## 6. Failure modes and limits

| Failure | Concrete warning sign in the common exercise | Proposed response |
|---|---|---|
| Trust without evidence | “Finished” is accepted without balance observations | Re-run the agreed checks against the changed system |
| Reward rule only in memory | Replay works until the runtime restarts | Observe balance immediately after restart, before any new delivery |
| Correlated verification | Agent changes expected balance to fit its code | Inspect assertion and fixture changes independently |
| Too much scope | Reward change expands into transport and UI work | Return to the agreed boundary and isolate optional work |
| Parallel contention | Separate agents edit the same persistence path | Assign one owner or explicitly sequence the integration |
| Environment mismatch | Agent-side tests pass; normal project command fails | Preserve the real invocation, dependencies, and result |
| Historical tool fixation | A dated article is treated as today's installation guide | Check current tool docs before using it operationally |

Kim's January interview describes human responsibility and failures of generated work. These are self-reported cautions, not an experimentally measured failure rate. [S09](sources.md#s09).

The joint culture excerpt moves the discussion to adoption and organisational change. It is not evidence that every organisation will benefit or that a single metric can justify adoption. [S11](sources.md#s11).

Unknowns remain useful: the cache does not establish a complete current personal release policy, security model, durable-memory protocol, or a universal advantage over another engineer's approach. Do not turn those gaps into claims that he rejects such practices.

## 7. First practical lab

Run the [common reward lab](workflow.md#first-practical-lab) once with a reproducible starting state. Keep the example table, observed failures, reviewed diff, check output, and unresolved risks. Repeat with an alternative workflow only if inputs and success criteria are held constant. This is proposed learning practice, not an empirical benchmark.

## 8. Comparison profile

The stable [C01–C12 entries](index.md#comparison-evidence) map to D01–D12. For this person, several positions are joint Kim/Yegge recommendations or dated project reports. The matrix must retain those scope labels when compared with someone else's recent personal workflow.

## 9. Sources and research gaps

Read [source findings and access limits](sources.md). Public search extraction supplied the IT Revolution articles while direct page opens returned HTTP 403; the inspected source text and any narrower snippet scope are recorded. No paid book chapters were accessed. The complete book product page was inaccessible and is an unresolved lead, not supporting evidence for unseen content.
