/**
 *  webpack configuration for react-to-mdl
 */
const webpack = require('webpack');
const path = require('path');
const libraryName = 'react-to-mdl';

// export config
module.exports = {
  // devtool: 'cheap-module-eval-source-map',
  devtool: process.env.NODE_ENV == 'production' ? 'source-map' : 'eval',
  entry: {
    button: './src/button',
    card: './src/card',
    dataTable: './src/dataTable',
    grid: './src/grid',
    layout: './src/layout',
    menu: './src/menu',
    spinner: './src/spinner',
    tabs: './src/tabs',
    textfield: './src/textfield',
    index: './src/index'
  },
  externals: [
    'classnames',
    'material-design-lite',
    'react',
    'react-dom',
    'react-router'
  ],
  output: {
    path: path.join(__dirname, 'lib'),
    filename: '[name].js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      include: path.join(__dirname, 'src'),
      options: {
        presets: [
          ["es2015", {"modules": false}],
          "stage-0",
          "react"
        ]
      }
    }]
  }
};
