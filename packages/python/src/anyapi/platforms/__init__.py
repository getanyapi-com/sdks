# Generated - do not edit. Regenerate with: pnpm generate
#
# The py-emitter agent replaces this file. Per-platform modules are lazy-imported
# via __getattr__ on the client so `import anyapi` stays fast (see SPEC.md 3.1).
#
# Contract (target for the py-emitter): REGISTRY maps each client attribute name
# (snake_case platform, e.g. "amazon") to a 3-tuple
#   (module_suffix, sync_class_name, async_class_name)
# where anyapi.platforms.<module_suffix> defines both classes. The sync client
# instantiates the sync class, the async client the async class; both look up
# the SAME key in this SAME table. See anyapi._client for the full contract.
#
# GENERATED namespace registry goes here (the emitter replaces this dict):
from __future__ import annotations

REGISTRY: dict[str, tuple[str, str, str]] = {}
