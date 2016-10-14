require('dotenv').config({silent: true})

const path = require('path');
const webpack = require('webpack');
const ENV = process.env.NODE_ENV;


module.exports = {
  entry: ( ENV == 'production' ?
    ['./src/']
    :
    [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/dev-server',
      './src/'
    ]
  ),
  output: {
    filename: './public/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: __dirname,
        exclude: /node_modules/
      }
    ]
  },
  plugins: ( ENV == 'production' ?
    [new webpack.optimize.UglifyJsPlugin({minimize: true})]
    :
    [new webpack.HotModuleReplacementPlugin()]
  ),
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true
  }
};
