import { cp, mkdir } from "node:fs";

const copy = async () => {
  const copiedPath = "./src/fs/copy_files";
  mkdir(copiedPath, { recursive: true }, (err) => {
    if (err) console.log(err);
  });
  cp("./src/fs/files", "./src/fs/copy_files", { recursive: true }, (err) => {
    if (err) console.log(err);
  });
};

copy();
