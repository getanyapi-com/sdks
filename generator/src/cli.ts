// Generator CLI: subcommands fetch | ir | fixtures | emit-ts | emit-py | all, plus a
// --check drift mode.
//
//   pnpm generate            -> `all` (ir + fixtures + emit-ts + emit-py), writes files.
//   pnpm generate -- ir      -> IR only.
//   pnpm generate -- fixtures-> fixtures only.
//   pnpm generate -- emit-ts -> TypeScript generated tree only.
//   pnpm generate -- emit-py -> Python generated tree only.
//   pnpm generate -- fetch   -> refresh openapi.json + catalog.json snapshots.
//   pnpm generate -- --check -> regenerate in memory and byte-compare against committed
//                               files (ir.json, fixtures.json, AND both generated trees);
//                               exit non-zero on drift (CI drift gate).

import {
  readFileSync,
  existsSync,
  readdirSync,
  statSync,
  rmSync,
} from "node:fs";
import { join, relative } from "node:path";
import { buildIr, serializeIr, generateIr } from "./ir.js";
import { buildFixtures, serializeFixtures, generateFixtures } from "./fixtures.js";
import { validateIr } from "./validate.js";
import { refreshSnapshots } from "./fetch.js";
import { irOutPath, fixturesOutPath, repoRoot } from "./paths.js";
import { emitTypescript, writeFileMap } from "./emit-ts.js";
import { emitPython } from "./emit-py.js";
import type { IR } from "./ir-types.js";
import type { IR as PyIR } from "./py-ir.js";

type Command = "fetch" | "ir" | "fixtures" | "emit-ts" | "emit-py" | "all";

// The two committed generated trees. The emitters return FileMaps rooted at these dirs;
// the CLI writes them here and prunes any stale file under them not in the fresh FileMap.
const TS_OUT_ROOT = join(repoRoot, "packages/typescript/src/generated");
const PY_OUT_ROOT = join(repoRoot, "packages/python/src/getanyapi");

// TS generated subtree = everything under generated/. Python = platforms/ only (the rest
// of src/getanyapi is handwritten runtime).
const TS_SUBDIRS = ["."];
const PY_SUBDIRS = ["platforms"];

function parseCommand(argv: string[]): { command: Command; check: boolean } {
  const args = argv.filter((a) => a !== "--");
  const check = args.includes("--check");
  const positional = args.find((a) => !a.startsWith("--"));
  const command = (positional as Command) ?? "all";
  if (!["fetch", "ir", "fixtures", "emit-ts", "emit-py", "all"].includes(command)) {
    throw new Error(`unknown command: ${command}`);
  }
  return { command, check };
}

function readIfExists(path: string): string | null {
  return existsSync(path) ? readFileSync(path, "utf8") : null;
}

/** buildIr returns the extractor's Ir shape; emitters read the structurally-identical IR. */
function buildValidatedIr(): IR {
  const built = buildIr();
  validateIr(built);
  return built as unknown as IR;
}

// Directories under a generated tree that are build artifacts, never emitter output.
const IGNORED_DIRS = new Set(["__pycache__", ".mypy_cache", ".ruff_cache", ".pyright"]);

/** Recursively list every file under a dir (absolute paths); [] if the dir is absent. */
function listFiles(dir: string): string[] {
  if (!existsSync(dir)) return [];
  const out: string[] = [];
  for (const entry of readdirSync(dir)) {
    if (IGNORED_DIRS.has(entry)) continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...listFiles(full));
    else out.push(full);
  }
  return out;
}

/**
 * The generated files that live under `root`/`subdirs` and are managed by the emitter.
 * `.gitkeep` placeholders and compiled artifacts (.pyc) are ignored (they seed empty dirs
 * on a fresh clone / are byproducts of type-checking, not emitter output).
 */
function managedFiles(root: string, subdirs: string[]): string[] {
  return subdirs
    .flatMap((sub) => listFiles(join(root, sub)))
    .filter((f) => !f.endsWith(".gitkeep") && !f.endsWith(".pyc"));
}

/** Turn a Python FileMap (relative paths) into absolute paths under PY_OUT_ROOT. */
function absPythonFiles(rel: Record<string, string>): Record<string, string> {
  const files: Record<string, string> = {};
  for (const [relPath, content] of Object.entries(rel)) {
    files[join(PY_OUT_ROOT, relPath)] = content;
  }
  return files;
}

function relToRepo(path: string): string {
  return relative(repoRoot, path);
}

// --------------------------------------------------------------------------------------
// Emit + write
// --------------------------------------------------------------------------------------

async function emitTs(): Promise<void> {
  const files = await emitTypescript(buildValidatedIr(), TS_OUT_ROOT);
  writeFileMap(files);
  prune(TS_OUT_ROOT, TS_SUBDIRS, new Set(Object.keys(files)));
  // eslint-disable-next-line no-console
  console.log(`Wrote TypeScript generated tree (${Object.keys(files).length} files).`);
}

function emitPy(): void {
  const files = absPythonFiles(emitPython(buildValidatedIr() as unknown as PyIR, PY_OUT_ROOT));
  writeFileMap(files);
  prune(PY_OUT_ROOT, PY_SUBDIRS, new Set(Object.keys(files)));
  // eslint-disable-next-line no-console
  console.log(`Wrote Python generated tree (${Object.keys(files).length} files).`);
}

/** Delete any managed file under `root`/`subdirs` not present in `keep`. */
function prune(root: string, subdirs: string[], keep: Set<string>): void {
  for (const existing of managedFiles(root, subdirs)) {
    if (!keep.has(existing)) rmSync(existing);
  }
}

// --------------------------------------------------------------------------------------
// Drift check
// --------------------------------------------------------------------------------------

/** --check: regenerate to memory and compare against committed files. Returns drift paths. */
async function checkDrift(command: Command): Promise<string[]> {
  const drifted: string[] = [];

  if (command === "ir" || command === "all") {
    if (serializeIr(buildIr()) !== readIfExists(irOutPath)) drifted.push("ir.json");
  }
  if (command === "fixtures" || command === "all") {
    if (serializeFixtures(buildFixtures(buildIr())) !== readIfExists(fixturesOutPath)) {
      drifted.push("fixtures.json");
    }
  }
  if (command === "emit-ts" || command === "all") {
    const files = await emitTypescript(buildValidatedIr(), TS_OUT_ROOT);
    drifted.push(...treeDrift(TS_OUT_ROOT, TS_SUBDIRS, files));
  }
  if (command === "emit-py" || command === "all") {
    const files = absPythonFiles(emitPython(buildValidatedIr() as unknown as PyIR, PY_OUT_ROOT));
    drifted.push(...treeDrift(PY_OUT_ROOT, PY_SUBDIRS, files));
  }
  return drifted;
}

/** Byte-compare a fresh FileMap against the committed tree, flagging content + extra files. */
function treeDrift(
  root: string,
  subdirs: string[],
  files: Record<string, string>,
): string[] {
  const drift: string[] = [];
  for (const [path, content] of Object.entries(files)) {
    if (content !== readIfExists(path)) drift.push(relToRepo(path));
  }
  const fresh = new Set(Object.keys(files));
  for (const existing of managedFiles(root, subdirs)) {
    if (!fresh.has(existing)) {
      drift.push(`${relToRepo(existing)} (stale, should be removed)`);
    }
  }
  return drift;
}

// --------------------------------------------------------------------------------------

async function main(): Promise<void> {
  const { command, check } = parseCommand(process.argv.slice(2));

  if (command === "fetch") {
    await refreshSnapshots();
    return;
  }

  if (check) {
    const drifted = await checkDrift(command);
    if (drifted.length > 0) {
      // eslint-disable-next-line no-console
      console.error(
        `Generator drift detected in:\n  ${drifted.join("\n  ")}\n` +
          "Run `pnpm generate` and commit.",
      );
      process.exitCode = 1;
      return;
    }
    // eslint-disable-next-line no-console
    console.log(`No drift: ${command} output is byte-identical to committed files.`);
    return;
  }

  if (command === "ir" || command === "all") {
    const built = buildValidatedIr();
    generateIr();
    // eslint-disable-next-line no-console
    console.log(`Wrote ir.json (${built.skus.length} SKUs, validated).`);
  }
  if (command === "fixtures" || command === "all") {
    generateFixtures();
    // eslint-disable-next-line no-console
    console.log("Wrote fixtures.json.");
  }
  if (command === "emit-ts" || command === "all") await emitTs();
  if (command === "emit-py" || command === "all") emitPy();
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err instanceof Error ? err.message : String(err));
  process.exitCode = 1;
});
