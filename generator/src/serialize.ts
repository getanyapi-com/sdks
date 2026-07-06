// Deterministic, stable-key-order JSON serialization for ir.json and fixtures.json.
//
// SPEC 1.1: object keys within each emitted JSON object are written in the key order
// defined by ir.schema.json / ir.sample.json; enum arrays preserve declared order and
// property maps preserve their declared insertion order.
//
// Strategy: we build the IR objects with keys already inserted in canonical order, then
// serialize with a JSON.stringify that preserves insertion order (the JS engine preserves
// string-key insertion order for non-integer keys, which all our keys are). For robustness
// we do NOT rely on a key-sorting pass; the extractor is responsible for insertion order.

/** Pretty-print with 2-space indent and a trailing newline. Insertion order preserved. */
export function stableStringify(value: unknown): string {
  return JSON.stringify(value, null, 2) + "\n";
}
