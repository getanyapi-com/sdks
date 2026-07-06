// Pure naming / formatting helpers for the Python emitter (SPEC 1.5, 0.5).
// Self-contained; no imports from other agents' modules.

/** SPEC 0.5: the exact generated-file header, as a Python comment (first line). */
export const GENERATED_HEADER_PY = "# Generated - do not edit. Regenerate with: pnpm generate";

// Python reserved set: keyword.kwlist plus the soft keywords match/case/type (SPEC 1.5).
const PY_RESERVED = new Set<string>([
  "False", "None", "True", "and", "as", "assert", "async", "await", "break",
  "case", "class", "continue", "def", "del", "elif", "else", "except", "finally",
  "for", "from", "global", "if", "import", "in", "is", "lambda", "match",
  "nonlocal", "not", "or", "pass", "raise", "return", "try", "type", "while",
  "with", "yield",
]);

// Hard keywords only (keyword.kwlist): these can NEVER be a bare class-body attribute
// name, so a TypedDict with such a key MUST use the functional TypedDict("Name", {...})
// form. The soft keywords match/case/type are excluded here: they are legal class-body
// attribute names in Python, and mypy rejects the functional form for them anyway
// (it parses a soft-keyword-named functional key as a syntax error). SPEC 1.5.
const PY_HARD_KEYWORDS = new Set<string>(
  [...PY_RESERVED].filter((k) => !["match", "case", "type"].includes(k)),
);

/** Trailing-underscore escape for a Python keyword/soft-keyword (SPEC 1.5). */
export function escapePyKeyword(name: string): string {
  return PY_RESERVED.has(name) ? name + "_" : name;
}

/**
 * Whether `key` forces the functional TypedDict form: it is either not a valid identifier
 * (dots, hyphens, leading digit) or a HARD Python keyword (soft keywords are fine as
 * class-body attribute names). SPEC 1.5.
 */
export function needsFunctionalTypedDict(key: string): boolean {
  return !isValidPyIdentifier(key) || PY_HARD_KEYWORDS.has(key);
}

/** Whether `s` is a bare valid Python identifier (used to decide the functional TypedDict form). */
export function isValidPyIdentifier(s: string): boolean {
  return /^[A-Za-z_][A-Za-z0-9_]*$/.test(s);
}

/**
 * PascalCase from an operationId (SPEC 1.5): split on `_`, Title-case each part, concat.
 * `amazon_reviews` -> `AmazonReviews`; `facebook_ads_search` -> `FacebookAdsSearch`.
 * Also used for platform class names (`google_ads` -> `GoogleAds`).
 */
export function pascalCase(segment: string): string {
  return segment
    .split("_")
    .filter((p) => p.length > 0)
    .map(titleCase)
    .join("");
}

/** First letter upper, rest unchanged (SPEC 1.5 title-casing). Empty stays empty. */
export function titleCase(part: string): string {
  if (part.length === 0) return "";
  return part.charAt(0).toUpperCase() + part.slice(1);
}

/** Naive singularization: strip a single trailing "s" (SPEC item-model naming). */
export function singularize(word: string): string {
  if (word.length > 1 && word.endsWith("s")) return word.slice(0, -1);
  return word;
}

/**
 * A safely-quoted Python string literal. Uses double quotes, escaping backslashes,
 * double quotes, and newlines. Deterministic, ruff-stable output.
 */
export function pyStringLiteral(s: string): string {
  const escaped = s
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\r/g, "\\r")
    .replace(/\n/g, "\\n")
    .replace(/\t/g, "\\t");
  return `"${escaped}"`;
}
