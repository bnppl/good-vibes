---
title: Birgitta Böckeler — detailed research
parent: Birgitta Böckeler
nav_order: 1
last_updated: 2026-10-26
last_read: null
status: unread
research_cutoff: 2026-10-26
research_checked: 2026-10-26
cache_schema: 1
---

# Birgitta Böckeler: Engineering the Agent's Working Environment

Public-source research checked on **26 October 2026**. This guide focuses on AI-assisted software delivery and includes earlier material to explain how the approach developed. **Stated** means an explicit recommendation or first-person report; **Inferred** means our interpretation; **Suggested adaptation** means original guidance for applying the ideas.

[Profile and comparison claims](index.md) · [Source findings](sources.md) · [Slide notes](slides.md) · [Open slideshow]({{ '/engineers/birgitta-bockeler/learn/' | relative_url }})

## 1. Approach in brief

**Inferred:** Böckeler's work is best understood as calibrating trust through engineering: improve what an agent can see, strengthen the feedback it receives, and reserve human attention for uncertainty the controls cannot resolve. This is a synthesis across her [context primer](https://martinfowler.com/articles/exploring-gen-ai/context-engineering-coding-agents.html), [harness model](https://martinfowler.com/articles/harness-engineering.html), and [risk essay](https://martinfowler.com/articles/exploring-gen-ai/to-vibe-or-not-vibe.html), rather than a named universal recipe.

Her [July 2025 essay](https://martinfowler.com/articles/exploring-gen-ai/i-still-care-about-the-code.html) explicitly retains concern for the code and, at minimum, the tests. She rejects treating LLMs as predictable natural-language compilers and uses operational responsibility to ground review decisions. **Stated.**

The articles cited here are authored by Böckeler even though they are published on Martin Fowler's site. The wider *Exploring Generative AI* series has multiple contributors. Other contributors' experiments and tools are not her personal workflow.

## 2. Techniques and principles

### Guides, sensors, and a human steering loop

**Stated:** Her [April 2026 model](https://martinfowler.com/articles/harness-engineering.html) separates guidance before action from feedback after action, and deterministic computation from probabilistic inference. The human improves the controls when recurring failures expose gaps. She distinguishes maintainability, architectural characteristics, and functional behaviour; a good structural check does not establish that the desired feature was built. This is a framing of developing practice, with unresolved questions, not a proven comprehensive safety mechanism.

**Suggested adaptation:** for a reward service, document the allowed persistence interface before editing, then run a dependency check afterwards. Those controls address different mistakes. A dependency check can catch an import crossing a boundary; it cannot decide whether the reward should have been ten points. Name each control's purpose so green checks are not interpreted as general approval.

### Context: decide what is loaded, who loads it, and when

**Stated:** The [February 2026 primer](https://martinfowler.com/articles/exploring-gen-ai/context-engineering-coding-agents.html) distinguishes task instructions, standing guidance, and interfaces for retrieving more context. Loading can be chosen by a human, an LLM, or agent software. She recommends growing rules gradually and considering context size; configuring a resource does not ensure that the model retrieves it. Claude Code is the explanatory example, not a mandate to use that product.

**Suggested adaptation:** keep a short project map and the actual test command always easy to find. Put detailed reward rules next to the affected component. If a rule is important for this task, explicitly load it and confirm the agent's interpretation rather than relying on a skill description to trigger retrieval.

### Specifications: distinguish three different promises

**Stated:** Her [October 2025 exploration](https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html) distinguishes spec-first, spec-anchored, and spec-as-source. These respectively concern starting from a specification, retaining it for later changes, and treating it as the primary editable artifact. She experimented with Kiro, spec-kit, and Tessl and left questions about review effort and long-term maintenance open. This is a dated investigation, not blanket endorsement of those tools or a claim that all specifications remain synchronised.

**Suggested adaptation:** decide whether the reward brief is disposable task context or a maintained product contract. If maintained, assign an owner and connect it to checks. Do not maintain three inconsistent copies in a ticket, a spec file, and tests without a clear way to reconcile them.

### Review intensity follows risk and detectability

**Stated:** In [September 2025](https://martinfowler.com/articles/exploring-gen-ai/to-vibe-or-not-vibe.html), she describes choosing oversight using probability of error, consequence, and the chance of detecting a mistake. A low-impact, easily observed prototype may justify little code review; high-impact, hard-to-observe work needs more scrutiny. The position is conditional, not “always inspect everything” or “never read generated code.”

**Suggested adaptation:** a visible button colour is cheap to inspect. A duplicate award after restart may remain hidden during a happy-path demo. Give the persistence boundary more attention even if its patch is shorter than the UI patch. This is a task-specific judgment, not a numeric risk formula.

### Use sensors that produce actionable correction

**Stated:** Her [May 2026 report](https://martinfowler.com/articles/sensors-for-coding-agents.html) describes experiments on a TypeScript/Next.js/React dashboard. The reported controls include type checking, ESLint, Semgrep, dependency-cruiser, tests, and incremental mutation testing. She explores maintainability feedback rather than presenting a product-independent optimum. Named models and tools belong to that experiment and date.

**Suggested adaptation:** the useful output from a dependency rule is more than “invalid import.” Include the expected boundary and a relevant local example. First verify the checker against a deliberate violation. If a sensor never fires, inspect whether it is being executed and whether it can detect its intended failure.

### Distinguish human-guided TDD from an agent following a ritual

**Stated:** Her [August 2026 exploratory evaluation](https://martinfowler.com/articles/exploring-gen-ai/tdd-in-the-agent-loop.html) separates human-authored scenarios, human review of an agent's test, and TDD performed entirely inside the agent loop. It found no clear advantage for the latter in its small greenfield tasks. Quality ranking relied heavily on an LLM judge, adherence was imperfect, and the tasks were limited. This does not establish that human-owned tests, TDD generally, or acceptance testing lack value.

**Suggested adaptation:** if an agent writes a test before the code, inspect the expectation and failure reason. A test comparing the implementation's output with another invocation of itself is circular regardless of its place in the sequence. Keep the decision about intended behaviour outside that circular loop.

### Preserve engineering judgment during supervised work

**Stated:** Her [March 2025 account](https://martinfowler.com/articles/exploring-gen-ai/13-role-of-developer-skills.html) reports agent use in Cursor, Windsurf, and Cline on existing codebases. She describes frequent intervention, including diagnosis, limiting scope, and avoiding broad changes before validating a slice. The examples span immediate wasted effort, team friction, and long-term maintainability. They are first-person observations of then-current tools, not permanent claims about all agents.

## 3. A feature from idea to release

### What the sources establish

**Inferred reconstruction:** establish the system's context and risk, provide relevant guidance, use development feedback while making bounded changes, inspect the result at a depth appropriate to the risk, and improve the environment when repeated failures occur. Sources support these ingredients; they do not establish a single invariant daily checklist, private orchestration system, or exact commit/rollback policy.

### Suggested adaptation: one reward per submission

Use the shared comparison task without expanding its requirements:

> A request may be delivered more than once. A reward worth 10 points must be awarded once per submission ID. A successful award must survive restart. A new submission ID is a separate event. Start by establishing how the existing system behaves.

The stack, code structure, and implementation are unspecified. There is no additional concurrency, network, or UI requirement in this exercise. The following is an original application of the ideas, not a demonstration of what Böckeler personally would do.

1. **Map the actual path.** Find where a submission enters, where its ID is represented, how points are awarded, and how state survives restart. Run the existing relevant tests. Record observations separately from guesses. Do not let an architecture diagram supplied by the agent substitute for inspecting code.
2. **Assess the hidden failure.** The replay can appear correct until restart. Decide how the intended behaviour will be observed across that boundary. If the harness cannot restart the application or reload persisted state, that limitation is a prerequisite to resolve.
3. **Write a short task brief.** State that a repeated ID adds no further reward; a fresh ID is a separate event. Include the actual persistence constraints and scope. Explicitly decide which document will be retained after the task, rather than allowing temporary notes to become accidental product policy.
4. **Select useful guides.** Load the existing storage convention and one good neighbouring example. Supply the documented build and test commands. Avoid loading every project document. Check that the agent can restate the rule and identify where to verify it.
5. **Select useful sensors.** Reuse the type checker and test runner. Add a structural rule only if there is a real boundary worth preserving; do not introduce a new tool solely to make the workflow look sophisticated. Check that the test observes actual persisted state rather than the test fixture's own counter.
6. **Agree an independent expected result.** Starting at zero, one accepted ID yields ten points; replay of that ID leaves ten; restart and replay still leave ten; a fresh ID yields twenty. These values are deductions from this task's fixed brief, not source quotations or extra product requirements.
7. **Implement a bounded slice.** Let the agent change the relevant path, then inspect diffs and check results. If a test is drafted by AI, review the intent before trusting its green result. Require the reason for a failure, not merely a log line saying the suite was red.
8. **Inspect the architectural consequence.** A duplicate check placed in the UI alone may not cover the application boundary. An in-memory record may not survive restart. Examine those choices against the given requirement and the inspected starting architecture, rather than prescribing an unneeded service or database.
9. **Exercise the complete task.** Verify the restart case and the fresh-ID case using the same harness. Inspect any test changes, disabled checks, or altered fixtures. Do not use test counts or coverage alone as evidence of the rule.
10. **Improve one recurring weakness.** If this attempt repeatedly used the wrong storage abstraction, add a focused guide or a check that catches it. Validate that intervention on the same mistake before treating it as a reusable control. Remove redundant guidance rather than accumulating instructions indefinitely.
11. **Prepare integration evidence.** Retain the agreed rule, commands, results, reviewed change, and unresolved limitations. Use the repository's existing integration and release process. No universal release cadence was established by this research.

## 4. Tools and setup

| Tool or feature | Relationship and evidence | Useful role | Setup status |
|---|---|---|---|
| Cursor, Windsurf, Cline | **Stated:** used in the March 2025 brownfield account | Supervised edits with development feedback | Historical report; current configuration not inspected |
| Claude Code context features | **Stated:** explanatory example in February 2026 | Guidance, on-demand resources and loading control | Feature descriptions are dated; no installation recipe inferred |
| ESLint, type checking | **Stated:** controls in the May dashboard experiments | Fast structural feedback | Example application only; use the target project's configuration |
| Semgrep | **Stated:** security-analysis control in that experiment | Static findings | Not a proof of security or a universal required product |
| dependency-cruiser | **Stated:** dependency-rule control in that experiment | Module boundary feedback | No unverified command or configuration supplied |
| Mutation testing | **Stated:** explored in the sensor work and TDD evaluation | Check assertion sensitivity | Choose a compatible existing tool for the target stack |
| Kiro, spec-kit, Tessl | **Stated:** investigated in September/October 2025 | Explore different specification workflows | Tool evaluation is not endorsement or current daily adoption |
| Existing repo CI | **Suggested adaptation** | Re-run checks on integration | Use established commands and permissions |

This research did not install tools. No complete current personal model selection, MCP configuration, memory store, or agent swarm was established. Tool providers' latest installation instructions would need checking before a real setup task.

## 5. Reusable working prompts

These are **suggested adaptations written for this guide**, not Böckeler's published prompts.

### Establish the starting state

```text
Inspect how submission IDs and rewards are handled. Locate the real
persistence boundary and existing test commands. Explain what survives
restart and what you have actually observed. Identify missing context.
Do not edit files or assume a new architecture.
```

### Curate the working context

```text
For this reward change, list the smallest useful set of local documents,
examples and commands. Separate task-specific instructions from standing
project guidance. Open the relevant files and show how each affects the
plan. Do not create a large general rules file.
```

### Design the feedback, then use it

```text
The agreed rule is 10 points once per submission ID, surviving restart;
a new ID is a separate event. Propose checks of that rule and of any
existing module boundary this change touches. For each check, state what
it detects and what it does not establish. Review expected results with
me before implementation. Use actual persisted state as the observation.
```

### Review the control system after a mistake

```text
Inspect this failure and the agent transcript. Was the problem missing
intent, missing context, an ignored guide, a weak sensor, or a bad
interpretation of feedback? Propose the smallest intervention and a way
to test it. Label hypotheses rather than assuming a root cause.
```

## 6. Failure modes and limits

**Suggested analysis:** stronger controls can improve a workflow while leaving the highest-impact errors untouched. A well-formatted implementation of the wrong reward policy is still wrong. A structural checker can enforce a boundary but cannot choose the right boundary. An AI reviewer can disagree with an implementation without providing reliable evidence that it is incorrect.

| Failure | What to inspect | Proposed response |
|---|---|---|
| A guide exists but is never loaded | Agent's actual retrieved context | Load it explicitly for this task; test discovery separately |
| Many checks, little behavioural confidence | Whether assertions observe the product outcome | Strengthen the observation and expected result |
| Feedback ignored or misunderstood | Check execution and interpretation | Improve output and verify the correction loop |
| Large change hides scope drift | Files and behaviours touched | Reduce the increment before adding more automation |
| Tests and code share a misconception | Origin of the expected result | Compare with independently agreed intent |
| An environment rule contradicts another | Which instruction and sensor disagree | Resolve the conflict rather than adding another rule |
| A harness becomes expensive to maintain | Review effort, run cost, recurring failures | Keep the useful controls and remove ineffective ceremony |

The reviewed material does not establish a universal recipe for permission isolation, protected test ownership, deployment approvals, or agent budget limits. Those must be designed for the actual environment. Advice about inference and risk should not be presented as a claim that every tool fails equally.

## 7. First practical lab

**Suggested exercise:** run the shared reward task using an existing test harness. Do not implement a separate application merely to demonstrate a technique.

1. Record a baseline and a short risk assessment: what could be wrong, what would it cost, and how would it be detected?
2. Identify one useful guide and one useful feedback check. Verify that both reach the agent.
3. Complete the bounded change and inspect the restart behaviour.
4. Record one observed mistake or a plausible defect the check can detect. If there was none, do not invent a failure history.
5. Change one part of the harness and test whether it actually addresses that problem.
6. Keep a brief retrospective: review/rework effort, check results, unanswered questions, and whether the control is worth retaining.

Success is an explainable result and an evaluated local control, not a claim of measured general productivity. A genuine performance comparison would need fixed starting revisions, repeated trials, equivalent tasks, environment controls, and a predefined outcome measure.

## 8. Comparison profile

The twelve stable dimensions and evidence entries C01–C12 live in [the profile](index.md#comparison-evidence). The strongest distinguishing points to compare with other engineers are context-loading strategy, review calibrated by detectability, maintaining code quality, and caution about extrapolating human TDD practices to an entirely autonomous loop.

Do not turn this into a simple pro-TDD/anti-TDD label: the August evaluation asks a narrower question. Likewise, investigating specification tools is not the same as committing to spec-as-source.

## 9. Sources and research gaps

Read the [source register and cached findings](sources.md) for dates, attribution, scope, and supported claims. The research uses eight substantive authored articles, with the author's own site and the series index as discovery aids. No paid lessons, private repositories, or inaccessible talk content were treated as inspected evidence. Sources were checked as public pages; exact repository revisions and a complete daily tool inventory were not available from these pages.
