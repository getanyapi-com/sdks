#!/usr/bin/env bash
# Render the IR diff summary for a catalog refresh.
#
# Compares the OLD committed generator/ir.json (from git HEAD) against the CURRENT working
# tree generator/ir.json (produced by a fresh `pnpm generate` after a fetch) and prints:
#   - line 1 of stdout is IGNORED here (see below); instead this writes two artifacts:
#       * the bump level ("none" | "patch" | "minor") to the file named by $1 (default:
#         release-bump.txt)
#       * the human-readable change summary (commit body / release notes) to the file named
#         by $2 (default: release-notes.md)
#
# Usage:
#   scripts/release-notes.sh [bumpOutPath] [summaryOutPath]
#
# The classifier itself lives in generator/src/classify.ts (unit-tested). This wrapper only
# extracts the OLD ir.json from git and invokes it. It is what regen.yml calls.
set -euo pipefail

cd "$(dirname "$0")/.."

BUMP_OUT="${1:-release-bump.txt}"
SUMMARY_OUT="${2:-release-notes.md}"

OLD_IR="$(mktemp)"
trap 'rm -f "$OLD_IR"' EXIT

# The previous committed IR. If HEAD has no ir.json (first release), treat everything as new.
if git show HEAD:generator/ir.json > "$OLD_IR" 2>/dev/null; then
  :
else
  echo '{"version":1,"openapiVersion":"1.0.0","baseUrl":"https://api.getanyapi.com","skus":[]}' > "$OLD_IR"
fi

# Resolve output paths to absolute so the pnpm subprocess (which runs in generator/) writes
# to the intended location, not relative to the package dir.
case "$BUMP_OUT" in /*) ;; *) BUMP_OUT="$PWD/$BUMP_OUT" ;; esac
case "$SUMMARY_OUT" in /*) ;; *) SUMMARY_OUT="$PWD/$SUMMARY_OUT" ;; esac

# classify-cli prints the bump level on stdout and writes the summary to --summary-out.
BUMP="$(pnpm --silent --filter @anyapi/generator exec tsx src/classify-cli.ts \
  "$OLD_IR" "$PWD/generator/ir.json" --summary-out "$SUMMARY_OUT")"

printf '%s\n' "$BUMP" > "$BUMP_OUT"

echo "IR diff classified: bump=$BUMP"
echo "  bump    -> $BUMP_OUT"
echo "  summary -> $SUMMARY_OUT"
