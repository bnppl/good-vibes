
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
    true,
    "May 2025 guidance advocates TDD, linting, and checks before committing.",
    "Dated workflow accounts connect explicit intent, incremental execution and feedback. Later experiments and current public rules qualify the early planning recipe.",
    "Tool authorship and current personal use still need checking."
  ],
  [
    "Matt Pocock",
    "matt-pocock",
    [
      1
    ],
    true,
    "The pinned October skill specifies red-green at human-agreed public seams; refactoring moves to review.",
    "Published skills are inspected artifacts, not a verified complete personal setup.",
    "Tool authorship and current personal use still need checking."
  ],
  [
    "Robert C. Martin",
    "robert-c-martin",
    [
      0
    ],
    true,
    "His June 2016 article advocates mutation testing to challenge assertions; coverage alone records execution.",
    "Historical design principles, published agent artifacts, and a changing personal workflow provide distinct evidence. Discipline matters without turning a dated harness or review choice into a universal rule.",
    "Tool authorship and current personal use still need checking."
  ],
  [
    "Peter Steinberger",
    "peter-steinberger",
    [
      2
    ],
    true,
    "His October 2025 workflow asks for tests after feature implementation, retaining the same context.",
    "A fast, iterative approach with dated reports of parallel agents, executable feedback and selective review. Current public artifacts add structured skills and release guidance without establishing a complete private setup.",
    "Tool authorship and current personal use still need checking."
  ],
  [
    "DHH",
    "david-heinemeier-hansson",
    [
      1
    ],
    true,
    "May 2024: favours model/controller checks and limited browser smoke coverage; current agent cadence unknown.",
    "A changing public stance on coding agents, testing and product value. Dated recommendations and reported experiments remain distinct from a complete current personal workflow.",
    "Rails authorship is distinct from AI tool authorship and usage."
  ],
  [
    "Andrej Karpathy",
    "andrej-karpathy",
    [
      1
    ],
    true,
    "Published ML instructions retain a baseline and exclude evaluator edits.",
    "Conceptual AI systems and coding guidance are distinct; ML experiments do not establish a complete personal coding-agent policy.",
    "Tool authorship and current personal use still need checking."
  ],
  [
    "Charity Majors",
    "charity-majors",
    [
      3
    ],
    true,
    "Extend verification to observed operational behaviour as well as pre-production checks.",
    "Operational and production engineering guidance; a full personal coding-agent workflow is not established.",
    "Tool authorship and current personal use still need checking."
  ],
  [
    "Chip Huyen",
    "chip-huyen",
    [
      4
    ],
    true,
    "Validate AI-product judgments using human assessment.",
    "These claims concern building AI products. Model evaluation does not establish a personal coding-agent or TDD policy.",
    "Tool authorship and current personal use still need checking."
  ],
  [
    "Hamel Husain",
    "hamel-husain",
    [
      3,
      4
    ],
    true,
    "Use code for objective product checks; validate subjective judges against human labels and held-out examples.",
    "Product evaluation and deployment guidance do not establish his personal coding-agent or TDD policy.",
    "Tool authorship and current personal use still need checking."
  ],
  [
    "Jason Liu",
    "jason-liu",
    [
      4
    ],
    true,
    "His May 2025 RAG framework distinguishes retrieval and question/context/answer relationships.",
    "Retrieval, model and product evaluation are distinct from a documented personal coding-agent workflow.",
    "Tool authorship and current personal use still need checking."
  ]
];
const groups=[['Executable checks',1],['Context & human steering',2],['Agent orchestration',3],['Production feedback',4],['AI application evaluations',5]];
const pos=[[.27,250],[.27,330],[.64,270],[.27,410],[.64,350],[.64,430],[.27,490],[.86,550],[.68,150],[.49,525],[.46,455],[.26,600],[.16,115],[.85,105],[.52,610],[.30,690],[.17,865],[.80,850],[.49,940],[.79,1015]];
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
const scope=document.createElement('details');const summary=document.createElement('summary');summary.textContent='Verification and project context';scope.append(summary);for(const [label,text]of [['Verification',d[4]],['Project / date',d[5]]]){const p=document.createElement('p');const b=document.createElement('strong');b.textContent=label+': ';p.append(b,document.createTextNode(text));scope.append(p)}scope.addEventListener('toggle',positionPopup);popup.append(scope);
if(d[3]){const p=document.createElement('p');p.className='text-small';p.textContent='Map placement remains provisional; tooling examples come from the current research cache.';popup.append(p)}const a=document.createElement('a');a.href=siteBase+'/engineers/'+d[1]+'/sources.html';a.textContent='Full source register ↗';a.target='_blank';a.rel='noopener';popup.append(a);popup.hidden=false;if(globalThis.lucide?.createIcons)globalThis.lucide.createIcons({attrs:{width:16,height:16}});positionPopup()}
root.addEventListener('click',e=>{if(e.target.closest('.person')){returnFocus=e.target.closest('button');if(!popup.hidden){positionPopup();popup.querySelector('button').focus({preventScroll:true});popup.scrollIntoView({block:'nearest',behavior:'instant'})}}});
document.addEventListener('pointerdown',e=>{if(!popup.hidden&&!popup.contains(e.target)&&!e.target.closest('.person'))closePopup(false)});
root.addEventListener('keydown',e=>{if(e.key==='Escape'&&!popup.hidden){e.preventDefault();closePopup(true)}});

const ns='http://www.w3.org/2000/svg';
function svgEl(t,a){const el=document.createElementNS(ns,t);for(const [k,v]of Object.entries(a||{}))el.setAttribute(k,v);return el}
function show(){const chosen=selected===null?null:data[selected];root.querySelectorAll('[data-region]').forEach(el=>{const active=chosen?chosen[2].includes(+el.dataset.region):selectedGroup===null||selectedGroup===+el.dataset.region;el.setAttribute('fill-opacity',active?'.15':'.025');el.setAttribute('stroke-opacity',active?'.6':'.1')});root.querySelectorAll('[data-person]').forEach(el=>{const d=data[+el.dataset.person];el.style.opacity=selectedGroup===null||d[2].includes(selectedGroup)?'1':'.25';el.querySelector('button').setAttribute('aria-pressed',String(+el.dataset.person===selected))});legend.querySelectorAll('button').forEach((b,i)=>b.setAttribute('aria-pressed',String(i===selectedGroup)));detail.replaceChildren();
if(chosen){const p=document.createElement('p');p.textContent=chosen[0]+' · tooling popup open';detail.append(p);renderPopup()}else{popup.hidden=true;const p=document.createElement('p');p.textContent=selectedGroup===null?'Select an engineer for tooling examples.':groups[selectedGroup][0]+': '+data.filter(d=>d[2].includes(selectedGroup)).map(d=>d[0]+(d[3]?' *':'')).join(' · ');detail.append(p)}}

function draw(){const w=landscape.clientWidth,H=w<500?1180:1020;landscape.replaceChildren();landscape.style.height=H+'px';const svg=svgEl('svg',{viewBox:`0 0 ${w} ${H}`,height:H,role:'img','aria-label':'Five translucent organic approach regions overlap around twenty engineer names. Areas and distances are schematic.'});const title=svgEl('title');title.textContent='Overlapping AI engineering approaches';svg.append(title);const desc=svgEl('desc');desc.textContent='Executable checks, human steering and orchestration overlap in the upper landscape. Production feedback and AI application evaluations overlap below. Provisional people carry an asterisk.';svg.append(desc);const shapes=svgEl('g',{class:'regions'});svg.append(shapes);
const X=n=>n*w,Y=n=>n/1100*H;
const path=(parts)=>parts.map(p=>typeof p==='string'?p:p.map((v,i)=>i%2?Y(v):X(v)).join(' ')).join(' ');
const outlines=[
['M',[.04,155],'C',[.00,20,.35,12,.56,68],'C',[.78,65,.81,170,.76,300],'C',[.79,445,.68,565,.49,556],'C',[.26,580,.06,550,.04,420],'C',[.01,300,.08,250,.04,155],'Z'],
['M',[.14,250],'C',[.12,180,.45,185,.64,202],'C',[.84,185,.99,230,.97,380],'C',[1.00,520,.96,672,.73,714],'C',[.63,770,.20,782,.10,674],'C',[.01,562,.14,420,.14,250],'Z'],
['M',[.57,110],'C',[.55,20,.96,8,.98,108],'C',[1.01,245,.91,340,.97,460],'C',[1.01,582,.92,627,.80,602],'C',[.69,580,.58,468,.56,375],'C',[.52,257,.59,190,.57,110],'Z'],
['M',[.04,867],'C',[.02,786,.24,783,.42,827],'C',[.61,843,.67,902,.61,983],'C',[.53,1070,.21,1082,.07,1002],'C',[.01,962,.02,930,.04,867],'Z'],
['M',[.42,879],'C',[.44,787,.69,764,.89,795],'C',[1.00,817,1.00,960,.96,1038],'C',[.91,1110,.58,1101,.44,1044],'C',[.36,1009,.36,943,.42,879],'Z']
];outlines.forEach((outline,i)=>{const p=svgEl('path',{d:path(outline),fill:`var(--viz-series-${groups[i][1]})`,stroke:`var(--viz-series-${groups[i][1]})`,'stroke-width':'1.2','fill-opacity':'.15','stroke-opacity':'.6','data-region':i});shapes.append(p)});landscape.append(svg);
const labels=[['Executable',.21,38,'checks'],['Context & human steering',.39,756,''],['Agent',.82,30,'orchestration'],['Production feedback',.23,810,''],['AI application',.77,780,'evaluations']];labels.forEach(l=>{const el=document.createElement('div');el.className='region-label text-small';el.style.left=(l[1]*100)+'%';el.style.top=Y(l[2])+'px';el.append(document.createTextNode(l[0]));if(l[3]){el.append(document.createElement('br'),document.createTextNode(l[3]))}landscape.append(el)});
data.forEach((d,i)=>{const wrap=document.createElement('div');wrap.className='person';wrap.dataset.person=i;wrap.style.left=pos[i][0]*100+'%';wrap.style.top=Y(pos[i][1])+'px';const b=document.createElement('button');b.type='button';b.className='btn btn-ghost';b.textContent=(w<540?short[i]:d[0])+(d[3]?' *':'');b.setAttribute('aria-label',d[0]+(d[3]?', provisional placement':''));b.setAttribute('aria-pressed','false');b.setAttribute('aria-haspopup','dialog');b.addEventListener('click',()=>{selected=selected===i?null:i;selectedGroup=null;show()});wrap.append(b);landscape.append(wrap)});show()}
groups.forEach((g,i)=>{const b=document.createElement('button');b.type='button';b.className='btn btn-ghost';b.setAttribute('aria-pressed','false');const sw=document.createElement('span');sw.className='swatch';sw.style.background=`var(--viz-series-${g[1]})`;sw.setAttribute('aria-hidden','true');b.append(sw,document.createTextNode(g[0]));b.addEventListener('click',()=>{selected=null;selectedGroup=selectedGroup===i?null:i;show()});legend.append(b)});let previous=0;new ResizeObserver(()=>{const w=landscape.clientWidth;if(w!==previous){previous=w;draw()}}).observe(landscape);draw();
})();
