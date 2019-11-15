const path = require("path");
const createJestConfig = require("react-scripts/scripts/utils/createJestConfig");
const paths = require("react-scripts/config/paths.js");

const jestConfig = createJestConfig(
  relativePath => {
    if (relativePath.indexOf("config/jest") === 0) {
      return require.resolve(path.join("react-scripts", relativePath));
    }

    return relativePath;
  },
  path.resolve(paths.appSrc, ".."),
  false
);
jestConfig.testMatch = ["<rootDir>/src/storyshots.test.js"];
jestConfig.transformIgnorePatterns = [];

console.log(jestConfig);

module.exports = jestConfig;