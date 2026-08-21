/* Servidor estático simples para visualizar o site localmente.
   Uso:  node server.js       ->  http://localhost:8081          */
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8081;
const ROOT = __dirname;

const TIPOS = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.json': 'application/json; charset=utf-8',
  '.woff2': 'font/woff2'
};

http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  let file = path.join(ROOT, url === '/' ? 'index.html' : url);

  if (!file.startsWith(ROOT)) { res.writeHead(403).end('Acesso negado'); return; }

  fs.stat(file, (err, st) => {
    if (err) { res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' }).end('<h1>404</h1>'); return; }
    if (st.isDirectory()) file = path.join(file, 'index.html');

    fs.readFile(file, (e, buf) => {
      if (e) { res.writeHead(404).end('404'); return; }
      res.writeHead(200, {
        'Content-Type': TIPOS[path.extname(file).toLowerCase()] || 'application/octet-stream',
        'Cache-Control': 'no-cache'
      });
      res.end(buf);
    });
  });
}).listen(PORT, () => {
  console.log(`Ferragens Santa Rita rodando em http://localhost:${PORT}`);
});
