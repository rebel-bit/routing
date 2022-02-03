//var http = require("http");

/*http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("URL: " + request.url);
    response.end();
  })
  .listen(8000);

console.log("Server running on http://localhost:8000");*/
/*var http = require("http");

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    switch (request.url) {
      case "/home":
        response.write("Hello KAwan");
        break;
      case "/profile":
        response.write("Selamat datang di profil");
        break;
      case "/abuot":
        response.write("Apa kabar kalian");
        break;
      default:
        response.write("404: Halaman tidak ditemukan");
    }
    response.end();
  })
  .listen(8000);

console.log("Server running on http://localhost:8000");*/
var http = require("http");

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
console.log(url.href);
