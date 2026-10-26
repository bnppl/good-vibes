/* Information cards are rendered from the weekly Markdown by Jekyll. */
(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const key = 'good-vibes-learning-deck-v2';
  const cards = [], weeks = [];
  let index = 0, saved = {}, bookmarks = new Set(), storageAvailable = true, rendered = false;

  function afterLabel(element) {
    if (!element) throw new Error('Missing card section');
    const copy = element.cloneNode(true);
    copy.querySelector('strong')?.remove();
    return copy.innerHTML.trim();
  }

  function parse() {
    for (const section of $('deck-source').content.querySelectorAll('section[data-week]')) {
      for (const link of section.querySelectorAll('a[href]')) {
        const url = new URL(link.getAttribute('href'), new URL(section.dataset.url, location.href));
        if (url.origin === location.origin) url.pathname = url.pathname.replace(/\.md$/, '.html');
        link.href = url.href;
      }
      const week = { number: Number(section.dataset.week), title: section.dataset.title.replace(/^\d+\s*·\s*/, ''), cards: [] };
      for (const heading of section.querySelectorAll('h2')) {
        const match = heading.textContent.trim().match(/^Card (\d+)$/);
        if (!match) continue; // Labs remain optional in the notes, outside the feed.
        const fragment = document.createElement('div');
        for (let node = heading.nextElementSibling; node && node.tagName !== 'H2'; node = node.nextElementSibling) fragment.append(node.cloneNode(true));
        const paragraphs = [...fragment.querySelectorAll(':scope > p')];
        const labelled = label => paragraphs.find(p => p.querySelector('strong')?.textContent.trim() === label);
        const quote = fragment.querySelector('blockquote');
        const hook = quote?.querySelector('strong');
        const links = paragraphs.flatMap(p => [...p.querySelectorAll('a')]);
        if (!hook) throw new Error('Missing card hook');
        const card = {
          id: `card-${match[1]}`, number: Number(match[1]), week,
          topic: fragment.querySelector('h3')?.textContent || '',
          hook: hook.textContent,
          idea: [...quote.querySelectorAll('p')].filter(p => !p.querySelector('strong')).map(p => p.outerHTML).join(''),
          example: afterLabel(labelled('In the wild:')),
          takeaway: afterLabel(labelled('Takeaway:')),
          practice: links.find(a => /Optional practice:/.test(a.textContent)),
          sources: links.filter(a => !/Optional practice:|Next card|All decks|lab/i.test(a.textContent))
        };
        if (!card.idea || !card.practice || !card.sources.length) throw new Error('Incomplete information card');
        week.cards.push(cards.length); cards.push(card);
      }
      weeks.push(week);
    }
    if (cards.length !== 16 || weeks.length !== 4) throw new Error('Expected 16 ideas in four collections');
  }

  function readSaved() {
    try {
      const raw = localStorage.getItem(key);
      const data = JSON.parse(raw || localStorage.getItem('good-vibes-learning-deck-v1') || '{}');
      saved = data && typeof data === 'object' ? data : {};
      bookmarks = new Set(Array.isArray(saved.bookmarks) ? saved.bookmarks.filter(id => cards.some(c => c.id === id)) : []);
    } catch (_) { storageAvailable = false; }
  }

  function persist() {
    try { localStorage.setItem(key, JSON.stringify({card: cards[index].id, bookmarks: [...bookmarks]})); }
    catch (_) { storageAvailable = false; }
    $('storage-note').textContent = storageAvailable ? 'Your place and saved ideas stay in this browser.' : 'Enjoy the ideas. Your browser is not saving your place.';
  }

  function navigate(next) {
    if (!cards[next]) return;
    const hash = `#${cards[next].id}`;
    if (location.hash === hash) route(); else location.hash = hash;
  }

  function route() {
    const id = location.hash.slice(1).split('/')[0]; // Old /recall and /try links still reach the same idea.
    let found = cards.findIndex(c => c.id === id);
    const lab = id.match(/^lab-([1-4])$/);
    if (lab) found = weeks[Number(lab[1]) - 1].cards[0];
    if (found < 0) { navigate(0); return; }
    index = found;
    history.replaceState(null, '', `#${cards[index].id}`);
    render(); persist();
    if (rendered) {
      $('lesson-title').focus({preventScroll: true});
      if ($('lesson').getBoundingClientRect().top < 0) $('lesson').scrollIntoView({block: 'start'});
    }
    rendered = true;
  }

  function render() {
    const card = cards[index];
    $('weeks').replaceChildren(...weeks.map(week => {
      const b = document.createElement('button'); b.type = 'button'; b.className = 'week-button';
      b.setAttribute('aria-current', String(card.week === week));
      b.textContent = `${String(week.number).padStart(2, '0')} / ${week.title}`;
      b.addEventListener('click', () => navigate(week.cards[0])); return b;
    }));
    $('card-picker').replaceChildren(...card.week.cards.map(i => {
      const b = document.createElement('button'); b.type = 'button'; b.className = 'card-dot';
      b.setAttribute('aria-current', String(i === index)); b.setAttribute('aria-label', `Idea ${cards[i].number}: ${cards[i].hook}`);
      b.addEventListener('click', () => navigate(i)); return b;
    }));
    $('lesson').dataset.theme = card.week.number;
    $('deck-label').textContent = card.week.title;
    $('card-count').textContent = `${card.week.cards.indexOf(index) + 1} / ${card.week.cards.length}`;
    $('card-label').textContent = 'AI engineering / small truths';
    $('topic').textContent = card.topic;
    $('lesson-title').textContent = card.hook;
    $('idea').innerHTML = card.idea;
    $('example').innerHTML = card.example;
    $('takeaway').innerHTML = card.takeaway;
    $('card-number').textContent = String(card.number).padStart(2, '0');
    const marked = bookmarks.has(card.id);
    $('save').textContent = marked ? '♥ Saved' : '♡ Save idea'; $('save').setAttribute('aria-pressed', String(marked));
    $('position').textContent = `${index + 1} / ${cards.length} ideas`;
    $('previous').disabled = index === 0;
    $('next').textContent = index === cards.length - 1 ? 'Back to the start ↻' : 'Next idea →';
    $('deeper').open = false;
    $('full-exercise').href = card.practice.href;
    $('source-links').replaceChildren(...card.sources.map(a => a.cloneNode(true)));
    $('saved-link').textContent = bookmarks.size ? `${bookmarks.size} saved ${bookmarks.size === 1 ? 'idea' : 'ideas'} ↗` : 'No saved ideas yet';
    $('saved-link').href = `#${cards.find(c => bookmarks.has(c.id))?.id || card.id}`;
    $('saved-link').hidden = bookmarks.size === 0;
  }

  function advance(direction) { navigate(index + direction); }
  try {
    parse(); readSaved(); $('app').hidden = false; $('loading').hidden = true;
    document.querySelector('.skip-link').addEventListener('click', e => { e.preventDefault(); $('lesson-title').focus(); });
    $('previous').addEventListener('click', () => advance(-1));
    $('next').addEventListener('click', () => index === cards.length - 1 ? navigate(0) : advance(1));
    $('save').addEventListener('click', () => {
      const id = cards[index].id; if (bookmarks.has(id)) bookmarks.delete(id); else bookmarks.add(id);
      render(); persist();
    });
    window.addEventListener('hashchange', route);
    window.addEventListener('keydown', e => {
      if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || /INPUT|TEXTAREA|SELECT/.test(e.target.tagName) || e.target.isContentEditable) return;
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); advance(e.key === 'ArrowRight' ? 1 : -1); }
    });
    let start = null;
    $('lesson').addEventListener('touchstart', e => { start = e.touches.length === 1 && !e.target.closest('a,button,summary') ? {x:e.touches[0].clientX,y:e.touches[0].clientY} : null; }, {passive:true});
    $('lesson').addEventListener('touchend', e => {
      if (!start || !e.changedTouches.length) return;
      const dx=e.changedTouches[0].clientX-start.x,dy=e.changedTouches[0].clientY-start.y;start=null;
      if (Math.abs(dx)>70 && Math.abs(dx)>Math.abs(dy)*2) advance(dx<0?1:-1);
    }, {passive:true});
    $('lesson').addEventListener('touchcancel', () => { start=null; }, {passive:true});
    if (location.hash) route(); else navigate(Math.max(0,cards.findIndex(c => c.id === saved.card)));
  } catch (error) {
    $('app').hidden=true; $('loading').hidden=false;
    $('loading').replaceChildren(document.createTextNode('The ideas could not load. '));
    const link=document.querySelector('.notes-link').cloneNode(true); link.textContent='Read the card notes instead.'; $('loading').append(link);
    console.error('Learning deck:',error);
  }
})();
