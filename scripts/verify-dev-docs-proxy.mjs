import { spawn } from "node:child_process";

const [command, args] = process.platform === "win32"
  ? ["cmd.exe", ["/d", "/s", "/c", "npm", "run", "dev"]]
  : ["npm", ["run", "dev"]];
const child = spawn(command, args, {
  stdio: ["ignore", "pipe", "pipe"],
});

let output = "";

child.stdout.on("data", (data) => {
  output += data.toString();
});

child.stderr.on("data", (data) => {
  output += data.toString();
});

try {
  await waitForDocsProxy();
  console.log("Dev docs proxy responded through http://127.0.0.1:5173/docs");
} finally {
  await killProcessTree(child.pid);
}

async function waitForDocsProxy() {
  const startedAt = Date.now();
  let lastError;

  while (Date.now() - startedAt < 30000) {
    try {
      const response = await fetch("http://127.0.0.1:5173/docs");
      const html = await response.text();

      if (response.ok && html.includes("OpenLeukemia Docs")) {
        return;
      }

      lastError = new Error(`Unexpected response ${response.status}`);
    } catch (error) {
      lastError = error;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  throw new Error(`Docs proxy did not become ready. Last error: ${lastError?.message}\n${output}`);
}

async function killProcessTree(pid) {
  if (pid === undefined) {
    return;
  }

  if (process.platform === "win32") {
    await new Promise((resolve) => {
      spawn("taskkill", ["/pid", String(pid), "/t", "/f"], { stdio: "ignore" }).on("exit", resolve);
    });
    return;
  }

  child.kill("SIGTERM");
}
