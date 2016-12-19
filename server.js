const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack-dev-server.config');

const options = {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
    hash: false,
    version: false,
    chunks: false,
    children: false
  }
};

console.log("Starting WebpackDevServer with HMR ... ")
new WebpackDevServer(webpack(config), options).listen(
  3000,
  '0.0.0.0',
  function (err, result) {
    if (err) {
      console.log(err);
    }
    console.log('Listening at 0.0.0.0:3000');
  }
);
