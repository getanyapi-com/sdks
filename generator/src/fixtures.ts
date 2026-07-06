// Synthetic fixture emitter per SPEC.md section 4. For each SKU, build a deterministic
// run-response envelope from the output data SchemaNode and write generator/fixtures.json
// (slug -> fixture object).

import { writeFileSync } from "node:fs";
import { fixturesOutPath } from "./paths.js";
import { stableStringify } from "./serialize.js";
import { buildIr } from "./ir.js";
import type { Ir, SkuEntry, SchemaNode } from "./types.js";

interface Fixture {
  // found-data: output = { found: true, data }. bare: output = data directly (SPEC 1.2
  // erratum) - there is no found/data wrapper on the wire for bare SKUs.
  output: { found: true; data: unknown } | Record<string, unknown>;
  provider: "AnyAPI";
  costUsd: number;
  items: number;
}

/** Build the full fixtures map (slug -> fixture) from the IR. */
export function buildFixtures(ir: Ir): Record<string, Fixture> {
  const map: Record<string, Fixture> = {};
  // Slugs are already sorted in the IR; preserve that order for determinism.
  for (const sku of ir.skus) {
    map[sku.slug] = buildFixture(sku);
  }
  return map;
}

function buildFixture(sku: SkuEntry): Fixture {
  const data = synth(sku.output.data);
  // SPEC 4: items = length of the array at the primary array field, else 1. Synthesized
  // arrays are always single-element, so a SKU with a primary array yields 1, and one
  // without yields 1 - always 1 for synthetic fixtures.
  // Bare SKUs have no found/data wrapper: output IS the synthesized data object directly.
  const output =
    sku.output.envelope === "bare"
      ? (data as Record<string, unknown>)
      : { found: true as const, data };
  return {
    output,
    provider: "AnyAPI",
    costUsd: 0.001,
    items: 1,
  };
}

// SPEC 4 SYNTH_DATA construction (deterministic).
function synth(node: SchemaNode): unknown {
  switch (node.kind) {
    case "object": {
      const out: Record<string, unknown> = {};
      // Populate only REQUIRED properties.
      for (const key of node.required) {
        const child = node.properties[key];
        if (child === undefined) continue;
        out[key] = synth(child);
      }
      // One extra key on every OPEN object (proves passthrough). Closed objects get none.
      if (node.open) out["_extra"] = "passthrough";
      return out;
    }
    case "array":
      return [synth(node.items)];
    case "string": {
      if (node.enum && node.enum.length > 0) return node.enum[0];
      if (node.format === "uri") return "https://example.com/x";
      return "sample";
    }
    case "integer":
      return 1;
    case "number":
      return 1.5;
    case "boolean":
      return true;
    case "null":
    case "unknown":
      return null;
  }
}

/** Serialize the fixtures map with a top-level _generated header key (valid JSON). */
export function serializeFixtures(map: Record<string, Fixture>): string {
  const withHeader = {
    _generated: "Generated - do not edit. Regenerate with: pnpm generate",
    ...map,
  };
  return stableStringify(withHeader);
}

/** Build fixtures from the freshly extracted IR and write generator/fixtures.json. */
export function generateFixtures(): string {
  const ir = buildIr();
  const map = buildFixtures(ir);
  const text = serializeFixtures(map);
  writeFileSync(fixturesOutPath, text);
  return text;
}
