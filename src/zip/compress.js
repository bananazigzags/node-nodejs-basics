import { createGzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import { zipDestPath, zipOriginPath } from "./paths.js";

const compress = async () => {
  const gzip = createGzip();
  const fileToZip = createReadStream(zipOriginPath);
  const destination = createWriteStream(zipDestPath);
  pipeline(fileToZip, gzip, destination, (err) => {
    console.log(err);
  });
};

await compress();
