const path = require("path");
const { merge } = require("webpack-merge");
const webpack = require("webpack");

const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
// const HtmlWebpackTagsPlugin = require("html-webpack-tags-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");

const baseConfig = require("./webpack.base.config");
const packageName = require("../package.json").name;

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  output: {
    library: `${packageName}-[name]`,
    libraryTarget: "umd",
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ["You application is running here http://localhost:8001"],
      },
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     { from: "public/css", to: "./css/" },
    //     { from: "public", to: "./" },
    //   ],
    // }),
    // new HtmlWebpackTagsPlugin({
    //   tags: ["css/font-awesome.css"],
    //   append: false,
    // }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    port: 8001,
    compress: true,
    hot: true,
    openPage: "index.html",
    publicPath: "/", // 需要配置，否则找不到目录
    quiet: true,
    historyApiFallback: true,
    overlay: {
      warnings: true,
      errors: true,
    },
    // 解决跨域
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:8000",
      "Access-Control-Request-Method": "GET",
    },
  },
});
