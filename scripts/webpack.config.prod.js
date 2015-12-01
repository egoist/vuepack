var webpack = require('webpack')
var config = require('./webpack.config')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

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
  new HtmlWebpackPlugin({
    filename: './index.html',
    title: 'VuePack',
    template: __dirname + '/index.template'
  })
]

module.exports = config
