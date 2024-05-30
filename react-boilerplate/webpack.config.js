const path = require("path");

module.exports = {
    mode: "development",
    entry: "./lib/index.js",
    devtool: "source-map",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
};
