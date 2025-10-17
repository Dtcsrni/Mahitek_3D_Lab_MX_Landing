---
layout: default
title: Mahitek 3D Lab
permalink: /
---

<script>window.PRODUCTOS = {{ site.data.productos | jsonify }};</script>

<section class="section section--hero" id="hero" style="background-image:linear-gradient(135deg, rgba(20,24,34,0.7), rgba(36,18,58,0.6)), url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=70&fm=webp');background-size:cover;background-position:center;">
  <div class="wrapper">
    <div class="hero__panel">
      <span class="hero__eyebrow"><span class="badge">PETG como base</span> Tiradas cortas y personalización</span>
      <h1 class="hero__title">Impresión 3D funcional que resiste el uso diario</h1>
      <p class="hero__description">Somos Mahitek 3D Lab y fabricamos piezas en PETG optimizadas para tiradas cortas, iteraciones rápidas y personalización de bajo volumen. PLA está disponible cuando la aplicación lo amerita.</p>
      <div class="hero__cta">
        <a data-cta="instagram" class="btn btn--ig" href="{{ site.data.canales.instagram }}">Instagram</a>
        <a data-cta="facebook"  class="btn btn--fb" href="{{ site.data.canales.facebook }}">Facebook</a>
      </div>
      <ul class="list-inline" aria-label="Canales clave">
        <li>Material base PETG</li>
        <li>Pedidos mínimos flexibles</li>
        <li>Entrega local CDMX y envíos nacionales</li>
      </ul>
    </div>
  </div>
</section>

<section class="section" id="valor">
  <div class="wrapper">
    <h2 class="section__heading">Valor que habilita equipos ágiles</h2>
    <p class="section__lead">Con PETG como estándar logramos piezas resistentes a impacto, temperatura y humedad. Documentamos cada lote con parámetros Ender 3 V3, entregando predictibilidad en iteraciones y remplazos.</p>
    <div class="grid grid--three">
      <article class="card">
        <h3>Materiales pensados para uso real</h3>
        <p>Prioridad PETG con perfiles 240–250&nbsp;°C boquilla y 80–85&nbsp;°C cama. Ajustamos PLA cuando el peso o acabado son determinantes.</p>
      </article>
      <article class="card">
        <h3>Soporte en personalización</h3>
        <p>Validamos archivos, proponemos refuerzos y entregamos prototipos beta en 24&nbsp;h hábiles. Asesoramos desde la cotización.</p>
      </article>
      <article class="card">
        <h3>Calidad lista para operar</h3>
        <p>Controles de tolerancias ±0.2&nbsp;mm, acabado consistente y empaque seguro con identificación por lote.</p>
      </article>
    </div>
  </div>
</section>

<section class="section" id="destacados">
  <div class="wrapper">
    <h2 class="section__heading">Destacados recientes</h2>
    <p class="section__lead">Piezas funcionales impresas en PETG y PLA según requerimientos de fuerza, temperatura o estética.</p>
    <div id="grid-catalogo" class="grid grid--three catalogo__grid" aria-live="polite"></div>
  </div>
</section>

<section class="section" id="personalizacion">
  <div class="wrapper">
    <h2 class="section__heading">Personalización guiada</h2>
    <div class="grid grid--three">
      <article class="card">
        <h3>Brief técnico rápido</h3>
        <p>Comparte medidas, uso y fotos. Respondemos con materiales sugeridos, coste estimado y tiempos de entrega.</p>
      </article>
      <article class="card">
        <h3>Iteraciones con control</h3>
        <p>Subimos ajustes en malla, topología y soportes según funcionalidad. Documentamos cada versión.</p>
      </article>
      <article class="card">
        <h3>Entregas listas para integrar</h3>
        <p>Empaques rotulados y checklist de verificación. Opciones de pick-up o envío nacional.</p>
      </article>
    </div>
  </div>
</section>

<section class="section" id="calidad">
  <div class="wrapper">
    <h2 class="section__heading">Calidad y empaque</h2>
    <p class="section__lead">Parámetros calibrados para Ender 3 V3: garantizamos repetibilidad en piezas PETG y PLA.</p>
    <div class="grid grid--three">
      <article class="card">
        <h3>Perfil PETG</h3>
        <p>PETG: 240–250&nbsp;°C boquilla, 80–85&nbsp;°C cama, fan 30–50&nbsp;%, 40–60&nbsp;mm/s, superficie PEI. Ideales para partes estructurales y exteriores.</p>
      </article>
      <article class="card">
        <h3>Perfil PLA</h3>
        <p>PLA: 195–210&nbsp;°C boquilla, 50–60&nbsp;°C cama, fan 100&nbsp;%, 50–70&nbsp;mm/s, superficie PEI. Usamos PLA cuando el acabado o peso lo requieren.</p>
      </article>
      <article class="card">
        <h3>Costos de empaque</h3>
        <p>Empaque unitario: bolsa holográfica $0.64, sticker $0.90; en línea suma poly flyer $0.64. Totales físico $1.44–$1.64, online $2.08–$2.28.</p>
      </article>
    </div>
  </div>
</section>

<section class="section" id="precios">
  <div class="wrapper">
    <h2 class="section__heading">Precios guía</h2>
    <p class="section__lead">Referencias considerando tiradas cortas en PETG. Cotizamos por pieza según peso, tiempo de impresión y postproceso.</p>
    <div class="tiers">
      <article class="tier">
        <h3 class="tier__title">Iteraciones rápidas</h3>
        <ul>
          <li>Hasta 80&nbsp;g PETG</li>
          <li>Entrega 48&nbsp;h</li>
          <li>$180–$260 MXN</li>
        </ul>
      </article>
      <article class="tier">
        <h3 class="tier__title">Funcional avanzado</h3>
        <ul>
          <li>Hasta 150&nbsp;g PETG</li>
          <li>Refuerzos internos y roscas</li>
          <li>$260–$420 MXN</li>
        </ul>
      </article>
      <article class="tier">
        <h3 class="tier__title">Series cortas</h3>
        <ul>
          <li>10–40 unidades</li>
          <li>Control de calidad por lote</li>
          <li>Descuentos desde 12&nbsp;%</li>
        </ul>
      </article>
    </div>
  </div>
</section>

<section class="section" id="faqs">
  <div class="wrapper">
    <h2 class="section__heading">FAQs</h2>
    <div class="faq">
      <h3>¿Cuál es el pedido mínimo?</h3>
      <p>Podemos fabricar desde una sola pieza. Recomendarás tiradas de 3+ para validar funcionalidad y optimizar coste.</p>
    </div>
    <div class="faq">
      <h3>¿Qué tan resistente es el PETG?</h3>
      <p>Trabajamos con líneas de 0.45&nbsp;mm y paredes mínimas de 1.2&nbsp;mm para soportar impacto moderado, resistencia térmica y ambientes húmedos.</p>
    </div>
    <div class="faq">
      <h3>¿Realizan postprocesos?</h3>
      <p>Incluimos limpieza y desbarbado. Opcionales: pulido ligero, ensamble de insertos, pintura base.</p>
    </div>
  </div>
</section>

<section class="section section--contact" id="contacto">
  <div class="wrapper">
    <h2 class="section__heading">Contacto</h2>
    <p class="section__lead">Escríbenos por Instagram o Facebook con tu idea. Añadimos UTM a cada CTA para identificar campañas y orígenes.</p>
    <div class="grid" style="gap:2.5rem;">
      <article class="card">
        <h3>Información útil</h3>
        <ul class="highlight-list">
          <li>Tiempo estándar de fabricación: 2–4 días hábiles</li>
          <li>Reimpresiones sin costo cuando hay fallas de producción</li>
          <li>Pagos vía transferencia, PayPal o efectivo</li>
        </ul>
      </article>
      <article class="card">
        <h3>Formulario rápido</h3>
        <form aria-label="Formulario de contacto">
          <label>
            <span>Nombre y proyecto</span>
            <input type="text" name="nombre" placeholder="Ej. Carla — carcasa PETG" required>
          </label>
          <label>
            <span>Correo electrónico</span>
            <input type="email" name="correo" placeholder="tu@correo.mx" required>
          </label>
          <label>
            <span>Detalles</span>
            <textarea name="detalles" rows="4" placeholder="Peso estimado, cantidad, material..." required></textarea>
          </label>
          <button type="submit" class="btn btn--fb">Enviar por IG/FB</button>
        </form>
      </article>
    </div>
  </div>
</section>
