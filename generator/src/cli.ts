// Generator CLI: subcommands fetch | ir | fixtures | all, plus a --check drift mode.
//
//   pnpm generate            -> `all` (ir + fixtures), writes files.
//   pnpm generate -- ir      -> IR only.
//   pnpm generate -- fixtures-> fixtures only.
//   pnpm generate -- fetch   -> refresh openapi.json + catalog.json snapshots.
//   pnpm generate -- --check -> regenerate in memory and byte-compare against committed
//                               files; exit non-zero on drift (CI drift gate).

import { readFileSync, existsSync } from "node:fs";
import { buildIr, serializeIr, generateIr } from "./ir.js";
import { buildFixtures, serializeFixtures, generateFixtures } from "./fixtures.js";
import { validateIr } from "./validate.js";
import { refreshSnapshots } from "./fetch.js";
import { irOutPath, fixturesOutPath } from "./paths.js";

type Command = "fetch" | "ir" | "fixtures" | "all";

function parseCommand(argv: string[]): { command: Command; check: boolean } {
  const args = argv.filter((a) => a !== "--");
  const check = args.includes("--check");
  const positional = args.find((a) => !a.startsWith("--"));
  const command = (positional as Command) ?? "all";
  if (!["fetch", "ir", "fixtures", "all"].includes(command)) {
    throw new Error(`unknown command: ${command}`);
  }
  return { command, check };
}

function readIfExists(path: string): string | null {
  return existsSync(path) ? readFileSync(path, "utf8") : null;
}

/** --check: regenerate to memory and compare against committed files. Returns drift slugs. */
function checkDrift(command: Command): string[] {
  const drifted: string[] = [];
  if (command === "ir" || command === "all") {
    const ir = buildIr();
    validateIr(ir);
    const fresh = serializeIr(ir);
    if (fresh !== readIfExists(irOutPath)) drifted.push("ir.json");
  }
  if (command === "fixtures" || command === "all") {
    const ir = buildIr();
    const fresh = serializeFixtures(buildFixtures(ir));
    if (fresh !== readIfExists(fixturesOutPath)) drifted.push("fixtures.json");
  }
  return drifted;
}

async function main(): Promise<void> {
  const { command, check } = parseCommand(process.argv.slice(2));

  if (command === "fetch") {
    await refreshSnapshots();
    return;
  }

  if (check) {
    const drifted = checkDrift(command);
    if (drifted.length > 0) {
      // eslint-disable-next-line no-console
      console.error(
        `Generator drift detected in: ${drifted.join(", ")}. Run \`pnpm generate\` and commit.`,
      );
      process.exitCode = 1;
      return;
    }
    // eslint-disable-next-line no-console
    console.log(`No drift: ${command} output is byte-identical to committed files.`);
    return;
  }

  if (command === "ir" || command === "all") {
    const ir = buildIr();
    validateIr(ir);
    generateIr();
    // eslint-disable-next-line no-console
    console.log(`Wrote ir.json (${ir.skus.length} SKUs, validated against ir.schema.json).`);
  }
  if (command === "fixtures" || command === "all") {
    generateFixtures();
    // eslint-disable-next-line no-console
    console.log("Wrote fixtures.json.");
  }
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err instanceof Error ? err.message : String(err));
  process.exitCode = 1;
});
