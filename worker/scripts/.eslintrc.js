const prettierConfig = require('../.prettierrc.js');

module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  extends: ['alloy', 'prettier'],
  plugins: ['prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': ['error', prettierConfig],
  },
};
