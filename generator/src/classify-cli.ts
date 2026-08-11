// Classifier CLI, driven by the regen workflow.
//
//   tsx src/classify-cli.ts <oldIrPath> <newIrPath> [change flags] [options]
//
// Prints the state on stdout (none | patch | minor | blocked) so the workflow can read
// `$(tsx ...)`. With --summary-out it writes the human-readable change summary (commit body
// / release notes) to that path. Byte-change flags come from scripts/release-notes.sh.
// Exit code is always 0 so a blocked result can be uploaded before the workflow fails.

import { readFileSync, writeFileSync } from "node:fs";
import { classifyIr } from "./classify.js";
import type { IR } from "./ir-types.js";

function readIr(path: string): IR {
  return JSON.parse(readFileSync(path, "utf8")) as IR;
}

function main(): void {
  const args = process.argv.slice(2);
  const [oldPath, newPath] = args;
  if (!oldPath || !newPath) {
    // eslint-disable-next-line no-console
    console.error(
      "usage: classify-cli <oldIrPath> <newIrPath> [--ir-changed] " +
        "[--fixtures-changed] [--typescript-changed] [--python-changed] " +
        "[--summary-out <path>] [--json]",
    );
    process.exitCode = 2;
    return;
  }

  const summaryIdx = args.indexOf("--summary-out");
  const summaryOut = summaryIdx >= 0 ? args[summaryIdx + 1] : null;
  const asJson = args.includes("--json");
  const flags = new Set([
    "--ir-changed",
    "--fixtures-changed",
    "--typescript-changed",
    "--python-changed",
    "--json",
  ]);
  for (let index = 2; index < args.length; index += 1) {
    const arg = args[index] as string;
    if (arg === "--summary-out") {
      if (!args[index + 1]) {
        // eslint-disable-next-line no-console
        console.error("--summary-out requires a path");
        process.exitCode = 2;
        return;
      }
      index += 1;
    } else if (!flags.has(arg)) {
      // eslint-disable-next-line no-console
      console.error(`unknown option: ${arg}`);
      process.exitCode = 2;
      return;
    }
  }

  const result = classifyIr(readIr(oldPath), readIr(newPath), {
    irChanged: args.includes("--ir-changed"),
    fixturesChanged: args.includes("--fixtures-changed"),
    typescriptChanged: args.includes("--typescript-changed"),
    pythonChanged: args.includes("--python-changed"),
  });

  if (summaryOut) writeFileSync(summaryOut, result.summary);
  if (asJson) {
    // eslint-disable-next-line no-console
    console.error(JSON.stringify(result, null, 2));
  }
  // stdout carries ONLY the bump level (workflow reads it).
  process.stdout.write(result.bump + "\n");
}

main();
