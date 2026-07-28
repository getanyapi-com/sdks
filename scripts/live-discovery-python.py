"""Credentialless production discovery canary for the Python SDK."""

from __future__ import annotations

import time

import httpx
from getanyapi import AnyAPI

ORIGIN = "https://api.getanyapi.com"


def _public_url(request: httpx.Request) -> httpx.URL:
    path = request.url.path
    if path == "/v1/apis":
        return request.url.copy_with(path="/catalog")
    if path.startswith("/v1/apis/"):
        slug = path.removeprefix("/v1/apis/")
        return request.url.copy_with(path=f"/public/try/{slug}/schema")
    if path == "/catalog/search":
        return request.url
    raise AssertionError(f"unexpected SDK request path: {path}")


def main() -> None:
    with httpx.Client(timeout=20.0) as upstream:

        def handler(request: httpx.Request) -> httpx.Response:
            target = _public_url(request)
            for attempt in range(1, 4):
                try:
                    response = upstream.get(
                        target, headers={"Accept": "application/json"}
                    )
                    if attempt < 3 and (
                        response.status_code == 429 or response.status_code >= 500
                    ):
                        time.sleep(0.25 * attempt)
                        continue
                    return response
                except httpx.HTTPError:
                    if attempt == 3:
                        raise
                    time.sleep(0.25 * attempt)
            raise AssertionError("live discovery request exhausted retries")

        with httpx.Client(transport=httpx.MockTransport(handler)) as transport:
            client = AnyAPI(
                api_key="credentialless-live-discovery-canary",
                base_url=ORIGIN,
                max_retries=0,
                http_client=transport,
            )
            catalog = client.catalog()
            assert catalog, "catalog is empty"
            eligible = next((entry for entry in catalog if entry.try_eligible), None)
            assert eligible is not None, "catalog has no try-eligible SKU"

            search = client.search(query="web", limit=1)
            assert search.results, "search is empty"

            detail = client.describe(eligible.slug)
            assert detail.slug == eligible.slug, "detail slug does not match"
            assert detail.input_schema is not None, "detail input schema is missing"
            assert detail.output_schema is not None, "detail output schema is missing"

    print(f"PASS Python live discovery: {len(catalog)} APIs, detail {detail.slug}")


if __name__ == "__main__":
    main()
