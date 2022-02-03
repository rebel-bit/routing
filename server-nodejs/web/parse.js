var url = require("url");
var adr = "https://www.fazasenpai.my.id/search?q=download%2C+situs+";
var q = url.parse(adr, true);

console.log("protocol: " + q.protocol);
console.log("hostname: " + q.host);
console.log("pathname: " + q.pathname);
console.log("params  : " + q.search);

var qdata = q.query;
console.log(qdata);
