const { compilerOptions } = require('./tsconfig.json');
const { pathsToModuleNameMapper } = require('ts-jest');

module.exports = {
  roots: ['<rootDir>/src', '<rootDir>/test'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: '(/test/.*|(\\.|/)(test|spec))\\.ts$',
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: '<rootDir>/',
    }),
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/test/_helpers_/'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  transformIgnorePatterns: [
    "node_modules/(?!(@gql-grammar))"
  ]
};
