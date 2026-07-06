// TypeScript type declarations for the IR the emitters consume (SPEC.md section 1).
// The gen-ir agent owns the extractor that PRODUCES ir.json (src/ir.ts / src/fetch.ts);
// this module only declares the shape emitters READ, so emit-ts.ts and its tests are
// typed against the frozen contract. It imports nothing and has no runtime code.

export interface IR {
  version: number;
  generatedFrom?: string;
  openapiVersion: string;
  baseUrl: string;
  skus: SkuEntry[];
}

export interface Pricing {
  priceUsd: number;
  baseUsd: number | null;
  perItemUsd: number | null;
  perItemUnit: string | null;
}

export interface Pagination {
  paginated: boolean;
  itemsField: string | null;
  cursorInputField: string | null;
  nextCursorField: string | null;
}

export interface SkuEntry {
  slug: string;
  platform: string;
  action: string;
  operationId: string;
  name: string;
  category: string;
  description: string;
  pricing: Pricing;
  tsNamespace: string;
  tsMethod: string;
  tsIterMethod: string | null;
  pyNamespace: string;
  pyMethod: string;
  pyIterMethod: string | null;
  inputTypeName: string;
  outputTypeName: string;
  example: unknown;
  input: SchemaNode;
  output: { envelope: "found-data"; data: SchemaNode };
  pagination: Pagination;
}

export type SchemaNode =
  | ObjectNode
  | ArrayNode
  | StringNode
  | IntegerNode
  | NumberNode
  | BooleanNode
  | NullNode
  | UnknownNode;

export interface ObjectNode {
  kind: "object";
  description?: string;
  properties: Record<string, SchemaNode>;
  required: string[];
  open: boolean;
  mustPopulate?: string[];
}

export interface ArrayNode {
  kind: "array";
  description?: string;
  items: SchemaNode;
  mustPopulate?: boolean;
}

export interface StringNode {
  kind: "string";
  description?: string;
  enum?: string[] | null;
  default?: unknown;
  format?: string | null;
}

export interface IntegerNode {
  kind: "integer";
  description?: string;
  minimum?: number | null;
  maximum?: number | null;
  default?: unknown;
}

export interface NumberNode {
  kind: "number";
  description?: string;
  minimum?: number | null;
  maximum?: number | null;
  default?: unknown;
}

export interface BooleanNode {
  kind: "boolean";
  description?: string;
  default?: unknown;
}

export interface NullNode {
  kind: "null";
  description?: string;
}

export interface UnknownNode {
  kind: "unknown";
  description?: string;
}

/** A map of repo-relative file path to file content, the emitter's output. */
export type FileMap = Record<string, string>;
