#!/usr/bin/env bash
# Published-artifact smoke runner.
#
# Installs BOTH SDKs FROM THE REGISTRIES (npm + PyPI) into throwaway temp dirs
# OUTSIDE this repo, then runs one real production call through each. This catches
# packaging bugs (missing files, broken exports/types) that the repo's mock-only
# test suite cannot: it never resolves the local workspace source.
#
# Usage:
#   bash scripts/smoke.sh            # test the "latest" published version
#   VERSION=0.1.0 bash scripts/smoke.sh
#   bash scripts/smoke.sh 0.1.0      # positional version also works
#
# Exits nonzero if EITHER SDK smoke fails. Prints a per-SDK PASS/FAIL summary.
set -uo pipefail

VERSION="${1:-${VERSION:-latest}}"

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SMOKE_DIR="$REPO_ROOT/smoke"

echo "== Published-artifact smoke (version: $VERSION) =="

npm_result="SKIP"
pypi_result="SKIP"

# --- npm --------------------------------------------------------------------
run_npm() {
  local spec="@getanyapi/sdk"
  if [ "$VERSION" != "latest" ]; then
    spec="@getanyapi/sdk@$VERSION"
  fi
  local tmp
  tmp="$(mktemp -d "${TMPDIR:-/tmp}/anyapi-npm-smoke.XXXXXX")"
  echo "-- npm: installing $spec into $tmp"
  (
    cd "$tmp" || exit 1
    npm init -y >/dev/null 2>&1 || exit 1
    # Install strictly from the registry; never link the local workspace.
    npm install "$spec" >/dev/null 2>&1 || exit 1
  ) || { echo "npm install failed"; rm -rf "$tmp"; return 1; }
  cp "$SMOKE_DIR/npm-smoke.mjs" "$tmp/npm-smoke.mjs"
  ( cd "$tmp" && node npm-smoke.mjs )
  local rc=$?
  rm -rf "$tmp"
  return $rc
}

# --- pypi -------------------------------------------------------------------
run_pypi() {
  local spec="getanyapi"
  if [ "$VERSION" != "latest" ]; then
    spec="getanyapi==$VERSION"
  fi
  local tmp
  tmp="$(mktemp -d "${TMPDIR:-/tmp}/anyapi-pypi-smoke.XXXXXX")"
  echo "-- pypi: installing $spec into a fresh venv at $tmp"
  local py="python3"
  command -v python3 >/dev/null 2>&1 || py="python"
  "$py" -m venv "$tmp/venv" || { echo "venv create failed"; rm -rf "$tmp"; return 1; }
  # Install strictly from the registry into the isolated venv.
  "$tmp/venv/bin/python" -m pip install --quiet --upgrade pip >/dev/null 2>&1
  if ! "$tmp/venv/bin/python" -m pip install --quiet "$spec" >/dev/null 2>&1; then
    echo "pip install failed"; rm -rf "$tmp"; return 1
  fi
  cp "$SMOKE_DIR/pypi-smoke.py" "$tmp/pypi-smoke.py"
  ( cd "$tmp" && "$tmp/venv/bin/python" pypi-smoke.py )
  local rc=$?
  rm -rf "$tmp"
  return $rc
}

if run_npm; then npm_result="PASS"; else npm_result="FAIL"; fi
echo
if run_pypi; then pypi_result="PASS"; else pypi_result="FAIL"; fi

echo
echo "== Summary (version: $VERSION) =="
echo "  npm  @getanyapi/sdk : $npm_result"
echo "  pypi getanyapi      : $pypi_result"

if [ "$npm_result" = "PASS" ] && [ "$pypi_result" = "PASS" ]; then
  exit 0
fi
exit 1
