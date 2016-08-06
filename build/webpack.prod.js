'use strict'
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const config = require('./webpack.base')

config.output.filename = '[name].[chunkhash].js'
config.plugins.push(
  new ProgressBarPlugin(),
  new ExtractTextPlugin('styles.[contenthash].css'),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    comments: false
  })
)

config.module.loaders.push({
  test: /\.css$/,
  loader: ExtractTextPlugin.extract({
    loader: 'css-loader!postcss-loader',
    fallbackLoader: 'style-loader'
  })
})
config.vue.loaders.css = ExtractTextPlugin.extract({
  loader: 'css-loader',
  fallbackLoader: 'vue-style-loader'
})

module.exports = config