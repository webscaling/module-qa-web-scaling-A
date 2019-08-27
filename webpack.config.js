const HtmlWebPackPlugin = require("html-webpack-plugin");
var path = require('path');
var SRC_DIR = path.join(__dirname, '\src');
var DIST_DIR = path.join(__dirname, '\dist');

module.exports = {
  entry: path.join(`${SRC_DIR}`, '\index.js'),
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      "/api": "http://localhost:8080"
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};