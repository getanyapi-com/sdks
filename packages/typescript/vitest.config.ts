import { defineConfig } from "vitest/config";

// Scoped to this package so the parent monorepo config is not picked up.
export default defineConfig({
  test: {
    include: ["tests/**/*.test.ts"],
    environment: "node",
  },
});
