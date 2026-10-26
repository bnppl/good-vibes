/* Build-time Markdown/frontmatter cache; no runtime data requests. */
(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const node = (tag, className, text) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text !== undefined) el.textContent = text;
    return el;
  };
  const profiles = [...$('engineer-cache').content.querySelectorAll('article[data-person]')];
  const companyMode = document.body.dataset.profileKind === 'company';
  const selectionParam = companyMode ? 'companies' : 'people';
  const focusNames = companyMode
    ? Object.fromEntries([...$('practice-focus').options].filter(option => option.value !== 'all').map(option => [option.value, option.textContent]))
    : {'coding-workflows': 'Coding with AI', 'ai-systems': 'Building AI systems', mixed: 'Both / mixed focus'};
  const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const focusOf = p => focusNames[p.dataset.focus] ? p.dataset.focus : (companyMode ? 'other' : 'coding-workflows');
  const selected = new Set();
  const valid = new Set(profiles.map(p => p.dataset.person));
  const initialQuery = new URLSearchParams(location.search);
  const requested = initialQuery.get(selectionParam);
  const defaultFocus = focusNames[initialQuery.get('focus')] ? initialQuery.get('focus') : (profiles.length ? focusOf(profiles[0]) : null);
  const defaults = companyMode && !focusNames[initialQuery.get('focus')]
    ? ['stripe', 'monzo', 'shopify'].filter(id => valid.has(id))
    : profiles.filter(p => focusOf(p) === defaultFocus).slice(0, 3).map(p => p.dataset.person);
  for (const id of requested !== null ? requested.split(',') : defaults) {
    if (valid.has(id) && selected.size < 3) selected.add(id);
  }
  const dimensions = new Map();
  for (const p of profiles) for (const d of p.querySelectorAll('[data-dimension]')) dimensions.set(d.dataset.dimension, d.dataset.title);
  for (const [id, title] of [...dimensions].sort()) {
    const option = node('option', '', `${id} / ${title}`); option.value = id; $('dimension').append(option);
  }
  $('engineer-search').value = initialQuery.get('q') || '';
  if (focusNames[initialQuery.get('focus')]) $('practice-focus').value = initialQuery.get('focus');
  const requestedDimension = new URLSearchParams(location.search).get('dimension');
  if (dimensions.has(requestedDimension)) $('dimension').value = requestedDimension;
  if (initialQuery.get('view') === 'practice') $('evidence-view').value = 'practice';
  const link = (text, href) => { const a = node('a', '', text); a.href = href; return a; };
  function detailHref(raw, profile) {
    const url = new URL(raw, new URL(profile.dataset.url, location.href));
    if (url.origin === location.origin) url.pathname = url.pathname.replace(/\.md$/, '.html');
    return url.href;
  }
  function renderCard(p) {
    const card = node('article', 'profile-card');
    const head = node('header', 'profile-head');
    head.append(node('span', 'eyebrow', 'Engineering field card'));
    const initials = p.dataset.name.split(/\s+/).map(w => w[0]).slice(0, 3).join('');
    const monogram = node('div', 'profile-monogram', initials); monogram.setAttribute('aria-hidden', 'true'); head.append(monogram);
    head.append(node('h2', '', p.dataset.name), node('p', 'tagline', p.querySelector('.cached-tagline')?.textContent || ''), node('p', '', p.querySelector('.cached-summary')?.textContent || ''));
    head.append(node('span', 'focus-badge', focusNames[focusOf(p)]));
    const focusNote = p.querySelector('.cached-focus-note')?.textContent.trim();
    if (focusNote) head.append(node('p', 'profile-focus-note', focusNote));
    const companyContext = p.querySelector('.cached-company-context')?.textContent.trim();
    if (companyContext) head.append(node('p', 'profile-meta', companyContext));
    head.append(node('p', 'profile-meta', `Publications since ${p.dataset.since || 'not established'} · Through ${p.dataset.cutoff || 'unknown'} · Checked ${p.dataset.checked || 'unknown'}`));
    const strengths = p.querySelector('.cached-strengths')?.cloneNode(true);
    if (strengths) { strengths.className = 'strengths'; head.append(strengths); }
    const links = node('div', 'profile-links'); links.append(link('Full research ↗', p.dataset.url));
    if (p.dataset.slides) links.append(link('Slideshow →', p.dataset.slides));
    head.append(links); card.append(head);
    card.append(node('div', 'profile-tools', p.querySelector('.cached-tools')?.textContent || 'Tooling not established.'));
    for (const [id, title] of [...dimensions].sort()) {
      if ($('dimension').value !== 'all' && $('dimension').value !== id) continue;
      const d = [...p.querySelectorAll('[data-dimension]')].find(row => row.dataset.dimension === id);
      const section = node('section', 'dimension-row');
      section.append(node('h3', '', `${id} / ${title}`));
      const kind = d?.dataset.kind || 'Not established';
      const practiceOnly = $('evidence-view').value === 'practice';
      const windowReviewed = Boolean(p.dataset.since && d?.dataset.published);
      const qualifies = windowReviewed && (!practiceOnly || ['Personal use', 'Published artifact', 'Reported company use', 'Reported team use'].includes(kind));
      const evidence = qualifies ? d?.dataset.evidence || 'Not established' : 'Not established';
      const badge = node('span', 'evidence-badge', evidence); badge.dataset.evidence = evidence; section.append(badge);
      section.append(node('span', 'kind-badge', kind));
      section.append(node('p', '', qualifies ? d?.querySelector('.cached-position')?.textContent || 'No cached evidence for this dimension.' : windowReviewed ? 'Recent reported use or an inspected artifact is not established here. The documented policy, advice or commentary remains in the evidence below.' : 'This cached profile has not been reviewed for the publication window. Its earlier claim is retained below as unreviewed evidence.'));
      section.append(node('p', 'source-dates', `${d?.dataset.format || 'Source format not established'} · Published: ${d?.dataset.published || 'not established'} · Practice: ${d?.dataset.practice || 'not established'}`));
      if (d) {
        const details = node('details'); details.append(node('summary', '', `${d.dataset.claim || 'Evidence'} · sources and qualifications`));
        details.append(node('p', '', d.querySelector('.cached-qualification')?.textContent || ''));
        if (!qualifies) details.append(node('p', '', d.querySelector('.cached-position')?.textContent || ''));
        details.append(node('p', '', `Claim checked ${d.dataset.checked || 'unknown'}`));
        const local = d.querySelector('.cached-detail');
        if (local) details.append(link('Read cached evidence', detailHref(local.getAttribute('href'), p)));
        const source = d.querySelector('.cached-source');
        if (source) details.append(link('Primary source ↗', source.href));
        section.append(details);
      }
      card.append(section);
    }
    return card;
  }
  function filterChoices() {
    const query = normalize($('engineer-search').value.trim());
    const focus = $('practice-focus').value;
    let matches = 0;
    for (const label of $('choices').children) {
      const p = profiles.find(profile => profile.dataset.person === label.dataset.person);
      const matched = (focus === 'all' || focusOf(p) === focus) && normalize(`${p.dataset.name} ${p.dataset.aliases || ''}`).includes(query);
      if (matched) matches++;
      label.hidden = !matched && !selected.has(p.dataset.person);
    }
    $('picker-status').textContent = `${matches} ${matches === 1 ? 'match' : 'matches'}. Selected ${companyMode ? 'companies' : 'people'} stay visible; choose up to three.`;
  }
  function saveUrl() {
    const url = new URL(location.href); url.searchParams.set(selectionParam, [...selected].join(','));
    if ($('dimension').value === 'all') url.searchParams.delete('dimension'); else url.searchParams.set('dimension', $('dimension').value);
    const query = $('engineer-search').value.trim();
    if (query) url.searchParams.set('q', query); else url.searchParams.delete('q');
    if ($('practice-focus').value === 'all') url.searchParams.delete('focus'); else url.searchParams.set('focus', $('practice-focus').value);
    if ($('evidence-view').value === 'all') url.searchParams.delete('view'); else url.searchParams.set('view', 'practice');
    history.replaceState(null, '', url);
  }
  function render() {
    const chosen = profiles.filter(p => selected.has(p.dataset.person));
    $('cards').style.setProperty('--profiles', Math.max(1, chosen.length));
    $('cards').replaceChildren(...chosen.map(renderCard));
    if (!chosen.length) $('cards').append(node('p', 'empty-state', profiles.length ? (companyMode ? 'Choose a company to open its field card.' : 'Choose an engineer to open their field card.') : (companyMode ? 'No company research profiles are available yet.' : 'No cached profiles yet. Run /engineer with a person’s name, then rebuild the site.')));
    $('comparison-status').textContent = `${chosen.length} selected · ${profiles.length} cached ${profiles.length === 1 ? 'profile' : 'profiles'}.` + (profiles.length === 1 ? ' Add a second researched profile to compare approaches.' : ' On mobile, swipe across the cards.');
    for (const input of $('choices').querySelectorAll('input')) input.disabled = selected.size >= 3 && !input.checked;
    $('clear-selection').disabled = !selected.size;
    const focuses = new Set(chosen.map(focusOf));
    $('scope-notice').hidden = focuses.size < 2;
    $('scope-notice').textContent = companyMode
      ? 'These cases come from different industries. Compare the task, team scope, verification and approval boundaries before transferring a technique. One project does not establish a company-wide policy.'
      : 'These profiles focus on different kinds of work. Compare the named engineering decision and its evidence; AI-product evaluation does not establish a personal coding-agent policy.';
    filterChoices(); saveUrl();
  }
  for (const p of profiles) {
    const label = node('label', 'choice'); label.dataset.person = p.dataset.person; const input = node('input'); input.type = 'checkbox'; input.value = p.dataset.person; input.checked = selected.has(input.value);
    input.addEventListener('change', () => { if (input.checked) selected.add(input.value); else selected.delete(input.value); render(); });
    label.append(input, document.createTextNode(p.dataset.name)); $('choices').append(label);
  }
  $('engineer-picker').addEventListener('submit', e => e.preventDefault());
  $('dimension').addEventListener('change', render);
  $('evidence-view').addEventListener('change', render);
  $('engineer-search').addEventListener('input', () => { filterChoices(); saveUrl(); });
  $('practice-focus').addEventListener('change', () => { filterChoices(); saveUrl(); });
  $('clear-selection').addEventListener('click', () => {
    selected.clear();
    for (const input of $('choices').querySelectorAll('input')) input.checked = false;
    render();
  });
  render();
})();
