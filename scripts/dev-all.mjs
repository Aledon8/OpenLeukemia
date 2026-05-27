import { spawn } from "node:child_process";

const processes = [
  {
    name: "frontend",
    args: ["--workspace", "frontend", "run", "dev", "--", "--host", "127.0.0.1", "--port", "5173"],
  },
  {
    name: "docs",
    args: ["--workspace", "docs-site", "run", "start", "--", "--host", "127.0.0.1", "--port", "3000", "--no-open"],
  },
];

const children = processes.map(({ name, args }) => {
  const [command, commandArgs] = createNpmCommand(args);
  const child = spawn(command, commandArgs, {
    stdio: ["ignore", "pipe", "pipe"],
  });

  child.stdout.on("data", (data) => {
    process.stdout.write(prefixOutput(name, data));
  });

  child.stderr.on("data", (data) => {
    process.stderr.write(prefixOutput(name, data));
  });

  child.on("exit", (code, signal) => {
    if (isShuttingDown) {
      return;
    }

    console.error(`${name} exited with ${signal ?? `code ${code}`}`);
    shutdown(code ?? 1);
  });

  return child;
});

let isShuttingDown = false;

process.on("SIGINT", () => shutdown(0));
process.on("SIGTERM", () => shutdown(0));

function prefixOutput(name, data) {
  return data
    .toString()
    .split(/\r?\n/)
    .map((line) => (line.length > 0 ? `[${name}] ${line}` : line))
    .join("\n");
}

function createNpmCommand(args) {
  if (process.platform === "win32") {
    return ["cmd.exe", ["/d", "/s", "/c", "npm", ...args]];
  }

  return ["npm", args];
}

function shutdown(exitCode) {
  isShuttingDown = true;

  for (const child of children) {
    if (!child.killed) {
      child.kill();
    }
  }

  process.exit(exitCode);
}
