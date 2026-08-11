# AnyAPI SDKs

Official typed SDKs for [AnyAPI](https://getanyapi.com): any API, one wallet, USD, no
subscriptions. Reach hundreds of scraping and data APIs through one interface and one key;
pay per request in real US dollars.

- **TypeScript:** [`@getanyapi/sdk`](packages/typescript) (npm) - zero runtime deps, ESM + CJS,
  Node 18+ and edge runtimes.
- **Python:** [`getanyapi`](packages/python) (PyPI) - httpx + pydantic v2, Python 3.10+, sync
  and async clients.

Generated per-SKU methods track the platform's `/openapi.json`; the handwritten account and
discovery clients are maintained separately and must be reviewed when catalog/search/detail
contracts change. See the main repository's `ECOSYSTEM.md` before changing either surface.
The gateway owns validation, routing, lane order, failover, pricing relationships, health
semantics, and billing. The discovery clients safety-scan customer-facing invariants and
project known fields, but intentionally ignore safe additive fields and do not reimplement
gateway business rules.

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

- **Not found vs error.** A success always resolves. Current generated operations wrap the
  payload in a `found` flag (`output.found` is `false` when the upstream had no match, which is
  not an error).
  `unwrap(res)` returns the data or throws `ResultNotFoundError` (a subclass of
  `NotFoundError`) on an empty result. If a future committed schema uses a bare output,
  `unwrap` returns its data object as-is.
- **Replays.** `res.replayed` is `true` when the gateway served a stored response for a
  repeated idempotency key rather than running the SKU again (a replay is not billed twice).
  A replay can outlive its stored payload (a 24h expiry, or a payload too large to store);
  that response carries the run metadata with a null `output`, and `unwrap` throws
  `AnyAPIError` rather than hand back an empty payload typed as your data. Re-run without
  the idempotency key to fetch the data again.
- **Pagination.** Paginated SKUs expose an iterator (`client.reddit.iterSearch(...)` /
  `client.reddit.iter_search(...)`) that yields items across pages and follows the cursor.
  Call `.pages()` on it to walk whole results and read each page's `costUsd` / `cost_usd`.
- **Request options.** `fields`, `maxItems`/`max_items`, and `summary` trim the response to
  save context/bandwidth; they do NOT change the price. Per-call `timeout(Ms)` and retry
  overrides live here too.
- **Errors and retries.** Every failure raises an `AnyAPIError` subclass mapped from the HTTP
  status (400/401/402/404/429/502, plus `Connection`/`Timeout` at status 0). Only 429 and
  proven pre-send network failures retry, with jittered backoff honoring `Retry-After`; timeouts
  never retry. For billed TypeScript `run()` calls, Node's built-in undici transport and Bun
  1.3.11 expose qualifying proof. Cloudflare Workers, Deno, and browsers do not, so an unknown
  send phase gets no automatic network retry. Python `httpx.ConnectError` qualifies, while
  ambiguous `ReadError` does not. Default `maxRetries`/`max_retries` is 2.
- **Waiting out an in-flight run.** A 409 whose code is `idempotency_in_progress` means the
  gateway is still executing the run that key claims, so it is the one retryable 4xx: the SDK
  waits the server's `Retry-After` in full (past the 8s ordinary ceiling) and returns the
  replayed result. `maxInProgressWaitMs` / `max_in_progress_wait` (default 60s) bounds the total
  time one call may block on that. Every other 409 raises immediately.
- **Agent signup.** `agentSignup()` / `agent_signup()` bootstraps a capped starter key with no
  account, for autonomous agents; a human funds it via the returned claim URL.

## Repo layout

- `SPEC.md` - the frozen contract (IR shape, naming rules, runtime signatures). Read this
  before touching anything.
- `openapi.json` + `catalog.json` - committed snapshots of the live gateway. OpenAPI owns
  generated method schemas; discovery owns category and the complete `pricing.from` first
  runtime-lane USD offer.
  Both are verbatim upstream artifacts and the only files exempt from the dash guard.
- `generator/` - internal codegen (not published). It reads the two snapshots, emits a
  deterministic `ir.json` (the normalized intermediate the emitters consume), a
  `fixtures.json` (one synthetic run-response per SKU, used by the integration tests), and
  the two generated SDK trees. `ir.json` and `fixtures.json` are committed.
- `packages/typescript/` - the `@getanyapi/sdk` package. Handwritten runtime in `src/core/`;
  emitted namespaces, sku-map, and client in `src/generated/`.
- `packages/python/` - the `getanyapi` package. Handwritten runtime in `src/getanyapi/` (`_*.py`
  - `types.py`); emitted namespaces in `src/getanyapi/platforms/`.

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

The emitters read ONLY `ir.json`, never the raw OpenAPI. During generation, snapshot pricing
is checked for the fields required to document generated methods and every USD amount must be
finite and non-negative rather than silently becoming zero. This build-time snapshot check is
separate from the handwritten tolerant discovery readers.
`pnpm generate` runs the whole
pipeline; `pnpm generate:check` regenerates in memory and byte-compares against the
committed output (the CI drift gate). Two runs on the same snapshots are byte-identical.
To refresh from the live gateway: `pnpm --filter @anyapi/generator run fetch` then
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

### Published-artifact smoke

The deterministic tests are mock-only, while required CI also runs credentialless live
catalog/search/detail canaries through both handwritten readers. The published-artifact smoke
adds registry and paid-run coverage. It installs BOTH SDKs FROM the registries (npm + PyPI)
into throwaway temp dirs outside the repo, mints an ephemeral capped key via the public
`/agent/signup` endpoint (no secrets needed), exercises catalog, search, and describe, then
makes one real production call through each. Together these catch discovery drift as well as
packaging bugs, missing files, broken exports or types, that source-tree tests cannot see.

```bash
bash scripts/smoke.sh            # smoke the latest published version
VERSION=0.7.0 bash scripts/smoke.sh
```

It exits nonzero if either SDK fails and prints a per-SDK PASS/FAIL summary. In CI it is a
standalone workflow (`.github/workflows/smoke.yml`) that runs nightly (08:00 UTC) and on manual
dispatch (with an optional `version` input). Release recovery also smokes both exact versions
before creating the GitHub Release. The smoke is not wired into `ci.yml` or branch protection,
so registry or upstream flakiness never blocks a PR.

## Releasing

Releases are automated from the live catalog. Two workflows drive it:

- `.github/workflows/regen.yml` (auto-bump) runs on a `repository_dispatch` of type
  `sdk-refresh` (the AnyAPI monorepo fires this after each gateway deploy), a nightly cron
  fallback, and manual dispatch. It fetches the live `openapi.json` + `catalog.json`,
  regenerates the whole tree, and classifies the IR diff:
  - a new SKU, optional field, enum member, or platform -> **minor**;
  - proven documentation, pricing, or emitter-neutral metadata changes -> **patch**;
  - byte-identical IR, fixtures, and both emitted trees -> **none** (no commit, loop-safe);
  - removals, contract changes, or unexplained generated output -> **blocked**.

  The workflow first proves that the committed generated trees match the old IR. Public
  generated changes must then appear in both language trees, and the post-refresh drift check
  proves that both match the new IR. A blocked run uploads the old/new IR, release notes, and
  generated diff, then fails before versioning, committing, or tagging. On patch or minor it applies the version to BOTH
  `packages/typescript/package.json` and `packages/python/pyproject.toml` in lockstep, commits
  the regenerated tree, tags `v<X.Y.Z>`, pushes, and dispatches `release.yml`. The change
  summary is the commit body and becomes the GitHub Release notes.

- `.github/workflows/release.yml` (publish) runs on a `v*` tag push and on manual dispatch
  (`tag` input). `verify` re-runs the full gate suite and asserts the tag matches both
  manifests. It queries the exact version on npm and PyPI, skips a side already present,
  publishes a missing side, then re-queries both and smokes both exact versions. When PyPI was
  missing at preflight, terminal verification first waits its documented 60-second default
  cache TTL so the pre-publish 404 cannot mask the upload. Only then does it create the GitHub
  Release. This makes rerunning the same tag a recovery operation instead of attempting to
  republish an immutable version.

### Manual compatibility release

For a coordinated discovery cut, bump both manifests in lockstep, merge the SDK change, then
tag that exact main commit. `release.yml` verifies the full suite and version match before
repairing either missing registry side and smoking both exact versions. Follow the
cross-repository release order in the main
repository's `ECOSYSTEM.md`; do not infer it from generator automation.

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
- Ranked queries use `search`; `catalog` is category-only browsing.
- ASCII hyphen only: no em dashes or en dashes anywhere except the upstream `openapi.json`
  snapshot.

Generated code is committed and carries a `Generated - do not edit` header. Edit the
generator, not the output.

## License

MIT
