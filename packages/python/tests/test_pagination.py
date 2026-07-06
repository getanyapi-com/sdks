"""Cursor walk semantics for sync and async paginators (SPEC 2.5, 3.5)."""

from __future__ import annotations

import json

import httpx

from anyapi._pagination import apaginate, paginate
from conftest import (
    json_response,
    make_async_client,
    make_sync_client,
    run_envelope,
)


def _page(items: list[dict[str, int]], next_cursor: str | None) -> dict:
    return run_envelope(
        {"ads": items, "nextCursor": next_cursor},
        items=len(items),
    )


def _multi_page_responder():
    pages = [
        _page([{"id": 1}, {"id": 2}], "c1"),
        _page([{"id": 3}, {"id": 4}], "c2"),
        _page([{"id": 5}], None),
    ]
    state = {"i": 0}

    def respond(_req: httpx.Request) -> httpx.Response:
        body = pages[state["i"]]
        state["i"] += 1
        return json_response(200, body)

    return respond


def test_sync_walks_all_pages_flattening_items() -> None:
    client, rec = make_sync_client(_multi_page_responder())
    p = paginate(client, "facebook.ads_search", {"q": "x"}, "ads")
    ids = [item["id"] for item in p]
    assert ids == [1, 2, 3, 4, 5]
    assert len(rec.requests) == 3
    # cursor is injected on page 2+ only.
    assert "cursor" not in json.loads(rec.requests[0].content)
    assert json.loads(rec.requests[1].content)["cursor"] == "c1"
    assert json.loads(rec.requests[2].content)["cursor"] == "c2"


def test_sync_pages_yields_whole_run_results() -> None:
    client, _ = make_sync_client(_multi_page_responder())
    p = paginate(client, "facebook.ads_search", {"q": "x"}, "ads")
    pages = list(p.pages())
    assert len(pages) == 3
    assert all(page.cost_usd > 0 for page in pages)
    assert pages[0].output.data["ads"][0]["id"] == 1


def test_sync_stops_on_not_found() -> None:
    def respond(_req: httpx.Request) -> httpx.Response:
        return json_response(200, run_envelope(None, found=False))

    client, rec = make_sync_client(respond)
    p = paginate(client, "facebook.ads_search", {"q": "x"}, "ads")
    assert list(p) == []
    assert len(rec.requests) == 1


def test_sync_stops_on_empty_cursor() -> None:
    def respond(_req: httpx.Request) -> httpx.Response:
        return json_response(200, _page([{"id": 1}], ""))

    client, rec = make_sync_client(respond)
    p = paginate(client, "facebook.ads_search", {"q": "x"}, "ads")
    assert [i["id"] for i in p] == [1]
    assert len(rec.requests) == 1  # empty cursor ends the walk


def test_sync_max_items_caps_mid_page() -> None:
    client, rec = make_sync_client(_multi_page_responder())
    p = paginate(
        client,
        "facebook.ads_search",
        {"q": "x"},
        "ads",
        {"max_items": 3},
    )
    ids = [item["id"] for item in p]
    assert ids == [1, 2, 3]  # capped mid second page
    # The wire request must NOT carry max_items (iterator paces itself).
    for req in rec.requests:
        assert "max_items" not in req.url.params


async def test_async_walks_all_pages() -> None:
    client, rec = make_async_client(_multi_page_responder())
    p = apaginate(client, "facebook.ads_search", {"q": "x"}, "ads")
    ids = [item["id"] async for item in p]
    assert ids == [1, 2, 3, 4, 5]
    assert len(rec.requests) == 3
    await client.aclose()


async def test_async_pages_and_max_items() -> None:
    client, _ = make_async_client(_multi_page_responder())
    p = apaginate(
        client,
        "facebook.ads_search",
        {"q": "x"},
        "ads",
        {"max_items": 2},
    )
    ids = [item["id"] async for item in p]
    assert ids == [1, 2]

    client2, _ = make_async_client(_multi_page_responder())
    p2 = apaginate(client2, "facebook.ads_search", {"q": "x"}, "ads")
    pages = [page async for page in p2.pages()]
    assert len(pages) == 3
    await client.aclose()
    await client2.aclose()
