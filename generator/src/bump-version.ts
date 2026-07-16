// Version bump helper for release automation. The TypeScript manifest, Python manifest,
// and importable Python package version always carry the same plain semver.
//
//   tsx src/bump-version.ts current                  -> print current version (assert lockstep)
//   tsx src/bump-version.ts next <patch|minor|major> -> print next version (no write)
//   tsx src/bump-version.ts apply <version>          -> update all three version surfaces

import { readFileSync, writeFileSync } from "node:fs";
import { resolve, join } from "node:path";
import { fileURLToPath } from "node:url";
import { repoRoot } from "./paths.js";

export interface VersionFiles {
  tsManifest: string;
  pyManifest: string;
  pyInit: string;
}

const DEFAULT_FILES: VersionFiles = {
  tsManifest: join(repoRoot, "packages/typescript/package.json"),
  pyManifest: join(repoRoot, "packages/python/pyproject.toml"),
  pyInit: join(repoRoot, "packages/python/src/getanyapi/__init__.py"),
};

const PY_VERSION_RE = /^version\s*=\s*"([^"]+)"/m;
const PY_INIT_VERSION_RE = /^__version__\s*=\s*"([^"]+)"/m;

function requiredMatch(text: string, pattern: RegExp, description: string): string {
  const match = text.match(pattern);
  if (!match?.[1]) throw new Error(`could not find ${description}`);
  return match[1];
}

function readVersions(files: VersionFiles): {
  typescript: string;
  pythonManifest: string;
  pythonRuntime: string;
} {
  const pkg = JSON.parse(readFileSync(files.tsManifest, "utf8")) as {
    version?: unknown;
  };
  if (typeof pkg.version !== "string") {
    throw new Error("could not find TypeScript package.json version");
  }
  return {
    typescript: pkg.version,
    pythonManifest: requiredMatch(
      readFileSync(files.pyManifest, "utf8"),
      PY_VERSION_RE,
      '`version = "..."` in pyproject.toml',
    ),
    pythonRuntime: requiredMatch(
      readFileSync(files.pyInit, "utf8"),
      PY_INIT_VERSION_RE,
      '`__version__ = "..."` in getanyapi/__init__.py',
    ),
  };
}

export function currentVersion(files: VersionFiles = DEFAULT_FILES): string {
  const versions = readVersions(files);
  if (
    versions.typescript !== versions.pythonManifest ||
    versions.typescript !== versions.pythonRuntime
  ) {
    throw new Error(
      "package versions out of lockstep: " +
        `typescript=${versions.typescript} ` +
        `python-manifest=${versions.pythonManifest} ` +
        `python-runtime=${versions.pythonRuntime}. ` +
        "Fix all three to the same version before releasing.",
    );
  }
  return versions.typescript;
}

function parseSemver(version: string): [number, number, number] {
  const match = version.match(/^(\d+)\.(\d+)\.(\d+)$/);
  if (!match) throw new Error(`not a plain X.Y.Z semver: ${version}`);
  return [Number(match[1]), Number(match[2]), Number(match[3])];
}

export function nextVersion(
  version: string,
  level: "patch" | "minor" | "major",
): string {
  const [major, minor, patch] = parseSemver(version);
  if (level === "major") return `${major + 1}.0.0`;
  if (level === "minor") return `${major}.${minor + 1}.0`;
  return `${major}.${minor}.${patch + 1}`;
}

export function applyVersion(
  version: string,
  files: VersionFiles = DEFAULT_FILES,
): void {
  parseSemver(version);

  // Read and validate every target before writing any of them, avoiding a partial bump.
  const pkg = JSON.parse(readFileSync(files.tsManifest, "utf8")) as Record<
    string,
    unknown
  >;
  if (typeof pkg.version !== "string") {
    throw new Error("could not find TypeScript package.json version");
  }
  const pyManifest = readFileSync(files.pyManifest, "utf8");
  requiredMatch(
    pyManifest,
    PY_VERSION_RE,
    '`version = "..."` in pyproject.toml',
  );
  const pyInit = readFileSync(files.pyInit, "utf8");
  requiredMatch(
    pyInit,
    PY_INIT_VERSION_RE,
    '`__version__ = "..."` in getanyapi/__init__.py',
  );

  pkg.version = version;
  writeFileSync(files.tsManifest, `${JSON.stringify(pkg, null, 2)}\n`);
  writeFileSync(
    files.pyManifest,
    pyManifest.replace(PY_VERSION_RE, `version = "${version}"`),
  );
  writeFileSync(
    files.pyInit,
    pyInit.replace(PY_INIT_VERSION_RE, `__version__ = "${version}"`),
  );
}

function main(): void {
  const [command, argument] = process.argv.slice(2);
  if (command === "current") {
    process.stdout.write(`${currentVersion()}\n`);
    return;
  }
  if (command === "next") {
    if (argument !== "patch" && argument !== "minor" && argument !== "major") {
      throw new Error("usage: bump-version next <patch|minor|major>");
    }
    process.stdout.write(`${nextVersion(currentVersion(), argument)}\n`);
    return;
  }
  if (command === "apply") {
    if (!argument) throw new Error("usage: bump-version apply <version>");
    applyVersion(argument);
    process.stdout.write(`applied ${argument} to all package version surfaces\n`);
    return;
  }
  throw new Error("usage: bump-version <current|next|apply> [...]");
}

const invokedPath = process.argv[1] ? resolve(process.argv[1]) : "";
if (invokedPath === fileURLToPath(import.meta.url)) main();
