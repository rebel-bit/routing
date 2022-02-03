import fs from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("Yosua\n");
writer.write("Y\n");
writer.write("Ariyanto");
writer.end();

const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
  console.info(data, toString());
});
