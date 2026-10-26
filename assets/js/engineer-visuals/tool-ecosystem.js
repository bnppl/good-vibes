(function () {
  'use strict';
  const inventory = {
  "dave-farley": [
    {
      "name": "CD.Training Claude plugin",
      "relationship": "Official course artifact",
      "purpose": "Learning, building and reviewing with the published course commands. This is not a complete personal stack.",
      "url": "https://github.com/cd-training-courses/claude-skills",
      "categories": [
        "planning",
        "verification"
      ]
    }
  ],
  "kent-beck": [
    {
      "name": "Intent / Augment Code",
      "relationship": "Reported use · Apr 2026",
      "purpose": "Multi-agent exploration; his account also discusses coordination burden.",
      "url": "https://newsletter.kentbeck.com/p/genie-lessons-nobody-wants-agents",
      "categories": [
        "orchestration"
      ]
    },
    {
      "name": "Cargo + Criterion",
      "relationship": "Project tooling",
      "purpose": "Tests and benchmarks specified in the inspected BPlusTree3 instructions.",
      "url": "https://github.com/KentBeck/BPlusTree3",
      "categories": [
        "verification"
      ]
    },
    {
      "name": "Augment Remote Agent",
      "relationship": "Historical use · Jun 2025",
      "purpose": "Project rewrite experiment; the account discloses sponsorship.",
      "url": "https://newsletter.kentbeck.com/p/augmented-coding-beyond-the-vibes",
      "categories": [
        "coding"
      ]
    }
  ],
  "simon-willison": [
    {
      "name": "Rodney",
      "relationship": "Created",
      "purpose": "CLI-driven Chrome interaction for exercising web behaviour.",
      "url": "https://github.com/simonw/rodney",
      "categories": [
        "verification"
      ]
    },
    {
      "name": "Showboat",
      "relationship": "Created",
      "purpose": "Records executed commands and output; verify replays recorded checks.",
      "url": "https://github.com/simonw/showboat",
      "categories": [
        "verification"
      ]
    },
    {
      "name": "Codex + Claude Code",
      "relationship": "Reported use",
      "purpose": "Coding-agent examples, including Codex in the October 2026 production blog feature.",
      "url": "https://simonwillison.net/2026/Oct/9/built-using-my-voice/",
      "categories": [
        "coding"
      ]
    },
    {
      "name": "pytest / uv",
      "relationship": "Reported use",
      "purpose": "Baseline and regression checks in documented examples.",
      "url": "https://simonwillison.net/guides/agentic-engineering-patterns/first-run-the-tests/",
      "categories": [
        "verification",
        "environment"
      ]
    }
  ],
  "birgitta-bockeler": [
    {
      "name": "ESLint + type checking",
      "relationship": "Experiment controls",
      "purpose": "Fast structural feedback in dashboard experiments.",
      "url": "https://martinfowler.com/articles/sensors-for-coding-agents.html",
      "categories": [
        "verification"
      ]
    },
    {
      "name": "Semgrep + dependency-cruiser",
      "relationship": "Experiment controls",
      "purpose": "Security findings and module dependency feedback; not a complete safety guarantee.",
      "url": "https://martinfowler.com/articles/sensors-for-coding-agents.html",
      "categories": [
        "verification"
      ]
    },
    {
      "name": "Cursor / Windsurf / Cline",
      "relationship": "Historical use · Mar 2025",
      "purpose": "Supervised brownfield work; this predates the requested research period.",
      "url": "https://martinfowler.com/articles/exploring-gen-ai/13-role-of-developer-skills.html",
      "categories": [
        "coding"
      ]
    }
  ],
  "addy-osmani": [
    {
      "name": "Agent Skills",
      "relationship": "Published artifact",
      "purpose": "Lifecycle instructions such as spec, plan, build, test, review and ship.",
      "url": "https://github.com/addyosmani/agent-skills",
      "categories": [
        "planning",
        "verification"
      ]
    },
    {
      "name": "Claude Code / Jules / Copilot agents",
      "relationship": "Reported workflow · Jan 2026",
      "purpose": "Supervised coding and background work; not a complete October inventory.",
      "url": "https://addyosmani.com/blog/ai-coding-workflow/",
      "categories": [
        "coding",
        "orchestration"
      ]
    },
    {
      "name": "Chrome DevTools MCP",
      "relationship": "Reported workflow · Jan 2026",
      "purpose": "Browser and runtime evidence for debugging and quality checks.",
      "url": "https://addyosmani.com/blog/ai-coding-workflow/",
      "categories": [
        "verification"
      ]
    }
  ],
  "gojko-adzic": [
    {
      "name": "Lights-on Software Factory",
      "relationship": "Published artifact",
      "purpose": "Planning, worker roles, merged-work gates and a final completion check. Based on Votito.",
      "url": "https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/README.md",
      "categories": [
        "orchestration",
        "verification"
      ]
    },
    {
      "name": "Claude Code + Docker + make",
      "relationship": "Documented environment",
      "purpose": "Host and execution environment in the public factory.",
      "url": "https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/GETTING-STARTED.md",
      "categories": [
        "coding",
        "environment"
      ]
    },
    {
      "name": "Command regulator + ESLint hook",
      "relationship": "Published components",
      "purpose": "Role-dependent command rules and edit-time feedback. Inspected, not runtime-tested.",
      "url": "https://github.com/gojko/lights-on-software-factory/blob/7e8ee8b4dcd9857da48845b187540e3e1891c70f/REGULATOR.md",
      "categories": [
        "verification"
      ]
    }
  ],
  "martin-fowler": [
    {
      "name": "Context-interview report",
      "relationship": "Self-reported trial",
      "purpose": "An interview generates project context; a technique rather than a packaged plugin.",
      "url": "https://martinfowler.com/bliki/InterrogatoryLLM.html",
      "categories": [
        "context"
      ]
    },
    {
      "name": "Pi + gptel / Emacs",
      "relationship": "Expressed interest · Jan 2026",
      "purpose": "Interest in trying programmable agent interaction; actual daily adoption is not established.",
      "url": "https://martinfowler.com/fragments/2026-01-08.html",
      "categories": [
        "coding",
        "context"
      ]
    }
  ],
  "armin-ronacher": [
    {
      "name": "Pi",
      "relationship": "Reported use · Jan 2026",
      "purpose": "Extensible agent/session environment; October writing describes later Codemode and MCP integration.",
      "url": "https://lucumr.pocoo.org/2026/1/31/pi/",
      "categories": [
        "coding"
      ]
    },
    {
      "name": "Custom Pi extensions",
      "relationship": "Authored descriptions",
      "purpose": "Todo, review and experimental interaction helpers; linked implementations were not inspected.",
      "url": "https://lucumr.pocoo.org/2026/1/31/pi/",
      "categories": [
        "context",
        "verification"
      ]
    },
    {
      "name": "Absurd / absurdctl",
      "relationship": "Related production account",
      "purpose": "Checkpoint state and operational inspection; not a universal workflow requirement.",
      "url": "https://lucumr.pocoo.org/2026/4/4/absurd-in-production/",
      "categories": [
        "observability",
        "orchestration"
      ]
    }
  ],
  "steve-yegge": [
    {
      "name": "Beads",
      "relationship": "Created",
      "purpose": "Durable work graph and persistent project context.",
      "url": "https://github.com/gastownhall/beads",
      "categories": [
        "planning",
        "context"
      ]
    },
    {
      "name": "Gas Town",
      "relationship": "Original public experiment",
      "purpose": "Agent-fleet orchestration; distinct from his later private setup.",
      "url": "https://github.com/gastownhall/gastown",
      "categories": [
        "orchestration"
      ]
    },
    {
      "name": "Gas City",
      "relationship": "Endorsed · Apr 2026",
      "purpose": "Built by Julian Knutsen and Chris Sells; not solely authored by Yegge.",
      "url": "https://yegge.ai/essays/welcome-to-gas-city/",
      "categories": [
        "orchestration"
      ]
    },
    {
      "name": "Wheelhouse",
      "relationship": "Self-reported · Aug 2026",
      "purpose": "Private bespoke harness; no public reproducible setup in the cache.",
      "url": "https://yegge.ai/essays/the-shape-of-things-to-come/",
      "categories": [
        "orchestration"
      ]
    }
  ],
  "gene-kim": [
    {
      "name": "Claude Code + Clojure",
      "relationship": "Historical project use",
      "purpose": "Trello and manuscript-tool accounts; not a verified present-day full stack.",
      "url": "https://itrevolution.com/articles/the-last-80-hours-of-editing-the-vibe-coding-book/",
      "categories": [
        "coding"
      ]
    },
    {
      "name": "Augment Code + Apps Script / CLASP",
      "relationship": "Historical project use",
      "purpose": "An add-on project with a local edit/deployment loop.",
      "url": "https://itrevolution.com/articles/how-i-built-a-google-docs-add-on-in-three-hours-using-chat-and-vibe-programming/",
      "categories": [
        "coding",
        "environment"
      ]
    }
  ],
  "harper-reed": [
    {
      "name": "Tailscale + Blink + tmux",
      "relationship": "Reported use · Jan 2026",
      "purpose": "Remote terminal access to development sessions; private configuration not verified.",
      "url": "https://harper.blog/2026/01/05/claude-code-is-better-on-your-phone/",
      "categories": [
        "environment"
      ]
    },
    {
      "name": "Claude Code / Aider",
      "relationship": "Historical use · May 2025",
      "purpose": "Reported transition between coding-agent tools.",
      "url": "https://harper.blog/2025/05/08/basic-claude-code/",
      "categories": [
        "coding"
      ]
    },
    {
      "name": "Breakaway agent",
      "relationship": "Public experimental artifact",
      "purpose": "Platform README inspected; not installed or evaluated in this research.",
      "url": "https://github.com/2389-research/breakaway-agent/blob/d02d44ea24f45492815ed0c24c2054983b71d5d4/README.md",
      "categories": [
        "orchestration"
      ]
    }
  ],
  "matt-pocock": [
    {
      "name": "mattpocock/skills",
      "relationship": "Published artifact",
      "purpose": "Composable planning, implementation and orchestration instructions; README self-reports use.",
      "url": "https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/README.md",
      "categories": [
        "planning",
        "verification"
      ]
    },
    {
      "name": "Git worktrees + configured tracker",
      "relationship": "Documented design",
      "purpose": "Parallel implementation and repository-specific work tracking in the published setup.",
      "url": "https://github.com/mattpocock/skills/blob/5beb35b040e3de97e54fa9e386d7e42d15c295c2/skills/engineering/implement/SKILL.md",
      "categories": [
        "orchestration",
        "context"
      ]
    }
  ],
  "robert-c-martin": [
    {
      "name": "SwarmForge",
      "relationship": "Published artifact",
      "purpose": "Agent coordination, engineering instructions and structured handoffs; not proof of current private topology.",
      "url": "https://github.com/unclebob/swarm-forge/blob/f4f5fbcae0de6f7dcc26e82400334227647cfdb2/README.md",
      "categories": [
        "orchestration"
      ]
    },
    {
      "name": "Terminal Grok",
      "relationship": "Reported use · Sep 2026",
      "purpose": "Personal interview account, with earlier Codex and Claude usage separately dated.",
      "url": "https://www.aviator.co/podcast/uncle-bob-martin-ai-clean-code",
      "categories": [
        "coding"
      ]
    },
    {
      "name": "Gherkin acceptance pipeline",
      "relationship": "Published instructions",
      "purpose": "Acceptance parsing and mutation components described in the artifact; not executed here.",
      "url": "https://github.com/unclebob/swarm-forge/blob/f4f5fbcae0de6f7dcc26e82400334227647cfdb2/swarmforge/constitution/articles/engineering.prompt",
      "categories": [
        "verification"
      ]
    }
  ],
  "peter-steinberger": [
    {
      "name": "Oracle",
      "relationship": "Built and used · Dec 2025 account",
      "purpose": "Bundles relevant code/context for a second-model opinion; agreement alone is not correctness.",
      "url": "https://github.com/steipete/oracle/blob/8ca21e82ce82d4b65c12243929c0a31e5d73c847/docs/agents.md",
      "categories": [
        "verification",
        "context"
      ]
    },
    {
      "name": "Agent Scripts",
      "relationship": "Published artifact",
      "purpose": "Shared agent guidance, skills and helper routing.",
      "url": "https://github.com/steipete/agent-scripts/blob/1159adf26ad007df38b87debb107d3946008d38b/README.md",
      "categories": [
        "context",
        "planning"
      ]
    },
    {
      "name": "Codex / Claude Code / Ghostty",
      "relationship": "Dated workflow accounts · 2025",
      "purpose": "Parallel terminal development and earlier coding workflow; no complete current inventory established.",
      "url": "https://steipete.me/posts/2025/shipping-at-inference-speed",
      "categories": [
        "coding",
        "environment"
      ]
    }
  ],
  "david-heinemeier-hansson": [
    {
      "name": "OpenCode",
      "relationship": "Reported use · Jan 2026",
      "purpose": "Personal coding-agent account; exact installed revision and model settings unknown.",
      "url": "https://world.hey.com/dhh/promoting-ai-agents-3ee04945",
      "categories": [
        "coding"
      ]
    },
    {
      "name": "OpenClaw + Proxmox",
      "relationship": "Personal experiment · Feb 2026",
      "purpose": "An isolated assistant experiment, not every coding session.",
      "url": "https://world.hey.com/dhh/clankers-with-claws-9f86fa71",
      "categories": [
        "orchestration",
        "environment"
      ]
    },
    {
      "name": "Basecamp API / CLI / skill",
      "relationship": "Team artifact · Mar 2026",
      "purpose": "37signals product announcement; does not establish sole personal authorship.",
      "url": "https://world.hey.com/dhh/basecamp-becomes-agent-accessible-3ae6b949",
      "categories": [
        "context",
        "orchestration"
      ]
    }
  ],
  "andrej-karpathy": [
    {
      "name": "autoresearch",
      "relationship": "Published research artifact",
      "purpose": "Agent instructions and README inspected at a pinned revision; not a general product release system.",
      "url": "https://github.com/karpathy/autoresearch/blob/228791fb499afffb54b46200aca536f79142f117/README.md",
      "categories": [
        "orchestration",
        "evaluation"
      ]
    },
    {
      "name": "microgpt",
      "relationship": "Authored educational artifact",
      "purpose": "A compact learning implementation; not a universal production architecture.",
      "url": "https://karpathy.github.io/2026/02/12/microgpt/",
      "categories": [
        "coding"
      ]
    },
    {
      "name": "Claude Code",
      "relationship": "Commentary · Dec 2025",
      "purpose": "Dated endorsement of local agent interaction, not a full daily tool inventory.",
      "url": "https://karpathy.bearblog.dev/year-in-review-2025/",
      "categories": [
        "coding"
      ]
    }
  ],
  "charity-majors": [
    {
      "name": "Honeycomb",
      "relationship": "Organisation / observability context",
      "purpose": "Structured-event exploration in her observability argument; not a mandatory vendor choice.",
      "url": "https://charity.wtf/p/is-it-time-to-version-observability-signs-point-to-yes",
      "categories": [
        "observability"
      ]
    },
    {
      "name": "Traces + capture/replay",
      "relationship": "Discussed techniques",
      "purpose": "Production behaviour and rollout feedback; no complete personal coding-agent stack established.",
      "url": "https://www.honeycomb.io/blog/production-is-where-the-rigor-goes",
      "categories": [
        "observability",
        "verification"
      ]
    }
  ],
  "chip-huyen": [
    {
      "name": "JAX + DistilBERT",
      "relationship": "Historical experiment · Feb 2024",
      "purpose": "Reported tools in a preference experiment. Outside the requested period; current adoption is not established.",
      "url": "https://huyenchip.com/2024/02/28/predictive-human-preference.html",
      "categories": [
        "evaluation"
      ]
    },
    {
      "name": "Good AI List / cool-llm-repos",
      "relationship": "Curation resources",
      "purpose": "Linked by her OSS survey, with a February 2026 catalogue update; not endorsement or personal use of every entry.",
      "url": "https://huyenchip.com/2024/03/14/ai-oss.html",
      "categories": [
        "context"
      ]
    }
  ],
  "hamel-husain": [
    {
      "name": "Eval Skills",
      "relationship": "Joint Husain / Shankar artifact",
      "purpose": "Evaluation skills including error-discovery, write-code-eval and validate-evaluator.",
      "url": "https://github.com/ai-evals-course/evals-skills/blob/80d5f7b0127c7572ed9e9339937adbfd7240ffeb/README.md",
      "categories": [
        "evaluation"
      ]
    },
    {
      "name": "Jupyter + custom review interfaces",
      "relationship": "Personal account · Oct 2025",
      "purpose": "Inspecting and analysing real examples; not a complete present-day stack.",
      "url": "https://hamel.dev/blog/posts/eval-tools/index.html",
      "categories": [
        "evaluation"
      ]
    },
    {
      "name": "LangSmith / Braintrust / Arize Phoenix",
      "relationship": "Assessed in a panel account",
      "purpose": "Evaluation backends and review workflows; assessment is not proof of personal adoption.",
      "url": "https://hamel.dev/blog/posts/eval-tools/index.html",
      "categories": [
        "evaluation",
        "observability"
      ]
    }
  ],
  "jason-liu": [
    {
      "name": "Instructor",
      "relationship": "Creator + authored examples",
      "purpose": "Structured outputs and evaluation examples; not his entire current personal setup.",
      "url": "https://jxnl.co/",
      "categories": [
        "coding",
        "evaluation"
      ]
    },
    {
      "name": "Pydantic result models",
      "relationship": "Authored tutorial example",
      "purpose": "Structured relevance results in a reranker; inspected, not executed.",
      "url": "https://python.useinstructor.com/blog/2024/10/23/building-an-llm-based-reranker-for-your-rag-pipeline/",
      "categories": [
        "verification",
        "evaluation"
      ]
    },
    {
      "name": "Claude Code prototype harness",
      "relationship": "Historical recommendation · Sep 2025",
      "purpose": "Prototyping technique, outside the requested period; current personal use is not established.",
      "url": "https://jxnl.co/writing/2025/09/04/context-engineering-rapid-agent-prototyping/",
      "categories": [
        "coding",
        "context"
      ]
    }
  ]
};
  const components = {
    'Intent / Augment Code':['Intent','Augment Code'], 'Cargo + Criterion':['Cargo','Criterion'],
    'Codex + Claude Code':['Codex','Claude Code'], 'pytest / uv':['pytest','uv'],
    'ESLint + type checking':['ESLint','Type checking'], 'Semgrep + dependency-cruiser':['Semgrep','dependency-cruiser'],
    'Cursor / Windsurf / Cline':['Cursor','Windsurf','Cline'],
    'Claude Code / Jules / Copilot agents':['Claude Code','Jules','Copilot agents'],
    'Claude Code + Docker + make':['Claude Code','Docker','make'],
    'Command regulator + ESLint hook':['Command regulator','ESLint'],
    'Pi + gptel / Emacs':['Pi','gptel','Emacs'], 'Absurd / absurdctl':['Absurd'],
    'Claude Code + Clojure':['Claude Code','Clojure'],
    'Augment Code + Apps Script / CLASP':['Augment Code','Google Apps Script','CLASP'],
    'Tailscale + Blink + tmux':['Tailscale','Blink','tmux'], 'Claude Code / Aider':['Claude Code','Aider'],
    'Git worktrees + configured tracker':['Git worktrees','Configured tracker'],
    'Codex / Claude Code / Ghostty':['Codex','Claude Code','Ghostty'],
    'OpenClaw + Proxmox':['OpenClaw','Proxmox'], 'Basecamp API / CLI / skill':['Basecamp integration'],
    'Traces + capture/replay':['Traces','Capture/replay'], 'JAX + DistilBERT':['JAX','DistilBERT'],
    'Good AI List / cool-llm-repos':['AI resource lists'], 'Jupyter + custom review interfaces':['Jupyter','Custom review interfaces'],
    'LangSmith / Braintrust / Arize Phoenix':['LangSmith','Braintrust','Arize Phoenix'],
    'Claude Code prototype harness':['Claude Code']
  };
  const categoryNames={orchestration:'Orchestration',verification:'Verification',context:'Context',coding:'Coding',environment:'Environment',observability:'Observability',evaluation:'AI evaluation',planning:'Planning'};
  function kind(text) {
    if (/^Created|^Creator|^Built and used|^Original public experiment/.test(text)) return 'created';
    if (/^Endorsed|^Commentary|^Discussed/.test(text)) return 'endorsed';
    if (/^Expressed interest/.test(text)) return 'interest';
    if (/^Assessed/.test(text)) return 'assessed';
    if (/^Team artifact|^Joint/.test(text)) return 'team';
    if (/Published|Public experimental|Authored|Official course|Documented/.test(text)) return 'published';
    if (/use|workflow|Personal experiment/i.test(text)) return 'used';
    return 'context';
  }
  window.EngineerVisuals = window.EngineerVisuals || {};
  window.EngineerVisuals['tool-ecosystem'] = function (ctx) {
    const {root,profiles,el,link}=ctx;
    const wrap=el('div','view-tool-ecosystem');root.append(wrap);
    const intro=el('p','visual-note','Trunks are engineers; branches are documented tool relationships. Solid branches mark created tools, dashed grafts reported use, and dotted branches other relationships. Publication, endorsement and interest remain distinct. This is an editorial illustration, not a complete inventory or a measure of influence.');wrap.append(intro);
    let personId=profiles.some(p=>p.id==='simon-willison')?'simon-willison':profiles[0].id;
    let selectedTool='';
    const tools=[...new Set(Object.values(inventory).flatMap(rows=>rows.flatMap(r=>components[r.name]||[r.name])))].sort((a,b)=>a.localeCompare(b));
    const controls=el('div','visual-controls');
    const personLabel=el('label','visual-field','Engineer');const personSelect=el('select','visual-select');personSelect.id='tool-ecosystem-person';profiles.forEach(p=>{const o=el('option','',p.name);o.value=p.id;personSelect.append(o)});personSelect.value=personId;personLabel.append(personSelect);
    const toolLabel=el('label','visual-field','Trace a tool across the grove');const toolSelect=el('select','visual-select');toolSelect.id='tool-ecosystem-tool';const blank=el('option','','Choose a tool…');blank.value='';toolSelect.append(blank);tools.forEach(t=>{const o=el('option','',t);o.value=t;toolSelect.append(o)});toolLabel.append(toolSelect);controls.append(personLabel,toolLabel);wrap.append(controls);
    const caption=el('div','eco-caption');wrap.append(caption);
    const scene=el('div','eco-scene');wrap.append(scene);
    const legend=el('div','eco-legend');[['created','Created / authored'],['used','Reported use / experiment'],['other','Artifact, endorsement or other scope']].forEach(([k,t])=>{const span=el('span','eco-legend-item');span.append(el('span','eco-line eco-line-'+k),document.createTextNode(t));legend.append(span)});wrap.append(legend);
    const selectedInfo=el('section','visual-detail eco-selected');selectedInfo.setAttribute('aria-live','polite');wrap.append(selectedInfo);
    const orchard=el('section','eco-orchard');const oh=el('h2','','The grove · all twenty engineers');orchard.append(oh);const rootButtons=el('div','eco-root-grid');orchard.append(rootButtons);const rootsNote=el('p','visual-note','When a tool is selected, outlined trunks have a matching named tool in this cache. Unmarked engineers are not evidence of non-use. Combined entries remain scoped to their original account.');orchard.append(rootsNote);wrap.append(orchard);
    const memberships=(id,t)=> (inventory[id]||[]).filter(row=>(components[row.name]||[row.name]).includes(t));
    const buttons=new Map();profiles.forEach(p=>{const b=el('button','visual-button eco-root',p.name);b.type='button';b.addEventListener('click',()=>{personId=p.id;personSelect.value=personId;if(selectedTool&&!memberships(personId,selectedTool).length){selectedTool='';toolSelect.value=''}render()});b.dataset.person=p.id;buttons.set(p.id,b);rootButtons.append(b)});
    const ns='http://www.w3.org/2000/svg';function svg(tag,attrs){const n=document.createElementNS(ns,tag);Object.entries(attrs).forEach(([k,v])=>n.setAttribute(k,v));return n}
    function renderTree(p,rows){
      scene.replaceChildren();const width=scene.clientWidth||600;const narrow=width<480;const rowsCount=narrow?rows.length:Math.ceil(rows.length/2);const gap=narrow?200:190;const height=rowsCount*gap+95;
      scene.style.height=height+'px';const drawing=svg('svg',{viewBox:`0 0 ${width} ${height}`,width:'100%',height,role:'img','aria-label':`${p.name}'s documented tooling branches. Relationship labels carry the meaning; illustration positions carry no score.`});
      const title=svg('title',{});title.textContent=p.name+' · documented tools';drawing.append(title);const trunkX=narrow?22:width/2;drawing.append(svg('path',{d:`M ${trunkX} ${height-28} C ${trunkX-8} ${height*.7}, ${trunkX+9} ${height*.35}, ${trunkX} 20`,class:'eco-trunk',fill:'none'}));scene.append(drawing);
      rows.forEach((row,i)=>{const level=narrow?i:Math.floor(i/2);const cy=level*gap+58;const side=narrow?'right':i%2?'right':'left';const box=el('div','eco-leaf eco-kind-'+kind(row.relationship));box.style.top=(level*gap+15)+'px';box.classList.add('eco-leaf-'+side);if(narrow)box.classList.add('eco-leaf-narrow');
        const names=components[row.name]||[row.name];const active=selectedTool&&names.includes(selectedTool);box.classList.toggle('eco-leaf-active',!!active);
        const twigEnd=narrow?48:side==='left'?width/2-24:width/2+24;const offset=side==='left'?-15:15;const branch=svg('path',{d:`M ${trunkX} ${cy+28} C ${trunkX+offset} ${cy+32}, ${twigEnd-offset} ${cy}, ${twigEnd} ${cy}`,fill:'none',class:'eco-branch eco-branch-'+kind(row.relationship)});drawing.append(branch);
        const pick=el('button','eco-tool-button',row.name);pick.type='button';pick.setAttribute('aria-pressed',String(!!active));pick.addEventListener('click',()=>{selectedTool=names.includes(selectedTool)?'':names[0];toolSelect.value=selectedTool;render()});box.append(pick);
        box.append(el('div','eco-relationship',row.relationship));box.append(el('div','eco-categories',(row.categories||[]).map(c=>categoryNames[c]||c).join(' · ')));
        const source=link('Tool / source account ↗',row.url);source.className='eco-source';box.append(source);scene.append(box);
      });
      const stem=el('div','eco-stem-label',p.name);stem.style.left=trunkX+'px';stem.style.top=(height-28)+'px';if(narrow)stem.classList.add('eco-stem-narrow');scene.append(stem);
    }
    function render(){
      const p=profiles.find(x=>x.id===personId)||profiles[0],rows=inventory[p.id]||[];caption.replaceChildren();caption.append(el('h2','','Branches from '+p.name),el('p','visual-note','Research checked '+p.checked+' · source/practice dates remain attached to each relationship.'));
      renderTree(p,rows);buttons.forEach((b,id)=>{b.classList.toggle('eco-connected',!!selectedTool&&memberships(id,selectedTool).length>0);b.setAttribute('aria-pressed',String(id===p.id));const match=selectedTool?memberships(id,selectedTool):[];b.setAttribute('aria-label',b.textContent+(match.length?' — documented connection to '+selectedTool:''))});
      selectedInfo.replaceChildren();if(selectedTool){const connected=profiles.filter(x=>memberships(x.id,selectedTool).length);selectedInfo.append(el('h2','','Grafts and origins · '+selectedTool));selectedInfo.append(el('p','visual-note','These are documented relationships, not a shared current configuration. Dates and roles can differ.'));
        const list=el('div','eco-connections');connected.forEach(cp=>{const item=el('article','eco-connection');item.append(link(cp.name,ctx.profileUrl(cp,'C09')));memberships(cp.id,selectedTool).forEach(r=>{item.append(el('p','eco-relationship',r.relationship),el('p','',r.purpose),link('Documented tool / account ↗',r.url))});list.append(item)});selectedInfo.append(list);
      }else{selectedInfo.append(el('h2','','Scope of this trunk'));const d=ctx.dimension(p,'D09');selectedInfo.append(el('p','',d?d.position:p.tools||'A complete personal tool inventory is not established.'));if(d?.qualification)selectedInfo.append(el('p','visual-note',d.qualification));selectedInfo.append(ctx.evidenceLinks(p,['D09','D08']));}
    }
    personSelect.addEventListener('change',()=>{personId=personSelect.value;if(selectedTool&&!memberships(personId,selectedTool).length){selectedTool='';toolSelect.value=''}render()});toolSelect.addEventListener('change',()=>{selectedTool=toolSelect.value;if(selectedTool&&!memberships(personId,selectedTool).length){const next=profiles.find(p=>memberships(p.id,selectedTool).length);if(next){personId=next.id;personSelect.value=personId}}render()});let previousWidth=0;new ResizeObserver(()=>{const w=Math.round(scene.clientWidth);if(w!==previousWidth){previousWidth=w;render()}}).observe(scene);render();
  };
})();
