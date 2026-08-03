/* Datos de los negocios del pueblo.
 *
 * Los nombres vienen de fuentes públicas (Booking, RestaurantGuru, prensa local).
 * Los teléfonos, precios y horarios están vacíos A PROPÓSITO: hay que levantarlos
 * en el pueblo. Ver docs/PLAN.md, sección 6.
 *
 * Para completar una ficha:
 *   whatsapp -> número con código de país y sin espacios, ej: "51987654321"
 *   foto     -> nombre del archivo dentro de img/, ej: "fortaleza.jpg"
 *   Lo que quede vacío ("") se muestra como pendiente y no rompe nada.
 */

const NEGOCIOS = [
  {
    nombre: "Hotel Fortaleza",
    categoria: "hospedaje",
    descripcion:
      "Infraestructura nueva y bien mantenida, en pleno centro del pueblo. Cuenta con wifi, aire acondicionado, restaurante y sauna.",
    km: "Km 49 — centro",
    whatsapp: "",
    telefono: "",
    horario: "",
    precio: "",
    foto: "",
    destacado: true,
  },
  {
    nombre: "Hotel Cosmopolita",
    categoria: "hospedaje",
    descripcion:
      "Hospedaje de 3 estrellas con habitaciones con escritorio, TV y baño privado. Ofrece desayuno a la carta, continental o americano.",
    km: "Km 49",
    whatsapp: "",
    telefono: "",
    horario: "",
    precio: "",
    foto: "",
    destacado: false,
  },
  {
    nombre: "Hospedaje Las Cashuarinas",
    categoria: "hospedaje",
    descripcion:
      "A pie de carretera Pativilca–Huaraz, parada práctica para quien viaja de noche y necesita descansar antes de subir a la sierra.",
    km: "Km 49 — carretera",
    whatsapp: "",
    telefono: "",
    horario: "",
    precio: "",
    foto: "",
    destacado: false,
  },
  {
    nombre: "Hotel El Tambo del Chaski",
    categoria: "hospedaje",
    descripcion:
      "Hospedaje con restaurante, sobre la vía principal. Opción conocida entre quienes hacen el tramo Lima–Huaraz por tierra.",
    km: "Km 49",
    whatsapp: "",
    telefono: "",
    horario: "",
    precio: "",
    foto: "",
    destacado: false,
  },
  {
    nombre: "Restaurantes de comida típica",
    categoria: "comida",
    descripcion:
      "Cuy en sus distintas preparaciones —incluido el broaster de cuy que popularizó el Festival— además de platos criollos y de la costa.",
    km: "Km 49 — a lo largo de la vía",
    whatsapp: "",
    telefono: "",
    horario: "",
    precio: "",
    foto: "",
    destacado: true,
    porCompletar: true,
  },
  {
    nombre: "Palta de Chasquitambo",
    categoria: "fruta",
    descripcion:
      "La fama del valle. Regada por el río Fortaleza y con sol todo el año, la palta de aquí tiene reputación de ser de las mejores del país. Se compra directo al productor.",
    km: "Km 49 — puestos en la vía",
    whatsapp: "",
    telefono: "",
    horario: "",
    precio: "",
    foto: "",
    destacado: true,
    porCompletar: true,
  },
  {
    nombre: "Fruta del valle",
    categoria: "fruta",
    descripcion:
      "Sandía, mango y plátano cosechados en el valle, comprados directo al productor. El clima soleado todo el año permite fruta en cualquier temporada.",
    km: "Km 49 — puestos en la vía",
    whatsapp: "",
    telefono: "",
    horario: "",
    precio: "",
    foto: "",
    destacado: true,
    porCompletar: true,
  },
];

const CATEGORIAS = {
  todos: { etiqueta: "Todo", icono: "◈" },
  hospedaje: { etiqueta: "Dónde dormir", icono: "⌂" },
  comida: { etiqueta: "Dónde comer", icono: "◐" },
  fruta: { etiqueta: "Fruta del valle", icono: "❉" },
};

const RUTA = [
  { km: "0", lugar: "Pativilca", nota: "Desvío desde la Panamericana Norte" },
  { km: "49", lugar: "Chasquitambo", nota: "La parada — 750 m, valle del Fortaleza", esAqui: true },
  { km: "120", lugar: "Conococha", nota: "Punto más alto del tramo — 4,100 m" },
  { km: "205", lugar: "Huaraz", nota: "Cordillera Blanca" },
];

/* Qué ver. Todo esto está a pie de carretera o a corta distancia del pueblo. */
const ATRACTIVOS = [
  {
    nombre: "Siki Rumi",
    apodo: "el poto de piedra",
    icono: "🪨",
    distancia: "Km 48, a pie de carretera",
    destacado: true,
    /* Ya está conectada: basta con dejar el archivo en img/siki-rumi.jpg.
       Si el archivo todavía no existe, la ficha se muestra sin foto — no
       aparece imagen rota. */
    foto: "siki-rumi.jpg",
    credito: "Mathias Villar",
    texto:
      "Del quechua siki (nalga) y rumi (piedra): la piedra de las nalgas. Una formación en la ladera con una silueta inconfundible, y el punto más fotografiado del valle. Se ve desde la vía — no hay que desviarse ni caminar.",
    historia:
      "Cuenta la leyenda que era un hombre alto y fornido que hacía mucho daño a los pobladores. Cansados de su maldad, decidieron acabar con él. Lo persiguieron, y huyendo trepó el cerro — pero antes de que lo alcanzaran, los dioses lo castigaron convirtiéndolo en piedra, mostrando las nalgas por toda la eternidad. Es una historia de justicia divina muy propia de los Andes: al malvado no se le mata, se le deja de burla para siempre. Hoy las parejas se acercan a la roca buscando fertilidad y prosperidad.",
  },
  {
    nombre: "El arco de bienvenida",
    icono: "🛣",
    distancia: "Entrada del pueblo, sobre la vía",
    foto: "arco.jpg",
    credito: "Mathias Villar",
    /* La imagen es de baja resolución: se muestra a tamaño nativo para que
       no se vea borrosa al ampliarla. */
    anchoMax: 460,
    texto:
      "El arco azul que cruza la carretera y anuncia el pueblo. En sus columnas está el lema completo: «Tierra prodigiosa de amor y eterno sol». Es la señal de que llegaste — y de que es momento de bajar la velocidad.",
  },
  {
    nombre: "Cerro Pescado",
    icono: "⛰",
    distancia: "Visible desde el pueblo",
    texto:
      "El cerro que le da forma al paisaje de Chasquitambo, llamado así porque su silueta recuerda a un pescado.",
  },
  {
    /* Una fuente local la describía como "iglesia colonial". La foto del pueblo
       lo desmiente: es una iglesia moderna, de torres cilíndricas y cúpula
       encalada. Se corrige el dato — manda la evidencia. */
    nombre: "Iglesia de Chasquitambo",
    icono: "⛪",
    distancia: "Centro del pueblo",
    foto: "iglesia.jpg",
    credito: "Mathias Villar",
    texto:
      "Amarilla contra el cerro pelado, con torres cilíndricas, cúpula blanca y tejado de arcilla. En fiestas la visten con telas fucsia que se ven desde la plaza. Diez minutos bastan para verla, y es la parada natural del que baja del auto a estirar las piernas.",
  },
  {
    nombre: "Plaza de Armas",
    icono: "🌳",
    distancia: "Centro del pueblo",
    foto: "plaza.jpg",
    credito: "Mathias Villar",
    texto:
      "El corazón del pueblo: jardines, pérgolas y el chasqui de piedra en el centro, ese mensajero inca que le dio nombre a Chasquitambo — el tambo donde paraba a descansar. Cuando hay fiesta se llena de banderines de lado a lado.",
  },
  {
    nombre: "Ruinas de Apac y Coricoto",
    icono: "🏛",
    distancia: "Alrededores del distrito",
    texto:
      "Vestigios prehispánicos de Colquioc, en la confluencia de los ríos Fortaleza y Purísima — un cruce de caminos desde antes de la colonia.",
  },
  {
    nombre: "Caminata a Llampa",
    icono: "🥾",
    distancia: "Valle hacia el este",
    texto:
      "Ruta de pueblo en pueblo siguiendo el río, entrando al valle lateral. Buena opción para aclimatarse antes de Huaraz.",
  },
];

/* Fiestas del año. Fechas confirmadas contra fuentes locales;
   las que digan "porConfirmar" hay que validarlas con la Municipalidad. */
const FIESTAS = [
  {
    nombre: "Fiesta patronal de Santa Rosa",
    fecha: "30 de agosto",
    mes: 8,
    dia: 30,
    lugar: "Chasquitambo",
    texto:
      "La fiesta grande del pueblo: danza de los Capitanes, corrida de toros y celebración patronal. Es cuando Chasquitambo se llena.",
    principal: true,
  },
  {
    nombre: "Fiesta de San Juan",
    fecha: "24 de junio",
    mes: 6,
    dia: 24,
    lugar: "Llampa",
    texto:
      "Celebración en el anexo de Llampa, subiendo por el valle desde Chasquitambo.",
  },
  {
    nombre: "Festival del Cuy",
    fecha: "Por confirmar",
    porConfirmar: true,
    lugar: "Chasquitambo",
    texto:
      "Organizado por la Municipalidad Distrital de Colquioc: gastronomía, producción y turismo. De aquí salió el broaster de cuy que se volvió marca del pueblo.",
  },
];
