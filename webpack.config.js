const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");

module.exports = env => ({
  entry: {
    whacts: path.resolve(__dirname, "frontend/whacts.js")
  },
  output: {
    filename: env.buildHashes ? "[name].[hash].js" : "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "sourcemap",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  devServer: {
    port: 9091,
    disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  plugins: [new CleanWebpackPlugin(), new ManifestPlugin()]
});
