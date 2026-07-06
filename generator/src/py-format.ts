// Deterministic Python formatting seam for the emitter.
//
// When `ruff format` is reachable (the `ruff` binary or `python3 -m ruff`), emitted
// source is piped through it so the committed output is a ruff fixed point (the CI dash /
// drift guards then compare against ruff-formatted text). When ruff is absent, the
// pre-formatted emitter text is returned unchanged - and because the emitter targets the
// same layout ruff produces (one trailing newline, two blank lines between top-level
// defs), `ruff format` on that text is a no-op once ruff is installed.
//
// Ruff is deterministic, so piping through it keeps `pnpm generate` byte-identical run to
// run. Detection is cached so a full 222-SKU emit spawns at most one probe.

import { execFileSync } from "node:child_process";

type Runner = { cmd: string; args: string[] } | null;

let cachedRunner: Runner | undefined;

function probe(cmd: string, args: string[]): boolean {
  try {
    execFileSync(cmd, [...args, "--version"], { stdio: ["ignore", "ignore", "ignore"] });
    return true;
  } catch {
    return false;
  }
}

function detectRunner(): Runner {
  if (cachedRunner !== undefined) return cachedRunner;
  // Allow explicit opt-out so a build can force deterministic pre-formatted output.
  if (process.env.ANYAPI_SKIP_RUFF === "1") {
    cachedRunner = null;
    return cachedRunner;
  }
  if (probe("ruff", [])) {
    cachedRunner = { cmd: "ruff", args: [] };
  } else if (probe("python3", ["-m", "ruff"])) {
    cachedRunner = { cmd: "python3", args: ["-m", "ruff"] };
  } else {
    cachedRunner = null;
  }
  return cachedRunner;
}

/** Return whether a ruff formatter was detected in this environment. */
export function ruffAvailable(): boolean {
  return detectRunner() !== null;
}

/** Format one Python source string via `ruff format -`; identity fallback when absent. */
export function formatPy(source: string): string {
  const runner = detectRunner();
  if (runner === null) return source;
  try {
    const out = execFileSync(runner.cmd, [...runner.args, "format", "-"], {
      input: source,
      encoding: "utf8",
    });
    return out;
  } catch {
    // Never fail the emit on a formatter hiccup; fall back to the pre-formatted text.
    return source;
  }
}
