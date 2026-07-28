"""Account, catalog, describe, and agent-signup mapping (SPEC 2.7, 3.7)."""

from __future__ import annotations

import json
from typing import cast

import httpx
import pytest

from conftest import json_response, make_async_client, make_sync_client
from getanyapi import (
    DiscoveryPricing,
    FlatPricingOffer,
    LinearPricingOffer,
    NotFoundError,
    agent_signup,
)


def discovery_api() -> dict[str, object]:
    offer = {
        "model": "linear",
        "unit": "result",
        "baseUsd": 0.00005,
        "perUnitUsd": 0.0008,
        "maxUsd": 0.04002,
    }
    return {
        "id": "amazon.reviews",
        "slug": "amazon.reviews",
        "name": "Amazon Reviews",
        "category": "shop",
        "description": "Pull reviews",
        "provider": "AnyAPI",
        "pricing": {
            "from": offer,
            "failoverMaxUsd": 0.05,
        },
        "lanes": [
            {
                "pricing": offer,
                "health": {
                    "window": "30d",
                    "uptimePct": 99.8,
                    "latencyP50Ms": 420,
                    "requests": 810,
                },
            },
            {
                "pricing": {
                    "model": "flat",
                    "unit": "request",
                    "maxUsd": 0.05,
                }
            },
        ],
        "heavy": True,
        "tryEligible": True,
        "failover": True,
        "excludesCallerDelay": True,
    }


def flat_discovery_api() -> dict[str, object]:
    offer = {"model": "flat", "unit": "request", "maxUsd": 0.00325}
    return {
        **discovery_api(),
        "id": "fixture.flat",
        "slug": "fixture.flat",
        "name": "Fixture Flat",
        "pricing": {"from": offer, "failoverMaxUsd": 0.00325},
        "lanes": [{"pricing": offer}],
        "heavy": False,
    }


@pytest.mark.parametrize("value", [float("inf"), float("nan")], ids=["inf", "nan"])
@pytest.mark.parametrize(
    ("model", "field"),
    [
        (FlatPricingOffer, "maxUsd"),
        (LinearPricingOffer, "baseUsd"),
        (LinearPricingOffer, "perUnitUsd"),
        (DiscoveryPricing, "failoverMaxUsd"),
    ],
    ids=["max-usd", "base-usd", "per-unit-usd", "failover-max-usd"],
)
def test_discovery_pricing_rejects_non_finite_usd_values(
    model: type[FlatPricingOffer | LinearPricingOffer | DiscoveryPricing],
    field: str,
    value: float,
) -> None:
    if model is FlatPricingOffer:
        raw: dict[str, object] = {
            "model": "flat",
            "unit": "request",
            "maxUsd": 0.00325,
        }
    elif model is LinearPricingOffer:
        raw = {
            "model": "linear",
            "unit": "result",
            "baseUsd": 0.00005,
            "perUnitUsd": 0.0008,
            "maxUsd": 0.04002,
        }
    else:
        raw = {
            "from": {"model": "flat", "unit": "request", "maxUsd": 0.00325},
            "failoverMaxUsd": 0.00325,
        }
    raw[field] = value
    with pytest.raises(ValueError, match="finite_number"):
        model.model_validate(raw)


def test_balance() -> None:
    def respond(req: httpx.Request) -> httpx.Response:
        assert req.url.path == "/v1/balance"
        return json_response(200, {"usd": 12.34})

    client, _ = make_sync_client(respond)
    bal = client.balance()
    assert bal.usd == 12.34


def test_me_drops_internal_fields() -> None:
    def respond(req: httpx.Request) -> httpx.Response:
        assert req.url.path == "/v1/me"
        return json_response(
            200,
            {
                "id": "acct_1",
                "email": "a@b.com",
                "status": "active",
                "createdAt": "2026-01-01T00:00:00Z",
                "onboardingComplete": True,
                "clerkUserId": "user_x",
                "signupGrantApplied": True,
            },
        )

    client, _ = make_sync_client(respond)
    profile = client.me()
    assert profile.id == "acct_1"
    assert profile.email == "a@b.com"
    assert profile.status == "active"
    assert profile.created_at == "2026-01-01T00:00:00Z"
    assert profile.onboarding_complete is True
    # Internal fields are dropped from the public model.
    assert not hasattr(profile, "clerk_user_id")
    assert not hasattr(profile, "signup_grant_applied")


def test_catalog_preserves_nested_usd_offers() -> None:
    def respond(req: httpx.Request) -> httpx.Response:
        assert req.url.path == "/v1/apis"
        assert "query" not in req.url.params
        assert req.url.params["category"] == "shop"
        return json_response(200, {"apis": [discovery_api(), flat_discovery_api()]})

    client, _ = make_sync_client(respond)
    entries = client.catalog(category="shop")
    assert len(entries) == 2
    e = entries[0]
    assert e.slug == "amazon.reviews"
    assert e.provider == "AnyAPI"
    assert e.pricing.from_offer.model == "linear"
    assert e.pricing.from_offer.max_usd == pytest.approx(0.04002)
    assert e.lanes[0].pricing.model == "linear"
    assert e.lanes[0].health is not None
    assert e.lanes[0].health.requests == 810
    flat = entries[1]
    assert flat.pricing.from_offer.model == "flat"
    assert flat.pricing.from_offer.max_usd == pytest.approx(0.00325)
    assert flat.lanes[0].pricing == flat.pricing.from_offer


def test_catalog_rejects_legacy_partial_contract() -> None:
    def respond(_req: httpx.Request) -> httpx.Response:
        return json_response(200, {"apis": [{"slug": "x.y"}]})

    client, _ = make_sync_client(respond)
    with pytest.raises(ValueError):
        client.catalog()


def test_catalog_normalizes_omitted_heavy_and_rejects_non_boolean() -> None:
    omitted = discovery_api()
    omitted.pop("heavy")
    client, _ = make_sync_client(lambda _req: json_response(200, {"apis": [omitted]}))
    assert client.catalog()[0].heavy is False

    malformed = {**discovery_api(), "heavy": "false"}
    client, _ = make_sync_client(lambda _req: json_response(200, {"apis": [malformed]}))
    with pytest.raises(ValueError):
        client.catalog()


def test_catalog_accepts_safe_additions_and_gateway_owned_disagreements() -> None:
    api = discovery_api()
    api["unexpected"] = True
    api["lanes"] = [
        {
            "pricing": {
                "model": "flat",
                "unit": "request",
                "maxUsd": 0.00325,
            },
            "health": {
                "window": "7d",
                "uptimePct": 98.0,
                "latencyP50Ms": 10,
                "requests": 2,
                "unexpected": True,
            },
            "unexpected": True,
        }
    ]
    pricing = cast("dict[str, object]", api["pricing"])
    pricing["failoverMaxUsd"] = 0.004
    pricing["unexpected"] = True
    offer = cast("dict[str, object]", pricing["from"])
    offer["maxUsd"] = 0.02
    offer["unexpected"] = True
    client, _ = make_sync_client(
        lambda _req: json_response(200, {"apis": [discovery_api()], "unexpected": True})
    )
    # Replace the fixture after verifying an additive envelope is harmless.
    assert client.catalog()[0].slug == "amazon.reviews"

    client, _ = make_sync_client(
        lambda _req: json_response(200, {"apis": [api], "unexpected": True})
    )
    entry = client.catalog()[0]
    assert entry.pricing.from_offer.max_usd == pytest.approx(0.02)
    assert entry.pricing.failover_max_usd == pytest.approx(0.004)
    assert entry.lanes[0].pricing.model == "flat"
    assert entry.lanes[0].health is not None
    assert entry.lanes[0].health.window == "7d"
    assert entry.failover is True
    assert entry.excludes_caller_delay is True
    assert entry.model_extra is None
    assert entry.pricing.model_extra is None
    assert entry.pricing.from_offer.model_extra is None


def test_catalog_accepts_empty_lanes_and_older_optional_field_shape() -> None:
    api = discovery_api()
    api["lanes"] = []
    del api["failover"]
    del api["excludesCallerDelay"]
    client, _ = make_sync_client(lambda _req: json_response(200, {"apis": [api]}))
    entry = client.catalog()[0]
    assert entry.lanes == []
    assert entry.failover is None
    assert entry.excludes_caller_delay is None


@pytest.mark.parametrize(
    ("unsafe", "message"),
    [
        ({"creditBalance": 1}, "catalog.apis[0].future.creditBalance"),
        ({"provider": "upstream"}, "catalog.apis[0].future.provider"),
    ],
)
def test_catalog_rejects_unsafe_fields_before_projection(
    unsafe: dict[str, object], message: str
) -> None:
    api = discovery_api()
    api["future"] = unsafe
    client, _ = make_sync_client(lambda _req: json_response(200, {"apis": [api]}))
    with pytest.raises(ValueError, match=message.replace("[", r"\[")):
        client.catalog()


def test_search_maps_ranked_results_and_filters() -> None:
    api = discovery_api()

    def respond(req: httpx.Request) -> httpx.Response:
        assert req.url.path == "/catalog/search"
        assert dict(req.url.params) == {
            "q": "reviews",
            "category": "shop",
            "platform": "amazon",
            "limit": "3",
        }
        return json_response(
            200,
            {
                "results": [
                    {
                        "slug": api["slug"],
                        "platformId": "amazon",
                        "name": api["name"],
                        "description": api["description"],
                        "category": api["category"],
                        "provider": api["provider"],
                        "pricing": api["pricing"],
                        "relevance": 0.91,
                        "highlightFields": [
                            {
                                "path": "items[].title",
                                "type": "string",
                                "why": "title",
                            }
                        ],
                    }
                ],
                "total": 4,
                "ranking": "semantic",
            },
        )

    client, _ = make_sync_client(respond)
    found = client.search(query="reviews", category="shop", platform="amazon", limit=3)
    assert found.total == 4
    assert found.ranking == "semantic"
    assert found.results[0].relevance == pytest.approx(0.91)
    assert found.results[0].pricing.from_offer.model == "linear"


def test_search_drops_safe_additive_result_and_envelope_fields() -> None:
    api = discovery_api()
    result = {
        "slug": api["slug"],
        "platformId": "amazon",
        "name": api["name"],
        "description": api["description"],
        "category": api["category"],
        "provider": api["provider"],
        "pricing": {
            **cast("dict[str, object]", api["pricing"]),
            "future": True,
            "from": {
                **cast(
                    "dict[str, object]",
                    cast("dict[str, object]", api["pricing"])["from"],
                ),
                "future": True,
            },
        },
        "relevance": 1.0,
        "lanes": api["lanes"],
        "future": True,
        "highlightFields": [
            {
                "path": "items[].title",
                "type": "string",
                "why": "title",
                "future": True,
            }
        ],
    }
    client, _ = make_sync_client(
        lambda _req: json_response(
            200,
            {
                "results": [result],
                "total": 1,
                "ranking": "keyword",
                "unexpected": True,
            },
        )
    )
    found = client.search(query="x")
    assert len(found.results) == 1
    assert found.model_extra is None
    assert found.results[0].model_extra is None
    assert found.results[0].pricing.model_extra is None
    assert found.results[0].pricing.from_offer.model_extra is None
    assert found.results[0].highlight_fields is not None
    assert found.results[0].highlight_fields[0].model_extra is None


def test_describe_includes_schemas() -> None:
    api = {
        **discovery_api(),
        "inputSchema": {
            "type": "object",
            "unevaluatedProperties": False,
            "futureKeyword": {"nested": [1, True, None]},
        },
        "outputSchema": {
            "type": "object",
            "properties": {},
            "$defs": {"item": {"type": "string", "futureKeyword": True}},
        },
    }

    def respond(req: httpx.Request) -> httpx.Response:
        assert req.url.path == "/v1/apis/amazon.reviews"
        return json_response(200, api)

    client, _ = make_sync_client(respond)
    described = client.describe("amazon.reviews")
    assert described.input_schema == {
        "type": "object",
        "unevaluatedProperties": False,
        "futureKeyword": {"nested": [1, True, None]},
    }
    assert described.output_schema == {
        "type": "object",
        "properties": {},
        "$defs": {"item": {"type": "string", "futureKeyword": True}},
    }


def test_describe_accepts_gateway_owned_pricing_and_lane_disagreement() -> None:
    api = discovery_api()
    pricing = cast("dict[str, object]", api["pricing"])
    pricing["failoverMaxUsd"] = 0.04002
    api.update(
        {
            "inputSchema": {"type": "object"},
            "outputSchema": {"type": "object"},
        }
    )
    client, _ = make_sync_client(lambda _req: json_response(200, api))
    entry = client.describe("amazon.reviews")
    assert entry.pricing.failover_max_usd == pytest.approx(0.04002)
    assert entry.lanes[1].pricing.max_usd == pytest.approx(0.05)


def test_describe_rejects_missing_schemas() -> None:
    client, _ = make_sync_client(lambda _req: json_response(200, discovery_api()))
    with pytest.raises(ValueError, match="detail schemas are required"):
        client.describe("amazon.reviews")


def test_describe_404_raises_not_found() -> None:
    def respond(_req: httpx.Request) -> httpx.Response:
        return json_response(404, {"error": "no such sku"})

    client, _ = make_sync_client(respond)
    with pytest.raises(NotFoundError):
        client.describe("nope.gone")


def test_agent_signup_maps_result(monkeypatch: pytest.MonkeyPatch) -> None:
    captured: dict[str, object] = {}

    def handler(request: httpx.Request) -> httpx.Response:
        captured["path"] = request.url.path
        captured["auth"] = request.headers.get("authorization")
        captured["body"] = json.loads(request.content)
        return json_response(
            200,
            {
                "secret": "sk_live_x",
                "capUsd": 0.15,
                "claimToken": "tok",
                "claimUrl": "https://getanyapi.com/dashboard",
                "keyId": "key_1",
            },
        )

    transport = httpx.MockTransport(handler)
    import getanyapi._client as client_mod

    real_client = httpx.Client

    def fake_client(*_a: object, **_k: object) -> httpx.Client:
        return real_client(transport=transport)

    monkeypatch.setattr(client_mod.httpx, "Client", fake_client)
    result = agent_signup(sponsor_email="me@x.com", label="bot")

    assert captured["path"] == "/agent/signup"
    assert captured["auth"] is None  # no auth header on signup
    assert captured["body"] == {"sponsorEmail": "me@x.com", "label": "bot"}
    assert result.secret == "sk_live_x"
    assert result.cap_usd == 0.15
    assert result.claim_token == "tok"
    assert result.claim_url == "https://getanyapi.com/dashboard"


async def test_async_account() -> None:
    def respond(req: httpx.Request) -> httpx.Response:
        if req.url.path == "/v1/balance":
            return json_response(200, {"usd": 5.0})
        return json_response(
            200,
            {
                "id": "a",
                "status": "active",
                "createdAt": "t",
                "onboardingComplete": False,
            },
        )

    client, _ = make_async_client(respond)
    assert (await client.balance()).usd == 5.0
    assert (await client.me()).onboarding_complete is False
    await client.aclose()


async def test_async_discovery_methods() -> None:
    api = discovery_api()

    def respond(req: httpx.Request) -> httpx.Response:
        if req.url.path == "/v1/apis":
            return json_response(200, {"apis": [api]})
        if req.url.path == "/catalog/search":
            return json_response(
                200,
                {
                    "results": [
                        {
                            "slug": api["slug"],
                            "platformId": "amazon",
                            "name": api["name"],
                            "description": api["description"],
                            "category": api["category"],
                            "provider": "AnyAPI",
                            "pricing": api["pricing"],
                            "relevance": 1.0,
                        }
                    ],
                    "total": 1,
                    "ranking": "keyword",
                },
            )
        return json_response(
            200,
            {
                **api,
                "inputSchema": {"type": "object"},
                "outputSchema": {"type": "object"},
            },
        )

    client, _ = make_async_client(respond)
    assert (await client.catalog(category="shop"))[0].slug == "amazon.reviews"
    assert (await client.search(query="reviews")).ranking == "keyword"
    assert (await client.describe("amazon.reviews")).input_schema is not None
    await client.aclose()
