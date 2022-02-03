//var fs = require("fs");

//fs.open("file.txt", "wai", function (err, file) {
//if (err) throw err;
//console.info("tersimpam bang");
//});

var fs = require("fs");

//create a file named mynewfile1.txt:
fs.appendFile("mynew.txt", "Hello dari  kamu!", function (err) {
  if (err) throw err;
  console.log("Saved!");
});
