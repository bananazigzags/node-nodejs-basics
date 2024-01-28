import { fork } from "node:child_process";

const fileToFork = new URL("files/script.js", import.meta.url);

const spawnChildProcess = async (args) => {
  fork(fileToFork, args);
};

spawnChildProcess(["firstArg", 23]);
