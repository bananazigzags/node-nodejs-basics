import { createWriteStream } from "node:fs";
import * as readline from "node:readline/promises";

const write = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "What should I write?\n",
  });

  const filePath = new URL("./files/fileToWrite.txt", import.meta.url);
  const writeStream = createWriteStream(filePath);

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
