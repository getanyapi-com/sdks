// Shared release-classification values and fail-closed unknown-field detection.
//
// `breaking` holds classified changes that can break an existing caller (a removal, or a
// changed contract such as requiredness or nullability); they publish and are named in the
// release notes. `blocked` holds only what the classifier cannot explain, which waits for a
// human.

export interface ChangeItem {
  kind: string;
  slug: string;
  detail: string;
}

export interface ClassificationState {
  added: ChangeItem[];
  breaking: ChangeItem[];
  changed: ChangeItem[];
  blocked: ChangeItem[];
}

export function same(a: unknown, b: unknown): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

export function item(kind: string, slug: string, detail: string): ChangeItem {
  return { kind, slug, detail };
}

export function unknownChanges(
  before: object,
  after: object,
  known: readonly string[],
  slug: string,
  location: string,
  state: ClassificationState,
): void {
  const a = before as unknown as Record<string, unknown>;
  const b = after as unknown as Record<string, unknown>;
  const allowed = new Set(known);
  for (const key of new Set([...Object.keys(a), ...Object.keys(b)])) {
    if (!allowed.has(key) && !same(a[key], b[key])) {
      const kind =
        key === "method" || key === "path"
          ? `${key}-change`
          : "unclassified-change";
      state.blocked.push(item(kind, slug, `${location}.${key} changed`));
    }
  }
}
