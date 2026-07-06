// Handwritten runtime core: the single network seam plus the public AnyAPI base class.
// See SPEC.md 2.1, 2.2, 2.8. Named exports only; zero runtime deps (global fetch).

import {
  AnyAPIError,
  ConnectionError,
  TimeoutError,
  errorFromStatus,
} from "./errors.js";
import {
  mapCatalogEntry,
  mapCatalogList,
  mapProfile,
  type CatalogListResponse,
  type CatalogEntryResponse,
  type ProfileResponse,
} from "./account.js";
import type {
  AccountProfile,
  CatalogEntry,
  CatalogQuery,
  ClientOptions,
  RequestOptions,
  RunResult,
} from "./types.js";

const DEFAULT_BASE_URL = "https://api.getanyapi.com";
const DEFAULT_TIMEOUT_MS = 60_000;
const DEFAULT_MAX_RETRIES = 2;
const RETRY_BASE_DELAY_MS = 500;
const RETRY_MAX_DELAY_MS = 8_000;

/**
 * The single network seam that generated per-SKU methods call. See SPEC 2.2. The generated
 * platform methods hand it a slug + input and cast the RunResult to their concrete data
 * type (found-data) or to a BareRunResult (bare SKUs); the seam itself stays untyped.
 */
export interface ClientCore {
  run<T>(slug: string, input: unknown, options?: RequestOptions): Promise<RunResult<T>>;
}

/**
 * Read the API key from the environment without crashing in browsers or edge runtimes
 * where `process` is undefined.
 */
function envApiKey(): string | undefined {
  try {
    if (typeof process !== "undefined" && process?.env) {
      return process.env["ANYAPI_API_KEY"];
    }
  } catch {
    // `process` may be a restricted proxy in some edge runtimes; ignore.
  }
  return undefined;
}

/**
 * Sleep for `ms` milliseconds, rejecting early if the signal aborts.
 */
function sleep(ms: number, signal?: AbortSignal): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    if (signal?.aborted) {
      reject(new ConnectionError("request aborted", 0));
      return;
    }
    const timer = setTimeout(() => {
      signal?.removeEventListener("abort", onAbort);
      resolve();
    }, ms);
    const onAbort = () => {
      clearTimeout(timer);
      reject(new ConnectionError("request aborted", 0));
    };
    signal?.addEventListener("abort", onAbort, { once: true });
  });
}

/**
 * Compute the jittered exponential backoff delay for a given retry attempt. See SPEC 2.8.
 * `attempt` is 0 for the first retry.
 */
function backoffDelay(attempt: number): number {
  const base = Math.min(RETRY_BASE_DELAY_MS * 2 ** attempt, RETRY_MAX_DELAY_MS);
  const factor = 0.5 + Math.random(); // random in [0.5, 1.5)
  return base * factor;
}

/**
 * Parse a Retry-After header (delta-seconds or HTTP-date) into a delay in ms, capped at
 * maxDelay. Returns undefined when the header is absent or unparseable.
 */
function parseRetryAfter(header: string | null): number | undefined {
  if (header === null) {
    return undefined;
  }
  const trimmed = header.trim();
  if (trimmed === "") {
    return undefined;
  }
  const seconds = Number(trimmed);
  if (Number.isFinite(seconds)) {
    const ms = seconds * 1000;
    return Math.min(Math.max(ms, 0), RETRY_MAX_DELAY_MS);
  }
  const dateMs = Date.parse(trimmed);
  if (Number.isFinite(dateMs)) {
    const delta = dateMs - Date.now();
    return Math.min(Math.max(delta, 0), RETRY_MAX_DELAY_MS);
  }
  return undefined;
}

/**
 * Compose the caller's AbortSignal (if any) with a per-request timeout signal so the
 * request aborts on whichever fires first.
 */
function composeSignal(
  timeoutMs: number,
  callerSignal: AbortSignal | undefined,
): { signal: AbortSignal; timeoutSignal: AbortSignal } {
  const timeoutSignal = AbortSignal.timeout(timeoutMs);
  if (!callerSignal) {
    return { signal: timeoutSignal, timeoutSignal };
  }
  // AbortSignal.any composes multiple signals; available on Node >=20 / modern runtimes.
  const anyFn = (AbortSignal as { any?: (signals: AbortSignal[]) => AbortSignal }).any;
  if (typeof anyFn === "function") {
    return { signal: anyFn([timeoutSignal, callerSignal]), timeoutSignal };
  }
  // Fallback: manually bridge both signals into a controller.
  const controller = new AbortController();
  const abort = (reason: unknown) => controller.abort(reason);
  if (callerSignal.aborted) {
    controller.abort(callerSignal.reason);
  } else {
    callerSignal.addEventListener("abort", () => abort(callerSignal.reason), { once: true });
  }
  if (timeoutSignal.aborted) {
    controller.abort(timeoutSignal.reason);
  } else {
    timeoutSignal.addEventListener("abort", () => abort(timeoutSignal.reason), { once: true });
  }
  return { signal: controller.signal, timeoutSignal };
}

/**
 * True when an abort reason denotes a timeout (TimeoutError DOMException from
 * AbortSignal.timeout) rather than a caller cancellation.
 */
function isTimeoutSignal(timeoutSignal: AbortSignal, callerSignal?: AbortSignal): boolean {
  if (!timeoutSignal.aborted) {
    return false;
  }
  // If the caller signal also aborted, prefer the caller's cancellation semantics only
  // when the timeout did not fire; here timeout did fire, so treat as timeout.
  return callerSignal?.aborted !== true || timeoutSignal.aborted;
}

/**
 * Build the request URL with response-shaping query params from options. See SPEC 2.2.
 */
function buildUrl(baseUrl: string, slug: string, options?: RequestOptions): string {
  const base = baseUrl.replace(/\/+$/, "");
  const url = new URL(`${base}/v1/run/${slug}`);
  if (options?.fields && options.fields.length > 0) {
    url.searchParams.set("fields", options.fields.join(","));
  }
  if (options?.maxItems !== undefined) {
    url.searchParams.set("max_items", String(options.maxItems));
  }
  if (options?.summary === true) {
    url.searchParams.set("summary", "true");
  }
  return url.toString();
}

/**
 * Extract an error message from a non-200 body: the JSON `error` field when present,
 * else a generic status-derived fallback.
 */
function messageFromBody(body: string, status: number): string {
  if (body) {
    try {
      const parsed = JSON.parse(body) as { error?: unknown };
      if (typeof parsed.error === "string" && parsed.error !== "") {
        return parsed.error;
      }
    } catch {
      // not JSON; fall through
    }
  }
  return `request failed with status ${status}`;
}

/**
 * The concrete network runtime. `AnyAPI` extends this and generated namespaces attach as
 * lazy getters on subclasses/augmentations. Handwritten; see SPEC 2.1/2.2.
 */
export class AnyAPI implements ClientCore {
  private readonly apiKey: string | undefined;
  private readonly baseUrl: string;
  private readonly fetchImpl: typeof fetch;
  private readonly maxRetries: number;
  private readonly timeoutMs: number;

  /**
   * The network seam the generated per-platform namespaces target. The base client IS a
   * ClientCore (it implements `run`), so the generated subclass hands `this._core` to each
   * namespace constructor. Kept protected so it is not part of the public surface.
   */
  protected readonly _core: ClientCore = this;

  constructor(options: ClientOptions = {}) {
    this.apiKey = options.apiKey ?? envApiKey();
    if (!this.apiKey) {
      throw new AnyAPIError(
        "no API key: pass apiKey or set ANYAPI_API_KEY",
        0,
      );
    }
    this.baseUrl = options.baseUrl ?? DEFAULT_BASE_URL;
    const resolvedFetch = options.fetch ?? globalThis.fetch;
    if (typeof resolvedFetch !== "function") {
      throw new AnyAPIError(
        "no fetch implementation available: pass options.fetch or run on a runtime with global fetch",
        0,
      );
    }
    this.fetchImpl = resolvedFetch;
    this.maxRetries = options.maxRetries ?? DEFAULT_MAX_RETRIES;
    this.timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  }

  /**
   * Generic run for any SKU by slug (the untyped network seam + the string fallback). The
   * generated `AnyAPI` subclass adds typed literal-slug overloads on top (SPEC 2.1); this
   * base signature is the fallback that returns RunResult<unknown> for an unknown slug.
   */
  run<T = unknown>(
    slug: string,
    input: unknown,
    options?: RequestOptions,
  ): Promise<RunResult<T>> {
    return this.request<RunResult<T>>("POST", buildUrl(this.baseUrl, slug, options), {
      body: JSON.stringify(input ?? {}),
      timeoutMs: options?.timeoutMs ?? this.timeoutMs,
      maxRetries: options?.maxRetries ?? this.maxRetries,
      ...(options?.signal ? { signal: options.signal } : {}),
    });
  }

  /** Current wallet balance in USD. GET /v1/balance. See SPEC 2.7. */
  balance(): Promise<{ usd: number }> {
    return this.httpGet<{ usd: number }>("/v1/balance");
  }

  /** The authenticated account profile. GET /v1/me. See SPEC 2.7. */
  async me(): Promise<AccountProfile> {
    const raw = await this.httpGet<ProfileResponse>("/v1/me");
    return mapProfile(raw);
  }

  /** List catalog SKUs, optionally filtered. GET /v1/apis. See SPEC 2.7. */
  async catalog(query?: CatalogQuery): Promise<CatalogEntry[]> {
    const search = new URLSearchParams();
    if (query?.query) {
      search.set("query", query.query);
    }
    if (query?.category) {
      search.set("category", query.category);
    }
    const qs = search.toString();
    const raw = await this.httpGet<CatalogListResponse>(
      qs ? `/v1/apis?${qs}` : "/v1/apis",
    );
    return mapCatalogList(raw);
  }

  /** Describe a single SKU by slug. GET /v1/apis/{slug}. 404 -> NotFoundError. See SPEC 2.7. */
  async describe(slug: string): Promise<CatalogEntry> {
    const raw = await this.httpGet<CatalogEntryResponse>(
      `/v1/apis/${encodeURIComponent(slug)}`,
    );
    return mapCatalogEntry(raw);
  }

  /** Internal GET against the gateway with the same auth/retry/error machinery. */
  private httpGet<T>(path: string): Promise<T> {
    return this.request<T>("GET", `${this.gatewayBaseUrl}${path}`, {
      timeoutMs: this.timeoutMs,
      maxRetries: this.maxRetries,
    });
  }

  /**
   * Shared request machinery for run + account GET helpers. Owns auth headers, retry,
   * timeout, abort composition, JSON parse, and status->error mapping. See SPEC 2.2/2.8.
   */
  protected async request<T>(
    method: string,
    url: string,
    opts: {
      body?: string;
      timeoutMs: number;
      maxRetries: number;
      signal?: AbortSignal;
    },
  ): Promise<T> {
    const headers: Record<string, string> = {
      Accept: "application/json",
    };
    if (opts.body !== undefined) {
      headers["Content-Type"] = "application/json";
    }
    if (this.apiKey) {
      headers["Authorization"] = `Bearer ${this.apiKey}`;
    }

    let attempt = 0;
    for (;;) {
      const { signal, timeoutSignal } = composeSignal(opts.timeoutMs, opts.signal);
      let response: Response;
      try {
        response = await this.fetchImpl(url, {
          method,
          headers,
          ...(opts.body !== undefined ? { body: opts.body } : {}),
          signal,
        });
      } catch (err) {
        // Distinguish timeout from a genuine transport failure.
        if (isTimeoutSignal(timeoutSignal, opts.signal)) {
          throw new TimeoutError("request timed out", 0);
        }
        if (opts.signal?.aborted) {
          throw new ConnectionError("request aborted", 0);
        }
        // Network / DNS / connection reset: retryable.
        const connErr = new ConnectionError(
          err instanceof Error ? err.message : "connection failed",
          0,
        );
        if (attempt < opts.maxRetries) {
          await sleep(backoffDelay(attempt), opts.signal);
          attempt += 1;
          continue;
        }
        throw connErr;
      }

      const requestId = response.headers.get("x-request-id") ?? undefined;

      if (response.status === 200) {
        const text = await response.text();
        try {
          return JSON.parse(text) as T;
        } catch {
          throw new AnyAPIError("failed to parse response JSON", 200, requestId);
        }
      }

      // Non-200: read body for the error message, then map to a typed error.
      const body = await response.text().catch(() => "");
      const message = messageFromBody(body, response.status);

      if (response.status === 429 && attempt < opts.maxRetries) {
        const retryAfter = parseRetryAfter(response.headers.get("retry-after"));
        const delay = retryAfter ?? backoffDelay(attempt);
        await sleep(delay, opts.signal);
        attempt += 1;
        continue;
      }

      throw errorFromStatus(response.status, message, requestId);
    }
  }

  /** Internal accessor for GET helpers in account.ts (same base URL / machinery). */
  protected get gatewayBaseUrl(): string {
    return this.baseUrl.replace(/\/+$/, "");
  }

  protected get clientMaxRetries(): number {
    return this.maxRetries;
  }

  protected get clientTimeoutMs(): number {
    return this.timeoutMs;
  }
}
