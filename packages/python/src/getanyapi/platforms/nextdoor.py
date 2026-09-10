# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the nextdoor platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class NextdoorBusinessInput(TypedDict, total=False):
    """Input for Nextdoor Business."""

    limit: NotRequired[int]
    """Maximum number of records to return. A business page resolves to one record, so this is always 1. Range: 1 to 1."""
    market: NotRequired[Literal["us", "gb", "ca"]]
    """Nextdoor market the page belongs to: "us" (nextdoor.com), "gb" (nextdoor.co.uk), or "ca" (ca.nextdoor.com). Defaults to "us"."""
    pageSlug: Required[str]
    """Slug of the Nextdoor business page, the last path segment of its /pages/ URL, e.g. "radiant-plumbing-air-conditioning-austin-tx"."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""


class NextdoorSearchInput(TypedDict, total=False):
    """Input for Nextdoor Business Search."""

    city: Required[str]
    """Nextdoor city slug, lowercase, with the city and its state or region joined by two hyphens, e.g. "austin--tx" or "york--england"."""
    limit: NotRequired[int]
    """Maximum number of businesses to return (1-20, default 20). You are billed per result returned, so a lower limit costs less. Range: 1 to 20."""
    market: NotRequired[Literal["us", "gb", "ca"]]
    """Nextdoor market the city belongs to: "us" (nextdoor.com), "gb" (nextdoor.co.uk), or "ca" (ca.nextdoor.com). Defaults to "us"."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    query: Required[str]
    """Business category to look for in that city, e.g. "plumber", "bakery", "electrician"."""


class NextdoorBusinessData(BaseModel):
    items: list[NextdoorBusinessItem] = Field(
        description="The Nextdoor business record for the requested page slug. Populated whenever the provider has data for the entity."
    )


class NextdoorBusinessItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    address: str | None = Field(
        default=None,
        description="Full street address on one line; absent when the business hides or omits it.",
    )
    address_line: str | None = Field(
        default=None,
        alias="addressLine",
        description="Street line of the address; absent when the business hides or omits it.",
    )
    address_unit: str | None = Field(
        default=None,
        alias="addressUnit",
        description="Unit, suite, or floor; absent when the address has none.",
    )
    categories: list[str] | None = Field(
        default=None,
        description='Nextdoor trade categories the business is listed under, e.g. ["Plumber", "Air conditioning service"].',
    )
    city: str | None = Field(
        default=None,
        description="City or locality; absent when the business hides or omits its address.",
    )
    country: str | None = Field(
        default=None, description='ISO 3166-1 alpha-2 country code, e.g. "US".'
    )
    description: str | None = Field(
        default=None,
        description="Business description written by the owner; absent when the page has none.",
    )
    email: str | None = Field(
        default=None,
        description="Primary contact email; absent when the page lists none. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    fave_count: int | None = Field(
        default=None,
        alias="faveCount",
        description="Number of neighbours who have faved (recommended) the business; 0 when none have.",
    )
    hide_address: bool | None = Field(
        default=None,
        alias="hideAddress",
        description="True when the business chose to hide its street address, which is why the address fields can be absent.",
    )
    id: str = Field(
        description='Stable Nextdoor business id, e.g. "business_2345302". Populated whenever the provider has data for the entity.'
    )
    latitude: float | None = Field(
        default=None,
        description="Latitude of the business address; absent when Nextdoor publishes no coordinates.",
    )
    license_id: str | None = Field(
        default=None,
        alias="licenseId",
        description="Trade or contractor licence number the business published; absent when it published none.",
    )
    location_status: str | None = Field(
        default=None,
        alias="locationStatus",
        description='Operating status Nextdoor reports, e.g. "OPEN" or "PERMANENTLY_CLOSED"; empty when unreported.',
    )
    longitude: float | None = Field(
        default=None,
        description="Longitude of the business address; absent when Nextdoor publishes no coordinates.",
    )
    name: str = Field(
        description="Business name as listed on Nextdoor. Populated whenever the provider has data for the entity."
    )
    phone: str | None = Field(
        default=None,
        description='Primary phone number in E.164 form, e.g. "+15122639988"; absent when the page lists none. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.',
    )
    postal_code: str | None = Field(
        default=None,
        alias="postalCode",
        description="Postal or ZIP code; absent when the business hides or omits its address.",
    )
    slug: str = Field(
        description="Page slug for this business. Pass it to nextdoor.business to refetch this record on its own. Populated whenever the provider has data for the entity."
    )
    state: str | None = Field(
        default=None,
        description='State, province, or region code, e.g. "TX"; absent when the business hides or omits its address.',
    )
    url: str = Field(
        description="Canonical Nextdoor business page URL. Populated whenever the provider has data for the entity."
    )
    website: str | None = Field(
        default=None,
        description="Business website URL; absent when the page lists none.",
    )


class NextdoorSearchData(BaseModel):
    items: list[NextdoorSearchItem] = Field(
        description="Nextdoor business records matching the city and category, one per business. Populated whenever the provider has data for the entity."
    )


class NextdoorSearchItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    address: str | None = Field(
        default=None,
        description="Full street address on one line; absent when the business hides or omits it.",
    )
    address_line: str | None = Field(
        default=None,
        alias="addressLine",
        description="Street line of the address; absent when the business hides or omits it.",
    )
    address_unit: str | None = Field(
        default=None,
        alias="addressUnit",
        description="Unit, suite, or floor; absent when the address has none.",
    )
    categories: list[str] | None = Field(
        default=None,
        description='Nextdoor trade categories the business is listed under, e.g. ["Plumber", "Air conditioning service"].',
    )
    city: str | None = Field(
        default=None,
        description="City or locality; absent when the business hides or omits its address.",
    )
    country: str | None = Field(
        default=None, description='ISO 3166-1 alpha-2 country code, e.g. "US".'
    )
    description: str | None = Field(
        default=None,
        description="Business description written by the owner; absent when the page has none.",
    )
    email: str | None = Field(
        default=None,
        description="Primary contact email; absent when the page lists none. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    fave_count: int | None = Field(
        default=None,
        alias="faveCount",
        description="Number of neighbours who have faved (recommended) the business; 0 when none have.",
    )
    hide_address: bool | None = Field(
        default=None,
        alias="hideAddress",
        description="True when the business chose to hide its street address, which is why the address fields can be absent.",
    )
    id: str = Field(
        description='Stable Nextdoor business id, e.g. "business_2345302". Populated whenever the provider has data for the entity.'
    )
    latitude: float | None = Field(
        default=None,
        description="Latitude of the business address; absent when Nextdoor publishes no coordinates.",
    )
    license_id: str | None = Field(
        default=None,
        alias="licenseId",
        description="Trade or contractor licence number the business published; absent when it published none.",
    )
    location_status: str | None = Field(
        default=None,
        alias="locationStatus",
        description='Operating status Nextdoor reports, e.g. "OPEN" or "PERMANENTLY_CLOSED"; empty when unreported.',
    )
    longitude: float | None = Field(
        default=None,
        description="Longitude of the business address; absent when Nextdoor publishes no coordinates.",
    )
    name: str = Field(
        description="Business name as listed on Nextdoor. Populated whenever the provider has data for the entity."
    )
    phone: str | None = Field(
        default=None,
        description='Primary phone number in E.164 form, e.g. "+15122639988"; absent when the page lists none. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.',
    )
    postal_code: str | None = Field(
        default=None,
        alias="postalCode",
        description="Postal or ZIP code; absent when the business hides or omits its address.",
    )
    slug: str = Field(
        description="Page slug for this business. Pass it to nextdoor.business to refetch this record on its own. Populated whenever the provider has data for the entity."
    )
    state: str | None = Field(
        default=None,
        description='State, province, or region code, e.g. "TX"; absent when the business hides or omits its address.',
    )
    url: str = Field(
        description="Canonical Nextdoor business page URL. Populated whenever the provider has data for the entity."
    )
    website: str | None = Field(
        default=None,
        description="Business website URL; absent when the page lists none.",
    )


class NextdoorNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def business(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[NextdoorBusinessInput],
    ) -> RunResult[NextdoorBusinessData]:
        """Nextdoor Business

        Fetch one Nextdoor business page by its slug, with phone, email, website,
        and street address.

        Price: $0.0055 per request plus $0.00286 per result (maximum $0.00836).

        Example:
            res = client.nextdoor.business(pageSlug="radiant-plumbing-air-conditioning-austin-tx")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "nextdoor.business", dict(input), options
        )
        return RunResult[NextdoorBusinessData].model_validate(raw)

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[NextdoorSearchInput],
    ) -> RunResult[NextdoorSearchData]:
        """Nextdoor Business Search

        Find local businesses listed on Nextdoor by city and trade category, with
        phone, email, website, and street address.

        Price: $0.0055 per request plus $0.00286 per result (maximum $0.0627).

        Example:
            res = client.nextdoor.search(city="austin--tx", limit=5, query="plumber")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "nextdoor.search", dict(input), options
        )
        return RunResult[NextdoorSearchData].model_validate(raw)


class AsyncNextdoorNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def business(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[NextdoorBusinessInput],
    ) -> RunResult[NextdoorBusinessData]:
        """Nextdoor Business

        Fetch one Nextdoor business page by its slug, with phone, email, website,
        and street address.

        Price: $0.0055 per request plus $0.00286 per result (maximum $0.00836).

        Example:
            res = client.nextdoor.business(pageSlug="radiant-plumbing-air-conditioning-austin-tx")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "nextdoor.business", dict(input), options
        )
        return RunResult[NextdoorBusinessData].model_validate(raw)

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[NextdoorSearchInput],
    ) -> RunResult[NextdoorSearchData]:
        """Nextdoor Business Search

        Find local businesses listed on Nextdoor by city and trade category, with
        phone, email, website, and street address.

        Price: $0.0055 per request plus $0.00286 per result (maximum $0.0627).

        Example:
            res = client.nextdoor.search(city="austin--tx", limit=5, query="plumber")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "nextdoor.search", dict(input), options
        )
        return RunResult[NextdoorSearchData].model_validate(raw)
