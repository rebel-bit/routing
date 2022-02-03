import process from "process";

process.addListener("exit", (exitCode) => {
  cpnsole.info(`node js kelura ${exitCode}`);
});

console.info(process.version);

process.exit(1);

//console.info(hai);
