# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the chatgpt platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class ChatgptBrandVisibilityInput(TypedDict, total=False):
    """Input for ChatGPT Brand Visibility."""

    aliases: NotRequired[list[str]]
    """Alternative brand names to include in mention analysis."""
    brand: Required[str]
    """Brand name to measure in the answer."""
    competitors: NotRequired[list[str]]
    """Competitor brand names to compare against the target brand."""
    country: NotRequired[str]
    """Country context for the answer and web search (default US). Default: US."""
    domain: NotRequired[str]
    """Brand domain used to attribute citations when supplied."""
    prompt: Required[str]
    """Question or topic ChatGPT should answer while measuring brand visibility."""


class ChatgptSearchInput(TypedDict, total=False):
    """Input for ChatGPT Search."""

    prompt: Required[str]
    """Question or research prompt for ChatGPT to answer using web search."""


class ChatgptBrandVisibilityData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    answer: str | None = Field(
        default=None,
        description="Full answer used for the visibility analysis. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    brand: str = Field(description="Brand measured in the answer.")
    citation_rank: int | None = Field(
        default=None,
        alias="citationRank",
        description="One-based citation rank for the brand, or null when it was not cited. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    citations: list[ChatgptBrandVisibilityCitation] | None = Field(
        default=None,
        description="Sources cited by the answer. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    cited: bool | None = Field(
        default=None,
        description="Whether the answer cites the brand domain. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    cited_urls: list[str] | None = Field(
        default=None,
        alias="citedUrls",
        description="URLs attributed to the brand domain. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    competitors: list[ChatgptBrandVisibilityCompetitor] | None = Field(
        default=None,
        description="Visibility metrics for requested competitors. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    country: str | None = Field(
        default=None,
        description="Country context used for the answer. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    created_utc: float | None = Field(
        default=None,
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    domain: str | None = Field(
        default=None,
        description="Brand domain used for citation attribution. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    excerpt: str | None = Field(
        default=None,
        description="Leading excerpt from the answer. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    first_position: int | None = Field(
        default=None,
        alias="firstPosition",
        description="Character position of the first brand mention. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    latency_ms: int | None = Field(
        default=None,
        alias="latencyMs",
        description="Upstream processing latency in milliseconds. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    mention_count: int | None = Field(
        default=None,
        alias="mentionCount",
        description="Number of brand mentions in the answer. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    mentioned: bool | None = Field(
        default=None,
        description="Whether the answer mentions the brand. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    model: str | None = Field(
        default=None,
        description="ChatGPT model that generated the answer. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    position_score: float | None = Field(
        default=None,
        alias="positionScore",
        description="Visibility score derived from the first mention position. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    prompt: str = Field(description="Prompt answered for the visibility analysis.")
    share_of_voice_pct: float | None = Field(
        default=None,
        alias="shareOfVoicePct",
        description="Brand share of voice among the measured brands, as a percentage. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    web_search_triggered: bool | None = Field(
        default=None,
        alias="webSearchTriggered",
        description="Whether ChatGPT used web search for the answer. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )


class ChatgptBrandVisibilityCitation(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    attribution: str | None = Field(
        default=None,
        description="Source attribution label when supplied. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    domain: str | None = Field(
        default=None,
        description="Source domain. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    end_index: int | None = Field(
        default=None,
        alias="endIndex",
        description="End character offset of the citation evidence. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    matched_text: str | None = Field(
        default=None,
        alias="matchedText",
        description="Answer text matched to the citation evidence.",
    )
    pub_date_utc: float | None = Field(
        default=None,
        alias="pubDateUtc",
        description="Source publication UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    published_utc: float | None = Field(
        default=None,
        alias="publishedUtc",
        description="Source published UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    snippet: str | None = Field(
        default=None,
        description="Source evidence snippet when supplied. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    start_index: int | None = Field(
        default=None,
        alias="startIndex",
        description="Start character offset of the citation evidence. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    title: str | None = Field(
        default=None,
        description="Source page title when supplied. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    url: str = Field(
        description="Canonical source URL. Populated whenever the provider has data for the entity."
    )


class ChatgptBrandVisibilityCompetitor(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    cited: bool | None = Field(
        default=None,
        description="Whether the answer cites the competitor. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    cited_urls: list[str] | None = Field(
        default=None,
        alias="citedUrls",
        description="URLs attributed to the competitor.",
    )
    first_position: int | None = Field(
        default=None,
        alias="firstPosition",
        description="Character position of the first competitor mention. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    mention_count: int | None = Field(
        default=None,
        alias="mentionCount",
        description="Number of competitor mentions in the answer. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    mentioned: bool | None = Field(
        default=None,
        description="Whether the answer mentions the competitor. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    name: str = Field(description="Competitor brand name.")


class ChatgptSearchData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    answer: str = Field(
        description="The web-grounded answer as text. Populated whenever the provider has data for the entity."
    )
    answer_markdown: str = Field(
        alias="answerMarkdown",
        description="The web-grounded answer with Markdown formatting. Populated whenever the provider has data for the entity.",
    )
    citations: list[ChatgptSearchCitation] = Field(
        description="Sources cited by the answer. Populated whenever the provider has data for the entity."
    )
    prompt: str = Field(description="The prompt answered by ChatGPT.")


class ChatgptSearchCitation(BaseModel):
    model_config = ConfigDict(extra="allow")

    title: str = Field(
        description="Source page title when supplied by the search engine."
    )
    url: str = Field(description="Source page URL.")


class ChatgptNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def brand_visibility(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ChatgptBrandVisibilityInput],
    ) -> RunResult[ChatgptBrandVisibilityData]:
        """ChatGPT Brand Visibility

        Analyze how ChatGPT mentions and cites a brand relative to its competitors.

        Price: $0.0045 per request.

        Example:
            res = client.chatgpt.brand_visibility(brand="OpenAI", competitors=["Anthropic", "Google DeepMind", "Meta"], country="US", domain="openai.com", prompt="What is OpenAI and who are its main competitors?")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "chatgpt.brand_visibility", dict(input), options
        )
        return RunResult[ChatgptBrandVisibilityData].model_validate(raw)

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ChatgptSearchInput],
    ) -> RunResult[ChatgptSearchData]:
        """ChatGPT Search

        Ask ChatGPT a web-grounded question and receive an answer with source
        citations.

        Price: $0.0036 per request.

        Example:
            res = client.chatgpt.search(prompt="What is AnyAPI at getanyapi.com, and what does it offer?")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "chatgpt.search", dict(input), options
        )
        return RunResult[ChatgptSearchData].model_validate(raw)


class AsyncChatgptNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def brand_visibility(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ChatgptBrandVisibilityInput],
    ) -> RunResult[ChatgptBrandVisibilityData]:
        """ChatGPT Brand Visibility

        Analyze how ChatGPT mentions and cites a brand relative to its competitors.

        Price: $0.0045 per request.

        Example:
            res = client.chatgpt.brand_visibility(brand="OpenAI", competitors=["Anthropic", "Google DeepMind", "Meta"], country="US", domain="openai.com", prompt="What is OpenAI and who are its main competitors?")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "chatgpt.brand_visibility", dict(input), options
        )
        return RunResult[ChatgptBrandVisibilityData].model_validate(raw)

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ChatgptSearchInput],
    ) -> RunResult[ChatgptSearchData]:
        """ChatGPT Search

        Ask ChatGPT a web-grounded question and receive an answer with source
        citations.

        Price: $0.0036 per request.

        Example:
            res = client.chatgpt.search(prompt="What is AnyAPI at getanyapi.com, and what does it offer?")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "chatgpt.search", dict(input), options
        )
        return RunResult[ChatgptSearchData].model_validate(raw)
