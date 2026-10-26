# Engineer research and comparison prompt

Copy the prompt below into a research-capable assistant. Replace `{PERSON}`; other inputs are optional. In this repo, `/engineer` supplies the inputs for you.

```text
PERSON: {PERSON}
COMPARE_WITH: {OPTIONAL_COMMA_SEPARATED_PEOPLE}
FOCUS: {DEFAULT: software engineering practice, particularly AI-assisted and agentic development}
PROJECT_CONTEXT: {OPTIONAL_PROJECT_AND_STACK}
AS_OF: {DEFAULT: today's date}
EXISTING_PROFILES: {OPTIONAL_PATHS_OR_LINKS}
STAGE: {DEFAULT: all; research, slides, all, or compare}
REFRESH: {DEFAULT: false}
```

## Prompt

Research the software engineering approach of PERSON, with particular attention to FOCUS. Produce an in-depth, practical guide and a consistent evidence-based profile that can be compared with other engineers. If COMPARE_WITH is provided, research those people sufficiently to produce a fair comparison as well.

The goal is to understand what this person actually does, recommends, and prioritises; why; how to apply it; and where their approach differs materially from others. Do not rank personalities or turn a public reputation into a fabricated methodology.

### 0. Separate research from presentation

Store each engineer's research in their own directory, with a detailed guide, source-level findings and register, stable claims, and the D01–D12 comparison profile. In this repo, follow `docs/engineer-cache-schema.md`; elsewhere, preserve the same separation and fields in the destination's normal format.

- **research:** build missing research or reuse the existing cache. Browse to refresh existing research only when REFRESH is true. Preserve as much useful source-backed detail as is available; split substantive topics into chapters. Do not truncate research to a slide-sized overview.
- **slides:** read the cache and derive bite-sized Markdown slides and a viewer wrapper. Do not browse. Keep evidence labels, source dates, qualifications, and links to the full research.
- **compare:** read the selected caches and derive detailed side-by-side field cards plus a comparison synthesis. Do not independently research the same people again. Missing caches and claims stay missing; report the exact prerequisite research work.
- **all:** ensure caches exist, then derive consumable views. Existing caches are reused unless REFRESH is true.

When REFRESH is explicitly true, refresh selected research first and then derive the requested views. STAGE applies before the research instructions below: stages that use only cached material must not execute fresh searches. A default comparison request uses the compare stage; a default single-person request uses all. Stage 2 is a synthesis of stage 1, never a competing source of truth. Publication/build/generation dates must not be passed off as research dates.

### 1. Resolve the subject and scope

- Identify the intended person, their canonical name, aliases, and official channels. Resolve obvious aliases and spelling variants; ask only if identity remains genuinely ambiguous.
- Use AS_OF as a research cutoff. State the actual research date. Do not describe later material as available at an earlier cutoff. If a historical cutoff is requested, distinguish contemporaneous evidence from later retrospective accounts.
- Read relevant EXISTING_PROFILES and project instructions before choosing what needs updating. Existing notes are leads, not substitutes for checking original sources. Preserve reading metadata when editing existing profiles.
- Focus on engineering decisions and workflows. Include earlier practices when they explain current choices, while keeping historical and current recommendations distinct.
- Do not assume the person endorses coding agents, TDD, BDD, specifications, multi-agent systems, or any other approach. If they reject the premise or have not documented a position, report that faithfully.
- If no PROJECT_CONTEXT is supplied, use the neutral worked example below. Do not require project details to begin useful research.

### 2. Research primary material

Search the web and inspect original sources: authored articles, newsletters, books or accessible excerpts, talks, interviews, repositories, instructions, demos, and official tool documentation. Prefer direct demonstrations when describing an actual workflow. Search summaries and other people's commentary are discovery aids, not evidence of the subject's practice.

Search across these questions, adapting queries to the person:

- What is hard about software engineering, and what do they optimise for?
- How do they discover requirements and decide the next increment?
- How do they design, test, refactor, review, integrate, and release?
- What do they personally do with AI assistants or agents?
- What is delegated, and what stays with a human?
- How do they manage context, instructions, memory, tools, and permissions?
- What feedback tells them the work is correct, useful, and maintainable?
- Which named tools do they actually use, build, recommend, or merely discuss?
- Have their views changed? Are there explicit counterexamples or qualifications?

Start with recent material, then trace important ideas to earlier sources. Seek multiple independent primary artifacts for major themes when available. Stop when the guide's important claims are supported and further searches are repetitive; do not use source counts as a proxy for quality.

Inspect the actual repository or documentation before publishing installation commands, command names, or configuration. Record a revision/version when available. A public talk is evidence of what was said; a linked demonstration is not evidence that the person uses every dependency in daily work.

Do not access paid or private material without authorised access. Cite public outlines only for what those outlines establish. If browsing or source access is unavailable, state the limitation and produce a clearly provisional outline rather than presenting remembered claims as verified research.

### 3. Label the evidence

Use these labels throughout the profile and comparison:

- **Demonstrated:** directly observable in an inspected demo, repository, or worked session. State what the demonstration actually shows; do not generalise it into universal effectiveness.
- **Stated:** explicitly advocated or self-reported by the person. Separate recommendations from descriptions of their own practice.
- **Inferred:** your interpretation of inspected primary evidence. Explain the inference and cite it.
- **Suggested adaptation:** your proposed implementation, prompts, or tool choices for the user's context.
- **Not established:** sufficient public evidence was not found. This means unknown, not opposition or absence of use.

Give factual claims nearby citations and a dated source register. Distinguish the subject's own words from someone they quote, interview, or host. A guest's tool is not automatically the host's tool. Preserve qualifications; use short quotations sparingly and respect source limits.

Separate effectiveness claims from preferences. A promotional statement, personal report, or anecdotal demo is not a controlled productivity result. Include study scope and limitations for empirical claims. Do not invent private prompts, model settings, daily habits, performance numbers, or a complete personal stack.

### 4. Produce a profile in this fixed order

Use the same section names and comparison dimension IDs across runs. Adapt the content to the evidence; do not force the person into another engineer's framework.

1. **Approach in brief.** A concise thesis, their priorities, and the strongest supporting evidence. Include the scope and date of the profile.
2. **Techniques and principles.** Explain each substantial technique, what problem it solves, when it helps, tradeoffs, and common misuse. Separate enduring principles from AI-specific practices.
3. **A feature from idea to release.** Reconstruct the documented sequence, including decision points, feedback, and stop conditions. Mark gaps rather than filling them with generic best practices. Follow with a separately labelled proposed application to the worked example.
4. **Tools and setup.** Table: tool, purpose, relationship to the person, evidence label, source/date/revision, setup status. Distinguish built, personally used, recommended, demonstrated, discussed, and suggested by you. Include verified setup instructions only where useful. Do not install anything merely to write the guide.
5. **Reusable working prompts.** Original prompts for the proposed workflow, clearly labelled as your adaptations. Do not claim these are the subject's prompts unless an inspected source establishes that. Where appropriate, include concrete checkpoints and expected evidence rather than generic exhortations.
6. **Failure modes and limits.** What this approach may miss, contexts where it fits poorly, what it requires from the team, and unanswered questions. Separate the person's cautions from your analysis.
7. **First practical lab.** A small, complete exercise with observable outputs, meaningful checks, and a retrospective. Proposed times and success criteria are heuristics, not research findings.
8. **Comparison profile.** The fixed matrix below, even when researching only one person.
9. **Sources and research gaps.** Source title, author/speaker, publication date when known, URL, inspected scope, supported claim IDs, and limitations. Include inaccessible sources only as unresolved leads, not supporting evidence.

Keep the guide readable: a short entry point, a linked contents list, concrete examples, and deeper sections. Prefer precision over a target word count.

### 5. Use these fixed comparison dimensions

For each dimension, record a concrete position or workflow, the evidence label, source/date, and a qualification or “not established.” Give significant claims stable local IDs, such as C01, so comparisons can point back to evidence. Do not assign invented numerical scores.

| ID | Dimension | Questions to answer |
|---|---|---|
| D01 | Goal and bottleneck | Speed, learning, simplicity, correctness, throughput, maintainability, or another priority? |
| D02 | Requirements and specification | Examples, conversations, prose, executable specs, prototypes? Who owns intent? |
| D03 | Increment and planning | What is the unit of progress? How much is planned up front? |
| D04 | Testing and verification | Test-first or after? At which boundaries? How are tests themselves checked? |
| D05 | Design and refactoring | How do architecture, simplicity, coupling, and evolution guide changes? |
| D06 | Human understanding and review | What must a human read, understand, decide, and approve? |
| D07 | Agent autonomy and coordination | Single assistant, orchestration, parallelism, roles, or little/no agent use? |
| D08 | Context and durable state | Instructions, skills, memory, task records, handoffs? |
| D09 | Tooling and environment | Actual tools and their roles, with versions/dates where available? |
| D10 | Integration and release | Integration cadence, branches, CI, deployment, rollback? |
| D11 | Boundaries and safeguards | Permissions, test ownership, protected checks, budget and stop conditions? |
| D12 | Evaluation and tradeoffs | What evidence establishes success? Costs, failures, appropriate contexts? |

Keep each dimension about the same engineering decision across people. In D04, distinguish who authors or approves tests, test level, cadence, and the boundary exercised; do not collapse every technique into “uses tests.” In D10, distinguish integration/version-control advice from a demonstrated production release process. In D12, describe the person's documented evaluation/tradeoff position when available, putting the absence of comparable effectiveness evidence in the qualification rather than substituting it for the position.

For every dimension, distinguish recommendation from reported personal practice, inspected artifact, and our inference in the qualification. A shared publication host, coauthored book, or interview does not make a claim personal to every associated engineer. State a material historical date in the compact position or qualification so the short comparison does not erase it. The `checked` date is when evidence was inspected, not when the described practice occurred.

Stable section names and dimension IDs must survive updates, so profiles remain comparable over time. Unknown entries are useful results; do not fill them with stereotypes.

### 6. Work the same example across people

Unless PROJECT_CONTEXT provides a better common example, use:

“A request may be delivered more than once. A reward worth 10 points must be awarded once per submission ID. A successful award must survive restart. A new submission ID is a separate event. Start by establishing how the existing system behaves.”

The common observable sequence is fixed:

| Step | Action | Expected balance |
|---|---|---|
| 0 | Read an isolated empty account | 0 |
| 1 | Deliver submission A | 10 |
| 2 | Deliver A again | 10 |
| 3 | Restart the runtime, retaining durable data, then read before delivering anything | 10 |
| 4 | Deliver A again after restart | 10 |
| 5 | Deliver distinct submission B | 20 |

Observe step 3 separately from step 4: a system that loses both balance and deduplication state could re-award A and appear to pass a combined restart-and-replay assertion. A test-only reset or recreated in-memory fixture is not evidence of persistence across runtime restart. Any additional stress, concurrency, UI, or network checks must be labelled optional extensions and excluded from the common acceptance scope.

Use the same agreed requirements, starting code assumptions, runtime constraints, and definition of done for each person. Make unknown starting conditions explicit. Do not add concurrency, networking, or UI requirements for only one participant.

Show how each documented approach would influence the proposed implementation sequence. Label this a **suggested adaptation**, not a demonstration of what that person would do. If runnable comparisons are explicitly requested later, fix the starting revision, task, environment, checks, model, and trial protocol before comparing outcomes. Research alone cannot establish which workflow is faster.

### 7. Compare when requested

For each person in COMPARE_WITH, inspect the existing research cache and the claims used in the comparison. Reuse those sources and record their research cutoff and last verification date. Do not browse or refresh unless REFRESH is true, in which case run the research stage first. If only partial evidence is available, mark the comparison provisional and name the gaps.

Produce:

- A side-by-side matrix using D01–D12. Every substantial cell links to a sourced claim; unknown cells say “not established.”
- The most useful points of agreement and disagreement, with direct evidence for both sides of a claimed disagreement.
- A classification for each apparent difference: **principle**, **workflow**, **tool choice**, **context**, **change over time**, or **insufficient evidence**. Different vocabulary does not necessarily mean disagreement. Similar vocabulary does not establish equivalent practice.
- The common worked example, showing concrete differences in proposed steps and review responsibilities.
- Conditional adoption advice: “If your constraint is X, try Y, because Z.” Label this your synthesis. State tradeoffs and a small experiment to validate it locally.
- Conflicts a combined workflow would need to resolve. Do not merge incompatible prescriptions and pretend that all approaches agree.

Compare positions at comparable dates and task/team scales. Do not contrast one person's historical unit-testing advice with another person's recent agent-orchestration demo without making that mismatch explicit. Avoid a winner or league table unless there is genuinely comparable outcome evidence.

### 8. Deliver and check

Before finishing, check identity, dates, attribution, links, setup commands, evidence labels, and coverage of all D01–D12 dimensions. Check that proposed examples do not masquerade as documented habits and that a comparison does not treat missing evidence as disagreement.

If saving in a repository, follow its conventions, use relative internal links, preserve unrelated changes, and add discoverable links. Save one directory per canonical person, retaining detailed research chapters, source findings, and structured comparison fields separately from derived slides. Save a separate comparison directory when requested. Reuse established paths rather than creating duplicate profiles. Do not alter existing slideshow lessons merely to insert a new research topic. Do not mark material read or exercises complete. Do not commit, push, publish, install tools, or send messages unless requested or already authorised for that action.

Report what was created, how it was checked, and any material research or rendering limitations.
