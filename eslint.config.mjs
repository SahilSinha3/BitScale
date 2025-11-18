import path from "node:path";
import { fileURLToPath } from "node:url";

import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import cypressPlugin from "eslint-plugin-cypress";
import globals from "globals";
import tseslint from "typescript-eslint";
import prettierPlugin from "eslint-plugin-prettier";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const tsTypeCheckedConfigs = tseslint.configs.recommendedTypeChecked.map((config) => ({
  ...config,
  files: ["**/*.{ts,tsx}"],
  languageOptions: {
    ...config.languageOptions,
    parserOptions: {
      ...(config.languageOptions?.parserOptions ?? {}),
      project: "./tsconfig.json",
      tsconfigRootDir: __dirname,
    },
  },
}));

const eslintConfig = defineConfig([
  js.configs.recommended,
  ...tsTypeCheckedConfigs,
  ...nextVitals,
  ...nextTs,
  {
    files: ["cypress/**/*.{js,jsx,ts,tsx}"],
    plugins: {
      cypress: cypressPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...cypressPlugin.configs.recommended.rules,
    },
  },
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",
      "arrow-body-style": "off",
      "prefer-arrow-callback": "off",
    },
  },
  eslintConfigPrettier,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "cypress/videos/**",
    "cypress/screenshots/**",
    "cypress/downloads/**",
    "coverage/**",
  ]),
]);

export default eslintConfig;
