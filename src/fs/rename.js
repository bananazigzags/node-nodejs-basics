import { rename as renameFile, existsSync } from "node:fs";

const rename = async () => {
  const basePath = "./src/fs/files";
  const oldPath = `${basePath}/wrongFilename.txt`;
  const newPath = `${basePath}/properFilename.md`;

  if (existsSync(newPath)) throw new Error("FS operation failed");

  renameFile(oldPath, newPath, (err) => {
    if (err) throw new Error("FS operation failed");
  });
};

await rename();
