// Deterministic Python formatting seam for the emitter.
//
// Emitted source is piped through `ruff format` (the `ruff` binary or `python3 -m ruff`)
// so the committed output is a ruff fixed point (the CI dash / drift guards then compare
// against ruff-formatted text). Formatting is part of the byte-determinism contract, so
// ruff is REQUIRED and version-pinned: a missing or mismatched ruff is a hard error, not
// a silent skip (a skip regenerates different bytes on another machine and breaks the
// drift gate - exactly the failure this pin exists to prevent).
//
// The only escape hatch is ANYAPI_SKIP_RUFF=1, for unit tests that assert emitter text
// without needing a formatter present. Never set it for `pnpm generate`.
//
// Detection is cached so a full-catalog emit spawns at most one probe.

import { execFileSync } from "node:child_process";

/** The pinned formatter version; CI installs exactly this (see .github/workflows/ci.yml). */
export const REQUIRED_RUFF_VERSION = "0.15.20";

type Runner = { cmd: string; args: string[] };

let cachedRunner: Runner | null | undefined;

function versionOf(cmd: string, args: string[]): string | null {
  try {
    const out = execFileSync(cmd, [...args, "--version"], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });
    return out.match(/(\d+\.\d+\.\d+)/)?.[1] ?? null;
  } catch {
    return null;
  }
}

function detectRunner(): Runner | null {
  if (cachedRunner !== undefined) return cachedRunner;
  // Explicit opt-out for emitter unit tests that compare raw emitted text.
  if (process.env.ANYAPI_SKIP_RUFF === "1") {
    cachedRunner = null;
    return cachedRunner;
  }
  const candidates: Runner[] = [
    { cmd: "ruff", args: [] },
    { cmd: "python3", args: ["-m", "ruff"] },
  ];
  const seen: string[] = [];
  for (const c of candidates) {
    const v = versionOf(c.cmd, c.args);
    if (v === REQUIRED_RUFF_VERSION) {
      cachedRunner = c;
      return cachedRunner;
    }
    if (v !== null) seen.push(`${c.cmd}: ${v}`);
  }
  const found = seen.length > 0 ? `found ${seen.join(", ")}` : "none found";
  throw new Error(
    `ruff ${REQUIRED_RUFF_VERSION} is required to format generated Python (${found}). ` +
      `Install it with: pip install ruff==${REQUIRED_RUFF_VERSION}`,
  );
}

/** Return whether a pinned-version ruff formatter is available (throws on mismatch). */
export function ruffAvailable(): boolean {
  return detectRunner() !== null;
}

/** Format one Python source string via the pinned `ruff format -`. */
export function formatPy(source: string): string {
  const runner = detectRunner();
  if (runner === null) return source; // ANYAPI_SKIP_RUFF=1 (tests only)
  return execFileSync(runner.cmd, [...runner.args, "format", "-"], {
    input: source,
    encoding: "utf8",
  });
}
