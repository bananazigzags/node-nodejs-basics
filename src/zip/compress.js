import { createGzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";

const compress = async () => {
  const gzip = createGzip();
  const destPath = "./src/zip/files/archive.gz";
  const fileToZip = createReadStream("./src/zip/files/fileToCompress.txt");
  const destination = createWriteStream(destPath);
  pipeline(fileToZip, gzip, destination, (err) => {
    console.log(err);
  });
};

await compress();
