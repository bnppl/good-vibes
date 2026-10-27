(() => {
  'use strict';
  const search=document.getElementById('gv-view-search');
  const category=document.getElementById('gv-view-category');
  if(!search||!category)return;
  const groups=[...document.querySelectorAll('.gv-directory-group')];
  const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const query=new URLSearchParams(location.search);
  if(query.has('q'))search.value=query.get('q');
  if([...category.options].some(o=>o.value===query.get('collection')))category.value=query.get('collection');
  const render=()=>{
    const terms=normalize(search.value).split(/\s+/).filter(Boolean);let count=0;
    groups.forEach(group=>{
      let visible=0;
      group.querySelectorAll('.gv-directory-card').forEach(card=>{
        const haystack=normalize(card.textContent+' '+card.dataset.tags+' '+group.querySelector('h2').textContent);
        card.hidden=(category.value!=='all'&&category.value!==group.dataset.group)||!terms.every(t=>haystack.includes(t));
        if(!card.hidden){visible++;count++;}
      });group.hidden=!visible;
    });
    document.getElementById('gv-directory-status').textContent=count+' destinations'+(category.value==='all'?' across all collections':' in this collection');
    document.getElementById('gv-directory-empty').hidden=count!==0;
    const q=new URLSearchParams();if(search.value.trim())q.set('q',search.value.trim());if(category.value!=='all')q.set('collection',category.value);history.replaceState(null,'',location.pathname+(q.size?'?'+q:''));
  };
  search.addEventListener('input',render);category.addEventListener('change',render);
  document.getElementById('gv-view-reset').addEventListener('click',()=>{search.value='';category.value='all';render();});
  document.querySelector('.gv-hub-filters').addEventListener('submit',event=>event.preventDefault());
  render();
})();
