var webpack = require('webpack')
var config = require('./webpack.config')
var path = require('path')

config.entry.push('webpack-hot-middleware/client')
config.devtool = 'inline-eval-cheap-source-map'
config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    '__DEV__': true,
    'process.env': JSON.stringify('development')
  })
].concat(config.plugins)

module.exports = config
