import { readdir } from "node:fs";

const list = async () => {
  readdir("./src/fs/files", (err, files) => {
    if (err) throw new Error("FS operation failed");
    console.log(files);
  });
};

await list();
