"""Account, catalog, describe, and agent-signup mapping (SPEC 2.7, 3.7)."""

from __future__ import annotations

import json

import httpx
import pytest

from anyapi import NotFoundError, agent_signup
from conftest import json_response, make_async_client, make_sync_client


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


def test_catalog_converts_credits_to_usd() -> None:
    def respond(req: httpx.Request) -> httpx.Response:
        assert req.url.path == "/v1/apis"
        assert req.url.params["query"] == "amazon"
        assert req.url.params["category"] == "ecommerce"
        return json_response(
            200,
            {
                "apis": [
                    {
                        "slug": "amazon.reviews",
                        "name": "Amazon Reviews",
                        "category": "ecommerce",
                        "description": "Pull reviews",
                        "fromCredits": 1625,
                    }
                ]
            },
        )

    client, _ = make_sync_client(respond)
    entries = client.catalog(query="amazon", category="ecommerce")
    assert len(entries) == 1
    e = entries[0]
    assert e.slug == "amazon.reviews"
    assert e.platform == "amazon"
    assert e.action == "reviews"
    # 1625 credits * 0.00001 = 0.01625 USD (never surfaced as credits).
    assert e.price_usd == pytest.approx(0.01625)


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
    import anyapi._client as client_mod

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
