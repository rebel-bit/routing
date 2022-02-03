var fs = require("fs");
var http = require("http");

http
  .createServer(function (request, respon) {
    //read file
    fs.readFile("fiesystem.html", (err, data) => {
      if (err) throw err;

      respon.writeHead(200, { "Content-type": "text/html" });
      respon.write(data);
      respon.end();
    });
  })
  .listen(8080);

console.info("server berjalan");
