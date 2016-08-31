'use strict'
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const postcss = [
  require('autoprefixer')(),
  require('precss')
]

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
    extensions: ['', '.js',{{#unless jsx}} '.vue',{{/unless}} '.css', '.json'],
    alias: {
      root: path.join(__dirname, '../client'),
      components: path.join(__dirname, '../client/components')
    }
  },
  module: {
    loaders: [{{#unless jsx}}
      {
        test: /\.vue$/,
        loaders: ['vue']
      },{{/unless}}
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
  browserlist: ['last 2 versions', 'ie > 8'],
  babel: {
    babelrc: false,
    presets: [
      ['es2015', {modules: false}],
      'stage-1'
    ]{{#jsx}},
    plugins: [
      'transform-vue-jsx'
    ]{{/jsx}}
  },
  postcss,{{#unless jsx}}
  vue: {
    loaders: {},
    postcss
  },{{/unless}}
  plugins: [
    new HtmlWebpackPlugin({
      title: '{{name}}',
      template: __dirname + '/index.html',
      filename: '../index.html'
    })
  ]{{#electron}},
  target: 'electron-renderer'
  {{/electron}}
}
