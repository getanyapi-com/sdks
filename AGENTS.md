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
4. Follow the release order in `ECOSYSTEM.md`; do not publish from an agent branch.
