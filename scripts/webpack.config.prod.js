var webpack = require('webpack')
var config = require('./webpack.config')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

config.devtool = 'source-map'
config.output.filename = 'bundle.[hash].js'
config.output.publicPath = './'
config.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    '__DEV__': false,
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  }),
  new ExtractTextPlugin('styles.[contenthash].css')
].concat(config.plugins)
config.vue.loaders = {
  css: ExtractTextPlugin.extract('style-loader', 'css-loader')
}

module.exports = config
