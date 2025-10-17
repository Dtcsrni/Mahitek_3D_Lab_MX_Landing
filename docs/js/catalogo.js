// Asume productos embebidos como window.PRODUCTOS o JSON estático ya generado
const grid=document.getElementById('grid-catalogo');
(window.PRODUCTOS||[]).slice(0,8).forEach(p=>{
  const el=document.createElement('article');
  el.className='card';
  el.innerHTML=
  `<img loading="lazy" src="${p.imagen}" alt="${p.nombre}">
   <h3>${p.nombre}</h3>
   <p class="material">${p.material}</p>
   <p class="precio">$${p.pvp_mxn.fisico}–$${p.pvp_mxn.online} MXN</p>`;
  grid.appendChild(el);
});
