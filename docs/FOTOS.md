# Las fotos

## Por qué no las bajamos de internet

Se buscó material de libre uso de Chasquitambo. **No existe**: Wikimedia Commons no
tiene ni una sola imagen del pueblo (solo un mapa de la provincia de Bolognesi y una
foto del Huascarán, que es otra zona).

Lo que sí hay circulando pertenece a alguien:

| Fuente | De quién es |
|---|---|
| Fotos de hoteles en Booking | Del hotel o de Booking |
| Fotos del Festival del Cuy | De Antamina / la Municipalidad |
| Fotos en Facebook y blogs | De quien las publicó |

Usarlas en un portal que después va a cobrar por fichas es un riesgo real, y llega
justo cuando el proyecto empieza a tener valor. Es el mismo criterio que con los
teléfonos: mejor vacío que prestado.

## La buena noticia

Las fotos propias son **mejores** para este proyecto, no un premio de consuelo:

- **Google premia la imagen original.** Las fotos de stock repetidas en mil sitios no
  posicionan; una foto única del Hotel Fortaleza tomada hoy, sí.
- **Una foto de 2026 le gana a una miniatura de Booking de hace cinco años.** El
  viajero quiere ver cómo está el sitio ahora.
- **Pedir la foto abre la conversación.** Es la misma visita en la que consigues el
  WhatsApp y el horario. Un viaje, todo resuelto.

Y a ningún negocio le molesta: es publicidad gratis para ellos.

## Qué fotografiar

### Por cada negocio (3 fotos bastan)
1. **La fachada desde la carretera** — así la reconoce el que viene manejando.
2. **El interior** — habitación si es hospedaje, mesas o el plato estrella si es
   restaurante.
3. **El detalle** — la palta, el cuy servido, la cama tendida. La que da ganas.

### Del pueblo (para el hero y las secciones)
- **Siki Rumi** desde la carretera, km 47–49.
- **Cerro Pescado**, buscando el ángulo donde se le ve la forma.
- **La iglesia colonial** en la plaza.
- **El valle del Fortaleza** — verde contra cerro seco, que es el contraste que
  define el paisaje.
- **Los puestos de fruta** en la vía, con la fruta a la vista.
- **La carretera misma** entrando o saliendo del pueblo: es la imagen que resume
  la idea entera del proyecto.

### En la fiesta de Santa Rosa (30 de agosto)
Es el día del año con mejor material. La danza de los Capitanes, la plaza llena,
la corrida. Con eso tienes contenido para todo el año siguiente.

## Cómo tomarlas

No hace falta cámara: un celular actual alcanza y sobra.

- **Luz**: temprano en la mañana o después de las 4 de la tarde. El sol de mediodía
  en un valle así quema los colores y deja sombras duras.
- **Horizontal** para el hero, **vertical o cuadrada** para las tarjetas.
- **Limpia el lente** antes de disparar — suena tonto y es la mitad de las fotos malas.
- Toma **tres o cuatro de cada cosa** y eliges después. Volver es más caro que disparar.

## Cómo meterlas al sitio

1. Guarda el archivo en `img/` con nombre simple y sin tildes ni espacios:
   `hotel-fortaleza.jpg`, `siki-rumi.jpg`, `palta.jpg`.
2. Abre `js/datos.js` y pon el nombre del archivo en el campo `foto` de esa ficha:

   ```js
   foto: "hotel-fortaleza.jpg",
   ```

3. Listo. La web la toma sola; mientras el campo esté vacío muestra el ícono de relleno.

**Antes de subirlas, achícalas**: una foto de celular pesa 4–8 MB y eso hace lentísima
la web en datos móviles, que es justo como la va a abrir el viajero. Reduce a
**1600 px de ancho** y calidad 80%. Con [Squoosh](https://squoosh.app) se hace en el
navegador, gratis y sin instalar nada.

## Si hace falta algo temporal

Para el hero se puede usar una foto de paisaje andino con licencia libre (Unsplash,
Pexels) como relleno mientras llegan las propias — pero solo para ambiente, nunca
haciéndola pasar por Chasquitambo. Una foto genérica de los Andes en un sitio que
promete el valle del Fortaleza se nota, y resta.

Por ahora el diseño funciona sin fotos: el hero es un degradado con cerros dibujados
en SVG, hecho a propósito para que se vea intencional y no roto.
