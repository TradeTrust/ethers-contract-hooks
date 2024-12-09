/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
  // ...webpackConfig,
  entry: path.join(__dirname, "./app.tsx"),
  externals: {},
  output: {
    filename: "bundle.js"
  },
  devServer: {
    compress: true,
    port: 9001,
    static: {
      directory: path.join(__dirname, ".")
    },
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
