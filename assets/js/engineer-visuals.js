(() => {
  'use strict';
  function init() {
    const shell = document.querySelector('[data-visual-id]');
    if (!shell) return;
    const root = document.getElementById('visual-root');
    const error = document.getElementById('visual-error');
    const baseurl = shell.dataset.baseurl || '';
    const el = (tag, className, text) => {
      const node = document.createElement(tag);
      if (className) node.className = className;
      if (text !== undefined && text !== null) node.textContent = text;
      return node;
    };
    const link = (label, href) => {
      const a = el('a', '', label);
      a.href = href;
      if (/^https?:\/\//.test(href)) { a.target = '_blank'; a.rel = 'noopener'; }
      return a;
    };
    const profileUrl = (profile, claim) => `${baseurl}/engineers/${profile.id}/${claim ? '#' + claim.toLowerCase() : ''}`;
    const dimension = (profile, id) => profile.dimensions.find(item => item.id === id) || null;
    const evidenceLinks = (profile, ids) => {
      const group = el('div', 'evidence-links');
      ids.forEach(id => {
        const d = dimension(profile, id);
        if (!d) return;
        const row = el('div', 'evidence-line');
        const a = link(d.title, profileUrl(profile, d.claim));
        a.setAttribute('aria-label', `${profile.name}: ${d.title}; ${d.evidence}; research checked ${d.checked || profile.checked}`);
        row.append(a, el('small', '', `${d.evidence} · checked ${d.checked || profile.checked}`));
        if (d.source) row.append(link('Primary source ↗', d.source));
        group.append(row);
      });
      return group;
    };
    try {
      const profiles = JSON.parse(document.getElementById('engineer-visual-data').textContent);
      if (!Array.isArray(profiles) || profiles.length !== 20) throw new Error('The twenty-profile research cache is incomplete.');
      const module = window.EngineerVisuals?.[shell.dataset.visualId];
      if (typeof module !== 'function') throw new Error('The visualization could not be loaded.');
      module({root, profiles, baseurl, el, link, profileUrl, dimension, evidenceLinks,
        icons: () => window.lucide?.createIcons({attrs:{width:18,height:18}})});
    } catch (cause) {
      error.hidden = false;
      error.textContent = `${cause.message} You can still read the research archive from the header.`;
      console.error(cause);
    }
  }
  if (document.readyState === 'complete') init();
  else document.addEventListener('DOMContentLoaded', init, {once:true});
})();
