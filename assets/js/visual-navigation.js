/* Native details provides the navigation without JavaScript; enhance dismissal. */
(() => {
  'use strict';
  document.querySelectorAll('.gv-switcher').forEach(menu=>menu.addEventListener('toggle',()=>{
    if(menu.open)menu.querySelectorAll('a[aria-current="page"]').forEach(link=>{link.href=location.href;});
  }));
  document.addEventListener('pointerdown',event=>{
    document.querySelectorAll('.gv-switcher[open]').forEach(menu=>{if(!menu.contains(event.target))menu.open=false;});
  });
  document.addEventListener('focusin',event=>{
    document.querySelectorAll('.gv-switcher[open]').forEach(menu=>{if(!menu.contains(event.target))menu.open=false;});
  });
  document.addEventListener('keydown',event=>{
    if(event.key!=='Escape')return;
    const menu=document.querySelector('.gv-switcher[open]');
    if(menu){menu.open=false;menu.querySelector('summary').focus();}
  });
})();
