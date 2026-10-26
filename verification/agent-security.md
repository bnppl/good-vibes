---
title: Agent Security and Containment
parent: Verification
nav_order: 12
last_updated: 2026-10-26
last_read: null
status: unread
---

# Agent Security and Containment

## Instructions and enforced access are different controls

A retrieved README, issue comment, document, or tool response can contain instructions from someone other than the user. Prompt injection exploits that route. Treat external content as evidence to inspect, not authority to change the task or grant access.

Anthropic's [How we contain Claude across products](https://www.anthropic.com/research/how-we-contain-claude) (May 25, 2026) separates model-level steering from environment containment and external-content controls. Model safeguards have a non-zero miss rate. Filesystem boundaries, sandboxing, credentials isolation, and network egress controls limit what an agent can reach when steering fails. The source also describes failures in containment implementations: an intended boundary still needs verification.

A hook blocking one command is useful defence in depth. It covers the operations it intercepts; it does not prove that alternative tools, scripts, database clients, or writable configuration cannot reach the same resource. Put the permission boundary at the resource or execution environment as well.

## Design an access matrix

The following is a suggested exercise for your development workflow. Write the policy before running the agent, then distinguish requested policy from observed enforcement.

| Surface | Example boundary | Evidence to inspect |
|---|---|---|
| Filesystem | Write only inside the disposable project checkout | An out-of-scope fixture write is denied |
| Credentials | No production secrets in the agent environment | Configuration review; synthetic canaries only |
| Network | Only required destinations reachable | A request to a controlled prohibited fixture is blocked |
| Data services | Synthetic data and narrowly scoped accounts | Effective account privileges, not prompt wording |
| External actions | Explicit review for consequential publishing or writes | Approval and action records |
| Checks and logs | Candidate cannot weaken authoritative grading or access policy | Repository/CI permissions and configuration review |

Choose permissions for the task. A documentation task seldom needs database write access. Separate the ability to propose a change from the ability to apply it to a sensitive system. Keep network access, filesystem access, and service-account permissions in the review: a container alone does not answer all three questions.

## Preserve useful autonomy inside the boundary

Avoid asking humans to approve every harmless read. Define escalation for missing authority, unclear scope, sensitive data, destructive operations, and changed destinations. Add retry, step, time, and spend limits to unattended loops, plus a way to stop and recover. Review changes to those controls independently of feature completion where warranted.

Durable notes must record the user's actual scope and unresolved questions. A prior agent's summary is a claim to check; it cannot grant new authority. On resume, compare the handoff with current repository state and permissions.

## Benign negative tests

Use a disposable workspace, synthetic data, and resources you control. Put a harmless instruction in a fixture document asking for an out-of-scope marker write. Check whether the agent rejects the instruction and whether the environment would deny the operation if attempted. A behavioural refusal and an enforced denial are different pieces of evidence.

Test the boundary separately with a benign prohibited operation and inspect the denial. Use dummy secret markers; never test exfiltration with real credentials. Never target third-party systems or production resources. Record which tool paths were exercised and which remain untested. Passing these checks does not establish immunity to prompt injection.

## Action step

Write the access matrix, perform one benign boundary test, and attach the denial evidence to your run record. Note a bypass path or implementation assumption you have not tested and how you would address it before increasing autonomy.

## Cross-references

- [Agent evaluation](agent-evaluation.md) — recording outcomes, violations, and costs.
- [Autonomy](../agent-patterns/autonomy.md) — matching discretion to task risk.
- [Harness engineering](../context-engineering/harness-engineering.md) — permissions and verification as runtime components.
- [Characterization and handoff](characterization-and-handoff.md) — transferring state without inventing authority.
