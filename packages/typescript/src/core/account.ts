// Handwritten runtime core: account/catalog response mapping and standalone agent
// signup. See SPEC.md 2.7. Credits never leak: perItemCredits/fromCredits are converted
// to USD inside these mappers. Named exports only; zero runtime deps.

import { AnyAPIError, ConnectionError, errorFromStatus } from "./errors.js";
import type {
  AccountProfile,
  AgentSignupOptions,
  AgentSignupResult,
  CatalogEntry,
} from "./types.js";

/** Internal accounting unit -> USD. 1 credit = $0.00001. Never exposed. */
const CREDITS_TO_USD = 0.00001;
const DEFAULT_BASE_URL = "https://api.getanyapi.com";

/** Raw /v1/me shape (superset; internal-only fields are dropped by mapProfile). */
export interface ProfileResponse {
  id: string;
  email?: string | null;
  status: string;
  createdAt: string;
  onboardingComplete: boolean;
  // dropped: clerkUserId, signupGrantApplied, and any other server-only fields.
  clerkUserId?: string;
  signupGrantApplied?: boolean;
}

/** Raw catalog entry from /v1/apis (prices in the internal credits unit). */
export interface CatalogEntryResponse {
  slug: string;
  name?: string;
  category?: string | null;
  description?: string | null;
  fromCredits?: number | null;
  platform?: string;
  action?: string;
}

/** Raw /v1/apis list envelope. */
export interface CatalogListResponse {
  apis?: CatalogEntryResponse[];
}

/** Derive platform/action from a dotted slug (prefix before/after the first "."). */
function splitSlug(slug: string): { platform: string; action: string } {
  const dot = slug.indexOf(".");
  if (dot < 0) {
    return { platform: slug, action: "" };
  }
  return { platform: slug.slice(0, dot), action: slug.slice(dot + 1) };
}

/** Map the raw /v1/me body to AccountProfile, dropping internal-only fields. */
export function mapProfile(raw: ProfileResponse): AccountProfile {
  const profile: AccountProfile = {
    id: raw.id,
    status: raw.status,
    createdAt: raw.createdAt,
    onboardingComplete: raw.onboardingComplete,
  };
  if (raw.email !== undefined && raw.email !== null) {
    profile.email = raw.email;
  }
  return profile;
}

/** Map one raw catalog entry to CatalogEntry, converting credits to USD internally. */
export function mapCatalogEntry(raw: CatalogEntryResponse): CatalogEntry {
  const derived = splitSlug(raw.slug);
  return {
    slug: raw.slug,
    platform: raw.platform ?? derived.platform,
    action: raw.action ?? derived.action,
    name: raw.name ?? "",
    category: raw.category ?? "",
    description: raw.description ?? "",
    priceUsd: (raw.fromCredits ?? 0) * CREDITS_TO_USD,
  };
}

/** Map the raw /v1/apis list to CatalogEntry[]. */
export function mapCatalogList(raw: CatalogListResponse): CatalogEntry[] {
  return (raw.apis ?? []).map(mapCatalogEntry);
}

/** Raw /agent/signup body. */
interface AgentSignupResponse {
  secret: string;
  capUsd: number;
  claimToken: string;
  claimUrl: string;
}

/**
 * Agent self-signup. POST /agent/signup with NO auth header. Returns a one-time API key
 * plus its spend cap and claim details. See SPEC 2.7.
 */
export async function agentSignup(
  options: AgentSignupOptions = {},
): Promise<AgentSignupResult> {
  const fetchImpl = options.fetch ?? globalThis.fetch;
  if (typeof fetchImpl !== "function") {
    throw new AnyAPIError(
      "no fetch implementation available: pass options.fetch or run on a runtime with global fetch",
      0,
    );
  }
  const base = (options.baseUrl ?? DEFAULT_BASE_URL).replace(/\/+$/, "");
  const body: Record<string, string> = {};
  if (options.sponsorEmail !== undefined) {
    body["sponsorEmail"] = options.sponsorEmail;
  }
  if (options.label !== undefined) {
    body["label"] = options.label;
  }

  let response: Response;
  try {
    response = await fetchImpl(`${base}/agent/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });
  } catch (err) {
    throw new ConnectionError(
      err instanceof Error ? err.message : "connection failed",
      0,
    );
  }

  const requestId = response.headers.get("x-request-id") ?? undefined;
  const text = await response.text().catch(() => "");
  if (response.status !== 200) {
    let message = `request failed with status ${response.status}`;
    try {
      const parsed = JSON.parse(text) as { error?: unknown };
      if (typeof parsed.error === "string" && parsed.error !== "") {
        message = parsed.error;
      }
    } catch {
      // not JSON
    }
    throw errorFromStatus(response.status, message, requestId);
  }

  const parsed = JSON.parse(text) as AgentSignupResponse;
  return {
    secret: parsed.secret,
    capUsd: parsed.capUsd,
    claimToken: parsed.claimToken,
    claimUrl: parsed.claimUrl,
  };
}
