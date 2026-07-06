// IR type shapes the Python emitter consumes (SPEC.md section 1, ir.schema.json).
// Kept local to the py-emitter agent so it never imports another agent's ir.ts.

// Em dash (U+2014) and en dash (U+2013). Written as escapes so this source file itself
// carries only ASCII hyphens and passes the CI dash guard (SPEC 0.3).
export const DASH_RE = /[\u2014\u2013]/g;

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
  enum: string[] | null;
  default: unknown;
  format: string | null;
}

export interface IntegerNode {
  kind: "integer";
  description?: string;
  minimum: number | null;
  maximum: number | null;
  default: unknown;
}

export interface NumberNode {
  kind: "number";
  description?: string;
  minimum: number | null;
  maximum: number | null;
  default: unknown;
}

export interface BooleanNode {
  kind: "boolean";
  description?: string;
  default: unknown;
}

export interface NullNode {
  kind: "null";
  description?: string;
}

export interface UnknownNode {
  kind: "unknown";
  description?: string;
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

export interface IR {
  version: number;
  generatedFrom?: string;
  openapiVersion: string;
  baseUrl: string;
  skus: SkuEntry[];
}

export function isObjectNode(n: SchemaNode): n is ObjectNode {
  return n.kind === "object";
}

export function isArrayNode(n: SchemaNode): n is ArrayNode {
  return n.kind === "array";
}
