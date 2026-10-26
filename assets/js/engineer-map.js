
(function(){
const root=document.getElementById('organic-engineers-linked-tools');
if(!root)return;
const siteBase=root.dataset.baseurl||'';
const data=[
  [
    "Dave Farley",
    "dave-farley",
    [
      0,
      1
    ],
    false,
    "Drive behaviour with human-owned failing acceptance examples; separate unit-level design feedback and challenge assertions with mutation testing.",
    "25 Oct 2026 proposal; personal project setup incomplete.",
    "Official CD.Training Claude plugin; complete personal stack unknown."
  ],
  [
    "Kent Beck",
    "kent-beck",
    [
      0,
      1
    ],
    false,
    "BPlusTree3 documents test-first work and validation against reference implementations.",
    "Specific repository; checks were not run by this research.",
    "Dated Augment experiments; BPlusTree3 conventions."
  ],
  [
    "Simon Willison",
    "simon-willison",
    [
      0,
      1,
      2
    ],
    false,
    "Use red/green TDD and complement automated checks with exploratory execution of actual behaviour.",
    "Production blog feature (9 Oct 2026); experimental games have different stakes.",
    "Created Rodney and Showboat; reported Claude Code and Codex use."
  ],
  [
    "Birgitta Böckeler",
    "birgitta-bockeler",
    [
      0,
      1
    ],
    false,
    "Her August 2026 exploratory evaluation distinguishes human-owned tests and review checkpoints from TDD wholly inside the agent loop.",
    "Aug 2026 evaluation: limited greenfield tasks; older brownfield reports are separate.",
    "Reports several agents and static-analysis sensors; complete daily stack unknown."
  ],
  [
    "Addy Osmani",
    "addy-osmani",
    [
      0,
      1,
      2
    ],
    false,
    "Characterize uncertain legacy behaviour and review against original requirements.",
    "Brownfield guidance and Mar 2026 orchestration guidance.",
    "Publishes Agent Skills; surveys do not establish a complete personal stack."
  ],
  [
    "Gojko Adžić",
    "gojko-adzic",
    [
      0,
      1,
      2
    ],
    false,
    "The inspected factory artifact assigns worker-local checks, merged-work gates, and a final attempt to refute completion claims.",
    "Oct 2026 public factory based on Votito; inspected, not executed.",
    "Publishes Lights-on Software Factory; documents Claude Code, Docker and make."
  ],
  [
    "Martin Fowler",
    "martin-fowler",
    [
      0,
      1
    ],
    false,
    "Historical self-testing guidance advocates executable checks; his August 2025 account also warns that agent success claims can disagree with execution.",
    "Cache includes historical guidance and Aug 2025 material, outside the desired period.",
    "Context-interview trial; Pi/gptel interest is not verified daily usage."
  ],
  [
    "Armin Ronacher",
    "armin-ronacher",
    [
      1,
      2
    ],
    false,
    "His July 2025 retrospective reports test-generation dissatisfaction; a complete current test-first policy is not established.",
    "Jun 2026 bounded investigations; older test-generation experience is separate.",
    "Dated tool accounts; complete private configuration unknown."
  ],
  [
    "Steve Yegge",
    "steve-yegge",
    [
      0,
      2
    ],
    false,
    "His December 2025 guidance advocates recurring AI inspection and tests; a universal test-first cadence is not established.",
    "Dec 2025 guidance; public orchestration and Aug 2026 private account are separate.",
    "Created Beads and original Gas Town; Gas City is an endorsement; Wheelhouse private."
  ],
  [
    "Gene Kim",
    "gene-kim",
    [
      0,
      1
    ],
    false,
    "Joint Kim/Yegge September 2025 guidance recommends tests and expectations before generation, followed by verification.",
    "Key cached guidance is Mar/Sep 2025, outside the desired period.",
    "Historical Claude Code/Clojure accounts; Yegge tools are not automatically Kim tools."
  ],
  [
    "Harper Reed",
    "harper-reed",
    [
      0,
      1
    ],
    false,
    "May 2025 guidance advocates TDD, linting, and checks before committing.",
    "Coding projects and published instructions: staged planning, TDD/lint guidance (2025), remote sessions (January 2026), and Breakaway experiments (September 2026).",
    "May 2025 Aider-to-Claude Code report; January 2026 remote terminal setup; September 2026 experimental harness is a separate context."
  ],
  [
    "Matt Pocock",
    "matt-pocock",
    [
      0,
      1,
      2
    ],
    false,
    "The pinned October skill specifies red-green at human-agreed public seams; refactoring moves to review.",
    "October 2026 published skills: human-agreed test seams, specification interviews, dependency-ready tickets, worktrees and assembled-branch review. Inspected, not executed.",
    "Publishes mattpocock/skills. Pinned instructions and public explainers were inspected; no installation or runtime effectiveness was tested."
  ],
  [
    "Robert C. Martin",
    "robert-c-martin",
    [
      0,
      1,
      2
    ],
    false,
    "His June 2016 article advocates mutation testing to challenge assertions; coverage alone records execution.",
    "September 2026 SwarmForge artifact and later terminal-agent self-report. His later account reports moving away from his custom harness.",
    "Published artifacts and personal reports are separate evidence; a complete current private stack is not established."
  ],
  [
    "Peter Steinberger",
    "peter-steinberger",
    [
      0,
      1,
      2
    ],
    false,
    "His October 2025 workflow asks for tests after feature implementation, retaining the same context.",
    "October/December 2025 personal workflow: tests after implementation, conversational intent, parallel terminal agents and selective review. October 2026 shared artifacts add skills and release checks.",
    "Historical 2025 Claude-to-Codex shift; pinned October 2026 agent-scripts and Oracle docs show later skills/integrations. Inspected, not installed."
  ],
  [
    "DHH",
    "david-heinemeier-hansson",
    [
      1
    ],
    false,
    "May 2024: favours model/controller checks and limited browser smoke coverage; current agent cadence unknown.",
    "January 2026 personal OpenCode account: outcome review and supervised delegation. February assistant and March Basecamp team artifacts have separate scopes.",
    "January 2026 OpenCode self-report; February 2026 isolated OpenClaw experiment; March 2026 team Basecamp interfaces. Current private setup remains unknown."
  ],
  [
    "Andrej Karpathy",
    "andrej-karpathy",
    [
      1,
      2,
      4
    ],
    false,
    "Published ML instructions retain a baseline and exclude evaluator edits.",
    "March 2026 autoresearch: a bounded agent-driven ML experiment with a fixed baseline/evaluator. April oversight commentary and the LLM Wiki pattern provide separate human/context evidence.",
    "Pinned autoresearch instructions, microgpt and LLM Wiki were inspected; dated agent commentary is not a complete current private stack."
  ],
  [
    "Charity Majors",
    "charity-majors",
    [
      3
    ],
    false,
    "Extend verification to observed operational behaviour as well as pre-production checks.",
    "March 2026 operational guidance: instrument changes, deploy through the normal process and inspect production behaviour. September company values retain human ownership.",
    "Honeycomb and observability techniques appear in operational guidance; complete current personal coding-agent tools and permissions remain unknown."
  ],
  [
    "Chip Huyen",
    "chip-huyen",
    [
      4
    ],
    false,
    "Validate AI-product judgments using human assessment.",
    "AI-product and ML-system evaluation guidance. The core evaluation examples are from January 2025 and earlier; the cache does not establish a newer personal coding-agent workflow.",
    "Public model/platform examples and a dated JAX/DistilBERT experiment; no complete current coding-agent stack is established."
  ],
  [
    "Hamel Husain",
    "hamel-husain",
    [
      3,
      4
    ],
    false,
    "Use code for objective product checks; validate subjective judges against human labels and held-out examples.",
    "AI-product evaluation: objective code checks, human-labelled/held-out judge validation and September 2026 guidance separating regression checks from sampled production evaluation.",
    "October 2025 notebook/custom-interface self-report; joint eval skills pinned to September 2026. Complete present private stack unknown."
  ],
  [
    "Jason Liu",
    "jason-liu",
    [
      1,
      3,
      4
    ],
    false,
    "His May 2025 RAG framework distinguishes retrieval and question/context/answer relationships.",
    "RAG/product work: faceted context and subagent guidance (August 2025, with a January 2026 interface update), retrieval/answer evaluation and the production feedback flywheel.",
    "Instructor authorship; living 2024 tutorials inspected in 2026; September 2025 agent-prototyping guidance. Complete present private setup unknown."
  ]
];
const placementEvidence={
  "harper-reed": {
    "note": "Explicit plans, checks and verification instructions support checks and steering. Multiple remote terminals alone do not establish orchestrated workers.",
    "claims": [
      {
        "label": "D04",
        "anchor": "c04"
      },
      {
        "label": "D06",
        "anchor": "c06"
      },
      {
        "label": "D07",
        "anchor": "c07"
      },
      {
        "label": "D08",
        "anchor": "c08"
      }
    ]
  },
  "matt-pocock": {
    "note": "Red-green checks, human-agreed seams and specification review overlap with the published parallel ticket/worktree design.",
    "claims": [
      {
        "label": "D02",
        "anchor": "c02"
      },
      {
        "label": "D04",
        "anchor": "c04"
      },
      {
        "label": "D06",
        "anchor": "c06"
      },
      {
        "label": "D07",
        "anchor": "c07"
      }
    ]
  },
  "robert-c-martin": {
    "note": "The overlap includes published acceptance/mutation instructions, above-code human supervision and the SwarmForge coordination design. It is not a claim that he still personally uses that harness.",
    "claims": [
      {
        "label": "D06",
        "anchor": "c06"
      },
      {
        "label": "D07",
        "anchor": "c07"
      },
      {
        "label": "D09",
        "anchor": "c09"
      },
      {
        "label": "D10",
        "anchor": "c10"
      }
    ]
  },
  "peter-steinberger": {
    "note": "Tests after implementation are executable verification, not TDD. Conversational steering and reported parallel agents support the other two regions.",
    "claims": [
      {
        "label": "D02",
        "anchor": "c02"
      },
      {
        "label": "D04",
        "anchor": "c04"
      },
      {
        "label": "D06",
        "anchor": "c06"
      },
      {
        "label": "D07",
        "anchor": "c07"
      }
    ]
  },
  "david-heinemeier-hansson": {
    "note": "The placement records supervised outcome review. Historical model/controller-testing views do not establish a current coding-agent test cadence or a complete orchestration setup.",
    "claims": [
      {
        "label": "D04",
        "anchor": "c04"
      },
      {
        "label": "D06",
        "anchor": "c06"
      },
      {
        "label": "D07",
        "anchor": "c07"
      },
      {
        "label": "D09",
        "anchor": "c09"
      }
    ]
  },
  "andrej-karpathy": {
    "note": "Human specification/context, a bounded autonomous research loop and ML outcome evaluation overlap. This is AI research evidence, not a unit-TDD policy or a multi-agent fleet.",
    "claims": [
      {
        "label": "D02",
        "anchor": "c02"
      },
      {
        "label": "D04",
        "anchor": "c04"
      },
      {
        "label": "D07",
        "anchor": "c07"
      },
      {
        "label": "D08",
        "anchor": "c08"
      }
    ]
  },
  "charity-majors": {
    "note": "Production feedback is the documented emphasis. It extends pre-production checks; a complete personal TDD policy and agent topology remain unknown.",
    "claims": [
      {
        "label": "D04",
        "anchor": "c04"
      },
      {
        "label": "D06",
        "anchor": "c06"
      },
      {
        "label": "D10",
        "anchor": "c10"
      }
    ]
  },
  "chip-huyen": {
    "note": "Human assessment of model/application quality supports AI evaluation. Historical guidance stays dated and is not recast as current coding-agent practice.",
    "claims": [
      {
        "label": "D02",
        "anchor": "c02"
      },
      {
        "label": "D04",
        "anchor": "c04"
      },
      {
        "label": "D06",
        "anchor": "c06"
      },
      {
        "label": "D10",
        "anchor": "c10"
      }
    ]
  },
  "hamel-husain": {
    "note": "Validated product evaluators and sampled production feedback overlap. Code evaluators are not evidence of a universal personal coding-agent TDD cadence.",
    "claims": [
      {
        "label": "D04",
        "anchor": "c04"
      },
      {
        "label": "D06",
        "anchor": "c06"
      },
      {
        "label": "D08",
        "anchor": "c08"
      },
      {
        "label": "D10",
        "anchor": "c10"
      }
    ]
  },
  "jason-liu": {
    "note": "Explicit context presentation, component evaluation and production observations overlap. Isolated subagent reads do not establish a complete personal orchestration setup.",
    "claims": [
      {
        "label": "D04",
        "anchor": "c04"
      },
      {
        "label": "D07",
        "anchor": "c07"
      },
      {
        "label": "D08",
        "anchor": "c08"
      },
      {
        "label": "D10",
        "anchor": "c10"
      }
    ]
  }
};
const groups=[['Executable checks',1],['Context & human steering',2],['Agent orchestration',3],['Production feedback',4],['AI application evaluations',5]];
const pos=[[0.27, 260], [0.27, 340], [0.74, 250], [0.27, 420], [0.74, 330], [0.74, 410], [0.27, 500], [0.82, 760], [0.74, 130], [0.27, 580], [0.27, 660], [0.74, 490], [0.74, 570], [0.74, 650], [0.28, 760], [0.74, 860], [0.18, 1040], [0.83, 1100], [0.49, 1170], [0.46, 990]];
const short=['Farley','Beck','Willison','Böckeler','Osmani','Adžić','Fowler','Ronacher','Yegge','Kim','Reed','Pocock','Martin','Steinberger','DHH','Karpathy','Majors','Huyen','Husain','Liu'];
const landscape=root.querySelector('.landscape'),legend=root.querySelector('.legend'),detail=root.querySelector('.detail');let selected=null,selectedGroup=null;
const toolExamples={
'dave-farley':[
['CD.Training Claude plugin','Official course artifact','Learning, building and reviewing with the published course commands. This is not a complete personal stack.']
],
'kent-beck':[
['Intent / Augment Code','Reported use · Apr 2026','Multi-agent exploration; his account also discusses coordination burden.'],
['Cargo + Criterion','Project tooling','Tests and benchmarks specified in the inspected BPlusTree3 instructions.'],
['Augment Remote Agent','Historical use · Jun 2025','Project rewrite experiment; the account discloses sponsorship.']
],
'simon-willison':[
['Rodney','Created','CLI-driven Chrome interaction for exercising web behaviour.'],
['Showboat','Created','Records executed commands and output; verify replays recorded checks.'],
['Codex + Claude Code','Reported use','Coding-agent examples, including Codex in the October 2026 production blog feature.'],
['pytest / uv','Reported use','Baseline and regression checks in documented examples.']
],
'birgitta-bockeler':[
['ESLint + type checking','Experiment controls','Fast structural feedback in dashboard experiments.'],
['Semgrep + dependency-cruiser','Experiment controls','Security findings and module dependency feedback; not a complete safety guarantee.'],
['Cursor / Windsurf / Cline','Historical use · Mar 2025','Supervised brownfield work; this predates the requested research period.']
],
'addy-osmani':[
['Agent Skills','Published artifact','Lifecycle instructions such as spec, plan, build, test, review and ship.'],
['Claude Code / Jules / Copilot agents','Reported workflow · Jan 2026','Supervised coding and background work; not a complete October inventory.'],
['Chrome DevTools MCP','Reported workflow · Jan 2026','Browser and runtime evidence for debugging and quality checks.']
],
'gojko-adzic':[
['Lights-on Software Factory','Published artifact','Planning, worker roles, merged-work gates and a final completion check. Based on Votito.'],
['Claude Code + Docker + make','Documented environment','Host and execution environment in the public factory.'],
['Command regulator + ESLint hook','Published components','Role-dependent command rules and edit-time feedback. Inspected, not runtime-tested.']
],
'martin-fowler':[
['Context-interview report','Self-reported trial','An interview generates project context; a technique rather than a packaged plugin.'],
['Pi + gptel / Emacs','Expressed interest · Jan 2026','Interest in trying programmable agent interaction; actual daily adoption is not established.']
],
'armin-ronacher':[
['Pi','Reported use · Jan 2026','Extensible agent/session environment; October writing describes later Codemode and MCP integration.'],
['Custom Pi extensions','Authored descriptions','Todo, review and experimental interaction helpers; linked implementations were not inspected.'],
['Absurd / absurdctl','Related production account','Checkpoint state and operational inspection; not a universal workflow requirement.']
],
'steve-yegge':[
['Beads','Created','Durable work graph and persistent project context.'],
['Gas Town','Original public experiment','Agent-fleet orchestration; distinct from his later private setup.'],
['Gas City','Endorsed · Apr 2026','Built by Julian Knutsen and Chris Sells; not solely authored by Yegge.'],
['Wheelhouse','Self-reported · Aug 2026','Private bespoke harness; no public reproducible setup in the cache.']
],
'gene-kim':[
['Claude Code + Clojure','Historical project use','Trello and manuscript-tool accounts; not a verified present-day full stack.'],
['Augment Code + Apps Script / CLASP','Historical project use','An add-on project with a local edit/deployment loop.']
],
'harper-reed':[
['Tailscale + Blink + tmux','Reported use · Jan 2026','Remote terminal access to development sessions; private configuration not verified.'],
['Claude Code / Aider','Historical use · May 2025','Reported transition between coding-agent tools.'],
['Breakaway agent','Public experimental artifact','Platform README inspected; not installed or evaluated in this research.']
],
'matt-pocock':[
['mattpocock/skills','Published artifact','Composable planning, implementation and orchestration instructions; README self-reports use.'],
['Git worktrees + configured tracker','Documented design','Parallel implementation and repository-specific work tracking in the published setup.']
],
'robert-c-martin':[
['SwarmForge','Published artifact','Agent coordination, engineering instructions and structured handoffs; not proof of current private topology.'],
['Terminal Grok','Reported use · Sep 2026','Personal interview account, with earlier Codex and Claude usage separately dated.'],
['Gherkin acceptance pipeline','Published instructions','Acceptance parsing and mutation components described in the artifact; not executed here.']
],
'peter-steinberger':[
['Oracle','Built and used · Dec 2025 account','Bundles relevant code/context for a second-model opinion; agreement alone is not correctness.'],
['Agent Scripts','Published artifact','Shared agent guidance, skills and helper routing.'],
['Codex / Claude Code / Ghostty','Dated workflow accounts · 2025','Parallel terminal development and earlier coding workflow; no complete current inventory established.']
],
'david-heinemeier-hansson':[
['OpenCode','Reported use · Jan 2026','Personal coding-agent account; exact installed revision and model settings unknown.'],
['OpenClaw + Proxmox','Personal experiment · Feb 2026','An isolated assistant experiment, not every coding session.'],
['Basecamp API / CLI / skill','Team artifact · Mar 2026','37signals product announcement; does not establish sole personal authorship.']
],
'andrej-karpathy':[
['autoresearch','Published research artifact','Agent instructions and README inspected at a pinned revision; not a general product release system.'],
['microgpt','Authored educational artifact','A compact learning implementation; not a universal production architecture.'],
['Claude Code','Commentary · Dec 2025','Dated endorsement of local agent interaction, not a full daily tool inventory.']
],
'charity-majors':[
['Honeycomb','Organisation / observability context','Structured-event exploration in her observability argument; not a mandatory vendor choice.'],
['Traces + capture/replay','Discussed techniques','Production behaviour and rollout feedback; no complete personal coding-agent stack established.']
],
'chip-huyen':[
['JAX + DistilBERT','Historical experiment · Feb 2024','Reported tools in a preference experiment. Outside the requested period; current adoption is not established.'],
['Good AI List / cool-llm-repos','Curation resources','Linked by her OSS survey, with a February 2026 catalogue update; not endorsement or personal use of every entry.']
],
'hamel-husain':[
['Eval Skills','Joint Husain / Shankar artifact','Evaluation skills including error-discovery, write-code-eval and validate-evaluator.'],
['Jupyter + custom review interfaces','Personal account · Oct 2025','Inspecting and analysing real examples; not a complete present-day stack.'],
['LangSmith / Braintrust / Arize Phoenix','Assessed in a panel account','Evaluation backends and review workflows; assessment is not proof of personal adoption.']
],
'jason-liu':[
['Instructor','Creator + authored examples','Structured outputs and evaluation examples; not his entire current personal setup.'],
['Pydantic result models','Authored tutorial example','Structured relevance results in a reranker; inspected, not executed.'],
['Claude Code prototype harness','Historical recommendation · Sep 2025','Prototyping technique, outside the requested period; current personal use is not established.']
]
};
const toolLinkMetadata={
  "dave-farley": [
    {
      "categories": [
        "planning",
        "verification"
      ],
      "url": "https://github.com/cd-training-courses/claude-skills"
    }
  ],
  "kent-beck": [
    {
      "categories": [
        "orchestration"
      ],
      "url": "https://newsletter.kentbeck.com/p/genie-lessons-nobody-wants-agents"
    },
    {
      "categories": [
        "verification"
      ],
      "url": "https://github.com/KentBeck/BPlusTree3"
    },
    {
      "categories": [
        "coding"
      ],
      "url": "https://newsletter.kentbeck.com/p/augmented-coding-beyond-the-vibes"
    }
  ],
  "simon-willison": [
    {
      "categories": [
        "verification"
      ],
      "url": "https://github.com/simonw/rodney"
    },
    {
      "categories": [
        "verification"
      ],
      "url": "https://github.com/simonw/showboat"
    },
    {
      "categories": [
        "coding"
      ],
      "url": "https://simonwillison.net/2026/Oct/9/built-using-my-voice/"
    },
    {
      "categories": [
        "verification",
        "environment"
      ],
      "url": "https://simonwillison.net/guides/agentic-engineering-patterns/first-run-the-tests/"
    }
  ],
  "birgitta-bockeler": [
    {
      "categories": [
        "verification"
      ],
      "url": "https://martinfowler.com/articles/sensors-for-coding-agents.html"
    },
    {
      "categories": [
        "verification"
      ],
      "url": "https://martinfowler.com/articles/sensors-for-coding-agents.html"
    },
    {
      "categories": [
        "coding"
      ],
      "url": "https://martinfowler.com/articles/exploring-gen-ai/13-role-of-developer-skills.html"
    }
  ],
  "addy-osmani": [
    {
      "categories": [
        "planning",
        "verification"
      ],
      "url": "https://github.com/addyosmani/agent-skills"
    },
    {
      "categories": [
        "coding",
        "orchestration"
      ],
      "url": "https://addyosmani.com/blog/ai-coding-workflow/"
    },
    {
      "categories": [
        "verification"
      ],
      "url": "https://addyosmani.com/blog/ai-coding-workflow/"
    }
  ],
  "gojko-adzic": [
    {
      "categories": [
        "orchestration",
        "verification"
      ],
      "url": "https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/README.md"
    },
    {
      "categories": [
        "coding",
        "environment"
      ],
      "url": "https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/GETTING-STARTED.md"
    },
    {
      "categories": [
        "verification"
      ],
      "url": "https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/REGULATOR.md"
    }
  ],
  "martin-fowler": [
    {
      "categories": [
        "context"
      ],
      "url": "https://martinfowler.com/bliki/InterrogatoryLLM.html"
    },
    {
      "categories": [
        "coding",
        "context"
      ],
      "url": "https://martinfowler.com/fragments/2026-01-08.html"
    }
  ],
  "armin-ronacher": [
    {
      "categories": [
        "coding"
      ],
      "url": "https://lucumr.pocoo.org/2026/1/31/pi/"
    },
    {
      "categories": [
        "context",
        "verification"
      ],
      "url": "https://lucumr.pocoo.org/2026/1/31/pi/"
    },
    {
      "categories": [
        "observability",
        "orchestration"
      ],
      "url": "https://lucumr.pocoo.org/2026/4/4/absurd-in-production/"
    }
  ],
  "steve-yegge": [
    {
      "categories": [
        "planning",
        "context"
      ],
      "url": "https://github.com/gastownhall/beads"
    },
    {
      "categories": [
        "orchestration"
      ],
      "url": "https://github.com/gastownhall/gastown"
    },
    {
      "categories": [
        "orchestration"
      ],
      "url": "https://yegge.ai/essays/welcome-to-gas-city/"
    },
    {
      "categories": [
        "orchestration"
      ],
      "url": "https://yegge.ai/essays/the-shape-of-things-to-come/"
    }
  ],
  "gene-kim": [
    {
      "categories": [
        "coding"
      ],
      "url": "https://itrevolution.com/articles/the-last-80-hours-of-editing-the-vibe-coding-book/"
    },
    {
      "categories": [
        "coding",
        "environment"
      ],
      "url": "https://itrevolution.com/articles/how-i-built-a-google-docs-add-on-in-three-hours-using-chat-and-vibe-programming/"
    }
  ],
  "harper-reed": [
    {
      "categories": [
        "environment"
      ],
      "url": "https://harper.blog/2026/01/05/claude-code-is-better-on-your-phone/"
    },
    {
      "categories": [
        "coding"
      ],
      "url": "https://harper.blog/2025/05/08/basic-claude-code/"
    },
    {
      "categories": [
        "orchestration"
      ],
      "url": "https://github.com/2389-research/breakaway-agent/blob/d02d44ea24f45492815ed0c24c2054983b71d5d4/README.md"
    }
  ],
  "matt-pocock": [
    {
      "categories": [
        "planning",
        "verification"
      ],
      "url": "https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/README.md"
    },
    {
      "categories": [
        "orchestration",
        "context"
      ],
      "url": "https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/skills/engineering/implement/SKILL.md"
    }
  ],
  "robert-c-martin": [
    {
      "categories": [
        "orchestration"
      ],
      "url": "https://github.com/unclebob/swarm-forge/blob/f4f5fbcae0de6f7dcc26e82400334227647cfdb2/README.md"
    },
    {
      "categories": [
        "coding"
      ],
      "url": "https://www.aviator.co/podcast/uncle-bob-martin-ai-clean-code"
    },
    {
      "categories": [
        "verification"
      ],
      "url": "https://github.com/unclebob/swarm-forge/blob/f4f5fbcae0de6f7dcc26e82400334227647cfdb2/swarmforge/constitution/articles/engineering.prompt"
    }
  ],
  "peter-steinberger": [
    {
      "categories": [
        "verification",
        "context"
      ],
      "url": "https://github.com/steipete/oracle/blob/8ca21e82ce82d4b65c12243929c0a31e5d73c847/docs/agents.md"
    },
    {
      "categories": [
        "context",
        "planning"
      ],
      "url": "https://github.com/steipete/agent-scripts/blob/1159adf26ad007df38b87debb107d3946008d38b/README.md"
    },
    {
      "categories": [
        "coding",
        "environment"
      ],
      "url": "https://steipete.me/posts/2025/shipping-at-inference-speed"
    }
  ],
  "david-heinemeier-hansson": [
    {
      "categories": [
        "coding"
      ],
      "url": "https://world.hey.com/dhh/promoting-ai-agents-3ee04945"
    },
    {
      "categories": [
        "orchestration",
        "environment"
      ],
      "url": "https://world.hey.com/dhh/clankers-with-claws-9f86fa71"
    },
    {
      "categories": [
        "context",
        "orchestration"
      ],
      "url": "https://world.hey.com/dhh/basecamp-becomes-agent-accessible-3ae6b949"
    }
  ],
  "andrej-karpathy": [
    {
      "categories": [
        "orchestration",
        "evaluation"
      ],
      "url": "https://github.com/karpathy/autoresearch/blob/228791fb499afffb54b46200aca536f79142f117/README.md"
    },
    {
      "categories": [
        "coding"
      ],
      "url": "https://karpathy.github.io/2026/02/12/microgpt/"
    },
    {
      "categories": [
        "coding"
      ],
      "url": "https://karpathy.bearblog.dev/year-in-review-2025/"
    }
  ],
  "charity-majors": [
    {
      "categories": [
        "observability"
      ],
      "url": "https://charity.wtf/p/is-it-time-to-version-observability-signs-point-to-yes"
    },
    {
      "categories": [
        "observability",
        "verification"
      ],
      "url": "https://www.honeycomb.io/blog/production-is-where-the-rigor-goes"
    }
  ],
  "chip-huyen": [
    {
      "categories": [
        "evaluation"
      ],
      "url": "https://huyenchip.com/2024/02/28/predictive-human-preference.html"
    },
    {
      "categories": [
        "context"
      ],
      "url": "https://huyenchip.com/2024/03/14/ai-oss.html"
    }
  ],
  "hamel-husain": [
    {
      "categories": [
        "evaluation"
      ],
      "url": "https://github.com/ai-evals-course/evals-skills/blob/80d5f7b0127c7572ed9e9339937adbfd7240ffeb/README.md"
    },
    {
      "categories": [
        "evaluation"
      ],
      "url": "https://hamel.dev/blog/posts/eval-tools/index.html"
    },
    {
      "categories": [
        "evaluation",
        "observability"
      ],
      "url": "https://hamel.dev/blog/posts/eval-tools/index.html"
    }
  ],
  "jason-liu": [
    {
      "categories": [
        "coding",
        "evaluation"
      ],
      "url": "https://jxnl.co/"
    },
    {
      "categories": [
        "verification",
        "evaluation"
      ],
      "url": "https://python.useinstructor.com/blog/2024/10/23/building-an-llm-based-reranker-for-your-rag-pipeline/"
    },
    {
      "categories": [
        "coding",
        "context"
      ],
      "url": "https://jxnl.co/writing/2025/09/04/context-engineering-rapid-agent-prototyping/"
    }
  ]
}
;
const toolCategories={
orchestration:{label:'Orchestration',icon:'git-branch'},
verification:{label:'Verification',icon:'shield-check'},
context:{label:'Context',icon:'book-open'},
coding:{label:'Coding',icon:'code-2'},
environment:{label:'Environment',icon:'terminal'},
observability:{label:'Observability',icon:'activity'},
evaluation:{label:'AI evaluation',icon:'flask-conical'},
planning:{label:'Planning',icon:'list-checks'}
};
function makeToolRow(example,metadata){
const [name,relation,description]=example;
const row=document.createElement('div');row.className='tool-example';
const title=document.createElement('a');title.className='tool-link';title.textContent=name+' ↗';title.href=metadata.url;title.target='_blank';title.rel='noopener';title.setAttribute('aria-label',name+' — tool or documented account (opens in a new tab)');row.append(title);
const cats=document.createElement('div');cats.className='tool-categories text-small';
for(const id of metadata.categories){const category=toolCategories[id];const label=document.createElement('span');label.className='tool-category';const icon=document.createElement('i');icon.setAttribute('data-lucide',category.icon);icon.setAttribute('aria-hidden','true');const text=document.createElement('span');text.textContent=category.label;label.append(icon,text);cats.append(label)}
const rel=document.createElement('div');rel.className='text-small';rel.textContent=relation;
const p=document.createElement('p');p.textContent=description;row.append(cats,rel,p);return row;
}

const popup=document.createElement('section');popup.className='card tool-popup';popup.hidden=true;popup.setAttribute('role','dialog');popup.setAttribute('aria-modal','false');popup.setAttribute('aria-labelledby','engineer-linked-tools-heading');root.append(popup);
let returnFocus=null;
function closePopup(restore=false){popup.hidden=true;selected=null;show();if(restore&&returnFocus?.isConnected)returnFocus.focus()}
function positionPopup(){if(popup.hidden||selected===null)return;const person=root.querySelector(`[data-person="${selected}"]`);if(!person)return;const personRect=person.getBoundingClientRect(),rootRect=root.getBoundingClientRect();const width=popup.getBoundingClientRect().width;const left=Math.max(8,Math.min(rootRect.width-width-8,personRect.left-rootRect.left+personRect.width/2-width/2));popup.style.left=left+'px';const y=personRect.bottom-rootRect.top+10;const bottom=landscape.offsetTop+landscape.offsetHeight;const height=popup.getBoundingClientRect().height;popup.style.top=Math.max(0,y+height<=bottom?y:personRect.top-rootRect.top-height-10)+'px'}
function renderPopup(){if(selected===null){popup.hidden=true;return}const d=data[selected];popup.replaceChildren();const heading=document.createElement('div');heading.className='popup-heading';const h=document.createElement('h3');h.id='engineer-linked-tools-heading';h.textContent=d[0];const close=document.createElement('button');close.type='button';close.className='btn btn-ghost';close.textContent='Close';close.setAttribute('aria-label','Close tooling popup');close.addEventListener('click',()=>closePopup(true));heading.append(h,close);popup.append(heading);const subtitle=document.createElement('div');subtitle.className='text-small';subtitle.textContent='Tool names link to the tool or documented account · checked 26 October 2026';popup.append(subtitle);
(toolExamples[d[1]]||[]).forEach((example,index)=>popup.append(makeToolRow(example,toolLinkMetadata[d[1]][index])));
const scope=document.createElement('details');const summary=document.createElement('summary');summary.textContent='Verification, project and map evidence';scope.append(summary);for(const [label,text]of [['Verification',d[4]],['Project / date',d[5]]]){const p=document.createElement('p');const b=document.createElement('strong');b.textContent=label+': ';p.append(b,document.createTextNode(text));scope.append(p)}const basis=placementEvidence[d[1]];if(basis){const p=document.createElement('p');const label=document.createElement('strong');label.textContent='Map rationale: ';p.append(label,document.createTextNode(basis.note));scope.append(p);const links=document.createElement('p');links.className='text-small';links.append(document.createTextNode('Profile evidence: '));basis.claims.forEach((claim,index)=>{if(index)links.append(document.createTextNode(' · '));const a=document.createElement('a');a.textContent=claim.label;a.href=siteBase+'/engineers/'+d[1]+'/#'+claim.anchor;a.target='_blank';a.rel='noopener';links.append(a)});scope.append(links)}scope.addEventListener('toggle',positionPopup);popup.append(scope);
if(d[3]){const p=document.createElement('p');p.className='text-small';p.textContent='Map placement remains provisional; tooling examples come from the current research cache.';popup.append(p)}const a=document.createElement('a');a.href=siteBase+'/engineers/'+d[1]+'/sources.html';a.textContent='Full source register ↗';a.target='_blank';a.rel='noopener';popup.append(a);popup.hidden=false;if(globalThis.lucide?.createIcons)globalThis.lucide.createIcons({attrs:{width:16,height:16}});positionPopup()}
root.addEventListener('click',e=>{if(e.target.closest('.person')){returnFocus=e.target.closest('button');if(!popup.hidden){positionPopup();popup.querySelector('button').focus({preventScroll:true});popup.scrollIntoView({block:'nearest',behavior:'instant'})}}});
document.addEventListener('pointerdown',e=>{if(!popup.hidden&&!popup.contains(e.target)&&!e.target.closest('.person'))closePopup(false)});
root.addEventListener('keydown',e=>{if(e.key==='Escape'&&!popup.hidden){e.preventDefault();closePopup(true)}});

const ns='http://www.w3.org/2000/svg';
function svgEl(t,a){const el=document.createElementNS(ns,t);for(const [k,v]of Object.entries(a||{}))el.setAttribute(k,v);return el}
function show(){const chosen=selected===null?null:data[selected];root.querySelectorAll('[data-region]').forEach(el=>{const active=chosen?chosen[2].includes(+el.dataset.region):selectedGroup===null||selectedGroup===+el.dataset.region;el.setAttribute('fill-opacity',active?'.15':'.025');el.setAttribute('stroke-opacity',active?'.6':'.1')});root.querySelectorAll('[data-person]').forEach(el=>{const d=data[+el.dataset.person];el.style.opacity=selectedGroup===null||d[2].includes(selectedGroup)?'1':'.25';el.querySelector('button').setAttribute('aria-pressed',String(+el.dataset.person===selected))});legend.querySelectorAll('button').forEach((b,i)=>b.setAttribute('aria-pressed',String(i===selectedGroup)));detail.replaceChildren();
if(chosen){const p=document.createElement('p');p.textContent=chosen[0]+' · tooling popup open';detail.append(p);renderPopup()}else{popup.hidden=true;const p=document.createElement('p');p.textContent=selectedGroup===null?'Select an engineer for tooling examples.':groups[selectedGroup][0]+': '+data.filter(d=>d[2].includes(selectedGroup)).map(d=>d[0]+(d[3]?' *':'')).join(' · ');detail.append(p)}}

function draw(){const w=landscape.clientWidth,H=w<500?1380:1200;landscape.replaceChildren();landscape.style.height=H+'px';const svg=svgEl('svg',{viewBox:`0 0 ${w} ${H}`,height:H,role:'img','aria-label':'Five translucent organic approach regions overlap around twenty engineer names. Areas and distances are schematic.'});const title=svgEl('title');title.textContent='Overlapping AI engineering approaches';svg.append(title);const desc=svgEl('desc');desc.textContent='Executable checks, human steering and orchestration overlap in the upper landscape. Production feedback and AI application evaluations overlap below. Placements reflect dated self-reports, published artifacts and guidance; they do not establish complete current personal setups.';svg.append(desc);const shapes=svgEl('g',{class:'regions'});svg.append(shapes);
const X=n=>n*w,Y=n=>n/1300*H;
const path=(parts)=>parts.map(p=>typeof p==='string'?p:p.map((v,i)=>i%2?Y(v):X(v)).join(' ')).join(' ');
const outlines=[
  [
    "M",
    [
      0.05,
      155
    ],
    "C",
    [
      0.01,
      20,
      0.42,
      18,
      0.7,
      65
    ],
    "C",
    [
      0.94,
      74,
      0.94,
      220,
      0.91,
      350
    ],
    "C",
    [
      0.96,
      505,
      0.87,
      690,
      0.64,
      720
    ],
    "C",
    [
      0.4,
      750,
      0.08,
      725,
      0.04,
      600
    ],
    "C",
    [
      0.0,
      415,
      0.08,
      290,
      0.05,
      155
    ],
    "Z"
  ],
  [
    "M",
    [
      0.12,
      250
    ],
    "C",
    [
      0.12,
      185,
      0.5,
      190,
      0.68,
      205
    ],
    "C",
    [
      0.94,
      190,
      1.0,
      280,
      0.97,
      490
    ],
    "C",
    [
      1.0,
      705,
      0.94,
      865,
      0.7,
      930
    ],
    "C",
    [
      0.59,
      967,
      0.59,
      1010,
      0.45,
      1040
    ],
    "C",
    [
      0.3,
      1060,
      0.29,
      938,
      0.17,
      870
    ],
    "C",
    [
      0.01,
      760,
      0.11,
      470,
      0.12,
      250
    ],
    "Z"
  ],
  [
    "M",
    [
      0.58,
      105
    ],
    "C",
    [
      0.56,
      20,
      0.96,
      12,
      0.98,
      108
    ],
    "C",
    [
      1.0,
      300,
      0.94,
      490,
      0.98,
      690
    ],
    "C",
    [
      1.0,
      850,
      0.91,
      950,
      0.76,
      936
    ],
    "C",
    [
      0.6,
      933,
      0.59,
      780,
      0.57,
      610
    ],
    "C",
    [
      0.54,
      410,
      0.58,
      210,
      0.58,
      105
    ],
    "Z"
  ],
  [
    "M",
    [
      0.04,
      1040
    ],
    "C",
    [
      0.01,
      952,
      0.23,
      924,
      0.43,
      951
    ],
    "C",
    [
      0.61,
      955,
      0.67,
      1022,
      0.63,
      1140
    ],
    "C",
    [
      0.57,
      1268,
      0.24,
      1283,
      0.07,
      1201
    ],
    "C",
    [
      0.01,
      1160,
      0.02,
      1101,
      0.04,
      1040
    ],
    "Z"
  ],
  [
    "M",
    [
      0.42,
      976
    ],
    "C",
    [
      0.42,
      933,
      0.58,
      928,
      0.64,
      898
    ],
    "C",
    [
      0.66,
      816,
      0.83,
      794,
      0.88,
      856
    ],
    "C",
    [
      0.93,
      914,
      0.86,
      967,
      0.94,
      1014
    ],
    "C",
    [
      1.0,
      1064,
      1.0,
      1196,
      0.94,
      1250
    ],
    "C",
    [
      0.88,
      1310,
      0.6,
      1296,
      0.44,
      1230
    ],
    "C",
    [
      0.35,
      1188,
      0.36,
      1035,
      0.42,
      976
    ],
    "Z"
  ]
];outlines.forEach((outline,i)=>{const p=svgEl('path',{d:path(outline),fill:`var(--viz-series-${groups[i][1]})`,stroke:`var(--viz-series-${groups[i][1]})`,'stroke-width':'1.2','fill-opacity':'.15','stroke-opacity':'.6','data-region':i});shapes.append(p)});landscape.append(svg);
const labels=[["Executable", 0.21, 40, "checks"], ["Context & human", 0.3, 852, "steering"], ["Agent", 0.82, 30, "orchestration"], ["Production", 0.2, 963, "feedback"], ["AI application", 0.8, 960, "evaluations"]];labels.forEach(l=>{const el=document.createElement('div');el.className='region-label text-small';el.style.left=(l[1]*100)+'%';el.style.top=Y(l[2])+'px';el.append(document.createTextNode(l[0]));if(l[3]){el.append(document.createElement('br'),document.createTextNode(l[3]))}landscape.append(el)});
data.forEach((d,i)=>{const wrap=document.createElement('div');wrap.className='person';wrap.dataset.person=i;wrap.style.left=pos[i][0]*100+'%';wrap.style.top=Y(pos[i][1])+'px';const b=document.createElement('button');b.type='button';b.className='btn btn-ghost';b.textContent=(w<540?short[i]:d[0])+(d[3]?' *':'');b.setAttribute('aria-label',d[0]+(d[3]?', provisional placement':''));b.setAttribute('aria-pressed','false');b.setAttribute('aria-haspopup','dialog');b.addEventListener('click',()=>{selected=selected===i?null:i;selectedGroup=null;show()});wrap.append(b);landscape.append(wrap)});show()}
groups.forEach((g,i)=>{const b=document.createElement('button');b.type='button';b.className='btn btn-ghost';b.setAttribute('aria-pressed','false');const sw=document.createElement('span');sw.className='swatch';sw.style.background=`var(--viz-series-${g[1]})`;sw.setAttribute('aria-hidden','true');b.append(sw,document.createTextNode(g[0]));b.addEventListener('click',()=>{selected=null;selectedGroup=selectedGroup===i?null:i;show()});legend.append(b)});let previous=0;new ResizeObserver(()=>{const w=landscape.clientWidth;if(w!==previous){previous=w;draw()}}).observe(landscape);draw();
})();
