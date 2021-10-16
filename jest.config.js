require('dotenv').config();
module.exports = {
    name: "video-media-player-web",
    verbose: false,
    testMatch: ["**/*.test.js"],
    testEnvironment:"node",
    collectCoverageFrom: ["src/**/*.js", "!**/node_modules/**"],
    coverageThreshold: {
      global: {
        statements: 99,
        branches: 71,
        lines: 98,
        functions: 100,
      },
    },
  };