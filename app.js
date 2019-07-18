require('dotenv').config();
const http = require('http');

const host = process.env.HOST;
const port = process.env.PORT;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(`{"message": "Hello, World!"}`);
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

