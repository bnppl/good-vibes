(function () {
  'use strict';
  window.EngineerVisuals = window.EngineerVisuals || {};
  window.EngineerVisuals['subway-routes'] = function (ctx) {
    const {root, profiles, el, link, dimension, profileUrl, evidenceLinks} = ctx;
    const shell = el('section', 'view-subway-routes');
    const stations = [
      {id:'intent', label:['Intent'], dimension:'D02', meaning:'What outcome or problem is being agreed?'},
      {id:'plan', label:['Plan'], dimension:'D03', meaning:'How is the next tractable piece of work chosen?'},
      {id:'checks', label:['Checks /', 'evaluation'], dimension:'D04', meaning:'What evidence challenges the result? Software tests and AI-product evaluation remain different targets.'},
      {id:'implement', label:['Implement /', 'change'], dimension:'D07', meaning:'What work is delegated, and within what scope?'},
      {id:'inspect', label:['Inspect'], dimension:'D06', meaning:'What understanding and judgment remains with people?'},
      {id:'release', label:['Release'], dimension:'D10', meaning:'What is documented about integration, publication or deployment?'},
      {id:'observe', label:['Observe'], dimension:'D10', meaning:'What feedback informs the next change? A production observation is not the same as a local passing check.'}
    ];
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
    const heading = el('div', 'subway-heading');
    heading.append(el('p','visual-chip','Interpretive adaptation'), el('h2','', 'Different lines. Shared stations.'), el('p','visual-note','These are evidence-informed route sketches, not recordings of twenty engineers completing one task. A shared station can mean different work: software tests, ML evaluation, or product feedback.'));
    shell.append(heading);
    const controls = el('div','visual-controls subway-selectors');
    const picks = ['dave-farley','peter-steinberger','hamel-husain'];
    const selectors=[];
    for(let i=0;i<3;i++) {
      const label=el('label','visual-field'); label.append(el('span','',i===0?'First line':i===1?'Compare with':'Third line'));
      const select=el('select','visual-select'); select.setAttribute('aria-label',i===0?'First engineer route':i===1?'Second engineer route':'Third engineer route');
      if(i) {const option=el('option','','No comparison'); option.value='';select.append(option);}
      profiles.forEach(p=>{const option=el('option','',p.name);option.value=p.id;select.append(option);});
      select.value=picks[i]; select.addEventListener('change',()=>{picks[i]=select.value;render();});label.append(select);controls.append(label);selectors.push(select);
    }
    shell.append(controls);
    const legend=el('div','subway-lines');const chart=el('div','subway-chart');const chartSummary=el('p','visual-note subway-chart-note','Solid lines use an explicit local check/gate cadence. Dotted lines connect documented activities whose complete order is not established. Every connecting path and return arc remains an interpretive adaptation.');
    const detail=el('section','visual-detail subway-inspector');detail.setAttribute('aria-live','polite');
    const routeNotes=el('div','subway-route-notes');
    shell.append(legend,chart,chartSummary,detail,routeNotes);root.append(shell);
    let selectedStation='checks';let focusRoute=null;let current=[];
    const ns='http://www.w3.org/2000/svg';
    function svg(tag,attrs,text) {const n=document.createElementNS(ns,tag);Object.entries(attrs||{}).forEach(([k,v])=>n.setAttribute(k,v));if(text)n.textContent=text;return n;}
    function color(i){return 'var(--series-'+(i+1)+')';}
    function draw() {
      chart.replaceChildren();const width=Math.max(280,chart.clientWidth);const height=458;
      const pts={intent:[53,82],plan:[width/2,82],checks:[width-53,82],implement:[width-53,238],inspect:[width/2,238],release:[53,238],observe:[53,394]};
      const picture=svg('svg',{viewBox:'0 0 '+width+' '+height,width:'100%',height,role:'img','aria-label':'Subway comparison of '+current.map(x=>x.profile.name).join(', ')+'. Route order is interpretive; detailed itineraries and evidence follow.'});
      picture.append(svg('title',{},'Engineering subway routes'),svg('desc',{},'Seven shared activity stations. Solid and dotted routes distinguish explicit local cadence from activity connections with unknown complete ordering. A dashed return arc marks a proposed feedback loop.'));
      current.forEach((entry,i)=>{
        const {route}=entry;const offset=(i-(current.length-1)/2)*7;const coords=route.stops.map(id=>[pts[id][0]+offset,pts[id][1]+offset]);
        let d='';coords.forEach((pt,j)=>{if(!j){d='M '+pt.join(' ');return;}const prev=coords[j-1];const bend=(i+1)*9; if(Math.abs(prev[1]-pt[1])<25) d+=' C '+prev[0]+' '+(prev[1]-bend)+' '+pt[0]+' '+(pt[1]-bend)+' '+pt.join(' ');else if(Math.abs(prev[0]-pt[0])<25) d+=' C '+(prev[0]+bend)+' '+prev[1]+' '+(pt[0]+bend)+' '+pt[1]+' '+pt.join(' ');else d+=' C '+prev[0]+' '+pt[1]+' '+pt[0]+' '+prev[1]+' '+pt.join(' ');});
        const active=focusRoute===null||focusRoute===entry.profile.id;
        picture.append(svg('path',{d,fill:'none',stroke:color(i),'stroke-width':4,'stroke-linejoin':'round','stroke-linecap':'round','stroke-dasharray':route.solid?'':'3 7',opacity:active?'.85':'.15'}));
        if(route.loop){const a=pts[route.loop[0]],b=pts[route.loop[1]];const outerX=width-18-i*9;const loop='M '+(a[0]+offset)+' '+(a[1]+offset)+' C '+outerX+' '+a[1]+' '+outerX+' '+b[1]+' '+(b[0]+offset)+' '+(b[1]+offset);picture.append(svg('path',{d:loop,fill:'none',stroke:color(i),'stroke-width':2,'stroke-dasharray':'7 5',opacity:active?'.55':'.1'}));}
      });
      stations.forEach(st=>{
        const [x,y]=pts[st.id];const members=current.filter(x=>x.route.stops.includes(st.id));
        picture.append(svg('circle',{cx:x,cy:y,r:members.length>1?13:9,fill:'var(--paper)',stroke:members.length?'var(--ink)':'var(--line)','stroke-width':members.length>1?2:1}));
        if(members.length>1)picture.append(svg('circle',{cx:x,cy:y,r:7,fill:'none',stroke:'var(--ink)','stroke-width':1}));
        members.forEach(entry=>{const i=current.indexOf(entry);picture.append(svg('circle',{cx:x-7+i*7,cy:y,r:2.5,fill:color(i)}));});
        const button=el('button','subway-station');button.type='button';button.style.left=x+'px';button.style.top=(y+16)+'px';button.setAttribute('aria-pressed',String(selectedStation===st.id));button.setAttribute('aria-label',st.label.join(' ')+', '+members.length+' selected routes');st.label.forEach((line,index)=>{if(index)button.append(document.createElement('br'));button.append(document.createTextNode(line));});button.addEventListener('click',()=>{selectedStation=st.id;draw();showStation();});chart.append(button);
      });
      chart.prepend(picture);
    }
    function showStation(){
      detail.replaceChildren();const station=stations.find(x=>x.id===selectedStation);detail.append(el('h3','',station.label.join(' ')),el('p','',station.meaning));
      current.forEach((entry,i)=>{const row=el('div','subway-station-detail');const h=el('h4','',entry.profile.name);h.style.setProperty('--route-color',color(i));row.append(h);
        if(!entry.route.stops.includes(station.id)){row.append(el('p','visual-note','Not included in this route sketch. That means this map does not establish the stop, not that the engineer never does it.'));}
        const d=dimension(entry.profile,station.dimension);if(d){row.append(el('p','',d.position));const small=el('p','visual-note',(d.evidence||'Evidence')+' · checked '+(d.checked||entry.profile.checked||'date unavailable')+'. '+(d.qualification||''));row.append(small);row.append(evidenceLinks(entry.profile,[station.dimension]));}else row.append(el('p','visual-note','This dimension is not established in the available cache.'));
        detail.append(row);
      });
    }
    function render(){
      const ids=[...new Set(picks.filter(Boolean))];current=ids.map(id=>({profile:profiles.find(p=>p.id===id),route:routes[id]})).filter(x=>x.profile&&x.route);if(!current.length)return;
      if(focusRoute&&!ids.includes(focusRoute))focusRoute=null;
      legend.replaceChildren();routeNotes.replaceChildren();
      current.forEach((entry,i)=>{const button=el('button','subway-line-button');button.type='button';button.setAttribute('aria-pressed',String(focusRoute===entry.profile.id));const sw=el('span','subway-line-swatch');sw.style.background=color(i);sw.setAttribute('aria-hidden','true');button.append(sw,document.createTextNode(entry.profile.name));button.addEventListener('click',()=>{focusRoute=focusRoute===entry.profile.id?null:entry.profile.id;render();});legend.append(button);
        const note=el('section','subway-route-card');note.style.setProperty('--route-color',color(i));note.append(el('h3','',entry.profile.name),el('p','subway-cadence',entry.route.cadence));
        const order=el('p','subway-itinerary',entry.route.stops.map(id=>stations.find(s=>s.id===id).label.join(' ')).join(' → '));order.setAttribute('aria-label','Interpretive itinerary: '+order.textContent);note.append(order,el('p','',entry.route.note));note.append(evidenceLinks(entry.profile,entry.route.ids));routeNotes.append(note);
      });draw();showStation();
    }
    new ResizeObserver(draw).observe(chart);render();
  };
})();
