const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './' });

// Any custom config you want to pass to Jest
const customJestConfig = {
  roots: ['<rootDir>'],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/', '<rootDir>/__tests__'],
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  moduleNameMapper: {
    /* Handle CSS imports (with CSS modules)
    https://jestjs.io/docs/webpack#mocking-css-modules */
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/__tests__/mocks/styleMock.js',

    /* Handle image imports
    https://jestjs.io/docs/webpack#handling-static-assets */
    '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$': '<rootDir>/__tests__/mocks/fileMock.js',

    /* Handle compilerOptions.paths in ./tsconfig */
    '@src(.*)': '<rootDir>/src/$1',
    '@public(.*)': '<rootDir>/public/$1',
    '@config(.*)': '<rootDir>/config/$1',
    '@info(.*)': '<rootDir>/webpage_info/$1',
  },
  collectCoverageFrom: ['**/*.{js,ts}?(x)', '!**/*.d.ts', '!**/node_modules/**'],
  testMatch: ['**/__tests__/**/*.{js,ts}?(x)', '**/*.test.{js,ts}?(x)'],
  modulePaths: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};

// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async
module.exports = createJestConfig(customJestConfig);
