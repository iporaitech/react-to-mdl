const webpack = require('webpack');
const path = require('path');
const libraryName = 'rmdl';
const devtool = process.env.NODE_ENV == 'production' ?
  'source-map' : 'cheap-source-map';
const plugins = process.env.NODE_ENV == 'production' ?
  [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ] : null;

/** exports **/
module.exports = {
  devtool: devtool,
  entry: {
    layout: './src/layout',
    lib: './src/index'
  },
  plugins: plugins,
  externals: [
    'classnames',
    'material-design-lite',
    'react',
    'react-dom',
    'react-router'
  ],
  output: {
    path: __dirname,
    filename: '[name]/index.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: ['react', 'es2015', 'stage-0']
      }
    }]
  }
};
