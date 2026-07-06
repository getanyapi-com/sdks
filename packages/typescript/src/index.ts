// Public barrel for @anyapi/sdk. Named exports only (SPEC 0.4). The generated barrel
// (src/generated) composes on top by extending AnyAPI and augmenting SkuMap; this file
// re-exports the handwritten core so generated code can pull everything by name.
// See SPEC.md section 2.

export { AnyAPI } from "./core/client.js";
export type { ClientCore, SkuMap } from "./core/client.js";

export { unwrap } from "./core/types.js";
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
} from "./core/types.js";

export { agentSignup } from "./core/account.js";

export { paginate } from "./core/pagination.js";
export type { Paginator } from "./core/pagination.js";

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
} from "./core/errors.js";
