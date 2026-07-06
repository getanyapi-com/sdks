// Naming rules per SPEC.md section 1.5 (FROZEN). Written to be total.

// Python reserved set: keyword.kwlist plus the soft keywords listed in the spec.
const PY_RESERVED = new Set<string>([
  // keyword.kwlist (Python 3.10+)
  "False", "None", "True", "and", "as", "assert", "async", "await",
  "break", "class", "continue", "def", "del", "elif", "else", "except",
  "finally", "for", "from", "global", "if", "import", "in", "is",
  "lambda", "nonlocal", "not", "or", "pass", "raise", "return", "try",
  "while", "with", "yield",
  // soft keywords required by the spec
  "match", "case", "type",
]);

/** camelCase a single slug segment: lowercase first part, Title-case each subsequent part. */
export function camelCase(segment: string): string {
  const parts = segment.split("_");
  let out = "";
  parts.forEach((part, i) => {
    if (part === "") return;
    if (i === 0 || out === "") {
      out += part.toLowerCase();
    } else {
      out += titleFirst(part);
    }
  });
  // If the result would start with a digit, prefix "_".
  if (/^[0-9]/.test(out)) out = "_" + out;
  return out;
}

/** snake_case: the segment verbatim (already snake_case per the slug grammar). */
export function snakeCase(segment: string): string {
  return segment;
}

/** Apply the Python reserved-word guard: trailing underscore on collision. */
export function pySafe(name: string): string {
  return PY_RESERVED.has(name) ? name + "_" : name;
}

/** PascalCase from an operationId: split on non-alnum, Title-case each part, concat. */
export function pascalFromOperationId(operationId: string): string {
  return operationId
    .split(/[^A-Za-z0-9]+/)
    .filter((p) => p !== "")
    .map(titleFirst)
    .join("");
}

/** TS iterator method name: "iter" + PascalCase(action). */
export function tsIterName(action: string): string {
  return "iter" + pascalFromAction(action);
}

/** Python iterator method name: "iter_" + action (snake_case). */
export function pyIterName(action: string): string {
  return "iter_" + action;
}

/** PascalCase a single slug action segment (split on "_"). */
function pascalFromAction(action: string): string {
  return action
    .split("_")
    .filter((p) => p !== "")
    .map(titleFirst)
    .join("");
}

/** Title-case: uppercase the first character, leave the rest unchanged. */
function titleFirst(part: string): string {
  if (part === "") return part;
  return part.charAt(0).toUpperCase() + part.slice(1);
}
