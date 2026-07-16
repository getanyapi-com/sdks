import { describe, expect, it } from "vitest";
import {
  buildIr,
  extractCatalogPricing,
  serializeIr,
  stripGeneratedPrice,
} from "../src/ir.js";
import type { ArrayNode, ObjectNode } from "../src/types.js";
import { validateIr } from "../src/validate.js";
import { fixtureSku, syntheticExtractorIr } from "./extractor-fixture.js";

const liveIr = buildIr();
const fixtureIr = syntheticExtractorIr();

describe("IR top-level shape (SPEC 1.1)", () => {
  it("has a valid frozen header and derives cardinality from the snapshot", () => {
    expect(liveIr.version).toBe(1);
    expect(liveIr.generatedFrom).toBe("openapi.json snapshot");
    expect(liveIr.openapiVersion.length).toBeGreaterThan(0);
    expect(liveIr.baseUrl).toBe("https://api.getanyapi.com");
    expect(liveIr.skus.length).toBeGreaterThan(0);
  });

  it("covers a unique catalog sorted ascending by slug", () => {
    const slugs = liveIr.skus.map((sku) => sku.slug);
    expect(slugs).toEqual([...slugs].sort());
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("validates the complete current snapshot against ir.schema.json", () => {
    expect(() => validateIr(liveIr)).not.toThrow();
  });

  it("keeps pricing finite, non-negative, and internally consistent", () => {
    for (const sku of liveIr.skus) {
      expect(Number.isFinite(sku.pricing.priceUsd), sku.slug).toBe(true);
      expect(sku.pricing.priceUsd, sku.slug).toBeGreaterThanOrEqual(0);
      if (sku.pricing.baseUsd !== null) {
        expect(sku.pricing.baseUsd, sku.slug).toBeGreaterThanOrEqual(0);
        expect(sku.pricing.baseUsd, sku.slug).toBeLessThanOrEqual(
          sku.pricing.priceUsd,
        );
        expect(sku.pricing.perItemUsd, sku.slug).not.toBeNull();
        expect(sku.pricing.perItemUnit, sku.slug).not.toBeNull();
      } else {
        expect(sku.pricing.perItemUsd, sku.slug).toBeNull();
        expect(sku.pricing.perItemUnit, sku.slug).toBeNull();
      }
    }
  });
});

describe("synthetic extractor rules", () => {
  it("normalizes identity, naming, example, and generated price prose", () => {
    const sku = fixtureSku(fixtureIr, "fixture.flat");
    expect(sku).toMatchObject({
      platform: "fixture",
      action: "flat",
      operationId: "fixture_flat",
      name: "Fixture Flat",
      category: "fixture",
      description: "Fixture Flat description.",
      tsNamespace: "fixture",
      tsMethod: "flat",
      pyNamespace: "fixture",
      pyMethod: "flat",
      inputTypeName: "FixtureFlatInput",
      outputTypeName: "FixtureFlatData",
      example: { product: "fixture-product" },
    });
  });

  it("cracks found/data into a closed object with an open item record", () => {
    const sku = fixtureSku(fixtureIr, "fixture.flat");
    expect(sku.output.envelope).toBe("found-data");
    const data = sku.output.data as ObjectNode;
    expect(data.open).toBe(false);
    expect(data.required).toEqual(["items"]);
    const items = data.properties["items"] as ArrayNode;
    expect(items.kind).toBe("array");
    expect(items.mustPopulate).toBe(true);
    const item = items.items as ObjectNode;
    expect(item.open).toBe(true);
    expect(item.mustPopulate).toEqual(["text"]);
  });

  it("detects pagination and emits iterator names from a cursor pair", () => {
    const sku = fixtureSku(fixtureIr, "fixture.linear");
    expect(sku.tsIterMethod).toBe("iterLinear");
    expect(sku.pyIterMethod).toBe("iter_linear");
    expect(sku.pagination).toEqual({
      paginated: true,
      itemsField: "ads",
      cursorInputField: "cursor",
      nextCursorField: "nextCursor",
    });
  });

  it("uses an unwrapped, open object for a bare response", () => {
    const sku = fixtureSku(fixtureIr, "fixture.bare");
    expect(sku.output.envelope).toBe("bare");
    expect((sku.output.data as ObjectNode).open).toBe(true);
    expect(sku.example).toBeNull();
  });
});

describe("determinism (SPEC 1.1)", () => {
  it("serializes byte-identically across two extractions", () => {
    expect(serializeIr(buildIr())).toBe(serializeIr(buildIr()));
    expect(serializeIr(syntheticExtractorIr())).toBe(
      serializeIr(syntheticExtractorIr()),
    );
  });
});

describe("strict nested discovery pricing", () => {
  it("removes OpenAPI's rendered price copy so discovery owns generated docs", () => {
    expect(
      stripGeneratedPrice(
        "Useful API description. **Price:** billed per result - \\$1.00 maximum.",
      ),
    ).toBe("Useful API description.");
  });

  it("parses complete flat and linear pricing.from offers", () => {
    expect(
      extractCatalogPricing(
        {
          slug: "fixture.flat",
          provider: "AnyAPI",
          pricing: {
            from: { model: "flat", unit: "request", maxUsd: 0.00325 },
            failoverMaxUsd: 0.00325,
          },
        },
        "fixture.flat",
      ),
    ).toEqual({
      priceUsd: 0.00325,
      baseUsd: null,
      perItemUsd: null,
      perItemUnit: null,
    });
    expect(
      extractCatalogPricing(
        {
          slug: "fixture.linear",
          provider: "AnyAPI",
          pricing: {
            from: {
              model: "linear",
              unit: "result",
              baseUsd: 0.00005,
              perUnitUsd: 0.0008,
              maxUsd: 0.04002,
            },
            failoverMaxUsd: 0.04002,
          },
        },
        "fixture.linear",
      ),
    ).toEqual({
      priceUsd: 0.04002,
      baseUsd: 0.00005,
      perItemUsd: 0.0008,
      perItemUnit: "result",
    });
  });

  it.each([
    [
      {
        from: { model: "flat", unit: "request", maxUsd: 0.00325 },
      },
      "missing discovery pricing.failoverMaxUsd",
    ],
    [
      {
        from: { model: "flat", unit: "request", maxUsd: 0.00325 },
        failoverMaxUsd: 0.00325,
        fromCredits: 325,
      },
      "unexpected discovery pricing field fromCredits",
    ],
  ])(
    "rejects incomplete or extra pricing wrapper fields %#",
    (pricing, message) => {
      expect(() =>
        extractCatalogPricing(
          { slug: "fixture.flat", provider: "AnyAPI", pricing },
          "fixture.flat",
        ),
      ).toThrow(message);
    },
  );

  it.each([
    [
      {
        model: "flat",
        unit: "request",
        maxUsd: 0.00325,
        maxCredits: 325,
      },
      "unexpected discovery pricing.from field maxCredits",
    ],
    [
      {
        model: "linear",
        unit: "result",
        baseUsd: 0.00005,
        perUnitUsd: 0.0008,
        maxUsd: 0.04002,
        legacyPriceUsd: 0.04,
      },
      "unexpected discovery pricing.from field legacyPriceUsd",
    ],
  ])("rejects extra flat or linear offer fields %#", (from, message) => {
    expect(() =>
      extractCatalogPricing(
        {
          slug: "fixture.offer",
          provider: "AnyAPI",
          pricing: { from, failoverMaxUsd: 0.05 },
        },
        "fixture.offer",
      ),
    ).toThrow(message);
  });

  it.each([
    [undefined, "missing catalog discovery entry"],
    [{ slug: "x", provider: "AnyAPI" }, "missing discovery pricing"],
    [
      {
        slug: "x",
        provider: "AnyAPI",
        pricing: {
          from: { model: "mystery", unit: "request", maxUsd: 1 },
          failoverMaxUsd: 1,
        },
      },
      "unknown discovery pricing model",
    ],
    [
      {
        slug: "x",
        provider: "Other",
        pricing: {
          from: { model: "flat", unit: "request", maxUsd: 1 },
          failoverMaxUsd: 1,
        },
      },
      "provider must be AnyAPI",
    ],
  ])("rejects malformed pricing fixture %#", (entry, message) => {
    expect(() => extractCatalogPricing(entry, "fixture.bad")).toThrow(message);
  });
});

describe("public-boundary invariants", () => {
  it("has no credit key or em/en dash in the serialized live IR", () => {
    const serialized = serializeIr(liveIr);
    expect(serialized.toLowerCase()).not.toContain("credit");
    expect(serialized).not.toMatch(/[\u2014\u2013]/);
  });
});
