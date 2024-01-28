import { createGzip } from "node:zlib";
import { pipeline } from "node:stream/promises";
import { createReadStream, createWriteStream } from "node:fs";
import { archivePath, originPath } from "./paths.js";

const compress = async () => {
  const gzip = createGzip();
  const fileToZip = createReadStream(originPath);
  const destination = createWriteStream(archivePath);
  try {
    await pipeline(fileToZip, gzip, destination)
  } catch(err) {
    console.log(err)
  }
};

await compress();
