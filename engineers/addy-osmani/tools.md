---
title: Addy Osmani — tools and setup
parent: Addy Osmani
nav_order: 3
last_updated: 2026-10-26
last_read: null
status: unread
research_cutoff: 2026-10-26
research_checked: 2026-10-26
cache_schema: 1
---

# Tools: Relationship Matters More Than the Inventory

[Profile](index.md) · [Research](research.md) · [Source register](sources.md)

A tool named in a survey is not proof of daily use. The table distinguishes dated self-report, a published artifact, and general guidance. Installation was not performed and private configuration was not inspected.

| Tool or artifact | Relationship and evidence | Role and scope | Setup status |
|---|---|---|---|
| Gemini, Claude Code, Jules, Copilot agents | **Stated/self-report**, January workflow [S09](sources.md#s09) | Reports model switching, supervised coding, and background-agent use | Historical report; not a complete October inventory |
| Context7; gitingest/repo2txt | **Stated/self-report**, January workflow [S09](sources.md#s09) | Documentation/context access and experiments with packaging code | No setup or repository internals inspected |
| Chrome DevTools MCP | **Stated/self-report**, January workflow [S09](sources.md#s09) | Runtime/browser evidence in debugging and quality checks | A web debugging tool is not a native-app test harness |
| Agent Skills repository | **Demonstrated artifact**, public README [S11](sources.md#s11) | Maintained lifecycle-oriented skill collection | README inspected; not installed or evaluated locally |
| Worktrees, sub-agents, connectors and persistent task files | **Stated recommendation**, loop article [S06](sources.md#s06) | Primitives for isolated work and continuation | Host-specific capabilities need verification before use |
| Orchestration products in his March survey | **Discussed**, [S05](sources.md#s05) | Patterns and tool categories for coordinated delegation | Discussion does not establish personal adoption |
| Existing project checks and CI | **Suggested adaptation** on [workflow page](workflow.md) | Execute independent observations of the reward requirement | Commands must come from the target repository |

## Published skill commands

The inspected [Agent Skills README](https://github.com/addyosmani/agent-skills) describes lifecycle commands including `/spec`, `/plan`, `/build`, `/test`, `/review` and `/ship`, with namespaced forms where host commands collide. It also describes an automated build path that retains verification and pauses for failures or risk. [S11](sources.md#s11)

For someone who explicitly wants to install that collection, the README's HTTPS marketplace path was:

```text
/plugin marketplace add https://github.com/addyosmani/agent-skills.git
/plugin install agent-skills@addy-agent-skills
```

These are quoted setup instructions from the inspected repository, not actions performed in this research. A commit SHA was not captured; recheck the current README and host support before installation. Packaging, available commands and runtime features can change.

A published skill's description of a quality gate is not evidence that every execution path enforces it. Inspect what the agent can modify, what the runner actually executes, and whether the authoritative expectations are independently controlled.

## Choose tools for the neutral example

**Suggested adaptation.** Start with the existing project's runner, persistence adapter, and process restart mechanism. There is no need to add a browser, new agent framework, or multiple models merely to exercise duplicate delivery. Add a tool when it resolves a specific missing observation or action. Keep its inputs, permissions and outputs understandable.

Do not infer any particular stack for the shared reward example. TypeScript, Python, Java, an HTTP service and a local app are all possible contexts; choosing one prematurely changes the comparison task.
