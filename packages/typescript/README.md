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
USD flat/linear offers, lanes are anonymous, and provider is always `"AnyAPI"`.

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

Per-call transport overrides: `timeoutMs`, `maxRetries`, and an `AbortSignal` via `signal`.

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
| `ConnectionError`          | 0    | Network or transport failure (retried)     |
| `TimeoutError`             | 0    | Request exceeded its timeout (not retried) |

All extend `AnyAPIError` (with `status` and `requestId`). Retries cover only 429 and network
failures, with jittered exponential backoff honoring `Retry-After`. Default `maxRetries` is 2
(up to 3 attempts); set it on the client or per request. Timeouts are never retried. Configure
with `new AnyAPI({ timeoutMs, maxRetries })`.

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
