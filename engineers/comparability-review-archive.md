---
title: Comparability review — historical record
parent: Engineers
nav_order: 22
last_updated: 2026-10-26
last_read: null
status: unread
nav_exclude: true
---

# Archived review

This is the pre-freshness review record. [Current review](freshness-review.md).

# Comparability review — the first ten engineer studies

Reviewed on **26 October 2026**. Scope: the ten profile directories, including their research guides, worked examples, tool chapters where present, source registers, compact comparison fields, and derived slides. This is an editorial and structural review of the research cache. It is not a new productivity experiment or a fresh external verification of the first five profiles.

[First five studies](first-five.md) · [Studies six to ten](next-five.md) · [Open comparison cards]({{ '/engineers/compare/' | relative_url }})

## What is comparable

All profiles answer the same twelve questions, preserve their source dates and evidence boundaries, and apply their ideas to the same neutral reward task. The side-by-side viewer reads those cached fields. It does not infer a person's beliefs from a reputation, assign numerical scores, or declare that differing workflows imply differing effectiveness.

Three distinctions remain necessary:

- **A recommendation is not a personal setup.** Both may be explicitly stated, but only the latter describes reported practice. The qualification records the distinction.
- **An inspected artifact is not a successful run.** For example, a published orchestration design can be inspected without reproducing its safety or performance. Its evidence label does not claim runtime verification.
- **A checked date is not a practice date.** Sources inspected on the same day may describe different years, tasks, models, or tool versions. Material historical dates remain in the compact positions or their qualifications.

Unknowns stay explicit. The absence of a complete private tool inventory, release policy, or security configuration is not evidence that the person lacks those things or disagrees with someone else's approach.

## The shared task now has six separate observations

The starting code, language, runner, storage, and runtime are unknown for every profile. The proposed task adds no mandatory UI, network, concurrency, or performance requirement.

| Step | Action | Expected balance |
|---|---|---|
| 0 | Read an isolated empty account | 0 |
| 1 | Deliver submission A | 10 |
| 2 | Deliver A again | 10 |
| 3 | Restart the runtime while retaining durable data, then read before any replay | 10 |
| 4 | Deliver A again after restart | 10 |
| 5 | Deliver distinct submission B | 20 |

The review corrected examples that combined steps 3 and 4. If a restart loses both the balance and duplicate history, replaying A could award another 10 and make the final assertion accidentally pass. Reading before replay checks reward persistence separately from deduplication. Recreating an in-memory fixture alone does not establish persistence across runtime restart.

These are our agreed exercise outcomes, not an implementation that each engineer demonstrated. The workflow, prompts, scenario order, and tool choices proposed for the exercise remain labelled adaptations. Farley's older Spellhaven example remains as additional context; his separate neutral mapping provides the common comparison scope.

## How to read the twelve dimensions

| Dimension | Compare this | Keep separate |
|---|---|---|
| D01 Goal and bottleneck | What the person prioritises | A stated priority versus a measured universal bottleneck |
| D02 Requirements and specification | Where intent comes from and how it is corrected | Prose, examples, tests, and product decisions; no forced single format |
| D03 Increment and planning | What is planned and what counts as one step | The size of a plan versus the size of an implementation increment |
| D04 Testing and verification | Who owns tests, their level, cadence, and observation boundary | Human-owned acceptance, unit-level design, exploratory checks, agent-internal TDD |
| D05 Design and refactoring | How changeability is maintained | General historical design advice versus a current agent-loop policy |
| D06 Human understanding and review | What people inspect and remain responsible for | Accountability versus a universal requirement to read every line |
| D07 Agent autonomy and coordination | How work is delegated or coordinated | Personal experiments, recommendations, public frameworks, and unknown private setups |
| D08 Context and durable state | How guidance and task progress persist | Agent memory versus durable application state in the reward task |
| D09 Tooling and environment | What is built, used, recommended, or discussed | Published tool, expressed interest, adoption, and current private stack |
| D10 Integration and release | How changes are integrated and verified | Commits and project checks versus production release and rollback policy |
| D11 Boundaries and safeguards | Documented controls or stated risk principles | A prompt, a hook, a real resource boundary, and our proposed safeguards |
| D12 Evaluation and tradeoffs | How usefulness and costs are judged | Anecdotes, exploratory studies, forecasts, and controlled outcome comparisons |

## Compact comparison: what the cache supports

This table is a reading aid, not a replacement for the qualified profile fields. Links lead to stable claim entries or the detailed evidence. It groups documented positions without pretending to have run the common task ten times.

| Engineer | Testing or specification emphasis | Delegation evidence and important qualification |
|---|---|---|
| [Simon Willison](simon-willison/index.md) | [Red/green work plus exploratory execution](simon-willison/index.md#c04). | [Parallel independent work](simon-willison/index.md#c07); experimental games and the dated production-feature account have different stakes. |
| [Birgitta Böckeler](birgitta-bockeler/index.md) | [Distinguishes human-owned checks from TDD wholly inside the agent loop](birgitta-bockeler/index.md#c04). | [Supervised brownfield reports](birgitta-bockeler/index.md#c07) and a narrow exploratory evaluation do not establish a complete private orchestration policy. |
| [Dave Farley](dave-farley/index.md) | [Human-owned failing acceptance examples, separate unit-level feedback, mutation checks](dave-farley/index.md#c04). | [Implementation inside an acceptance contract](dave-farley/index.md#c07) is a proposal; a complete private fleet setup is unknown. |
| [Kent Beck](kent-beck/index.md) | [Test-first work and reference checks in a particular repository](kent-beck/index.md#c04). | [A dated account of coordination burden](kent-beck/index.md#c07) is not evidence that parallel agents always fail. |
| [Addy Osmani](addy-osmani/index.md) | [Characterise uncertain existing behaviour and check original requirements](addy-osmani/index.md#c04). | [Later orchestration guidance](addy-osmani/index.md#c07) must not silently replace his earlier personal workflow account. |
| [Martin Fowler](martin-fowler/index.md) | [Executable feedback and actual check outcomes](martin-fowler/index.md#c04), with historical TDD guidance identified. | [Current personal orchestration is unknown](martin-fowler/index.md#c07). Guest methods on his website retain their authorship. |
| [Gojko Adžić](gojko-adzic/index.md) | [Published worker, merged-tree gate, and final check roles](gojko-adzic/index.md#c04). | [A pinned public orchestration artifact](gojko-adzic/index.md#c07), inspected rather than executed; its efficacy is not a benchmark result. |
| [Armin Ronacher](armin-ronacher/index.md) | [Dated test-generation experience](armin-ronacher/index.md#c04); a complete current test-first policy remains unknown. | [Bounded work versus unattended long-lived code](armin-ronacher/index.md#c07) is contextual; his tool accounts change over time. |
| [Steve Yegge](steve-yegge/index.md) | [Recurring inspection and tests](steve-yegge/index.md#c04), without an established universal test-first cadence. | [Dated orchestration accounts](steve-yegge/index.md#c07) distinguish public ecosystems from a later bespoke private harness. |
| [Gene Kim](gene-kim/index.md) | [Joint guidance on expectations, tests, and verification](gene-kim/index.md#c04) is labelled coauthored. | [Solo pairing/delegation guidance](gene-kim/index.md#c07) does not establish Steve Yegge's tools as Kim's private topology. |

## Corrections made by the review

### Align the task without erasing the approaches

Simon, Birgitta, and Addy had examples that combined restart with replay. Those were split into independent observations. Kent's worked table now uses the same event order and explicit total balances. Farley's neutral mapping already separated the observations; his related short card was made explicit too. The new five use that sequence directly.

Optional sensitivity checks or integration considerations can still appear, but they are not additional acceptance requirements assigned to only one profile. No implementation experiment was performed.

### Reconcile compact cards with readable evidence

Birgitta's visible claim entries previously had labels and links without the actual position text; they now carry the position. The review reconciles frontmatter and body labels and positions across profiles. Material dates and project scopes appear in compact text where omitting them would make a historical report look like a current universal method.

Farley's testing field now distinguishes acceptance-first behaviour from unit-level design feedback. His C12 entry was explicitly expanded to discuss verification/mutation/review tradeoffs while retaining its original limitation on unproven universal gains. Claim identity was not silently reassigned.

Kent's proposed stop rule was our adaptation, so it no longer fills his attributed safeguard policy. That field remains unknown where the cache lacks a complete documented policy; the proposed rule remains useful in the worked exercise.

### Improve source traceability and attribution

Addy's evaluation field now links to the actual configuration-audit section. Fowler's dimension links lead to substantive sections rather than one broad summary; multi-source claims retain the relevant source mappings. Fowler is not assigned Böckeler's sensor experiment or tool inventory because he hosts her article.

Gojko's source labels distinguish authored articles and slides from public repository documentation. His inspected factory is not treated as an executed security audit or a complete private deployment pipeline. Kim/Yegge joint material stays joint; separate personal accounts stay with their speaker. A tool endorsement, public framework, or interview summary is not substituted for a verified current private setup.

Gene's D12 now describes whole-outcome assessment and the reported disagreement between agent claims and local test results, rather than using only a generic no-superiority disclaimer. Joint Kim/Yegge recommendations are visible as joint material in the compact fields. Armin's and Steve's readable claim entries now include the actual positions rather than leaving them only in frontmatter.

Steve's September material is identified as an episode publication/editorial summary, not a verified complete transcript of his words. Gojko's artifact-based fields say inspected or published documentation in the compact text, so their label cannot be mistaken for a runtime test. These changes preserve the available evidence instead of filling private-practice gaps.

### Keep historical changes visible

The caches retain earlier practices rather than quietly overwriting them with a later method. Examples include historical TDD/CI advice versus current agent practice, Armin's January versus October Pi accounts, and Steve's public ecosystem discussions versus later private-harness account. A changed tool or a different project is not automatically a disagreement in principle.

## Remaining limits

The profiles are suitable for comparing documented ideas and proposed applications. They do not provide equally complete evidence of every person's private daily practice. Some sources are living pages, public outlines, partial public text, or primary episode descriptions; each source register records its inspected scope. Paid bodies and private configurations were not inferred.

No set of anecdotes, public artifacts, or self-reported output figures establishes a controlled ranking. A defensible execution comparison would hold the starting revision, task, environment, model/harness configuration, acceptance checks, and trial protocol constant, and measure review and rework alongside generation. This editorial review does not supply that missing experiment.

A common schema makes the questions comparable. It does not turn unknowns into opposing views, make tool generations equivalent, or erase legitimate differences in judgment.

## Validation record

- Ten profiles use the exact D01–D12 titles: 120 comparison entries.
- Every visible claim entry contains the same position and evidence label as its structured field. Unknown fields do not carry a fabricated primary source.
- Local files, source/claim fragments, frontmatter, code fences, complete card sections, and unique card IDs were checked.
- All 80 slides rendered in a browser fixture using the shared viewer. Saved-card separation, mobile page width, ten-profile discovery, three-person side-by-side selection, and the shared dimension filter passed without browser errors.
- The existing general 16-card learning deck still rendered. Original profile identities, research dates, reading states, card IDs, and browser-storage keys were preserved.
- The browser fixture approximates Jekyll's Markdown embedding; a full local Jekyll build was not run because Ruby is unavailable. No application implementation or head-to-head productivity experiment was executed.
