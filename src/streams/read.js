import { createReadStream } from "node:fs";

const fileToRead = new URL("files/fileToRead.txt", import.meta.url);

const read = async () => {
  const fileContent = createReadStream(fileToRead);
  fileContent.on("data", (chunk) => {
    process.stdout.write(chunk);
  });
};

await read();