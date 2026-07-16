// Published-artifact smoke for @getanyapi/sdk (npm).
//
// Installs are done by scripts/smoke.sh / the workflow: this file resolves the
// package from the CWD's node_modules (the INSTALLED artifact), NEVER a relative
// path into the repo source. It exercises the real packaging: exports, types
// (via the published d.ts at build time is separate; here we assert the runtime
// surface), and one real production call.
//
// Flow: mint an ephemeral key via agentSignup() -> construct AnyAPI -> exercise
// catalog/search/describe -> one live reddit.search call -> assert a well-formed envelope. Exit nonzero on
// any failure with a readable report.

import { createRequire } from "node:module";

const require = createRequire(`${process.cwd()}/`);

/** Resolve @getanyapi/sdk from the CWD, so we test the installed artifact. */
async function loadSdk() {
  // Resolve the package's own entry from the CWD's node_modules.
  const entry = require.resolve("@getanyapi/sdk");
  const mod = await import(entry);
  return mod;
}

/** Retry only genuine transport flakiness, never assertion failures. */
async function withRetry(label, fn, attempts = 3) {
  let lastErr;
  for (let i = 1; i <= attempts; i++) {
    try {
      return await fn();
    } catch (err) {
      // A FlakeError is our signal to retry; anything else fails immediately.
      if (!(err instanceof FlakeError) || i === attempts) {
        throw err;
      }
      lastErr = err;
      const backoffMs = 500 * i;
      console.error(
        `[retry] ${label} attempt ${i} failed (${err.message}); retrying in ${backoffMs}ms`,
      );
      await new Promise((r) => setTimeout(r, backoffMs));
    }
  }
  throw lastErr;
}

/** Marks a transient transport error worth retrying. */
class FlakeError extends Error {}

/** True when an error looks like transient network trouble. */
function isTransient(err, sdk) {
  if (err instanceof sdk.ConnectionError || err instanceof sdk.TimeoutError) {
    return true;
  }
  if (err instanceof sdk.RateLimitedError) {
    return true;
  }
  const msg = String(err && err.message).toLowerCase();
  return (
    msg.includes("fetch failed") ||
    msg.includes("network") ||
    msg.includes("econnreset") ||
    msg.includes("timed out")
  );
}

function assert(cond, message) {
  if (!cond) {
    throw new Error(`assertion failed: ${message}`);
  }
}

/** Extract the posts array from either a bare or found-data run envelope. */
function postsOf(res) {
  const output = res && res.output;
  if (output && typeof output === "object" && "found" in output) {
    return output.found && output.data ? output.data.posts : undefined;
  }
  return output ? output.posts : undefined;
}

async function main() {
  const sdk = await loadSdk();

  // Assert the packaged surface exports the symbols consumers rely on. A missing
  // export here is exactly the packaging bug this smoke exists to catch.
  for (const name of ["AnyAPI", "agentSignup", "unwrap", "AnyAPIError"]) {
    assert(
      typeof sdk[name] !== "undefined",
      `export "${name}" is missing from @getanyapi/sdk`,
    );
  }
  assert(typeof sdk.AnyAPI === "function", "AnyAPI is not a constructor");
  assert(
    typeof sdk.agentSignup === "function",
    "agentSignup is not a function",
  );

  // 1. Mint an ephemeral, capped key. No stored secret.
  const signup = await withRetry("agentSignup", async () => {
    try {
      return await sdk.agentSignup({ label: "sdk-published-smoke" });
    } catch (err) {
      if (isTransient(err, sdk)) throw new FlakeError(err.message);
      throw err;
    }
  });
  assert(
    typeof signup.secret === "string" && signup.secret.length > 0,
    "signup.secret is empty",
  );
  assert(typeof signup.capUsd === "number", "signup.capUsd is not a number");
  console.log(`[ok] minted key (capUsd=$${signup.capUsd})`);

  // 2. Construct a client with the minted secret.
  const client = new sdk.AnyAPI({ apiKey: signup.secret });

  // 3. Exercise the published handwritten discovery surface before any paid call.
  const catalog = await withRetry("catalog", async () => {
    try {
      return await client.catalog({ category: "search" });
    } catch (err) {
      if (isTransient(err, sdk)) throw new FlakeError(err.message);
      throw err;
    }
  });
  assert(
    Array.isArray(catalog) && catalog.length > 0,
    "catalog returned no search APIs",
  );
  assert(catalog[0].provider === "AnyAPI", "catalog provider is not AnyAPI");
  assert(
    typeof catalog[0].pricing.from.maxUsd === "number",
    "catalog nested pricing missing",
  );

  const matches = await withRetry("search", async () => {
    try {
      return await client.search({
        query: "reddit search",
        platform: "reddit",
        limit: 1,
      });
    } catch (err) {
      if (isTransient(err, sdk)) throw new FlakeError(err.message);
      throw err;
    }
  });
  assert(matches.results.length === 1, "search returned no result");
  assert(
    typeof matches.results[0].relevance === "number",
    "search relevance missing",
  );
  assert(
    ["semantic", "keyword"].includes(matches.ranking),
    "search ranking missing",
  );

  const described = await withRetry("describe", async () => {
    try {
      return await client.describe(matches.results[0].slug);
    } catch (err) {
      if (isTransient(err, sdk)) throw new FlakeError(err.message);
      throw err;
    }
  });
  assert(
    described.inputSchema && described.outputSchema,
    "describe schemas missing",
  );
  console.log(`[ok] discovery catalog/search/describe -> ${described.slug}`);

  // 4. One real, cheap, live data call. reddit.search is non-mock.
  //    If the freshly minted cap blocks it (402), fall back to the cheapest
  //    known live SKU that returns a real 200.
  let sku = "reddit.search";
  let res;
  try {
    res = await withRetry("reddit.search", async () => {
      try {
        return await client.reddit.search({
          query: "mechanical keyboard",
          sort: "top",
        });
      } catch (err) {
        if (isTransient(err, sdk)) throw new FlakeError(err.message);
        throw err;
      }
    });
  } catch (err) {
    if (err instanceof sdk.InsufficientBalanceError) {
      // Cap/balance too small for reddit.search: fall back to the cheapest live SKU.
      sku = "reddit.subreddit_details";
      console.error(
        `[fallback] reddit.search blocked by cap (402); trying ${sku}`,
      );
      res = await withRetry(sku, async () => {
        try {
          return await client.reddit.subredditDetails({
            subreddit: "programming",
          });
        } catch (e) {
          if (isTransient(e, sdk)) throw new FlakeError(e.message);
          throw e;
        }
      });
    } else {
      throw err;
    }
  }

  // 5. Assert the envelope is well-formed and the call was a real success.
  assert(res && typeof res === "object", "no response object");
  assert(
    res.provider === "AnyAPI",
    `provider must be "AnyAPI", got ${JSON.stringify(res.provider)}`,
  );
  assert(
    typeof res.costUsd === "number" && res.costUsd >= 0,
    "costUsd missing/invalid (not a real charged call)",
  );

  if (sku === "reddit.search") {
    const posts = postsOf(res);
    assert(Array.isArray(posts), "output.posts is not an array");
    assert(posts.length > 0, "output.posts is empty (no real data returned)");
    const first = posts[0];
    assert(
      typeof first.title === "string" && first.title.length > 0,
      "first post has no title",
    );
    assert(typeof first.subreddit === "string", "first post has no subreddit");
    console.log(
      `[ok] ${sku} -> ${posts.length} posts, costUsd=$${res.costUsd}, first="${first.title.slice(0, 60)}"`,
    );
  } else {
    // Fallback SKU: found-data envelope with a typed subreddit record.
    const data = sdk.unwrap(res);
    assert(
      data && typeof data.name === "string" && data.name.length > 0,
      "subreddit details missing name",
    );
    console.log(`[ok] ${sku} -> r/${data.name}, costUsd=$${res.costUsd}`);
  }

  console.log(
    `PASS npm @getanyapi/sdk: live ${sku} call succeeded against production.`,
  );
}

main().catch((err) => {
  console.error(
    `FAIL npm @getanyapi/sdk: ${err && err.message ? err.message : err}`,
  );
  if (err && err.stack) console.error(err.stack);
  process.exit(1);
});
