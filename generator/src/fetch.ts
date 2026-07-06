// Snapshot refresh: re-fetch the public openapi.json and catalog snapshots and write them
// back to the repo root with deterministic, stable pretty-printed formatting. The IR
// extractor reads only these committed snapshots (never the network).

import { writeFileSync } from "node:fs";
import { openapiPath, catalogPath } from "./paths.js";

const OPENAPI_URL = "https://api.getanyapi.com/openapi.json";
const CATALOG_URL = "https://api.getanyapi.com/catalog";

async function fetchJson(url: string): Promise<unknown> {
  const res = await fetch(url, { headers: { Accept: "application/json" } });
  if (!res.ok) {
    throw new Error(`fetch ${url} failed: HTTP ${res.status}`);
  }
  return res.json();
}

// Deterministic pretty-print: 2-space indent, trailing newline. Preserves the upstream
// key order (JSON.parse -> JSON.stringify keeps insertion order for string keys).
function pretty(value: unknown): string {
  return JSON.stringify(value, null, 2) + "\n";
}

export async function refreshSnapshots(): Promise<void> {
  const [openapi, catalog] = await Promise.all([
    fetchJson(OPENAPI_URL),
    fetchJson(CATALOG_URL),
  ]);
  writeFileSync(openapiPath, pretty(openapi));
  writeFileSync(catalogPath, pretty(catalog));
  const paths = (openapi as { paths?: Record<string, unknown> }).paths ?? {};
  const runCount = Object.keys(paths).filter((p) => p.startsWith("/v1/run/")).length;
  const apis = (catalog as { apis?: unknown[] }).apis ?? [];
  // eslint-disable-next-line no-console
  console.log(
    `Refreshed snapshots: openapi.json (${runCount} run paths), catalog.json (${apis.length} entries).`,
  );
}
