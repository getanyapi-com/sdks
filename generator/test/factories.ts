// Synthetic IR builders for py-emitter tests. These exercise naming / typing edge cases
// that the 3-SKU sample does not cover (keyword collisions, functional TypedDict, google_ads
// namespace, per-item + null pricing, paginated-without-itemsField).

import type { IR, SchemaNode, SkuEntry } from "../src/py-ir.js";

export function str(overrides: Partial<Record<string, unknown>> = {}): SchemaNode {
  return { kind: "string", enum: null, default: null, format: null, ...overrides } as SchemaNode;
}

export function int(overrides: Partial<Record<string, unknown>> = {}): SchemaNode {
  return { kind: "integer", minimum: null, maximum: null, default: null, ...overrides } as SchemaNode;
}

export function obj(
  properties: Record<string, SchemaNode>,
  required: string[] = [],
  open = false,
  mustPopulate?: string[],
): SchemaNode {
  const node: Record<string, unknown> = { kind: "object", properties, required, open };
  if (mustPopulate) node.mustPopulate = mustPopulate;
  return node as unknown as SchemaNode;
}

export function arr(items: SchemaNode, mustPopulate = false): SchemaNode {
  return { kind: "array", items, mustPopulate } as SchemaNode;
}

/** Build a minimal SkuEntry, filling required IR keys with sensible defaults. */
export function sku(partial: Partial<SkuEntry> & Pick<SkuEntry, "slug">): SkuEntry {
  const [platform, action] = partial.slug.split(".");
  const operationId = partial.slug.replace(/[^A-Za-z0-9]+/g, "_");
  return {
    slug: partial.slug,
    platform: partial.platform ?? platform!,
    action: partial.action ?? action!,
    operationId: partial.operationId ?? operationId,
    name: partial.name ?? "Test SKU",
    category: partial.category ?? "",
    description: partial.description ?? "A test SKU.",
    pricing: partial.pricing ?? {
      priceUsd: 0.001,
      baseUsd: null,
      perItemUsd: null,
      perItemUnit: null,
    },
    tsNamespace: partial.tsNamespace ?? platform!,
    tsMethod: partial.tsMethod ?? action!,
    tsIterMethod: partial.tsIterMethod ?? null,
    pyNamespace: partial.pyNamespace ?? platform!,
    pyMethod: partial.pyMethod ?? action!,
    pyIterMethod: partial.pyIterMethod ?? null,
    inputTypeName: partial.inputTypeName ?? "TestInput",
    outputTypeName: partial.outputTypeName ?? "TestData",
    example: partial.example ?? null,
    input: partial.input ?? obj({}, [], false),
    output: partial.output ?? { envelope: "found-data", data: obj({}, [], false) },
    pagination: partial.pagination ?? {
      paginated: false,
      itemsField: null,
      cursorInputField: null,
      nextCursorField: null,
    },
  };
}

export function ir(skus: SkuEntry[]): IR {
  return {
    version: 1,
    openapiVersion: "1.0.0",
    baseUrl: "https://api.getanyapi.com",
    skus,
  };
}
