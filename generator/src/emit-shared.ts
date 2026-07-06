// Shared tiny helpers for the TypeScript emitter (owned by the ts-emitter agent).
// The Python emitter has its own equivalents; the two never import each other. All
// coordination goes through SPEC.md. No em/en dashes anywhere (Hard rule 0.3).

/**
 * The exact generated-file header (SPEC.md hard rule 0.5). The first line of every
 * generated file is this comment, verbatim. Language-appropriate comment syntax is the
 * caller's job; this is the payload text.
 */
export const GENERATED_HEADER_TEXT =
  "Generated - do not edit. Regenerate with: pnpm generate";

/** The header as a leading TS line comment plus a trailing blank line. */
export const GENERATED_HEADER_TS = `// ${GENERATED_HEADER_TEXT}\n`;

/**
 * Normalize em dash (U+2014) and en dash (U+2013) to an ASCII hyphen. The IR is already
 * dash-normalized per SPEC 1.4.11, so this is a defensive backstop that also guarantees
 * the emitter never introduces a forbidden glyph via a helper. Applied to every free-text
 * string (descriptions, names) before it reaches an emitted file.
 */
export function normalizeDashes(text: string): string {
  // U+2014 em dash, U+2013 en dash. Referenced by escape so this source file itself stays
  // free of the forbidden glyphs (the CI dash guard greps all tracked files).
  return text.replace(/\u2014/g, "-").replace(/\u2013/g, "-");
}

/**
 * Render a TSDoc block comment from an ordered list of lines. Empty strings become blank
 * comment lines (` *`). Returns a string ending in a newline, indented by `indent` spaces.
 * Never emits an em/en dash (each line is dash-normalized).
 */
export function docComment(lines: string[], indent = 0): string {
  const pad = " ".repeat(indent);
  const body = lines
    .map((line) => {
      const clean = normalizeDashes(line);
      return clean.length > 0 ? `${pad} * ${clean}` : `${pad} *`;
    })
    .join("\n");
  return `${pad}/**\n${body}\n${pad} */\n`;
}

/**
 * A safe single-quoted TS string literal (used for slug keys and doc-embedded text where
 * we build source, not values). Escapes backslashes and single quotes. Not used for the
 * JSON example, which is rendered via JSON.stringify (double quotes) per SPEC 2.4.
 */
export function singleQuote(value: string): string {
  return `'${value.replace(/\\/g, "\\\\").replace(/'/g, "\\'")}'`;
}

/**
 * A double-quoted TS string literal, escaping backslashes and double quotes so the result
 * is valid TS source. Used for object-key literals in the SkuMap and for the header.
 */
export function doubleQuote(value: string): string {
  return `"${value.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

/**
 * A TS literal union from a list of string enum values, order preserved (SPEC 1.4.2):
 * `["a","b"]` -> `"a" | "b"`. Each value is a double-quoted literal. An empty list yields
 * `never` (defensive; the catalog never produces an empty enum).
 */
export function literalUnion(values: string[]): string {
  if (values.length === 0) return "never";
  return values.map((v) => doubleQuote(v)).join(" | ");
}

/**
 * Whether a TS object key needs quoting. Bare identifiers ([A-Za-z_$][A-Za-z0-9_$]*) stay
 * unquoted; anything else (dots, hyphens, leading digit) is double-quoted. Slugs contain a
 * dot so they are always quoted; input property names in this catalog are bare identifiers.
 */
export function objectKey(key: string): string {
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(key) ? key : doubleQuote(key);
}

/**
 * Title-case a single segment for PascalCase assembly: upper-case the first letter, leave
 * the rest unchanged (SPEC 1.5 PascalCase rule). "ads" -> "Ads", "URL" -> "URL".
 */
export function titleCase(part: string): string {
  if (part.length === 0) return part;
  return part.charAt(0).toUpperCase() + part.slice(1);
}

/**
 * PascalCase from an operationId (or any `_`-delimited identifier): split on `_`, drop
 * empty parts, title-case each, concatenate. `facebook_ads_search` -> `FacebookAdsSearch`.
 */
export function pascalCase(operationId: string): string {
  return operationId
    .split("_")
    .filter((p) => p.length > 0)
    .map(titleCase)
    .join("");
}

/**
 * Item-type naming rule (ts-emitter owns this; documented for the caller).
 *
 * A nested item interface for an array property is named:
 *   PascalCase(operationId) + descriptiveSuffix(arrayPropertyName)
 * where descriptiveSuffix naively singularizes the property name (strip ONE trailing "s"
 * when the name has more than one character and ends in "s"), then title-cases it. If the
 * result would be empty, fall back to "Item".
 *
 * Examples (SPEC-anchored):
 *   operationId "amazon_reviews",  prop "items" -> "AmazonReviews" + "Item" = AmazonReviewsItem
 *   operationId "facebook_ads_search", prop "ads" -> "FacebookAdsSearch" + "Ad" = FacebookAdsSearchAd
 * The rule is deterministic and total (any property name yields a stable, unique-per-prop
 * suffix within one operationId). Naive singularization is intentional: it never fails and
 * never needs a dictionary; "series" -> "Serie" is acceptable for a type name.
 */
export function itemTypeName(operationId: string, arrayPropName: string): string {
  const singular =
    arrayPropName.length > 1 && arrayPropName.endsWith("s")
      ? arrayPropName.slice(0, -1)
      : arrayPropName;
  const suffix = titleCase(singular) || "Item";
  return pascalCase(operationId) + suffix;
}

/** Format a USD amount for a doc comment: trims to a plain decimal, no trailing zeros. */
export function formatUsd(amount: number): string {
  // Use enough precision for sub-cent prices, then strip trailing zeros. JSON numbers in
  // the IR are already exact; String() gives the shortest round-tripping form.
  return String(amount);
}

/**
 * The "Price:" doc line per SPEC 2.4. Fixed pricing (perItemUsd null) yields the flat
 * form. Per-item pricing (perItemUsd non-null) yields
 *   "Price: $BASE per request plus $PER_ITEM per UNIT."
 * where BASE is the per-request floor (`baseUsd` when present, else `priceUsd`) and UNIT
 * falls back to "result" when perItemUnit is null (SPEC 1.2 note).
 */
export function priceLine(pricing: {
  priceUsd: number;
  baseUsd: number | null;
  perItemUsd: number | null;
  perItemUnit: string | null;
}): string {
  const { priceUsd, baseUsd, perItemUsd, perItemUnit } = pricing;
  if (perItemUsd !== null) {
    const base = baseUsd ?? priceUsd;
    const unit = perItemUnit ?? "result";
    return `Price: $${formatUsd(base)} per request plus $${formatUsd(
      perItemUsd,
    )} per ${unit}.`;
  }
  return `Price: $${formatUsd(priceUsd)} per request.`;
}
