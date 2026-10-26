---
title: Comparing company approaches
parent: Companies
nav_order: 30
last_updated: '2026-10-26'
last_read: null
status: unread
---

# Comparing company approaches to building with AI

[Company cohort](index.md) · [Source map](sources.md) · [Research review](review.md) · [Interactive comparison]({{ '/companies/compare/' | relative_url }})

The patterns below are our synthesis of the named, dated cases. They are not mutually exclusive camps or permanent company identities. The subject is **using AI to develop, verify and maintain software**.

## Where the approaches differ

| Engineering decision | Contrasting examples | Practical implication |
|---|---|---|
| Unit of delegated work | [Stripe](stripe/index.md): bounded task to PR; [Spotify](spotify/index.md): fleet migration; [PostHog](posthog/index.md): product-loop work | Compare equivalent tasks before comparing speed. |
| Own a harness or improve a repository | [Monzo](monzo/index.md): owned controlled execution; [GitHub team](github/index.md): repository structure, contracts and review loops | Harness investment and codebase preparation solve different constraints. |
| Verify behaviour | [Shopify](shopify/index.md): remote builds, tests and app interaction; [Mozilla](mozilla/index.md): executable bug reproduction | Compilation, screenshots, unit tests and exploit reproduction observe different things. |
| Review and authority | [Stripe](stripe/index.md): human-reviewed output; [Zalando](zalando/index.md): automatic approval for selected risk classes | Delegated coding, approval, merge and release are separate permissions. |
| Context and consistency | [Spotify](spotify/index.md): standardized services; [Monzo](monzo/index.md): internal knowledge gateway | Clean interfaces and accessible organisational context help in different ways. |
| Enforce standards | [Cloudflare](cloudflare/index.md): standards-based review; [Zalando](zalando/index.md): incident-informed risk rules | A generic reviewer differs from a check grounded in the organisation’s actual failure modes. |
| Structure a large change | [Coinbase](coinbase/index.md): approved plan, scaffold and focused worker PRs; [GitHub team](github/index.md): protected regression contracts | Parallel implementation still needs agreed boundaries and independent review. |
| Reuse learning | [Duolingo](duolingo/index.md): shareable workflow definitions; [Grafana Labs](grafana-labs/index.md): migration guides corrected after execution failures | Reusable prompts need executable checks and a way to incorporate observed mistakes. |
| Scale economically | [Uber](uber/index.md): task benchmarks and outcome-denominated costs; [Microsoft](microsoft/index.md): adoption/retention and PR-output study | Usage, output, useful outcomes and unit costs answer different management questions. |
| Protect the environment | [Block](block/index.md): attack the agent setup; [Monzo](monzo/index.md): restrict execution and access | Prompt instructions alone are not access controls. |
| Keep the human loop useful | [37signals](37signals/index.md): named Lexxy/Hot Cell development cases; [Datadog](datadog/index.md): AI-built delivery/verification tools | Browser feedback and explicit constraints can matter more than generating a larger patch. A named project remains scoped. |

## A useful first comparison

**Stripe vs Monzo vs Shopify vs Spotify vs Mozilla vs PostHog** gives a broad spread without depending solely on tool vendors:

| Case | Main mechanism in the inspected account | What remains human or independently checked | Transfer condition |
|---|---|---|---|
| Stripe | Bounded asynchronous implementation | CI and human review | Tasks can be isolated and described well enough to hand off. |
| Monzo | Internal context plus controlled sandbox | Engineers review/merge; access constrained per task | Security, platform and developer experience teams can support the harness. |
| Shopify | Agent-accessible mobile execution | Build/test and observed app interaction | The relevant device/simulator environment can be made reproducible. |
| Spotify | Agent-backed fleet migration | Automated checks where available; some datasets needed owning-team manual verification | Standardization and actual validation coverage affect which work is suitable. |
| Mozilla | Investigation backed by reproduction | Findings tested against actual execution | A bug hypothesis can be exercised and checked. |
| PostHog | Feedback-to-issue-to-PR loop | Human product decisions and change acceptance remain explicit | Product signals, readiness checks and review remain connected to the work. |

The “transfer condition” column is an inference about prerequisites, not a quoted company rule. Shared use of Claude, Codex or Copilot does not make these workflows equivalent. Conversely, different tools can implement a similar boundary.

## Counterexamples that change the comparison

| Case | What the account adds | Consequence for adoption |
|---|---|---|
| [Shopify River](shopify/research.md) | Green results can belong to a stale revision, and a branch fix may not reach the default branch. | Track which revision was checked and whether the intended state actually changed. |
| [Spotify dataset migrations](spotify/research.md) | Some checks were manual and some work was deferred. | A passing build in one repository does not establish adequate verification for another task. |
| [Duolingo iOS tests](duolingo/research.md) | Worker/toolchain constraints and human PR handling remained material. | Test generation does not remove the need to verify assertions and manage review capacity. |
| [37signals Hot Cell](37signals/research.md) | The product isolates risky processing, while its author used an agent to build it. | Do not misattribute the product’s sandbox as a permission boundary on the coding agent. |
| [Datadog systems work](datadog/research.md) | A public research prototype has explicitly limited production and consistency guarantees. | Read the verification contract before interpreting a passing checker as general correctness. |
| [Grafana Tern](grafana-labs/research.md) | Running a migration exposed omissions in its generated guides. | Feed observed failures into the instructions, then test the next execution again. |
| [GitLab playbook](gitlab/research.md) | A dated declared development policy is inspectable. | Policy is useful evidence, but does not demonstrate that every session complies. |
| [CircleCI and JPMorgan](review.md) | Detailed recent operational evidence remains limited. | Preserve gaps instead of constructing an internal workflow from reports or leadership advice. |

These are cached findings with source-level details in each research chapter. They are not independently repeated experiments. The optional workflows in the knowledge bases are adaptations for learning, not company practices or comparable benchmark runs.

## Reuse the twelve engineering questions

Keep the individual-engineer dimensions to make later comparisons compatible:

| ID | Question to ask of a company |
|---|---|
| D01 | Which bottleneck and customer outcome is the AI work intended to improve? |
| D02 | Who defines intent, constraints and acceptance examples? |
| D03 | How is work sliced, planned and assigned? |
| D04 | What tests or observations establish that the change works? |
| D05 | How are design quality, refactoring and complexity controlled? |
| D06 | What must humans understand and review? |
| D07 | How much autonomy, parallel work and coordination is allowed? |
| D08 | How is repository and organisational context maintained? |
| D09 | Which tools, models, environments and shared infrastructure are used? |
| D10 | Who can approve, merge, deploy and roll back? |
| D11 | How are secrets, data, permissions and spend constrained? |
| D12 | What outcomes, costs, failures and tradeoffs are measured? |

Add company-specific fields for **team scope**, **platform ownership**, **rollout/training**, **risk tier** and **public artifact availability**. Record whether each statement is a declared policy, observed artifact, first-person case, organisational study, vendor case study or synthesis.

## Avoid false comparisons

- PR count, lines of code and token spend are not product value. An agent-opening rate does not say how often its work is merged or reverted.
- A company's own success figures are self-reports unless independently studied. Observational association is not automatically causation.
- Automatic review, automatic approval, automatic merge and autonomous production deployment are different stages.
- Banks do not necessarily use less autonomous engineering tooling; compare actual access and approval boundaries rather than industry stereotypes.
- Public source is not proof that the internal AI harness is public. A repository may be company-originated but maintained by an independent community.
- A single CTO, team or project cannot establish a company-wide practice. Undated living handbooks need a verified revision before they enter a strict recent-publication comparison.
