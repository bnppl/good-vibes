---
title: Simon Willison — detailed research
parent: Simon Willison
nav_order: 1
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: 2026-10-26
research_checked: 2026-10-26
cache_schema: 1
---

> **Scope update — 26 October 2026:** Start with [recent AI evidence](recent-ai.md). The material below retains earlier principles, dated reports and our optional adaptations. It must not be read as a complete current personal AI workflow.

# Simon Willison — agentic engineering with evidence and ownership

Research checked on **26 October 2026**. This guide covers public material available by that date. Living guide chapters are dated by inspection, because the retrieved chapter text did not establish original publication dates or an immutable revision.

[Approach](#approach-in-brief) · [Techniques](#techniques-and-principles) · [Worked workflow](workflow.md) · [Tools](#tools-and-setup) · [Prompts](#reusable-working-prompts) · [Limits](#failure-modes-and-limits) · [Lab](#first-practical-lab) · [Comparison profile](index.md#comparison-evidence) · [Source findings](sources.md).

## Approach in brief

**Stated:** Willison defines agentic engineering around software agents that can write **and execute** code, while the engineer chooses problems, supplies tools and context, and verifies outcomes. He distinguishes that responsibility from the original meaning of vibe coding, where the author stops tracking the code. The guide is explicitly evolving. [S01](sources.md#s01)

**Inferred synthesis:** his distinctive combination is ambitious experimentation with visible evidence: working prototypes, executable checks, recorded demonstrations, source walkthroughs, and responsibility for what reaches collaborators. This is a synthesis of several inspected artifacts, not a branded universal process or a measured productivity result.

Willison's patterns are not all mandatory stages in a single recipe. A walkthrough can repair an understanding gap; browser testing helps a web feature; parallel work can preserve context. Their applicability depends on the task. The separate [worked workflow](workflow.md) composes them for one fixed example and labels the composition as an adaptation.

## Techniques and principles

### Start with an executable baseline

**Stated:** he starts sessions against existing projects by having the agent run the tests. That makes the harness and existing behaviour visible, gives the agent an entry into the codebase, and encourages later regression checks. His Python example uses `uv run pytest`; that is his project setup, not a command to assume in every repository. [S02](sources.md#s02)

**Suggested adaptation:** record the command and failures before modifying the reward service. A failed baseline is useful information. It does not justify disabling a check or claiming a new change caused an older failure.

### Red before green

**Stated:** he recommends red/green TDD as a concise instruction: make a new check fail before changing implementation, then make it pass. This addresses tests that already passed and unnecessary code that no check exercises. [S03](sources.md#s03)

**Suggested adaptation:** the replay check should discriminate between one award and two awards. An import error fails too, but establishes nothing about replay handling. If the check already passes, inspect whether replay was exercised and whether the product already handles it.

### Tests plus exercised behaviour

**Stated:** Willison also wants to see features working. Agent-driven exploratory checks can reveal startup failures, UI omissions, and untested cases; discoveries can become permanent regression checks. His examples include command-line probes, API exploration, and browser automation. [S04](sources.md#s04)

**Suggested adaptation:** after unit tests pass, run the actual process, send the same submission twice, restart it, and inspect the stored result. This complements the tests instead of making an assertion about a different boundary. If the product has no browser interface, a browser demo adds little.

### Review is the author's work

**Stated:** he rejects handing collaborators an unreviewed agent patch. A useful PR is functional, manageable to review, explained in context, and supported by evidence such as testing notes. He also says the author must validate the generated PR description. [S05](sources.md#s05)

**Suggested adaptation:** the implementation author should explain why the persisted submission ID prevents a second award. “The agent says so” is not a design explanation. Check that the PR summary matches the actual diff and the checks actually run.

### Cheap refactoring and experiments

**Stated:** he argues that agents should improve quality rather than normalise worse code. He describes background refactoring in isolated work and evaluates the output through PRs; he also advocates inexpensive prototypes to test design options. His “compound” discussion credits Every's authors, rather than claiming their framework as his invention. [S06](sources.md#s06)

**Suggested adaptation:** compare a small change to the existing persistence layer with a new abstraction only if both remain plausible. A prototype can answer a technical question without becoming production code. Throwing away a failed experiment can be the correct outcome.

### Keep reusable proof, not just remembered claims

**Stated:** he collects working examples in blog notes, TILs, small tools, and research repositories. Those concrete examples can become inputs for later tasks, including recombining techniques from different prototypes. [S07](sources.md#s07)

**Suggested adaptation:** save an executable replay-and-restart example with its environment assumptions. Future agents can inspect and run it. Do not put obsolete snippets in the main instruction file without recording what makes them valid.

### Use subagents to manage context

**Stated:** he explains subagents as fresh contexts that can absorb exploration or verbose operations without filling the main context. Independent tasks can run in parallel; specialist roles are useful, but decomposition should earn its overhead. His chapter illustrates a real code-exploration session. [S08](sources.md#s08)

**Suggested adaptation:** one agent can map persistence while another maps the test harness. Give them read-only ownership initially, specific questions, and concise outputs. Their parent still needs to reconcile conflicting observations. Assigning different role names does not create independent evidence.

### Walk through unfamiliar code

**Stated:** Willison describes asking for a linear source walkthrough after building a SwiftUI presentation tool. He used Showboat to capture actual code excerpts rather than manually re-created snippets. This is a first-person account linked to code and output, not proof that every generated walkthrough is accurate. [S09](sources.md#s09)

**Suggested adaptation:** walk the path from submission to durable award. Require file references and actual excerpts. Then explain the invariant yourself without reading the generated walkthrough. An attractive document can still misunderstand control flow.

### Make hard mechanisms visible

**Stated:** he uses interactive explanations to reduce cognitive debt when a textual code tour does not make an algorithm intuitive. His word-cloud example visualises placement rather than leaving the explanation at a technical label. [S10](sources.md#s10)

**Suggested adaptation:** for replay protection, an event timeline can show first delivery, duplicate delivery, restart, and new submission. Keep that animation an explanation; only checks against the real implementation establish product behaviour.

### Separate capabilities that create exfiltration risk

**Stated:** his 2025 “lethal trifecta” analysis identifies the dangerous combination of private data, untrusted content, and an external communication channel. He warns against relying on prompt-level guardrails as complete protection. [S11](sources.md#s11)

**Suggested adaptation:** reward development does not require production customer records or production credentials. Use local synthetic data and limit outbound access when feasible. This is an environment choice, not a claim that a polite instruction enforces permissions. The trifecta is about data exfiltration; it is not an exhaustive security model.

## A feature from idea to release

The patterns above document pieces of a workflow. They do not establish one unvarying personal sequence for all projects. For a complete proposed session using the shared once-per-submission reward example, see [the worked guide](workflow.md).

A recent production-feature account provides an important counterweight to a stereotype of exclusively formal prompts. In the **9 October 2026** newsletter-page project, Willison described voice-led requirements, a live local preview, a PR, implementation review, changes to import design, and typing-based refinements before deployment. He did not present voice as his preferred interface for all detailed work. [S14](sources.md#s14)

His **20 October 2026** Battle Drones account explicitly calls the game heavily vibe coded, with little code reading but substantial playtesting and many iterations. It includes a broad gameplay request and an extended multi-agent run. Treat this as a different project context, not evidence that his responsible-production guidance was silently withdrawn. [S15](sources.md#s15)

**Inferred comparison lesson:** preserve project type when comparing this profile with another engineer. A game experiment, a production blog feature, and a guide's recommendation answer different questions. There is no evidence here for a universal rule that Willison always specifies everything upfront, always reads every line, or always lets agents work unattended.

## Tools and setup

| Tool | Relationship and evidence | Useful role | Setup status and qualification |
|---|---|---|---|
| Claude Code | Personally discussed and used in linked project accounts; **Stated** | Interactive work, asynchronous work, exploration | Host choice varies by project; no complete private configuration established. [S06](sources.md#s06), [S09](sources.md#s09) |
| OpenAI Codex | Personally used in October production-feature account; **Stated** | Local preview, code changes, PR iteration | Voice was one interaction mode in that example. Model choice is dated, not a permanent recommendation. [S14](sources.md#s14) |
| Gemini Jules | Personally named for background refactoring; **Stated** | Isolated asynchronous jobs | No installation or organisational adoption claim. [S06](sources.md#s06) |
| Git | Explicitly recommended; **Stated** | Changes, history inspection, isolation, recovery | A branch and test evidence do not make all Git operations harmless. [S12](sources.md#s12) |
| Existing test runner / pytest with uv | Personally described; **Stated** | Baseline and regression checks | Use the repository's actual commands. [S02](sources.md#s02) |
| Rodney | Built by Willison; inspected official README | CLI-driven Chrome interaction | Supports persistent Chrome sessions; requires Chrome/Chromium. [S13](sources.md#s13) |
| Showboat | Built by Willison; inspected official README | Markdown with executed commands and captured output | `verify` re-executes code blocks and compares outputs. Recorded evidence is still scoped evidence. [S16](sources.md#s16) |
| Playwright and agent-browser | Recommended/discussed in manual-testing chapter; **Stated** | Web exploration | Not evidence that every project uses either. [S04](sources.md#s04) |

No tool was installed for this research. The Rodney and Showboat READMEs were inspected, but an immutable commit was not captured; recheck before using them. The following is verified Showboat usage from its documentation, offered as a starting point, not a mandate to download tools in a restricted environment:

```bash
uvx showboat --help
```

Once available, `showboat exec` records a command and its output; `showboat verify` re-runs recorded code. Review a document's commands before executing them. A demonstration tool does not make unknown code safe. [S16](sources.md#s16)

## Reusable working prompts

These are **original suggested adaptations**, not claims about Willison's exact private prompts. His short public instructions are described in the techniques section. Use the project's established runtime and commands.

### Establish the baseline

```text
Inspect the repository instructions and test setup. Run the existing
checks before editing anything. Report the commands, outcomes, and
pre-existing failures. Find where submission IDs and durable rewards
are handled. Separate observed behaviour from assumptions.
```

### Develop one invariant

```text
Use red/green TDD for the agreed replay rule. Write a check that sends
the same submission ID twice and observes one 10-point award. Run it
against the starting implementation and explain the failure. Implement
the smallest coherent change. Preserve the expected product behaviour;
do not weaken the check to obtain a green result.
```

### Exercise the actual process

```text
Explore the feature through the product's real interface using local
synthetic data. Replay the submission, restart the process, inspect the
persisted result, then send a new submission ID. Capture what you ran
and observed. Turn any relevant discovered bug into a regression test.
Do not add unstated concurrency or UI requirements.
```

### Recover understanding

```text
Create a linear walkthrough of the changed path, using real source
excerpts and file references. Explain why a replay after restart cannot
add another award. Identify the boundary your tests exercise and what
is still outside it. List the facts I should verify myself.
```

## Failure modes and limits

The following diagnoses are **our analysis of the proposed application**, unless attributed above:

- **Green but unexercised:** tests replace the very persistence behaviour that restart correctness depends on. Add an appropriate real-boundary check.
- **Recorded but misleading:** a demo shows the current in-memory total while the durable store is wrong. State what each observation actually establishes.
- **Explained but not understood:** the generated walkthrough paraphrases intentions and omits the executed path. Trace a real submission and challenge the explanation.
- **Parallel but entangled:** two agents alter the same persistence migration independently. Divide ownership or serialize dependent edits.
- **Polished but irresponsible:** an impressive PR description masks missing review. Validate the description against the code and checks.
- **Cheap generation, expensive scope:** several speculative prototypes become several production abstractions. Pick or discard based on the question each experiment answered.
- **Security reduced to a slogan:** the lethal trifecta can reveal exfiltration exposure; it does not cover every destructive action, business abuse, or availability failure.

**Not established:** a complete personal instruction-file hierarchy, fixed agent budget policy, exact current model-routing rules, mandatory mutation-testing policy, or one standard release/rollback platform. These gaps should not be turned into claims that he avoids those techniques.

The inspected primary material is mainly advice and first-person project evidence. It does not provide a controlled comparison establishing that this composite workflow is faster or safer than another engineer's approach.

## First practical lab

This is a **suggested exercise**, not a published Willison lab. Use one small project and a real persistence boundary. Keep the shared task unchanged: once per submission ID, 10 points, survival across restart, and independent new IDs.

1. Run the baseline and map the award path. Keep the commands and observed failures.
2. Agree example inputs and expected totals. Document any unknown starting conditions.
3. Build one replay regression check, inspect its meaningful failure or pre-existing coverage, then make the intended behaviour pass.
4. Exercise a restart through the actual runtime. Send a new ID and confirm it is a separate event.
5. Produce a short source walkthrough and an execution record. Review both against the implementation.
6. Inspect the diff yourself and explain the persistence invariant without AI assistance. Prepare a small reviewable change using the project's normal process.

**Evidence to retain:** a rule table, baseline, regression result, restart observation, a source-grounded explanation, and remaining gaps. **Retrospective:** did the recording and walkthrough reveal something you would otherwise have missed? Did parallel exploration help enough to justify coordination? Track review and rework time rather than claiming a speedup from generation time alone.

## Comparison profile

The stable [D01–D12 matrix and C01–C12 claims](index.md#comparison-evidence) power the shared comparison cards. A dimension can cite several primary records; qualifications distinguish recommendations, personal projects, and our interpretations.

## Sources and research gaps

See the [sixteen-record source register](sources.md) for the inspected findings, dates, claim mapping, and limits. Stage 2 slides are derived from this cache and perform no additional research.
