const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/web/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  corejs: 3,
                  useBuiltIns: "usage",
                },
              ],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "./src/web/index.html", to: "index.html" }],
    }),
  ],
  resolve: {
    extensions: [".js", ".ts"],
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "public"),
  },
};
