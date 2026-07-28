// Handwritten runtime core: shared types for @getanyapi/sdk.
// See SPEC.md sections 2.1, 2.3, 2.7. Named exports only; zero runtime deps.

/**
 * The normalized run envelope returned by /v1/run/{slug}.
 */
export interface RunResult<T> {
  /** Discriminated on `found`. */
  output: Output<T>;
  /** Always the literal "AnyAPI". Upstream providers are never named. */
  provider: "AnyAPI";
  /** Amount charged in USD for this call. */
  costUsd: number;
  /**
   * Number of result rows returned. Always present on the wire: the gateway's field
   * carries no `omitempty`, and a metadata-only replay preserves the original count.
   */
  items: number;
  /**
   * True when the gateway served a stored response for a repeated Idempotency-Key instead
   * of running the SKU again. A replay is not billed twice. Always present on the wire.
   *
   * A replay whose stored payload is no longer retained (a 24h TTL expiry, or a payload
   * that exceeded the storage size cap) arrives with the metadata only and `output` null,
   * which {@link unwrap} rejects. See SPEC 2.3.
   */
  replayed: boolean;
  /**
   * Opaque handle to the full unshaped result, cached for about 15 minutes, so it can be
   * re-read and re-shaped for free via GET /v1/results/{id}. Absent when the gateway did
   * not cache the result.
   */
  resultId?: string;
  /**
   * Why a requested jq reshape did not apply. The run was still billed and `output` carries
   * the full unshaped result. Absent when no jq was requested or it succeeded.
   */
  jqError?: string;
  /** Optional server nudge when a large result was returned untrimmed. */
  hint?: string;
}

/**
 * Discriminated union on `found`. When found is false, data is null.
 */
export type Output<T> = { found: true; data: T } | { found: false; data: null };

/**
 * The conditional run envelope for an operation whose response has no `{ found, data }`
 * wrapper (SPEC 1.2 erratum). If a future generated operation uses this shape, its data
 * object is returned directly as `output`; there is no not-found branch to discriminate.
 */
export interface BareRunResult<T> {
  /** The data payload directly (no found/data wrapper). */
  output: T;
  /** Always the literal "AnyAPI". Upstream providers are never named. */
  provider: "AnyAPI";
  /** Amount charged in USD for this call. */
  costUsd: number;
  /**
   * Number of result rows returned. Always present on the wire: the gateway's field
   * carries no `omitempty`, and a metadata-only replay preserves the original count.
   */
  items: number;
  /**
   * True when the gateway served a stored response for a repeated Idempotency-Key instead
   * of running the SKU again. A replay is not billed twice. Always present on the wire.
   *
   * A replay whose stored payload is no longer retained (a 24h TTL expiry, or a payload
   * that exceeded the storage size cap) arrives with the metadata only and `output` null,
   * which {@link unwrap} rejects. See SPEC 2.3.
   */
  replayed: boolean;
  /**
   * Opaque handle to the full unshaped result, cached for about 15 minutes, so it can be
   * re-read and re-shaped for free via GET /v1/results/{id}. Absent when the gateway did
   * not cache the result.
   */
  resultId?: string;
  /**
   * Why a requested jq reshape did not apply. The run was still billed and `output` carries
   * the full unshaped result. Absent when no jq was requested or it succeeded.
   */
  jqError?: string;
  /** Optional server nudge when a large result was returned untrimmed. */
  hint?: string;
}

/**
 * Message for a replay whose stored payload the gateway no longer holds. Kept as a constant
 * so the runtime and its tests cannot drift apart on the wording.
 */
const OUTPUT_NOT_RETAINED =
  "the run output was not retained: this response is an idempotent replay whose stored " +
  "payload has expired or was too large to store, so only the run metadata came back. " +
  "Re-run the request without the idempotency key (or with a fresh one) to fetch the data again.";

/**
 * Return the data payload when found, or throw ResultNotFoundError when the upstream had no
 * matching entity. Narrows Output<T> to T.
 *
 * Two overloads: a found-data RunResult may be empty (throws when found is false); a bare
 * result always carries its data (returns output directly).
 *
 * Either shape throws AnyAPIError when `output` is null: an idempotent replay can outlive
 * its stored payload, and the caller must not receive `null` typed as T. See SPEC 2.3.
 */
export function unwrap<T>(result: BareRunResult<T>): T;
export function unwrap<T>(result: RunResult<T>): T;
export function unwrap<T>(result: RunResult<T> | BareRunResult<T>): T {
  const output = (result as { output: unknown }).output;
  // A metadata-only replay: the run happened and was not re-billed, but the payload is gone.
  if (output === null || output === undefined) {
    throw new AnyAPIError(OUTPUT_NOT_RETAINED, 200);
  }
  // Found-data envelope: an object carrying a boolean `found` discriminator.
  if (
    output !== null &&
    typeof output === "object" &&
    "found" in (output as Record<string, unknown>)
  ) {
    const env = output as { found: boolean; data: T };
    if (env.found) {
      return env.data;
    }
    // Imported lazily-shaped through the errors module to keep this file dependency-light.
    throw new ResultNotFoundError("no matching result was found", 404);
  }
  // Bare result: output IS the data payload.
  return output as T;
}

/**
 * Per-request options shaping the response and controlling retry/timeout. See SPEC 2.7.
 */
export interface RequestOptions {
  /** Keep only these keys on each result item (dotted paths descend). Shrinks the response, not the cost. */
  fields?: string[];
  /** Cap result rows returned (wire max_items). Does not change cost. On iterators, caps total items yielded. */
  maxItems?: number;
  /** Return only a structural outline instead of full data. Does not change cost. */
  summary?: boolean;
  /** Override the client per-request timeout (ms) for this call. */
  timeoutMs?: number;
  /** AbortSignal to cancel this request. */
  signal?: AbortSignal;
  /** Override the client maxRetries for this call. */
  maxRetries?: number;
  /** Override the generated Idempotency-Key for this billed POST. */
  idempotencyKey?: string;
}

/**
 * Client construction options. See SPEC 2.1.
 */
export interface ClientOptions {
  /** Your AnyAPI key. Falls back to process.env.ANYAPI_API_KEY when omitted. */
  apiKey?: string;
  /** Gateway base URL. Defaults to "https://api.getanyapi.com". */
  baseUrl?: string;
  /** Custom fetch implementation. Defaults to globalThis.fetch. */
  fetch?: typeof fetch;
  /** Max retry attempts for retryable failures (429 + retry-safe network). Default 2. */
  maxRetries?: number;
  /** Per-request timeout in milliseconds. Default 60000. */
  timeoutMs?: number;
  /** Send Idempotency-Key on billed POSTs. Default "auto"; use "off" as a kill switch. */
  idempotency?: "auto" | "off";
}

/**
 * Account profile returned by /v1/me (internal-only fields dropped). See SPEC 2.7.
 */
export interface AccountProfile {
  id: string;
  email?: string;
  status: string;
  createdAt: string;
  onboardingComplete: boolean;
}

/** Category-only browse options. Ranked queries belong to search(). See SPEC 2.7. */
export interface CatalogOptions {
  category?: string;
}

/** A fixed per-request discovery offer. */
export interface FlatPricingOffer {
  model: "flat";
  unit: "request";
  maxUsd: number;
}

/** A capped base-plus-unit discovery offer. */
export interface LinearPricingOffer {
  model: "linear";
  unit: string;
  baseUsd: number;
  perUnitUsd: number;
  maxUsd: number;
}

export type PricingOffer = FlatPricingOffer | LinearPricingOffer;

export interface DiscoveryPricing {
  from: PricingOffer;
  failoverMaxUsd: number;
}

export interface LaneHealth {
  window: "30d";
  uptimePct: number;
  latencyP50Ms: number;
  requests: number;
}

export interface DiscoveryLane {
  pricing: PricingOffer;
  health?: LaneHealth;
}

/** One customer-safe API returned by catalog() or describe(). */
export interface CatalogEntry {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  provider: "AnyAPI";
  pricing: DiscoveryPricing;
  lanes: DiscoveryLane[];
  heavy: boolean;
  tryEligible: boolean;
  inputSchema?: Record<string, unknown>;
  outputSchema?: Record<string, unknown>;
}

export interface SearchOptions {
  query: string;
  category?: string;
  platform?: string;
  limit?: number;
}

export interface HighlightField {
  path: string;
  type: string;
  why?: string;
}

export interface CatalogSearchResult {
  slug: string;
  platformId: string;
  name: string;
  description: string;
  category: string;
  provider: "AnyAPI";
  pricing: DiscoveryPricing;
  relevance: number;
  highlightFields?: HighlightField[];
}

export interface CatalogSearchResults {
  results: CatalogSearchResult[];
  total: number;
  ranking: "semantic" | "keyword";
}

/**
 * Options for standalone agent self-signup (no key required). See SPEC 2.7.
 */
export interface AgentSignupOptions {
  /** Gateway base URL. Defaults to "https://api.getanyapi.com". */
  baseUrl?: string;
  /** Custom fetch implementation. Defaults to globalThis.fetch. */
  fetch?: typeof fetch;
  /** Optional human verification channel. */
  sponsorEmail?: string;
  /** Optional key label. */
  label?: string;
}

/**
 * Result of a successful agent self-signup. See SPEC 2.7.
 */
export interface AgentSignupResult {
  /** The API key, returned once. */
  secret: string;
  /** Per-key spend cap in USD. */
  capUsd: number;
  claimToken: string;
  claimUrl: string;
}

import { AnyAPIError, ResultNotFoundError } from "./errors.js";
