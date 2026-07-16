import { describe, expect, it } from "vitest";
import { crackEnvelope, toSchemaNode } from "../src/ir.js";
import type { ObjectNode, SchemaNode, StringNode } from "../src/types.js";
import { fixtureSku, syntheticExtractorIr } from "./extractor-fixture.js";

const ir = syntheticExtractorIr();

function prop(obj: ObjectNode, key: string): SchemaNode {
  const value = obj.properties[key];
  if (!value) throw new Error(`missing property ${key}`);
  return value;
}

describe("envelope crack (SPEC 1.4.1)", () => {
  it("collapses found/data oneOf to the non-null data branch", () => {
    const sku = fixtureSku(ir, "fixture.flat");
    const data = sku.output.data as ObjectNode;
    expect(sku.output.envelope).toBe("found-data");
    expect(data.properties["items"]).toBeDefined();
    expect(data.properties["found"]).toBeUndefined();
  });

  it("uses the bare output object directly when there is no found/data wrapper", () => {
    const cracked = crackEnvelope({
      responses: {
        "200": {
          content: {
            "application/json": {
              schema: {
                properties: {
                  output: {
                    type: "object",
                    required: ["posts"],
                    properties: {
                      posts: { type: "array", items: { type: "object" } },
                      nextCursor: { type: "string" },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });
    expect(cracked.bare).toBe(true);
    const data = toSchemaNode(cracked.data) as ObjectNode;
    expect(data.properties["posts"]).toBeDefined();
    expect(data.properties["nextCursor"]).toBeDefined();
    expect(data.properties["found"]).toBeUndefined();
    expect(data.properties["data"]).toBeUndefined();
  });
});

describe("open records (SPEC 1.4.5)", () => {
  it("marks additionalProperties:false objects closed and unspecified item records open", () => {
    const data = fixtureSku(ir, "fixture.flat").output.data as ObjectNode;
    expect(data.open).toBe(false);
    const items = prop(data, "items");
    if (items.kind !== "array") throw new Error("expected array");
    expect((items.items as ObjectNode).open).toBe(true);
  });
});

describe("defaults imply optional / enums / bounds (SPEC 1.4.2-1.4.4)", () => {
  it("carries string defaults/enums and integer bounds from a synthetic input", () => {
    const input = fixtureSku(ir, "fixture.flat").input as ObjectNode;
    const sort = prop(input, "sort") as StringNode;
    expect(sort.default).toBe("helpful");
    expect(sort.enum).toEqual(["helpful", "recent"]);
    const limit = prop(input, "limit");
    if (limit.kind !== "integer") throw new Error("expected integer");
    expect(limit.minimum).toBe(1);
    expect(limit.maximum).toBe(50);
    expect(input.required).toContain("product");
  });
});

describe("nullable type-array collapse", () => {
  it("collapses type:[string,null] nextCursor to a string node", () => {
    const data = fixtureSku(ir, "fixture.linear").output.data as ObjectNode;
    expect(prop(data, "nextCursor").kind).toBe("string");
  });
});

describe("unknown fallback (SPEC 1.3)", () => {
  it("maps a description-only schema to an unknown node", () => {
    expect(toSchemaNode({ description: "provider-defined" })).toEqual({
      kind: "unknown",
      description: "provider-defined",
    });
  });
});

describe("pagination detection (SPEC 1.4.10)", () => {
  it("requires both a string cursor input and nextCursor output", () => {
    const paginated = fixtureSku(ir, "fixture.linear");
    expect(paginated.pagination.paginated).toBe(true);
    expect(paginated.pagination.itemsField).toBe("ads");
    expect(paginated.tsIterMethod).not.toBeNull();
    expect(paginated.pyIterMethod).not.toBeNull();

    const missingInputCursor = fixtureSku(ir, "fixture.flat");
    expect(
      (missingInputCursor.output.data as ObjectNode).properties["nextCursor"],
    ).toBeDefined();
    expect(missingInputCursor.pagination.paginated).toBe(false);
  });
});

describe("pricing modes (SPEC 1.2 notes)", () => {
  it("extracts fixed and dynamic modes without consulting live SKU examples", () => {
    const fixed = fixtureSku(ir, "fixture.flat").pricing;
    expect(fixed).toEqual({
      priceUsd: 0.00325,
      baseUsd: null,
      perItemUsd: null,
      perItemUnit: null,
    });

    const dynamic = fixtureSku(ir, "fixture.linear").pricing;
    expect(dynamic).toEqual({
      priceUsd: 0.04002,
      baseUsd: 0.00005,
      perItemUsd: 0.0008,
      perItemUnit: "result",
    });
  });
});
