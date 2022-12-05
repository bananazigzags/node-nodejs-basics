import { cp } from "node:fs";
import { join } from "node:path";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const copy = async () => {
  cp(
    join(__dirname, "files"),
    join(__dirname, "files_copy"),
    { recursive: true, force: false, errorOnExist: true },
    (err) => {
      if (err) throw new Error("FS operation failed");
    }
  );
};

await copy();
