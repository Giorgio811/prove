const http = require("http");

const server = http.createServer((req, res) => {
  res.write("ciao");
  res.end();
});

server.listen(8080);
