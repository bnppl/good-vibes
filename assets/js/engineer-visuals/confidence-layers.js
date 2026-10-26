(function () {
  'use strict';
  window.EngineerVisuals = window.EngineerVisuals || {};
  window.EngineerVisuals['confidence-layers'] = function (ctx) {
    const {root, profiles, el, link, dimension, profileUrl, evidenceLinks} = ctx;
    const layers = [
      {id:'structure', name:'Types & lint', icon:'code-2', question:'What catches structural mistakes before behaviour is exercised?'},
      {id:'unit', name:'Unit / design tests', icon:'code-2', question:'What tests provide local design feedback, and what boundary do they actually exercise?'},
      {id:'behaviour', name:'Behaviour checks', icon:'shield-check', question:'Who decides the expected behaviour, and which checks observe it?'},
      {id:'exploration', name:'Exploratory execution', icon:'terminal', question:'Is the real behaviour exercised beyond the automated suite?'},
      {id:'challenge', name:'Challenge the evidence', icon:'flask-conical', question:'What can expose a weak test, mistaken reviewer or unreliable evaluator?'},
      {id:'review', name:'Human review & ownership', icon:'book-open', question:'What does a person remain responsible for understanding or deciding?'},
      {id:'production', name:'Production observation', icon:'activity', question:'What feedback comes from the deployed product or live system?'},
      {id:'ai', name:'AI output evaluation', icon:'flask-conical', question:'How are model, retrieval or research outcomes judged? This is distinct from software unit TDD.'}
    ];
    function record(text, owner, kind, ids, scope) { return {text, owner, kind, ids, scope}; }
    const notes = {
      'dave-farley': {
        unit:record('Unit-level design feedback','Test ownership varies','Stated',['D04'],'Acceptance-first behaviour and unit-level design feedback have separate roles; the cache does not make every test human-authored.'),
        behaviour:record('Failing acceptance examples','Human-owned contract','Stated',['D04'],'Human-owned examples drive implementation. The common reward exercise is an adaptation, not a feature Farley was observed implementing.'),
        challenge:record('Mutation testing','Challenge test sensitivity','Stated',['D04'],'Mutation checks challenge assertions; surviving mutants and missing requirements still need judgment.'),
        review:record('Intent and risk-based inspection','Human responsibility','Stated',['D06'],'Owning intent does not establish that every generated line can safely go unread.')
      },
      'kent-beck': {
        structure:record('Cargo formatting checks','Published project rules','Artifact',['D09'],'BPlusTree3 instructions name cargo fmt; this is project-specific tooling, not a complete current private stack.'),
        behaviour:record('Test-first increments','Steered by a test plan','Artifact',['D04'],'BPlusTree3 and published test-plan instructions document a sequence of test-first decisions; the research did not run the repository.'),
        challenge:record('Reference comparisons','Published project rules','Artifact',['D04'],'Reference implementations provide an additional comparison in BPlusTree3; this is not a universal policy for every project.'),
        review:record('Intervene when work goes off course','Human design judgment','Historical',['D06'],'The June 2025 self-report describes inspecting design and intervening. A complete current review policy is not established.')
      },
      'simon-willison': {
        behaviour:record('Red / green tests','Agent execution; human ownership','Stated',['D04'],'The guide advocates red/green work, but a green suite does not establish every requirement.'),
        exploration:record('Exercise actual behaviour','Agent-assisted exploration','Stated',['D04','D09'],'Manual-testing guidance includes exploratory execution and browser tools; their use varies by project.'),
        review:record('Author review and walkthroughs','Author owns the result','Stated',['D06'],'Authors own the initial review; explanations can help recover understanding, not substitute for it.')
      },
      'birgitta-bockeler': {
        structure:record('Types, lint and dependency rules','Configured experiment sensors','Experiment',['D09'],'Named sensors include type checking, ESLint, Semgrep and dependency-cruiser in particular experiments, not a universal private stack.'),
        behaviour:record('Human checks vs agent-loop TDD','Ownership explicitly compared','Experiment',['D04'],'The August 2026 limited greenfield evaluation distinguishes human-owned tests and review checkpoints from TDD entirely within the agent loop.'),
        challenge:record('Mutation and quality scrutiny','Human scrutiny retained','Experiment',['D04','D09'],'Mutation testing and LLM-based quality judgment appear in scoped evaluations. Imperfect adherence and judge limitations remain.'),
        review:record('Keep responsibility for test quality','Human responsibility','Stated',['D06'],'Operational consequences guide scrutiny; this does not prescribe manually inspecting every generated line.')
      },
      'addy-osmani': {
        behaviour:record('Characterise legacy behaviour','Review against original intent','Stated',['D04'],'Characterization and original requirements matter in uncertain brownfield code. No mandatory TDD cadence is established.'),
        exploration:record('Browser/runtime debugging evidence','Dated personal workflow','Reported',['D09'],'January 2026 tool accounts include Chrome DevTools MCP; web debugging evidence is not a native-app testing harness.'),
        review:record('Acceptance, audit and explanation','Human answerability','Stated',['D06'],'Humans retain acceptance responsibility while agents can perform inner-loop work.')
      },
      'gojko-adzic': {
        structure:record('Edit-time ESLint hook','Published feedback component','Artifact',['D09'],'The factory hook is scoped to eligible edits and configuration. It was inspected, not executed or security-audited.'),
        behaviour:record('Worker checks and merged-work gates','Published worker / gate roles','Artifact',['D04','D10'],'The pinned October 2026 factory describes local checks, integration gates and a broader final check. It is not a full private deployment pipeline.'),
        challenge:record('Try to refute completion','Published final-check role','Artifact',['D04'],'The final role is intended to challenge completion claims. Its effectiveness was not reproduced in a runtime trial.'),
        review:record('Keep consequential decisions visible','Human supervision','Stated',['D06'],'Supervision is not merely a final inspection, and the source does not establish abandoning all code review.')
      },
      'martin-fowler': {
        behaviour:record('Self-testing code and real check outcomes','General engineering guidance','Historical',['D04'],'Historical self-testing guidance and August 2025 agent-success warnings do not establish an exact modern personal test stack.'),
        review:record('Review code, tests and feedback','Human responsibility','Stated',['D06'],'This is conceptual agentic-engineering guidance, not an observed complete private session.')
      },
      'armin-ronacher': {
        review:record('Responsibility for tool actions','People and organisations','Stated',['D06'],'Human responsibility is documented. The July 2025 dissatisfaction with test generation is not evidence of non-use of testing, or a current test-first policy.')
      },
      'steve-yegge': {
        behaviour:record('Recurring tests and merge gates','Guidance / public tool design','Stated',['D04','D10'],'December 2025 guidance advocates recurring tests; October public Gas Town documentation describes verification gates. Neither establishes his complete current private pipeline.'),
        challenge:record('Recurring AI inspection','AI-assisted inspection','Stated',['D04'],'AI inspection recurs in the guidance; a universal test-first cadence or independent contract ownership is not established.'),
        review:record('Retain human diff review for now','Time-bound human review','Stated',['D06'],'His August 2026 account predicts less diff review in future but explicitly retains it in the short term.')
      },
      'gene-kim': {
        behaviour:record('Expectations and tests before generation','Joint Kim / Yegge guidance','Historical',['D04'],'The September 2025 coauthored loop recommends expectations, tests and verification. It does not establish strict unit-level TDD for every personal change.'),
        review:record('Accountability survives delegation','Human accountability','Reported',['D06'],'The January 2026 interview retains accountability; it is not a universal line-by-line review rule.')
      },
      'harper-reed': {
        structure:record('Lint and pre-commit feedback','Published workflow guidance','Historical',['D04'],'May 2025 guidance includes linting and checks. These are dated recommendations, not an October 2026 workstation inventory.'),
        behaviour:record('TDD and executable checks','Agent-written tests need scrutiny','Historical',['D04'],'The reported success is anecdotal. A present universal test-ownership arrangement is not established.'),
        review:record('Verify before claiming completion','Published agent instructions','Artifact',['D06'],'October public instructions describe intended behaviour, not proof of compliance in a live session.')
      },
      'matt-pocock': {
        behaviour:record('Red / green at public seams','Human-agreed test boundaries','Artifact',['D04'],'The October skill places red/green at agreed public seams and moves refactoring to review. It is not a claim that the instructions were executed in this research.'),
        challenge:record('Separate standards and spec review','Published reviewer contexts','Artifact',['D06'],'Distinct review contexts at a fixed diff point are documented; separation alone does not establish independent correctness.'),
        review:record('Human QA and explicit review','Human responsibility retained','Artifact',['D06','D10'],'The published implementation design runs checks and review before committing. A complete personal release policy is not established.')
      },
      'robert-c-martin': {
        behaviour:record('Gherkin acceptance components','Published SwarmForge instructions','Artifact',['D09'],'The public engineering artifact describes acceptance and quality components. It was inspected, not executed, and is not proof of current personal harness use.'),
        challenge:record('Mutation checks challenge coverage','Historical authored explanation','Historical',['D04'],'The June 2016 article explains why coverage alone is insufficient. Missing requirements and equivalent mutants still limit confidence.'),
        review:record('Above-code supervision; some inspection','Dated personal account','Reported',['D06'],'The September 2026 interview-page account is not a universal no-source-reading policy; his later move away from a custom harness remains separate evidence.')
      },
      'peter-steinberger': {
        behaviour:record('Tests after implementation','Same-context agent workflow','Reported',['D04'],'The October 2025 workflow asks for tests after building. This is executable feedback, not test-first development.'),
        challenge:record('Oracle second opinions','Another model receives context','Artifact',['D09'],'The public Oracle integration provides a second opinion. Agreement between models does not establish correctness or independent product intent.'),
        review:record('Selected code; architectural grasp','Human selective review','Reported',['D06'],'The December 2025 self-report retains architectural understanding; it does not license skipping appropriate team review.')
      },
      'david-heinemeier-hansson': {
        unit:record('Model / controller checks','Historical Rails project judgment','Historical',['D04'],'May 2024 preferences are not a current agent TDD cadence. His April 2014 system-test preference differs.'),
        behaviour:record('Limited browser smoke checks','Historical project judgment','Historical',['D04'],'The 2024 position discusses limited smoke coverage; it is not proof of an October 2026 private pipeline.'),
        review:record('Outcome review and agent guidance','Supervised delegation','Reported',['D06'],'The January 2026 account describes outcome review; the current detailed checklist is unknown.')
      },
      'andrej-karpathy': {
        challenge:record('Keep baseline and evaluator fixed','Published experiment boundaries','Artifact',['D04'],'The March 2026 ML instructions exclude evaluator edits. Instructions do not demonstrate filesystem-enforced protections.'),
        review:record('Specifications and oversight','Human judgment retained','Stated',['D06'],'The endorsed April 2026 account was AI-generated and checked by Karpathy, not an independently verified raw transcript.'),
        ai:record('Bounded autoresearch evaluation','Fixed ML baseline / evaluator','Artifact',['D04'],'This is a published ML experiment design, not a software unit-TDD prescription or reproduced research result.')
      },
      'charity-majors': {
        review:record('Own the work and validate it','Published company values','Stated',['D06'],'September 2026 values separate review and automated validation. They do not establish a universal personal line-by-line policy.'),
        production:record('Observe deployed behaviour','Operational engineering guidance','Stated',['D04','D09','D10'],'March 2026 guidance extends pre-production checks with instrumented production observation; it is not a complete private agent topology.')
      },
      'chip-huyen': {
        review:record('Human assessment of AI outputs','Product-quality judgment','Historical',['D04','D06'],'January 2025 guidance concerns application outputs and evaluators, not manually reading every line written by an agent.'),
        production:record('Monitored / staged ML updates','Model-service lifecycle guidance','Historical',['D10'],'The 2022 guidance concerns model and prediction services, not a current personal Git or release configuration.'),
        ai:record('Validate model/product judgments','Human assessment','Historical',['D04'],'The core guidance is from January 2025. No newer complete personal coding-agent test policy is established.')
      },
      'hamel-husain': {
        challenge:record('Held-out judge validation','Domain labels and test cases','Stated',['D04','D08'],'Objective code checks and subjective judges need different validation. Held-out examples challenge an evaluator, not all possible failures.'),
        review:record('Inspect data and quality criteria','Domain experts own criteria','Stated',['D06'],'September 2026 trial and earlier guidance concern product judgment, not a complete line-by-line code review policy.'),
        production:record('Sample production evaluation','Joint September 2026 guidance','Stated',['D10'],'Regression before release and sampled production evaluation are separate. A private deployment/rollback setup is not established.'),
        ai:record('Objective checks; validated judges','Human labels and held-out cases','Stated',['D04'],'AI-product evaluation includes objective code evaluators; this is not a universal personal coding-agent test-first policy.')
      },
      'jason-liu': {
        review:record('Name the quality being judged','User / product feedback','Historical',['D06'],'May 2024 feedback guidance is not a documented personal code-review ritual.'),
        production:record('Evaluation / production flywheel','AI-product lifecycle guidance','Historical',['D10'],'The August 2024 playbook links observed product behaviour to iteration; current personal CI/deployment details remain unknown.'),
        ai:record('Retrieval and answer relationships','Published RAG evaluation framework','Historical',['D04','D09'],'May 2025 product evaluation and inspected Instructor examples do not establish a unit-TDD policy or proven judge accuracy.')
      }
    };
    root.classList.add('view-confidence-layers');
    if (!profiles.length) { root.append(el('p','visual-note','No cached profiles are available.')); return; }
    let selected = ['dave-farley','hamel-husain',''].map((id,i)=>profiles.some(p=>p.id===id)?id:(i===0?profiles[0].id:''));
    let activeLayer = 'behaviour';
    const intro=el('p','visual-note','Interpretive cross-section of documented evidence. Every building has the same eight floors. Unfilled floors mean “not established in this cache”, never “not used”. Height, colour and floor count are not quality scores.');
    const controls=el('div','visual-controls');
    const legend=el('div','confidence-legend');
    legend.append(el('span','confidence-known-key','● Documented layer'),el('span','confidence-unknown-key','? Not established'));
    const buildings=el('div','confidence-buildings');
    const detail=el('section','visual-detail confidence-detail');detail.setAttribute('aria-live','polite');
    root.append(intro,controls,legend,buildings,detail);
    function cachedProfile(id) { return profiles.find(p=>p.id===id); }
    function badge(item) { return item ? item.kind : '? Unknown'; }
    for(let slot=0;slot<3;slot++){
      const label=el('label','visual-field','Compare '+String.fromCharCode(65+slot));
      const select=el('select','visual-select');select.id='confidence-choice-'+slot;
      if(slot>0){const option=el('option','','No additional profile');option.value='';select.append(option);}
      profiles.forEach(profile=>{const option=el('option','',profile.name);option.value=profile.id;select.append(option);});
      select.value=selected[slot];select.addEventListener('change',()=>{selected[slot]=select.value;render();});label.append(select);controls.append(label);
    }
    function makeFloor(profile,layer){
      const item=notes[profile.id]?.[layer.id];
      const floor=el('button','confidence-floor '+(item?'is-documented':'is-unknown'));
      floor.type='button';floor.dataset.layer=layer.id;floor.setAttribute('aria-pressed',String(layer.id===activeLayer));
      floor.setAttribute('aria-label',profile.name+' — '+layer.name+': '+(item?item.text+'; '+item.kind+'; '+item.owner:'not established in this cache'));
      const top=el('span','confidence-floor-label');const icon=el('i');icon.setAttribute('data-lucide',layer.icon);icon.setAttribute('aria-hidden','true');top.append(icon,document.createTextNode(layer.name));
      floor.append(top,el('span','confidence-floor-method',item?item.text:'? Not established'),el('span','confidence-floor-owner',item?item.owner:'Evidence gap, not non-use'));
      if(item)floor.append(el('span','confidence-evidence-kind',badge(item)));
      floor.addEventListener('click',()=>{activeLayer=layer.id;root.querySelectorAll('.confidence-floor').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.layer===activeLayer)));renderDetail();});
      return floor;
    }
    function render(){
      buildings.replaceChildren();const list=selected.map(cachedProfile).filter(Boolean);buildings.style.setProperty('--confidence-columns',String(list.length));
      list.forEach(profile=>{
        const building=el('article','confidence-building');const head=el('header','confidence-roof');head.append(link(profile.name,profileUrl(profile)),el('span','confidence-focus',profile.focus==='ai-systems'?'Building AI systems':profile.focus==='mixed'?'Mixed coding / AI-system evidence':'Coding with AI'),el('span','confidence-checked','Cache checked '+profile.checked));building.append(head);
        const section=el('div','confidence-section');section.setAttribute('aria-label',profile.name+' — eight equal-height evidence floors');layers.forEach(layer=>section.append(makeFloor(profile,layer)));building.append(section);buildings.append(building);
      });renderDetail();ctx.icons();
    }
    function renderDetail(){
      detail.replaceChildren();const layer=layers.find(x=>x.id===activeLayer);detail.append(el('h2','',layer.name),el('p','confidence-question',layer.question));
      const grid=el('div','confidence-evidence-grid');selected.map(cachedProfile).filter(Boolean).forEach(profile=>{
        const item=notes[profile.id]?.[layer.id];const column=el('article','confidence-evidence');column.append(el('h3','',profile.name));
        if(!item){column.append(el('p','confidence-unknown-detail','? This cross-section has no layer-specific attribution supported by the reviewed cache. This is an evidence gap, not a claim that '+profile.name+' avoids this technique.'),evidenceLinks(profile,['D04','D06','D09','D10']));}
        else{column.append(el('p','confidence-item-title',item.text),el('p','confidence-scope',item.kind+' · '+item.owner),el('p','',item.scope));
          item.ids.forEach(id=>{const d=dimension(profile,id);if(!d)return;const evidence=el('details','confidence-source');evidence.append(el('summary','',d.title+' — '+d.evidence),el('p','',d.position));if(d.qualification)evidence.append(el('p','visual-note',d.qualification));column.append(evidence);});column.append(evidenceLinks(profile,item.ids));}
        grid.append(column);
      });detail.append(grid);
    }
    render();
  };
})();
