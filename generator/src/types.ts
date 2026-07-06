// IR TypeScript types mirroring ir.schema.json (SPEC.md section 1).

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
  output: { envelope: Envelope; data: SchemaNode };
  pagination: Pagination;
}

/** How the wire `output` is shaped. "found-data": {found,data}. "bare": output IS the data. */
export type Envelope = "found-data" | "bare";

/** A generator diagnostic surfaced in the IR meta so gaps are diffable (SPEC 1.2 erratum). */
export interface IrWarning {
  kind: string;
  slug: string;
  message: string;
}

export interface Ir {
  version: 1;
  generatedFrom: string;
  openapiVersion: string;
  baseUrl: string;
  warnings?: IrWarning[];
  skus: SkuEntry[];
}
