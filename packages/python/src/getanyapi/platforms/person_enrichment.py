# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the person_enrichment platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class PersonEnrichmentAviatoInput(TypedDict, total=False):
    """Input for Person Enrichment - Aviato."""

    angelListID: NotRequired[str]
    crunchbaseID: NotRequired[str]
    email: NotRequired[str]
    id: NotRequired[str]
    linkedinEntityId: NotRequired[str]
    linkedinID: NotRequired[str]
    linkedinURL: NotRequired[str]
    polyworkID: NotRequired[str]
    require: NotRequired[list[str]]
    signalNfxID: NotRequired[str]
    twitterID: NotRequired[str]


class PersonEnrichmentAviatoData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    about: str | None = None
    first_name: str | None = Field(default=None, alias="firstName")
    headline: str | None = None
    last_name: str | None = Field(default=None, alias="lastName")
    linkedin_url: str | None = Field(default=None, alias="linkedinUrl")
    location: str | None = None
    name: str


class PersonEnrichmentNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def aviato(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PersonEnrichmentAviatoInput],
    ) -> RunResult[PersonEnrichmentAviatoData]:
        """Person Enrichment - Aviato

        Enrich a person from an Aviato or LinkedIn identifier, LinkedIn URL, or
        email.

        Price: $0.084 per request.
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "person_enrichment.aviato", dict(input), options
        )
        return RunResult[PersonEnrichmentAviatoData].model_validate(raw)


class AsyncPersonEnrichmentNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def aviato(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PersonEnrichmentAviatoInput],
    ) -> RunResult[PersonEnrichmentAviatoData]:
        """Person Enrichment - Aviato

        Enrich a person from an Aviato or LinkedIn identifier, LinkedIn URL, or
        email.

        Price: $0.084 per request.
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "person_enrichment.aviato", dict(input), options
        )
        return RunResult[PersonEnrichmentAviatoData].model_validate(raw)
