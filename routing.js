//var http = require("http");

/*http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("URL: " + request.url);
    response.end();
  })
  .listen(8000);

console.log("Server running on http://localhost:8000");*/
var fs = require("fs");
var http = require("http");

http.createServer.apply((req, response) => {
  function awalan(pag) {
    return fs.readFile(pag, (err, data) => {});
  }
  switch ((req, url)) {
    case "/hom":
      awalan("hom.html");
      break;
    case "/about":
      awalan("about.html");
      break;
    case "/profil":
      awalan("profil.html");
      break;
    default:
      res.end("404 halam tidak ditemukan");
  }
});

/*var http = require("http");

let atas = `Ini navbar cuk&nbsp;&nbsp;&nbsp;
<a href="/HOME">home</a>&nbsp;&nbsp;
<a href="/PROFIL">profile</a>&nbsp;&nbsp;
<a href="/ABOUT">about</a><br>`;
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`${atas}`);
    switch (req.url) {
      case "/":
        res.write(`
      <p>Halaman Awal Cuk</p>
      `);
        break;
      case "/HOME":
        res.write(`<p>Home Cuk</p>`);
        break;
      case "/PROFIL":
        res.write(`<p>Profile Cuk</p>`);
        break;
      case "/ABOUT":
        res.write(`<l>About Cuk</p>`);
        break;
      default:
        res.write(`<h1>Error 404 cuk</h1>`);
        break;
    }
    res.end();
  })
  .listen(1000);

const url = new URL("http://example.com/search?q=download");
console.log(url.search);
console.log(url.searchParams.get("message"));
console.log(url.hostname);
console.log(url.pathname);
console.log(url.hash);
url.hostname = "https://www.fazasenpai.my.id";
console.log(url.href);*/
