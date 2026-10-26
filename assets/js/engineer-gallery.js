(() => {
  const initialize = () => window.lucide?.createIcons({attrs:{width:24,height:24}});
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize, {once:true});
  else initialize();
})();
