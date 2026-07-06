import { describe, expect, it } from "vitest";
import type { ClientCore } from "../src/index.js";
import { paginate } from "../src/index.js";
import type { RequestOptions, RunResult } from "../src/index.js";

interface PageData {
  ads: Array<{ id: number }>;
  nextCursor: string | null;
}

/** A fake core that returns scripted pages and records the inputs it was called with. */
function scriptedCore(pages: Array<RunResult<PageData>>): {
  core: ClientCore;
  seen: Array<{ slug: string; input: unknown; options: RequestOptions | undefined }>;
} {
  const seen: Array<{ slug: string; input: unknown; options: RequestOptions | undefined }> = [];
  let i = 0;
  const core: ClientCore = {
    async run<T>(slug: string, input: unknown, options?: RequestOptions) {
      seen.push({ slug, input, options });
      const page = pages[Math.min(i, pages.length - 1)];
      i += 1;
      return page as unknown as RunResult<T>;
    },
  };
  return { core, seen };
}

function page(ads: number[], nextCursor: string | null): RunResult<PageData> {
  return {
    output: { found: true, data: { ads: ads.map((id) => ({ id })), nextCursor } },
    provider: "AnyAPI",
    costUsd: 0.002,
  };
}

describe("paginate: multi-page walk", () => {
  it("flattens items across pages and injects the cursor from page 2", async () => {
    const { core, seen } = scriptedCore([page([1, 2], "c1"), page([3, 4], null)]);
    const it = paginate<{ id: number }, PageData>(core, "facebook.ads_search", { q: "x" }, "ads");
    const ids: number[] = [];
    for await (const item of it) {
      ids.push(item.id);
    }
    expect(ids).toEqual([1, 2, 3, 4]);
    expect(seen).toHaveLength(2);
    expect(seen[0]!.input).toEqual({ q: "x" });
    expect(seen[1]!.input).toEqual({ q: "x", cursor: "c1" });
  });

  it("stops on an empty-string nextCursor", async () => {
    const { core, seen } = scriptedCore([page([1], ""), page([9], null)]);
    const ids: number[] = [];
    for await (const item of paginate<{ id: number }, PageData>(core, "s.a", {}, "ads")) {
      ids.push(item.id);
    }
    expect(ids).toEqual([1]);
    expect(seen).toHaveLength(1);
  });

  it("stops when found is false", async () => {
    const notFound: RunResult<PageData> = {
      output: { found: false, data: null },
      provider: "AnyAPI",
      costUsd: 0,
    };
    const { core } = scriptedCore([notFound]);
    const ids: number[] = [];
    for await (const item of paginate<{ id: number }, PageData>(core, "s.a", {}, "ads")) {
      ids.push(item.id);
    }
    expect(ids).toEqual([]);
  });

  it("caps total items at maxItems mid-page and does not send max_items to the wire", async () => {
    const { core, seen } = scriptedCore([page([1, 2, 3], "c1"), page([4, 5], null)]);
    const ids: number[] = [];
    for await (const item of paginate<{ id: number }, PageData>(
      core,
      "s.a",
      {},
      "ads",
      { maxItems: 2, fields: ["id"] },
    )) {
      ids.push(item.id);
    }
    expect(ids).toEqual([1, 2]);
    // Only the first page was fetched (cap reached mid-page).
    expect(seen).toHaveLength(1);
    // maxItems is stripped from the wire options; fields is preserved.
    expect(seen[0]!.options).toEqual({ fields: ["id"] });
  });
});

describe("paginate: .pages()", () => {
  it("yields whole RunResults with costUsd", async () => {
    const { core } = scriptedCore([page([1], "c1"), page([2], null)]);
    const costs: number[] = [];
    for await (const p of paginate<{ id: number }, PageData>(core, "s.a", {}, "ads").pages()) {
      costs.push(p.costUsd);
    }
    expect(costs).toEqual([0.002, 0.002]);
  });
});
