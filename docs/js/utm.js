(function(){
  const p=new URLSearchParams(location.search);
  const utm={
    utm_source:p.get('utm_source')||'landing',
    utm_medium:p.get('utm_medium')|| (p.get('utm_medium')==='qr'?'qr':'cta'),
    utm_campaign:p.get('utm_campaign')||'mahitek_core',
    utm_content:p.get('utm_content')||'general'
  };
  document.querySelectorAll('a[data-cta]').forEach(a=>{
    const u=new URL(a.href);
    Object.entries(utm).forEach(([k,v])=>u.searchParams.set(k,v));
    a.href=u.toString();
  });
  if(p.get('utm_medium')==='qr'){document.documentElement.classList.add('from-qr');}
})();
