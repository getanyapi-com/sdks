// Programmatic validation of ir.json against generator/ir.schema.json using ajv, plus the
// catalog-health invariant that refuses to emit from a degraded IR.

import { readFileSync } from "node:fs";
import Ajv2020 from "ajv/dist/2020.js";
import { irSchemaPath } from "./paths.js";
import type { Ir, SkuEntry } from "./types.js";

/** Validate the IR object against ir.schema.json. Throws with details on failure. */
export function validateIr(ir: Ir): void {
  const schema = JSON.parse(readFileSync(irSchemaPath, "utf8"));
  const ajv = new Ajv2020({ allErrors: true, strict: false });
  const validate = ajv.compile(schema);
  const ok = validate(ir);
  if (!ok) {
    const errors = (validate.errors ?? [])
      .slice(0, 25)
      .map((e) => `  ${e.instancePath || "/"} ${e.message ?? ""} ${JSON.stringify(e.params)}`)
      .join("\n");
    throw new Error(`ir.json failed schema validation:\n${errors}`);
  }
}

// ----------------------------------------------------------------------------------------
// Catalog health invariant (input sanity, NOT drift).
//
// The regen drift gate proves the emitted tree matches what the emitter produces FROM THE
// CURRENT INPUT. It says nothing about whether that input is sane, so a snapshot refresh
// that silently degrades every operation regenerates cleanly and passes. That is exactly how
// an unrecognized `anyOf: [<sku schema>, {type:"null"}]` output wrapper turned all 274 typed
// result interfaces into bare `unknown` (and, because pagination keys on fields inside the
// same schema, dropped all 52 iterator surfaces) without tripping a single gate.
//
// These floors are deliberately loose. Envelope-level extraction is all-or-nothing: a
// wrapper the cracker does not recognize degrades EVERY operation, not a few, so a collapse
// lands far below any floor while ordinary catalog churn (SKUs shipping and retiring) never
// approaches one. Shares rather than counts, so the catalog can grow or shrink freely.
// ----------------------------------------------------------------------------------------

/**
 * Below this many SKUs the shares are statistically meaningless, and a small purpose-built
 * document (extractor unit tests, ir.sample.json) is not a catalog. Only the non-empty check
 * applies there. A real catalog collapsing to a handful of operations is a different failure
 * with a loud signature the shares would not add to: hundreds of deleted generated files.
 */
const HEALTH_MIN_SKUS = 20;

/**
 * Share of operations that must resolve to a typed result. Healthy today: 274/274 = 1.00.
 * The regression scored 0.00. The 0.20 of slack absorbs a genuinely untyped passthrough SKU
 * or two shipping without ever tolerating a systemic collapse.
 */
const MIN_TYPED_DATA_SHARE = 0.8;

/**
 * Share of operations that must expose an iterator. Healthy today: 52/274 = 0.19. Pagination
 * detection reads `nextCursor` out of the cracked data schema, so it fails precisely when the
 * crack fails, collapsing to 0.00. The floor sits roughly 4x under today's value: three
 * quarters of the paginated catalog could retire without firing this.
 */
const MIN_PAGINATED_SHARE = 0.05;

/**
 * A SKU resolves to a typed result when the extractor produced a real shape for its output
 * data. An `unknown` node is the extractor's give-up fallback; an object with no properties
 * is the same failure wearing a different kind, so both count as untyped.
 */
function hasTypedData(sku: SkuEntry): boolean {
  const data = sku.output.data;
  if (data.kind === "unknown") return false;
  if (data.kind === "object" && Object.keys(data.properties).length === 0) {
    return false;
  }
  return true;
}

function pct(value: number): string {
  return `${(value * 100).toFixed(1)}%`;
}

/**
 * Refuse to emit from a degraded catalog. Throws listing every violated floor; returns
 * silently on a healthy IR. Runs on the emit path AND inside `--check`, so a degraded
 * snapshot cannot reach the generated trees in either direction.
 */
export function assertCatalogHealth(ir: Ir): void {
  const failures: string[] = [];
  const total = ir.skus.length;

  if (total === 0) {
    failures.push("the catalog is empty (0 operations extracted from the snapshot)");
  }

  if (total >= HEALTH_MIN_SKUS) {
    const typed = ir.skus.filter(hasTypedData).length;
    const typedShare = typed / total;
    if (typedShare < MIN_TYPED_DATA_SHARE) {
      failures.push(
        `only ${typed}/${total} operations (${pct(typedShare)}) resolve to a typed result; ` +
          `floor is ${pct(MIN_TYPED_DATA_SHARE)}. The output envelope is most likely wrapped ` +
          "in a shape crackEnvelope does not recognize, so every result degraded to `unknown`.",
      );
    }

    const paginated = ir.skus.filter((sku) => sku.pagination.paginated).length;
    const paginatedShare = paginated / total;
    if (paginatedShare < MIN_PAGINATED_SHARE) {
      failures.push(
        `only ${paginated}/${total} operations (${pct(paginatedShare)}) expose an iterator; ` +
          `floor is ${pct(MIN_PAGINATED_SHARE)}. Pagination is detected on fields inside the ` +
          "cracked output schema, so this collapses whenever result extraction does.",
      );
    }
  }

  if (failures.length > 0) {
    throw new Error(
      "IR failed the catalog health invariant (refusing to emit):\n" +
        failures.map((f) => `  - ${f}`).join("\n") +
        "\nThe snapshot or the extractor is wrong, not the committed output. Fix the input; " +
        "regenerating would bake the degradation in and the drift gate would still pass.",
    );
  }
}
