var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHeader(200, { "Content-Type": "text/json" });
    res.write("Hello <?php info(); ?>");
    res.end();
  })
  .listen(4000);

console.info("server runing");
