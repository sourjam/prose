var webpack = require('webpack');
var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');
var path = require('path');

module.exports = {
  entry: {
    home: './server/views/rootComponent.jsx',
    compose: './server/views/compose/composeComponent.jsx'
  },
  output: {
    path: path.join(__dirname, '/server/views/'),
    publicPath: '/',
    filename: '[name].entry.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['react', 'es2015', 'stage-0']
      }
    },
    {
      test: /\.css?$/,
      loader: "style!css"
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './client/src'
  },
  plugins: [
    new webpackUglifyJsPlugin({
      cacheFolder: path.resolve(__dirname, 'client/cached_uglify'),
      minimize: true
    })
  ]
};