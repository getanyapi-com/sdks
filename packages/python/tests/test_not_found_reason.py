"""The runtime's reason words are a copy of the enum the gateway publishes.

Every ``/v1/run/*`` operation in the committed OpenAPI snapshot that declares a
``reason`` enum on its output publishes only the words its own sources can
answer with, in ``NOT_FOUND_REASONS`` order, and across the catalog every
runtime word is published somewhere. Until the snapshot carries the field (it
is refreshed from the live gateway after deploy) there is nothing to compare.
"""

from __future__ import annotations

import json
from pathlib import Path
from typing import Any

from getanyapi.types import NOT_FOUND_REASONS

_OPENAPI = Path(__file__).resolve().parents[3] / "openapi.json"


def _published_reason_enums() -> list[list[str]]:
    document: dict[str, Any] = json.loads(_OPENAPI.read_text())
    enums: list[list[str]] = []
    for path, operations in document["paths"].items():
        if not path.startswith("/v1/run/"):
            continue
        schema = (
            operations.get("post", {})
            .get("responses", {})
            .get("200", {})
            .get("content", {})
            .get("application/json", {})
            .get("schema", {})
        )
        output = schema.get("properties", {}).get("output", {})
        for branch in output.get("anyOf", [output]):
            reason = branch.get("properties", {}).get("reason", {})
            if isinstance(reason.get("enum"), list):
                enums.append(list(reason["enum"]))
    return enums


def test_reason_words_match_the_published_enum() -> None:
    enums = _published_reason_enums()
    for published in enums:
        assert published == [word for word in NOT_FOUND_REASONS if word in published]
    if enums:
        seen = {word for published in enums for word in published}
        assert [word for word in NOT_FOUND_REASONS if word in seen] == list(NOT_FOUND_REASONS)
