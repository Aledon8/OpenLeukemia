import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const docsBuildDir = resolve(rootDir, "docs-site", "build");
const frontendDocsDir = resolve(rootDir, "frontend", "dist", "docs");

if (!existsSync(docsBuildDir)) {
  throw new Error("Docusaurus build output was not found. Run npm run build:docs first.");
}

rmSync(frontendDocsDir, { force: true, recursive: true });
mkdirSync(dirname(frontendDocsDir), { recursive: true });
cpSync(docsBuildDir, frontendDocsDir, { recursive: true });
