(function () {
  'use strict';
  window.EngineerVisuals = window.EngineerVisuals || {};
  window.EngineerVisuals['subway-routes'] = function (ctx) {
    const {root, profiles, el, link, dimension, profileUrl, evidenceLinks} = ctx;
    const shell = el('section', 'view-subway-routes');
    const routes = {
      'dave-farley': {stops:['intent','checks','implement','inspect','release'], cadence:'Acceptance-first', solid:true, loop:['implement','checks'], note:'Human-owned failing acceptance examples precede implementation. The route adapts his October 2026 proposal; it is not a recovered private session or release configuration.', ids:['D02','D03','D04','D06','D10']},
      'kent-beck': {stops:['intent','plan','checks','implement','inspect'], cadence:'Test-first project', solid:true, loop:['implement','checks'], note:'BPlusTree3 supplies a next-test and reference-check example. June 2025 instructions and April 2026 coordination experience are project-specific; a production release policy remains unknown.', ids:['D02','D03','D04','D06','D07']},
      'simon-willison': {stops:['intent','checks','implement','inspect','release'], cadence:'Red / green + exploration', solid:true, loop:['inspect','implement'], note:'The guide advocates red/green and exercised behaviour; the October 2026 blog feature provides one PR/release account. Combining them here is an interpretive route, not one observed end-to-end recipe.', ids:['D02','D03','D04','D06','D10']},
      'birgitta-bockeler': {stops:['intent','plan','implement','checks','inspect'], cadence:'Ordering varies by context', solid:false, loop:['inspect','plan'], note:'Working slices, human checkpoints and test ownership are documented across different experiments. The August 2026 evaluation does not establish a mandatory test-first or tests-after personal cadence.', ids:['D02','D03','D04','D06','D07']},
      'addy-osmani': {stops:['intent','plan','implement','checks','inspect'], cadence:'Small chunks + gates', solid:false, loop:['inspect','plan'], note:'January 2026 personal chunks and March orchestration guidance support these stops. They do not establish one compulsory internal ordering or a complete production release policy.', ids:['D02','D03','D04','D06','D07','D10']},
      'gojko-adzic': {stops:['intent','plan','implement','checks','inspect'], cadence:'Published worker / gate design', solid:true, loop:['checks','implement'], note:'The October 2026 factory describes approved plans, worker checks, merged-work gates and a final challenge. This is an inspected artifact, not an executed deployment or complete private setup.', ids:['D02','D03','D04','D06','D07','D10']},
      'martin-fowler': {stops:['intent','plan','implement','checks','inspect','release'], cadence:'General guidance; order unknown', solid:false, loop:['inspect','intent'], note:'Scenario/context guidance, historical self-testing and 2024 CI are distinct evidence. This line does not turn historical TDD advice into an observed 2026 personal agent loop; release is an integration decision here.', ids:['D02','D03','D04','D06','D10']},
      'armin-ronacher': {stops:['intent','plan','implement','inspect'], cadence:'Clarify + bounded investigation', solid:false, loop:['inspect','plan'], note:'December 2025 clarification/handoff and June 2026 bounded investigations inform this route. Current test cadence and full integration/release gates remain unknown; omitted stops do not mean non-use.', ids:['D02','D03','D04','D06','D07','D10']},
      'steve-yegge': {stops:['intent','plan','implement','checks','inspect','release'], cadence:'Recurring checks; order unknown', solid:false, loop:['inspect','plan'], note:'December 2025 verification guidance, January Gas Town and August private Wheelhouse are separate accounts. The release stop represents the published Gas Town merge/gate design, not his full current private release process.', ids:['D02','D03','D04','D06','D07','D10']},
      'gene-kim': {stops:['intent','plan','checks','implement','inspect'], cadence:'Expectations before generation', solid:true, loop:['inspect','plan'], note:'Joint Kim/Yegge 2025 guidance places expectations and tests before generation and verification after. This is not strict unit TDD for every personal change; January 2026 accountability is separate evidence.', ids:['D02','D03','D04','D06','D07']},
      'charity-majors': {stops:['intent','implement','checks','release','observe','inspect'], cadence:'Production feedback loop', solid:false, loop:['observe','intent'], note:'March 2026 operational guidance extends pre-production checks into instrumented deployment and observation. This does not establish a full personal coding-agent order, TDD policy or deployment configuration.', ids:['D02','D04','D06','D10','D12']},
      'harper-reed': {stops:['intent','plan','checks','implement','inspect'], cadence:'Historical test-first guidance', solid:true, loop:['inspect','plan'], note:'February/May 2025 plans and TDD guidance inform this route; October 2026 public rules scale planning to the change and require verification. Remote terminals do not establish a complete orchestrator.', ids:['D02','D03','D04','D06','D07','D10']},
      'peter-steinberger': {stops:['intent','plan','implement','checks','inspect','release'], cadence:'Tests after implementation', solid:true, loop:['inspect','implement'], note:'October 2025 personal workflow asks for tests after implementation. December selective review and October 2026 release instructions add separate evidence; the route does not recast his approach as TDD.', ids:['D02','D03','D04','D06','D07','D10']},
      'matt-pocock': {stops:['intent','plan','checks','implement','inspect','release'], cadence:'Red / green; review later', solid:true, loop:['implement','checks'], note:'Pinned October 2026 skills place red/green at human-agreed seams, with refactoring in review. The release stop means documented branch integration/checks, not a verified personal production rollout.', ids:['D02','D03','D04','D06','D07','D10']},
      'robert-c-martin': {stops:['intent','plan','checks','implement','inspect','release'], cadence:'Historical cycles + public artifact', solid:false, loop:['implement','checks'], note:'2014 test-first cycles, September 2026 above-code supervision and SwarmForge handoffs are different evidence. His later account reports moving away from the custom harness; this is not a current personal fleet map.', ids:['D02','D03','D04','D06','D07','D10']},
      'david-heinemeier-hansson': {stops:['intent','implement','inspect'], cadence:'Supervised outcome review', solid:false, loop:['inspect','implement'], note:'January 2026 reports supervised delegation and outcome review. Intent is the human guidance in that account; a complete specification format, present test cadence and release policy remain unestablished.', ids:['D02','D04','D06','D07','D10']},
      'andrej-karpathy': {stops:['intent','plan','checks','implement','inspect'], cadence:'Fixed ML evaluator + bounded loop', solid:true, loop:['inspect','implement'], note:'March 2026 autoresearch preserves a baseline/evaluator around a bounded ML experiment. The checks station means ML evaluation, not software unit TDD; April oversight and historical ML planning are separately dated.', ids:['D02','D03','D04','D06','D07']},
      'chip-huyen': {stops:['intent','plan','implement','checks','inspect','release','observe'], cadence:'AI-product lifecycle guidance', solid:false, loop:['observe','intent'], note:'2022–2025 product/model guidance links user need, component choices, human assessment and monitored updates. It is historical AI-system guidance, not a current personal coding-agent route or test-first policy.', ids:['D02','D03','D04','D06','D07','D10']},
      'hamel-husain': {stops:['intent','inspect','checks','implement','release','observe'], cadence:'Inspect examples → validate evaluators', solid:true, loop:['observe','inspect'], note:'AI-product quality criteria emerge from inspected examples; objective checks and subjective judges need appropriate validation. September 2026 joint guidance distinguishes release regressions from sampled production evaluation. This is not a coding-agent TDD claim.', ids:['D02','D03','D04','D06','D08','D10']},
      'jason-liu': {stops:['intent','plan','implement','checks','inspect','observe'], cadence:'Bounded prototype + RAG feedback', solid:false, loop:['observe','intent'], note:'September 2025 bounded prototyping, component evaluation and the August 2024 product flywheel support this synthesis. January 2026 context-interface updates do not establish a complete private coding-agent lifecycle.', ids:['D02','D03','D04','D06','D07','D10']}
    };
    const families = [
      {id:'before', name:'Checks before code', color:'#b66642', desc:'Agree what should fail before asking for implementation.'},
      {id:'after', name:'Build, then challenge', color:'#458b89', desc:'Implement a bounded change, then test and inspect it.'},
      {id:'adaptive', name:'Context shapes the route', color:'#8b7bb5', desc:'Documented activities; a fixed test order is not established.'},
      {id:'product', name:'Evaluation & feedback', color:'#b18a32', desc:'ML experiments, AI-product evaluation and production feedback.'}
    ];
    const groups = {
      before:['dave-farley','kent-beck','simon-willison','gene-kim','harper-reed','matt-pocock'],
      after:['peter-steinberger','gojko-adzic'],
      adaptive:['birgitta-bockeler','addy-osmani','martin-fowler','armin-ronacher','steve-yegge','robert-c-martin','david-heinemeier-hansson'],
      product:['andrej-karpathy','chip-huyen','hamel-husain','jason-liu','charity-majors']
    };
    // Spatial families are reading aids, not measured clusters or claims of identical practice.
    const entries = families.flatMap(f => groups[f.id].map((id,i)=>({profile:profiles.find(p=>p.id===id),route:routes[id],family:f,lane:i-(groups[f.id].length-1)/2}))).filter(e=>e.profile);
    const stops = {
      intent:{x:90,y:285,label:'Intent',sub:'Agree the outcome',dim:'D02',lx:66,ly:236},
      plan:{x:270,y:285,label:'Scope & plan',sub:'Choose the next slice',dim:'D03',lx:214,ly:236},
      before:{x:445,y:125,label:'Checks first',sub:'Acceptance / red–green',dim:'D04',lx:384,ly:78},
      implement:{x:620,y:285,label:'Implement',sub:'Delegate bounded work',dim:'D07',lx:563,ly:236},
      after:{x:778,y:405,label:'Checks after',sub:'Tests / gates / challenge',dim:'D04',lx:723,ly:455},
      inspect:{x:930,y:285,label:'Human judgment',sub:'Inspect & accept',dim:'D06',lx:868,ly:236},
      release:{x:1090,y:285,label:'Integrate',sub:'Where documented',dim:'D10',lx:1030,ly:236},
      evaluate:{x:550,y:565,label:'Evaluation',sub:'ML / AI-product quality',dim:'D04',lx:490,ly:615},
      observe:{x:950,y:565,label:'Observe',sub:'Production feedback',dim:'D10',lx:904,ly:615}
    };
    const shellHeading=el('div','metro-heading');
    shellHeading.append(el('p','metro-kicker','A NETWORK OF ENGINEERING PRACTICE'),el('h2','','Where do you put the checks?'),el('p','','Follow the branches to see where approaches meet—and where the work demands a different route. Select any engineer to trace their line.'));
    shell.append(shellHeading);
    let selected='',lens='all',activeStop=null;
    const controls=el('div','metro-controls');
    const lenses=el('div','metro-lenses');lenses.setAttribute('aria-label','Highlight route family');
    const familyButtons=[];
    [{id:'all',name:'All twenty',color:'var(--ink)'},...families].forEach(f=>{
      const b=el('button','metro-lens',f.name);b.type='button';b.style.setProperty('--route',f.color);b.addEventListener('click',()=>{lens=f.id;selected='';activeStop=null;render();});lenses.append(b);familyButtons.push([b,f.id]);
    });
    const label=el('label','metro-select');label.append(el('span','visually-hidden','Trace an engineer'));
    const select=el('select');select.setAttribute('aria-label','Trace an engineer');const all=el('option','','Trace an engineer…');all.value='';select.append(all);
    profiles.forEach(p=>{const o=el('option','',p.name);o.value=p.id;select.append(o);});
    select.addEventListener('change',()=>{selected=select.value;lens='all';activeStop=null;render();});label.append(select);controls.append(lenses,label);shell.append(controls);
    const mapFrame=el('div','metro-map-frame');const map=el('div','metro-map');map.tabIndex=0;map.setAttribute('role','region');map.setAttribute('aria-label','Engineering route map. On a small screen, scroll horizontally to explore. Engineer selection is also available below.');const mapTools=el('div','metro-map-tools');const mapStatus=el('span','metro-map-status','All twenty routes');const zoom=el('button','metro-zoom','Expand map ↗');zoom.type='button';zoom.setAttribute('aria-pressed','false');zoom.addEventListener('click',()=>{const expanded=map.classList.toggle('is-expanded');zoom.textContent=expanded?'Fit whole map ↙':'Expand map ↗';zoom.setAttribute('aria-pressed',String(expanded));});mapTools.append(mapStatus,zoom);mapFrame.append(mapTools,map);shell.append(mapFrame);
    const mapKey=el('div','metro-key');mapKey.append(el('span','','● Shared activity'),el('span','metro-dash','Dotted = complete order unknown'),el('span','','↶ Feedback returns to earlier work'),el('span','metro-mobile-hint','Expand for station labels and horizontal exploration →'));shell.append(mapKey);
    const inspector=el('section','metro-inspector');inspector.setAttribute('aria-live','polite');shell.append(inspector);
    const roster=el('div','metro-roster');roster.append(el('h3','','Twenty engineers. Find a line.'));
    const nameButtons=[];
    families.forEach(f=>{const section=el('section','metro-roster-group');section.style.setProperty('--route',f.color);section.append(el('h4','',f.name));const names=el('div','metro-names');entries.filter(e=>e.family.id===f.id).forEach(e=>{const b=el('button','metro-person',e.profile.name);b.type='button';b.addEventListener('click',()=>{selected=selected===e.profile.id?'':e.profile.id;activeStop=null;lens='all';render();});names.append(b);nameButtons.push([b,e.profile.id]);});section.append(names);roster.append(section);});shell.append(roster);
    const caveat=el('details','metro-method');caveat.append(el('summary','','How to read this map'),el('p','','Routes are interpretive sketches assembled from dated public evidence, not recordings of a common task. Families help you navigate; they are not measured clusters. A shared station means a shared activity, not equivalent rigor. Dotted lines indicate that a complete order is unknown; solid lines reflect an explicit local cadence, not a verified end-to-end process. Omitted stops mean unestablished, not unused. AI evaluation and software tests have separate stations because they challenge different things. Charity Majors’ operational guidance appears on the feedback branch; it is not an AI-product or personal coding-agent claim.'));
    shell.append(caveat);root.append(shell);
    const ns='http://www.w3.org/2000/svg';
    function svg(tag,attrs,text){const n=document.createElementNS(ns,tag);Object.entries(attrs||{}).forEach(([k,v])=>n.setAttribute(k,v));if(text)n.textContent=text;return n;}
    function itinerary(e){
      return e.route.stops.map((s,i)=>s==='checks'?(e.family.id==='product'&&e.profile.id!=='charity-majors'?'evaluate':i<e.route.stops.indexOf('implement')?'before':'after'):s==='release'?'release':s);
    }
    function pathFor(e){
      const ids=itinerary(e),offset=e.lane*4.5;
      const points=ids.map(id=>[stops[id].x,stops[id].y+offset]);
      let d='M '+points[0].join(' ');
      points.slice(1).forEach((p,i)=>{const a=points[i],mid=(a[0]+p[0])/2;d+=' C '+mid+' '+a[1]+' '+mid+' '+p[1]+' '+p.join(' ');});return d;
    }
    function draw(){
      mapStatus.textContent=selected?profiles.find(p=>p.id===selected).name+' · follow the numbered stops':lens==='all'?'All twenty routes':families.find(f=>f.id===lens).name;map.replaceChildren();const s=svg('svg',{viewBox:'0 0 1180 680',role:'group','aria-label':selected?'Highlighted route for '+profiles.find(p=>p.id===selected).name:'Twenty engineer routes across shared activities'});
      s.append(svg('title',{},'Engineering lines: checks, change and human judgment'));
      const defs=svg('defs');const grid=svg('pattern',{id:'metro-grid',width:22,height:22,patternUnits:'userSpaceOnUse'});grid.append(svg('circle',{cx:1,cy:1,r:.8,fill:'var(--line)',opacity:.5}));defs.append(grid);s.append(defs,svg('rect',{width:1180,height:680,fill:'url(#metro-grid)'}));
      s.append(svg('path',{d:'M 220 250 C 300 250 320 70 445 70 S 580 250 700 250',fill:'none',stroke:'var(--metro-warm)','stroke-width':98,'stroke-linecap':'round'}));
      s.append(svg('path',{d:'M 310 330 C 430 330 400 570 550 570 S 860 580 1000 565',fill:'none',stroke:'var(--metro-gold)','stroke-width':110,'stroke-linecap':'round'}));
      s.append(svg('text',{x:55,y:38,class:'metro-map-caption'},'ENGINEERING LINES / 20 PUBLIC-SOURCE PROFILES'));
      s.append(svg('text',{x:55,y:650,class:'metro-map-caption'},'SCHEMATIC ROUTES · DISTANCE DOES NOT REPRESENT TIME OR RIGOR'));
      const sorted=[...entries].sort((a,b)=>(a.profile.id===selected)-(b.profile.id===selected));
      sorted.forEach(e=>{const focused=e.profile.id===selected;const visible=selected?focused:lens==='all'||lens===e.family.id;
        const p=svg('path',{d:pathFor(e),fill:'none',stroke:e.family.color,'stroke-width':focused?6:2.5,opacity:visible?(selected?1:.72):.08,'stroke-linecap':'round','stroke-dasharray':e.route.solid?'':'3 7',class:'metro-track'});const title=svg('title',{},e.profile.name+' · '+e.route.cadence);p.append(title);p.style.cursor='pointer';p.style.pointerEvents='stroke';p.addEventListener('click',()=>{selected=e.profile.id;activeStop=null;render();});s.append(p);
        if(focused){itinerary(e).forEach((id,i)=>{const point=stops[id];s.append(svg('circle',{cx:point.x,cy:point.y+e.lane*4.5,r:4,fill:e.family.color,stroke:'var(--paper)','stroke-width':1.5}));});}
      });
      // A separate return track expresses recurrence, without inventing a measured cycle length.
      s.append(svg('path',{d:'M 950 585 C 950 665 225 665 225 395 C 225 370 240 350 260 342',fill:'none',stroke:'var(--muted)','stroke-width':1.4,'stroke-dasharray':'4 7',opacity:.6}));
      s.append(svg('text',{x:294,y:608,class:'metro-feedback'},'feedback → revise the next step'));
      Object.entries(stops).forEach(([id,st])=>{
        const g=svg('g',{class:'metro-stop',role:'button',tabindex:0,'aria-label':st.label+': show evidence','aria-pressed':String(activeStop===id)});
        g.append(svg('circle',{cx:st.x,cy:st.y,r:23,fill:'transparent'}),svg('circle',{cx:st.x,cy:st.y,r:10,fill:'var(--paper)',stroke:activeStop===id?'var(--ink)':'var(--muted)','stroke-width':activeStop===id?4:2}),svg('circle',{cx:st.x,cy:st.y,r:3,fill:'var(--ink)'}));
        g.append(svg('text',{x:st.lx,y:st.ly,class:'metro-stop-label'},st.label),svg('text',{x:st.lx,y:st.ly+18,class:'metro-stop-sub'},st.sub));
        const choose=()=>{activeStop=activeStop===id?null:id;render();};g.addEventListener('click',choose);g.addEventListener('keydown',ev=>{if(ev.key==='Enter'||ev.key===' '){ev.preventDefault();choose();}});s.append(g);
      });
      if(selected){const e=entries.find(e=>e.profile.id===selected);itinerary(e).forEach((id,i)=>{const st=stops[id];s.append(svg('circle',{cx:st.x+17,cy:st.y+24,r:9,fill:e.family.color}),svg('text',{x:st.x+17,y:st.y+28,'text-anchor':'middle',class:'metro-stop-number'},String(i+1)));});}
      map.append(s);
    }
    function showDetails(){
      inspector.replaceChildren();const e=entries.find(e=>e.profile.id===selected);
      if(!e){
        const intro=el('div','metro-overview');intro.append(el('span','metro-kicker',activeStop?'STATION INSPECTOR':'START EXPLORING'),el('h3','',activeStop?stops[activeStop].label:'Same station. Different standards.'),el('p','',activeStop?'Choose an engineer below to see the evidence behind this activity.':'Try Dave Farley → Peter Steinberger to compare checks before and after implementation. Then select Hamel Husain to see why AI-product evaluation takes a different branch.'));
        inspector.append(intro);return;
      }
      inspector.style.setProperty('--route',e.family.color);
      const head=el('div','metro-profile-heading');const title=el('div');title.append(el('p','metro-kicker',e.family.name),el('h3','',e.profile.name),el('p','metro-cadence',e.route.cadence));const reset=el('button','metro-reset','Show all lines ↗');reset.type='button';reset.addEventListener('click',()=>{selected='';activeStop=null;lens='all';render();});head.append(title,reset);inspector.append(head);
      const cols=el('div','metro-detail-grid');const approach=el('div');approach.append(el('h4','','The route'),el('p','',e.route.note));const routeLine=el('div','metro-itinerary');itinerary(e).forEach((id,i)=>{if(i)routeLine.append(el('span','metro-arrow','→'));const b=el('button','',stops[id].label);b.type='button';b.setAttribute('aria-pressed',String(activeStop===id));b.addEventListener('click',()=>{activeStop=id;render();});routeLine.append(b);});approach.append(routeLine);
      const evidence=el('div');const st=activeStop&&stops[activeStop];const d=dimension(e.profile,st?st.dim:'D04');evidence.append(el('h4','',st?st.label:'What counts as verification?'));if(st&&!itinerary(e).includes(activeStop))evidence.append(el('p','visual-note','This stop is not established in this route sketch. The broader profile evidence follows.'));if(d){evidence.append(el('p','',d.position));const more=el('details');more.append(el('summary','','Evidence & qualifications'),el('p','',d.qualification||e.route.note),evidenceLinks(e.profile,[d.id]));evidence.append(more);}
      const tools=el('div');tools.append(el('h4','','Tools & project context'),el('p','',e.profile.tools||'Complete tooling is not established.'),el('p','visual-note',e.profile.focusNote||e.profile.summary));tools.append(link('Read the engineer profile ↗',profileUrl(e.profile)));const td=dimension(e.profile,'D09');if(td?.source)tools.append(link('Tooling source ↗',td.source));cols.append(approach,evidence,tools);inspector.append(cols);
    }
    function render(){select.value=selected;familyButtons.forEach(([b,id])=>b.setAttribute('aria-pressed',String(lens===id&&!selected)));nameButtons.forEach(([b,id])=>b.setAttribute('aria-pressed',String(selected===id)));draw();showDetails();}
    render();
  };
})();
