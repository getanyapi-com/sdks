"""Status to error class mapping and request-id capture (SPEC 3.6)."""

from __future__ import annotations

import httpx
import pytest

from anyapi import (
    AnyAPIError,
    AuthenticationError,
    BadRequestError,
    InsufficientBalanceError,
    NotFoundError,
    RateLimitedError,
    UpstreamError,
)
from conftest import json_response, make_sync_client

_CASES = [
    (400, BadRequestError),
    (401, AuthenticationError),
    (402, InsufficientBalanceError),
    (404, NotFoundError),
    (429, RateLimitedError),
    (502, UpstreamError),
    (418, AnyAPIError),  # unmapped -> base
    (500, AnyAPIError),
]


@pytest.mark.parametrize(("status", "cls"), _CASES)
def test_status_maps_to_error_class(
    status: int, cls: type[AnyAPIError]
) -> None:
    def respond(_req: httpx.Request) -> httpx.Response:
        return json_response(
            status,
            {"error": f"boom {status}"},
            headers={"x-request-id": "req-123"},
        )

    client, _ = make_sync_client(respond, max_retries=0)
    with pytest.raises(cls) as exc:
        client.run("amazon.reviews", {"product": "B0"})
    assert exc.value.status == status
    assert exc.value.request_id == "req-123"
    assert str(exc.value) == f"boom {status}"
    # For mapped statuses, the class must be exact (not just a base match).
    assert type(exc.value) is cls


def test_unparseable_body_uses_fallback_message() -> None:
    def respond(_req: httpx.Request) -> httpx.Response:
        return httpx.Response(400, content=b"not json")

    client, _ = make_sync_client(respond, max_retries=0)
    with pytest.raises(BadRequestError) as exc:
        client.run("amazon.reviews", {})
    assert "status 400" in str(exc.value)
    assert exc.value.request_id is None
