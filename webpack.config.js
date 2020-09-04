const HtmlWebpackPlugin = require("html-webpack-plugin");

const workDir = process.cwd();

module.exports = {
  target: "web",
  devtool: "source-map",
  entry: "./src/index",
  resolve: { extensions: [".ts", ".js"] },
  output: {
    path: `${workDir}/build`,
    filename: "app.[contenthash].js",
  },
  module: {
    rules: [{ test: /\.ts$/, use: "ts-loader" }],
  },
  plugins: [new HtmlWebpackPlugin({ template: "index.html" })],
};
