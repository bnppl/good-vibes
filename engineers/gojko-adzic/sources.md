---
title: Gojko Adžić — source register
parent: Gojko Adžić
nav_order: 4
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
---

## Publication-window review — 26 October 2026

The active source-to-claim map, publication dates, practice periods and evidence kinds are in [recent AI evidence](recent-ai.md#evidence-used-in-the-comparison). Earlier mappings below are retained as provenance; they do not make a background source current. The original inspection dates remain unchanged.

# Gojko Adžić — source findings

All sources inspected on **26 October 2026**. GitHub documents below were read at immutable revision `7e8ee8b4dcd9857da48845b187540e3e1891c70f`, whose commit date is 22 October 2026. These are records of inspected material, not an archive of entire third-party works.

<a id="s01"></a>

## S01 · Keeping humans in the loop with AI coding agents

- **Author/source:** Gojko Adžić (authored public article, presentation or author catalogue).
- **Publication:** September 2026 (slide filename; exact presentation day not established).
- **URL:** [Keeping humans in the loop with AI coding agents](https://gojko.net/slides/202609-gotocph.pdf).
- **Inspected scope:** 35-page public slide deck; extracted text inspected.
- **Cached finding:** Argues for visible human supervision, useful boundaries and recurring feedback embodied in computation. Presents a staged path rather than one mandatory starting setup.
- **Supports:** C01, C06, C07, C11.
- **Limits:** Talk advocacy and reported examples. Quoted Ben Evans and Anthropic material retain their original attribution; headline performance numbers are not controlled comparative results.

<a id="s02"></a>

## S02 · Spec Driven Development — revenge of Waterfall or BDD taken to new level?

- **Author/source:** Gojko Adžić (authored public article, presentation or author catalogue).
- **Publication:** 2025-09-29.
- **URL:** [Spec Driven Development — revenge of Waterfall or BDD taken to new level?](https://www.linkedin.com/pulse/spec-driven-development-revenge-waterfall-bdd-taken-gojko-adzic-imquf).
- **Inspected scope:** Authored public article about a Citcon experiment.
- **Cached finding:** Reports trying Spec Kit with Claude Code. Editable intermediate decisions helped, but verbose documents and coarse requirements obscured detail and overloaded human review. Requests explicit scoping and iterative delivery.
- **Supports:** C02, C03, C06, C09.
- **Limits:** Historical early-tool experiment; conclusions are not a review of current Spec Kit or Kiro. He explicitly did not establish the same conclusions for Kiro.

<a id="s03"></a>

## S03 · Lights-on software factory README

- **Author/source:** Public `gojko/lights-on-software-factory` documentation and maintainers; no exclusive authorship inferred.
- **Publication:** Repository revision dated 2026-10-22.
- **URL:** [Lights-on software factory README](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/README.md).
- **Inspected scope:** Pinned public README.
- **Cached finding:** A public Claude Code boilerplate based on Votito, combining environment, regulation, feedback, planning and deterministic workflow tools.
- **Supports:** C07, C09, C12.
- **Limits:** Artifact inspection, not an executed benchmark or a complete private Votito checkout. The reported token saving lacks an independently reproduced comparison here.

<a id="s04"></a>

## S04 · Trivial planning/execution workflow

- **Author/source:** Public `gojko/lights-on-software-factory` documentation and maintainers; no exclusive authorship inferred.
- **Publication:** Repository revision dated 2026-10-22.
- **URL:** [Trivial planning/execution workflow](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/WORKFLOW.md).
- **Inspected scope:** Pinned public workflow documentation.
- **Cached finding:** Documents impact analysis, an approved phased implementation plan, and execution. Plan steps declare writable files, dependencies, and verification; small clear work can skip impact analysis.
- **Supports:** C02, C03, C08.
- **Limits:** Example workflow is intentionally replaceable. An epic-level plan does not imply a single unverified implementation increment.

<a id="s05"></a>

## S05 · The plan-to-workflow orchestrator

- **Author/source:** Public `gojko/lights-on-software-factory` documentation and maintainers; no exclusive authorship inferred.
- **Publication:** Repository revision dated 2026-10-22.
- **URL:** [The plan-to-workflow orchestrator](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/ORCHESTRATOR.md).
- **Inspected scope:** Pinned public orchestrator documentation.
- **Cached finding:** Structured plans generate scripts; parallel workers are followed by merged-tree gates and a final refutation-oriented check. Progress and run measures support resumption and diagnosis.
- **Supports:** C04, C07, C08, C10, C12.
- **Limits:** Role instructions and documented behaviour were inspected; tools were not run. Final gate guidance is not proof of the exact production release pipeline.

<a id="s06"></a>

## S06 · The Bash-command regulator

- **Author/source:** Public `gojko/lights-on-software-factory` documentation and maintainers; no exclusive authorship inferred.
- **Publication:** Repository revision dated 2026-10-22.
- **URL:** [The Bash-command regulator](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/REGULATOR.md).
- **Inspected scope:** Pinned public regulator documentation.
- **Cached finding:** A PreToolUse hook evaluates Bash command segments with ordered rules, applies role restrictions, and returns corrective reasons. Unmatched main-session commands defer to normal permissions.
- **Supports:** C11.
- **Limits:** A Bash hook sees tool-submitted commands, not every action inside invoked programs. Documentation explicitly notes make recipes execute beyond that inspection surface.

<a id="s07"></a>

## S07 · The lint hook and custom rules

- **Author/source:** Public `gojko/lights-on-software-factory` documentation and maintainers; no exclusive authorship inferred.
- **Publication:** Repository revision dated 2026-10-22.
- **URL:** [The lint hook and custom rules](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/LINTER-HOOK.md).
- **Inspected scope:** Pinned public lint-hook documentation.
- **Cached finding:** An edit hook runs ESLint on eligible JavaScript files and returns remaining errors for correction; example custom rules illustrate encoding repeated feedback.
- **Supports:** C05, C11.
- **Limits:** Limited covered write paths/file types. A project without local ESLint is not blocked by this hook. Example style rules are not universal software-design laws.

<a id="s08"></a>

## S08 · The container

- **Author/source:** Public `gojko/lights-on-software-factory` documentation and maintainers; no exclusive authorship inferred.
- **Publication:** Repository revision dated 2026-10-22.
- **URL:** [The container](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/CONTAINER.md).
- **Inspected scope:** Pinned public container documentation.
- **Cached finding:** Docker/make provide shared project tools; mounted workspace and separate persistent Claude configuration allow repeat sessions.
- **Supports:** C09, C11.
- **Limits:** Configuration is inspected, not security-audited. Container permissions and mounts still require project-specific review.

<a id="s09"></a>

## S09 · Getting started

- **Author/source:** Public `gojko/lights-on-software-factory` documentation and maintainers; no exclusive authorship inferred.
- **Publication:** Repository revision dated 2026-10-22.
- **URL:** [Getting started](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/GETTING-STARTED.md).
- **Inspected scope:** Pinned public onboarding instructions.
- **Cached finding:** Shows make init, make claude, impact analysis, planning and execution; asks users to replace the trivial app and adapt gate goals and agent tooling.
- **Supports:** C09, C10.
- **Limits:** Commands verified in documentation only; no tool installed or executed. Availability of Claude features must be checked in the target environment.

<a id="s10"></a>

## S10 · In five years, everyone will be a product manager

- **Author/source:** Gojko Adžić (authored public article, presentation or author catalogue).
- **Publication:** 2026-06-24.
- **URL:** [In five years, everyone will be a product manager](https://gojko.net/2026/06/24/everyone-will-be-a-pm/).
- **Inspected scope:** Authored public essay.
- **Cached finding:** Predicts more builders will need customer empathy, hypothesis testing and prioritisation as technical production becomes easier. Correct code alone does not establish product usefulness.
- **Supports:** C01, C12.
- **Limits:** Forecast and argument, not a demonstrated 2031 outcome or quantified team-productivity result.

<a id="s11"></a>

## S11 · Specification by Example, 10 years later

- **Author/source:** Gojko Adžić (authored public article, presentation or author catalogue).
- **Publication:** 2020-03-17.
- **URL:** [Specification by Example, 10 years later](https://gojko.net/2020/03/17/sbe-10-years.html).
- **Inspected scope:** Authored public survey account and historical explanation.
- **Cached finding:** Discusses examples as shared acceptance criteria and living documentation. Explicitly notes a self-selected sample and correlation rather than causation.
- **Supports:** C02, C04, C12.
- **Limits:** Historical, self-reported survey. Not an AI-agent experiment or a representative estimate of the entire industry.

<a id="s12"></a>

## S12 · Given-When-Then, tweak and try again

- **Author/source:** Gojko Adžić (authored public article, presentation or author catalogue).
- **Publication:** 2020-11-02.
- **URL:** [Given-When-Then, tweak and try again](https://gojko.net/2020/11/02/given-when-then-tweak-try-again.html).
- **Inspected scope:** Authored public article.
- **Cached finding:** Distinguishes core BDD examples from additional exploratory, characterisation and regression uses. Discusses external test data to avoid repetitive scenario copies.
- **Supports:** C04, C05.
- **Limits:** Historical tooling discussion; not evidence that those exact packages are in his current stack.

<a id="s13"></a>

## S13 · Five ways to reduce the cost of large test suites

- **Author/source:** Gojko Adžić (authored public article, presentation or author catalogue).
- **Publication:** 2016-05-24.
- **URL:** [Five ways to reduce the cost of large test suites](https://gojko.net/favourites/testing/agile/2016/05/24/large-test-suites.html).
- **Inspected scope:** Authored public article, including functional organisation and execution independence.
- **Cached finding:** Recommends organising tests by function rather than historical stories, and linking related documentation without chaining test execution.
- **Supports:** C04, C05, C08.
- **Limits:** Historical design advice, not an agent benchmark or a release policy.

<a id="s14"></a>

## S14 · My Books

- **Author/source:** Gojko Adžić (authored public article, presentation or author catalogue).
- **Publication:** Undated author catalogue; inspected 2026-10-26.
- **URL:** [My Books](https://gojko.net/books/).
- **Inspected scope:** Public author catalogue only.
- **Cached finding:** Confirms authorship and the product/delivery scope of Specification by Example, Impact Mapping and other books.
- **Supports:** Identity and historical context.
- **Limits:** Paid book bodies were not accessed. The catalogue is not evidence for details inside uninspected chapters.

## Research gaps

A complete private production stack, precise release/rollback policy, model settings and permissions outside the public boilerplate are not established. The September slide deck gives performance headlines but no fully reproducible controlled comparison here. No speedup is transferred to the reward exercise or treated as a ranking against other engineers. The public book catalogue supports identity and topics, not claims about uninspected paid chapters.

## Source-to-claim map

The profile's [C01–C12 entries](index.md#comparison-evidence) link to detailed cached sections and primary evidence. Each dimension's qualification distinguishes current artifact inspection, historical recommendation, self-report, and our inference. Generated slides reuse this cache without fresh research.


## Comparability audit

26 October 2026: cache-only review clarified material dates, personal versus joint or published-artifact evidence, and compact comparison wording. Claim IDs, slide IDs, source verification dates and unknowns were preserved. No fresh source research or runtime tool execution was performed.
