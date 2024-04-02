module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  setupFilesAfterEnv: ['./setup-tests.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/translations/**',
    '!src/**/*styles.ts',
    '!src/**/types.ts',
    '!src/**/testIds.ts',
    '!src/**/constants.ts',
  ],
  coverageReporters: ['lcov', 'text', 'html'],
};
