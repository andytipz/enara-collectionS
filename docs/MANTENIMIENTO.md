# Mantenimiento ocasional y seguridad

## Revisiones

Revisa alertas de GitHub y propuestas de Dependabot. Ejecuta `npm audit` periódicamente y ante avisos relevantes. Una auditoría limpia significa que el registro consultado no reportó vulnerabilidades para ese lockfile en ese momento, no una garantía absoluta.

No hagas merge automático. Para actualizar: rama nueva, `npm ci`, actualización dirigida, `npm run check` y revisión en móvil/escritorio. Actualiza `package-lock.json` junto con package.json. Los cambios mayores de Next/React/Pages CMS requieren especial revisión.

Los workflows usan permisos de lectura del repositorio. Revisa y actualiza las versiones de acciones mediante Dependabot. No agregues credenciales al frontend ni a los archivos JSON. Cloudflare Pages usa su integración GitHub, sin token de publicación embebido.

## Copias de seguridad

El historial Git contiene contenidos y configuraciones. Conserva una copia periódica privada del repositorio incluyendo media, y registra el commit de cada entrega. Protege esa copia como información del negocio. Git no sustituye la seguridad de la cuenta: activa 2FA y conserva métodos de recuperación.

## Volver a una publicación anterior

En Cloudflare Pages abre el historial y restaura un despliegue anterior conocido, según las opciones del proveedor. Después revierte el commit defectuoso en GitHub mediante un PR o un commit de reversión para que el siguiente despliegue no repita el problema. No borres el historial ni hagas force push como procedimiento habitual. Si falla una compilación por datos inválidos, la publicación anterior debe seguir activa: compruébalo.

## Imágenes

Solo se aceptan cargas raster JPEG/PNG/WebP/AVIF desde CMS. La compilación comprueba tamaño, formato real, decodificación y dimensiones. Las copias publicadas se reencodifican y se eliminan metadatos mediante Sharp. Los originales se mantienen para futuras ediciones. No conviertas archivos desconocidos en imágenes cambiándoles la extensión.

No se admiten SVG en los medios públicos. El propietario debe cargar imágenes raster. Se bloquean enlaces simbólicos y rutas inseguras.

## Contenido y enlaces

React escapa el texto del CMS; no se interpreta HTML arbitrario. Los enlaces editoriales se validan como rutas internas existentes. Las redes requieren HTTPS. Las rutas de medios se restringen a `/media/` y la compilación rechaza traversal. El JSON-LD usa datos reales y escapa `<`; se omite para demos.

Se publican cabeceras contra MIME sniffing, iframes y permisos no usados. La política CSP permite scripts/estilos inline porque Next exportado los necesita; no se presenta como una política estricta con nonces. No hay formularios de tarjetas, cookies analíticas ni API de pedidos.

## Navegador

El localStorage es dato no confiable: se valida al restaurar y se revisa de nuevo contra el catálogo vigente antes de preparar el mensaje. Un usuario puede modificar su propio navegador; el pedido es una solicitud, y el negocio siempre confirma precios y condiciones. Si localStorage está bloqueado, se informa de que la selección solo persistirá durante la visita.

## Cambios de contenido durante desarrollo

`npm run dev` prepara `/catalog.json` al arrancar. Si editas JSON manualmente mientras se ejecuta desarrollo, reinicia el comando para actualizar también esa instantánea. En producción el build siempre genera el catálogo completo actualizado. La integración CMS/Cloudflare recompila en cada publicación.
