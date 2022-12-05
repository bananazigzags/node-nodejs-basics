import { createGunzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream";
import { zipDestPath, zipOriginPath } from "./paths.js";

const decompress = async () => {
  const readStream = createReadStream(zipDestPath);
  const writeStream = createWriteStream(zipOriginPath);
  const unzip = createGunzip();
  pipeline(readStream, unzip, writeStream, (err) => {
    console.log(err);
  });
};

await decompress();
