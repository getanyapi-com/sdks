# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the spotify platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult
from .._pagination import (
    AsyncPaginator,
    Paginator,
    apaginate,
    paginate,
)

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
    model_config = ConfigDict(populate_by_name=True)

    id: str
    label: str
    name: str
    popularity: int
    release_date: str = Field(alias="releaseDate")
    tracks: list[SpotifyAlbumTrack]
    type_: str = Field(alias="type")
    uri: str


class SpotifyAlbumTrack(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    duration_ms: int = Field(alias="durationMs")
    name: str
    playcount: int
    uri: str


class SpotifyArtistData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    albums: list[SpotifyArtistAlbum]
    top_tracks: list[SpotifyArtistTopTrack] = Field(alias="topTracks")


class SpotifyArtistAlbum(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    id: str
    name: str
    track_count: int = Field(alias="trackCount")
    type_: str = Field(alias="type")
    uri: str
    year: int


class SpotifyArtistTopTrack(BaseModel):
    model_config = ConfigDict(extra="allow")

    id: str
    name: str
    playcount: int
    uri: str


class SpotifyPlayCountData(BaseModel):
    items: list[SpotifyPlayCountItem] = Field(
        description="Play-count records: track, album, or artist metadata with stream counts and statistics."
    )


class SpotifyPlayCountItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    id: str
    name: str
    url: str | None = Field(
        default=None, description="Present whenever the upstream returns this record."
    )


class SpotifyPodcastData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    average_rating: float = Field(alias="averageRating")
    description: str
    id: str
    name: str
    publisher: str
    total_ratings: int = Field(alias="totalRatings")
    uri: str


class SpotifyPodcastEpisodesData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    episodes: list[SpotifyPodcastEpisodesEpisode]
    next_cursor: str = Field(alias="nextCursor")
    total_count: int = Field(alias="totalCount")


class SpotifyPodcastEpisodesEpisode(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    description: str
    duration_ms: int = Field(alias="durationMs")
    id: str
    name: str
    release_date: str = Field(alias="releaseDate")
    uri: str


class SpotifySearchData(BaseModel):
    albums: list[SpotifySearchAlbum]
    artists: list[SpotifySearchArtist]
    podcasts: list[SpotifySearchPodcast]
    tracks: list[SpotifySearchTrack]


class SpotifySearchAlbum(BaseModel):
    model_config = ConfigDict(extra="allow")

    id: str
    name: str
    uri: str
    year: int


class SpotifySearchArtist(BaseModel):
    model_config = ConfigDict(extra="allow")

    id: str
    name: str
    uri: str
    verified: bool


class SpotifySearchPodcast(BaseModel):
    model_config = ConfigDict(extra="allow")

    id: str
    name: str
    publisher: str


class SpotifySearchTrack(BaseModel):
    model_config = ConfigDict(extra="allow")

    id: str
    name: str
    uri: str


class SpotifyTrackData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    duration_ms: int = Field(alias="durationMs")
    id: str
    name: str
    playcount: int
    popularity: int
    share_url: str = Field(alias="shareUrl")
    track_number: int = Field(alias="trackNumber")
    uri: str


class SpotifyNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def album(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SpotifyAlbumInput],
    ) -> RunResult[SpotifyAlbumData]:
        """Spotify Album

        Fetch a Spotify album's tracklist, play counts, label, and release details
        by album URL or ID, with transparent per-request USD pricing.

        Price: $0.002 per request.

        Example:
            res = client.spotify.album(url="https://open.spotify.com/album/0pgrg7phBbnwGJ2HBEl9EG")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "spotify.album", dict(input), options
        )
        return RunResult[SpotifyAlbumData].model_validate(raw)

    def artist(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SpotifyArtistInput],
    ) -> RunResult[SpotifyArtistData]:
        """Spotify Artist

        Fetch a Spotify artist's discography (albums, singles, top tracks) and
        metadata by artist URL or ID, with transparent per-request USD pricing.

        Price: $0.002 per request.

        Example:
            res = client.spotify.artist(url="https://open.spotify.com/artist/3DiDSECUqqY1AuBP8qtaIa")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "spotify.artist", dict(input), options
        )
        return RunResult[SpotifyArtistData].model_validate(raw)

    def play_count(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SpotifyPlayCountInput],
    ) -> RunResult[SpotifyPlayCountData]:
        """Spotify Play Count

        Fetch stream counts and stats for a Spotify track, album, or artist URL,
        with transparent per-request USD pricing.

        Price: $0.003 per result.

        Example:
            res = client.spotify.play_count(url="https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "spotify.play_count", dict(input), options
        )
        return RunResult[SpotifyPlayCountData].model_validate(raw)

    def podcast(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SpotifyPodcastInput],
    ) -> RunResult[SpotifyPodcastData]:
        """Spotify Podcast

        Fetch a Spotify podcast show's name, publisher, description, rating, and
        topics by show URL or ID, with transparent per-request USD pricing.

        Price: $0.002 per request.

        Example:
            res = client.spotify.podcast(url="https://open.spotify.com/show/3mliji9352UAk3XnWElnDV")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "spotify.podcast", dict(input), options
        )
        return RunResult[SpotifyPodcastData].model_validate(raw)

    def podcast_episodes(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SpotifyPodcastEpisodesInput],
    ) -> RunResult[SpotifyPodcastEpisodesData]:
        """Spotify Podcast Episodes

        List a Spotify podcast show's episodes with titles, durations, descriptions,
        and release dates by show URL or ID, with transparent per-request USD
        pricing.

        Price: $0.002 per request.

        Example:
            res = client.spotify.podcast_episodes(url="https://open.spotify.com/show/4rOoJ6Egrf8K2IrywzwOMk")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "spotify.podcast_episodes", dict(input), options
        )
        return RunResult[SpotifyPodcastEpisodesData].model_validate(raw)

    def iter_podcast_episodes(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SpotifyPodcastEpisodesInput],
    ) -> Paginator[SpotifyPodcastEpisodesEpisode, SpotifyPodcastEpisodesData]:
        """Iterate Spotify Podcast Episodes results, following pagination cursors.

        Yields validated `SpotifyPodcastEpisodesEpisode` items from the `episodes` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "spotify.podcast_episodes",
            dict(input),
            "episodes",
            item_model=SpotifyPodcastEpisodesEpisode,
            data_model=SpotifyPodcastEpisodesData,
            bare=False,
            options=options,
        )

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SpotifySearchInput],
    ) -> RunResult[SpotifySearchData]:
        """Spotify Search

        Search Spotify for matching tracks, albums, artists, podcasts, and playlists
        by keyword, with transparent per-request USD pricing.

        Price: $0.002 per request.

        Example:
            res = client.spotify.search(query="my first million")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "spotify.search", dict(input), options
        )
        return RunResult[SpotifySearchData].model_validate(raw)

    def track(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SpotifyTrackInput],
    ) -> RunResult[SpotifyTrackData]:
        """Spotify Track

        Fetch a Spotify track's play count, popularity, duration, and album details
        by track URL or ID, with transparent per-request USD pricing.

        Price: $0.002 per request.

        Example:
            res = client.spotify.track(url="https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "spotify.track", dict(input), options
        )
        return RunResult[SpotifyTrackData].model_validate(raw)


class AsyncSpotifyNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def album(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SpotifyAlbumInput],
    ) -> RunResult[SpotifyAlbumData]:
        """Spotify Album

        Fetch a Spotify album's tracklist, play counts, label, and release details
        by album URL or ID, with transparent per-request USD pricing.

        Price: $0.002 per request.

        Example:
            res = client.spotify.album(url="https://open.spotify.com/album/0pgrg7phBbnwGJ2HBEl9EG")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "spotify.album", dict(input), options
        )
        return RunResult[SpotifyAlbumData].model_validate(raw)

    async def artist(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SpotifyArtistInput],
    ) -> RunResult[SpotifyArtistData]:
        """Spotify Artist

        Fetch a Spotify artist's discography (albums, singles, top tracks) and
        metadata by artist URL or ID, with transparent per-request USD pricing.

        Price: $0.002 per request.

        Example:
            res = client.spotify.artist(url="https://open.spotify.com/artist/3DiDSECUqqY1AuBP8qtaIa")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "spotify.artist", dict(input), options
        )
        return RunResult[SpotifyArtistData].model_validate(raw)

    async def play_count(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SpotifyPlayCountInput],
    ) -> RunResult[SpotifyPlayCountData]:
        """Spotify Play Count

        Fetch stream counts and stats for a Spotify track, album, or artist URL,
        with transparent per-request USD pricing.

        Price: $0.003 per result.

        Example:
            res = client.spotify.play_count(url="https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "spotify.play_count", dict(input), options
        )
        return RunResult[SpotifyPlayCountData].model_validate(raw)

    async def podcast(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SpotifyPodcastInput],
    ) -> RunResult[SpotifyPodcastData]:
        """Spotify Podcast

        Fetch a Spotify podcast show's name, publisher, description, rating, and
        topics by show URL or ID, with transparent per-request USD pricing.

        Price: $0.002 per request.

        Example:
            res = client.spotify.podcast(url="https://open.spotify.com/show/3mliji9352UAk3XnWElnDV")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "spotify.podcast", dict(input), options
        )
        return RunResult[SpotifyPodcastData].model_validate(raw)

    async def podcast_episodes(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SpotifyPodcastEpisodesInput],
    ) -> RunResult[SpotifyPodcastEpisodesData]:
        """Spotify Podcast Episodes

        List a Spotify podcast show's episodes with titles, durations, descriptions,
        and release dates by show URL or ID, with transparent per-request USD
        pricing.

        Price: $0.002 per request.

        Example:
            res = client.spotify.podcast_episodes(url="https://open.spotify.com/show/4rOoJ6Egrf8K2IrywzwOMk")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "spotify.podcast_episodes", dict(input), options
        )
        return RunResult[SpotifyPodcastEpisodesData].model_validate(raw)

    def iter_podcast_episodes(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SpotifyPodcastEpisodesInput],
    ) -> AsyncPaginator[SpotifyPodcastEpisodesEpisode, SpotifyPodcastEpisodesData]:
        """Iterate Spotify Podcast Episodes results, following pagination cursors.

        Yields validated `SpotifyPodcastEpisodesEpisode` items from the `episodes` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "spotify.podcast_episodes",
            dict(input),
            "episodes",
            item_model=SpotifyPodcastEpisodesEpisode,
            data_model=SpotifyPodcastEpisodesData,
            bare=False,
            options=options,
        )

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SpotifySearchInput],
    ) -> RunResult[SpotifySearchData]:
        """Spotify Search

        Search Spotify for matching tracks, albums, artists, podcasts, and playlists
        by keyword, with transparent per-request USD pricing.

        Price: $0.002 per request.

        Example:
            res = client.spotify.search(query="my first million")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "spotify.search", dict(input), options
        )
        return RunResult[SpotifySearchData].model_validate(raw)

    async def track(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SpotifyTrackInput],
    ) -> RunResult[SpotifyTrackData]:
        """Spotify Track

        Fetch a Spotify track's play count, popularity, duration, and album details
        by track URL or ID, with transparent per-request USD pricing.

        Price: $0.002 per request.

        Example:
            res = client.spotify.track(url="https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "spotify.track", dict(input), options
        )
        return RunResult[SpotifyTrackData].model_validate(raw)
