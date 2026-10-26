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
  const selected = new Set();
  const valid = new Set(profiles.map(p => p.dataset.person));
  const requested = new URLSearchParams(location.search).get('people');
  for (const id of requested !== null ? requested.split(',') : profiles.slice(0, 3).map(p => p.dataset.person)) {
    if (valid.has(id) && selected.size < 3) selected.add(id);
  }
  const dimensions = new Map();
  for (const p of profiles) for (const d of p.querySelectorAll('[data-dimension]')) dimensions.set(d.dataset.dimension, d.dataset.title);
  for (const [id, title] of [...dimensions].sort()) {
    const option = node('option', '', `${id} / ${title}`); option.value = id; $('dimension').append(option);
  }
  const requestedDimension = new URLSearchParams(location.search).get('dimension');
  if (dimensions.has(requestedDimension)) $('dimension').value = requestedDimension;
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
    head.append(node('p', 'profile-meta', `Research checked ${p.dataset.checked || 'unknown'} · Cutoff ${p.dataset.cutoff || 'unknown'}`));
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
      const evidence = d?.dataset.evidence || 'Not established';
      const badge = node('span', 'evidence-badge', evidence); badge.dataset.evidence = evidence; section.append(badge);
      section.append(node('p', '', d?.querySelector('.cached-position')?.textContent || 'No cached evidence for this dimension.'));
      if (d) {
        const details = node('details'); details.append(node('summary', '', `${d.dataset.claim || 'Evidence'} · sources and qualifications`));
        details.append(node('p', '', d.querySelector('.cached-qualification')?.textContent || ''));
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
  function render() {
    const chosen = profiles.filter(p => selected.has(p.dataset.person));
    $('cards').style.setProperty('--profiles', Math.max(1, chosen.length));
    $('cards').replaceChildren(...chosen.map(renderCard));
    if (!chosen.length) $('cards').append(node('p', 'empty-state', profiles.length ? 'Choose an engineer to open their field card.' : 'No cached profiles yet. Run /engineer with a person’s name, then rebuild the site.'));
    $('comparison-status').textContent = `${chosen.length} selected · ${profiles.length} cached ${profiles.length === 1 ? 'profile' : 'profiles'}.` + (profiles.length === 1 ? ' Add a second researched profile to compare approaches.' : ' On mobile, swipe across the cards.');
    for (const input of $('choices').querySelectorAll('input')) input.disabled = selected.size >= 3 && !input.checked;
    const url = new URL(location.href); url.searchParams.set('people', [...selected].join(','));
    if ($('dimension').value === 'all') url.searchParams.delete('dimension'); else url.searchParams.set('dimension', $('dimension').value);
    history.replaceState(null, '', url);
  }
  for (const p of profiles) {
    const label = node('label', 'choice'); const input = node('input'); input.type = 'checkbox'; input.value = p.dataset.person; input.checked = selected.has(input.value);
    input.addEventListener('change', () => { if (input.checked) selected.add(input.value); else selected.delete(input.value); render(); });
    label.append(input, document.createTextNode(p.dataset.name)); $('choices').append(label);
  }
  $('engineer-picker').addEventListener('submit', e => e.preventDefault());
  $('dimension').addEventListener('change', render);
  render();
})();
