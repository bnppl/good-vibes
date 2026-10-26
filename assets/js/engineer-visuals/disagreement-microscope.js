(function () {
  'use strict';
  window.EngineerVisuals = window.EngineerVisuals || {};
  window.EngineerVisuals['disagreement-microscope'] = function (ctx) {
    const {root, el, link, dimension, profileUrl, evidenceLinks} = ctx;
    const profiles = [...ctx.profiles].sort((a,b) => a.name.localeCompare(b.name));
    const byId = new Map(profiles.map(p => [p.id,p]));
    const questions = {
      timing: {
        title: 'Must tests come first?', ids:['D04','D02'], defaults:['dave-farley','peter-steinberger',''],
        lanes:['Before implementation','After implementation','Another verification emphasis','Cadence not established'],
        lens:'Compare the order of checks, then ask whether they exercise the same boundary. Acceptance contracts, unit tests, ML evaluation and production observations are different things.',
        readings: {
          'dave-farley':[0,'Human-owned failing acceptance examples','25 October 2026 proposal'],
          'kent-beck':[0,'Test-first; reference checks','Specific BPlusTree3 repository'],
          'simon-willison':[0,'Red/green plus exploratory execution','Pattern guidance and project accounts'],
          'birgitta-bockeler':[2,'Human-owned checks versus agent-internal TDD','Limited August 2026 exploration'],
          'addy-osmani':[2,'Characterise uncertain legacy behaviour','No universal TDD cadence established'],
          'gojko-adzic':[2,'Worker, merged-work and final checks','October 2026 artifact; not executed'],
          'martin-fowler':[2,'Executable feedback and actual outcomes','Historical guidance; current stack unknown'],
          'armin-ronacher':[3,'Current test-first policy unknown','July 2025 dissatisfaction is task-specific'],
          'steve-yegge':[2,'Recurring inspection and tests','December 2025 guidance; no universal cadence'],
          'gene-kim':[0,'Expectations/tests before generation','Joint September 2025 guidance; not strict unit TDD'],
          'harper-reed':[0,'TDD, linting and pre-commit checks','Historical May 2025 guidance'],
          'matt-pocock':[0,'Red-green at human-agreed public seams','Pinned October 2026 instructions'],
          'robert-c-martin':[2,'Challenge assertions with mutation checks','2016 guidance; separate 2026 public artifacts'],
          'peter-steinberger':[1,'Tests after feature implementation','October 2025 personal account'],
          'david-heinemeier-hansson':[3,'Current coding-agent test cadence unknown','May 2024 testing views are historical'],
          'andrej-karpathy':[2,'Fixed baseline/evaluator for an ML loop','March 2026 autoresearch artifact'],
          'charity-majors':[2,'Inspect operational behaviour too','March 2026 production guidance'],
          'chip-huyen':[2,'Human assessment of AI-product judgments','January 2025 AI-application guidance'],
          'hamel-husain':[2,'Objective checks; validated subjective judges','AI-product evaluation, not personal unit TDD'],
          'jason-liu':[2,'Retrieval and answer-quality relationships','May 2025 RAG evaluation framing']
        }
      },
      review: {
        title:'How much code should people read?', ids:['D06','D04'], defaults:['simon-willison','robert-c-martin','peter-steinberger'],
        lanes:['Code/design review named','Selective or above-code oversight','Responsibility / another review target','Reading policy not established'],
        lens:'Responsibility, inspecting selected code, reviewing outputs and reading every generated line are not interchangeable. None of these categories means “review everything” or “review nothing”.',
        readings: {
          'dave-farley':[1,'Inspect code when risk warrants it','Human intent ownership retained'],
          'kent-beck':[0,'Inspect design; intervene off-course','June 2025 augmented-coding account'],
          'simon-willison':[0,'Author owns initial review; use walkthroughs','Responsibility for collaborator-ready changes'],
          'birgitta-bockeler':[2,'Scrutinise test quality and consequences','Not a universal line-by-line requirement'],
          'addy-osmani':[2,'Human acceptance, audit and explanation','Review depth depends on context'],
          'gojko-adzic':[1,'Supervise consequential decisions throughout','Not permission to discard all code review'],
          'martin-fowler':[0,'Review code, tests and other feedback','Conceptual guidance, not an observed full session'],
          'armin-ronacher':[2,'Humans/organisations retain responsibility','Immutable reading policy not established'],
          'steve-yegge':[0,'Human diff review retained in the short term','August 2026 future prediction kept separate'],
          'gene-kim':[2,'Human accountability under delegation','January 2026 interview; not a reading rule'],
          'harper-reed':[3,'Verification required; full review unobserved','Published instructions do not prove execution'],
          'matt-pocock':[2,'Separate standards/specification review; human QA','Published review design; not every human reading every line'],
          'robert-c-martin':[1,'Mostly above-code; occasional inspection','24 September 2026 interview-page account'],
          'peter-steinberger':[1,'Selected code; architectural understanding','December 2025 self-report'],
          'david-heinemeier-hansson':[1,'Outcome review and agent guidance','January 2026 self-report; checklist unknown'],
          'andrej-karpathy':[2,'Human judgment and oversight','Endorsed April 2026 account; checklist unknown'],
          'charity-majors':[2,'Human ownership; validation and review differ','September 2026 company values'],
          'chip-huyen':[2,'Review AI outputs and evaluators','AI-product quality, not source-line review'],
          'hamel-husain':[2,'Domain experts inspect data/evaluator','Product quality, not a complete code-review policy'],
          'jason-liu':[2,'Name the product quality being judged','May 2024 feedback guidance; private ritual unknown']
        }
      },
      specification: {
        title:'What counts as a specification?', ids:['D02','D04'], defaults:['dave-farley','armin-ronacher','matt-pocock'],
        lanes:['Executable contract emphasised','Conversation / inspectable artifacts','Product criteria / format comparison','Current format not established'],
        lens:'A conversation can create an executable contract; a document can guide a test. These are not mutually exclusive formats unless an author actually makes that claim.',
        readings: {
          'dave-farley':[0,'Human-owned executable examples','Acceptance contract'],
          'kent-beck':[1,'Next-test plan','Published June 2025 instructions'],
          'simon-willison':[1,'Conversation and live preview','One October 2026 production feature'],
          'birgitta-bockeler':[2,'Compare spec-first / anchored / as-source','Tool trials; maintenance remains open'],
          'addy-osmani':[1,'Evolving specification and scoped context','Prose still connected to executable checks'],
          'gojko-adzic':[1,'Inspectable decisions and approvable plans','September 2025 trial; October 2026 factory'],
          'martin-fowler':[1,'Concrete scenarios and context interview','Recommendation and trial have separate scopes'],
          'armin-ronacher':[1,'Conversation and editable Markdown handoff','December 2025 preference; not rejection of executable specs'],
          'steve-yegge':[1,'Conversation/design to structured work','August 2026 Wheelhouse account'],
          'gene-kim':[1,'Requirements, examples and context','Joint October 2025 guidance'],
          'harper-reed':[1,'Clarify idea, then prompt plan','February 2025 greenfield workflow'],
          'matt-pocock':[1,'Interview versus recording settled decisions','August 2026; small work may skip the spec'],
          'robert-c-martin':[1,'Higher-level reviewable source','Joint Robert/Justin outline; paid demo unviewed'],
          'peter-steinberger':[1,'Conversational intent; plan uncertainty','October 2025 personal approach'],
          'david-heinemeier-hansson':[3,'Current specification format unknown','Proposed reward table is our adaptation'],
          'andrej-karpathy':[2,'Human specifications and oversight','Endorsed April 2026 account'],
          'charity-majors':[2,'Explicit required behaviour/commitments','June 2026 advocacy; not executable-spec-only'],
          'chip-huyen':[2,'Establish user need before choosing GenAI','January 2025 product discovery'],
          'hamel-husain':[2,'Inspect examples before subjective criteria','2025 guide / September 2026 trial'],
          'jason-liu':[2,'Separate information from capability gaps','January 2025 AI-product blueprint']
        }
      },
      delegation: {
        title:'How should agents be coordinated?', ids:['D07','D06'], defaults:['kent-beck','steve-yegge','matt-pocock'],
        lanes:['Published coordination / scoped workers','Supervised or bounded delegation','Contextual lesson / another target','Personal topology not established'],
        lens:'Published orchestrators, single-agent research loops, personal terminal sessions and criticism of one coordination experiment describe different scopes. Agent count is not an effectiveness measure.',
        readings: {
          'dave-farley':[1,'Implement within human-owned acceptance contracts','October 2026 proposal; private setup unknown'],
          'kent-beck':[2,'Coordination burden; prioritise desired outcomes','April 2026 Intent session; not all parallel work'],
          'simon-willison':[0,'Fresh contexts; independent tasks in parallel','Only when coordination costs justify it'],
          'birgitta-bockeler':[1,'Frequent human steering in brownfield reports','March 2025 accounts; private setup unknown'],
          'addy-osmani':[0,'Scoped workers, coordination and gates','March 2026 guidance; not every personal task'],
          'gojko-adzic':[0,'Deterministic worker/gate/check scheduling','October 2026 public artifact; not executed'],
          'martin-fowler':[3,'Current personal coordination unknown','Concepts do not establish a private swarm'],
          'armin-ronacher':[1,'Bounded investigations versus long-lived code','June 2026 account; task context matters'],
          'steve-yegge':[0,'Gas Town then private Wheelhouse','January and August 2026 accounts kept distinct'],
          'gene-kim':[2,'Pair/delegate by novelty and consequences','March 2025 solo guidance; private topology unknown'],
          'harper-reed':[2,'Multiple remote terminal sessions','January 2026; not proof of orchestration'],
          'matt-pocock':[0,'Dependency-ready tickets in worktrees','October 2026 published design'],
          'robert-c-martin':[2,'Reports moving away from custom harness','September 2026; published SwarmForge kept separate'],
          'peter-steinberger':[0,'Human-steered parallel terminal agents','October 2025; not proof of conflict-free work'],
          'david-heinemeier-hansson':[1,'Supervised delegation','January 2026; not unreviewed professional work'],
          'andrej-karpathy':[1,'One bounded ML experiment agent','March 2026 artifact; not a private full workflow'],
          'charity-majors':[3,'Current personal topology unknown','Company note by another author is not private practice'],
          'chip-huyen':[2,'Conceptual environment/tool/planning framework','January 2025 AI agents; personal topology unknown'],
          'hamel-husain':[2,'Agents assist discovery and evaluator work','Joint eval skills; not an observed private fleet'],
          'jason-liu':[2,'Isolate noisy reads in subagents','Context design; not a complete personal topology']
        }
      }
    };
    let questionId='timing';
    let selected=[...questions.timing.defaults];
    let showAll=false;
    root.classList.add('view-disagreement-microscope');
    root.append(el('p','visual-note','Interpretive grouping of documented positions. Lane position is categorical, not a score. No direct rebuttal between these engineers is established by this view.'));
    const controls=el('div','visual-controls');
    function field(labelText, select) { const f=el('div','visual-field');const label=el('label','',labelText);label.htmlFor=select.id;f.append(label,select);controls.append(f); }
    const questionSelect=el('select','visual-select');questionSelect.id='microscope-question';
    Object.entries(questions).forEach(([id,q])=>{const o=el('option','',q.title);o.value=id;questionSelect.append(o)});field('Question under the lens',questionSelect);
    const personSelects=[];
    for(let i=0;i<3;i++){
      const select=el('select','visual-select');select.id='microscope-person-'+i;
      if(i===2){const none=el('option','','No third engineer');none.value='';select.append(none)}
      profiles.forEach(p=>{const o=el('option','',p.name);o.value=p.id;select.append(o)});
      select.value=selected[i];select.addEventListener('change',()=>{selected[i]=select.value;showAll=false;render()});field(i===2?'Optional third engineer':'Engineer '+(i+1),select);personSelects.push(select);
    }
    const allButton=el('button','','Show all twenty');allButton.type='button';allButton.setAttribute('aria-pressed','false');allButton.addEventListener('click',()=>{showAll=!showAll;render()});controls.append(allButton);root.append(controls);
    const lens=el('p','microscope-lens');root.append(lens);
    const map=el('section','microscope-map');map.setAttribute('aria-label','Categorical map of documented approaches');root.append(map);
    const verdict=el('section','microscope-verdict');verdict.setAttribute('aria-live','polite');root.append(verdict);
    const evidence=el('section','microscope-evidence');root.append(evidence);
    function chosenProfiles(){return showAll?profiles:[...new Set(selected.filter(Boolean))].map(id=>byId.get(id)).filter(Boolean)}
    function finding(q, chosen){
      if(chosen.length<2)return ['Choose a second perspective','A single source can show a method; it cannot establish a disagreement between people.'];
      const reads=chosen.map(p=>q.readings[p.id]);
      if(reads.some(r=>r[0]===3))return ['Insufficient evidence for a same-scope disagreement','At least one selected profile lacks the relevant current policy. Unknown is not an opposing position. Compare the documented statements below without filling that gap.'];
      if(chosen.some(p=>p.focus==='ai-systems')&&chosen.some(p=>p.focus==='coding-workflows'))return ['Different targets before different opinions','These sources include AI-product quality and coding-workflow practice. A product evaluator, a software acceptance test and a human code-review policy answer different questions.'];
      if(questionId==='timing'&&reads.some(r=>r[0]===0)&&reads.some(r=>r[0]===1))return ['Documented sequence contrast','Some sources put checks before implementation; another describes tests after feature work. That is a real method contrast, but acceptance and unit boundaries can differ. It is not evidence of a direct rebuttal or universal incompatibility.'];
      if(new Set(reads.map(r=>r[0])).size===1)return ['Overlap in documented emphasis','The selected positions share a broad category. Their exact test level, project stakes, dates and ownership can still differ; shared placement does not make the approaches identical.'];
      return ['Different methods or contexts','The cache supports distinct emphases or prescriptions. The lane difference alone does not prove an explicit disagreement: compare the specific practice, target, date and evidence type.'];
    }
    function render(){
      const q=questions[questionId],chosen=chosenProfiles();
      questionSelect.value=questionId;personSelects.forEach((s,i)=>s.value=selected[i]);allButton.setAttribute('aria-pressed',String(showAll));allButton.textContent=showAll?'Return to selected engineers':'Show all twenty';
      lens.textContent=q.lens;map.replaceChildren();map.setAttribute('aria-label',q.title+' — four non-ranked method categories');
      q.lanes.forEach((lane,index)=>{
        const section=el('section','microscope-lane microscope-lane-'+index);section.append(el('h2','',lane));
        const members=chosen.filter(p=>q.readings[p.id][0]===index);
        if(!members.length)section.append(el('p','microscope-empty','No selected position in this category'));
        members.forEach(p=>{
          const r=q.readings[p.id],mark=el('article','microscope-position');
          const head=link(p.name,profileUrl(p));head.className='microscope-name';
          mark.append(head,el('p','microscope-stance',r[1]),el('p','microscope-scope',r[2]));
          section.append(mark);
        });map.append(section);
      });
      const [title,explanation]=finding(q,chosen);verdict.replaceChildren(el('h2','',title),el('p','',explanation));
      const classifications=el('div','microscope-classification');
      classifications.append(el('span','visual-chip','Method contrast: inspect exact statements'),el('span','visual-chip','Context: dates and targets retained'),el('span','visual-chip','Direct rebuttal: not established'));verdict.append(classifications);
      evidence.replaceChildren(el('h2','','Read the positions without the grouping'));
      chosen.forEach(p=>{
        const details=el('details','microscope-source');
        details.append(el('summary','',p.name+' · '+(p.focus==='ai-systems'?'AI systems':p.focus==='mixed'?'Mixed scope':'Coding workflows')));
        q.ids.forEach(id=>{const d=dimension(p,id);if(!d)return;const block=el('div','microscope-claim');block.append(el('h3','',d.title),el('p','',d.position));if(d.qualification)block.append(el('p','visual-note',d.qualification));block.append(evidenceLinks(p,[id]));details.append(block)});
        evidence.append(details);
      });
    }
    questionSelect.addEventListener('change',()=>{questionId=questionSelect.value;selected=[...questions[questionId].defaults];showAll=false;render()});
    render();
  };
})();
