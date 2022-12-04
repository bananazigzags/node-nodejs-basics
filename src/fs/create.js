import { writeFile } from "node:fs/promises";

const create = async () => {
  const filePath = "./src/fs/files/fresh.txt";

  writeFile(filePath, "I am fresh and young", { flag: "ax" }).catch(() => {
    throw new Error("FS operation failed");
  });
};

await create();
