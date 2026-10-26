---
title: Matt Pocock — source findings
parent: Matt Pocock
nav_order: 3
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
---

## Publication-window review — 26 October 2026

The active source-to-claim map, publication dates, practice periods and evidence kinds are in [recent AI evidence](recent-ai.md#evidence-used-in-the-comparison). Earlier mappings below are retained as provenance; they do not make a background source current. The original inspection dates remain unchanged.

# Matt Pocock — source findings

All records inspected on **26 October 2026**. Public material only; no paid bodies, private sessions or tool execution. Repository content pinned to `5beb35b040e3de97e54fa9e386d7e42d15c295c2` (commit date 19 October 2026). Article dates are displayed update dates rather than inferred original publication dates.

[Profile](index.md) · [Research](research.md) · [Common workflow](workflow.md)

<a id="s01"></a>

## S01 · My 7 Phases Of AI Development

**Author/source:** Matt Pocock.

**Publication/version:** Updated 2026-03-16. **Inspected:** 2026-10-26.

[Primary source](https://www.aihero.dev/my-7-phases-of-ai-development)

**Inspected scope:** Public authored guide.

**Finding:** Idea, optional research, prototype, PRD, ticket plan, execution and human QA are a staged approach. Older command names are historical.

**Supports:** C01, C02, C03, C06.

**Limit:** Self-reported method and advocacy, not measured superiority; do not turn March names into the October command set.

<a id="s02"></a>

## S02 · Skills For Real Engineers — README

**Author/source:** Matt Pocock / public repository maintainers.

**Publication/version:** Repository revision 2026-10-19. **Inspected:** 2026-10-26.

[Primary source](https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/README.md)

**Inspected scope:** Public README plus repository metadata.

**Finding:** The repository presents small composable agent instructions; editable-file and plugin installation routes differ.

**Supports:** C09.

**Limit:** README reports daily use, but no complete private session or installed configuration was inspected.

<a id="s03"></a>

## S03 · TDD skill

**Author/source:** Public mattpocock/skills artifact.

**Publication/version:** Revision 2026-10-19. **Inspected:** 2026-10-26.

[Primary source](https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/skills/engineering/tdd/SKILL.md)

**Inspected scope:** Pinned complete skill; public explainer also inspected.

**Finding:** Red-green at agreed public seams; independent expected values; refactoring assigned to review rather than the implementation loop.

**Supports:** C04, C05.

**Limit:** Inspected instructions, not an executed run. Explainer retains a trigger/body mismatch and discusses unsuitable tautological tests.

<a id="s04"></a>

## S04 · Code-review skill

**Author/source:** Public mattpocock/skills artifact.

**Publication/version:** Revision 2026-10-19. **Inspected:** 2026-10-26.

[Primary source](https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/skills/engineering/code-review/SKILL.md)

**Inspected scope:** Pinned complete skill; public explainer also inspected.

**Finding:** Standards and spec are separate review axes with independent agent contexts and a fixed comparison point.

**Supports:** C06, C10.

**Limit:** A designed review process is not proof that a model finds every issue. The public explainer records naming collisions with built-in commands.

<a id="s05"></a>

## S05 · Codebase-design skill

**Author/source:** Public mattpocock/skills artifact.

**Publication/version:** Revision 2026-10-19. **Inspected:** 2026-10-26.

[Primary source](https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/skills/engineering/codebase-design/SKILL.md)

**Inspected scope:** Pinned complete reference.

**Finding:** Promotes leverage and locality through interfaces that expose useful behaviour without exposing unnecessary internal complexity.

**Supports:** C05.

**Limit:** A design vocabulary, not a metric proving maintainability or instructions to add a new abstraction everywhere.

<a id="s06"></a>

## S06 · The /grill-with-docs Skill

**Author/source:** Matt Pocock.

**Publication/version:** Updated 2026-08-24. **Inspected:** 2026-10-26.

[Primary source](https://www.aihero.dev/skills-grill-with-docs)

**Inspected scope:** Public authored explainer.

**Finding:** Interviewing clarifies terms and decisions; glossary and qualifying ADRs retain some results, not all conversation content.

**Supports:** C02, C08.

**Limit:** Publication describes known gaps and disputed benefits; glossary creation is not evidence of improved model performance.

<a id="s07"></a>

## S07 · The /to-spec Skill

**Author/source:** Matt Pocock.

**Publication/version:** Updated 2026-08-24. **Inspected:** 2026-10-26.

[Primary source](https://www.aihero.dev/skills-to-spec)

**Inspected scope:** Public authored explainer.

**Finding:** A spec records settled decisions for multi-session work and agrees testing seams; a small single-session change may skip it.

**Supports:** C02, C03.

**Limit:** The source warns that ready-for-agent parent specs can be picked up incorrectly by AFK polling.

<a id="s08"></a>

## S08 · The /to-tickets Skill

**Author/source:** Matt Pocock.

**Publication/version:** Updated 2026-08-24. **Inspected:** 2026-10-26.

[Primary source](https://www.aihero.dev/skills-to-tickets)

**Inspected scope:** Public authored explainer.

**Finding:** Tickets are independently verifiable vertical paths with blocking edges; broad mechanical refactors need different sequencing.

**Supports:** C03, C07.

**Limit:** Its reported rework story is not a controlled comparison; no rate is transferred to the shared exercise.

<a id="s09"></a>

## S09 · Implement-spec skill

**Author/source:** Public mattpocock/skills artifact.

**Publication/version:** Revision 2026-10-19. **Inspected:** 2026-10-26.

[Primary source](https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/skills/engineering/implement-spec/SKILL.md)

**Inspected scope:** Pinned complete skill and public 5 October explainer.

**Finding:** A dependency frontier dispatches worktrees, integrates completed work, then runs review on the assembled branch.

**Supports:** C07, C10.

**Limit:** Artifact not executed. Public explainer notes that the post-review fix stopping rule is not fully specified.

<a id="s10"></a>

## S10 · The /handoff Skill

**Author/source:** Matt Pocock.

**Publication/version:** Updated 2026-08-24. **Inspected:** 2026-10-26.

[Primary source](https://www.aihero.dev/skills-handoff)

**Inspected scope:** Public authored explainer.

**Finding:** Portable handoff references settled artifacts rather than duplicating them; temporary output requires deliberate persistence when needed.

**Supports:** C08.

**Limit:** A document in temporary storage is not a durable memory architecture or application persistence.

<a id="s11"></a>

## S11 · The /retro Skill

**Author/source:** Matt Pocock.

**Publication/version:** Updated 2026-10-05. **Inspected:** 2026-10-26.

[Primary source](https://www.aihero.dev/skills-retro)

**Inspected scope:** Public authored explainer.

**Finding:** Use session evidence to propose environmental improvements; mechanical mistakes suggest checks, judgement calls suggest review standards.

**Supports:** C01, C12.

**Limit:** Human chooses candidates; one session can overrepresent its own problem and does not audit old checks automatically.

<a id="s12"></a>

## S12 · AI Engineer Workshop 2026

**Author/source:** Matt Pocock / AI Hero.

**Publication/version:** Publication date not established. **Inspected:** 2026-10-26.

[Primary source](https://www.aihero.dev/ai-engineer-workshop-2026~dwnll)

**Inspected scope:** Public workshop outline only.

**Finding:** Lists requirement refinement, tracer-bullet planning, supervised Ralph/TDD and AFK topics.

**Supports:** Historical teaching context.

**Limit:** Outline supports topics, not paid lesson details, live execution, production readiness, or a complete personal setup.

<a id="s13"></a>

## S13 · Implement skill

**Author/source:** Public mattpocock/skills artifact.

**Publication/version:** Revision 2026-10-19. **Inspected:** 2026-10-26.

[Primary source](https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/skills/engineering/implement/SKILL.md)

**Inspected scope:** Pinned complete short skill.

**Finding:** Uses agreed-seam TDD where possible, regular local checks, a final suite, review and a branch commit.

**Supports:** C04, C10.

**Limit:** Commit instruction is not a production release/rollback policy; no commands were executed.

<a id="s14"></a>

## S14 · The /setup-matt-pocock-skills Skill

**Author/source:** Matt Pocock.

**Publication/version:** Updated 2026-08-24. **Inspected:** 2026-10-26.

[Primary source](https://www.aihero.dev/skills-setup-matt-pocock-skills)

**Inspected scope:** Public authored explainer.

**Finding:** Repository-specific tracker/domain configuration is kept separately from reusable skills; writes follow confirmation.

**Supports:** C09, C11.

**Limit:** Prompt-driven confirmation is not filesystem enforcement or a complete personal permissions policy.

## Research gaps

- Published skill instructions and public explanations were inspected, not independently executed in an installed agent.
- The current complete personal permissions, sandbox, release, rollback, budget and model configuration were not established.
- Public course/workshop outlines support only teaching topics. No paid lesson detail is inferred.
- March workflow terms and later renamed/reorganised skills remain dated; a familiar trigger name may disagree with a newer body.
- Website text is living material. The repository pin makes inspected artifact scope reproducible but is not a snapshot of every web page.
- No controlled common-task implementation or universal effectiveness result was established.

## Cache history

26 October 2026: initial public-source research and structured claims created. Slides were then derived from this cache, without a separate stage-2 research pass.

## Cache-only refinement

26 October 2026: Material October/August 2026 dates now remain visible in the short cards, including the changed implementation/refactoring loop. No external source refresh occurred; research dates, reading metadata, card IDs and browser-storage identity were preserved.
