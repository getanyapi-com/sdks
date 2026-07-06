// Handwritten core barrel. Re-exports the public core surface by name (SPEC 0.4) so the
// generated barrel (src/generated/index.ts) and the emitted platform files can pull core
// types and helpers from one path. Named exports only; no runtime deps.
// See SPEC.md section 2.

export { AnyAPI } from "./client.js";
export type { ClientCore, SkuMap } from "./client.js";

export { unwrap } from "./types.js";
export type {
  RunResult,
  Output,
  RequestOptions,
  ClientOptions,
  AccountProfile,
  CatalogQuery,
  CatalogEntry,
  AgentSignupOptions,
  AgentSignupResult,
} from "./types.js";

export { agentSignup } from "./account.js";

export { paginate } from "./pagination.js";
export type { Paginator } from "./pagination.js";

export {
  AnyAPIError,
  BadRequestError,
  AuthenticationError,
  InsufficientBalanceError,
  NotFoundError,
  RateLimitedError,
  UpstreamError,
  ConnectionError,
  TimeoutError,
} from "./errors.js";
