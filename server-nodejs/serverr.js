var http = require("http");
var server = http.createServer(function (req, res) {
  res.end("Hi, selamat datang di Apa");
});

server.listen(8888);
console.info("server runing http:/localhost:8000");
