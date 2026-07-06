// TypeScript code emitter (SPEC.md sections 2.4, 2.5, 1.5). Pure module: `emitTypescript`
// takes an IR and an output directory and returns a FileMap (relativePath -> content); it
// does NOT touch the filesystem. `writeFileMap` is the tiny two-line integration seam the
// gen-ir CLI calls. All emitted text is run through prettier (deterministic, byte-stable).
//
// The emitter reads ONLY ir.json-shaped data (never openapi.json). It targets the frozen
// handwritten core surface built by the ts-runtime agent under ../core/:
//   - types.ts:      RunResult, Output, RequestOptions, Paginator, ClientCore
//   - client.ts:     the AnyAPI base class (run/balance/me/catalog/describe) + ClientCore
//   - pagination.ts: paginate<Item, Data>(core, slug, input, itemsField, options)
// Import paths are relative with the ".js" extension (ESM, moduleResolution: Bundler).
//
// No em/en dashes anywhere (SPEC hard rule 0.3). Named exports only (0.4). Every emitted
// file leads with the generated header (0.5).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import * as prettier from "prettier";

import {
  docComment,
  doubleQuote,
  GENERATED_HEADER_TS,
  itemTypeName,
  literalUnion,
  normalizeDashes,
  objectKey,
  pascalCase,
  priceLine,
  titleCase,
} from "./emit-shared.js";
import type {
  ArrayNode,
  FileMap,
  IR,
  ObjectNode,
  SchemaNode,
  SkuEntry,
} from "./ir-types.js";

const OUT_ROOT = "packages/typescript/src/generated";

// Prettier options: repo default config (no .prettierrc present) plus the TS parser. Kept
// explicit so two runs on any machine are byte-identical.
const PRETTIER_OPTIONS: prettier.Options = { parser: "typescript" };

/** Format one emitted TS source string with prettier. Deterministic. */
async function format(source: string): Promise<string> {
  return prettier.format(source, PRETTIER_OPTIONS);
}

// --------------------------------------------------------------------------------------
// Type rendering
// --------------------------------------------------------------------------------------

/**
 * A nested named interface discovered while rendering a data payload. We hoist every open
 * or closed inner object that sits inside an array (an "item record") to a top-level named
 * interface so the generated surface has readable names (SPEC 2.5 `FacebookAdsSearchAd`).
 * Non-array-nested objects are rendered inline.
 */
interface NestedType {
  name: string;
  source: string;
}

/**
 * Render a SchemaNode as an inline TS type expression. Objects nested directly inside an
 * ARRAY get hoisted to a named interface (via `collect`) and referenced by name; other
 * objects render as inline `{ ... }` literals. `path` seeds hoisted-type names for arrays
 * whose element is an object.
 */
function renderType(
  node: SchemaNode,
  operationId: string,
  arrayPropName: string | null,
  collect: NestedType[],
): string {
  switch (node.kind) {
    case "string":
      return node.enum && node.enum.length > 0
        ? literalUnion(node.enum)
        : "string";
    case "integer":
    case "number":
      return "number";
    case "boolean":
      return "boolean";
    case "null":
      return "null";
    case "unknown":
      return "unknown";
    case "array":
      return renderArrayType(node, operationId, arrayPropName, collect);
    case "object":
      return renderInlineObject(node, operationId, collect);
  }
}

/**
 * Array element type. When the element is an object, hoist it to a named item interface
 * (`itemTypeName(operationId, arrayPropName)`) and reference `Name[]`; otherwise render the
 * element inline and append `[]`. `arrayPropName` is the name of the property that HOLDS
 * this array (drives the item-type suffix); null (a nested/anonymous array) falls back to
 * "Item".
 */
function renderArrayType(
  node: ArrayNode,
  operationId: string,
  arrayPropName: string | null,
  collect: NestedType[],
): string {
  const items = node.items;
  if (items.kind === "object") {
    const name = itemTypeName(operationId, arrayPropName ?? "item");
    hoistItemInterface(name, items, operationId, collect);
    return `${name}[]`;
  }
  const inner = renderType(items, operationId, null, collect);
  // Parenthesize union element types so the `[]` binds correctly.
  return /[ |]/.test(inner) ? `(${inner})[]` : `${inner}[]`;
}

/** Render an object as an inline `{ key: Type; ... }` literal (used for non-hoisted objects). */
function renderInlineObject(
  node: ObjectNode,
  operationId: string,
  collect: NestedType[],
): string {
  const members = renderObjectMembers(node, operationId, collect, false);
  return `{\n${members}\n}`;
}

/**
 * Hoist an array-element object to a top-level named interface, once per name. Deduped so a
 * repeated item shape (same name) is emitted a single time. Recurses so nested arrays of
 * objects inside the item are hoisted too.
 */
function hoistItemInterface(
  name: string,
  node: ObjectNode,
  operationId: string,
  collect: NestedType[],
): void {
  if (collect.some((t) => t.name === name)) return;
  // Reserve the name first (push a placeholder) so a self-similar nested shape does not
  // recurse forever; then fill in the real body.
  const entry: NestedType = { name, source: "" };
  collect.push(entry);
  const members = renderObjectMembers(node, operationId, collect, false);
  const index = node.open ? "\n  [extra: string]: unknown;" : "";
  const doc = node.description
    ? docComment([normalizeDashes(node.description)])
    : "";
  entry.source = `${doc}export interface ${name} {\n${members}${index}\n}`;
}

/**
 * Render the members of an object node. `topLevelInput` toggles input-optionality rules
 * (defaults / required per SPEC 1.4.3); for output data every declared property is emitted
 * as-is (required-ness is informational there, all output fields are present-or-typed).
 */
function renderObjectMembers(
  node: ObjectNode,
  operationId: string,
  collect: NestedType[],
  topLevelInput: boolean,
): string {
  const required = new Set(node.required);
  const mustPopulate = new Set(node.mustPopulate ?? []);
  const lines: string[] = [];
  for (const [key, child] of Object.entries(node.properties)) {
    const doc = propDocComment(child, key, mustPopulate.has(key), 2);
    const optional = topLevelInput
      ? isInputOptional(child, required.has(key))
      : !required.has(key);
    const type = renderType(child, operationId, key, collect);
    if (doc) lines.push(doc.trimEnd());
    lines.push(`  ${objectKey(key)}${optional ? "?" : ""}: ${type};`);
  }
  return lines.join("\n");
}

/**
 * Input optionality (SPEC 1.4.3): a property WITH a default is optional regardless of the
 * required array (the server fills it); a property in `required` and WITHOUT a default is
 * required; everything else is optional.
 */
function isInputOptional(node: SchemaNode, inRequired: boolean): boolean {
  const hasDefault =
    "default" in node &&
    (node as { default?: unknown }).default !== null &&
    (node as { default?: unknown }).default !== undefined;
  if (hasDefault) return true;
  return !inRequired;
}

// --------------------------------------------------------------------------------------
// Doc comments for properties
// --------------------------------------------------------------------------------------

/**
 * Build the doc-comment lines for a single property from its SchemaNode: description,
 * bounds (min/max), format, enum choices, default, and the must-populate note (SPEC 1.4).
 * Returns "" when there is nothing to document (no comment emitted).
 */
function propDocComment(
  node: SchemaNode,
  key: string,
  mustPopulate: boolean,
  indent: number,
): string {
  const lines: string[] = [];
  if (node.description) lines.push(normalizeDashes(node.description));

  if (node.kind === "integer" || node.kind === "number") {
    const bounds: string[] = [];
    if (node.minimum !== null && node.minimum !== undefined) {
      bounds.push(`minimum ${node.minimum}`);
    }
    if (node.maximum !== null && node.maximum !== undefined) {
      bounds.push(`maximum ${node.maximum}`);
    }
    if (bounds.length > 0) lines.push(`Range: ${bounds.join(", ")}.`);
  }

  if (node.kind === "string" && node.format) {
    lines.push(`Format: ${node.format}.`);
  }

  if (node.kind === "string" && node.enum && node.enum.length > 0) {
    lines.push(`One of: ${node.enum.join(", ")}.`);
  }

  const def = defaultValue(node);
  if (def !== undefined) {
    lines.push(`Default: ${def}.`);
  }

  if (mustPopulate) {
    lines.push("Populated whenever the provider returns data.");
  }

  if (lines.length === 0) return "";
  return docComment(lines, indent);
}

/** Return a printable default value string, or undefined when there is no default. */
function defaultValue(node: SchemaNode): string | undefined {
  if (!("default" in node)) return undefined;
  const raw = (node as { default?: unknown }).default;
  if (raw === null || raw === undefined) return undefined;
  if (typeof raw === "string") return raw;
  return JSON.stringify(raw);
}

// --------------------------------------------------------------------------------------
// Per-SKU emission
// --------------------------------------------------------------------------------------

/** The set of core type names a platform file may reference, for a single import line. */
interface CoreImports {
  runResult: boolean;
  requestOptions: boolean;
  paginator: boolean;
  clientCore: boolean;
  paginate: boolean;
}

/**
 * Emit the input interface, hoisted item interfaces, and the data type alias for one SKU.
 * Returns the concatenated type-declaration source (no namespace class) plus the collected
 * nested types already inlined in order (item interfaces first, then input, then data).
 */
function emitSkuTypes(sku: SkuEntry): string {
  const parts: string[] = [];

  // Input interface. Input schema is always an object in this catalog; guard anyway.
  const inputCollect: NestedType[] = [];
  if (sku.input.kind === "object") {
    const members = renderObjectMembers(
      sku.input,
      sku.operationId,
      inputCollect,
      true,
    );
    const index = sku.input.open ? "\n  [extra: string]: unknown;" : "";
    const inputDoc = docComment([`Input for ${sku.name} (${sku.slug}).`]);
    // Any nested item interfaces discovered in the input come first.
    for (const t of inputCollect) parts.push(t.source);
    parts.push(
      `${inputDoc}export interface ${sku.inputTypeName} {\n${members}${index}\n}`,
    );
  } else {
    parts.push(
      `export type ${sku.inputTypeName} = ${renderType(
        sku.input,
        sku.operationId,
        null,
        inputCollect,
      )};`,
    );
  }

  // Data payload type. Hoist item interfaces first, then the data type itself.
  const dataCollect: NestedType[] = [];
  const data = sku.output.data;
  if (data.kind === "object") {
    const members = renderObjectMembers(
      data,
      sku.operationId,
      dataCollect,
      false,
    );
    const index = data.open ? "\n  [extra: string]: unknown;" : "";
    const dataDoc = docComment([`The \`data\` payload of ${sku.name} (${sku.slug}).`]);
    for (const t of dataCollect) parts.push(t.source);
    parts.push(
      `${dataDoc}export interface ${sku.outputTypeName} {\n${members}${index}\n}`,
    );
  } else {
    const rendered = renderType(data, sku.operationId, null, dataCollect);
    for (const t of dataCollect) parts.push(t.source);
    parts.push(`export type ${sku.outputTypeName} = ${rendered};`);
  }

  return parts.join("\n\n");
}

/** Build the TSDoc for a generated namespace method (SPEC 2.4). */
function methodDoc(sku: SkuEntry): string {
  const lines: string[] = [sku.name, ""];
  if (sku.description) {
    lines.push(normalizeDashes(sku.description), "");
  }
  lines.push(priceLine(sku.pricing));
  const example = exampleCall(sku);
  if (example) {
    lines.push("", "@example", example);
  }
  return docComment(lines, 2);
}

/**
 * The `@example` line for a method: `const res = await client.<ns>.<method>({...});`
 * The input object is JSON.stringify'd (double quotes) per SPEC 2.4. Returns "" when the
 * SKU has no example.
 */
function exampleCall(sku: SkuEntry): string {
  if (sku.example === null || sku.example === undefined) return "";
  const input = JSON.stringify(sku.example);
  return `const res = await client.${sku.tsNamespace}.${sku.tsMethod}(${input});`;
}

/** Emit one namespace method (the run call) plus, when paginated, its iterator method. */
function emitMethods(sku: SkuEntry): string {
  const doc = methodDoc(sku);
  const run =
    `${doc}` +
    `  ${sku.tsMethod}(\n` +
    `    input: ${sku.inputTypeName},\n` +
    `    options?: RequestOptions,\n` +
    `  ): Promise<RunResult<${sku.outputTypeName}>> {\n` +
    `    return this._core.run(${doubleQuote(sku.slug)}, input, options);\n` +
    `  }`;

  const iter = emitIterator(sku);
  return iter ? `${run}\n\n${iter}` : run;
}

/**
 * Emit the paginated iterator method (SPEC 2.5), only when paginated AND itemsField is
 * non-null (and tsIterMethod is set). Returns "" otherwise. The item type is the hoisted
 * item interface for the itemsField array.
 */
function emitIterator(sku: SkuEntry): string {
  if (!sku.pagination.paginated) return "";
  if (sku.pagination.itemsField === null) return "";
  if (sku.tsIterMethod === null) return "";

  const itemsField = sku.pagination.itemsField;
  const itemType = itemTypeName(sku.operationId, itemsField);
  const doc = docComment(
    [
      `Iterate every result of ${sku.name} across pages.`,
      "",
      "Yields items directly; call `.pages()` on the return value to walk whole",
      "RunResult pages instead (each carries its own costUsd).",
    ],
    2,
  );
  return (
    `${doc}` +
    `  ${sku.tsIterMethod}(\n` +
    `    input: ${sku.inputTypeName},\n` +
    `    options?: RequestOptions,\n` +
    `  ): Paginator<${itemType}, ${sku.outputTypeName}> {\n` +
    `    return paginate<${itemType}, ${sku.outputTypeName}>(\n` +
    `      this._core,\n` +
    `      ${doubleQuote(sku.slug)},\n` +
    `      input,\n` +
    `      ${doubleQuote(itemsField)},\n` +
    `      options,\n` +
    `    );\n` +
    `  }`
  );
}

// --------------------------------------------------------------------------------------
// Platform files
// --------------------------------------------------------------------------------------

/** Group SKUs by platform (file), each group sorted ascending by slug. */
function groupByPlatform(skus: SkuEntry[]): Map<string, SkuEntry[]> {
  const groups = new Map<string, SkuEntry[]>();
  for (const sku of skus) {
    const list = groups.get(sku.platform) ?? [];
    list.push(sku);
    groups.set(sku.platform, list);
  }
  for (const list of groups.values()) {
    list.sort((a, b) => (a.slug < b.slug ? -1 : a.slug > b.slug ? 1 : 0));
  }
  // Return in platform-sorted order for determinism.
  return new Map([...groups.entries()].sort((a, b) => (a[0] < b[0] ? -1 : 1)));
}

/** The namespace class name for a platform, e.g. platform "amazon" -> "AmazonNamespace". */
function namespaceClassName(platform: string): string {
  return `${pascalCase(platform)}Namespace`;
}

/** Which core symbols a platform group needs, so the import line is minimal + stable. */
function coreImportsFor(skus: SkuEntry[]): CoreImports {
  const hasIter = skus.some(
    (s) => s.pagination.paginated && s.pagination.itemsField !== null && s.tsIterMethod,
  );
  return {
    runResult: true,
    requestOptions: true,
    clientCore: true,
    paginator: hasIter,
    paginate: hasIter,
  };
}

/**
 * Render the core type + helper import block for a platform file. Platform files live at
 * `generated/platforms/<platform>.ts`, so the path to the handwritten core is `../../core`.
 */
function coreImportBlock(imports: CoreImports): string {
  const typeNames: string[] = [];
  if (imports.clientCore) typeNames.push("ClientCore");
  if (imports.requestOptions) typeNames.push("RequestOptions");
  if (imports.runResult) typeNames.push("RunResult");
  if (imports.paginator) typeNames.push("Paginator");
  typeNames.sort();

  const lines: string[] = [];
  lines.push(`import type { ${typeNames.join(", ")} } from "../../core/types.js";`);
  if (imports.paginate) {
    lines.push(`import { paginate } from "../../core/pagination.js";`);
  }
  return lines.join("\n");
}

/** Emit a full `platforms/<platform>.ts` file source (unformatted). */
function emitPlatformFile(platform: string, skus: SkuEntry[]): string {
  const imports = coreImportsFor(skus);
  const className = namespaceClassName(platform);

  const typeBlocks = skus.map(emitSkuTypes).join("\n\n");
  const methodBlocks = skus.map(emitMethods).join("\n\n");

  const classDoc = docComment([
    `Typed methods for the ${platform} platform. Attached to the AnyAPI client as`,
    `\`client.${skus[0]!.tsNamespace}\`.`,
  ]);

  const classSource =
    `${classDoc}export class ${className} {\n` +
    `  constructor(private readonly _core: ClientCore) {}\n\n` +
    `${methodBlocks}\n` +
    `}`;

  return [
    GENERATED_HEADER_TS.trimEnd(),
    coreImportBlock(imports),
    typeBlocks,
    classSource,
  ].join("\n\n");
}

// --------------------------------------------------------------------------------------
// sku-map.ts, client.ts, index.ts
// --------------------------------------------------------------------------------------

/** Emit `sku-map.ts`: the slug -> {input, data} type map powering `client.run` typing. */
function emitSkuMap(skus: SkuEntry[]): string {
  // Group type imports by platform file for a stable import block.
  const byPlatform = groupByPlatform(skus);
  const importLines: string[] = [];
  for (const [platform, list] of byPlatform) {
    const names: string[] = [];
    for (const sku of list) {
      names.push(sku.inputTypeName, sku.outputTypeName);
    }
    names.sort();
    importLines.push(
      `import type { ${names.join(", ")} } from "./platforms/${platform}.js";`,
    );
  }

  const sorted = [...skus].sort((a, b) => (a.slug < b.slug ? -1 : 1));
  const entries = sorted
    .map(
      (s) =>
        `  ${objectKey(s.slug)}: { input: ${s.inputTypeName}; data: ${s.outputTypeName} };`,
    )
    .join("\n");

  const doc = docComment([
    "Maps every SKU slug literal to its input and data payload types. Powers the generic",
    "`client.run(slug, input)` overload so the compiler infers the right shapes by slug.",
  ]);

  return [
    GENERATED_HEADER_TS.trimEnd(),
    importLines.join("\n"),
    `${doc}export interface SkuMap {\n${entries}\n}`,
  ].join("\n\n");
}

/** Emit `client.ts`: the AnyAPI class attaching every namespace as a lazy getter. */
function emitClient(skus: SkuEntry[]): string {
  const byPlatform = groupByPlatform(skus);

  const nsImports: string[] = [];
  for (const [platform] of byPlatform) {
    nsImports.push(
      `import { ${namespaceClassName(platform)} } from "./platforms/${platform}.js";`,
    );
  }

  const getters: string[] = [];
  for (const [platform, list] of byPlatform) {
    const className = namespaceClassName(platform);
    const getter = list[0]!.tsNamespace;
    const doc = docComment(
      [`Typed methods for the ${platform} platform.`],
      2,
    );
    getters.push(
      `${doc}` +
        `  get ${getter}(): ${className} {\n` +
        `    return (this._namespaces[${doubleQuote(getter)}] ??= new ${className}(\n` +
        `      this._core,\n` +
        `    )) as ${className};\n` +
        `  }`,
    );
  }

  const classDoc = docComment([
    "The AnyAPI client. Extends the handwritten core base (run/balance/me/catalog/",
    "describe) and attaches every platform namespace as a lazily instantiated getter.",
    "",
    'import { AnyAPI } from "@anyapi/sdk";',
  ]);

  const body =
    `${classDoc}export class AnyAPI extends AnyAPIBase {\n` +
    `  private readonly _namespaces: Record<string, unknown> = {};\n\n` +
    `${getters.join("\n\n")}\n` +
    `}`;

  return [
    GENERATED_HEADER_TS.trimEnd(),
    `import { AnyAPI as AnyAPIBase } from "../core/client.js";`,
    `import type { ClientCore } from "../core/types.js";`,
    nsImports.join("\n"),
    body,
  ].join("\n\n");
}

/**
 * Emit the generated `index.ts` barrel: re-export the generated client, sku-map, and each
 * platform file's exports, plus a re-export of the core public surface so the package
 * `src/index.ts` can re-export from here alone (SPEC deliverable 4). Named exports only.
 */
function emitIndex(skus: SkuEntry[]): string {
  const byPlatform = groupByPlatform(skus);
  const lines: string[] = [];

  lines.push(`export { AnyAPI } from "./client.js";`);
  lines.push(`export type { SkuMap } from "./sku-map.js";`);
  for (const [platform] of byPlatform) {
    lines.push(`export * from "./platforms/${platform}.js";`);
  }

  // Re-export the handwritten core public surface (named). These names are frozen in
  // SPEC section 2; the ts-runtime agent owns their implementation under ../core/.
  const coreValues = [
    "agentSignup",
    "unwrap",
    "AnyAPIError",
    "BadRequestError",
    "AuthenticationError",
    "InsufficientBalanceError",
    "NotFoundError",
    "RateLimitedError",
    "UpstreamError",
    "ConnectionError",
    "TimeoutError",
  ];
  const coreTypes = [
    "ClientOptions",
    "RunResult",
    "Output",
    "RequestOptions",
    "Paginator",
    "AccountProfile",
    "CatalogQuery",
    "CatalogEntry",
    "AgentSignupOptions",
    "AgentSignupResult",
  ];

  const doc = docComment([
    "Barrel for the generated surface plus a re-export of the handwritten core public",
    "surface (named exports only). The package entry re-exports from here.",
  ]);

  return [
    GENERATED_HEADER_TS.trimEnd(),
    doc.trimEnd(),
    lines.join("\n"),
    `export { ${coreValues.join(", ")} } from "../core/index.js";`,
    `export type { ${coreTypes.join(", ")} } from "../core/index.js";`,
  ].join("\n\n");
}

// --------------------------------------------------------------------------------------
// Public entry
// --------------------------------------------------------------------------------------

/**
 * Emit the full TypeScript SDK surface from an IR. Pure: returns a FileMap of
 * repo-relative path -> formatted file content. Does not write to disk. Two runs on the
 * same IR are byte-identical (deterministic ordering + prettier).
 *
 * @param ir     the parsed ir.json (SPEC section 1).
 * @param outDir output root for the generated files. Defaults to the SPEC directory
 *               `packages/typescript/src/generated`. Paths in the returned map are
 *               `<outDir>/...`.
 */
export async function emitTypescript(
  ir: IR,
  outDir: string = OUT_ROOT,
): Promise<FileMap> {
  const skus = [...ir.skus].sort((a, b) => (a.slug < b.slug ? -1 : 1));
  const byPlatform = groupByPlatform(skus);

  const raw: FileMap = {};
  for (const [platform, list] of byPlatform) {
    raw[`platforms/${platform}.ts`] = emitPlatformFile(platform, list);
  }
  raw["sku-map.ts"] = emitSkuMap(skus);
  raw["client.ts"] = emitClient(skus);
  raw["index.ts"] = emitIndex(skus);

  const out: FileMap = {};
  for (const relPath of Object.keys(raw).sort()) {
    const formatted = await format(raw[relPath]!);
    out[join(outDir, relPath)] = formatted;
  }
  return out;
}

/** Write a FileMap to disk, creating parent directories. The tiny integration seam. */
export function writeFileMap(files: FileMap): void {
  for (const [path, content] of Object.entries(files)) {
    mkdirSync(dirname(path), { recursive: true });
    writeFileSync(path, content, "utf8");
  }
}

export { OUT_ROOT };
export { itemTypeName, namespaceClassName };
