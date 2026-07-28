// Handwritten runtime core: the single network seam plus the public AnyAPI base class.
// See SPEC.md 2.1, 2.2, 2.8. Named exports only; zero runtime deps (global fetch).

import {
  AnyAPIError,
  ConnectionError,
  TimeoutError,
  errorFromStatus,
  requestIdOf,
} from "./errors.js";
import {
  generateIdempotencyKey,
  validateIdempotencyKey,
} from "./idempotency.js";
import {
  mapCatalogDetail,
  mapCatalogList,
  mapCatalogSearch,
  mapProfile,
  type CatalogListResponse,
  type CatalogEntryResponse,
  type ProfileResponse,
} from "./account.js";
import type {
  AccountProfile,
  CatalogEntry,
  CatalogOptions,
  CatalogSearchResults,
  ClientOptions,
  RequestOptions,
  RunResult,
  SearchOptions,
} from "./types.js";

const DEFAULT_BASE_URL = "https://api.getanyapi.com";
const DEFAULT_TIMEOUT_MS = 60_000;
const DEFAULT_MAX_RETRIES = 2;
const RETRY_BASE_DELAY_MS = 500;
const RETRY_MAX_DELAY_MS = 8_000;
/**
 * Ceiling on the TOTAL time one `run()` call may block waiting out an in-progress
 * idempotency claim (SPEC 2.8). The 8s ordinary-backoff ceiling cannot express the
 * gateway's own `Retry-After: 30`, so this separate, much higher budget governs that path.
 * 60s covers two full server-directed waits at today's 30s and doubles as headroom if the
 * gateway ever raises that value. It is a whole-call budget, not a per-wait clamp: a wait
 * longer than the remaining budget is refused outright rather than truncated, because a
 * truncated wait is guaranteed to find the same claim still running and burn an attempt.
 */
const DEFAULT_MAX_IN_PROGRESS_WAIT_MS = 60_000;
/** The only 409 code that means "come back later"; every other 409 is terminal. */
const IDEMPOTENCY_IN_PROGRESS_CODE = "idempotency_in_progress";
const PRE_SEND_NETWORK_ERROR_CODES = new Set([
  "EADDRNOTAVAIL",
  "EAI_AGAIN",
  "EAI_NODATA",
  "EAI_NONAME",
  "ECONNREFUSED",
  "EHOSTUNREACH",
  "ENETUNREACH",
  "ENOTFOUND",
  "UND_ERR_CONNECT_TIMEOUT",
  "ConnectionRefused",
]);

/**
 * The single network seam that generated per-SKU methods call. See SPEC 2.2. The generated
 * platform methods hand it a slug + input and cast the RunResult to their concrete data
 * type (found-data) or to a BareRunResult (bare SKUs); the seam itself stays untyped.
 */
export interface ClientCore {
  run<T>(
    slug: string,
    input: unknown,
    options?: RequestOptions,
  ): Promise<RunResult<T>>;
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
 * Parse a Retry-After header (delta-seconds or HTTP-date) into a non-negative delay in ms.
 * Returns undefined when the header is absent or unparseable. The value is NOT capped here:
 * each caller applies its own ceiling (ordinary backoff clamps to RETRY_MAX_DELAY_MS; the
 * in-progress path measures the raw value against its wait budget).
 */
function parseRetryAfterMs(header: string | null): number | undefined {
  if (header === null) {
    return undefined;
  }
  const trimmed = header.trim();
  if (trimmed === "") {
    return undefined;
  }
  const seconds = Number(trimmed);
  if (Number.isFinite(seconds)) {
    return Math.max(seconds * 1000, 0);
  }
  const dateMs = Date.parse(trimmed);
  if (Number.isFinite(dateMs)) {
    return Math.max(dateMs - Date.now(), 0);
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
  const anyFn = (
    AbortSignal as { any?: (signals: AbortSignal[]) => AbortSignal }
  ).any;
  if (typeof anyFn === "function") {
    return { signal: anyFn([timeoutSignal, callerSignal]), timeoutSignal };
  }
  // Fallback: manually bridge both signals into a controller.
  const controller = new AbortController();
  const abort = (reason: unknown) => controller.abort(reason);
  if (callerSignal.aborted) {
    controller.abort(callerSignal.reason);
  } else {
    callerSignal.addEventListener("abort", () => abort(callerSignal.reason), {
      once: true,
    });
  }
  if (timeoutSignal.aborted) {
    controller.abort(timeoutSignal.reason);
  } else {
    timeoutSignal.addEventListener("abort", () => abort(timeoutSignal.reason), {
      once: true,
    });
  }
  return { signal: controller.signal, timeoutSignal };
}

/**
 * True when an abort reason denotes a timeout (TimeoutError DOMException from
 * AbortSignal.timeout) rather than a caller cancellation.
 */
function isTimeoutSignal(
  timeoutSignal: AbortSignal,
  callerSignal?: AbortSignal,
): boolean {
  if (!timeoutSignal.aborted) {
    return false;
  }
  // If the caller signal also aborted, prefer the caller's cancellation semantics only
  // when the timeout did not fire; here timeout did fire, so treat as timeout.
  return callerSignal?.aborted !== true || timeoutSignal.aborted;
}

/**
 * Return true only when structured runtime metadata proves that fetch failed before a
 * connection could carry request bytes.
 *
 * IMPORTANT: the fetch standard does not expose whether a request body was written.
 * Node fetch preserves system DNS/connect codes and undici socket byte counters under
 * `cause`. Bun uses `ConnectionRefused` only while establishing a connection. Browsers
 * commonly expose only an opaque TypeError. Unknown causes are therefore treated as
 * potentially post-send and are not retried for a billed POST.
 */
function isDefinitelyPreSendConnectionError(error: unknown): boolean {
  const seen = new Set<object>();

  const visit = (value: unknown): boolean => {
    if ((typeof value !== "object" && typeof value !== "function") || value === null) {
      return false;
    }
    if (seen.has(value)) {
      return false;
    }
    seen.add(value);

    const candidate = value as {
      code?: unknown;
      syscall?: unknown;
      socket?: {
        bytesWritten?: unknown;
      };
      cause?: unknown;
      errors?: unknown;
    };
    if (
      typeof candidate.code === "string" &&
      PRE_SEND_NETWORK_ERROR_CODES.has(candidate.code)
    ) {
      return true;
    }
    // ETIMEDOUT alone is ambiguous: a read can time out after the body was sent.
    if (candidate.code === "ETIMEDOUT" && candidate.syscall === "connect") {
      return true;
    }
    // undici SocketError exposes counters at `cause.socket`.
    if (
      candidate.code === "UND_ERR_SOCKET" &&
      candidate.socket?.bytesWritten === 0
    ) {
      return true;
    }
    if (Array.isArray(candidate.errors) && candidate.errors.length > 0) {
      return (
        candidate.errors.some((item) => visit(item)) ||
        visit(candidate.cause)
      );
    }
    return visit(candidate.cause);
  };

  return visit(error);
}

/**
 * Build the request URL with response-shaping query params from options. See SPEC 2.2.
 */
function buildUrl(
  baseUrl: string,
  slug: string,
  options?: RequestOptions,
): string {
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
 * Extract error details from a non-200 body: JSON `error` and `code` fields when present,
 * with a generic status-derived message fallback.
 */
function messageFromBody(
  body: string,
  status: number,
): { message: string; code?: string } {
  if (body) {
    try {
      const parsed = JSON.parse(body) as { error?: unknown; code?: unknown };
      const code =
        typeof parsed.code === "string" && parsed.code !== ""
          ? parsed.code
          : undefined;
      if (typeof parsed.error === "string" && parsed.error !== "") {
        return {
          message: parsed.error,
          ...(code !== undefined ? { code } : {}),
        };
      }
      return {
        message: `request failed with status ${status}`,
        ...(code !== undefined ? { code } : {}),
      };
    } catch {
      // not JSON; fall through
    }
  }
  return { message: `request failed with status ${status}` };
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
  private readonly idempotency: "auto" | "off";
  private readonly maxInProgressWaitMs: number;

  /**
   * The network seam the generated per-platform namespaces target. The base client IS a
   * ClientCore (it implements `run`), so the generated subclass hands `this._core` to each
   * namespace constructor. Kept protected so it is not part of the public surface.
   */
  protected readonly _core: ClientCore = this;

  constructor(options: ClientOptions = {}) {
    this.apiKey = options.apiKey ?? envApiKey();
    if (!this.apiKey) {
      throw new AnyAPIError("no API key: pass apiKey or set ANYAPI_API_KEY", 0);
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
    this.maxInProgressWaitMs =
      options.maxInProgressWaitMs ?? DEFAULT_MAX_IN_PROGRESS_WAIT_MS;
    const idempotency = options.idempotency ?? "auto";
    if (idempotency !== "auto" && idempotency !== "off") {
      throw new TypeError('idempotency must be "auto" or "off"');
    }
    this.idempotency = idempotency;
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
    // Serialize once before entering request's retry loop. Reusing this exact string keeps
    // the raw body bytes stable for gateway idempotency fingerprinting.
    const body = JSON.stringify(input ?? {});
    return this.request<RunResult<T>>(
      "POST",
      buildUrl(this.baseUrl, slug, options),
      {
        body,
        timeoutMs: options?.timeoutMs ?? this.timeoutMs,
        maxRetries: options?.maxRetries ?? this.maxRetries,
        maxInProgressWaitMs:
          options?.maxInProgressWaitMs ?? this.maxInProgressWaitMs,
        ...(options?.idempotencyKey !== undefined
          ? { idempotencyKey: options.idempotencyKey }
          : {}),
        ...(options?.signal ? { signal: options.signal } : {}),
      },
    );
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

  /** Browse catalog SKUs, optionally scoped by category. GET /v1/apis. */
  async catalog(options: CatalogOptions = {}): Promise<CatalogEntry[]> {
    const search = new URLSearchParams();
    if (options.category) {
      search.set("category", options.category);
    }
    const qs = search.toString();
    const raw = await this.httpGet<CatalogListResponse>(
      qs ? `/v1/apis?${qs}` : "/v1/apis",
    );
    return mapCatalogList(raw);
  }

  /** Ranked catalog search. GET /catalog/search. Browse never accepts a query. */
  async search(options: SearchOptions): Promise<CatalogSearchResults> {
    const search = new URLSearchParams({ q: options.query });
    if (options.category) search.set("category", options.category);
    if (options.platform) search.set("platform", options.platform);
    if (options.limit !== undefined) search.set("limit", String(options.limit));
    const raw = await this.httpGet<unknown>(
      `/catalog/search?${search.toString()}`,
    );
    return mapCatalogSearch(raw);
  }

  /** Describe a single SKU by slug. GET /v1/apis/{slug}. 404 -> NotFoundError. See SPEC 2.7. */
  async describe(slug: string): Promise<CatalogEntry> {
    const raw = await this.httpGet<CatalogEntryResponse>(
      `/v1/apis/${encodeURIComponent(slug)}`,
    );
    return mapCatalogDetail(raw);
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
      maxInProgressWaitMs?: number;
      signal?: AbortSignal;
      idempotencyKey?: string;
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
    const billedPost = method === "POST" && opts.body !== undefined;
    if (billedPost && this.idempotency === "auto") {
      const key = opts.idempotencyKey ?? generateIdempotencyKey();
      validateIdempotencyKey(key);
      headers["Idempotency-Key"] = key;
    }

    let attempt = 0;
    // Time already spent blocking on 409 idempotency_in_progress waits for THIS call.
    let inProgressWaitedMs = 0;
    const inProgressBudgetMs = Math.max(
      opts.maxInProgressWaitMs ?? DEFAULT_MAX_IN_PROGRESS_WAIT_MS,
      0,
    );
    for (;;) {
      const { signal, timeoutSignal } = composeSignal(
        opts.timeoutMs,
        opts.signal,
      );
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
        const connErr = new ConnectionError(
          err instanceof Error ? err.message : "connection failed",
          0,
        );
        const requestMayBeBilled = method === "POST" && opts.body !== undefined;
        const safeToRetry =
          !requestMayBeBilled || isDefinitelyPreSendConnectionError(err);
        if (safeToRetry && attempt < opts.maxRetries) {
          await sleep(backoffDelay(attempt), opts.signal);
          attempt += 1;
          continue;
        }
        throw connErr;
      }

      const requestId = requestIdOf(response.headers);

      if (response.status === 200) {
        const text = await response.text();
        try {
          return JSON.parse(text) as T;
        } catch {
          throw new AnyAPIError(
            "failed to parse response JSON",
            200,
            requestId,
          );
        }
      }

      // Non-200: read body for the error message, then map to a typed error.
      const body = await response.text().catch(() => "");
      const { message, code } = messageFromBody(body, response.status);

      const retryAfterMs = parseRetryAfterMs(response.headers.get("retry-after"));

      if (response.status === 429 && attempt < opts.maxRetries) {
        const delay =
          retryAfterMs !== undefined
            ? Math.min(retryAfterMs, RETRY_MAX_DELAY_MS)
            : backoffDelay(attempt);
        await sleep(delay, opts.signal);
        attempt += 1;
        continue;
      }

      // A 409 idempotency_in_progress means the gateway is still running the very call
      // this key claims. Because settlement is detached from the caller's connection, that
      // is the LIKELY server state after an ambiguous transport failure, so waiting it out
      // and collecting the replay is what makes the automatic key useful. No other 409 is
      // retryable: idempotency_conflict and idempotency_needs_review are caller-side
      // problems that a retry can never resolve. See SPEC 2.8.
      if (
        billedPost &&
        response.status === 409 &&
        code === IDEMPOTENCY_IN_PROGRESS_CODE &&
        attempt < opts.maxRetries
      ) {
        const delay = retryAfterMs ?? backoffDelay(attempt);
        // Refuse, rather than truncate, a wait the budget cannot cover: a short wait
        // against a long-running claim just spends an attempt on the same 409.
        if (inProgressWaitedMs + delay <= inProgressBudgetMs) {
          await sleep(delay, opts.signal);
          inProgressWaitedMs += delay;
          attempt += 1;
          continue;
        }
      }

      throw errorFromStatus(response.status, message, requestId, code);
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
