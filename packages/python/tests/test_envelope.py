"""RunResult envelope parsing, extra-field round-trip, and unwrap (SPEC 3.3)."""

from __future__ import annotations

from typing import Any

import pytest

from getanyapi import AnyAPIError, BareRunResult, NotFoundError, RunResult, unwrap
from getanyapi.types import OutputFound, OutputNotFound


def test_found_envelope_parses_with_alias_and_extra() -> None:
    result = RunResult[dict[str, Any]].model_validate(
        {
            "output": {"found": True, "data": {"a": 1, "_extra": "x"}},
            "provider": "AnyAPI",
            "costUsd": 0.5,
            "items": 3,
            "replayed": False,
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
            "replayed": False,
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
            "replayed": False,
        }
    )
    assert unwrap(result) == {"x": 1}


def test_unwrap_raises_not_found() -> None:
    result = RunResult[dict[str, Any]].model_validate(
        {
            "output": {"found": False, "data": None},
            "provider": "AnyAPI",
            "costUsd": 0.0,
            "replayed": False,
        }
    )
    with pytest.raises(NotFoundError) as exc:
        unwrap(result)
    assert "no matching result was found" in str(exc.value)
    assert exc.value.status == 404


def test_replay_metadata_parses_with_aliases() -> None:
    result = RunResult[dict[str, Any]].model_validate(
        {
            "output": {"found": True, "data": {"x": 1}},
            "provider": "AnyAPI",
            "costUsd": 0.1,
            "replayed": True,
            "resultId": "res_abc",
            "jqError": "jq: compile error",
        }
    )
    assert result.replayed is True
    assert result.result_id == "res_abc"
    assert result.jq_error == "jq: compile error"
    # The wire shape round-trips unchanged.
    dumped = result.model_dump(by_alias=True)
    assert dumped["replayed"] is True
    assert dumped["resultId"] == "res_abc"
    assert dumped["jqError"] == "jq: compile error"


def test_fresh_run_defaults_the_optional_replay_metadata() -> None:
    result = RunResult[dict[str, Any]].model_validate(
        {
            "output": {"found": True, "data": {"x": 1}},
            "provider": "AnyAPI",
            "costUsd": 0.1,
            "replayed": False,
        }
    )
    assert result.replayed is False
    assert result.result_id is None
    assert result.jq_error is None


def test_unwrap_raises_when_replayed_output_was_not_retained() -> None:
    # An idempotent replay can outlive its stored payload (24h TTL, or a payload over
    # the size cap): the metadata is intact and `output` is legally null.
    # model_construct bypasses validation to build exactly that wire state.
    result: RunResult[dict[str, Any]] = RunResult[dict[str, Any]].model_construct(
        output=None,
        provider="AnyAPI",
        cost_usd=0.001,
        items=3,
        replayed=True,
    )
    with pytest.raises(AnyAPIError) as exc:
        unwrap(result)
    message = str(exc.value)
    assert "was not retained" in message
    assert "idempotent replay" in message
    assert "without the idempotency key" in message
    # Not an empty upstream result: a ResultNotFoundError handler must not swallow it.
    assert not isinstance(exc.value, NotFoundError)


def test_unwrap_raises_on_a_bare_replay_without_a_retained_output() -> None:
    result = BareRunResult[Any].model_validate(
        {
            "output": None,
            "provider": "AnyAPI",
            "costUsd": 0.001,
            "replayed": True,
        }
    )
    with pytest.raises(AnyAPIError) as exc:
        unwrap(result)
    assert "was not retained" in str(exc.value)
    assert not isinstance(exc.value, NotFoundError)
