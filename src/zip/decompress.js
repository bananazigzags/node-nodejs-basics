import { createGunzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { archivePath, originPath } from "./paths.js";

const decompress = async () => {
  const readStream = createReadStream(archivePath);
  const writeStream = createWriteStream(originPath);
  const unzip = createGunzip();
  try {
    await pipeline(readStream, unzip, writeStream)
  } catch(err) {
    console.log(err)
  }
};

await decompress();