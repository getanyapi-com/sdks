// Shared repo-relative path constants for the generator pipeline.
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
// generator/src -> generator -> repo root
export const generatorDir = join(here, "..");
export const repoRoot = join(generatorDir, "..");

export const openapiPath = join(repoRoot, "openapi.json");
export const catalogPath = join(repoRoot, "catalog.json");
export const irSchemaPath = join(generatorDir, "ir.schema.json");
export const irOutPath = join(generatorDir, "ir.json");
export const fixturesOutPath = join(generatorDir, "fixtures.json");

export const GENERATED_HEADER = "Generated - do not edit. Regenerate with: pnpm generate";
