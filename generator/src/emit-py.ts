// AnyAPI SDK - Python emitter (py-emitter agent).
//
// Reads ir.json-shaped data (see ir.schema.json / ir.sample.json, SPEC.md section 1)
// and emits Python source into packages/python/src/getanyapi/platforms/.
//
// Public entry point: emitPython(ir, outDir) -> FileMap ({ relativePath: content }).
// Shared helpers are self-contained in this file (no imports from emit-ts.ts).
//
// TYPED-VALIDATION SEAM (documented choice for the integration agent):
//   SPEC 3.2 freezes the transport as `client._run(slug, input, options) -> RunResult[Any]`.
//   Generated methods must return the typed `RunResult[XData]`. We keep the transport
//   contract verbatim (the runtime `_run` stays `RunResult[Any]`) and re-validate on the
//   generated side: each method calls `self._client._run(...)` then rebuilds the typed
//   envelope with `RunResult[XData].model_validate(raw.model_dump(by_alias=True))`.
//   No `_run_typed` runtime helper is required; the runtime seam is exactly SPEC 3.2.
//   The raw round-trip through `model_dump(by_alias=True)` preserves camelCase wire keys
//   and open-record passthrough (RunResult carries `extra="allow"`), so re-validation into
//   the typed data model round-trips unknown fields.
//
// Formatting: emitted text is pre-formatted to be a fixed point of `ruff format`. When
// ruff is present the test asserts idempotence; two generate runs are byte-identical
// regardless (the emitter is deterministic and does not shell out at emit time).

import type { IR, SchemaNode, ObjectNode, SkuEntry } from "./py-ir.js";
import { DASH_RE, isObjectNode, isArrayNode } from "./py-ir.js";
import { priceLine as sharedPriceLine } from "./emit-shared.js";
import { formatPy } from "./py-format.js";
import {
  GENERATED_HEADER_PY,
  escapePyKeyword,
  needsFunctionalTypedDict,
  pascalCase,
  pyStringLiteral,
  singularize,
  snakeCaseField,
  titleCase,
} from "./py-helpers.js";

export type FileMap = Record<string, string>;

const PLATFORMS_DIR = "platforms";

/** Normalize em/en dashes to ASCII hyphen. Belt-and-suspenders (IR is pre-normalized). */
function dashNorm(s: string): string {
  return s.replace(DASH_RE, "-").replace(/[ \t]+$/gm, "");
}

/** Emit the full Python file map for an IR. Pure and deterministic. */
export function emitPython(ir: IR, outDir: string): FileMap {
  void outDir; // outDir kept for signature parity with the TS emitter; paths are relative
  const files: FileMap = {};

  // Group SKUs by python namespace (platform slug). SKUs arrive sorted by slug already,
  // but sort defensively so output is deterministic regardless of input order.
  const byPlatform = new Map<string, SkuEntry[]>();
  for (const sku of [...ir.skus].sort((a, b) => (a.slug < b.slug ? -1 : a.slug > b.slug ? 1 : 0))) {
    const key = sku.pyNamespace;
    const list = byPlatform.get(key) ?? [];
    list.push(sku);
    byPlatform.set(key, list);
  }

  const platformNames = [...byPlatform.keys()].sort();

  for (const platform of platformNames) {
    const skus = byPlatform.get(platform)!;
    files[`${PLATFORMS_DIR}/${platform}.py`] = emitPlatformModule(platform, skus);
  }

  files[`${PLATFORMS_DIR}/__init__.py`] = emitRegistry(platformNames, byPlatform);

  // Pipe every file through `ruff format` when the tool is available so the output is a
  // ruff fixed point; otherwise the pre-formatted text is returned unchanged. Ruff is
  // deterministic, so two generate runs stay byte-identical either way.
  for (const path of Object.keys(files)) {
    files[path] = formatPy(files[path]!);
  }

  return files;
}

// --------------------------------------------------------------------------------------
// Per-platform module
// --------------------------------------------------------------------------------------

interface EmitCtx {
  /** Nested pydantic model definitions accumulated during output-model emission. */
  models: string[];
  /** Names already emitted this module (dedupe identical nested models). */
  emittedModelNames: Set<string>;
}

function emitPlatformModule(platform: string, skus: SkuEntry[]): string {
  const ctx: EmitCtx = { models: [], emittedModelNames: new Set() };

  const inputBlocks: string[] = [];
  const outputRootModels: string[] = [];
  const syncMethods: string[] = [];
  const asyncMethods: string[] = [];

  for (const sku of skus) {
    inputBlocks.push(emitInputTypedDict(sku));
    // Emit the data model (root) plus any nested item models into ctx.models.
    emitDataModel(sku, ctx);
    outputRootModels.push(sku.outputTypeName);
    syncMethods.push(emitMethod(sku, false));
    asyncMethods.push(emitMethod(sku, true));
  }

  const syncClass = platformClassName(platform, false);
  const asyncClass = platformClassName(platform, true);

  const paginated = skus.some((s) => s.pyIterMethod);

  // Assemble the module BODY first (input TypedDicts, output models, both namespace
  // classes), then derive the import header from what the body actually references so
  // pyright strict never flags an unused import.
  const bodyParts: string[] = [];
  bodyParts.push(inputBlocks.join("\n\n"));
  bodyParts.push("");
  bodyParts.push(ctx.models.join("\n\n"));
  bodyParts.push("");
  bodyParts.push(emitNamespaceClass(syncClass, "AnyAPI", syncMethods));
  bodyParts.push("");
  bodyParts.push(emitNamespaceClass(asyncClass, "AsyncAnyAPI", asyncMethods));
  bodyParts.push("");
  const body = bodyParts.join("\n");

  const uses = (symbol: string): boolean =>
    new RegExp(`\\b${symbol}\\b`).test(body);

  const parts: string[] = [];
  parts.push(GENERATED_HEADER_PY);
  parts.push('"""Generated namespace module for the ' + platform + ' platform."""');
  parts.push("");
  parts.push("from __future__ import annotations");
  parts.push("");

  // typing imports (only what the body uses; TYPE_CHECKING is always needed below).
  const typingNames = ["TYPE_CHECKING"];
  if (uses("Any")) typingNames.push("Any");
  if (uses("Literal")) typingNames.push("Literal");
  typingNames.sort();
  parts.push(`from typing import ${typingNames.join(", ")}`);
  parts.push("");

  // pydantic imports (only what the body uses).
  const pydanticNames: string[] = [];
  if (uses("BaseModel")) pydanticNames.push("BaseModel");
  if (uses("ConfigDict")) pydanticNames.push("ConfigDict");
  if (uses("Field")) pydanticNames.push("Field");
  if (pydanticNames.length > 0) {
    parts.push(`from pydantic import ${pydanticNames.join(", ")}`);
  }

  // typing_extensions imports (Required/NotRequired/Unpack always used by inputs; TypedDict too).
  const teNames: string[] = [];
  if (uses("NotRequired")) teNames.push("NotRequired");
  if (uses("Required")) teNames.push("Required");
  if (uses("TypedDict")) teNames.push("TypedDict");
  if (uses("Unpack")) teNames.push("Unpack");
  if (teNames.length > 0) {
    parts.push(`from typing_extensions import ${teNames.join(", ")}`);
  }
  parts.push("");

  // RunResult / BareRunResult and RequestOptions live in ..types; the paginators/helpers
  // in .._pagination (the real py-runtime layout). See SPEC.md sections 3.3, 3.5, 3.7.
  const typeImports = ["RequestOptions"];
  if (uses("BareRunResult")) typeImports.push("BareRunResult");
  if (uses("RunResult")) typeImports.push("RunResult");
  typeImports.sort();
  parts.push(`from ..types import ${typeImports.join(", ")}`);
  if (paginated) {
    parts.push("from .._pagination import (");
    parts.push("    AsyncPaginator,");
    parts.push("    Paginator,");
    parts.push("    apaginate,");
    parts.push("    paginate,");
    parts.push(")");
  }
  parts.push("");
  parts.push("if TYPE_CHECKING:");
  parts.push("    from .._async_client import AsyncAnyAPI");
  parts.push("    from .._client import AnyAPI");
  parts.push("");
  parts.push("");
  parts.push(body);

  void outputRootModels;
  return normalizeTrailing(parts.join("\n"));
}

function platformClassName(platform: string, async: boolean): string {
  const base = pascalCase(platform) + "Namespace";
  return async ? "Async" + base : base;
}

function emitNamespaceClass(className: string, clientType: string, methods: string[]): string {
  const lines: string[] = [];
  lines.push(`class ${className}:`);
  lines.push(`    """Typed methods for this platform. Attached lazily to the client."""`);
  lines.push("");
  lines.push(`    def __init__(self, client: "${clientType}") -> None:`);
  lines.push(`        self._client = client`);
  lines.push("");
  lines.push(methods.join("\n\n"));
  return lines.join("\n");
}

// --------------------------------------------------------------------------------------
// Input TypedDicts (SPEC 3.4, 1.4.3, 1.5)
// --------------------------------------------------------------------------------------

function emitInputTypedDict(sku: SkuEntry): string {
  const input = sku.input;
  if (!isObjectNode(input)) {
    // Degenerate: no object input. Emit an empty total=False TypedDict.
    return [
      `class ${sku.inputTypeName}(TypedDict, total=False):`,
      `    """Input for ${dashNorm(sku.name)}."""`,
    ].join("\n");
  }

  const props = input.properties ?? {};
  const keys = Object.keys(props);
  const requiredSet = new Set(input.required ?? []);

  // Detect whether any field name forces the functional TypedDict("Name", {...}) form:
  // an invalid identifier or a HARD keyword (soft keywords match/case/type are legal
  // class-body attribute names, and mypy rejects them in the functional form). SPEC 1.5.
  const needsFunctional = keys.some((k) => needsFunctionalTypedDict(k));

  const fieldEntries = keys.map((k) => {
    const node = props[k]!;
    const hasDefault = nodeHasDefault(node);
    // Required per 1.4.3: in `required` AND without a default.
    const required = requiredSet.has(k) && !hasDefault;
    const inner = pyInputType(node);
    const wrapped = required ? `Required[${inner}]` : `NotRequired[${inner}]`;
    return { key: k, type: wrapped, doc: fieldDocComment(node) };
  });

  if (needsFunctional) {
    // Functional form. Field docs become a leading module comment block above the assignment
    // (class-body docstrings are not available in the functional form).
    const lines: string[] = [];
    lines.push(`${sku.inputTypeName} = TypedDict(`);
    lines.push(`    "${sku.inputTypeName}",`);
    lines.push(`    {`);
    for (const f of fieldEntries) {
      if (f.doc) lines.push(`        # ${f.key}: ${f.doc}`);
      lines.push(`        ${pyStringLiteral(f.key)}: ${f.type},`);
    }
    lines.push(`    },`);
    lines.push(`    total=False,`);
    lines.push(`)`);
    return lines.join("\n");
  }

  const lines: string[] = [];
  lines.push(`class ${sku.inputTypeName}(TypedDict, total=False):`);
  lines.push(`    """Input for ${dashNorm(sku.name)}."""`);
  lines.push("");
  for (const f of fieldEntries) {
    lines.push(`    ${f.key}: ${f.type}`);
    if (f.doc) lines.push(`    """${f.doc}"""`);
  }
  return lines.join("\n");
}

function nodeHasDefault(node: SchemaNode): boolean {
  if (node.kind === "string" || node.kind === "integer" || node.kind === "number" || node.kind === "boolean") {
    return (node as { default?: unknown }).default !== null && (node as { default?: unknown }).default !== undefined;
  }
  return false;
}

/** The Python type annotation for an INPUT schema node (Literal for enums, else scalar). */
function pyInputType(node: SchemaNode): string {
  switch (node.kind) {
    case "string": {
      const en = node.enum;
      if (en && en.length > 0) {
        return `Literal[${en.map((v) => pyStringLiteral(v)).join(", ")}]`;
      }
      return "str";
    }
    case "integer":
      return "int";
    case "number":
      return "float";
    case "boolean":
      return "bool";
    case "array": {
      const item = isArrayNode(node) ? pyInputType(node.items) : "Any";
      return `list[${item}]`;
    }
    case "object":
      return "dict[str, Any]";
    case "null":
      return "None";
    default:
      return "Any";
  }
}

/** A single-line field doc comment: description + bounds + enum + must-populate hints. */
function fieldDocComment(node: SchemaNode, mustPopulate = false): string {
  const bits: string[] = [];
  const desc = (node as { description?: string }).description;
  if (desc) bits.push(dashNorm(desc).trim());

  if (node.kind === "integer" || node.kind === "number") {
    const min = (node as { minimum?: number | null }).minimum;
    const max = (node as { maximum?: number | null }).maximum;
    if (min != null && max != null) bits.push(`Range: ${min} to ${max}.`);
    else if (min != null) bits.push(`Minimum: ${min}.`);
    else if (max != null) bits.push(`Maximum: ${max}.`);
  }
  const def = (node as { default?: unknown }).default;
  if (def !== null && def !== undefined) bits.push(`Default: ${def}.`);

  if (mustPopulate) bits.push("Present whenever the upstream returns this record.");

  return bits.join(" ");
}

// --------------------------------------------------------------------------------------
// Output pydantic models (SPEC 3.3, 3.4)
// --------------------------------------------------------------------------------------

/**
 * Emit the root data model (named sku.outputTypeName) plus nested item models into
 * ctx.models. Nested model naming: PascalCase(operationId) + TitleCase(singular(arrayProp)),
 * falling back to "Item" (SPEC: "AmazonReviewsItem").
 */
function emitDataModel(sku: SkuEntry, ctx: EmitCtx): void {
  const data = sku.output.data;
  const prefix = pascalCase(sku.operationId);
  if (isObjectNode(data)) {
    emitObjectModel(sku.outputTypeName, data, prefix, ctx, sku);
  } else {
    // Non-object data payload: alias to the scalar/array type via a thin model is awkward;
    // pydantic root models are heavier. We wrap in a model with a single `root`-like field
    // only when needed. For the current catalog data is always an object; emit a permissive
    // open model so validation never hard-fails.
    const lines: string[] = [];
    lines.push(`class ${sku.outputTypeName}(BaseModel):`);
    lines.push(`    model_config = ConfigDict(extra="allow")`);
    ctx.models.push(lines.join("\n"));
    ctx.emittedModelNames.add(sku.outputTypeName);
  }
}

function emitObjectModel(
  modelName: string,
  node: ObjectNode,
  prefix: string,
  ctx: EmitCtx,
  sku: SkuEntry,
): void {
  if (ctx.emittedModelNames.has(modelName)) return;
  ctx.emittedModelNames.add(modelName);

  const props = node.properties ?? {};
  const keys = Object.keys(props);
  const requiredSet = new Set(node.required ?? []);
  const mustPop = new Set(node.mustPopulate ?? []);

  // First resolve field types (this may register nested models, appended after this one).
  const fieldLines: string[] = [];
  const nested: Array<() => void> = [];

  // S3: output attributes are snake_case with a wire alias when the two differ. Guard
  // against a snake_case collision within one model (two wire keys mapping to the same
  // Python attribute) - hard-fail naming the SKU + both keys so we never silently drop one.
  const attrByField = new Map<string, string>();
  let anyAlias = false;

  for (const key of keys) {
    const child = props[key]!;
    const { type, register } = pyOutputType(child, prefix, key, ctx, sku);
    if (register) nested.push(register);

    const required = requiredSet.has(key);
    const optional = !required;
    // N1: the must-populate note is emitted only on OPTIONAL fields (a required field is
    // always present, so the note adds nothing); reworded per SPEC N1.
    const desc = fieldDocComment(child, optional && mustPop.has(key));

    const attrName = snakeCaseField(key);
    const prior = attrByField.get(attrName);
    if (prior !== undefined && prior !== key) {
      throw new Error(
        `Python output field collision in ${sku.slug} model ${modelName}: wire keys ` +
          `"${prior}" and "${key}" both snake_case to "${attrName}"`,
      );
    }
    attrByField.set(attrName, key);
    const alias = attrName !== key ? key : null;
    if (alias) anyAlias = true;

    const fieldArgs: string[] = [];
    if (alias) fieldArgs.push(`alias=${pyStringLiteral(alias)}`);
    if (desc) fieldArgs.push(`description=${pyStringLiteral(desc)}`);

    let annotation = type;
    let assignment = "";
    if (optional) {
      annotation = `${type} | None`;
      if (fieldArgs.length > 0) {
        assignment = ` = Field(default=None, ${fieldArgs.join(", ")})`;
      } else {
        assignment = " = None";
      }
    } else if (fieldArgs.length > 0) {
      assignment = ` = Field(${fieldArgs.join(", ")})`;
    }

    fieldLines.push(`    ${attrName}: ${annotation}${assignment}`);
  }

  const lines: string[] = [];
  lines.push(`class ${modelName}(BaseModel):`);
  // Open records round-trip unknown fields; alias population requires populate_by_name.
  const configBits: string[] = [];
  if (node.open) configBits.push('extra="allow"');
  if (anyAlias) configBits.push("populate_by_name=True");
  if (configBits.length > 0) {
    lines.push(`    model_config = ConfigDict(${configBits.join(", ")})`);
    lines.push("");
  }
  if (fieldLines.length === 0) {
    if (configBits.length === 0) lines.push("    pass");
  } else {
    lines.push(...fieldLines);
  }
  ctx.models.push(lines.join("\n"));

  // Emit nested models AFTER the parent (forward refs resolved by future annotations).
  for (const reg of nested) reg();
}

/**
 * Resolve the Python annotation for an OUTPUT schema node, registering nested pydantic
 * models as needed. Returns the annotation string plus an optional deferred `register`
 * closure that appends the nested model to ctx (called by the caller after itself).
 */
function pyOutputType(
  node: SchemaNode,
  prefix: string,
  propKey: string,
  ctx: EmitCtx,
  sku: SkuEntry,
): { type: string; register?: () => void } {
  switch (node.kind) {
    case "string": {
      const en = node.enum;
      if (en && en.length > 0) {
        return { type: `Literal[${en.map((v) => pyStringLiteral(v)).join(", ")}]` };
      }
      return { type: "str" };
    }
    case "integer":
      return { type: "int" };
    case "number":
      return { type: "float" };
    case "boolean":
      return { type: "bool" };
    case "null":
      return { type: "None" };
    case "array": {
      if (!isArrayNode(node)) return { type: "list[Any]" };
      const items = node.items;
      if (isObjectNode(items)) {
        // Nested item model. Name = prefix + TitleCase(singular(propKey)), fallback Item.
        const itemName = itemModelName(prefix, propKey);
        const register = () => emitObjectModel(itemName, items, prefix, ctx, sku);
        return { type: `list[${itemName}]`, register };
      }
      const inner = pyOutputType(items, prefix, propKey, ctx, sku);
      return { type: `list[${inner.type}]`, register: inner.register };
    }
    case "object": {
      if (isObjectNode(node)) {
        const nestedName = itemModelName(prefix, propKey);
        const register = () => emitObjectModel(nestedName, node, prefix, ctx, sku);
        return { type: nestedName, register };
      }
      return { type: "dict[str, Any]" };
    }
    default:
      return { type: "Any" };
  }
}

/** Nested item model name: prefix + TitleCase(singular(propName)); "Item" fallback. */
function itemModelName(prefix: string, propKey: string): string {
  const singular = singularize(propKey);
  const seg = titleCase(singular);
  const suffix = seg.length > 0 ? seg : "Item";
  return prefix + suffix;
}

// --------------------------------------------------------------------------------------
// Generated methods (SPEC 3.4, 3.5)
// --------------------------------------------------------------------------------------

function emitMethod(sku: SkuEntry, async: boolean): string {
  const method = escapePyKeyword(sku.pyMethod);
  const kw = async ? "async def" : "def";
  // Sync namespaces call client._run_raw; async namespaces call client._arun_raw (SPEC N2).
  // The raw seam returns the parsed JSON dict; we validate it ONCE into the typed model.
  const runSeam = async ? "await self._client._arun_raw" : "self._client._run_raw";
  const bare = sku.output.envelope === "bare";
  const ret = bare
    ? `BareRunResult[${sku.outputTypeName}]`
    : `RunResult[${sku.outputTypeName}]`;

  const lines: string[] = [];
  lines.push(
    `    ${kw} ${method}(self, *, options: RequestOptions | None = None, **input: Unpack[${sku.inputTypeName}]) -> ${ret}:`,
  );
  lines.push(...methodDocstring(sku, method).map((l) => "        " + l));
  // The run seam (_run_raw/_arun_raw) is protected on the client; the generated namespace
  // is a trusted collaborator, so suppress the private-usage diagnostic.
  lines.push(
    `        raw = ${runSeam}(  # pyright: ignore[reportPrivateUsage]`,
  );
  lines.push(`            ${pyStringLiteral(sku.slug)}, dict(input), options`);
  lines.push(`        )`);
  lines.push(`        return ${ret}.model_validate(raw)`);

  const parts = [lines.join("\n")];

  if (sku.pyIterMethod && sku.pagination.itemsField) {
    parts.push(emitIterMethod(sku, async));
  }

  return parts.join("\n\n");
}

function emitIterMethod(sku: SkuEntry, async: boolean): string {
  const iterName = escapePyKeyword(sku.pyIterMethod!);
  const kw = "def";
  const paginatorType = async ? "AsyncPaginator" : "Paginator";
  const helper = async ? "apaginate" : "paginate";
  const itemsField = sku.pagination.itemsField!;
  const itemType = paginatorItemType(sku, itemsField);
  const bare = sku.output.envelope === "bare";
  // The pydantic model class passed to the paginator for per-item validation (B3); None
  // for a scalar item array (no model to validate into).
  const itemModelArg = paginatorItemModel(sku, itemsField);

  const lines: string[] = [];
  lines.push(
    `    ${kw} ${iterName}(self, *, options: RequestOptions | None = None, **input: Unpack[${sku.inputTypeName}]) -> ${paginatorType}[${itemType}, ${sku.outputTypeName}]:`,
  );
  const pageWord = bare ? "BareRunResult" : "RunResult";
  const doc = [
    `"""Iterate ${dashNorm(sku.name)} results, following pagination cursors.`,
    "",
    `Yields validated \`${itemType}\` items from the \`${itemsField}\` field of`,
    `each page. Use \`.pages()\` on the returned paginator to walk whole`,
    `\`${pageWord}\` pages.`,
    `"""`,
  ];
  lines.push(...doc.map((l) => "        " + l));
  lines.push(
    `        return ${helper}(`,
  );
  lines.push(
    `            self._client,`,
  );
  lines.push(`            ${pyStringLiteral(sku.slug)},`);
  lines.push(`            dict(input),`);
  lines.push(`            ${pyStringLiteral(itemsField)},`);
  lines.push(`            item_model=${itemModelArg},`);
  lines.push(`            data_model=${sku.outputTypeName},`);
  lines.push(`            bare=${bare ? "True" : "False"},`);
  lines.push(`            options=options,`);
  lines.push(`        )`);
  return lines.join("\n");
}

/** The pydantic item type yielded by a paginator (the item model, else the scalar type). */
function paginatorItemType(sku: SkuEntry, itemsField: string): string {
  const data = sku.output.data;
  if (!isObjectNode(data)) return "Any";
  const arr = data.properties?.[itemsField];
  if (!arr || !isArrayNode(arr)) return "Any";
  if (isObjectNode(arr.items)) {
    return itemModelName(pascalCase(sku.operationId), itemsField);
  }
  // Scalar item array: the flattened item is the scalar type.
  return pyInputType(arr.items);
}

/** The item model class arg for the paginator: the model name, or None for scalar items. */
function paginatorItemModel(sku: SkuEntry, itemsField: string): string {
  const data = sku.output.data;
  if (!isObjectNode(data)) return "None";
  const arr = data.properties?.[itemsField];
  if (!arr || !isArrayNode(arr)) return "None";
  if (isObjectNode(arr.items)) {
    return itemModelName(pascalCase(sku.operationId), itemsField);
  }
  return "None";
}

function methodDocstring(sku: SkuEntry, method: string): string[] {
  const lines: string[] = [];
  lines.push(`"""${dashNorm(sku.name)}`);
  const desc = dashNorm(sku.description).trim();
  if (desc) {
    lines.push("");
    for (const wrapped of wrapText(desc, 76)) lines.push(wrapped);
  }
  lines.push("");
  lines.push(sharedPriceLine(sku.pricing));
  const ex = exampleLine(sku, method);
  if (ex) {
    lines.push("");
    lines.push("Example:");
    lines.push("    " + ex);
  }
  lines.push(`"""`);
  return lines;
}

/** Example: block rendered as client.<ns>.<method>(k=v, ...) from SkuEntry.example. */
function exampleLine(sku: SkuEntry, method: string): string | null {
  const ex = sku.example;
  if (ex == null || typeof ex !== "object" || Array.isArray(ex)) return null;
  const entries = Object.entries(ex as Record<string, unknown>);
  if (entries.length === 0) {
    return `res = client.${sku.pyNamespace}.${method}()`;
  }
  const args = entries.map(([k, v]) => `${escapePyKeyword(k)}=${pyReprValue(v)}`).join(", ");
  return `res = client.${sku.pyNamespace}.${method}(${args})`;
}

function pyReprValue(v: unknown): string {
  if (v === null) return "None";
  if (v === true) return "True";
  if (v === false) return "False";
  if (typeof v === "string") return pyStringLiteral(v);
  if (typeof v === "number") return String(v);
  if (Array.isArray(v)) return `[${v.map(pyReprValue).join(", ")}]`;
  if (typeof v === "object") {
    const inner = Object.entries(v as Record<string, unknown>)
      .map(([k, val]) => `${pyStringLiteral(k)}: ${pyReprValue(val)}`)
      .join(", ");
    return `{${inner}}`;
  }
  return "None";
}

/** Word-wrap a paragraph for docstrings, preserving whole words. */
function wrapText(text: string, width: number): string[] {
  const words = text.split(/\s+/);
  const out: string[] = [];
  let cur = "";
  for (const w of words) {
    if (cur.length === 0) {
      cur = w;
    } else if (cur.length + 1 + w.length <= width) {
      cur += " " + w;
    } else {
      out.push(cur);
      cur = w;
    }
  }
  if (cur.length > 0) out.push(cur);
  return out;
}

// --------------------------------------------------------------------------------------
// Registry (platforms/__init__.py) - SPEC runtime contract
// --------------------------------------------------------------------------------------

function emitRegistry(platformNames: string[], byPlatform: Map<string, SkuEntry[]>): string {
  void byPlatform;
  const lines: string[] = [];
  lines.push(GENERATED_HEADER_PY);
  lines.push('"""Lazy namespace registry.');
  lines.push("");
  lines.push("Maps a client attribute name to (module name, sync class, async class). The");
  lines.push("sync/async clients read this via __getattr__ to attach namespaces on first use,");
  lines.push("so `import getanyapi` stays fast (SPEC 3.1).");
  lines.push('"""');
  lines.push("");
  lines.push("from __future__ import annotations");
  lines.push("");
  lines.push("REGISTRY: dict[str, tuple[str, str, str]] = {");
  for (const platform of platformNames) {
    const syncClass = platformClassName(platform, false);
    const asyncClass = platformClassName(platform, true);
    lines.push(
      `    ${pyStringLiteral(platform)}: (${pyStringLiteral(platform)}, ${pyStringLiteral(syncClass)}, ${pyStringLiteral(asyncClass)}),`,
    );
  }
  lines.push("}");
  lines.push("");
  lines.push("__all__ = [\"REGISTRY\"]");
  lines.push("");
  return normalizeTrailing(lines.join("\n"));
}

// --------------------------------------------------------------------------------------

function normalizeTrailing(s: string): string {
  // Exactly one trailing newline; collapse 3+ blank lines to 2 (ruff format fixed point).
  let out = s.replace(/\n{3,}/g, "\n\n\n");
  out = out.replace(/[ \t]+$/gm, "");
  out = out.replace(/\n+$/, "") + "\n";
  return out;
}
