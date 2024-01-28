import { rename as renameFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { throwFSOperationError } from "./error.js";

const fileUrl = import.meta.url;
const oldPath = new URL("files/wrongFilename.txt", fileUrl);
const newPath = new URL("files/properFilename.txt", fileUrl);

const rename = async () => {
  if (existsSync(newPath)) throwFSOperationError();

  try {
    await renameFile(oldPath, newPath);
  } catch(e) {
    throwFSOperationError();
  }
};

await rename();