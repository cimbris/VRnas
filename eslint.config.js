import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    files: ["src/**/*.js", "src/**/*.ts"],
    ignores: ["**/*.config.js", "**/*.json"],
    languageOptions: {
      ecmaVersion: 5,
      sourceType: "module"
    },
    rules: {
      "no-unused-vars": "error",
      "@typescript-eslint/no-unused-vars": "error"
    }
  }
];