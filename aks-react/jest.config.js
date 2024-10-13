module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest"
    },
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/setupTests.js"], // Ensure the correct path
    moduleFileExtensions: ["js", "jsx"],
    transformIgnorePatterns: ["<rootDir>/node_modules/"]
  };
  