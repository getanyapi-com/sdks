import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  applyVersion,
  currentVersion,
  nextVersion,
  type VersionFiles,
} from "../src/bump-version.js";

const temporaryDirectories: string[] = [];

afterEach(() => {
  for (const directory of temporaryDirectories.splice(0)) {
    rmSync(directory, { recursive: true, force: true });
  }
});

function versionFiles(version = "1.2.3"): VersionFiles {
  const directory = mkdtempSync(join(tmpdir(), "anyapi-version-"));
  temporaryDirectories.push(directory);
  const files = {
    tsManifest: join(directory, "package.json"),
    pyManifest: join(directory, "pyproject.toml"),
    pyInit: join(directory, "__init__.py"),
  };
  writeFileSync(
    files.tsManifest,
    `${JSON.stringify({ name: "fixture", version }, null, 2)}\n`,
  );
  writeFileSync(
    files.pyManifest,
    `[project]\nname = "fixture"\nversion = "${version}"\nrequires-python = ">=3.10"\n`,
  );
  writeFileSync(
    files.pyInit,
    `"""Fixture package."""\n\n__version__ = "${version}"\n`,
  );
  return files;
}

describe("release version lockstep", () => {
  it("reads the shared version only when all three surfaces match", () => {
    expect(currentVersion(versionFiles())).toBe("1.2.3");
  });

  it("detects a stale importable Python package version", () => {
    const files = versionFiles();
    writeFileSync(files.pyInit, '__version__ = "1.2.2"\n');
    expect(() => currentVersion(files)).toThrow(
      "python-runtime=1.2.2",
    );
  });

  it("updates both manifests and the importable Python package version", () => {
    const files = versionFiles();
    applyVersion("2.0.0", files);
    expect(currentVersion(files)).toBe("2.0.0");
    expect(readFileSync(files.tsManifest, "utf8")).toContain(
      '"version": "2.0.0"',
    );
    expect(readFileSync(files.pyManifest, "utf8")).toContain(
      'version = "2.0.0"',
    );
    expect(readFileSync(files.pyInit, "utf8")).toContain(
      '__version__ = "2.0.0"',
    );
  });

  it("validates every target before writing any target", () => {
    const files = versionFiles();
    writeFileSync(files.pyInit, 'VERSION = "1.2.3"\n');
    const originalManifest = readFileSync(files.tsManifest, "utf8");
    expect(() => applyVersion("1.2.4", files)).toThrow(
      "getanyapi/__init__.py",
    );
    expect(readFileSync(files.tsManifest, "utf8")).toBe(originalManifest);
  });

  it("calculates plain semver bumps and rejects non-plain versions", () => {
    expect(nextVersion("1.2.3", "patch")).toBe("1.2.4");
    expect(nextVersion("1.2.3", "minor")).toBe("1.3.0");
    expect(nextVersion("1.2.3", "major")).toBe("2.0.0");
    expect(() => applyVersion("v1.2.3", versionFiles())).toThrow(
      "not a plain X.Y.Z semver",
    );
  });
});
