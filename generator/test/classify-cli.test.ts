import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import type { Classification } from "../src/classify.js";
import { base, ir } from "./classify-fixture.js";
import { sku } from "./factories.js";

const CLI = join(import.meta.dirname, "..", "src", "classify-cli.ts");

function runCli(args: string[]): { stdout: string; dir: string } {
  const dir = mkdtempSync(join(tmpdir(), "classify-cli-"));
  const oldPath = join(dir, "old.json");
  const newPath = join(dir, "new.json");
  writeFileSync(oldPath, JSON.stringify(ir([base])));
  writeFileSync(
    newPath,
    JSON.stringify(ir([base, sku({ slug: "acme.extra", name: "Extra" })])),
  );
  const stdout = execFileSync(
    process.execPath,
    [
      join(import.meta.dirname, "..", "node_modules", "tsx", "dist", "cli.mjs"),
      CLI,
      oldPath,
      newPath,
      ...args.map((arg) => arg.replace("<dir>", dir)),
    ],
    { encoding: "utf8" },
  );
  return { stdout, dir };
}

describe("classify-cli", () => {
  // The blocked-regen issue names the SKU each blocked item belongs to, and the rendered
  // summary drops the slug. --json-out is the only surface that carries it.
  it("--json-out writes the full classification, slugs included", () => {
    const { stdout, dir } = runCli([
      "--ir-changed",
      "--typescript-changed",
      "--python-changed",
      "--fixtures-changed",
      "--json-out",
      join("<dir>", "changes.json"),
    ]);
    expect(stdout.trim()).toBe("minor");
    const parsed = JSON.parse(
      readFileSync(join(dir, "changes.json"), "utf8"),
    ) as Classification;
    expect(parsed.bump).toBe("minor");
    expect(parsed.added).toContainEqual(
      expect.objectContaining({ slug: "acme.extra" }),
    );
  });

  it("rejects --json-out with no path instead of writing somewhere else", () => {
    expect(() => runCli(["--json-out"])).toThrow();
  });
});
