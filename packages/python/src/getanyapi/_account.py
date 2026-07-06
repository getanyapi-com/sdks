"""Account, catalog, and agent-signup request/response mapping (SPEC 2.7, 3.7).

Pure functions that build the HTTP request pieces and map raw JSON bodies into
the public models. The sync and async clients share these so the wire mapping
lives in one place. Credits never appear in the public surface: the catalog
price is converted from internal credits to USD here, before any model is built.
"""

from __future__ import annotations

from typing import Any, cast

from ._errors import AnyAPIError, error_for_status
from ._transport import as_dict, error_message
from .types import AccountProfile, AgentSignupResult, Balance, CatalogEntry

__all__ = [
    "balance_path",
    "me_path",
    "catalog_request",
    "describe_path",
    "signup_request",
    "parse_balance",
    "parse_me",
    "parse_catalog",
    "parse_describe",
    "parse_signup",
    "map_error",
]

_CREDIT_USD = 0.00001  # 1 credit = $0.00001 USD (internal unit, never surfaced)

balance_path = "/v1/balance"
me_path = "/v1/me"


def catalog_request(
    query: str | None, category: str | None
) -> tuple[str, dict[str, str]]:
    """Path and query params for ``catalog()`` (GET /v1/apis)."""
    params: dict[str, str] = {}
    if query is not None:
        params["query"] = query
    if category is not None:
        params["category"] = category
    return "/v1/apis", params


def describe_path(slug: str) -> str:
    return f"/v1/apis/{slug}"


def signup_request(
    sponsor_email: str | None, label: str | None
) -> dict[str, Any]:
    """JSON body for ``agent_signup()`` (POST /agent/signup, no auth)."""
    body: dict[str, Any] = {}
    if sponsor_email is not None:
        body["sponsorEmail"] = sponsor_email
    if label is not None:
        body["label"] = label
    return body


def _split_slug(slug: str) -> tuple[str, str]:
    """Derive (platform, action) from a dotted slug; action "" if no dot."""
    platform, _, action = slug.partition(".")
    return platform, action


def parse_balance(body: Any) -> Balance:
    return Balance.model_validate(body)


def parse_me(body: Any) -> AccountProfile:
    """Map /v1/me, dropping clerkUserId and signupGrantApplied (SPEC 2.7)."""
    return AccountProfile.model_validate(body)


def _str_field(raw: dict[str, object], key: str) -> str:
    value = raw.get(key)
    return value if isinstance(value, str) else ""


def _from_credits(raw: dict[str, object]) -> float:
    value = raw.get("fromCredits")
    if isinstance(value, (int, float)):
        return float(value)
    return 0.0


def _to_catalog_entry(raw: dict[str, object]) -> CatalogEntry:
    slug = _str_field(raw, "slug")
    platform, action = _split_slug(slug)
    return CatalogEntry.model_validate(
        {
            "slug": slug,
            "platform": platform,
            "action": action,
            "name": _str_field(raw, "name"),
            "category": _str_field(raw, "category"),
            "description": _str_field(raw, "description"),
            "priceUsd": _from_credits(raw) * _CREDIT_USD,
        }
    )


def parse_catalog(body: object) -> list[CatalogEntry]:
    """Map {apis:[...]} into CatalogEntry[] (SPEC 2.7)."""
    raw = as_dict(body).get("apis")
    if not isinstance(raw, list):
        return []
    apis: list[object] = list(cast("list[object]", raw))
    return [_to_catalog_entry(as_dict(item)) for item in apis]


def parse_describe(body: object) -> CatalogEntry:
    """Map a single /v1/apis/{slug} entry into one CatalogEntry."""
    return _to_catalog_entry(as_dict(body))


def parse_signup(body: Any) -> AgentSignupResult:
    return AgentSignupResult.model_validate(body)


def map_error(
    status: int, body: object, request_id: str | None
) -> AnyAPIError:
    """Map a non-2xx account/catalog response to the frozen error hierarchy."""
    return error_for_status(
        status, error_message(body, status), request_id=request_id
    )
