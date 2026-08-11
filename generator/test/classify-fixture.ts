import {
  classifyIr,
  type Classification,
  type GeneratedChanges,
} from "../src/classify.js";
import type { IR, ObjectNode, SkuEntry } from "../src/ir-types.js";
import { arr, int, obj, sku, str } from "./factories.js";

export function ir(skus: SkuEntry[], overrides: Partial<IR> = {}): IR {
  return {
    version: 1,
    openapiVersion: "1.0.0",
    baseUrl: "https://api.getanyapi.com",
    skus,
    ...overrides,
  };
}

export const base = sku({
  slug: "amazon.reviews",
  input: obj(
    {
      product: str(),
      sort: str({ enum: ["helpful", "recent"] }),
      limit: int(),
    },
    ["product"],
  ),
  output: {
    envelope: "found-data",
    data: obj({ reviews: arr(obj({ title: str() }, ["title"], true)) }, [
      "reviews",
    ]),
  },
});

export const unchangedFiles: GeneratedChanges = {
  irChanged: false,
  fixturesChanged: false,
  typescriptChanged: false,
  pythonChanged: false,
};

export function fileChanges(
  overrides: Partial<GeneratedChanges>,
): GeneratedChanges {
  return { ...unchangedFiles, ...overrides };
}

export function classifyMutation(
  mutate: (next: SkuEntry) => void,
  files: GeneratedChanges = unchangedFiles,
): Classification {
  const next = structuredClone(base);
  mutate(next);
  return classifyIr(ir([base]), ir([next]), files);
}

export function input(entry: SkuEntry): ObjectNode {
  return entry.input as ObjectNode;
}

export function field(entry: SkuEntry, key: string): Record<string, unknown> {
  return input(entry).properties[key] as unknown as Record<string, unknown>;
}
