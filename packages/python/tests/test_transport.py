"""Wire shape, query params, and retry policy (SPEC 2.2, 2.8)."""

from __future__ import annotations

import json

import httpx
import pytest

from getanyapi import ConnectionError, RateLimitedError, TimeoutError
from conftest import (
    json_response,
    make_async_client,
    make_sync_client,
    run_envelope,
)


def test_wire_shape_and_headers() -> None:
    def respond(_req: httpx.Request) -> httpx.Response:
        return json_response(200, run_envelope({"ok": True}))

    client, rec = make_sync_client(respond)
    client.run("amazon.reviews", {"product": "B07", "limit": 3})

    req = rec.last
    assert req.method == "POST"
    assert req.url.path == "/v1/run/amazon.reviews"
    assert req.headers["authorization"] == "Bearer test-key"
    assert req.headers["content-type"] == "application/json"
    assert req.headers["accept"] == "application/json"
    assert json.loads(req.content) == {"product": "B07", "limit": 3}


def test_query_shaping_params() -> None:
    def respond(_req: httpx.Request) -> httpx.Response:
        return json_response(200, run_envelope({"ok": True}))

    client, rec = make_sync_client(respond)
    client.run(
        "x.y",
        {},
        options={"fields": ["a", "b"], "max_items": 5, "summary": True},
    )
    q = rec.last.url.params
    assert q["fields"] == "a,b"
    assert q["max_items"] == "5"
    assert q["summary"] == "true"


def test_no_query_params_when_unset() -> None:
    def respond(_req: httpx.Request) -> httpx.Response:
        return json_response(200, run_envelope({"ok": True}))

    client, rec = make_sync_client(respond)
    client.run("x.y", {})
    assert str(rec.last.url.params) == ""


def test_retry_on_429_then_succeeds(monkeypatch: pytest.MonkeyPatch) -> None:
    import getanyapi._transport as transport

    slept: list[float] = []
    monkeypatch.setattr(transport, "sleep", lambda s: slept.append(s))

    calls = {"n": 0}

    def respond(_req: httpx.Request) -> httpx.Response:
        calls["n"] += 1
        if calls["n"] < 3:
            return json_response(429, {"error": "slow down"})
        return json_response(200, run_envelope({"ok": True}))

    client, _ = make_sync_client(respond, max_retries=2)
    result = client.run("x.y", {})
    assert result.output.found is True
    assert calls["n"] == 3  # 1 + 2 retries
    assert len(slept) == 2


def test_retry_exhausted_raises(monkeypatch: pytest.MonkeyPatch) -> None:
    import getanyapi._transport as transport

    monkeypatch.setattr(transport, "sleep", lambda _s: None)

    def respond(_req: httpx.Request) -> httpx.Response:
        return json_response(429, {"error": "slow"})

    client, rec = make_sync_client(respond, max_retries=2)
    with pytest.raises(RateLimitedError):
        client.run("x.y", {})
    assert len(rec.requests) == 3


def test_no_retry_on_400(monkeypatch: pytest.MonkeyPatch) -> None:
    import getanyapi._transport as transport

    monkeypatch.setattr(transport, "sleep", lambda _s: None)

    def respond(_req: httpx.Request) -> httpx.Response:
        return json_response(400, {"error": "bad"})

    from getanyapi import BadRequestError

    client, rec = make_sync_client(respond, max_retries=2)
    with pytest.raises(BadRequestError):
        client.run("x.y", {})
    assert len(rec.requests) == 1  # no retry


def test_retry_after_header_honored(monkeypatch: pytest.MonkeyPatch) -> None:
    import getanyapi._transport as transport

    slept: list[float] = []
    monkeypatch.setattr(transport, "sleep", lambda s: slept.append(s))

    calls = {"n": 0}

    def respond(_req: httpx.Request) -> httpx.Response:
        calls["n"] += 1
        if calls["n"] == 1:
            return json_response(
                429, {"error": "wait"}, headers={"retry-after": "2"}
            )
        return json_response(200, run_envelope({"ok": True}))

    client, _ = make_sync_client(respond, max_retries=1)
    client.run("x.y", {})
    assert slept == [2.0]


def test_retry_after_capped_at_max_delay(
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    import getanyapi._transport as transport

    slept: list[float] = []
    monkeypatch.setattr(transport, "sleep", lambda s: slept.append(s))

    calls = {"n": 0}

    def respond(_req: httpx.Request) -> httpx.Response:
        calls["n"] += 1
        if calls["n"] == 1:
            return json_response(
                429, {"error": "wait"}, headers={"retry-after": "9999"}
            )
        return json_response(200, run_envelope({"ok": True}))

    client, _ = make_sync_client(respond, max_retries=1)
    client.run("x.y", {})
    assert slept == [8.0]  # capped at maxDelay


def test_timeout_not_retried() -> None:
    def respond(_req: httpx.Request) -> httpx.Response:
        raise httpx.ReadTimeout("timed out")

    client, rec = make_sync_client(respond, max_retries=2)
    with pytest.raises(TimeoutError) as exc:
        client.run("x.y", {})
    assert exc.value.status == 0
    assert len(rec.requests) == 1  # timeouts never retried


def test_connection_error_retried(monkeypatch: pytest.MonkeyPatch) -> None:
    import getanyapi._transport as transport

    monkeypatch.setattr(transport, "sleep", lambda _s: None)

    def respond(_req: httpx.Request) -> httpx.Response:
        raise httpx.ConnectError("refused")

    client, rec = make_sync_client(respond, max_retries=2)
    with pytest.raises(ConnectionError) as exc:
        client.run("x.y", {})
    assert exc.value.status == 0
    assert len(rec.requests) == 3  # retried to exhaustion


def test_per_request_max_retries_override(
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    import getanyapi._transport as transport

    monkeypatch.setattr(transport, "sleep", lambda _s: None)

    def respond(_req: httpx.Request) -> httpx.Response:
        return json_response(429, {"error": "slow"})

    client, rec = make_sync_client(respond, max_retries=2)
    with pytest.raises(RateLimitedError):
        client.run("x.y", {}, options={"max_retries": 0})
    assert len(rec.requests) == 1  # override wins


async def test_async_retry_on_429(monkeypatch: pytest.MonkeyPatch) -> None:
    import asyncio

    slept: list[float] = []

    async def fake_sleep(s: float) -> None:
        slept.append(s)

    monkeypatch.setattr(asyncio, "sleep", fake_sleep)

    calls = {"n": 0}

    def respond(_req: httpx.Request) -> httpx.Response:
        calls["n"] += 1
        if calls["n"] < 3:
            return json_response(429, {"error": "slow"})
        return json_response(200, run_envelope({"ok": True}))

    client, rec = make_async_client(respond, max_retries=2)
    result = await client.run("x.y", {})
    assert result.output.found is True
    assert len(rec.requests) == 3
    assert len(slept) == 2
    await client.aclose()


async def test_async_timeout_not_retried() -> None:
    def respond(_req: httpx.Request) -> httpx.Response:
        raise httpx.ReadTimeout("timed out")

    client, rec = make_async_client(respond, max_retries=2)
    with pytest.raises(TimeoutError):
        await client.run("x.y", {})
    assert len(rec.requests) == 1
    await client.aclose()
