// Programmatic validation of ir.json against generator/ir.schema.json using ajv.

import { readFileSync } from "node:fs";
import Ajv2020 from "ajv/dist/2020.js";
import { irSchemaPath } from "./paths.js";
import type { Ir } from "./types.js";

/** Validate the IR object against ir.schema.json. Throws with details on failure. */
export function validateIr(ir: Ir): void {
  const schema = JSON.parse(readFileSync(irSchemaPath, "utf8"));
  const ajv = new Ajv2020({ allErrors: true, strict: false });
  const validate = ajv.compile(schema);
  const ok = validate(ir);
  if (!ok) {
    const errors = (validate.errors ?? [])
      .slice(0, 25)
      .map((e) => `  ${e.instancePath || "/"} ${e.message ?? ""} ${JSON.stringify(e.params)}`)
      .join("\n");
    throw new Error(`ir.json failed schema validation:\n${errors}`);
  }
}
