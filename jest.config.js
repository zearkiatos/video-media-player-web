require('dotenv').config();
module.exports = {
    name: "video-media-player-web",
    verbose: false,
    testMatch: ["**/*.test.js"],
    testEnvironment:"node",
    collectCoverageFrom: ["src/**/*.js", "!**/node_modules/**"],
    coverageThreshold: {
      global: {
        statements: 100,
        branches: 100,
        lines: 100,
        functions: 100,
      },
    },
  };