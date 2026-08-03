/* Parada Chasquitambo — lógica de la landing.
 * Sin dependencias: los datos llegan de js/datos.js por <script>, así que
 * la web funciona abriendo index.html directo, sin servidor.
 */

(function () {
  "use strict";

  const ICONO_CATEGORIA = { hospedaje: "🛏", comida: "🍽", fruta: "🍉" };

  /* ── Ruta ───────────────────────────────────────────── */

  function pintarRuta() {
    const lista = document.getElementById("ruta-lista");
    if (!lista) return;

    lista.innerHTML = RUTA.map(function (hito) {
      return (
        '<li class="hito' + (hito.esAqui ? " hito--aqui" : "") + '">' +
          '<div class="hito__punto">km ' + hito.km + "</div>" +
          '<div>' +
            '<p class="hito__lugar">' + hito.lugar + "</p>" +
            '<p class="hito__nota">' + hito.nota + "</p>" +
          "</div>" +
        "</li>"
      );
    }).join("");
  }

  /* ── Atractivos ─────────────────────────────────────── */

  function pintarAtractivos() {
    const cont = document.getElementById("atractivos");
    if (!cont) return;

    cont.innerHTML = ATRACTIVOS.map(function (a) {
      const apodo = a.apodo
        ? '<span class="atractivo__apodo">«' + a.apodo + "»</span>"
        : "";

      /* Si el archivo todavía no está en img/, se quita el bloque entero:
         mejor sin foto que con el ícono de imagen rota.
         anchoMax topa las imágenes de baja resolución a su tamaño nativo,
         para que no se vean borrosas al ampliarlas. */
      const tope = a.anchoMax ? ' style="max-width:' + a.anchoMax + 'px"' : "";
      const foto = a.foto
        ? '<figure class="atractivo__foto"' + tope + ">" +
            '<img src="img/' + a.foto + '" alt="' + a.nombre + ", " + a.distancia + '"' +
            ' loading="lazy" onerror="this.closest(\'figure\').remove()">' +
            (a.credito ? '<figcaption>Foto: ' + a.credito + "</figcaption>" : "") +
          "</figure>"
        : "";

      const historia = a.historia
        ? '<details class="leyenda">' +
            "<summary>La leyenda</summary>" +
            "<p>" + a.historia + "</p>" +
          "</details>"
        : "";

      return (
        '<li class="atractivo' + (a.destacado ? " atractivo--destacado" : "") + '">' +
          '<span class="atractivo__icono" aria-hidden="true">' + a.icono + "</span>" +
          '<div class="atractivo__cuerpo">' +
            '<h3 class="atractivo__nombre">' + a.nombre + apodo + "</h3>" +
            '<p class="atractivo__donde">' + a.distancia + "</p>" +
            foto +
            '<p class="atractivo__texto">' + a.texto + "</p>" +
            historia +
          "</div>" +
        "</li>"
      );
    }).join("");
  }

  /* ── Fiestas ────────────────────────────────────────── */

  /* Días que faltan para el próximo día/mes, saltando al año siguiente
     si la fecha de este año ya pasó. */
  function diasHasta(mes, dia) {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    let objetivo = new Date(hoy.getFullYear(), mes - 1, dia);
    if (objetivo < hoy) objetivo = new Date(hoy.getFullYear() + 1, mes - 1, dia);

    return Math.round((objetivo - hoy) / 86400000);
  }

  function pintarProxima() {
    const el = document.getElementById("proxima");
    if (!el) return;

    const conFecha = FIESTAS.filter(function (f) { return !f.porConfirmar; });
    if (conFecha.length === 0) return;

    const proxima = conFecha
      .map(function (f) { return { fiesta: f, dias: diasHasta(f.mes, f.dia) }; })
      .sort(function (a, b) { return a.dias - b.dias; })[0];

    const d = proxima.dias;
    const cuenta =
      d === 0 ? "es hoy" :
      d === 1 ? "es mañana" :
      "faltan " + d + " días";

    el.hidden = false;
    el.innerHTML =
      '<span class="proxima__etiqueta">Lo próximo</span>' +
      '<p class="proxima__texto"><strong>' + proxima.fiesta.nombre + "</strong> — " +
      proxima.fiesta.fecha + " en " + proxima.fiesta.lugar + "." +
      '<span class="proxima__cuenta">' + cuenta + "</span></p>";
  }

  function pintarFiestas() {
    const cont = document.getElementById("fiestas");
    if (!cont) return;

    cont.innerHTML = FIESTAS.map(function (f) {
      return (
        '<article class="fiesta' + (f.principal ? " fiesta--principal" : "") + '">' +
          '<p class="fiesta__fecha' + (f.porConfirmar ? " fiesta__fecha--pendiente" : "") +
            '">' + f.fecha + "</p>" +
          '<h3 class="fiesta__nombre">' + f.nombre + "</h3>" +
          '<p class="fiesta__lugar">' + f.lugar + "</p>" +
          '<p class="fiesta__texto">' + f.texto + "</p>" +
        "</article>"
      );
    }).join("");
  }

  /* ── Directorio ─────────────────────────────────────── */

  function tieneContacto(n) {
    return Boolean(n.whatsapp || n.telefono);
  }

  function pintarDatos(n) {
    const datos = [];
    if (n.horario) datos.push('<span class="dato">🕐 ' + n.horario + "</span>");
    else datos.push('<span class="dato dato--pendiente">horario por confirmar</span>');

    if (n.precio) datos.push('<span class="dato">💵 ' + n.precio + "</span>");
    else datos.push('<span class="dato dato--pendiente">precio por confirmar</span>');

    return datos.join("");
  }

  function pintarAcciones(n) {
    if (!tieneContacto(n)) {
      return '<span class="accion accion--inactiva">Contacto por confirmar</span>';
    }

    let html = "";
    if (n.whatsapp) {
      const msg = encodeURIComponent(
        "Hola, los encontré en Parada Chasquitambo. Quisiera consultar por "
      );
      html +=
        '<a class="accion accion--wa" target="_blank" rel="noopener" href="https://wa.me/' +
        n.whatsapp + "?text=" + msg + '">WhatsApp</a>';
    }
    if (n.telefono) {
      html +=
        '<a class="accion accion--tel" href="tel:' + n.telefono + '">Llamar</a>';
    }
    return html;
  }

  function pintarImagen(n) {
    if (n.foto) {
      return '<img src="img/' + n.foto + '" alt="' + n.nombre + '" loading="lazy">';
    }
    const icono = ICONO_CATEGORIA[n.categoria] || "◈";
    return '<span class="tarjeta__placeholder">' + icono + "</span>";
  }

  function pintarTarjetas(filtro) {
    const cont = document.getElementById("tarjetas");
    if (!cont) return;

    const visibles = NEGOCIOS.filter(function (n) {
      return filtro === "todos" || n.categoria === filtro;
    });

    cont.innerHTML = visibles.map(function (n) {
      return (
        '<article class="tarjeta">' +
          '<div class="tarjeta__imagen">' +
            pintarImagen(n) +
            (n.destacado ? '<span class="tarjeta__insignia">Destacado</span>' : "") +
            '<span class="tarjeta__km">' + n.km + "</span>" +
          "</div>" +
          '<div class="tarjeta__cuerpo">' +
            '<h3 class="tarjeta__nombre">' + n.nombre + "</h3>" +
            '<p class="tarjeta__desc">' + n.descripcion + "</p>" +
            '<div class="tarjeta__datos">' + pintarDatos(n) + "</div>" +
            '<div class="tarjeta__acciones">' + pintarAcciones(n) + "</div>" +
          "</div>" +
        "</article>"
      );
    }).join("");
  }

  function pintarFiltros() {
    const cont = document.getElementById("filtros");
    if (!cont) return;

    cont.innerHTML = Object.keys(CATEGORIAS).map(function (clave, i) {
      const cat = CATEGORIAS[clave];
      return (
        '<button class="filtro" role="tab" data-filtro="' + clave + '"' +
        ' aria-selected="' + (i === 0) + '">' +
          '<span class="filtro__icono" aria-hidden="true">' + cat.icono + "</span>" +
          cat.etiqueta +
        "</button>"
      );
    }).join("");

    cont.addEventListener("click", function (e) {
      const btn = e.target.closest(".filtro");
      if (!btn) return;

      cont.querySelectorAll(".filtro").forEach(function (b) {
        b.setAttribute("aria-selected", String(b === btn));
      });
      pintarTarjetas(btn.dataset.filtro);
    });
  }

  /* ── Aviso de datos pendientes ──────────────────────── */

  function pintarAviso() {
    const el = document.getElementById("aviso-datos");
    if (!el) return;

    const faltan = NEGOCIOS.filter(function (n) { return !tieneContacto(n); }).length;

    if (faltan === 0) {
      el.hidden = true;
      return;
    }

    el.innerHTML =
      "<strong>Estamos levantando los datos.</strong> " + faltan + " de " +
      NEGOCIOS.length + " fichas todavía no tienen contacto confirmado. " +
      "Preferimos dejarlas vacías antes que publicar un número equivocado: " +
      "los estamos recogiendo negocio por negocio en el pueblo.";
  }

  /* ── Menú móvil ─────────────────────────────────────── */

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

    /* Al elegir una sección el menú estorba: se cierra solo. */
    panel.addEventListener("click", function (e) {
      if (e.target.tagName === "A") abrir(false);
    });

    /* Clic fuera y tecla Escape también cierran. */
    document.addEventListener("click", function (e) {
      if (!panel.contains(e.target) && !boton.contains(e.target)) abrir(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") abrir(false);
    });

    /* Si se agranda la ventana, el panel vuelve a ser barra normal. */
    window.addEventListener("resize", function () {
      if (window.innerWidth > 720) abrir(false);
    });
  }

  /* ── Nav pegajosa ───────────────────────────────────── */

  function navPegajosa() {
    const nav = document.getElementById("nav");
    if (!nav) return;

    const alternar = function () {
      nav.classList.toggle("nav--pegado", window.scrollY > 12);
    };
    alternar();
    window.addEventListener("scroll", alternar, { passive: true });
  }

  /* ── Arranque ───────────────────────────────────────── */

  pintarRuta();
  pintarAtractivos();
  pintarProxima();
  pintarFiestas();
  pintarFiltros();
  pintarTarjetas("todos");
  pintarAviso();
  menuMovil();
  navPegajosa();
})();
