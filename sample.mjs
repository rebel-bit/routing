function samplePromise() {
  return Promise.resolve("Ghost");
}

const name = await samplePromise();
console.info(name);
