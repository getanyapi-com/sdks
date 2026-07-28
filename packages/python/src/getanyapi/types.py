"""Public data models and typed dicts for the getanyapi SDK (SPEC 3.3, 3.7).

Output models use pydantic v2. The run envelope is discriminated on ``found``:
``OutputFound[T]`` carries the data payload, ``OutputNotFound`` carries None.
Wire keys are camelCase; models use ``populate_by_name`` plus per-field aliases
so callers read snake_case attributes while the transport round-trips camelCase.
Data models allow extra keys (``extra="allow"``) so open provider records keep
unknown fields, exposed via ``.model_extra``.
"""

from __future__ import annotations

from typing import Annotated, Any, Generic, Literal, TypeVar, cast

from pydantic import BaseModel, ConfigDict, Field, model_validator
from typing_extensions import TypedDict

from ._errors import AnyAPIError, ResultNotFoundError

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


_OUTPUT_NOT_RETAINED = (
    "the run output was not retained: this response is an idempotent replay whose "
    "stored payload has expired or was too large to store, so only the run metadata "
    "came back. Re-run the request without the idempotency key (or with a fresh one) "
    "to fetch the data again."
)


def _reject_unretained_output(data: Any) -> Any:
    """Raise the actionable not-retained error before ``output`` is validated.

    The wire sends ``output`` on every success envelope, but an idempotent replay
    can outlive the payload it replays (24h TTL, or a payload over the storage size
    cap), so the body is legally ``{"output": null, ...}``. Neither declared
    ``output`` type admits None, so without this guard pydantic would reject the
    body with a generic ``ValidationError`` that never mentions idempotency, and a
    caller of a generated typed method would never reach :func:`unwrap`.

    Raising a non-``ValueError`` is deliberate: pydantic propagates it unchanged
    rather than folding it into a ``ValidationError``, so the caller sees the same
    :class:`AnyAPIError` (status 200, same message) the TypeScript SDK raises.
    A missing ``output`` key is treated identically, matching SPEC 2.3.
    """
    # Narrow a copy so ``data`` itself keeps its declared type and is returned unchanged
    # (pydantic then validates the original body, guard or no guard).
    incoming: object = data
    if (
        isinstance(incoming, dict)
        and cast("dict[str, object]", incoming).get("output") is None
    ):
        raise AnyAPIError(_OUTPUT_NOT_RETAINED, status=200)
    return data


class RunResult(BaseModel, Generic[T]):
    """The normalized run envelope returned by ``POST /v1/run/{slug}``.

    Extra top-level keys round-trip via ``.model_extra`` (the envelope root is
    open). ``provider`` is always the literal ``"AnyAPI"``; upstream backends
    are never named.

    ``replayed`` is True when the gateway served a stored response for a repeated
    ``Idempotency-Key`` instead of running the SKU again (a replay is not billed
    twice). A replay whose stored payload is no longer retained (a 24h TTL expiry,
    or a payload over the storage size cap) carries the metadata with a null
    ``output``, which :func:`unwrap` rejects. ``result_id`` is an opaque handle to
    the full unshaped result, cached about 15 minutes for a free re-read via
    ``GET /v1/results/{id}``. ``jq_error`` explains why a requested jq reshape did
    not apply; the run was still billed and ``output`` carries the full result.

    ``items`` is REQUIRED: the gateway sends it on every success envelope (its Go
    struct tag carries no ``omitempty``), including a metadata-only replay and the
    free re-read of a cached result.
    """

    model_config = ConfigDict(extra="allow", populate_by_name=True)

    output: OutputFound[T] | OutputNotFound = Field(discriminator="found")
    provider: Literal["AnyAPI"]
    cost_usd: float = Field(alias="costUsd")
    items: int
    replayed: bool
    result_id: str | None = Field(default=None, alias="resultId")
    jq_error: str | None = Field(default=None, alias="jqError")
    hint: str | None = None

    @model_validator(mode="before")
    @classmethod
    def _guard_unretained_output(cls, data: Any) -> Any:
        return _reject_unretained_output(data)


class BareRunResult(BaseModel, Generic[T]):
    """The conditional envelope for an operation without a found/data wrapper.

    If a future generated operation uses this SPEC 1.2 shape, ``output`` is its
    data payload directly. There is no not-found branch to discriminate, so
    ``unwrap`` returns ``output`` directly unless the payload was not retained.

    ``items``, ``replayed``, ``result_id``, and ``jq_error`` carry the same meaning
    and the same wire presence as on :class:`RunResult`.
    """

    model_config = ConfigDict(extra="allow", populate_by_name=True)

    output: T
    provider: Literal["AnyAPI"]
    cost_usd: float = Field(alias="costUsd")
    items: int
    replayed: bool
    result_id: str | None = Field(default=None, alias="resultId")
    jq_error: str | None = Field(default=None, alias="jqError")
    hint: str | None = None

    @model_validator(mode="before")
    @classmethod
    def _guard_unretained_output(cls, data: Any) -> Any:
        return _reject_unretained_output(data)


def unwrap(result: RunResult[T] | BareRunResult[T]) -> T:
    """Return the data payload when found, else raise :class:`ResultNotFoundError`.

    For a found-data ``RunResult`` this narrows ``Output[T]`` to ``T`` and raises
    when ``found`` is false. For a ``BareRunResult`` the output IS the data, so it
    is returned directly.

    Either shape raises :class:`AnyAPIError` when ``output`` is None: an idempotent
    replay can outlive its stored payload, and the caller must never receive None
    typed as ``T``. See SPEC 2.3 / 3.3. Parsing a wire body normally raises that
    same error earlier (``_reject_unretained_output`` runs before field validation),
    so this guard covers models built by ``model_construct`` or by hand.

    Catching ``NotFoundError`` catches both an HTTP 404 and an empty found-data
    result; catch ``ResultNotFoundError`` to handle only empty results.
    """
    # Read through ``object`` so this stays a runtime guard rather than a claim that
    # the declared output type admits None (it does not, in either language).
    payload: object = result.output
    if payload is None:
        raise AnyAPIError(_OUTPUT_NOT_RETAINED, status=200)
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
    ``idempotency_key`` overrides the generated key for this billed POST.
    """

    fields: list[str]
    max_items: int
    summary: bool
    timeout: float
    max_retries: int
    idempotency_key: str


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
