"""Per-SKU synthetic fixture integration sweep."""

from __future__ import annotations

import copy
import json
import keyword
from pathlib import Path
from typing import Any

import httpx
import pytest
from pydantic import BaseModel

from getanyapi import NotFoundError, RunResult
from conftest import json_response, make_async_client, make_sync_client

_REPO_ROOT = Path(__file__).resolve().parents[3]
_IR_PATH = _REPO_ROOT / "generator" / "ir.json"
_FIXTURES_PATH = _REPO_ROOT / "generator" / "fixtures.json"


def _read_json(path: Path) -> Any:
    return json.loads(path.read_text())


_IR = _read_json(_IR_PATH)
_FIXTURES = _read_json(_FIXTURES_PATH)
_SKUS_BY_SLUG = {sku["slug"]: sku for sku in _IR["skus"]}
_SLUGS = sorted(slug for slug in _FIXTURES if slug != "_generated")


def _fixture(slug: str) -> dict[str, Any]:
    fixture = _FIXTURES[slug]
    if not isinstance(fixture, dict):
        raise AssertionError(f"missing fixture for {slug}")
    return fixture


def _sku(slug: str) -> dict[str, Any]:
    sku = _SKUS_BY_SLUG.get(slug)
    if not isinstance(sku, dict):
        raise AssertionError(f"missing IR entry for {slug}")
    return sku


def _has_passthrough_extra(value: Any) -> bool:
    if isinstance(value, dict):
        if value.get("_extra") == "passthrough":
            return True
        return any(_has_passthrough_extra(item) for item in value.values())
    if isinstance(value, list):
        return any(_has_passthrough_extra(item) for item in value)
    return False


def _has_model_extra_passthrough(value: Any) -> bool:
    if isinstance(value, BaseModel):
        extra = value.model_extra or {}
        if extra.get("_extra") == "passthrough":
            return True
        field_values = (
            getattr(value, name)
            for name in value.__class__.model_fields
            if hasattr(value, name)
        )
        return any(
            _has_model_extra_passthrough(item)
            for item in [*extra.values(), *field_values]
        )
    if isinstance(value, dict):
        return any(_has_model_extra_passthrough(item) for item in value.values())
    if isinstance(value, list):
        return any(_has_model_extra_passthrough(item) for item in value)
    return False


def _has_hard_keyword_key(example: dict[str, Any]) -> bool:
    return any(keyword.iskeyword(key) for key in example)


def _dispatch_sync(client: Any, sku: dict[str, Any]) -> tuple[RunResult[Any], bool]:
    example = sku["example"]
    if _has_hard_keyword_key(example):
        return client.run(sku["slug"], example), True
    namespace = getattr(client, sku["pyNamespace"])
    method = getattr(namespace, sku["pyMethod"])
    return method(**example), False


async def _dispatch_async(client: Any, sku: dict[str, Any]) -> RunResult[Any]:
    example = sku["example"]
    if _has_hard_keyword_key(example):
        return await client.run(sku["slug"], example)
    namespace = getattr(client, sku["pyNamespace"])
    method = getattr(namespace, sku["pyMethod"])
    return await method(**example)


def _page_with_item(
    fixture: dict[str, Any],
    items_field: str,
    item: dict[str, Any],
    next_cursor: str | None,
) -> dict[str, Any]:
    page = copy.deepcopy(fixture)
    data = page["output"]["data"]
    data[items_field] = [item]
    # Real wire always includes nextCursor (empty string when there are no more pages);
    # the data model requires it, so end the walk with "" rather than deleting the key.
    data["nextCursor"] = "" if next_cursor is None else next_cursor
    page["items"] = 1
    return page


@pytest.mark.parametrize("slug", _SLUGS, ids=_SLUGS)
def test_generated_sku_fixture_sweep(slug: str) -> None:
    sku = _sku(slug)
    fixture = _fixture(slug)

    def respond(req: httpx.Request) -> httpx.Response:
        assert req.method == "POST"
        assert req.url.path == f"/v1/run/{slug}"
        return json_response(200, fixture)

    client, _ = make_sync_client(respond)
    result, used_generic = _dispatch_sync(client, sku)

    if sku["output"]["envelope"] == "bare":
        # Bare SKU: output IS the data model directly (no found/data wrapper).
        assert not hasattr(result.output, "found")
    else:
        assert result.output.found is True
    assert result.provider == "AnyAPI"
    assert result.cost_usd > 0
    expects_extra = _has_passthrough_extra(fixture)
    dumped = result.model_dump(by_alias=True)
    if expects_extra:
        assert _has_passthrough_extra(dumped)
        if not used_generic:
            assert _has_model_extra_passthrough(result)


async def test_async_generated_method_parses_paginated_fixture() -> None:
    sku = _sku("facebook.ads_search")
    fixture = _fixture(sku["slug"])

    def respond(req: httpx.Request) -> httpx.Response:
        assert req.url.path == "/v1/run/facebook.ads_search"
        return json_response(200, fixture)

    client, _ = make_async_client(respond)
    result = await _dispatch_async(client, sku)

    assert result.output.found is True
    assert result.provider == "AnyAPI"
    assert result.cost_usd > 0
    await client.aclose()


def test_generated_method_maps_404_to_not_found() -> None:
    sku = _sku("amazon.reviews")

    def respond(_req: httpx.Request) -> httpx.Response:
        return json_response(404, {"error": "not found"})

    client, _ = make_sync_client(respond, max_retries=0)
    with pytest.raises(NotFoundError):
        _dispatch_sync(client, sku)


def test_generated_iterator_walks_two_fixture_pages() -> None:
    sku = _sku("facebook.ads_search")
    items_field = sku["pagination"]["itemsField"]
    assert isinstance(items_field, str)
    fixture = _fixture(sku["slug"])
    first_item = fixture["output"]["data"][items_field][0]
    page1_item = {**first_item, "id": "page-1"}
    page2_item = {**first_item, "id": "page-2"}
    pages = [
        _page_with_item(fixture, items_field, page1_item, "c1"),
        _page_with_item(fixture, items_field, page2_item, None),
    ]
    state = {"i": 0}

    def respond(_req: httpx.Request) -> httpx.Response:
        body = pages[state["i"]]
        state["i"] += 1
        return json_response(200, body)

    client, rec = make_sync_client(respond)
    namespace = getattr(client, sku["pyNamespace"])
    iterator = getattr(namespace, sku["pyIterMethod"])(**sku["example"])
    seen = list(iterator)

    # B3: yielded items are validated pydantic models - assert ATTRIBUTE access, not
    # dict subscription (a dict would AttributeError here).
    assert [item.id for item in seen] == ["page-1", "page-2"]
    assert len(rec.requests) == 2


def test_bare_paginated_iterator_yields_item_models() -> None:
    # B1 + B3: reddit.search is a BARE paginated SKU (output IS the data). Its iterator
    # walks output.posts / output.nextCursor directly and yields validated post models.
    sku = _sku("reddit.search")
    assert sku["output"]["envelope"] == "bare"
    items_field = sku["pagination"]["itemsField"]
    assert items_field == "posts"
    fixture = _fixture(sku["slug"])
    base_post = fixture["output"][items_field][0]

    def bare_page(post_id: str, next_cursor: str) -> dict[str, Any]:
        page = copy.deepcopy(fixture)
        page["output"][items_field] = [{**base_post, "id": post_id}]
        page["output"]["nextCursor"] = next_cursor
        return page

    pages = [bare_page("p1", "c1"), bare_page("p2", "")]
    state = {"i": 0}

    def respond(_req: httpx.Request) -> httpx.Response:
        body = pages[state["i"]]
        state["i"] += 1
        return json_response(200, body)

    client, rec = make_sync_client(respond)
    namespace = getattr(client, sku["pyNamespace"])
    iterator = getattr(namespace, sku["pyIterMethod"])(**sku["example"])
    seen = list(iterator)

    assert [post.id for post in seen] == ["p1", "p2"]
    assert len(rec.requests) == 2

    # And the plain method returns a BareRunResult whose output IS the data model.
    client2, _ = make_sync_client(lambda _r: json_response(200, fixture))
    ns2 = getattr(client2, sku["pyNamespace"])
    res = getattr(ns2, sku["pyMethod"])(**sku["example"])
    assert not hasattr(res.output, "found")
    assert isinstance(res.output.posts, list)
    assert json.loads(rec.requests[1].content)["cursor"] == "c1"
