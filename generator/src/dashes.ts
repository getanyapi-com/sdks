// Dash normalization per SPEC.md section 1.4.11 and hard rule 0.3.
// Replace every em dash (U+2014) and en dash (U+2013) with an ASCII hyphen. A spaced
// parenthetical dash gets a spaced hyphen (" - "); a bare dash gets a bare hyphen.
// Trailing spaces are trimmed.
//
// This file names the two forbidden glyphs only via \uXXXX escape sequences (never the
// literal characters) so the repo-wide dash guard stays clean on this source file.

const EM = "\u2014"; // em dash U+2014
const EN = "\u2013"; // en dash U+2013
const DASH_CLASS = new RegExp("[" + EM + EN + "]", "g");
const SPACED_DASH = new RegExp("[ \\t]*[" + EM + EN + "][ \\t]*", "g");

export function normalizeDashes(input: string): string {
  // Collapse spaced parenthetical dashes to a single spaced hyphen first.
  let out = input.replace(SPACED_DASH, (match) => {
    const spacedBefore = /^[ \t]/.test(match);
    const spacedAfter = /[ \t]$/.test(match);
    if (spacedBefore && spacedAfter) return " - ";
    if (spacedBefore) return " -";
    if (spacedAfter) return "- ";
    return "-";
  });
  // Any remaining raw dash (defensive) -> hyphen.
  out = out.replace(DASH_CLASS, "-");
  // Trim trailing spaces.
  out = out.replace(/[ \t]+$/g, "");
  return out;
}
