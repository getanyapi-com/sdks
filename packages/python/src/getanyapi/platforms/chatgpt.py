# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the chatgpt platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class ChatgptSearchInput(TypedDict, total=False):
    """Input for ChatGPT Search."""

    country: NotRequired[str]
    """ISO-3166 alpha-2 country to ask from, e.g. US, GB, DE. ChatGPT localizes both the pages it retrieves and the answer it writes, so this is the difference between what a US buyer and a UK buyer are told. Default: US."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    prompt: Required[str]
    """Question or research prompt for ChatGPT to answer using web search."""
    webSearch: NotRequired[Literal["force", "auto"]]
    """Whether to insist ChatGPT browses the web. force instructs it to search and is the default; auto lets ChatGPT decide, which is cheaper and answers from memory roughly half the time. Check webSearchTriggered for what actually happened - an answer written without a search is not web-grounded. Default: force."""


class ChatgptSearchData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    answer: str = Field(
        description="The web-grounded answer as text. Populated whenever the provider has data for the entity."
    )
    answer_markdown: str = Field(
        alias="answerMarkdown",
        description="The answer in Markdown when the engine returns a Markdown rendering, otherwise the same text as answer. Populated whenever the provider has data for the entity.",
    )
    citations: list[ChatgptSearchCitation] = Field(
        description="Sources cited by the answer. Populated whenever the provider has data for the entity."
    )
    created_utc: float | None = Field(
        default=None,
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. null means the source that answered does not report when it answered.",
    )
    model: str | None = Field(
        default=None,
        description="The ChatGPT model that produced the answer. null means the source that answered does not report it, which is not the same as an unknown model.",
    )
    prompt: str = Field(description="The prompt answered by ChatGPT.")
    search_queries: list[str] | None = Field(
        default=None,
        alias="searchQueries",
        description="The web search queries ChatGPT ran to ground its answer. null means the source that answered cannot report them; an empty array means it searched with none recorded.",
    )
    search_results: list[ChatgptSearchSearchResult] | None = Field(
        default=None,
        alias="searchResults",
        description="Pages ChatGPT retrieved while answering. A SUPERSET of citations: a page can be read and not cited. null means the source that answered cannot report them.",
    )
    web_search_triggered: bool | None = Field(
        default=None,
        alias="webSearchTriggered",
        description="Whether ChatGPT actually ran a web search before answering. ChatGPT decides this per session, and an answer written without one is not web-grounded. null means the source that answered cannot report it, which is not the same as false.",
    )


class ChatgptSearchCitation(BaseModel):
    model_config = ConfigDict(extra="allow")

    title: str = Field(
        description="Source page title when supplied by the search engine."
    )
    url: str = Field(description="Source page URL.")


class ChatgptSearchSearchResult(BaseModel):
    model_config = ConfigDict(extra="allow")

    cited: bool | None = Field(
        default=None,
        description="Whether this retrieved page made it into citations. false means ChatGPT read the page and chose not to cite it, which is a different and more actionable fact than the page being absent.",
    )
    title: str | None = Field(
        default=None,
        description="Title of the retrieved page, empty when the source did not send one.",
    )
    url: str | None = Field(
        default=None,
        description="Canonical URL of the retrieved page, tracking parameters stripped.",
    )


class ChatgptNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ChatgptSearchInput],
    ) -> RunResult[ChatgptSearchData]:
        """ChatGPT Search

        Ask ChatGPT a web-grounded question and receive an answer with source
        citations. ChatGPT composes each answer per request, so the same prompt
        returns different wording and a different source set.

        Price: $0.0018 per request.

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

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ChatgptSearchInput],
    ) -> RunResult[ChatgptSearchData]:
        """ChatGPT Search

        Ask ChatGPT a web-grounded question and receive an answer with source
        citations. ChatGPT composes each answer per request, so the same prompt
        returns different wording and a different source set.

        Price: $0.0018 per request.

        Example:
            res = client.chatgpt.search(prompt="What is AnyAPI at getanyapi.com, and what does it offer?")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "chatgpt.search", dict(input), options
        )
        return RunResult[ChatgptSearchData].model_validate(raw)
