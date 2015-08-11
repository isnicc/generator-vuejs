var webpack = require("webpack");
module.exports = {
  entry: {
  	app: ["./src/main.js"]
  },
  output: {
  	path: './build',
    filename: "bundle.min.js"
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: "vue-loader" },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
}