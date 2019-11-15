const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

//filename: "bundle.js", // can be any file name, this is the convention

const config = {
  entry: {
    bundle: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js"
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 5000
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 5000
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "initial",
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/]react(-dom)?[\\/]/,
          name: "react",
          enforce: true
        },
        lodash: {
          test: /[\\/]node_modules[\\/]lodash[\\/]/,
          name: "lodash",
          enforce: true
        },
        lodash: {
          test: /[\\/]node_modules[\\/]faker[\\/]/,
          name: "faker",
          enforce: true
        },
        redux: {
          test: /[\\/]node_modules[\\/]redux(-(form|thunk))?[\\/]/,
          name: "redux",
          enforce: true
        },
        commons: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "initial",
          name: "common",
          enforce: true,
          priority: -1
        }
      }
    }
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css"
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html"
    })
  ]
};

module.exports = config;
