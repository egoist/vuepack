'use strict'
process.env.NODE_ENV = 'development'

const webpack = require('webpack')
const base = require('./webpack.base')
const _ = require('./utils')
const FriendlyErrors = require('friendly-errors-webpack-plugin')

base.devtool = 'eval-source-map'
base.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new FriendlyErrors()
)

// push loader for .css file
base.module.loaders.push(
  {
    test: /\.css$/,
    loaders: ['style-loader', _.cssLoader, 'postcss-loader']
  }
)

module.exports = base
