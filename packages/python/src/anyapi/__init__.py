"""anyapi - official typed Python SDK for AnyAPI.

Phase 0 skeleton. The py-runtime agent implements the handwritten layer
(_client, _async_client, _transport, _errors, _pagination, _account, types)
and the py-emitter agent generates src/anyapi/platforms/. See ../../../SPEC.md
section 3 for the frozen public surface.

Public API (once implemented):
    from anyapi import AnyAPI, AsyncAnyAPI, agent_signup, unwrap
    from anyapi import AnyAPIError, NotFoundError, RateLimitedError  # etc.
"""

__version__ = "0.0.0"

__all__ = [
    "AnyAPI",
    "AsyncAnyAPI",
    "agent_signup",
    "unwrap",
]
