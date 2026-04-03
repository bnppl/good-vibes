---
last_updated: 2026-04-02
last_read: null
status: unread
---

# Spec-Driven Development Frameworks

A curated guide to the top tools where structured specifications drive code generation -- not general AI coding assistants, but frameworks where the spec is the primary artifact. The SDD space has grown to [30+ frameworks](https://medium.com/@visrow/spec-driven-development-is-eating-software-engineering-a-map-of-30-agentic-coding-frameworks-6ac0b5e2b484) as of early 2026; this guide covers the nine most significant.

## Rankings

| Framework | Ease of Adoption | Effectiveness | Cost | Open Source |
|-----------|:---:|:---:|:---:|:---:|
| [Kiro (AWS)](kiro.md) | 8 | 8 | 7 | No |
| [GitHub Spec Kit](github-spec-kit.md) | 6 | 7 | 10 | Yes |
| [Tessl](tessl.md) | 4 | 7 | 5 | No (beta) |
| [OpenSpec](openspec.md) | 7 | 6 | 10 | Yes |
| [Augment Intent](augment-intent.md) | 5 | 8 | 3 | No |
| [MetaGPT / MGX](metagpt.md) | 5 | 7 | 9 | Yes |
| [GPT Pilot](gpt-pilot.md) | 6 | 6 | 9 | Yes |
| [Smol Developer](smol-developer.md) | 9 | 4 | 10 | Yes |
| [Factory Droids](factory-droids.md) | 6 | 7 | 2 | No |

> **Scoring** (all out of 10):
> - **Ease of Adoption** -- How quickly you can go from zero to productive
> - **Effectiveness** -- How well it handles real-world spec-driven tasks at scale
> - **Cost** -- Affordability (10 = free/open-source, 1 = expensive enterprise pricing)

## SDD Maturity Levels

Martin Fowler's team (Thoughtworks) identifies three levels of spec-driven maturity:

| Level | Description | Tools at this level |
|-------|-------------|---------------------|
| **Spec-first** | Spec written upfront, guides AI, then often becomes stale | Kiro, Spec Kit, OpenSpec, MetaGPT, GPT Pilot, Smol Developer, Factory Droids |
| **Spec-anchored** | Spec persists and evolves alongside code as living documentation | Augment Intent |
| **Spec-as-source** | Spec IS the source -- humans maintain specs, never edit generated code | Tessl |

## Categories

### Purpose-Built SDD Tools
- [Kiro (AWS)](kiro.md) -- IDE with three-phase requirements/design/tasks pipeline using EARS notation
- [GitHub Spec Kit](github-spec-kit.md) -- Agent-agnostic CLI generating 8+ interconnected spec files with a Constitution
- [Tessl](tessl.md) -- Bidirectional spec-code sync with a 10k+ library Spec Registry
- [OpenSpec](openspec.md) -- Universal standard across 21+ AI tools, brownfield-first
- [Augment Intent](augment-intent.md) -- Living specs with multi-agent orchestration (Coordinator/Implementor/Verifier)

### Multi-Agent Spec Frameworks
- [MetaGPT / MGX](metagpt.md) -- Simulates a software company with PM, Architect, and Engineer agents
- [GPT Pilot](gpt-pilot.md) -- Multi-agent pipeline with TDD integration and context rewinding

### Foundations & Learning
- [Smol Developer](smol-developer.md) -- Sub-200-line proof-of-concept; the "Hello World" of SDD

### Enterprise Autonomous Agents
- [Factory Droids](factory-droids.md) -- Full SDLC agents with spec-before-code enforcement and org memory


---


---
last_updated: 2026-04-02
last_read: null
status: unread
---

# Kiro (AWS)

## Overview

Kiro is a VS Code fork / AI-native IDE built on Amazon Bedrock. It's the most prominent purpose-built spec-driven development tool, using a structured three-phase approach to turn natural language prompts into implemented code.

## How It Works

Kiro generates three markdown files that form the spec pipeline:

1. **`requirements.md`** -- Generates requirements and acceptance criteria using EARS notation (Easy Approach to Requirements Syntax) with "GIVEN...WHEN...THEN..." format
2. **`design.md`** -- Analyzes the codebase and produces architecture, system design, and tech stack decisions
3. **`tasks.md`** -- Creates a sequenced implementation plan with discrete tasks and optional tests

Code is then generated file-by-file following the task plan. Kiro also supports "Steering files" (persistent project knowledge in markdown) and "Agent hooks" (automated triggers on file save/create/delete).

## Pros

- **Structured, reviewable pipeline** -- Each phase produces a human-readable artifact you can review and edit before proceeding
- **EARS notation for requirements** -- Brings formal requirements engineering practices into AI-assisted development
- **Familiar IDE experience** -- VS Code fork means minimal learning curve for editor mechanics
- **AWS ecosystem backing** -- Bedrock integration, likely strong future ties to AWS dev tooling
- **Steering files** -- Persistent project context that survives across sessions, similar to `.cursorrules` but spec-oriented
- **Agent hooks** -- Automated workflows triggered by file events, enabling CI-like behavior in the IDE
- **Free during preview** -- No cost barrier to try it now

## Cons

- **Over-documentation for small changes** -- Martin Fowler's team found a minor bug fix generated 16 acceptance criteria; the spec overhead doesn't scale down gracefully
- **Spec-first, not spec-anchored** -- Specs are generated upfront but don't stay in sync with code as it evolves
- **AWS/Bedrock lock-in** -- Tied to Amazon's model infrastructure
- **Closed source** -- No ability to customize the spec pipeline or agent behavior
- **Best for small-to-medium features** -- The three-phase approach becomes unwieldy for large architectural changes
- **New and unproven at scale** -- Limited track record in production team environments
- **Pricing uncertainty** -- Free now, but GA pricing ($19-39/mo) puts it in competitive territory with more mature tools

## Motivational Argument

Kiro is the tool that makes spec-driven development accessible to mainstream developers. By embedding a structured requirements-to-design-to-tasks pipeline directly into a familiar VS Code environment, it removes the friction of adopting SDD practices. You don't need to learn a new framework or change your editor -- you just get a disciplined spec workflow layered on top of what you already know.

The EARS notation and GIVEN/WHEN/THEN acceptance criteria aren't just AI scaffolding -- they're established software engineering practices that have been proven in safety-critical industries for decades. Kiro is teaching developers formal requirements engineering by making it the path of least resistance. Every spec you write with Kiro is building a transferable skill.

If you want to understand what spec-driven development looks like as a first-class product experience rather than a bolted-on workflow, Kiro is the clearest example. It's the benchmark that every other tool in this space is measured against.


---


---
last_updated: 2026-04-02
last_read: null
status: unread
---

# GitHub Spec Kit

## Overview

Spec Kit is an open-source CLI toolkit (Python) from GitHub that works with any AI coding agent -- Copilot, Claude Code, Gemini CLI, and others. It generates a comprehensive set of interconnected markdown specification files and manages them through a structured lifecycle.

## How It Works

Spec Kit produces 8+ interconnected markdown files per spec, including:

- A **Constitution** (immutable project principles)
- Data models, API specs, component definitions
- Research notes and clarification logs
- Checklists tracking violations and open questions

The workflow follows a cycle: **Constitution -> Specify -> Plan -> Tasks**. Each spec gets its own git branch. Tasks can be executed by any supported AI coding agent.

## Pros

- **Agent-agnostic** -- Works with Copilot, Claude Code, Gemini CLI, Cursor, or any AI tool that can read markdown
- **Massively popular** -- 72k+ GitHub stars, 110+ releases, strong community
- **Open source** -- Full transparency, community contributions, no vendor lock-in
- **Constitution concept** -- Immutable project principles that specs can't violate is a powerful governance mechanism
- **Git-native** -- Each spec gets its own branch, making spec evolution trackable and reviewable
- **Comprehensive artifact generation** -- Data models, API specs, and component definitions created alongside requirements
- **Extensible** -- Python-based CLI that can be customized and integrated into existing workflows

## Cons

- **Very verbose** -- Generates repetitive content across 8+ files that requires extensive review
- **Spec-first, not spec-anchored** -- Specs don't automatically stay in sync with implementation
- **Heavyweight for small tasks** -- The full specification ceremony is overkill for minor changes
- **Review burden** -- The volume of generated documentation can slow down development rather than accelerate it
- **Currently tedious** -- Community feedback consistently notes the process feels more bureaucratic than productive
- **Python dependency** -- Requires Python environment setup, which may not suit all teams
- **Learning curve** -- Understanding the full file structure and lifecycle takes time

## Motivational Argument

GitHub Spec Kit represents the most ambitious open-source attempt to standardize spec-driven development across the entire AI coding tool ecosystem. By being agent-agnostic, it makes a bet that the spec format matters more than any particular AI tool -- and that bet is probably right. Your specs will outlive any individual coding assistant.

The Constitution concept is genuinely innovative. By establishing immutable project principles that all specs must respect, Spec Kit introduces a governance layer that prevents AI agents from making architecturally incoherent decisions, no matter which agent executes the tasks. This is the kind of structural thinking that separates serious engineering from vibe coding.

If you contribute to or work in open-source, Spec Kit is the natural choice. It's where the community is converging on what spec-driven development standards should look like, and being fluent in it positions you to influence that standard.


---


---
last_updated: 2026-04-02
last_read: null
status: unread
---

# Tessl Framework + Spec Registry

## Overview

Tessl is an agent enablement platform with two products: the Framework (spec-to-code generation) and the Spec Registry (10,000+ specs for external libraries to prevent hallucinations). It's the only tool explicitly pursuing a "spec-as-source" vision where humans maintain specs and never edit generated code directly.

## How It Works

Specs are written in natural language with special tags like `@generate` and `@test`. API sections define exposed interfaces. The framework supports **bidirectional spec-code sync** -- it can reverse-engineer specs from existing code. Generated code is marked with `// GENERATED FROM SPEC - DO NOT EDIT`, enforcing a strict 1:1 mapping between specs and code files.

The Spec Registry provides pre-built specs for popular libraries, giving AI agents accurate API knowledge instead of hallucinated interfaces.

## Pros

- **Spec-as-source vision** -- The most radical and forward-thinking approach: specs ARE the source code, generated code is an artifact
- **Bidirectional sync** -- Can reverse-engineer specs from existing code, enabling adoption in brownfield projects
- **Spec Registry** -- 10,000+ library specs prevent hallucination, a unique and valuable resource
- **Clean separation of concerns** -- Humans own specs, machines own code, with clear boundaries
- **Anti-hallucination by design** -- The registry approach directly addresses one of the biggest problems in AI coding
- **Visionary leadership** -- CEO Guy Podjarny (founder of Snyk) brings deep developer tooling experience

## Cons

- **Still in beta** -- Framework in closed beta, Registry in open beta; not production-ready
- **1:1 spec-to-file limitation** -- Current constraint limits flexibility for complex codebases
- **Radical paradigm shift** -- Asking developers to never edit generated code is a hard cultural sell
- **Closed source** -- Framework is proprietary
- **Unproven at scale** -- The spec-as-source model hasn't been validated in large, complex projects
- **Dependency risk** -- If Tessl fails as a company, the workflow is hard to replicate
- **Learning new conventions** -- Tags like `@generate` and `@test` are Tessl-specific syntax

## Motivational Argument

Tessl is making the boldest bet in the spec-driven development space: that within a few years, developers won't look at generated code most of the time. If that prediction is even partially correct, the developers who learned to think in specs rather than code will have a massive advantage. Tessl is where you go to practice that future now.

The Spec Registry is quietly one of the most important innovations in the space. Every AI coding tool struggles with hallucinated APIs and outdated library knowledge. Tessl's approach of curating accurate, structured specs for 10,000+ libraries is a force multiplier that benefits the entire ecosystem, and understanding how it works gives you insight into the fundamental reliability challenges of AI-assisted development.

Learning Tessl means learning to think at a higher level of abstraction than any other tool demands. Even if the spec-as-source vision takes longer to materialize than predicted, the skill of writing precise, machine-executable specifications is the most transferable skill in this entire space.


---


---
last_updated: 2026-04-02
last_read: null
status: unread
---

# OpenSpec (Fission AI)

## Overview

OpenSpec is an open-source SDD framework designed as a universal standard that works across 21+ AI coding tools including Claude Code, Cursor, Windsurf, Kiro, Gemini CLI, GitHub Copilot, Amazon Q, Cline, and RooCode. Its key differentiator is a "brownfield-first" strategy -- it's specifically designed for evolving existing codebases rather than greenfield apps.

## How It Works

Install via `npm install -g @fission-ai/openspec@latest` then `openspec init`. The `propose` workflow takes a single request and generates design documents, structured specs, and implementation tasks in markdown. These specs are then consumed by whichever AI coding tool you're already using.

## Pros

- **Universal compatibility** -- Works with 21+ AI tools, no vendor lock-in whatsoever
- **Brownfield-first** -- Designed for real-world codebases, not just greenfield demos
- **Open source** -- Community-driven, transparent, free to use
- **Simple CLI** -- `openspec init` and `propose` workflow is low-friction to adopt
- **npm-based distribution** -- Easy installation in any JavaScript/Node environment
- **Spec portability** -- Specs generated by OpenSpec work across tools, protecting your investment
- **Pragmatic scope** -- Focused on generating useful specs without excessive ceremony

## Cons

- **Smaller community** -- Less adoption and community support compared to Spec Kit
- **Node.js dependency** -- Requires npm/Node.js environment
- **Less comprehensive artifacts** -- Generates fewer specification types than Spec Kit
- **Early-stage documentation** -- Rapidly evolving features sometimes outpace docs
- **Brownfield focus may limit greenfield UX** -- Optimized for existing codebases may mean less polish for new projects
- **Limited governance features** -- No equivalent of Spec Kit's Constitution concept
- **Relatively unknown** -- Less industry recognition and thought leadership presence

## Motivational Argument

OpenSpec solves the most practical problem in spec-driven development: most developers aren't starting from scratch. They're maintaining, extending, and refactoring existing codebases. By designing for brownfield scenarios first, OpenSpec addresses the reality that SDD tools optimized for greenfield demos often fall apart when confronted with real-world legacy code, complex dependencies, and incremental feature work.

The universal compatibility story is compelling for teams that haven't committed to a single AI tool. If your team uses Cursor, your CI uses Claude Code, and your junior devs prefer Windsurf, OpenSpec specs work everywhere. That's not just convenience -- it's insurance against the rapid churn in the AI coding tool market.

Learning OpenSpec teaches you to write specs that are tool-agnostic and context-rich enough for any AI agent to execute. That's the most portable version of the spec-driven development skill set.


---


---
last_updated: 2026-04-02
last_read: null
status: unread
---

# Augment Code Intent

## Overview

Intent is Augment Code's desktop workspace for spec-driven development with multi-agent orchestration. Its key innovation is "living specs" -- specifications that update continuously as agents implement changes, maintaining real-time sync between documentation and code.

## How It Works

Intent uses a multi-agent architecture:

- **Coordinator** agent breaks specs into tasks
- **Implementor** agents execute tasks in parallel
- **Verifier** agent checks results against the spec

Powered by a "Context Engine" with cross-repository understanding, Intent maintains living specs that evolve alongside the implementation rather than becoming stale artifacts.

## Pros

- **Living specs** -- Specs update as code changes, solving the biggest problem with spec-first tools (stale documentation)
- **Multi-agent orchestration** -- Multiple agents working against the same spec simultaneously enables parallelism
- **Cross-repository context** -- Context Engine understands relationships across repos, not just within one
- **Spec-anchored maturity** -- Closest to the ideal of specs and code evolving together
- **Coordinator/Implementor/Verifier pattern** -- Built-in quality checks through agent role separation
- **Enterprise positioning** -- Designed for team-scale development, not just individual use

## Cons

- **Closed source and commercial** -- Proprietary tool with enterprise pricing
- **Desktop app requirement** -- Not terminal-native or browser-based; requires their specific client
- **Relatively opaque** -- Less public documentation about spec format and agent behavior than competitors
- **Enterprise sales cycle** -- May be difficult for individual developers or small teams to access
- **Unproven living spec model** -- The promise of specs staying in sync with code is ambitious and hard to verify
- **Vendor lock-in** -- Specs are managed within Intent's ecosystem, limiting portability
- **New entrant** -- Less community validation and real-world case studies

## Motivational Argument

Intent is the only tool that takes the "living spec" concept seriously as a product feature. Every other spec-driven tool generates specs upfront and then largely abandons them as the code evolves. Intent's promise -- that specs and code stay synchronized through continuous agent-mediated updates -- is the holy grail of spec-driven development. If it delivers, it eliminates the primary criticism of SDD: that specs become stale documentation.

The multi-agent architecture is worth studying even if you never use Intent itself. The Coordinator/Implementor/Verifier pattern is a design pattern for agentic systems that you'll see replicated across the industry. Understanding how to decompose specs into parallelizable tasks and verify results against requirements is a core competency for working with any multi-agent system.

For developers working in enterprise environments where cross-repository context and team-scale coordination matter, Intent represents what spec-driven development looks like when it grows up beyond individual developer productivity.


---


---
last_updated: 2026-04-02
last_read: null
status: unread
---

# MetaGPT / MGX

## Overview

MetaGPT is an open-source multi-agent framework that simulates a software company. Agents play roles -- Product Manager, Architect, Project Manager, Engineer -- each generating structured artifacts that feed into the next phase. MGX (MetaGPT X) launched in Feb 2025 as the hosted product version.

## How It Works

From a one-line requirement, the agent pipeline produces:

1. **Product Manager agent** -- Generates a full PRD with goals, user stories, competitive analysis, requirement pool, and competitive quadrant chart
2. **Architect agent** -- Produces system design, class diagrams, and API specs
3. **Project Manager agent** -- Creates development tasks and schedules
4. **Engineer agent** -- Implements code with unit tests

Each agent verifies intermediate results before passing to the next, following Standardized Operating Procedures (SOPs) encoded into prompt sequences.

## Pros

- **Full software company simulation** -- Models the entire development lifecycle with specialized agents
- **Rich artifact generation** -- PRDs, system designs, class diagrams, API specs, and code all from a single prompt
- **Academic rigor** -- Research paper accepted at ICLR 2025; well-studied and benchmarked
- **Open source** -- Full codebase available, large community, active development
- **SOP-driven** -- Standardized Operating Procedures bring process discipline to agent behavior
- **Verification at each handoff** -- Built-in quality gates between agent phases
- **MGX hosted option** -- Don't need to self-host if you want a managed experience

## Cons

- **Heavy for small tasks** -- Simulating a full software company for a simple feature is massive overkill
- **One-line input limitation** -- The requirement input is less structured than Kiro's or Spec Kit's approach
- **Auto-generated specs** -- You don't write the PRD; the AI does. Less human control over spec content
- **Complex setup for self-hosting** -- Multiple agents, models, and dependencies to configure
- **Optimistic artifact quality** -- Generated PRDs and designs can be superficially impressive but lack domain nuance
- **Token-intensive** -- Multiple agents each consuming full context windows adds up quickly
- **Research-oriented** -- Primary focus has been academic benchmarks rather than production workflows

## Motivational Argument

MetaGPT is the most intellectually ambitious framework in the spec-driven space. By encoding the entire software development lifecycle into communicating agents with formal roles and SOPs, it forces you to think about what each phase of development actually produces and why. Using MetaGPT is like taking a compressed course in software project management, taught by watching AI agents attempt each role.

The multi-agent architecture is genuinely innovative. The insight that different development phases require different reasoning modes -- creative for product thinking, analytical for architecture, systematic for implementation -- and that these should be separate agents with separate prompts, is a design principle that transfers to any agentic system you build or work with.

Even if you use a simpler tool for daily work, understanding MetaGPT's approach gives you a mental model for how complex AI systems decompose problems. The SOPs, verification gates, and role-based prompting patterns are building blocks you'll use in every agentic workflow you design.


---


---
last_updated: 2026-04-02
last_read: null
status: unread
---

# GPT Pilot (Pythagora)

## Overview

GPT Pilot is an open-source development tool that uses a multi-agent pipeline to build applications from natural language descriptions. It emphasizes human-in-the-loop checkpoints and TDD-based implementation, with a unique "context rewinding" mechanism to manage LLM context windows across long development sessions.

## How It Works

A natural language app description is processed through specialized agents:

1. **Product Owner Agent** -- Breaks down business specs, asks clarifying questions
2. **Software Architect Agent** -- Breaks down technical requirements, selects technologies
3. **DevOps Agent** -- Sets up the development environment
4. **Tech Team Lead Agent** -- Creates development tasks with test requirements (TDD approach)
5. **Developer Agent** -- Implements code incrementally

Testing happens at two levels: integration tests after each task, unit tests after each step. "Context rewinding" resets the LLM context after each completed task to keep token usage manageable.

## Pros

- **Human-in-the-loop by design** -- Checkpoints at each phase let you course-correct before the agent goes further
- **TDD-integrated** -- Test requirements are built into the task specifications, not bolted on afterward
- **Context rewinding** -- Clever solution to the context window problem for long-running development sessions
- **Two-level testing** -- Integration and unit tests provide layered quality assurance
- **Open source** -- Full transparency, community-driven development
- **Incremental building** -- Constructs applications step-by-step rather than generating everything at once
- **Clarifying questions** -- The Product Owner agent actively asks for missing requirements

## Cons

- **Slow for simple tasks** -- The full multi-agent pipeline adds significant overhead to small features
- **Inconsistent quality** -- Results vary significantly depending on LLM model and prompt complexity
- **Environment setup fragility** -- The DevOps agent's environment setup can fail in non-standard configurations
- **Less active maintenance** -- Development pace has slowed compared to early momentum
- **Context rewinding trade-offs** -- Resetting context means the agent can lose important decisions made in earlier phases
- **Limited to greenfield** -- Best suited for building new applications, less effective for modifying existing codebases
- **No persistent spec format** -- Specs exist within the agent session, not as standalone reusable documents

## Motivational Argument

GPT Pilot pioneered the idea that AI-assisted development should look like a structured engineering process, not a chat conversation. The multi-agent pipeline with specialized roles, TDD integration, and human checkpoints was ahead of its time when it launched, and the core concepts have been validated by every spec-driven tool that followed.

The context rewinding innovation deserves special attention. It's an elegant solution to a fundamental constraint of LLM-based development: context windows are finite, but real projects aren't. By resetting context after each completed task while preserving the implementation, GPT Pilot demonstrated that long-running agentic development is possible without sacrificing coherence.

Learning GPT Pilot teaches you the fundamentals of multi-agent development pipelines in a transparent, open-source environment. The patterns it established -- agent specialization, human checkpoints, TDD-driven task specs, context management -- are now table stakes in the spec-driven development space. Understanding where these patterns originated gives you a deeper grasp of why modern tools work the way they do.


---


---
last_updated: 2026-04-02
last_read: null
status: unread
---

# Smol Developer (smol-ai)

## Overview

Smol Developer is a lightweight, open-source "junior developer" agent in under 200 lines of Python. Its philosophy is radical simplicity: a markdown specification document IS the prompt, and the entire generation process is transparent and hackable. It's more a proof-of-concept and learning tool than a production framework.

## How It Works

Three stages:

1. **Read spec** -- Ingests a markdown specification mixing English and code
2. **Draft file plan** -- Lists all files needed to implement the spec
3. **Generate code** -- Produces code file-by-file following the plan

The spec is plain markdown -- no special syntax, no proprietary format. Human-in-the-loop: you can take over the codebase at any point and continue manually.

## Pros

- **Radical simplicity** -- Under 200 lines of code; you can read and understand the entire tool in an hour
- **Markdown-is-the-spec** -- No format to learn; your specification document is literally the prompt
- **Fully transparent** -- Every decision the agent makes is visible and understandable
- **Educational value** -- The best tool for understanding how spec-to-code generation actually works
- **Zero ceremony** -- No pipelines, no agents, no phases -- just spec in, code out
- **Hackable** -- Small enough to fork and customize for your specific workflow in a day
- **Open source** -- MIT licensed, no restrictions

## Cons

- **Not production-grade** -- Designed as a proof-of-concept, not a reliable development tool
- **No iteration or debugging** -- Generates code once; doesn't test, debug, or refine
- **No context management** -- Entire spec must fit in one context window
- **Single-shot generation** -- No incremental building or task decomposition
- **No persistent project knowledge** -- Each run is independent; no memory across sessions
- **Limited to small projects** -- Context window constraints mean it can't handle large specifications
- **Minimal maintenance** -- Foundational project that influenced the category but isn't actively developed

## Motivational Argument

Smol Developer is the "Hello World" of spec-driven development. Its value isn't in what it builds -- it's in what it teaches. By stripping away every abstraction, framework, and pipeline, Smol Developer reveals the core mechanism of spec-driven development in its purest form: a structured document goes in, a file plan is derived, and code is generated file-by-file. Every other tool in this space is a more sophisticated version of this exact loop.

The "markdown is the perfect way to prompt for whole program synthesis" insight that Smol Developer demonstrated has proven to be foundational. Kiro uses markdown. Spec Kit uses markdown. OpenSpec uses markdown. CLAUDE.md is markdown. The format won, and Smol Developer was one of the first to prove why.

If you're learning spec-driven development, start here. Spend an afternoon reading the source code, writing a spec, and watching what happens. You'll understand the fundamental mechanics that every tool in this space builds upon, and you'll never be confused by the abstractions that more complex tools layer on top.


---


---
last_updated: 2026-04-02
last_read: null
status: unread
---

# Factory AI Droids

## Overview

Factory AI provides autonomous software development agents ("Droids") that operate across the full software development lifecycle. Droids generate complete specifications for user review before implementation, saving approved specs as markdown in `.factory/docs/`. They offer three autonomy levels: manual approval, allow safe commands, or full autonomy.

## How It Works

A Droid receives a task (from GitHub/GitLab issues, Jira tickets, Slack messages, or direct prompts), then:

1. **Generates a specification** -- Complete spec document for the proposed changes
2. **Human review** -- User reviews and approves the spec (at manual autonomy level)
3. **Implementation** -- Droid executes against the approved spec
4. **PR creation** -- Changes are submitted as a pull request

Specs are persisted in `.factory/docs/` within the repository. Organization-level memory persists across sessions, building institutional knowledge over time.

## Pros

- **Spec-before-code enforcement** -- Always generates a reviewable spec before touching code
- **Persistent spec storage** -- Specs saved in `.factory/docs/` become part of the repo history
- **Flexible autonomy levels** -- Choose between manual approval, safe-commands-only, or full autonomy per task
- **Native integrations** -- GitHub, GitLab, Jira, Slack, PagerDuty built in
- **Organizational memory** -- Learns and retains context across sessions and team members
- **Full SDLC coverage** -- From issue triage to PR creation in one flow
- **Configurable guardrails** -- Three autonomy tiers let teams calibrate risk tolerance

## Cons

- **Closed source and commercial** -- Enterprise pricing, no community edition
- **Opaque agent behavior** -- Less visibility into how specs are generated compared to open-source alternatives
- **Enterprise-oriented** -- Sales-driven access model that's harder for individuals or small teams
- **Integration dependency** -- Most valuable when deeply integrated with your issue tracker and CI/CD
- **Spec quality varies** -- Auto-generated specs may need significant human editing for complex tasks
- **Lock-in risk** -- `.factory/docs/` format and organizational memory are proprietary
- **Limited public benchmarks** -- Less objective performance data compared to open-source alternatives

## Motivational Argument

Factory Droids represent what spec-driven development looks like when it's embedded directly into enterprise workflows. The integration with issue trackers, chat tools, and CI/CD pipelines means the spec isn't an extra step -- it's the natural output of the agent receiving a task and the natural input for implementation. For teams that struggle to adopt SDD because it feels like "extra process," Factory makes it the default path.

The organizational memory feature addresses a critical gap in other tools. When a Droid learns that your team prefers certain patterns, avoids certain dependencies, or has specific compliance requirements, that knowledge persists and applies to future specs. Over time, the quality of generated specs improves as the system builds an understanding of your organization's standards and preferences.

If you work in an enterprise environment where development is deeply integrated with project management and communication tools, Factory Droids show how spec-driven development can be the connective tissue between "what needs to be built" and "what gets shipped" without requiring developers to change their workflow.
