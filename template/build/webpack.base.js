'use strict'
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('./config')

module.exports = {
  entry: {
    client: './client/index.js'
  },
  output: {
    path: path.join(__dirname, '../{{#electron}}app/{{/electron}}{{#unless electron}}dist/{{/unless}}assets'),
    filename: '[name].js',
    publicPath: './assets'
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.css', '.json'],
    alias: {
      root: path.join(__dirname, '../client'),
      components: path.join(__dirname, '../client/components')
    }
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loaders: ['vue']
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: [/node_modules/]
      },
      {
        test: /\.es6$/,
        loaders: ['babel']
      }
    ]
  },
  babel: config.babel,
  postcss: config.postcss,
  vue: {
    loaders: {},
    postcss: config.postcss
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: config.title,
      template: __dirname + '/index.html',
      filename: '../index.html'
    })
  ]{{#electron}},
  target: 'electron-renderer'
  {{/electron}}
}
