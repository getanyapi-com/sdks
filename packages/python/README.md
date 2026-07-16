# getanyapi

Official typed Python SDK for [AnyAPI](https://getanyapi.com): any API, one wallet, USD, no
subscriptions. Reach hundreds of scraping and data APIs through one interface and one key; pay
per request in real US dollars. httpx + pydantic v2, Python 3.10+, sync and async clients.

```bash
pip install getanyapi
```

## Quickstart

```python
from getanyapi import AnyAPI

client = AnyAPI()  # reads ANYAPI_API_KEY from the environment
res = client.reddit.search(query="mechanical keyboard")
if res.output.found:
    for post in res.output.data.posts:
        print(post.title, post.score)
print("charged", res.cost_usd, "USD")
```

Async:

```python
from getanyapi import AsyncAnyAPI

async with AsyncAnyAPI() as client:
    res = await client.google.search(query="best coffee maker")
```

## Inputs vs outputs (naming asymmetry)

Input keyword arguments mirror the wire API verbatim (camelCase where the API uses it), because
they are sent as-is. Output models are Pythonic: attributes are snake_case with a wire alias
(`item.reviews_count` reads the wire `reviewsCount`), and `model_dump(by_alias=True)` reproduces
the wire shape. Open provider records round-trip unknown fields via `.model_extra`.

## Not found vs error

A successful call always returns. For most SKUs the payload is wrapped in a `found` flag:
`res.output.found` is `False` when the upstream had no matching entity (not an error). Use
`unwrap` to get the data or raise `ResultNotFoundError` when empty:

```python
from getanyapi import unwrap, ResultNotFoundError

res = client.amazon.reviews(product="B07FZ8S74R")
try:
    data = unwrap(res)  # the typed data payload, or raises
except ResultNotFoundError:
    ...  # empty result (found: False), not an HTTP failure
```

`ResultNotFoundError` subclasses `NotFoundError`, so `except NotFoundError` catches both an
HTTP 404 and an empty result; catch `ResultNotFoundError` to handle only empty results. If a
future committed schema uses a bare output, generated typing returns its data object directly
rather than relying on a hard-coded SKU list.

## Discovery

```python
apis = client.catalog(category="search")
matches = client.search(query="web search", platform="google", limit=10)
api = client.describe(matches.results[0].slug)
print(api.pricing.from_offer, api.pricing.failover_max_usd, api.input_schema)
```

Sync and async clients expose the same category-only `catalog`, dedicated ranked `search`, and
schema-bearing `describe` methods. Prices are nested USD flat/linear offers, lanes are
anonymous, and provider is always `"AnyAPI"`.

## Pagination

Paginated SKUs expose an `iter_*` method that yields validated item models across pages and
follows the cursor for you. Call `.pages()` on it to walk whole results (each has its own
`cost_usd`).

```python
for post in client.reddit.iter_search(query="coffee", options={"max_items": 100}):
    print(post.title)  # a validated model, not a dict

for page in client.reddit.iter_search(query="coffee").pages():
    print(page.cost_usd)
```

## Request options (context-cost savers)

Pass `options=` to shape the response. These trim what comes back but do NOT change the price:

```python
res = client.google.search(
    query="coffee",
    options={"fields": ["title", "link"], "max_items": 5, "summary": True},
)
```

`options` also carries per-call `timeout` and `max_retries` overrides.

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

All extend `AnyAPIError` (with `.status` and `.request_id`). Retries cover only 429 and network
failures, with jittered exponential backoff honoring `Retry-After`. Default `max_retries` is 2
(up to 3 attempts); set it on the client (`AnyAPI(max_retries=...)`) or per request via
`options`. Timeouts are never retried.

## Agent signup

Bootstrap a key with no account (for autonomous agents):

```python
from getanyapi import agent_signup, AnyAPI

result = agent_signup(label="my-agent")
client = AnyAPI(api_key=result.secret)
```

The key ships with a small starter balance and a per-key spend cap; a human funds it by claiming
it at `result.claim_url`.

## Docs

Full API reference and catalog: [getanyapi.com/docs](https://getanyapi.com/docs).

## License

MIT
