import { Transform } from "node:stream";
import { pipeline } from "node:stream/promises"

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

  try {
    await pipeline(readable, transformStream, writable);
  } catch(err) {
    console.log(`Error: ${err}`);
  }
  
};

await transform();