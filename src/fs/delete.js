import { unlink } from "node:fs/promises";
import { throwFSOperationError } from "./error.js";

const fileToRemove = new URL("files/fileToRemove.txt", import.meta.url);

const remove = async () => {
  try {
    await unlink(fileToRemove);
  } catch(e) {
    throwFSOperationError()
  }
};

await remove();