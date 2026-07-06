"""Public data models and typed dicts for the anyapi SDK (SPEC 3.3, 3.7).

Output models use pydantic v2. The run envelope is discriminated on ``found``:
``OutputFound[T]`` carries the data payload, ``OutputNotFound`` carries None.
Wire keys are camelCase; models use ``populate_by_name`` plus per-field aliases
so callers read snake_case attributes while the transport round-trips camelCase.
Data models allow extra keys (``extra="allow"``) so open provider records keep
unknown fields, exposed via ``.model_extra``.
"""

from __future__ import annotations

from typing import Any, Generic, Literal, TypeVar

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import TypedDict

from ._errors import NotFoundError

__all__ = [
    "OutputFound",
    "OutputNotFound",
    "Output",
    "RunResult",
    "unwrap",
    "Balance",
    "AccountProfile",
    "CatalogEntry",
    "RequestOptions",
    "AgentSignupResult",
]

T = TypeVar("T")


class OutputFound(BaseModel, Generic[T]):
    """The ``found: true`` branch: the upstream returned a matching entity."""

    found: Literal[True]
    data: T


class OutputNotFound(BaseModel):
    """The ``found: false`` branch: no matching entity, ``data`` is None."""

    found: Literal[False]
    data: None = None


# Output[T] is the discriminated union on `found`.
Output = OutputFound[T] | OutputNotFound


class RunResult(BaseModel, Generic[T]):
    """The normalized run envelope returned by ``POST /v1/run/{slug}``.

    Extra top-level keys round-trip via ``.model_extra`` (the envelope root is
    open). ``provider`` is always the literal ``"AnyAPI"``; upstream backends
    are never named.
    """

    model_config = ConfigDict(extra="allow", populate_by_name=True)

    output: OutputFound[T] | OutputNotFound = Field(
        discriminator="found"
    )
    provider: Literal["AnyAPI"]
    cost_usd: float = Field(alias="costUsd")
    items: int | None = None
    hint: str | None = None


def unwrap(result: RunResult[T]) -> T:
    """Return the data payload when found, else raise :class:`NotFoundError`.

    Narrows ``Output[T]`` to ``T``.
    """
    output = result.output
    if isinstance(output, OutputFound):
        return output.data
    raise NotFoundError("no matching result was found", status=404)


class Balance(BaseModel):
    """Wallet balance in USD (the server returns ``{usd}`` already in USD)."""

    usd: float


class AccountProfile(BaseModel):
    """Account profile from ``GET /v1/me`` (internal fields dropped)."""

    model_config = ConfigDict(populate_by_name=True)

    id: str
    email: str | None = None
    status: str
    created_at: str = Field(alias="createdAt")
    onboarding_complete: bool = Field(alias="onboardingComplete")


class CatalogEntry(BaseModel):
    """One catalog SKU. ``price_usd`` is the cheapest per-request price in USD."""

    model_config = ConfigDict(populate_by_name=True)

    slug: str
    platform: str
    action: str
    name: str
    category: str
    description: str
    price_usd: float = Field(alias="priceUsd")


class RequestOptions(TypedDict, total=False):
    """Per-call response shaping and transport overrides (SPEC 3.7).

    ``fields``, ``max_items``, and ``summary`` shape the response and do NOT
    change cost. ``timeout`` overrides the client per-request timeout (seconds).
    ``max_retries`` overrides the client retry cap for this call.
    """

    fields: list[str]
    max_items: int
    summary: bool
    timeout: float
    max_retries: int


class AgentSignupResult(BaseModel):
    """Result of :func:`anyapi.agent_signup` (SPEC 3.7)."""

    model_config = ConfigDict(populate_by_name=True)

    secret: str
    cap_usd: float = Field(alias="capUsd")
    claim_token: str = Field(alias="claimToken")
    claim_url: str = Field(alias="claimUrl")


# Convenience alias used by the transport for untyped generic runs.
AnyRunResult = RunResult[Any]
