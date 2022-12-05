import { writeFile } from "node:fs/promises";
import * as url from "url";
import { join } from "node:path";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const create = async () => {
  const filePath = join(__dirname, "files", "fresh.txt");

  writeFile(filePath, "I am fresh and young", { flag: "ax" }).catch(() => {
    throw new Error("FS operation failed");
  });
};

await create();
