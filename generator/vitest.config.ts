import { defineConfig } from "vitest/config";

// Scoped to the generator package so vitest does not walk up into the surrounding
// checkout (this worktree lives under another repo's .context/ during development).
export default defineConfig({
  root: __dirname,
  test: {
    include: ["test/**/*.test.ts"],
  },
});
