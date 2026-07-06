// IR extractor: reads openapi.json + catalog.json snapshots and produces the deterministic
// ir.json per SPEC.md sections 1.1-1.5. Emitters read ONLY the IR, so all normalization
// (envelope crack, defaults, open records, pagination, dash normalization, naming, pricing
// in USD) happens here.

import { readFileSync, writeFileSync } from "node:fs";
import { openapiPath, catalogPath, irOutPath } from "./paths.js";
import { normalizeDashes } from "./dashes.js";
import {
  camelCase,
  snakeCase,
  pySafe,
  pascalFromOperationId,
  tsIterName,
  pyIterName,
} from "./naming.js";
import { stableStringify } from "./serialize.js";
import type {
  Ir,
  SkuEntry,
  SchemaNode,
  ObjectNode,
  Pricing,
  Pagination,
} from "./types.js";

const CREDITS_TO_USD = 0.00001;

interface RawSchema {
  [key: string]: unknown;
}

interface CatalogEntry {
  slug: string;
  category?: string;
  perItemCredits?: number;
  perItemUnit?: string;
}

/** Load, extract, validate-shape, and return the full IR object (in-memory). */
export function buildIr(): Ir {
  const openapi = JSON.parse(readFileSync(openapiPath, "utf8"));
  const catalogRaw = JSON.parse(readFileSync(catalogPath, "utf8"));
  const catalog = indexCatalog(catalogRaw);

  const paths: Record<string, RawSchema> = openapi.paths ?? {};
  const slugs = Object.keys(paths)
    .filter((p) => p.startsWith("/v1/run/"))
    .map((p) => p.slice("/v1/run/".length));

  const skus: SkuEntry[] = slugs.map((slug) =>
    extractSku(slug, paths["/v1/run/" + slug] as RawSchema, catalog),
  );

  // Determinism: sort ascending by slug (byte order).
  skus.sort((a, b) => (a.slug < b.slug ? -1 : a.slug > b.slug ? 1 : 0));

  detectCollisions(skus);

  return {
    version: 1,
    generatedFrom: "openapi.json snapshot",
    openapiVersion: String(openapi.info?.version ?? ""),
    baseUrl: String(openapi.servers?.[0]?.url ?? "https://api.getanyapi.com"),
    skus,
  };
}

function indexCatalog(raw: unknown): Map<string, CatalogEntry> {
  const entries: CatalogEntry[] = Array.isArray(raw)
    ? (raw as CatalogEntry[])
    : ((raw as { apis?: CatalogEntry[] }).apis ?? []);
  const map = new Map<string, CatalogEntry>();
  for (const e of entries) map.set(e.slug, e);
  return map;
}

function extractSku(
  slug: string,
  pathItem: RawSchema,
  catalog: Map<string, CatalogEntry>,
): SkuEntry {
  const op = pathItem.post as RawSchema;
  const dot = slug.indexOf(".");
  const platform = slug.slice(0, dot);
  const action = slug.slice(dot + 1);

  const operationId = String(op.operationId ?? slug.replace(/[^A-Za-z0-9]/g, "_"));
  const name = normalizeDashes(String(op.summary ?? ""));
  const description = normalizeDashes(String(op.description ?? ""));

  const inputSchemaRaw = getInputSchema(op);
  const input = toSchemaNode(inputSchemaRaw);
  if (input.kind !== "object") {
    throw new Error(`SKU ${slug}: input schema is not an object (kind=${input.kind})`);
  }

  const example = extractExample(op, inputSchemaRaw);

  const dataRaw = crackEnvelope(op);
  const data = toSchemaNode(dataRaw);

  const pricing = extractPricing(op, catalog.get(slug));
  const category = normalizeDashes(catalog.get(slug)?.category ?? "");

  const pagination = detectPagination(input, data);

  const pascal = pascalFromOperationId(operationId);

  const tsIterMethod =
    pagination.paginated && pagination.itemsField !== null ? tsIterName(action) : null;
  const pyIterMethod =
    pagination.paginated && pagination.itemsField !== null ? pySafe(pyIterName(action)) : null;

  // Key order matches ir.schema.json required[] / ir.sample.json.
  return {
    slug,
    platform,
    action,
    operationId,
    name,
    category,
    description,
    pricing,
    tsNamespace: camelCase(platform),
    tsMethod: camelCase(action),
    tsIterMethod,
    pyNamespace: pySafe(snakeCase(platform)),
    pyMethod: pySafe(snakeCase(action)),
    pyIterMethod,
    inputTypeName: pascal + "Input",
    outputTypeName: pascal + "Data",
    example,
    input,
    output: { envelope: "found-data", data },
    pagination,
  };
}

function getInputSchema(op: RawSchema): RawSchema {
  const rb = op.requestBody as RawSchema | undefined;
  const content = (rb?.content as RawSchema | undefined)?.["application/json"] as
    | RawSchema
    | undefined;
  return (content?.schema as RawSchema) ?? {};
}

// SPEC 1.4.9: example is the input schema's top-level example, verbatim, or null.
// (The request body content also carries an `example`; prefer the schema-level one, then
// fall back to the content-level one.)
function extractExample(op: RawSchema, inputSchema: RawSchema): unknown {
  if ("example" in inputSchema && inputSchema.example !== undefined) {
    return inputSchema.example;
  }
  const rb = op.requestBody as RawSchema | undefined;
  const content = (rb?.content as RawSchema | undefined)?.["application/json"] as
    | RawSchema
    | undefined;
  if (content && "example" in content && content.example !== undefined) {
    return content.example;
  }
  return null;
}

// SPEC 1.4.1: crack the found/data envelope. The output object is
// { properties: { found, data: { oneOf: [{type:null}, DATA] } } }.
// Some outputs are the bare data object directly (no found/data wrapper) - use those as-is.
function crackEnvelope(op: RawSchema): RawSchema {
  const responses = op.responses as RawSchema;
  const ok = (responses["200"] as RawSchema).content as RawSchema;
  const out = ((ok["application/json"] as RawSchema).schema as RawSchema)
    .properties as RawSchema;
  const output = (out.output as RawSchema) ?? {};
  const outProps = (output.properties as RawSchema) ?? {};
  const data = outProps.data as RawSchema | undefined;
  if (data === undefined) {
    // Bare data object: the output schema itself is the data schema.
    return output;
  }
  const oneOf = data.oneOf as RawSchema[] | undefined;
  if (oneOf) {
    const branch = oneOf.find((b) => b.type !== "null");
    return branch ?? data;
  }
  return data;
}

function extractPricing(op: RawSchema, cat: CatalogEntry | undefined): Pricing {
  const info = op["x-payment-info"] as RawSchema | undefined;
  const price = (info?.price as RawSchema) ?? {};
  const mode = String(price.mode ?? "fixed");
  let priceUsd: number;
  let baseUsd: number | null;
  if (mode === "dynamic") {
    priceUsd = Number(price.max);
    baseUsd = Number(price.min);
  } else {
    priceUsd = Number(price.amount);
    baseUsd = null;
  }

  let perItemUsd: number | null = null;
  let perItemUnit: string | null = null;
  if (cat !== undefined) {
    if (typeof cat.perItemCredits === "number") {
      perItemUsd = round(cat.perItemCredits * CREDITS_TO_USD);
    }
    perItemUnit = cat.perItemUnit ?? null;
  }

  return { priceUsd, baseUsd, perItemUsd, perItemUnit };
}

// Round to a clean decimal to avoid floating point noise (credits are integers so the
// product is an exact multiple of 1e-5; round to 6 decimals for stability).
function round(n: number): number {
  return Math.round(n * 1e6) / 1e6;
}

// SPEC 1.4.10: paginated IFF input has a `cursor` string property AND the data object
// (or its single object branch) has a `nextCursor` property.
function detectPagination(input: SchemaNode, data: SchemaNode): Pagination {
  const notPaginated: Pagination = {
    paginated: false,
    itemsField: null,
    cursorInputField: null,
    nextCursorField: null,
  };
  if (input.kind !== "object") return notPaginated;
  const cursor = input.properties["cursor"];
  const hasCursor = cursor !== undefined && cursor.kind === "string";
  const dataObj = data.kind === "object" ? data : null;
  const hasNext = dataObj !== null && dataObj.properties["nextCursor"] !== undefined;
  if (!hasCursor || !hasNext || dataObj === null) return notPaginated;

  // itemsField: first array-kind property on the data object (declared order).
  let itemsField: string | null = null;
  for (const [key, node] of Object.entries(dataObj.properties)) {
    if (node.kind === "array") {
      itemsField = key;
      break;
    }
  }
  return {
    paginated: true,
    itemsField,
    cursorInputField: "cursor",
    nextCursorField: "nextCursor",
  };
}

// ---- SchemaNode normalization (SPEC 1.3, 1.4) ----

// Collapse a nullable `type: [X, "null"]` array to its single non-null member. Nullability
// is not a distinct IR kind (a nullable string is still `kind:"string"`; the runtime data
// models allow null via extra="allow"/index signatures), so we normalize the nullability
// idiom the same way SPEC 1.4.1 collapses the nullable `oneOf` envelope. A plain string type
// passes through unchanged.
function collapseType(type: unknown): unknown {
  if (Array.isArray(type)) {
    const nonNull = type.filter((t) => t !== "null");
    if (nonNull.length === 1) return nonNull[0];
    // A multi-type union that is not just [X, "null"] has no IR kind -> unknown fallback.
    return undefined;
  }
  return type;
}

function toSchemaNode(raw: RawSchema): SchemaNode {
  const type = collapseType(raw.type);
  const desc = typeof raw.description === "string" ? normalizeDashes(raw.description) : undefined;

  // Unknown fallback: no recognizable type / empty {} (SPEC 1.3 unknown, 1.4).
  if (type === undefined && raw.properties === undefined && raw.items === undefined) {
    return orderedNode({ kind: "unknown", description: desc });
  }

  switch (type) {
    case "object":
      return objectNode(raw, desc);
    case "array":
      return arrayNode(raw, desc);
    case "string":
      return stringNode(raw, desc);
    case "integer":
      return integerNode(raw, desc, "integer");
    case "number":
      return integerNode(raw, desc, "number");
    case "boolean":
      return orderedNode({
        kind: "boolean",
        description: desc,
        default: raw.default !== undefined ? raw.default : null,
      });
    case "null":
      return orderedNode({ kind: "null", description: desc });
    default:
      // Has properties but no explicit type -> treat as object; else unknown.
      if (raw.properties !== undefined) return objectNode(raw, desc);
      if (raw.items !== undefined) return arrayNode(raw, desc);
      return orderedNode({ kind: "unknown", description: desc });
  }
}

// Build a node object with keys inserted in the given order, dropping keys whose value is
// `undefined` (an absent `description` must be omitted, not emitted as null). Returns a
// SchemaNode; callers pass fields in canonical ir.schema.json key order.
function orderedNode(fields: Record<string, unknown>): SchemaNode {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(fields)) {
    if (v === undefined) continue;
    out[k] = v;
  }
  return out as unknown as SchemaNode;
}

function objectNode(raw: RawSchema, desc: string | undefined): ObjectNode {
  const propsRaw = (raw.properties as RawSchema) ?? {};
  const properties: Record<string, SchemaNode> = {};
  const mustPopulate: string[] = [];
  for (const key of Object.keys(propsRaw)) {
    const child = propsRaw[key] as RawSchema;
    if (child["x-anyapi-must-populate"] === true) mustPopulate.push(key);
    properties[key] = toSchemaNode(child);
  }
  const required = Array.isArray(raw.required) ? (raw.required as string[]) : [];
  // SPEC 1.4.5: additionalProperties:false -> closed; anything else -> open.
  const open = raw.additionalProperties !== false;

  // Key order per ir.schema.json objectNode: kind, description, properties, required, open,
  // mustPopulate.
  return orderedNode({
    kind: "object",
    description: desc,
    properties,
    required,
    open,
    mustPopulate: mustPopulate.length > 0 ? mustPopulate : undefined,
  }) as ObjectNode;
}

function arrayNode(raw: RawSchema, desc: string | undefined): SchemaNode {
  const itemsRaw = (raw.items as RawSchema) ?? {};
  // Key order per ir.schema.json arrayNode: kind, description, items, mustPopulate.
  return orderedNode({
    kind: "array",
    description: desc,
    items: toSchemaNode(itemsRaw),
    mustPopulate: raw["x-anyapi-must-populate"] === true,
  });
}

function stringNode(raw: RawSchema, desc: string | undefined): SchemaNode {
  const en = raw.enum as unknown[] | undefined;
  // Key order: kind, description, enum, default, format.
  return orderedNode({
    kind: "string",
    description: desc,
    enum: Array.isArray(en) ? en.map((v) => String(v)) : null,
    default: raw.default !== undefined ? raw.default : null,
    format: typeof raw.format === "string" ? raw.format : null,
  });
}

function integerNode(
  raw: RawSchema,
  desc: string | undefined,
  kind: "integer" | "number",
): SchemaNode {
  // Key order: kind, description, minimum, maximum, default.
  return orderedNode({
    kind,
    description: desc,
    minimum: typeof raw.minimum === "number" ? raw.minimum : null,
    maximum: typeof raw.maximum === "number" ? raw.maximum : null,
    default: raw.default !== undefined ? raw.default : null,
  });
}

// SPEC 1.5 collision policy: hard fail naming both slugs on a namespace or method collision.
function detectCollisions(skus: SkuEntry[]): void {
  const tsNs = new Map<string, string>(); // tsNamespace -> platform slug proof
  const pyNs = new Map<string, string>();
  const tsMethods = new Map<string, string>(); // `${tsNamespace}.${tsMethod}` -> slug
  const pyMethods = new Map<string, string>();

  for (const s of skus) {
    const existingTsNs = tsNs.get(s.tsNamespace);
    if (existingTsNs !== undefined && existingTsNs !== s.platform) {
      throw new Error(
        `TS namespace collision: "${s.tsNamespace}" from platforms "${existingTsNs}" and "${s.platform}"`,
      );
    }
    tsNs.set(s.tsNamespace, s.platform);

    const existingPyNs = pyNs.get(s.pyNamespace);
    if (existingPyNs !== undefined && existingPyNs !== s.platform) {
      throw new Error(
        `Python namespace collision: "${s.pyNamespace}" from platforms "${existingPyNs}" and "${s.platform}"`,
      );
    }
    pyNs.set(s.pyNamespace, s.platform);

    const tsKey = `${s.tsNamespace}.${s.tsMethod}`;
    const existingTsM = tsMethods.get(tsKey);
    if (existingTsM !== undefined) {
      throw new Error(
        `TS method collision: "${tsKey}" from slugs "${existingTsM}" and "${s.slug}"`,
      );
    }
    tsMethods.set(tsKey, s.slug);

    const pyKey = `${s.pyNamespace}.${s.pyMethod}`;
    const existingPyM = pyMethods.get(pyKey);
    if (existingPyM !== undefined) {
      throw new Error(
        `Python method collision: "${pyKey}" from slugs "${existingPyM}" and "${s.slug}"`,
      );
    }
    pyMethods.set(pyKey, s.slug);
  }
}

/**
 * Serialize the IR to a deterministic string. ir.schema.json declares
 * `additionalProperties: false` at the top level, so ir.json cannot carry an extra
 * `_generated` key without failing its own schema validation; provenance lives in the
 * `generatedFrom` field instead (JSON has no comment syntax). See serializeIr note.
 */
export function serializeIr(ir: Ir): string {
  return stableStringify(ir);
}

/** Build the IR and write generator/ir.json. Returns the serialized string. */
export function generateIr(): string {
  const ir = buildIr();
  const text = serializeIr(ir);
  writeFileSync(irOutPath, text);
  return text;
}
