# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the spotify platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class SpotifyAlbumInput(TypedDict, total=False):
    """Input for Spotify Album."""

    id: NotRequired[str]
    """Spotify album ID (alternative to url)."""
    url: NotRequired[str]
    """Spotify album URL (e.g. https://open.spotify.com/album/0pgrg7phBbnwGJ2HBEl9EG)."""


class SpotifyArtistInput(TypedDict, total=False):
    """Input for Spotify Artist."""

    id: NotRequired[str]
    """Spotify artist ID (alternative to url)."""
    url: NotRequired[str]
    """Spotify artist URL (e.g. https://open.spotify.com/artist/3DiDSECUqqY1AuBP8qtaIa)."""


class SpotifyPlayCountInput(TypedDict, total=False):
    """Input for Spotify Play Count."""

    url: Required[str]
    """Spotify track, album, or artist URL to fetch stream counts for (e.g. https://open.spotify.com/track/3n3Ppam7vgaVa1iaRUc9Lp)."""


class SpotifyPodcastInput(TypedDict, total=False):
    """Input for Spotify Podcast."""

    id: NotRequired[str]
    """Spotify podcast show ID (alternative to url)."""
    url: NotRequired[str]
    """Spotify podcast show URL (e.g. https://open.spotify.com/show/3mliji9352UAk3XnWElnDV)."""


class SpotifyPodcastEpisodesInput(TypedDict, total=False):
    """Input for Spotify Podcast Episodes."""

    cursor: NotRequired[str]
    """Pagination cursor from a previous response for subsequent pages."""
    id: NotRequired[str]
    """Spotify podcast show ID (alternative to url)."""
    url: NotRequired[str]
    """Spotify podcast show URL (e.g. https://open.spotify.com/show/4rOoJ6Egrf8K2IrywzwOMk)."""


class SpotifySearchInput(TypedDict, total=False):
    """Input for Spotify Search."""

    query: Required[str]
    """Search term (e.g. "my first million")."""


class SpotifyTrackInput(TypedDict, total=False):
    """Input for Spotify Track."""

    id: NotRequired[str]
    """Spotify track ID (alternative to url)."""
    url: NotRequired[str]
    """Spotify track URL (e.g. https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT)."""


class SpotifyAlbumData(BaseModel):
    model_config = ConfigDict(extra="allow")


class SpotifyArtistData(BaseModel):
    model_config = ConfigDict(extra="allow")


class SpotifyPlayCountData(BaseModel):
    model_config = ConfigDict(extra="allow")


class SpotifyPodcastData(BaseModel):
    model_config = ConfigDict(extra="allow")


class SpotifyPodcastEpisodesData(BaseModel):
    model_config = ConfigDict(extra="allow")


class SpotifySearchData(BaseModel):
    model_config = ConfigDict(extra="allow")


class SpotifyTrackData(BaseModel):
    model_config = ConfigDict(extra="allow")


class SpotifyNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def album(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SpotifyAlbumInput],
    ) -> BareRunResult[SpotifyAlbumData]:
        """Spotify Album

        Fetch a Spotify album's tracklist, play counts, label, and release details
        by album URL or ID.

        Price: $0.002 per request.

        Example:
            res = client.spotify.album(url="https://open.spotify.com/album/0pgrg7phBbnwGJ2HBEl9EG")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "spotify.album", dict(input), options
        )
        return BareRunResult[SpotifyAlbumData].model_validate(raw)

    def artist(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SpotifyArtistInput],
    ) -> BareRunResult[SpotifyArtistData]:
        """Spotify Artist

        Fetch a Spotify artist's discography (albums, singles, top tracks) and
        metadata by artist URL or ID.

        Price: $0.002 per request.

        Example:
            res = client.spotify.artist(url="https://open.spotify.com/artist/3DiDSECUqqY1AuBP8qtaIa")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "spotify.artist", dict(input), options
        )
        return BareRunResult[SpotifyArtistData].model_validate(raw)

    def play_count(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SpotifyPlayCountInput],
    ) -> BareRunResult[SpotifyPlayCountData]:
        """Spotify Play Count

        Fetch stream counts and stats for a Spotify track, album, or artist URL.

        Price: $0 per request plus $0.003 per result (maximum $0.003).

        Example:
            res = client.spotify.play_count(url="https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "spotify.play_count", dict(input), options
        )
        return BareRunResult[SpotifyPlayCountData].model_validate(raw)

    def podcast(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SpotifyPodcastInput],
    ) -> BareRunResult[SpotifyPodcastData]:
        """Spotify Podcast

        Fetch a Spotify podcast show's name, publisher, description, rating, and
        topics by show URL or ID.

        Price: $0.002 per request.

        Example:
            res = client.spotify.podcast(url="https://open.spotify.com/show/3mliji9352UAk3XnWElnDV")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "spotify.podcast", dict(input), options
        )
        return BareRunResult[SpotifyPodcastData].model_validate(raw)

    def podcast_episodes(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SpotifyPodcastEpisodesInput],
    ) -> BareRunResult[SpotifyPodcastEpisodesData]:
        """Spotify Podcast Episodes

        List a Spotify podcast show's episodes with titles, durations, descriptions,
        and release dates by show URL or ID.

        Price: $0.002 per request.

        Example:
            res = client.spotify.podcast_episodes(url="https://open.spotify.com/show/4rOoJ6Egrf8K2IrywzwOMk")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "spotify.podcast_episodes", dict(input), options
        )
        return BareRunResult[SpotifyPodcastEpisodesData].model_validate(raw)

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SpotifySearchInput],
    ) -> BareRunResult[SpotifySearchData]:
        """Spotify Search

        Search Spotify for matching tracks, albums, artists, podcasts, and playlists
        by keyword.

        Price: $0.002 per request.

        Example:
            res = client.spotify.search(query="my first million")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "spotify.search", dict(input), options
        )
        return BareRunResult[SpotifySearchData].model_validate(raw)

    def track(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SpotifyTrackInput],
    ) -> BareRunResult[SpotifyTrackData]:
        """Spotify Track

        Fetch a Spotify track's play count, popularity, duration, and album details
        by track URL or ID.

        Price: $0.002 per request.

        Example:
            res = client.spotify.track(url="https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "spotify.track", dict(input), options
        )
        return BareRunResult[SpotifyTrackData].model_validate(raw)


class AsyncSpotifyNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def album(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SpotifyAlbumInput],
    ) -> BareRunResult[SpotifyAlbumData]:
        """Spotify Album

        Fetch a Spotify album's tracklist, play counts, label, and release details
        by album URL or ID.

        Price: $0.002 per request.

        Example:
            res = client.spotify.album(url="https://open.spotify.com/album/0pgrg7phBbnwGJ2HBEl9EG")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "spotify.album", dict(input), options
        )
        return BareRunResult[SpotifyAlbumData].model_validate(raw)

    async def artist(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SpotifyArtistInput],
    ) -> BareRunResult[SpotifyArtistData]:
        """Spotify Artist

        Fetch a Spotify artist's discography (albums, singles, top tracks) and
        metadata by artist URL or ID.

        Price: $0.002 per request.

        Example:
            res = client.spotify.artist(url="https://open.spotify.com/artist/3DiDSECUqqY1AuBP8qtaIa")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "spotify.artist", dict(input), options
        )
        return BareRunResult[SpotifyArtistData].model_validate(raw)

    async def play_count(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SpotifyPlayCountInput],
    ) -> BareRunResult[SpotifyPlayCountData]:
        """Spotify Play Count

        Fetch stream counts and stats for a Spotify track, album, or artist URL.

        Price: $0 per request plus $0.003 per result (maximum $0.003).

        Example:
            res = client.spotify.play_count(url="https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "spotify.play_count", dict(input), options
        )
        return BareRunResult[SpotifyPlayCountData].model_validate(raw)

    async def podcast(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SpotifyPodcastInput],
    ) -> BareRunResult[SpotifyPodcastData]:
        """Spotify Podcast

        Fetch a Spotify podcast show's name, publisher, description, rating, and
        topics by show URL or ID.

        Price: $0.002 per request.

        Example:
            res = client.spotify.podcast(url="https://open.spotify.com/show/3mliji9352UAk3XnWElnDV")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "spotify.podcast", dict(input), options
        )
        return BareRunResult[SpotifyPodcastData].model_validate(raw)

    async def podcast_episodes(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SpotifyPodcastEpisodesInput],
    ) -> BareRunResult[SpotifyPodcastEpisodesData]:
        """Spotify Podcast Episodes

        List a Spotify podcast show's episodes with titles, durations, descriptions,
        and release dates by show URL or ID.

        Price: $0.002 per request.

        Example:
            res = client.spotify.podcast_episodes(url="https://open.spotify.com/show/4rOoJ6Egrf8K2IrywzwOMk")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "spotify.podcast_episodes", dict(input), options
        )
        return BareRunResult[SpotifyPodcastEpisodesData].model_validate(raw)

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SpotifySearchInput],
    ) -> BareRunResult[SpotifySearchData]:
        """Spotify Search

        Search Spotify for matching tracks, albums, artists, podcasts, and playlists
        by keyword.

        Price: $0.002 per request.

        Example:
            res = client.spotify.search(query="my first million")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "spotify.search", dict(input), options
        )
        return BareRunResult[SpotifySearchData].model_validate(raw)

    async def track(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SpotifyTrackInput],
    ) -> BareRunResult[SpotifyTrackData]:
        """Spotify Track

        Fetch a Spotify track's play count, popularity, duration, and album details
        by track URL or ID.

        Price: $0.002 per request.

        Example:
            res = client.spotify.track(url="https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "spotify.track", dict(input), options
        )
        return BareRunResult[SpotifyTrackData].model_validate(raw)
