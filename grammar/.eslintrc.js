const prettierConfig = require('./.prettierrc.js');

module.exports = {
  root: true,
  env: {
    'browser': true,
    'es2021': true,
    'node': true,
    'jest': true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'alloy',
    'alloy/typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    "tsconfigRootDir": "."
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      prettierConfig,
    ],
  }
};
