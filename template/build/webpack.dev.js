'use strict'
process.env.NODE_ENV = 'development'

const webpack = require('webpack')
const base = require('./webpack.base')
const _ = require('./utils')
{{#sasslint}}const SassLintPlugin = require('sasslint-webpack-plugin'){{/sasslint}}

base.devtool = 'eval-source-map'
base.plugins.push(
  {{#sasslint}}new SassLintPlugin({
    configFile: '.sass-lint.yml',
    glob: 'client/**/*.s?(a|c)ss',
    quiet: false,
    failOnWarning: false,
    failOnError: false,
    testing: false
  }),{{/sasslint}}
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
)

// push loader for css files
_.cssProcessors.forEach(processor => {
  let loaders
  if (processor.loader === '') {
    loaders = ['postcss-loader']
  } else {
    loaders = ['postcss-loader', processor.loader]
  }
  base.module.loaders.push(
    {
      test: processor.test,
      loaders: ['style-loader', _.cssLoader].concat(loaders)
    }
  )
})

module.exports = base
