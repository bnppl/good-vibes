---
title: Martin Fowler — detailed research
parent: Martin Fowler
nav_order: 1
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
---

# Martin Fowler — software that people can understand and change

[Profile](index.md) · [Worked reward feature](workflow.md) · [Source findings](sources.md) · [Slide notes](slides.md)

## Approach in brief

**Stated.** Fowler describes agentic engineering as development in which an agent changes code while humans remain concerned with its structure and responsible for the result. His May 2026 account includes review of code, tests, and other feedback. It is a conceptual description, not a published inventory of his own daily setup. [S02](sources.md#s02)

**Stated.** His August 2025 advice is to experiment and inspect workflow details before accepting broad productivity conclusions. Different interaction patterns and models should not be treated as one intervention. [S01](sources.md#s01)

**Inferred synthesis.** The useful thread for this profile is preserving the ability to reason about and change a system while experimenting with new implementation tools. This combines current agent commentary with his earlier work on tests, refactoring, and integration. It does not establish that he follows one comprehensive “Fowler agent workflow.”

Scope: public material inspected on **26 October 2026**, with the same date as evidence cutoff. Recommendations, self-reported trials, historical principles, and our original adaptations are kept separate. No paid book content was accessed. [Research limits](#sources-and-research-gaps).

## Techniques and principles

### Start with scenarios and let design teach you

**Stated.** In the January 2026 conversation with Unmesh Joshi and Rebecca Parsons, Fowler's own contributions connect changeability to cognitive load, favour domain-familiar models, resist a rigid split between requirements and implementation, and propose starting from concrete scenarios. The other speakers' arguments are not automatically his. [S10](sources.md#s10)

**Suggested adaptation.** For a reward feature, write the observable sequence before choosing an implementation: read baseline, deliver A, replay A, restart and read before any replay, replay A, deliver B. A small implementation experiment might reveal that the current application cannot restart without losing state. That discovery changes the work plan; it does not justify silently changing the agreed outcome. Maintain a distinction between product intent and the team's evolving understanding of a feasible design.

### Use an interview to build context

**Stated; self-reported trial.** Fowler describes having an LLM interview a person to produce a context report, and using an interview to review an existing domain document. He credits Harper Reed for an influential description and says his trial needed reminders to ask one question at a time. The interview can feed a later session. [S03](sources.md#s03)

**Suggested adaptation.** Ask about the meaning of “same submission,” when a reward counts as successful, and which state survives restart. Keep answers separate from guesses. Then review the generated report against those answers. This can expose an unstated assumption such as treating a repeated word as a repeated request. A fluent summary is not validation of the requirement.

### Test and refactor as design work

**Stated; historical guidance.** His 2023 TDD description includes a test list, selection of a next case, test-first implementation, and refactoring; it warns against dropping the design-improvement step. His 2014 self-testing-code article advocates a readily executable automated check suite. Neither source documents a compulsory fine-grained cadence inside his current agent loop. [S04](sources.md#s04) · [S14](sources.md#s14)

**Stated.** His public refactoring introduction presents small behaviour-preserving transformations, including making code easier to extend before a feature and clearer afterward. Automated refactoring tools can help but are not required. [S05](sources.md#s05)

**Suggested adaptation.** If reward calculation and storage are mixed in a large handler, use the existing test coverage to decide whether a small extraction will make the next change safer. Keep that structural change distinguishable from new replay semantics. Tests should continue to observe outcomes, rather than force a class layout only because it appeared in the first draft.

### Preserve useful decisions

**Stated.** His March 2026 ADR entry describes concise decision records containing context and consequences, with superseding records when a decision changes. The record is also a tool for clarifying thought. [S07](sources.md#s07)

**Suggested adaptation.** Record a consequential choice such as using the existing durable submission journal to establish replay identity. Include alternatives and the assumptions that could invalidate the decision. An agent can draft the record from reviewed evidence; somebody still needs to check that it describes the actual design. Do not create a decision record for every variable rename.

### Treat conventions as defaults with reasons

**Stated.** His September 2026 sensible-default entry treats established practices as starting points that can be overridden for a reason tied to context. He credits the phrasing's Thoughtworks lineage rather than claiming invention. [S08](sources.md#s08)

**Suggested adaptation.** Begin with the project's existing runner and persistence boundary. If they cannot exercise restart semantics, explain the limitation and choose the smallest suitable adjustment. A default is neither permission for arbitrary tool replacement nor a rule that forbids improvement.

## A feature from idea to release

There is no inspected public demonstration of Fowler building this exact persistent reward feature with an agent. The [worked guide](workflow.md) is an original application of the evidence, not a reconstruction of a private session.

| Proposed step | Practical output | Evidence relationship |
|---|---|---|
| Inspect the existing path | Entry point, persistence boundary, and baseline checks | Our adaptation |
| Interview about ambiguity | Reviewed context report | Applies S03 |
| Describe concrete outcomes | Reward/replay/restart table | Applies S10 |
| Pick a bounded change | Next missing case and a reviewable plan | Applies historical S04 and S05 |
| Implement with feedback | Product diff plus actual check output | Applies S02 |
| Review understanding | Explanation of durable identity and changed behaviour | Applies S02 and S10 |
| Integrate and package | Normal project checks on integrated code | Applies historical S06 |

**Stated; historical guidance.** His 2024 Continuous Integration account emphasises frequent mainline integration verified by an automated build. It distinguishes integration from the business decision to release. This supports a general integration principle, not a claim about his present private CI provider or agent permissions. [S06](sources.md#s06)

The proposed sequence should change when the baseline reveals that some outcomes already work. A missing test and missing behaviour are different findings. A test that already passes should be investigated rather than “fixed” by intentionally breaking production code.

## Tools and setup

| Tool or mechanism | Relationship to Fowler | Evidence | Setup status |
|---|---|---|---|
| Terminal agents that edit source and run checks | Described as an agentic-engineering interaction pattern | Stated, S02 | No specific current personal host/model confirmed |
| Interview-generated context report | Described technique with a self-reported trial | Stated, S03 | Original prompts below; not a packaged plugin |
| Pi | Expressed interest in trying it in January 2026 | Stated, S09 | Interest is not verified personal use; no install performed |
| gptel/Emacs interaction | Expressed interest in programmable interaction through his preferred editor | Stated, S09 | No current configuration or version established |
| Automated tests and refactoring support | Historical engineering guidance | Stated, S04/S05/S14 | Use the target project's existing tools in our exercise |
| ADRs and integration checks | Documented general practices | Stated, S06/S07 | No mandatory vendor or agent integration inferred |
| Static-analysis sensors on his website | Guest article authored by Birgitta Böckeler | Attribution check, S13 | Her inventory must not become Fowler's personal inventory |

No tool is installed by this study. No verified command set, model parameters, memory store, agent swarm topology, or security configuration is claimed. Reading a tool name in a curated fragment does not establish adoption.

## Reusable working prompts

These are **suggested adaptations written for this guide**, not Fowler's published prompts.

### Clarify without manufacturing certainty

```text
Inspect the existing reward path and tests. Distinguish observations
from assumptions. Ask me one question at a time only where an answer
changes the required behaviour or a consequential design choice.
When the remaining gaps are explicit, draft a short context report
with agreed outcomes, unknowns, and links to the inspected code.
Do not invent a storage or transport architecture.
```

### Review the result as an engineer

```text
Show the behaviour that changed, the checks actually run, and the
relevant output. Explain how submission identity survives runtime
restart and why a new ID remains a new event. Identify any changes
to tests, fixtures, configuration, or stored-data assumptions.
Do not treat the agent's completion message as independent evidence.
```

### Refactor for the next change

```text
Identify one structural problem that makes the approved reward
change harder to understand or extend. Propose a small behaviour-
preserving transformation. Keep that transformation separate from
new product behaviour and show the checks supporting preservation.
Explain why the added abstraction earns its complexity here.
```

The [worked feature](workflow.md) supplies checkpoint outputs and a practical lab. These prompts are useful only when the environment lets the agent inspect and execute the relevant checks; they do not confer permissions or make a report truthful.

## Failure modes and limits

| Failure | Why it distorts the approach | Concrete response in our exercise |
|---|---|---|
| Host-byline confusion | martinfowler.com publishes work by many authors | Read the author block before assigning a tool or experiment to Fowler |
| A private stack invented from curation | Linking to another engineer's report is not daily usage | Classify each mention as recommendation, report, interest, or unknown |
| Historical practice promoted to current agent policy | A 2023 TDD explanation is not a 2026 agent-harness configuration | Keep the source date and scope beside the claim |
| A diagram replaces understanding | A good-looking domain model may omit replay identity | Ask how the actual submission and durable record relate |
| Tests accepted on assertion alone | A generated success report can disagree with execution | Inspect actual check results and the state they observe |
| “Refactor” means rewrite | A large behaviour-changing patch obscures the cause of failure | Identify a bounded transformation and separate semantics |
| One productivity number settles a workflow | Models, tasks, and interaction styles differ | Compare matched conditions and record uncertainty |

**Stated.** In September 2026 Fowler describes distrust of confident fabrication and dislike of interacting with LLMs while still recognising their utility; this is not a blanket instruction to avoid them. His attitude should not be reduced to an enthusiastic-versus-sceptical score. [S11](sources.md#s11)

**Stated.** His vibe-coding definition distinguishes ignoring generated code from engineering that remains concerned with it. He considers disposable prototypes a different context from maintained systems. The examples and product names quoted from Karpathy are Karpathy's, not Fowler's tool inventory. [S12](sources.md#s12)

**Safety attribution.** The August 2025 article discusses prompt-injection exposure while explicitly drawing on Simon Willison's analysis. That supports evidence of Fowler's concern; it does not establish that Fowler implemented a particular sandbox. [S01](sources.md#s01)

## First practical lab

Use the shared [reward task](workflow.md#shared-task-and-assumptions). The initial system is unknown; record its revision and environment before comparing outcomes with another workflow.

1. Capture the baseline and one important ambiguity.
2. Produce and review a short context report.
3. Implement one agreed missing behaviour, preserving the distinction between existing and intended behaviour.
4. Inspect the code and actual check output; explain durable identity without the assistant.
5. Make a small structural improvement only if it has a concrete purpose, then rerun checks.
6. Integrate through the project's normal route. Record remaining limitations and what would be needed for release.

**Observable outputs:** reviewed examples, context report, bounded diff, executed checks, an explanation of restart behaviour, and a brief retrospective on review/rework effort. This is a proposed learning activity, not a measured recipe for productivity.

## Comparison profile

The stable [C01–C12 entries](index.md#comparison-evidence) power the side-by-side cards. Read them with these distinctions:

- D01/D12 concern method-sensitive evaluation, not a validated universal improvement.
- D02/D08 concern scenario and context techniques; our reward prompts are adaptations.
- D03/D04/D05/D10 draw partly on historical general engineering guidance, not a complete current agent session.
- D06 uses Fowler's own agentic-engineering description.
- D07 is unknown for his personal coordination setup.
- D09 documents interests and conceptual tools without converting them into an installed stack.
- D11 records a published security concern, with the original analyst attributed, not a verified personal policy.

Compare like scopes. A conceptual recommendation, a live demonstration, a single-project account, and a repeatable outcome study are different kinds of evidence even when they use similar words.

## Sources and research gaps

The [source register](sources.md) records fourteen inspected sources, authors, dates, findings, and claim mappings. Public articles and source outlines were used; paid book bodies, private instructions, and private configurations were not accessed.

The failed candidate `martinfowler.com/bliki/Refactoring.html` returned 404; the inspected canonical public introduction is `refactoring.com`. No claim depends on that failed page. Current public material supports principles and some self-reported experience, not a comprehensive personal build/release/security stack. No head-to-head implementation experiment was run, and unknown positions must not be treated as disagreements.
