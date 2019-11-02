const path = require("path")
const fiber = require("fibers")

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "./"),
  entry: "./src/app/main.ts",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        exclude: /node_modules|modules/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { importLoaders: 1 } },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules|src/,
        use: [
          { loader: "css-loader", options: { localsConvention: 'camelCase' } },
          { loader: "sass-loader" , options: {sassOptions: {fiber}}},
        ]
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: "html-loader"
      }
      /*{
        test: /\.jsx?$/,
        loader: "jsx-loader",
        exclude: /node_modules/
        // include: path.resolve(__dirname, 'app'),
      }*/
    ]
  }
};
