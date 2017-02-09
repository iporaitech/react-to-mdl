/**
 *  webpack-dev-server configuration for react-to-mdl
 */
const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname,
  // devtool: 'eval',
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    alias: {
      // The path you'd use to get components from this lib in another project.
      'react-to-mdl/lib': resolve('./src'),

      // The same as main in  package.json
      'react-to-mdl': resolve('./src/index.js')
    }
  },
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/examples/index.js'
  ],
  output: {
    filename: 'example.js',
    path: resolve(__dirname, 'dev'),
    publicPath: '/'
  },
  devServer: {
    hot: true,
    publicPath: '/',
    historyApiFallback: true,
    stats: {
      colors: true,
      hash: false,
      version: false,
      chunks: false,
      children: false
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: [
          ["es2015", {"modules": false}],
          "stage-0",
          "react"
        ],
        plugins: [
          "react-hot-loader/babel"
        ]
      }
    },{
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
          'resolve-url-loader',
          'sass-loader?sourceMap'
        ]
      })
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin({
      filename: 'example.css',
      allChunks: true // put css of all chunks in example.css
    })
  ],
};
