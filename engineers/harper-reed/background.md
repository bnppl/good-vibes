---
title: Harper Reed — comparison history
parent: Harper Reed
nav_order: 9
last_updated: '2026-10-26'
nav_exclude: true
---

# Comparison history

These fields and slide notes preceded the publication-window review on 26 October 2026. They are retained for traceability, not evidence of current AI practice. [Current evidence](recent-ai.md).

## Previous comparison fields

### C01 · Goal and bottleneck

Build through explicit stages, then learn by inspecting each result.

Our synthesis of dated practitioner accounts, not a validated productivity model.

[Original supporting source](https://harper.blog/2025/04/17/an-llm-codegen-heros-journey/)

### C02 · Requirements and specification

February 2025 greenfield work separates idea clarification from a prompt plan.

Historical personal workflow; not a universal requirement for extensive upfront specification.

[Original supporting source](https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/)

### C03 · Increment and planning

October 2026 published rules size planning effort to the change.

Inspected instruction artifact, not proof of runtime compliance or a universal size threshold.

[Original supporting source](https://github.com/harperreed/dotfiles/blob/9b7fbb29d9e9835f29aae32544c1397a2ddde5ac/.claude/CLAUDE.md)

### C04 · Testing and verification

May 2025 guidance advocates TDD, linting, and checks before committing.

Agent-written checks still need scrutiny; reported effectiveness is anecdotal.

[Original supporting source](https://harper.blog/2025/05/08/basic-claude-code/)

### C05 · Design and refactoring

Published instructions prefer small changes and readable, maintainable code.

Inspected October artifact; not an independently observed design-quality outcome.

[Original supporting source](https://github.com/harperreed/dotfiles/blob/9b7fbb29d9e9835f29aae32544c1397a2ddde5ac/.claude/CLAUDE.md)

### C06 · Human understanding and review

Published instructions require actual verification before claiming completion.

Rules describe intended behaviour; full personal review execution remains unobserved.

[Original supporting source](https://github.com/harperreed/dotfiles/blob/9b7fbb29d9e9835f29aae32544c1397a2ddde5ac/.claude/CLAUDE.md)

### C07 · Agent autonomy and coordination

January 2026 personal account uses multiple remote terminal sessions.

Session multiplexing does not establish a complete orchestrator or safe parallel writes.

[Original supporting source](https://harper.blog/2026/01/05/claude-code-is-better-on-your-phone/)

### C08 · Context and durable state

February 2025 plans and checklists preserve work across sessions.

Task records are distinct from durable application data and a complete current memory system.

[Original supporting source](https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/)

### C09 · Tooling and environment

January 2026 self-report names Claude Code, Tailscale, Blink and tmux.

Dated personal setup; no present installation or private configuration verified.

[Original supporting source](https://harper.blog/2026/01/05/claude-code-is-better-on-your-phone/)

### C10 · Integration and release

April 2025 advice uses frequent commits as recovery checkpoints.

Not a complete production deployment or rollback policy.

[Original supporting source](https://harper.blog/2025/04/10/waterfall-in-15-minutes-or-your-money-back/)

### C11 · Boundaries and safeguards

September 2026 experiment reports credential exposure through its environment.

A lab incident, not a recommended production policy or reproduced security audit.

[Original supporting source](https://harper.blog/2026/09/22/break-away/)

### C12 · Evaluation and tradeoffs

Assess learning and usable outcomes rather than treating enthusiasm as a benchmark.

Our synthesis; reported learning and speed do not establish comparative superiority.

[Original supporting source](https://harper.blog/2025/04/17/an-llm-codegen-heros-journey/)

## Previous slide notes

# Harper Reed — bite-sized ideas

Derived from the cache checked on 26 October 2026. Examples are our suggested adaptations. Dates distinguish historical practices from later artifacts.

### Archived card 01

### Visible intent

> **A useful handoff separates the goal from the guess.**
>
> Reed’s February 2025 workflow keeps clarification and an execution plan distinct. That is a dated account, not a rule to specify every project fully before learning.

**In the wild:** Our reward note distinguishes “once per ID” from a proposed storage mechanism.

**Takeaway:** Review intent before approving the plan.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed research](research.md#requirements-and-context) · [Cached evidence](index.md#c02)

---

### Archived card 02

### Right-sized process

> **A small fix does not need a novel of planning.**
>
> The October 2026 public instruction file sizes process to the change. Its existence demonstrates a written policy, not compliance in every real session.

**In the wild:** Our next missing restart check may need a brief task note rather than a new architecture document.

**Takeaway:** Make the process earn its size.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed research](research.md#planning-and-increments) · [Cached evidence](index.md#c03)

---

### Archived card 03

### Executable feedback

> **A checklist cannot observe the balance.**
>
> May 2025 guidance advocates TDD and executable feedback. A claim that a task is finished still needs meaningful checks against the real system.

**In the wild:** Our duplicate-ID check reads application state, not a fixture-owned counter.

**Takeaway:** Inspect what the assertion actually observes.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed research](research.md#testing-and-feedback) · [Cached evidence](index.md#c04)

---

### Archived card 04

### Session continuity

> **Keeping the terminal alive does not keep the product correct.**
>
> January 2026 describes remote terminal sessions. That supports interaction continuity, not a complete orchestration or correctness guarantee.

**In the wild:** Our task record and durable reward data solve different problems.

**Takeaway:** Separate session state from application state.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed research](research.md#autonomy-and-coordination) · [Cached evidence](index.md#c07)

---

### Archived card 05

### Checkpoint quality

> **A polished commit message can describe broken code.**
>
> The March 2024 Git-helper account automates metadata. Our takeaway: inspect the behaviour independently of how convincing its summary sounds.

**In the wild:** A commit labelled “fixed replay” still needs the six balance observations.

**Takeaway:** Treat the message as a description, not a test.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed research](research.md#integration-and-release) · [Cached source finding](sources.md#s08)

---

### Archived card 06

### Experimental context

> **A lab harness is not a production policy.**
>
> The September experiment and public README explore broad capabilities. They were inspected here, not executed or certified as safe.

**In the wild:** Our ordinary reward exercise does not need unrelated credentials or external systems.

**Takeaway:** Compare controls within their actual context.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed research](research.md#boundaries-and-safeguards) · [Cached evidence](index.md#c11)

---

### Archived card 07

### The restart observation

> **Read before replay, or a lost reward can look restored.**
>
> Suggested adaptation: our common task observes retained balance immediately after runtime restart. Replaying A first could conceal total state loss by awarding it again.

**In the wild:** 0 → A10 → replay A10 → restart/read10 → replay A10 → B20.

**Takeaway:** Verify persistence separately from duplicate detection.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed research](research.md#a-feature-from-idea-to-release) · [Cached evidence](index.md#c04)

---

### Archived card 08

### Outcome over excitement

> **A compelling story is a reason to experiment, not a benchmark.**
>
> The learning-journey account is experience-based. Our proposed evaluation records accepted outcomes, review and rework rather than treating enthusiasm as comparable performance.

**In the wild:** Two attempts need the same starting revision and acceptance checks before their durations mean much.

**Takeaway:** Measure the whole path to a reviewed result.

[Optional practice: common reward lab](workflow.md#first-practical-lab) · [Detailed research](research.md#evaluation-and-tradeoffs) · [Cached evidence](index.md#c12)

---
