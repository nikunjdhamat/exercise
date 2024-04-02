module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  setupFilesAfterEnv: ['./setup-tests.js'],
  collectCoverage: true,
  coverageReporters: ['lcov', 'text'],
};
