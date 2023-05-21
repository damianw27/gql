const prettierConfig = require('./.prettierrc.js');

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['alloy', 'alloy/react', 'alloy/typescript', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier', 'jest'],
  rules: {
    'prettier/prettier': ['error', prettierConfig],
  },
};
