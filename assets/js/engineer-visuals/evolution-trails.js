window.EngineerVisuals = window.EngineerVisuals || {};
window.EngineerVisuals['evolution-trails'] = function(ctx) {
  'use strict';
  const {root,profiles,el,link,profileUrl,evidenceLinks} = ctx;
  const shell=el('section','view-evolution-trails');
  root.append(shell);
  const trails={
  "andrej-karpathy": [
    {
      "source": "S09",
      "date": "2025-04-27",
      "lane": "practice",
      "title": "MenuGen prototype to deployment",
      "summary": "One app-development account with external-service friction; not a complete current CI/review policy.",
      "url": "https://karpathy.bearblog.dev/vibe-coding-menugen/"
    },
    {
      "source": "S01",
      "date": "2025-11-17",
      "lane": "ideas",
      "title": "Verifiability framing",
      "summary": "Conceptual argument about verifiable feedback, not a personal unit-TDD recipe.",
      "url": "https://karpathy.bearblog.dev/verifiability/"
    },
    {
      "source": "S08",
      "date": "2025-12-19",
      "lane": "ideas",
      "title": "Local agent interaction commentary",
      "summary": "Dated endorsement of computer-local agents and application context; not a complete current tool inventory.",
      "url": "https://karpathy.bearblog.dev/year-in-review-2025/"
    },
    {
      "source": "S03",
      "date": "2026-02-12",
      "lane": "artifact",
      "title": "microgpt educational artifact",
      "summary": "A compact educational implementation, not a universal production architecture.",
      "url": "https://karpathy.github.io/2026/02/12/microgpt/"
    },
    {
      "source": "S04",
      "date": "2026-03-26",
      "lane": "artifact",
      "title": "autoresearch pinned baseline",
      "summary": "One bounded ML agent with a fixed baseline and evaluator instructions; inspected, not executed.",
      "url": "https://github.com/karpathy/autoresearch/blob/228791fb499afffb54b46200aca536f79142f117/README.md"
    },
    {
      "source": "S07",
      "date": "2026-04-30",
      "lane": "ideas",
      "title": "Human specifications and oversight",
      "summary": "AI-generated-and-checked account of a conversation; not an independently verified raw transcript.",
      "url": "https://karpathy.bearblog.dev/sequoia-ascent-2026/"
    }
  ],
  "martin-fowler": [
    {
      "source": "S01",
      "date": "2025-08-28",
      "lane": "ideas",
      "title": "Workflow-sensitive AI assessment",
      "summary": "Inspect actual check outcomes and workflow context; no private control inventory established.",
      "url": "https://martinfowler.com/articles/202508-ai-thoughts.html"
    },
    {
      "source": "S09",
      "date": "2026-01-08",
      "lane": "ideas",
      "title": "Pi and programmable interaction interest",
      "summary": "Expressed interest in Pi/gptel-style interaction is not verified adoption.",
      "url": "https://martinfowler.com/fragments/2026-01-08.html"
    },
    {
      "source": "S03",
      "date": "2026-05-14",
      "lane": "practice",
      "title": "Context-interview trial",
      "summary": "Reports trying an interview-generated context report; credits Harper Reed. A brief trial is not a full workflow.",
      "url": "https://martinfowler.com/bliki/InterrogatoryLLM.html"
    },
    {
      "source": "S02",
      "date": "2026-05-21",
      "lane": "ideas",
      "title": "Agentic engineering definition",
      "summary": "Agents manipulate source while people inspect code, tests and sensors; conceptual category, not his private setup.",
      "url": "https://martinfowler.com/bliki/AgenticEngineering.html"
    },
    {
      "source": "S08",
      "date": "2026-09-29",
      "lane": "ideas",
      "title": "Sensible defaults",
      "summary": "Context-sensitive defaults rather than one mandatory workflow; not an agent benchmark.",
      "url": "https://martinfowler.com/bliki/SensibleDefault.html"
    }
  ],
  "steve-yegge": [
    {
      "source": "S01",
      "date": "2025-12-07",
      "lane": "ideas",
      "title": "Recurring code-health checks",
      "summary": "Recurring inspection and tests accompany agent-friendly tools; no universal test-first cadence.",
      "url": "https://steve-yegge.medium.com/six-new-tips-for-better-coding-with-agents-d4e9c86e42a9"
    },
    {
      "source": "S02",
      "date": "2026-01-01",
      "lane": "practice",
      "title": "Gas Town launch account",
      "summary": "Tracked agent roles and human steering, with launch-era expense and instability.",
      "url": "https://steve-yegge.medium.com/welcome-to-gas-town-4f25ee16dd04"
    },
    {
      "source": "S06",
      "date": "2026-04-24",
      "lane": "ideas",
      "title": "Gas City endorsement",
      "summary": "Credits Julian Knutsen and Chris Sells; endorsement is distinct from sole authorship or personal deployment.",
      "url": "https://yegge.ai/essays/welcome-to-gas-city/"
    },
    {
      "source": "S07",
      "date": "2026-08",
      "lane": "practice",
      "title": "Private Wheelhouse account",
      "summary": "Describes a bespoke private harness. August publication includes an August 5 update; exact initial day is not established.",
      "url": "https://yegge.ai/essays/the-shape-of-things-to-come/"
    },
    {
      "source": "S08",
      "date": "2026-09-20",
      "lane": "practice",
      "title": "Factory lessons interview",
      "summary": "Episode-page summary discusses quality debt and downstream capacity; not a complete checked transcript.",
      "url": "https://re-cinq.com/podcast/steve-yegge-software-factory"
    }
  ],
  "robert-c-martin": [
    {
      "source": "S03",
      "date": "2014-12-17",
      "lane": "ideas",
      "title": "Fine-grained TDD cycles",
      "summary": "Historical general testing/design guidance, not a current agent configuration.",
      "url": "https://blog.cleancoder.com/uncle-bob/2014/12/17/TheCyclesOfTDD.html"
    },
    {
      "source": "S01",
      "date": "2026-02",
      "lane": "ideas",
      "title": "Joint Clean AI teaching",
      "summary": "February catalogue listing for Robert/Justin Martin teaching. Public description only; exact day and paid demonstration uninspected.",
      "url": "https://cleancoders.com/episode/agentic-discipline-1"
    },
    {
      "source": "S08",
      "date": "2026-06",
      "lane": "ideas",
      "title": "Worktree role teaching",
      "summary": "June catalogue description names specification, coding, cleanup and QA roles; not a private runtime inventory.",
      "url": "https://cleancoders.com/episode/agentic-discipline-6"
    },
    {
      "source": "S09",
      "date": "2026-09-04",
      "lane": "artifact",
      "title": "SwarmForge publication",
      "summary": "Pinned public coordination artifact: worktrees, tmux and operator controls. Inspected, not executed.",
      "url": "https://github.com/unclebob/swarm-forge/blob/f4f5fbcae0de6f7dcc26e82400334227647cfdb2/README.md"
    },
    {
      "source": "S13",
      "date": "2026-09-24",
      "lane": "practice",
      "title": "Moving away from the harness",
      "summary": "Later first-person interview-page account reports terminal tools and mostly above-code supervision. Does not erase the published framework.",
      "url": "https://www.aviator.co/podcast/uncle-bob-martin-ai-clean-code"
    }
  ],
  "armin-ronacher": [
    {
      "source": "S01",
      "date": "2025-06-12",
      "lane": "practice",
      "title": "Claude Code account",
      "summary": "Dated setup and agentic-coding recommendations; not a complete present configuration.",
      "url": "https://lucumr.pocoo.org/2025/6/12/agentic-coding/"
    },
    {
      "source": "S02",
      "date": "2025-07-30",
      "lane": "practice",
      "title": "Automation retrospective",
      "summary": "Reports dissatisfaction with generated tests and parallel writes; not a rejection of testing in general.",
      "url": "https://lucumr.pocoo.org/2025/7/30/things-that-didnt-work/"
    },
    {
      "source": "S04",
      "date": "2026-01-31",
      "lane": "practice",
      "title": "Pi and extension experiments",
      "summary": "Reports Pi use, session branches, todos and review extensions; minimal January architecture is historical.",
      "url": "https://lucumr.pocoo.org/2026/1/31/pi/"
    },
    {
      "source": "S09",
      "date": "2026-06-23",
      "lane": "practice",
      "title": "Bounded loops versus lasting code",
      "summary": "Separates useful bounded investigations from unattended code he must maintain.",
      "url": "https://lucumr.pocoo.org/2026/6/23/the-coming-loop/"
    },
    {
      "source": "S11",
      "date": "2026-09-07",
      "lane": "practice",
      "title": "Hands-off Astra experiment",
      "summary": "Dated experiment disappointed him; not a universal benchmark of autonomous development.",
      "url": "https://lucumr.pocoo.org/2026/9/7/astra-why/"
    },
    {
      "source": "S12",
      "date": "2026-10-06",
      "lane": "ideas",
      "title": "Codemode and MCP composition",
      "summary": "Explains harness-side composition and progressive MCP discovery. Later architecture differs from January descriptions.",
      "url": "https://lucumr.pocoo.org/2026/10/6/codemode/"
    }
  ],
  "david-heinemeier-hansson": [
    {
      "source": "S07",
      "date": "2014-04-23",
      "lane": "ideas",
      "title": "Testing without universal test-first",
      "summary": "Historical system-testing preference; retain the date rather than calling it his current agent policy.",
      "url": "https://dhh.dk/2014/tdd-is-dead-long-live-testing.html"
    },
    {
      "source": "S09",
      "date": "2024-05-17",
      "lane": "practice",
      "title": "Browser-suite reassessment",
      "summary": "Reports poor returns from system tests, retaining smoke and model/controller checks.",
      "url": "https://world.hey.com/dhh/system-tests-have-failed-d90af718"
    },
    {
      "source": "S01",
      "date": "2025-05-13",
      "lane": "practice",
      "title": "Conversational LLM collaboration",
      "summary": "Reports enjoying writing Ruby and conversational assistance, before the stronger agent-adoption account.",
      "url": "https://world.hey.com/dhh/coding-should-be-a-vibe-50908f49"
    },
    {
      "source": "S02",
      "date": "2026-01-07",
      "lane": "practice",
      "title": "OpenCode supervised delegation",
      "summary": "Reports guidance and outcome review, not unreviewed professional work.",
      "url": "https://world.hey.com/dhh/promoting-ai-agents-3ee04945"
    },
    {
      "source": "S03",
      "date": "2026-02-05",
      "lane": "practice",
      "title": "OpenClaw assistant experiment",
      "summary": "An isolated Proxmox VM assistant experiment; not every coding session.",
      "url": "https://world.hey.com/dhh/clankers-with-claws-9f86fa71"
    },
    {
      "source": "S04",
      "date": "2026-03-25",
      "lane": "artifact",
      "title": "Team-built Basecamp interfaces",
      "summary": "Product announcement of API, CLI and skill; team capability is not sole personal authorship.",
      "url": "https://world.hey.com/dhh/basecamp-becomes-agent-accessible-3ae6b949"
    },
    {
      "source": "S06",
      "date": "2026-10-06",
      "lane": "ideas",
      "title": "Professional-development forecast",
      "summary": "A forecast and recommendation about agent-written code, not a measured adoption result.",
      "url": "https://world.hey.com/dhh/over-my-dead-pencil-fb0f3647"
    }
  ],
  "simon-willison": [
    {
      "source": "S11",
      "date": "2025-06-16",
      "lane": "ideas",
      "title": "Lethal-trifecta framing",
      "summary": "Explains an exfiltration exposure pattern; not a complete permission policy.",
      "url": "https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/"
    },
    {
      "source": "S14",
      "date": "2026-10-09",
      "lane": "practice",
      "title": "Production blog feature",
      "summary": "Conversational requirements, local preview, PR review and corrections before release.",
      "url": "https://simonwillison.net/2026/Oct/9/built-using-my-voice/"
    },
    {
      "source": "S15",
      "date": "2026-10-20",
      "lane": "practice",
      "title": "Battle Drones experiment",
      "summary": "Reports playtesting and little code review in a game experiment. Different project stakes are not a general abandonment of review.",
      "url": "https://simonwillison.net/2026/Oct/20/battledrones/"
    }
  ],
  "birgitta-bockeler": [
    {
      "source": "S06",
      "date": "2025-03-25",
      "lane": "practice",
      "title": "Supervised brownfield accounts",
      "summary": "Frequent human steering and diagnostic judgment in dated personal experiences.",
      "url": "https://martinfowler.com/articles/exploring-gen-ai/13-role-of-developer-skills.html"
    },
    {
      "source": "S04",
      "date": "2025-09-23",
      "lane": "practice",
      "title": "Risk-based oversight choices",
      "summary": "First-person legacy migration and conditional judgment; not a calibrated risk formula.",
      "url": "https://martinfowler.com/articles/exploring-gen-ai/to-vibe-or-not-vibe.html"
    },
    {
      "source": "S03",
      "date": "2025-10-15",
      "lane": "practice",
      "title": "Specification-tool exploration",
      "summary": "Article published October; tools were tried in September. Publication date is not the experiment date.",
      "url": "https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html"
    },
    {
      "source": "S01",
      "date": "2026-04-02",
      "lane": "ideas",
      "title": "Harness engineering framework",
      "summary": "Full treatment supersedes an earlier February memo; not a second independent experiment.",
      "url": "https://martinfowler.com/articles/harness-engineering.html"
    },
    {
      "source": "S07",
      "date": "2026-05-27",
      "lane": "practice",
      "title": "Maintainability sensor experiments",
      "summary": "Structural and test-quality feedback in one dashboard application.",
      "url": "https://martinfowler.com/articles/sensors-for-coding-agents.html"
    },
    {
      "source": "S08",
      "date": "2026-08-10",
      "lane": "practice",
      "title": "Agent-loop TDD evaluation",
      "summary": "Limited greenfield tasks, imperfect adherence and LLM-based judgment; not evidence against all TDD.",
      "url": "https://martinfowler.com/articles/exploring-gen-ai/tdd-in-the-agent-loop.html"
    }
  ],
  "dave-farley": [
    {
      "source": "S12",
      "date": "2014-10-24",
      "lane": "ideas",
      "title": "Acceptance versus developer tests",
      "summary": "Historical distinction between business-facing acceptance and developer expectations.",
      "url": "https://www.davefarley.net/?p=186"
    },
    {
      "source": "S05",
      "date": "2026-01-23",
      "lane": "ideas",
      "title": "Properties of good tests",
      "summary": "Qualitative test properties; no canonical numerical score is established.",
      "url": "https://www.linkedin.com/pulse/tdd-properties-good-tests-dave-farley-iexge"
    },
    {
      "source": "S04",
      "date": "2026-05-29",
      "lane": "ideas",
      "title": "Continuous verification with AI",
      "summary": "Small reversible changes and automated feedback address generated-code volume.",
      "url": "https://www.linkedin.com/pulse/continuous-delivery-matters-more-less-when-ai-loop-dave-farley-zidce"
    },
    {
      "source": "S03",
      "date": "2026-08-18",
      "lane": "ideas",
      "title": "Executable-intent abstraction",
      "summary": "Advocates BDD/executable intent; generation is not made deterministic.",
      "url": "https://www.linkedin.com/pulse/bdd-ai-5th-generation-programming-dave-farley-mcyse"
    },
    {
      "source": "S01",
      "date": "2026-10-25",
      "lane": "ideas",
      "title": "Human-owned acceptance contract",
      "summary": "Acceptance examples, mutation checks and risk-based reading; advocacy/self-report, not a comparative trial.",
      "url": "https://www.linkedin.com/pulse/spec-must-executable-dave-farley-jrnxe"
    }
  ],
  "kent-beck": [
    {
      "source": "S01",
      "date": "2025-06-25",
      "lane": "practice",
      "title": "BPlusTree3 augmented-coding account",
      "summary": "Next-test instructions and human intervention; Augment sponsorship disclosed.",
      "url": "https://newsletter.kentbeck.com/p/augmented-coding-beyond-the-vibes"
    },
    {
      "source": "S10",
      "date": "2026-04-01",
      "lane": "practice",
      "title": "TCR skill session description",
      "summary": "Public description of an experiment; full recording and reusable implementation were not inspected.",
      "url": "https://newsletter.kentbeck.com/p/genie-sessions-tcr-skill"
    },
    {
      "source": "S06",
      "date": "2026-04-23",
      "lane": "practice",
      "title": "Intent coordination burden",
      "summary": "Self-reported session argues for desired outcomes, not managing agents for its own sake.",
      "url": "https://newsletter.kentbeck.com/p/genie-lessons-nobody-wants-agents"
    },
    {
      "source": "S08",
      "date": "2026-10-07",
      "lane": "ideas",
      "title": "Human-centred tools excerpt",
      "summary": "Public opening only; paid body was not inspected.",
      "url": "https://newsletter.kentbeck.com/p/tools-arent-here-to-make-us-feel"
    },
    {
      "source": "S09",
      "date": "2026-10-09",
      "lane": "ideas",
      "title": "Fix time, flex scope teaser",
      "summary": "Public teaser supports the pattern, not a universal latency target.",
      "url": "https://newsletter.kentbeck.com/p/thinkie-fix-time-flex-scope"
    }
  ],
  "addy-osmani": [
    {
      "source": "S09",
      "date": "2026-01-04",
      "lane": "practice",
      "title": "Personal workflow account",
      "summary": "Model switching, supervised coding and background agents; not an October private inventory.",
      "url": "https://addyosmani.com/blog/ai-coding-workflow/"
    },
    {
      "source": "S05",
      "date": "2026-03-26",
      "lane": "ideas",
      "title": "Code Agent Orchestra",
      "summary": "Coordination guidance and survey; not a claim every personal task uses a fleet.",
      "url": "https://addyosmani.com/blog/code-agent-orchestra/"
    },
    {
      "source": "S03",
      "date": "2026-04-19",
      "lane": "ideas",
      "title": "Harness engineering",
      "summary": "Environment constraints should answer actual failures; third-party work retains attribution.",
      "url": "https://addyosmani.com/blog/agent-harness-engineering/"
    },
    {
      "source": "S07",
      "date": "2026-07-15",
      "lane": "ideas",
      "title": "Human acceptance ownership",
      "summary": "Human answerability remains central; no blanket removal of review.",
      "url": "https://addyosmani.com/blog/own-the-outer-loop/"
    },
    {
      "source": "S04",
      "date": "2026-09-14",
      "lane": "ideas",
      "title": "Brownfield uncertainty and checks",
      "summary": "Characterise uncertain existing behaviour before granting autonomy.",
      "url": "https://addyosmani.com/blog/brownfield-agentic-engineering/"
    }
  ],
  "gojko-adzic": [
    {
      "source": "S02",
      "date": "2025-09-29",
      "lane": "practice",
      "title": "Early Spec Kit trial",
      "summary": "Editable decisions helped, but verbosity and coarse requirements burdened review; historical tool version.",
      "url": "https://www.linkedin.com/pulse/spec-driven-development-revenge-waterfall-bdd-taken-gojko-adzic-imquf"
    },
    {
      "source": "S10",
      "date": "2026-06-24",
      "lane": "ideas",
      "title": "Product-role forecast",
      "summary": "Product decision making is a stated priority, not a measured universal bottleneck.",
      "url": "https://gojko.net/2026/06/24/everyone-will-be-a-pm/"
    },
    {
      "source": "S01",
      "date": "2026-09",
      "lane": "ideas",
      "title": "Keeping humans in the loop",
      "summary": "Month comes from the slide filename; exact presentation day is not established.",
      "url": "https://gojko.net/slides/202609-gotocph.pdf"
    },
    {
      "source": "S03",
      "date": "2026-10-22",
      "lane": "artifact",
      "title": "Lights-on factory revision",
      "summary": "Public boilerplate based on Votito, with environment, regulation, feedback and workflow tools; inspected, not executed.",
      "url": "https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/README.md"
    }
  ],
  "gene-kim": [
    {
      "source": "S02",
      "date": "2025-03-13",
      "lane": "practice",
      "title": "Google Docs add-on account",
      "summary": "Historical project, feedback and tool use; elapsed-time claim is not a controlled result.",
      "url": "https://itrevolution.com/articles/how-i-built-a-google-docs-add-on-in-three-hours-using-chat-and-vibe-programming/"
    },
    {
      "source": "S08",
      "date": "2025-06-04",
      "lane": "practice",
      "title": "Manuscript tooling report",
      "summary": "Published prompts and commit-associated output; repository not independently executed.",
      "url": "https://itrevolution.com/articles/the-last-80-hours-of-editing-the-vibe-coding-book/"
    },
    {
      "source": "S06",
      "date": "2025-10-09",
      "lane": "ideas",
      "title": "Joint context and planning guidance",
      "summary": "Kim/Yegge public passage; not a canonical personal prompt or complete private ritual.",
      "url": "https://itrevolution.com/articles/the-key-vibe-coding-practices/"
    },
    {
      "source": "S07",
      "date": "2025-10-27",
      "lane": "ideas",
      "title": "Joint orchestration patterns",
      "summary": "Exploration of team and coordination layers; not an inspected Gene-operated swarm.",
      "url": "https://itrevolution.com/articles/from-line-cookto-head-chef-orchestrating-ai-teams/"
    },
    {
      "source": "S09",
      "date": "2026-01-19",
      "lane": "practice",
      "title": "Responsibility and delegation interview",
      "summary": "First-person interview page; reported failures and recommendations, not controlled validation.",
      "url": "https://techleadjournal.dev/episodes/244/"
    }
  ],
  "harper-reed": [
    {
      "source": "S01",
      "date": "2025-02-16",
      "lane": "practice",
      "title": "Prompt-plan workflow",
      "summary": "Historical staged clarification, prompt plan and saved task state.",
      "url": "https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/"
    },
    {
      "source": "S02",
      "date": "2025-05-08",
      "lane": "practice",
      "title": "Claude Code transition",
      "summary": "Reported adoption and advocacy of tests and executable feedback.",
      "url": "https://harper.blog/2025/05/08/basic-claude-code/"
    },
    {
      "source": "S06",
      "date": "2026-01-05",
      "lane": "practice",
      "title": "Remote terminal setup",
      "summary": "Claude Code, Tailscale, Blink and tmux; multiple sessions do not establish a full orchestrator.",
      "url": "https://harper.blog/2026/01/05/claude-code-is-better-on-your-phone/"
    },
    {
      "source": "S09",
      "date": "2026-09-19",
      "lane": "artifact",
      "title": "Breakaway agent revision",
      "summary": "Public experimental README, not an installation or security audit.",
      "url": "https://github.com/2389-research/breakaway-agent/blob/d02d44ea24f45492815ed0c24c2054983b71d5d4/README.md"
    },
    {
      "source": "S05",
      "date": "2026-09-22",
      "lane": "practice",
      "title": "Containment experiment retrospective",
      "summary": "Reports credential exposure in a broad-capability lab experiment; not a general production prescription.",
      "url": "https://harper.blog/2026/09/22/break-away/"
    },
    {
      "source": "S10",
      "date": "2026-10-15",
      "lane": "artifact",
      "title": "Published instruction revision",
      "summary": "Public instructions prescribe verification; existence is not proof of compliance.",
      "url": "https://github.com/harperreed/dotfiles/blob/9b7fbb29d9e9835f29aae32544c1397a2ddde5ac/.claude/CLAUDE.md"
    }
  ],
  "matt-pocock": [
    {
      "source": "S01",
      "date": "2026-03-16",
      "lane": "ideas",
      "title": "Seven phases update",
      "summary": "Staged process including prototype, ticket planning and human QA; old commands remain historical.",
      "url": "https://www.aihero.dev/my-7-phases-of-ai-development"
    },
    {
      "source": "S07",
      "date": "2026-08-24",
      "lane": "ideas",
      "title": "Specification guidance update",
      "summary": "Records settled multi-session decisions and agrees test seams; small work may skip a spec.",
      "url": "https://www.aihero.dev/skills-to-spec"
    },
    {
      "source": "S11",
      "date": "2026-10-05",
      "lane": "ideas",
      "title": "Retrospective skill update",
      "summary": "Use session evidence for proposed environmental improvements; human selects candidates.",
      "url": "https://www.aihero.dev/skills-retro"
    },
    {
      "source": "S02",
      "date": "2026-10-19",
      "lane": "artifact",
      "title": "Composable skills revision",
      "summary": "Published instructions and setup routes; daily-use self-report is not full private-runtime verification.",
      "url": "https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/README.md"
    },
    {
      "source": "S09",
      "date": "2026-10-19",
      "lane": "artifact",
      "title": "Worktree orchestration revision",
      "summary": "Dependency-ready tickets, integration and assembled-branch review; inspected, not run.",
      "url": "https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/skills/engineering/implement-spec/SKILL.md"
    }
  ],
  "peter-steinberger": [
    {
      "source": "S01",
      "date": "2025-08-25",
      "lane": "practice",
      "title": "Claude/Ghostty workflow",
      "summary": "Historical host choices; planning and parallel work depend on scope.",
      "url": "https://steipete.me/posts/2025/optimal-ai-development-workflow"
    },
    {
      "source": "S02",
      "date": "2025-10-14",
      "lane": "practice",
      "title": "Conversational parallel work",
      "summary": "Tests after implementation in the same context; not test-first.",
      "url": "https://steipete.me/posts/just-talk-to-it"
    },
    {
      "source": "S04",
      "date": "2025-12-28",
      "lane": "practice",
      "title": "Selective review and Oracle",
      "summary": "CLI-first iteration and selective code reading; not a universal review policy.",
      "url": "https://steipete.me/posts/2025/shipping-at-inference-speed"
    },
    {
      "source": "S05",
      "date": "2026-02-14",
      "lane": "ideas",
      "title": "OpenClaw direction",
      "summary": "Accessibility goal and acknowledgement of safety work; no quality benchmark.",
      "url": "https://steipete.me/posts/2026/openclaw"
    },
    {
      "source": "S06",
      "date": "2026-10-20",
      "lane": "artifact",
      "title": "Shared instructions and skills",
      "summary": "Later canonical agent guidance and repo-owned skills qualify earlier tool-layer rhetoric.",
      "url": "https://github.com/steipete/agent-scripts/blob/1159adf26ad007df38b87debb107d3946008d38b/README.md"
    }
  ],
  "charity-majors": [
    {
      "source": "S03",
      "date": "2024-08-07",
      "lane": "ideas",
      "title": "Structured observability context",
      "summary": "Operational event exploration, not an agent-memory implementation.",
      "url": "https://charity.wtf/p/is-it-time-to-version-observability-signs-point-to-yes"
    },
    {
      "source": "S02",
      "date": "2026-03-18",
      "lane": "ideas",
      "title": "Rigor in production",
      "summary": "Extend checks to actual operational behaviour; not a complete personal TDD policy.",
      "url": "https://www.honeycomb.io/blog/production-is-where-the-rigor-goes"
    },
    {
      "source": "S01",
      "date": "2026-06-15",
      "lane": "ideas",
      "title": "Engineering discipline with AI",
      "summary": "Explicit behaviour, commitments and changeability; regeneration ideas credit Chad Fowler.",
      "url": "https://charity.wtf/p/ai-demands-more-engineering-discipline"
    },
    {
      "source": "S06",
      "date": "2026-09-09",
      "lane": "ideas",
      "title": "Published company values",
      "summary": "Human ownership and safeguards; company norms are not a complete personal tool topology.",
      "url": "https://www.honeycomb.io/blog/ai-norms-values-part-3-things-we-hold-true"
    }
  ],
  "chip-huyen": [
    {
      "source": "S03",
      "date": "2024-07-25",
      "lane": "ideas",
      "title": "Generative AI platform design",
      "summary": "Context construction and system trade-offs; not a private coding-session recipe.",
      "url": "https://huyenchip.com/2024/07/25/genai-platform.html"
    },
    {
      "source": "S04",
      "date": "2025-01-07",
      "lane": "ideas",
      "title": "AI-agent framework",
      "summary": "Environment, tools, planning and failure evaluation; conceptual framework, not a private fleet.",
      "url": "https://huyenchip.com/2025/01/07/agents.html"
    },
    {
      "source": "S05",
      "date": "2025-01-16",
      "lane": "ideas",
      "title": "AI-product evaluation pitfalls",
      "summary": "User need and human quality judgments; not a personal coding-agent TDD policy.",
      "url": "https://huyenchip.com/2025/01/16/ai-engineering-pitfalls.html"
    },
    {
      "source": "S10",
      "date": "2026-02",
      "lane": "artifact",
      "title": "OSS catalogue update",
      "summary": "Only the linked catalogue update is February 2026. The underlying analysis is March 2024; no new personal workflow is inferred.",
      "url": "https://huyenchip.com/2024/03/14/ai-oss.html"
    }
  ],
  "hamel-husain": [
    {
      "source": "S02",
      "date": "2025-03-24",
      "lane": "ideas",
      "title": "Review examples before criteria",
      "summary": "AI-product field guide keeps domain experts close to error analysis.",
      "url": "https://hamel.dev/blog/posts/field-guide/index.html"
    },
    {
      "source": "S05",
      "date": "2025-10-01",
      "lane": "practice",
      "title": "Notebooks and review interfaces",
      "summary": "Personal tool preferences plus panel assessment; vendor judgments keep their speakers.",
      "url": "https://hamel.dev/blog/posts/eval-tools/index.html"
    },
    {
      "source": "S07",
      "date": "2026-03-02",
      "lane": "ideas",
      "title": "Joint eval skills announcement",
      "summary": "Husain/Shankar guidance for product-evaluation agents; modified August 31, not a private topology.",
      "url": "https://hamel.dev/blog/posts/evals-skills/"
    },
    {
      "source": "S08",
      "date": "2026-09-24",
      "lane": "artifact",
      "title": "Eval Skills pinned revision",
      "summary": "Published routing, discovery and judge-related instructions; inspected, not run.",
      "url": "https://github.com/ai-evals-course/evals-skills/blob/80d5f7b0127c7572ed9e9339937adbfd7240ffeb/README.md"
    },
    {
      "source": "S11",
      "date": "2026-09-30",
      "lane": "practice",
      "title": "Claude evaluation-tool trial",
      "summary": "Reported trial with Isaac Flath; critiques premature criteria, also praises issue discovery.",
      "url": "https://hamel.dev/blog/posts/claude-auto-evals/index.html"
    },
    {
      "source": "S12",
      "date": "2026-10-20",
      "lane": "ideas",
      "title": "Joint decision-model experiment",
      "summary": "Particular dataset and held-out validation; no universal model ranking.",
      "url": "https://hamel.dev/blog/posts/decision-model-evals/"
    }
  ],
  "jason-liu": [
    {
      "source": "S01",
      "date": "2024-05-22",
      "lane": "ideas",
      "title": "Retrieval-first diagnosis",
      "summary": "Advice based on conversation with Hamel Husain; not a controlled performance result.",
      "url": "https://jxnl.co/writing/2024/05/22/systematically-improving-your-rag/"
    },
    {
      "source": "S04",
      "date": "2025-05-19",
      "lane": "ideas",
      "title": "RAG relationship evaluations",
      "summary": "Retrieval, questions, context and answers; not a unit-TDD policy.",
      "url": "https://jxnl.co/writing/2025/05/19/there-are-only-6-rag-evals/"
    },
    {
      "source": "S05",
      "date": "2025-08-27",
      "lane": "ideas",
      "title": "Faceted context responses",
      "summary": "Metadata and facets guide exploration; not a private persistent-memory system.",
      "url": "https://jxnl.co/writing/2025/08/27/facets-context-engineering/"
    },
    {
      "source": "S06",
      "date": "2025-08-29",
      "lane": "ideas",
      "title": "Isolated subagent reads",
      "summary": "Authored pattern for noisy work and distilled results; not a full personal swarm topology.",
      "url": "https://jxnl.co/writing/2025/08/29/context-engineering-slash-commands-subagents/"
    },
    {
      "source": "S06",
      "date": "2026-01",
      "lane": "ideas",
      "title": "Visible interface update",
      "summary": "January 2026 update to the earlier article. The source does not establish a new private workflow or a day-precise change.",
      "url": "https://jxnl.co/writing/2025/08/29/context-engineering-slash-commands-subagents/"
    }
  ]
};
  const lanes={
    practice:{label:'Personal accounts',short:'Personal account',color:'var(--series-1)'},
    artifact:{label:'Published artifacts',short:'Published artifact',color:'var(--series-3)'},
    ideas:{label:'Guidance & commentary',short:'Guidance / commentary',color:'var(--series-4)'}
  };
  const stories={
    'robert-c-martin':'A public framework and a later personal move away can coexist. The September 4 artifact stays in its own lane; the September 24 report does not rewrite its publication history.',
    'steve-yegge':'Gas Town, a Gas City endorsement and private Wheelhouse are different records. The sequence does not make him the author of Gas City or prove that one tool is his complete current setup.',
    'armin-ronacher':'January Pi descriptions and October Codemode/MCP composition belong to different dates. An earlier minimal architecture is not a permanent prohibition on later integration.',
    'simon-willison':'A production blog feature and a game experiment carry different review stakes. Nearby dates do not imply a general retreat from code ownership.',
    'chip-huyen':'The February 2026 marker is a catalogue update, not a newly documented personal coding-agent workflow. Switch to full history for the older AI-system guidance.',
    'jason-liu':'The January 2026 marker is a visible update to an August 2025 article. Its presence does not establish a new private orchestration arrangement.'
  };
  let engineerId='robert-c-martin',period='recent',lane='all',selected=null;
  const controls=el('div','visual-controls');
  function field(id,labelText,options){
    const wrap=el('div','visual-field'),label=el('label','',labelText),select=el('select','visual-select');
    label.htmlFor=id;select.id=id;
    options.forEach(([value,text])=>{const option=el('option','',text);option.value=value;select.append(option)});
    wrap.append(label,select);controls.append(wrap);return select;
  }
  const engineer=field('trail-engineer','Engineer',profiles.map(p=>[p.id,p.name]));engineer.value=engineerId;
  const windowSelect=field('trail-period','Date window',[['recent','Since October 2025'],['all','Full cached history']]);
  const laneSelect=field('trail-evidence','Evidence trail',[['all','All three trails'],...Object.entries(lanes).map(([id,l])=>[id,l.label])]);
  shell.append(controls);
  const story=el('p','trail-story'),dateNote=el('p','visual-note'),timeline=el('div','trail-timeline');
  shell.append(story,dateNote,timeline);
  shell.append(el('p','visual-note','Dates are publication, stated-practice or pinned-revision dates as labelled. Row spacing shows source sequence, not elapsed time, progress or effectiveness. Undated living sources are not assigned an inspection date on this trail.'));
  const fallback=el('div','trail-profile-evidence');shell.append(fallback);
  function dateText(raw){
    const [year,month,day]=raw.split('-').map(Number);
    if(!month)return String(year);
    const date=new Date(Date.UTC(year,month-1,day||1));
    return new Intl.DateTimeFormat('en-GB',day?{day:'numeric',month:'short',year:'numeric',timeZone:'UTC'}:{month:'long',year:'numeric',timeZone:'UTC'}).format(date);
  }
  function sortDate(raw){return raw.length===7?raw+'-00':raw.length===4?raw+'-00-00':raw}
  const ns='http://www.w3.org/2000/svg';
  function drawRails(){
    const canvas=timeline.querySelector('.trail-canvas');if(!canvas)return;
    const svg=canvas.querySelector('.trail-rails');if(!svg)return;
    const width=canvas.clientWidth,height=canvas.offsetHeight;
    svg.setAttribute('viewBox',`0 0 ${width} ${height}`);svg.setAttribute('width',width);svg.setAttribute('height',height);svg.replaceChildren();
    const rect=canvas.getBoundingClientRect(),buttons=[...canvas.querySelectorAll('.trail-event')];
    if(!buttons.length)return;
    const narrow=window.matchMedia('(max-width:760px)').matches,spine=narrow?12:87;
    const ys=buttons.map(b=>{const r=b.getBoundingClientRect();return r.top-rect.top+24});
    const path=document.createElementNS(ns,'path');path.setAttribute('d',`M ${spine} ${ys[0]} L ${spine} ${ys[ys.length-1]}`);path.setAttribute('stroke','var(--line)');path.setAttribute('stroke-width','2');path.setAttribute('fill','none');svg.append(path);
    buttons.forEach((b,i)=>{
      const box=b.getBoundingClientRect(),end=box.left-rect.left-6,y=ys[i],mid=spine+(end-spine)*.5;
      const branch=document.createElementNS(ns,'path');branch.setAttribute('d',`M ${spine} ${y} C ${mid} ${y}, ${mid} ${y}, ${end} ${y}`);branch.setAttribute('fill','none');branch.setAttribute('stroke',lanes[b.dataset.lane].color);branch.setAttribute('stroke-width','2');svg.append(branch);
      const dot=document.createElementNS(ns,'circle');dot.setAttribute('cx',spine);dot.setAttribute('cy',y);dot.setAttribute('r','4');dot.setAttribute('fill',lanes[b.dataset.lane].color);svg.append(dot);
    });
  }
  function render(){
    const profile=profiles.find(p=>p.id===engineerId);
    const all=(trails[engineerId]||[]).map((e,index)=>({...e,key:engineerId+'-'+index})).sort((a,b)=>sortDate(a.date).localeCompare(sortDate(b.date)));
    const events=all.filter(e=>(period==='all'||e.date>='2025-10')&&(lane==='all'||e.lane===lane));
    story.textContent=stories[engineerId]||'Follow the dated record without assuming that a later publication replaces an earlier practice. Guidance, personal reports and published designs remain separate.';
    dateNote.textContent=`${events.length} dated records shown · research checked ${profile.checked}. The checked date is not a practice or publication date.`;
    timeline.replaceChildren();fallback.replaceChildren();
    const heading=el('h2','',profile.name+' — documentary trails');timeline.append(heading);
    if(!events.length){
      const empty=el('div','trail-empty');empty.append(el('p','','No dated records in this selected window and trail. This is a gap in the selected evidence, not evidence of inactivity or non-use.'));
      if(period==='recent'){const more=el('button','','Show full cached history');more.type='button';more.addEventListener('click',()=>{period='all';windowSelect.value='all';selected=null;render()});empty.append(more)}timeline.append(empty);
    }else{
      const header=el('div','trail-column-headings');header.append(el('span','','Published / version'));
      Object.values(lanes).forEach(l=>{const label=el('span','',l.label);const swatch=el('span','trail-swatch');swatch.style.background=l.color;swatch.setAttribute('aria-hidden','true');label.prepend(swatch);header.append(label)});timeline.append(header);
      const canvas=el('div','trail-canvas');const svg=document.createElementNS(ns,'svg');svg.classList.add('trail-rails');svg.setAttribute('aria-hidden','true');canvas.append(svg);
      events.forEach(event=>{
        const row=el('div','trail-row');row.dataset.lane=event.lane;
        const time=el('time','trail-date',dateText(event.date));time.dateTime=event.date;row.append(time);
        const button=el('button','trail-event');button.type='button';button.dataset.lane=event.lane;button.style.setProperty('--trail-color',lanes[event.lane].color);button.setAttribute('aria-expanded',String(selected===event.key));button.setAttribute('aria-controls','trail-detail-'+event.key);
        const meta=el('span','trail-event-meta');meta.append(el('span','trail-mobile-date',dateText(event.date)),el('span','',lanes[event.lane].short));
        button.append(meta,el('strong','trail-event-title',event.title),el('span','trail-event-hint',selected===event.key?'Hide source detail':'Show source detail'));
        button.addEventListener('click',()=>{selected=selected===event.key?null:event.key;render();timeline.querySelector(`[aria-controls="trail-detail-${event.key}"]`)?.focus({preventScroll:true})});row.append(button);
        if(selected===event.key){
          const detail=el('section','trail-event-detail');detail.id='trail-detail-'+event.key;
          detail.append(el('h3','',dateText(event.date)+' · '+event.title),el('p','',event.summary));
          const links=el('div','trail-source-links');links.append(link('Primary source ↗',event.url),link('Cached source register',ctx.baseurl+'/engineers/'+profile.id+'/sources.html'),link('Engineer profile',profileUrl(profile)));detail.append(links);
          detail.append(el('p','visual-note',`${lanes[event.lane].short} · ${event.source} · research checked ${profile.checked}. This source is not a complete current private configuration or a measured cross-engineer trial.`));row.append(detail);
        }
        canvas.append(row);
      });timeline.append(canvas);
    }
    fallback.append(el('h3','','Current cached comparison context'),evidenceLinks(profile,['D04','D07','D09']));
    requestAnimationFrame(drawRails);
  }
  engineer.addEventListener('change',()=>{engineerId=engineer.value;selected=null;render()});
  windowSelect.addEventListener('change',()=>{period=windowSelect.value;selected=null;render()});
  laneSelect.addEventListener('change',()=>{lane=laneSelect.value;selected=null;render()});
  const observer=new ResizeObserver(drawRails);observer.observe(timeline);
  render();
};
