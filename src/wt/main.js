import { Worker } from "node:worker_threads";
import os from "node:os";

const performCalculations = async () => {
  const numCpus = os.cpus().length;
  let num = 10;
  let promises = [];
  for (let i = 0; i < numCpus; i++) {
    const promise = new Promise((resolve, reject) => {
      let worker = new Worker(new URL("worker.js", import.meta.url), {
        workerData: num + i,
      });
      worker
        .on("message", (msg) => {
          resolve({ status: "resolved", data: msg });
        })
        .on("error", (err) => {
          resolve({ status: "error", data: null });
        });
    });
    promises.push(promise);
  }
  const results = await Promise.all(promises);
  console.log(results);
};

await performCalculations();
