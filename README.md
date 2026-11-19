# ENARA Collection

Catálogo real estático en Next.js, React y TypeScript. Se mantiene el proyecto existente; pedidos por WhatsApp, sin pasarela, inventario numérico ni servidor de pedidos.

Estado al 18 de noviembre de 2026: 13 diseños reales (8 Mujer y 5 Hombre), 50 colores, 62 fotografías originales. Niño y Niña muestran Próximamente. La revisión privada usa Sites; la cadena Pages CMS → GitHub del propietario → Cloudflare Pages aún no está conectada. No está listo para entrega comercial: faltan archivo de logo oficial, WhatsApp, tallas/disponibilidad y validación externa.

## Ejecutar y comprobar

Node 24. Ejecutar `npm ci`, después `npm run dev`. Para producción: `npm run build` y `npm start`. No abrir index.html con doble clic.

`npm run check` valida tipos, lint, pruebas, contenido, compilación y exportación. `npm run test:lifecycle` crea temporalmente fichas infantiles y un tipo, edita fotos/colores, oculta/elimina y recompila; restaura los datos originales. `npm audit` consulta vulnerabilidades conocidas.

## Estructura

- `content/products/*.json`: un diseño por archivo, IDs estables, variantes con sus fotografías.
- `content/categories.json`: Hombre, Mujer, Niño y Niña permanentes.
- `content/garment-types/*.json`: subcategorías ampliables sin código.
- `content/home.json`: tres portadas y editorial.
- `content/settings.json`: logo, WhatsApp, colores, condiciones y SEO.
- `content/pages/*.json`: información y políticas.
- `public/media/catalogo/`: originales del ZIP. El build optimiza copias proporcionalmente en out.
- `.pages.yml`: formularios reales de Pages CMS, JSON válido como YAML.
- `lib/schema.ts`, `lib/commerce.ts`: validación, variantes, dinero, filtros y pedidos.
- `components/`: portada, catálogo, ficha, menú, carrito, favoritos.
- `docs/migrations/2026-11-18-real-catalog/`: respaldo anterior y trazabilidad de importación; no se publica.

Precio en centavos: 3800 = $38.00; null = por confirmar. No se recalculan precios a partir del tipo. Active Flare K ($45) y Belted Winter ($38) llevan `priceReview`. Visibilidad independiente del estado disponible/agotado/por_confirmar. No se inventaron tallas. Los productos pendientes admiten consulta, pero no agregación normal al pedido.

El pedido se revalida contra catalog.json antes de preparar WhatsApp. Cambios de precio requieren aceptación. Abrir WhatsApp no envía automáticamente ni vacía el carrito. Los pedidos largos permiten copia completa. El destinatario está vacío hasta que lo configure el propietario.

Consulta PROPIETARIO, PUBLICACION y VERIFICACION en docs. La edición normal no requiere código una vez conectadas las cuentas; las dependencias y proveedores sí requieren mantenimiento ocasional.
