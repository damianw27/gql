// eslint-disable-next-line @typescript-eslint/no-require-imports
const prettierConfig = require('./.prettierrc.js');

module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['alloy', 'alloy/typescript', 'prettier'],
  plugins: ['prettier'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': ['error', prettierConfig],
  },
  ignorePatterns: ['src/generated/**/*', 'scripts/**/*'],
};
