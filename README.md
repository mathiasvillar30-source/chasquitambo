# Parada Chasquitambo

Portal del pueblo de **Chasquitambo** — km 49 de la carretera Pativilca–Huaraz,
distrito de Colquioc, provincia de Bolognesi, Áncash, Perú.

La idea: casi todo el turismo terrestre que va a Huaraz y la Cordillera Blanca pasa
por aquí, pero ningún negocio del pueblo tiene presencia online. Este sitio es el
puente — directorio de hospedajes, comida y fruta del valle, con contacto directo
por WhatsApp.

## Verlo en local

```bash
node servidor.js
```

Y abrir <http://localhost:4321>.

No hay que instalar nada: el servidor usa solo módulos de Node, y la web funciona
sin build ni dependencias.

## Estructura

```
index.html          la página
servidor.js         servidor estático local
css/estilos.css     estilos
js/datos.js         ← negocios, atractivos y fiestas (aquí se edita el contenido)
js/main.js          lógica de la página
img/                fotos
docs/PLAN.md        plan de negocio
docs/FOTOS.md       qué fotografiar y cómo subirlo
```

## Cómo agregar o editar contenido

Todo el contenido vive en [`js/datos.js`](js/datos.js). No hace falta tocar el HTML.

**Un negocio nuevo** — copiar un bloque de `NEGOCIOS` y rellenar:

```js
{
  nombre: "Restaurante El Mirador",
  categoria: "comida",              // hospedaje | comida | fruta
  descripcion: "...",
  km: "Km 49",
  whatsapp: "51987654321",          // con código de país, sin espacios ni +
  telefono: "+51987654321",
  horario: "7:00 - 22:00",
  precio: "S/ 15 - 35",
  foto: "el-mirador.jpg",           // archivo dentro de img/
  destacado: false,
}
```

Lo que se deje en `""` se muestra como pendiente y no rompe nada.

**Una fiesta nueva** — agregar a `FIESTAS` con `mes` y `dia` numéricos; la cuenta
regresiva de la portada se calcula sola.

## Estado

MVP navegable. Faltan los datos de contacto reales y las fotos: se levantan en el
pueblo, negocio por negocio. Ver [docs/PLAN.md](docs/PLAN.md) sección 6.

**No se publican teléfonos, precios ni fotos sin confirmarlos.** Un número equivocado
le hace daño al negocio y al portal.
