# AnyAPI SDKs

Official typed SDKs for [AnyAPI](https://getanyapi.com): any API, one wallet, USD, no
subscriptions. Reach hundreds of scraping and data APIs through one interface and one key;
pay per request in real US dollars.

- **TypeScript:** [`@getanyapi/sdk`](packages/typescript) (npm) - zero runtime deps, ESM + CJS,
  Node 18+ and edge runtimes.
- **Python:** [`getanyapi`](packages/python) (PyPI) - httpx + pydantic v2, Python 3.10+, sync
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
from getanyapi import AnyAPI

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
- `packages/python/` - the `getanyapi` package. Handwritten runtime in `src/getanyapi/` (`_*.py`
  + `types.py`); emitted namespaces in `src/getanyapi/platforms/`.

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

## Releasing

Releases are automated from the live catalog. Two workflows drive it:

- `.github/workflows/regen.yml` (auto-bump) runs on a `repository_dispatch` of type
  `sdk-refresh` (the AnyAPI monorepo fires this after each gateway deploy), a nightly cron
  fallback, and manual dispatch. It fetches the live `openapi.json` + `catalog.json`,
  regenerates the whole tree, and classifies the IR diff:
  - a new SKU, a new input/output field, a new enum member, or a new platform -> **minor**;
  - a removed SKU, field, or enum member -> **patch**, but the commit body WARNS loudly
    (removals are deferred to a scheduled major, never auto-bumped to major here);
  - pricing, descriptions, pagination flips, doc-only churn -> **patch**;
  - no SKU-surface change (snapshot metadata only) -> **none** (no commit, loop-safe).

  On a non-`none` bump it applies the version to BOTH `packages/typescript/package.json` and
  `packages/python/pyproject.toml` in lockstep, commits the regenerated tree, tags `v<X.Y.Z>`,
  pushes, and dispatches `release.yml`. The change summary (the classifier output) is the
  commit body and becomes the GitHub Release notes.

- `.github/workflows/release.yml` (publish) runs on a `v*` tag push and on manual dispatch
  (`tag` input). `verify` re-runs the full gate suite and asserts the tag matches both
  manifests; then `publish-npm` publishes `@getanyapi/sdk` with `--provenance`, `publish-pypi`
  publishes `getanyapi` via PyPI trusted publishing (OIDC, `pypi` environment), and
  `github-release` cuts the Release.

### Cutting the first release (manual v0.1.0)

The version starts at `0.0.0`; the first publish is manual because there is no prior tag.

1. Bump both manifests in lockstep and commit on `main`:
   `pnpm --filter @anyapi/generator run version:apply 0.1.0` (edits both files), then commit.
2. Create and push the tag: `git tag v0.1.0 && git push origin v0.1.0`. The tag push
   triggers `release.yml` (a human-pushed tag fires the `push` trigger, unlike a
   bot-pushed one). Or dispatch it: `gh workflow run release.yml -f tag=v0.1.0`.
3. `verify` runs the full gate and the version match, then npm and PyPI publish in parallel.

The npm publish works immediately (the `NPM_TOKEN` secret is set on the repo). The PyPI
publish requires the trusted publisher to exist first (see next).

### One-time PyPI trusted-publishing setup

Trusted publishing has no API token; it authorizes this repo's workflow via OIDC. Until it is
configured, `publish-pypi` fails with a clear "trusted publisher not configured" message
(that is expected, and we do NOT fall back to a token). Configure it once on PyPI:

- For a project that does not exist yet, add a **pending publisher** at
  <https://pypi.org/manage/account/publishing/>; for an existing project use its
  Settings -> Publishing page. Fill in:
  - PyPI Project Name: `getanyapi`
  - Owner: `getanyapi-com`
  - Repository name: `sdks`
  - Workflow name: `release.yml`
  - Environment name: `pypi`

  These must match `release.yml` exactly (the `publish-pypi` job runs in `environment: pypi`).
  Re-run the failed `publish-pypi` job (or the whole release) once the publisher is saved.

## Rules (non-negotiable)

- Prices are always USD. Credits (an internal unit) never appear in the SDK.
- The provider is always `"AnyAPI"`. Upstream backends are never named.
- ASCII hyphen only: no em dashes or en dashes anywhere except the upstream `openapi.json`
  snapshot.

Generated code is committed and carries a `Generated - do not edit` header. Edit the
generator, not the output.

## License

MIT
