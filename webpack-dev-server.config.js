const webpack = require('webpack');
const path = require('path');
const config = require('./webpack.config');
const pkg = require(path.resolve(__dirname, 'package.json'));
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// We need to pack all dev dependencies for dev server so don't define externals
config.externals = null;

// Adjust config.resolve.root to reconfigure config.entry
config.resolve = {
  root: [
    __dirname,
    path.resolve('./src')
  ]
}

// Entry is just an example bundle
config.entry = {
  example: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './examples'
  ]
};

// Set public path on config.output
config.output.publicPath = '/static/';

// Hot Dev plugins
config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new ExtractTextPlugin("example.css", {
    allChunks: true // put css of all chunks in app.css
  })
];

// Change the module.loaders to use hot stuff
config.module.loaders = [{
  test: /\.js$/,
  loaders: ['react-hot', 'babel'],
  include: path.join(__dirname, 'examples'),
  // src can't be hot reloaded because it's a dependencies of examples
  exclude: path.join(__dirname, 'src')
},{
  test: /\.js$/,
  loader: 'babel',
  include: path.join(__dirname, 'src')
},{
  test: /\.scss$/,
  // loaders: ['style', 'css', 'resolve-url', 'sass?sourceMap']
  loader: ExtractTextPlugin.extract(
    'style?sourceMap',
    [
      'css',
      'resolve-url',
      'sass?sourceMap'
    ]
  )
}];

// export config
module.exports = config;
