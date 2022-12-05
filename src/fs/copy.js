import { cp } from "node:fs";

const copy = async () => {
  cp(
    "./src/fs/files",
    "./src/fs/files_copy",
    { recursive: true, force: false, errorOnExist: true },
    (err) => {
      if (err) throw new Error("FS operation failed");
    }
  );
};

await copy();
