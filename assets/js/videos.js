(() => {
  'use strict';
  const body = document.getElementById('gv-video-rows');
  if (!body) return;
  const rows = Array.from(body.rows);
  const control = name => document.getElementById(`gv-video-${name}`);
  const fields = ['search', 'category', 'topic', 'channel', 'kind', 'sort'];
  const collator = new Intl.Collator('en', { sensitivity: 'base', numeric: true });
  const topics = new Map();
  rows.forEach(row => {
    row.videoTopics = Array.from(row.querySelectorAll('[data-topic]'));
    row.videoTopics.forEach(link => topics.set(link.dataset.topic, link.textContent.trim()));
    row.searchText = `${row.textContent} ${row.videoTopics.map(link => link.title).join(' ')}`.toLowerCase();
  });
  const populate = (name, entries) => entries.sort((a, b) => collator.compare(a[1], b[1]))
    .forEach(([value, label]) => control(name).add(new Option(label, value)));
  populate('topic', Array.from(topics));
  ['channel', 'kind'].forEach(name => populate(name,
    Array.from(new Set(rows.map(row => row.dataset[name]))).map(value => [value, value])));

  function update() {
    const terms = control('search').value.toLowerCase().trim().split(/\s+/).filter(Boolean);
    const category = control('category').value;
    const topic = control('topic').value;
    const [field, direction] = control('sort').value.split('-');
    rows.sort((a, b) => {
      const av = a.dataset[field], bv = b.dataset[field];
      // Missing publication dates always follow known dates, in either direction.
      if (!av || !bv) return av ? -1 : bv ? 1 : collator.compare(a.dataset.title, b.dataset.title);
      return collator.compare(av, bv) * (direction === 'desc' ? -1 : 1)
        || collator.compare(a.dataset.title, b.dataset.title);
    });
    let count = 0;
    rows.forEach(row => {
      const matches = terms.every(term => row.searchText.includes(term))
        && (!category || row.videoTopics.some(link => link.dataset.category === category))
        && (!topic || row.videoTopics.some(link => link.dataset.topic === topic))
        && ['channel', 'kind'].every(name => !control(name).value || row.dataset[name] === control(name).value);
      row.hidden = !matches;
      if (matches) count++;
      body.appendChild(row);
    });
    control('count').textContent = `${count} of ${rows.length} videos`;
    control('empty').hidden = count !== 0;
  }
  fields.forEach(name => control(name).addEventListener(name === 'search' ? 'input' : 'change', update));
  control('reset').addEventListener('click', () => {
    fields.forEach(name => { control(name).value = name === 'sort' ? 'added-desc' : ''; });
    update();
  });
  control('controls').hidden = false;
  update();
})();
