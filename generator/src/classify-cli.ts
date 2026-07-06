// Classifier CLI, driven by the regen workflow.
//
//   tsx src/classify-cli.ts <oldIrPath> <newIrPath> [--summary-out <path>] [--json]
//
// Prints the bump level on stdout (one of: none | patch | minor) so the workflow can read
// `$(tsx ...)`. With --summary-out it writes the human-readable change summary (commit body
// / release notes) to that path. With --json it prints the full Classification as JSON to
// stderr for debugging. Exit code is always 0 (a "none" bump is a valid, expected result).

import { readFileSync, writeFileSync } from "node:fs";
import { classifyIr } from "./classify.js";
import type { IR } from "./ir-types.js";

function readIr(path: string): IR {
  return JSON.parse(readFileSync(path, "utf8")) as IR;
}

function main(): void {
  const args = process.argv.slice(2);
  const positional = args.filter((a) => !a.startsWith("--"));
  const [oldPath, newPath] = positional;
  if (!oldPath || !newPath) {
    // eslint-disable-next-line no-console
    console.error("usage: classify-cli <oldIrPath> <newIrPath> [--summary-out <path>] [--json]");
    process.exitCode = 2;
    return;
  }

  const summaryIdx = args.indexOf("--summary-out");
  const summaryOut = summaryIdx >= 0 ? args[summaryIdx + 1] : null;
  const asJson = args.includes("--json");

  const result = classifyIr(readIr(oldPath), readIr(newPath));

  if (summaryOut) writeFileSync(summaryOut, result.summary);
  if (asJson) {
    // eslint-disable-next-line no-console
    console.error(JSON.stringify(result, null, 2));
  }
  // stdout carries ONLY the bump level (workflow reads it).
  process.stdout.write(result.bump + "\n");
}

main();
