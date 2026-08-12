// Handwritten discovery response validation and projection. Safe additive gateway
// fields are ignored after the complete response is recursively safety-scanned.

import {
  boundedNumberField,
  integerField,
  malformed,
  methodField,
  parseExecution,
  parseHighlight,
  parseLane,
  parseLatency,
  parsePricing,
  parseProvider,
  pathField,
  record,
  rejectUnsafeFields,
  stringField,
} from "./discovery-validation.js";
import type {
  CatalogEntry,
  CatalogSearchResult,
  CatalogSearchResults,
} from "./types.js";

export type CatalogEntryResponse = unknown;

export interface CatalogListResponse {
  apis: unknown;
}

export type CatalogSearchResponse = unknown;

export function mapCatalogEntry(raw: CatalogEntryResponse): CatalogEntry {
  rejectUnsafeFields(raw, "api");
  const value = record(raw, "api");
  const lanesRaw = value["lanes"];
  if (!Array.isArray(lanesRaw)) return malformed("api.lanes");
  const entry: CatalogEntry = {
    id: stringField(value, "id", "api"),
    slug: stringField(value, "slug", "api"),
    category: stringField(value, "category", "api"),
    name: stringField(value, "name", "api"),
    description: stringField(value, "description", "api"),
    method: methodField(value, "method", "api"),
    path: pathField(value, "path", "api"),
    execution: parseExecution(value["execution"], "api.execution"),
    provider: parseProvider(value, "api"),
    pricing: parsePricing(value["pricing"], "api.pricing"),
    lanes: lanesRaw.map((lane, index) =>
      parseLane(lane, `api.lanes[${index}]`),
    ),
    heavy: value["heavy"] === undefined ? false : value["heavy"] === true,
    tryEligible: value["tryEligible"] === true,
  };
  if (value["heavy"] !== undefined && typeof value["heavy"] !== "boolean")
    malformed("api.heavy");
  if (typeof value["tryEligible"] !== "boolean") malformed("api.tryEligible");
  if (value["tryMaxItems"] !== undefined) {
    const tryMaxItems = integerField(value, "tryMaxItems", "api");
    if (tryMaxItems < 1) malformed("api.tryMaxItems");
    entry.tryMaxItems = tryMaxItems;
  }
  if (value["failover"] !== undefined) {
    if (typeof value["failover"] !== "boolean") malformed("api.failover");
    entry.failover = value["failover"];
  }
  if (value["excludesCallerDelay"] !== undefined) {
    if (typeof value["excludesCallerDelay"] !== "boolean")
      malformed("api.excludesCallerDelay");
    entry.excludesCallerDelay = value["excludesCallerDelay"];
  }
  if (value["inputSchema"] !== undefined)
    entry.inputSchema = record(value["inputSchema"], "api.inputSchema");
  if (value["outputSchema"] !== undefined)
    entry.outputSchema = record(value["outputSchema"], "api.outputSchema");
  if (value["latency"] !== undefined) {
    entry.latency =
      value["latency"] === null
        ? null
        : parseLatency(value["latency"], "api.latency");
  }
  return entry;
}

export function mapCatalogDetail(raw: CatalogEntryResponse): CatalogEntry {
  const entry = mapCatalogEntry(raw);
  const value = record(raw, "api");
  if (entry.inputSchema === undefined) return malformed("api.inputSchema");
  if (entry.outputSchema === undefined) return malformed("api.outputSchema");
  if (!("latency" in value)) return malformed("api.latency");
  return entry;
}

export function mapCatalogList(raw: CatalogListResponse): CatalogEntry[] {
  rejectUnsafeFields(raw, "catalog");
  const envelope = record(raw, "catalog");
  if (!Array.isArray(envelope["apis"])) return malformed("catalog.apis");
  return envelope["apis"].map(mapCatalogEntry);
}

function mapSearchResult(value: unknown, path: string): CatalogSearchResult {
  const raw = record(value, path);
  const result: CatalogSearchResult = {
    slug: stringField(raw, "slug", path),
    platformId: stringField(raw, "platformId", path),
    name: stringField(raw, "name", path),
    description: stringField(raw, "description", path),
    category: stringField(raw, "category", path),
    method: methodField(raw, "method", path),
    path: pathField(raw, "path", path),
    execution: parseExecution(raw["execution"], `${path}.execution`),
    provider: parseProvider(raw, path),
    pricing: parsePricing(raw["pricing"], `${path}.pricing`),
    failover:
      typeof raw["failover"] === "boolean"
        ? raw["failover"]
        : malformed(`${path}.failover`),
    relevance: boundedNumberField(raw, "relevance", path, 0, 1),
  };
  if (raw["tryMaxItems"] !== undefined) {
    const tryMaxItems = integerField(raw, "tryMaxItems", path);
    if (tryMaxItems < 1) malformed(`${path}.tryMaxItems`);
    result.tryMaxItems = tryMaxItems;
  }
  if (raw["excludesCallerDelay"] !== undefined) {
    if (typeof raw["excludesCallerDelay"] !== "boolean")
      malformed(`${path}.excludesCallerDelay`);
    result.excludesCallerDelay = raw["excludesCallerDelay"];
  }
  if (raw["highlightFields"] !== undefined) {
    if (!Array.isArray(raw["highlightFields"]))
      malformed(`${path}.highlightFields`);
    result.highlightFields = raw["highlightFields"].map((field, index) =>
      parseHighlight(field, `${path}.highlightFields[${index}]`),
    );
  }
  return result;
}

export function mapCatalogSearch(
  raw: CatalogSearchResponse,
): CatalogSearchResults {
  rejectUnsafeFields(raw, "search");
  const envelope = record(raw, "search");
  if (!Array.isArray(envelope["results"])) return malformed("search.results");
  const ranking = envelope["ranking"];
  if (ranking !== "semantic" && ranking !== "keyword")
    return malformed("search.ranking");
  return {
    results: envelope["results"].map((row, index) =>
      mapSearchResult(row, `search.results[${index}]`),
    ),
    total: integerField(envelope, "total", "search"),
    ranking,
  };
}
