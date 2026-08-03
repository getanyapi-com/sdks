# AnyAPI SDK agent guidance

Before changing discovery, generated methods, pricing, schemas, releases, or customer-facing
integration docs, read the canonical ecosystem map:
<https://github.com/getanyapi-com/anyapi/blob/main/ECOSYSTEM.md>.

Classify the change there and record an impact-ledger disposition for every Adapter. Remember
that regeneration updates generated SKU methods only; it does not update the handwritten
TypeScript and Python `catalog`, `search`, or `describe` clients.

Local pre-flight:

1. Read `SPEC.md` and preserve its USD-only and `AnyAPI` provider invariants.
2. Keep TypeScript and Python public surfaces in lockstep.
3. Run `pnpm check`, then the Python pyright, mypy, and pytest gates documented in `README.md`.
4. Follow the release order in `ECOSYSTEM.md`.

Releasing:

Publishing is tag-triggered, not branch-triggered. Bump all three version surfaces together
with `pnpm --filter @anyapi/generator version:apply <version>`, land the change on `main`,
then push a matching `v<version>` tag. `.github/workflows/release.yml` re-runs the full gate
and refuses to publish unless the tag matches the manifests, then publishes to npm with
provenance and to PyPI via trusted publishing. `regen.yml` uses the same path automatically
for catalog refreshes.

The rule is about the COMMIT, not about who is doing the work: never tag a commit that is not
merged to `main`, because the published artifact would not match the repository's history.
Tagging a merged commit is the normal release path and an agent may run it.
