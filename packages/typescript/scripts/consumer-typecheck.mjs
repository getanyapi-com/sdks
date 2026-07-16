// Consumer-artifact typecheck gate (SPEC 2.1 erratum, B2).
//
// Builds @getanyapi/sdk, writes a tiny consumer project into a temp dir that resolves the
// package's built dist via tsconfig `paths`, and runs `tsc --noEmit` over consumer code.
// The consumer asserts (via compile success + a required @ts-expect-error):
//   (a) typed data access compiles for representative known found-data slugs,
//   (b) a bogus-input call for a known slug is a compile error (@ts-expect-error),
//   (c) run("unknown.slug", ...) yields RunResult<unknown>.
//
// Exits non-zero if tsc reports any error (including an UNUSED @ts-expect-error, which means
// the bogus call unexpectedly type-checked -> the typed surface regressed).

import { execFileSync } from "node:child_process";
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const pkgRoot = resolve(here, "..");
const distDir = join(pkgRoot, "dist");

function run(cmd, args, cwd) {
  execFileSync(cmd, args, { cwd, stdio: "inherit" });
}

// 1. Ensure the package is built (dist/index.d.ts must exist).
run("pnpm", ["exec", "tsup"], pkgRoot);

// 2. Scaffold a throwaway consumer project.
const tmp = mkdtempSync(join(tmpdir(), "anyapi-consumer-"));
try {
  mkdirSync(join(tmp, "src"), { recursive: true });

  writeFileSync(
    join(tmp, "tsconfig.json"),
    JSON.stringify(
      {
        compilerOptions: {
          strict: true,
          noEmit: true,
          target: "ES2022",
          module: "ESNext",
          moduleResolution: "Bundler",
          skipLibCheck: true,
          types: [],
          paths: {
            "@getanyapi/sdk": [distDir.replace(/\\/g, "/") + "/index.d.ts"],
          },
        },
        include: ["src"],
      },
      null,
      2,
    ),
  );

  writeFileSync(
    join(tmp, "src", "consumer.ts"),
    [
      'import { AnyAPI } from "@getanyapi/sdk";',
      'import type { RunResult } from "@getanyapi/sdk";',
      "",
      "async function main(): Promise<void> {",
      '  const client = new AnyAPI({ apiKey: "k" });',
      "",
      "  // (a) typed data access for a known found-data slug.",
      '  const rev = await client.run("amazon.reviews", { product: "B0" });',
      "  const revResult: RunResult<unknown> = rev;",
      "  void revResult;",
      "  if (rev.output.found) {",
      "    // data is the typed AmazonReviewsData payload.",
      "    void rev.output.data.items;",
      "  }",
      "",
      "  // (a) current reddit.search found-data envelope from the generated snapshot.",
      '  const search = await client.run("reddit.search", { query: "k" });',
      "  const searchResult: RunResult<unknown> = search;",
      "  void searchResult;",
      "  if (search.output.found) {",
      "    void search.output.data.posts;",
      "    void search.output.data.nextCursor;",
      "  }",
      "",
      "  // (b) a bogus-input call for a known slug must be a compile error.",
      "  // @ts-expect-error - `product` is required and `bogus` is not a valid field.",
      '  await client.run("amazon.reviews", { bogus: 1 });',
      "",
      "  // (c) an unknown slug falls back to RunResult<unknown>.",
      '  const unk = await client.run("totally.unknown", { anything: true });',
      "  const unkResult: RunResult<unknown> = unk;",
      "  void unkResult;",
      "}",
      "void main;",
      "",
    ].join("\n"),
  );

  // 3. Typecheck the consumer against the packed artifact.
  run(
    "pnpm",
    ["exec", "tsc", "--noEmit", "--project", join(tmp, "tsconfig.json")],
    pkgRoot,
  );
  // eslint-disable-next-line no-console
  console.log("consumer-typecheck: OK (typed data access, bogus-input error, unknown-slug fallback)");
} finally {
  rmSync(tmp, { recursive: true, force: true });
}
