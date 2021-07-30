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
    library: packageName,
    libraryTarget: "umd",
    publicPath: "/",
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ["You application is running here http://localhost:8002"],
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
  stats: false, // 清除多余日志
  devServer: {
    static: path.join(__dirname, "../dist"),
    port: 8002,
    compress: true,
    hot: true,
    open: ["index.html"],
    // openPage: "index.html", // webpack-dev-server4之后被移除，使用open统一配置
    // publicPath: "/", // webpack-dev-server4之后被移到了static中
    // quiet: true, // webpack-dev-server4之后去掉了quiet, 使用webpack中的stats模块
    historyApiFallback: true,
    client: {
      overlay: {
        warnings: true,
        errors: true,
      },
    },
    // 解决跨域
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:8000",
      "Access-Control-Request-Method": "GET",
    },
  },
});
