"""Public data models and typed dicts for the getanyapi SDK (SPEC 3.3, 3.7).

Output models use pydantic v2. The run envelope is discriminated on ``found``:
``OutputFound[T]`` carries the data payload, ``OutputNotFound`` carries None.
Wire keys are camelCase; models use ``populate_by_name`` plus per-field aliases
so callers read snake_case attributes while the transport round-trips camelCase.
Data models allow extra keys (``extra="allow"``) so open provider records keep
unknown fields, exposed via ``.model_extra``.
"""

from __future__ import annotations

from typing import Annotated, Any, Generic, Literal, TypeVar

from pydantic import BaseModel, ConfigDict, Field, model_validator
from typing_extensions import TypedDict

from ._errors import ResultNotFoundError

__all__ = [
    "OutputFound",
    "OutputNotFound",
    "Output",
    "RunResult",
    "BareRunResult",
    "unwrap",
    "Balance",
    "AccountProfile",
    "FlatPricingOffer",
    "LinearPricingOffer",
    "PricingOffer",
    "DiscoveryPricing",
    "LaneHealth",
    "DiscoveryLane",
    "CatalogEntry",
    "HighlightField",
    "CatalogSearchResult",
    "CatalogSearchResults",
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

    output: OutputFound[T] | OutputNotFound = Field(discriminator="found")
    provider: Literal["AnyAPI"]
    cost_usd: float = Field(alias="costUsd")
    items: int | None = None
    hint: str | None = None


class BareRunResult(BaseModel, Generic[T]):
    """The conditional envelope for an operation without a found/data wrapper.

    If a future generated operation uses this SPEC 1.2 shape, ``output`` is its
    data payload directly. There is no not-found branch to discriminate, so
    ``unwrap`` returns ``output`` directly and never raises.
    """

    model_config = ConfigDict(extra="allow", populate_by_name=True)

    output: T
    provider: Literal["AnyAPI"]
    cost_usd: float = Field(alias="costUsd")
    items: int | None = None
    hint: str | None = None


def unwrap(result: RunResult[T] | BareRunResult[T]) -> T:
    """Return the data payload when found, else raise :class:`ResultNotFoundError`.

    For a found-data ``RunResult`` this narrows ``Output[T]`` to ``T`` and raises
    when ``found`` is false. For a ``BareRunResult`` the output IS the data, so it
    is returned directly and this never raises.

    Catching ``NotFoundError`` catches both an HTTP 404 and an empty found-data
    result; catch ``ResultNotFoundError`` to handle only empty results.
    """
    if isinstance(result, BareRunResult):
        return result.output
    output = result.output
    if isinstance(output, OutputFound):
        return output.data
    raise ResultNotFoundError("no matching result was found", status=404)


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


class FlatPricingOffer(BaseModel):
    """A fixed, per-request discovery offer."""

    model_config = ConfigDict(
        extra="forbid", strict=True, populate_by_name=True, allow_inf_nan=False
    )

    model: Literal["flat"]
    unit: Literal["request"]
    max_usd: float = Field(alias="maxUsd", ge=0)


class LinearPricingOffer(BaseModel):
    """A capped base-plus-unit discovery offer."""

    model_config = ConfigDict(
        extra="forbid", strict=True, populate_by_name=True, allow_inf_nan=False
    )

    model: Literal["linear"]
    unit: str = Field(min_length=1)
    base_usd: float = Field(alias="baseUsd", ge=0)
    per_unit_usd: float = Field(alias="perUnitUsd", ge=0)
    max_usd: float = Field(alias="maxUsd", ge=0)


PricingOffer = Annotated[
    FlatPricingOffer | LinearPricingOffer, Field(discriminator="model")
]


class DiscoveryPricing(BaseModel):
    model_config = ConfigDict(
        extra="forbid", strict=True, populate_by_name=True, allow_inf_nan=False
    )

    from_offer: PricingOffer = Field(alias="from")
    failover_max_usd: float = Field(alias="failoverMaxUsd", ge=0)


class LaneHealth(BaseModel):
    model_config = ConfigDict(extra="forbid", strict=True, populate_by_name=True)

    window: Literal["30d"]
    uptime_pct: float = Field(alias="uptimePct", ge=0, le=100)
    latency_p50_ms: int = Field(alias="latencyP50Ms", ge=0)
    requests: int = Field(ge=0)


class DiscoveryLane(BaseModel):
    model_config = ConfigDict(extra="forbid", strict=True, populate_by_name=True)

    pricing: PricingOffer
    health: LaneHealth | None = None


class CatalogEntry(BaseModel):
    """One customer-safe API returned by ``catalog`` or ``describe``."""

    model_config = ConfigDict(extra="forbid", strict=True, populate_by_name=True)

    id: str
    slug: str
    name: str
    category: str
    description: str
    provider: Literal["AnyAPI"]
    pricing: DiscoveryPricing
    lanes: list[DiscoveryLane] = Field(min_length=1)
    heavy: bool = False
    try_eligible: bool = Field(alias="tryEligible")
    input_schema: dict[str, Any] | None = Field(default=None, alias="inputSchema")
    output_schema: dict[str, Any] | None = Field(default=None, alias="outputSchema")

    @model_validator(mode="after")
    def pricing_from_matches_first_lane(self) -> CatalogEntry:
        if self.pricing.from_offer != self.lanes[0].pricing:
            raise ValueError("pricing.from must match lanes[0].pricing")
        failover_max_usd = max(lane.pricing.max_usd for lane in self.lanes)
        if self.pricing.failover_max_usd != failover_max_usd:
            raise ValueError(
                "pricing.failoverMaxUsd must match the greatest lane pricing.maxUsd"
            )
        return self


class HighlightField(BaseModel):
    model_config = ConfigDict(extra="forbid", strict=True)

    path: str
    type: str
    why: str | None = None


class CatalogSearchResult(BaseModel):
    model_config = ConfigDict(extra="forbid", strict=True, populate_by_name=True)

    slug: str
    platform_id: str = Field(alias="platformId")
    name: str
    description: str
    category: str
    provider: Literal["AnyAPI"]
    pricing: DiscoveryPricing
    relevance: float = Field(gt=0, le=1)
    highlight_fields: list[HighlightField] | None = Field(
        default=None, alias="highlightFields"
    )


class CatalogSearchResults(BaseModel):
    model_config = ConfigDict(extra="forbid", strict=True)

    results: list[CatalogSearchResult]
    total: int = Field(ge=0)
    ranking: Literal["semantic", "keyword"]


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
    """Result of :func:`getanyapi.agent_signup` (SPEC 3.7)."""

    model_config = ConfigDict(populate_by_name=True)

    secret: str
    cap_usd: float = Field(alias="capUsd")
    claim_token: str = Field(alias="claimToken")
    claim_url: str = Field(alias="claimUrl")


# Convenience aliases used by the transport for untyped generic runs.
AnyRunResult = RunResult[Any]
AnyBareRunResult = BareRunResult[Any]
