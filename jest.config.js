require('dotenv').config();
module.exports = {
    name: "video-media-player-web",
    verbose: false,
    testMatch: ["**/*.test.js"],
    testEnvironment:"node",
    collectCoverageFrom: ["src/**/*.js", "!**/node_modules/**"],
    coverageThreshold: {
      global: {
        statements: 98,
        branches: 60,
        lines: 98,
        functions: 100,
      },
    },
  };