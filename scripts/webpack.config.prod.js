var webpack = require('webpack')
var config = require('./webpack.config')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var ProgressBarPlugin = require('progress-bar-webpack-plugin')

config.devtool = 'source-map'
config.output.filename = 'bundle.[hash].js'
config.output.publicPath = './assets/'
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
    },
    comments: false
  }),
  new ExtractTextPlugin('[name].[contenthash].css'),
  new ProgressBarPlugin()
].concat(config.plugins)
config.vue.loaders = {
  css: ExtractTextPlugin.extract(
    'vue-style-loader',
    'css-loader?sourceMap'
  )
}

module.exports = config
