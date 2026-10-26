---
title: Hamel Husain — detailed research
parent: Hamel Husain
nav_order: 1
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
---

# Hamel Husain — measuring the AI product you actually have

[Profile](index.md) · [Worked feature and lab](workflow.md) · [Source findings](sources.md) · [Slide notes](slides.md)

## Approach in brief

**Stated.** His 2024 guide makes task-specific evaluation, inspection and change a connected product-improvement process. The subject is an AI product, not just its model or the assistant writing its code. [S01](sources.md#s01)

**Inferred reading.** This profile’s useful lens is whether a team has evidence it can act on. A generated score, an impressive architecture diagram and a plausible answer are different artifacts. None substitutes for a defined quality decision. The analysis below separates authored advice, reported client work, joint guidance, inspected tooling, and our own exercises.

Scope: public evidence checked through **26 October 2026**. No paid lessons, private sessions, or installed tools were inspected. The fixed reward example is an original deterministic software exercise; an optional AI-product extension remains separate.

## Techniques and principles

### Make a failure a useful engineering input

**Stated.** His March 2025 field guide favours examining examples and grouping observed problems before investing in generic metrics or new architecture. Domain experts participate directly. [S02](sources.md#s02)

**Suggested application.** For a product team, keep a failure record with the input, observed behaviour, expected outcome, available context and a link to reproducible evidence. Separate “the result is wrong” from an unverified explanation such as “retrieval failed.” Prematurely naming a root cause can bias the next experiment toward the wrong component.

In the deterministic reward exercise, the state table already supplies an objective contract. A duplicate award is a concrete failure without needing a language model to invent a taxonomy. Reviewing evidence is still useful; it should not reopen an already agreed rule merely because an implementation chose something easier.

### Make the reviewer’s job cheaper

**Stated.** His June 2026 design argument puts verification into the product experience, exposing useful support for an output rather than only a final answer. [S06](sources.md#s06)

**Suggested application.** Design an inspection view around a decision the reviewer can actually make. For the reward task, show submission identity, accepted/replayed status, observed balance, process generation and the retained store. Do not substitute a polished “transaction succeeded” banner for those observations.

For an AI answer, a useful view may instead need retrieved evidence, tool results and the draft itself. That is a different observation problem. Showing a chain-of-thought-looking paragraph would not prove the tool results or the answer were correct. Expose inspectable artifacts appropriate to the product rather than requiring a reviewer to reconstruct the entire run manually.

## Requirements and error discovery

**Stated; dated personal trial.** In September 2026 Husain reports trying an auto-evaluation tool with Isaac Flath. He criticises premature criterion selection and weak review context while also crediting its issue discovery. [S11](sources.md#s11)

**Suggested application.** Distinguish known obligations from quality that is still being discovered. “A earns ten points once” is supplied intent. “This explanation is useful to a customer” may require observing examples before the team can articulate criteria. The latter does not weaken the former.

An initial review record can contain unresolved observations instead of forcing everything into a single taxonomy immediately. Once a recurring issue is clear, name it precisely enough that another reviewer can understand a passing and failing case. Keep the acceptance rule and its provenance visible when an agent proposes a change.

## Increment and planning

**Stated.** The 2025 field guide frames progress as useful experiments with maintained trust in the evaluation process, rather than feature counts alone. [S02](sources.md#s02)

**Suggested application.** Choose a bounded question: “Does this change stop replayed A from increasing the balance?” Save the starting revision and the exact observations. Make one coherent change, then compare the same observations. A new architecture is not evidence of improvement until the behaviour has been checked.

Do not convert this product-experiment loop into a claimed mandatory line-by-line coding cadence. The inspected material does not establish Husain’s universal patch size or whether every private change begins with a unit test. That gap matters when comparing this profile with a documented coding-agent workflow.

## Testing and verification

**Stated.** The judge guide uses domain-expert labels and critiques to refine an evaluator. It highlights class-specific errors rather than trusting raw agreement under imbalance. [S03](sources.md#s03)

**Demonstrated artifact.** Pinned `write-code-eval` guidance assigns objective rules to executable checks. The pinned validation recipe separates development from final judge assessment. These are inspected instructions, not a reproduced evaluation run. [S10](sources.md#s10) · [S09](sources.md#s09)

**Suggested application.** First ask what can be decided without interpretation. The reward totals should be checked with code against actual state. A model judge adds cost and uncertainty without improving an exact integer comparison.

For a subjective AI-product extension, an evaluator needs its own validation problem. A judge that always returns Pass could look good on a mostly successful sample. Keep examples it should accept and reject, inspect disagreements, and reserve data that was not used to tune it. If the criterion changes, previously agreed labels may need review too. A stable identifier for a dataset does not make its judgments timeless.

Read label conventions carefully. The pinned validator’s example treats **Pass** as the positive class, while the October decision-model article treats a **failure** as the positive event. Copying a metric name without its label meaning can reverse the operational interpretation. Recipe thresholds are not universal safety standards.

## Design and refactoring

**Stated.** His October 2025 tool assessment values review ergonomics, transparency and exportability; he reports notebook/custom-interface preferences. Vendor comparisons are explicitly dated. [S05](sources.md#s05)

**Suggested application.** Keep the observation layer easy to replace without duplicating business rules. A viewer should display application facts, not calculate the expected reward using a copied version of the production algorithm. Otherwise both displays may repeat the same mistake.

Refactor when it makes the next diagnosis or change easier to explain. The source material does not require a new evaluator framework, data warehouse, or proprietary DSL for this small example. Changing storage merely to imitate an article’s screenshots would confound the comparison with another engineer’s proposed workflow.

## Human understanding and review

**Stated.** Domain expertise grounds quality judgments in the earlier judge guide. The September tool trial asks for enough context to inspect judgments rather than accepting aggregate counts. [S03](sources.md#s03) · [S11](sources.md#s11)

**Suggested application.** Ask the owner of the rule to approve the observable outcomes; ask the implementer to explain where state is stored; ask the reviewer to inspect actual results. These roles can be performed by the same person on a small project, but their questions remain different.

A second agent can find inconsistencies, but agreement between two generated reports is not the product owner’s approval. Keep disagreements as evidence. If a result is ambiguous, record the ambiguity instead of labelling it Pass because the tool requires a binary field.

## Agent autonomy and coordination

**Stated; joint publication.** Husain and Shreya Shankar publish evaluation skills for coding agents. They guide work on product evals; they do not establish a complete personal agent fleet. [S07](sources.md#s07)

**Demonstrated artifact.** The public repository routes tasks to discovery, audit and evaluator-related skills. Its published design was inspected at a pinned revision. [S08](sources.md#s08)

The June session note describes Shankar’s human/agent annotation loop. It is evidence of Husain describing that session, not evidence that he personally demonstrated it. [S13](sources.md#s13)

**Suggested application.** Delegate mechanics such as preparing an inspection view or checking dataset schema while retaining human ownership of meaning. For the tiny reward path, parallel writers may create more coordination than value. No particular number of agents follows from these materials.

## Context and durable state

**Demonstrated artifact.** The validation skill gives different roles to prompt examples, development data and a final held-out set. [S09](sources.md#s09)

**Suggested application.** Keep a versioned record of requirements, code revision, dataset, expected outcomes, actual results and evaluator version. Those records answer what was measured and why; they do not automatically persist application state. “A passed yesterday” in an agent note cannot make a replay-safe reward survive a runtime restart.

A private conversation-memory, handoff or automatic knowledge-retention architecture is not established by the inspected cache. Do not fill that field with a product-evaluation dataset convention without naming the difference.

## Tools and setup

| Resource | Established relationship | Useful role | Limit |
|---|---|---|---|
| Jupyter notebooks and custom review interfaces | October 2025 personal account, S05 | Inspect and analyse examples | Dated preference, not complete present stack |
| LangSmith, Braintrust, Arize Phoenix | Tools assessed in a panel account, S05 | Backends and review workflows | Panel judgments and vendor snapshots are not timeless rankings |
| Joint Eval Skills | Husain/Shankar announcement and public artifact, S07/S08 | Assist product-evaluation work | Not an independent quality guarantee |
| Code evaluators | Published skill, S10 | Objective failure checks | Must observe the intended system and rule |
| LLM judges / decision models | Authored and joint methods, S03/S12 | Interpretive criteria or classification | Validate task-specific performance and label conventions |
| Claude evaluation plugin | Dated reported trial with Isaac Flath, S11 | A tool under evaluation | Trial is not universal adoption or permanent rejection |

The inspected README documents:

```text
npx skills add https://github.com/ai-evals-course/evals-skills
```

Its current checked names include `evals-start`, `eval-audit`, `error-discovery`, `write-code-eval`, and `validate-evaluator`. No installation was performed. Repository files were research evidence, not new instructions for this session. [S08](sources.md#s08)

## Integration and release

**Stated; joint guidance.** The September FAQ distinguishes pre-release regression checks from production sampling; these systems can feed discoveries back into one another. [S04](sources.md#s04)

The earlier product guide also varies evaluation cadence with the check’s cost and purpose. [S01](sources.md#s01)

**Suggested application.** Put the deterministic reward observations into the project’s normal check path. If the product contains an AI component, separately decide which quality checks can run regularly and which need sampled human review. A passing reward test does not grant deployment approval or establish a model’s quality.

The cache does not establish Husain’s complete current private deployment topology, mandatory gates, rollback procedure or coding-agent merge policy.

## Boundaries and safeguards

**Stated; joint guidance.** The FAQ distinguishes controls in the user request path from measurements that usually run afterward. These serve different purposes and latency budgets. [S04](sources.md#s04)

**Suggested application.** Specify which failures must be prevented before an action and which can be detected through monitoring. A post-hoc evaluator cannot undo a duplicate reward already committed. Conversely, forcing every subjective quality judgment into the synchronous request path may create a new availability or latency problem.

No complete personal sandbox, credential policy, protected-test ownership or tool-permission setup is established here. Product guardrail advice is not evidence of personal coding-agent access controls.

## Evaluation and tradeoffs

**Stated; joint study.** The October 2026 decision-model article, coauthored with Antaripa Saha, tunes thresholds and examines calibration and cost on 100 leasing-agent traces. It omits latency and warns that task context changes the result. [S12](sources.md#s12)

**Suggested application.** Decide the consequences of false acceptance and false rejection before choosing an evaluator. Keep the same held-out examples when comparing candidates, and show the confusing cases rather than only a headline score. A cheap evaluator that misses expensive failures may be a poor choice; an expensive evaluator for an exact integer rule is also hard to justify.

The shared reward task needs deterministic observations, not a transferred model winner. No personal throughput number, product case study or tool report in this cache establishes superiority over the other engineers’ workflows.

## Reusable working prompts

The [worked guide](workflow.md#reusable-prompts) supplies original prompts for inspecting the fixed reward boundary and, separately, preparing an AI-output review process. They are suggestions for applying the ideas, not recovered private prompts from Husain.

## Failure modes and limits

| Failure | Symptom | Suggested response |
|---|---|---|
| Rubric precedes understanding | Generic categories hide the actual product problem | Inspect examples and revise the criterion openly |
| Evaluator judges itself | Its own Pass rate becomes the only evidence | Compare with independent intent and human-reviewed labels |
| Wrong boundary | A model explanation substitutes for the persisted balance | Read actual application state |
| Leakage | Final assessment examples influenced prompt tuning | Separate development from final assessment |
| Label inversion | Failure-positive and Pass-positive metrics are mixed | Record the positive class with the result |
| Product/coding scope confusion | Model eval guidance is called a personal TDD policy | Keep the profile focus and unknowns visible |
| Outdated tool snapshot | Historical review is treated as current fact | Recheck documentation before adopting it |

## First practical lab

Start with the [six-observation reward task](workflow.md#the-fixed-task). Keep the agreed outcomes, revision and environment constant across profiles. The optional model-quality exercise is a separate lab and does not change that contract.

## Comparison profile

The [stable C01–C12 entries](index.md#comparison-evidence) name the relevant system and evidence type. In particular, D04 concerns product evaluation; D08 concerns evaluator data, not an established private memory system; D10 concerns lifecycle advice; D11 is not a complete personal coding-permission policy.

## Sources and research gaps

The [thirteen-record source register](sources.md) preserves author, date, inspected scope, findings and limits. The joint FAQ, shared repository, Shankar session note, Husain/Flath trial account and Husain/Saha experiment retain their respective attribution. No paid course content, full uninspected livestream, private configuration, installed tool behaviour or controlled cross-engineer outcome was inferred.
