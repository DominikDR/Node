const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve("dist"),
        filename: "main.js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [{
            loader: "babel-loader",
            options: {
                "presets": ["@babel/preset-env", "@babel/preset-react"]
            }
          }]
        },
        {
            test: /\.css$/,
            use: [
              {
                loader: "style-loader"
              },
              {
                loader: "css-loader",
                options: {
                  modules: true,
                  localIdentName: "[name]_[local]_[hash:base64]",
                  sourceMap: true,
                  minimize: true
                }
              }
            ]
          }
      ]
    },
    plugins: [htmlPlugin]
  };