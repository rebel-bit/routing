var http = require("http");
var fs = require("fs");
http
  .createServer(function (req, res) {
    //Open a file on the server and return its content:
    fs.readFile("demo.html", function (err, date) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(date);

      fs.readFile("demo.pdf", function (err, isi) {
        res.writeHead(200, { "Content-Type": "text/pdf" });
        res.write(isi);

        fs.readFile("demo.xml", function (err, data) {
          res.writeHead(200, { "Content-Type": "text/xml" });
          res.write(data);

          return res.end();
        });
      });
    });
  })
  .listen(8080);
