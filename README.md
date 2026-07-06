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
- `openapi.json` + `catalog.json` - committed snapshots of the live gateway (the generator
  inputs: schemas/pricing ceiling from openapi, category/per-item pricing from catalog).
  Both are verbatim upstream artifacts and the only files exempt from the dash guard.
- `generator/` - internal codegen (not published). It reads the two snapshots, emits a
  deterministic `ir.json` (the normalized intermediate the emitters consume), a
  `fixtures.json` (one synthetic run-response per SKU, used by the integration tests), and
  the two generated SDK trees. `ir.json` and `fixtures.json` are committed.
- `packages/typescript/` - the `@anyapi/sdk` package. Handwritten runtime in `src/core/`;
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
