var http = require('http');
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/htnl'});
res.write(`<!doctype html><html><head></head>
<body><h1>Sitio en desarrollo 
</h1></body></html>`);
res.end();
}).listen(8081);
// Consola mostrara el siguiente mensaje
console.log('Server running at http://127.0.0.1:8081/');
