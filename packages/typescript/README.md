# @getanyapi/sdk

Official typed TypeScript SDK for [AnyAPI](https://getanyapi.com): any API, one wallet, USD,
no subscriptions. Reach hundreds of scraping and data APIs through one interface and one key;
pay per request in real US dollars. Zero runtime dependencies (global `fetch`), ESM + CJS,
Node 18+ and edge runtimes.

```bash
npm install @getanyapi/sdk
```

## Quickstart

```ts
import { AnyAPI } from "@getanyapi/sdk";

// Reads ANYAPI_API_KEY from the environment when apiKey is omitted.
const client = new AnyAPI({ apiKey: process.env.ANYAPI_API_KEY });

const res = await client.reddit.search({ query: "mechanical keyboard" });
if (res.output.found) {
  for (const post of res.output.data.posts) console.log(post.title, post.score);
}
console.log("charged", res.costUsd, "USD");
```

Every SKU is a typed method under its platform namespace (`client.amazon.reviews(...)`,
`client.google.search(...)`). You can also call any SKU generically by slug with full typing:

```ts
const rev = await client.run("amazon.reviews", {
  product: "B07FZ8S74R",
  limit: 3,
});
```

## Not found vs error

A successful call always resolves. For most SKUs the payload is wrapped in a `found` flag:
`output.found` is `false` when the upstream had no matching entity (this is not an error).
Use `unwrap` to get the data or throw `ResultNotFoundError` when empty:

```ts
import { unwrap, ResultNotFoundError } from "@getanyapi/sdk";

const res = await client.amazon.reviews({ product: "B07FZ8S74R" });
try {
  const data = unwrap(res); // the typed data payload, or throws
} catch (e) {
  if (e instanceof ResultNotFoundError) {
    // empty result (found: false), not an HTTP failure
  }
}
```

`ResultNotFoundError` extends `NotFoundError`, so `catch (NotFoundError)` catches both an
HTTP 404 and an empty result; catch `ResultNotFoundError` to handle only empty results. If a
future committed schema uses a bare output, generated typing returns its data object directly
rather than relying on a hard-coded SKU list.

## Discovery

```ts
const apis = await client.catalog({ category: "search" });
const matches = await client.search({
  query: "web search",
  platform: "google",
  limit: 10,
});
const api = await client.describe(matches.results[0]!.slug);
console.log(api.pricing.from, api.pricing.failoverMaxUsd, api.inputSchema);
```

`catalog` is category-only browsing. Ranked queries always use `search`, which returns
`results`, `total`, and `ranking`; `describe` includes schemas. Discovery prices are nested
USD flat/linear offers, lanes are anonymous, and provider is always `"AnyAPI"`. The gateway
owns validation, routing, lane order, failover, pricing relationships, health semantics, and
billing. This handwritten discovery client safety-scans the response, projects known fields,
preserves schemas as opaque JSON, and ignores safe additions. It does not recompute gateway
business rules. Generated per-SKU methods remain a separate OpenAPI-driven surface.

Every catalog and search result carries the gateway-authored `method`, `path`, and execution
mode. Lanes carry their public source identity and complete health sample counts when health is
available. Eligible APIs may carry `tryMaxItems`; ranked search carries the gateway's failover
facts. `describe` also returns `latency`, either the complete trailing-window p50/p95/p99
distribution or `null` when no sample is available.

## Pagination

Paginated SKUs expose an iterator that yields items across pages and follows the cursor for
you. Call `.pages()` on it to walk whole results instead (each carries its own `costUsd`).

```ts
// Flatten items across pages, capped at 100 total.
for await (const post of client.reddit.iterSearch(
  { query: "coffee" },
  { maxItems: 100 },
)) {
  console.log(post.title);
}

// Or walk pages to read per-page cost.
for await (const page of client.reddit
  .iterSearch({ query: "coffee" })
  .pages()) {
  console.log(page.costUsd);
}
```

## Request options (context-cost savers)

Pass a second argument to shape the response. These trim what comes back but do NOT change the
price:

```ts
await client.google.search(
  { query: "coffee" },
  {
    fields: ["title", "link"], // keep only these keys on each item
    maxItems: 5, // cap result rows returned
    summary: true, // structural outline instead of full data
  },
);
```

Per-call transport overrides: `timeoutMs`, `maxRetries`, `maxInProgressWaitMs`, and an
`AbortSignal` via `signal`.

## Errors and retries

| Class                      | HTTP | Meaning                                    |
| -------------------------- | ---- | ------------------------------------------ |
| `BadRequestError`          | 400  | Input failed validation                    |
| `AuthenticationError`      | 401  | Missing or invalid API key                 |
| `InsufficientBalanceError` | 402  | Wallet balance or per-key cap exceeded     |
| `NotFoundError`            | 404  | Slug or resource does not exist            |
| `ResultNotFoundError`      | -    | `unwrap` on an empty found-data result     |
| `RateLimitedError`         | 429  | Too many requests (retried automatically)  |
| `UpstreamError`            | 502  | An upstream backend failed                 |
| `ConnectionError`          | 0    | Network or transport failure               |
| `TimeoutError`             | 0    | Request exceeded its timeout (not retried) |

All extend `AnyAPIError` (with `status` and `requestId`). Retries cover 429, one specific 409
(below), and network failures proven to happen before a request was sent, with jittered
exponential backoff honoring `Retry-After`. Default `maxRetries` is 2 (up to 3 attempts); set it
on the client or per request. Timeouts are never retried. Connection failures during or after a
billed `POST /v1/run` are not retried because the call may already have been charged. When the
send phase is unknown, the SDK does not retry. Configure with
`new AnyAPI({ timeoutMs, maxRetries })`.

### Waiting out a run that is still in flight

Settlement is detached from your connection, so a run keeps going after a connection drops. When
you re-issue a call whose `Idempotency-Key` is still executing, the gateway answers `409` with
`code: "idempotency_in_progress"` and `Retry-After: 30`. The SDK waits that full delay and
retries, so you get the original run's replayed result (`replayed: true`, no second charge)
instead of an error.

The 8s ordinary-backoff ceiling does not apply here; a separate whole-call budget does.
`maxInProgressWaitMs` (default `60000`) caps the TOTAL time one `run()` may block on these
waits, across every retry. A wait that does not fit the remaining budget is refused and the
`409` is thrown rather than truncated into an attempt that would fail anyway. Set
`maxInProgressWaitMs: 0` to surface the `409` immediately and handle it yourself.

No other `409` retries: `idempotency_conflict` (the same key with different input) and
`idempotency_needs_review` are caller-side problems a retry cannot fix.

Automatic network retry of a billed `run()` requires structured runtime evidence that the
request body was not sent:

| Runtime                               | Automatic billed-run network retry | Evidence available to the SDK                                                                             |
| ------------------------------------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Node 18+ with built-in undici `fetch` | Yes                                | DNS and connect codes, connect-phase timeouts, or an undici socket reporting zero bytes written           |
| Bun 1.3.11                            | Yes                                | `ConnectionRefused`, which Bun 1.3.11 emits only while establishing the origin or proxy connection        |
| Cloudflare Workers                    | No                                 | `retryable: true` means transient, not undelivered; it can appear after the origin received the full body |
| Deno                                  | No                                 | Fetch exposes only prose without a structured connection code                                             |
| Browsers                              | No                                 | Fetch generally exposes an opaque `TypeError`                                                             |

On a runtime without strict non-delivery evidence, the SDK makes no automatic network retry for a
billed `run()`. HTTP 429 retry is unchanged. Handle other retries explicitly only when your
application can establish non-delivery.

## Agent signup

Bootstrap a key with no account (for autonomous agents):

```ts
import { agentSignup } from "@getanyapi/sdk";

const { secret, capUsd, claimUrl } = await agentSignup({ label: "my-agent" });
const client = new AnyAPI({ apiKey: secret });
```

The key ships with a small starter balance and a per-key spend cap; a human funds it by
claiming it at `claimUrl`.

## Docs

Full API reference and catalog: [getanyapi.com/docs](https://getanyapi.com/docs).

## License

MIT
