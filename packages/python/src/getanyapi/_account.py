"""Account, catalog, and agent-signup request/response mapping (SPEC 2.7, 3.7).

Pure functions that build the HTTP request pieces and map raw JSON bodies into
the public models. The sync and async clients share these so the wire mapping
lives in one place. Discovery bodies are validated against the customer-safe
nested USD contract before any public model is returned.
"""

from __future__ import annotations

from typing import Any, cast

from ._errors import AnyAPIError, error_for_status
from ._transport import as_dict, error_message
from .types import (
    AccountProfile,
    AgentSignupResult,
    Balance,
    CatalogEntry,
    CatalogSearchResults,
)

__all__ = [
    "balance_path",
    "me_path",
    "catalog_request",
    "search_request",
    "describe_path",
    "signup_request",
    "parse_balance",
    "parse_me",
    "parse_catalog",
    "parse_describe",
    "parse_search",
    "parse_signup",
    "map_error",
]

balance_path = "/v1/balance"
me_path = "/v1/me"


def catalog_request(category: str | None) -> tuple[str, dict[str, str]]:
    """Path and query params for ``catalog()`` (GET /v1/apis)."""
    params: dict[str, str] = {}
    if category is not None:
        params["category"] = category
    return "/v1/apis", params


def search_request(
    query: str,
    category: str | None,
    platform: str | None,
    limit: int | None,
) -> tuple[str, dict[str, str]]:
    """Path and query params for dedicated ranked discovery search."""
    params = {"q": query}
    if category is not None:
        params["category"] = category
    if platform is not None:
        params["platform"] = platform
    if limit is not None:
        params["limit"] = str(limit)
    return "/catalog/search", params


def describe_path(slug: str) -> str:
    return f"/v1/apis/{slug}"


def signup_request(sponsor_email: str | None, label: str | None) -> dict[str, Any]:
    """JSON body for ``agent_signup()`` (POST /agent/signup, no auth)."""
    body: dict[str, Any] = {}
    if sponsor_email is not None:
        body["sponsorEmail"] = sponsor_email
    if label is not None:
        body["label"] = label
    return body


def parse_balance(body: Any) -> Balance:
    return Balance.model_validate(body)


def parse_me(body: Any) -> AccountProfile:
    """Map /v1/me, dropping clerkUserId and signupGrantApplied (SPEC 2.7)."""
    return AccountProfile.model_validate(body)


def _reject_internal_keys(value: object, path: str) -> None:
    if isinstance(value, list):
        for index, item in enumerate(cast("list[object]", value)):
            _reject_internal_keys(item, f"{path}[{index}]")
        return
    if not isinstance(value, dict):
        return
    for key, item in cast("dict[object, object]", value).items():
        if isinstance(key, str) and "credit" in key.lower():
            raise ValueError(f"malformed discovery response: {path}.{key}")
        _reject_internal_keys(item, f"{path}.{key}")


def _require_exact_keys(value: dict[str, object], allowed: set[str], path: str) -> None:
    unexpected = set(value) - allowed
    if unexpected:
        key = sorted(unexpected)[0]
        raise ValueError(f"malformed discovery response: {path}.{key}")


def parse_catalog(body: object) -> list[CatalogEntry]:
    """Map {apis:[...]} into CatalogEntry[] (SPEC 2.7)."""
    _reject_internal_keys(body, "catalog")
    envelope = as_dict(body)
    _require_exact_keys(envelope, {"apis"}, "catalog")
    raw = envelope.get("apis")
    if not isinstance(raw, list):
        raise ValueError("malformed discovery response: catalog.apis")
    apis: list[object] = list(cast("list[object]", raw))
    return [CatalogEntry.model_validate(item, strict=True) for item in apis]


def parse_describe(body: object) -> CatalogEntry:
    """Map a single /v1/apis/{slug} entry into one CatalogEntry."""
    _reject_internal_keys(body, "api")
    entry = CatalogEntry.model_validate(body, strict=True)
    if entry.input_schema is None or entry.output_schema is None:
        raise ValueError("malformed discovery response: detail schemas are required")
    return entry


def parse_search(body: object) -> CatalogSearchResults:
    """Validate the dedicated search result envelope."""
    _reject_internal_keys(body, "search")
    return CatalogSearchResults.model_validate(body, strict=True)


def parse_signup(body: Any) -> AgentSignupResult:
    return AgentSignupResult.model_validate(body)


def map_error(status: int, body: object, request_id: str | None) -> AnyAPIError:
    """Map a non-2xx account/catalog response to the frozen error hierarchy."""
    return error_for_status(status, error_message(body, status), request_id=request_id)
