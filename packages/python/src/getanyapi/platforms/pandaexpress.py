# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the pandaexpress platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class PandaexpressLocationsInput(TypedDict, total=False):
    """Input for Panda Express Locations."""

    latitude: Required[float]
    """Latitude of the search center. Range: -90 to 90."""
    limit: NotRequired[int]
    """Maximum number of restaurants to return (1-50, default 10). Range: 1 to 50."""
    longitude: Required[float]
    """Longitude of the search center. Range: -180 to 180."""
    radius: NotRequired[int]
    """Search radius in miles (default 10). Range: 1 to 100."""


class PandaexpressMenuInput(TypedDict, total=False):
    """Input for Panda Express Menu."""

    restaurantId: Required[str]
    """Panda Express restaurant id (the `id` from Panda Express Locations)."""


class PandaexpressNutritionInput(TypedDict, total=False):
    """Input for Panda Express Nutrition."""

    query: Required[str]
    """Menu item name (or substring) to look up, e.g. "orange chicken" or "chow mein"."""


class PandaexpressLocationsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class PandaexpressMenuData(BaseModel):
    model_config = ConfigDict(extra="allow")


class PandaexpressNutritionData(BaseModel):
    model_config = ConfigDict(extra="allow")


class PandaexpressNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def locations(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PandaexpressLocationsInput],
    ) -> BareRunResult[PandaexpressLocationsData]:
        """Panda Express Locations

        Find Panda Express restaurants near a latitude/longitude, sorted by
        distance, with address, phone, hours availability, and pickup/delivery
        support.

        Price: $0.0009 per request.

        Example:
            res = client.pandaexpress.locations(latitude=34.0522, limit=5, longitude=-118.2437)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "pandaexpress.locations", dict(input), options
        )
        return BareRunResult[PandaexpressLocationsData].model_validate(raw)

    def menu(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PandaexpressMenuInput],
    ) -> BareRunResult[PandaexpressMenuData]:
        """Panda Express Menu

        Get the live menu for a Panda Express restaurant by id: categories with item
        names, descriptions, and USD prices. Pair with Panda Express Locations to
        resolve a restaurant id.

        Price: $0.0009 per request.

        Example:
            res = client.pandaexpress.menu(restaurantId="112551")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "pandaexpress.menu", dict(input), options
        )
        return BareRunResult[PandaexpressMenuData].model_validate(raw)

    def nutrition(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PandaexpressNutritionInput],
    ) -> BareRunResult[PandaexpressNutritionData]:
        """Panda Express Nutrition

        Look up official Panda Express nutrition facts by item name: serving size,
        calories, fat, cholesterol, sodium, carbs, fiber, sugars, and protein.

        Price: $0.006 per request.

        Example:
            res = client.pandaexpress.nutrition(query="orange chicken")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "pandaexpress.nutrition", dict(input), options
        )
        return BareRunResult[PandaexpressNutritionData].model_validate(raw)


class AsyncPandaexpressNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def locations(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PandaexpressLocationsInput],
    ) -> BareRunResult[PandaexpressLocationsData]:
        """Panda Express Locations

        Find Panda Express restaurants near a latitude/longitude, sorted by
        distance, with address, phone, hours availability, and pickup/delivery
        support.

        Price: $0.0009 per request.

        Example:
            res = client.pandaexpress.locations(latitude=34.0522, limit=5, longitude=-118.2437)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "pandaexpress.locations", dict(input), options
        )
        return BareRunResult[PandaexpressLocationsData].model_validate(raw)

    async def menu(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PandaexpressMenuInput],
    ) -> BareRunResult[PandaexpressMenuData]:
        """Panda Express Menu

        Get the live menu for a Panda Express restaurant by id: categories with item
        names, descriptions, and USD prices. Pair with Panda Express Locations to
        resolve a restaurant id.

        Price: $0.0009 per request.

        Example:
            res = client.pandaexpress.menu(restaurantId="112551")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "pandaexpress.menu", dict(input), options
        )
        return BareRunResult[PandaexpressMenuData].model_validate(raw)

    async def nutrition(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PandaexpressNutritionInput],
    ) -> BareRunResult[PandaexpressNutritionData]:
        """Panda Express Nutrition

        Look up official Panda Express nutrition facts by item name: serving size,
        calories, fat, cholesterol, sodium, carbs, fiber, sugars, and protein.

        Price: $0.006 per request.

        Example:
            res = client.pandaexpress.nutrition(query="orange chicken")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "pandaexpress.nutrition", dict(input), options
        )
        return BareRunResult[PandaexpressNutritionData].model_validate(raw)
