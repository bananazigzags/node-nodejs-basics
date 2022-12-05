import { unlink } from "node:fs";
import { join } from "node:path";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const remove = async () => {
  unlink(join(__dirname, "files", "fileToRemove.txt"), (err) => {
    if (err) throw new Error("FS operation failed");
  });
};

await remove();
