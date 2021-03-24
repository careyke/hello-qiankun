module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
    "@vue/typescript",
    "prettier/@typescript-eslint", //去掉@typescript-eslint中和prettier冲突的规则
    "prettier/vue", // 去掉冲突规则
  ],
  plugins: ["prettier", "@typescript-eslint", "vue"],
  rules: {
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};
