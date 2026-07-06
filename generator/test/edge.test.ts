import { describe, it, expect } from "vitest";
import { buildIr } from "../src/ir.js";
import type { SkuEntry, SchemaNode, ObjectNode, StringNode } from "../src/types.js";

const ir = buildIr();
const bySlug = new Map<string, SkuEntry>(ir.skus.map((s) => [s.slug, s]));
function sku(slug: string): SkuEntry {
  const s = bySlug.get(slug);
  if (!s) throw new Error(`missing sku ${slug}`);
  return s;
}
function prop(obj: ObjectNode, key: string): SchemaNode {
  const p = obj.properties[key];
  if (!p) throw new Error(`missing property ${key}`);
  return p;
}

describe("envelope crack (SPEC 1.4.1)", () => {
  it("collapses the found/data oneOf to the non-null data branch", () => {
    // ahrefs.backlinks has the standard { found, data: oneOf[null, {items}] } envelope.
    const data = sku("ahrefs.backlinks").output.data as ObjectNode;
    expect(data.kind).toBe("object");
    expect(data.properties["items"]).toBeDefined();
    // `found` is never modeled as a data field.
    expect(data.properties["found"]).toBeUndefined();
  });

  it("uses the bare output object directly when there is no found/data wrapper", () => {
    // reddit.search's output is the data object directly (no found/data envelope).
    const data = sku("reddit.search").output.data as ObjectNode;
    expect(data.kind).toBe("object");
    expect(data.properties["posts"]).toBeDefined();
    expect(data.properties["nextCursor"]).toBeDefined();
    expect(data.properties["found"]).toBeUndefined();
    expect(data.properties["data"]).toBeUndefined();
  });
});

describe("open records (SPEC 1.4.5)", () => {
  it("marks additionalProperties:false objects as closed and item records as open", () => {
    const data = sku("amazon.reviews").output.data as ObjectNode;
    expect(data.open).toBe(false); // data wrapper is closed
    const items = prop(data, "items");
    if (items.kind !== "array") throw new Error("expected array");
    const item = items.items as ObjectNode;
    expect(item.open).toBe(true); // operator-populated item record is open
  });
});

describe("defaults imply optional / enums / bounds (SPEC 1.4.2-1.4.4)", () => {
  it("carries a default and enum on a string node, and bounds on an integer node", () => {
    const input = sku("amazon.reviews").input as ObjectNode;
    const sort = prop(input, "sort") as StringNode;
    expect(sort.default).toBe("helpful");
    expect(sort.enum).toEqual(["helpful", "recent"]);
    const limit = prop(input, "limit");
    if (limit.kind !== "integer") throw new Error("expected integer");
    expect(limit.minimum).toBe(1);
    expect(limit.maximum).toBe(50);
    // `product` is required and has no default -> stays required.
    expect(input.required).toContain("product");
  });
});

describe("nullable type-array collapse", () => {
  it("collapses type:[string,null] nextCursor to a string node (not unknown)", () => {
    const data = sku("instagram.followers").output.data as ObjectNode;
    const next = prop(data, "nextCursor");
    expect(next.kind).toBe("string");
  });
});

describe("unknown fallback (SPEC 1.3)", () => {
  it("maps an empty {} schema (description only) to an unknown node", () => {
    const data = sku("linkedin.search_profiles").output.data as ObjectNode;
    const items = prop(data, "items");
    if (items.kind !== "array") throw new Error("expected array");
    const item = items.items as ObjectNode;
    expect(prop(item, "currentPosition").kind).toBe("unknown");
  });
});

describe("pagination detection (SPEC 1.4.10)", () => {
  it("marks 46 SKUs paginated with a resolvable itemsField", () => {
    const paginated = ir.skus.filter((s) => s.pagination.paginated);
    expect(paginated.length).toBe(46);
    // No paginated SKU in the current catalog lacks an items array; all get iterators.
    for (const s of paginated) {
      expect(s.pagination.itemsField).not.toBeNull();
      expect(s.tsIterMethod).not.toBeNull();
      expect(s.pyIterMethod).not.toBeNull();
    }
  });

  it("does not paginate a SKU without a cursor input even if data has nextCursor", () => {
    // A SKU with nextCursor in data but no cursor input must NOT be paginated. If none
    // exists in the catalog this is vacuously satisfied; assert the rule holds for every SKU.
    for (const s of ir.skus) {
      const input = s.input as ObjectNode;
      const hasCursor =
        input.properties["cursor"] !== undefined &&
        input.properties["cursor"].kind === "string";
      const dataObj = s.output.data.kind === "object" ? s.output.data : null;
      const hasNext = dataObj !== null && dataObj.properties["nextCursor"] !== undefined;
      expect(s.pagination.paginated).toBe(hasCursor && hasNext);
    }
  });
});

describe("pricing modes (SPEC 1.2 notes)", () => {
  it("fixed mode has null baseUsd; dynamic mode has a numeric baseUsd <= priceUsd", () => {
    const dynamic = ir.skus.filter((s) => s.pricing.baseUsd !== null);
    expect(dynamic.length).toBeGreaterThan(0);
    for (const s of dynamic) {
      expect(typeof s.pricing.priceUsd).toBe("number");
      expect(s.pricing.baseUsd as number).toBeLessThanOrEqual(s.pricing.priceUsd);
    }
  });
});
