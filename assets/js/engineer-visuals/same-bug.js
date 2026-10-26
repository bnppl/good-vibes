window.EngineerVisuals = window.EngineerVisuals || {};
window.EngineerVisuals['same-bug'] = function (ctx) {
  'use strict';
  const {root, profiles, el, link, dimension, evidenceLinks} = ctx;
  const wrap = el('div', 'view-same-bug');
  const phases = [
    {name:'Investigate', title:'Find the real observation boundary', ids:['D01','D08'], artifact:'An inspected path, a starting revision and the actual baseline output.'},
    {name:'Specify', title:'Keep the same six outcomes', ids:['D02'], artifact:'A human-understood contract, with persistence and replay checked separately.'},
    {name:'Delegate', title:'Make one coherent change', ids:['D03','D07'], artifact:'A bounded task, explicit write ownership and an observable completion condition.'},
    {name:'Verify', title:'A restart can hide two different bugs', ids:['D04','D06'], artifact:'The six actual observations, reviewed assertions and a clear explanation of remaining gaps.'},
    {name:'Hand off', title:'An accepted patch is not automatically a release', ids:['D10','D11'], artifact:'A reviewed diff, check results and the real project’s integration/release decision.'}
  ];
  const observations = [
    {name:'Read empty account', short:'Empty', expected:0, meaning:'A clean baseline.'},
    {name:'Deliver A', short:'A', expected:10, meaning:'A valid event earns ten points.'},
    {name:'Deliver A again', short:'Replay A', expected:10, meaning:'Immediate replay does not earn again.'},
    {name:'Restart, then read before replay', short:'Restart + read', expected:10, meaning:'The successful balance itself survives.'},
    {name:'Deliver A after restart', short:'Replay after restart', expected:10, meaning:'Accepted identity survives too.'},
    {name:'Deliver distinct B', short:'New B', expected:20, meaning:'A different event is still rewarded.'}
  ];
  // Original proposed applications of the cached worked examples, not recovered private sessions.
  const actions = {
    'simon-willison':[
      'Execute the existing checks and trace the real reward and restart interfaces before editing.',
      'Clarify A and B conversationally, then keep the six independently agreed observations visible.',
      'Use a reviewable increment; parallelise only an independent investigation when it genuinely helps.',
      'Use red/green feedback, then exercise the real behaviour and record the commands and results.',
      'Own the initial review and explain the changed path before handing over a collaborator-ready patch.'
    ],
    'birgitta-bockeler':[
      'Inspect working behaviour and maintainability feedback in the actual existing codebase.',
      'Keep human-owned outcomes distinct from tests generated wholly inside the implementation loop.',
      'Constrain a working slice with human steering; do not invent a private multi-agent setup.',
      'Inspect test quality and real boundary coverage rather than treating agent-internal TDD as sufficient.',
      'Place checks according to their cost, feedback speed and consequence; use the project’s release process.'
    ],
    'dave-farley':[
      'Find the existing domain boundary and runner so the acceptance driver reaches real application state.',
      'Have the intent owner approve the executable examples before implementation changes their meaning.',
      'Give the implementer the next missing acceptance scenario, keeping the human-owned contract intact.',
      'Observe a meaningful failure, then acceptance evidence and unit feedback; challenge a relevant assertion.',
      'Review a small, releasable increment and its evidence without inventing a private deployment policy.'
    ],
    'kent-beck':[
      'Run the baseline and identify the next concrete question, rather than starting with a framework.',
      'Turn the next missing outcome into an inspectable next-test plan.',
      'Choose one small test-first increment; keep the human able to intervene in design decisions.',
      'Confirm the right failure and passing behaviour, then decide whether tidying earns its cost now.',
      'Keep a focused commit and understandable evidence; a production release policy remains a separate question.'
    ],
    'addy-osmani':[
      'Characterise uncertain legacy behaviour and identify the smallest useful observation seam.',
      'Review the requirements and an evolving plan, while giving the task only relevant context.',
      'Scope a coherent slice and write ownership; add parallel workers only with a useful boundary.',
      'Review against the original intent, not just the implementer’s completion summary or green suite.',
      'Package checks, explanation and remaining gaps so the human can make the acceptance decision.'
    ],
    'martin-fowler':[
      'Inspect present behaviour and ask concrete questions about assumptions and code responsibilities.',
      'Use a short interview to clarify what success, durable state and supported restart actually mean.',
      'Make a bounded change without claiming a documented current private agent cadence or topology.',
      'Compare success claims with executed checks; use refactoring only for a concrete changeability benefit.',
      'Inspect verified integration readiness; historical CI guidance is not a complete current release policy.'
    ],
    'gojko-adzic':[
      'Understand the existing path before importing a public factory or adding machinery.',
      'Make consequential decisions and anti-goals inspectable; approve the intended outcomes.',
      'If using the published factory pattern, give work explicit file ownership and approved dependencies.',
      'Check worker output and the merged result, then try to refute the completion claim.',
      'Hand off the evidence through the actual project’s process; inspected factory instructions are not an executed pipeline.'
    ],
    'armin-ronacher':[
      'Inspect the state transition and consume real tool output rather than a plausible agent narrative.',
      'Keep one editable handoff containing agreed outcomes, relevant locations and unresolved questions.',
      'Bound the next change and any read-only investigation; do not infer an unattended long-lived-code policy.',
      'Re-run the real commands and inspect the diff for missing persistence or weakened expectations.',
      'Explain the resulting state transition and gaps; a complete private release gate remains unknown.'
    ],
    'steve-yegge':[
      'Give reconnaissance a finish line: find the six observations’ real execution path.',
      'Keep an authoritative work record with outcomes, dependencies, ownership and completion evidence.',
      'For this small example, propose one implementer and review responsibility—not an imitation fleet.',
      'Inspect the contract separately from the candidate and run recurring checks; do not invent a test-first rule.',
      'Integrate only as fast as the result can be verified; public merge-queue design is not a complete private release policy.'
    ],
    'gene-kim':[
      'Inspect the development system and which feedback can actually reach the product rule.',
      'Refine concrete expectations conversationally; keep joint Kim/Yegge guidance labelled as joint.',
      'Calibrate pairing versus delegation to novelty and consequences, with one bounded missing behaviour.',
      'Verify expectations and tests, retaining the accountable human’s judgment about the whole result.',
      'Record review and rework alongside generation; use the actual project’s integration authority.'
    ],
    'charity-majors':[
      'Locate identity, prior acceptance, balance update and successful completion; separate observation from assumption.',
      'Give the required behaviour an inspectable artifact without adding an unrequested production deployment.',
      'Choose a bounded change; no complete personal coding-agent topology is established.',
      'Assert actual state; use diagnostics to explain a failure, never as a substitute for the stored balance.',
      'Keep operational observation as an optional, separately scoped follow-up after the normal project release decision.'
    ],
    'harper-reed':[
      'Inspect the current path and baseline rather than assuming the early greenfield recipe fits this repository.',
      'Make the six outcomes inspectable and size planning to the change; preserve dates on historical guidance.',
      'Choose the next coherent increment; remote terminal sessions alone are not evidence of safe orchestration.',
      'Use meaningful test and lint feedback and require actual verification before a completion claim.',
      'Review and checkpoint the coherent result; historical commit practice is not a full private release policy.'
    ],
    'peter-steinberger':[
      'Find a useful feedback surface in the existing reward and persistence paths.',
      'Develop intent conversationally, using additional planning where uncertainty changes the design.',
      'Give one writer the state transition; use a separate investigation only where it can proceed independently.',
      'Preserve the documented distinction: implement, then request focused tests in that context. Check them against the independent contract.',
      'Retain architectural understanding and selective inspection; follow the actual project’s shipping/publication authority.'
    ],
    'matt-pocock':[
      'Inspect the real path before creating specifications, tickets or process artifacts.',
      'Agree the observation seam and domain language; record settled multi-session decisions only when useful.',
      'Pick a thin verifiable slice; larger ticket/worktree designs remain published artifacts, not reproduced fleet behaviour.',
      'Use red-green at the human-agreed seam, then review standards and specification findings separately.',
      'Review the assembled result and project checks before committing; do not infer a complete private production pipeline.'
    ],
    'robert-c-martin':[
      'Make the current state transition and runner visible before selecting extra quality tools.',
      'Establish an independently understood contract that the candidate cannot silently rewrite.',
      'Implement the next missing outcome; the public SwarmForge artifact is distinct from the later report of moving away from his harness.',
      'Challenge an assertion with a plausible wrong result; distinguish historical mutation guidance from an observed current run.',
      'Review ownership at the appropriate depth and integrate without inventing a private release policy.'
    ],
    'david-heinemeier-hansson':[
      'Follow the actual state transition and find which identities and balances survive the runtime boundary.',
      'Keep product intent distinct from implementation; the small task note here is our adaptation, not a known private format.',
      'Delegate a coherent change with outcome review; a fixed current planning or test cadence is unknown.',
      'Use the project’s meaningful checks and explain the design; historical testing views do not establish a current agent cadence.',
      'Refine and integrate through the existing process; product hosting capabilities do not establish personal deployment gates.'
    ],
    'andrej-karpathy':[
      'Understand the starting state and a simple baseline before optimising or automating the fix.',
      'Make the objective difficult to satisfy accidentally, including the read immediately after restart.',
      'Bound the next change and keep expected values outside the candidate’s authority to redefine.',
      'Transfer the fixed-evaluator idea carefully: exact balance assertions are software checks, not an ML benchmark or model judge.',
      'Judge simplicity and remaining uncertainty; the published research loop is not a private product release policy.'
    ],
    'chip-huyen':[
      'Locate the deterministic decision boundary; this rule does not require a model or retrieval system.',
      'Name what each observation establishes and keep the task’s expected integers independent of implementation.',
      'Choose the smallest correction supported by the inspected system, rather than importing an AI platform architecture.',
      'Use code to compare exact balances. Human/model-output evaluation guidance does not require an LLM judge for ten equals ten.',
      'Explain the resulting state and integrate normally; historical ML lifecycle guidance is not a personal coding-agent release policy.'
    ],
    'hamel-husain':[
      'Inspect real examples of the rule failing and establish that the observation reaches authoritative application state.',
      'Keep supplied deterministic requirements separate from discovering subjective AI-product criteria.',
      'Change one bounded part and disclose edits to expectations, fixtures and configuration.',
      'Use objective code checks for exact balances and challenge one plausible wrong implementation; no model judge is needed.',
      'Retain useful row-level evidence; sampled AI-product evaluation is a separate optional illustration, not this bug’s acceptance oracle.'
    ],
    'jason-liu':[
      'Establish the observation path and diagnose whether the gap is missing behaviour or a weak check.',
      'Keep a small ledger of expected balance, actual result, command and interpretation for each observation.',
      'Make one bounded correction; scoped subagent reads are an optional context technique, not proof of a private swarm.',
      'Re-run the complete contract and diagnose the failed row; retrieval/answer evaluations are distinct from exact reward checks.',
      'Review outcome and limits. Any production feedback extension keeps its own scope and does not turn this exercise into a RAG evaluation.'
    ]
  };
  const models = {
    correct:{name:'Both balance and IDs survive', values:[0,10,10,10,10,20], note:'The illustration satisfies these six observations; that is not proof of every possible requirement.'},
    ids:{name:'Only the balance survives', values:[0,10,10,10,20,30], note:'The restart read passes, but accepted identity is forgotten. A replay rewards A again.'},
    lost:{name:'All state disappears at restart', values:[0,10,10,0,10,20], note:'The restart read fails. Replaying A returns the total to ten and the final total to twenty, disguising the data loss if you inspect only those endpoints.'}
  };
  let activePhase=3, activeObservation=4, model='ids';
  const profileById = id => profiles.find(p=>p.id===id);
  let selected=profileById('dave-farley') || profiles[0];
  let compared=profileById('peter-steinberger') || null;
  const controls=el('div','visual-controls same-bug-pickers');
  function picker(label,current,none,onChange){
    const field=el('label','visual-field',label);const select=el('select','visual-select');select.setAttribute('aria-label',label);
    if(none){const opt=el('option','', 'No comparison');opt.value='';select.append(opt);}
    profiles.forEach(p=>{const opt=el('option','',p.name);opt.value=p.id;select.append(opt);});
    select.value=current?.id || '';select.addEventListener('change',()=>onChange(profileById(select.value)||null));field.append(select);controls.append(field);return select;
  }
  const mainPicker=picker('Engineer',selected,false,p=>{selected=p;render();});
  const comparisonPicker=picker('Compare with',compared,true,p=>{compared=p;render();});
  wrap.append(controls);
  wrap.append(el('p','visual-note same-bug-scope','Interpretive adaptation · These are proposed applications of cached methods, not observed sessions or productivity trials. The starting language, storage, runner and interface are unknown.'));
  const phaseNav=el('div','same-bug-phases');phaseNav.setAttribute('role','group');phaseNav.setAttribute('aria-label','Incident phases');
  const phaseButtons=phases.map((phase,index)=>{const button=el('button','visual-button',`${index+1}. ${phase.name}`);button.type='button';button.addEventListener('click',()=>{activePhase=index;render();});phaseNav.append(button);return button;});wrap.append(phaseNav);
  const stage=el('section','same-bug-stage');stage.setAttribute('aria-label','Shared incident reconstruction');wrap.append(stage);
  const lenses=el('div','same-bug-lenses');lenses.setAttribute('aria-live','polite');wrap.append(lenses);
  const phaseFooter=el('div','same-bug-footer');const previous=el('button','visual-button','Previous phase');previous.type='button';previous.addEventListener('click',()=>{activePhase=Math.max(0,activePhase-1);render();});const next=el('button','visual-button','Next phase');next.type='button';next.addEventListener('click',()=>{activePhase=Math.min(phases.length-1,activePhase+1);render();});phaseFooter.append(previous,next);wrap.append(phaseFooter);
  root.append(wrap);
  function contractTable(simulate){
    const region=el('div','same-bug-ledger-wrap');
    const table=el('table','same-bug-ledger');const caption=el('caption','',simulate?'Fixed expectations versus an illustrative model':'The common acceptance contract');table.append(caption);
    const head=el('thead');const hr=el('tr');['Observation','Expected balance',...(simulate?['Illustrative balance']:[])].forEach(label=>hr.append(el('th','',label)));head.append(hr);table.append(head);
    const body=el('tbody');observations.forEach((ob,index)=>{const row=el('tr');const selectedRow=index===activeObservation&&simulate;if(selectedRow)row.className='same-bug-current';const name=el('th');name.scope='row';name.append(el('span','same-bug-step-index',String(index)),document.createTextNode(ob.name));row.append(name,el('td','same-bug-balance',String(ob.expected)));
      if(simulate){const cell=el('td','same-bug-observed');if(index<=activeObservation){const value=models[model].values[index];cell.append(el('span','same-bug-balance',String(value)));const matches=value===ob.expected;cell.append(el('span','same-bug-result',matches?'Matches':'Mismatch'));row.dataset.result=matches?'matches':'mismatch';}else cell.append(el('span','same-bug-pending','Not replayed'));row.append(cell);}body.append(row);});table.append(body);region.append(table);return region;
  }
  function flowNodes(nodes,label){const block=el('div','same-bug-boundary');block.setAttribute('role','img');block.setAttribute('aria-label',label);nodes.forEach((node,index)=>{const cell=el('div','same-bug-node');cell.append(el('span','same-bug-node-index',String(index+1)),el('strong','',node[0]),el('span','',node[1]));block.append(cell);});return block;}
  function renderStage(){
    stage.replaceChildren();const phase=phases[activePhase];stage.append(el('p','same-bug-eyebrow',`Shared task · ${phase.name}`),el('h2','',phase.title));
    if(activePhase===0){stage.append(flowNodes([['Submission identity','Where does A enter?'],['Acceptance decision','Where is replay recognised?'],['Successful reward','When does success become durable?'],['Observation seam','How do we read and restart the real system?']],'Inspection questions about the unknown application; these are responsibilities to locate, not an assumed architecture.'));stage.append(el('p','visual-note','Run the existing relevant checks first. An environment failure is not a useful red state for the reward rule. A test-owned copy of the arithmetic is not an observation of application state.'));}
    else if(activePhase===1){stage.append(contractTable(false));stage.append(el('p','same-bug-restart-note','The read after restart comes before replay. It tests reward persistence separately from duplicate recognition.'));
    }else if(activePhase===2){stage.append(flowNodes([['Human-owned intent','Keep the six expected balances fixed.'],['Bounded implementation','Give one writer a coherent missing behaviour.'],['Useful independent work','Add investigation or parallel work only with a real boundary.'],['Inspectable output','Return a diff, commands, outcomes and remaining uncertainty.']],'Proposed task responsibilities, not an attributed private agent topology.'));stage.append(el('p','visual-note','This teaching decomposition is the adaptation. The documented reasons for test-first, tests-after, coordination and review differ in the lenses below.'));
    }else if(activePhase===3){
      const field=el('label','visual-field','Illustrative implementation');const select=el('select','visual-select');select.setAttribute('aria-label','Illustrative implementation');Object.entries(models).forEach(([id,m])=>{const option=el('option','',m.name);option.value=id;select.append(option);});select.value=model;select.addEventListener('change',()=>{model=select.value;render();});field.append(select);stage.append(field);
      const stepper=el('div','same-bug-replay-controls');const back=el('button','visual-button','Previous observation');back.type='button';back.disabled=activeObservation===0;back.addEventListener('click',()=>{activeObservation--;render();});const forward=el('button','visual-button','Next observation');forward.type='button';forward.disabled=activeObservation===observations.length-1;forward.addEventListener('click',()=>{activeObservation++;render();});const status=el('span','same-bug-replay-status',`${activeObservation+1} of 6 · ${observations[activeObservation].short}`);status.setAttribute('role','status');stepper.append(back,status,forward);stage.append(stepper,contractTable(true));
      const explanation=el('p','same-bug-restart-note',models[model].note);stage.append(explanation,el('p','visual-note','Illustrative state model only. No repository code, engineer session or test suite is being executed. These exact integer outcomes need code assertions, not an LLM judge.'));
    }else{stage.append(flowNodes([['Observed outcomes','All six rows, through the real supported boundary.'],['Reviewed change','Inspect product code, assertions, fixtures and configuration.'],['Explain persistence','Why do reward and accepted identity survive replacement?'],['Project authority','Use the actual integration and release process.']],'Proposed handoff evidence bundle; no production deployment is inferred.'));stage.append(el('p','visual-note','The common exercise does not add UI, network, distributed-concurrency, crash-recovery or performance requirements. An optional extension must be separately agreed and applied consistently.'));}
    stage.append(el('p','same-bug-artifact','Evidence to produce: '+phase.artifact));
  }
  function lens(profile){
    const panel=el('section','visual-detail same-bug-lens');panel.append(el('h3','',profile.name));
    if(profile.focus==='ai-systems'||profile.focus==='mixed')panel.append(el('p','same-bug-domain-note','Transfer of ideas: this deterministic software task is separate from model, retrieval or AI-product evaluation.'));
    panel.append(el('p','same-bug-label','Proposed application'),el('p','same-bug-action',(actions[profile.id]||[])[activePhase]||'Apply the common contract using the current project’s checks; the cache does not establish a more specific private workflow.'));
    const phase=phases[activePhase];const ds=phase.ids.map(id=>dimension(profile,id)).filter(Boolean);const basis=ds.find(d=>d.evidence!=='Not established')||ds[0];
    if(basis){panel.append(el('p','same-bug-label','Documented basis · '+basis.evidence),el('p','same-bug-position',basis.position));const limits=el('details','same-bug-limits');limits.append(el('summary','','Dates and limits'));ds.forEach(d=>{const p=el('p','',d.title+': '+(d.qualification||'No additional qualification recorded.'));limits.append(p);});limits.append(el('p','',`Cache checked ${profile.checked || 'date not recorded'}; the publication or practice date may be earlier.`));panel.append(limits);}
    panel.append(evidenceLinks(profile,phase.ids));
    const work=profile.id==='dave-farley'?'neutral-example.html':profile.id==='birgitta-bockeler'?'research.html':'workflow.html';panel.append(link('Read the cached worked application ↗',ctx.baseurl+'/engineers/'+profile.id+'/'+work));return panel;
  }
  function render(){
    phaseButtons.forEach((button,index)=>{button.setAttribute('aria-pressed',String(index===activePhase));if(index===activePhase)button.setAttribute('aria-current','step');else button.removeAttribute('aria-current');});
    mainPicker.value=selected.id;comparisonPicker.value=compared?.id||'';previous.disabled=activePhase===0;next.disabled=activePhase===phases.length-1;
    renderStage();lenses.replaceChildren(lens(selected));if(compared&&compared.id!==selected.id)lenses.append(lens(compared));
    ctx.icons();
  }
  render();
};
