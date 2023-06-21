const { compilerOptions } = require('./tsconfig.json');
const { pathsToModuleNameMapper } = require('ts-jest');

module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: '(/src/.*|(\\.|/)(test|spec))\\.ts$',
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: '<rootDir>/',
    }),
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/src/_helpers_/'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  maxConcurrency: 1,
  testTimeout: 9999999,
};
