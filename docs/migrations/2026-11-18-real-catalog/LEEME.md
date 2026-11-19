# ENARA Collection | Catálogo organizado

## Resultado
- 63 fotografías originales recopiladas: 61 JPG y 2 PNG.
- 13 diseños independientes (una ficha por diseño).
- 50 variantes de color preliminares.
- 62 fotografías utilizables en el catálogo y 1 copia exactamente duplicada conservada en `Duplicados_no_publicar/`.
- 8 diseños para Mujer y 5 para Hombre. No llegaron productos identificables de Niño o Niña en este lote.

## Regla de agrupación
- **Mismo diseño, distinto color** -> una sola ficha con selector de colores; cada color tiene sus fotografías particulares.
- **Distinto corte, cuello, costuras, detalles, elementos o conjunto** -> fichas distintas, aunque el logo parezca igual.
- **Foto con modelo y foto de producto del mismo diseño/color** -> una sola variante, galería con varias imágenes.
- Copia binariamente idéntica -> se conserva por trazabilidad, pero **no se publica**.

## Estructura
- `Fotografias/<Publico>/<Subcategoria>/<ID producto>/<Color>/` contiene las fotos preparadas, sin alterar el contenido de la imagen.
- `catalogo_base.json`: datos agrupados por diseño y variantes; todavía no es un formato importable directo en Pages CMS.
- `productos.csv`: una fila por diseño/ficha (13).
- `variantes.csv`: una fila por color (50).
- `fotografias.csv`: traza los 63 archivos originales y su carpeta de destino.
- `Duplicados_no_publicar/`: copia exacta que no se necesita mostrar.

## Pendientes antes de publicar
1. Precios asignados a los 13 diseños en USD. Confirmar correspondencia de tarifa en ENA-MUJ-002 y ENA-MUJ-008; ver `MANIFIESTO_PRECIOS.md`.
2. Confirmar tallas y disponibilidad real; no gestionar cantidades en inventario. Niños sin fotos, sin productos ficticios.
3. Revisar si los tonos índigo medio/profundo del jean con cinturón y taupe/café de la chaqueta corta son variantes distintas.
4. Revisar la autorización de uso de imágenes/logotipos y autenticidad si se hacen afirmaciones comerciales de marca.
5. Revisar `.pages.yml` y la estructura del repositorio para adaptar JSON, fotos y rutas de forma 100% compatible con Pages CMS, GitHub y Cloudflare Pages. Esto **no se ha publicado ni conectado** todavía.
6. Las colecciones Niño y Niña quedarán vacías hasta recibir fotos.

## Recomendación de comportamiento web
- Un producto aparece solo una vez en las listas, con puntos de color; al seleccionar color cambia imagen, manteniendo el mismo diseño.
- Colores no disponibles no se pueden agregar al carrito. No manejar cantidades de inventario.
- El carrito de WhatsApp debe incluir producto, color, talla y cantidad solicitada, sin pagos online.

## Actualización: precios
Archivo `TARIFAS_FUTURAS.csv` con las 9 tarifas declaradas. Precios actualizados en CSV, JSON, Excel y variantes. El catálogo permanece SIN PUBLICAR hasta confirmar tallas y disponibilidad.
