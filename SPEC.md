# AnyAPI SDK - FROZEN CONTRACT (Phase 0)

This document is the single source of truth that five parallel agents build against
without talking to each other. Where this file and any other note disagree, this file
wins. Nothing here changes without re-freezing.

AnyAPI (getanyapi.com) is a unified API marketplace: 222 SKUs, each a
`POST /v1/run/{slug}` with normalized JSON Schema 2020-12 input/output pairs. This repo
generates official typed SDKs: `@getanyapi/sdk` (npm) and `getanyapi` (PyPI), generated from
the platform's own `/openapi.json`.

## 0. Hard rules (apply to EVERYTHING in this repo)

These are non-negotiable and enforced in CI where noted.

1. **USD only, never credits.** Every customer-facing surface prices in US dollars.
   Credits are an internal accounting unit and MUST NOT appear in emitted code, doc
   comments, types, or runtime. There is no `credits` field anywhere in the SDK.
2. **Provider is always the literal string `"AnyAPI"`.** Upstream backends are never
   named. `RunResult.provider` is typed as the literal `"AnyAPI"`.
3. **NO EM DASHES OR EN DASHES anywhere in this repo.** The only dash glyph permitted is
   the ASCII hyphen-minus `-` (U+002D). This applies to SPEC.md itself, all source code,
   all doc comments, all string literals, all README/Markdown, and all EMITTED code and
   doc comments. The upstream `openapi.json` snapshot may contain em dashes in its
   descriptions (it is a verbatim upstream artifact); the IR extractor and emitters MUST
   normalize every em dash (U+2014) and en dash (U+2013) to a spaced or unspaced ASCII
   hyphen before the text reaches any emitted file. A CI grep guards emitted output and
   handwritten source (see section 9).
4. **Named exports only in TypeScript.** No `export default` anywhere. The component/class
   name matches its concept; barrels re-export by name.
5. **Generated files carry a header.** The first line of every generated file is a
   comment reading exactly (language-appropriate comment syntax):
   `Generated - do not edit. Regenerate with: pnpm generate`
   Handwritten core files do NOT carry this header.
6. **Zero runtime dependencies in TypeScript.** The published `@getanyapi/sdk` depends on
   nothing at runtime (global `fetch`). Python depends only on `httpx` and `pydantic>=2.5`.

## 1. The IR (intermediate representation)

The generator's IR extractor reads the committed `openapi.json` (schemas, operationId,
name, description, pricing ceiling) and the committed `catalog.json` (a snapshot of the
PUBLIC, no-auth `GET /catalog` endpoint: category, per-item pricing detail). The fetch
step refreshes both snapshots together. It emits a single `ir.json` file: a deterministic, sorted array of SKU
entries plus a version/meta header. The emitters (TS and Python) read ONLY `ir.json` -
never `openapi.json` directly.

### 1.1 Top-level `ir.json` shape

```jsonc
{
  "version": 1,                 // IR schema version; bump only on a breaking IR shape change
  "generatedFrom": "openapi.json snapshot",  // provenance note (free text)
  "openapiVersion": "1.0.0",    // info.version from the source openapi.json
  "baseUrl": "https://api.getanyapi.com",  // servers[0].url from the source document
  "skus": [ /* SkuEntry[], sorted ascending by slug */ ]
}
```

Determinism: `skus` is sorted ascending by `slug` (byte order). Object keys within each
emitted JSON object are written in the key order defined by `ir.schema.json` /
`ir.sample.json` (extractors MUST emit keys in a stable order so `pnpm generate` twice is
byte-identical). Enum arrays preserve the schema's declared order (NOT re-sorted).

### 1.2 `SkuEntry`

```jsonc
{
  "slug": "amazon.reviews",            // the dotted SKU slug, verbatim from the path
  "platform": "amazon",                // slug prefix before the first "."
  "action": "reviews",                 // slug remainder after the first "."
  "operationId": "amazon_reviews",     // from openapi.json; slug with non-alnum -> "_"
  "name": "Amazon Reviews",            // openapi.json operation.summary
  "category": "",                      // catalog category; "" when unknown (snapshot-only)
  "description": "Pull up to 50 ...",  // openapi.json operation.description, dash-normalized
  "pricing": {
    "priceUsd": 0.01625,               // number: fixed amount, or the dynamic ceiling (max)
    "baseUsd": null,                   // number|null: dynamic floor (min); null for fixed
    "perItemUsd": null,                // number|null: catalog perItemCredits->USD; null if unknown
    "perItemUnit": null                // string|null: catalog perItemUnit; null -> "result"
  },
  "tsNamespace": "amazon",             // TS client getter name (camelCase platform)
  "tsMethod": "reviews",               // TS method name (camelCase action)
  "tsIterMethod": null,                // TS async-iterator method name, or null if not paginated
  "pyNamespace": "amazon",             // Python attribute name (snake_case platform)
  "pyMethod": "reviews",               // Python method name (snake_case action)
  "pyIterMethod": null,                // Python "iter_*" method name, or null if not paginated
  "inputTypeName": "AmazonReviewsInput",   // PascalCase(operationId) + "Input"
  "outputTypeName": "AmazonReviewsData",   // PascalCase(operationId) + "Data" (the data payload type)
  "example": { "product": "B07FZ8S74R", "limit": 3 },  // input example, or null
  "input": { /* SchemaNode - the input object schema */ },
  "output": {
    "envelope": "found-data",          // "found-data" or "bare" (v1 erratum, see 1.2 note)
    "data": { /* SchemaNode - the schema of `data` when found:true (the non-null oneOf branch) */ }
  },
  "pagination": {
    "paginated": false,                // true iff input has a "cursor" string field AND output data has "nextCursor"
    "itemsField": null,                // when paginated: the array field on `data` that holds the page items
    "cursorInputField": null,          // when paginated: input cursor field name (always "cursor" in v1)
    "nextCursorField": null            // when paginated: output field name (always "nextCursor" in v1)
  }
}
```

Notes:
- `priceUsd` is derived from `openapi.json` `x-payment-info.price`:
  fixed mode -> `Number(price.amount)`; dynamic mode -> `Number(price.max)`.
- `baseUsd`: dynamic mode -> `Number(price.min)`; fixed mode -> `null`.
- `perItemUsd` / `perItemUnit` and `category` come from the committed `catalog.json`
  snapshot (public `GET /catalog`: `perItemCredits * 0.00001`, `perItemUnit`, `category`
  per slug). The conversion happens INSIDE the extractor; the credits value never reaches
  the IR or any emitted file. When a slug is missing from `catalog.json` they are `null`
  (category "") and emitters MUST tolerate that (fall back to "result" for the unit, and
  omit the per-item clause from the doc comment).
- `outputTypeName` names the type of the `data` payload (the non-null branch). The full
  envelope type is `Output<AmazonReviewsData>` in TS.

**(v1 erratum) Bare envelope.** Not every output is a found/data wrapper. A SKU whose 200
`output` schema does NOT require both `found` and `data` (verified: `reddit.search`,
`reddit.subreddit_posts`, `reddit.post_comments`) returns its data object DIRECTLY as
`output`. For these the extractor sets `output.envelope = "bare"` and `output.data` is the
bare object itself. Runtimes type the run result so `output` IS the data (TS `BareRunResult<T>`
/ Python `BareRunResult[T]`); `unwrap` returns `output` directly and never throws for bare
results. Fixtures for bare SKUs put the synthesized data at `output` (no found/data wrapper).
Found-data SKUs are unchanged.

**(v1 erratum) IR `warnings`.** The top-level IR may carry a `warnings[]` array (each
`{kind, slug, message}`, sorted). The extractor emits a `dead-cursor` warning (and logs a
WARNING block) for a SKU that accepts a `cursor` input but whose surface cannot page it (no
string-cursor + `nextCursor` pair). The emitted surface is unchanged; the list is diffable.

### 1.3 `SchemaNode` (the normalized schema subset)

The registry uses a deliberately tiny JSON Schema 2020-12 subset (verified): no `$ref`,
no `allOf`, no recursion; `oneOf` appears ONLY as the nullable envelope
`[{type:null}, {...}]` and the extractor collapses it before producing a `SchemaNode`
(see 1.4). A `SchemaNode` is one of:

```jsonc
// object
{
  "kind": "object",
  "description": "...",              // optional
  "properties": { "<key>": SchemaNode, ... },  // key order preserved from the schema
  "required": ["k1", "k2"],          // subset of property keys; [] if none
  "open": true,                      // true iff additionalProperties is NOT false (item records are open)
  "mustPopulate": ["k1"]             // keys whose SchemaNode had x-anyapi-must-populate:true (informational)
}

// array
{ "kind": "array", "description": "...", "items": SchemaNode, "mustPopulate": false }

// string
{ "kind": "string", "description": "...", "enum": ["a","b"], "default": "a", "format": "uri" }
//   enum: string[] | null (order preserved). default: value | null. format: string | null.

// integer / number
{ "kind": "integer", "description": "...", "minimum": 1, "maximum": 50, "default": null }
{ "kind": "number",  "description": "...", "minimum": null, "maximum": null, "default": null }

// boolean
{ "kind": "boolean", "description": "...", "default": null }

// null (only appears standalone if a bare null slips through; normally collapsed away)
{ "kind": "null" }

// unknown (fallback: a schema with no recognizable type, or an empty {}; maps to unknown/Any)
{ "kind": "unknown", "description": "..." }
```

Every `SchemaNode` MAY carry an optional `"description"` (string). When absent, omit the
key (do not emit `"description": null`). All descriptions are dash-normalized.

### 1.4 IR extraction edge rules (FROZEN)

The IR extractor MUST apply these exactly. Emitter agents rely on the IR already being
normalized, so they never re-parse raw JSON Schema.

1. **Envelope crack.** Every output schema is
   `{type:object, required:[found,data], properties:{found:bool, data:{oneOf:[{type:null}, DATA]}}}`.
   The extractor produces `output.data = SchemaNode(DATA)` (the non-null branch). If a data
   schema is not wrapped in `oneOf` (some may be a bare object), use it directly. `found`
   is never modeled as a field; it drives the discriminated union in the runtime.
2. **Enums** map to `SchemaNode.enum` (a string array, order preserved). Emitters turn
   these into literal unions (TS) / `Literal[...]` (Python). Enums only ever appear on
   `string` nodes in this catalog; if a non-string enum appears, keep the values verbatim.
3. **Defaults** map to `SchemaNode.default` (verbatim value, or `null` when absent). A
   property WITH a default is treated as optional in the input type regardless of the
   `required` array (the server fills it). A property in `required` and WITHOUT a default
   is required.
4. **Bounds** (`minimum`/`maximum`) are carried on integer/number nodes as
   `number | null`. They are documentation only in v1 (emitters put them in the doc
   comment; no runtime range validation is generated).
5. **Open records.** `additionalProperties:false` -> `object.open = false` (closed;
   applies only to envelopes/data wrappers). Anything else (absent, or `true`) ->
   `object.open = true`. Every operator-populated ITEM record is open. Emitters render
   open objects with an index signature (TS `[extra: string]: unknown`) / pydantic
   `model_config = ConfigDict(extra="allow")` (Python). Closed objects get neither.
6. **`x-anyapi-must-populate`.** On an object property, the parent object's
   `mustPopulate` array lists the annotated keys. On an array node, `mustPopulate` is a
   boolean. Emitters render a doc line for annotated fields. **(v1 erratum, N1)** The line
   reads `Present whenever the upstream returns this record.` and is emitted ONLY on
   OPTIONAL fields (a required field is always present, so the note adds nothing). No type
   change (the field is still typed as its declared type; not made non-optional).
7. **`x-anyapi-domain`** and any other `x-anyapi-*` extension: ignored for typing. Not
   carried into the IR (they do not affect the SDK surface).
8. **`format`** is carried on string nodes (`format: string | null`) for documentation
   only; no type change (a `format:"uri"` string is still `string`).
9. **`example`** is the input schema's top-level `example` value, carried verbatim as
   `SkuEntry.example` (or `null` if absent). NOT carried onto inner SchemaNodes.
10. **Pagination detection.** `pagination.paginated` is `true` IFF the input object has a
    property named exactly `cursor` of kind `string` AND the output `data` object (or its
    single object branch) has a property named exactly `nextCursor`. When paginated:
    - `nextCursorField` = `"nextCursor"`, `cursorInputField` = `"cursor"`.
    - `itemsField` = the name of the FIRST array-kind property on the `data` object
      (scanning declared property order). This is the page item collection the iterator
      walks. (For `facebook.ads_search` that is `ads`.) If no array property exists on a
      paginated data object, set `itemsField` to `null` and `paginated` stays `true` (the
      iterator yields whole pages only; the per-item iterator is not generated -
      `tsIterMethod`/`pyIterMethod` are `null`, see 2.x below).
11. **Description normalization.** Replace every U+2014 (em dash) and U+2013 (en dash)
    with an ASCII hyphen. When the em dash was used as a spaced parenthetical (` - `),
    prefer a spaced hyphen; a bare em dash becomes a bare hyphen. Trim trailing spaces.
    Applied to EVERY description string and EVERY name that reaches the IR.

### 1.5 Naming rules (FROZEN)

Slugs are `platform.action`; platform is `[a-z0-9_]+`, action is `[a-z0-9_]+` (verified:
every one of the 222 slugs is a single dot, lowercase alphanumeric plus underscore, no
digit-leading segment). Rules are written to be total (handle future slugs safely).

**camelCase (TypeScript namespace + method):**
- Split the segment on `_`. Lowercase the first part verbatim. Title-case (first letter
  upper, rest unchanged) each subsequent part and concatenate.
  `user_posts` -> `userPosts`; `ads_search` -> `adsSearch`; `reviews` -> `reviews`;
  `google_ads` -> `googleAds`.
- If the result would start with a digit, prefix `_` (no current slug needs this).

**snake_case (Python namespace + method):** the segment verbatim (already snake_case).
`user_posts` -> `user_posts`; `google_ads` -> `google_ads`.

**PascalCase (type names):** derived from `operationId` (which is
`slug` with every non-alphanumeric char replaced by `_`). Split `operationId` on `_`,
Title-case each part, concatenate. `amazon_reviews` -> `AmazonReviews`;
`facebook_ads_search` -> `FacebookAdsSearch`. Then append the suffix:
`inputTypeName = Pascal + "Input"`, `outputTypeName = Pascal + "Data"`.

**Iterator method naming (paginated SKUs only):**
- TS: `iter` + PascalCase(action). `ads_search` -> `iterAdsSearch`;
  `user_posts` -> `iterUserPosts`. Only emitted when `pagination.paginated` is true AND
  `itemsField` is non-null.
- Python: `iter_` + action (snake_case). `ads_search` -> `iter_ads_search`. Same gate.

**Reserved-word escaping (FROZEN policy; no current collision but must be total):**
- TypeScript: object property/method names may be any identifier including reserved words
  when used as members (`client.threads.delete(...)` is legal), so NO escaping is applied
  to methods/namespaces. If a FUTURE platform equals a reserved word AND is needed as a
  bare identifier binding, that is still fine because namespaces are object properties.
  Type names are PascalCase and cannot collide with reserved words.
- Python: method/attribute names that collide with a Python keyword or soft-keyword get a
  trailing underscore (`class` -> `class_`, `import` -> `import_`). The reserved set is
  `keyword.kwlist` plus `{"match", "case", "type"}`. No current slug triggers this; the
  emitter MUST still implement the guard. TypedDict keys that collide are handled with the
  functional `TypedDict("Name", {...})` form (no current input field triggers this).

**Collision policy (FROZEN):** if, after the above, two SKUs on the same platform produce
the same TS method (or Python method) name, OR two platforms produce the same namespace,
the extractor MUST fail the build with a clear error naming both slugs. There is NO
silent renaming. (Verified: zero collisions in the current 222-SKU catalog.) A collision
is a catalog-authoring problem to fix upstream, not something the SDK papers over.

## 2. TypeScript runtime API (`@getanyapi/sdk`) - FROZEN signatures

All snippets are `.d.ts`-shaped declarations. Handwritten in `src/core/`; the generated
per-platform namespaces attach to the client. `import { AnyAPI } from "@getanyapi/sdk"`.

### 2.1 Client construction

```ts
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

export declare class AnyAPI {
  constructor(options?: ClientOptions);
  // Generated per-platform namespaces are attached as lazy getters, e.g.:
  //   readonly amazon: AmazonNamespace;
  //   readonly facebook: FacebookNamespace;
  // Each namespace exposes typed per-SKU methods (see 2.4).

  /** Generic typed run for any SKU by slug. */
  run<K extends keyof SkuMap>(
    slug: K,
    input: SkuMap[K]["input"],
    options?: RequestOptions,
  ): Promise<RunResult<SkuMap[K]["data"]>>;

  /** Account + catalog helpers (see 2.7). */
  balance(): Promise<{ usd: number }>;
  me(): Promise<AccountProfile>;
  catalog(query?: CatalogQuery): Promise<CatalogEntry[]>;
  describe(slug: string): Promise<CatalogEntry>;
}

/** Static agent self-signup (no key required). */
export declare function agentSignup(options?: AgentSignupOptions): Promise<AgentSignupResult>;
```

### 2.2 Transport protocol (`ClientCore`)

The handwritten core owns exactly one network method that the generated methods call.
Frozen shape so the emitter can target it:

```ts
export interface ClientCore {
  /**
   * Execute POST {baseUrl}/v1/run/{slug} with the JSON input body, response-shaping
   * query params from options, auth header, retries, and timeout. Resolves to the
   * parsed RunResult on HTTP 200; throws a subclass of AnyAPIError otherwise.
   */
  run<T>(slug: string, input: unknown, options?: RequestOptions): Promise<RunResult<T>>;
}
```

Wire behavior (FROZEN):
- Method `POST`, path `/v1/run/{slug}`, body = `JSON.stringify(input)`.
- Headers: `Authorization: Bearer <apiKey>`, `Content-Type: application/json`,
  `Accept: application/json`. (Bearer is the canonical scheme; `X-API-Key` is NOT sent.)
- Query params (only when set in `RequestOptions`): `fields` (comma-joined from
  `options.fields`), `max_items` (from `options.maxItems`), `summary=true` (from
  `options.summary`). These shape the response and do NOT change cost.
- HTTP 200 -> parse JSON into `RunResult<T>`.
- Non-200 -> parse `{ error: string }` and throw the mapped error (section 2.6). A
  network/transport failure throws `ConnectionError`; a timeout throws `TimeoutError`.

### 2.3 Result types

```ts
/** The normalized run envelope returned by /v1/run/{slug}. */
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

/** Discriminated union on `found`. When found is false, data is null. */
export type Output<T> =
  | { found: true; data: T }
  | { found: false; data: null };

/**
 * Return the data payload when found, or throw NotFoundError when the upstream had no
 * matching entity. Narrows Output<T> to T.
 */
export declare function unwrap<T>(result: RunResult<T>): T;
```

`unwrap` throws `ResultNotFoundError` (message: "no matching result was found") when
`result.output.found === false`. **(v1 erratum)** `ResultNotFoundError extends NotFoundError`,
so `catch (NotFoundError)` still catches an empty-result unwrap AND an HTTP 404; catch
`ResultNotFoundError` to handle only empty results. `unwrap` also has a `BareRunResult<T>`
overload that returns `output` directly and never throws.

**(v1 erratum) SkuMap + typed run.** The generated `SkuMap` is a CONCRETE interface (not a
module augmentation, which does not survive `.d.ts` bundling) mapping each slug to
`{ input; data; result }`, where `result` is `RunResult<Data>` or `BareRunResult<Data>` per
envelope. The generated `AnyAPI` subclass declares the typed `run` overloads reading this map;
core keeps only the untyped `run` seam. A consumer-artifact typecheck gate (packs the package
and runs `tsc` over consumer code) guards that typed access compiles, bad input errors, and an
unknown slug falls back to `RunResult<unknown>`.

### 2.4 Generated per-SKU method signature (target for the TS emitter)

Each generated namespace method has this exact shape (example: `amazon.reviews`):

```ts
export interface AmazonNamespace {
  /**
   * Amazon Reviews
   *
   * Pull up to 50 customer reviews for any Amazon product ...
   *
   * Price: $0.01625 per request.
   *
   * @example
   * const res = await client.amazon.reviews({ product: "B07FZ8S74R", limit: 3 });
   */
  reviews(
    input: AmazonReviewsInput,
    options?: RequestOptions,
  ): Promise<RunResult<AmazonReviewsData>>;

  // paginated SKUs additionally get:
  //   iterAdsSearch(input, options?): AsyncIterable<AdItem> & { pages(): AsyncIterable<RunResult<...>> }
  // (see 2.5)
}
```

Input types are TS interfaces with optional/required derived per 1.4.3; enums become
literal unions; open item records get `[extra: string]: unknown`.

### 2.5 Pagination

Paginated SKUs (those with `pagination.paginated && itemsField != null`) gain an iterator
method whose return value is BOTH an async-iterable of items AND carries a `.pages()`
method that yields whole `RunResult`s (so callers can read `costUsd` per page).

```ts
export interface Paginator<Item, Data> extends AsyncIterable<Item> {
  /** Iterate whole pages (each a RunResult) instead of flattened items. */
  pages(): AsyncIterable<RunResult<Data>>;
}

// generated, e.g.:
//   iterAdsSearch(input: FacebookAdsSearchInput, options?: RequestOptions):
//     Paginator<FacebookAdsSearchAd, FacebookAdsSearchData>;
```

Walk semantics (FROZEN):
- Page 1: `run(slug, input, options)`. Read `output.data[itemsField]` (the item array) and
  `output.data.nextCursor`.
- If `output.found === false` or `data` is null, stop (yield nothing further).
- Yield each item from `itemsField`. Then, if `nextCursor` is a non-empty string, set
  `input.cursor = nextCursor` and repeat. A `null`/empty `nextCursor` ends the walk.
- `options.maxItems`, when set, caps the TOTAL items yielded across all pages (the
  iterator stops once the cap is reached; do NOT confuse with the wire `max_items` shaping
  param, which the iterator does NOT send - it manages paging itself).
- `.pages()` yields each `RunResult` (including the last) and stops on null `nextCursor`.

### 2.6 Error hierarchy (FROZEN)

```ts
export declare class AnyAPIError extends Error {
  /** HTTP status code, or 0 for transport-level failures (connection/timeout). */
  readonly status: number;
  /** The x-request-id response header when present, else undefined. */
  readonly requestId?: string;
  constructor(message: string, status: number, requestId?: string);
}

export declare class BadRequestError extends AnyAPIError {}        // 400
export declare class AuthenticationError extends AnyAPIError {}    // 401
export declare class InsufficientBalanceError extends AnyAPIError {} // 402
export declare class NotFoundError extends AnyAPIError {}          // 404
export declare class RateLimitedError extends AnyAPIError {}       // 429
export declare class UpstreamError extends AnyAPIError {}          // 502
export declare class ConnectionError extends AnyAPIError {}        // status 0, network failure
export declare class TimeoutError extends AnyAPIError {}           // status 0, request timed out
```

Status -> class mapping (FROZEN):
`400 -> BadRequestError`, `401 -> AuthenticationError`, `402 -> InsufficientBalanceError`,
`404 -> NotFoundError`, `429 -> RateLimitedError`, `502 -> UpstreamError`. Any other
non-2xx status -> `AnyAPIError` (base) with that status. Transport failures ->
`ConnectionError` (status 0); timeouts -> `TimeoutError` (status 0). The error `message`
is the `error` field from the JSON body, or a generic fallback when the body is unparseable.

### 2.7 Account, catalog, agent signup

```ts
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

export interface AccountProfile {
  id: string;
  email?: string;
  status: string;
  createdAt: string;
  onboardingComplete: boolean;
}

export interface CatalogQuery { query?: string; category?: string; }

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

export interface AgentSignupOptions {
  baseUrl?: string;         // default https://api.getanyapi.com
  fetch?: typeof fetch;
  sponsorEmail?: string;    // optional human verification channel
  label?: string;           // optional key label
}

export interface AgentSignupResult {
  secret: string;           // the API key, returned once
  capUsd: number;           // per-key spend cap in USD
  claimToken: string;
  claimUrl: string;
}
```

- `balance()` -> GET `/v1/balance` -> `{ usd }` (server returns `{ usd }` already in USD).
- `me()` -> GET `/v1/me` -> mapped to `AccountProfile` (drop `clerkUserId`,
  `signupGrantApplied`; keep `id`, `email`, `status`, `createdAt`, `onboardingComplete`).
- `catalog(query?)` -> GET `/v1/apis?query=&category=` -> `CatalogEntry[]` (from
  `{ apis: [...] }`, deriving `platform`/`action` from `slug`, `priceUsd` from
  `fromCredits * 0.00001`).
- `describe(slug)` -> GET `/v1/apis/{slug}` -> one `CatalogEntry`. 404 -> `NotFoundError`.
- `agentSignup()` -> POST `/agent/signup` (NO auth header) -> `AgentSignupResult` (map
  `capUsd`, `secret`, `claimToken`, `claimUrl`).

### 2.8 Retry policy (FROZEN, both languages)

- Retry ONLY on: HTTP 429 (`RateLimitedError`) and transport failures (`ConnectionError`).
- Do NOT retry: 400, 401, 402, 404, 502, or any parsed non-2xx that is not 429; do NOT
  retry `TimeoutError` (a timed-out request already consumed its budget).
- Default `maxRetries = 2` (so up to 3 total attempts). Configurable on the client and
  per request.
- Backoff: jittered exponential. `delay(attempt) = min(baseDelay * 2**attempt, maxDelay)`
  then multiply by a random factor in `[0.5, 1.5)`. Constants: `baseDelay = 500ms`,
  `maxDelay = 8000ms`. `attempt` starts at 0 for the first retry.
- Honor a `Retry-After` response header on 429 when present (seconds or HTTP-date); use it
  as the delay instead of the computed backoff, capped at `maxDelay`.

## 3. Python runtime API (`getanyapi`) - FROZEN signatures

Mirrors the TS surface. Sync `AnyAPI` and async `AsyncAnyAPI` share generated namespaces
through a transport protocol. TypedDict inputs (PEP 692 `Unpack`), pydantic v2 output
models. `from getanyapi import AnyAPI`.

### 3.1 Client construction

```python
class AnyAPI:
    def __init__(
        self,
        *,
        api_key: str | None = None,      # falls back to os.environ["ANYAPI_API_KEY"]
        base_url: str = "https://api.getanyapi.com",
        timeout: float = 60.0,           # seconds
        max_retries: int = 2,
        http_client: httpx.Client | None = None,
    ) -> None: ...

    # generated lazy namespaces attached via __getattr__ (import stays fast):
    #   self.amazon: AmazonNamespace
    #   self.facebook: FacebookNamespace

    def run(self, slug: str, input: dict[str, Any], *, options: RequestOptions | None = None) -> RunResult[Any]: ...
    def balance(self) -> Balance: ...
    def me(self) -> AccountProfile: ...
    def catalog(self, *, query: str | None = None, category: str | None = None) -> list[CatalogEntry]: ...
    def describe(self, slug: str) -> CatalogEntry: ...
    def close(self) -> None: ...
    def __enter__(self) -> "AnyAPI": ...
    def __exit__(self, *exc: object) -> None: ...


class AsyncAnyAPI:
    def __init__(self, *, api_key: str | None = None, base_url: str = "https://api.getanyapi.com",
                 timeout: float = 60.0, max_retries: int = 2,
                 http_client: httpx.AsyncClient | None = None) -> None: ...
    async def run(self, slug: str, input: dict[str, Any], *, options: RequestOptions | None = None) -> RunResult[Any]: ...
    async def balance(self) -> Balance: ...
    async def me(self) -> AccountProfile: ...
    async def catalog(self, *, query: str | None = None, category: str | None = None) -> list[CatalogEntry]: ...
    async def describe(self, slug: str) -> CatalogEntry: ...
    async def aclose(self) -> None: ...
    async def __aenter__(self) -> "AsyncAnyAPI": ...
    async def __aexit__(self, *exc: object) -> None: ...


def agent_signup(*, base_url: str = "https://api.getanyapi.com",
                 sponsor_email: str | None = None, label: str | None = None) -> AgentSignupResult: ...
```

### 3.2 Transport protocol

```python
class Transport(Protocol):
    """The one network seam generated methods call. Sync and async clients each
    implement a variant; generated code targets the client's `_run`."""
    def _run(self, slug: str, input: dict[str, Any], options: "RequestOptions | None") -> "RunResult[Any]": ...
```

Wire behavior identical to TS 2.2: `POST /v1/run/{slug}`, `Authorization: Bearer`, JSON
body, `fields` / `max_items` / `summary` query params, same status->error mapping, same
retry policy (section 2.8).

### 3.3 Result models (pydantic v2)

```python
from typing import Generic, Literal, TypeVar
from pydantic import BaseModel, ConfigDict

T = TypeVar("T")

class OutputFound(BaseModel, Generic[T]):
    found: Literal[True]
    data: T

class OutputNotFound(BaseModel):
    found: Literal[False]
    data: None = None

# Output[T] = OutputFound[T] | OutputNotFound  (discriminated on `found`)

class RunResult(BaseModel, Generic[T]):
    model_config = ConfigDict(extra="allow")
    output: "OutputFound[T] | OutputNotFound"
    provider: Literal["AnyAPI"]
    cost_usd: float                     # alias "costUsd"
    items: int | None = None

def unwrap(result: "RunResult[T]") -> T:
    """Return data when found, else raise NotFoundError."""
```

Field aliasing: wire keys are camelCase (`costUsd`); models use `populate_by_name=True`
and `alias="costUsd"` (snake_case attribute, camelCase wire). Output data models set
`model_config = ConfigDict(extra="allow")` so open provider records round-trip unknown
fields; `.model_extra` exposes them.

**(v1 erratum) snake_case output attributes.** Generated pydantic OUTPUT models emit
snake_case attribute names with a wire `Field(alias="wireKey")` and `populate_by_name=True`
whenever the two differ (`item.reviews_count` reads wire `reviewsCount`);
`model_dump(by_alias=True)` reproduces the wire shape. INPUT TypedDicts keep the wire keys
verbatim (they are sent as-is) - an intentional asymmetry noted in the READMEs. Generation
hard-fails if two wire keys snake_case to the same attribute within one model. A `BareRunResult[T]`
pydantic model mirrors `RunResult[T]` for bare SKUs (SPEC 1.2 erratum); `ResultNotFoundError`
subclasses `NotFoundError` as in TS.

### 3.4 Generated per-SKU method (target for the Python emitter)

```python
class AmazonReviewsInput(TypedDict, total=False):
    product: Required[str]   # Amazon product ASIN or full product URL ...
    limit: int               # Maximum number of results to return (1-50, default 50) ...
    sort: Literal["helpful", "recent"]
    region: Literal["amazon.com", "amazon.ca", ...]

class AmazonNamespace:
    def reviews(self, **input: Unpack[AmazonReviewsInput]) -> RunResult[AmazonReviewsData]:
        """Amazon Reviews

        Pull up to 50 customer reviews ...

        Price: $0.01625 per request.

        Example:
            res = client.amazon.reviews(product="B07FZ8S74R", limit=3)
        """
    # paginated SKUs additionally get:
    #   def iter_ads_search(self, **input: Unpack[...]) -> Iterator[AdItem]: ...
    #   (and .pages access via a returned Paginator; see 3.5)
```

Async namespaces mirror this with `async def` and `AsyncIterator`. `Required` comes from
`typing_extensions` for 3.10 compatibility; `Unpack` likewise.

### 3.5 Pagination (Python)

```python
class Paginator(Generic[Item, Data]):
    def __iter__(self) -> Iterator[Item]: ...        # flattened items (sync)
    def pages(self) -> Iterator[RunResult[Data]]: ... # whole pages

class AsyncPaginator(Generic[Item, Data]):
    def __aiter__(self) -> AsyncIterator[Item]: ...
    def pages(self) -> AsyncIterator[RunResult[Data]]: ...
```

`iter_*` returns a `Paginator` (sync client) / `AsyncPaginator` (async client). Walk
semantics identical to TS 2.5 (`cursor` in, `nextCursor` out, stop on null/empty,
`options.max_items` caps total items yielded).

### 3.6 Errors (Python)

```python
class AnyAPIError(Exception):
    def __init__(self, message: str, *, status: int, request_id: str | None = None) -> None:
        self.status = status
        self.request_id = request_id

class BadRequestError(AnyAPIError): ...          # 400
class AuthenticationError(AnyAPIError): ...      # 401
class InsufficientBalanceError(AnyAPIError): ... # 402
class NotFoundError(AnyAPIError): ...            # 404
class RateLimitedError(AnyAPIError): ...         # 429
class UpstreamError(AnyAPIError): ...            # 502
class ConnectionError(AnyAPIError): ...          # status 0 (network); name shadows builtin intentionally, exported from getanyapi
class TimeoutError(AnyAPIError): ...             # status 0 (timeout); shadows builtin intentionally
```

Status mapping and retry policy identical to section 2.6 / 2.8.

### 3.7 Account / catalog / signup (Python)

```python
class Balance(BaseModel):
    usd: float

class AccountProfile(BaseModel):
    id: str
    email: str | None = None
    status: str
    created_at: str          # alias "createdAt"
    onboarding_complete: bool # alias "onboardingComplete"

class CatalogEntry(BaseModel):
    slug: str
    platform: str
    action: str
    name: str
    category: str
    description: str
    price_usd: float         # alias "priceUsd" / derived from fromCredits

class RequestOptions(TypedDict, total=False):
    fields: list[str]
    max_items: int
    summary: bool
    timeout: float

class AgentSignupResult(BaseModel):
    secret: str
    cap_usd: float           # alias "capUsd"
    claim_token: str         # alias "claimToken"
    claim_url: str           # alias "claimUrl"
```

## 4. Synthetic fixture envelope format (FROZEN)

For each SKU the generator emits one synthetic run-response fixture, built purely from the
output `data` SchemaNode, used by the integration test suite (call the generated method
with the schema `example` against a mocked transport; assert the typed envelope parses and
open-record passthrough works).

Fixture JSON shape (exactly what a mocked `POST /v1/run/{slug}` returns, HTTP 200):

```jsonc
{
  "output": { "found": true, "data": <SYNTH_DATA> },
  "provider": "AnyAPI",
  "costUsd": 0.001,          // any positive number; fixtures assert costUsd > 0
  "items": <N>               // count of items in the primary array field, else 1
}
```

`SYNTH_DATA` construction rules (deterministic):
- For each REQUIRED property of the data object, populate a value by kind:
  - string: `"sample"` (or, if the node has an `enum`, its FIRST enum value; if
    `format:"uri"`, `"https://example.com/x"`).
  - integer: `1`. number: `1.5`. boolean: `true`.
  - object: recurse (populate its required properties).
  - array: a single-element array `[<one synthesized items element>]`.
  - unknown/null: `null`.
- Optional (non-required) properties are omitted (proves optionality typing).
- **One extra key on every OPEN object:** add `"_extra": "passthrough"` to each open
  object (item records and the RunResult root are open) so the test proves unknown fields
  round-trip. Do NOT add it to closed objects (the envelope/data wrappers, which are
  `additionalProperties:false`). For open item records this is where the extra key lands.
- `items` = length of the array at `itemsField` when the SKU is paginated or the data
  object has a primary array; otherwise `1`.
- `x-anyapi-must-populate` fields are always populated in the fixture (they are required
  or explicitly filled), so the fixture proves the "populated when data present" contract.

The fixture is committed alongside the IR (or emitted at generate time into a fixtures
map the tests import); each language's test harness returns it from its mocked transport
(fetch stub / `httpx.MockTransport`).

## 5. Files that carry the generated header

Everything under `packages/typescript/src/generated/` and
`packages/python/src/getanyapi/platforms/` plus `generator/ir.json` (when produced) and any
fixtures map. Handwritten: `packages/*/src/core/*` (TS), `packages/python/src/getanyapi/_*.py`
and `types.py`. Handwritten files must NOT carry the generated header.

## 6. Directory contract (what each Phase 1 agent owns)

```
generator/            # gen-ir, ts-emitter, py-emitter agents
  ir.schema.json      # (this Phase 0) JSON Schema for ir.json
  ir.sample.json      # (this Phase 0) 3-SKU hand-built IR
  src/fetch.ts ir.ts emit-ts.ts emit-py.ts fixtures.ts   # Phase 1
packages/typescript/  # ts-runtime + ts-emitter agents
  src/core/           # HANDWRITTEN client, errors, pagination, account, types
  src/generated/      # emitted: client namespaces, sku-map, platforms/*
packages/python/      # py-runtime + py-emitter agents
  src/getanyapi/      # HANDWRITTEN _client, _async_client, _transport, _errors,
                      #   _pagination, _account, types.py
  src/getanyapi/platforms/  # emitted, lazy-imported via __getattr__
```

## 7. Versions / tooling (FROZEN baseline)

- TypeScript: `strict: true`, target ES2022, module ESNext, `moduleResolution: Bundler`.
  Build with tsup to ESM + CJS + `.d.ts`. Package name `@getanyapi/sdk`, zero runtime deps.
- Python: `requires-python >=3.10`, hatchling build, deps `httpx`, `pydantic>=2.5`,
  `typing_extensions>=4.7`. Package name `getanyapi`. Typed (`py.typed`). Gates: `pyright`
  + `mypy --strict`.
- Node engines: `>=18` (global fetch). ESM + CJS dual export map.

## 8. What is intentionally OUT of scope for v1

API-key management endpoints, x402 / MPP agent-payment rails, MCP, top-up, auto-topup,
operator/seller endpoints, OAuth. Not modeled in the SDK surface.

## 9. CI-guarded invariants (summary)

- Regen drift: `pnpm generate --check` must be a no-op (byte-identical) on a clean tree.
- `tsc --noEmit` strict passes over generated + core TS for all 222 SKUs.
- Consumer-artifact typecheck (v1 erratum): the packed `@getanyapi/sdk` dist type-checks in a
  throwaway consumer project (typed slug access compiles, bad input errors, unknown slug ->
  `RunResult<unknown>`). Guards that the concrete `SkuMap` survives `.d.ts` bundling.
- `pyright` + `mypy --strict` pass over generated + core Python.
- Dash guard: a grep over all tracked files EXCEPT `openapi.json` finds no U+2014 / U+2013.
- Fixture integration suites pass in both languages.
