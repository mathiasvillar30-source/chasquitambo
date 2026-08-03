/* Servidor estático mínimo para ver la web en local.
 * Uso:  node servidor.js      →  http://localhost:4321
 */

const http = require("http");
const fs = require("fs");
const path = require("path");

const PUERTO = 4321;
const RAIZ = __dirname;

const TIPOS = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
};

http
  .createServer(function (req, res) {
    let ruta = decodeURIComponent(req.url.split("?")[0]);
    if (ruta === "/") ruta = "/index.html";

    const archivo = path.join(RAIZ, path.normalize(ruta));

    // No dejar salir de la carpeta del proyecto.
    if (!archivo.startsWith(RAIZ)) {
      res.writeHead(403).end("Prohibido");
      return;
    }

    fs.readFile(archivo, function (err, datos) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        res.end("<h1>404</h1><p>No existe " + ruta + "</p>");
        return;
      }
      res.writeHead(200, {
        "Content-Type": TIPOS[path.extname(archivo).toLowerCase()] || "application/octet-stream",
        "Cache-Control": "no-cache",
      });
      res.end(datos);
    });
  })
  .listen(PUERTO, function () {
    console.log("Parada Chasquitambo → http://localhost:" + PUERTO);
  });
