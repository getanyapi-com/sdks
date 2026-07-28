# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the zhihu platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class ZhihuAnswerInput(TypedDict, total=False):
    """Input for Zhihu Answer."""

    answerId: Required[str]
    """Zhihu answer identifier."""


class ZhihuProfileInput(TypedDict, total=False):
    """Input for Zhihu Profile."""

    userToken: Required[str]
    """Zhihu user URL token."""


class ZhihuQuestionInput(TypedDict, total=False):
    """Input for Zhihu Question."""

    questionId: Required[str]
    """Zhihu question identifier."""


class ZhihuQuestionAnswersInput(TypedDict, total=False):
    """Input for Zhihu Question Answers."""

    cursor: NotRequired[str]
    """Pagination cursor from an answer item in the previous response. Default: ."""
    limit: NotRequired[int]
    """Number of answers requested per page. Default: 5."""
    offset: NotRequired[int]
    """Pagination offset. Default: 0."""
    order: NotRequired[Literal["default", "updated"]]
    """Answer ordering: default ranking or recently updated. Default: default."""
    questionId: Required[str]
    """Zhihu question identifier."""
    sessionId: NotRequired[str]
    """Pagination session identifier returned in the previous response. Default: ."""


class ZhihuSearchArticlesInput(TypedDict, total=False):
    """Input for Zhihu Article Search."""

    limit: NotRequired[str]
    """Number of articles requested per page. Default: 20."""
    offset: NotRequired[str]
    """Result offset returned as nextOffset in the previous response. Default: 0."""
    query: Required[str]
    """Search keyword."""
    searchHashId: NotRequired[str]
    """Search hash identifier returned in the previous response. Default: ."""
    showAllTopics: NotRequired[int]
    """Whether to include all topics: 0 excludes them and 1 includes them. Default: 0."""
    sort: NotRequired[Literal["", "upvoted_count", "created_time"]]
    """Article ordering: comprehensive, most upvoted, or newest. Default: ."""
    timeInterval: NotRequired[
        Literal[
            "", "a_day", "a_week", "a_month", "three_months", "half_a_year", "a_year"
        ]
    ]
    """Optional publication-time filter. Default: ."""
    verticalInfo: NotRequired[str]
    """Article-search vertical continuation state returned as nextVerticalInfo in the previous response. Default: 0,0,0,0,0,0,0,0,0,2,0,0."""


class ZhihuAnswerData(BaseModel):
    model_config = ConfigDict(extra="allow")


class ZhihuProfileData(BaseModel):
    model_config = ConfigDict(extra="allow")


class ZhihuQuestionData(BaseModel):
    model_config = ConfigDict(extra="allow")


class ZhihuQuestionAnswersData(BaseModel):
    model_config = ConfigDict(extra="allow")


class ZhihuSearchArticlesData(BaseModel):
    model_config = ConfigDict(extra="allow")


class ZhihuNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def answer(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ZhihuAnswerInput],
    ) -> BareRunResult[ZhihuAnswerData]:
        """Zhihu Answer

        Fetch a public Zhihu answer with normalized author and question data.

        Price: $0.001 per request.

        Example:
            res = client.zhihu.answer(answerId="2054145988235880002")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "zhihu.answer", dict(input), options
        )
        return BareRunResult[ZhihuAnswerData].model_validate(raw)

    def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ZhihuProfileInput],
    ) -> BareRunResult[ZhihuProfileData]:
        """Zhihu Profile

        Fetch a public Zhihu profile with normalized identity and audience data.

        Price: $0.001 per request.

        Example:
            res = client.zhihu.profile(userToken="ming-he-43-93")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "zhihu.profile", dict(input), options
        )
        return BareRunResult[ZhihuProfileData].model_validate(raw)

    def question(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ZhihuQuestionInput],
    ) -> BareRunResult[ZhihuQuestionData]:
        """Zhihu Question

        Fetch a public Zhihu question with normalized text and engagement
        statistics.

        Price: $0.001 per request.

        Example:
            res = client.zhihu.question(questionId="37811449")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "zhihu.question", dict(input), options
        )
        return BareRunResult[ZhihuQuestionData].model_validate(raw)

    def question_answers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ZhihuQuestionAnswersInput],
    ) -> BareRunResult[ZhihuQuestionAnswersData]:
        """Zhihu Question Answers

        List public answers to a Zhihu question with normalized authors and
        engagement data.

        Price: $0.001 per request.

        Example:
            res = client.zhihu.question_answers(limit=5, offset=0, order="default", questionId="37811449")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "zhihu.question_answers", dict(input), options
        )
        return BareRunResult[ZhihuQuestionAnswersData].model_validate(raw)

    def search_articles(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ZhihuSearchArticlesInput],
    ) -> BareRunResult[ZhihuSearchArticlesData]:
        """Zhihu Article Search

        Search public Zhihu articles by keyword with normalized author and
        engagement data.

        Price: $0.001 per request.

        Example:
            res = client.zhihu.search_articles(limit="20", query="deepseek", showAllTopics=0)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "zhihu.search_articles", dict(input), options
        )
        return BareRunResult[ZhihuSearchArticlesData].model_validate(raw)


class AsyncZhihuNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def answer(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ZhihuAnswerInput],
    ) -> BareRunResult[ZhihuAnswerData]:
        """Zhihu Answer

        Fetch a public Zhihu answer with normalized author and question data.

        Price: $0.001 per request.

        Example:
            res = client.zhihu.answer(answerId="2054145988235880002")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "zhihu.answer", dict(input), options
        )
        return BareRunResult[ZhihuAnswerData].model_validate(raw)

    async def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ZhihuProfileInput],
    ) -> BareRunResult[ZhihuProfileData]:
        """Zhihu Profile

        Fetch a public Zhihu profile with normalized identity and audience data.

        Price: $0.001 per request.

        Example:
            res = client.zhihu.profile(userToken="ming-he-43-93")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "zhihu.profile", dict(input), options
        )
        return BareRunResult[ZhihuProfileData].model_validate(raw)

    async def question(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ZhihuQuestionInput],
    ) -> BareRunResult[ZhihuQuestionData]:
        """Zhihu Question

        Fetch a public Zhihu question with normalized text and engagement
        statistics.

        Price: $0.001 per request.

        Example:
            res = client.zhihu.question(questionId="37811449")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "zhihu.question", dict(input), options
        )
        return BareRunResult[ZhihuQuestionData].model_validate(raw)

    async def question_answers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ZhihuQuestionAnswersInput],
    ) -> BareRunResult[ZhihuQuestionAnswersData]:
        """Zhihu Question Answers

        List public answers to a Zhihu question with normalized authors and
        engagement data.

        Price: $0.001 per request.

        Example:
            res = client.zhihu.question_answers(limit=5, offset=0, order="default", questionId="37811449")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "zhihu.question_answers", dict(input), options
        )
        return BareRunResult[ZhihuQuestionAnswersData].model_validate(raw)

    async def search_articles(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ZhihuSearchArticlesInput],
    ) -> BareRunResult[ZhihuSearchArticlesData]:
        """Zhihu Article Search

        Search public Zhihu articles by keyword with normalized author and
        engagement data.

        Price: $0.001 per request.

        Example:
            res = client.zhihu.search_articles(limit="20", query="deepseek", showAllTopics=0)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "zhihu.search_articles", dict(input), options
        )
        return BareRunResult[ZhihuSearchArticlesData].model_validate(raw)
