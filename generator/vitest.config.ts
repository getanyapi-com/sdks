import { defineConfig } from "vitest/config";

// Local config so vitest does not walk up into the surrounding checkout for a parent config.
export default defineConfig({
  test: {
    root: import.meta.dirname,
    include: ["test/**/*.test.ts"],
  },
});
