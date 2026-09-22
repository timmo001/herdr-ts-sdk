import { defineConfig } from "vite-plus";

export default defineConfig({
  pack: {
    dts: {
      generator: "tsgo",
    },
    exports: false,
  },
  lint: {
    rules: {
      "typescript/no-explicit-any": "error",
      "typescript/no-non-null-assertion": "error",
    },
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  fmt: {
    tabWidth: 2,
  },
  test: {
    include: ["src/**/*.test.ts", "scripts/**/*.test.ts"],
  },
});
