const path = require("path");
const { merge } = require("webpack-merge");
// eslint-disable-next-line import/extensions
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "weater-app.[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
});
