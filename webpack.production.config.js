const webpack = require('webpack');
const config = require('./webpack.config');

// devtool for production
// See https://webpack.github.io/docs/configuration.html#devtool
config.devtool = 'source-map';

// plugins for production
// See "For Webpack, you need to add this to plugins in your production config: ..."
// in https://facebook.github.io/react/docs/optimizing-performance.html#use-the-production-build
config.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin()
];


// export config
module.exports = config;
