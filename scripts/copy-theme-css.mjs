import { copyFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, "..");
const sourcePath = path.join(rootDir, "src/styles/theme.css");
const outputDir = path.join(rootDir, "dist/theme");
const outputPath = path.join(outputDir, "theme.css");

await mkdir(outputDir, { recursive: true });
await copyFile(sourcePath, outputPath);
