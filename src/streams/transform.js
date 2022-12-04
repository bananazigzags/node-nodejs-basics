import { Transform, pipeline } from "node:stream";

const readable = process.stdin;
const writable = process.stdout;

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, enc, cb) {
      const reversedChunk = chunk
        .toString()
        .trim()
        .split("")
        .reverse()
        .join("");
      this.push(reversedChunk + "\n");
      cb();
    },
  });

  pipeline(readable, transformStream, writable, (err) => {
    console.log(`Error: ${err}`);
  });
};

await transform();
