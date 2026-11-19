# Vender y entregar una tienda independiente

1. Conserva una plantilla maestra sin datos privados ni credenciales de clientes. Cada comprador recibe su copia del código y las licencias de dependencias aplicables.
2. Crea un repositorio nuevo en la cuenta GitHub del cliente. No reutilices tokens, Cloudflare projects, dominios, datos comerciales ni fotografías de otro cliente.
3. Copia el proyecto excluyendo `.git`, `.next`, `out`, `node_modules`, `.env*`, `.openai/hosting.json`, `docs/migrations/` y archivos temporales. Haz un primer commit independiente. Para un cliente nuevo, empieza sin indexación y con WhatsApp/dominio vacíos.
4. Cambia nombre, logo, favicon, descripción, paleta, contactos, redes, SEO y banners. La tipografía se controla en `app/globals.css`; los colores principales son editables desde CMS.
5. Sustituye el catálogo: usa IDs estables únicos y slugs propios. Define categorías, colecciones, tallas, colores, estados y variantes por color. No reutilices el catálogo ni las fotos de ENARA sin autorización.
6. Revisa derechos comerciales de fotos/logotipos. No presentes las ilustraciones o precios de prueba como oferta real. Acuerda políticas y mensajes comerciales con el cliente.
7. Ejecuta `npm ci` y `npm run check`. Revisa en dispositivos reales siguiendo VERIFICACION.md.
8. Conecta GitHub, Cloudflare y Pages CMS según PUBLICACION.md. Autoriza solo el repositorio correspondiente. El propietario conserva recuperación y autenticación de dos factores de sus cuentas.
9. Realiza la prueba real de alta de producto, cambio de precio/estado, ocultación/eliminación, banner y WhatsApp. Registra los commits y URLs verificados.
10. Configura el dominio bajo control del cliente. No requiere compra para la prueba: usa primero `pages.dev`.
11. Retira demos, activa configuración real e indexación solo tras aprobación del contenido por el propietario.
12. Entrega código, documentación, URL, acceso a sus cuentas, resultado de pruebas y alcance de soporte. Elimina tu acceso cuando corresponda; no dejes credenciales compartidas.

## Importar un catálogo

Crea un JSON por producto en `content/products/` con el esquema de ejemplo. Conserva precios en centavos e imágenes locales. La siguiente compilación valida cada entrada y crea las rutas. Para migraciones grandes, prepara los archivos en una rama y revisa duplicados/referencias antes de fusionar. No incluyas pedidos o datos personales de compradores.

## Actualizar la plantilla sin perder contenido

No sobrescribas `content/` o `public/media/` con los de la plantilla maestra. Aplica cambios de código en una rama; cuando cambie el esquema, prepara una migración explícita y revisa primero una copia. Mantén un registro de versión de la plantilla por cliente, sin un backend central ni dependencia de tu cuenta personal.

## Costos y mantenimiento

El sitio no obliga a contratar pasarelas ni bases de datos. GitHub, Pages CMS y Cloudflare tienen términos y límites propios que pueden cambiar; comprueba los planes vigentes y el volumen de archivos/builds de cada tienda. Dominio y soporte se acuerdan aparte. No prometas mantenimiento cero: dependencias, seguridad, cambios de proveedores y recuperación de errores pueden requerir intervención ocasional.
