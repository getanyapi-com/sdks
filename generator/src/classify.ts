// Fail-closed release classifier for generated SDK catalog refreshes.
//
// The semantic walk classifies every generator-consumed IR change. The regen wrapper also
// reports byte changes in the IR, fixtures, and both emitted trees so a clean semantic diff
// cannot hide generator drift. Only exact byte identity can produce `none`.

import {
  item,
  same,
  unknownChanges,
  type ChangeItem,
  type ClassificationState,
} from "./classify-change.js";
import { classifySchema } from "./classify-schema.js";
import { renderSummary } from "./classify-summary.js";
import type { IR, SkuEntry } from "./ir-types.js";

export type { ChangeItem } from "./classify-change.js";

export type BumpLevel = "none" | "patch" | "minor" | "blocked";

export interface GeneratedChanges {
  irChanged: boolean;
  fixturesChanged: boolean;
  typescriptChanged: boolean;
  pythonChanged: boolean;
}

export interface Classification {
  bump: BumpLevel;
  hasRemoval: boolean;
  added: ChangeItem[];
  removed: ChangeItem[];
  changed: ChangeItem[];
  blocked: ChangeItem[];
  summary: string;
}

function classifySku(
  before: SkuEntry,
  after: SkuEntry,
  state: ClassificationState,
): void {
  const slug = before.slug;
  const docs = ["name", "description", "example"] as const;
  for (const key of docs) {
    if (!same(before[key], after[key])) {
      state.changed.push(item("documentation", slug, `${key} updated`));
    }
  }
  if (before.category !== after.category) {
    state.changed.push(item("metadata", slug, "category updated"));
  }

  const pricingKeys = [
    "priceUsd",
    "baseUsd",
    "perItemUsd",
    "perItemUnit",
  ] as const;
  if (
    pricingKeys.some((key) => !same(before.pricing[key], after.pricing[key]))
  ) {
    state.changed.push(item("pricing", slug, "pricing documentation updated"));
  }
  unknownChanges(
    before.pricing,
    after.pricing,
    pricingKeys,
    slug,
    "pricing",
    state,
  );

  const pathFields = ["platform", "action"] as const;
  for (const key of pathFields) {
    if (!same(before[key], after[key])) {
      state.blocked.push(item("path-change", slug, `${key} changed`));
    }
  }
  const methodFields = [
    "operationId",
    "tsNamespace",
    "tsMethod",
    "tsIterMethod",
    "pyNamespace",
    "pyMethod",
    "pyIterMethod",
  ] as const;
  for (const key of methodFields) {
    if (!same(before[key], after[key])) {
      state.blocked.push(item("method-change", slug, `${key} changed`));
    }
  }
  for (const key of ["inputTypeName", "outputTypeName"] as const) {
    if (before[key] !== after[key]) {
      state.blocked.push(item("type-change", slug, `${key} changed`));
    }
  }
  if (!same(before.pagination, after.pagination)) {
    state.blocked.push(
      item("method-change", slug, "pagination or iterator contract changed"),
    );
  }
  if (before.output.envelope !== after.output.envelope) {
    state.blocked.push(
      item("envelope-change", slug, "response envelope changed"),
    );
  }

  classifySchema(before.input, after.input, slug, "input", state);
  classifySchema(before.output.data, after.output.data, slug, "output", state);
  unknownChanges(
    before.output,
    after.output,
    ["envelope", "data"],
    slug,
    "output",
    state,
  );
  unknownChanges(
    before,
    after,
    [
      "slug",
      "platform",
      "action",
      "operationId",
      "name",
      "category",
      "description",
      "pricing",
      "tsNamespace",
      "tsMethod",
      "tsIterMethod",
      "pyNamespace",
      "pyMethod",
      "pyIterMethod",
      "inputTypeName",
      "outputTypeName",
      "example",
      "input",
      "output",
      "pagination",
    ],
    slug,
    "sku",
    state,
  );
}

function mapSkus(
  ir: IR,
  label: string,
  state: ClassificationState,
): Map<string, SkuEntry> {
  const result = new Map<string, SkuEntry>();
  for (const sku of ir.skus) {
    if (result.has(sku.slug)) {
      state.blocked.push(
        item("unclassified-change", sku.slug, `duplicate slug in ${label} IR`),
      );
    }
    result.set(sku.slug, sku);
  }
  return result;
}

export function classifyIr(
  oldIr: IR,
  newIr: IR,
  files: GeneratedChanges,
): Classification {
  const state: ClassificationState = {
    added: [],
    removed: [],
    changed: [],
    blocked: [],
  };
  const before = mapSkus(oldIr, "old", state);
  const after = mapSkus(newIr, "new", state);

  for (const [slug, sku] of after) {
    const oldSku = before.get(slug);
    if (!oldSku) state.added.push(item("sku-added", slug, `new SKU ${slug}`));
    else classifySku(oldSku, sku, state);
  }
  for (const slug of before.keys()) {
    if (!after.has(slug))
      state.removed.push(item("sku-removed", slug, `SKU ${slug} removed`));
  }

  const oldCommon = oldIr.skus
    .map((sku) => sku.slug)
    .filter((slug) => after.has(slug));
  const newCommon = newIr.skus
    .map((sku) => sku.slug)
    .filter((slug) => before.has(slug));
  if (!same(oldCommon, newCommon)) {
    state.blocked.push(
      item("unclassified-change", "catalog", "existing SKUs were reordered"),
    );
  }
  const oldPlatforms = new Set(oldIr.skus.map((sku) => sku.platform));
  for (const platform of new Set(newIr.skus.map((sku) => sku.platform))) {
    if (!oldPlatforms.has(platform)) {
      state.added.push(
        item("platform-added", platform, `new platform ${platform}`),
      );
    }
  }

  if (oldIr.version !== newIr.version) {
    state.blocked.push(
      item("type-change", "catalog", "IR contract version changed"),
    );
  }
  if (oldIr.baseUrl !== newIr.baseUrl) {
    state.blocked.push(item("path-change", "catalog", "API base URL changed"));
  }
  for (const key of ["generatedFrom", "openapiVersion", "warnings"] as const) {
    if (!same(oldIr[key], newIr[key])) {
      state.changed.push(item("metadata", "catalog", `${key} updated`));
    }
  }
  unknownChanges(
    oldIr,
    newIr,
    [
      "version",
      "generatedFrom",
      "openapiVersion",
      "baseUrl",
      "warnings",
      "skus",
    ],
    "catalog",
    "ir",
    state,
  );

  const hasIrClassification = [
    state.added,
    state.removed,
    state.changed,
    state.blocked,
  ].some((items) => items.length > 0);
  if (!same(oldIr, newIr) && !files.irChanged) {
    state.blocked.push(
      item(
        "unclassified-change",
        "catalog",
        "IR values changed but the byte-state evidence reports no IR change",
      ),
    );
  }
  if ((files.irChanged || !same(oldIr, newIr)) && !hasIrClassification) {
    state.blocked.push(
      item(
        "unclassified-change",
        "catalog",
        "IR bytes changed without a classified change",
      ),
    );
  }
  const emittedTreeChangeExpected =
    state.added.length > 0 ||
    state.changed.some(
      (change) => change.kind === "documentation" || change.kind === "pricing",
    );
  for (const [language, changed] of [
    ["TypeScript", files.typescriptChanged],
    ["Python", files.pythonChanged],
  ] as const) {
    if (changed !== emittedTreeChangeExpected) {
      state.blocked.push(
        item(
          "unclassified-change",
          language.toLowerCase(),
          emittedTreeChangeExpected
            ? `${language} emitted tree did not change with the public SDK surface`
            : `${language} emitted tree changed without a classified cause`,
        ),
      );
    }
  }
  const canChangeFixtures = state.added.some(
    (change) => change.kind === "sku-added" || change.kind === "enum-added",
  );
  if (
    files.fixturesChanged &&
    !canChangeFixtures &&
    state.removed.length === 0 &&
    state.blocked.length === 0
  ) {
    state.blocked.push(
      item(
        "unclassified-change",
        "fixtures",
        "fixtures changed without a classified cause",
      ),
    );
  }

  const hasRemoval = state.removed.length > 0;
  const bump: BumpLevel =
    hasRemoval || state.blocked.length > 0
      ? "blocked"
      : state.added.length > 0
        ? "minor"
        : state.changed.length > 0
          ? "patch"
          : "none";
  const partial = { bump, hasRemoval, ...state };
  return { ...partial, summary: renderSummary(partial) };
}
