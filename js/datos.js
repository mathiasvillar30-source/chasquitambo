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
    icono: "🪨",
    distancia: "Km 47–49, a pie de carretera",
    texto:
      "Formación rocosa cuyo nombre viene del quechua qullqi rumi. Se ve desde la vía: no hay que desviarse ni caminar para conocerla.",
  },
  {
    nombre: "Cerro Pescado",
    icono: "⛰",
    distancia: "Visible desde el pueblo",
    texto:
      "El cerro que le da forma al paisaje de Chasquitambo, llamado así porque su silueta recuerda a un pescado.",
  },
  {
    nombre: "Iglesia colonial",
    icono: "⛪",
    distancia: "Centro del pueblo",
    texto:
      "Arquitectura religiosa colonial en la plaza. Parada corta de diez minutos para quien va de paso.",
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
