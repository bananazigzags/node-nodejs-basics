import { createReadStream } from "node:fs";

const read = async () => {
  const filePath = new URL("./files/fileToRead.txt", import.meta.url);
  const fileContent = createReadStream(filePath);
  fileContent.on("data", (chunk) => {
    process.stdout.write(chunk);
  });
};

await read();
