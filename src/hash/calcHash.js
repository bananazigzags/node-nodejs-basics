import { createReadStream } from "node:fs";
const { createHash } = await import("node:crypto");
import { join } from "node:path";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const calculateHash = async () => {
  const input = createReadStream(
    join(__dirname, "files", "fileToCalculateHashFor.txt")
  );
  const hash = createHash("sha256");
  input.on("readable", () => {
    const data = input.read();
    if (data) {
      hash.update(data);
    } else {
      console.log(hash.digest("hex"));
    }
  });
};

await calculateHash();
