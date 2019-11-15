const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//filename: "bundle.js", // can be any file name, this is the convention

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "dist/"
  },
  // module / rule system
  module: {
    // here we define each of our separate loaders, run on our project
    //for example babel loader
    //test: //have a regex expression
    //test: /\.js$/, files have extension of .js
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ]
};

// {
//   use: ["style-loader", "css-loader"],
//   test: /\.css$/
// }

module.exports = config;
