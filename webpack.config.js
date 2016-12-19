const webpack = require('webpack');
const path = require('path');
const libraryName = 'react-to-mdl';

// export config
module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    layout: './src/layout',
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
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      include: path.join(__dirname, 'src')
    }]
  }
};
