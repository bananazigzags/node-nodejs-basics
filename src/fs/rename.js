import { rename as renameFile, existsSync } from "node:fs";
import { join } from "node:path";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const rename = async () => {
  const basePath = join(__dirname, "files");
  const oldPath = join(basePath, "wrongFilename.txt");
  const newPath = join(basePath, "properFilename.md");

  if (existsSync(newPath)) throw new Error("FS operation failed");

  renameFile(oldPath, newPath, (err) => {
    if (err) throw new Error("FS operation failed");
  });
};

await rename();
