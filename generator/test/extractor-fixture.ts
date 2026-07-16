import { buildIrFromDocuments } from "../src/ir.js";
import type { Ir, SkuEntry } from "../src/types.js";

const foundOutput = (data: Record<string, unknown>) => ({
  type: "object",
  properties: {
    output: {
      type: "object",
      additionalProperties: false,
      required: ["found", "data"],
      properties: {
        found: { type: "boolean" },
        data: { oneOf: [{ type: "null" }, data] },
      },
    },
  },
});

const operation = (
  operationId: string,
  summary: string,
  input: Record<string, unknown>,
  output: Record<string, unknown>,
) => ({
  post: {
    operationId,
    summary,
    description: `${summary} description. **Price:** stale generated copy.`,
    requestBody: {
      content: {
        "application/json": {
          schema: input,
        },
      },
    },
    responses: {
      "200": {
        content: {
          "application/json": { schema: output },
        },
      },
    },
  },
});

const flatInput = {
  type: "object",
  additionalProperties: false,
  required: ["product"],
  example: { product: "fixture-product" },
  properties: {
    product: { type: "string" },
    sort: {
      type: "string",
      enum: ["helpful", "recent"],
      default: "helpful",
    },
    limit: { type: "integer", minimum: 1, maximum: 50, default: 10 },
  },
};

const flatData = {
  type: "object",
  additionalProperties: false,
  required: ["items"],
  properties: {
    items: {
      type: "array",
      "x-anyapi-must-populate": true,
      items: {
        type: "object",
        required: ["rating", "text", "status", "url"],
        properties: {
          rating: { type: "number" },
          text: { type: "string", "x-anyapi-must-populate": true },
          status: { type: "string", enum: ["active", "inactive"] },
          url: { type: "string", format: "uri" },
        },
      },
    },
    nextCursor: { type: "string" },
  },
};

const linearInput = {
  type: "object",
  additionalProperties: false,
  required: ["query"],
  example: { query: "fixture query" },
  properties: {
    query: { type: "string" },
    cursor: { type: "string" },
  },
};

const linearData = {
  type: "object",
  additionalProperties: false,
  required: ["ads"],
  properties: {
    ads: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        required: ["headline"],
        properties: { headline: { type: "string" } },
      },
    },
    nextCursor: { type: ["string", "null"] },
  },
};

const bareInput = {
  type: "object",
  additionalProperties: false,
  properties: { cursor: { type: "string" } },
};

const bareData = {
  type: "object",
  required: ["records"],
  properties: {
    records: {
      type: "array",
      items: { type: "object", properties: { value: { type: "string" } } },
    },
    nextCursor: { type: "string" },
  },
};

export function syntheticExtractorIr(): Ir {
  return buildIrFromDocuments(
    {
      info: { version: "fixture-v1" },
      servers: [{ url: "https://fixture.invalid" }],
      paths: {
        "/v1/run/fixture.flat": operation(
          "fixture_flat",
          "Fixture Flat",
          flatInput,
          foundOutput(flatData),
        ),
        "/v1/run/fixture.linear": operation(
          "fixture_linear",
          "Fixture Linear",
          linearInput,
          foundOutput(linearData),
        ),
        "/v1/run/fixture.bare": operation(
          "fixture_bare",
          "Fixture Bare",
          bareInput,
          { type: "object", properties: { output: bareData } },
        ),
      },
    },
    {
      apis: [
        {
          slug: "fixture.flat",
          category: "fixture",
          provider: "AnyAPI",
          pricing: {
            from: { model: "flat", unit: "request", maxUsd: 0.00325 },
            failoverMaxUsd: 0.00325,
          },
        },
        {
          slug: "fixture.linear",
          category: "fixture",
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
        {
          slug: "fixture.bare",
          category: "fixture",
          provider: "AnyAPI",
          pricing: {
            from: { model: "flat", unit: "request", maxUsd: 0.002 },
            failoverMaxUsd: 0.002,
          },
        },
      ],
    },
  );
}

export function fixtureSku(ir: Ir, slug: string): SkuEntry {
  const sku = ir.skus.find((candidate) => candidate.slug === slug);
  if (!sku) throw new Error(`missing synthetic SKU ${slug}`);
  return sku;
}
