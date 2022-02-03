var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHeader(200, { "Content-Type": "text/json" });

    res.writeHeader(200, { "Content-Type": "text/hrtml" });

    res.writeHeader(200, { "Content-Type": "text/xml" });

    res.writeHeader(200, { "Content-Type": "text/json" });
    res.end();
  })
  .listen(4000);

console.info("server runing");
