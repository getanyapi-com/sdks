// Public barrel for @getanyapi/sdk. Named exports only (SPEC 0.4).
//
// The generated barrel (src/generated/index.ts) is the composed surface: it exports the
// generated AnyAPI (the base client with every platform namespace attached), the augmented
// SkuMap, every platform's input/data/item types, and re-exports the handwritten core
// public surface (RunResult, errors, unwrap, agentSignup, ...). This entry re-exports it
// wholesale, then adds the two core symbols the generated barrel does not surface
// (ClientCore, paginate). See SPEC.md section 2.

export * from "./generated/index.js";

export { paginate } from "./core/index.js";
export type { ClientCore } from "./core/index.js";
