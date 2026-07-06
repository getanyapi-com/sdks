// Phase 0 skeleton entry point. The ts-runtime agent implements src/core/ and the
// ts-emitter agent generates src/generated/. This barrel re-exports the public surface
// (named exports only) once those land. See ../../SPEC.md section 2.
//
// Planned public exports:
//   export { AnyAPI } from "./core/client.js";
//   export { agentSignup, unwrap } from "./core/...";
//   export { AnyAPIError, BadRequestError, NotFoundError, ... } from "./core/errors.js";
//   export type { ClientOptions, RunResult, Output, RequestOptions, ... } from "./core/types.js";

export {};
