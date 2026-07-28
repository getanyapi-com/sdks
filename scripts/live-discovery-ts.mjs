// Credentialless production discovery canary for the built TypeScript SDK.

import { AnyAPI } from "../packages/typescript/dist/index.js";

const ORIGIN = "https://api.getanyapi.com";

function assert(condition, message) {
  if (!condition) throw new Error(`live discovery canary: ${message}`);
}

function publicUrl(input) {
  const requested = new URL(
    typeof input === "string"
      ? input
      : input instanceof URL
        ? input
        : input.url,
  );
  if (requested.pathname === "/v1/apis") {
    requested.pathname = "/catalog";
    return requested;
  }
  if (requested.pathname.startsWith("/v1/apis/")) {
    const slug = requested.pathname.slice("/v1/apis/".length);
    requested.pathname = `/public/try/${slug}/schema`;
    return requested;
  }
  if (requested.pathname === "/catalog/search") return requested;
  throw new Error(`unexpected SDK request path: ${requested.pathname}`);
}

async function publicDiscoveryFetch(input) {
  const target = publicUrl(input);
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetch(target, {
        method: "GET",
        headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(10_000),
      });
      if (attempt < 3 && (response.status === 429 || response.status >= 500)) {
        await new Promise((resolve) => setTimeout(resolve, 250 * attempt));
        continue;
      }
      return response;
    } catch (error) {
      if (attempt === 3) throw error;
      await new Promise((resolve) => setTimeout(resolve, 250 * attempt));
    }
  }
  throw new Error("live discovery request exhausted retries");
}

const client = new AnyAPI({
  apiKey: "credentialless-live-discovery-canary",
  baseUrl: ORIGIN,
  fetch: publicDiscoveryFetch,
  maxRetries: 0,
});

const catalog = await client.catalog();
assert(catalog.length > 0, "catalog is empty");
const eligible = catalog.find((entry) => entry.tryEligible);
assert(eligible, "catalog has no try-eligible SKU");

const search = await client.search({ query: "web", limit: 1 });
assert(search.results.length > 0, "search is empty");

const detail = await client.describe(eligible.slug);
assert(detail.slug === eligible.slug, "detail slug does not match");
assert(detail.inputSchema, "detail input schema is missing");
assert(detail.outputSchema, "detail output schema is missing");

console.log(
  `PASS TypeScript live discovery: ${catalog.length} APIs, detail ${detail.slug}`,
);
