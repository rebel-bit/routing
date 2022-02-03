var fs = require("fs");

fs.rename("fsopen.js", "fspen.js", function (err) {
  if (err) throw err;
  console.log("File Renamed!");
});
