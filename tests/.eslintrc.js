const prettierConfig = require('./.prettierrc.js');

module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
      extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        'prettier',
      ],
      plugins: [
        'prettier',
        'jest',
      ],
      rules: {
        'prettier/prettier': ['error', prettierConfig],
        'import/prefer-default-export': 'off',
        'import/extensions': ['error', { ts: 'never' }],
        'no-await-in-loop': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
