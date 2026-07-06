// Handwritten runtime core: shared types for @anyapi/sdk.
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
  /** Number of result rows returned (present on per-result SKUs). */
  items?: number;
  /** Optional server nudge when a large result was returned untrimmed. */
  hint?: string;
}

/**
 * Discriminated union on `found`. When found is false, data is null.
 */
export type Output<T> =
  | { found: true; data: T }
  | { found: false; data: null };

/**
 * Return the data payload when found, or throw NotFoundError when the upstream had no
 * matching entity. Narrows Output<T> to T.
 */
export function unwrap<T>(result: RunResult<T>): T {
  if (result.output.found) {
    return result.output.data;
  }
  // Imported lazily-shaped through the errors module to keep this file dependency-light.
  throw new NotFoundError("no matching result was found", 404);
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
  /** Max retry attempts for retryable failures (429 + network). Default 2. */
  maxRetries?: number;
  /** Per-request timeout in milliseconds. Default 60000. */
  timeoutMs?: number;
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

/**
 * Query for filtering the catalog. See SPEC 2.7.
 */
export interface CatalogQuery {
  query?: string;
  category?: string;
}

/**
 * One catalog entry as returned by /v1/apis. Priced in USD (never credits). See SPEC 2.7.
 */
export interface CatalogEntry {
  slug: string;
  platform: string;
  action: string;
  name: string;
  category: string;
  description: string;
  /** Cheapest per-request price in USD (the "from" price). */
  priceUsd: number;
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

import { NotFoundError } from "./errors.js";
