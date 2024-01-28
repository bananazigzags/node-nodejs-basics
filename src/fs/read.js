import { readFile } from "node:fs/promises";
import { throwFSOperationError } from "./error.js";

const filePath = new URL('files/fileToRead.txt', import.meta.url);

const read = async () => {
  try {
    const contents = await readFile(filePath, { encoding: 'utf8' });
    console.log(contents);
  } catch (err) {
    throwFSOperationError();
  }
};

await read();