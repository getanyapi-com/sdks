// Catalog health invariant: the input-sanity gate the regen drift check cannot provide.
// The degraded IRs below reproduce the real regression (an unrecognized nullable output
// wrapper collapsed 274 typed results to `unknown` and dropped all 52 iterator surfaces)
// against the live snapshot, so the test tracks the catalog instead of pinning a count.

import { describe, expect, it } from "vitest";
import { buildIr } from "../src/ir.js";
import { assertCatalogHealth } from "../src/validate.js";
import { syntheticExtractorIr } from "./extractor-fixture.js";
import type { Ir, SchemaNode } from "../src/types.js";

const liveIr = buildIr();

const UNKNOWN_NODE = { kind: "unknown" } as SchemaNode;

/** Every result degraded to `unknown` and every iterator dropped (the real regression). */
function collapsedResults(ir: Ir): Ir {
  return {
    ...ir,
    skus: ir.skus.map((sku) => ({
      ...sku,
      tsIterMethod: null,
      pyIterMethod: null,
      output: { ...sku.output, data: UNKNOWN_NODE },
      pagination: {
        paginated: false,
        itemsField: null,
        cursorInputField: null,
        nextCursorField: null,
      },
    })),
  };
}

/** Results stay typed but pagination detection stops firing. */
function collapsedPagination(ir: Ir): Ir {
  return {
    ...ir,
    skus: ir.skus.map((sku) => ({
      ...sku,
      tsIterMethod: null,
      pyIterMethod: null,
      pagination: {
        paginated: false,
        itemsField: null,
        cursorInputField: null,
        nextCursorField: null,
      },
    })),
  };
}

describe("catalog health invariant", () => {
  it("passes on the current committed catalog", () => {
    expect(() => assertCatalogHealth(liveIr)).not.toThrow();
  });

  it("holds the live catalog comfortably above both floors", () => {
    const total = liveIr.skus.length;
    const typed = liveIr.skus.filter(
      (sku) => sku.output.data.kind !== "unknown",
    ).length;
    const paginated = liveIr.skus.filter((sku) => sku.pagination.paginated).length;
    expect(total).toBeGreaterThan(0);
    expect(typed / total).toBeGreaterThan(0.8);
    expect(paginated / total).toBeGreaterThan(0.05);
  });

  it("refuses an IR whose results have all degraded to unknown", () => {
    expect(() => assertCatalogHealth(collapsedResults(liveIr))).toThrow(
      /resolve to a typed result/,
    );
  });

  it("names the refusal so a degraded snapshot cannot be mistaken for stale output", () => {
    expect(() => assertCatalogHealth(collapsedResults(liveIr))).toThrow(
      /refusing to emit/,
    );
  });

  it("refuses an IR whose iterator surfaces collapsed to zero", () => {
    expect(() => assertCatalogHealth(collapsedPagination(liveIr))).toThrow(
      /expose an iterator/,
    );
  });

  it("refuses an empty catalog", () => {
    expect(() => assertCatalogHealth({ ...liveIr, skus: [] })).toThrow(
      /catalog is empty/,
    );
  });

  it("skips the share floors for a small purpose-built IR", () => {
    // Extractor unit fixtures are a handful of SKUs with no paginated surface at all; the
    // invariant must not turn every small synthetic document into a generator failure.
    const small = syntheticExtractorIr();
    expect(small.skus.length).toBeLessThan(20);
    expect(() => assertCatalogHealth(small)).not.toThrow();
  });
});
