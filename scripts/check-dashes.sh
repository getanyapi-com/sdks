#!/usr/bin/env bash
# Repo-wide dash guard (SPEC.md hard rule 0.3 + CI-guarded invariant 9).
#
# The only dash glyph permitted anywhere in this repo is the ASCII hyphen-minus (U+002D).
# Em dashes (U+2014) and en dashes (U+2013) are forbidden in ALL tracked files - source,
# emitted code, docs, JSON - with exactly two exceptions: openapi.json and catalog.json,
# which are verbatim upstream snapshots (the IR extractor and emitters normalize their
# dashes before any text reaches an emitted file).
#
# Exits non-zero and prints the offending files/lines when a forbidden dash is found.
set -euo pipefail

cd "$(dirname "$0")/.."

# -P: Perl regex so \x{2013}/\x{2014} work. Exclude the two upstream snapshots.
if matches=$(git grep -nP '[\x{2013}\x{2014}]' -- ':!openapi.json' ':!catalog.json' 2>/dev/null); then
  echo "Dash guard FAILED: em dash (U+2014) or en dash (U+2013) found in tracked files."
  echo "Only the ASCII hyphen-minus (-) is allowed. Offending lines:"
  echo "$matches"
  exit 1
fi

echo "Dash guard passed: no em/en dashes in tracked files (openapi.json + catalog.json excepted)."
