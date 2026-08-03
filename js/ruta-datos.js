/* La ruta Pativilca → Huaraz.
 *
 * Los kilómetros son los de la carretera de montaña, contados desde el desvío
 * en Pativilca (km 0) hasta Huaraz (km 200). Las altitudes son aproximadas:
 * sirven para entender la forma de la subida, no para navegar.
 *
 * Fuentes: Pativilca–Conococha 121 km y Conococha–Huaraz 79 km; laguna de
 * Conococha a 4,050 m; Recuay a 25 km al sur de Huaraz.
 */

/* Lo que se ve ANTES de tomar el desvío, sobre la Panamericana Norte.
   No entran en el perfil de altitud porque están al nivel del mar. */
const ANTES = [
  {
    nombre: "Caral",
    donde: "Km 182 de la Panamericana + 23 km de desvío",
    texto:
      "La ciudad más antigua de América. Cinco mil años — levantada mientras en Egipto se construían las pirámides, y dos milenios antes que los olmecas. Patrimonio de la Humanidad. Si tienes medio día de sobra en el viaje, gástalo aquí.",
    etiqueta: "5,000 años",
  },
  {
    nombre: "Áspero",
    donde: "Km 191 de la Panamericana",
    texto:
      "El puerto de Caral: la ciudad pesquera que alimentaba a la capital tierra adentro. Anchoveta a cambio de algodón, hace cincuenta siglos. La primera red comercial del continente.",
    etiqueta: "Junto al mar",
  },
  {
    nombre: "Fortaleza de Paramonga",
    donde: "Km 210 de la Panamericana",
    texto:
      "Pirámide escalonada de adobe sobre un cerro, de unos 30 metros y cuatro niveles. La levantaron los chimú entre 1100 y 1400, y los incas la ocuparon hasta 1532. De lejos parece un castillo medieval plantado en el desierto. Está sobre el río Fortaleza — el mismo que riega el valle de Chasquitambo, 50 km más arriba.",
    etiqueta: "Chimú e inca",
    destacado: true,
  },
  {
    nombre: "Casa de Bolívar",
    donde: "Pativilca, a media cuadra de la plaza",
    texto:
      "Aquí Simón Bolívar instaló su cuartel general. De esta casa salieron las decisiones que llevaron a Junín y Ayacucho. Hoy es el Museo Bolivariano y casi nadie se detiene, aunque está a un minuto del desvío.",
    etiqueta: "1824",
  },
];

/* El perfil: km de carretera y altitud aproximada en metros. */
const PARADAS = [
  {
    km: 0,
    altitud: 100,
    nombre: "Pativilca",
    subtitulo: "El desvío",
    texto:
      "Dejas la Panamericana y giras hacia los Andes. A partir de aquí la carretera solo sube. Última gasolinera con precio de costa.",
  },
  {
    km: 49,
    altitud: 750,
    nombre: "Chasquitambo",
    subtitulo: "La parada",
    esAqui: true,
    texto:
      "Valle del Fortaleza, sol todo el año. Hospedajes a pie de carretera, cuy, y la fruta del valle recién cortada. Es el último lugar cómodo antes de que la carretera se ponga seria: de aquí a Conococha son 72 km en los que subes 3,300 metros.",
    consejo:
      "Come aquí. Más arriba el cuerpo empieza a sentir la altura y comer pesado a 4,000 m es mala idea.",
  },
  {
    km: 121,
    altitud: 4050,
    nombre: "Conococha",
    subtitulo: "El punto más alto",
    texto:
      "Una laguna en una planicie entre la Cordillera Negra y la Blanca. Aquí nace el río Santa, que correrá 200 km hacia el norte por el Callejón de Huaylas hasta el Pacífico. Es la divisoria: dejaste de subir siguiendo el Fortaleza y empiezas a bajar siguiendo el Santa.",
    consejo:
      "Primer contacto con los 4,000 m. No corras, no fumes, bebe agua. Si paras a tomar fotos, muévete despacio.",
  },
  {
    km: 150,
    altitud: 3550,
    nombre: "Cátac",
    subtitulo: "El desvío de las puyas",
    texto:
      "De aquí sale el camino a Pastoruri y al bosque de Puyas de Raimondi. La puya es la bromelia más grande del mundo: crece hasta 11 metros, florece una sola vez entre los 75 y los 100 años de edad, y después muere. Un ser vivo que espera un siglo para florecer una vez.",
  },
  {
    km: 175,
    altitud: 3400,
    nombre: "Recuay",
    subtitulo: "Callejón de Huaylas",
    texto:
      "Ya estás en el callejón, con la Cordillera Blanca a la derecha y la Negra a la izquierda. Faltan 25 km.",
  },
  {
    km: 200,
    altitud: 3050,
    nombre: "Huaraz",
    subtitulo: "Llegaste",
    texto:
      "Capital de Áncash y campamento base de la Cordillera Blanca. Si vienes a trekking, dedica un día a aclimatarte antes de subir a cualquier laguna.",
  },
];

/* Datos para el desvío desde Cátac, que mucha gente hace en el mismo viaje. */
const DESVIO_PASTORURI = {
  nombre: "Pastoruri",
  altitud: 4850,
  texto:
    "Glaciar a 4,850 m, promocionado como «la ruta del cambio climático» porque su retroceso es visible de un año a otro. Se camina el borde del hielo.",
};
