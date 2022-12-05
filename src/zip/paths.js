import * as url from "url";
import { join } from "node:path";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export const zipFilesPath = join(__dirname, "files");
export const zipDestPath = join(zipFilesPath, "archive.gz");
export const zipOriginPath = join(zipFilesPath, "fileToCompress.txt");
