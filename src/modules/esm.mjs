import * as path from "node:path";
import { release, version } from "node:os";
import { createServer as createServerHttp } from "node:http";
import "./files/c.js";
import * as url from "url";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

import { readFile } from "fs/promises";

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = JSON.parse(
    await readFile(new URL("./files/a.json", import.meta.url))
  );
} else {
  unknownObject = JSON.parse(
    await readFile(new URL("./files/b.json", import.meta.url))
  );
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };
