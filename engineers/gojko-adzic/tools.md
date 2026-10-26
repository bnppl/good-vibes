---
title: Gojko Adžić — tools and setup
parent: Gojko Adžić
nav_order: 3
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
---

> **Scope update — 26 October 2026:** Start with [recent AI evidence](recent-ai.md). The material below retains earlier principles, dated reports and our optional adaptations. It must not be read as a complete current personal AI workflow.

# Tools and setup

Public artifact inspected on **26 October 2026**, pinned to `7e8ee8b4dcd9857da48845b187540e3e1891c70f`. No installation or runtime trial was performed. [Source register](sources.md)

## Documented setup

The public getting-started guide requires Docker and make on the host. It documents this sequence inside its own repository and Claude Code session; it is not a command sequence to run in Good Vibes:

```text
make init
make claude
/impact-analysis <plan-file-name>
/plan-execution <plan-file-name>
/execute <plan-file-name>
```

Before using it, inspect the pinned [onboarding guide](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/GETTING-STARTED.md), then the current version. Replace the trivial app, explain the real project layout, and adapt the gate goals and agents to the target stack. Those instructions were verified in documentation only. [S09](sources.md#s09)

| Tool or component | Relationship to Adžić | Purpose and evidence | Setup status |
|---|---|---|---|
| Lights-on Software Factory | Published in his repository, based on Votito | Demonstrated artifact: an educational starting point | Inspected, not run |
| Claude Code | Target host of the published factory; also reported in the 2025 experiment | Stated/artifact usage, not a complete personal inventory | Feature availability not independently tested |
| Docker and make | Published environment choice | Shared project tools and mounted configuration | Configuration inspected |
| Structured plans and progress files | Published task-state convention | Human review and resumable execution | Format/docs inspected |
| Command regulator | Published hook implementation design | Ordered command decisions with role-dependent limits | Not security-audited |
| ESLint edit hook | Published feedback mechanism | Recurring local rules on eligible edits | Not all file types or tool paths |
| Deterministic workflow generator | Published orchestration design | Scheduling, gates and progress management | Not executed or benchmarked |
| Spec Kit | Tool in a September 2025 trial | Historical evaluation, not authorship or current endorsement | That trial only |
| Cucumber/SpecFlow and other BDD tools | Discussed in historical articles | Formats and test-maintenance lessons | Not evidence of the 2026 personal stack |

See [S02](sources.md#s02), [S03](sources.md#s03), [S04](sources.md#s04), [S08](sources.md#s08), [S12](sources.md#s12).

## Controls and their limits

**Regulator.** The documented Bash hook evaluates command segments and applies ordered allow, ask and deny rules. Its messages tell an agent how to recover. Role-specific rules narrow what workers, gates and checkers may do. Crucially, an allowed make recipe can perform actions the outer hook did not itself inspect. The tool's scope must remain explicit. [S06](sources.md#s06)

**Lint feedback.** The edit hook runs ESLint on eligible JavaScript edits and returns unresolved errors. The sample rules are examples, not general proof of design quality. Its documentation says a project without local ESLint is not blocked; a team must verify coverage rather than infer enforcement from the file's existence. [S07](sources.md#s07)

**Environment.** The container shares project files and keeps Claude login/history separately across sessions. This improves reproducibility, but the mounting and credential configuration still deserves project-specific inspection. No independent containment audit was performed here. [S08](sources.md#s08)

## When adapting the tooling

**Suggested adaptation.** A Python service does not need to adopt Jest merely because the sample does. Keep the business outcomes, choose checks that exercise the real application, and express them in the project's supported tools. If your workflow has one coherent implementation step, retain one worker. Add scheduling complexity only to address actual independent work.

For reward persistence, inspect the runtime and durable-state boundary. Neither an environment container nor a lint hook can establish that a restarted application still remembers submission A. That needs a behavioural observation in the acceptance evidence.
