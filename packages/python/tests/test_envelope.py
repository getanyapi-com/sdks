"""RunResult envelope parsing, extra-field round-trip, and unwrap (SPEC 3.3)."""

from __future__ import annotations

from typing import Any

import pytest

from anyapi import NotFoundError, RunResult, unwrap
from anyapi.types import OutputFound, OutputNotFound


def test_found_envelope_parses_with_alias_and_extra() -> None:
    result = RunResult[dict[str, Any]].model_validate(
        {
            "output": {"found": True, "data": {"a": 1, "_extra": "x"}},
            "provider": "AnyAPI",
            "costUsd": 0.5,
            "items": 3,
            "hint": "trimmed",
            "topExtra": "kept",
        }
    )
    assert isinstance(result.output, OutputFound)
    assert result.output.found is True
    assert result.output.data == {"a": 1, "_extra": "x"}
    assert result.cost_usd == 0.5
    assert result.items == 3
    assert result.hint == "trimmed"
    assert result.provider == "AnyAPI"
    # Unknown top-level keys round-trip via model_extra (open root).
    assert result.model_extra == {"topExtra": "kept"}


def test_not_found_envelope() -> None:
    result = RunResult[dict[str, Any]].model_validate(
        {
            "output": {"found": False, "data": None},
            "provider": "AnyAPI",
            "costUsd": 0.0,
        }
    )
    assert isinstance(result.output, OutputNotFound)
    assert result.output.found is False
    assert result.output.data is None
    assert result.items is None
    assert result.hint is None


def test_unwrap_returns_data_when_found() -> None:
    result = RunResult[dict[str, Any]].model_validate(
        {
            "output": {"found": True, "data": {"x": 1}},
            "provider": "AnyAPI",
            "costUsd": 0.1,
        }
    )
    assert unwrap(result) == {"x": 1}


def test_unwrap_raises_not_found() -> None:
    result = RunResult[dict[str, Any]].model_validate(
        {
            "output": {"found": False, "data": None},
            "provider": "AnyAPI",
            "costUsd": 0.0,
        }
    )
    with pytest.raises(NotFoundError) as exc:
        unwrap(result)
    assert "no matching result was found" in str(exc.value)
    assert exc.value.status == 404
