# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the company platform."""

from __future__ import annotations

from typing import Any, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class CompanyResearchInput(TypedDict, total=False):
    """Input for Company Research."""

    domain: NotRequired[str]
    """Company website domain, for example stripe.com. Mutually exclusive with name and email."""
    email: NotRequired[str]
    """Work email address whose domain identifies the company. Free and disposable providers are rejected. Mutually exclusive with domain and name."""
    maxAgeDays: NotRequired[int]
    """How old a cached part may be and still be served. 0 always forces a fresh run. Defaults to 7 days when omitted. Minimum: 0. Default: 7."""
    name: NotRequired[str]
    """Company name, resolved to a domain before the run starts. Mutually exclusive with domain and email."""


class CompanyResearchData(BaseModel):
    model_config = ConfigDict(extra="allow")

    competitors: CompanyResearchCompetitor | None = Field(
        default=None,
        description="Companies the run admitted as rivals or adjacent players, each grounded in a page it read.",
    )
    firmographics: CompanyResearchFirmographic | None = Field(
        default=None,
        description="Company facts reconciled across enrichment providers. A value backed by two agreeing providers is reported as verified.",
    )
    presence: CompanyResearchPresence | None = Field(
        default=None,
        description="The company's published social accounts and the public places it is discussed.",
    )
    profile: CompanyResearchProfile | None = Field(
        default=None,
        description="What the company does, synthesized from its own site, plus the clipped crawl corpus the other crawl-derived parts reuse.",
    )
    signal: CompanyResearchSignal | None = Field(
        default=None,
        description="What the company is doing right now: the roles it is hiring for and the stories written about it.",
    )
    voice: CompanyResearchVoice | None = Field(
        default=None,
        description="The company's writing voice, inferred from the same first-party crawl.",
    )


class CompanyResearchCompetitor(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    competitors: Any = Field(description="The admitted competitor set.")
    positioning_summary: Any = Field(
        alias="positioningSummary",
        description="One-line positioning read across the admitted competitors.",
    )


class CompanyResearchFirmographic(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    founded: Any = Field(
        description="Year the company was founded. 0 when no provider supplied one."
    )
    funding: Any = Field(description="Disclosed funding, reconciled across providers.")
    headcount: Any = Field(
        description="Employee count. 0 when no provider supplied one."
    )
    key_people: Any = Field(
        alias="keyPeople",
        description="Leadership records, masked to a first name and a last initial.",
    )
    tech_stack: Any = Field(
        alias="techStack", description="Technologies detected at the company."
    )


class CompanyResearchPresence(BaseModel):
    model_config = ConfigDict(extra="allow")

    accounts: Any = Field(
        description="One entry per platform the company publishes on."
    )
    communities: Any = Field(
        description="Public communities where matching company discussion appeared."
    )


class CompanyResearchProfile(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    audiences: Any = Field(description="Audiences the company addresses on its site.")
    basics: Any
    brand_aliases: Any = Field(
        alias="brandAliases", description="Other names the company trades under."
    )
    corpus: Any
    description: Any = Field(description="Plain description of what the company sells.")
    exclusions: Any = Field(description="Who or what the company states it is not for.")
    how_it_works: Any = Field(
        alias="howItWorks", description="How the product or service works in practice."
    )
    icp: Any = Field(description="Buyer segments synthesized from the crawl.")
    pricing_model: Any = Field(
        alias="pricingModel",
        description="How the company charges, as its own pages describe it.",
    )
    problems: Any = Field(description="Problems the company says it solves.")
    target_markets: Any = Field(
        alias="targetMarkets",
        description="Markets, industries, or regions the company targets.",
    )
    use_cases: Any = Field(
        alias="useCases", description="Concrete jobs customers hire the company for."
    )
    value_prop: Any = Field(
        alias="valueProp", description="The value the company promises its buyer."
    )


class CompanyResearchSignal(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    articles: Any = Field(description="Recent stories, deduplicated by article URL.")
    open_roles: Any = Field(
        alias="openRoles",
        description="Current job postings, deduplicated by posting URL.",
    )


class CompanyResearchVoice(BaseModel):
    model_config = ConfigDict(extra="allow")

    taglines: Any = Field(
        description="Taglines copied verbatim from the crawl. A tagline appears here only when its exact text was found on a crawled page."
    )
    tone: Any = Field(description="One concise description of how the company writes.")
    vocabulary: Any = Field(
        description="Words and phrases the company favors, as they appear in the crawl."
    )


class CompanyNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def research(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[CompanyResearchInput],
    ) -> RunResult[CompanyResearchData]:
        """Company Research

        Research a company from one domain, name, or email and return a
        cross-checked dossier: what it does, how it talks, who it competes with, its
        firmographics, its hiring and news signal, and its social presence.

        Price: $0.44338 per request.

        Example:
            res = client.company.research(domain="stripe.com", maxAgeDays=7)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "company.research", dict(input), options
        )
        return RunResult[CompanyResearchData].model_validate(raw)


class AsyncCompanyNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def research(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[CompanyResearchInput],
    ) -> RunResult[CompanyResearchData]:
        """Company Research

        Research a company from one domain, name, or email and return a
        cross-checked dossier: what it does, how it talks, who it competes with, its
        firmographics, its hiring and news signal, and its social presence.

        Price: $0.44338 per request.

        Example:
            res = client.company.research(domain="stripe.com", maxAgeDays=7)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "company.research", dict(input), options
        )
        return RunResult[CompanyResearchData].model_validate(raw)
