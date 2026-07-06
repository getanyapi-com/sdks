// Handwritten runtime core: cursor pagination. See SPEC.md 2.5. The emitter targets
// `paginate(core, slug, input, itemsField, options)`. Named exports only; zero deps.

import type { ClientCore } from "./client.js";
import type { RequestOptions, RunResult } from "./types.js";

/**
 * An async-iterable of flattened items that also exposes whole pages. See SPEC 2.5.
 */
export interface Paginator<Item, Data> extends AsyncIterable<Item> {
  /** Iterate whole pages (each a RunResult) instead of flattened items. */
  pages(): AsyncIterable<RunResult<Data>>;
}

/**
 * Walk a paginated SKU: run page 1, then follow `nextCursor` until it is null/empty.
 * `itemsField` is the array property on `data` holding the page items.
 *
 * Walk semantics (SPEC 2.5):
 * - Stop when `output.found === false` or `data` is null.
 * - Yield each item from `itemsField`, then follow a non-empty string `nextCursor` by
 *   setting `input.cursor` and repeating.
 * - `options.maxItems` caps the TOTAL items yielded across all pages. It is NOT sent as
 *   the wire `max_items` shaping param (the iterator manages paging itself).
 * - `.pages()` yields each RunResult (including the last) and stops on null nextCursor.
 */
export function paginate<Item, Data>(
  core: ClientCore,
  slug: string,
  input: Record<string, unknown>,
  itemsField: string,
  options?: RequestOptions,
): Paginator<Item, Data> {
  // The iterator manages max_items itself; never forward it to the wire.
  const wireOptions: RequestOptions | undefined = stripMaxItems(options);
  const maxItems = options?.maxItems;

  async function* walkPages(): AsyncGenerator<RunResult<Data>, void, unknown> {
    let cursor: string | undefined;
    for (;;) {
      const pageInput: Record<string, unknown> = { ...input };
      if (cursor !== undefined) {
        pageInput["cursor"] = cursor;
      }
      const result = await core.run<Data>(slug, pageInput, wireOptions);
      yield result;

      if (!result.output.found || result.output.data === null) {
        return;
      }
      const data = result.output.data as Record<string, unknown>;
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
      if (!page.output.found || page.output.data === null) {
        return;
      }
      const data = page.output.data as Record<string, unknown>;
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

  const paginator: Paginator<Item, Data> = {
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
