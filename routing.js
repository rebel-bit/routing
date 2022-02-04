//var http = require("http");

/*http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("URL: " + request.url);
    response.end();
  })
  .listen(8000);

console.log("Server running on http://localhost:8000");*/
/*var fs = require("fs");
var http = require("http");

http
  .createServer((req, res) => {
    function awalan(page) {
      return fs.readFile(page, (err, data) => {
        res.end(data);
      });
    }

    switch (req.url) {
      case "/home":
        awalan("home.html");
        break;
      case "/about":
        awalan("about.html");
        break;
      case "/profile":
        awalan("profile.html");
        break;
      default:
        res.end("404 Not Found");
        break;
    }
  })
  .listen(8000);*/

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

/*var fs = require("fs");
var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-type": "text/html" });

    var pag = req.pag;

    if (pag === "/") {
      res.write(
        "<center><pre><code>welcome selamat datang</center></pre></code>"
      );
      res.end();
    } else if (pag === "/home") {
      fs.readFile("home.html", function (err, data) {
        res.end(data);
      });
    } else if (pag === "/profile") {
      fs.readFile("profile.html", function (err, data) {
        res.end(data);
      });
    } else if (pag === "/about") {
      fs.readFile("about.html", function (err, data) {
        res.end(data);
      });
    } else {
      res.write("<center><pre><code>awas tak hacked</center></pre></code>");
      res.end();
    }
  })
  .listen(1000, function () {});*/
/*var fs = require("fs");
var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });

    var url = req.url;

    if (url === "/") {
      res.write(
        "<center><pre><code>welcome selamat datang</center></pre></code>"
      );
      res.end();
    } else if (url === "/home") {
      fs.readFile("home.html", function (_err, data) {
        res.end(data);
      });
    } else if (url === "/profile") {
      fs.readFile("profil.html", function (_err, data) {
        res.end(data);
      });
    } else if (url === "/about") {
      fs.readFile("about.html", function (_err, data) {
        res.end(data);
      });
    } else {
      res.write("<center><pre><code>awas tak hacked</center></pre></code>");
      res.end();
    }
  })
  .listen(9000, function () {
    console.log("server start at http://localhost:9000");
  });*/
var fs = require("fs");
var http = require("http");

var _0x4efa4e = _0x189a;
function _0x239a() {
  var _0x181042 = [
    "profil.html",
    "readFile",
    "3PUMRpK",
    "log",
    "1161165MZUNCX",
    "createServer",
    "home.html",
    "about.html",
    "/home",
    "write",
    "<center><pre><code>awas\x20tak\x20hacked</center></pre></code>",
    "text/html",
    "6irVmPQ",
    "5234427tnVLCw",
    "server\x20start\x20at\x20http://localhost:9000",
    "40950DTYXNp",
    "1518646OmTEWO",
    "3930572UtJqxY",
    "/about",
    "8361544iPPKZC",
    "/profile",
    "3017539yfdCfX",
    "end",
    "listen",
    "url",
    "writeHead",
  ];
  _0x239a = function () {
    return _0x181042;
  };
  return _0x239a();
}
function _0x189a(_0x11134a, _0x492ded) {
  var _0x239a5b = _0x239a();
  return (
    (_0x189a = function (_0x189a11, _0x2a0b43) {
      _0x189a11 = _0x189a11 - 0x1d4;
      var _0x2e71e1 = _0x239a5b[_0x189a11];
      return _0x2e71e1;
    }),
    _0x189a(_0x11134a, _0x492ded)
  );
}
(function (_0x407466, _0x425f39) {
  var _0x424813 = _0x189a,
    _0xb695d2 = _0x407466();
  while (!![]) {
    try {
      var _0x414c49 =
        -parseInt(_0x424813(0x1db)) / 0x1 +
        parseInt(_0x424813(0x1dc)) / 0x2 +
        (parseInt(_0x424813(0x1e8)) / 0x3) *
          (-parseInt(_0x424813(0x1dd)) / 0x4) +
        -parseInt(_0x424813(0x1ea)) / 0x5 +
        (-parseInt(_0x424813(0x1d8)) / 0x6) *
          (parseInt(_0x424813(0x1e1)) / 0x7) +
        parseInt(_0x424813(0x1df)) / 0x8 +
        parseInt(_0x424813(0x1d9)) / 0x9;
      if (_0x414c49 === _0x425f39) break;
      else _0xb695d2["push"](_0xb695d2["shift"]());
    } catch (_0x5d7484) {
      _0xb695d2["push"](_0xb695d2["shift"]());
    }
  }
})(_0x239a, 0xaab50),
  http[_0x4efa4e(0x1eb)](function (_0xd1a063, _0x3334d4) {
    var _0x429173 = _0x4efa4e;
    _0x3334d4[_0x429173(0x1e5)](0xc8, { "Content-Type": _0x429173(0x1d7) });
    var _0x561658 = _0xd1a063[_0x429173(0x1e4)];
    if (_0x561658 === "/")
      _0x3334d4["write"](
        "<center><pre><code>welcome\x20selamat\x20datang</center></pre></code>"
      ),
        _0x3334d4["end"]();
    else {
      if (_0x561658 === _0x429173(0x1d4))
        fs[_0x429173(0x1e7)](_0x429173(0x1ec), function (_0x1c11d0, _0x2f0ccb) {
          _0x3334d4["end"](_0x2f0ccb);
        });
      else {
        if (_0x561658 === _0x429173(0x1e0))
          fs[_0x429173(0x1e7)](
            _0x429173(0x1e6),
            function (_0x5d7e04, _0x230770) {
              _0x3334d4["end"](_0x230770);
            }
          );
        else
          _0x561658 === _0x429173(0x1de)
            ? fs["readFile"](_0x429173(0x1ed), function (_0x2e1a73, _0x590df7) {
                var _0x24ae7c = _0x429173;
                _0x3334d4[_0x24ae7c(0x1e2)](_0x590df7);
              })
            : (_0x3334d4[_0x429173(0x1d5)](_0x429173(0x1d6)),
              _0x3334d4[_0x429173(0x1e2)]());
      }
    }
  })[_0x4efa4e(0x1e3)](0x2328, function () {
    var _0x5eb7b6 = _0x4efa4e;
    console[_0x5eb7b6(0x1e9)](_0x5eb7b6(0x1da));
  });
