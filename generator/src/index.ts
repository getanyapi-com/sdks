// Phase 0 placeholder. The gen-ir agent implements the real pipeline:
//   fetch/read openapi.json snapshot (+ live /v1/apis) -> ir.ts -> ir.json
//   -> emit-ts.ts, emit-py.ts, fixtures.ts
// `--check` mode regenerates in memory and diffs against committed output (CI drift gate).
// See ../ir.schema.json, ../ir.sample.json, and ../../SPEC.md section 1.

async function main(): Promise<void> {
  const check = process.argv.includes("--check");
  console.log(`anyapi generator placeholder (check=${check}). Phase 1 gen-ir implements this.`);
}

void main();
