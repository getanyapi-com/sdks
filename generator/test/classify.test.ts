// Tests for the IR diff classifier (src/classify.ts) that drives the release auto-bump.

import { describe, it, expect } from "vitest";
import { classifyIr } from "../src/classify.js";
import type { IR } from "../src/ir-types.js";
import { sku, obj, str, arr } from "./factories.js";

function ir(skus: unknown[]): IR {
  return {
    version: 1,
    openapiVersion: "1.0.0",
    baseUrl: "https://api.getanyapi.com",
    skus: skus as IR["skus"],
  };
}

const base = sku({
  slug: "amazon.reviews",
  input: obj({ product: str(), sort: str({ enum: ["helpful", "recent"] }) }, ["product"]),
  output: {
    envelope: "found-data",
    data: obj({ reviews: arr(obj({ title: str() }, ["title"], true)) }, ["reviews"]),
  },
});

describe("classifyIr", () => {
  it("returns none for an identical IR", () => {
    const c = classifyIr(ir([base]), ir([base]));
    expect(c.bump).toBe("none");
    expect(c.hasRemoval).toBe(false);
  });

  it("minor when a SKU is added", () => {
    const c = classifyIr(ir([base]), ir([base, sku({ slug: "google.search" })]));
    expect(c.bump).toBe("minor");
    expect(c.added.some((a) => a.kind === "sku-added")).toBe(true);
  });

  it("minor + platform-added for a brand-new platform", () => {
    const c = classifyIr(ir([base]), ir([base, sku({ slug: "newplat.thing" })]));
    expect(c.bump).toBe("minor");
    expect(c.added.some((a) => a.kind === "platform-added")).toBe(true);
  });

  it("minor when a new input field appears", () => {
    const next = sku({
      slug: "amazon.reviews",
      input: obj({ product: str(), sort: str({ enum: ["helpful", "recent"] }), region: str() }, [
        "product",
      ]),
      output: base.output,
    });
    const c = classifyIr(ir([base]), ir([next]));
    expect(c.bump).toBe("minor");
    expect(c.added.some((a) => a.detail.includes("region"))).toBe(true);
  });

  it("minor when a new enum member appears", () => {
    const next = sku({
      slug: "amazon.reviews",
      input: obj({ product: str(), sort: str({ enum: ["helpful", "recent", "critical"] }) }, [
        "product",
      ]),
      output: base.output,
    });
    const c = classifyIr(ir([base]), ir([next]));
    expect(c.bump).toBe("minor");
    expect(c.added.some((a) => a.kind === "enum-added")).toBe(true);
  });

  it("patch + WARN when a SKU is removed", () => {
    const c = classifyIr(ir([base, sku({ slug: "google.search" })]), ir([base]));
    expect(c.bump).toBe("patch");
    expect(c.hasRemoval).toBe(true);
    expect(c.summary).toContain("WARNING");
  });

  it("patch + WARN when an output field is removed", () => {
    const next = sku({
      slug: "amazon.reviews",
      input: base.input,
      output: { envelope: "found-data", data: obj({ reviews: arr(obj({}, [], true)) }, ["reviews"]) },
    });
    const c = classifyIr(ir([base]), ir([next]));
    expect(c.bump).toBe("patch");
    expect(c.hasRemoval).toBe(true);
    expect(c.removed.some((r) => r.detail.includes("title"))).toBe(true);
  });

  it("patch for a pricing-only change (no surface change)", () => {
    const next = sku({
      slug: "amazon.reviews",
      input: base.input,
      output: base.output,
      pricing: { priceUsd: 0.02, baseUsd: null, perItemUsd: null, perItemUnit: null },
    });
    const c = classifyIr(ir([base]), ir([next]));
    expect(c.bump).toBe("patch");
    expect(c.hasRemoval).toBe(false);
    expect(c.changed.some((x) => x.kind === "pricing")).toBe(true);
  });

  it("patch for a description-only change", () => {
    const next = sku({
      slug: "amazon.reviews",
      input: base.input,
      output: base.output,
      description: "A different description.",
    });
    const c = classifyIr(ir([base]), ir([next]));
    expect(c.bump).toBe("patch");
    expect(c.changed.some((x) => x.kind === "description")).toBe(true);
  });
});
