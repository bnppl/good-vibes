/* Evidence atlas: data comes only from the reviewed local research cache. */
(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const el = (tag, cls, text) => { const n = document.createElement(tag); if (cls) n.className = cls; if (text !== undefined) n.textContent = text; return n; };
  const normalize = s => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const base = document.body.dataset.base;
  const internal = path => base.replace(/\/$/, '') + '/' + path.replace(/^\//, '');
  const anchor = (label, href) => { const a = el('a', '', label); a.href = href; return a; };
  const category = kind => /Personal use|Reported .*use/.test(kind) ? 'use' : /artifact/i.test(kind) ? 'artifact' : 'advice';
  const dotClass = cat => cat === 'use' ? 'reported' : cat;
  let data, entities, stage = 'define', type = 'all';
  function setUrl() {
    const q = new URLSearchParams();
    if (stage !== 'define') q.set('stage', stage);
    if (type !== 'all') q.set('type', type);
    if ($('search').value.trim()) q.set('q', $('search').value.trim());
    if ($('entity').value !== 'all') q.set('entity', $('entity').value);
    if ($('evidence').value !== 'all') q.set('evidence', $('evidence').value);
    history.replaceState(null, '', location.pathname + (q.size ? '?' + q : ''));
  }
  function readUrl() {
    const q = new URLSearchParams(location.search);
    stage = [...data.stages.map(s => s.id), 'all'].includes(q.get('stage')) ? q.get('stage') : 'define';
    type = data.types.includes(q.get('type')) ? q.get('type') : 'all';
    $('search').value = q.get('q') || '';
    const entity = q.get('entity');
    $('entity').value = ['individual', 'company'].includes(entity) || entities.has(entity) ? entity : 'all';
    $('evidence').value = ['use', 'artifact', 'advice'].includes(q.get('evidence')) ? q.get('evidence') : 'all';
  }
  function filtered() {
    const terms = normalize($('search').value).split(/\s+/).filter(Boolean);
    const entity = $('entity').value;
    const evidence = $('evidence').value;
    return data.items.map(item => {
      const observations = item.observations.filter(o => {
        const e = entities.get(o.entity);
        if (entity !== 'all' && entity !== e.kind && entity !== e.id) return false;
        if (evidence !== 'all' && category(o.kind) !== evidence) return false;
        const haystack = normalize([item.name, item.usage, item.type, e.name, e.kind, o.kind, o.claim, o.qualification, o.published, o.practice].join(' '));
        return terms.every(t => haystack.includes(t));
      });
      return { ...item, observations };
    }).filter(item => item.observations.length && (type === 'all' || type === item.type));
  }
  function renderCard(item) {
    const card = el('details', 'tool-card'); card.id = item.id;
    const summary = el('summary', 'tool-summary');
    summary.append(el('span', 'card-type', (stage === 'all' ? data.stages.find(s => s.id === item.stage).name + ' / ' : '') + item.type), el('h3', '', item.name), el('p', '', item.usage));
    const chips = el('div', 'adopters');
    const seen = new Set();
    item.observations.forEach(o => {
      const key = o.entity + o.kind; if (seen.has(key)) return; seen.add(key);
      const chip = el('span', 'person-chip');
      chip.title = entities.get(o.entity).kind + ' · ' + o.kind;
      chip.append(el('span', 'dot ' + dotClass(category(o.kind))), document.createTextNode(entities.get(o.entity).name));
      chips.append(chip);
    });
    summary.append(chips); card.append(summary);
    const body = el('div', 'card-detail');
    item.observations.forEach(o => {
      const entity = entities.get(o.entity), obs = el('article', 'observation');
      const head = el('div', 'observation-head');
      head.append(anchor(entity.name + (entity.kind === 'company' ? ' · company' : ' · individual'), internal('/' + entity.path + '/')), el('span', 'badge ' + dotClass(category(o.kind)), o.kind));
      obs.append(head, el('p', 'claim', o.claim));
      const dates = el('dl', 'dates');
      for (const [label, value] of [['Publication / revision', o.published], ['Practice / case date', o.practice]]) { const group = el('div'); group.append(el('dt', '', label), el('dd', '', value)); dates.append(group); }
      obs.append(dates, el('p', 'limit', o.qualification));
      const links = el('div', 'source-links');
      links.append(anchor('Primary evidence ↗', o.source), anchor('Cached claim & context', internal(o.detail)), anchor('Source record', internal(o.register)));
      obs.append(links, el('p', 'check-date', 'Source checked in cache: ' + o.checked + ' · ' + o.format));
      body.append(obs);
    });
    card.append(body); return card;
  }
  function render() {
    const matches = filtered();
    const shown = matches.filter(i => stage === 'all' || i.stage === stage).sort((a,b) => data.stages.findIndex(s => s.id === a.stage) - data.stages.findIndex(s => s.id === b.stage));
    const current = data.stages.find(s => s.id === stage);
    $('stage-kicker').textContent = stage === 'all' ? 'THE WHOLE EVIDENCE INDEX' : stage === 'platform' ? 'CROSS-CUTTING FOUNDATION' : 'STAGE ' + String(data.stages.findIndex(s => s.id === stage) + 1).padStart(2, '0');
    $('stage-title').textContent = current ? current.name : 'All stages';
    $('stage-description').textContent = current ? current.description : 'Browse all indexed tools, skills and processes. Expand a card for the attributed evidence.';
    const associations = shown.reduce((n, i) => n + i.observations.length, 0);
    $('result-count').textContent = `${shown.length} ${shown.length === 1 ? "entry" : "entries"} · ${associations} ${associations === 1 ? "attribution" : "attributions"}`;
    $('cards').replaceChildren(...shown.map(renderCard));
    $('empty').hidden = !!shown.length;
    document.querySelectorAll('[data-stage]').forEach(button => {
      button.setAttribute('aria-current', String(button.dataset.stage === stage));
      button.querySelector('.count').textContent = button.dataset.stage === 'all' ? matches.length : matches.filter(i => i.stage === button.dataset.stage).length;
    });
    document.querySelectorAll('[data-type]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.type === type)));
    setUrl();
  }
  function reset() { stage = 'define'; type = 'all'; $('search').value = ''; $('entity').value = 'all'; $('evidence').value = 'all'; render(); }
  async function boot() {
    try {
      const response = await fetch(document.body.dataset.catalog); if (!response.ok) throw new Error('Catalogue HTTP ' + response.status);
      data = await response.json(); entities = new Map(data.entities.map(e => [e.id, e]));
      for (const kind of ['individual', 'company']) {
        const group = el('optgroup'); group.label = kind === 'individual' ? 'Individuals' : 'Companies';
        data.entities.filter(e => e.kind === kind).sort((a,b) => a.name.localeCompare(b.name)).forEach(e => { const option = el('option', '', e.name); option.value = e.id; group.append(option); });
        $('entity').append(group);
      }
      for (const [i,s] of [...data.stages, {id:'all',name:'All stages'}].entries()) {
        const button = el('button', 'stage-button' + (s.id === 'platform' ? ' cross' : '')); button.type = 'button'; button.dataset.stage = s.id;
        button.append(el('span','number',s.id === 'all' ? '↻' : s.id === 'platform' ? '↔' : String(i+1).padStart(2,'0')), el('span','',s.name), el('span','count'));
        button.addEventListener('click', () => { stage = s.id; render(); }); $('stages').append(button);
      }
      ['all', ...data.types].forEach(t => { const button = el('button', '', t === 'all' ? 'All types' : t[0].toUpperCase() + t.slice(1)); button.type = 'button'; button.dataset.type = t; button.addEventListener('click', () => { type = t; render(); }); $('types').append(button); });
      [['40','profiles reviewed'], [data.items.length,'entries'], [data.items.reduce((n,i)=>n+i.observations.length,0),'attributions']].forEach(([n,label]) => { const stat = el('div','stat'); stat.append(el('strong','',n), document.createTextNode(label)); $('headline-stats').append(stat); });
      const gaps = data.entities.filter(e => !e.observations).length;
      $('coverage-count').textContent = ` · ${gaps} without entries`;
      [...data.entities].sort((a,b)=>a.observations-b.observations || a.name.localeCompare(b.name)).forEach(e => { const row = el('div','coverage-person'); row.append(anchor(e.name,internal('/'+e.path+'/')),el('p','',`${e.observations} indexed associations · ${e.kind}`),el('p','',e.summary)); if (!e.observations && e.id.endsWith('andrej-karpathy')) row.append(el('p','','The recent concrete autoresearch example concerns an ML experiment; excluded from this product-development tooling index.')); $('coverage-list').append(row); });
      readUrl(); render();
      $('search').addEventListener('input', () => { stage = $('search').value.trim() ? 'all' : 'define'; render(); });
      $('entity').addEventListener('change', () => { stage = 'all'; render(); });
      $('evidence').addEventListener('change', render);
      $('reset').addEventListener('click',reset); $('empty-reset').addEventListener('click',reset);
      window.addEventListener('popstate',()=>{readUrl();render();});
      $('share').addEventListener('click', async () => { const button = $('share'); try { await navigator.clipboard.writeText(location.href); button.textContent='Link copied'; } catch { button.textContent='Copy the address bar link'; } setTimeout(()=>{button.textContent='Copy view link';},2400); });
    } catch (error) { $('stage-description').textContent = ''; const p = el('p','loading-error','The interactive catalogue could not load. '); p.append(anchor('Open the complete evidence list.',internal('/pipeline/catalogue.html'))); $('cards').replaceChildren(p); $('result-count').textContent = 'Load failed'; }
  }
  boot();
})();
