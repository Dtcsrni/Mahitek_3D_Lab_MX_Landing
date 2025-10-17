# Mahitek 3D Lab MX - Landing Page

Página de aterrizaje profesional para validar productos físicos impresos en 3D y convertir tráfico en ventas. Incluye fichas SKU, enlaces con parámetros UTM, materiales visuales y QR dinámicos para campañas. Optimizado para bazares, redes sociales y marketplaces, con enfoque en margen, conversión y trazabilidad por lote.

## 🚀 Características

- ✅ **Diseño Responsive**: Optimizado para móvil, tablet y escritorio
- ✅ **SEO Optimizado**: Meta tags completos y Open Graph para redes sociales
- ✅ **Seguimiento UTM**: Parámetros UTM integrados para tracking de campañas
- ✅ **Catálogo de Productos**: Con SKU, precios y llamadas a la acción
- ✅ **Formulario de Contacto**: Integrado con validación de campos
- ✅ **Accesibilidad**: Siguiendo las mejores prácticas WCAG
- ✅ **Rendimiento**: Código optimizado sin dependencias externas

## 📁 Estructura del Proyecto

```
Mahitek_3D_Lab_MX_Landing/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript interactivo
├── favicon.svg         # Icono del sitio
├── _config.yml         # Configuración de GitHub Pages
├── .gitignore          # Archivos a ignorar
└── README.md           # Este archivo
```

## 🌐 Despliegue en GitHub Pages

### Opción 1: Activar GitHub Pages (Recomendado)

1. Ve a **Settings** → **Pages** en tu repositorio
2. En **Source**, selecciona la rama `main` o `copilot/add-landing-page-for-mipyme`
3. Haz clic en **Save**
4. Tu sitio estará disponible en: `https://dtcsrni.github.io/Mahitek_3D_Lab_MX_Landing/`

### Opción 2: Vista Local

Para ver el sitio localmente:

```bash
# Usando Python 3
python3 -m http.server 8000

# O usando Node.js
npx http-server
```

Luego abre tu navegador en `http://localhost:8000`

## 📊 Tracking y Analytics

### Parámetros UTM Implementados

La página incluye tracking UTM en todos los enlaces importantes:

- **Hero CTA**: `utm_source=hero&utm_medium=button&utm_campaign=cotizar`
- **Productos**: `utm_source=productos&utm_medium=card&utm_campaign={producto}&sku={SKU}`
- **Diseño Personalizado**: `utm_source=productos&utm_medium=button&utm_campaign=personalizado`

### SKU de Productos

- **MHKT-PC-001**: Porta Celular - $250 MXN
- **MHKT-MG-002**: Maceta Geométrica - $180 MXN
- **MHKT-OE-003**: Organizador Escritorio - $320 MXN

## 🎨 Personalización

### Colores

Los colores principales están definidos en `styles.css` como variables CSS:

```css
:root {
    --primary-color: #2196F3;    /* Azul principal */
    --secondary-color: #4CAF50;  /* Verde secundario */
    --accent-color: #FF9800;     /* Naranja de acento */
}
```

### Contenido

Edita `index.html` para:
- Cambiar textos y descripciones
- Actualizar información de contacto
- Agregar/modificar productos
- Personalizar servicios

### Formulario de Contacto

El formulario está configurado para usar Formspree. Para activarlo:

1. Regístrate en [Formspree](https://formspree.io)
2. Crea un nuevo formulario
3. Reemplaza `YOUR_FORM_ID` en `index.html` línea 305:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## 📱 Integración de Redes Sociales

Actualiza los enlaces de redes sociales en el footer (línea 443-446):

```html
<a href="https://facebook.com/tu-pagina" target="_blank">📘</a>
<a href="https://instagram.com/tu-cuenta" target="_blank">📷</a>
<a href="https://twitter.com/tu-cuenta" target="_blank">🐦</a>
<a href="https://linkedin.com/company/tu-empresa" target="_blank">💼</a>
```

## 🔧 Mantenimiento

### Actualizar Productos

Para agregar un nuevo producto, copia esta estructura en la sección de productos:

```html
<div class="product-card">
    <div class="product-image">
        <div class="product-badge">Nuevo</div>
        <!-- SVG o imagen del producto -->
    </div>
    <div class="product-info">
        <h3>Nombre del Producto</h3>
        <p class="product-sku">SKU: MHKT-XX-XXX</p>
        <p class="product-description">Descripción breve</p>
        <div class="product-price">
            <span class="price">$XXX</span>
            <span class="price-unit">MXN</span>
        </div>
        <a href="#contacto?utm_source=productos&utm_medium=card&utm_campaign=nombre&sku=MHKT-XX-XXX" class="btn btn-small">Solicitar</a>
    </div>
</div>
```

## 📈 Mejoras Futuras Sugeridas

- [ ] Integrar Google Analytics o Facebook Pixel
- [ ] Agregar galería de imágenes reales de productos
- [ ] Implementar generación dinámica de códigos QR
- [ ] Agregar testimonios de clientes
- [ ] Crear blog o sección de casos de éxito
- [ ] Integrar carrito de compras
- [ ] Agregar chat en vivo (WhatsApp Business)

## 🤝 Contribuciones

Este proyecto está abierto a mejoras. Para contribuir:

1. Haz fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver archivo LICENSE para más detalles.

## 📞 Contacto

Para soporte o consultas sobre este proyecto, contacta a:
- Email: contacto@mahitek3d.mx
- WhatsApp: +52 XXX XXX XXXX

---

**Hecho con ❤️ para emprendedores y Mipymes en México**
