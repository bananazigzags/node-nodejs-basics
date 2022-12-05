import { readdir } from "node:fs";
import { join } from "node:path";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const list = async () => {
  readdir(join(__dirname, "files"), (err, files) => {
    if (err) throw new Error("FS operation failed");
    console.log(files);
  });
};

await list();
