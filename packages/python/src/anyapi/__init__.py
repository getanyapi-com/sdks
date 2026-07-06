"""anyapi - official typed Python SDK for AnyAPI.

    from anyapi import AnyAPI, AsyncAnyAPI, agent_signup, unwrap
    from anyapi import AnyAPIError, NotFoundError, RateLimitedError  # etc.

Sync and async clients share generated per-platform namespaces (attached lazily)
through a single transport seam. Output models are pydantic v2; open provider
records round-trip unknown fields via ``.model_extra``. See ../../../SPEC.md
section 3 for the frozen public surface.
"""

from __future__ import annotations

from ._async_client import AsyncAnyAPI
from ._client import AnyAPI, agent_signup
from ._errors import (
    AnyAPIError,
    AuthenticationError,
    BadRequestError,
    ConnectionError,
    InsufficientBalanceError,
    NotFoundError,
    RateLimitedError,
    TimeoutError,
    UpstreamError,
)
from ._pagination import AsyncPaginator, Paginator
from .types import (
    AccountProfile,
    AgentSignupResult,
    Balance,
    CatalogEntry,
    Output,
    OutputFound,
    OutputNotFound,
    RequestOptions,
    RunResult,
    unwrap,
)

__version__ = "0.0.0"

__all__ = [
    # clients + top-level functions
    "AnyAPI",
    "AsyncAnyAPI",
    "agent_signup",
    "unwrap",
    # result + data models
    "RunResult",
    "Output",
    "OutputFound",
    "OutputNotFound",
    "Balance",
    "AccountProfile",
    "CatalogEntry",
    "RequestOptions",
    "AgentSignupResult",
    # pagination
    "Paginator",
    "AsyncPaginator",
    # errors
    "AnyAPIError",
    "BadRequestError",
    "AuthenticationError",
    "InsufficientBalanceError",
    "NotFoundError",
    "RateLimitedError",
    "UpstreamError",
    "ConnectionError",
    "TimeoutError",
]
