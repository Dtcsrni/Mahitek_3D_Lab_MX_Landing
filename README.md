# Mahitek 3D Lab — Landing PETG

Landing one-page alojada en `docs/` y montada con el tema remoto `pages-themes/slate`. Todo el contenido clave (canales, catálogo y estilos) se alimenta desde `_data` y `_sass` para garantizar consistencia cuando se agregan productos o se ajustan precios.

## 📌 Resumen
- Tema oscuro con glassmorphism sobre paleta obsidiana/verde/violeta y tipografía Space Grotesk global.
- Catálogo automático: los primeros 8 SKUs se renderizan desde `_data/productos.yaml` con imágenes WebP optimizadas.
- CTAs únicos hacia Instagram y Facebook con UTM dinámicos y banner cuando la visita proviene de QR.
- Workflows de GitHub Actions para compilar Jekyll y ejecutar Lychee en los enlaces críticos.

## 🧮 Fórmula de coste
Para cotizaciones rápidas usamos:

```
coste = (peso_g × tarifa_material) + (tiempo_h × tarifa_maquina) + postprocesos + empaque
```

- **Tarifa material PETG**: $0.43/g (incluye merma)
- **Tarifa máquina Ender 3 V3**: $28/h
- **Postprocesos**: limpieza base incluida; extras se añaden según alcance
- **Empaque**: físico $1.44–$1.64, online $2.08–$2.28 (ver detalles en la sección “Calidad y empaque”)

## ⚙️ Parámetros Ender 3 V3
- **PETG**: boquilla 240–250 °C · cama 80–85 °C · fan 30–50 % · velocidad 40–60 mm/s · superficie PEI
- **PLA**: boquilla 195–210 °C · cama 50–60 °C · fan 100 % · velocidad 50–70 mm/s · superficie PEI

Estos perfiles están documentados en la landing para reforzar transparencia y repetibilidad en tiradas cortas.

## 🗂️ Contenido principal
- `docs/_config.yml`: configuración del sitio, plugins y tema remoto
- `docs/_data/canales.yaml`: URLs oficiales y UTM base
- `docs/_data/productos.yaml`: catálogo (12+ SKUs con PETG por defecto y PLA cuando conviene)
- `docs/assets/css/style.scss` + `_sass/`: tokens y overrides del tema
- `docs/js/utm.js`: añade parámetros UTM a CTAs y bandera `from-qr`
- `docs/js/catalogo.js`: pinta el grid de productos desde `window.PRODUCTOS`
- `docs/index.md`: secciones de la landing (Hero, Valor, Destacados, Personalización, Calidad y empaque, Precios guía, FAQs, Contacto)

## 🚀 Despliegue en GitHub Pages
1. En **Settings → Pages**, selecciona la rama `main` y el folder `/docs`.
2. Ajusta `docs/_config.yml` si tu usuario o nombre de repositorio cambian (`url` y `baseurl`).
3. Guarda los cambios y espera a que termine el workflow **Build and Deploy GitHub Pages**.
4. La landing quedará disponible en `https://usuario.github.io/Mahitek_3D_Lab_MX_Landing/` (actualiza según tu cuenta).

## 🔁 Workflows
- `.github/workflows/pages.yml`: compila el sitio con Jekyll antes de desplegar.
- `.github/workflows/link-check.yml`: ejecuta [Lychee](https://github.com/lycheeverse/lychee) semanalmente para validar enlaces.

## 🔗 Enlaces oficiales
- Landing: `https://usuario.github.io/Mahitek_3D_Lab_MX_Landing/`
- Instagram: [@mahitek_3d_lab_mx](https://www.instagram.com/mahitek_3d_lab_mx/)
- Facebook: [Mahitek 3D Lab MX](https://www.facebook.com/mahitek3dlabmx)

## 🧑‍💻 Desarrollo local
```bash
bundle install --path vendor/bundle # primera vez
bundle exec jekyll serve --source docs --livereload
```

El sitio quedará disponible en `http://localhost:4000/Mahitek_3D_Lab_MX_Landing/`.

## 📄 Licencia
Proyecto bajo licencia MIT.
