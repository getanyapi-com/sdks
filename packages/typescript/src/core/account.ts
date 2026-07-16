// Handwritten runtime core: account/discovery response mapping and standalone agent
// signup. See SPEC.md 2.7. Discovery is parsed strictly at this public Seam.

import { AnyAPIError, ConnectionError, errorFromStatus } from "./errors.js";
import type {
  AccountProfile,
  AgentSignupOptions,
  AgentSignupResult,
  CatalogEntry,
  CatalogSearchResult,
  CatalogSearchResults,
  DiscoveryLane,
  DiscoveryPricing,
  HighlightField,
  LaneHealth,
  PricingOffer,
} from "./types.js";

const DEFAULT_BASE_URL = "https://api.getanyapi.com";

/** Raw /v1/me shape (superset; internal-only fields are dropped by mapProfile). */
export interface ProfileResponse {
  id: string;
  email?: string | null;
  status: string;
  createdAt: string;
  onboardingComplete: boolean;
  // dropped: clerkUserId, signupGrantApplied, and any other server-only fields.
  clerkUserId?: string;
  signupGrantApplied?: boolean;
}

/** Raw customer-safe discovery bodies are intentionally unknown until validated. */
export type CatalogEntryResponse = unknown;

/** Raw /v1/apis list envelope. */
export interface CatalogListResponse {
  apis: unknown;
}

export type CatalogSearchResponse = unknown;

function malformed(path: string): never {
  throw new AnyAPIError(`malformed discovery response: ${path}`, 0);
}

function rejectInternalKeys(value: unknown, path: string): void {
  if (Array.isArray(value)) {
    value.forEach((item, index) =>
      rejectInternalKeys(item, `${path}[${index}]`),
    );
    return;
  }
  if (typeof value !== "object" || value === null) return;
  for (const [key, item] of Object.entries(value as Record<string, unknown>)) {
    if (key.toLowerCase().includes("credit")) malformed(`${path}.${key}`);
    rejectInternalKeys(item, `${path}.${key}`);
  }
}

function record(value: unknown, path: string): Record<string, unknown> {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return malformed(path);
  }
  return value as Record<string, unknown>;
}

function exactKeys(
  raw: Record<string, unknown>,
  allowed: readonly string[],
  path: string,
): void {
  const keys = new Set(allowed);
  for (const key of Object.keys(raw)) {
    if (!keys.has(key)) malformed(`${path}.${key}`);
  }
}

function stringField(
  raw: Record<string, unknown>,
  key: string,
  path: string,
): string {
  const value = raw[key];
  if (typeof value !== "string") return malformed(`${path}.${key}`);
  return value;
}

function numberField(
  raw: Record<string, unknown>,
  key: string,
  path: string,
): number {
  const value = raw[key];
  if (typeof value !== "number" || !Number.isFinite(value) || value < 0) {
    return malformed(`${path}.${key}`);
  }
  return value;
}

function integerField(
  raw: Record<string, unknown>,
  key: string,
  path: string,
): number {
  const value = numberField(raw, key, path);
  if (!Number.isInteger(value)) return malformed(`${path}.${key}`);
  return value;
}

function boundedNumberField(
  raw: Record<string, unknown>,
  key: string,
  path: string,
  minimumExclusive: number | undefined,
  maximumInclusive: number,
): number {
  const value = numberField(raw, key, path);
  if (
    (minimumExclusive !== undefined && value <= minimumExclusive) ||
    value > maximumInclusive
  ) {
    return malformed(`${path}.${key}`);
  }
  return value;
}

function parseOffer(value: unknown, path: string): PricingOffer {
  const raw = record(value, path);
  const model = stringField(raw, "model", path);
  const unit = stringField(raw, "unit", path);
  const maxUsd = numberField(raw, "maxUsd", path);
  if (model === "flat") {
    exactKeys(raw, ["model", "unit", "maxUsd"], path);
    if (unit !== "request" || "baseUsd" in raw || "perUnitUsd" in raw) {
      return malformed(path);
    }
    return { model, unit, maxUsd };
  }
  if (model === "linear") {
    exactKeys(raw, ["model", "unit", "baseUsd", "perUnitUsd", "maxUsd"], path);
    if (unit.length === 0) return malformed(`${path}.unit`);
    return {
      model,
      unit,
      baseUsd: numberField(raw, "baseUsd", path),
      perUnitUsd: numberField(raw, "perUnitUsd", path),
      maxUsd,
    };
  }
  return malformed(`${path}.model`);
}

function parsePricing(value: unknown, path: string): DiscoveryPricing {
  const raw = record(value, path);
  exactKeys(raw, ["from", "failoverMaxUsd"], path);
  return {
    from: parseOffer(raw["from"], `${path}.from`),
    failoverMaxUsd: numberField(raw, "failoverMaxUsd", path),
  };
}

function parseHealth(value: unknown, path: string): LaneHealth {
  const raw = record(value, path);
  exactKeys(raw, ["window", "uptimePct", "latencyP50Ms", "requests"], path);
  if (raw["window"] !== "30d") return malformed(`${path}.window`);
  return {
    window: "30d",
    uptimePct: boundedNumberField(raw, "uptimePct", path, undefined, 100),
    latencyP50Ms: integerField(raw, "latencyP50Ms", path),
    requests: integerField(raw, "requests", path),
  };
}

function parseLane(value: unknown, path: string): DiscoveryLane {
  const raw = record(value, path);
  exactKeys(raw, ["pricing", "health"], path);
  const lane: DiscoveryLane = {
    pricing: parseOffer(raw["pricing"], `${path}.pricing`),
  };
  if (raw["health"] !== undefined) {
    lane.health = parseHealth(raw["health"], `${path}.health`);
  }
  return lane;
}

function parseProvider(raw: Record<string, unknown>, path: string): "AnyAPI" {
  if (raw["provider"] !== "AnyAPI") return malformed(`${path}.provider`);
  return "AnyAPI";
}

function parseSchema(value: unknown, path: string): Record<string, unknown> {
  return record(value, path);
}

function parseHighlight(value: unknown, path: string): HighlightField {
  const raw = record(value, path);
  exactKeys(raw, ["path", "type", "why"], path);
  const field: HighlightField = {
    path: stringField(raw, "path", path),
    type: stringField(raw, "type", path),
  };
  if (raw["why"] !== undefined) field.why = stringField(raw, "why", path);
  return field;
}

/** Map the raw /v1/me body to AccountProfile, dropping internal-only fields. */
export function mapProfile(raw: ProfileResponse): AccountProfile {
  const profile: AccountProfile = {
    id: raw.id,
    status: raw.status,
    createdAt: raw.createdAt,
    onboardingComplete: raw.onboardingComplete,
  };
  if (raw.email !== undefined && raw.email !== null) {
    profile.email = raw.email;
  }
  return profile;
}

/** Map one customer-safe browse/detail entry, rejecting partial or legacy contracts. */
export function mapCatalogEntry(raw: CatalogEntryResponse): CatalogEntry {
  rejectInternalKeys(raw, "api");
  const value = record(raw, "api");
  exactKeys(
    value,
    [
      "id",
      "slug",
      "category",
      "name",
      "description",
      "provider",
      "pricing",
      "lanes",
      "heavy",
      "tryEligible",
      "inputSchema",
      "outputSchema",
    ],
    "api",
  );
  const lanesRaw = value["lanes"];
  if (!Array.isArray(lanesRaw) || lanesRaw.length === 0) {
    return malformed("api.lanes");
  }
  const entry: CatalogEntry = {
    id: stringField(value, "id", "api"),
    slug: stringField(value, "slug", "api"),
    category: stringField(value, "category", "api"),
    name: stringField(value, "name", "api"),
    description: stringField(value, "description", "api"),
    provider: parseProvider(value, "api"),
    pricing: parsePricing(value["pricing"], "api.pricing"),
    lanes: lanesRaw.map((lane, index) =>
      parseLane(lane, `api.lanes[${index}]`),
    ),
    heavy: value["heavy"] === undefined ? false : value["heavy"] === true,
    tryEligible: value["tryEligible"] === true,
  };
  if (value["heavy"] !== undefined && typeof value["heavy"] !== "boolean") {
    return malformed("api.heavy");
  }
  if (typeof value["tryEligible"] !== "boolean")
    return malformed("api.tryEligible");
  if (value["inputSchema"] !== undefined) {
    entry.inputSchema = parseSchema(value["inputSchema"], "api.inputSchema");
  }
  if (value["outputSchema"] !== undefined) {
    entry.outputSchema = parseSchema(value["outputSchema"], "api.outputSchema");
  }
  if (!offersEqual(entry.pricing.from, entry.lanes[0]!.pricing)) {
    return malformed("api.pricing.from");
  }
  const failoverMaxUsd = Math.max(
    ...entry.lanes.map((lane) => lane.pricing.maxUsd),
  );
  if (entry.pricing.failoverMaxUsd !== failoverMaxUsd) {
    return malformed("api.pricing.failoverMaxUsd");
  }
  return entry;
}

function offersEqual(left: PricingOffer, right: PricingOffer): boolean {
  if (
    left.model !== right.model ||
    left.unit !== right.unit ||
    left.maxUsd !== right.maxUsd
  ) {
    return false;
  }
  if (left.model === "flat" || right.model === "flat") {
    return left.model === right.model;
  }
  return left.baseUsd === right.baseUsd && left.perUnitUsd === right.perUnitUsd;
}

/** Detail responses must include both schemas; browse/search intentionally omit them. */
export function mapCatalogDetail(raw: CatalogEntryResponse): CatalogEntry {
  const entry = mapCatalogEntry(raw);
  if (entry.inputSchema === undefined) return malformed("api.inputSchema");
  if (entry.outputSchema === undefined) return malformed("api.outputSchema");
  return entry;
}

/** Map the raw /v1/apis list to CatalogEntry[]. */
export function mapCatalogList(raw: CatalogListResponse): CatalogEntry[] {
  const envelope = record(raw, "catalog");
  exactKeys(envelope, ["apis"], "catalog");
  if (!Array.isArray(envelope["apis"])) return malformed("catalog.apis");
  return envelope["apis"].map(mapCatalogEntry);
}

function mapSearchResult(value: unknown, path: string): CatalogSearchResult {
  const raw = record(value, path);
  exactKeys(
    raw,
    [
      "slug",
      "platformId",
      "name",
      "description",
      "category",
      "provider",
      "pricing",
      "relevance",
      "highlightFields",
    ],
    path,
  );
  const result: CatalogSearchResult = {
    slug: stringField(raw, "slug", path),
    platformId: stringField(raw, "platformId", path),
    name: stringField(raw, "name", path),
    description: stringField(raw, "description", path),
    category: stringField(raw, "category", path),
    provider: parseProvider(raw, path),
    pricing: parsePricing(raw["pricing"], `${path}.pricing`),
    relevance: boundedNumberField(raw, "relevance", path, 0, 1),
  };
  if (raw["highlightFields"] !== undefined) {
    if (!Array.isArray(raw["highlightFields"]))
      return malformed(`${path}.highlightFields`);
    result.highlightFields = raw["highlightFields"].map((field, index) =>
      parseHighlight(field, `${path}.highlightFields[${index}]`),
    );
  }
  return result;
}

export function mapCatalogSearch(
  raw: CatalogSearchResponse,
): CatalogSearchResults {
  rejectInternalKeys(raw, "search");
  const envelope = record(raw, "search");
  exactKeys(envelope, ["results", "total", "ranking"], "search");
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

/** Raw /agent/signup body. */
interface AgentSignupResponse {
  secret: string;
  capUsd: number;
  claimToken: string;
  claimUrl: string;
}

/**
 * Agent self-signup. POST /agent/signup with NO auth header. Returns a one-time API key
 * plus its spend cap and claim details. See SPEC 2.7.
 */
export async function agentSignup(
  options: AgentSignupOptions = {},
): Promise<AgentSignupResult> {
  const fetchImpl = options.fetch ?? globalThis.fetch;
  if (typeof fetchImpl !== "function") {
    throw new AnyAPIError(
      "no fetch implementation available: pass options.fetch or run on a runtime with global fetch",
      0,
    );
  }
  const base = (options.baseUrl ?? DEFAULT_BASE_URL).replace(/\/+$/, "");
  const body: Record<string, string> = {};
  if (options.sponsorEmail !== undefined) {
    body["sponsorEmail"] = options.sponsorEmail;
  }
  if (options.label !== undefined) {
    body["label"] = options.label;
  }

  let response: Response;
  try {
    response = await fetchImpl(`${base}/agent/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });
  } catch (err) {
    throw new ConnectionError(
      err instanceof Error ? err.message : "connection failed",
      0,
    );
  }

  const requestId = response.headers.get("x-request-id") ?? undefined;
  const text = await response.text().catch(() => "");
  if (response.status !== 200) {
    let message = `request failed with status ${response.status}`;
    try {
      const parsed = JSON.parse(text) as { error?: unknown };
      if (typeof parsed.error === "string" && parsed.error !== "") {
        message = parsed.error;
      }
    } catch {
      // not JSON
    }
    throw errorFromStatus(response.status, message, requestId);
  }

  const parsed = JSON.parse(text) as AgentSignupResponse;
  return {
    secret: parsed.secret,
    capUsd: parsed.capUsd,
    claimToken: parsed.claimToken,
    claimUrl: parsed.claimUrl,
  };
}
