// Version bump helper for the release automation. Keeps the two published manifests in
// lockstep: packages/typescript/package.json ("version") and packages/python/pyproject.toml
// ([project] version). Both always carry the SAME semver.
//
//   tsx src/bump-version.ts current                 -> print current version (asserts lockstep)
//   tsx src/bump-version.ts next <patch|minor|major>-> print the next version (no write)
//   tsx src/bump-version.ts apply <version>         -> write <version> into both manifests
//
// pyproject.toml is edited textually (only the [project] `version = "..."` line) so the
// rest of the TOML is untouched; package.json is JSON.parse/stringify round-tripped with a
// trailing newline to match repo style.

import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { repoRoot } from "./paths.js";

const TS_MANIFEST = join(repoRoot, "packages/typescript/package.json");
const PY_MANIFEST = join(repoRoot, "packages/python/pyproject.toml");

// Matches the first `version = "X.Y.Z"` under [project] (the pyproject version line). The
// pyproject.toml here has exactly one top-level `version = "..."` in [project]; anchor on a
// line start to avoid matching dependency version specifiers.
const PY_VERSION_RE = /^version\s*=\s*"([^"]+)"/m;

function readTsVersion(): string {
  const pkg = JSON.parse(readFileSync(TS_MANIFEST, "utf8")) as { version: string };
  return pkg.version;
}

function readPyVersion(): string {
  const toml = readFileSync(PY_MANIFEST, "utf8");
  const m = toml.match(PY_VERSION_RE);
  if (!m || !m[1]) throw new Error("could not find `version = \"...\"` in pyproject.toml");
  return m[1];
}

export function currentVersion(): string {
  const ts = readTsVersion();
  const py = readPyVersion();
  if (ts !== py) {
    throw new Error(
      `manifest versions out of lockstep: typescript=${ts} python=${py}. ` +
        "Fix both to the same version before releasing.",
    );
  }
  return ts;
}

function parseSemver(v: string): [number, number, number] {
  const m = v.match(/^(\d+)\.(\d+)\.(\d+)$/);
  if (!m) throw new Error(`not a plain X.Y.Z semver: ${v}`);
  return [Number(m[1]), Number(m[2]), Number(m[3])];
}

export function nextVersion(v: string, level: "patch" | "minor" | "major"): string {
  const [maj, min, pat] = parseSemver(v);
  if (level === "major") return `${maj + 1}.0.0`;
  if (level === "minor") return `${maj}.${min + 1}.0`;
  return `${maj}.${min}.${pat + 1}`;
}

export function applyVersion(version: string): void {
  parseSemver(version); // validate

  const pkg = JSON.parse(readFileSync(TS_MANIFEST, "utf8")) as Record<string, unknown>;
  pkg.version = version;
  writeFileSync(TS_MANIFEST, JSON.stringify(pkg, null, 2) + "\n");

  const toml = readFileSync(PY_MANIFEST, "utf8");
  if (!PY_VERSION_RE.test(toml)) {
    throw new Error("could not find pyproject version line to rewrite");
  }
  writeFileSync(PY_MANIFEST, toml.replace(PY_VERSION_RE, `version = "${version}"`));
}

function main(): void {
  const [cmd, arg] = process.argv.slice(2);
  if (cmd === "current") {
    process.stdout.write(currentVersion() + "\n");
    return;
  }
  if (cmd === "next") {
    if (arg !== "patch" && arg !== "minor" && arg !== "major") {
      throw new Error("usage: bump-version next <patch|minor|major>");
    }
    process.stdout.write(nextVersion(currentVersion(), arg) + "\n");
    return;
  }
  if (cmd === "apply") {
    if (!arg) throw new Error("usage: bump-version apply <version>");
    applyVersion(arg);
    process.stdout.write(`applied ${arg} to both manifests\n`);
    return;
  }
  throw new Error("usage: bump-version <current|next|apply> [...]");
}

main();
