---
title: GitLab — workflow and optional practice
parent: GitLab
nav_order: 2
last_updated: '2026-10-26'
research_checked: '2026-10-26'
research_cutoff: '2026-10-26'
evidence_since: '2025-10-01'
last_read: null
status: unread
---

# GitLab — workflow and optional practice

[Profile](index.md) · [Research](research.md) · [Sources](sources.md)

## Declared workflow, not an observed run

The playbook connects intent/specification → agent work → CI → independent review → integration. DevEx separately specifies human review. Keep the organisational and team scopes distinct. [Playbook](sources.md#s02) · [DevEx](sources.md#s01)

Published rules describe intended operation. A particular run would additionally need evidence that its checks executed, its exceptions were authorized and its reviewer was independent.

<a id="optional-practice"></a>

## Optional practice

**Suggested adaptation, not reported company practice.** No proposed step below is evidence that the company follows it.

Use an isolated sample repository to compare a written instruction with an executable constraint. This is our adaptation; no GitLab deployment is reproduced.

1. Choose an invariant, such as forbidding one module from importing another. Write a human-readable rule and a structural test that observes imports.
2. Ask an assistant to implement a small feature without editing the rule or its test. Record the changed files and the check output.
3. Seed a prohibited dependency and confirm that CI fails even if the feature's functional tests pass.
4. Demonstrate a bypass: allow an exception label or baseline update. Record who can authorize it and whether the same actor could both implement and approve it.
5. Separately compare a test-count check with a behavioural assertion. Remove an assertion while retaining the test count and show which check catches it.
6. Review agent instruction changes like code changes. Keep the original contract visible and document why any revision is legitimate.

**Success observations:** the structural violation is detected; the exception path is explicit; unchanged test count is not mistaken for correctness; and author/reviewer independence can be explained. A prompt asking the agent to obey the rule is not the enforcement mechanism.
