'use strict'
const exec = require('child_process').execSync
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const config = require('./webpack.base')
const pkg = require('../package')
const _ = require('./utils')

if (_.modes.electron) {
  // remove dist folder in electron mode
  exec('rm -rf app/assets/')
} else {
  // remove dist folder in web app mode
  exec('rm -rf dist/')
  // use source-map in web app mode
  config.devtool = 'source-map'
}

// a white list to add dependencies to vendor chunk
config.entry.vendor = [
  'vue',
  'vuex',
  'vue-router'
]
// use hash filename to support long-term caching
config.output.filename = '[name].[chunkhash:8].js'
// add webpack plugins
config.plugins.push(
  new ProgressBarPlugin(),
  new ExtractTextPlugin('styles.[contenthash:8].css'),
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
  }),
  // extract vendor chunks
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor.[chunkhash:8].js'
  })
)

// extrac css in standalone .css files
config.module.loaders.push({
  test: /\.css$/,
  loader: ExtractTextPlugin.extract({
    loader: _.cssLoader,
    fallbackLoader: 'style-loader'
  })
})

// extract css in single-file components
config.vue.loaders.css = ExtractTextPlugin.extract({
  loader: 'css-loader?-autoprefixer',
  fallbackLoader: 'vue-style-loader'
})

module.exports = config
