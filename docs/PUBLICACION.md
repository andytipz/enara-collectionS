# Publicación y conexiones externas

## Estado real

La vista privada existente sigue en Sites con el mismo proyecto. El repositorio fuente gestionado por Sites no es el GitHub del propietario. Pages CMS y Cloudflare Pages del propietario NO están conectados. No se ha probado guardar desde su editor ni el webhook de publicación. La configuración y las rutas estáticas sí están implementadas y comprobadas localmente.

## Conectar las cuentas del propietario

1. Crea un repositorio privado en su GitHub. Sube esta fuente conservando su historial cuando sea posible, excluyendo dependencias, out, .next y secretos. No reutilices las credenciales internas de Sites. Usa autenticación oficial de GitHub, sin tokens en código ni en el chat.
2. En Cloudflare crea un proyecto Pages y autoriza solo ese repositorio. Rama main, Node 24, comando `npm run build`, salida `out`. Es exportación estática: no usar next start ni adaptadores de servidor.
3. Prueba la URL pages.dev antes de conectar dominio definitivo. Deben funcionar `/`, `/colecciones/hombre/`, `/colecciones/mujer/`, `/colecciones/nino/`, `/colecciones/nina/`, `/infantil/` y fichas nuevas. Una ruta inexistente debe responder 404.
4. En https://app.pagescms.org autoriza ese mismo repositorio. `.pages.yml` muestra Productos, Colecciones, Tipos de prenda, Configuración, Página de inicio y Páginas. No hay guías de tallas ni enlace administrativo en el footer.
5. Guarda desde Pages CMS; comprueba que cambia el JSON en GitHub y que Cloudflare dispara y completa una compilación. No se declara conectado hasta observar esa cadena.
6. Para revisar sin publicar al dominio, usa rama de prueba y preview de Cloudflare. Cuando las comprobaciones pasen, integra mediante PR. Las ediciones directas de main publican automáticamente si así configuras Cloudflare.

## Prueba de integración pendiente

Desde el editor real, crear una ficha de Niño y otra de Niña con imágenes autorizadas; crear un tipo, editar colores/fotos/tallas/precio, marcar agotado, ocultar y eliminar. Registrar cada commit y despliegue. Comprobar recarga directa de rutas nuevas y retirada de ocultas. Verificar catalog.json actualizado con no-store y revisión de un carrito antiguo.

Configurar WhatsApp real y comprobar destinatario/mensaje en móvil y WhatsApp Web sin enviarlo. Probar copia de pedido largo, variantes y totales. Revisar tres portadas, logo original, ficha/zoom, filtros y carrito en móvil y escritorio, teclado, contraste y ausencia de desbordamientos. Estas verificaciones externas siguen pendientes.

## Dominio y lanzamiento

Conecta el dominio desde la cuenta del propietario siguiendo los DNS que Cloudflare indique, con HTTPS activo. Ajusta domain en Configuración. El catálogo actual mantiene indexable=false. Actívalo solamente al confirmar logo, WhatsApp, políticas, tallas/disponibilidad y pruebas. Nunca uses datos comerciales inventados para desbloquearlo.

La compilación rechaza contenido inválido y genera rutas desde JSON sin cambios de código. Los workflows incluidos validan la fuente. Confirma en la cuenta real que una compilación fallida conserva la última versión correcta.

## Recuperación

Sites conserva versiones de esta revisión privada. Para la infraestructura definitiva, restaura un despliegue correcto en Cloudflare y revierte el commit en GitHub mediante commit/PR. Conserva copia privada de fuentes y fotos. No uses force push para recuperar una edición habitual.
