# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the social platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class SocialFinderInput(TypedDict, total=False):
    """Input for Social Profile Finder."""

    limit: NotRequired[int]
    """Maximum number of results to return (1-10, default 10). You are billed per result returned, so a lower limit costs less. Range: 1 to 10."""
    name: Required[str]
    """The profile name or handle to search for across social networks (e.g. johndoe)."""
    platform: NotRequired[str]
    """Limit the search to one network: askfm, discord, facebook, github, instagram, linkedin, medium, pinterest, steam, threads, tiktok, twitch, or youtube (e.g. instagram); all networks are searched when omitted."""


class SocialFinderData(BaseModel):
    items: list[SocialFinderItem] = Field(
        description="Profile match records: the queried profile name, the social network, and the matching profile URL when one was found. Populated whenever the provider has data for the entity."
    )


class SocialFinderItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    input_profile_name: str | None = Field(
        default=None,
        alias="inputProfileName",
        description="The name that was searched for. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    social: str = Field(
        description="The social network checked (e.g. discord, facebook, github). Populated whenever the provider has data for the entity."
    )
    social_profile_url: str = Field(
        alias="socialProfileUrl",
        description="URL of the matching profile, or null when no account was found on that network.",
    )


class SocialNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def finder(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SocialFinderInput],
    ) -> RunResult[SocialFinderData]:
        """Social Profile Finder

        Find a person's or brand's profiles across major social networks from a
        single name, returned as normalized JSON.

        Price: $0.001 per request plus $0.002 per result (maximum $0.021).

        Example:
            res = client.social.finder(limit=3, name="Elon Musk")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "social.finder", dict(input), options
        )
        return RunResult[SocialFinderData].model_validate(raw)


class AsyncSocialNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def finder(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SocialFinderInput],
    ) -> RunResult[SocialFinderData]:
        """Social Profile Finder

        Find a person's or brand's profiles across major social networks from a
        single name, returned as normalized JSON.

        Price: $0.001 per request plus $0.002 per result (maximum $0.021).

        Example:
            res = client.social.finder(limit=3, name="Elon Musk")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "social.finder", dict(input), options
        )
        return RunResult[SocialFinderData].model_validate(raw)
