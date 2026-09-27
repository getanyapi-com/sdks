import { describe, expect, it } from "vitest";
import { AnyAPI } from "../src/index.js";
import type { NotFoundReason } from "../src/index.js";
import { mockFetch } from "./helpers.js";

// The gateway owns the reason vocabulary and can add a word after a release is published: it
// added `unavailable` after 0.61.2 shipped. A published SDK must keep such a word as-is, so
// the type names the known words and stays open. The assignment below compiles only while
// that holds.
const future: NotFoundReason = "blocked_in_region";

function missWithFutureReason(): unknown {
  return {
    output: { found: false, data: null, reason: future },
    provider: "AnyAPI",
    costUsd: 0,
    items: 0,
    replayed: false,
  };
}

describe("not-found reason compatibility", () => {
  it("keeps a reason word this SDK does not know, on a typed method and on the generic path", async () => {
    const { fetch } = mockFetch([
      { body: missWithFutureReason() },
      { body: missWithFutureReason() },
    ]);
    const client = new AnyAPI({ apiKey: "sk_test", fetch });

    const typed = await client.amazon.reviews({ product: "B07" });
    const generic = await client.run("custom.result", {});

    for (const { output } of [typed, generic]) {
      expect(output.found).toBe(false);
      if (!output.found) expect(output.reason).toBe("blocked_in_region");
    }
  });
});
