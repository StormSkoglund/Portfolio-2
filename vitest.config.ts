import { defineConfig } from "vitest/config";

// Vitest config: enable globals (so `expect` is available), use jsdom, and run setup file
export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx,js,mjs,cjs}"],
  },
});
