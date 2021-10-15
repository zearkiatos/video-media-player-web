require('dotenv').config();
module.exports = {
    name: "video-media-player-web",
    verbose: false,
    testMatch: ["**/*.test.js"],
    testEnvironment:"node",
    collectCoverageFrom: ["src/**/*.js", "!**/node_modules/**"],
    coverageThreshold: {
      global: {
        statements: 90,
        branches: 0,
        lines: 91,
        functions: 97,
      },
    },
  };