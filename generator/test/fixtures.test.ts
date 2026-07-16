import { describe, expect, it } from "vitest";
import { buildFixtures, serializeFixtures } from "../src/fixtures.js";
import type { ObjectNode } from "../src/types.js";
import { fixtureSku, syntheticExtractorIr } from "./extractor-fixture.js";

const ir = syntheticExtractorIr();
const fixtures = buildFixtures(ir);

function fixture(slug: string) {
  const value = fixtures[slug];
  if (!value) throw new Error(`missing synthetic fixture ${slug}`);
  return value;
}

function firstItem(
  rows: Array<Record<string, unknown>>,
): Record<string, unknown> {
  const item = rows[0];
  if (!item) throw new Error("empty rows");
  return item;
}

describe("synthetic fixtures (SPEC 4)", () => {
  it("derives one fixture per IR entry with customer-safe metadata", () => {
    expect(Object.keys(fixtures)).toHaveLength(ir.skus.length);
    for (const sku of ir.skus) {
      const value = fixture(sku.slug);
      expect(value.provider).toBe("AnyAPI");
      expect(value.costUsd).toBeGreaterThan(0);
      expect(value.items).toBe(1);
      const output = value.output as Record<string, unknown>;
      if (sku.output.envelope === "bare") {
        expect(output["found"]).toBeUndefined();
      } else {
        expect(output["found"]).toBe(true);
      }
    }
  });

  it("emits bare output as data directly", () => {
    const output = fixture("fixture.bare").output as Record<string, unknown>;
    expect(output["found"]).toBeUndefined();
    expect(output["records"]).toEqual([
      {
        _extra: "passthrough",
      },
    ]);
    expect(output["_extra"]).toBe("passthrough");
  });

  it("populates required fields and omits optional fields", () => {
    const output = fixture("fixture.flat").output as {
      data: { items: Array<Record<string, unknown>>; nextCursor?: string };
    };
    const item = firstItem(output.data.items);
    expect(item).toMatchObject({
      rating: 1.5,
      text: "sample",
      status: "active",
      url: "https://example.com/x",
    });
    expect(output.data.nextCursor).toBeUndefined();
  });

  it("adds _extra only to open objects", () => {
    const output = fixture("fixture.flat").output as {
      data: Record<string, unknown> & {
        items: Array<Record<string, unknown>>;
      };
    };
    expect(output.data["_extra"]).toBeUndefined();
    expect(firstItem(output.data.items)["_extra"]).toBe("passthrough");

    const bare = fixture("fixture.bare").output as Record<string, unknown>;
    expect(bare["_extra"]).toBe("passthrough");
  });

  it("serializes deterministically and carries the generated header", () => {
    const first = serializeFixtures(buildFixtures(syntheticExtractorIr()));
    const second = serializeFixtures(buildFixtures(syntheticExtractorIr()));
    expect(first).toBe(second);
    expect(first).toContain('"_generated"');
    expect(first).not.toMatch(/[\u2014\u2013]/);
  });

  it("counts the primary array element for a paginated fixture", () => {
    const sku = fixtureSku(ir, "fixture.linear");
    const data = sku.output.data as ObjectNode;
    expect(data.properties[sku.pagination.itemsField as string]).toBeDefined();
    const output = fixture("fixture.linear").output as {
      data: Record<string, unknown>;
    };
    expect(output.data["ads"]).toEqual([{ headline: "sample" }]);
    expect(fixture("fixture.linear").items).toBe(1);
  });
});
