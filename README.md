# AnyAPI SDKs

Official typed SDKs for [AnyAPI](https://getanyapi.com): any API, one wallet, USD, no
subscriptions. Reach hundreds of scraping and data APIs through one interface and one key;
pay per request in real US dollars.

- **TypeScript:** [`@anyapi/sdk`](packages/typescript) (npm) - zero runtime deps, ESM + CJS,
  Node 18+ and edge runtimes.
- **Python:** [`anyapi`](packages/python) (PyPI) - httpx + pydantic v2, Python 3.10+, sync
  and async clients.

Both packages are generated from the platform's own `/openapi.json` (222 SKUs), so they
track the catalog automatically.

## Quickstart (target surface)

TypeScript:

```ts
import { AnyAPI } from "@anyapi/sdk";

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

## Repo layout

- `SPEC.md` - the frozen contract (IR shape, naming rules, runtime signatures). Read this
  before touching anything.
- `openapi.json` - committed snapshot of the live gateway spec (the generator input).
- `generator/` - internal codegen (not published): snapshot -> `ir.json` -> emitted sources.
- `packages/typescript/` - the `@anyapi/sdk` package.
- `packages/python/` - the `anyapi` package.

## Development

```bash
pnpm install
pnpm generate      # snapshot -> ir.json -> emitted TS + Python sources
pnpm check         # typecheck + tests + build across packages
```

Python side:

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
