# Parada Chasquitambo — Plan de proyecto

## 1. La tesis del negocio

Chasquitambo está en el **km 49 de la carretera Pativilca–Huaraz**, el corredor por el
que pasa prácticamente todo el turismo terrestre que va de Lima a Huaraz y la
Cordillera Blanca.

El pueblo no compite como destino final. Compite como **la parada**.

- La **demanda ya existe**: viajeros que buscan dónde comer, dormir o estirar las
  piernas en el trayecto.
- La **oferta ya existe**: hoteles, restaurantes, fruta de valle (sandía, mango, plátano).
- Lo que **no existe** es el puente entre ambos: ningún negocio del pueblo tiene
  presencia online decente, y nadie está capturando las búsquedas de ruta.

Ese hueco es el negocio.

## 2. A quién le hablamos

| Público | Qué busca | Qué le damos |
|---|---|---|
| Viajero Lima → Huaraz | Dónde parar a comer / dormir sin perder tiempo | Mapa por km, fotos reales, WhatsApp directo |
| Turista de trekking | Aclimatación, ruta, comida decente antes de subir | Info de altitud, rutas a Llampa, hospedajes |
| Visitante de fin de semana | Fruta fresca, Festival del Cuy, sol todo el año | Calendario de fiestas, compra directa a productor |
| Negocio local | Que lo encuentren los que ya pasan por su puerta | Ficha con foto, ubicación y contacto |

## 3. Cómo se gana dinero

**Fase 1 — Validación (meses 1–3)**
Todo gratis para los negocios. Objetivo: 8–10 fichas reales y medir clics a WhatsApp.
Sin cobrar nada todavía. Lo que se compra en esta fase es *prueba*.

**Fase 2 — Monetización (mes 4 en adelante)**
1. **Ficha destacada** — cuota mensual baja por aparecer arriba, con galería y botón directo.
2. **Comisión por reserva** — % sobre hospedaje o pedidos de fruta cerrados vía la web.
3. **Patrocinio de eventos** — Municipalidad de Colquioc y Antamina ya invierten en el
   Festival del Cuy; el portal es un canal natural para eso.

El argumento de venta al negocio no es "tenga una web". Es: *"el mes pasado 140 personas
hicieron clic para llamarte desde aquí"*. Por eso la Fase 1 es obligatoria.

## 4. Ventaja competitiva

- **SEO local sin competencia**: nadie posiciona "dónde comer camino a Huaraz".
- **Conocimiento de terreno**: las fichas se consiguen puerta a puerta, algo que ningún
  agregador nacional va a hacer por un pueblo de 2,000 habitantes.
- **Replicable**: el mismo molde sirve para Conococha, Pativilca, Recuay. Si funciona en
  uno, la ruta completa es el mercado.

## 5. Estado actual

- [x] Investigación del pueblo y del corredor turístico
- [x] Estructura del proyecto
- [x] Landing MVP navegable
- [ ] **Datos reales** — teléfonos, horarios, precios y fotos de cada negocio
- [ ] Dominio + hosting
- [ ] Google Business Profile de cada negocio (gancho de entrada para venderles la ficha)
- [ ] Medición de clics a WhatsApp

## 6. Lo siguiente que hay que hacer (y solo lo puede hacer Mathias)

Todo lo que sigue depende de datos que hay que levantar **en el pueblo**:

1. Visitar los hospedajes ya identificados (Fortaleza, Cosmopolita, Las Cashuarinas,
   El Tambo del Chaski) y pedir: teléfono/WhatsApp, horario, rango de precios, 3 fotos.
2. Lo mismo con 4–5 restaurantes y 2–3 productores de fruta.
3. Confirmar la fecha del Festival del Cuy de este año con la Municipalidad de Colquioc.

Los datos van en `js/datos.js`, que está preparado para eso: cada ficha tiene sus campos
marcados como pendientes y la web muestra el aviso hasta que se completen.

## 7. Nota sobre los datos

Las fichas de negocios en `js/datos.js` llevan **nombres reales** encontrados en fuentes
públicas (Booking, RestaurantGuru, prensa local), pero los **teléfonos, precios y horarios
están vacíos a propósito**. No se inventa información de contacto de negocios reales:
publicar un número equivocado le hace daño al negocio y mata la credibilidad del portal
antes de nacer.

## 8. Fuentes de la investigación

- https://en.wikipedia.org/wiki/Chasquitambo
- https://es.wikipedia.org/wiki/Distrito_de_Colquioc
- https://www.antamina.com/noticias/turismo-exitoso-festival-cuy-chasquitambo/
- https://www.booking.com/city/pe/chasquitambo.html
- https://www.alltrails.com/trail/peru/ancash/chasquitambo-llampa
