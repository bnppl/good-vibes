/* Interpretive project-context lenses, grounded in the cached engineer profiles. */
window.EngineerVisuals = window.EngineerVisuals || {};
window.EngineerVisuals['project-landscape'] = function (ctx) {
  const {root, profiles, el, link, dimension, evidenceLinks} = ctx;
  const shell = el('section', 'view-project-landscape');
  root.append(shell);
  const scenarios = [
    {id:'prototype', title:'Disposable prototype', icon:'code-2', question:'What must we learn before we keep it?', anchor:'Name the experiment', delegation:'Keep the change disposable', proof:'Exercise the result; decide what to discard', detail:'Optimise for answering one question. Moving a promising prototype into a maintained product is a fresh acceptance decision.', people:['simon-willison','harper-reed','peter-steinberger','andrej-karpathy'], dimensions:['D02','D04','D06']},
    {id:'product', title:'Established product', icon:'shield-check', question:'What existing behaviour must survive?', anchor:'Discover existing behaviour', delegation:'Bound the change and review it', proof:'Check the requirement and regressions', detail:'Existing conventions, data and users constrain the change. A green suite still needs a credible observation boundary.', people:['addy-osmani','birgitta-bockeler','dave-farley','simon-willison'], dimensions:['D02','D04','D05']},
    {id:'platform', title:'Shared platform', icon:'git-branch', question:'Who else depends on this boundary?', anchor:'Agree the shared contract', delegation:'Coordinate ownership and integration', proof:'Check assembled behaviour, not only worker output', detail:'The proposed lens is shared interfaces and coordination. Public orchestration artifacts are useful examples; they do not prove a private platform deployment.', people:['gojko-adzic','matt-pocock','steve-yegge','robert-c-martin'], dimensions:['D02','D07','D10']},
    {id:'incident', title:'Production incident', icon:'activity', question:'What is actually happening to users?', anchor:'Observe the failing behaviour', delegation:'Keep intervention bounded', proof:'Verify the fix in the real operating boundary', detail:'Instrumentation and live behaviour complement pre-release checks. This is a proposed incident lens, not an attributed incident runbook.', people:['charity-majors','armin-ronacher','gene-kim','martin-fowler'], dimensions:['D04','D10','D12']},
    {id:'ai-app', title:'AI application', icon:'flask-conical', question:'What does a good answer mean here?', anchor:'Inspect representative failures', delegation:'Separate generation from judgment', proof:'Validate evaluators and monitor product outcomes', detail:'Quality includes model, retrieval and user judgments. Those evaluations do not establish a software coding-agent TDD policy.', people:['hamel-husain','chip-huyen','jason-liu','andrej-karpathy'], dimensions:['D02','D04','D10']},
    {id:'research', title:'Bounded research experiment', icon:'list-checks', question:'What may change, and what judges it?', anchor:'Fix the baseline and objective', delegation:'Bound the experiment loop', proof:'Retain comparable results and inspect the evaluator', detail:'A research loop needs a stable objective and interpretable results. One published ML experiment does not establish a general product-release method.', people:['andrej-karpathy','kent-beck','birgitta-bockeler','hamel-husain'], dimensions:['D04','D07','D12']}
  ];
  const lenses = {
    'simon-willison': {zones:['prototype','product'], note:'The cache separates experimental games from the 9 October 2026 production blog feature. Red/green checks, exercised behaviour and author responsibility remain documented emphases.', ids:['D02','D04','D06'], scope:'Dated project accounts and guide recommendations'},
    'birgitta-bockeler': {zones:['product','research'], note:'Supervised brownfield accounts and the August 2026 limited greenfield TDD evaluation answer different questions. The evaluation does not establish that TDD is ineffective in all contexts.', ids:['D04','D07','D12'], scope:'Dated experience and a limited exploratory evaluation'},
    'dave-farley': {zones:['product','platform'], note:'Human-owned executable acceptance examples offer a contract lens for a maintained product or shared interface. These scenario applications are ours; a complete private platform setup is not established.', ids:['D02','D04','D10'], scope:'Stated acceptance-contract guidance'},
    'kent-beck': {zones:['product','research'], note:'BPlusTree3 supplies a concrete test-first/reference-check project. His Intent account also exposes coordination costs. Neither establishes a universal deployment policy.', ids:['D04','D07','D10'], scope:'Inspected project instructions and dated experiments'},
    'addy-osmani': {zones:['product','platform'], note:'Brownfield guidance stresses characterising uncertain behaviour; orchestration guidance adds scoped ownership and integration gates. Both are useful lenses, not proof that every task uses a fleet.', ids:['D04','D07','D10'], scope:'Published brownfield and orchestration guidance'},
    'martin-fowler': {zones:['product','platform','incident'], note:'Scenario-led understanding, executable checks and verified integration provide transferable questions. The cache does not establish his current personal agent topology or an incident runbook.', ids:['D02','D04','D10'], scope:'General guidance and a context-interview trial'},
    'gojko-adzic': {zones:['product','platform'], note:'The public factory is based on Votito and exposes plans, worker checks, merged-work gates and a final challenge. The artifact was inspected, not executed or verified as a private deployment.', ids:['D02','D04','D07'], scope:'Published, inspected factory artifact'},
    'armin-ronacher': {zones:['product','incident','research'], note:'Bounded investigations and understandable long-lived code are different commitments in his June 2026 account. A related production-infrastructure account is not a complete coding-release policy.', ids:['D02','D07','D10'], scope:'Dated practitioner accounts; scenario transfer is interpretive'},
    'steve-yegge': {zones:['platform'], note:'Gas Town documentation exposes work coordination and merge/verification gates. Its public design must remain separate from the later private Wheelhouse account and any unreported deployment policy.', ids:['D07','D08','D10'], scope:'Public ecosystem design and separately dated personal account'},
    'gene-kim': {zones:['product','incident','platform'], note:'Pairing versus delegation is calibrated by novelty, capability and consequences. Joint Kim/Yegge verification guidance does not establish Kim’s private fleet or incident procedure.', ids:['D04','D07','D12'], scope:'Dated solo guidance and separately attributed joint material'},
    'charity-majors': {zones:['incident','product'], note:'March 2026 guidance extends verification into operational behaviour. The human owns the work, while review and automated validation have different roles. Personal coding-agent topology remains unknown.', ids:['D04','D06','D10'], scope:'Operational and organisational guidance'},
    'harper-reed': {zones:['prototype','product'], note:'February 2025 greenfield planning, May 2025 TDD/check guidance and later experiments have distinct dates. January 2026 remote sessions alone do not establish orchestration.', ids:['D02','D04','D07'], scope:'Dated workflow reports and published instructions'},
    'peter-steinberger': {zones:['prototype','product'], note:'The October 2025 workflow develops intent conversationally and requests tests after implementation. Parallel terminal work is a dated report, not a reason to call the method test-first.', ids:['D02','D04','D07'], scope:'Dated personal practice and current inspected artifacts'},
    'matt-pocock': {zones:['product','platform'], note:'Published skills connect human-agreed public seams to red/green checks and dispatch dependency-ready tickets in worktrees. The assembled branch still needs review. These are inspected instructions.', ids:['D02','D04','D07'], scope:'Published October 2026 skill design, not an executed fleet'},
    'robert-c-martin': {zones:['platform','product'], note:'SwarmForge’s coordination and handoff design supplies a platform lens. His September 2026 personal account reports moving away from the custom harness; publication is not continuing daily adoption.', ids:['D06','D07','D10'], scope:'Published artifact and later personal account kept separate'},
    'david-heinemeier-hansson': {zones:['product'], note:'January 2026 outcome review and supervised delegation provide a product lens. Historical testing views and a team Basecamp tooling announcement do not establish a complete current personal coding workflow.', ids:['D04','D06','D09'], scope:'Dated personal report, historical guidance and team artifact'},
    'andrej-karpathy': {zones:['prototype','ai-app','research'], note:'The March 2026 autoresearch artifact bounds an ML experiment and retains a baseline/evaluator boundary. The April 2025 MenuGen deployment account is a separate project. Neither establishes universal software unit TDD.', ids:['D04','D07','D10'], scope:'Named research artifact and separately dated app account'},
    'chip-huyen': {zones:['ai-app'], note:'Product need and human assessment of AI quality are central in the cached guidance. Core evaluation material is January 2025 and earlier; a newer private coding-agent workflow is not established.', ids:['D02','D04','D10'], scope:'Historical AI-product and ML-system guidance'},
    'hamel-husain': {zones:['ai-app','research'], note:'Objective code checks and subjective judges require different validation. September 2026 guidance distinguishes regression checks before release from sampled production evaluation.', ids:['D04','D06','D10'], scope:'AI-product evaluation, not a universal coding-agent recipe'},
    'jason-liu': {zones:['ai-app','platform'], note:'Component diagnosis, faceted context and the production feedback flywheel offer an AI-product lens. Applying the context/interface ideas to a shared platform is our adaptation, not evidence of a private platform deployment.', ids:['D04','D08','D10'], scope:'Dated RAG/product guidance; platform transfer is interpretive'}
  };
  let currentScenario = 'product';
  let currentPerson = profiles.find(p => p.id === 'addy-osmani')?.id || profiles[0]?.id;
  const note = el('p','visual-note','Interpretive adaptation · scenario connections are comparison lenses, not verified suitability, risk scores or a ranking.');
  shell.append(note);
  const controls = el('div','visual-controls');
  const personField = el('label','visual-field','Project lens through an engineer');
  const personSelect = el('select','visual-select');
  personSelect.setAttribute('aria-label','Choose engineer for project-context lens');
  profiles.forEach(p => { const o=el('option','',p.name);o.value=p.id;personSelect.append(o); });
  personSelect.value=currentPerson;personField.append(personSelect);controls.append(personField);
  shell.append(controls);
  const heading=el('h2','','Projects change the question');
  const caption=el('p','landscape-caption','Schematic contexts. Position and area do not encode risk or effectiveness.');
  const map=el('div','project-atlas');map.setAttribute('aria-label','Six selectable project contexts');
  const legend=el('div','atlas-legend text-small');legend.append(el('span','','● Selected scenario'),el('span','','◌ Related cached lens'),el('span','','No direct assignment ≠ non-use'));
  shell.append(heading,caption,map,legend);
  const detail=el('section','landscape-detail');detail.setAttribute('aria-live','polite');shell.append(detail);
  const ns='http://www.w3.org/2000/svg';
  function svgEl(tag,attrs){const n=document.createElementNS(ns,tag);Object.entries(attrs||{}).forEach(([k,v])=>n.setAttribute(k,v));return n;}
  function profileById(id){return profiles.find(p=>p.id===id);}
  function scopeFor(profile,ids){const list=el('div','source-positions');ids.forEach(id=>{const d=dimension(profile,id);if(!d)return;const item=el('details','');const summary=el('summary','',d.title+' · '+d.evidence);item.append(summary);item.append(el('p','',d.position));if(d.qualification)item.append(el('p','visual-note',d.qualification));list.append(item);});return list;}
  function drawMap(){
    map.replaceChildren();
    const w=map.clientWidth||680,cols=w>=650?3:2,gap=14,cellW=(w-gap*(cols-1))/cols,cellH=w<380?190:175,rows=Math.ceil(scenarios.length/cols),h=rows*cellH+gap*(rows-1);
    map.style.height=h+'px';
    const svg=svgEl('svg',{viewBox:`0 0 ${w} ${h}`,width:w,height:h,role:'img','aria-label':'Project contexts, with selected and related context markers'});
    const title=svgEl('title');title.textContent='Project landscape: six contexts and their questions';svg.append(title);
    const selectedLens=lenses[currentPerson];
    scenarios.forEach((scenario,i)=>{
      const x=(i%cols)*(cellW+gap),y=Math.floor(i/cols)*(cellH+gap),selected=scenario.id===currentScenario,related=!!selectedLens?.zones.includes(scenario.id);
      const path=svgEl('path',{d:`M ${x+cellW*.12} ${y+cellH*.08} C ${x+cellW*.46} ${y-cellH*.02},${x+cellW*.85} ${y+cellH*.03},${x+cellW*.96} ${y+cellH*.25} C ${x+cellW*1.02} ${y+cellH*.60},${x+cellW*.93} ${y+cellH*.94},${x+cellW*.68} ${y+cellH*.96} C ${x+cellW*.32} ${y+cellH*1.03},${x+cellW*.03} ${y+cellH*.85},${x+cellW*.035} ${y+cellH*.60} C ${x-cellW*.01} ${y+cellH*.32},${x+cellW*.02} ${y+cellH*.13},${x+cellW*.12} ${y+cellH*.08} Z`,fill:`var(--series-${i+1})`,'fill-opacity':selected?'.24':related?'.13':'.035',stroke:selected?'var(--ink)':related?`var(--series-${i+1})`:'var(--line)','stroke-width':selected?'2':'1','stroke-dasharray':related&&!selected?'5 4':''});svg.append(path);
      const button=el('button','atlas-context');button.type='button';button.style.left=x+'px';button.style.top=y+'px';button.style.width=cellW+'px';button.style.height=cellH+'px';button.setAttribute('aria-pressed',String(selected));button.dataset.scenario=scenario.id;
      const label=el('span','atlas-title');const icon=el('i','');icon.dataset.lucide=scenario.icon;icon.setAttribute('aria-hidden','true');label.append(icon,el('span','',scenario.title));button.append(label,el('span','atlas-question',scenario.question),el('span','atlas-state',selected?'Selected scenario':related?'Related cached lens':'No direct scenario assignment'));
      button.addEventListener('click',()=>{currentScenario=scenario.id;render();map.querySelector('[data-scenario="'+scenario.id+'"]')?.focus({preventScroll:true});});map.append(button);
    });
    map.prepend(svg);ctx.icons();
  }
  function render(){
    drawMap();detail.replaceChildren();
    const scenario=scenarios.find(s=>s.id===currentScenario),person=profileById(currentPerson),lens=lenses[currentPerson];
    detail.append(el('h2','',scenario.title+' — a proposed decision trail'),el('p','visual-note',scenario.detail));
    const trail=el('ol','decision-trail');
    [['Anchor',scenario.anchor],['Delegate',scenario.delegation],['Verify',scenario.proof]].forEach(([label,value])=>{const li=el('li','');li.append(el('span','trail-label',label),el('strong','',value));trail.append(li);});detail.append(trail);
    const selected=el('div','engineer-lens');selected.append(el('h3','',person.name+' in this context'));
    const hasLens=!!lens?.zones.includes(scenario.id);
    selected.append(el('p','lens-status',hasLens?'Related cached lens · interpretive application':'Evidence gap for this scenario · no direct placement claim'));
    selected.append(el('p','',lens?.note||'A scenario-specific account is not established in this view. Read the profile before adapting the method.'));
    if(!hasLens)selected.append(el('p','visual-note','The cache may support transferable questions, but this view does not claim this engineer demonstrated the selected type of project.'));
    selected.append(el('p','lens-scope',(lens?.scope||'Scope not established')+' · cache checked '+person.checked));
    selected.append(evidenceLinks(person,lens?.ids||scenario.dimensions),scopeFor(person,lens?.ids||scenario.dimensions));
    detail.append(selected);
    const compare=el('div','scenario-comparisons');compare.append(el('h3','','Other useful lenses for this scenario'));
    const names=el('div','scenario-people');scenario.people.filter(id=>id!==currentPerson).forEach(id=>{const p=profileById(id);if(!p)return;const b=el('button','visual-button',p.name);b.type='button';b.addEventListener('click',()=>{currentPerson=id;personSelect.value=id;render();personSelect.focus({preventScroll:true});});names.append(b);});compare.append(names);
    compare.append(el('p','visual-note','These are editorial reading paths, not a shortlist of proven best performers. Every engineer remains available in the selector.'));
    detail.append(compare);
  }
  personSelect.addEventListener('change',()=>{currentPerson=personSelect.value;render();});
  let width=0;new ResizeObserver(()=>{const next=map.clientWidth;if(next!==width){width=next;drawMap();}}).observe(map);
  render();
};
