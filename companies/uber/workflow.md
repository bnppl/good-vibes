---
title: Uber — workflow and optional practice
parent: Uber
nav_order: 3
last_updated: '2026-10-26'
research_checked: '2026-10-26'
research_cutoff: '2026-10-26'
evidence_since: '2025-10-01'
last_read: null
status: unread
cache_schema: 1
---

# Uber: workflow and optional practice

[Research](research.md) · [Sources](sources.md)

## Observed workflow map

This map links documented stages; it is not a claim that every team follows one universal sequence.

| Stage | Evidence to inspect | Observation boundary |
|---|---|---|
| Requirements and specification | [C02](research.md#c02) | The evaluator strengthens an input artifact; it does not make the final approval decision. |
| Increment and planning | [C03](research.md#c03) | An August routing strategy, not a fixed staffing model or universal task size. |
| Testing and verification | [C04](research.md#c04) | Precision, recall, noise and latency are task measures, not proof of bug-free code. |
| Human understanding and review | [C06](research.md#c06) | This concerns PRD review; exact code-review depth differs by managed workflow. |
| Agent autonomy and coordination | [C07](research.md#c07) | No blanket unattended production-release authority is established. |
| Context and durable state | [C08](research.md#c08) | An internal platform account; private retrieval rules and every memory layout were not inspected. |
| Integration and release | [C10](research.md#c10) | A complete approval, deployment and rollback policy remains unestablished. |
| Boundaries and safeguards | [C11](research.md#c11) | Gateway presence does not establish every task’s effective permission set. |
| Evaluation and tradeoffs | [C12](research.md#c12) | Usage growth or a cheaper session alone does not demonstrate more customer value. |

<a id="optional-practice"></a>

## Optional practice — our adaptation

Use an isolated toy event processor to practise evidence-based delegation. This exercise is proposed here; it is not a reported company implementation, benchmark, prescribed workflow or proof of effectiveness.

Agree the observable contract before prompting an agent: an isolated account starts at zero; event A adds ten points exactly once; duplicate delivery has no extra effect; durable state survives a runtime restart; a different event B adds a further ten. Keep a human-reviewed copy of these expected observations outside the agent-editable implementation.

| Step | Action | Independent observation |
|---|---|---|
| 0 | Create an isolated account | Balance is 0. |
| 1 | Deliver event A | Balance is 10. |
| 2 | Deliver event A again | Balance remains 10. |
| 3 | Restart only the runtime, retaining durable storage | Read balance before any replay: still 10. |
| 4 | Replay A after restart | Balance remains 10. |
| 5 | Deliver distinct event B | Balance becomes 20. |

A balance of ten only after replay cannot demonstrate persistence through restart. Record both state observations. Also try malformed input and a controlled failure around the write boundary; explicitly define what atomicity guarantee you intend to test rather than assuming a passing happy path proves it.

Ask an agent for a bounded implementation or inspection, then capture the patch, commands, actual output and remaining uncertainty. Use an independent process to read stored state. If the implementation changes a test or expectation, review the semantic change separately. A screenshot, prose explanation or claimed successful command is not the state observation itself.

Compare the initial and final change using completion, reviewer effort, defect discoveries and cost per accepted task. Do not reward token consumption or generated line count. Decide approval, merge and deployment authority before the run, and use only an environment whose access matches the task.
