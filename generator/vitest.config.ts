import { defineConfig } from "vitest/config";

// Local config so vitest does not climb into the surrounding AnyAPI monorepo's config.
export default defineConfig({
  test: {
    include: ["test/**/*.test.ts"],
    root: import.meta.dirname,
  },
});
