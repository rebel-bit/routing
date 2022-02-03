function samplePromise() {
  return Promise.resolve("Ghost");
}
async function run() {
  const name = await samplePromise();
  console.info(name);
}
run();
