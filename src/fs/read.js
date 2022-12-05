import { readFile } from "node:fs";
import { join } from "node:path";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const read = async () => {
  readFile(join(__dirname, "files", "fileToRead.txt"), "utf8", (err, data) => {
    if (err) throw new Error("FS operation failed");
    console.log(data);
  });
};

await read();
