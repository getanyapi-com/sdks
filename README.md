# AnyAPI SDKs

Official typed SDKs for [AnyAPI](https://getanyapi.com): any API, one wallet, USD, no
subscriptions. Reach hundreds of scraping and data APIs through one interface and one key;
pay per request in real US dollars.

- **TypeScript:** [`@getanyapi/sdk`](packages/typescript) (npm) - zero runtime deps, ESM + CJS,
  Node 18+ and edge runtimes.
- **Python:** [`anyapi`](packages/python) (PyPI) - httpx + pydantic v2, Python 3.10+, sync
  and async clients.

Both packages are generated from the platform's own `/openapi.json` (222 SKUs), so they
track the catalog automatically.

## Quickstart (target surface)

TypeScript:

```ts
import { AnyAPI } from "@getanyapi/sdk";

const client = new AnyAPI({ apiKey: process.env.ANYAPI_API_KEY });
const res = await client.google.search({ query: "best coffee maker" });
if (res.output.found) console.log(res.output.data, res.costUsd);
```

Python:

```python
from anyapi import AnyAPI

client = AnyAPI()  # reads ANYAPI_API_KEY from the environment
res = client.google.search(query="best coffee maker")
if res.output.found:
    print(res.output.data, res.cost_usd)
```

## Using the SDK

Both packages share one surface; the per-package READMEs
([TypeScript](packages/typescript/README.md), [Python](packages/python/README.md)) have full
detail. The essentials:

- **Not found vs error.** A success always resolves. Most SKUs wrap the payload in a `found`
  flag (`output.found` is `false` when the upstream had no match, which is not an error).
  `unwrap(res)` returns the data or throws `ResultNotFoundError` (a subclass of
  `NotFoundError`) on an empty result. A few SKUs return their data object directly as
  `output`; `unwrap` returns it as-is and never throws.
- **Pagination.** Paginated SKUs expose an iterator (`client.reddit.iterSearch(...)` /
  `client.reddit.iter_search(...)`) that yields items across pages and follows the cursor.
  Call `.pages()` on it to walk whole results and read each page's `costUsd` / `cost_usd`.
- **Request options.** `fields`, `maxItems`/`max_items`, and `summary` trim the response to
  save context/bandwidth; they do NOT change the price. Per-call `timeout(Ms)` and retry
  overrides live here too.
- **Errors and retries.** Every failure raises an `AnyAPIError` subclass mapped from the HTTP
  status (400/401/402/404/429/502, plus `Connection`/`Timeout` at status 0). Only 429 and
  network failures retry, with jittered backoff honoring `Retry-After`; timeouts never retry.
  Default `maxRetries`/`max_retries` is 2.
- **Agent signup.** `agentSignup()` / `agent_signup()` bootstraps a capped starter key with no
  account, for autonomous agents; a human funds it via the returned claim URL.

## Repo layout

- `SPEC.md` - the frozen contract (IR shape, naming rules, runtime signatures). Read this
  before touching anything.
- `openapi.json` + `catalog.json` - committed snapshots of the live gateway (the generator
  inputs: schemas/pricing ceiling from openapi, category/per-item pricing from catalog).
  Both are verbatim upstream artifacts and the only files exempt from the dash guard.
- `generator/` - internal codegen (not published). It reads the two snapshots, emits a
  deterministic `ir.json` (the normalized intermediate the emitters consume), a
  `fixtures.json` (one synthetic run-response per SKU, used by the integration tests), and
  the two generated SDK trees. `ir.json` and `fixtures.json` are committed.
- `packages/typescript/` - the `@getanyapi/sdk` package. Handwritten runtime in `src/core/`;
  emitted namespaces, sku-map, and client in `src/generated/`.
- `packages/python/` - the `anyapi` package. Handwritten runtime in `src/anyapi/` (`_*.py`
  + `types.py`); emitted namespaces in `src/anyapi/platforms/`.

## How generation works

```
openapi.json + catalog.json   (committed upstream snapshots)
        |  generator/src/ir.ts        (extractor: envelope crack, naming, USD pricing,
        v                              dash normalization, pagination detection)
     ir.json                          (deterministic, sorted, committed)
        |  emit-ts.ts / emit-py.ts / fixtures.ts
        v
  packages/*/src/generated/**   +   generator/fixtures.json
```

The emitters read ONLY `ir.json`, never the raw OpenAPI. `pnpm generate` runs the whole
pipeline; `pnpm generate:check` regenerates in memory and byte-compares against the
committed output (the CI drift gate). Two runs on the same snapshots are byte-identical.
To refresh from the live gateway: `pnpm --filter @anyapi/generator fetch` then
`pnpm generate`.

## Development

```bash
pnpm install
pnpm generate      # snapshots -> ir.json -> fixtures.json + both generated trees
pnpm check         # dash guard + drift check + tsc/vitest/tsup (TS) across packages
```

Python side (its gates run in CI separately from `pnpm check`):

```bash
pip install -e "packages/python[dev]"
cd packages/python && pyright && mypy && pytest
```

## Rules (non-negotiable)

- Prices are always USD. Credits (an internal unit) never appear in the SDK.
- The provider is always `"AnyAPI"`. Upstream backends are never named.
- ASCII hyphen only: no em dashes or en dashes anywhere except the upstream `openapi.json`
  snapshot.

Generated code is committed and carries a `Generated - do not edit` header. Edit the
generator, not the output.

## License

MIT
