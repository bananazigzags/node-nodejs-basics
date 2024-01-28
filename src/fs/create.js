import { writeFile } from "node:fs/promises";
import { throwFSOperationError } from "./error.js";

const filePath = new URL("files/fresh.txt", import.meta.url)

const create = async () => {
  try {
    await writeFile(filePath, "I am fresh and yound", { flag: "ax"})
  } catch (e) {
    throwFSOperationError()
  }
};

await create();