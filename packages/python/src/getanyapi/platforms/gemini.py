# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the gemini platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class GeminiSearchInput(TypedDict, total=False):
    """Input for Gemini Search."""

    prompt: Required[str]
    """Question or research prompt for Gemini to answer using web search."""


class GeminiSearchData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    answer: str = Field(
        description="The web-grounded answer as text. Populated whenever the provider has data for the entity."
    )
    answer_markdown: str = Field(
        alias="answerMarkdown",
        description="The answer in Markdown when the engine returns a Markdown rendering, otherwise the same text as answer. Populated whenever the provider has data for the entity.",
    )
    citations: list[GeminiSearchCitation] = Field(
        description="Sources cited by the answer. Populated whenever the provider has data for the entity."
    )
    prompt: str = Field(description="The prompt answered by Gemini.")


class GeminiSearchCitation(BaseModel):
    model_config = ConfigDict(extra="allow")

    title: str = Field(
        description="Source page title when supplied by the search engine."
    )
    url: str = Field(description="Source page URL.")


class GeminiNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GeminiSearchInput],
    ) -> RunResult[GeminiSearchData]:
        """Gemini Search

        Ask Gemini a web-grounded question and receive an answer with source
        citations.

        Price: $0.0036 per request.

        Example:
            res = client.gemini.search(prompt="What is AnyAPI at getanyapi.com, and what does it offer?")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "gemini.search", dict(input), options
        )
        return RunResult[GeminiSearchData].model_validate(raw)


class AsyncGeminiNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GeminiSearchInput],
    ) -> RunResult[GeminiSearchData]:
        """Gemini Search

        Ask Gemini a web-grounded question and receive an answer with source
        citations.

        Price: $0.0036 per request.

        Example:
            res = client.gemini.search(prompt="What is AnyAPI at getanyapi.com, and what does it offer?")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "gemini.search", dict(input), options
        )
        return RunResult[GeminiSearchData].model_validate(raw)
