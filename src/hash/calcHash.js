import { createReadStream } from "node:fs";
const { createHash } = await import("node:crypto");

const calculateHash = async () => {
  const input = createReadStream(
    new URL("files/fileToCalculateHashFor.txt", import.meta.url)
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