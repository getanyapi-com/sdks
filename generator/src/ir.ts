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
  IrWarning,
  SkuEntry,
  SchemaNode,
  ObjectNode,
  Pricing,
  Pagination,
  Envelope,
} from "./types.js";

interface RawSchema {
  [key: string]: unknown;
}

function isRawSchema(value: unknown): value is RawSchema {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

interface CatalogEntry {
  slug: string;
  category?: string;
  provider?: unknown;
  pricing?: unknown;
}

/** Load, extract, validate-shape, and return the full IR object (in-memory). */
export function buildIr(): Ir {
  const openapi = JSON.parse(readFileSync(openapiPath, "utf8")) as RawSchema;
  const catalogRaw = JSON.parse(readFileSync(catalogPath, "utf8"));
  return buildIrFromDocuments(openapi, catalogRaw);
}

/**
 * Extract an IR from supplied documents. Production generation uses {@link buildIr}; this
 * seam lets extractor tests use small, purpose-built documents instead of mutable live SKUs.
 */
export function buildIrFromDocuments(
  openapi: RawSchema,
  catalogRaw: unknown,
): Ir {
  const catalog = indexCatalog(catalogRaw);

  const paths = isRawSchema(openapi.paths)
    ? (openapi.paths as Record<string, RawSchema>)
    : {};
  const slugs = Object.keys(paths)
    .filter((p) => p.startsWith("/v1/run/"))
    .map((p) => p.slice("/v1/run/".length));

  const warnings: IrWarning[] = [];
  const skus: SkuEntry[] = slugs.map((slug) =>
    extractSku(slug, paths["/v1/run/" + slug] as RawSchema, catalog, warnings),
  );

  // Determinism: sort ascending by slug (byte order).
  skus.sort((a, b) => (a.slug < b.slug ? -1 : a.slug > b.slug ? 1 : 0));
  warnings.sort((a, b) =>
    a.slug < b.slug
      ? -1
      : a.slug > b.slug
        ? 1
        : a.kind < b.kind
          ? -1
          : a.kind > b.kind
            ? 1
            : 0,
  );

  detectCollisions(skus);

  reportWarnings(warnings);

  const info = isRawSchema(openapi.info) ? openapi.info : {};
  const servers = Array.isArray(openapi.servers) ? openapi.servers : [];
  const firstServer = isRawSchema(servers[0]) ? servers[0] : {};

  return {
    version: 1,
    generatedFrom: "openapi.json snapshot",
    openapiVersion: String(info.version ?? ""),
    baseUrl: String(firstServer.url ?? "https://api.getanyapi.com"),
    ...(warnings.length > 0 ? { warnings } : {}),
    skus,
  };
}

// SPEC 1.2 erratum (S8): a SKU that accepts a `cursor` input but whose closed output has no
// `nextCursor` can never page. We do not change its emitted surface (the input still accepts
// cursor), but we log a diffable WARNING block at generation time so the gap is never silent.
function reportWarnings(warnings: IrWarning[]): void {
  const deadCursor = warnings.filter((w) => w.kind === "dead-cursor");
  if (deadCursor.length === 0) return;
  const lines = deadCursor.map((w) => `  - ${w.slug}: ${w.message}`).join("\n");
  // eslint-disable-next-line no-console
  console.warn(
    `WARNING: ${deadCursor.length} SKU(s) accept a cursor input but have no nextCursor output ` +
      `(cannot paginate; surface unchanged):\n${lines}`,
  );
}

function indexCatalog(raw: unknown): Map<string, CatalogEntry> {
  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
    throw new Error("catalog snapshot: expected an object envelope");
  }
  const entries = (raw as { apis?: unknown }).apis;
  if (!Array.isArray(entries)) {
    throw new Error("catalog snapshot: expected an apis array");
  }
  const map = new Map<string, CatalogEntry>();
  for (const [index, value] of entries.entries()) {
    if (typeof value !== "object" || value === null || Array.isArray(value)) {
      throw new Error(`catalog snapshot: apis[${index}] is not an object`);
    }
    const entry = value as CatalogEntry;
    if (typeof entry.slug !== "string" || entry.slug.length === 0) {
      throw new Error(`catalog snapshot: apis[${index}].slug is missing`);
    }
    map.set(entry.slug, entry);
  }
  return map;
}

function extractSku(
  slug: string,
  pathItem: RawSchema,
  catalog: Map<string, CatalogEntry>,
  warnings: IrWarning[],
): SkuEntry {
  const op = pathItem.post as RawSchema;
  const dot = slug.indexOf(".");
  const platform = slug.slice(0, dot);
  const action = slug.slice(dot + 1);

  const operationId = String(
    op.operationId ?? slug.replace(/[^A-Za-z0-9]/g, "_"),
  );
  const name = normalizeDashes(String(op.summary ?? ""));
  const description = stripGeneratedPrice(
    normalizeDashes(String(op.description ?? "")),
  );

  const inputSchemaRaw = getInputSchema(op);
  const input = toSchemaNode(inputSchemaRaw);
  if (input.kind !== "object") {
    throw new Error(
      `SKU ${slug}: input schema is not an object (kind=${input.kind})`,
    );
  }

  const example = extractExample(op, inputSchemaRaw);

  const cracked = crackEnvelope(op);
  const data = toSchemaNode(cracked.data);
  const envelope: Envelope = cracked.bare ? "bare" : "found-data";

  const pricing = extractCatalogPricing(catalog.get(slug), slug);
  const category = normalizeDashes(catalog.get(slug)?.category ?? "");

  const pagination = detectPagination(input, data);

  // S8: dead-cursor detection. Input accepts a `cursor` property but our pagination rules
  // do not wire it (no generated iterator): either the output has no `nextCursor`, or the
  // cursor is not a string (SPEC 1.4.10 requires a string cursor). The emitted surface is
  // unchanged (the input still accepts `cursor`); the gap is recorded as a diffable warning
  // so it is never silent.
  if (input.kind === "object") {
    const hasCursorInput = input.properties["cursor"] !== undefined;
    if (hasCursorInput && !pagination.paginated) {
      warnings.push({
        kind: "dead-cursor",
        slug,
        message:
          "accepts a cursor input but our pagination rules do not wire it (no string cursor + nextCursor pair)",
      });
    }
  }

  const pascal = pascalFromOperationId(operationId);

  const tsIterMethod =
    pagination.paginated && pagination.itemsField !== null
      ? tsIterName(action)
      : null;
  const pyIterMethod =
    pagination.paginated && pagination.itemsField !== null
      ? pySafe(pyIterName(action))
      : null;

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
    output: { envelope, data },
    pagination,
  };
}

/**
 * OpenAPI operation prose may append rendered payment metadata. Generated SDK docs own
 * their price line and derive it from discovery, so discard that copy before it reaches IR.
 */
export function stripGeneratedPrice(description: string): string {
  return description.replace(/\s*\*\*Price:\*\*[\s\S]*$/, "").trim();
}

function getInputSchema(op: RawSchema): RawSchema {
  const rb = op.requestBody as RawSchema | undefined;
  const content = (rb?.content as RawSchema | undefined)?.[
    "application/json"
  ] as RawSchema | undefined;
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
  const content = (rb?.content as RawSchema | undefined)?.[
    "application/json"
  ] as RawSchema | undefined;
  if (content && "example" in content && content.example !== undefined) {
    return content.example;
  }
  return null;
}

// SPEC 1.4.1 (+ 1.2 bare erratum): crack the run envelope. A found-data output is
// { properties: { found, data: { oneOf: [{type:null}, DATA] } } } and yields DATA (the
// non-null branch), bare:false. A BARE output has no found/data wrapper - the `output`
// schema IS the data object directly (required does not contain found+data); yield it as-is
// with bare:true so the runtime knows there is no discriminated envelope to unwrap.
export function crackEnvelope(op: RawSchema): {
  data: RawSchema;
  bare: boolean;
} {
  const responses = op.responses as RawSchema;
  const ok = (responses["200"] as RawSchema).content as RawSchema;
  const out = ((ok["application/json"] as RawSchema).schema as RawSchema)
    .properties as RawSchema;
  const output = (out.output as RawSchema) ?? {};
  const outProps = (output.properties as RawSchema) ?? {};
  const data = outProps.data as RawSchema | undefined;
  const required = Array.isArray(output.required)
    ? (output.required as string[])
    : [];
  const isFoundData =
    data !== undefined &&
    required.includes("found") &&
    required.includes("data");
  if (!isFoundData) {
    // Bare data object: the output schema itself is the data schema.
    return { data: output, bare: true };
  }
  const oneOf = data.oneOf as RawSchema[] | undefined;
  if (oneOf) {
    const branch = oneOf.find((b) => b.type !== "null");
    return { data: branch ?? data, bare: false };
  }
  return { data, bare: false };
}

/**
 * Parse the complete pricing.from first runtime-lane offer from discovery. This is exported
 * so malformed and flat/linear cases can be tested with synthetic fixtures instead of
 * pinning generator tests to mutable live catalog rows.
 */
export function extractCatalogPricing(value: unknown, slug: string): Pricing {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    throw new Error(`SKU ${slug}: missing catalog discovery entry`);
  }
  const cat = value as CatalogEntry;
  if (cat.provider !== "AnyAPI") {
    throw new Error(`SKU ${slug}: discovery provider must be AnyAPI`);
  }
  if (
    typeof cat.pricing !== "object" ||
    cat.pricing === null ||
    Array.isArray(cat.pricing)
  ) {
    throw new Error(`SKU ${slug}: missing discovery pricing`);
  }
  const pricing = cat.pricing as Record<string, unknown>;
  requireExactFields(
    pricing,
    ["from", "failoverMaxUsd"],
    "discovery pricing",
    slug,
  );
  strictUsd(
    pricing["failoverMaxUsd"],
    `SKU ${slug}: pricing.failoverMaxUsd`,
  );
  const from = pricing["from"];
  if (typeof from !== "object" || from === null || Array.isArray(from)) {
    throw new Error(`SKU ${slug}: missing discovery pricing.from offer`);
  }
  const offer = from as Record<string, unknown>;
  const model = offer["model"];
  const unit = offer["unit"];
  if (model === "flat") {
    requireExactFields(
      offer,
      ["model", "unit", "maxUsd"],
      "discovery pricing.from",
      slug,
    );
    if (unit !== "request") {
      throw new Error(`SKU ${slug}: malformed flat discovery offer`);
    }
    const maxUsd = strictUsd(
      offer["maxUsd"],
      `SKU ${slug}: pricing.from.maxUsd`,
    );
    return {
      priceUsd: maxUsd,
      baseUsd: null,
      perItemUsd: null,
      perItemUnit: null,
    };
  }
  if (model === "linear") {
    requireExactFields(
      offer,
      ["model", "unit", "baseUsd", "perUnitUsd", "maxUsd"],
      "discovery pricing.from",
      slug,
    );
    if (typeof unit !== "string" || unit.length === 0) {
      throw new Error(
        `SKU ${slug}: linear discovery offer requires a billable unit`,
      );
    }
    const baseUsd = strictUsd(
      offer["baseUsd"],
      `SKU ${slug}: pricing.from.baseUsd`,
    );
    const perItemUsd = strictUsd(
      offer["perUnitUsd"],
      `SKU ${slug}: pricing.from.perUnitUsd`,
    );
    const maxUsd = strictUsd(
      offer["maxUsd"],
      `SKU ${slug}: pricing.from.maxUsd`,
    );
    return { priceUsd: maxUsd, baseUsd, perItemUsd, perItemUnit: unit };
  }
  throw new Error(
    `SKU ${slug}: unknown discovery pricing model ${String(model)}`,
  );
}

function strictUsd(value: unknown, path: string): number {
  if (typeof value !== "number" || !Number.isFinite(value) || value < 0) {
    throw new Error(`${path} must be a non-negative number`);
  }
  return value;
}

function requireExactFields(
  value: Record<string, unknown>,
  fields: readonly string[],
  path: string,
  slug: string,
): void {
  const expected = new Set(fields);
  for (const key of Object.keys(value)) {
    if (!expected.has(key)) {
      throw new Error(`SKU ${slug}: unexpected ${path} field ${key}`);
    }
  }
  for (const field of fields) {
    if (!Object.prototype.hasOwnProperty.call(value, field)) {
      throw new Error(`SKU ${slug}: missing ${path}.${field}`);
    }
  }
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
  const hasNext =
    dataObj !== null && dataObj.properties["nextCursor"] !== undefined;
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

export function toSchemaNode(raw: RawSchema): SchemaNode {
  const type = collapseType(raw.type);
  const desc =
    typeof raw.description === "string"
      ? normalizeDashes(raw.description)
      : undefined;

  // Unknown fallback: no recognizable type / empty {} (SPEC 1.3 unknown, 1.4).
  if (
    type === undefined &&
    raw.properties === undefined &&
    raw.items === undefined
  ) {
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
  const required = Array.isArray(raw.required)
    ? (raw.required as string[])
    : [];
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
