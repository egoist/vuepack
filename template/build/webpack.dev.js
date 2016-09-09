'use strict'
const webpack = require('webpack')
const config = require('./webpack.base')
const _ = require('./utils')

config.devtool = 'cheap-module-eval-source-map'
config.output.publicPath = '/assets/'
config.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
)

// push loader for .css file
config.module.loaders.push(
  {
    test: /\.css$/,
    loader: _.cssLoader
  }
)

module.exports = config
