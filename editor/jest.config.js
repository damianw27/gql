const { compilerOptions } = require('./tsconfig.json');
const { pathsToModuleNameMapper } = require('ts-jest');

module.exports = {
  roots: ['<rootDir>/src', '<rootDir>/test'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '\\.css$': '<rootDir>/test/_helpers_/css-module.transformer.js',
  },
  testRegex: '(/test/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: '<rootDir>/',
    }),
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/test/_helpers_/'],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/test/_helpers_/jest.setup.ts'],
};
