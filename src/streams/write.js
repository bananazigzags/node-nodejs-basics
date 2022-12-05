import { createWriteStream } from "node:fs";
import * as readline from "node:readline/promises";
import { join } from "node:path";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const write = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "What should I write?\n",
  });

  const writeStream = createWriteStream(
    join(__dirname, "files", "fileToWrite.txt")
  );

  rl.prompt();

  rl.on("line", (input) => {
    writeStream.write(input);
    writeStream.on("error", (err) => {
      console.log(err);
    });
    rl.close();
  }).on("close", () => {
    writeStream.end();
    process.exit();
  });
};

await write();
