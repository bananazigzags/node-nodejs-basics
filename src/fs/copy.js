import { cp } from "node:fs/promises";
import { throwFSOperationError } from "./error.js";

const fileUrl = import.meta.url;
const source = new URL("files", fileUrl);
const destination = new URL("files_copy", fileUrl);

const copy = async () => {
  try {
    await cp(source, destination, { recursive: true, force: false, errorOnExist: true })
  } catch (e) {
    throwFSOperationError();
  }
};

await copy();

