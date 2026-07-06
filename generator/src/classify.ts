// IR diff classifier. Compares an OLD ir.json against a NEW one and decides the semantic
// version bump for a catalog refresh, plus a human-readable change summary used as the
// commit body and GitHub Release notes.
//
// Rules (per the release plan):
//   - SKU added, or a new field / enum member / new platform  -> MINOR (additive surface).
//   - SKU removed, or a field / enum member removed           -> PATCH, but WARN loudly
//     (removals are deferred to a scheduled MAJOR; we never auto-bump major here).
//   - Everything else (descriptions, pricing, docs, pagination flips, reorders) -> PATCH.
//   - No meaningful change (only provenance/openapiVersion churn) -> NONE (skip commit).
//
// The classifier reads ONLY the two IR documents; it does not touch the network or emitted
// trees. It is pure so it can be unit-tested (classifyIr) and script-driven (via classify-cli).

import type { IR, SchemaNode, SkuEntry, ObjectNode } from "./ir-types.js";

export type BumpLevel = "none" | "patch" | "minor";

export interface ChangeItem {
  /** "sku-added" | "sku-removed" | "field-added" | "field-removed" | "enum-added" |
   *  "enum-removed" | "platform-added" | "pricing" | "description" | "pagination" | "other" */
  kind: string;
  slug: string;
  detail: string;
}

export interface Classification {
  bump: BumpLevel;
  /** true when any removal (SKU or field or enum member) was seen. */
  hasRemoval: boolean;
  added: ChangeItem[];
  removed: ChangeItem[];
  changed: ChangeItem[];
  /** Rendered multi-line summary (commit body / release notes). */
  summary: string;
}

function skuMap(ir: IR): Map<string, SkuEntry> {
  const m = new Map<string, SkuEntry>();
  for (const s of ir.skus) m.set(s.slug, s);
  return m;
}

// ---------------------------------------------------------------------------------------
// Schema walk: collect the set of dotted field paths and per-string-node enum members, so
// added / removed fields and enum members are detectable across a nested input/output tree.
// ---------------------------------------------------------------------------------------

interface SchemaSurface {
  /** dotted field paths present in the schema (object properties + array item descent). */
  fields: Set<string>;
  /** field-path -> set of enum member strings on that node. */
  enums: Map<string, Set<string>>;
}

function walkSchema(node: SchemaNode, path: string, surface: SchemaSurface): void {
  switch (node.kind) {
    case "object": {
      const obj = node as ObjectNode;
      for (const [key, child] of Object.entries(obj.properties)) {
        const childPath = path ? `${path}.${key}` : key;
        surface.fields.add(childPath);
        walkSchema(child, childPath, surface);
      }
      break;
    }
    case "array":
      walkSchema(node.items, `${path}[]`, surface);
      break;
    case "string":
      if (node.enum && node.enum.length > 0) {
        surface.enums.set(path, new Set(node.enum));
      }
      break;
    default:
      break;
  }
}

function surfaceOf(sku: SkuEntry): { input: SchemaSurface; output: SchemaSurface } {
  const input: SchemaSurface = { fields: new Set(), enums: new Map() };
  const output: SchemaSurface = { fields: new Set(), enums: new Map() };
  walkSchema(sku.input, "", input);
  walkSchema(sku.output.data, "", output);
  return { input, output };
}

function diffSurface(
  side: "input" | "output",
  slug: string,
  before: SchemaSurface,
  after: SchemaSurface,
  added: ChangeItem[],
  removed: ChangeItem[],
): void {
  for (const f of after.fields) {
    if (!before.fields.has(f)) {
      added.push({ kind: "field-added", slug, detail: `${side} field ${f}` });
    }
  }
  for (const f of before.fields) {
    if (!after.fields.has(f)) {
      removed.push({ kind: "field-removed", slug, detail: `${side} field ${f}` });
    }
  }
  for (const [path, members] of after.enums) {
    const prev = before.enums.get(path);
    if (!prev) continue; // a brand-new enum node is already covered by field-added
    for (const m of members) {
      if (!prev.has(m)) {
        added.push({ kind: "enum-added", slug, detail: `${side} ${path} enum "${m}"` });
      }
    }
  }
  for (const [path, members] of before.enums) {
    const next = after.enums.get(path);
    if (!next) continue; // enum node fully removed -> covered by field-removed
    for (const m of members) {
      if (!next.has(m)) {
        removed.push({ kind: "enum-removed", slug, detail: `${side} ${path} enum "${m}"` });
      }
    }
  }
}

function pricingChanged(a: SkuEntry, b: SkuEntry): boolean {
  return (
    a.pricing.priceUsd !== b.pricing.priceUsd ||
    a.pricing.baseUsd !== b.pricing.baseUsd ||
    a.pricing.perItemUsd !== b.pricing.perItemUsd ||
    a.pricing.perItemUnit !== b.pricing.perItemUnit
  );
}

// ---------------------------------------------------------------------------------------

export function classifyIr(oldIr: IR, newIr: IR): Classification {
  const before = skuMap(oldIr);
  const after = skuMap(newIr);

  const added: ChangeItem[] = [];
  const removed: ChangeItem[] = [];
  const changed: ChangeItem[] = [];

  const oldPlatforms = new Set(oldIr.skus.map((s) => s.platform));
  const newPlatforms = new Set(newIr.skus.map((s) => s.platform));
  for (const p of newPlatforms) {
    if (!oldPlatforms.has(p)) {
      added.push({ kind: "platform-added", slug: p, detail: `new platform ${p}` });
    }
  }

  // Added / removed SKUs.
  for (const slug of after.keys()) {
    if (!before.has(slug)) {
      added.push({ kind: "sku-added", slug, detail: `new SKU ${slug}` });
    }
  }
  for (const slug of before.keys()) {
    if (!after.has(slug)) {
      removed.push({ kind: "sku-removed", slug, detail: `SKU ${slug} removed` });
    }
  }

  // Field / enum / pricing / description diff on SKUs present in both.
  for (const [slug, newSku] of after) {
    const oldSku = before.get(slug);
    if (!oldSku) continue;
    const a = surfaceOf(oldSku);
    const b = surfaceOf(newSku);
    diffSurface("input", slug, a.input, b.input, added, removed);
    diffSurface("output", slug, a.output, b.output, added, removed);

    if (pricingChanged(oldSku, newSku)) {
      changed.push({
        kind: "pricing",
        slug,
        detail: `price ${oldSku.pricing.priceUsd} -> ${newSku.pricing.priceUsd} USD`,
      });
    }
    if (oldSku.description !== newSku.description || oldSku.name !== newSku.name) {
      changed.push({ kind: "description", slug, detail: "name/description text updated" });
    }
    if (oldSku.pagination.paginated !== newSku.pagination.paginated) {
      changed.push({
        kind: "pagination",
        slug,
        detail: `paginated ${oldSku.pagination.paginated} -> ${newSku.pagination.paginated}`,
      });
    }
  }

  const hasRemoval = removed.length > 0;
  let bump: BumpLevel;
  if (added.length > 0) {
    bump = "minor";
  } else if (removed.length > 0 || changed.length > 0) {
    bump = "patch";
  } else {
    bump = "none";
  }

  return {
    bump,
    hasRemoval,
    added,
    removed,
    changed,
    summary: renderSummary({ bump, hasRemoval, added, removed, changed }),
  };
}

function bullets(items: ChangeItem[], limit = 40): string[] {
  const lines = items.map((i) => `- ${i.detail}`);
  if (lines.length <= limit) return lines;
  return [...lines.slice(0, limit), `- ...and ${lines.length - limit} more`];
}

function renderSummary(c: Omit<Classification, "summary">): string {
  const parts: string[] = [];
  parts.push(`Catalog refresh (${c.bump} bump).`);
  parts.push("");

  if (c.added.length > 0) {
    parts.push(`## Added (${c.added.length})`);
    parts.push(...bullets(c.added));
    parts.push("");
  }
  if (c.changed.length > 0) {
    parts.push(`## Changed (${c.changed.length})`);
    parts.push(...bullets(c.changed));
    parts.push("");
  }
  if (c.removed.length > 0) {
    parts.push("## WARNING: removals detected");
    parts.push(
      "These narrow the SDK surface. Per the release plan removals ship as a PATCH here and",
      "are deferred to a scheduled MAJOR. Review before the next major release.",
      "",
    );
    parts.push(...bullets(c.removed));
    parts.push("");
  }
  if (c.added.length === 0 && c.changed.length === 0 && c.removed.length === 0) {
    parts.push("No SKU-surface changes (provenance / snapshot metadata only).");
  }
  return parts.join("\n").trimEnd() + "\n";
}
