import { createReadStream } from "node:fs";
import { join } from "node:path";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const read = async () => {
  const fileContent = createReadStream(
    join(__dirname, "files", "fileToRead.txt")
  );
  fileContent.on("data", (chunk) => {
    process.stdout.write(chunk);
  });
};

await read();
