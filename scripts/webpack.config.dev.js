var webpack = require('webpack')
var config = require('./webpack.config')
var path = require('path')

config.debug = true
config.watch = true
config.output.publicPath = '/'
config.output.path= process.cwd()
config.entry.push('webpack-hot-middleware/client')
config.devtool = 'cheap-module-eval-source-map'
config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    '__DEV__': true,
    'process.env': JSON.stringify('development')
  })
].concat(config.plugins)

module.exports = config
