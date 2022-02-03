var fs = require("fs");

fs.unlink("mynew.txt", function (err) {
  if (err) throw err;
  console.log("File deleted!");
});
