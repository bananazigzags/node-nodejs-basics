import { rename as renameFile } from "node:fs";

const rename = async () => {
  renameFile(
    "./src/fs/files/wrongFilename.txt",
    "./src/fs/files/properFilename.md",
    (err) => {
      if (err) throw new Error("FS operation failed");
    }
  );
};

await rename();
