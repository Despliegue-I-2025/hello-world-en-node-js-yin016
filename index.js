const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');

  // Esta línea está comentada. Deberías descomentarla para que funcione
  // y cambiar el texto que se envía como respuesta.

  //res.end('Poné lo que quieras acá');
});

server.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});