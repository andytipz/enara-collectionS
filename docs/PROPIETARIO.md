# Administrar ENARA

## Acceso y estado

El editor es https://app.pagescms.org. La configuración está implementada, pero todavía no está conectado al GitHub del propietario ni a Cloudflare Pages. Sigue PUBLICACION.md para habilitarlo. No existe un panel simulado dentro de la tienda.

## Agregar una prenda

1. En Productos crea una ficha. Asigna ID único estable (ejemplo ENA-NIN-001) y slug único sin espacios ni tildes. No cambies el ID posteriormente.
2. Escribe nombre y descripción fieles. Escoge Hombre, Mujer, Niño o Niña y un tipo de prenda. Para otro tipo, créalo primero en Tipos de prenda con ID, nombre, orden y visibilidad.
3. Introduce precio en centavos (2800 = $28.00). Si no está confirmado, déjalo vacío. No se asigna tarifa automática. No marques descuento ni novedad sin fundamento.
4. Añade cada color dentro de la misma ficha: ID único, nombre, estado, visibilidad y fotografías. Carga imágenes reales y texto alternativo. El hexadecimal es opcional; no se usa para inventar una fotografía.
5. Configura tallas confirmadas del producto; si un color tiene tallas distintas, configúralas en ese color. Vacío significa heredar las del producto. No marques disponible un color sin tallas reales.
6. Marca producto y colores disponibles solo tras confirmarlos. Agotado sigue visible sin compra. Desactivar Visible oculta una ficha o variante. Por confirmar evita ofrecer disponibilidad no verificada. No se cuentan ni descuentan existencias.
7. Revisa cuidados y fecha YYYY-MM-DD, guarda, espera compilación y abre la nueva ruta `/producto/slug/`. No se necesita crear una página de código. Niño y Niña dejarán de mostrar el estado vacío al tener productos visibles.

## Editar fotografías, colores y tallas

Abre el producto y su color. Las fotos de esa lista forman exclusivamente su galería; la primera es la principal. Reordena, añade o elimina allí. No mezcles diseños diferentes. Cambiar de color en la tienda cambia toda la galería. Puedes ocultar un color sin borrar las fotos. Debe quedar al menos un color visible si el producto es visible. Guarda y revisa el resultado después de compilar.

Para eliminar una prenda, usa Eliminar en Pages CMS. Su ruta desaparece en la siguiente exportación. Los pedidos antiguos detectan su retirada. Evita eliminar una foto todavía usada por otra portada/ficha; el build bloquea rutas rotas.

## Portada, logo y condiciones

Página de inicio permite editar las tres diapositivas, sus fotos, textos y enlaces internos, además de la fotografía y texto editorial. Conserva exactamente tres. La infantil lleva marca provisional reemplazable. Colecciones permite reemplazar sus cuatro fotografías; conserva los IDs principales.

Configuración del negocio permite subir el JPG/PNG original del logo, definir favicon, WhatsApp internacional (+593…), contacto, entrega y pagos. Al cargar el logo desactiva `logoPending`. No redibujes el original. El archivo del logo aún no se recibió como adjunto descargable; por ahora se muestra solo texto ENARA. No hay número de WhatsApp inventado.

Los cuidados son por prenda. Entrega y pagos son globales; políticas informativas se editan en Páginas. No existe guía de tallas.

## Confirmaciones de esta entrega

Todas las tallas están vacías y estados por confirmar según el ZIP. Confirma la tarifa de ENA-MUJ-002 ($45) y ENA-MUJ-008 ($38), después desmarca la revisión. Completa políticas comerciales y contacto. No activar indexación hasta validar logo, dominio y WhatsApp.

## Recuperación

Conserva el historial de GitHub. En Cloudflare restaura la publicación anterior conocida y revierte el commit defectuoso para mantener coherencia en la siguiente compilación. No fuerces ni borres el historial. Una compilación fallida no debe sustituir la publicación activa: comprueba este comportamiento al conectar el proveedor.
