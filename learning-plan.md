---
title: Learning Plan
nav_order: 6
last_updated: 2026-10-26
last_read: null
status: unread
---

# Learning Plan: Reliable AI-Assisted Engineering

**Prefer smaller bites?** Open the [Learning Deck](learning-deck/index.md): 16 short cards with examples, revealable recall answers, and four lab cards. Return here to track exercise evidence.

**Goal:** Demonstrate which AI workflows improve delivery, quality, cost, and your understanding on a real project. Context engineering and proportionate specifications support that goal; framework adoption is optional.

**Rhythm:** Four short sessions per week (10–15 minutes each), plus one practical lab (60–90 minutes). Short sessions work on Obsidian mobile: read the named section and produce the small output. Labs need your development environment. Budget **7–10 hours over four weeks**, excluding optional deep reads. Longer chapters are reference material: read the sections needed for the exercise rather than the whole chapter in one sitting.

**Use one project throughout.** Your spelling app is a good candidate. Choose a small bug, a feature, a refactor, a regression, and a tool/context discovery task. Use isolated branches and synthetic data. The suggested five-task starting set is a learning exercise, not enough evidence for a general productivity claim.

**Progress preserved:** The previous plan marked foundations, instructions, knowledge, and orchestration complete (old Sessions 1, 2, 3, 6). Keep those completions as prior reading; the new exercises still need evidence. Existing chapter `last_read` and `status` values remain unchanged. Reading progress and exercise completion are separate.

**At each sitting:** Before opening notes, recall the previous lesson and one failure mode. Explain your answer, then check it. Revisit the explanation at the next weekly lab. A checked box below means you produced the stated evidence; `/study mark-read` only records reading.

## Week 1: Establish a Baseline and Verify Early

### Session 1: Context and a Measurable Goal

**Read:** [Foundations](context-engineering/foundations.md), the context-window mental model; [evaluation](verification/agent-evaluation.md), “Two different questions.”

**Output:** Name your project, one delivery problem, five representative tasks, and their acceptance criteria. Include a task where the agent should ask for clarification or stop. Record your current workflow before improving it.

- [ ] Task list and success criteria recorded.

### Session 2: Evaluate the Agent

**Read:** [Agent Evaluation](verification/agent-evaluation.md), “A small evaluation loop” and “Keep comparisons fair.”

**Output:** Create a blank run record: task, starting commit, model/tool version, instructions, trial, outcome, review minutes, rework, elapsed time, cost or tokens, and failure category. Reserve additional unseen tasks before tuning.

- [ ] Baseline protocol and held-out task list recorded.

### Session 3: Acceptance Tests and Human Understanding

**Read:** [Agentic TDD](verification/agentic-tdd.md), the verification-first workflow; [comprehension debt](verification/comprehension-debt.md), active inquiry.

**Output:** For one task, write a behavioural check and show it fails for the intended reason before implementation. Define what you must be able to explain before accepting the change. Use exploratory investigation first if the behaviour is not yet understood.

- [ ] Failing check and explanation criteria recorded.

### Session 4: Lean Instructions

**Read:** [Instruction Layer](context-engineering/instruction-layer.md), rules files and instruction budgets.

**Output:** Identify three redundant, conflicting, or derivable instructions. Propose a smaller instruction file with pointers to detailed material. Preserve safety constraints. There is no universal rule-count ceiling; test whether the change helps.

- [ ] Candidate instruction change prepared; baseline retained.

### Lab 1: Run the Baseline

Run your five tasks with the current configuration from reproducible starting states. Repeat at least two tasks to expose variability. Review actual diffs, test results, and final application state; the agent's claim of completion is not evidence. Record outcomes and explain one generated change without the agent's help.

**Done when:** You have a baseline table, one analysed failure, and a reviewed change you can explain. Keep task-specific acceptance tests separate from agent-editable working tests where practical.

- [ ] Baseline and failure analysis completed.

## Week 2: Context Retrieval and Harness Feedback

### Session 5: Retrieval That Fits the Task

**Read:** [Knowledge Layer](context-engineering/knowledge-layer.md), retrieval strategies; [Tool Layer](context-engineering/tool-layer.md), tool selection.

**Output:** Trace one failure to missing information, irrelevant information, stale information, or a poor tool interface. Choose one retrieval change: direct file discovery, upfront context, or a combination. Hybrid search is an option to evaluate, not a universal default.

- [ ] One retrieval hypothesis and predicted outcome recorded.

### Session 6: Harness Engineering

**Read:** [Harness Engineering](context-engineering/harness-engineering.md), the five layers.

**Output:** Map your instructions, tools, verification, state, permissions, and traces. Pick one missing feedback mechanism, such as automatically exposing a test failure with an actionable message. Include its limits.

- [ ] Harness map and one proposed feedback change recorded.

### Session 7: Tool Interfaces and Useful Traces

**Read:** [Tool Engineering](context-engineering/tool-engineering.md), schemas and deterministic feedback; [Agent Evaluation](verification/agent-evaluation.md), failure diagnosis.

**Output:** Rewrite one ambiguous tool description or error message. Decide which outputs can be shortened and how the full evidence remains retrievable. Capture tool names, arguments, results, and version/configuration metadata; redact secrets and personal data.

- [ ] Tool proposal and trace fields recorded.

### Session 8: State Across Context Windows

**Read:** [Memory Layer](context-engineering/memory-layer.md), structured updates; [Orchestration Layer](context-engineering/orchestration-layer.md), context resets versus compaction.

**Output:** Draft a handoff containing goal, current commit, verified state, open questions, and next action. Choose reset triggers from observed drift, task boundaries, and context pressure rather than a fixed time limit.

- [ ] Handoff and reset criteria recorded.

### Lab 2: Change One Variable

Compare the baseline with one instruction, retrieval, tool, or feedback change at a time. Restore the same starting state; repeat selected tasks under both configurations. Try the candidate on held-out tasks after tuning, without rewriting the rubric to favour it. Keep model and tool versions fixed where possible; document unavoidable changes. Compare correctness, review/rework time, elapsed time, and cost.

**Done when:** You can keep or reject a change with evidence and state the limits of the small sample. Do not infer broad productivity gains from a handful of runs.

- [ ] Comparison and decision recorded.

## Week 3: Cross-Session Reliability and Containment

### Session 9: Behaviour Across Sessions

**Read:** [Cross-Session Regression](verification/cross-session-regression.md); [BDD for Agents](verification/bdd-for-agents.md), feature-boundary scenarios.

**Output:** Write three executable examples for a feature, including an edge case and an existing behaviour that must survive the change. Gherkin is useful when it improves shared understanding; another readable test format is acceptable.

- [ ] Behavioural examples reviewed against intent.

### Session 10: Boundaries and the Right Checks

**Read:** [DDD Boundaries](verification/ddd-boundaries.md), context maps; [Contract Testing](verification/contract-testing.md), lighter-weight options; [Fitness Functions](verification/fitness-functions.md), dependency rules.

**Output:** Sketch the boundary your change crosses. Select one appropriate contract, integration, property, or architecture check and explain what it cannot detect. Scope sessions around cohesive changes; a bounded context can require many sessions.

- [ ] Boundary map and check selection recorded.

### Session 11: Permissions and Prompt Injection

**Read:** [Agent Security and Containment](verification/agent-security.md).

**Output:** Write an access matrix for files, network, credentials, and external writes. Distinguish untrusted source content from authorised instructions. Define when an operation needs human review, and where the environment enforces the boundary.

- [ ] Access matrix and benign negative-test plan recorded.

### Session 12: Test the Safety Net and the Handoff

**Read:** [Test the Tests](verification/test-the-tests.md), mutation and property testing; [Characterization and Handoff](verification/characterization-and-handoff.md).

**Output:** Select one deliberate regression that the suite must reject. For legacy code, distinguish observed behaviour from intended behaviour before approving characterization tests. Include verification commands and unresolved risks in the handoff.

- [ ] Negative test and handoff review completed.

### Lab 3: Resume Safely

Complete a small feature, then start a fresh session from the recorded handoff. Extend the feature and verify the earlier scenarios still pass. Introduce a deliberate regression in an isolated copy and confirm the relevant check fails. Using only disposable fixtures, demonstrate a blocked out-of-scope file write or network request and inspect the denial evidence. Never use production systems, real secrets, or third-party targets for this exercise.

**Done when:** You have a successful handoff, evidence of a caught regression, and evidence that an enforced access boundary rejects a benign prohibited action. Record remaining gaps.

- [ ] Cross-session and containment evidence recorded.

## Week 4: Selective Orchestration and Team Adoption

### Session 13: Start with a Simple Workflow

**Read:** [Single-Agent Patterns](agent-patterns/single-agent.md); [Agentic Development](context-engineering/agentic-dev.md), proportionate specifications and practical playbook.

**Output:** Describe a simple workflow for one real task: intent, investigation, implementation, checks, review. Name the specific bottleneck that might justify more orchestration.

- [ ] Simple workflow and bottleneck recorded.

### Session 14: Delegate Only with a Testable Reason

**Read:** [Multi-Agent Coordination](agent-patterns/multi-agent.md); [Orchestration Layer](context-engineering/orchestration-layer.md), parallel agent limits.

**Output:** Propose a comparison with independent work ownership, shared interfaces, isolated workspaces, integration checks, and a cost budget. Choose agent count experimentally. A research-system benchmark does not establish coding gains for your project.

- [ ] Comparison design or reason to retain one agent recorded.

### Session 15: Autonomy, Recovery, and Review

**Read:** [Autonomy](agent-patterns/autonomy.md); [Production Lessons](agent-patterns/production.md).

**Output:** Define allowed actions, escalation triggers, retry/step limits, rollback, and who reviews consequential changes. Preserve the agent's ability to report uncertainty. Choose autonomy according to the task and blast radius.

- [ ] Operational boundaries and recovery plan recorded.

### Session 16: Evidence and Team Recommendation

**Read:** Revisit [Agent Evaluation](verification/agent-evaluation.md) and your experiment records; consult the [verification sources](verification/sources.md) for one unresolved claim.

**Output:** Draft a one-page recommendation: problem, measured results, costs, comprehension check, risks, adoption conditions, and what would reverse your decision. Distinguish measured observations, source findings, and your hypotheses.

- [ ] Draft recommendation completed.

### Lab 4: Compare and Decide

Run the simple workflow and your justified alternative on matched tasks with comparable budgets. If there is no reason to add agents, compare another workflow change instead. Include at least one held-out task and record integration/review effort, failures, and cost as well as elapsed time. Explain one architectural choice without AI, then finalise the recommendation.

**Done when:** You have a repeatable workflow, a result table, and an adoption recommendation whose claims match the evidence.

- [ ] Final comparison and recommendation completed.

## Optional Framework Survey and Deep Reads

After the core labs, consult the [framework index](frameworks/index.md) and choose at most two tools relevant to an observed bottleneck. Read their pages and current official documentation; historical rankings are discovery aids, not evidence of fit. Compare the tools on the same task and starting commit. Include setup, maintenance, review, and migration costs.

All original framework readings remain available: [Kiro](frameworks/kiro.md), [Spec Kit](frameworks/github-spec-kit.md), [Tessl](frameworks/tessl.md), [OpenSpec](frameworks/openspec.md), [Augment Intent](frameworks/augment-intent.md), [MetaGPT](frameworks/metagpt.md), [GPT Pilot](frameworks/gpt-pilot.md), [Smol Developer](frameworks/smol-developer.md), and [Factory Droids](frameworks/factory-droids.md).

Use [context sources](context-engineering/sources.md), [agent-pattern sources](agent-patterns/sources.md), and [verification sources](verification/sources.md) when you need depth. Check publication dates, tested model/harness versions, sample sizes, and applicability. Newsletter coverage and discussion popularity are discovery signals, not validation.

## Keeping It Fresh

`/study` and `/study status` scan all four content directories. Follow this plan's prerequisites: foundations → evaluation and verification → context/harness → cross-session reliability and security → selective orchestration. Framework coverage is optional. `/study update` proposes sourced changes; `/study update --apply` applies them. Neither reading a chapter nor updating it completes a practical exercise.

**October 26, 2026 revision:** Replaces the 29-session reading sequence with 16 short sessions and four labs; brings evaluation and verification forward; adds dedicated containment; makes frameworks optional; preserves prior reading progress; replaces universal numerical rules with workload-specific experiments.
