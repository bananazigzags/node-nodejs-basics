import { createGunzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream";

const decompress = async () => {
  const readStream = createReadStream("./src/zip/files/archive.gz");
  const writeStream = createWriteStream("./src/zip/files/fileToCompress.txt");
  const unzip = createGunzip();
  pipeline(readStream, unzip, writeStream, (err) => {
    console.log(err);
  });
};

await decompress();
