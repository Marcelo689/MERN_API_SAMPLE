// start.js
import { spawn } from "child_process";

function run(cmd, args, cwd) {
  const proc = spawn(cmd, args, { cwd, stdio: "inherit", shell: true });
  return proc;
}

// backend
run("node", ["backend/server.js"], process.cwd());

// frontend
run("npm", ["run", "dev"], process.cwd() + "/frontend");
