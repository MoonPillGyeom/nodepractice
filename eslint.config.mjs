import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";

export default defineConfig([
  {
    files: ["**/*.cjs"], // CommonJS 파일
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.node,  // Node.js 전역 변수 허용
      },
    },
  },
  {
    files: ["**/*.mjs"], // ESM 파일
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.node, // Node.js 전역 변수 허용
      },
    },
  },
  {
    files: ["**/*.js"], // 일반 JS 파일 (환경에 따라 달라질 수 있음)
    languageOptions: {
      sourceType: "module", // 자동으로 CommonJS 또는 ESM 감지
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    rules: {
      ...js.configs.recommended.rules,
    },
  },
]);
