import { describe, it, expect } from "vitest";
import { buildIr, serializeIr } from "../src/ir.js";
import { validateIr } from "../src/validate.js";
import type { SkuEntry, ObjectNode, ArrayNode } from "../src/types.js";

const ir = buildIr();
const bySlug = new Map<string, SkuEntry>(ir.skus.map((s) => [s.slug, s]));

function sku(slug: string): SkuEntry {
  const s = bySlug.get(slug);
  if (!s) throw new Error(`missing sku ${slug}`);
  return s;
}

describe("IR top-level shape (SPEC 1.1)", () => {
  it("has the frozen meta header", () => {
    expect(ir.version).toBe(1);
    expect(ir.openapiVersion).toBe("1.0.0");
    expect(ir.baseUrl).toBe("https://api.getanyapi.com");
  });

  it("covers all 222 SKUs sorted ascending by slug", () => {
    expect(ir.skus.length).toBe(222);
    const slugs = ir.skus.map((s) => s.slug);
    const sorted = [...slugs].sort();
    expect(slugs).toEqual(sorted);
  });

  it("validates against ir.schema.json", () => {
    expect(() => validateIr(ir)).not.toThrow();
  });
});

describe("golden: amazon.reviews (SPEC sample)", () => {
  const s = sku("amazon.reviews");
  it("has the expected identity and naming", () => {
    expect(s.platform).toBe("amazon");
    expect(s.action).toBe("reviews");
    expect(s.operationId).toBe("amazon_reviews");
    expect(s.name).toBe("Amazon Reviews");
    expect(s.tsNamespace).toBe("amazon");
    expect(s.tsMethod).toBe("reviews");
    expect(s.tsIterMethod).toBeNull();
    expect(s.pyMethod).toBe("reviews");
    expect(s.inputTypeName).toBe("AmazonReviewsInput");
    expect(s.outputTypeName).toBe("AmazonReviewsData");
  });

  it("prices at the fixed USD amount with USD-only fields (real catalog values)", () => {
    expect(s.pricing.priceUsd).toBe(0.01625);
    expect(s.pricing.baseUsd).toBeNull();
    // catalog perItemCredits=0 -> exact USD 0 (extractor fills from catalog.json)
    expect(s.pricing.perItemUsd).toBe(0);
    expect(s.pricing.perItemUnit).toBeNull();
    expect(s.category).toBe("shop");
    expect(JSON.stringify(s)).not.toMatch(/credit/i);
  });

  it("has the example verbatim and a not-paginated flag", () => {
    expect(s.example).toEqual({ product: "B07FZ8S74R", limit: 3 });
    expect(s.pagination.paginated).toBe(false);
  });

  it("cracks the envelope to a closed data object with an open item record", () => {
    const data = s.output.data as ObjectNode;
    expect(data.kind).toBe("object");
    expect(data.open).toBe(false);
    expect(data.required).toContain("items");
    const items = data.properties["items"] as ArrayNode;
    expect(items.kind).toBe("array");
    expect(items.mustPopulate).toBe(true);
    const item = items.items as ObjectNode;
    expect(item.open).toBe(true);
    expect(item.mustPopulate).toEqual(["text"]);
  });
});

describe("golden: facebook.ads_search (paginated SPEC sample)", () => {
  const s = sku("facebook.ads_search");
  it("names the iterator methods and detects pagination", () => {
    expect(s.tsMethod).toBe("adsSearch");
    expect(s.tsIterMethod).toBe("iterAdsSearch");
    expect(s.pyMethod).toBe("ads_search");
    expect(s.pyIterMethod).toBe("iter_ads_search");
    expect(s.pagination).toEqual({
      paginated: true,
      itemsField: "ads",
      cursorInputField: "cursor",
      nextCursorField: "nextCursor",
    });
  });

  it("has an integer default carried from the schema and a string enum on status", () => {
    const input = s.input as ObjectNode;
    const status = input.properties["status"];
    if (!status || status.kind !== "string") throw new Error("expected string status");
    expect(status.enum).toEqual(["ALL", "ACTIVE", "INACTIVE"]);
    expect(status.default).toBe("ACTIVE");
  });
});

describe("golden: threads.profile (open root data)", () => {
  const s = sku("threads.profile");
  it("has an open data object (item record at the root)", () => {
    const data = s.output.data as ObjectNode;
    expect(data.open).toBe(true);
    expect(data.mustPopulate).toContain("username");
    expect(s.pagination.paginated).toBe(false);
    expect(s.example).toEqual({ username: "zuck" });
  });
});

describe("determinism (SPEC 1.1)", () => {
  it("serializes byte-identically across two extractions", () => {
    const a = serializeIr(buildIr());
    const b = serializeIr(buildIr());
    expect(a).toBe(b);
  });
});

describe("no credits leak anywhere in the IR (SPEC 0.1)", () => {
  it("has no 'credit' substring in the serialized IR", () => {
    expect(serializeIr(ir).toLowerCase()).not.toContain("credit");
  });
  it("has no em or en dash in the serialized IR (SPEC 0.3)", () => {
    expect(serializeIr(ir)).not.toMatch(/[\u2014\u2013]/);
  });
});
