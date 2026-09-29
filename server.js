const http = require('http');
const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'index.html');
http.createServer((req, res) => {
  if (req.url === '/health') { res.writeHead(200); return res.end('ok'); }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(500); return res.end('Erreur serveur'); }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  });
}).listen(process.env.PORT || 3000, '0.0.0.0');
