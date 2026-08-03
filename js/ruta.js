/* Dibuja el perfil de altitud de la ruta y maneja la interacción.
 * Los datos vienen de js/ruta-datos.js. Sin dependencias.
 */

(function () {
  "use strict";

  const SVG_NS = "http://www.w3.org/2000/svg";

  /* Marco del gráfico, en unidades del viewBox (1000 x 400). */
  const M = { izq: 58, der: 28, arriba: 34, abajo: 56 };
  const ANCHO = 1000, ALTO = 400;
  const PLOT_W = ANCHO - M.izq - M.der;
  const PLOT_H = ALTO - M.arriba - M.abajo;
  const KM_MAX = 200;
  const ALT_MAX = 4400;

  const x = function (km) { return M.izq + (km / KM_MAX) * PLOT_W; };
  const y = function (alt) { return M.arriba + (1 - alt / ALT_MAX) * PLOT_H; };

  function crear(tag, attrs) {
    const el = document.createElementNS(SVG_NS, tag);
    for (const k in attrs) el.setAttribute(k, attrs[k]);
    return el;
  }

  /* Catmull-Rom a Bézier: suaviza la línea entre los puntos reales.
     Es solo interpolación visual — los puntos marcados son los datos. */
  function curva(pts) {
    if (pts.length < 2) return "";
    let d = "M " + pts[0][0] + " " + pts[0][1];
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i - 1] || pts[i];
      const p1 = pts[i];
      const p2 = pts[i + 1];
      const p3 = pts[i + 2] || p2;
      const c1x = p1[0] + (p2[0] - p0[0]) / 6;
      const c1y = p1[1] + (p2[1] - p0[1]) / 6;
      const c2x = p2[0] - (p3[0] - p1[0]) / 6;
      const c2y = p2[1] - (p3[1] - p1[1]) / 6;
      d += " C " + c1x + " " + c1y + ", " + c2x + " " + c2y + ", " + p2[0] + " " + p2[1];
    }
    return d;
  }

  /* ── Gráfico ────────────────────────────────────────── */

  function dibujar() {
    const svg = document.getElementById("grafico");
    if (!svg) return;

    /* Degradado del relleno */
    const defs = crear("defs", {});
    const grad = crear("linearGradient", { id: "relleno", x1: "0", y1: "0", x2: "0", y2: "1" });
    grad.appendChild(crear("stop", { offset: "0%",   "stop-color": "#E08526", "stop-opacity": ".28" }));
    grad.appendChild(crear("stop", { offset: "100%", "stop-color": "#E08526", "stop-opacity": ".02" }));
    defs.appendChild(grad);
    svg.appendChild(defs);

    /* Líneas de altitud */
    const eje = crear("g", { class: "g-eje" });
    [0, 1000, 2000, 3000, 4000].forEach(function (a) {
      eje.appendChild(crear("line", {
        x1: M.izq, y1: y(a), x2: ANCHO - M.der, y2: y(a), class: "g-guia",
      }));
      const t = crear("text", { x: M.izq - 10, y: y(a) + 4, class: "g-etiquetaY" });
      t.textContent = a === 0 ? "0 m" : (a / 1000) + ",000";
      eje.appendChild(t);
    });
    svg.appendChild(eje);

    /* Área y línea del camino */
    const pts = PARADAS.map(function (p) { return [x(p.km), y(p.altitud)]; });
    const d = curva(pts);

    svg.appendChild(crear("path", {
      d: d + " L " + x(KM_MAX) + " " + y(0) + " L " + x(0) + " " + y(0) + " Z",
      fill: "url(#relleno)", stroke: "none",
    }));
    svg.appendChild(crear("path", { d: d, class: "g-linea" }));

    /* Marcadores */
    const grupo = crear("g", { class: "g-paradas" });

    PARADAS.forEach(function (p, i) {
      const px = x(p.km), py = y(p.altitud);

      const g = crear("g", {
        class: "g-parada" + (p.esAqui ? " g-parada--aqui" : ""),
        tabindex: "0", role: "button",
        "aria-label": p.nombre + ", kilómetro " + p.km + ", " + p.altitud + " metros",
        "data-i": i,
      });

      /* Guía vertical hasta el eje */
      g.appendChild(crear("line", { x1: px, y1: py, x2: px, y2: y(0), class: "g-tallo" }));

      /* Punto */
      g.appendChild(crear("circle", { cx: px, cy: py, r: p.esAqui ? 11 : 7, class: "g-halo" }));
      g.appendChild(crear("circle", { cx: px, cy: py, r: p.esAqui ? 7 : 4.5, class: "g-punto" }));

      /* Nombre sobre el punto */
      const rot = p.esAqui ? "" : "";
      const nom = crear("text", {
        x: px, y: py - (p.esAqui ? 22 : 16), class: "g-nombre", transform: rot,
      });
      nom.textContent = p.nombre;
      g.appendChild(nom);

      if (p.esAqui) {
        const alt = crear("text", { x: px, y: py - 38, class: "g-estrella" });
        alt.textContent = "★";
        g.appendChild(alt);
      }

      /* Kilómetro en el eje */
      const km = crear("text", { x: px, y: y(0) + 24, class: "g-km" });
      km.textContent = "km " + p.km;
      g.appendChild(km);

      grupo.appendChild(g);
    });

    svg.appendChild(grupo);

    /* Interacción */
    const activar = function (i) {
      grupo.querySelectorAll(".g-parada").forEach(function (el) {
        el.classList.toggle("g-parada--activa", Number(el.dataset.i) === i);
      });
      mostrarDetalle(PARADAS[i]);
    };

    grupo.addEventListener("click", function (e) {
      const g = e.target.closest(".g-parada");
      if (g) activar(Number(g.dataset.i));
    });
    grupo.addEventListener("keydown", function (e) {
      const g = e.target.closest(".g-parada");
      if (g && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        activar(Number(g.dataset.i));
      }
    });

    /* Arranca en Chasquitambo, que es de lo que va este sitio. */
    const inicial = PARADAS.findIndex(function (p) { return p.esAqui; });
    activar(inicial === -1 ? 0 : inicial);
  }

  /* ── Panel de detalle ───────────────────────────────── */

  function mostrarDetalle(p) {
    const cont = document.getElementById("detalle");
    if (!cont) return;

    cont.className = "detalle" + (p.esAqui ? " detalle--aqui" : "");
    cont.innerHTML =
      '<div class="detalle__cabecera">' +
        '<div>' +
          '<p class="detalle__sub">' + p.subtitulo + "</p>" +
          '<h3 class="detalle__nombre">' + p.nombre + "</h3>" +
        "</div>" +
        '<div class="detalle__datos">' +
          '<span><strong>km ' + p.km + "</strong>desde Pativilca</span>" +
          '<span><strong>' + p.altitud.toLocaleString("es-PE") + " m</strong>de altitud</span>" +
        "</div>" +
      "</div>" +
      '<p class="detalle__texto">' + p.texto + "</p>" +
      (p.consejo ? '<p class="detalle__consejo">' + p.consejo + "</p>" : "") +
      (p.esAqui
        ? '<a class="detalle__enlace" href="index.html#directorio">Ver hospedajes y comida →</a>'
        : "");
  }

  /* ── Antes del desvío ───────────────────────────────── */

  function pintarAntes() {
    const cont = document.getElementById("antes");
    if (!cont) return;

    cont.innerHTML = ANTES.map(function (a) {
      return (
        '<article class="hito2' + (a.destacado ? " hito2--destacado" : "") + '">' +
          '<span class="hito2__etiqueta">' + a.etiqueta + "</span>" +
          '<h3 class="hito2__nombre">' + a.nombre + "</h3>" +
          '<p class="hito2__donde">' + a.donde + "</p>" +
          '<p class="hito2__texto">' + a.texto + "</p>" +
        "</article>"
      );
    }).join("");
  }

  /* ── Menú móvil (igual que en la portada) ───────────── */

  function menuMovil() {
    const boton = document.getElementById("nav-menu");
    const panel = document.getElementById("nav-enlaces");
    if (!boton || !panel) return;

    const abrir = function (si) {
      boton.setAttribute("aria-expanded", String(si));
      panel.classList.toggle("nav__enlaces--abierto", si);
    };

    boton.addEventListener("click", function () {
      abrir(boton.getAttribute("aria-expanded") !== "true");
    });
    panel.addEventListener("click", function (e) {
      if (e.target.tagName === "A") abrir(false);
    });
    document.addEventListener("click", function (e) {
      if (!panel.contains(e.target) && !boton.contains(e.target)) abrir(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") abrir(false);
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 720) abrir(false);
    });
  }

  function navPegajosa() {
    const nav = document.getElementById("nav");
    if (!nav) return;
    const alternar = function () { nav.classList.toggle("nav--pegado", window.scrollY > 12); };
    alternar();
    window.addEventListener("scroll", alternar, { passive: true });
  }

  dibujar();
  pintarAntes();
  menuMovil();
  navPegajosa();
})();
