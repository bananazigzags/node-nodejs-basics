import { readdir } from "node:fs/promises";
import { throwFSOperationError } from "./error.js";

const targetDir = new URL("files", import.meta.url);

const list = async () => {
  try {
    const files = await readdir(targetDir)
    console.log(files)
  } catch(e) {
    throwFSOperationError();
  }
};

await list();