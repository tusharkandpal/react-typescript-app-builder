const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "../src", "index.tsx"),
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "../dist"),
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                ["@babel/preset-typescript", { runtime: "automatic" }],
              ],
            },
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "React w/ Typescript App Builder",
      template: path.resolve(__dirname, "../src", "index.html"),
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        node_vendors: {
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          priority: 1,
        },
      },
    },
  },
};
