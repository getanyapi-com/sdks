// Handwritten runtime core: cursor pagination. See SPEC.md 2.5. The emitter targets
// `paginate(core, slug, input, itemsField, bare, options)`. Named exports only; zero deps.

import type { ClientCore } from "./client.js";
import type { BareRunResult, RequestOptions, RunResult } from "./types.js";

/**
 * An async-iterable of flattened items that also exposes whole pages. See SPEC 2.5. `Page`
 * is the page result type: `RunResult<Data>` for found-data SKUs, `BareRunResult<Data>` for
 * bare SKUs (SPEC 1.2 erratum).
 */
export interface Paginator<Item, Page> extends AsyncIterable<Item> {
  /** Iterate whole pages (each a run result) instead of flattened items. */
  pages(): AsyncIterable<Page>;
}

/** Read the page data object from either envelope, or null when a found-data page is empty. */
function pageData(result: { output: unknown }, bare: boolean): Record<string, unknown> | null {
  if (bare) {
    const out = result.output;
    return out !== null && typeof out === "object"
      ? (out as Record<string, unknown>)
      : null;
  }
  const env = result.output as { found?: boolean; data?: unknown };
  if (!env || env.found !== true || env.data === null || env.data === undefined) {
    return null;
  }
  return env.data as Record<string, unknown>;
}

/**
 * Walk a paginated SKU: run page 1, then follow `nextCursor` until it is null/empty.
 * `itemsField` is the array property on the page data holding the page items. `bare`
 * selects the envelope: found-data (`output.data`) or bare (`output` is the data).
 *
 * Walk semantics (SPEC 2.5):
 * - Stop when the page data is null (found:false / null data, or a non-object bare output).
 * - Yield each item from `itemsField`, then follow a non-empty string `nextCursor` by
 *   setting `input.cursor` and repeating.
 * - `options.maxItems` caps the TOTAL items yielded across all pages. It is NOT sent as
 *   the wire `max_items` shaping param (the iterator manages paging itself).
 * - `.pages()` yields each run result (including the last) and stops on null nextCursor.
 */
export function paginate<Item, Page extends RunResult<unknown> | BareRunResult<unknown>>(
  core: ClientCore,
  slug: string,
  input: Record<string, unknown>,
  itemsField: string,
  bare: boolean,
  options?: RequestOptions,
): Paginator<Item, Page> {
  // The iterator manages max_items itself; never forward it to the wire.
  const wireOptions: RequestOptions | undefined = stripMaxItems(options);
  const maxItems = options?.maxItems;

  async function* walkPages(): AsyncGenerator<Page, void, unknown> {
    let cursor: string | undefined;
    for (;;) {
      const pageInput: Record<string, unknown> = { ...input };
      if (cursor !== undefined) {
        pageInput["cursor"] = cursor;
      }
      const result = (await core.run<unknown>(slug, pageInput, wireOptions)) as Page;
      yield result;

      const data = pageData(result, bare);
      if (data === null) {
        return;
      }
      const next = data["nextCursor"];
      if (typeof next !== "string" || next === "") {
        return;
      }
      cursor = next;
    }
  }

  async function* walkItems(): AsyncGenerator<Item, void, unknown> {
    let yielded = 0;
    for await (const page of walkPages()) {
      const data = pageData(page, bare);
      if (data === null) {
        return;
      }
      const items = data[itemsField];
      if (!Array.isArray(items)) {
        continue;
      }
      for (const item of items) {
        if (maxItems !== undefined && yielded >= maxItems) {
          return;
        }
        yield item as Item;
        yielded += 1;
      }
      if (maxItems !== undefined && yielded >= maxItems) {
        return;
      }
    }
  }

  const paginator: Paginator<Item, Page> = {
    [Symbol.asyncIterator]: () => walkItems(),
    pages: () => ({ [Symbol.asyncIterator]: () => walkPages() }),
  };
  return paginator;
}

/** Return options without the maxItems key (iterator caps totals client-side). */
function stripMaxItems(options?: RequestOptions): RequestOptions | undefined {
  if (!options) {
    return undefined;
  }
  const { maxItems: _maxItems, ...rest } = options;
  void _maxItems;
  return rest;
}
