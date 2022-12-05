import { fork } from "node:child_process";
import * as url from "url";
import { join } from "node:path";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const spawnChildProcess = async (args) => {
  fork(join(__dirname, "files", "script.js"), args);
};

spawnChildProcess(["firstArg", 23]);
