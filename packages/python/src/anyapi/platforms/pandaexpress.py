# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the pandaexpress platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

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
    restaurants: list[PandaexpressLocationsRestaurant] = Field(
        description="Nearby Panda Express restaurants, nearest first. Populated whenever the provider returns data."
    )


class PandaexpressLocationsRestaurant(BaseModel):
    model_config = ConfigDict(extra="allow")

    address: str = Field(description="Populated whenever the provider returns data.")
    canDeliver: bool
    canPickup: bool
    city: str = Field(description="Populated whenever the provider returns data.")
    distanceMiles: float
    id: int = Field(description="Populated whenever the provider returns data.")
    isOpen: bool
    latitude: float = Field(description="Populated whenever the provider returns data.")
    longitude: float = Field(
        description="Populated whenever the provider returns data."
    )
    name: str = Field(description="Populated whenever the provider returns data.")
    phone: str = Field(description="Populated whenever the provider returns data.")
    state: str = Field(description="Populated whenever the provider returns data.")
    zip: str = Field(description="Populated whenever the provider returns data.")


class PandaexpressMenuData(BaseModel):
    categories: list[PandaexpressMenuCategorie] = Field(
        description="Menu categories in display order. Populated whenever the provider returns data."
    )


class PandaexpressMenuCategorie(BaseModel):
    model_config = ConfigDict(extra="allow")

    items: list[PandaexpressMenuItem]
    name: str = Field(description="Populated whenever the provider returns data.")


class PandaexpressMenuItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    calories: int = Field(
        description="Base calories when published by the restaurant, else 0."
    )
    description: str = Field(
        description="Populated whenever the provider returns data."
    )
    name: str
    priceUsd: float = Field(
        description="Item price in USD (0 for items priced only via size/option selection)."
    )


class PandaexpressNutritionData(BaseModel):
    items: list[PandaexpressNutritionItem] = Field(
        description="Matching menu items with official nutrition facts. Populated whenever the provider returns data."
    )


class PandaexpressNutritionItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    calories: float
    cholesterolMg: float
    dietaryFiberG: float
    name: str = Field(description="Populated whenever the provider returns data.")
    proteinG: float
    saturatedFatG: float
    servingSizeOz: float
    sodiumMg: float
    sugarsG: float
    totalCarbG: float
    totalFatG: float
    transFatG: float


class PandaexpressNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def locations(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PandaexpressLocationsInput],
    ) -> RunResult[PandaexpressLocationsData]:
        """Panda Express Locations

        Find Panda Express restaurants near a latitude/longitude, sorted by
        distance, with address, phone, hours availability, and pickup/delivery
        support. One call, billed per request in real dollars.

        Price: $0.0009 per request.

        Example:
            res = client.pandaexpress.locations(latitude=34.0522, limit=5, longitude=-118.2437)
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "pandaexpress.locations", dict(input), options
        )
        return RunResult[PandaexpressLocationsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def menu(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PandaexpressMenuInput],
    ) -> RunResult[PandaexpressMenuData]:
        """Panda Express Menu

        Get the live menu for a Panda Express restaurant by id: categories with item
        names, descriptions, and USD prices. Pair with Panda Express Locations to
        resolve a restaurant id. One call, billed per request in real dollars.

        Price: $0.0009 per request.

        Example:
            res = client.pandaexpress.menu(restaurantId="112551")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "pandaexpress.menu", dict(input), options
        )
        return RunResult[PandaexpressMenuData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def nutrition(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PandaexpressNutritionInput],
    ) -> RunResult[PandaexpressNutritionData]:
        """Panda Express Nutrition

        Look up official Panda Express nutrition facts by item name: serving size,
        calories, fat, cholesterol, sodium, carbs, fiber, sugars, and protein. One
        call, billed per request in real dollars.

        Price: $0.006 per request.

        Example:
            res = client.pandaexpress.nutrition(query="orange chicken")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "pandaexpress.nutrition", dict(input), options
        )
        return RunResult[PandaexpressNutritionData].model_validate(
            raw.model_dump(by_alias=True)
        )


class AsyncPandaexpressNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def locations(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PandaexpressLocationsInput],
    ) -> RunResult[PandaexpressLocationsData]:
        """Panda Express Locations

        Find Panda Express restaurants near a latitude/longitude, sorted by
        distance, with address, phone, hours availability, and pickup/delivery
        support. One call, billed per request in real dollars.

        Price: $0.0009 per request.

        Example:
            res = client.pandaexpress.locations(latitude=34.0522, limit=5, longitude=-118.2437)
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "pandaexpress.locations", dict(input), options
        )
        return RunResult[PandaexpressLocationsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def menu(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PandaexpressMenuInput],
    ) -> RunResult[PandaexpressMenuData]:
        """Panda Express Menu

        Get the live menu for a Panda Express restaurant by id: categories with item
        names, descriptions, and USD prices. Pair with Panda Express Locations to
        resolve a restaurant id. One call, billed per request in real dollars.

        Price: $0.0009 per request.

        Example:
            res = client.pandaexpress.menu(restaurantId="112551")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "pandaexpress.menu", dict(input), options
        )
        return RunResult[PandaexpressMenuData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def nutrition(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PandaexpressNutritionInput],
    ) -> RunResult[PandaexpressNutritionData]:
        """Panda Express Nutrition

        Look up official Panda Express nutrition facts by item name: serving size,
        calories, fat, cholesterol, sodium, carbs, fiber, sugars, and protein. One
        call, billed per request in real dollars.

        Price: $0.006 per request.

        Example:
            res = client.pandaexpress.nutrition(query="orange chicken")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "pandaexpress.nutrition", dict(input), options
        )
        return RunResult[PandaexpressNutritionData].model_validate(
            raw.model_dump(by_alias=True)
        )
