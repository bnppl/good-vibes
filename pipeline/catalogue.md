---
title: Pipeline evidence catalogue
nav_exclude: true
last_updated: '2026-10-27'
---

# Pipeline evidence catalogue

[Open the interactive atlas](index.html)

Reviewed all 20 engineer and 20 company caches. This is a stage index, not a claim that any person or team follows the combined pipeline. Sources were checked in the underlying research on 26–27 October 2026; this catalogue does not revalidate current installations. Prioritises publications from 1 October 2025. Undated public artifacts remain explicitly labelled. AI-product evaluation and our hypothetical practice exercises are excluded. A retrospective publication may describe older work.

Tool names are attributed only within the named case. “Published artifact” means published by or associated with the subject, not proof of use. Declared policy and advice are not treated as observed practice. Internal harnesses are not necessarily available to install.

## Define the work

Clarify the outcome, requirements and acceptance contract.

### Conversational clarification

Process. Develop intent through questions and concrete scenarios before implementation.

- **Armin Ronacher · Personal use** — His December 2025 planning preference is conversational clarification and a visible, editable Markdown handoff. [Primary evidence](https://lucumr.pocoo.org/2025/12/17/what-is-plan-mode/) · [Cached claim](../engineers/armin-ronacher/recent-ai.md#c02). Publication/revision: 2025-12-17. Practice: Planning experience before publication; exact dates not stated. Limit: December 2025 personal preference; not a requirement to reject executable specifications.
- **Peter Steinberger · Personal use** — His October 2025 approach develops intent conversationally and uses extra planning for uncertain work. [Primary evidence](https://steipete.me/posts/just-talk-to-it) · [Cached claim](../engineers/peter-steinberger/recent-ai.md#c02). Publication/revision: 2025-10-14. Practice: Workflow reported in October; exact session dates unknown. Limit: Dated personal practice, not a claim that requirements or executable checks are unnecessary.
- **GitHub · Reported team use** — McGoffin planned conversationally before implementation. [Primary evidence](https://github.blog/ai-and-ml/github-copilot/agent-driven-development-in-copilot-applied-science/) · [Cached claim](../companies/github/research.md#c02). Publication/revision: 2026-03-31. Practice: Work before publication; exact sessions not dated. Limit: Reported planning habit, not a fixed GitHub specification template.
- **Gene Kim · Joint recommendation** — Joint Kim/Yegge October 2025 guidance uses concrete requirements, examples and context for conversational refinement. [Primary evidence](https://itrevolution.com/articles/the-key-vibe-coding-practices/) · [Cached claim](../engineers/gene-kim/recent-ai.md#c02). Publication/revision: 2025-10-09. Practice: Not a personal session. Limit: Joint excerpt; no universal private template established.

### Browser annotations & live previews

Tool. Specify changes directly on a rendered artifact.

- **Jason Liu · Personal use** — He uses browser annotations to specify changes on the artifact itself. [Primary evidence](https://jxnl.co/writing/2026/06/16/three-ways-codex-can-use-a-computer/) · [Cached claim](../engineers/jason-liu/recent-ai.md#c02). Publication/revision: 2026-06-16. Practice: Reported cross-tool and browser workflows; exact session dates unknown. Limit: Visual workflow example, not a universal requirements format.
- **Simon Willison · Personal use** — His 9 October 2026 production blog feature uses conversational requirements and a live preview; the guide also advocates iterating on evidence. [Primary evidence](https://simonwillison.net/2026/Oct/9/built-using-my-voice/) · [Cached claim](../engineers/simon-willison/recent-ai.md#c02). Publication/revision: 2026-10-09. Practice: Newsletter feature built and shipped 2026-10-09. Limit: The voice-led blog feature is one project, not a universal specification format.

### Human-owned acceptance scenarios

Process. Make behaviour explicit; retain a human acceptance contract. These sources describe different test arrangements.

- **Dave Farley · Recommendation** — Human-owned executable examples define the acceptance contract. [Primary evidence](https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe) · [Cached claim](../engineers/dave-farley/recent-ai.md#c02). Publication/revision: 2026-10-25. Practice: Proposed agent workflow; not a reproduced implementation. Limit: S01/S03/S12: human ownership and executable examples are documented; the reward examples here are our adaptations.
- **Robert C. Martin · Personal use** — In September he describes human-authored or reviewed Gherkin for elaborate behaviour. [Primary evidence](https://www.aviator.co/podcast/uncle-bob-martin-ai-clean-code) · [Cached claim](../engineers/robert-c-martin/recent-ai.md#c02). Publication/revision: 2026-09-24. Practice: Interview-page account of then-current practice; full recording not checked. Limit: Interview-page self-report; not a mandatory format for every task.
- **Martin Fowler · Recommendation** — In the January 2026 conversation, he favours concrete scenarios and domain-familiar models. [Primary evidence](https://martinfowler.com/articles/convo-what-how.html) · [Cached claim](../engineers/martin-fowler/recent-ai.md#c02). Publication/revision: 2026-01-21. Practice: Conversation; not a personal build log. Limit: Scenario recommendation and context-interview trial are documented separately; reward prompts are our adaptation.

### Reference implementations & parameterised prompts

Process. Supply an existing implementation and explicit rules for a repeatable internal-tooling task.

- **Coinbase · Reported team use** — Provide a real reference implementation, explicit rules and parameterised prompts. [Primary evidence](https://www.coinbase.com/blog/automating-figma-to-code-at-coinbase) · [Cached claim](../companies/coinbase/research.md#c02). Publication/revision: 2026-06-03. Practice: Internal tooling pilot and FCM feature before June publication; exact dates not stated. Limit: Specific internal tooling case; quality depends on the example and omitted domain knowledge.

### PRD Evaluator

Tool. Critique product requirements before expert approval.

- **Uber · Reported team use** — AI critiques PRDs before existing expert approval. [Primary evidence](https://www.uber.com/us/en/blog/first-pass-prd/) · [Cached claim](../companies/uber/research.md#c02). Publication/revision: 2026-05-12. Practice: Trial before publication; exact sessions not established. Limit: The evaluator strengthens an input artifact; it does not make the final approval decision.

### Issue specifications & readiness scouts

Process. Resolve ambiguous product decisions and check whether an issue is ready for implementation.

- **PostHog · Reported team use** — The team writes issue specs and returns unresolved product decisions to humans. [Primary evidence](https://posthog.com/blog/self-driving-loops) · [Cached claim](../companies/posthog/research.md#c02). Publication/revision: 2026-09-15. Practice: Named examples August–September 2026. Limit: One team’s loop; no universal company requirements format.
- **PostHog · Reported team use** — Scouts check readiness and duplication before routing issues toward implementation. [Primary evidence](https://posthog.com/blog/self-driving-loops) · [Cached claim](../companies/posthog/research.md#c03). Publication/revision: 2026-09-15. Practice: Named examples August–September 2026. Limit: A reported workflow, not a guarantee that all duplicate work is prevented.

### System invariants & compatibility contracts

Process. State the semantics the generated implementation must preserve.

- **Datadog · Reported team use** — Humans specify system semantics and invariants before agent iteration. [Primary evidence](https://www.datadoghq.com/blog/ai/harness-first-agents/) · [Cached claim](../companies/datadog/research.md#c02). Publication/revision: 2026-03-09. Practice: Late-2025 capability change and subsequent projects; exact sessions unknown. Limit: Helix’s constraint-first case does not mandate formal methods for every product task.
- **37signals · Reported team use** — Hot Cell’s author gave the agent explicit compatibility and isolation requirements. [Primary evidence](https://dev.37signals.com/hot-cell-1-0/) · [Cached claim](../companies/37signals/research.md#c02). Publication/revision: 2026-10-05. Practice: 2026 development and production rollout before October publication. Limit: These are product requirements; they do not describe coding-agent permissions.
- **Block · Reported team use** — Express migration completion through checkable import and framework constraints. [Primary evidence](https://engineering.block.xyz/blog/from-base-web-to-fluent-ui-without-a-flag-day) · [Cached claim](../companies/block/research.md#c02). Publication/revision: 2026-04-06. Practice: Migration-engine work from 2024-12-02 through 2026-02-26; retrospective. Limit: A specific UI migration contract, not a universal product specification format.

### Spec-first / spec-anchored / spec-as-source trials

Process. Compare ways a specification relates to implementation. The published retrospective describes September 2025 trials.

- **Birgitta Böckeler · Personal use** — Distinguish spec-first, spec-anchored, and spec-as-source; evaluate their maintenance implications. [Primary evidence](https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html) · [Cached claim](../engineers/birgitta-bockeler/recent-ai.md#c02). Publication/revision: 2025-10-15. Practice: September 2025 tool trials; retrospective. Limit: Tools were tried in September 2025; maintenance effectiveness remained an open question.

### Specification interviewing & recording

Skill. Separate discovery questions from settled decisions; skip unnecessary ceremony for small changes.

- **Matt Pocock · Recommendation** — August 2026 guidance distinguishes interviewing from recording settled multi-session decisions; small work may skip the spec. [Primary evidence](https://www.aihero.dev/skills-to-spec) · [Cached claim](../engineers/matt-pocock/recent-ai.md#c02). Publication/revision: Updated 2026-08-24; original publication not established. Practice: Dated living guidance; exact personal practice dates unknown. Limit: A written specification does not validate itself; the source is guidance rather than an observed implementation.

### Governed standards checks

Process. Review specifications against relevant organisational standards.

- **Cloudflare · Reported company use** — Specifications receive checks against relevant governed standards. [Primary evidence](https://blog.cloudflare.com/engineering-standards-enforcement/) · [Cached claim](../companies/cloudflare/research.md#c02). Publication/revision: 2026-08-04. Practice: Codex usage and review activity during 2026 before publication. Limit: This establishes design review, not automatic requirements ownership.

### Kiro, spec-kit & Tessl

Tool. Böckeler’s specification-workflow investigation: September 2025 trials, published in October. Evaluation does not establish current adoption.

- **Birgitta Böckeler · Personal use** — Distinguish spec-first, spec-anchored, and spec-as-source; evaluate their maintenance implications. [Primary evidence](https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html) · [Cached claim](../engineers/birgitta-bockeler/recent-ai.md#c02). Publication/revision: 2025-10-15. Practice: September 2025 tool trials; retrospective. Limit: Tools were tried in September 2025; maintenance effectiveness remained an open question.

### Agent Skills /spec

Skill. A command in Osmani’s published lifecycle collection. Namespaced forms may be needed where host commands collide; no execution or adoption claim.

- **Addy Osmani · Published artifact** — The tools chapter records /spec in the inspected README command table. [Primary evidence](https://github.com/addyosmani/agent-skills) · [Cached claim](../engineers/addy-osmani/tools.md). Publication/revision: Not established; mutable, unpinned repository. Practice: Not established; README inspected, not executed. Limit: No immutable revision captured. No installation or runtime effectiveness test. This does not establish daily adoption.

### api-and-interface-design · Addy Osmani

Skill. Design contracts and boundaries that callers can understand and use consistently.

- **Addy Osmani · Published artifact** — The published skill describes this capability: Design contracts and boundaries that callers can understand and use consistently. [Primary evidence](https://github.com/addyosmani/agent-skills/blob/aeac41d4d005999432bb7312f7ff06383a91d59d/skills/api-and-interface-design/SKILL.md) · [Cached claim](../engineers/addy-osmani/skill-inventory.md#skill-addy-api-and-interface-design). Publication/revision: Repository revision 2026-10-13; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. The README notes that per-skill installs omit repository-level shared references. Preserve required checklists and repair local pointers without installing unrelated skills.

### constraint-driven-development · Addy Osmani

Skill. Agree a written quality bar and detect changes that weaken it.

- **Addy Osmani · Published artifact** — The published skill describes this capability: Agree a written quality bar and detect changes that weaken it. [Primary evidence](https://github.com/addyosmani/agent-skills/blob/aeac41d4d005999432bb7312f7ff06383a91d59d/skills/constraint-driven-development/SKILL.md) · [Cached claim](../engineers/addy-osmani/skill-inventory.md#skill-addy-constraint-driven-development). Publication/revision: Repository revision 2026-10-13; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. The README notes that per-skill installs omit repository-level shared references. Preserve required checklists and repair local pointers without installing unrelated skills.

### idea-refine · Addy Osmani

Skill. Explore alternatives and narrow an initial idea into a concrete direction.

- **Addy Osmani · Published artifact** — The published skill describes this capability: Explore alternatives and narrow an initial idea into a concrete direction. [Primary evidence](https://github.com/addyosmani/agent-skills/blob/aeac41d4d005999432bb7312f7ff06383a91d59d/skills/idea-refine/SKILL.md) · [Cached claim](../engineers/addy-osmani/skill-inventory.md#skill-addy-idea-refine). Publication/revision: Repository revision 2026-10-13; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. The README notes that per-skill installs omit repository-level shared references. Preserve required checklists and repair local pointers without installing unrelated skills.

### interview-me · Addy Osmani

Skill. Elicit the underlying goal through focused questions instead of filling in missing intent.

- **Addy Osmani · Published artifact** — The published skill describes this capability: Elicit the underlying goal through focused questions instead of filling in missing intent. [Primary evidence](https://github.com/addyosmani/agent-skills/blob/aeac41d4d005999432bb7312f7ff06383a91d59d/skills/interview-me/SKILL.md) · [Cached claim](../engineers/addy-osmani/skill-inventory.md#skill-addy-interview-me). Publication/revision: Repository revision 2026-10-13; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. The README notes that per-skill installs omit repository-level shared references. Preserve required checklists and repair local pointers without installing unrelated skills.

### spec-driven-development · Addy Osmani

Skill. Write the intended capabilities and scope before implementing significant work.

- **Addy Osmani · Published artifact** — The published skill describes this capability: Write the intended capabilities and scope before implementing significant work. [Primary evidence](https://github.com/addyosmani/agent-skills/blob/aeac41d4d005999432bb7312f7ff06383a91d59d/skills/spec-driven-development/SKILL.md) · [Cached claim](../engineers/addy-osmani/skill-inventory.md#skill-addy-spec-driven-development). Publication/revision: Repository revision 2026-10-13; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. The README notes that per-skill installs omit repository-level shared references. Preserve required checklists and repair local pointers without installing unrelated skills.

### research · Matt Pocock

Skill. Investigate a question using primary sources and preserve a cited project note.

- **Matt Pocock · Published artifact** — The published skill describes this capability: Investigate a question using primary sources and preserve a cited project note. [Primary evidence](https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/skills/engineering/research/SKILL.md) · [Cached claim](../engineers/matt-pocock/skill-inventory.md#skill-matt-research). Publication/revision: Repository revision 2026-10-19; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. Configure tracker and domain-document conventions before using engineering workflows. Avoid simultaneous plugin and editable-copy installation of the same skill.

### domain-modeling · Matt Pocock

Skill. Refine shared domain terminology and record it in a glossary and decisions.

- **Matt Pocock · Published artifact** — The published skill describes this capability: Refine shared domain terminology and record it in a glossary and decisions. [Primary evidence](https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/skills/engineering/domain-modeling/SKILL.md) · [Cached claim](../engineers/matt-pocock/skill-inventory.md#skill-matt-domain-modeling). Publication/revision: Repository revision 2026-10-19; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. Configure tracker and domain-document conventions before using engineering workflows. Avoid simultaneous plugin and editable-copy installation of the same skill.

### to-spec · Matt Pocock

Skill. Synthesize an existing conversation into a specification for the configured tracker.

- **Matt Pocock · Published artifact** — The published skill describes this capability: Synthesize an existing conversation into a specification for the configured tracker. [Primary evidence](https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/skills/engineering/to-spec/SKILL.md) · [Cached claim](../engineers/matt-pocock/skill-inventory.md#skill-matt-to-spec). Publication/revision: Repository revision 2026-10-19; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. Configure tracker and domain-document conventions before using engineering workflows. Avoid simultaneous plugin and editable-copy installation of the same skill.

### grill-with-docs · Matt Pocock

Skill. Combine design questioning with contemporaneous domain and decision documentation.

- **Matt Pocock · Published artifact** — The published skill describes this capability: Combine design questioning with contemporaneous domain and decision documentation. [Primary evidence](https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/skills/engineering/grill-with-docs/SKILL.md) · [Cached claim](../engineers/matt-pocock/skill-inventory.md#skill-matt-grill-with-docs). Publication/revision: Repository revision 2026-10-19; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. Configure tracker and domain-document conventions before using engineering workflows. Avoid simultaneous plugin and editable-copy installation of the same skill.

### create-cli · Peter Steinberger

Skill. Specify command-line arguments, help, outputs, configuration and failure behaviour.

- **Peter Steinberger · Published artifact** — The published skill describes this capability: Specify command-line arguments, help, outputs, configuration and failure behaviour. [Primary evidence](https://github.com/steipete/agent-scripts/blob/1159adf26ad007df38b87debb107d3946008d38b/skills/create-cli/SKILL.md) · [Cached claim](../engineers/peter-steinberger/skill-inventory.md#skill-peter-create-cli). Publication/revision: Repository revision 2026-10-20; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. Some source instructions assume the maintainer’s machine paths or tools. Adapt only verified project paths; do not run the repository-wide global sync script as a project bootstrap step.

### codebase-design · Matt Pocock

Skill. Use a shared vocabulary to reason about module depth, interfaces and test seams.

- **Matt Pocock · Published artifact** — The published skill describes this capability: Use a shared vocabulary to reason about module depth, interfaces and test seams. [Primary evidence](https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/skills/engineering/codebase-design/SKILL.md) · [Cached claim](../engineers/matt-pocock/skill-inventory.md#skill-matt-codebase-design). Publication/revision: Repository revision 2026-10-19; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. Configure tracker and domain-document conventions before using engineering workflows. Avoid simultaneous plugin and editable-copy installation of the same skill.

### grilling · Matt Pocock

Skill. Resolve a plan through successive rounds of questions about dependent decisions.

- **Matt Pocock · Published artifact** — The published skill describes this capability: Resolve a plan through successive rounds of questions about dependent decisions. [Primary evidence](https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/skills/productivity/grilling/SKILL.md) · [Cached claim](../engineers/matt-pocock/skill-inventory.md#skill-matt-grilling). Publication/revision: Repository revision 2026-10-19; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. Configure tracker and domain-document conventions before using engineering workflows. Avoid simultaneous plugin and editable-copy installation of the same skill.

## Plan & coordinate

Split work, choose ownership and schedule agent execution.

### Small supervised increments

Process. Keep implementation changes understandable, with checkpoints and human steering.

- **Addy Osmani · Personal use** — His January 2026 workflow reports small supervised chunks, meaningful checks, and version-control checkpoints. [Primary evidence](https://addyosmani.com/blog/ai-coding-workflow/) · [Cached claim](../engineers/addy-osmani/recent-ai.md#c03). Publication/revision: 2026-01-04. Practice: Retrospective of projects going into 2026; not an October stack. Limit: January self-report; not proof of an invariant process across all projects.
- **Monzo · Reported team use** — Keep early designer changes small and scoped with an engineering partner. [Primary evidence](https://monzo.com/blog/how-Monzo-Designers-are-shipping-safer-faster-product-improvements) · [Cached claim](../companies/monzo/research.md#c03). Publication/revision: 2026-03-20. Practice: Designer examples before March publication; exact session dates unknown. Limit: No universal code-size limit or permission for arbitrary end-to-end features follows.
- **GitHub · Reported team use** — The migration replaced components incrementally. [Primary evidence](https://github.blog/ai-and-ml/generative-ai/migrating-the-github-copilot-runtime-to-rust-using-copilot/) · [Cached claim](../companies/github/research.md#c03). Publication/revision: 2026-09-16 (updated 2026-09-23). Practice: May–August 2026 migration; retrospective. Limit: Reported migration cadence; not a universal PR-size rule.

### Thin tickets with dependency edges

Skill. Break a specification into independently verifiable paths suitable for fresh sessions.

- **Matt Pocock · Recommendation** — Documented tickets are thin verifiable paths with blocking edges, sized for fresh sessions. [Primary evidence](https://www.aihero.dev/skills-to-tickets) · [Cached claim](../engineers/matt-pocock/recent-ai.md#c03). Publication/revision: Updated 2026-08-24; original publication not established. Practice: Dated living guidance; exact personal practice dates unknown. Limit: Guidance includes broad-refactor exceptions; ticket size is not a universal duration or line limit.

### implement-spec

Skill. Dispatch dependency-ready tickets into worktrees, then review the assembled branch.

- **Matt Pocock · Published artifact** — October implement-spec documentation dispatches dependency-ready tickets in worktrees and reviews the assembled branch. [Primary evidence](https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/skills/engineering/implement-spec/SKILL.md) · [Cached claim](../engineers/matt-pocock/recent-ai.md#c07). Publication/revision: 2026-10-19. Practice: Pinned skill revision; not an independently observed session. Limit: Published artifact, not an executed fleet or a claim that every personal task uses parallelism.

### Lights-on software factory

Harness. Schedule worker, gate and check roles from an approved plan; use declared writable files and green groups. Published design, not a reproduced run.

- **Gojko Adžić · Published artifact** — The inspected October 2026 factory workflow (`/plan-execution`) compiles approved impact analyses into phased `plans/<name>.plan.json` sidecars with declared writable files, dependencies and parallel execution groups. [Primary evidence](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/WORKFLOW.md) · [Cached claim](../engineers/gojko-adzic/recent-ai.md#c03). Publication/revision: 2026-10-22. Practice: Pinned repository revision; not an executed run. Limit: Demonstrated means an inspected published artifact, not an executed session. The sample targets larger changes but explicitly permits skipping impact analysis for small tasks.
- **Gojko Adžić · Published artifact** — The inspected October 2026 factory compiles approved plans into deterministic `.workflow.mjs` scripts that schedule scoped `workflow-worker`, `workflow-gate` and `workflow-check` roles without LLM orchestration overhead. [Primary evidence](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/ORCHESTRATOR.md) · [Cached claim](../engineers/gojko-adzic/recent-ai.md#c07). Publication/revision: 2026-10-22. Practice: Pinned repository revision; not an executed run. Limit: Public boilerplate based on Votito, not a complete current private team configuration; no universal agent-count recommendation.

### Augment Intent

Harness. Coordinate implementer and verifier roles in a sponsored Go radix-tree session.

- **Kent Beck · Personal use** — He reports using Augment Intent with coordinator, implementer and verifier roles for a Go radix-tree session. [Primary evidence](https://newsletter.kentbeck.com/p/genie-lessons-nobody-wants-agents) · [Cached claim](../engineers/kent-beck/recent-ai.md#c09). Publication/revision: 2026-04-23. Practice: Intent session before publication; exact session date not stated. Limit: Sponsored session; not proof of his complete daily or October tool stack.

### Mux

Harness. Separate concurrent sessions by worktree, branch and terminal.

- **Coinbase · Reported company use** — Give concurrent agents separate worktrees, branches and terminals. [Primary evidence](https://www.coinbase.com/blog/coding-had-a-concurrency-problem-how-mux-helped-solve-it) · [Cached claim](../companies/coinbase/research.md#c07). Publication/revision: 2026-05-11. Practice: Early-2026 rollout; reported adoption/output observations include April 2026. Limit: Isolation reduces workspace interference, not semantic integration conflicts.

### Fleetshift

Harness. Coordinate background agent sessions for maintenance and migration.

- **Spotify · Reported company use** — Fleetshift coordinates multiple background agent sessions. [Primary evidence](https://engineering.atspotify.com/2026/6/code-with-claude-coding-is-no-longer-the-constraint) · [Cached claim](../companies/spotify/research.md#c07). Publication/revision: 2026-06-03. Practice: Retrospective and usage reported by June publication. Limit: Orchestration is distinct from the coding agent’s own reasoning and from release authority.

### Gas Town → Wheelhouse

Harness. Keep Yegge’s January fleet tooling separate from the later bespoke, private Wheelhouse account.

- **Steve Yegge · Personal use** — January 2026 introduces Gas Town fleet orchestration; his August 2026 personal account describes private, bespoke Wheelhouse. [Primary evidence](https://yegge.ai/essays/the-shape-of-things-to-come/) · [Cached claim](../engineers/steve-yegge/recent-ai.md#c07). Publication/revision: 2026-08. Practice: Wyvern/Wheelhouse account; includes predictions. Limit: January Gas Town launch must not be presented as his complete October setup.

### Temporal workflows

Harness. Use retryable activities to coordinate multi-step coding workflows.

- **Duolingo · Reported company use** — Temporal coordinates retryable activities for multi-step coding workflows. [Primary evidence](https://blog.duolingo.com/agentic-workflows/) · [Cached claim](../companies/duolingo/research.md#c07). Publication/revision: 2025-12-11. Practice: Workflows operating before December publication; exact start dates unknown. Limit: Durability of orchestration is separate from correctness of generated code.

### Parallel terminal sessions

Process. Run parallel agents with human steering; this does not imply identical checkout isolation.

- **Peter Steinberger · Personal use** — His October 2025 account uses parallel terminal agents with human steering and attention to change impact. [Primary evidence](https://steipete.me/posts/just-talk-to-it) · [Cached claim](../engineers/peter-steinberger/recent-ai.md#c07). Publication/revision: 2025-10-14. Practice: Workflow reported in October; exact session dates unknown. Limit: Same-folder work is dated personal practice, not proof of conflict-free collaboration or a mandatory topology.
- **Harper Reed · Personal use** — January 2026 personal account uses multiple remote terminal sessions. [Primary evidence](https://harper.blog/2026/01/05/claude-code-is-better-on-your-phone/) · [Cached claim](../engineers/harper-reed/recent-ai.md#c07). Publication/revision: 2026-01-05. Practice: Remote-terminal workflow reported in January; exact session dates unknown. Limit: Session multiplexing does not establish a complete orchestrator or safe parallel writes.

### Plan → scaffold → focused slices

Process. Approve the plan and common structure before implementing components.

- **Coinbase · Reported team use** — Approve a plan, scaffold shared structure, then implement focused slices. [Primary evidence](https://www.coinbase.com/blog/automating-figma-to-code-at-coinbase) · [Cached claim](../companies/coinbase/research.md#c03). Publication/revision: 2026-06-03. Practice: Internal tooling pilot and FCM feature before June publication; exact dates not stated. Limit: Introduced after overly large initial PRs; not proof every Coinbase feature follows it.

### Tern migration phases

Harness. Learn, create a guide, audit readiness, then execute scoped extraction work.

- **Grafana Labs · Reported team use** — Tern separates learning, guide creation, readiness audit and execution. [Primary evidence](https://medium.com/grafana-labs/how-and-why-were-bringing-data-sources-out-of-the-grafana-monolith-775f58eaebc3) · [Cached claim](../companies/grafana-labs/research.md#c03). Publication/revision: 2026-09-24. Practice: Migration over preceding months; exact agent runs not dated. Limit: The account describes staged roles, not a universal number of concurrent agents.

### /impact-analysis → /plan-execution

Skill. Published factory commands prepare an impact analysis and execution plan before execution.

- **Gojko Adžić · Published artifact** — The public factory at its pinned October 2026 revision documents Docker/make and Claude Code `/impact-analysis`, `/plan-execution`, `/execute` and `/regulator` commands. [Primary evidence](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/GETTING-STARTED.md) · [Cached claim](../engineers/gojko-adzic/recent-ai.md#c09). Publication/revision: 2026-10-22. Practice: Pinned repository revision; not an executed run. Limit: Documentation inspected at a pinned revision. Installation and feature availability were not runtime-tested.

### Agent Skills /plan

Skill. A command in Osmani’s published lifecycle collection. Namespaced forms may be needed where host commands collide; no execution or adoption claim.

- **Addy Osmani · Published artifact** — The tools chapter records /plan in the inspected README command table. [Primary evidence](https://github.com/addyosmani/agent-skills) · [Cached claim](../engineers/addy-osmani/tools.md). Publication/revision: Not established; mutable, unpinned repository. Practice: Not established; README inspected, not executed. Limit: No immutable revision captured. No installation or runtime effectiveness test. This does not establish daily adoption.

### planning-and-task-breakdown · Addy Osmani

Skill. Turn a specification into ordered tasks with observable completion criteria.

- **Addy Osmani · Published artifact** — The published skill describes this capability: Turn a specification into ordered tasks with observable completion criteria. [Primary evidence](https://github.com/addyosmani/agent-skills/blob/aeac41d4d005999432bb7312f7ff06383a91d59d/skills/planning-and-task-breakdown/SKILL.md) · [Cached claim](../engineers/addy-osmani/skill-inventory.md#skill-addy-planning-and-task-breakdown). Publication/revision: Repository revision 2026-10-13; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. The README notes that per-skill installs omit repository-level shared references. Preserve required checklists and repair local pointers without installing unrelated skills.

### triage · Matt Pocock

Skill. Qualify issues or external contributions and prepare scoped implementation briefs.

- **Matt Pocock · Published artifact** — The published skill describes this capability: Qualify issues or external contributions and prepare scoped implementation briefs. [Primary evidence](https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/skills/engineering/triage/SKILL.md) · [Cached claim](../engineers/matt-pocock/skill-inventory.md#skill-matt-triage). Publication/revision: Repository revision 2026-10-19; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. Configure tracker and domain-document conventions before using engineering workflows. Avoid simultaneous plugin and editable-copy installation of the same skill.

### wayfinder · Matt Pocock

Skill. Explore a large uncertain goal through tracked decisions, research and prototypes.

- **Matt Pocock · Published artifact** — The published skill describes this capability: Explore a large uncertain goal through tracked decisions, research and prototypes. [Primary evidence](https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/skills/engineering/wayfinder/SKILL.md) · [Cached claim](../engineers/matt-pocock/skill-inventory.md#skill-matt-wayfinder). Publication/revision: Repository revision 2026-10-19; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. Configure tracker and domain-document conventions before using engineering workflows. Avoid simultaneous plugin and editable-copy installation of the same skill.

### github-project-triage · Peter Steinberger

Skill. Review repository queues for concrete blockers, evidence and next actions.

- **Peter Steinberger · Published artifact** — The published skill describes this capability: Review repository queues for concrete blockers, evidence and next actions. [Primary evidence](https://github.com/steipete/agent-scripts/blob/1159adf26ad007df38b87debb107d3946008d38b/skills/github-project-triage/SKILL.md) · [Cached claim](../engineers/peter-steinberger/skill-inventory.md#skill-peter-github-project-triage). Publication/revision: Repository revision 2026-10-20; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. Some source instructions assume the maintainer’s machine paths or tools. Adapt only verified project paths; do not run the repository-wide global sync script as a project bootstrap step.

## Supply context

Provide project knowledge, instructions, skills and durable state.

### Versioned project skills

Skill. Encode reusable project knowledge. Team libraries and a practitioner’s personal continuity scheme have different scopes.

- **Block · Reported company use** — Share team knowledge through versioned, reviewed agent skills. [Primary evidence](https://engineering.block.xyz/blog/3-principles-for-designing-agent-skills) · [Cached claim](../companies/block/research.md#c08). Publication/revision: 2026-02-15. Practice: Internal marketplace and examples reported in February. Limit: Skill publication does not prove compliance on every run.
- **Zalando · Reported company use** — Shared skills and configurations distribute repeatable engineering knowledge. [Primary evidence](https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html) · [Cached claim](../companies/zalando/research.md#c08). Publication/revision: 2026-08-14. Practice: Retrospective of 2.5 years, including 2024 foundations and 2026 observations. Limit: A shared collection does not establish every team’s adoption or private context layout.
- **PostHog · Personal use** — A practitioner uses versioned project skills and explicit handovers for continuity. [Primary evidence](https://posthog.com/blog/how-i-use-skills-for-everything) · [Cached claim](../companies/posthog/research.md#c08). Publication/revision: 2026-10-20. Practice: Work over the preceding 28 days and ongoing sessions. Limit: Personal workflow, not a company-mandated memory layout.

### Agent Scripts & repo-owned skills

Skill. Use canonical shared instructions and repository-owned skills.

- **Peter Steinberger · Published artifact** — Pinned October 2026 documentation makes shared instructions and repo-owned skills canonical. [Primary evidence](https://github.com/steipete/agent-scripts/blob/1159adf26ad007df38b87debb107d3946008d38b/README.md) · [Cached claim](../engineers/peter-steinberger/recent-ai.md#c08). Publication/revision: 2026-10-20. Practice: Pinned repository revision; not an executed run. Limit: Demonstrated means an inspected published design, not an executed synchronization or complete private memory stack.

### AGENTS.MD shared instructions

Process. Agent Scripts publishes review and publication authority in its instruction file. Inspected instructions are not proof of runtime enforcement.

- **Peter Steinberger · Published artifact** — Pinned guidance documents review and publication authority; Oracle adds scoped preview advice. [Primary evidence](https://github.com/steipete/agent-scripts/blob/1159adf26ad007df38b87debb107d3946008d38b/AGENTS.MD) · [Cached claim](../engineers/peter-steinberger/recent-ai.md#c11). Publication/revision: 2026-10-20. Practice: Pinned repository revision; not an executed run. Limit: Instructions and tool documentation are not proof of resource-level enforcement, safe permissions, or compliance.

### Composable engineering skills

Skill. Publish composable skills with repository setup instructions; inspection does not establish runtime compatibility.

- **Matt Pocock · Published artifact** — Publishes composable agent skills; the pinned README documents installation and repo-specific setup routes. [Primary evidence](https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/README.md) · [Cached claim](../engineers/matt-pocock/recent-ai.md#c09). Publication/revision: 2026-10-19. Practice: Pinned skill revision; not an independently observed session. Limit: Published artifact with a daily-use self-report; full current private stack and host compatibility were not tested.

### Scoped repository rules

Process. Load task-relevant rules and retrieved context instead of all available guidance.

- **Stripe · Reported company use** — Use scoped repository rules and task-specific retrieved context. [Primary evidence](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2) · [Cached claim](../companies/stripe/research.md#c02). Publication/revision: 2026-02-19. Practice: Infrastructure and iteration policy reported at publication; exact sessions unknown. Limit: Documents context preparation, not a complete product-requirements policy.
- **Stripe · Reported company use** — Attach relevant rules selectively rather than loading all guidance. [Primary evidence](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2) · [Cached claim](../companies/stripe/research.md#c08). Publication/revision: 2026-02-19. Practice: Infrastructure and iteration policy reported at publication; exact sessions unknown. Limit: Shared rule formats reduce duplication; no complete private memory inventory is established.

### Repository instruction files

Process. Map architecture, commands and project conventions into agent-readable repository context.

- **Microsoft · Published artifact** — The instruction file maps architecture and commands. [Primary evidence](https://github.com/microsoft/vscode/blob/c480e9e49e2a116c458518ecbdec56d50e4af3d2/.github/copilot-instructions.md) · [Cached claim](../companies/microsoft/research.md#c08). Publication/revision: 2026-10-12 (pinned revision). Practice: Artifact at revision; session execution not observed. Limit: Documented project context, not a company-wide durable-memory system.
- **GitHub · Reported team use** — Repository documentation evolved with the work. [Primary evidence](https://github.blog/ai-and-ml/github-copilot/agent-driven-development-in-copilot-applied-science/) · [Cached claim](../companies/github/research.md#c08). Publication/revision: 2026-03-31. Practice: Work before publication; exact sessions not dated. Limit: The account does not establish a private organisation-wide memory service.
- **GitLab · Declared policy** — Repository records anchor reusable agent context. [Primary evidence](https://gitlab.com/gitlab-com/content-sites/handbook/-/blob/5f92de4547bca68f41f5ec784e621f097c1e8b38/content/handbook/engineering/workflow/ai-assisted-development.md) · [Cached claim](../companies/gitlab/research.md#c08). Publication/revision: 2026-10-13 (verified revision). Practice: Published R&D guidance; not every team’s observed workflow. Limit: Published design; completeness and freshness were not audited.

### Obsidian vault

Tool. Keep explicit memory versioned outside recurring Codex conversations.

- **Jason Liu · Personal use** — He keeps explicit memory in a versioned Obsidian vault. [Primary evidence](https://jxnl.co/writing/2026/05/10/codex-maxxing/) · [Cached claim](../engineers/jason-liu/recent-ai.md#c08). Publication/revision: 2026-05-10. Practice: Workstream and Rich-port trial accounts; exact run dates not established. Limit: Authored self-report, not an independently inspected vault.

### Structured task records & handoffs

Process. Persist plans, work items and progress outside a single chat. These are distinct implementations.

- **Gojko Adžić · Published artifact** — The inspected public workflow retains versioned markdown plans (`plans/<name>.md`), JSON plan sidecars (`.plan.json`) and structured progress logs (`.progress.jsonl`), while generated `.workflow.mjs` execution scripts are disposable. [Primary evidence](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/WORKFLOW.md) · [Cached claim](../engineers/gojko-adzic/recent-ai.md#c08). Publication/revision: 2026-10-22. Practice: Pinned repository revision; not an executed run. Limit: Project-state convention, not proof that every kind of learning or context is retained automatically.
- **Robert C. Martin · Published artifact** — Pinned SwarmForge handoff documentation prescribes committed, structured work items. [Primary evidence](https://github.com/unclebob/swarm-forge/blob/f4f5fbcae0de6f7dcc26e82400334227647cfdb2/swarmforge/constitution/articles/handoffs.prompt) · [Cached claim](../engineers/robert-c-martin/recent-ai.md#c08). Publication/revision: 2026-09-04. Practice: Pinned SwarmForge instructions; not an executed handoff. Limit: Published artifact at pinned revision; not executed. Durable task records do not establish application persistence.
- **Steve Yegge · Personal use** — His August 2026 Wheelhouse account describes turning discussions and designs into structured work records. [Primary evidence](https://yegge.ai/essays/the-shape-of-things-to-come/) · [Cached claim](../engineers/steve-yegge/recent-ai.md#c08). Publication/revision: 2026-08. Practice: Wyvern/Wheelhouse account; includes predictions. Limit: Private harness self-report; not an independently executed memory system.

### Pi session branches & local task records

Process. Retain local task state and review context.

- **Armin Ronacher · Personal use** — His January 2026 Pi account reports local task records, session branches, and review context. [Primary evidence](https://lucumr.pocoo.org/2026/1/31/pi/) · [Cached claim](../engineers/armin-ronacher/recent-ai.md#c08). Publication/revision: 2026-01-31. Practice: January 2026 account; exact session dates not stated. Limit: January 2026 account; tool-session persistence is distinct from application reward persistence.

### Interrogatory LLM

Process. Ask the model to interview the human to elicit context. The linked field also mentions separate decision-record guidance.

- **Martin Fowler · Personal use** — May 2026 context-interview trials and March 2026 decision-record guidance provide ways to preserve understanding. [Primary evidence](https://martinfowler.com/bliki/InterrogatoryLLM.html) · [Cached claim](../engineers/martin-fowler/recent-ai.md#c08). Publication/revision: 2026-05-14. Practice: Trial before publication; exact date not stated. Limit: S03 and S07 are documented techniques; a private automatic memory/handoff configuration is not established.

### Versioned rules, templates & prompts

Process. Treat reusable agent inputs as reviewed engineering assets.

- **Coinbase · Reported team use** — Version and review rules and prompts as shared engineering assets. [Primary evidence](https://www.coinbase.com/blog/automating-figma-to-code-at-coinbase) · [Cached claim](../companies/coinbase/research.md#c08). Publication/revision: 2026-06-03. Practice: Internal tooling pilot and FCM feature before June publication; exact dates not stated. Limit: Internal artifacts described, not publicly inspected or executed here.

### Shared organisational context

Process. Separate repository knowledge from organisational documentation and operational context.

- **Cloudflare · Reported company use** — Repository context and organisational knowledge have separate layers. [Primary evidence](https://blog.cloudflare.com/internal-ai-engineering-stack/) · [Cached claim](../companies/cloudflare/research.md#c08). Publication/revision: 2026-04-20. Practice: Retrospective of eleven months, plus usage at publication. Limit: A dated platform account, not proof that all context is always fresh.
- **Monzo · Reported company use** — Expose repository, documentation and operational context through shared infrastructure. [Primary evidence](https://monzo.com/blog/building-agent-chip) · [Cached claim](../companies/monzo/research.md#c08). Publication/revision: 2026-08-13. Practice: Build decision in late 2025; capabilities reported August 2026. Limit: Access is task-dependent; this is not proof of unrestricted access.
- **Shopify · Reported company use** — Shared threads and repository guidance preserve knowledge. [Primary evidence](https://shopify.engineering/under-the-river) · [Cached claim](../companies/shopify/research.md#c08). Publication/revision: 2026-05-28. Practice: Retrospective beginning in 2024 and River usage before publication. Limit: An organisational learning mechanism, not proof of perfect or automatic memory.

### Migration guides improved from failures

Process. Feed extraction failures back into guidance for subsequent migrations.

- **Grafana Labs · Reported team use** — Failures update migration guidance for later extractions. [Primary evidence](https://medium.com/grafana-labs/how-and-why-were-bringing-data-sources-out-of-the-grafana-monolith-775f58eaebc3) · [Cached claim](../companies/grafana-labs/research.md#c08). Publication/revision: 2026-09-24. Practice: Migration over preceding months; exact agent runs not dated. Limit: The cache was not inspected as a complete private memory implementation.

### Per-file / per-PR external state

Tool. Preserve cooldown, retry and abandonment records outside chat.

- **Duolingo · Reported team use** — Per-file and per-PR records preserve retry and cooldown state outside chat. [Primary evidence](https://blog.duolingo.com/ai-ios-unit-test-generation-pipeline/) · [Cached claim](../companies/duolingo/research.md#c08). Publication/revision: 2026-06-24. Practice: February–June 2026 account; automation live in March, described as autonomous by April. Limit: Application persistence and a complete agent memory system are different concerns.

### Toolshed MCP

Tool. The Stripe cache names Toolshed as the tool-access layer for Minions. The linked context claim describes its task-scoped use, not a public install recipe.

- **Stripe · Reported company use** — Use scoped repository rules and task-specific retrieved context. [Primary evidence](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2) · [Cached claim](../companies/stripe/research.md#c02). Publication/revision: 2026-02-19. Practice: Infrastructure and iteration policy reported at publication; exact sessions unknown. Limit: Documents context preparation, not a complete product-requirements policy.

### Engineering Codex (Cloudflare)

Tool. Governed internal engineering standards used in specification review. This is not the OpenAI Codex product.

- **Cloudflare · Reported company use** — Specifications receive checks against relevant governed standards. [Primary evidence](https://blog.cloudflare.com/engineering-standards-enforcement/) · [Cached claim](../companies/cloudflare/research.md#c02). Publication/revision: 2026-08-04. Practice: Codex usage and review activity during 2026 before publication. Limit: This establishes design review, not automatic requirements ownership.

### S3 workflow state

Tool. The Duolingo cache names S3 alongside external per-file and per-PR retry records. This is orchestration state, not application persistence.

- **Duolingo · Reported team use** — Per-file and per-PR records preserve retry and cooldown state outside chat. [Primary evidence](https://blog.duolingo.com/ai-ios-unit-test-generation-pipeline/) · [Cached claim](../companies/duolingo/research.md#c08). Publication/revision: 2026-06-24. Practice: February–June 2026 account; automation live in March, described as autonomous by April. Limit: Application persistence and a complete agent memory system are different concerns.

### Agent Skills lifecycle commands

Skill. Published /spec, /plan, /build, /test, /review and /ship commands; shown separately because publication dates are not established.

- **Addy Osmani · Published artifact** — The inspected collection publishes lifecycle guidance; the tools chapter documents its commands. [Primary evidence](https://github.com/addyosmani/agent-skills) · [Cached claim](../engineers/addy-osmani/tools.md). Publication/revision: Not established; mutable, unpinned repository. Practice: Not established; README inspected, not executed. Limit: No immutable revision captured. No installation or runtime effectiveness test. This does not establish daily adoption.

### Beads

Tool. Persistent work graph and project context, created by Yegge and now maintained by gastownhall. Public artifact, not proof of a current private deployment.

- **Steve Yegge · Published artifact** — The inspected tools chapter records bd ready/show/update/close/prime and the public work graph. [Primary evidence](https://github.com/gastownhall/beads) · [Cached claim](../engineers/steve-yegge/tools.md). Publication/revision: Not established; mutable, unpinned repository. Practice: Not established; README inspected, not executed. Limit: Living README inspected, not executed. The source register records a README history commit; the link here is mutable. No claim of current private deployment.

### context-engineering · Addy Osmani

Skill. Choose relevant project guidance and context for the next agent task.

- **Addy Osmani · Published artifact** — The published skill describes this capability: Choose relevant project guidance and context for the next agent task. [Primary evidence](https://github.com/addyosmani/agent-skills/blob/aeac41d4d005999432bb7312f7ff06383a91d59d/skills/context-engineering/SKILL.md) · [Cached claim](../engineers/addy-osmani/skill-inventory.md#skill-addy-context-engineering). Publication/revision: Repository revision 2026-10-13; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. The README notes that per-skill installs omit repository-level shared references. Preserve required checklists and repair local pointers without installing unrelated skills.

### documentation-and-adrs · Addy Osmani

Skill. Record consequential decisions, rationale and future-facing project documentation.

- **Addy Osmani · Published artifact** — The published skill describes this capability: Record consequential decisions, rationale and future-facing project documentation. [Primary evidence](https://github.com/addyosmani/agent-skills/blob/aeac41d4d005999432bb7312f7ff06383a91d59d/skills/documentation-and-adrs/SKILL.md) · [Cached claim](../engineers/addy-osmani/skill-inventory.md#skill-addy-documentation-and-adrs). Publication/revision: Repository revision 2026-10-13; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. The README notes that per-skill installs omit repository-level shared references. Preserve required checklists and repair local pointers without installing unrelated skills.

### source-driven-development · Addy Osmani

Skill. Check framework and API decisions against authoritative current documentation.

- **Addy Osmani · Published artifact** — The published skill describes this capability: Check framework and API decisions against authoritative current documentation. [Primary evidence](https://github.com/addyosmani/agent-skills/blob/aeac41d4d005999432bb7312f7ff06383a91d59d/skills/source-driven-development/SKILL.md) · [Cached claim](../engineers/addy-osmani/skill-inventory.md#skill-addy-source-driven-development). Publication/revision: Repository revision 2026-10-13; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. The README notes that per-skill installs omit repository-level shared references. Preserve required checklists and repair local pointers without installing unrelated skills.

### using-agent-skills · Addy Osmani

Skill. Find the relevant skill for a task and apply its intended workflow.

- **Addy Osmani · Published artifact** — The published skill describes this capability: Find the relevant skill for a task and apply its intended workflow. [Primary evidence](https://github.com/addyosmani/agent-skills/blob/aeac41d4d005999432bb7312f7ff06383a91d59d/skills/using-agent-skills/SKILL.md) · [Cached claim](../engineers/addy-osmani/skill-inventory.md#skill-addy-using-agent-skills). Publication/revision: Repository revision 2026-10-13; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. The README notes that per-skill installs omit repository-level shared references. Preserve required checklists and repair local pointers without installing unrelated skills.

### project-structure · Peter Steinberger

Skill. Produce a compact symbol map of a TypeScript or Swift repository.

- **Peter Steinberger · Published artifact** — The published skill describes this capability: Produce a compact symbol map of a TypeScript or Swift repository. [Primary evidence](https://github.com/steipete/agent-scripts/blob/1159adf26ad007df38b87debb107d3946008d38b/skills/project-structure/SKILL.md) · [Cached claim](../engineers/peter-steinberger/skill-inventory.md#skill-peter-project-structure). Publication/revision: Repository revision 2026-10-20; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. Some source instructions assume the maintainer’s machine paths or tools. Adapt only verified project paths; do not run the repository-wide global sync script as a project bootstrap step.

### writing-for-agents · Matt Pocock

Skill. Write concise, navigable instructions that another agent can follow reliably.

- **Matt Pocock · Published artifact** — The published skill describes this capability: Write concise, navigable instructions that another agent can follow reliably. [Primary evidence](https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/skills/productivity/writing-for-agents/SKILL.md) · [Cached claim](../engineers/matt-pocock/skill-inventory.md#skill-matt-writing-for-agents). Publication/revision: Repository revision 2026-10-19; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. Configure tracker and domain-document conventions before using engineering workflows. Avoid simultaneous plugin and editable-copy installation of the same skill.

### setup-matt-pocock-skills · Matt Pocock

Skill. Configure repository tracker conventions, domain documentation and skill guidance.

- **Matt Pocock · Published artifact** — The published skill describes this capability: Configure repository tracker conventions, domain documentation and skill guidance. [Primary evidence](https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/skills/engineering/setup-matt-pocock-skills/SKILL.md) · [Cached claim](../engineers/matt-pocock/skill-inventory.md#skill-matt-setup-matt-pocock-skills). Publication/revision: Repository revision 2026-10-19; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. Configure tracker and domain-document conventions before using engineering workflows. Avoid simultaneous plugin and editable-copy installation of the same skill.

## Implement

Use coding agents, developer tools and executable environments.

### Claude Code

Tool. Named coding use or cohort access. Read each case for the task and date; these are not universal installed stacks.

- **Gene Kim · Personal use** — The January 2026 interview describes Claude Code use, including letting it investigate a Trello API problem. [Primary evidence](https://techleadjournal.dev/episodes/244/) · [Cached claim](../engineers/gene-kim/recent-ai.md#c09). Publication/revision: 2026-01-19. Practice: Interview recollections; project dates not fully established. Limit: Retrospective project example; date of that work and full October configuration are not established.
- **Hamel Husain · Personal use** — In January he names Amp, Cursor and Claude Code, and Next.js for web work. [Primary evidence](https://hamel.dev/blog/posts/ai-stack/index.html) · [Cached claim](../engineers/hamel-husain/recent-ai.md#c09). Publication/revision: 2026-01-18. Practice: Reported coding-tool choices at publication; not October configuration. Limit: Dated personal choices; not a claim about his October installed setup.
- **Harper Reed · Personal use** — January 2026 self-report names Claude Code, Tailscale, Blink and tmux. [Primary evidence](https://harper.blog/2026/01/05/claude-code-is-better-on-your-phone/) · [Cached claim](../engineers/harper-reed/recent-ai.md#c09). Publication/revision: 2026-01-05. Practice: Remote-terminal workflow reported in January; exact session dates unknown. Limit: Dated personal setup; no present installation or private configuration verified.
- **David Heinemeier Hansson · Personal use** — January 2026: uses terminal harnesses (OpenCode, Claude Code in Omarchy) rather than IDE autocomplete, switching across Claude Opus 4.5, Codex 5, Gemini 3, MiniMax M2.1 and GLM-4.7. [Primary evidence](https://world.hey.com/dhh/promoting-ai-agents-3ee04945) · [Cached claim](../engineers/david-heinemeier-hansson/recent-ai.md#c09). Publication/revision: 2026-01-07. Practice: January OpenCode workflow account. Limit: The February OpenClaw Proxmox VM trial is a separate experiment, and the March Basecamp CLI/skill release is team product work.
- **Mozilla · Personal use** — The localization account names Claude Code for coding and review. [Primary evidence](https://blog.mozilla.org/l10n/2026/08/31/minding-my-language-my-internship-story/) · [Cached claim](../companies/mozilla/research.md#c09). Publication/revision: 2026-08-31. Practice: Internship before August 2026 completion. Limit: No complete installed configuration or team-wide mandatory tool is established.
- **Datadog · Reported team use** — The reported shadow-platform work used Claude Code and Cursor. [Primary evidence](https://www.datadoghq.com/blog/how-datadog-uses-ai-to-build-internal-software-delivery-tools-and-improve-system/) · [Cached claim](../companies/datadog/research.md#c09). Publication/revision: 2026-07-01. Practice: Project work before July publication; exact dates unknown. Limit: Dated tools for a named project, not a verified current installation inventory.
- **Microsoft · Reported company use** — The study covers Copilot CLI and Claude Code. [Primary evidence](https://arxiv.org/html/2607.01418v1) · [Cached claim](../companies/microsoft/research.md#c09). Publication/revision: 2026-07-01. Practice: January 5–April 29 2026; not the October tool estate. Limit: January–April cohorts; licenses changed afterward, so this is not an October inventory.

### Codex

Tool. Voice-led coding and recurring workstreams; distinct from Cloudflare’s internal Engineering Codex.

- **Simon Willison · Personal use** — His October 2026 newsletter feature used Codex voice interaction, a local preview, and GitHub PR review. [Primary evidence](https://simonwillison.net/2026/Oct/9/built-using-my-voice/) · [Cached claim](../engineers/simon-willison/recent-ai.md#c09). Publication/revision: 2026-10-09. Practice: Newsletter feature built and shipped 2026-10-09. Limit: Actual dated project account; this does not describe every tool he uses.
- **Jason Liu · Personal use** — He reports Codex with voice input and meeting transcripts. [Primary evidence](https://jxnl.co/writing/2026/05/10/codex-maxxing/) · [Cached claim](../engineers/jason-liu/recent-ai.md#c09). Publication/revision: 2026-05-10. Practice: Workstream and Rich-port trial accounts; exact run dates not established. Limit: Dated personal account, not a complete present stack.

### Copilot CLI

Tool. Named CLI use at GitHub; Microsoft’s study covers a separate access cohort.

- **GitHub · Reported team use** — The account names Copilot CLI and VS Code. [Primary evidence](https://github.blog/ai-and-ml/github-copilot/agent-driven-development-in-copilot-applied-science/) · [Cached claim](../companies/github/research.md#c09). Publication/revision: 2026-03-31. Practice: Work before publication; exact sessions not dated. Limit: March setup; not a complete October inventory.
- **Microsoft · Reported company use** — The study covers Copilot CLI and Claude Code. [Primary evidence](https://arxiv.org/html/2607.01418v1) · [Cached claim](../companies/microsoft/research.md#c09). Publication/revision: 2026-07-01. Practice: January 5–April 29 2026; not the October tool estate. Limit: January–April cohorts; licenses changed afterward, so this is not an October inventory.

### VS Code

Tool. Editor named in GitHub’s internal development account.

- **GitHub · Reported team use** — The account names Copilot CLI and VS Code. [Primary evidence](https://github.blog/ai-and-ml/github-copilot/agent-driven-development-in-copilot-applied-science/) · [Cached claim](../companies/github/research.md#c09). Publication/revision: 2026-03-31. Practice: Work before publication; exact sessions not dated. Limit: March setup; not a complete October inventory.

### Cursor

Tool. Named personal workflow, designer changes and shadow-platform work.

- **Hamel Husain · Personal use** — In January he names Amp, Cursor and Claude Code, and Next.js for web work. [Primary evidence](https://hamel.dev/blog/posts/ai-stack/index.html) · [Cached claim](../engineers/hamel-husain/recent-ai.md#c09). Publication/revision: 2026-01-18. Practice: Reported coding-tool choices at publication; not October configuration. Limit: Dated personal choices; not a claim about his October installed setup.
- **Monzo · Reported team use** — Designers report using Cursor to understand and change code. [Primary evidence](https://monzo.com/blog/how-Monzo-Designers-are-shipping-safer-faster-product-improvements) · [Cached claim](../companies/monzo/research.md#c09). Publication/revision: 2026-03-20. Practice: Designer examples before March publication; exact session dates unknown. Limit: March personal/team examples do not establish every engineer’s October tool choice.
- **Datadog · Reported team use** — The reported shadow-platform work used Claude Code and Cursor. [Primary evidence](https://www.datadoghq.com/blog/how-datadog-uses-ai-to-build-internal-software-delivery-tools-and-improve-system/) · [Cached claim](../companies/datadog/research.md#c09). Publication/revision: 2026-07-01. Practice: Project work before July publication; exact dates unknown. Limit: Dated tools for a named project, not a verified current installation inventory.

### Amp

Tool. Named in Husain’s January 2026 coding workflow. His AI-product evaluation work is outside this catalogue.

- **Hamel Husain · Personal use** — In January he names Amp, Cursor and Claude Code, and Next.js for web work. [Primary evidence](https://hamel.dev/blog/posts/ai-stack/index.html) · [Cached claim](../engineers/hamel-husain/recent-ai.md#c09). Publication/revision: 2026-01-18. Practice: Reported coding-tool choices at publication; not October configuration. Limit: Dated personal choices; not a claim about his October installed setup.

### OpenCode

Tool. DHH’s supervised personal workflow; not evidence that every 37signals engineer uses it.

- **David Heinemeier Hansson · Personal use** — January 2026: uses terminal harnesses (OpenCode, Claude Code in Omarchy) rather than IDE autocomplete, switching across Claude Opus 4.5, Codex 5, Gemini 3, MiniMax M2.1 and GLM-4.7. [Primary evidence](https://world.hey.com/dhh/promoting-ai-agents-3ee04945) · [Cached claim](../engineers/david-heinemeier-hansson/recent-ai.md#c09). Publication/revision: 2026-01-07. Practice: January OpenCode workflow account. Limit: The February OpenClaw Proxmox VM trial is a separate experiment, and the March Basecamp CLI/skill release is team product work.

### Grok TUI

Tool. September 2026 interview-page account, with Codex and Claude explicitly described as prior use.

- **Robert C. Martin · Personal use** — In September he names Grok TUI, with prior Codex and Claude use. [Primary evidence](https://www.aviator.co/podcast/uncle-bob-martin-ai-clean-code) · [Cached claim](../engineers/robert-c-martin/recent-ai.md#c09). Publication/revision: 2026-09-24. Practice: Interview-page account of then-current practice; full recording not checked. Limit: Dated interview account; SwarmForge publication does not prove continued personal use.

### Pi + Codemode / MCP

Tool. Compose tool operations in a dated personal Pi account.

- **Armin Ronacher · Personal use** — October 2026 Pi account includes Codemode/MCP composition. [Primary evidence](https://lucumr.pocoo.org/2026/10/6/codemode/) · [Cached claim](../engineers/armin-ronacher/recent-ai.md#c09). Publication/revision: 2026-10-06. Practice: Recent Pi sessions reproduced in authored article; exact dates not stated. Limit: Dated authored account; complete current private setup unknown.

### GitLab Duo, Claude & GitLab MCP

Tool. Named in pinned DevEx team guidance; declared policy rather than an inspected private installation.

- **GitLab · Declared policy** — DevEx names Duo, Claude and GitLab MCP. [Primary evidence](https://gitlab.com/gitlab-com/content-sites/handbook/-/blob/946c9f1441d92caa142091e0678e7dbdac3d38c3/content/handbook/engineering/infrastructure-platforms/developer-experience/ai/_index.md) · [Cached claim](../companies/gitlab/research.md#c09). Publication/revision: 2026-03-16 (verified revision). Practice: Declared DevEx practice; exact sessions unknown. Limit: Declared team tool use at the pinned revision; private installed setup unverified.

### Blink, Tailscale & tmux

Tool. Access and manage remote terminal coding sessions.

- **Harper Reed · Personal use** — January 2026 self-report names Claude Code, Tailscale, Blink and tmux. [Primary evidence](https://harper.blog/2026/01/05/claude-code-is-better-on-your-phone/) · [Cached claim](../engineers/harper-reed/recent-ai.md#c09). Publication/revision: 2026-01-05. Practice: Remote-terminal workflow reported in January; exact session dates unknown. Limit: Dated personal setup; no present installation or private configuration verified.

### Remote Dev & River

Environment. Exercise iOS and Android environments with remote mobile agents.

- **Shopify · Reported team use** — River can exercise iOS and Android environments. [Primary evidence](https://shopify.engineering/remote-dev) · [Cached claim](../companies/shopify/research.md#c09). Publication/revision: 2026-10-22. Practice: Mobile workflows before publication; exact sessions not stated. Limit: A dated mobile capability account; the private installed configuration was not inspected.
- **Shopify · Reported team use** — Separate remote environments support parallel mobile work. [Primary evidence](https://shopify.engineering/remote-dev) · [Cached claim](../companies/shopify/research.md#c07). Publication/revision: 2026-10-22. Practice: Mobile workflows before publication; exact sessions not stated. Limit: Parallel task execution does not establish unlimited unattended delivery.

### Codex CLI / Claude Code SDK wrapper

Tool. Expose reusable coding operations through a shared workflow library.

- **Duolingo · Reported company use** — A shared coding library wraps Codex CLI and Claude Code SDK. [Primary evidence](https://blog.duolingo.com/agentic-workflows/) · [Cached claim](../companies/duolingo/research.md#c09). Publication/revision: 2025-12-11. Practice: Workflows operating before December publication; exact start dates unknown. Limit: Names describe the published architecture, not every employee’s installed setup.

### hogli & cloud dev environments

Tool. Make developer commands, checks and evidence collection executable for agents.

- **PostHog · Reported company use** — The developer CLI and cloud environments help agents run checks and collect evidence. [Primary evidence](https://posthog.com/blog/10k-prs-a-month) · [Cached claim](../companies/posthog/research.md#c09). Publication/revision: 2026-07-28. Practice: January–July 2026 retrospective; individual changes span that period. Limit: The July account includes work being built; universal availability is not established.

### Docker / make factory environment

Environment. Documented setup and Claude Code commands for the public factory artifact.

- **Gojko Adžić · Published artifact** — The public factory at its pinned October 2026 revision documents Docker/make and Claude Code `/impact-analysis`, `/plan-execution`, `/execute` and `/regulator` commands. [Primary evidence](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/GETTING-STARTED.md) · [Cached claim](../engineers/gojko-adzic/recent-ai.md#c09). Publication/revision: 2026-10-22. Practice: Pinned repository revision; not an executed run. Limit: Documentation inspected at a pinned revision. Installation and feature availability were not runtime-tested.

### Minions

Harness. Use a custom harness in isolated devboxes for bounded tasks.

- **Stripe · Reported company use** — Run tasks in standardized isolated devboxes using a custom harness. [Primary evidence](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2) · [Cached claim](../companies/stripe/research.md#c09). Publication/revision: 2026-02-19. Practice: Infrastructure and iteration policy reported at publication; exact sessions unknown. Limit: Dated architecture; not an inspected current installation.

### Honk / Claude Code

Harness. Run coding work through Spotify’s existing developer platform. This is distinct from fleet-level orchestration.

- **Spotify · Reported company use** — Honk runs within the existing developer platform. [Primary evidence](https://engineering.atspotify.com/2026/6/code-with-claude-coding-is-no-longer-the-constraint) · [Cached claim](../companies/spotify/research.md#c09). Publication/revision: 2026-06-03. Practice: Retrospective and usage reported by June publication. Limit: The internal system is not established as an open-source release.

### goose-derived migration runtime

Harness. Block’s runtime evolved around TypeScript diagnostics and targeted Jest checks; this is a dated migration history.

- **Block · Reported team use** — Evolve the migration runtime around language-server feedback and related tests. [Primary evidence](https://engineering.block.xyz/blog/from-base-web-to-fluent-ui-without-a-flag-day) · [Cached claim](../companies/block/research.md#c09). Publication/revision: 2026-04-06. Practice: Migration-engine work from 2024-12-02 through 2026-02-26; retrospective. Limit: Historical tool evolution, not a complete present-day stack inventory.

### /execute

Skill. Published factory command executes an approved plan inside the documented Claude Code setup.

- **Gojko Adžić · Published artifact** — The public factory at its pinned October 2026 revision documents Docker/make and Claude Code `/impact-analysis`, `/plan-execution`, `/execute` and `/regulator` commands. [Primary evidence](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/GETTING-STARTED.md) · [Cached claim](../engineers/gojko-adzic/recent-ai.md#c09). Publication/revision: 2026-10-22. Practice: Pinned repository revision; not an executed run. Limit: Documentation inspected at a pinned revision. Installation and feature availability were not runtime-tested.

### Model switching in terminal harnesses

Process. DHH’s January account switches models within terminal agents; this does not establish an October default or universal model ranking.

- **David Heinemeier Hansson · Personal use** — January 2026: uses terminal harnesses (OpenCode, Claude Code in Omarchy) rather than IDE autocomplete, switching across Claude Opus 4.5, Codex 5, Gemini 3, MiniMax M2.1 and GLM-4.7. [Primary evidence](https://world.hey.com/dhh/promoting-ai-agents-3ee04945) · [Cached claim](../engineers/david-heinemeier-hansson/recent-ai.md#c09). Publication/revision: 2026-01-07. Practice: January OpenCode workflow account. Limit: The February OpenClaw Proxmox VM trial is a separate experiment, and the March Basecamp CLI/skill release is team product work.

### Next.js

Tool. Husain’s January account names a conventional web stack selected to work smoothly with coding assistants.

- **Hamel Husain · Personal use** — In January he names Amp, Cursor and Claude Code, and Next.js for web work. [Primary evidence](https://hamel.dev/blog/posts/ai-stack/index.html) · [Cached claim](../engineers/hamel-husain/recent-ai.md#c09). Publication/revision: 2026-01-18. Practice: Reported coding-tool choices at publication; not October configuration. Limit: Dated personal choices; not a claim about his October installed setup.

### Agent Skills /build

Skill. A command in Osmani’s published lifecycle collection. Namespaced forms may be needed where host commands collide; no execution or adoption claim.

- **Addy Osmani · Published artifact** — The tools chapter records /build in the inspected README command table. [Primary evidence](https://github.com/addyosmani/agent-skills) · [Cached claim](../engineers/addy-osmani/tools.md). Publication/revision: Not established; mutable, unpinned repository. Practice: Not established; README inspected, not executed. Limit: No immutable revision captured. No installation or runtime effectiveness test. This does not establish daily adoption.

### deprecation-and-migration · Addy Osmani

Skill. Plan replacement or removal of old interfaces and transition users deliberately.

- **Addy Osmani · Published artifact** — The published skill describes this capability: Plan replacement or removal of old interfaces and transition users deliberately. [Primary evidence](https://github.com/addyosmani/agent-skills/blob/aeac41d4d005999432bb7312f7ff06383a91d59d/skills/deprecation-and-migration/SKILL.md) · [Cached claim](../engineers/addy-osmani/skill-inventory.md#skill-addy-deprecation-and-migration). Publication/revision: Repository revision 2026-10-13; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. The README notes that per-skill installs omit repository-level shared references. Preserve required checklists and repair local pointers without installing unrelated skills.

### frontend-ui-engineering · Addy Osmani

Skill. Build accessible, responsive interfaces grounded in the project design system.

- **Addy Osmani · Published artifact** — The published skill describes this capability: Build accessible, responsive interfaces grounded in the project design system. [Primary evidence](https://github.com/addyosmani/agent-skills/blob/aeac41d4d005999432bb7312f7ff06383a91d59d/skills/frontend-ui-engineering/SKILL.md) · [Cached claim](../engineers/addy-osmani/skill-inventory.md#skill-addy-frontend-ui-engineering). Publication/revision: Repository revision 2026-10-13; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. The README notes that per-skill installs omit repository-level shared references. Preserve required checklists and repair local pointers without installing unrelated skills.

### incremental-implementation · Addy Osmani

Skill. Deliver one verifiable vertical slice before expanding the change.

- **Addy Osmani · Published artifact** — The published skill describes this capability: Deliver one verifiable vertical slice before expanding the change. [Primary evidence](https://github.com/addyosmani/agent-skills/blob/aeac41d4d005999432bb7312f7ff06383a91d59d/skills/incremental-implementation/SKILL.md) · [Cached claim](../engineers/addy-osmani/skill-inventory.md#skill-addy-incremental-implementation). Publication/revision: Repository revision 2026-10-13; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. The README notes that per-skill installs omit repository-level shared references. Preserve required checklists and repair local pointers without installing unrelated skills.

### prototype · Matt Pocock

Skill. Build a disposable experiment to answer a specific design or interaction question.

- **Matt Pocock · Published artifact** — The published skill describes this capability: Build a disposable experiment to answer a specific design or interaction question. [Primary evidence](https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/skills/engineering/prototype/SKILL.md) · [Cached claim](../engineers/matt-pocock/skill-inventory.md#skill-matt-prototype). Publication/revision: Repository revision 2026-10-19; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. Configure tracker and domain-document conventions before using engineering workflows. Avoid simultaneous plugin and editable-copy installation of the same skill.

### implement · Matt Pocock

Skill. Implement an agreed specification or tickets with focused checks and a review.

- **Matt Pocock · Published artifact** — The published skill describes this capability: Implement an agreed specification or tickets with focused checks and a review. [Primary evidence](https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/skills/engineering/implement/SKILL.md) · [Cached claim](../engineers/matt-pocock/skill-inventory.md#skill-matt-implement). Publication/revision: Repository revision 2026-10-19; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. Configure tracker and domain-document conventions before using engineering workflows. Avoid simultaneous plugin and editable-copy installation of the same skill.

### frontend-design · Peter Steinberger

Skill. Implement a coherent visual direction for a working user interface.

- **Peter Steinberger · Published artifact** — The published skill describes this capability: Implement a coherent visual direction for a working user interface. [Primary evidence](https://github.com/steipete/agent-scripts/blob/1159adf26ad007df38b87debb107d3946008d38b/skills/frontend-design/SKILL.md) · [Cached claim](../engineers/peter-steinberger/skill-inventory.md#skill-peter-frontend-design). Publication/revision: Repository revision 2026-10-20; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. Some source instructions assume the maintainer’s machine paths or tools. Adapt only verified project paths; do not run the repository-wide global sync script as a project bootstrap step. The skill has a per-directory licence notice. Inspect and preserve LICENSE.txt and any upstream credit.

## Verify behaviour

Exercise code, tests, browsers, structural rules and security checks.

### Red-green TDD & acceptance contracts

Process. Use failing examples before implementation. Recommendation, published skill and factory instructions remain separate evidence categories.

- **Dave Farley · Recommendation** — Drive behaviour with human-owned failing acceptance examples; separate unit-level design feedback and challenge assertions with mutation testing. [Primary evidence](https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe) · [Cached claim](../engineers/dave-farley/recent-ai.md#c04). Publication/revision: 2026-10-25. Practice: Proposed agent workflow; not a reproduced implementation. Limit: S01/S05/S06/S07/S12: acceptance-first behaviour, unit-level design, and test quality are distinct concerns. Tool selection and boundaries in the reward exercise remain suggested adaptations.
- **Simon Willison · Recommendation** — Use red/green TDD and complement automated checks with exploratory execution of actual behaviour. [Primary evidence](https://simonwillison.net/guides/agentic-engineering-patterns/agentic-manual-testing/) · [Cached claim](../engineers/simon-willison/recent-ai.md#c04). Publication/revision: 2026 (guide began 2026-02-23; chapter date unknown). Practice: Living guide; exact practice dates not established. Limit: Relevant sources S02–S04; a green suite does not establish every requirement.
- **Matt Pocock · Published artifact** — The pinned October skill specifies red-green at human-agreed public seams; refactoring moves to review. [Primary evidence](https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/skills/engineering/tdd/SKILL.md) · [Cached claim](../engineers/matt-pocock/recent-ai.md#c04). Publication/revision: 2026-10-19. Practice: Pinned skill revision; not an independently observed session. Limit: Inspected instructions, not a runtime test. Old red-green-refactor trigger wording does not define the current body.
- **Gojko Adžić · Published artifact** — The published factory agent instructions require `workflow-worker` agents to write a failing test before implementation and run file-scoped checks, followed by `workflow-gate` merged-tree checks (up to three rework rounds) and a read-only `workflow-check` skeptic. [Primary evidence](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/workspace/.claude/agents/workflow-worker.md) · [Cached claim](../engineers/gojko-adzic/recent-ai.md#c04). Publication/revision: 2026-10-22. Practice: Pinned repository revision; not an executed run. Limit: Inspected instructions, not observed execution. Writing a failing test first is explicit; actual red-phase execution and adherence were not verified. Later gates do not imply tests-after development.

### tdd (Matt Pocock)

Skill. Pinned SKILL.md instructions for red-green at human-agreed public seams; refactoring is handled during review.

- **Matt Pocock · Published artifact** — The pinned October skill specifies red-green at human-agreed public seams; refactoring moves to review. [Primary evidence](https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/skills/engineering/tdd/SKILL.md) · [Cached claim](../engineers/matt-pocock/recent-ai.md#c04). Publication/revision: 2026-10-19. Practice: Pinned skill revision; not an independently observed session. Limit: Inspected instructions, not a runtime test. Old red-green-refactor trigger wording does not define the current body.

### Agent-loop TDD experiments

Process. Compare human checkpoints with agent-internal TDD; narrow results do not establish a universal winner.

- **Birgitta Böckeler · Personal use** — Her August 2026 exploratory evaluation distinguishes human-owned tests and review checkpoints from TDD wholly inside the agent loop. [Primary evidence](https://martinfowler.com/articles/exploring-gen-ai/tdd-in-the-agent-loop.html) · [Cached claim](../engineers/birgitta-bockeler/recent-ai.md#c04). Publication/revision: 2026-08-10. Practice: Exploratory evaluation before publication; exact dates not stated. Limit: Limited greenfield tasks; LLM-based quality judgment; imperfect adherence. Not evidence against all TDD.

### Tests after implementation

Process. Generate tests after building the feature while retaining session context. This account is not test-first.

- **Peter Steinberger · Personal use** — His October 2025 workflow asks for tests after feature implementation, retaining the same context. [Primary evidence](https://steipete.me/posts/just-talk-to-it) · [Cached claim](../engineers/peter-steinberger/recent-ai.md#c04). Publication/revision: 2025-10-14. Practice: Workflow reported in October; exact session dates unknown. Limit: Not test-first. The common exercise adds independently agreed outcomes; it does not recast his method as TDD.

### ESLint, Semgrep & dependency-cruiser

Tool. Apply structural sensors alongside types and mutation testing in Böckeler’s dashboard experiments.

- **Birgitta Böckeler · Personal use** — Documented sensor experiments include type checking, ESLint, Semgrep, dependency-cruiser, and mutation testing. [Primary evidence](https://martinfowler.com/articles/sensors-for-coding-agents.html) · [Cached claim](../engineers/birgitta-bockeler/recent-ai.md#c09). Publication/revision: 2026-05-27. Practice: Dashboard experiments before publication; exact dates not stated. Limit: One application, specific configurations; no universal performance claim or copied setup.

### Unit tests, CRAP & mutation checks

Process. Challenge generated behaviour and test quality; September Martin practice relaxed some earlier constraints.

- **Robert C. Martin · Personal use** — In September he reports unit tests, CRAP and mutation checks with relaxed constraints. [Primary evidence](https://www.aviator.co/podcast/uncle-bob-martin-ai-clean-code) · [Cached claim](../engineers/robert-c-martin/recent-ai.md#c04). Publication/revision: 2026-09-24. Practice: Interview-page account of then-current practice; full recording not checked. Limit: Self-report; metric thresholds evolve and no results were reproduced.

### Playwright

Tool. Run realistic browser system tests in Lexxy’s development loop.

- **37signals · Reported team use** — Lexxy moved system tests to Playwright so agents could exercise realistic browser behavior. [Primary evidence](https://dev.37signals.com/lexxy-1-0/) · [Cached claim](../companies/37signals/research.md#c04). Publication/revision: 2026-09-28. Practice: Lexxy began May 2025; account includes March–September 2026 test-workflow changes. Limit: Reported test feedback, not independently rerun browser results.

### Browser-driven QA

Process. Collect observable behaviour before review, alongside CI.

- **PostHog · Reported company use** — Browser-driven QA and CI supply evidence before reviewers evaluate changes. [Primary evidence](https://posthog.com/blog/10k-prs-a-month) · [Cached claim](../companies/posthog/research.md#c04). Publication/revision: 2026-07-28. Practice: January–July 2026 retrospective; individual changes span that period. Limit: Some improvements are early or planned; automated testing does not establish exhaustive correctness.

### Existing tests as a migration oracle

Process. Use preexisting behaviour and E2E tests during a port; the Rich-to-Rust trial does not establish successful completion.

- **Jason Liu · Personal use** — His Rich-to-Rust trial uses the original tests as the completion criterion. [Primary evidence](https://jxnl.co/writing/2026/05/10/codex-maxxing/) · [Cached claim](../engineers/jason-liu/recent-ai.md#c04). Publication/revision: 2026-05-10. Practice: Workstream and Rich-port trial accounts; exact run dates not established. Limit: Reported goal and verification design; successful migration is not established.
- **GitHub · Reported team use** — Existing E2E tests gated port changes. [Primary evidence](https://github.blog/ai-and-ml/generative-ai/migrating-the-github-copilot-runtime-to-rust-using-copilot/) · [Cached claim](../companies/github/research.md#c04). Publication/revision: 2026-09-16 (updated 2026-09-23). Practice: May–August 2026 migration; retrospective. Limit: Preservation checks did not prevent every regression.
- **Armin Ronacher · Personal use** — His June 2026 account distinguishes verifiable mechanical translation from broader generation and reports MiniJinja-to-Go porting. [Primary evidence](https://lucumr.pocoo.org/2026/6/23/the-coming-loop/) · [Cached claim](../engineers/armin-ronacher/recent-ai.md#c04). Publication/revision: 2026-06-23. Practice: Loop experiments before publication; exact dates not stated. Limit: Personal report; no comprehensive current test-first or release policy is supplied.

### Lint, types, formatting & targeted tests

Process. Run cheap deterministic checks; tool choice and coverage depend on the individual case.

- **Coinbase · Reported team use** — Run lint, typing, formatting, query and test gates before proposing changes. [Primary evidence](https://www.coinbase.com/blog/automating-figma-to-code-at-coinbase) · [Cached claim](../companies/coinbase/research.md#c04). Publication/revision: 2026-06-03. Practice: Internal tooling pilot and FCM feature before June publication; exact dates not stated. Limit: Human reviewers still added missing edge-case coverage.
- **Block · Reported team use** — Combine rule checks, linters, diagnostics and targeted tests. [Primary evidence](https://engineering.block.xyz/blog/from-base-web-to-fluent-ui-without-a-flag-day) · [Cached claim](../companies/block/research.md#c04). Publication/revision: 2026-04-06. Practice: Migration-engine work from 2024-12-02 through 2026-02-26; retrospective. Limit: Compilation alone missed framework-level errors; no benchmark was reproduced here.

### Independent verifiers before PR creation

Process. Run restricted verification separately from implementation.

- **Spotify · Reported team use** — Independent verifiers run before agent PR creation. [Primary evidence](https://engineering.atspotify.com/2025/12/feedback-loops-background-coding-agents-part-3) · [Cached claim](../companies/spotify/research.md#c04). Publication/revision: 2025-12-09. Practice: Feedback-loop design before publication. Limit: The later dataset case lacked automated coverage in some repositories; do not assume uniform verification.

### Executable security reproductions

Process. Require reproducible evidence for a candidate vulnerability instead of a plausible report.

- **Mozilla · Reported team use** — Security findings arrived with executable minimal reproductions. [Primary evidence](https://blog.mozilla.org/en/firefox/hardening-firefox-anthropic-red-team/) · [Cached claim](../companies/mozilla/research.md#c04). Publication/revision: 2026-03-06. Practice: Collaboration in weeks before Firefox 148 release. Limit: External discovery, Mozilla validation; a reproduction is narrower than a full regression policy.
- **Shopify · Reported team use** — Candidate vulnerabilities must survive executable verification. [Primary evidence](https://shopify.engineering/building-an-agentic-harness-that-outlasts-the-model) · [Cached claim](../companies/shopify/research.md#c04). Publication/revision: 2026-07-29. Practice: Five-month exploration and recent scanning period; exact session dates not stated. Limit: The reported test oracle is domain-specific; no full current TDD policy follows.

### Risk-specific command / replication / performance checks

Process. Published redis-rust instructions vary verification with the change. This is a research artifact, not a production database endorsement.

- **Datadog · Published artifact** — Published checks vary with command, replication and performance changes. [Primary evidence](https://github.com/nerdsane/redis-rust/blob/c94fcb1fdc850727a06199a144a1eaa8951d1931/docs/HARNESS.md) · [Cached claim](../companies/datadog/research.md#c04). Publication/revision: 2026-04-02. Practice: Inspected revision; commands not run. Limit: Pinned instructions were inspected, not executed; their uncovered properties remain explicit.

### Distribution checks after extraction

Process. Use manual package/distribution verification alongside existing E2E tests.

- **Grafana Labs · Reported team use** — Manual distribution checks complement existing end-to-end tests. [Primary evidence](https://medium.com/grafana-labs/how-and-why-were-bringing-data-sources-out-of-the-grafana-monolith-775f58eaebc3) · [Cached claim](../companies/grafana-labs/research.md#c04). Publication/revision: 2026-09-24. Practice: Migration over preceding months; exact agent runs not dated. Limit: No complete automated gate matrix or independently reproduced result is supplied.

### Preview deployments

Environment. Let agents and people inspect proposed frontend changes.

- **Zalando · Reported company use** — Preview deployments let agents and people inspect proposed frontend changes. [Primary evidence](https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html) · [Cached claim](../companies/zalando/research.md#c04). Publication/revision: 2026-08-14. Practice: Retrospective of 2.5 years, including 2024 foundations and 2026 observations. Limit: Preview availability is not a full AI testing cadence or correctness guarantee.

### Dispatch

Harness. Partition security hunting, then require executable verification before proposed remediation.

- **Shopify · Reported team use** — Dispatch partitions scanning work before parallel hunting. [Primary evidence](https://shopify.engineering/building-an-agentic-harness-that-outlasts-the-model) · [Cached claim](../companies/shopify/research.md#c03). Publication/revision: 2026-07-29. Practice: Five-month exploration and recent scanning period; exact session dates not stated. Limit: Scanning scope is not the size of ordinary feature increments.
- **Shopify · Reported team use** — Candidate vulnerabilities must survive executable verification. [Primary evidence](https://shopify.engineering/building-an-agentic-harness-that-outlasts-the-model) · [Cached claim](../companies/shopify/research.md#c04). Publication/revision: 2026-07-29. Practice: Five-month exploration and recent scanning period; exact session dates not stated. Limit: The reported test oracle is domain-specific; no full current TDD policy follows.

### Rodney

Tool. Published Chrome-automation CLI with persistent sessions and browser interaction commands.

- **Simon Willison · Published artifact** — Official README documents browser automation; publication date and a personal usage session are not established by this record. [Primary evidence](https://github.com/simonw/rodney) · [Cached claim](../engineers/simon-willison/sources.md#s13). Publication/revision: Not established; mutable, unpinned repository. Practice: Not established; README inspected, not executed. Limit: No immutable revision captured. No installation or runtime effectiveness test. This does not establish daily adoption.

### Agent Skills /test

Skill. A command in Osmani’s published lifecycle collection. Namespaced forms may be needed where host commands collide; no execution or adoption claim.

- **Addy Osmani · Published artifact** — The tools chapter records /test in the inspected README command table. [Primary evidence](https://github.com/addyosmani/agent-skills) · [Cached claim](../engineers/addy-osmani/tools.md). Publication/revision: Not established; mutable, unpinned repository. Practice: Not established; README inspected, not executed. Limit: No immutable revision captured. No installation or runtime effectiveness test. This does not establish daily adoption.

### browser-testing-with-devtools · Addy Osmani

Skill. Inspect a running browser through DevTools MCP and capture behavioural evidence.

- **Addy Osmani · Published artifact** — The published skill describes this capability: Inspect a running browser through DevTools MCP and capture behavioural evidence. [Primary evidence](https://github.com/addyosmani/agent-skills/blob/aeac41d4d005999432bb7312f7ff06383a91d59d/skills/browser-testing-with-devtools/SKILL.md) · [Cached claim](../engineers/addy-osmani/skill-inventory.md#skill-addy-browser-testing-with-devtools). Publication/revision: Repository revision 2026-10-13; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. The README notes that per-skill installs omit repository-level shared references. Preserve required checklists and repair local pointers without installing unrelated skills.

### debugging-and-error-recovery · Addy Osmani

Skill. Investigate failures systematically before choosing a repair.

- **Addy Osmani · Published artifact** — The published skill describes this capability: Investigate failures systematically before choosing a repair. [Primary evidence](https://github.com/addyosmani/agent-skills/blob/aeac41d4d005999432bb7312f7ff06383a91d59d/skills/debugging-and-error-recovery/SKILL.md) · [Cached claim](../engineers/addy-osmani/skill-inventory.md#skill-addy-debugging-and-error-recovery). Publication/revision: Repository revision 2026-10-13; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. The README notes that per-skill installs omit repository-level shared references. Preserve required checklists and repair local pointers without installing unrelated skills.

### performance-optimization · Addy Osmani

Skill. Measure a bottleneck, improve it and compare the result against the baseline.

- **Addy Osmani · Published artifact** — The published skill describes this capability: Measure a bottleneck, improve it and compare the result against the baseline. [Primary evidence](https://github.com/addyosmani/agent-skills/blob/aeac41d4d005999432bb7312f7ff06383a91d59d/skills/performance-optimization/SKILL.md) · [Cached claim](../engineers/addy-osmani/skill-inventory.md#skill-addy-performance-optimization). Publication/revision: Repository revision 2026-10-13; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. The README notes that per-skill installs omit repository-level shared references. Preserve required checklists and repair local pointers without installing unrelated skills.

### security-and-hardening · Addy Osmani

Skill. Inspect application inputs, dependencies and trust boundaries for concrete weaknesses.

- **Addy Osmani · Published artifact** — The published skill describes this capability: Inspect application inputs, dependencies and trust boundaries for concrete weaknesses. [Primary evidence](https://github.com/addyosmani/agent-skills/blob/aeac41d4d005999432bb7312f7ff06383a91d59d/skills/security-and-hardening/SKILL.md) · [Cached claim](../engineers/addy-osmani/skill-inventory.md#skill-addy-security-and-hardening). Publication/revision: Repository revision 2026-10-13; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. The README notes that per-skill installs omit repository-level shared references. Preserve required checklists and repair local pointers without installing unrelated skills.

### test-driven-development · Addy Osmani

Skill. Exercise a failing behavioural test before implementation, then maintain the verification loop.

- **Addy Osmani · Published artifact** — The published skill describes this capability: Exercise a failing behavioural test before implementation, then maintain the verification loop. [Primary evidence](https://github.com/addyosmani/agent-skills/blob/aeac41d4d005999432bb7312f7ff06383a91d59d/skills/test-driven-development/SKILL.md) · [Cached claim](../engineers/addy-osmani/skill-inventory.md#skill-addy-test-driven-development). Publication/revision: Repository revision 2026-10-13; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. The README notes that per-skill installs omit repository-level shared references. Preserve required checklists and repair local pointers without installing unrelated skills.

### diagnosing-bugs · Matt Pocock

Skill. Gather evidence, isolate a hard failure and test a diagnosis before repairing it.

- **Matt Pocock · Published artifact** — The published skill describes this capability: Gather evidence, isolate a hard failure and test a diagnosis before repairing it. [Primary evidence](https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/skills/engineering/diagnosing-bugs/SKILL.md) · [Cached claim](../engineers/matt-pocock/skill-inventory.md#skill-matt-diagnosing-bugs). Publication/revision: Repository revision 2026-10-19; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. Configure tracker and domain-document conventions before using engineering workflows. Avoid simultaneous plugin and editable-copy installation of the same skill.

### swift-concurrency-expert · Peter Steinberger

Skill. Diagnose Swift concurrency errors and review isolation and Sendable boundaries.

- **Peter Steinberger · Published artifact** — The published skill describes this capability: Diagnose Swift concurrency errors and review isolation and Sendable boundaries. [Primary evidence](https://github.com/steipete/agent-scripts/blob/1159adf26ad007df38b87debb107d3946008d38b/skills/swift-concurrency-expert/SKILL.md) · [Cached claim](../engineers/peter-steinberger/skill-inventory.md#skill-peter-swift-concurrency-expert). Publication/revision: Repository revision 2026-10-20; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. Some source instructions assume the maintainer’s machine paths or tools. Adapt only verified project paths; do not run the repository-wide global sync script as a project bootstrap step. The source credits Dimillian/Skills. Preserve that upstream attribution; inclusion in Agent Scripts does not establish original authorship by Steinberger.

### swiftui-performance-audit · Peter Steinberger

Skill. Investigate SwiftUI rendering and resource use with code review and profiling.

- **Peter Steinberger · Published artifact** — The published skill describes this capability: Investigate SwiftUI rendering and resource use with code review and profiling. [Primary evidence](https://github.com/steipete/agent-scripts/blob/1159adf26ad007df38b87debb107d3946008d38b/skills/swiftui-performance-audit/SKILL.md) · [Cached claim](../engineers/peter-steinberger/skill-inventory.md#skill-peter-swiftui-performance-audit). Publication/revision: Repository revision 2026-10-20; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. Some source instructions assume the maintainer’s machine paths or tools. Adapt only verified project paths; do not run the repository-wide global sync script as a project bootstrap step. The source credits Dimillian/Skills. Preserve that upstream attribution; inclusion in Agent Scripts does not establish original authorship by Steinberger.

### native-app-performance · Peter Steinberger

Skill. Capture and analyse native-app CPU profiles using the Xcode command-line tools.

- **Peter Steinberger · Published artifact** — The published skill describes this capability: Capture and analyse native-app CPU profiles using the Xcode command-line tools. [Primary evidence](https://github.com/steipete/agent-scripts/blob/1159adf26ad007df38b87debb107d3946008d38b/skills/native-app-performance/SKILL.md) · [Cached claim](../engineers/peter-steinberger/skill-inventory.md#skill-peter-native-app-performance). Publication/revision: Repository revision 2026-10-20; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. Some source instructions assume the maintainer’s machine paths or tools. Adapt only verified project paths; do not run the repository-wide global sync script as a project bootstrap step.

### codex-debugging · Peter Steinberger

Skill. Investigate Codex implementation/configuration problems in a local source checkout.

- **Peter Steinberger · Published artifact** — The published skill describes this capability: Investigate Codex implementation/configuration problems in a local source checkout. [Primary evidence](https://github.com/steipete/agent-scripts/blob/1159adf26ad007df38b87debb107d3946008d38b/skills/codex-debugging/SKILL.md) · [Cached claim](../engineers/peter-steinberger/skill-inventory.md#skill-peter-codex-debugging). Publication/revision: Repository revision 2026-10-20; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. Some source instructions assume the maintainer’s machine paths or tools. Adapt only verified project paths; do not run the repository-wide global sync script as a project bootstrap step.

## Review & understand

Inspect the result, recover understanding and make acceptance decisions.

### Standards review & specification review

Skill. Review at a fixed diff point, separating engineering standards from specification conformance.

- **Matt Pocock · Published artifact** — The published review artifact keeps standards and specification findings separate at a fixed diff point. [Primary evidence](https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/skills/engineering/code-review/SKILL.md) · [Cached claim](../engineers/matt-pocock/recent-ai.md#c06). Publication/revision: 2026-10-19. Practice: Pinned skill revision; not an independently observed session. Limit: Separate model contexts do not establish independent correctness; human QA remains documented guidance.

### Oracle & agent review helpers

Tool. Published second-opinion integrations; no claim of a complete current personal installation.

- **Peter Steinberger · Published artifact** — Public artifacts document shared agent helpers and Oracle second-opinion integrations. [Primary evidence](https://github.com/steipete/agent-scripts/blob/1159adf26ad007df38b87debb107d3946008d38b/README.md) · [Cached claim](../engineers/peter-steinberger/recent-ai.md#c09). Publication/revision: 2026-10-20. Practice: Pinned repository revision; not an executed run. Limit: Artifact roles are inspected; historical personal tool use and current private installation remain separate.

### OpenCode-based specialist review

Harness. Combine bounded specialist review sessions under a coordinator.

- **Cloudflare · Reported team use** — A coordinator combines bounded specialist review sessions. [Primary evidence](https://blog.cloudflare.com/ai-code-review/) · [Cached claim](../companies/cloudflare/research.md#c07). Publication/revision: 2026-04-20. Practice: Reported review runs from 2026-03-10 through 2026-04-09. Limit: Reviewer orchestration is not a fleet of autonomous implementation agents.

### Human domain and architectural review

Process. People retain judgment about domain logic, architecture and cross-system effects.

- **Coinbase · Reported team use** — Humans refine domain logic, UI detail, edge-case tests and integrations. [Primary evidence](https://www.coinbase.com/blog/automating-figma-to-code-at-coinbase) · [Cached claim](../companies/coinbase/research.md#c06). Publication/revision: 2026-06-03. Practice: Internal tooling pilot and FCM feature before June publication; exact dates not stated. Limit: The article reports a successful case; review effectiveness was not independently measured.
- **Datadog · Reported team use** — Humans own harness design, targets and architectural approval. [Primary evidence](https://www.datadoghq.com/blog/ai/harness-first-agents/) · [Cached claim](../companies/datadog/research.md#c06). Publication/revision: 2026-03-09. Practice: Late-2025 capability change and subsequent projects; exact sessions unknown. Limit: Less line-by-line review in the cases does not remove human responsibility.
- **Cloudflare · Reported team use** — Humans remain necessary for architectural and cross-system judgment. [Primary evidence](https://blog.cloudflare.com/ai-code-review/) · [Cached claim](../companies/cloudflare/research.md#c06). Publication/revision: 2026-04-20. Practice: Reported review runs from 2026-03-10 through 2026-04-09. Limit: A stated limitation of the reviewer; no exact mandatory review checklist is inferred.

### Agent review followed by human acceptance

Process. Automated feedback supplements human review rather than granting automatic release authority.

- **GitHub · Reported team use** — Automated review preceded final human review. [Primary evidence](https://github.blog/ai-and-ml/github-copilot/agent-driven-development-in-copilot-applied-science/) · [Cached claim](../companies/github/research.md#c06). Publication/revision: 2026-03-31. Practice: Work before publication; exact sessions not dated. Limit: Named team workflow, not every GitHub repository.
- **PostHog · Reported team use** — A named fix went through agent reviews, human approval and a human merge command. [Primary evidence](https://posthog.com/blog/self-driving-loops) · [Cached claim](../companies/posthog/research.md#c06). Publication/revision: 2026-09-15. Practice: Named examples August–September 2026. Limit: One traceable example, not a policy for every PR.
- **Stripe · Reported company use** — Humans review Minion-produced changes before acceptance. [Primary evidence](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents) · [Cached claim](../companies/stripe/research.md#c06). Publication/revision: 2026-02-09. Practice: Tasks and usage before February publication; exact run dates not stated. Limit: No universal line-by-line review procedure is supplied.

### Above-code supervision & selective reading

Process. These dated personal accounts select what to inspect rather than establishing one universal review policy.

- **Robert C. Martin · Personal use** — His 24 September 2026 interview-page account reports mostly above-code supervision, with occasional inspection. [Primary evidence](https://www.aviator.co/podcast/uncle-bob-martin-ai-clean-code) · [Cached claim](../engineers/robert-c-martin/recent-ai.md#c06). Publication/revision: 2026-09-24. Practice: Interview-page account of then-current practice; full recording not checked. Limit: Inspected first-person episode text, not a verified complete recording; not a universal no-source-reading policy or safety result.
- **Peter Steinberger · Personal use** — His December 2025 self-report reads selected code while retaining architectural understanding. [Primary evidence](https://steipete.me/posts/2025/shipping-at-inference-speed) · [Cached claim](../engineers/peter-steinberger/recent-ai.md#c06). Publication/revision: 2025-12-28. Practice: Late-2025 workflow account; not an October 2026 stack. Limit: A description of his practice, not permission to skip appropriate review on another team.
- **David Heinemeier Hansson · Personal use** — January 2026: reports reviewing final agent outputs and offering guidance to hold the line on quality and cohesion, rather than using inline autocomplete that "steals the keyboard." [Primary evidence](https://world.hey.com/dhh/promoting-ai-agents-3ee04945) · [Cached claim](../engineers/david-heinemeier-hansson/recent-ai.md#c06). Publication/revision: 2026-01-07. Practice: January OpenCode workflow account. Limit: Dated self-report; October 2026 reiterates helping and occasionally disagreeing with agent "coworkers," though a formal review checklist is unknown.

### Browser annotations for visual review

Process. Review a visual artifact with contextual feedback.

- **Jason Liu · Personal use** — He reports reviewing visual artifacts with contextual browser annotations. [Primary evidence](https://jxnl.co/writing/2026/06/16/three-ways-codex-can-use-a-computer/) · [Cached claim](../engineers/jason-liu/recent-ai.md#c06). Publication/revision: 2026-06-16. Practice: Reported cross-tool and browser workflows; exact session dates unknown. Limit: Review workflow; no exhaustive code-review policy established.

### Walkthroughs & interactive explanations

Process. Recover understanding of agent-produced code; recommendation rather than a universal recorded practice.

- **Simon Willison · Recommendation** — Authors own initial review; walkthroughs and interactive explanations can repair understanding gaps. [Primary evidence](https://simonwillison.net/guides/agentic-engineering-patterns/anti-patterns/) · [Cached claim](../engineers/simon-willison/recent-ai.md#c06). Publication/revision: 2026 (guide began 2026-02-23; chapter date unknown). Practice: Living guide; exact practice dates not established. Limit: Sources S05, S09 and S10. Experimental projects are distinct from collaborator-facing guidance.

### ReviewHog / Codex review

Tool. PostHog’s named fix used agent reviews, human approval and a human merge command. No company-wide replacement of human review is established.

- **PostHog · Reported team use** — A named fix went through agent reviews, human approval and a human merge command. [Primary evidence](https://posthog.com/blog/self-driving-loops) · [Cached claim](../companies/posthog/research.md#c06). Publication/revision: 2026-09-15. Practice: Named examples August–September 2026. Limit: One traceable example, not a policy for every PR.

### Showboat

Tool. Publish Markdown demonstrations with executed commands, captured output and a re-execution verifier.

- **Simon Willison · Published artifact** — Official README documents executable demonstrations. The separate walkthrough guide describes an author example but is undated. [Primary evidence](https://github.com/simonw/showboat) · [Cached claim](../engineers/simon-willison/sources.md#s16). Publication/revision: Not established; mutable, unpinned repository. Practice: Not established; README inspected, not executed. Limit: No immutable revision captured. No installation or runtime effectiveness test. This does not establish daily adoption.

### Agent Skills /review

Skill. A command in Osmani’s published lifecycle collection. Namespaced forms may be needed where host commands collide; no execution or adoption claim.

- **Addy Osmani · Published artifact** — The tools chapter records /review in the inspected README command table. [Primary evidence](https://github.com/addyosmani/agent-skills) · [Cached claim](../engineers/addy-osmani/tools.md). Publication/revision: Not established; mutable, unpinned repository. Practice: Not established; README inspected, not executed. Limit: No immutable revision captured. No installation or runtime effectiveness test. This does not establish daily adoption.

### code-review-and-quality · Addy Osmani

Skill. Review a change for correctness, maintainability, design, security and performance.

- **Addy Osmani · Published artifact** — The published skill describes this capability: Review a change for correctness, maintainability, design, security and performance. [Primary evidence](https://github.com/addyosmani/agent-skills/blob/aeac41d4d005999432bb7312f7ff06383a91d59d/skills/code-review-and-quality/SKILL.md) · [Cached claim](../engineers/addy-osmani/skill-inventory.md#skill-addy-code-review-and-quality). Publication/revision: Repository revision 2026-10-13; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. The README notes that per-skill installs omit repository-level shared references. Preserve required checklists and repair local pointers without installing unrelated skills.

### code-simplification · Addy Osmani

Skill. Reduce implementation complexity while checking that behaviour is preserved.

- **Addy Osmani · Published artifact** — The published skill describes this capability: Reduce implementation complexity while checking that behaviour is preserved. [Primary evidence](https://github.com/addyosmani/agent-skills/blob/aeac41d4d005999432bb7312f7ff06383a91d59d/skills/code-simplification/SKILL.md) · [Cached claim](../engineers/addy-osmani/skill-inventory.md#skill-addy-code-simplification). Publication/revision: Repository revision 2026-10-13; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. The README notes that per-skill installs omit repository-level shared references. Preserve required checklists and repair local pointers without installing unrelated skills.

### doubt-driven-development · Addy Osmani

Skill. Challenge important assumptions using a separate adversarial review context.

- **Addy Osmani · Published artifact** — The published skill describes this capability: Challenge important assumptions using a separate adversarial review context. [Primary evidence](https://github.com/addyosmani/agent-skills/blob/aeac41d4d005999432bb7312f7ff06383a91d59d/skills/doubt-driven-development/SKILL.md) · [Cached claim](../engineers/addy-osmani/skill-inventory.md#skill-addy-doubt-driven-development). Publication/revision: Repository revision 2026-10-13; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. The README notes that per-skill installs omit repository-level shared references. Preserve required checklists and repair local pointers without installing unrelated skills.

### improve-codebase-architecture · Matt Pocock

Skill. Identify opportunities for clearer module interfaces and explore a chosen refactor.

- **Matt Pocock · Published artifact** — The published skill describes this capability: Identify opportunities for clearer module interfaces and explore a chosen refactor. [Primary evidence](https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/skills/engineering/improve-codebase-architecture/SKILL.md) · [Cached claim](../engineers/matt-pocock/skill-inventory.md#skill-matt-improve-codebase-architecture). Publication/revision: Repository revision 2026-10-19; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. Configure tracker and domain-document conventions before using engineering workflows. Avoid simultaneous plugin and editable-copy installation of the same skill.

### swiftui-view-refactor · Peter Steinberger

Skill. Restructure SwiftUI views and dependency/state handling consistently.

- **Peter Steinberger · Published artifact** — The published skill describes this capability: Restructure SwiftUI views and dependency/state handling consistently. [Primary evidence](https://github.com/steipete/agent-scripts/blob/1159adf26ad007df38b87debb107d3946008d38b/skills/swiftui-view-refactor/SKILL.md) · [Cached claim](../engineers/peter-steinberger/skill-inventory.md#skill-peter-swiftui-view-refactor). Publication/revision: Repository revision 2026-10-20; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. Some source instructions assume the maintainer’s machine paths or tools. Adapt only verified project paths; do not run the repository-wide global sync script as a project bootstrap step. The source credits Dimillian/Skills. Preserve that upstream attribution; inclusion in Agent Scripts does not establish original authorship by Steinberger.

### github-deep-review · Peter Steinberger

Skill. Investigate an issue or pull request using code and high-confidence supporting evidence.

- **Peter Steinberger · Published artifact** — The published skill describes this capability: Investigate an issue or pull request using code and high-confidence supporting evidence. [Primary evidence](https://github.com/steipete/agent-scripts/blob/1159adf26ad007df38b87debb107d3946008d38b/skills/github-deep-review/SKILL.md) · [Cached claim](../engineers/peter-steinberger/skill-inventory.md#skill-peter-github-deep-review). Publication/revision: Repository revision 2026-10-20; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. Some source instructions assume the maintainer’s machine paths or tools. Adapt only verified project paths; do not run the repository-wide global sync script as a project bootstrap step.

## Integrate & release

Gate merges, repair CI, deploy and check the integrated result.

### Bounded CI repair

Process. Run deterministic local checks, then limit expensive CI attempts.

- **Stripe · Reported company use** — Run deterministic local checks before a bounded CI repair loop. [Primary evidence](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2) · [Cached claim](../companies/stripe/research.md#c04). Publication/revision: 2026-02-19. Practice: Infrastructure and iteration policy reported at publication; exact sessions unknown. Limit: The reported standard allows one retry; passing checks do not establish correctness.
- **Stripe · Reported company use** — Limit expensive CI retries to balance completeness, cost and delay. [Primary evidence](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2) · [Cached claim](../companies/stripe/research.md#c12). Publication/revision: 2026-02-19. Practice: Infrastructure and iteration policy reported at publication; exact sessions unknown. Limit: A local engineering tradeoff, not a universal optimal retry count.

### Actionable CI autofixes

Process. Initiate bounded autofixes and promote validated drafts only if the source branch is unchanged.

- **Block · Reported company use** — Developers initiate eligible autofixes with a bounded retry path. [Primary evidence](https://engineering.block.xyz/blog/actionable-ci) · [Cached claim](../companies/block/research.md#c07). Publication/revision: 2026-02-23. Practice: Reported workflow at publication; exact deployment/session dates unknown. Limit: Automatic diagnosis and explicit autofix initiation are different authority levels.
- **Block · Reported company use** — Promote validated drafts for review only if the original branch is unchanged. [Primary evidence](https://engineering.block.xyz/blog/actionable-ci) · [Cached claim](../companies/block/research.md#c10). Publication/revision: 2026-02-23. Practice: Reported workflow at publication; exact deployment/session dates unknown. Limit: Ready-for-review is not automatic merge or release.

### CI-driven Swift repair & lifecycle manager

Process. Use CI where Linux workers cannot build Swift locally; reviewers approve before the described auto-merge workflow.

- **Duolingo · Reported team use** — CI feedback drives repair; Linux workers cannot locally validate Swift builds. [Primary evidence](https://blog.duolingo.com/ai-ios-unit-test-generation-pipeline/) · [Cached claim](../companies/duolingo/research.md#c04). Publication/revision: 2026-06-24. Practice: February–June 2026 account; automation live in March, described as autonomous by April. Limit: Passing CI and added coverage do not prove meaningful assertions.
- **Duolingo · Reported team use** — Human engineers reviewed and approved the reported merged test PRs. [Primary evidence](https://blog.duolingo.com/ai-ios-unit-test-generation-pipeline/) · [Cached claim](../companies/duolingo/research.md#c06). Publication/revision: 2026-06-24. Practice: February–June 2026 account; automation live in March, described as autonomous by April. Limit: Automated lifecycle management did not eliminate human approval.
- **Duolingo · Reported team use** — The lifecycle manager assigns reviewers and enables auto-merge after CI succeeds. [Primary evidence](https://blog.duolingo.com/ai-ios-unit-test-generation-pipeline/) · [Cached claim](../companies/duolingo/research.md#c10). Publication/revision: 2026-06-24. Practice: February–June 2026 account; automation live in March, described as autonomous by April. Limit: The reported merged PRs still required human approval; production deployment is not established.

### Risk-based bot approval

Process. Low-risk PRs can get bot approval while authors decide whether to merge. Medium-risk compatibility changes need another human.

- **Zalando · Reported company use** — Low-risk PRs can receive bot approval; authors choose whether to merge. [Primary evidence](https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html) · [Cached claim](../companies/zalando/research.md#c10). Publication/revision: 2026-08-14. Practice: Retrospective of 2.5 years, including 2024 foundations and 2026 observations. Limit: Automatic approval is distinct from automatic merge and production deployment.
- **Zalando · Reported company use** — Medium-risk compatibility changes require another human’s judgment. [Primary evidence](https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html) · [Cached claim](../companies/zalando/research.md#c06). Publication/revision: 2026-08-14. Practice: Retrospective of 2.5 years, including 2024 foundations and 2026 observations. Limit: Risk classes are specific to Zalando’s stack and incident experience.

### Post-merge closure on repository head

Process. Recheck that remediation is actually closed after merge, instead of relying on a stale patch or CI result.

- **Shopify · Reported team use** — Closure is checked after merge on repository head. [Primary evidence](https://shopify.engineering/river-vulnerability-remediation) · [Cached claim](../companies/shopify/research.md#c10). Publication/revision: 2026-09-02. Practice: Remediation runs before publication; exact dates not stated. Limit: Repository/tracker closure does not establish a universal production deployment policy.

### Human commit / consequential-action boundary

Process. Keep commits or account-changing actions under explicit human decisions. These are different policies, not equivalent enforcement.

- **Gene Kim · Personal use** — In January 2026 he describes version control as his fallback and usually retains the commit decision. [Primary evidence](https://techleadjournal.dev/episodes/244/) · [Cached claim](../engineers/gene-kim/recent-ai.md#c10). Publication/revision: 2026-01-19. Practice: Interview recollections; project dates not fully established. Limit: Personal integration boundary; not a documented production deployment or rollback procedure.
- **Jason Liu · Personal use** — He keeps approval before posting, submitting or changing accounts. [Primary evidence](https://jxnl.co/writing/2026/06/16/three-ways-codex-can-use-a-computer/) · [Cached claim](../engineers/jason-liu/recent-ai.md#c10). Publication/revision: 2026-06-16. Practice: Reported cross-tool and browser workflows; exact session dates unknown. Limit: Cross-app action boundary; a complete software release pipeline remains unknown.

### Human-reviewed PR integration

Process. Maintain explicit review and correction before accepting generated work.

- **Simon Willison · Personal use** — His 9 October 2026 production-feature account uses PR review and corrections before deployment; guide recommendations favour reviewable Git changes. [Primary evidence](https://simonwillison.net/2026/Oct/9/built-using-my-voice/) · [Cached claim](../engineers/simon-willison/recent-ai.md#c10). Publication/revision: 2026-10-09. Practice: Newsletter feature built and shipped 2026-10-09. Limit: One release account does not establish a universal CI or rollback system.
- **Stripe · Reported company use** — Return CI-checked PRs for human review. [Primary evidence](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents) · [Cached claim](../companies/stripe/research.md#c10). Publication/revision: 2026-02-09. Practice: Tasks and usage before February publication; exact run dates not stated. Limit: This does not establish autonomous merge, deployment or rollback authority.
- **GitLab · Declared policy** — CI and independent review precede integration. [Primary evidence](https://gitlab.com/gitlab-com/content-sites/handbook/-/blob/5f92de4547bca68f41f5ec784e621f097c1e8b38/content/handbook/engineering/workflow/ai-assisted-development.md) · [Cached claim](../companies/gitlab/research.md#c10). Publication/revision: 2026-10-13 (verified revision). Practice: Published R&D guidance; not every team’s observed workflow. Limit: Actor-neutral review wording. Production release authority remains unknown.

### Owning-team release responsibility

Process. Keep production deployment or uncovered migration checks with the responsible engineers.

- **Monzo · Reported team use** — Keep production deployment with engineers who completed required safety checks. [Primary evidence](https://monzo.com/blog/how-Monzo-Designers-are-shipping-safer-faster-product-improvements) · [Cached claim](../companies/monzo/research.md#c10). Publication/revision: 2026-03-20. Practice: Designer examples before March publication; exact session dates unknown. Limit: Specific designer workflow; no complete company rollback process is supplied.
- **Spotify · Reported team use** — Migration PRs remained subject to owning-team verification. [Primary evidence](https://engineering.atspotify.com/2026/4/background-coding-agents-dataset-migrations-honk-part-4) · [Cached claim](../companies/spotify/research.md#c10). Publication/revision: 2026-04-22. Practice: Migration initiated after late-2025 deprecation planning. Limit: This case does not establish a universal merge or production-release policy.

### Incremental mainline migration

Process. Ship compatibility-preserving port changes incrementally.

- **GitHub · Reported team use** — The migration shipped through incremental mainline releases. [Primary evidence](https://github.blog/ai-and-ml/generative-ai/migrating-the-github-copilot-runtime-to-rust-using-copilot/) · [Cached claim](../companies/github/research.md#c10). Publication/revision: 2026-09-16 (updated 2026-09-23). Practice: May–August 2026 migration; retrospective. Limit: Case-specific release practice, not a company-wide deployment policy.

### Verified optimization & shadow gates

Process. The Unicron optimization account describes shadow-gated changes, separate from Datadog’s other projects.

- **Datadog · Reported team use** — Unicron experiments automate optimization within verification and shadow gates. [Primary evidence](https://www.datadoghq.com/blog/ai/fully-autonomous-optimization/) · [Cached claim](../companies/datadog/research.md#c07). Publication/revision: 2026-03-09. Practice: Two Unicron workload experiments before publication; exact dates unknown. Limit: This is narrower than arbitrary autonomous development or company-wide release authority.
- **Datadog · Reported team use** — The described loop hot-swaps verified optimizations into running services. [Primary evidence](https://www.datadoghq.com/blog/ai/fully-autonomous-optimization/) · [Cached claim](../companies/datadog/research.md#c10). Publication/revision: 2026-03-09. Practice: Two Unicron workload experiments before publication; exact dates unknown. Limit: Autonomy concerns the reported bounded workload setting, not all Datadog deployments.

### Independent plugin releases

Process. Extract plugins, release them independently, and rebundle into distributions.

- **Grafana Labs · Reported team use** — Externalized plugins retain independent releases and are rebundled into distributions. [Primary evidence](https://medium.com/grafana-labs/how-and-why-were-bringing-data-sources-out-of-the-grafana-monolith-775f58eaebc3) · [Cached claim](../companies/grafana-labs/research.md#c10). Publication/revision: 2026-09-24. Practice: Migration over preceding months; exact agent runs not dated. Limit: Compatibility and rollout verification remain work beyond source rewriting.

### Agent Skills /ship

Skill. A command in Osmani’s published lifecycle collection. Namespaced forms may be needed where host commands collide; no execution or adoption claim.

- **Addy Osmani · Published artifact** — The tools chapter records /ship in the inspected README command table. [Primary evidence](https://github.com/addyosmani/agent-skills) · [Cached claim](../engineers/addy-osmani/tools.md). Publication/revision: Not established; mutable, unpinned repository. Practice: Not established; README inspected, not executed. Limit: No immutable revision captured. No installation or runtime effectiveness test. This does not establish daily adoption.

### ci-cd-and-automation · Addy Osmani

Skill. Configure repeatable build and verification gates with explicit delivery boundaries.

- **Addy Osmani · Published artifact** — The published skill describes this capability: Configure repeatable build and verification gates with explicit delivery boundaries. [Primary evidence](https://github.com/addyosmani/agent-skills/blob/aeac41d4d005999432bb7312f7ff06383a91d59d/skills/ci-cd-and-automation/SKILL.md) · [Cached claim](../engineers/addy-osmani/skill-inventory.md#skill-addy-ci-cd-and-automation). Publication/revision: Repository revision 2026-10-13; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. The README notes that per-skill installs omit repository-level shared references. Preserve required checklists and repair local pointers without installing unrelated skills.

### git-workflow-and-versioning · Addy Osmani

Skill. Organise branches, commits and change history into understandable units.

- **Addy Osmani · Published artifact** — The published skill describes this capability: Organise branches, commits and change history into understandable units. [Primary evidence](https://github.com/addyosmani/agent-skills/blob/aeac41d4d005999432bb7312f7ff06383a91d59d/skills/git-workflow-and-versioning/SKILL.md) · [Cached claim](../engineers/addy-osmani/skill-inventory.md#skill-addy-git-workflow-and-versioning). Publication/revision: Repository revision 2026-10-13; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. The README notes that per-skill installs omit repository-level shared references. Preserve required checklists and repair local pointers without installing unrelated skills.

### shipping-and-launch · Addy Osmani

Skill. Prepare launch evidence, monitoring and rollback arrangements before a rollout.

- **Addy Osmani · Published artifact** — The published skill describes this capability: Prepare launch evidence, monitoring and rollback arrangements before a rollout. [Primary evidence](https://github.com/addyosmani/agent-skills/blob/aeac41d4d005999432bb7312f7ff06383a91d59d/skills/shipping-and-launch/SKILL.md) · [Cached claim](../engineers/addy-osmani/skill-inventory.md#skill-addy-shipping-and-launch). Publication/revision: Repository revision 2026-10-13; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. The README notes that per-skill installs omit repository-level shared references. Preserve required checklists and repair local pointers without installing unrelated skills.

## Observe & improve

Use production feedback, failures, cost and quality to improve the loop.

### Production observation

Process. Instrument changes and inspect operational behaviour. This is Majors’ guidance, not a documented private agent setup.

- **Charity Majors · Recommendation** — Extend verification to observed operational behaviour as well as pre-production checks. [Primary evidence](https://www.honeycomb.io/blog/production-is-where-the-rigor-goes) · [Cached claim](../engineers/charity-majors/recent-ai.md#c04). Publication/revision: 2026-03-18. Practice: AI-era production-feedback argument; not a personal release log. Limit: March 2026 recommendation. No complete current personal TDD, mutation or test-ownership policy was established.
- **Charity Majors · Recommendation** — Instrument changes, deploy through the normal process, and inspect resulting behaviour. [Primary evidence](https://www.honeycomb.io/blog/production-is-where-the-rigor-goes) · [Cached claim](../engineers/charity-majors/recent-ai.md#c10). Publication/revision: 2026-03-18. Practice: AI-era production-feedback argument; not a personal release log. Limit: March 2026 recommendation, not an established private CI, merge, rollback, or release-approval configuration.

### Production failures fed back into fixes

Process. Hot Cell rollout exposed real failures that changed the library.

- **37signals · Reported team use** — Hot Cell’s production rollout exposed failures that were folded back into the library. [Primary evidence](https://dev.37signals.com/hot-cell-1-0/) · [Cached claim](../companies/37signals/research.md#c10). Publication/revision: 2026-10-05. Practice: 2026 development and production rollout before October publication. Limit: Operational learning is described; a full AI-to-production approval pipeline is not.

### Outcome, cost & quality measurement

Process. Track cost and engineering outcomes while retaining causal and proxy limitations.

- **Uber · Reported company use** — Track outcome cost, quality and model changes separately. [Primary evidence](https://www.uber.com/gb/en/blog/efficient-software-factory/) · [Cached claim](../companies/uber/research.md#c12). Publication/revision: 2026-08-27. Practice: February–August 2026 measurements; exact task dates not established. Limit: Usage growth or a cheaper session alone does not demonstrate more customer value.
- **Monzo · Reported company use** — Attribute agent work and cost to workflows and teams. [Primary evidence](https://monzo.com/blog/building-agent-chip) · [Cached claim](../companies/monzo/research.md#c12). Publication/revision: 2026-08-13. Practice: Build decision in late 2025; capabilities reported August 2026. Limit: The article supplies adoption signals, not a controlled quality or productivity result.
- **Microsoft · Reported company use** — Merged-PR throughput remains an imperfect outcome proxy. [Primary evidence](https://arxiv.org/html/2607.01418v1) · [Cached claim](../companies/microsoft/research.md#c12). Publication/revision: 2026-07-01. Practice: January 5–April 29 2026; not the October tool estate. Limit: Observational designs and selection limits remain; quality and value were unresolved.
- **Coinbase · Reported company use** — Interpret adoption/output comparisons with explicit self-selection caveats. [Primary evidence](https://www.coinbase.com/blog/coding-had-a-concurrency-problem-how-mux-helped-solve-it) · [Cached claim](../companies/coinbase/research.md#c12). Publication/revision: 2026-05-11. Practice: Early-2026 rollout; reported adoption/output observations include April 2026. Limit: PR volume is not customer value and does not establish a causal tool effect.

### PR size, reverts, CI cost & complexity

Process. Watch downstream delivery and maintainability effects as generated output increases.

- **PostHog · Reported company use** — The team inspects PR size, CI cost, reverts and reliability as output grows. [Primary evidence](https://posthog.com/blog/10k-prs-a-month) · [Cached claim](../companies/posthog/research.md#c12). Publication/revision: 2026-07-28. Practice: January–July 2026 retrospective; individual changes span that period. Limit: These proxies are incomplete and do not independently establish unchanged defect risk.
- **Zalando · Reported company use** — Inspect session costs, PR sizes and code-complexity effects. [Primary evidence](https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html) · [Cached claim](../companies/zalando/research.md#c12). Publication/revision: 2026-08-14. Practice: Retrospective of 2.5 years, including 2024 foundations and 2026 observations. Limit: Self-reported associations and anecdotal effects do not prove net productivity gains.

### Known-defect PR benchmarks

Process. Compare reviewer models against actual PRs with known bugs.

- **Uber · Reported company use** — Reviewer models are benchmarked against real PRs with known bugs. [Primary evidence](https://www.uber.com/gb/en/blog/efficient-software-factory/) · [Cached claim](../companies/uber/research.md#c04). Publication/revision: 2026-08-27. Practice: February–August 2026 measurements; exact task dates not established. Limit: Precision, recall, noise and latency are task measures, not proof of bug-free code.

### Session retrospectives & configuration audits

Process. Use session evidence to select environment improvements; assess whether configuration earns its cost.

- **Matt Pocock · Recommendation** — October retrospective guidance proposes environment changes from actual session struggles, with human selection. [Primary evidence](https://www.aihero.dev/skills-retro) · [Cached claim](../engineers/matt-pocock/recent-ai.md#c12). Publication/revision: Updated 2026-10-05; original publication not established. Practice: Dated living guidance; exact personal practice dates unknown. Limit: One-session evidence can overweight a recent issue; no universal productivity advantage is established.
- **Addy Osmani · Personal use** — Audit configuration value and cost; do not assume every skill improves every workflow. [Primary evidence](https://addyosmani.com/blog/audit-your-agent-files/) · [Cached claim](../engineers/addy-osmani/recent-ai.md#c12). Publication/revision: 2026-08-27. Practice: Configuration-audit routine reported at publication. Limit: Personal observations and reported research do not establish universal thresholds.

### Migration and CLI failure analysis

Process. Account for platform-building work and inspect where agents misunderstand capabilities.

- **Block · Reported team use** — Count platform-building effort as well as migration execution. [Primary evidence](https://engineering.block.xyz/blog/from-base-web-to-fluent-ui-without-a-flag-day) · [Cached claim](../companies/block/research.md#c12). Publication/revision: 2026-04-06. Practice: Migration-engine work from 2024-12-02 through 2026-02-26; retrospective. Limit: The source reports substantial preparation and exceptions; code volume is not net value.
- **Grafana Labs · Reported team use** — Evaluate actual agent failures instead of assuming help text is sufficient. [Primary evidence](https://medium.com/grafana-labs/clis-in-the-age-of-agents-how-we-designed-gcx-cdfca8954b30) · [Cached claim](../companies/grafana-labs/research.md#c12). Publication/revision: 2026-07-28. Practice: Internal offsite and CLI-design iteration before publication. Limit: Observed usability failures do not establish measured delivery or cost improvement.

### observability-and-instrumentation · Addy Osmani

Skill. Add useful logs, metrics and traces for diagnosing real application behaviour.

- **Addy Osmani · Published artifact** — The published skill describes this capability: Add useful logs, metrics and traces for diagnosing real application behaviour. [Primary evidence](https://github.com/addyosmani/agent-skills/blob/aeac41d4d005999432bb7312f7ff06383a91d59d/skills/observability-and-instrumentation/SKILL.md) · [Cached claim](../engineers/addy-osmani/skill-inventory.md#skill-addy-observability-and-instrumentation). Publication/revision: Repository revision 2026-10-13; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. The README notes that per-skill installs omit repository-level shared references. Preserve required checklists and repair local pointers without installing unrelated skills.

### retro · Matt Pocock

Skill. Review session evidence and propose improvements to the coding environment.

- **Matt Pocock · Published artifact** — The published skill describes this capability: Review session evidence and propose improvements to the coding environment. [Primary evidence](https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/skills/engineering/retro/SKILL.md) · [Cached claim](../engineers/matt-pocock/skill-inventory.md#skill-matt-retro). Publication/revision: Repository revision 2026-10-19; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. Configure tracker and domain-document conventions before using engineering workflows. Avoid simultaneous plugin and editable-copy installation of the same skill.

## Harness & access

Cross-cutting orchestration infrastructure, isolation and permissions.

### Minions blueprints

Harness. Interleave deterministic operations with model reasoning; this is not an unconstrained agent loop.

- **Stripe · Reported company use** — Blueprints interleave deterministic operations and agent reasoning. [Primary evidence](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2) · [Cached claim](../companies/stripe/research.md#c07). Publication/revision: 2026-02-19. Practice: Infrastructure and iteration policy reported at publication; exact sessions unknown. Limit: Unattended execution is confined to the documented workflow.

### Isolated devboxes & QA-only access

Environment. Constrain the execution environment and available resources.

- **Stripe · Reported company use** — Run tasks in standardized isolated devboxes using a custom harness. [Primary evidence](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2) · [Cached claim](../companies/stripe/research.md#c09). Publication/revision: 2026-02-19. Practice: Infrastructure and iteration policy reported at publication; exact sessions unknown. Limit: Dated architecture; not an inspected current installation.
- **Stripe · Reported company use** — Constrain devboxes to QA resources and selected tool access. [Primary evidence](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2) · [Cached claim](../companies/stripe/research.md#c11). Publication/revision: 2026-02-19. Practice: Infrastructure and iteration policy reported at publication; exact sessions unknown. Limit: An account of intended isolation; no independent penetration test was performed here.

### Agent Chip

Harness. Route one-shot jobs and isolate agent bundles behind a restricted external-access proxy.

- **Monzo · Reported company use** — Route current Agent Chip work as distinct one-shot jobs. [Primary evidence](https://monzo.com/blog/building-agent-chip) · [Cached claim](../companies/monzo/research.md#c07). Publication/revision: 2026-08-13. Practice: Build decision in late 2025; capabilities reported August 2026. Limit: Incident assistance is separately described; no complete multi-agent fleet policy is established.
- **Monzo · Reported company use** — Isolate agent bundles and mediate external access through a restricted proxy. [Primary evidence](https://monzo.com/blog/building-agent-chip) · [Cached claim](../companies/monzo/research.md#c11). Publication/revision: 2026-08-13. Practice: Build decision in late 2025; capabilities reported August 2026. Limit: Reported architecture, not an independently executed security audit.

### Deterministic credential, Git & storage operations

Process. Keep consequential infrastructure operations outside model discretion in the AppSec harness.

- **Shopify · Reported team use** — Deterministic infrastructure owns credentials, Git and storage. [Primary evidence](https://shopify.engineering/building-an-agentic-harness-that-outlasts-the-model) · [Cached claim](../companies/shopify/research.md#c11). Publication/revision: 2026-07-29. Practice: Five-month exploration and recent scanning period; exact session dates not stated. Limit: Reported AppSec harness architecture; exact private permission configuration is not public here.

### Model access gateways

Tool. Shared routing and access controls; Cloudflare Access/AI Gateway and Zalando’s proxy are separate implementations.

- **Cloudflare · Reported company use** — Access and gateway layers centralize credentials and policy. [Primary evidence](https://blog.cloudflare.com/internal-ai-engineering-stack/) · [Cached claim](../companies/cloudflare/research.md#c11). Publication/revision: 2026-04-20. Practice: Retrospective of eleven months, plus usage at publication. Limit: Reported infrastructure controls; no private permissions audit was performed.
- **Zalando · Reported company use** — Model access runs through a shared proxy with agent configuration helpers. [Primary evidence](https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html) · [Cached claim](../companies/zalando/research.md#c09). Publication/revision: 2026-08-14. Practice: Retrospective of 2.5 years, including 2024 foundations and 2026 observations. Limit: Proxy foundations began in 2024; the recent source is retrospective.

### MCP authentication gateway / helpers

Tool. Authenticate and govern external tool access rather than embedding static credentials.

- **Uber · Reported company use** — Internal MCP traffic uses a gateway for authentication and policy. [Primary evidence](https://www.uber.com/gb/en/blog/efficient-software-factory/) · [Cached claim](../companies/uber/research.md#c11). Publication/revision: 2026-08-27. Practice: February–August 2026 measurements; exact task dates not established. Limit: Gateway presence does not establish every task’s effective permission set.
- **Zalando · Reported company use** — Authentication helpers avoid hardcoded MCP credentials. [Primary evidence](https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html) · [Cached claim](../companies/zalando/research.md#c11). Publication/revision: 2026-08-14. Practice: Retrospective of 2.5 years, including 2024 foundations and 2026 observations. Limit: The later sandbox/identity platform is work in progress, not a universally deployed boundary.

### Restricted shell & Git tools

Process. Explicitly constrain agent tool operations in the dated migration design.

- **Spotify · Reported team use** — Git and shell access were deliberately constrained. [Primary evidence](https://engineering.atspotify.com/2025/11/context-engineering-background-coding-agents-part-2) · [Cached claim](../companies/spotify/research.md#c11). Publication/revision: 2025-11-24. Practice: Retrospective experiments and then-current migration practice. Limit: November tool restrictions; exact present private enforcement was not inspected.

### Role-scoped Bash regulator & lint hooks

Tool. Published factory controls. Hook instructions are not proof of complete isolation.

- **Gojko Adžić · Published artifact** — The public artifact documents a deterministic PreToolUse Bash regulator (`bin/regulate.js`) with role-scoped command rules (restricting workers to their own files and blocking broad `sudo`/path traversal), edit-time lint hooks and a Docker container. [Primary evidence](https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/REGULATOR.md) · [Cached claim](../engineers/gojko-adzic/recent-ai.md#c11). Publication/revision: 2026-10-22. Practice: Pinned repository revision; not an executed run. Limit: Hook scope is limited. A prompt or hook is not a comprehensive security boundary, and allowed `make` recipes execute beyond direct hook inspection.

### OpenClaw virtual-machine experiment

Environment. Isolate a personal assistant experiment from personal logins and data. This is not DHH’s normal coding-agent environment.

- **David Heinemeier Hansson · Personal use** — February 2026: reports an OpenClaw experiment ("Kef") isolated from personal data and logins inside a Proxmox VM while navigating standard web UIs. [Primary evidence](https://world.hey.com/dhh/clankers-with-claws-9f86fa71) · [Cached claim](../engineers/david-heinemeier-hansson/recent-ai.md#c11). Publication/revision: 2026-02-05. Practice: OpenClaw VM experiment before publication. Limit: Single self-reported experiment, not a security audit or universal coding-agent permission policy.

### Containment and prompt-injection exercises

Process. Test the environment boundary; Harper’s credential exposure is a failure case, not a validated safeguard.

- **Harper Reed · Personal use** — September 2026 experiment reports credential exposure through its environment. [Primary evidence](https://harper.blog/2026/09/22/break-away/) · [Cached claim](../engineers/harper-reed/recent-ai.md#c11). Publication/revision: 2026-09-22. Practice: Laboratory containment experiment before publication. Limit: A lab incident, not a recommended production policy or reproduced security audit.
- **Block · Reported team use** — Exercise prompt-injection and response controls against the agent environment. [Primary evidence](https://engineering.block.xyz/blog/how-we-red-teamed-our-own-ai-agent-) · [Cached claim](../companies/block/research.md#c11). Publication/revision: 2026-01-15. Practice: Internal exercise before publication; exact campaign dates not established. Limit: A simulated internal engagement; current residual exposure remains unknown.

### Shared agent wrapper

Harness. Standardize interactive agent configuration and cost visibility.

- **Uber · Reported company use** — A shared wrapper standardizes interactive agent configuration and cost visibility. [Primary evidence](https://www.uber.com/gb/en/blog/efficient-software-factory/) · [Cached claim](../companies/uber/research.md#c09). Publication/revision: 2026-08-27. Practice: February–August 2026 measurements; exact task dates not established. Limit: Specific defaults are dated and may change after publication.

### World & reproducible environments

Environment. Shopify’s River infrastructure supports repeatable development. The May account retrospectively includes work beginning in 2024.

- **Shopify · Reported company use** — The account invests in reproducible shared infrastructure. [Primary evidence](https://shopify.engineering/under-the-river) · [Cached claim](../companies/shopify/research.md#c05). Publication/revision: 2026-05-28. Practice: Retrospective beginning in 2024 and River usage before publication. Limit: Retrospective infrastructure choices do not establish a mandatory application architecture.

### Governed context programme

Process. JPMorgan leaders recommend curated context; detailed internal implementation is not established.

- **JPMorgan Chase · Recommendation** — Leaders advocate curated context and a governed source of technology guidance. [Primary evidence](https://www.jpmorganchase.com/about/technology/blog/devup-hyderabad-returns-in-full-force) · [Cached claim](../companies/jpmorgan-chase/research.md#c08). Publication/revision: 2026-03-10. Practice: Retrospective of the conference; date of individual deployments not established. Limit: Strategy, not an inspected operational context gateway or proven compliance.

### Nix substrate

Environment. Reproducible shared environment infrastructure behind Shopify’s World / River account. Not a claim that every team uses one identical pipeline.

- **Shopify · Reported company use** — The account invests in reproducible shared infrastructure. [Primary evidence](https://shopify.engineering/under-the-river) · [Cached claim](../companies/shopify/research.md#c05). Publication/revision: 2026-05-28. Practice: Retrospective beginning in 2024 and River usage before publication. Limit: Retrospective infrastructure choices do not establish a mandatory application architecture.

### Backstage

Tool. Spotify runs Honk within its existing developer platform. Public Backstage does not publish every private Honk component.

- **Spotify · Reported company use** — Honk runs within the existing developer platform. [Primary evidence](https://engineering.atspotify.com/2026/6/code-with-claude-coding-is-no-longer-the-constraint) · [Cached claim](../companies/spotify/research.md#c09). Publication/revision: 2026-06-03. Practice: Retrospective and usage reported by June publication. Limit: The internal system is not established as an open-source release.

### wizard · Matt Pocock

Skill. Prepare an interactive shell walkthrough for setup steps a human must perform.

- **Matt Pocock · Published artifact** — The published skill describes this capability: Prepare an interactive shell walkthrough for setup steps a human must perform. [Primary evidence](https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/skills/engineering/wizard/SKILL.md) · [Cached claim](../engineers/matt-pocock/skill-inventory.md#skill-matt-wizard). Publication/revision: Repository revision 2026-10-19; individual publication date not established. Practice: Instruction artifact, not an observed personal session. Limit: Inspected, not installed or executed. Publication does not establish daily use or runtime compatibility. Configure tracker and domain-document conventions before using engineering workflows. Avoid simultaneous plugin and editable-copy installation of the same skill. Install the walkthrough capability only; do not launch credential capture, provision infrastructure or execute cutover steps during bootstrap.

## Coverage and gaps

All 40 profiles were reviewed. Missing observations indicate a gap in this curated, coding-focused index, not that the subject does not use AI.

- [Addy Osmani](../engineers/addy-osmani/index.md): 34 indexed evidence associations. Publishes Agent Skills; historical self-reports and orchestration surveys are not a complete current personal stack.
- [Andrej Karpathy](../engineers/andrej-karpathy/index.md): 0 indexed evidence associations. March 2026 autoresearch artifact and February microgpt; no complete current private coding or release configuration.
- [Armin Ronacher](../engineers/armin-ronacher/index.md): 4 indexed evidence associations. Dated public tool accounts; complete current private setup unknown.
- [Birgitta Böckeler](../engineers/birgitta-bockeler/index.md): 4 indexed evidence associations. Dated reports cover several coding agents and static-analysis sensors; they do not establish a complete current personal stack.
- [Charity Majors](../engineers/charity-majors/index.md): 2 indexed evidence associations. Recent organisational AI norms and production-feedback guidance; personal coding-agent setup not established.
- [Chip Huyen](../engineers/chip-huyen/index.md): 0 indexed evidence associations. No eligible recent first-person tooling account established in this cache; earlier JAX/DistilBERT examples remain background.
- [Dave Farley](../engineers/dave-farley/index.md): 2 indexed evidence associations. Official CD.Training Claude plugin; tool choices in the worked example are adaptations.
- [David Heinemeier Hansson](../engineers/david-heinemeier-hansson/index.md): 5 indexed evidence associations. January 2026: OpenCode and Claude Code (in Omarchy) across Claude Opus 4.5, Codex 5, Gemini 3, MiniMax M2.1 and GLM-4.7; February: OpenClaw in a Proxmox VM; March: Basecamp CLI/skills is team product work.
- [Gene Kim](../engineers/gene-kim/index.md): 3 indexed evidence associations. January 2026 interview: retrospective Claude Code use and a personal commit boundary. Full current configuration unknown.
- [Gojko Adžić](../engineers/gojko-adzic/index.md): 8 indexed evidence associations. Publishes a Claude Code 'lights-on' factory based on Votito, with Docker/make, a PreToolUse Bash regulator, PostToolUse ESLint hook, and deterministic workflow compiler. Inspected, not executed.
- [Hamel Husain](../engineers/hamel-husain/index.md): 4 indexed evidence associations. January 2026: Amp, Cursor, Claude Code and Next.js; separate recent AI-product evaluation trials and joint skill artifacts.
- [Harper Reed](../engineers/harper-reed/index.md): 4 indexed evidence associations. January 2026: Claude Code, Blink, Tailscale and tmux. September containment experiment and October rules are separate evidence.
- [Jason Liu](../engineers/jason-liu/index.md): 6 indexed evidence associations. May/June 2026: Codex workstreams, explicit versioned memory, voice input and browser review; full October stack unknown.
- [Kent Beck](../engineers/kent-beck/index.md): 1 indexed evidence associations. April 2026 sponsored Intent session on a Go radix tree. BPlusTree3 is background; its recent activity is not established here.
- [Martin Fowler](../engineers/martin-fowler/index.md): 2 indexed evidence associations. May 2026 context-interview trial; current coding tools and release setup not established. Pi/gptel mentions are interest only.
- [Matt Pocock](../engineers/matt-pocock/index.md): 24 indexed evidence associations. Pinned October 2026 composable skills; displayed article update dates do not establish original publication.
- [Peter Steinberger](../engineers/peter-steinberger/index.md): 17 indexed evidence associations. October/December 2025 personal workflows; October 2026 Agent Scripts and Oracle artifacts are separately dated.
- [Robert C. Martin](../engineers/robert-c-martin/index.md): 5 indexed evidence associations. September 2026 interview: Grok TUI, prior Codex/Claude, above-code supervision; SwarmForge is a separately dated artifact.
- [Simon Willison](../engineers/simon-willison/index.md): 7 indexed evidence associations. Documented examples include Claude Code, Codex, Rodney, Showboat and Git; no complete private setup established.
- [Steve Yegge](../engineers/steve-yegge/index.md): 3 indexed evidence associations. Beads and Gas Town are public ecosystem tools; April Gas City endorsement and later private Wheelhouse account have distinct provenance.
- [37signals](../companies/37signals/index.md): 3 indexed evidence associations. Lexxy reports Claude and Playwright; DHH separately reports OpenCode. Hot Cell’s production sandbox is not a coding-agent sandbox.
- [Block](../companies/block/index.md): 8 indexed evidence associations. Dated accounts include goose, a TypeScript diagnostics/migration runtime, targeted Jest execution, CI repair agents and a versioned skills marketplace. Runtime evolution must not be flattened into a single October stack.
- [CircleCI](../companies/circleci/index.md): 0 indexed evidence associations. Product integrations are documented. CircleCI’s own current internal AI coding toolchain is not established.
- [Cloudflare](../companies/cloudflare/index.md): 6 indexed evidence associations. OpenCode-based review orchestration, GitLab CI, Cloudflare Access/AI Gateway, Backstage and AGENTS.md context, governed Engineering Codex. The Codex is internal standards, not OpenAI Codex.
- [Coinbase](../companies/coinbase/index.md): 7 indexed evidence associations. June internal tooling: screenshot inputs, reference implementations, versioned rules/templates and local checks. May Mux: worktree/branch/terminal isolation within a broader portfolio including Cursor, Copilot, OpenCode and Claude Code.
- [Datadog](../companies/datadog/index.md): 7 indexed evidence associations. Named cases use Claude Code/Cursor/Codex and verification tools. Pinned redis-rust is research, not a production replacement.
- [Duolingo](../companies/duolingo/index.md): 7 indexed evidence associations. Published accounts: Temporal, shared Codex/Claude wrappers, S3 state and CI; not a private installed inventory.
- [GitHub](../companies/github/index.md): 8 indexed evidence associations. March Copilot CLI/VS Code account; September runtime-port retrospective. Current private company-wide stack unknown.
- [GitLab](../companies/gitlab/index.md): 3 indexed evidence associations. Pinned DevEx guidance names Duo, Claude and MCP; R&D playbook describes a tool-flexible harness. Private configurations unverified.
- [Grafana Labs](../companies/grafana-labs/index.md): 5 indexed evidence associations. Tern is the reported migration tool. gcx has a pinned public README; the migration does not establish every team’s installed tools.
- [JPMorgan Chase](../companies/jpmorgan-chase/index.md): 1 indexed evidence associations. Current exact coding tools, context gateway, permissions and release workflow are not established by this primary-source review.
- [Microsoft](../companies/microsoft/index.md): 4 indexed evidence associations. January–April Copilot CLI/Claude Code cohorts; October VS Code instructions. No universal current Microsoft tool stack established.
- [Monzo](../companies/monzo/index.md): 7 indexed evidence associations. Reported Cursor use in March designer examples; August Agent Chip integrates Slack, Linear, GitHub, internal knowledge and sandboxed agent bundles. Models and private configuration remain incomplete.
- [Mozilla](../companies/mozilla/index.md): 2 indexed evidence associations. Firefox fuzzing infrastructure plus a security harness and ephemeral VMs; Claude for one Android prototype; Claude Code in a localization internship account. These are not a complete company-wide stack.
- [PostHog](../companies/posthog/index.md): 8 indexed evidence associations. Published accounts include cloud dev environments, hogli, CI, ReviewHog/Codex in a named review case, and versioned skills.
- [Shopify](../companies/shopify/index.md): 10 indexed evidence associations. River in Slack; World monorepo and Nix substrate; Remote Dev mobile environments; Dispatch security scanning. Internal configuration and a complete daily stack remain private.
- [Spotify](../companies/spotify/index.md): 6 indexed evidence associations. Honk / Claude Code, Fleetshift, Backstage, restricted verification/Git tools and Kubernetes-hosted background sessions. Tool access evolved; November restrictions are not silently applied to later versions.
- [Stripe](../companies/stripe/index.md): 11 indexed evidence associations. February 2026 reports: custom goose-derived Minions harness, AWS devboxes, scoped Cursor-compatible rules, Toolshed MCP and existing CI. The private harness was not executed.
- [Uber](../companies/uber/index.md): 5 indexed evidence associations. Reported shared agent wrapper, model gateway, managed review/maintenance agents and PRD Evaluator; no complete private release setup inspected.
- [Zalando](../companies/zalando/index.md): 7 indexed evidence associations. Reported LiteLLM-based access, reference coding-agent configs, shared skills and risk-approval tooling; future sandbox/identity work stays future.
