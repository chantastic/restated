var path = require('path');

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "restated.js",
    library: "restated",
    libraryTarget: "umd",
	}
}
